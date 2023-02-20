# Playwright End to End framework

<p>A demo project demonstrating automation of playwright tests using page object design pattern framework.</p>

This framwork also uses [artillery-engine-playwright](https://github.com/artilleryio/artillery-engine-playwright) *for a whole lot of real browsers to do full browser load testing .*

### Application Under Test

We are using [demo.nopcommerce.com](https://demo.nopcommerce.com/) as the Application Under Test.

## Installation ⚙️

Install the dependencies and devDependencies to run the test.

- Clone (OR) Download this repo as zip folder on to your local machine


#### Install dependencies

```bash
npm install
npx playwright install
```

#### Run application 

🚀Run tests in Parallel chrome using headed mode

```bash
npm run chromeSuite:head - Chrome browser and headed mode
```

🚀Run tests with an **@e2e** tag in chrome-headed mode

```bash
npm run e2e:chrome:head
```
🚀Run all tests with an **@smoke** tag in chrome-headed mode

```bash
npm run smoke:chrome:head
```

🚀Run all tests in Mobile view mode

```bash
npm run mobileSuite:head
```

### Allure report

```bash
npm run open_allure
```

## Project Framework

#### File Tree

>```javascript
>├── data
>|  └── data.js
>├── package.json
>├── pages
>|  ├── CartPage.js
>|  ├── CheckOutPage.js
>|  ├── CustomerPage.js
>|  ├── HomePage.js
>|  ├── LoginPage.js
>|  ├── OrderDetailsPage.js
>|  ├── ProductDetailsPage.js
>|  ├── RegisterPage.js
>|  └── SearchResultPage.js
>├── performace-load-testing
>|  ├── flows.js
>|  ├── SearchAndCart.yml
>|  └── WishListandCompareFlow.yml
>├── playwright.config.js
>├── test-results.json
>└── tests
>|  ├── e2e.spec.js
>|  ├── registeration.spec.js
>|  └── search.spec.js
>```

## CI/CD 🕑
We are currently using Circle CI for the integration of our Playwright framework. This integration allows us to automate the testing process for our web applications and ensure that they are functioning as expected.


## Pages 📄
- 📄 CartPage.js
- 📄 CheckOutPage.js
- 📄 CustomerPage.js
- 📄 HomePage.js
- 📄 LoginPage.js
- 📄 OrderDetailsPage.js
- 📄 ProductDetailsPage.js
- 📄 RegisterPage.js
- 📄 SearchResultPage.js

## Tests 🧪

|Test|  Test steps|
|--|--|
| Search for products <br>and subscribe to newsletter| - Search for "Nokia Lumia"<br> - Enter prodcut quantity(3)<br>- Search for "Apple MacBook Pro 13-inch"<br>- Enter prodcut quantity(5)<br>-  Subscribe to newsletter|
|Register User|- Click on "Register" link <br>- Fill required user details <br>- Set user login details <br>- Assert: user registration Completed|<br>|
|User Negative Login Test|- Click on "Login" link<br>- Fill out wrong user details<br>- Assert: Login was unsuccessful|
|User Login Test|- Click on "Login" link <br>- Fill out correct user details <br>- Go to "My Account" page <br>- Assert: No orders are initiated|
|E2E Test|//REGISTER USER <br>//LOGIN USER<br>// SEARCH FOR PRODUCT<br>// ADD TO CART<br>//CHECKOUT<br>//ORDER DETAILS & DOWNLOAD|

## Load Testing and Peroformance Testing ⚓
* 🤖&nbsp;&nbsp;&nbsp;Run load tests with real (headless) Chrome instances
* 🛰&nbsp;&nbsp;&nbsp;Run synthetic checks in CICD with the same Artillery + Playwright scripts
* 📊&nbsp;&nbsp;&nbsp;See most important front-end metrics ([Largest Contentful Paint (LCP)](https://web.dev/lcp/), [First Contentful Paint (FCP)](https://web.dev/fcp/) etc) and how they are affected by high load
* ♻️&nbsp;&nbsp;&nbsp; Use Playwright for load testing (full access to [`page` API](https://playwright.dev/docs/api/class-page))
* 🏎&nbsp;&nbsp;&nbsp;Create new load testing scripts 10x faster with [`playwright codegen`](https://playwright.dev/docs/codegen-intro)

Install Artillery and this engine:

```sh
npm install -g artillery artillery-engine-playwright
```

Run for searchPage flow


```sh
artillery run hello-world.yml
```




