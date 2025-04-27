import { Locator, Page } from "@playwright/test";

export class BBC_SignIn_EmailPage {

    public readonly emailInput: Locator;
    public readonly continueButton: Locator;
    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = this.page.locator('#user-identifier-input');
        this.continueButton = this.page.locator('#submit-button');
    }

    async enterEmailId(email: string) {
        await this.emailInput.fill(email);
    }

    async clickContinue() {
        await this.continueButton.waitFor({state : 'visible'})
        await this.continueButton.click({ force: true });
    }
}


