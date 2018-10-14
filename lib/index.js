const puppeteer = require('puppeteer');
const EventEmitter = require('events');
const botdeliveJS = require('botdelivejs'); // Push Notification API (for more detail visit to https://botdelive.com)

class Core extends EventEmitter {
    constructor(params) {
        super();
        this._sendPush = false;
        this._profileURL = params.profileURL || null;
        this._timer = params.timer || 5000;

        if(
            typeof params.appId !== 'undefined' &&
            typeof params.secretKey !== 'undefined' &&
            typeof params.userId !== 'undefined' &&
            typeof params.message !== 'undefined'
        ) {
            this._sendPush = true;
            this._userId = parans.userId;
            this._message = parans.message;
            this.bd = new botdeliveJS({
                appId: params.appId,
                secretKey: params.secretKey,
            });
        }
    }

    Start() {
        const _this = this;
        puppeteer.launch().then(async browser => {
            const delay = this._timer;
            const page = await browser.newPage();
            await page.setExtraHTTPHeaders({
                'Accept-Language': 'en'
            });
            await page.goto(this._profileURL);
            await checkStatus();
            async function checkStatus() {
                const html = await page.$eval('#u_0_c > div > div > h1 > div', e => e.outerHTML).catch((ex) => {
                    if(typeof ex !== 'undefined') {
                        _this.emit('watch', {dead: false, message: "Long live! DOM not found."});
                        setTimeout(async () => {
                            await page.reload();
                            await checkStatus();
                        }, delay)
                    }
                });
                if(html.indexOf("Remembering") !== -1) {
                    if(this._sendPush) this.bd.push(this._userId, this._message);
                    _this.emit('watch', {dead: true, message: "I feel bad. R.I.P."});
                } else {
                    _this.emit('watch', {dead: false, message: "Long live!"});
                }
                await page.reload();
                setTimeout(async () => {
                    await checkStatus();
                }, delay)
            }
        });
    }
}

module.exports = Core;