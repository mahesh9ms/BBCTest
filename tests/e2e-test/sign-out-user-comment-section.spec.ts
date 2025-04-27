import { expect, test } from '../../fixtures/page.fixtures'

test.describe('E2E Tests : Article Comments : Logged-out User :', () => {
    test('Should be able to see comment section but not comment text box', { tag: ['@logged-out-state', '@comments'] }, async ({ homePage, signinEmailPage, signinPasswordPage, newsHomePage, newsArticlePage }) => {
        // Home page
        await homePage.navigate();
        expect(await homePage.page.title()).toContain('BBC - Home');

        // News Home
        await newsHomePage.newsLink.click();
        await newsHomePage.clickFirstVisibleNewsArticleWithComments();

        // article page - asserting comment section 
        await expect(newsArticlePage.commentSection).toBeVisible();
        await expect(newsArticlePage.userGreating).toContainText(/Sign in to comment, reply and react/);
        await expect(newsArticlePage.commentTextBox).not.toBeVisible();

    });
});