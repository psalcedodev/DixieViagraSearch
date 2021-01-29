const puppeteer = require('puppeteer')
const fs = require('fs');

const chromeOptions = {
    // Defines the excutable path for Chrome
    headless: false,
    slowMo: 10,
    defaultViewport: null,
    timeout: 0,
};
async function main(){
    const browser = await puppeteer.launch(chromeOptions)

    
    for(var i = 1; i < 8; i++){
        const page = await browser.newPage();
        await page.goto(`https://dixie.edu/?s=viagra&sitesearch=0#gsc.tab=0&gsc.q=viagra&gsc.page=${i}`)
        
        //Here goes your code to grab every link in each search list before closing your page
        await page.close()

        
    }

   
}
main();
