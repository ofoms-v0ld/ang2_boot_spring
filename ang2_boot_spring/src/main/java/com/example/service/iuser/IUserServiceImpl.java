package com.example.service.iuser;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.domain.IUser;

@Service
@Transactional
public class IUserServiceImpl implements IUserService {
	
	@Autowired
	private IUserRepository iuserRepository;
	
	public List<IUser> findAll() {
		return iuserRepository.findAll();
	}

	@Override
	public IUser saveOrUpdate(IUser iuser) {
		IUser i =	iuserRepository.saveAndFlush(iuser);
		return i;
	}
	
	@Override
	public void delete(int id) {
		iuserRepository.delete(id);
	}

}
