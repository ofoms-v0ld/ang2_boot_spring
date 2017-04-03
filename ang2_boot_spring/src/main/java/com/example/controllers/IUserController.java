package com.example.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.IUser;
import com.example.service.iuser.IUserService;

@RestController
@RequestMapping(value = "users")
public class IUserController {

	@Autowired
	private IUserService iuserService;
	
	@RequestMapping(value = "/")
	public List<IUser> getIUser() {
		return iuserService.findAll();
	}
	
	@RequestMapping(value = "/update/{id}")
	public void update(@RequestBody IUser body) {
		iuserService.saveOrUpdate(body);
	}
	
	@RequestMapping(value = "/delete/{id}")
	public void delete(@PathVariable int id) {
		iuserService.delete(id);
	}
	
	@RequestMapping(value = "/add")
	public List<IUser> add(@RequestBody IUser body) {
		body =iuserService.saveOrUpdate(body);
		List<IUser> i = new ArrayList<IUser>();
		i.add(body);
		return i;
	}
}
