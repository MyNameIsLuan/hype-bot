module.exports.run = async(client, message, args) =>{


    let hype = message.member.guild.roles.find('name', "Hypesquader's");
    let member = message.member;
    if(member.roles.has(hype.id)) {
        return message.channel.send("You already have this role.");
    }
    member.addRole(hype);
    message.channel.send(`Successfully. Now ${member} has role ${hype.name}`);

}