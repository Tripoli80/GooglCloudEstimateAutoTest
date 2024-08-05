import { expect } from "@wdio/globals";
import { testData, validationData } from "../data/data.layer.js";
import GoolePage from "../pageobjects/google.page.js";
import SearchPage from "../pageobjects/search.page.js";
import CalculatorPage from "../pageobjects/calculator.page.js";
import EstimatedPage from "../pageobjects/estimateSummary.page.js";

describe("My Login application", () => {
  it("add calculation", async () => {
    await GoolePage.open();
    await GoolePage.search(testData.search);
    await SearchPage.selectItem();
    await CalculatorPage.waitForPageToLoad();
    const titleCalculator = await CalculatorPage.getTitle();
    await expect(titleCalculator.toLowerCase()).toEqual(
      validationData.calculatorTitle.toLowerCase()
    );
    await CalculatorPage.addEstimate();
    await CalculatorPage.selectComputeEngine();
    await CalculatorPage.waitComputeEngineCal();
    await CalculatorPage.setInstance(4);
    await CalculatorPage.setOS();
    await CalculatorPage.setVmClass();
    await CalculatorPage.setInstanceType();
    await CalculatorPage.setGPU();
    await CalculatorPage.setSSD();
    await CalculatorPage.setRegion();
    await CalculatorPage.setComitedUsege();
    await CalculatorPage.waitUpdateEstimate(5000);   
    await CalculatorPage.goToViewEstimate();

  });
  it("check estimate", async () => {
    const tabs = await browser.getWindowHandles();

    await browser.switchToWindow(tabs[tabs.length - 1]);
    await EstimatedPage.waitForPageToLoad();
    // await browser.execute(() => {
    //   document.body.offsetHeight; 
    // });
    await expect(await EstimatedPage.getRegion()).toContain(
      validationData.estimated.region
    );  
    await expect(await EstimatedPage.getNumberInstance()).toContain(
      validationData.estimated.numberInstance
    );
    await expect(await EstimatedPage.getOS()).toContain(
      validationData.estimated.OS
    );
    await expect(await EstimatedPage.getProvisionModel()).toContain(
      validationData.estimated.provisionModel
    );
    await expect(await EstimatedPage.getMachineType()).toContain(
      validationData.estimated.machineType
    );
    await expect(await EstimatedPage.getAddGpu()).toContain(
      validationData.estimated.addGpu
    );
    await expect(await EstimatedPage.getGpuModel()).toContain(
      validationData.estimated.gpuModel
    );
    await expect(await EstimatedPage.getLocalSSD()).toContain(
      validationData.estimated.localSSD
    );
    await expect(await EstimatedPage.getCommitedDiscount()).toContain(
      validationData.estimated.commitedDiscount
    );
    await expect(await EstimatedPage.getPrice()).toContain(
      validationData.estimated.price
    );


  });
});
