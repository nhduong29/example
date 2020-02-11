package com.ace.sso.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ace.sso.entity.User;
import com.ace.sso.rest.GeneralException;
import com.ace.sso.service.UserService;

@Controller
public class UserController {
	
	private final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private UserService userService;
    
    
    @RequestMapping({"/", "/update"})
	public String welcome(Model model) {
    	try {
    		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    		String currentPrincipalName = authentication.getName();
    		User user = userService.getUserProfile(currentPrincipalName);
    		model.addAttribute("user", user);
		} catch (GeneralException e) {
			model.addAttribute("error", "Please login first");
			model.addAttribute("user", new User());
			logger.info(e.getMessage());
		}
		return "welcome";
	}

	@PostMapping(value = "/update")
 	public String update(@ModelAttribute("user") User userForm, BindingResult result, Model model) {
 		logger.debug("update() : {}", userForm);
 		if (result.hasErrors()) {
 			model.addAttribute("error", "Can't update");
 			 return "redirect:/welcome";
 		} else {
 			User user = userService.getUserProfile(userForm.getUsername());
 			user.setAddress(userForm.getAddress());
 			user.setMobilephone(userForm.getMobilephone());
 			user.setMobilemodel(userForm.getMobilemodel());
 			userService.save(user);
 			model.addAttribute("user", user);
 			model.addAttribute("message", "You have been updated successfully.");
 			return "welcome";
 		}

 	}
}
