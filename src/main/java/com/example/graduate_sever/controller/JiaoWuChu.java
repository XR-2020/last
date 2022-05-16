package com.example.graduate_sever.controller;

import com.example.graduate_sever.GraduateSeverApplication;
import com.example.graduate_sever.common.*;
import com.example.graduate_sever.common.DTO.DTO;
import com.example.graduate_sever.common.EditUO.EditNewSystemUO;
import com.example.graduate_sever.common.UO.JiaoWuChuUO;
import com.example.graduate_sever.service.NewSystemCrawlerService;
import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;
import org.apache.commons.io.FileUtils;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Set;

@RestController
public class JiaoWuChu {
    @Autowired
    private NewSystemCrawlerService newSystemCrawlerService;

    public static String saveImgToLocal(WebDriver driver) throws Exception {
        String code=null;
        driver.get("http://jx.zut.edu.cn/login.jsp");
        driver.manage().window().setSize(new Dimension(800, 600));
        WebElement element = driver.findElement(By.tagName("img"));
        //创建全屏截图
//        WrapsDriver wrapsDriver = (WrapsDriver) element;
        File screen = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(screen, new File("e:\\picture\\1.png"));
        try {
            BufferedImage image = ImageIO.read(screen);
            //创建一个矩形使用上面的高度，和宽度
            Point p = element.getLocation();
            //元素坐标
            BufferedImage img = image.getSubimage(p.getX(), p.getY(), element.getSize().getWidth(), element.getSize().getHeight());
            ImageIO.write(img, "png", screen);
            FileUtils.copyFile(screen, new File("E:\\picture\\" + "imgname.png"));
            code=executeTess4J("E:\\picture\\imgname.png");
            System.out.println(code.substring(0,4));
        } catch (IOException e) {
            e.printStackTrace();
        }
        WebElement username=driver.findElement(By.id("inputEmail3"));
        WebElement password=driver.findElement(By.id("inputPassword3"));
        WebElement rand=driver.findElement(By.name("rand"));
        username.sendKeys(WebConfig.getUsername());
        Thread.sleep(60);
        password.sendKeys(WebConfig.getPassword());
        Thread.sleep(60);
        rand.sendKeys(code.substring(0,4));
        driver.findElement(By.tagName("button")).click();
        WebDriver.Options manage = driver.manage();
        Set<Cookie> cookies = manage.getCookies();
        String webCookie=null;
        for(Cookie c : cookies){
            webCookie=c.getName()+"="+c.getValue();
        }
        return webCookie;
    }

    public static String executeTess4J(String imgUrl){
        String ocrResult = "";
        try{
            ITesseract instance = new Tesseract();
            //instance.setLanguage("chi_sim");
            File imgDir = new File(imgUrl);
            //long startTime = System.currentTimeMillis();
            ocrResult = instance.doOCR(imgDir);
        }catch (TesseractException e){
            e.printStackTrace();
        }
        return ocrResult;
    }

    @GetMapping("/NewSystemCrawlerWebSite")
    public String NewSystemCrawlerWebSite(String crawlertd) throws Exception {
        WebSiteDateConfig.WebSiteDateConfig();
        CloseableHttpClient httpClient = HttpClients.createDefault();
        String cookie = WebCookie.getCookie();
        //获取对应项目列表
        HttpPost list = new HttpPost("http://jx.zut.edu.cn/list.jsp");
        list.setHeader("Cookie", cookie);
        //获取小眼睛
        HttpPost view = new HttpPost("http://jx.zut.edu.cn/view.jsp");
        view.setHeader("Cookie", cookie);
        newSystemCrawlerService.newSystemCrawlerWebSite(crawlertd,httpClient,list,view);
        return "爬取完成";
    }


    @GetMapping("/getAllNewSystem")
    public ResVO getAllNewSystem(DTO chanXueYanDTO){
        return newSystemCrawlerService.getAllNewSystem(chanXueYanDTO);
    }

    @GetMapping("/getSearchNewSystem")
    public ResVO getSearchNewSystem(DTO chanXueYanDTO){
        return newSystemCrawlerService.getSearchNewSystem(chanXueYanDTO);}

    @GetMapping("/getNewSystemDetail")
    public JsonBean getNewSystemDetail(Integer id,String type){
        return newSystemCrawlerService.getNewSystemDetail(id,type);}

    @GetMapping("/getNewSystemBadge")
    public JsonBean getNewSystemBadge(Integer id,String type){
        return new JsonBean(200,"",newSystemCrawlerService.getNewSystemBadge(id,type));}

    @RequestMapping(value = "/editNewSystem", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public JsonBean editNewSystem(@RequestBody EditNewSystemUO uo) throws Exception {
        return  new JsonBean(200,"",newSystemCrawlerService.editNewSystem(uo.getId(),uo.getName(),uo.getFinishtime(),uo.getPartment(),uo.getPeople(),uo.getType()));
    }


    @RequestMapping(value = "/deleteNewSystem", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public JsonBean deleteNewSystem(@RequestParam(value = "ids") List<Integer> ids){
        for (Integer i:ids) {
            System.out.println(i);
        }
        return  newSystemCrawlerService.deleteNewSystem(ids);}

    @PostMapping("/deleteOneNewSystem")
    public  JsonBean deleteOneNewSystem(Integer id){return newSystemCrawlerService.deleteOneNewSystem(id);}

    @RequestMapping(value = "/insertJiaoWuChu", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public JsonBean insertJiaoWuChu(@RequestBody JiaoWuChuUO uo) throws Exception {
        return  newSystemCrawlerService.shenBaoSheKeChu(uo);
    }

    @GetMapping("/getJiaoWuChuMetails")
    public byte[] getJiaoWuChuMetails(Integer id){
        return newSystemCrawlerService.getJiaoWuChuMetails(id).getMetails();
    }

    @RequestMapping(value = "/passJiaoWuChu", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public int passJiaoWuChu(Integer id,Integer ispass){
        return newSystemCrawlerService.passJiaoWuChu(id,ispass);
    }
}
