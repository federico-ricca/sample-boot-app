package io.frck.sampleapp.config;

import java.util.Collection;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

public class UserIdAuthenticationToken extends
		UsernamePasswordAuthenticationToken {
	private String userId;

	public UserIdAuthenticationToken(String _id, Object principal,
			Object credentials,
			Collection<? extends GrantedAuthority> authorities) {
		super(principal, credentials, authorities);
		this.setUserId(_id);
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 5552916371140280523L;
}
