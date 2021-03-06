const TOKEN =
  process.env.TELEGRAM_TOKEN || "464068632:AAEMKij-KJ6Jj9POWv07fpXXFyZw-aFbPJM";
const TelegramBot = require("node-telegram-bot-api");
const options = {
  webHook: {
    // Port to which you should bind is assigned to $PORT variable
    // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
    port: process.env.PORT
    // you do NOT need to set up certificates since Heroku provides
    // the SSL certs already (https://<app-name>.herokuapp.com)
    // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
  }
};
// Heroku routes from port :443 to $PORT
// Add URL of your app to env variable or enable Dyno Metadata
// to get this automatically
// See: https://devcenter.heroku.com/articles/dyno-metadata
const url =
  process.env.APP_URL || "https://bot-telegram-hello.herokuapp.com:443";
const bot = new TelegramBot(TOKEN, options);

// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);

// Just to ping!
bot.on("message", function onMessage(msg) {
  bot.sendMessage(
    msg.chat.id,
    "oo garyy! No estás sola. La patata no se puede poseer"
  );
});
