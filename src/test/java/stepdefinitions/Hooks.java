package stepdefinitions;

import java.util.concurrent.TimeUnit;
import cucumber.api.Scenario;
import pageobjects.POSearch;
import utilities.Driver;
import utilities.ConfigurationReader;
import utilities.Credentials;

public class Hooks {
	POSearch search = new POSearch();

	// @Before
	public void setUp(Scenario scenario) {

		Driver.getDriver().get(ConfigurationReader.getProperty("url"));
		Driver.getDriver().manage().window().maximize();
		Driver.getDriver().manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		Credentials.signIn();
		try {
			search.close.click();
		} catch (Exception e) {
			System.out.println("No popup");
		}

	}

	//@AfterTest
	public void tearDown() {
		Driver.getDriver().close();

	}

}
