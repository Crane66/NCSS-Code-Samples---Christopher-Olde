const express = require('express');
const app = express();
const port = 3000;
// Command Prefix is .example command
const prefix = '.'


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


// ================= START BOT CODE ===================
const {Client, Intents, Attachment} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const activities_list = [
    { type: 'PLAYING',  message: 'SONK!'  },
    { type: 'WATCHING', message: 'Sonking it out' },
    { type: 'WATCHING', message: 'Sonk is life' },
];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);

        client.user.setActivity(activities_list[index].message, { type: activities_list[index].type });
    }, 10000);
});




//client.on('message', msg => {
//  if (msg.content === 'ping') {
//    msg.reply('pong!');
//     permissionOverwrites: [
//        {
//            id: guild.me.roles.highest,
//            allow: ['VIEW_CHANNEL', 'MANAGE_CHANNELS', 'MANAGE_ROLES']
//        }
//    ]
//  }
//});
// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it 
// feature to hide the token we got earlier. 


client.login(process.env.TOKEN)

// their varible when they type it 
// unique varible for user ids 



//Commands 
client.on('messageCreate', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot);
  const args = message.content.slice(prefix.length).split("/ +/");
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    message.channel.send('pong!');
  };
});



//client.on('messageCreate', message=>{
//
//  let args = message.content.substring(prefix.length).split("/ +/");
//
//  switch(args[0]) { 
//    case "sonk": 
//      message.channel.send({files: [{attachment: './Sonks/Sonk1.png',}]
//      })
//    break;
//  }
//})



//Sonks

client.on('messageCreate', (message) => {
 if (message.content.startsWith('.sonk')) {


  const sonks = [
    ({files: [{attachment: './Sonks/Sonk1.png',}]}),
    ({files: [{attachment: './Sonks/Sonk2.png',}]}),
    ({files: [{attachment: './Sonks/Sonk3.png',}]}),
    ({files: [{attachment: './Sonks/Sonk4.png',}]}),
    ({files: [{attachment: './Sonks/sonk5.png',}]}),
    ({files: [{attachment: './Sonks/sonk6.png',}]}),
    ({files: [{attachment: './Sonks/sonk7.png',}]}),
    ({files: [{attachment: './Sonks/sonk8.png',}]}),
    ({files: [{attachment: './Sonks/sonk9.png',}]}),
    ({files: [{attachment: './Sonks/sonk10.png',}]}),
    ({files: [{attachment: './Sonks/sonk11.png',}]}),
    ({files: [{attachment: './Sonks/sonk12.png',}]}),
    ({files: [{attachment: './Sonks/sonk13.png',}]}),
    ({files: [{attachment: './Sonks/sonk14.png',}]}),
    ({files: [{attachment: './Sonks/sonk15.png',}]}),
    ({files: [{attachment: './Sonks/sonk16.png',}]}),
    ({files: [{attachment: './Sonks/sonk17.png',}]}),
    ({files: [{attachment: './Sonks/sonk18.png',}]}),
    ({files: [{attachment: './Sonks/sonk19.png',}]}),
    ({files: [{attachment: './Sonks/sonk20.png',}]}),
    ({files: [{attachment: './Sonks/sonk21.png',}]}),
    ({files: [{attachment: './Sonks/sonk22.png',}]}),
    ({files: [{attachment: './Sonks/sonk23.png',}]}),
    ({files: [{attachment: './Sonks/sonk24.png',}]}),
    ({files: [{attachment: './Sonks/sonk25.png',}]}),
  ];

   const response = sonks[Math.floor(Math.random() * sonks.length)];
  message.channel.send(response);
 }
});







//Candles

client.on('messageCreate', (message) => {
 if (message.content.startsWith('.candle')) {


  const wallpapers = [
    ({files: [{attachment: './Candles/Candle1.jpg',}]}),
    ({files: [{attachment: './Candles/Candle2.jpg',}]}),
    ({files: [{attachment: './Candles/Candle3.jpg',}]}),
    ({files: [{attachment: './Candles/Candle4.jpg',}]}),
    ({files: [{attachment: './Candles/Candle5.jpg',}]}),
    ({files: [{attachment: './Candles/Candle6.jpg',}]}),
    ({files: [{attachment: './Candles/Candle7.jpg',}]}),
    ({files: [{attachment: './Candles/Candle8.jpg',}]}),
  ];

   const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
  message.channel.send(response);
 }
});

