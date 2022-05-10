package com.example.graduate_sever.common.UO;

import java.io.Serializable;
import java.util.Arrays;

/*
* 合并申报参数接收实体
* */
public class KeJiChuUO implements Serializable {
    private static final long serialVersionUID=1L;
    private String name;
    private String type;
    private String partment;
    private String finishtime;
    private Integer[] people;
    private Integer role;
    private Integer shenbao;
    private String path;

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Integer getShenbao() {
        return shenbao;
    }

    public void setShenbao(Integer shenbao) {
        this.shenbao = shenbao;
    }

    public Integer getRole() {
        return role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPartment() {
        return partment;
    }

    public void setPartment(String partment) {
        this.partment = partment;
    }

    public String getFinishtime() {
        return finishtime;
    }

    public void setFinishtime(String finishtime) {
        this.finishtime = finishtime;
    }

    public Integer[] getPeople() {
        return people;
    }

    public void setPeople(Integer[] people) {
        this.people = people;
    }


}
