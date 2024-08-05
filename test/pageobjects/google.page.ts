import { $ } from "@wdio/globals";
import Page from "./page.js";
import { testData } from "../data/data.layer.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GoolePage extends Page {
  /**
   * define selectors using getter methods
   */
  public get inputSearch() {
    return $("//form//input[@placeholder='Search']");
  }
  public get clickSearchButton() {
    return $("//header//div[@class='YSM5S']");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async search(query: string) {
    await this.inputSearch.setValue(query);
    await browser.keys("Enter");
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public async open() {
    return super.open("");
  }
}

export default new GoolePage();
