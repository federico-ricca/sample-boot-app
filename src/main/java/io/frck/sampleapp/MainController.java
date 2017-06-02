package io.frck.sampleapp;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {

	@RequestMapping(method = RequestMethod.GET, value = "/")
	public String index(Model model) throws IOException {
		return "index";
	}

	@RequestMapping(method = RequestMethod.GET, value = "/login")
	public String showLoginPage(Model model) throws IOException {
		return "login";
	}

	@RequestMapping(method = RequestMethod.GET, value = "/error")
	public String showErrorPage(Model model) throws IOException {
		return "error";
	}

	
}
