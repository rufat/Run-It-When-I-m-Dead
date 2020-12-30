☠ Run It When I'm Dead
-------------
##### Automatically code execution when you're dead.
##### Author: [@rufatmammadli](https://twitter.com/rufatmammadli)

![](https://orig00.deviantart.net/1828/f/2017/004/b/3/b3e43e5773280307740e7f412aa86862-dau8w61.gif)
<br>[(gif by @faedryn)](https://www.deviantart.com/faedryn/art/Skull-Boy-Gif-655465177)

#### Install
    npm i runitwhenimdead --save

#### Why?
I don't know, just for fun. Enjoy it! [🤘](https://www.youtube.com/watch?v=M97vR2V4vTs)

#### How it works?
As you know, Facebook adds a 'Remembering' tag on the profiles of the users who have passed away (when their families or friends request so). Basically, the code is fetching the profile page in a specified interval and looking for the 'Remembering' tag. Obviously, it won't work if Facebook changes the structure of DOM elements. Keep that in mind and contribute. I'm using [puppeteer](https://github.com/GoogleChrome/puppeteer) library for fetching and DOM operations.

#### Usage
1. npm install - Install the all dependencies.
2. Paste the public Facebook profile URL into 'profileURL'.
3. npm start - Start demo app.

#### Push Notification via chatbots
If you want to send push notifications via Messenger or Telegram, enable the integrated BotDelive configuration and follow these steps:
1. [Create an account](https://botdelive.com/login).
2. Create an app on the dashboard to get appId and secretKey credentials.
3. Add appId, secretKey, userId and message:
```javascript
let init = new riwimd({
    profileURL: "<FACEBOOK_PUBLIC_PROFILE_URL>",
    timer: 1000,
    appId: "<BotDelive_APP_ID>",
    secretKey: "<BotDelive_SECRET_KEY>",
    userId: "<BotDelive_USER_ID>",
    message: "<PUSH_MESSAGE>"
});
```
Complete documentation available at: [https://botdelive.com/docs](https://botdelive.com/docs)

#### Example
```javascript
const riwimd = require('runitwhenimdead');

// Initialization
let init = new riwimd({
    profileURL: "<FACEBOOK_PUBLIC_PROFILE_URL>", // public facebook profile url
    timer: 1000, // scan interval in ms

    // SEND PUSH NOTIFICATION VIA MESSENGER, TELEGRAM WHEN YOU'RE DEAD
    // SIGN UP AT https://botdelive.com

    // appId: "<BotDelive_APP_ID>",
    // secretKey: "<BotDelive_SECRET_KEY>",
    // userId: "<BotDelive_USER_ID>",
    // message: "<PUSH_MESSAGE>"
});

// Start scanner
init.Start();

// Listen 'watch' event
init.on('watch', (data) => {
   console.log(data)
});
```
