module.exports.run = async(client, message, args) =>{

    let nitro = message.member.guild.roles.find('name', "Nitro's");
    let member = message.member;
    if(member.roles.has(nitro.id)) {
        return message.channel.send("You already have this role.");
    }
    member.addRole(nitro);
    message.channel.send(`Successfully. Now ${member} has role ${nitro.name}`);

}