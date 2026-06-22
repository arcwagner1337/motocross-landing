const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    const url = 'http://localhost:5173';
    const menuItems = ['Workshop', 'Garage', 'Race Team', 'Loft'];

    await page.goto(url, { waitUntil: 'networkidle0' });


    async function loadAllContent(page) {
        await page.evaluate(async () => {
            await new Promise((resolve) => {
                let totalHeight = 0;
                let distance = 400;
                let timer = setInterval(() => {
                    let scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    if (totalHeight >= scrollHeight) {
                        clearInterval(timer);
                        window.scrollTo(0, 0); 
                        resolve();
                    }
                }, 50);
            });
        });
    }

    for (const item of menuItems) {
        console.log(`Переходим на: ${item}...`);
        try {
            const element = await page.waitForSelector(`::-p-text(${item})`, { timeout: 5000 });
            if (element) {
                await element.click();
                await new Promise(r => setTimeout(r, 1500)); 

               
                await loadAllContent(page);
                await new Promise(r => setTimeout(r, 500));

    
                await page.addStyleTag({
                    content: `
    /* Фикс для страниц с backgroundImage (Race и т.д.) */
    * { 
      background-attachment: scroll !important; 
    }

    /* Ультимативный фикс для Воркшопа с его <img> в fixed блоке */
    .fixed.inset-0.z-0, 
    div[class*="fixed"][class*="inset-0"] {
      position: absolute !important;
      height: ${await page.evaluate(() => document.body.scrollHeight)}px !important;
      width: 100% !important;
    }

    /* Убеждаемся, что сама картинка внутри тоже растянулась */
    .fixed.inset-0.z-0 img,
    div[class*="fixed"][class*="inset-0"] img {
      object-fit: cover !important;
      height: 100% !important;
    }
  `
                });

               
                await page.screenshot({
                    path: `screenshot_${item.replace(/\s+/g, '_')}.png`,
                    fullPage: true
                });

                console.log(`Скрин ${item} готов!`);
            }
        } catch (e) {
            console.error(`Ошибка при скрине ${item}: ${e.message}`);
        }
    }

    await browser.close();
    console.log('Все готово!');
})();