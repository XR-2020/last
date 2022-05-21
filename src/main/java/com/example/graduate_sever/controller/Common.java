package com.example.graduate_sever.controller;


import com.example.graduate_sever.common.*;
import com.example.graduate_sever.common.UO.JiaoWuChuUO;
import com.example.graduate_sever.model.Teacher;
import com.example.graduate_sever.service.ChanXueYanService;
import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;
import java.util.Set;
import java.util.UUID;

@RestController
public class Common {
    @Autowired
    private ChanXueYanService chanXueYanService;

    @GetMapping(value = "/teacherAdd")
    public int teacherAdd(String badge, String name,Integer role) throws Exception {
        int ref=chanXueYanService.addteacher(name,Integer.parseInt(badge),role);
        return  ref;
    }

    @GetMapping("/getTeacherList")
    public List<Object> getTeacherList(){
        return chanXueYanService.getTeacherList();
    }

    @GetMapping("/selectProject")
    public JsonBean selectProject(Integer id,String tablename){
        return new JsonBean(200,"",chanXueYanService.selectProject(id,tablename));}
    @GetMapping("/login")
    public JsonBean login(String username,String password) throws Exception {

        Teacher teacher=chanXueYanService.login(Integer.parseInt(username),password);
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
