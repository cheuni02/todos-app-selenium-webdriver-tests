# Automating the todos app using selenium-webdriver, mocha and chai

Just a demonstration of how to use Selenium-Webdriver npm package to automate the todos webapp hosted on https://demo.playwright.dev/ as an alternate to using Playwright.
The real advantages of using Selenium-Webdriver over Cypress and Playwright are:

- the support for different browsers (by installing the browser drivers first).
- the support for different languages (in this case JavaScript/TypeScript but in the past I have written in Java).

Note that for the structure of the tests, had to use Mocha test framework, and Chai for the assertion library.
My personal favourite combination, but there are many different ways to skin a cat of course.
That's the beauty of using selenium-webdriver.

## Pre-requisites

NOTE: these instructions are for mac users only.
Be sure to install these drivers first

1) Chrome

```
brew install chromedriver
```

2) Firefox

```
brew install geckodriver
```

3) Edge

Download EdgeDriver from https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
Choose the appropriate version matching your Edge browser version, and your processor.
Unzip the downloaded file and add it to your PATH.

```
export PATH=$PATH:/absolute/path/to/bin/for/edgedriver
```

4) Safari

for Mac users, safaridriver is already installed.
Open Safari, then go to Safari > Preferences > Advanced.
Enable the "Show Develop menu in menu bar" option.
In the Develop menu, click on "Allow Remote Automation."
To verify that SafariDriver is enabled and ready for use, you can run:

```
safaridriver --enable
```

## Build

```
yarn install
```

## Running Tests

```
yarn test
```

Or when wanting to use hot reload whilst development mode:

```
yarn test:watch
```
