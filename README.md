# Playwright End to End framework

<p>A demo project demonstrating automation of playwright tests using page object design pattern framework.</p>

This framwork also uses [artillery-engine-playwright](https://github.com/artilleryio/artillery-engine-playwright) *for a whole lot of real browsers to do full browser load testing .*

### Application Under Test

We are using [demo.nopcommerce.com](https://demo.nopcommerce.com/) as the Application Under Test.

## Installation 🛠️

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

🛠️Install Artillery and this engine:

```sh
npm install -g artillery artillery-engine-playwright
```

🚀Run for SearchAndCart flow and generate HTML report


```sh
npm run SNC-load
```

🚀Run for WishListandCart flow and generate HTML report


```sh
npm run WLNC-load
```

<p align="center">
  <img src="https://user-images.githubusercontent.com/84897709/220181552-68073b54-9ff8-479b-b0e6-27686a042f1e.gif" alt="demo">
</p>

-------
><p align="center">
>&nbsp;&nbsp; More about <a href="https://web.dev/user-centric-performance-metrics/">User-centric performance metrics</a>
></p>
-------


#### Artillery runs Playwright-based scenarios, and provides user-centric metrics that measure [perceived load speed](https://web.dev/user-centric-performance-metrics/#types-of-metrics) such as LCP and FCP:

```bash
browser.http_requests: ......................................................... 6050
browser.page.CLS.https://demo.nopcommerce.com/:
  min: ......................................................................... 0.1
  max: ......................................................................... 0.3
  median: ...................................................................... 0.1
  p95: ......................................................................... 0.3
  p99: ......................................................................... 0.3
browser.page.CLS.https://demo.nopcommerce.com/apple-macbook-pro-13-inch:
  min: ......................................................................... 0
  max: ......................................................................... 0
  median: ...................................................................... 0
  p95: ......................................................................... 0
  p99: ......................................................................... 0
browser.page.CLS.https://demo.nopcommerce.com/compareproducts:
  min: ......................................................................... 0
  max: ......................................................................... 0
  median: ...................................................................... 0
  p95: ......................................................................... 0
  p99: ......................................................................... 0
browser.page.CLS.https://demo.nopcommerce.com/wishlist:
  min: ......................................................................... 0
  max: ......................................................................... 0
  median: ...................................................................... 0
  p95: ......................................................................... 0
  p99: ......................................................................... 0
browser.page.FCP.https://demo.nopcommerce.com/:
  min: ......................................................................... 449.9
  max: ......................................................................... 6670.9
  median: ...................................................................... 1043.3
  p95: ......................................................................... 2515.5
  p99: ......................................................................... 5944.6
browser.page.FCP.https://demo.nopcommerce.com/apple-macbook-pro-13-inch:
  min: ......................................................................... 429.1
  max: ......................................................................... 2387.9
  median: ...................................................................... 713.5
  p95: ......................................................................... 1790.4
  p99: ......................................................................... 2276.1
browser.page.FCP.https://demo.nopcommerce.com/compareproducts:
  min: ......................................................................... 454.1
  max: ......................................................................... 3553
  median: ...................................................................... 645.6
  p95: ......................................................................... 1525.7
  p99: ......................................................................... 1790.4
browser.page.FCP.https://demo.nopcommerce.com/wishlist:
  min: ......................................................................... 520.8
  max: ......................................................................... 6824.2
  median: ...................................................................... 1153.1
  p95: ......................................................................... 2416.8
  p99: ......................................................................... 5065.6
browser.page.FID.https://demo.nopcommerce.com/apple-macbook-pro-13-inch:
  min: ......................................................................... 1.4
  max: ......................................................................... 44.7
  median: ...................................................................... 3.4
  p95: ......................................................................... 16.3
  p99: ......................................................................... 36.2
browser.page.LCP.https://demo.nopcommerce.com/:
  min: ......................................................................... 989.5
  max: ......................................................................... 7036.7
  median: ...................................................................... 2018.7
  p95: ......................................................................... 4065.2
  p99: ......................................................................... 6702.6
browser.page.LCP.https://demo.nopcommerce.com/apple-macbook-pro-13-inch:
  min: ......................................................................... 525.4
  max: ......................................................................... 2387.9
  median: ...................................................................... 837.3
  p95: ......................................................................... 1790.4
  p99: ......................................................................... 2276.1
browser.page.LCP.https://demo.nopcommerce.com/compareproducts:
  min: ......................................................................... 454.1
  max: ......................................................................... 3553
  median: ...................................................................... 645.6
  p95: ......................................................................... 1525.7
  p99: ......................................................................... 1790.4
browser.page.LCP.https://demo.nopcommerce.com/wishlist:
  min: ......................................................................... 520.8
  max: ......................................................................... 6824.2
  median: ...................................................................... 1153.1
  p95: ......................................................................... 2416.8
  p99: ......................................................................... 5065.6
browser.page.TTFB.https://demo.nopcommerce.com/:
  min: ......................................................................... 349.1
  max: ......................................................................... 5061.8
  median: ...................................................................... 561.2
  p95: ......................................................................... 1790.4
  p99: ......................................................................... 4770.6
browser.page.TTFB.https://demo.nopcommerce.com/apple-macbook-pro-13-inch:
  min: ......................................................................... 362.2
  max: ......................................................................... 1895.7
  median: ...................................................................... 518.1
  p95: ......................................................................... 1465.9
  p99: ......................................................................... 1863.5
browser.page.TTFB.https://demo.nopcommerce.com/compareproducts:
  min: ......................................................................... 376.3
  max: ......................................................................... 3478.7
  median: ...................................................................... 487.9
  p95: ......................................................................... 1408.4
  p99: ......................................................................... 1720.2
browser.page.TTFB.https://demo.nopcommerce.com/wishlist:
  min: ......................................................................... 401
  max: ......................................................................... 6700.2
  median: ...................................................................... 561.2
  p95: ......................................................................... 1826.6
  p99: ......................................................................... 4492.8
vusers.completed: .............................................................. 45
vusers.created: ................................................................ 45
vusers.created_by_name.0: ...................................................... 45
vusers.failed: ................................................................. 0
vusers.session_length:
  min: ......................................................................... 16438.7
  max: ......................................................................... 91800.9
  median: ...................................................................... 51550.2
  p95: ......................................................................... 72426.2
  p99: ......................................................................... 81660.6
```

## Reporters

### Allure

![Allure](https://user-images.githubusercontent.com/84897709/220187844-c3f3f283-0125-4338-b2a2-6807100608df.gif)

### HTML reporter
![HTML](https://user-images.githubusercontent.com/84897709/220189103-9d8c50b1-6f8d-475f-8b0a-ceb0cbebc583.gif)


