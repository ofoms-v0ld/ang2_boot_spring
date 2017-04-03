package com.example.service.iuscheduledetails;

import java.util.List;

import com.example.domain.IScheduledetails;

public interface IUschedulesDetailsService {
	
	public List<IScheduledetails> findAll();
	//public List<IScheduledetails> findOne(int id);
	public IScheduledetails findOne(int id);
}
