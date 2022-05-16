package com.example.graduate_sever.Dao;
import com.example.graduate_sever.model.MyShenBaoModel;
import com.example.graduate_sever.model.Teacher;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ChanXueYanMapper {

    List<Object> getTeacherList();
    List<Integer> getBadge(Integer id,Integer type);
    List<MyShenBaoModel> getDisData(String tablename,Integer badge);
    long getPageTotal(Integer badge,String tablename);
    List<MyShenBaoModel> getDaiShenHeData(String tablename,Integer badge);
    long getDaiShenHePageTotal(Integer badge,String tablename);
    List<MyShenBaoModel> getHadPassData(String tablename,Integer badge);
    long getHadPassPageTotal(Integer badge,String tablename);
    int deleteMyShenBao(Integer id, String tablename);
    int deleteDaiShenHePartipation(Integer id, Integer type);
    void deletePeople(Integer id, Integer type);


    Teacher login(Integer username, String password);

    int addteacher(String name, Integer badge, Integer password, Integer role);
}
