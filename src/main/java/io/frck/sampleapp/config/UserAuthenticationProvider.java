package io.frck.sampleapp.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

@Component
public class UserAuthenticationProvider implements AuthenticationProvider {

	@Override
	public Authentication authenticate(Authentication authentication)
			throws AuthenticationException {
		String _email = (String) authentication.getPrincipal();
		String _password = (String) authentication.getCredentials();

		List<GrantedAuthority> grantedRoles = new ArrayList<>();
		grantedRoles.add(new SimpleGrantedAuthority("ROLE_USER"));
		
		return new UserIdAuthenticationToken("id", _email, _password,
				grantedRoles);
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

}
