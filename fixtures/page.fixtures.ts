import { test as base } from '@playwright/test';
import { BBC_HomePage } from '../pages/bbc-home.page';
import { BBC_News_HomePage } from '../pages/news-home.page';
import { BBC_SignIn_EmailPage } from '../pages/signin-email.page';
import { BBC_SignIn_PasswordPage } from '../pages/signin-password.page';
import { BBC_News_ArticlePage } from '../pages/news-article.page';

type PageFixtures = {
  homePage: BBC_HomePage;
  newsHomePage: BBC_News_HomePage;
  signinEmailPage: BBC_SignIn_EmailPage;
  signinPasswordPage: BBC_SignIn_PasswordPage;
  newsArticlePage: BBC_News_ArticlePage;

}

// Extend the base test with page fixtures
const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new BBC_HomePage(page));
  },
  newsHomePage: async ({ page }, use) => {
    await use(new BBC_News_HomePage(page));
  },
  signinEmailPage: async ({ page }, use) => {
    await use(new BBC_SignIn_EmailPage(page));
  },
  signinPasswordPage: async ({ page }, use) => {
    await use(new BBC_SignIn_PasswordPage(page));
  },
  newsArticlePage: async ({ page }, use) => {
    await use(new BBC_News_ArticlePage(page));
  },
});

export { test };
export const expect = test.expect;