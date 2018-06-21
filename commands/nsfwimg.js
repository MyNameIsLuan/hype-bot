const randomPuppy = require('random-puppy');
const subreddits = [
    "nsfw",
    "porn",
    "BonerMaterial",
    "adorableporn",
    "nsfw2",
    "Sexy",
    "NSFW_nospam"
]
var Discord = require('discord.js');
module.exports.run = async(client, message, args) =>{

    var randSubreddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    if(!message.channel.nsfw) {
        message.channel.send("Use este comando apenas em um canal nsfw. =D");
        return;
    }

    randomPuppy(randSubreddit)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setFooter(`/r/${randSubreddit}`)
                .setAuthor("NSFW Image")
                .setDescription(`[Image URL](${url})`)   
                .setImage(url);
                message.channel.send({embed});
        });

}