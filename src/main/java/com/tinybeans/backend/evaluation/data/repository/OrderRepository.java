package com.tinybeans.backend.evaluation.data.repository;

import com.tinybeans.backend.evaluation.data.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Orders,Long> {
}
