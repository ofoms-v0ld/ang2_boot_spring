package com.example.service.iuschedule;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.domain.ISchedule;


public interface IUscheduleRepository extends JpaRepository<ISchedule,Integer> {

}
