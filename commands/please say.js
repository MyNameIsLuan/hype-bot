module.exports.run = async(client, message, args) =>{

    if(!message.member.roles.find('name', "🌐 Hyper")) {
        message.delete();
        message.reply("apenas o Hyper pode usar este comando. sz");
        return;
    }
    let saying = message.content.split(' ').slice(2).join(' ');

    message.delete();
    message.channel.send(saying);
    console.log("O Hyper me fez falar: ".yellow + `${saying}`.yellow);

}