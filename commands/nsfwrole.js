module.exports.run = async(client, message, args) =>{

    let nsfw = message.member.guild.roles.find('name', "🔞 NSFW");
    let member = message.member;
    if(member.roles.has(nsfw.id)) {
        return message.channel.send("You already have this role.");
    }
    member.addRole(nsfw);
    message.channel.send(`Successfully. Now ${member} has role ${nsfw.name}`);

}