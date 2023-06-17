const express = require('express');
require('dotenv').config()
require('telegraf')
require('axios')

const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf(process.env.TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

const bodyParser = require('body-parser');
let ejs = require('ejs');
const { default: axios } = require('axios');

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
  res.send('Hello Worldыыыы!');
});
app.get("/index",function(req,res){
  res.render("index")
})
app.post("/index",function(req,res){
  console.log(req.body['text_user'])
  axios.get(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage?chat_id=${process.env.ID_USER}&text=${req.body['text_user']}`)
  res.render("index")

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


