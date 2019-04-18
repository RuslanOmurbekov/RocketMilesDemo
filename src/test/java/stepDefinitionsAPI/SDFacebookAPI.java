package stepDefinitionsAPI;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import utilities.ConfigurationReader;

import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.*;

import static org.junit.Assert.assertEquals;

public class SDFacebookAPI {

	RequestSpecification request;
	Response response;
	String url;
	JsonPath jsPath;

	@When("the user sends GET request")
	public void the_user_sends_GET_request() {
		url = ConfigurationReader.getProperty("facebookurl") + ConfigurationReader.getProperty("facebookfriends");

	}

	@Then("the user should get requested information with status code {string} and number of friends of {string}")
	public void the_user_should_get_requested_information_with_status_code_and_number_of_friends_of(String statusCode,
			String numOfFriends) {
		int expectedStatusCode = Integer.parseInt(statusCode);
		int expectedSummary = Integer.parseInt(numOfFriends);

		response = given().accept(ContentType.JSON).when().get(url);
		// .then().assertThat().statusCode(200).assertThat().body("summary.total_count",
		// hasItem("258.0"));

		assertEquals(expectedStatusCode, response.getStatusCode());
		jsPath = response.jsonPath();
		int actualSummary = jsPath.getInt("summary.total_count");
		assertEquals(expectedSummary, actualSummary);

	}

	@When("the user sends request to get email and hometown")
	public void the_user_sends_request_to_get_email_and_hometown() {
		url = ConfigurationReader.getProperty("facebookurl")
				+ ConfigurationReader.getProperty("facebookEmailPhoneHometown");
	}

	@Then("the user should get requested information with {string} and {string}")
	public void the_user_should_get_requested_information_with_and(String expectedEmail, String expectedHometown) {
		int expectedStatusCode = 200;
		response = given().accept(ContentType.JSON).when().get(url);

		assertEquals(expectedStatusCode, response.getStatusCode());
		jsPath = response.jsonPath();
		String actualEmail = jsPath.getString("email");

		assertEquals(expectedEmail, actualEmail);

		String actualHometown = jsPath.getString("hometown.name");

		assertEquals(expectedHometown, actualHometown);
	}

}
