package com.example.graduate_sever.model;

import java.io.Serializable;

/*
* 参与人表实体
* */
public class Paticipation implements Serializable {
    private static final long serialVersionUID=1L;


    private Integer id;
    private Integer badge;
    private Integer ach_id;
    private Integer type;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBadge() {
        return badge;
    }

    public void setBadge(Integer badge) {
        this.badge = badge;
    }

    public Integer getAch_id() {
        return ach_id;
    }

    public void setAch_id(Integer ach_id) {
        this.ach_id = ach_id;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}
