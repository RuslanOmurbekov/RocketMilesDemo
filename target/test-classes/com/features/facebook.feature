Feature: Testing a Facebook API 

@get
Scenario: Number of friends retreival from a web service 

	When the user sends GET request 
	Then the user should get requested information with status code "200" and number of friends of "258" 
@get
Scenario Outline: Email HomeTown retreival from a web service 

	When the user sends request to get email and hometown 
	Then the user should get requested information with "<email>" and "<homeTown>" 
	
	Examples: 
		|email            |homeTown |
		|rusi21@rambler.ru|Naryn    |