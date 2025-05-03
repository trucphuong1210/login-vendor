import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto("https://case.doradora.vn/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Dora Chat");
  // Expect a field with the name "Email" and fill it with a value
  await page.fill('input[name="email"]', "trucphuongng1210@gmail.com");
  // Expect a field with the name "Send verification code" and click it
  await page.getByRole("button", { name: "Send verification code" }).click();
  // Pause for xx seconds to allow the user to enter the verification code
  await page.pause();
  // Expect a button with the name "Continue" and click it
  await page.getByRole("button", { name: "Continue" }).click();
  // Expect a page to navigate
  await expect(page).toHaveURL("https://case.doradora.vn/login-with-email");
  await page.pause();
});
