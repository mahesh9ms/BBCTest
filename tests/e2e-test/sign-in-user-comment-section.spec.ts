import { expect, test } from '../../fixtures/page.fixtures';
import { USER } from '../../test-data/users-data';

test.describe('E2E Tests : Article Comments : Logged-in User :', () => {
    test('Should be able to see comment section', { tag: ['@logged-in-state', '@comments'] }, async ({ homePage, signinEmailPage, signinPasswordPage, newsHomePage, newsArticlePage }) => {
        // Home page
        await homePage.navigate();
        expect(await homePage.page.title()).toContain('BBC - Home');
        expect(homePage.signInLink).toBeVisible();
        await homePage.clickSignIn();

        // Login page
        expect(await signinEmailPage.page.title()).toContain('BBC – Sign in');
        await signinEmailPage.enterEmailId(USER.email);
        await signinEmailPage.clickContinue();
        expect(signinPasswordPage.passwordInput).toBeVisible();
        await signinPasswordPage.enterPassword(USER.password);
        await signinPasswordPage.clickSignin();
        expect(await homePage.page.title()).toContain('BBC - Home');

        // News Home
        await newsHomePage.newsLink.click();
        await newsHomePage.clickFirstVisibleNewsArticleWithComments();

        // article page - asserting comment section 
        await expect(newsArticlePage.commentSection).toBeVisible();
        await expect(newsArticlePage.userGreating).toContainText(/You're signed in, /);
        await expect(newsArticlePage.commentTextBox).toBeEditable();

    });
});