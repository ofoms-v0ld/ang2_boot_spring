package com.example.service.iuser;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.domain.IUser;


public interface IUserRepository extends JpaRepository<IUser,Integer> {

}
