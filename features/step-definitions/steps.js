const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("I am on homepage", async () => {
  await browser.url("https://www.newegg.com/");
});

When("I refresh the page", async () => {
  browser.refresh();
  return;
});

When("I entry the word {word} in the search bar", async (word) => {
  const searchBar = await $("input[type=search]");
  searchBar.setValue(word);
});

When("I click the search", async () => {
  const searchButton = await $("div.header2021-search-button > button");
  await searchButton.click();
});

Then("at least one item appears", async () => {
  await expect($("div.list-wrap > div:nth-child(3)")).toBeExisting();
});

When("I click on Today's Best Deals tab", async () => {
  const TodaysBestDealsTab = await $("#trendingBanner_720202");
  await TodaysBestDealsTab.click();
});

When("I click on the Internet shop logo", async () => {
  const logo = await $("div.header2021-logo > a");
  await logo.click();
});

Then("I see the homepage", async () => {
  await expect(browser).toHaveUrl("https://www.newegg.com/");
  expect(browser).toHaveTitle(
    "Computer Parts, PC Components, Laptops, Gaming Systems, and more - Newegg.com"
  );
});
