import { $ } from "@wdio/globals";
import Page from "./page.js";
import { selectors, validationData } from "../data/data.layer.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CalculatorPage extends Page {
  /**
   * define selectors using getter methods
   */
  private get title() {
    return $(selectors.calculatorTitle);
  }
  private get addEstimateBtn() {
    return $(selectors.addEstimate);
  }
  private get computeEngine() {
    return $(selectors.computeEngine);
  }
  private get titleComputeEngine() {
    return $(selectors.titelCalPageCE);
  }
  private get instanceInput() {
    return $(selectors.instanceInput);
  }
  private get osInput() {
    return $(selectors.osList);
  }
  private get osVarios() {
    return $(selectors.osVarios);
  }
  private get vmClass() {
    return $(selectors.vmClass);
  }

  private get instanceTypeInput() {
    return $(selectors.instanceTypeList);
  }
  private get instanceTypeVarios() {
    return $(selectors.instanceTypeVarios);
  }
  private get gpuSwitch() {
    return $(selectors.gpu);
  }

  private get gpuInput() {
    return $(selectors.gpuList);
  }
  private get gpuVarios() {
    return $(selectors.gpuVarios);
  }
  private get ssdInput() {
    return $(selectors.ssdList);
  }
  private get ssdVarios() {
    return $(selectors.ssdVarios);
  }
  private get regionInput() {
    return $(selectors.regionList);
  }
  private get regionVarios() {
    return $(selectors.regionVarios);
  }
  private get comitedUsage() {
    return $(selectors.comitedUseg);
  }
  private get viewEstimate() {
    return $(selectors.viewEstimate);
  }
  private get updateIdication() {
    return $(selectors.calculatingIsUpdated);
  }
  async isLoad(): Promise<void> {
    await super.isLoad();
  }

  async waitForPageToLoad() {
    await browser.waitUntil(
      async () => {
        const title = await this.getTitle();
        return title.includes("calculator");
      },
      {
        timeout: 35000,
        timeoutMsg: "Calculator page did not load in time",
      }
    );
  }
  async isValidPage() {
    await super.isValidPageByURL(validationData.calculatorPage);
  }

  async getTitle() {
    return this.title.getText();
  }
  async addEstimate() {
    await (await this.addEstimateBtn).click();
  }

  async selectComputeEngine() {
    await (await this.computeEngine).click();
  }
  async waitComputeEngineCal() {
    await (await this.titleComputeEngine).waitForDisplayed();
  }
  async setInstance(count: number) {
    const instanceInput = await this.instanceInput;
    await instanceInput.waitForExist({ timeout: 20000 });
    await instanceInput.getText();
    await instanceInput.setValue(count);
  }
  async setOS() {
    const list = await this.osInput;
    const os = await this.osVarios;
    await list.waitForExist({ timeout: 20000 });
    await list.scrollIntoView({ behavior: "smooth", block: "center" });
    await browser.waitUntil(
      async () => {
        const isClickable = await list.isClickable();
        return isClickable;
      },
      {
        timeout: 10000,
        timeoutMsg: "Элемент не стал кликабельным в течение 10 секунд",
      }
    );
    await list.click();

    await os.scrollIntoView({ behavior: "smooth", block: "center" });
    await browser.waitUntil(
      async () => {
        const isClickable = await os.isClickable();
        return isClickable;
      },
      {
        timeout: 10000,
        timeoutMsg: "Element no found until 10s",
      }
    );
    await os.click();
  }
  async setVmClass() {
    const el = await this.vmClass;
    await el.scrollIntoView({ behavior: "smooth", block: "center" });
    await browser.waitUntil(
      async () => {
        const isClickable = await el.isClickable();
        return isClickable;
      },
      {
        timeout: 10000,
        timeoutMsg: "Элемент не стал кликабельным в течение 10 секунд",
      }
    );
    await el.click();
  }

  async setInstanceType() {
    const list = await this.instanceTypeInput;
    const type = await this.instanceTypeVarios;
    await list.scrollIntoView({ behavior: "smooth", block: "center" });
    await browser.waitUntil(
      async () => {
        const isClickable = await list.isClickable();
        return isClickable;
      },
      {
        timeout: 10000,
        timeoutMsg: "Element no found until 10s",
      }
    );
    await list.click();
    await type.scrollIntoView({ behavior: "smooth", block: "center" });
    await browser.waitUntil(
      async () => {
        const isClickable = await type.isClickable();
        return isClickable;
      },
      {
        timeout: 10000,
        timeoutMsg: "Element no found until 10s",
      }
    );
    await type.click();
  }
  async setGPU() {
    const gpu = await this.gpuSwitch;
    const list = await this.gpuInput;
    const type = await this.gpuVarios;

    await gpu.scrollIntoView({ behavior: "smooth", block: "center" });
    await browser.waitUntil(
      async () => {
        const isClickable = await gpu.isClickable();
        return isClickable;
      },
      {
        timeout: 10000,
        timeoutMsg: "Element no found until 10s",
      }
    );
    await gpu.click();
    await this.itemSelectInList(list, type);
  }
  async setSSD() {
    const list = await this.ssdInput;
    const type = await this.ssdVarios;
    await this.itemSelectInList(list, type);
  }
  async setRegion() {
    const list = await this.regionInput;
    const type = await this.regionVarios;
    await this.itemSelectInList(list, type);
  }
  async setComitedUsege() {
    const el = await this.comitedUsage;

    await el.scrollIntoView({ behavior: "smooth", block: "center" });
    const oldValue = await el.getValue();

    await browser.waitUntil(
      async () => {
        const isClickable = await el.isClickable();
        return isClickable;
      },
      {
        timeout: 10000,
        timeoutMsg: "Элемент не стал кликабельным в течение 10 секунд",
      }
    );
    await el.click();
  }
  async goToViewEstimate() {
    const el = await this.viewEstimate;
    await el.scrollIntoView({ behavior: "smooth", block: "center" });
    await browser.waitUntil(
      async () => {
        const isClickable = await el.isClickable();
        return isClickable;
      },
      {
        timeout: 10000,
        timeoutMsg: "Элемент не стал кликабельным в течение 10 секунд",
      }
    );
    await el.click();
  }

  async waitUpdateEstimate(timeout = 10000) {
    await (await this.updateIdication).waitForExist({ timeout });
    await (await this.updateIdication).waitForDisplayed({ timeout });
  }

  private async itemSelectInList(
    list: WebdriverIO.Element,
    item: WebdriverIO.Element
  ) {
    await list.scrollIntoView({ behavior: "smooth", block: "center" });
    await browser.waitUntil(
      async () => {
        const isClickable = await list.isClickable();
        return isClickable;
      },
      {
        timeout: 20000,
        timeoutMsg: "Element no found until 10s",
      }
    );
    await list.click();
    await item.scrollIntoView({ behavior: "smooth", block: "center" });
    await browser.waitUntil(
      async () => {
        const isClickable = await item.isClickable();
        return isClickable;
      },
      {
        timeout: 10000,
        timeoutMsg: "Element no found until 10s",
      }
    );
    await item.click();
  }
}

export default new CalculatorPage();
