Feature: Bootcamp E2E

        Background:
            Given I am on homepage
             When I refresh the page

        @searchbar
        Scenario: Testing the website's searchbar
             When I entry the word Windows in the search bar
            * I click the search
             Then at least one item appears

        @returnToHomepage
        Scenario: Returning to main page by clicking on Logo
             When I click on Today's Best Deals tab
             * I click on the Internet shop logo
             Then I see the homepage