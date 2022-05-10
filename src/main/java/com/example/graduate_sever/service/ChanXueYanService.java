package com.example.graduate_sever.service;

import com.example.graduate_sever.common.*;
import com.example.graduate_sever.common.DTO.DTO;
import com.example.graduate_sever.common.DTO.MyShenBaoDTO;
import com.example.graduate_sever.entity.ChanXueYanEntity;
import com.example.graduate_sever.model.Teacher;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;

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
}
