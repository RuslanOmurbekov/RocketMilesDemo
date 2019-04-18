package utilities;

import org.openqa.selenium.By;

public class Credentials {
	
	public static void signIn() {
		Driver.getDriver().findElement(By.id("username")).sendKeys("");
		Driver.getDriver().findElement(By.id("password")).sendKeys("");
		Driver.getDriver().findElement(By.xpath("//a[@title='Sign On']")).click();
	}

}
