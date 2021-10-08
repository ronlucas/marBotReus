require('dotenv').config();

const fetch = require('node-fetch');

const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('Lets Go!');
}

const reus = [
  'reu',
  'reus',
  'reunion',
  'reuniones'
]

client.on('message',gotMessage);

async function gotMessage(msg){
    if(reus.some(v=> msg.content.toLowerCase().includes(v))){
        let url = `https://api.tenor.com/v1/search?q=reus&key=${process.env.TENORKEY}&contentfilter=high`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
    }
}