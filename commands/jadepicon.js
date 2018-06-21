module.exports.run = async(client, message, args) =>{

    const randomPuppy = require('random-puppy');
    const Discord = require('discord.js');
    randomPuppy("JadePicon")
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setFooter(`/r/JadePicon`)
            .setAuthor("Jade Picon")
            .setDescription(`[Image URL](${url})`)   
            .setImage(url);
            message.channel.send({embed});
    });

}