package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.ISchedule;
import com.example.domain.IScheduledetails;
import com.example.service.iuschedule.IUschedulesService;
import com.example.service.iuscheduledetails.IUschedulesDetailsService;

@RestController
@RequestMapping(value = "schedules")
public class IUshelduleController {

	@Autowired
	private IUschedulesService iuschedulesService;
	@Autowired
	private IUschedulesDetailsService iuschedulesdetailsService;
	
	@RequestMapping(value = "/")
	public List<ISchedule> getIUser() {
		return iuschedulesService.findAll();
	}
	
	@RequestMapping(value = "/{id}/details")
	public IScheduledetails ischeduleDetails(@PathVariable int id) {
		return iuschedulesdetailsService.findOne(id);
	}
	
}
