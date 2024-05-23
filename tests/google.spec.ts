import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test.describe('Google', () => {
  const searchTerm = 'software testing'

  test('search and verify the first organic search result', async ({ page }) => {
    await page.goto('https://www.google.com')

    // click on getByRole('button', { name: 'Alle akzeptieren' })
    await page.getByRole('button', { name: 'Alle akzeptieren' }).click()

    await ai(`Search for '${searchTerm}'`, { page, test })
    await ai('Hit enter', { page, test })

    await page.waitForURL('https://www.google.com/search**')

    const title = await ai(`What is the title of the first organic search result?`, { page, test })

    console.log('First organic search result is: ', title)
  })
})
