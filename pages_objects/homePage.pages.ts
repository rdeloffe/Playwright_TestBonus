import { expect, type Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
constructor(page: Page) {
    this.page = page;
    }
async Navigate() {
    await this.page.goto('https://automationexercise.com/test_cases');
    await expect(this.page).toHaveURL('https://automationexercise.com/test_cases');
    await this.page.getByRole('button', { name: 'Consent' }).waitFor({ state : 'visible'});
    await this.page.getByRole('button', { name: 'Consent' }).click();
    }
}