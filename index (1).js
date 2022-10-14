const express = require('express');
const app = express();
const Database = require("@replit/database")
const db = new Database();
const port = 3000;
const Discord = require('discord.js');

// Command Prefix is .example command
const prefix = '.'


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


// ================= START BOT CODE ===================
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const activities_list = [
    { type: 'PLAYING',  message: 'Epic Family Games'  },
    { type: 'WATCHING', message: 'Bens Epic Gaming' },
    { type: 'WATCHING', message: 'Chris Gaming to the Max' },
];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);

        client.user.setActivity(activities_list[index].message, { type: activities_list[index].type });
    }, 10000);
});



//Commands 
client.on('messageCreate', async message =>{
  if(!message.content.startsWith(prefix) && message.author.bot);
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if(command === 'ping'){
    message.channel.send('pong!');
  };


  
  // Currency 
  if(command === 'bal'){
    let balance = await db.get('balance_${message.author.id}')

    if(balance === null) balance = 0
    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle(message.author.username + `'s balance`)
    .setDescription(`Balance: $` + balance)
    .setTimestamp()
    .setColor("#ff0000")
    .setThumbnail(message.author.displayAvatarURL());
    
    message.channel.send({ embeds: [moneyEmbed] });
    balance === null
  };


  
  if(command === 'pay'){
    let receiver = message.mentions.users.first().username;
    let ammountpaying = args[1];
    let receiverid = message.mentions.users.first().id;
    let testbalance = await db.get('balance_${message.author.id}')
    if(testbalance <=	ammountpaying){
      return message.channel.send(`insufficient funds`)
    }
    
    message.channel.send(`hello ${message.author.username}, the receiver is ${receiver} and the amount you are paying is ${ammountpaying}`)

    let payerbal = await db.get('balance_${message.author.id}')
    let recbal = await db.get('balance_' + receiverid)
    payerbal = payerbal - ammountpaying
    recbal = recbal + ammountpaying
    db.set('balance_${message.author.id}', payerbal)
    db.set('balance_$' + receiverid)

    payerbal == null
    recbal == null
    
    message.channel.send(message.author.id + ' and ' + receiverid)
  };



  
  if(command === 'args'){
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }




  if(command === 'givemoney500'){
    message.channel.send(`added 500 to your balance`)
    let balance = await db.get('balance_${message.author.id}')
    balance = balance + 500
    db.set('balance_${message.author.id}', balance)
  }

  if(command === `reset`){
    db.delete('balance_${message.author.id}')
  }
  
//End of commands
});






//TOKEN
client.login(process.env.TOKEN)