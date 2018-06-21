module.exports.run = async(client, message, args) =>{

    if(!message.member.roles.find('name', "🌐 Hyper")) {
        message.delete();
        message.reply("apenas o Hyper pode usar este comando. sz");
        return;
    }

 

    var args = message.content.split(' ').slice(2).join(' ');

    if(!args) {
        return message.channel.send("Incorrect Arguments, use !set <user-mention> <newbie,friend,old,best>");
    }
    if(args == "newbie") {
        let newbie = message.member.guild.roles.find('name', "💜 Newbie's");
        let member = message.mentions.members.first();
        if(member.roles.has(newbie.id)) {
            return message.channel.send("This member already have this role.");
        }
        member.addRole(newbie);
        message.channel.send(`Successfully. Now ${member} has role ${newbie.name}`)
    }

    if(args == "friend") {
        let friend = message.member.guild.roles.find('name', "💙 Friend's");
        let member = message.mentions.members.first();
        if(member.roles.has(friend.id)) {
            return message.channel.send("This member already have this role.");
        }
        member.addRole(friend);
        message.channel.send(`Successfully. Now ${member} has role ${friend.name}`)
    }
    

    if(args == "old") {
        let old = message.member.guild.roles.find('name', "💛 Old's");
        let member = message.mentions.members.first();
        if(member.roles.has(old.id)) {
            return message.channel.send("This member already have this role.");
        }
        member.addRole(old);
        message.channel.send(`Successfully. Now ${member} has role ${old.name}`)
    }
    

    if(args == "best") {
        let best = message.member.guild.roles.find('name', "💚 Best's");
        let member = message.mentions.members.first();
        if(member.roles.has(best.id)) {
            return message.channel.send("This member already have this role.");
        }
        member.addRole(best);
        message.channel.send(`Successfully. Now ${member} has role ${best.name}`)
    }



}