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
import org.springframework.web.client.RestTemplate;

import com.ace.sso.entity.User;
import com.ace.sso.rest.GeneralException;
import com.ace.sso.rest.reponse.DuongResponse;
import com.ace.sso.rest.request.FindUserRequest;
import com.ace.sso.service.UserService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
public class UserController {

	private final Logger logger = LoggerFactory.getLogger(UserController.class);
	@Autowired
	private UserService userService;

	@RequestMapping({ "/", "/update" })
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
	
	@RequestMapping("/ui")
	public String test() {
		return "ui";
	}

	@PostMapping(value = "/update")
	public String update(@ModelAttribute("user") User userForm, BindingResult result, Model model) {
		logger.debug("update() : {}", userForm);
		if (result.hasErrors()) {
			model.addAttribute("error", "Can't update");
			return "redirect:/welcome";
		} else {
			User user = userService.getUserProfile(userForm.getUsername());
			user.setMobilephone(userForm.getMobilephone());
			user.setMobilemodel(userForm.getMobilemodel());
			userService.save(user);
			model.addAttribute("user", user);
			model.addAttribute("message", "You have been updated successfully.");

			// Call Rest Consume
			final String uri = "http://localhost:8080/spring-boot-web-jsp-1.0/test";
			FindUserRequest findUserRequest = new FindUserRequest(true, "", "userid1234", "storeId321", "segmentId789",
					"1,2,3");
			RestTemplate restTemplate = new RestTemplate();
			DuongResponse data = restTemplate.postForObject(uri, findUserRequest, DuongResponse.class);

			Gson gsonBuilderModifyUser = new GsonBuilder().create();
			String json = gsonBuilderModifyUser.toJson(data);
			System.out.println(json);
			//

			return "welcome";
		}

	}
}
