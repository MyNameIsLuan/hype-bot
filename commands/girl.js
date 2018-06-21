module.exports.run = async(client, message, args) =>{

    let girl = message.member.guild.roles.find('name', "Girl");
    let member = message.member;
    if(member.roles.has(girl.id)) {
        return message.channel.send("You already have this role.");
    }
    member.addRole(girl);
    message.channel.send(`Successfully. Now ${member} has role ${girl.name}`);

}