

// const { test, expect } = require('@playwright/test');


// test('test', async ({ page }) => {

//   // Go to URL
//   await page.goto('/5d0y735d0y73');
  
//   //If didn't grand permissions for camera and microphone in config file then this popup will appear and after click not proceed further
//   //Click Continue button
//   if(await page.isVisible('button:has-text("Continue")') && await page.isEnabled('button:has-text("Continue")')){
//     try {
//       await page.click('button:has-text("Continue")');
//     }
//     catch(err) {}  
//   }
  

//   // Click Accept all cookies
//   await page.click('button:has-text("Accept all cookies")');

//   // Click Enter Waiting Area
//   await page.click('div[role="button"]:has-text("5d0y73Enter Waiting Area")');

//   // Click Next step
//   await page.click('button:has-text("Next step")');


//   // Fill required details
//   await page.fill('input[name="name"]', 'test');
  
//   // Click Next step
//   await page.click('button:has-text("Next step")');
 
//   // Check Terms and Conditions
//   await page.click('input[name="terms"]');

//   //await page.click('text=Privacy Policy');
//   //await page.waitForTimeout(10000);

//   //await page.click('button:has-text("Close")');

//   if(await page.isVisible('button:has-text("Continue anyway")') && await page.isEnabled('button:has-text("Continue anyway")'))
//   {
//     try {
//       await page.click('button:has-text("Continue anyway")');
//     }
//     catch(err) {}   
//   }
  

//   await page.waitForSelector("button[type='submit'] span[class='MuiButton-label']")
//   await page.click("button[type='submit'] span[class='MuiButton-label']")


//   // Click Enter Waiting Area
//   const [page1] = await Promise.all([
//     page.waitForEvent('popup'),

//   ]);
//   await page1.waitForTimeout(25000);

//   //video tile assertion
//   expect(page1.locator('.localCaller.ng-isolate-scope')).toBeTruthy(console.log("video tile available"));

//   //End button assertion
//   expect(page1.locator('text=End')).toBeTruthy(console.log("End button available"));

  
//   // Click End Call button
//   //await page1.click('text=End');
//   await page1.click('button:has-text("End")');
//   // Click Leave the call
//   await page1.click('text=Leave the call');
  
//   // Close popup
//   await page1.close();

//   //Close page
//   await page.close();
  
// });