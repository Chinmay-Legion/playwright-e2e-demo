
async function SearchAndCartFlow(page) {
  await page.goto('https://demo.nopcommerce.com/');
  await page.getByPlaceholder('Search store').click();
  await page.getByPlaceholder('Search store').fill('Lumia');
  await page.locator('#ui-id-2').click();
  await page.getByRole('textbox', { name: 'Enter a quantity' }).click();
  await page.getByRole('textbox', { name: 'Enter a quantity' }).fill('3');
  await page.locator('#add-to-cart-button-20').click();
  await page.getByRole('link', { name: 'shopping cart', exact: true }).click();
}

async function WishListandCompareFlow(page) {
  await page.goto('https://demo.nopcommerce.com/');
  await page.goto('https://demo.nopcommerce.com/apple-macbook-pro-13-inch');
  await page.locator('#add-to-wishlist-button-4').click();
  await page.goto('https://demo.nopcommerce.com/wishlist');
  await page.goto('https://demo.nopcommerce.com/apple-macbook-pro-13-inch');
  await page.locator('[class="compare-products"]>button')
  await page.goto('https://demo.nopcommerce.com/compareproducts');
  await page.goto('https://demo.nopcommerce.com/');
}


module.exports = { SearchAndCartFlow,WishListandCompareFlow };