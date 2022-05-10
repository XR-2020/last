package com.example.graduate_sever.Dao;

import com.example.graduate_sever.common.DTO.DTO;
import com.example.graduate_sever.common.DTO.SheKeDTO;
import com.example.graduate_sever.common.EditUO.SheKeChuEditUO;
import com.example.graduate_sever.common.Metails;
import com.example.graduate_sever.common.People;
import com.example.graduate_sever.entity.SheKeChuEntity;
import com.example.graduate_sever.model.SheKeChuModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SheKeChuMapper {

    List<List<Object>> getAllKeYanHuoJiang(SheKeDTO chanXueYanDTO);

    List<List<Object>> getSearchKeYanHuoJiang(SheKeDTO chanXueYanDTO);

    void deleteOneKeYanHuoJiang(int id,String type);

    List<People> getKeYanHuoJiangDetail(Integer id, String type);
    int insertSheKeChu(SheKeChuEntity entity);
    void deleteAllPeople(Integer id,String type);
    int shenBaoSheKeChu(SheKeChuEntity entity);
    int editSheKeChu(SheKeChuEditUO uo);

    List<SheKeChuModel> waitingSheKeChu(Integer beginIndex,Integer pageSize,String type);

    long waitingSheKeChuPageToTal(String type);

    Metails getSheKeChuMetails(Integer id);

    int passSheKeChuChu(Integer id, Integer pass);
}
