package com.tinybeans.backend.evaluation.controller;

import com.tinybeans.backend.evaluation.data.entity.Item;
import com.tinybeans.backend.evaluation.data.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
@CrossOrigin(origins = "*")
public class ItemController {
    @Autowired
    private ItemService itemService;

    @PostMapping("/add")
    public String add(@RequestBody Item item){
        itemService.saveItem(item);
        return "New  Item added!";
    }

    @GetMapping("/getAll")
    public List<Item> getAllItens(){
        return  itemService.getAllItens();
    }


    @GetMapping("/test")
    @ResponseBody
    public String hello(){
        return "item works";
    }
}
