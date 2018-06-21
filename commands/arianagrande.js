module.exports.run = async(client, message, args) =>{
    if(message.channel.id != "432629233848680458") {
        message.channel.send("Acesso Negado, utilize este comando em <#432629233848680458>")
        return;
    }
    randomPuppy("ArianaGrande")
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setFooter(`/r/ArianaGrande`)
                .setAuthor("Ariana Grande")
                .setDescription(`[Image URL](${url})`)   
                .setImage(url);
                message.channel.send({embed});
        });
}