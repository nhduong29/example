package com.ace.sso.rest.request;

public class Attribute {
	private String name;
	private boolean encrypted;
	private String type;
	private String value;

	public Attribute() {
		super();
	}

	public Attribute(String name, boolean encrypted, String type, String value) {
		super();
		this.name = name;
		this.encrypted = encrypted;
		this.type = type;
		this.value = value;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isEncrypted() {
		return encrypted;
	}

	public void setEncrypted(boolean encrypted) {
		this.encrypted = encrypted;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

}
