var Discord = require('discord.js');
module.exports.run = async(client, message, args) =>{

    
    if(!message.member.roles.find('name', "🌐 Hyper")) {
        message.delete();
        message.reply("apenas o Hyper pode fazer anuncios. sz");
        return;
    }

    let anuncio = message.content.split(' ').slice(1).join(' ');
    let canal = message.member.guild.channels.get('409499420707520523');

    const announceembed = new Discord.RichEmbed()
    .setAuthor('HypeBot Anúncio', client.user.avatarURL)
    .setColor('00FFFF')
    .addField("Anúncio:", `${anuncio}`)
    .addField("Por:", `${message.author}`)
    .setFooter('HypeBot')
    .setTimestamp();
    message.delete();
    canal.send(announceembed);
    console.log("O Hyper fez o seguinte anuncio: ".green +`${anuncio}`.green);


}