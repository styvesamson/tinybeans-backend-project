package com.tinybeans.backend.evaluation.data.service;

import com.tinybeans.backend.evaluation.data.entity.Item;

import java.util.List;

public interface ItemService {
    public Item saveItem(Item item);
    public List<Item> getAllItens();
}
