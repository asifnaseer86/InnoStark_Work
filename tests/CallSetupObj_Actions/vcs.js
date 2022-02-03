const { expect } = require('@playwright/test');
const { controlsWA } = require('../PageObject/videoCallSetupPOM');

exports.VideoCallSetupPage = class VideoCallSetupPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.getContiuneButton = page.locator(controlsWA.btnContiune);
        this.getAcceptCookiesButton = page.locator(controlsWA.btnAcceptAllCookies);
        this.getWaitingAreaButton = page.locator(controlsWA.btnWaitingArea);
        this.getNextStepButton = page.locator(controlsWA.btnNextStep);
        this.getInputTextBox = page.locator(controlsWA.inputNameTXB);
        this.getTermsCheckbox = page.locator(controlsWA.inputTermsChk);
        this.getContiuneAnyWayButton = page.locator(controlsWA.btnContiuneAnyway);
        this.getEntreWaitingAreaButton = page.locator(controlsWA.btnEnterWaitingArea);

    }

    async goto() {
        await this.page.goto('/5d0y735d0y73');
    }

    async enterWaitingArea() {

        //If didn't grant permissions for camera and microphone in config file then this popup will appear and after click not proceed further
        //Click Continue button
        if (await this.getContiuneButton.first().isVisible() && await this.getContiuneButton.first().isEnabled()) {
            await this.getContiuneButton.first().click();
        }
        // Click Accept all cookies
        await this.getAcceptCookiesButton.first().click();

        await expect(this.getWaitingAreaButton).toBeVisible();
        // Click Enter Waiting Area
        await this.getWaitingAreaButton.first().click();

        await expect(this.getNextStepButton).toBeVisible();
    }

    async nxtStepInPleaseRead() {

        // Click Next step
        await this.getNextStepButton.first().click();
        await expect(this.getInputTextBox.first()).toBeVisible();

    }

    async enterDetails() {

        // Fill required details
        await this.getInputTextBox.first().fill('Test');

        // Click Next step
        await this.getNextStepButton.first().click();

        await expect(this.getTermsCheckbox).toBeVisible();
    }

    async checkTerms() {

        // Check Terms and Conditions
        await this.getTermsCheckbox.first().click();

        //Check if Contiune button visible otherwise bypass
        if (await this.getContiuneAnyWayButton.first().isVisible() && await this.getContiuneAnyWayButton.first().isEnabled()) {
            await this.getContiuneAnyWayButton.first().click();
        }
       
        //Enter in Call Screen
        await this.getEntreWaitingAreaButton.first().click();

        //Check if Contiune button visible otherwise bypass
        if (await this.getContiuneAnyWayButton.first().isVisible() && await this.getContiuneAnyWayButton.first().isEnabled()) {
            await this.getContiuneAnyWayButton.first().click();
        }
        
    }

    async tearDown() {
        //Close page
        await this.page.close();
    }


}