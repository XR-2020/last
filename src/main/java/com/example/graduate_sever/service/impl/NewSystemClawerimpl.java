package com.example.graduate_sever.service.impl;

import com.example.graduate_sever.Dao.KeJiChuMapper;
import com.example.graduate_sever.Dao.NewSystemMapper;
import com.example.graduate_sever.Dao.SheKeChuMapper;
import com.example.graduate_sever.common.*;
import com.example.graduate_sever.common.DTO.DTO;
import com.example.graduate_sever.common.UO.JiaoWuChuUO;
import com.example.graduate_sever.controller.KeJiChu;
import com.example.graduate_sever.entity.*;
import com.example.graduate_sever.model.ChanXueYan;
import com.example.graduate_sever.model.NewSyatemModel;
import com.example.graduate_sever.service.NewSystemCrawlerService;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.*;

@Service("NewSystemCrawlerService")
public class NewSystemClawerimpl implements NewSystemCrawlerService {
    @Autowired
    private NewSystemMapper newSystemMapper;
    @Autowired
    private SheKeChuMapper sheKeChuMapper;
    @Autowired
    private KeJiChuMapper keJiChuMapper;


    @Override
    public void newSystemCrawlerWebSite(String td, CloseableHttpClient httpClient, HttpPost list, HttpPost view) {
        List<NameValuePair> listparams= new ArrayList<NameValuePair>();
        String date=WebCookie.getDate();
        int ref = 0;
        //设置请求地址的参数
        listparams.add(new BasicNameValuePair("tb",td));
        listparams.add(new BasicNameValuePair("pageNum","0"));
        listparams.add(new BasicNameValuePair("keyword",""));
        UrlEncodedFormEntity formEntity= null;
        try {
            formEntity = new UrlEncodedFormEntity(listparams,"utf-8");
            list.setEntity(formEntity);
            Document doc=Jsoup.parse(EntityUtils.toString(httpClient.execute(list).getEntity()));
            String[] ids=doc.getElementsByAttributeValue("fd","序号").text().split("\\s+");
            Elements name=doc.getElementsByAttributeValue("fd","名称");
            Elements book_name=doc.getElementsByAttributeValue("fd","教材名称");
            Elements keyan_name=doc.getElementsByAttributeValue("fd","成果名称");
            Elements zongxiang_name=doc.getElementsByAttributeValue("fd","项目名称");
            Elements partment=doc.getElementsByAttributeValue("fd","部门");
            Elements firstpeople=doc.getElementsByAttributeValue("fd","工号");
            Elements finishtime=doc.getElementsByAttributeValue("fd","获奖/获准/按期验收时间");
            Elements zongxiang_finishtime=doc.getElementsByAttributeValue("fd","结题时间");
            Elements jietidengji=doc.getElementsByAttributeValue("fd","结题等级");
            Elements xiangmujibie=doc.getElementsByAttributeValue("fd","项目级别");
            Elements jianglijibie=doc.getElementsByAttributeValue("fd","奖励级别");
            Elements jianglidengji=doc.getElementsByAttributeValue("fd","奖励等级");
            Elements huojiangleibie=doc.getElementsByAttributeValue("fd","获奖类别");
            Elements chengguotype=doc.getElementsByAttributeValue("fd","成果类别");
            Elements danwei=doc.getElementsByAttributeValue("fd","组织结题单位");
            Elements keyan_danwei=doc.getElementsByAttributeValue("fd","奖励单位");
            if(td.equals("社科处_7.科研获奖")){
                for(int i=0;i<ids.length;i++){
                   SheKeChuEntity sheKeChuEntity=new SheKeChuEntity(1,WebCookie.getDate(),keyan_name.get(i).text(),partment.get(i).text(),jianglijibie.get(i).text(),jianglidengji.get(i).text(),huojiangleibie.get(i).text(), chengguotype.get(i).text(),keyan_danwei.get(i).text(),td);
                    ref=sheKeChuMapper.insertSheKeChu(sheKeChuEntity);
                    if(ref!=0){
                        //设置小眼睛参数
                        List<NameValuePair> viewparams= new ArrayList<NameValuePair>();
                        viewparams.add(new BasicNameValuePair("tb",td));
                        viewparams.add(new BasicNameValuePair("id",ids[i]));
                        UrlEncodedFormEntity viewformEntity = new UrlEncodedFormEntity(viewparams,"utf-8");
                        view.setEntity(viewformEntity);
                        //获取小眼睛内容
                        String[] people=Jsoup.parse(EntityUtils.toString(httpClient.execute(view).getEntity())).getElementById("memTab").text().split("\\s+");
                        for(int j=5;j<people.length;j+=4){
                            newSystemMapper.insertNewSystemParticipation(new NewParticipationEntity(Integer.parseInt(people[j]),sheKeChuEntity.getId(),td));
                        }
                        //添加第一完成人
                        newSystemMapper.insertNewSystemParticipation(new NewParticipationEntity(Integer.parseInt(firstpeople.get(i).text()),sheKeChuEntity.getId(),td));
                    }else{
                        continue;
                    }
                }
            }
            else if(td.equals("社科处_3.纵向结题")){
                for(int i=0;i<ids.length;i++){
                    SheKeChuEntity sheKeChuEntity=new SheKeChuEntity(1,zongxiang_finishtime.get(i).text(),zongxiang_name.get(i).text(),partment.get(i).text(),jietidengji.get(i).text(),xiangmujibie.get(i).text(),danwei.get(i).text(),td);
                    ref=sheKeChuMapper.insertSheKeChu(sheKeChuEntity);
                    if(ref!=0){
                        //设置小眼睛参数
                        List<NameValuePair> viewparams= new ArrayList<NameValuePair>();
                        viewparams.add(new BasicNameValuePair("tb",td));
                        viewparams.add(new BasicNameValuePair("id",ids[i]));
                        UrlEncodedFormEntity viewformEntity = new UrlEncodedFormEntity(viewparams,"utf-8");
                        view.setEntity(viewformEntity);
                        //获取小眼睛内容
                        String[] people=Jsoup.parse(EntityUtils.toString(httpClient.execute(view).getEntity())).getElementById("memTab").text().split("\\s+");
                        for(int j=5;j<people.length;j+=4){
                            newSystemMapper.insertNewSystemParticipation(new NewParticipationEntity(Integer.parseInt(people[j]),sheKeChuEntity.getId(),td));
                        }
                        //添加第一完成人
                        newSystemMapper.insertNewSystemParticipation(new NewParticipationEntity(Integer.parseInt(firstpeople.get(i).text()),sheKeChuEntity.getId(),td));
                    }else{
                        continue;
                    }
                }
            }
            else if(td.equals("教务处-教材科_教材业绩点")){
                //设置除参与人外其他信息
                for(int i=0;i<ids.length;i++){
                    NewSystemEntity newSystemEntity;newSystemEntity=new NewSystemEntity(1,WebCookie.getDate(),"软件学院",book_name.get(i).text(),Integer.parseInt(firstpeople.get(i).text()),td);
                    ref=newSystemMapper.insertNewSystem(newSystemEntity);
                    if(ref!=0){
                        //设置小眼睛参数
                        List<NameValuePair> viewparams= new ArrayList<NameValuePair>();
                        viewparams.add(new BasicNameValuePair("tb",td));
                        viewparams.add(new BasicNameValuePair("id",ids[i]));
                        UrlEncodedFormEntity viewformEntity = new UrlEncodedFormEntity(viewparams,"utf-8");
                        view.setEntity(viewformEntity);
                        //获取小眼睛内容
                        String[] people=Jsoup.parse(EntityUtils.toString(httpClient.execute(view).getEntity())).getElementById("memTab").text().split("\\s+");
                        for(int j=5;j<people.length;j+=4){
                            newSystemMapper.insertNewSystemParticipation(new NewParticipationEntity(Integer.parseInt(people[j]),newSystemEntity.getId(),td));
                        }
                        //添加第一完成人
                        newSystemMapper.insertNewSystemParticipation(new NewParticipationEntity(Integer.parseInt(firstpeople.get(i).text()),newSystemEntity.getId(),td));
                    }else{
                        continue;
                    }
                }
            }
            else if(td.contains("科技处")){
                //设置除参与人外其他信息
                NewSystemEntity newSystemEntity;
                for(int i=0;i<ids.length;i++){
                    if((finishtime.size()==0&&partment.size()==0)||(partment.get(i).text().equals("")&&finishtime.get(i).text().equals(""))){
                        newSystemEntity=new NewSystemEntity(1,WebCookie.getDate(),"软件学院",name.get(i).text(),Integer.parseInt(firstpeople.get(i).text()),td);

                    }else if(partment.get(i).text().equals("")||partment.size()==0){
                        newSystemEntity=new NewSystemEntity(1,finishtime.get(i).text(),"软件学院",name.get(i).text(),Integer.parseInt(firstpeople.get(i).text()),td);

                    }else if(finishtime.get(i).text().equals("")||finishtime.size()==0){
                        newSystemEntity=new NewSystemEntity(1,WebCookie.getDate(),partment.get(i).text(),name.get(i).text(),Integer.parseInt(firstpeople.get(i).text()),td);

                    }else{
                        newSystemEntity=new NewSystemEntity(1,finishtime.get(i).text(),partment.get(i).text(),name.get(i).text(),Integer.parseInt(firstpeople.get(i).text()),td);
                    }
                    ref=keJiChuMapper.insertKeJiChu(newSystemEntity);
                    if(ref!=0){
                        //设置小眼睛参数
                        List<NameValuePair> viewparams= new ArrayList<NameValuePair>();
                        viewparams.add(new BasicNameValuePair("tb",td));
                        viewparams.add(new BasicNameValuePair("id",ids[i]));
                        UrlEncodedFormEntity viewformEntity = new UrlEncodedFormEntity(viewparams,"utf-8");
                        view.setEntity(viewformEntity);
                        //获取小眼睛内容
                        String[] people=Jsoup.parse(EntityUtils.toString(httpClient.execute(view).getEntity())).getElementById("memTab").text().split("\\s+");
                        for(int j=5;j<people.length;j+=4){
                            newSystemMapper.insertNewSystemParticipation(new NewParticipationEntity(Integer.parseInt(people[j]),newSystemEntity.getId(),td));
                        }
                        //添加第一完成人
                        newSystemMapper.insertNewSystemParticipation(new NewParticipationEntity(Integer.parseInt(firstpeople.get(i).text()),newSystemEntity.getId(),td));
                    }else{
                        continue;
                    }
                }
            }
            else{
                //设置除参与人外其他信息
                NewSystemEntity newSystemEntity;
                for(int i=0;i<ids.length;i++){
                    if((finishtime.size()==0&&partment.size()==0)||(partment.get(i).text().equals("")&&finishtime.get(i).text().equals(""))){
                        newSystemEntity=new NewSystemEntity(1,WebCookie.getDate(),"软件学院",name.get(i).text(),Integer.parseInt(firstpeople.get(i).text()),td);

                    }else if(partment.get(i).text().equals("")||partment.size()==0) {
                        newSystemEntity = new NewSystemEntity(1, finishtime.get(i).text(), "软件学院", name.get(i).text(), Integer.parseInt(firstpeople.get(i).text()), td);

                    }else if(finishtime.get(i).text().equals("")||finishtime.size()==0){
                            newSystemEntity=new NewSystemEntity(1,WebCookie.getDate(),partment.get(i).text(),name.get(i).text(),Integer.parseInt(firstpeople.get(i).text()),td);

                   }else{
                       newSystemEntity=new NewSystemEntity(1,finishtime.get(i).text(),partment.get(i).text(),name.get(i).text(),Integer.parseInt(firstpeople.get(i).text()),td);
                   }
                   ref=newSystemMapper.insertNewSystem(newSystemEntity);
                    if(ref!=0){
                        //设置小眼睛参数
                        List<NameValuePair> viewparams= new ArrayList<NameValuePair>();
                        viewparams.add(new BasicNameValuePair("tb",td));
                        viewparams.add(new BasicNameValuePair("id",ids[i]));
                        UrlEncodedFormEntity viewformEntity = new UrlEncodedFormEntity(viewparams,"utf-8");
                        view.setEntity(viewformEntity);
                        //获取小眼睛内容
                        String[] people=Jsoup.parse(EntityUtils.toString(httpClient.execute(view).getEntity())).getElementById("memTab").text().split("\\s+");
                        for(int j=5;j<people.length;j+=4){
                            newSystemMapper.insertNewSystemParticipation(new NewParticipationEntity(Integer.parseInt(people[j]),newSystemEntity.getId(),td));
                        }
                        //添加第一完成人
                        newSystemMapper.insertNewSystemParticipation(new NewParticipationEntity(Integer.parseInt(firstpeople.get(i).text()),newSystemEntity.getId(),td));
                    }else{
                        continue;
                    }
                }
            }


        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    @Override
    public ResVO getAllNewSystem(DTO chanXueYanDTO) {
        List<List<Object>>data=newSystemMapper.getAllNewSystem(chanXueYanDTO);
        List<Object> list=data.get(0);
        long total= (long)data.get(1).get(0);
        return new ResVO(list,total);
    }

    @Override
    public ResVO getSearchNewSystem(DTO chanXueYanDTO) {
        List<List<Object>>data=newSystemMapper.getSearchNewSystem(chanXueYanDTO);
        List<Object> list=data.get(0);
        long total= (long)data.get(1).get(0);
        return new ResVO(list,total);
    }

    @Override
    public JsonBean getNewSystemDetail(Integer id, String type) {
        return new JsonBean(200,"",newSystemMapper.getNewSystemDetail(id,type));
    }

    @Override
    public List<Integer> getNewSystemBadge(Integer id,String type) {
        List<People> people=newSystemMapper.getNewSystemDetail(id,type);
        List<Integer> badges=new ArrayList<>();
        for (People p:people) {
            badges.add(p.getBadge());
        }
        return badges;
    }

    @Override
    public int editNewSystem(Integer id, String name, String finishtime, String partment, Integer[] people,String type) {
        int ref=newSystemMapper.editNewSystem(id,name,finishtime,partment);
        if(ref==1){
            newSystemMapper.deletePeople(id,type);
            for (Integer p:people) {
                newSystemMapper.editNewSystemPeople(id,p,type);
            }
        }
        return ref;
    }

    @Override
    public JsonBean deleteNewSystem(List<Integer> ids) {
        for (int id:ids) {
            newSystemMapper.deleteOneNewSystem(id);
           // newSystemMapper.deletePeople(id,type);
        }
        return new JsonBean(200,"","");
    }

    @Override
    public JsonBean deleteOneNewSystem(Integer id) {
        newSystemMapper.deleteOneNewSystem(id);
     //   newSystemMapper.deletePeople(id,type);
        return new JsonBean(200,"","");
    }

    @Override
    public JsonBean shenBaoSheKeChu(JiaoWuChuUO uo) throws IOException {
        NewSystemEntity element;
        Integer[] people=uo.getPeople();
        Integer role=uo.getRole();
        //读取证明材料
        File file=new File(uo.getPath());
        ByteArrayOutputStream bos = new ByteArrayOutputStream((int) file.length());
        BufferedInputStream bin = null;
        try {
            bin = new BufferedInputStream(new FileInputStream(file));
            byte[] buffer = new byte[1024];
            while (bin.read(buffer) > 0) {
                bos.write(buffer);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            bin.close();
            bos.close();
        }
        if (role==4||role==1){
            element=new NewSystemEntity(1,uo.getFinishtime(),uo.getPartment(),uo.getName(),uo.getShenbao(), bos.toByteArray(),uo.getType());
        }else{
            element=new NewSystemEntity(0,uo.getFinishtime(),uo.getPartment(),uo.getName(),uo.getShenbao(), bos.toByteArray(),uo.getType());
        }
        int ref=newSystemMapper.shenBaoJiaoWuChu(element);
        //添加参与人
        if(ref!=0){
            for (Integer badge:people) {
                newSystemMapper.insertNewSystemParticipation(new NewParticipationEntity(badge,element.getId(),uo.getType()));
            }
        }
        return new JsonBean(200,"",ref);
    }

    @Override
    public List<TableData> waitingnewSystem(DTO dTO, String type) {
        Integer beginIndex=dTO.getPageIndex()-1;
        List<NewSyatemModel> list=newSystemMapper.waitingnewSystem(beginIndex,dTO.getPageSize(),type);
        List<TableData> tableData=new ArrayList<>();
        for (NewSyatemModel c:list) {
            tableData.add(new TableData(c,newSystemMapper.getNewSystemDetail(c.getId(),type)));
        }
        return tableData;
    }

    @Override
    public long waitingnewSystemPageToTal(String type) {
        return newSystemMapper.waitingnewSystemPageTotal(type);
    }

    @Override
    public Metails getJiaoWuChuMetails(Integer id) {
        return newSystemMapper.getJiaoWuChuMetails(id);
    }

    @Override
    public int passJiaoWuChu(Integer id, Integer pass) {
        return newSystemMapper.passJiaoWuChu(id,pass);
    }
}
