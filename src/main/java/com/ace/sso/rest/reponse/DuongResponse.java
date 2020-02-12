package com.ace.sso.rest.reponse;

public class DuongResponse {
	private String name;
	private String email;
	private String phone;
	private String mobilemodel;

	public DuongResponse() {
		super();
	}

	public DuongResponse(String name, String email, String phone, String mobilemodel) {
		super();
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.mobilemodel = mobilemodel;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getMobilemodel() {
		return mobilemodel;
	}

	public void setMobilemodel(String mobilemodel) {
		this.mobilemodel = mobilemodel;
	}

}
