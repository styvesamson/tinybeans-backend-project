package com.tinybeans.backend.evaluation.data.service;

import com.tinybeans.backend.evaluation.data.entity.Orders;
import com.tinybeans.backend.evaluation.data.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Orders saveOrder(Orders order) {
        return orderRepository.save(order);
    }

    @Override
    public List<Orders> getAllOrders() {
        return orderRepository.findAll();
    }
}
