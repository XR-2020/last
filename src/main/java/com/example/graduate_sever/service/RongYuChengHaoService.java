package com.example.graduate_sever.service;

import com.example.graduate_sever.common.DTO.DTO;
import com.example.graduate_sever.common.DTO.MyShenBaoDTO;
import com.example.graduate_sever.common.JsonBean;
import com.example.graduate_sever.common.Metails;
import com.example.graduate_sever.common.ResVO;
import com.example.graduate_sever.common.TableData;
import com.example.graduate_sever.entity.HonorEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface RongYuChengHaoService {
     ResVO getAllRongYu(DTO jiaoYanXiangMuDTO);
     ResVO getSearchRongYu(DTO jiaoYanXiangMuDTO);
     JsonBean deleteRongYu(List<Integer> ids);
     JsonBean deleteOneRongYu(Integer id);
     JsonBean shenbaoRongYuChengHao(HonorEntity entity);
     Metails getRongYuChengHaoMetails(Integer id);
     List<TableData>  waitingrongyuchenghao(DTO dTO);

    int passRongYuChengHao(Integer id, Integer ispass);

    int editHonor(Integer id, String name, String partment, String finishtime, String teacher, String level);

    JsonBean honorImport(MultipartFile file, String name) throws IOException;

    long waitingrongyuchenghaoPageToTal();
}
