module.exports.run = async(client, message, args) =>{

    let men = message.member.guild.roles.find('name', "Gartic");
    let member = message.member;
    if(member.roles.has(men.id)) {
        return message.channel.send("You already have this role.");
    }
    member.addRole(men);
    message.channel.send(`Successfully. Now ${member} has role ${men.name}`);

}