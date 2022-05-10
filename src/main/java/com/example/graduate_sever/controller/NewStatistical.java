package com.example.graduate_sever.controller;


import com.example.graduate_sever.common.DTO.StatisticalDTO;
import com.example.graduate_sever.common.NewStatisticalRes;
import com.example.graduate_sever.common.TableData;
import com.example.graduate_sever.service.NewStatisticalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NewStatistical {
    @Autowired
    private NewStatisticalService service;

    @GetMapping("/NewSearchAll")
    public NewStatisticalRes NewSearchAll(StatisticalDTO dto){
        String date1= dto.getDate1();
        String date2=dto.getDate2();
        Integer badge=null;
        if(!dto.getKey().equals("")){
            badge=Integer.parseInt(dto.getKey());
        }
        NewStatisticalRes allData=new NewStatisticalRes(
                service.selectxiaowaishijianjidi(date1,date2,badge),
                service.selectshijianlixiang(date1,date2,badge),
                service.selectshijianjiexiang(date1,date2,badge),
                service.selectjiaocaiyejidian(date1,date2,badge),
                service.selectjiaoyanyeji(date1,date2,badge),
                service.selectjiaoyanlunwen(date1,date2,badge),
                service.selectyouxiubishe(date1,date2,badge),
                service.selectzongxiangjieti(date1,date2,badge),
                service.selectkeyanhuojiang(date1,date2,badge),
                service.selectzhuanli(date1,date2,badge),
                service.selecthengxiangkeyan(date1,date2,badge),
                service.selectzongxiangkeyan(date1,date2,badge),
                service.selectzhuzuo(date1,date2,badge),
                service.selectkeyanlunwen(date1,date2,badge),
                service.selectruanjianzhuzuoquan(date1,date2,badge),
                service.selectkeyanxiangmujiexiang(date1,date2,badge),
                service.selectxuekejingsai(date1,date2,badge),
                service.selectrongyuchenghao(date1,date2,badge)
        );
        return allData;
    }

    @GetMapping("/NewSearchByDetail")
    public List<TableData> NewSearchByDetail(StatisticalDTO dto){
        String date1= dto.getDate1();
        String date2=dto.getDate2();
        String value=dto.getValue();
        Integer badge=null;
        if(!dto.getKey().equals("")){
            badge=Integer.parseInt(dto.getKey());
        }
        List<TableData> tableData=null;
        switch (value){
            case "教务处-实践科_校外实践基地":{
                tableData=service.selectxiaowaishijianjidi(date1,date2,badge);
                break;
            }
            case "教务处-实践科_立项":{
                tableData=service.selectshijianlixiang(date1,date2,badge);
                break;
            }
            case "教务处-实践科_结项":{
                tableData=service.selectshijianjiexiang(date1,date2,badge);
                break;
            }
            case "教务处-教材科_教材业绩点":{
                tableData=service.selectjiaocaiyejidian(date1,date2,badge);
                break;
            }
            case "教务处-教研科_教研业绩":{
                tableData=service.selectjiaoyanyeji(date1,date2,badge);
                break;
            }
            case "教务处-教研科_教研论文":{
                tableData=service.selectjiaoyanlunwen(date1,date2,badge);
                break;
            }
            case "教务处-评估中心_2020届本科优秀毕业设计（论文）指导教师":{
                tableData=service.selectyouxiubishe(date1,date2,badge);
                break;
            }
            case "社科处_3.纵向结题":{
                tableData=service.selectzongxiangjieti(date1,date2,badge);
                break;
            }
            case "社科处_7.科研获奖":{
                tableData=service.selectkeyanhuojiang(date1,date2,badge);
                break;
            }
            case "科技处_专利":{
                tableData=service.selectzhuanli(date1,date2,badge);
                break;
            }
            case "科技处_横向项目":{
                tableData=service.selecthengxiangkeyan(date1,date2,badge);
                break;
            }
            case "科技处_纵向立项":{
                tableData=service.selectzongxiangkeyan(date1,date2,badge);
                break;
            }
            case "科技处_著作":{
                tableData=service.selectzhuzuo(date1,date2,badge);
                break;
            }
            case "科技处_论文":{
                tableData=service.selectkeyanlunwen(date1,date2,badge);
                break;
            }
            case "科技处_软件著作权":{
                tableData=service.selectruanjianzhuzuoquan(date1,date2,badge);
                break;
            }
            case "科技处_项目结项":{
                tableData=service.selectkeyanxiangmujiexiang(date1,date2,badge);
                break;
            }
            case "学科竞赛":{
                tableData=service.selectxuekejingsai(date1,date2,badge);
                break;
            }
            case "荣誉称号":{
                tableData=service.selectrongyuchenghao(date1,date2,badge);
                break;
            }
        }
        return tableData;
    }


}
