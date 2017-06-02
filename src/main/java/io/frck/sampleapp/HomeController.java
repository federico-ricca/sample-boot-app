package io.frck.sampleapp;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	@RequestMapping(method = RequestMethod.GET, value = "/home")
	public String index(Model model) throws IOException {
		return "home";
	}

}
