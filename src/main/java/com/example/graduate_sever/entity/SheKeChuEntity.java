package com.example.graduate_sever.entity;

import java.io.Serializable;

/*
* 社科处实体
* */

public class SheKeChuEntity implements Serializable{
    private static final long serialVersionUID=1L;

    private Integer id;
    private Integer status;
    private String finishtime;
    private String name;
    private String partment;
    private Integer badge;
    private byte[] metails;
    private String jietidengji;
    private String xiangmujibie;
    private String jianglijibie;
    private String jianglidengji;
    private String huojiangleibie;
    private String chengguotype;
    private String danwei;
    private Integer shenbao;
    private String type;

    public SheKeChuEntity(Integer status, String finishtime, String name, String partment, String jietidengji, String xiangmujibie, String danwei, String type) {
        this.status = status;
        this.finishtime = finishtime;
        this.name = name;
        this.partment = partment;
        this.jietidengji = jietidengji;
        this.xiangmujibie = xiangmujibie;
        this.danwei = danwei;
        this.type = type;
    }

    public SheKeChuEntity(Integer status, String finishtime, String name, String partment, String jianglijibie, String jianglidengji, String huojiangleibie, String chengguotype, String danwei, String type) {
        this.status = status;
        this.finishtime = finishtime;
        this.name = name;
        this.partment = partment;
        this.jianglijibie = jianglijibie;
        this.jianglidengji = jianglidengji;
        this.huojiangleibie = huojiangleibie;
        this.chengguotype = chengguotype;
        this.danwei = danwei;
        this.type = type;
    }

    public SheKeChuEntity(Integer status, String finishtime, String name, String partment, byte[] metails, String jietidengji, String xiangmujibie, String jianglijibie, String jianglidengji, String huojiangleibie, String chengguotype, String danwei, Integer shenbao, String type) {
        this.status = status;
        this.finishtime = finishtime;
        this.name = name;
        this.partment = partment;
        this.metails = metails;
        this.jietidengji = jietidengji;
        this.xiangmujibie = xiangmujibie;
        this.jianglijibie = jianglijibie;
        this.jianglidengji = jianglidengji;
        this.huojiangleibie = huojiangleibie;
        this.chengguotype = chengguotype;
        this.danwei = danwei;
        this.shenbao = shenbao;
        this.type = type;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPartment() {
        return partment;
    }

    public void setPartment(String partment) {
        this.partment = partment;
    }

    public Integer getBadge() {
        return badge;
    }

    public void setBadge(Integer badge) {
        this.badge = badge;
    }

    public byte[] getMetails() {
        return metails;
    }

    public void setMetails(byte[] metails) {
        this.metails = metails;
    }

    public String getJietidengji() {
        return jietidengji;
    }

    public void setJietidengji(String jietidengji) {
        this.jietidengji = jietidengji;
    }

    public String getXiangmujibie() {
        return xiangmujibie;
    }

    public void setXiangmujibie(String xiangmujibie) {
        this.xiangmujibie = xiangmujibie;
    }

    public String getJianglijibie() {
        return jianglijibie;
    }

    public void setJianglijibie(String jianglijibie) {
        this.jianglijibie = jianglijibie;
    }

    public String getJianglidengji() {
        return jianglidengji;
    }

    public void setJianglidengji(String jianglidengji) {
        this.jianglidengji = jianglidengji;
    }

    public String getHuojiangleibie() {
        return huojiangleibie;
    }

    public void setHuojiangleibie(String huojiangleibie) {
        this.huojiangleibie = huojiangleibie;
    }

    public String getChengguotype() {
        return chengguotype;
    }

    public void setChengguotype(String chengguotype) {
        this.chengguotype = chengguotype;
    }

    public String getDanwei() {
        return danwei;
    }

    public void setDanwei(String danwei) {
        this.danwei = danwei;
    }

    public Integer getShenbao() {
        return shenbao;
    }

    public void setShenbao(Integer shenbao) {
        this.shenbao = shenbao;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
