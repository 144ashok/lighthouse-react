/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */

let counter = 1;

const selector = {
    class(attribute, className){
        return `${attribute}[class='${className}']`
    },
    type(attribute, value){
        return `${attribute}[type='${value}']`
    },
    id(value){
        return `#${value}`
    }
}

async function doLogin(page) {
    const loginUrl = 'https://mediregs.stg.lynx-app.com'
    await page.waitForTimeout(10000)
    await page.goto(loginUrl);
    await page.type(selector.id('username'), 'ashok.yadav@wolterskluwer.com');
    await page.type(selector.id('password'), 'ashok.yadav@wolterskluwer.com');
    console.log(`Entered user credentials`)
    await page.click(selector.type('button[type="submit"]', 'submit'));
    console.log(`Login is successful`)
}

async function setup(browser, context) {
    // launch browser for LHCI
    const page = await browser.newPage();
    await page.setCacheEnabled(true)

    if(counter===1){
        await doLogin(page)
    }
    else{
        await page.goto(context.url);
    }
    // close session for next run
    await page.close();
    counter++
}

module.exports = setup