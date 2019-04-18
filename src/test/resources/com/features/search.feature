Feature: Search functionality 
@tag 
Scenario: Login Credentials 
	When the home page opens enter user credentials 
	
@tag 
Scenario Outline: search for hotel 
	Given the user is on the home page 
	When  the user enters location "<location>" and selects rewards program "<rewProgram>" 
	And   the user selects start date "<startDate>" and end date "<endDate>" 
	And   the user selects number of guests "<numOfGuests>" and number of rooms "<numOfRooms>" 
	And   the user clicks search 
	Then  the user should see results "<status>" for "<location>" and "<rewProgram>" 
	Examples: 
		|location                        |rewProgram          |startDate |endDate   |numOfGuests |numOfRooms| status |
		|Chicago, IL, United States      |Amazon.com Gift Card|05/01/2019|05/29/2019|1 Guest     |1 Room    | accept |
		|New York City, NY, United States|Uber                |06/20/2019|06/25/2019|2 Guests    |2 Rooms   | accept |
		|Augusta, ME, USA                |Aeroplan            |07/09/2019|07/17/2019|3 Guests    |3 Rooms   | accept |
		|                                |                    |07/09/2019|07/17/2019|3 Guests    |3 Rooms   | reject |
		
		
		@NegativeTest 
		Scenario: search by leaving rewards program empty 
			Given the user is on the home page 
			When  the user enters location "Chicago, IL, United States" 
			And   the user clicks search 
			Then  the user should see alert message for rewards program 
			
		@tag 
		Scenario: tearDown 
			When close browser