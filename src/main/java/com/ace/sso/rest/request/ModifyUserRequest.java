package com.ace.sso.rest.request;

import java.util.List;

public class ModifyUserRequest {
	private boolean dynamicAgentSession;
	private String sessionToken;
	private String userUUID_eq;
	private String storedId_eq;
	private String realActorId;
	private List<Attribute> attributes;

	public ModifyUserRequest() {
		super();
	}

	public ModifyUserRequest(boolean dynamicAgentSession, String sessionToken, String userUUID_eq, String storedId_eq,
			String realActorId, List<Attribute> attributes) {
		super();
		this.dynamicAgentSession = dynamicAgentSession;
		this.sessionToken = sessionToken;
		this.userUUID_eq = userUUID_eq;
		this.storedId_eq = storedId_eq;
		this.realActorId = realActorId;
		this.attributes = attributes;
	}

	public boolean isDynamicAgentSession() {
		return dynamicAgentSession;
	}

	public void setDynamicAgentSession(boolean dynamicAgentSession) {
		this.dynamicAgentSession = dynamicAgentSession;
	}

	public String getSessionToken() {
		return sessionToken;
	}

	public void setSessionToken(String sessionToken) {
		this.sessionToken = sessionToken;
	}

	public String getUserUUID_eq() {
		return userUUID_eq;
	}

	public void setUserUUID_eq(String userUUID_eq) {
		this.userUUID_eq = userUUID_eq;
	}

	public String getStoredId_eq() {
		return storedId_eq;
	}

	public void setStoredId_eq(String storedId_eq) {
		this.storedId_eq = storedId_eq;
	}

	public String getRealActorId() {
		return realActorId;
	}

	public void setRealActorId(String realActorId) {
		this.realActorId = realActorId;
	}

	public List<Attribute> getAttributes() {
		return attributes;
	}

	public void setAttributes(List<Attribute> attributes) {
		this.attributes = attributes;
	}

}
