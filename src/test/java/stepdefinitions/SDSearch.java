package stepdefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import java.text.SimpleDateFormat;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.POSearch;
import utilities.ConfigurationReader;
import utilities.Credentials;
import utilities.Driver;

public class SDSearch {
	POSearch search = new POSearch();

	// This method was used because, anytime when i use work computer,
	// it's asking extra credentials to put in order to go to any website
	// You don't have to use this method
	/*@When("the home page opens enter user credentials")
	public void the_home_page_opens_enter_user_credentials() {
		Driver.getDriver().get(ConfigurationReader.getProperty("url"));
		Driver.getDriver().manage().window().maximize();
		Credentials.signIn();
	}*/

	@Given("the user is on the home page")
	public void the_user_is_on_the_home_page() {
		Driver.getDriver().get(ConfigurationReader.getProperty("url"));
		 Driver.getDriver().manage().window().maximize();
		Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		try {
			search.close.click();
		} catch (Exception e) {
			System.out.println("No popup");
		}
		String expectedTitle = "Rocketmiles - Book Hotels Earn Thousands of Frequent Flyer Miles";
		assertEquals(expectedTitle, Driver.getDriver().getTitle());
	}

	@When("the user enters location {string} and selects rewards program {string}")
	public void the_user_enters_location_and_selects_rewards_program(String location, String reward)
			throws InterruptedException {
		this.handleLocationEntering(location);
		search.rewardsProgram.sendKeys(reward);
		search.rewardsProgramDrop.click();
	}

	@When("the user selects start date {string} and end date {string}")
	public void the_user_selects_start_date_and_end_date(String startDate, String endDate) throws Exception {
		this.chooseDates(startDate, "start");
		this.chooseDates(endDate, "end");

	}

	public void chooseDates(String date, String startEnd) throws Exception {
		int day = Integer.parseInt(date.substring(3, 5));
		Date myDate = new SimpleDateFormat("MM/dd/yyyy").parse(date);
		Date currentDate;
		if (startEnd.equals("start")) {
			currentDate = new SimpleDateFormat("MM/dd/yyyy").parse(search.startDate.getAttribute("value"));
			search.startDate.click();
		} else {
			currentDate = new SimpleDateFormat("MM/dd/yyyy").parse(search.endDate.getAttribute("value"));
			search.endDate.click();
		}

		if (myDate.after(currentDate)) {
			int y1 = myDate.getYear();
			int y2 = currentDate.getYear();
			int m1 = myDate.getMonth();
			int m2 = currentDate.getMonth();
			int click = (y1 - y2) * 12 + (m1 - m2);
			for (int i = 0; i < click; i++) {
				search.rightArrow.click();
			}
			Driver.getDriver().findElement(By.xpath("//a[@class='ui-state-default'][text()='" + day + "']")).click();
		} else {
			throw new Exception("Invalid Date");
		}

	}

	@When("the user selects number of guests {string} and number of rooms {string}")
	public void the_user_selects_number_of_guests_and_number_of_rooms(String guests, String rooms) {
		search.selectGuests.click();
		Driver.getDriver().findElement(By.xpath("//a[contains(text(),'" + guests + "')]"));
		search.selectRooms.click();
		Driver.getDriver().findElement(By.xpath("//a[contains(text(),'" + rooms + "')]"));
	}

	@When("the user clicks search")
	public void the_user_clicks_search() {
		search.submit.click();
	}

	@Then("the user should see results {string} for {string} and {string}")
	public void the_user_should_see_results_for_and(String status, String expectedLocation, String expectedRewProgram)
			throws InterruptedException {
		if (status.equals("accept")) {
			Thread.sleep(10000);
			assertEquals(expectedLocation, search.actualLocation.getText());
			assertTrue(search.actualRewProgram.getText().contains(expectedRewProgram));
		} else {
			try {
				assertEquals(expectedLocation, search.actualLocation.getText());
				assertTrue(search.actualRewProgram.getText().contains(expectedRewProgram));
			} catch (Exception e) {
				assert (true);
			}

		}

	}

	@When("the user enters location {string}")
	public void the_user_enters_location(String location) throws InterruptedException {
		this.handleLocationEntering(location);
	}

	@Then("the user should see alert message for rewards program")
	public void the_user_should_see_alert_message_for_rewards_program() {
		String expectedAlertMessage = "Reward program is required.";
		String actualAlertMessage = search.alertMessage.getText();
		assertEquals(expectedAlertMessage, actualAlertMessage);
	}

	public void handleLocationEntering(String handleLocation) throws InterruptedException {
		search.location.sendKeys(handleLocation);
		Thread.sleep(1000);
		search.location.sendKeys(Keys.SPACE);
		Thread.sleep(1000);
		search.location.sendKeys(Keys.ENTER);
		Thread.sleep(2000);
		search.rewardsProgram.clear();
	}

	@When("close browser")
	public void close_browser() {
		Driver.closeDriver();
	}
}
