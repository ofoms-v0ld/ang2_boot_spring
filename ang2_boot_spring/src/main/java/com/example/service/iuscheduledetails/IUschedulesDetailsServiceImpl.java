package com.example.service.iuscheduledetails;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.domain.IScheduledetails;

@Service
@Transactional
public class IUschedulesDetailsServiceImpl implements IUschedulesDetailsService {
	
	@Autowired
	private IUscheduleDetailsRepository isscheduledetailsRepository;
	
	@Override
	public List<IScheduledetails> findAll() {
		return isscheduledetailsRepository.findAll();
	}
	
	@Override
	public IScheduledetails findOne(int id) {
		//List<IScheduledetails> al = new ArrayList<IScheduledetails>();
		//al.add(isscheduledetailsRepository.findOne(id));
		return isscheduledetailsRepository.findOne(id);
	}
}
