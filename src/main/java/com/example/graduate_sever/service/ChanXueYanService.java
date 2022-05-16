package com.example.graduate_sever.service;

import com.example.graduate_sever.common.*;
import com.example.graduate_sever.common.DTO.MyShenBaoDTO;
import com.example.graduate_sever.model.Teacher;

import java.util.List;

public interface  ChanXueYanService {
     List<Object> getTeacherList();
    List<DaiShenHeTableData>getDisData(MyShenBaoDTO dto);
    List<DaiShenHeTableData>getHadPassData(MyShenBaoDTO dto);
    List<DaiShenHeTableData>getDaiShenHeData(MyShenBaoDTO dto);
    long getPageTotal(Integer badge);
    long getHadPassPageTotal(Integer badge);
    long getDaiShenHePageTotal(Integer badge);
    int deleteMyShenBao(Integer id, String tablename);
    DaiShenHeEditTableData selectProject(Integer id, String tablename);
    Teacher login(Integer username, String password);

    int addteacher(String name, Integer badge, Integer role);
}
