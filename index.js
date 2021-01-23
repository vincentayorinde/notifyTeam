const SlackBot = require('slackbots');
const env = require('dotenv');

env.config()
const bot = new SlackBot({
  token: process.env.TOKEN,
  name: 'bitnobbot',
});

// Start handler

bot.on('start', () => {
    const currentDate = new Date();
    const day = currentDate.getDay();

    if([6, 7].includes(day)) return;

    const hour = currentDate.getHours();
    if(hour === 9) bot.postMessageToChannel('general', message);
});

const message = `Hi Nobles,
This is the best time to fill your StandUp Form
https://forms.gle/zb6wSntneKYFATSL7
`;
