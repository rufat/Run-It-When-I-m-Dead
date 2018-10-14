const riwimd = require('../');

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