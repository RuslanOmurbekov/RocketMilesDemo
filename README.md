# RocketMilesDemo:
Project contains UI testing for search functionality of RocketMiles website.
Project contains API testing for Facebook endpoints of Personal Information.
Framework is following the BDD approach and supported by Utility classes for reusability.
Framework is free to run on any system.
Used Tools: Java,maven,selenium,restassured,jUnit, pageFactory pattern,cucumber

In order to run tests:
   -Go to src/test/java/runners package.
   -Open CukesRunner class and click run as JUnit by default @get,@PositiveTest,NegativeTest,@close will run.
   -For safety reason I used JUnit configuration to hide my Facebook user token
   In order to successfully run API Test follow these steps:
   1.Right click on project and select Run As and click Run Configurations...
   2.Click (x)=Arguments
   3.Copy and Paste following text to VM Arguments
   
   -ea -Dfacebookfriends="/friends?access_token=EAAeKBsPjdP0BAGEE2er5gZBCncxursd77ihD0g4PwZBfQQWqm3h2KxPIQ1vgH9eRbJZAEkgTahddho8EhGXGho5a5dVLFOxm4Bav8M2ZBZAYN7gc512EvvWLV0kB4PuRZAT1KtMenA8JzsynnelZASRVlZCLDbMfdZBsZD"
-Dfacebookfeeds="/feed?access_token=EAAeKBsPjdP0BAGEE2er5gZBCncxursd77ihD0g4PwZBfQQWqm3h2KxPIQ1vgH9eRbJZAEkgTahddho8EhGXGho5a5dVLFOxm4Bav8M2ZBZAYN7gc512EvvWLV0kB4PuRZAT1KtMenA8JzsynnelZASRVlZCLDbMfdZBsZD"
-DfacebookEmailPhoneHometown="?fields=birthday,email,hometown&access_token=EAAeKBsPjdP0BAGEE2er5gZBCncxursd77ihD0g4PwZBfQQWqm3h2KxPIQ1vgH9eRbJZAEkgTahddho8EhGXGho5a5dVLFOxm4Bav8M2ZBZAYN7gc512EvvWLV0kB4PuRZAT1KtMenA8JzsynnelZASRVlZCLDbMfdZBsZD"

   4. Apply and Run
