package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.IUser;
import com.example.service.iuser.IUserService;

@RestController
@RequestMapping(value = "users")
/*books_module/books/subone/api/books*/
public class IUserController {

	@Autowired
	private IUserService iuserService;
	
	@RequestMapping(value = "/")
	public List<IUser> getIUser() {
		return iuserService.findAll();
	}
}
