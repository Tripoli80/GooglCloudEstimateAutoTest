import { $ } from "@wdio/globals";
import Page from "./page.js";
import { selectors, validationData } from "../data/data.layer.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
  /**
   * define selectors using getter methods
   */
  private get resultItem() {
    return $(selectors.serchItem);
  }

  async isValidPage() {
    await super.isValidPageByURL(validationData.searchPage);
  }

  async selectItem() {
    const item = await this.resultItem;
    await item.click();
  }
}

export default new SearchPage();
