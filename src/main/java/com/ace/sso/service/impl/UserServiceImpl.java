package com.ace.sso.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ace.sso.entity.User;
import com.ace.sso.repo.UserRepository;
import com.ace.sso.rest.GeneralException;
import com.ace.sso.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Override
	public Boolean checkUsernameAvailability(String username) {
		return !userRepository.existsByUsername(username);
	}

	@Override
	public User getUserProfile(String username) {
		return userRepository.findByUsername(username)
				.orElseThrow(() -> new GeneralException("User with the username : " + username + " is not found"));
	}

	@Override
	public boolean existsByUsername(String username) {
		return userRepository.existsByUsername(username);
	}

	@Override
	public User save(User user) {
		return userRepository.save(user);
	}

}