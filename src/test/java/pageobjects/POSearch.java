package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.Driver;

public class POSearch {

	public POSearch() {
		PageFactory.initElements(Driver.getDriver(), this);
	}

	@FindBy(xpath = "//button[@class='close']	")
	public WebElement close;

	@FindBy(xpath = "(//span[@class='twitter-typeahead']/input)[2]")
	public WebElement location;

	@FindBy(xpath = "//pre")
	public WebElement locationDrop;

	@FindBy(xpath = "//input[@placeholder='Select reward program']")
	public WebElement rewardsProgram;

	@FindBy(xpath = "//input[@placeholder='Select reward program']/parent::div/div")
	public WebElement rewardsProgramDrop;

	@FindBy(xpath = "//div[@class='checkin booking-date']/input")
	public WebElement startDate;

	@FindBy(xpath = "//div[@class='checkout booking-date']/input")
	public WebElement endDate;

	@FindBy(xpath = "//a[contains(text(),'Guests')]/parent::li/parent::ul/parent::div")
	public WebElement selectGuests;

	@FindBy(xpath = "//a[contains(text(),'Rooms')]/parent::li/parent::ul/parent::div")
	public WebElement selectRooms;

	@FindBy(xpath = "//span[@class='ui-icon ui-icon-circle-triangle-e']")
	public WebElement rightArrow;

	@FindBy(xpath = "//div[@class='submit col-md-12']/button")
	public WebElement submit;

	@FindBy(xpath = "//var[@search-query]")
	public WebElement actualLocation;

	@FindBy(xpath = "//var[@reward-units]")
	public WebElement actualRewProgram;

	@FindBy(xpath = "//div[@class='popover-content']")
	public WebElement alertMessage;

}
