import puppeteer from "puppeteer";

const label = [
  "name", "screen", "cpu", "ram", "storage", "os", "keyboard",
];

class NotebookController {
  async index(req, res) {
    const { filter } = req.body;
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto("https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops");

    await page.waitForNetworkIdle();

    let notebooks;
    try {
      notebooks = await page.$$eval("div.col-sm-4", (notebooksI) => notebooksI.map((notebook) => notebook.innerText));
    } catch (e) {
      console.log(e);
      return res.json(e);
    }

    /**
     * @todo
     * Dar uma abstraída nisso aqui
     */
    let lista = notebooks.map((dado) => {
      const stringD = dado.split("\n").filter((word) => (word || null));
      const stringV = {};

      Object.assign(stringV, { price: stringD[0] });

      stringD[2].split(",").forEach((item, index) => {
        Object.assign(stringV, { [label[index]]: item.trim() });
      });

      Object.assign(stringV, { reviews: stringD[3] });

      return stringV;
    });

    if (filter) {
      filter.forEach((filter) => {
        lista = lista.filter((item) => (Object
          .values(item)
          .toString()
          .toUpperCase()
          .includes(filter.toString().toUpperCase()) ? item : null));
      });
    }

    return res.json(lista);
  }
}

export default new NotebookController();
