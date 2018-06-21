
module.exports.run = async(client, message, args) =>{
    const randomPuppy = require('random-puppy');
    const Discord = require('discord.js');
    randomPuppy("CleanLoli")
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setFooter(`/r/CleanLoli`)
            .setAuthor("Safe Loli")
            .setDescription(`[Image URL](${url})`)   
            .setImage(url);
            message.channel.send({embed});
    });

}