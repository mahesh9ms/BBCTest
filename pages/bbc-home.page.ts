import { Locator, Page } from '@playwright/test';

export class BBC_HomePage {

    readonly page: Page;
    readonly signInLink: Locator;

    constructor(page: Page) {
        this.page = page;
         this.signInLink = this.page.locator('a[class*="-NavigationLink-AccountLink"]');
    }

    async navigate() {
        await this.page.goto('/');
        await this.signInLink.waitFor();
    }

    async clickSignIn() {
        await this.signInLink.click();
        await this.signInLink.waitFor({state : "hidden"})
        await this.page.waitForLoadState();
    }
}