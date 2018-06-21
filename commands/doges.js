module.exports.run = async(client, message, args) =>{

    const dogeredit = [
        "doge",
        "shibe"
    ]
    const randomPuppy = require('random-puppy');
    const Discord = require('discord.js');    

    var randdoge = dogeredit[Math.round(Math.random() * (dogeredit.length - 1))];
    randomPuppy(randdoge)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setFooter(`/r/${randdoge}`)
                .setAuthor("Doges")
                .setDescription(`[Image URL](${url})`)   
                .setImage(url);
                message.channel.send({embed});
        });
    }