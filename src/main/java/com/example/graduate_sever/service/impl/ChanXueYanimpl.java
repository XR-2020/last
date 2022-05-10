package com.example.graduate_sever.service.impl;

import com.example.graduate_sever.Dao.*;
import com.example.graduate_sever.common.*;
import com.example.graduate_sever.common.DTO.DTO;
import com.example.graduate_sever.common.DTO.MyShenBaoDTO;
import com.example.graduate_sever.entity.ChanXueYanEntity;
import com.example.graduate_sever.entity.ParticipationEntity;
import com.example.graduate_sever.model.*;
import com.example.graduate_sever.service.ChanXueYanService;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.http.NameValuePair;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service("ChanXueYanService")
public class ChanXueYanimpl implements ChanXueYanService {
    @Autowired
    private ChanXueYanMapper chanxueyanMapper;
    @Autowired
    private NewSystemMapper newSystemMapper;
    @Autowired
    private NewStatisticalMapper newStatisticalMapper;
    @Autowired
    private RongYuChengHaoMapper rongYuChengHaoMapper;

    @Override
    public DaiShenHeEditTableData selectProject(Integer id, String tablename) {
        Integer type=null;
        DaiShenHeEditTableData tableData=null;
        switch (tablename){
            case "honor":{
                type=14;
                tableData=new DaiShenHeEditTableData(rongYuChengHaoMapper.selectHonor(id),chanxueyanMapper.getBadge(id,type));
                break;
            }

            case "newsystem":{
                NewSyatemModel newSyatemModel=newStatisticalMapper.selectOneNewSystem(id,tablename);
                tableData=new DaiShenHeEditTableData(newSyatemModel,newStatisticalMapper.getNewBadge(id,newSyatemModel.getType()));
                break;
            }
            default:{
                SheKeChuModel sheKeChuModel=newStatisticalMapper.selectDaiShenHeSheKeChu(id,tablename);
                tableData=new DaiShenHeEditTableData(sheKeChuModel,newStatisticalMapper.getNewBadge(id,sheKeChuModel.getType()));
            }
        }
        return tableData;
    }

    @Override
    public Teacher login(Integer username, String password) {
        return chanxueyanMapper.login(username,password);
    }
    @Override
    public List<Object> getTeacherList() {
        return  chanxueyanMapper.getTeacherList();
    }

    @Override
    public List<DaiShenHeTableData> getDisData(MyShenBaoDTO dto) {
        Integer badge=dto.getBadge();
        Integer pageIndex=dto.getPageIndex();
        Integer pageSize=dto.getPageSize();
        List<List<MyShenBaoModel>> list=new ArrayList<>();
        List<MyShenBaoModel> myShenBaoModelList=new ArrayList<>();
        List<DaiShenHeTableData> tableData=new ArrayList<>();
        List<NewGetPageTotal> paramslist2=new ArrayList<>();
        paramslist2.add(new NewGetPageTotal("newsystem",""));
        paramslist2.add(new NewGetPageTotal("shekechu",""));
        paramslist2.add(new NewGetPageTotal("kejichu",""));
        paramslist2.add(new NewGetPageTotal("competition",""));
        paramslist2.add(new NewGetPageTotal("honor",""));
        for (NewGetPageTotal g:paramslist2) {
            myShenBaoModelList=chanxueyanMapper.getDisData(g.getTablename(),badge);
            for (MyShenBaoModel m:myShenBaoModelList) {
                tableData.add(new DaiShenHeTableData(m,null,g.getTablename()));
            }
        }
        return tableData;
    }

    @Override
    public long getPageTotal(Integer badge) {
        int pageTotal=0;
        List<NewGetPageTotal> paramslist2=new ArrayList<>();
        paramslist2.add(new NewGetPageTotal("newsystem",""));
        paramslist2.add(new NewGetPageTotal("shekechu",""));
        paramslist2.add(new NewGetPageTotal("kejichu",""));
        paramslist2.add(new NewGetPageTotal("competition",""));
        paramslist2.add(new NewGetPageTotal("honor",""));
        for (NewGetPageTotal g:paramslist2) {
            pageTotal+=chanxueyanMapper.getPageTotal(badge,g.getTablename());
        }
        return pageTotal;
    }

    @Override
    public List<DaiShenHeTableData> getDaiShenHeData(MyShenBaoDTO dto) {
        Integer badge=dto.getBadge();
        Integer pageIndex=dto.getPageIndex();
        Integer pageSize=dto.getPageSize();
        List<NewGetPageTotal> paramslist2=new ArrayList<>();
        paramslist2.add(new NewGetPageTotal("newsystem",""));
        paramslist2.add(new NewGetPageTotal("shekechu",""));
        paramslist2.add(new NewGetPageTotal("kejichu",""));
        paramslist2.add(new NewGetPageTotal("competition",""));
        paramslist2.add(new NewGetPageTotal("honor",""));
        List<MyShenBaoModel> myShenBaoModelList;
        List<DaiShenHeTableData> tableData=new ArrayList<>();
        for (NewGetPageTotal g:paramslist2) {
            myShenBaoModelList=chanxueyanMapper.getDaiShenHeData(g.getTablename(),badge);
            for (MyShenBaoModel m:myShenBaoModelList) {
                tableData.add(new DaiShenHeTableData(m,newSystemMapper.getNewSystemDetail(m.getId(),g.getType()),g.getTablename()));
            }
        }
        return tableData;
    }

    @Override
    public long getDaiShenHePageTotal(Integer badge) {
        int pageTotal=0;
        List<NewGetPageTotal> paramslist2=new ArrayList<>();
        paramslist2.add(new NewGetPageTotal("newsystem",""));
        paramslist2.add(new NewGetPageTotal("shekechu",""));
        paramslist2.add(new NewGetPageTotal("kejichu",""));
        paramslist2.add(new NewGetPageTotal("competition",""));
        paramslist2.add(new NewGetPageTotal("honor",""));
        for (NewGetPageTotal g:paramslist2) {
            pageTotal+=chanxueyanMapper.getDaiShenHePageTotal(badge,g.getTablename());
        }
        return pageTotal;
    }

    @Override
    public int deleteMyShenBao(Integer id, String tablename) {
        Integer type=0;
        String newtype = null;
        switch (tablename){
            case "chanxueyan":{
                type=1;
                break;
            }
            case "jiaoyanxiangmu":{
                type=2;
                break;
            }
            case "jiaoyanlunwen":{
                type=3;
                break;
            }
            case "pingguzhongxinxiangguan":{
                type=4;
                break;
            }
            case "jiaoyuguihuaxiangmu":{
                type=5;
                break;
            }
            case "zhuanli":{
                type=6;
                break;
            }
            case "hengxiangkeyanxiangmu":{
                type=7;
                break;
            }
            case "zongxiangkeyanxiangmu":{
                type=8;
                break;
            }
            case "zhuzuo":{
                type=9;
                break;
            }
            case "keyanlunwen":{
                type=10;
                break;
            }
            case "ruanjianzhuzuoquan":{
                type=11;
                break;
            }
            case "keyanxiangmujiexiang":{
                type=12;
                break;
            }
            case "competition":{
                type=13;
                break;
            }
            case "honor":{
                type=14;
                break;
            }
            case "newsystem":{
                newtype=newStatisticalMapper.selectOneNewSystem(id,tablename).getType();
                break;
            }
            case "shekechu": {
                newtype=newStatisticalMapper.selectDaiShenHeSheKeChu(id,tablename).getType();
                break;
            }
        }
        System.out.println(newtype+"***********");
        int ref=chanxueyanMapper.deleteMyShenBao(id,tablename);
        if(ref==1){
               if(tablename.equals("newsystem")||tablename.equals("shekechu")){
                   newSystemMapper.deletePeople(id,newtype);
               }else{
                   chanxueyanMapper.deleteDaiShenHePartipation(id,type);
               }
        }
        return ref;
    }

    @Override
    public List<DaiShenHeTableData> getHadPassData(MyShenBaoDTO dto) {
        Integer badge=dto.getBadge();
        Integer pageIndex=dto.getPageIndex();
        Integer pageSize=dto.getPageSize();
        List<MyShenBaoModel> myShenBaoModelList=new ArrayList<>();
        List<DaiShenHeTableData> tableData=new ArrayList<>();
        List<NewGetPageTotal> paramslist2=new ArrayList<>();
        paramslist2.add(new NewGetPageTotal("newsystem",""));
        paramslist2.add(new NewGetPageTotal("shekechu",""));
        paramslist2.add(new NewGetPageTotal("kejichu",""));
        paramslist2.add(new NewGetPageTotal("competition",""));
        paramslist2.add(new NewGetPageTotal("honor",""));
        for (NewGetPageTotal g:paramslist2) {
            myShenBaoModelList=chanxueyanMapper.getHadPassData(g.getTablename(),badge);
            for (MyShenBaoModel m:myShenBaoModelList) {
                tableData.add(new DaiShenHeTableData(m,null,g.getTablename()));
            }
        }
        return tableData;
    }

    @Override
    public long getHadPassPageTotal(Integer badge) {
        int pageTotal=0;
        List<NewGetPageTotal> paramslist2=new ArrayList<>();
        paramslist2.add(new NewGetPageTotal("newsystem",""));
        paramslist2.add(new NewGetPageTotal("shekechu",""));
        paramslist2.add(new NewGetPageTotal("kejichu",""));
        paramslist2.add(new NewGetPageTotal("competition",""));
        paramslist2.add(new NewGetPageTotal("honor",""));
        for (NewGetPageTotal g:paramslist2) {
            pageTotal+=chanxueyanMapper.getHadPassPageTotal(badge,g.getTablename());
        }
        return pageTotal;
    }
}
