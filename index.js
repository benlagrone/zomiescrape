const puppeteer = require('puppeteer');
const process = {};
process.env = {};

async function scraper() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.thisiswhyimbroke.com/', { waitUntil: 'networkidle2' });
    // await page.type('#username', process.env.USERNAME);
    // await page.type('#txtPassword', process.env.TXTPASSWORD);

    await Promise.all([

        page.waitForNavigation(),
        page.click('input[name="logIn"]')
    ])

};
console.log('begin scraping');
scraper();
