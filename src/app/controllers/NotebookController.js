import puppeteer from "puppeteer";

class NotebookController {
  async index(req, res) {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto("https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops");

    await page.waitForNetworkIdle();

    let notebooks;
    try {
      notebooks = await page.$$eval("div.col-sm-4", (notebooks) => notebooks.map((notebook) => notebook.innerText));
    } catch (e) {
      console.log(e);
      return res.json(e);
    }

    console.log(notebooks);

    return res.json(notebooks);
  }
}

export default new NotebookController();
