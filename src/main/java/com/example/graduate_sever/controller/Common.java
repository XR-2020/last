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

        //读取网站爬取时的用户名和密码配置文件
        Properties properties = new Properties();
        ClassPathResource classpathResource = new ClassPathResource("crawler.properties");//该路径是相对于src目录的，即classpath路径
        try {
            InputStream fileInputStream = classpathResource.getInputStream();
            properties.load(fileInputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
        String user_name = properties.getProperty("username");
        String pass_word = properties.getProperty("password");
        WebConfig.setPassword(pass_word);
        WebConfig.setUsername(user_name);
        System.getProperties().setProperty("webdriver.chrome.driver", "C:\\Users\\Administrator\\.cache\\selenium\\chromedriver\\win32\\99.0.4844.51\\chromedriver.exe");
//            ChromeOptions options = new ChromeOptions();
//            options.addArguments("--headless");
//            WebDriver driver=new ChromeDriver(options);
        WebDriver driver=new ChromeDriver();
        WebCookie.setCookie(saveImgToLocal(driver));

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

        System.out.println(webCookie);
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
}
