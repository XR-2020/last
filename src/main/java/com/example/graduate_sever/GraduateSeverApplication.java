package com.example.graduate_sever;

import com.example.graduate_sever.common.WebConfig;
import com.example.graduate_sever.common.WebCookie;
import com.example.graduate_sever.common.WebSiteDateConfig;
import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.internal.WrapsDriver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.Set;

@SpringBootApplication
public class GraduateSeverApplication {


    public static void main(String[] args) throws Exception {
        SpringApplication.run(GraduateSeverApplication.class, args);

    }

}
