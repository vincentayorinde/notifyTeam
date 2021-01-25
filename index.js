const SlackBot = require('slackbots');
const env = require('dotenv');
const logger = require('winston');

env.config()
const bot = new SlackBot({
  token: process.env.TOKEN,
  name: 'bitnobbot',
});

// Start handler

bot.on('start', () => {
    logger.info('Bot execution started...');
    const currentDate = new Date();
    const day = currentDate.getDay();

    if([6, 0].includes(day)) {
        logger.info(`Today is ${currentDate}. Bot will not run.`);
        return;
    }
    const hour = currentDate.getHours();
<<<<<<< HEAD
=======
    console.log('the hour', hour)
>>>>>>> 5583903720f202d2fd2ad1efafa25873bb53e777
    if(hour === 10) bot.postMessageToChannel('general', message);
    logger.info(`Today is ${currentDate}. Bot has been triggered.`);
});

const message = `Hi Nobles,
This is the best time to fill your StandUp Form
https://forms.gle/zb6wSntneKYFATSL7
`;
