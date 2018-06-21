const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
var prefix = "!";


client.login(process.env.BOT_TOKEN);

client.on('ready', () =>{
    console.log('HypeBot Iniciado com Sucesso'.green);
    client.user.setActivity("o servidor do Hyper", {type: 'WATCHING'});
});

client.on('guildMemberAdd', member =>{
    let newbie = member.guild.roles.find('name', "💜 Newbie's");
    member.addRole(newbie);
    const welcomeembed = new Discord.RichEmbed()
    .setAuthor("HypeBot", client.user.avatarURL)
    .addField("Olá, você entrou no servidor privado do Hyper:", "Saiba que se você foi convidado para este servidor, você é uma pessoa muito especial para mim e eu te considero pra krl <3")
    .setColor('00FFFF')
    .setFooter("HyperGalactic")
    .setTimestamp();
    member.send(welcomeembed);

    let canal = member.guild.channels.find('name', "join-info");
    const joininfo = new Discord.RichEmbed()
    .setAuthor('>> Join', member.user.avatarURL)
    .addField('Usuário:', `${member}`)
    .addField('ID:', `${member.id}`)
    .setFooter("HypeBot")
    .setTimestamp();
    canal.send(joininfo);

});

client.on('message', message =>{


    var autor = message.author;
    var msg = message.content.toUpperCase();
    var cont = message.content.slice(prefix.lenght).split('');

if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
}

 
});


