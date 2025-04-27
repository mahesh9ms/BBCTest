import { request, expect, Locator, Page } from "@playwright/test";

export class BBC_SignIn_PasswordPage {

    public readonly passwordInput: Locator;
    public readonly signInButton: Locator;
    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;

        this.passwordInput = this.page.locator('#password-input');
        this.signInButton = page.locator('#submit-button');
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickSignin() {
        await this.signInButton.waitFor({state : 'visible'})
        await this.signInButton.click({ force: true });
        await this.signInButton.waitFor({state : "hidden"});

    }
}


