const {get} = require("snekfetch"); 
module.exports.run = async(client, message, args) =>{

    try {
        get('https://random.cat/meow').then(response => {
            message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[2]}`}]});
        });
    } catch (e) {
        return message.channel.send(e.stack);
    }

}