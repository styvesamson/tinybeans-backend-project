package com.tinybeans.backend.evaluation.data.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

/**
 * @author danrodrigues
 * Date: 13/5/22
 */
@Entity @Data @ToString
@EqualsAndHashCode(callSuper = true)
public class Item extends BaseEntity{

    private String name, description, photoUrl;

    private Double price;

    @ManyToMany(mappedBy = "items")
    private List<Orders> orders;

    public Item() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public List<Orders> getOrders() {
        return orders;
    }

    public void setOrders(List<Orders> orders) {
        this.orders = orders;
    }
}

