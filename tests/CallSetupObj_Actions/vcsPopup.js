const { expect } = require('@playwright/test');
const { controlsPopUp } = require('../PageObject/videoCallScreenPopupPOM');

exports.VideoCallPopUpPage = class VideoCallPopUpPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.getVideoLinkTile = page.locator(controlsPopUp.linkVideoTile);
        this.getEndCallButton = page.locator(controlsPopUp.btnEndCall);
        this.getLeaveCallButton = page.locator(controlsPopUp.btnLeaveCall);
    }

    async handlePopUp() {
        
        await this.getEndCallButton.first().waitFor();
        await this.getVideoLinkTile.first().waitFor();
        //video tile assertion
        expect(this.getVideoLinkTile).toBeTruthy(console.log("video tile available"));

        //End button assertion
        expect(this.getEndCallButton).toBeTruthy(console.log("End button available"));

        // Click End Call button
        await this.getEndCallButton.first().click();
        // // Click Leave the call
        await this.getLeaveCallButton.first().click();

        // Close popup
        await this.page.close();
    }

}