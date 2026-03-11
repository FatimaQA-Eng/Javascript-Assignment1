import { test, expect } from '@playwright/test';

test('Place order flow', async ({ page }) => {

  test.setTimeout(120000);

  // Open website
  await page.goto('https://automationexercise.com/');

// Add product to cart
const product = page.locator('.product-image-wrapper').first();

await product.scrollIntoViewIfNeeded();
await product.hover();

await product.locator('text=Add to cart').first().click();

await page.getByRole('button', { name: 'Continue Shopping' }).click();

  // Go to cart and checkout
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByText('Proceed To Checkout').click();

  // Register new user
  await page.getByRole('link', { name: 'Register / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Testingauto');
  
await page.locator('form').filter({ hasText: 'Signup' })
  .getByPlaceholder('Email Address')
  .fill('autoexcer125@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();

  // Fill account information
  await page.getByRole('radio', { name: 'Mrs.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).fill('INIoiuy2$');

  // Date of birth
  await page.locator('#days').selectOption('18');
  await page.locator('#months').selectOption('11');
  await page.locator('#years').selectOption('1981');

  // Address information
  await page.getByRole('textbox', { name: 'First name *' }).fill('testautore');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('REtest');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Numpy');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('17th cross');
  await page.getByRole('textbox', { name: 'State *' }).fill('Tamilnadu');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Chennai');

  await page.locator('#zipcode').fill('61009865');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('9123479202');

  // Create account
  await page.getByRole('button', { name: 'Create Account' }).click();

  // Continue after account creation
  await page.getByRole('link', { name: 'Continue' }).click();

  // Go back to cart
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByText('Proceed To Checkout').click();

  // Place order
  await page.getByRole('link', { name: 'Place Order' }).click();

  // Payment details
  await page.locator('input[name="card_number"]').fill('4111111111');
  await page.locator('input[name="name_on_card"]').fill('Tester232');
  await page.getByRole('textbox', { name: 'ex.' }).fill('123');
  await page.getByRole('textbox', { name: 'MM' }).fill('12');
  await page.getByRole('textbox', { name: 'YYYY' }).fill('2027');

  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();

  // Verify order placed
  await expect(page.getByText('Order Placed')).toBeVisible();

});