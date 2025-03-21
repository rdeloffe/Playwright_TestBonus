import { test } from '@playwright/test';
import { HomePage } from '../pages_objects/homePage.pages'

test('GotoSite' , async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.Navigate();
});

