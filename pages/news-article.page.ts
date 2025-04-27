import { Locator, Page } from '@playwright/test';

export class BBC_News_ArticlePage {

    readonly page: Page;
    readonly commentSection: Locator;
    readonly userGreating: Locator;
    readonly commentTextBox: Locator;

    constructor(page: Page) {
        this.page = page;

        this.commentSection = this.page.getByTestId('comments-container');
        this.userGreating = this.page.locator('[class*="-Greeting"]');
        this.commentTextBox = this.page.locator('[data-testid="comments-container"] textarea');
    }

}