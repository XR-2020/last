package com.example.graduate_sever.controller;


import com.example.graduate_sever.common.*;
import com.example.graduate_sever.model.Teacher;
import com.example.graduate_sever.service.ChanXueYanService;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
public class Common {
    @Autowired
    private ChanXueYanService chanXueYanService;

    @GetMapping("/getTeacherList")
    public List<Object> getTeacherList(){
        return chanXueYanService.getTeacherList();
    }

    @GetMapping("/selectProject")
    public JsonBean selectProject(Integer id,String tablename){
        return new JsonBean(200,"",chanXueYanService.selectProject(id,tablename));}
    @GetMapping("/login")
    public JsonBean login(String username,String password){
        Teacher teacher=chanXueYanService.login(Integer.parseInt(username),password);
        if (teacher!=null){
            WebSiteDateConfig.WebSiteDateConfig();
            System.out.println(WebCookie.getDate());
        }
        return new JsonBean(200,"",teacher);}

    @RequestMapping(value = "/HeBingMetials")
    public String HeBingMetials(@RequestParam("file") MultipartFile file) throws IOException {
        System.out.println(file.getBytes().length);
        // 将文件保存在服务器目录中
        // 新生成的文件名称
        String uuid = UUID.randomUUID().toString();
        // 得到上传文件后缀
        String originalName = file.getOriginalFilename();
        String ext = "." + FilenameUtils.getExtension(originalName);
        // 新生成的文件名称
        String fileName = uuid + ext;
        String filepath="E:\\graduate_sever\\metails\\"+fileName;
        // 得到新的文件File对象
        File targetFile = new File(filepath);
        // 开始复制文件
        FileUtils.writeByteArrayToFile(targetFile, file.getBytes());
        return filepath;
    }

}
