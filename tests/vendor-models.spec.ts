import { test, expect } from "@playwright/test";

test("vender api", async ({ request }) => {

  const vendorResponse = await request.get("/admin/v2/vendor-models?limit=100&page=0");
  
  expect(vendorResponse.ok()).toBeTruthy();

  const vendorData = await vendorResponse.json();

  const filteredData = vendorData.data.list.filter(item => item.vendor.code === 'openai');

  expect(filteredData.length).toBeGreaterThan(0);
});
