package com.tinybeans.backend.evaluation.controller;

import com.tinybeans.backend.evaluation.data.entity.Orders;
import com.tinybeans.backend.evaluation.data.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Value("${stripe.apikey}")
    String stripeKey;


    @GetMapping("/test")
    @ResponseBody
    public String hello(){
        return "StripeKey:" + stripeKey;
    }

    @PostMapping("/add")
    public String add(@RequestBody Orders order){
        orderService.saveOrder(order);
        return  "New  Order added!";
    }

    @GetMapping("/getAll")
    public List<Orders> getAllOrders(){
        return orderService.getAllOrders();
    }
}
