import {
  Builder,
  By,
  Key,
  until,
  WebDriver,
  WebElement,
} from "selenium-webdriver";
import { assert, expect } from "chai";
import { testConfig } from "../../testConfig";

describe("what to expect when first visitting todos app page", async () => {
  
  let driver: WebDriver;
  
  //test constants
  const { baseUrl } = testConfig;
  const inputPlaceholder = "What needs to be done?";
  const headerText = "todos";

  // elements declarations
  let inputBox: WebElement;
  let header: WebElement;

  before(async () => {
    driver = await new Builder().forBrowser("safari").build();
    await driver.get(baseUrl);

    // elements intialisations
    inputBox = await driver.findElement(By.css("input.new-todo"));
    header = await driver
      .findElement(By.css("section.todoapp"))
      .findElement(By.css("h1"));
  });

  it("should have a title", async () => {
    const title = await driver.getTitle();
    expect(title).to.equal("React • TodoMVC");
  });

  it(`should have a header labelled '${headerText}'`, async () => {
    expect(await header.getText()).to.equal(headerText);
  });

  it("should have the input box to make sure that the user can add a new todo", async () => {
    expect(inputBox).to.exist;
    expect(await inputBox.isDisplayed()).to.equal(true);
  });

  it(`input box should have placeholder text '${inputPlaceholder}'`, async () => {
    expect(await inputBox.getAttribute("placeholder")).to.equal(
      inputPlaceholder
    );
  });

  after(async () => {
    await driver.close();
  });
});
