package com.ace.sso.rest.request;

public class FindUserRequest {
	private boolean dynamicAgentSession;
	private String sessionToken;
	private String userId;
	private String storeId;
	private String segmentId;
	private String template;

	public FindUserRequest() {
		super();
	}

	public FindUserRequest(boolean dynamicAgentSession, String sessionToken, String userId, String storeId,
			String segmentId, String template) {
		super();
		this.dynamicAgentSession = dynamicAgentSession;
		this.sessionToken = sessionToken;
		this.userId = userId;
		this.storeId = storeId;
		this.segmentId = segmentId;
		this.template = template;
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

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getStoreId() {
		return storeId;
	}

	public void setStoreId(String storeId) {
		this.storeId = storeId;
	}

	public String getSegmentId() {
		return segmentId;
	}

	public void setSegmentId(String segmentId) {
		this.segmentId = segmentId;
	}

	public String getTemplate() {
		return template;
	}

	public void setTemplate(String template) {
		this.template = template;
	}

}
