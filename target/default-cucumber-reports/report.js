$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/features/facebook.feature");
formatter.feature({
  "name": "Testing a Facebook API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Number of friends retreival from a web service",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "the user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "SDFacebookAPI.the_user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should get requested information with status code \"200\" and number of friends of \"258\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SDFacebookAPI.the_user_should_get_requested_information_with_status_code_and_number_of_friends_of(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Email HomeTown retreival from a web service",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "the user sends request to get email and hometown",
  "keyword": "When "
});
formatter.step({
  "name": "the user should get requested information with \"\u003cemail\u003e\" and \"\u003chomeTown\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "homeTown"
      ]
    },
    {
      "cells": [
        "rusi21@rambler.ru",
        "Naryn"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Email HomeTown retreival from a web service",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "the user sends request to get email and hometown",
  "keyword": "When "
});
formatter.match({
  "location": "SDFacebookAPI.the_user_sends_request_to_get_email_and_hometown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should get requested information with \"rusi21@rambler.ru\" and \"Naryn\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SDFacebookAPI.the_user_should_get_requested_information_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/com/features/search.feature");
formatter.feature({
  "name": "Search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "the home page opens enter user credentials",
  "keyword": "When "
});
formatter.match({
  "location": "SDSearch.the_home_page_opens_enter_user_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "search for hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user enters location \"\u003clocation\u003e\" and selects rewards program \"\u003crewProgram\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user selects start date \"\u003cstartDate\u003e\" and end date \"\u003cendDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user selects number of guests \"\u003cnumOfGuests\u003e\" and number of rooms \"\u003cnumOfRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks search",
  "keyword": "And "
});
formatter.step({
  "name": "the user should see results \"\u003cstatus\u003e\" for \"\u003clocation\u003e\" and \"\u003crewProgram\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "location",
        "rewProgram",
        "startDate",
        "endDate",
        "numOfGuests",
        "numOfRooms",
        "status"
      ]
    },
    {
      "cells": [
        "Chicago, IL, United States",
        "Amazon.com Gift Card",
        "05/01/2019",
        "05/29/2019",
        "1 Guest",
        "1 Room",
        "accept"
      ]
    },
    {
      "cells": [
        "New York City, NY, United States",
        "Uber",
        "06/20/2019",
        "06/25/2019",
        "2 Guests",
        "2 Rooms",
        "accept"
      ]
    },
    {
      "cells": [
        "Augusta, ME, USA",
        "Aeroplan",
        "07/09/2019",
        "07/17/2019",
        "3 Guests",
        "3 Rooms",
        "accept"
      ]
    },
    {
      "cells": [
        "",
        "",
        "07/09/2019",
        "07/17/2019",
        "3 Guests",
        "3 Rooms",
        "reject"
      ]
    }
  ]
});
formatter.scenario({
  "name": "search for hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SDSearch.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters location \"Chicago, IL, United States\" and selects rewards program \"Amazon.com Gift Card\"",
  "keyword": "When "
});
formatter.match({
  "location": "SDSearch.the_user_enters_location_and_selects_rewards_program(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects start date \"05/01/2019\" and end date \"05/29/2019\"",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_selects_start_date_and_end_date(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects number of guests \"1 Guest\" and number of rooms \"1 Room\"",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_selects_number_of_guests_and_number_of_rooms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see results \"accept\" for \"Chicago, IL, United States\" and \"Amazon.com Gift Card\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SDSearch.the_user_should_see_results_for_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search for hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SDSearch.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters location \"New York City, NY, United States\" and selects rewards program \"Uber\"",
  "keyword": "When "
});
formatter.match({
  "location": "SDSearch.the_user_enters_location_and_selects_rewards_program(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects start date \"06/20/2019\" and end date \"06/25/2019\"",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_selects_start_date_and_end_date(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects number of guests \"2 Guests\" and number of rooms \"2 Rooms\"",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_selects_number_of_guests_and_number_of_rooms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see results \"accept\" for \"New York City, NY, United States\" and \"Uber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SDSearch.the_user_should_see_results_for_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search for hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SDSearch.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters location \"Augusta, ME, USA\" and selects rewards program \"Aeroplan\"",
  "keyword": "When "
});
formatter.match({
  "location": "SDSearch.the_user_enters_location_and_selects_rewards_program(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects start date \"07/09/2019\" and end date \"07/17/2019\"",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_selects_start_date_and_end_date(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects number of guests \"3 Guests\" and number of rooms \"3 Rooms\"",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_selects_number_of_guests_and_number_of_rooms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see results \"accept\" for \"Augusta, ME, USA\" and \"Aeroplan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SDSearch.the_user_should_see_results_for_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search for hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SDSearch.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters location \"\" and selects rewards program \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "SDSearch.the_user_enters_location_and_selects_rewards_program(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects start date \"07/09/2019\" and end date \"07/17/2019\"",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_selects_start_date_and_end_date(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects number of guests \"3 Guests\" and number of rooms \"3 Rooms\"",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_selects_number_of_guests_and_number_of_rooms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see results \"reject\" for \"\" and \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SDSearch.the_user_should_see_results_for_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search by leaving rewards program empty",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NegativeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SDSearch.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters location \"Chicago, IL, United States\"",
  "keyword": "When "
});
formatter.match({
  "location": "SDSearch.the_user_enters_location(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "SDSearch.the_user_clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see alert message for rewards program",
  "keyword": "Then "
});
formatter.match({
  "location": "SDSearch.the_user_should_see_alert_message_for_rewards_program()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tearDown",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "SDSearch.close_browser()"
});
formatter.result({
  "status": "passed"
});
});