import { $ } from "@wdio/globals";
import Page from "./page.js";
import { selectors, validationData } from "../data/data.layer.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EstimatedPage extends Page {
  /**
   * define selectors using getter methods
   */
  //   private get title() {
  //     return $(selectors.estimated.subtitle);
  //   }
  private get subtitle() {
    return $(selectors.estimated.subtitle);
  }
  private get machineType() {
    return $(selectors.estimated.machineType);
  }
  // subtitle: "//h4[text()='Cost Estimate Summary']",
  // machineType: "//span[text()='Machine type']/../span[@class='Kfvdz']",
  // gpuModel: "//span[text()='GPU Model']/../span[@class='Kfvdz']",
  // localSSD: "//span[text()='Local SSD']/../span[@class='Kfvdz']",
  // numberInstance:
  //   "//span[text()='Number of Instances']/../span[@class='Kfvdz']",
  // OS: "//span[text()='Operating System / Software']/../span[@class='Kfvdz']",
  // provisionModel:
  //   "//span[text()='Provisioning Model']/../span[@class='Kfvdz']",
  // addGpu: "//span[text()='Add GPUs']/../span[@class='Kfvdz']",
  // region: "//span[text()='Region']/../span[@class='Kfvdz']",
  // commitedDiscount:
  //   "//span[text()='Committed use discount options']/../span[@class='Kfvdz']",
  // price: "//h6[text()='Total estimated cost']/../div/h6",

  private get gpuModel() {
    return $(selectors.estimated.gpuModel);
  }
  private get localSSD() {
    return $(selectors.estimated.localSSD);
  }
  private get numberInstance() {
    return $(selectors.estimated.numberInstance);
  }
  private get OS() {
    return $(selectors.estimated.OS);
  }
  private get provisionModel() {
    return $(selectors.estimated.provisionModel);
  }

  private get addGpu() {
    return $(selectors.estimated.addGpu);
  }
  private get region() {
    return $(selectors.estimated.region);
  }
  private get commitedDiscount() {
    return $(selectors.estimated.commitedDiscount);
  }
  private get price() {
    return $(selectors.estimated.price);
  }

  async isLoad(): Promise<void> {
    await super.isLoad();
  }

  //   async waitForPageToLoad() {
  //     await browser.waitUntil(
  //       async () => {
  //         const title = await this.getTitle();
  //         return title.includes("Cost Estimate Summary");
  //       },
  //       {
  //         timeout: 35000,
  //         timeoutMsg: "Cost Estimate Summary page did not load in time",
  //       }
  //     );
  //   }
  async waitForPageToLoad(timeout = 10000) {
    // Ожидание, пока важный элемент не станет существовать и будет видимым
    await this.OS.waitForExist({ timeout });
    await this.OS.waitForDisplayed({ timeout });
  }

  async getTitle() {
    return this.subtitle.getText();
  }
  async getMachineType() {
    return this.machineType.getText();
  }
  async getGpuModel() {
    return this.gpuModel.getText();
  }
  async getLocalSSD() {
    const ssd = await this.localSSD.getText();
    console.log("🚀 ~ ssd:", ssd);
    return ssd;
  }
  async getNumberInstance() {
    return this.numberInstance.getText();
  }
  async getOS() {
    return this.OS.getText();
  }
  async getProvisionModel() {
    return this.provisionModel.getText();
  }
  async getAddGpu() {
    return this.addGpu.getText();
  }
  async getRegion() {
    return this.region.getText();
  }
  async getCommitedDiscount() {
    const year = await this.commitedDiscount.getText();
    console.log("🚀 ~ year:", year);
    return year;
  }
  async getPrice() {
    return this.price.getText();
  }
}

export default new EstimatedPage();
