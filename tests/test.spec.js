// example.spec.js
const { test, expect } = require('@playwright/test');
const { VideoCallSetupPage } = require('./CallSetupObj_Actions/vcs');
const { VideoCallPopUpPage } = require('./CallSetupObj_Actions/vcsPopup');

test('Page Navigation, Video Screen and End Button Verification ', async ({ page }) => {

    const VideoCallSetup = new VideoCallSetupPage(page);
    await VideoCallSetup.goto();
    await VideoCallSetup.enterWaitingArea();
    await VideoCallSetup.nxtStepInPleaseRead();
    await VideoCallSetup.enterDetails();
    await VideoCallSetup.checkTerms();

    // Click Enter Waiting Area
    const [page1] = await Promise.all([
        page.waitForEvent('popup'),

    ]);

    const VideoCallPopUp = new VideoCallPopUpPage(page1);

    await VideoCallPopUp.handlePopUp();

    await VideoCallSetup.tearDown();

});

