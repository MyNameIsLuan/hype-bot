module.exports.run = async(client, message, args) =>{
    
    const randomPuppy = require('random-puppy');
    const Discord = require('discord.js');
    randomPuppy("memes")
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setFooter(`/r/memes`)
            .setAuthor("Memes")
            .setDescription(`[Image URL](${url})`)   
            .setImage(url);
            message.channel.send({embed});
    });
}