package com.ace.sso.service;

import com.ace.sso.entity.User;

public interface UserService {
	Boolean checkUsernameAvailability(String username);

	User getUserProfile(String username);

	boolean existsByUsername(String username);

	User save(User user);
}