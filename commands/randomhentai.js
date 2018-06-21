module.exports.run = async(client, message, args) =>{
    const randomPuppy = require('random-puppy');
    const Discord = require('discord.js');
    if(!message.channel.nsfw) {
        message.channel.send("Use este comando apenas em um canal nsfw. =D");
        return;
    }

    randomPuppy("hentai")
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setFooter(`/r/hentai`)
                .setAuthor("Hentai")
                .setDescription(`[Image URL](${url})`)   
                .setImage(url);
                message.channel.send({embed});
        });

}