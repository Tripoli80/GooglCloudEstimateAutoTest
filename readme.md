# Google cloud estimate Automation test (frontend)

Write autotest to estimate price Google cloud Machine

## Running Tests

To install requirements

```bash
    npm install
```

To run tests, run the following command

```bash
    npm run wdio
```

## 🛠 Tasks

TASK:
What should be in final framework:
WebdriverIO for configuring connection to a browser
Page Object / Page Factory for pages
Use test data layer
Suites for smoke and other tests (smoke - hardcore, other - other tests)
Add spec-reporter for existed tests
Add a screenshot on fail with correspond name and date
The framework should have option to run from Jenkins with browser parametrization, selecting test suite. Test results should be shown on Jenkins Job, test artefacts should be archived.

Automate tests from Automation tools - WebdriverIO and the following test cases:
[Hurt Me Plenty]
When performing the task, you need to use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:

1. Open https://cloud.google.com/
2. By clicking the search button on the portal at the top of the page, enter in the search field "Google Cloud Platform Pricing Calculator"
3. Start the search by clicking the search button.
4. In the search results, click "Google Cloud Platform Pricing Calculator" and go to the calculator page.
5. Activate the COMPUTE ENGINE section at the top of the page
6. Fill in the form with the following data:
   - Number of instances: 4
   - What are these instances for ?: leave blank
   - Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
   - VM Class: Regular
   - Instance type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
   - Select Add GPUs
     - Number of GPUs: 1
     - GPU type: NVIDIA Tesla V100
   - Local SSD: 2x375 Gb
   - Datacenter location: Frankfurt (europe-west3)
   - Commited usage: 1 Year
7. Click Add to Estimate
8. Check the correspondence of the data of the following fields: VM Class, Instance type, Region, local SSD, commitment term
9. Check that the rental amount per month matches the amount received when passing the test manually.

## Demo

https://youtu.be/tUguL0_AOjg
