package com.tinybeans.backend.evaluation.data.service;

import com.tinybeans.backend.evaluation.data.entity.Orders;

import java.util.List;

public interface OrderService {
    public Orders saveOrder(Orders order);

    public List<Orders> getAllOrders();
}
