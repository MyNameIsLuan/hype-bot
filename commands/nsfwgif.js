module.exports.run = async(client, message, args) =>{
    const randomPuppy = require('random-puppy');
    const Discord = require('discord.js');
    if(!message.channel.nsfw) {
        message.channel.send("Use este comando apenas em um canal nsfw. =D");
        return;
    }

    randomPuppy("NSFW_GIF")
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setAuthor("NSFW GIF")
                .setFooter(`/r/NSFW_GIF`)
                .setDescription(`[GIF URL](${url})`)   
                .setImage(url);
                message.channel.send({embed});
        });

}