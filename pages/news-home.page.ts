import { Locator, Page } from '@playwright/test';

export class BBC_News_HomePage {

    readonly page: Page;
    readonly commentIcons: Locator;
    readonly newsLink: Locator;


    constructor(page: Page) {
        this.page = page;

        this.commentIcons = this.page.locator('a:has([data-testid="participate:comments"])');
        this.newsLink = this.page.locator('[class*="-GlobalNavigationProduct"] [href$="/news"]');
    }

    async clickFirstVisibleNewsArticleWithComments() {
        await this.page.waitForLoadState();
        // Gets all visible news articles with comment icon and click on the first one
        const visibleCommentLinks = this.commentIcons.filter({ has: this.page.locator(':visible') });
        await visibleCommentLinks.first().click(); 
    }
}