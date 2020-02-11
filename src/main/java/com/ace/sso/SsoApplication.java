package com.ace.sso;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.util.Strings;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ace.sso.rest.request.Attribute;
import com.ace.sso.rest.request.FindUserRequest;
import com.ace.sso.rest.request.ModifyUserRequest;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@SpringBootApplication
public class SsoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SsoApplication.class, args);

		/*
		 * { "dynamicAgentSession" : "true", "sessionToken" : "", "userId" : "demouser",
		 * "storeId" : "", "segmentId" : "", "template" : "1,3,7" }
		 */
		FindUserRequest findUserRequest = new FindUserRequest();
		findUserRequest.setDynamicAgentSession(true);
		findUserRequest.setSessionToken(Strings.EMPTY);
		findUserRequest.setUserId("demouser");
		findUserRequest.setStoreId(Strings.EMPTY);
		findUserRequest.setTemplate("1,3,7");

		Gson gsonBuilderFindUser = new GsonBuilder().create();
		String jsonFromPojo = gsonBuilderFindUser.toJson(findUserRequest);
		System.out.println(jsonFromPojo);

		/*
		 * { "dynamicAgentSession" : "true", "sessionToken" : "", "userUUID_eq" :
		 * "ActiveDirectory:30B10AEEA8ADCA46A79CE30AD6DDDD5E", "storedId_eq" : "",
		 * "realActorId" : "wsagent", "attributes" : { "name" : "MobileNo", "encrypted"
		 * : false, "type" : "Integer", "value" : "0193336666" } }
		 */
		ModifyUserRequest modifyUserRequest = new ModifyUserRequest();
		modifyUserRequest.setDynamicAgentSession(true);
		modifyUserRequest.setSessionToken(Strings.EMPTY);
		modifyUserRequest.setUserUUID_eq("ActiveDirectory:30B10AEEA8ADCA46A79CE30AD6DDDD5E");
		modifyUserRequest.setStoredId_eq(Strings.EMPTY);
		modifyUserRequest.setRealActorId("wsagent");
		Attribute attribute = new Attribute("MobileNo", true, "Integer", "0193336666");
		List<Attribute> attributes = new ArrayList<Attribute>();
		attributes.add(attribute);
		modifyUserRequest.setAttributes(attributes);
		
		Gson gsonBuilderModifyUser = new GsonBuilder().create();
		String json = gsonBuilderModifyUser.toJson(modifyUserRequest);
		System.out.println(json);

	}

}
