package com.example.graduate_sever.Dao;

import com.example.graduate_sever.common.DTO.DTO;
import com.example.graduate_sever.common.DTO.MyShenBaoDTO;
import com.example.graduate_sever.common.Metails;
import com.example.graduate_sever.common.People;
import com.example.graduate_sever.common.TableData;
import com.example.graduate_sever.entity.HeBingEntity;
import com.example.graduate_sever.entity.HonorEntity;
import com.example.graduate_sever.entity.ParticipationEntity;
import com.example.graduate_sever.model.ChanXueYan;
import com.example.graduate_sever.model.Honor;
import com.example.graduate_sever.model.MyShenBaoModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface RongYuChengHaoMapper {

    List<Honor> getSearchRongYu(DTO dTO);

    void deleteOneRongYu(int id);

    List<People> getRongYuDetail(Integer id,String type);

    int insertRongYuChengHao(HonorEntity entity);
    int shenBaoRongYuChengHao(HonorEntity entity);
    Metails RongYuChengHaoMetails(Integer id);
    List<Honor> selectRongYuChengHao(String date1, String date2,String name);

    List<Honor> waitingrongyuchenghao(DTO dTO);

    int passRongYuChengHao(Integer id, Integer ispass);

    List<Honor> selectAllRongYuChengHao(DTO dTO);
    long selectAllRongYuChengHaoPageTotal();

    int editHonor(Integer id, String name, String finishtime, String partment, String teacher,String level);

    long getSearchRongYuPageTotal();

    Honor selectHonor(Integer id);

    long waitingrongyuchenghaoPageToTal();
}
