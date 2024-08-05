import { browser } from "@wdio/globals";
// import { waiter } from "../utils";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open(path: string) {
    return browser.url(`https://cloud.google.com/${path}`);
  }
  async isValidPageByURL(url: string) {
    const curentURL = await browser.getUrl();
    if (!curentURL.includes(url)) {
      throw new Error("Is not valid page: " + url);
    }
  }

  async getTitlePage() {
    return browser.getTitle();
  }

  async isLoad() {
    await browser.waitUntil(
      async () => {
        return (
          (await browser.execute(() => document.readyState)) === "complete"
        );
      },
      {
        timeout: 10000,
        timeoutMsg: "Страница не загрузилась полностью",
      }
    );
  }
  

  //   async isLoadObject(selector: string) {
  //     try {
  //       await waiter(selector);
  //     } catch (error) {
  //       console.log("🚀 ~ error:", error);
  //     }
  //   }
}
