☠ Run It When I'm Dead
-------------
##### Automatically code execution when you're dead
###### by [@rufatmammadli](https://twitter.com/rufatmammadli)

#### Why?
I'm not depressed, just bored. Enjoy it. 🤘

#### How it works?
As you know, Facebook adds 'Remembering' label on the profile who passed away. The code is fetching the profile page in a specified interval and looking for the tag.

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