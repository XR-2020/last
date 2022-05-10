package com.example.graduate_sever.entity;

import java.io.Serializable;

/*
* 教育规划项目实体
* */

public class JiaoYuGuiHuaXiangMuEntity implements Serializable {
    private static final long serialVersionUID=1L;

    private Integer status;
    private String finishtime;
    private String partment;
    private String name;
    private String grade;
    private String level;
    private String danwei;
    private Integer id;
    private Integer badge;
    private byte[] metails;

    public byte[] getMetails() {
        return metails;
    }

    public void setMetails(byte[] metails) {
        this.metails = metails;
    }

    public Integer getBadge() {
        return badge;
    }

    public void setBadge(Integer badge) {
        this.badge = badge;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public JiaoYuGuiHuaXiangMuEntity(Integer status, String finishtime, String partment, String name, String grade, String level, String danwei, Integer badge) {
        this.status = status;
        this.finishtime = finishtime;
        this.partment = partment;
        this.name = name;
        this.grade = grade;
        this.level = level;
        this.danwei = danwei;
        this.badge = badge;
    }

    public JiaoYuGuiHuaXiangMuEntity(Integer status, String finishtime, String partment, String name, String grade, String level, String danwei, Integer badge, byte[] metails) {
        this.status = status;
        this.finishtime = finishtime;
        this.partment = partment;
        this.name = name;
        this.grade = grade;
        this.level = level;
        this.danwei = danwei;
        this.badge = badge;
        this.metails = metails;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getDanwei() {
        return danwei;
    }

    public void setDanwei(String danwei) {
        this.danwei = danwei;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getFinishtime() {
        return finishtime;
    }

    public void setFinishtime(String finishtime) {
        this.finishtime = finishtime;
    }

    public String getPartment() {
        return partment;
    }

    public void setPartment(String partment) {
        this.partment = partment;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
