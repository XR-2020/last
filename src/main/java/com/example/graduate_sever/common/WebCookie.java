package com.example.graduate_sever.common;

import java.util.ArrayList;
import java.util.List;

public class WebCookie {
    public static String cookie="JSESSIONID=CC6570BA47AAB3AFB51F270D9A1D8FA2";
    public static String date="2021";

    public static String getDate() {
        return date;
    }

    public static void setDate(String date) {
        WebCookie.date = date;
    }

    public static String getCookie() {
        return cookie;
    }

    public static void setCookie(String cookie) {
        WebCookie.cookie = cookie;
    }
}
