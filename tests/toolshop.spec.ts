import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test.describe('Toolshop Tests', () => {
  const searchTerm = 'hand'

  test('search and verify the first organic search result', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/')

    await ai(`select 'Hammer' from the Checkboxes`, { page, test })

    await ai(`Search for '${searchTerm}'`, { page, test })
    await ai('Hit enter', { page, test })

    const item = await ai(`What is the item name of the first item?`, { page, test })

    console.log('First organic search result is: ', item)
  })

  test('go to the register form and create a new account', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/')

    await ai(`go to the sign in page`, { page, test })
    await ai(`click on register your account`, { page, test })
    await ai(`fill out the form with realistic data and use for phone number only numbers`, { page, test })
    await ai(`click on the country dropdown and select the 3rd value`, { page, test })
    await ai(`fill out the mail address by using a valid email`, { page, test })
    await ai(`fill out the password by using strong password rules`, { page, test })

    await ai(`click on the register button`, { page, test })
    await page.waitForTimeout(3000)

    await ai(`fill out the login form with mail and password which you have used before and click on the login button`, { page, test })

    // wait for 3 seconds
    await page.waitForTimeout(3000)
  })
})
