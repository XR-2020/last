package com.example.graduate_sever.entity;

import java.io.Serializable;

/*
* 教研项目实体
* */

public class JiaoYanXiangMuEntity implements Serializable {
    private static final long serialVersionUID=1L;

    private Integer status;
    private String finishtime;
    private String lianghua;
    private String wenhao;
    private String partment;
    private String name;
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

    public JiaoYanXiangMuEntity(Integer status, String finishtime, String lianghua, String wenhao, String partment, String name, Integer badge) {
        this.status = status;
        this.finishtime = finishtime;
        this.lianghua = lianghua;
        this.wenhao = wenhao;
        this.partment = partment;
        this.name = name;
        this.badge = badge;
    }

    public JiaoYanXiangMuEntity(Integer status, String finishtime, String lianghua, String wenhao, String partment, String name, Integer badge, byte[] metails) {
        this.status = status;
        this.finishtime = finishtime;
        this.lianghua = lianghua;
        this.wenhao = wenhao;
        this.partment = partment;
        this.name = name;
        this.badge = badge;
        this.metails = metails;
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

    public String getLianghua() {
        return lianghua;
    }

    public void setLianghua(String lianghua) {
        this.lianghua = lianghua;
    }

    public String getWenhao() {
        return wenhao;
    }

    public void setWenhao(String wenhao) {
        this.wenhao = wenhao;
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
