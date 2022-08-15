describe("eMag.ro", () => {
  it("should load", async () => {
    await browser.url("https://www.emag.ro/");
    await expect(browser).toHaveTitle(
      "eMAG.ro - Căutarea nu se oprește niciodată"
    );
  });
  it("should contain a cart button", async () => {
    const cartButton = await $("#my_cart");
    await expect(cartButton).toBeDisplayed();
  });
  it("should open a new page in emag (Genius page)", async () => {
    const geniusButton = await $('[title="Genius"]');
    await geniusButton.click();
    await expect(browser).toHaveTitle(
      "Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro"
    );
  });
  it("should have a working search engine", async () => {
    const searchBar = await $("#searchboxTrigger");
    const searchButton = await $(".searchbox-submit-button");
    await searchBar.setValue("tricou polo");
    await searchButton.click();
    await expect(browser).toHaveTitle(
      "Cauți tricou polo? Alege din oferta eMAG.ro"
    );
  });
});
