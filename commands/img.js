module.exports.run = async (client, message, args) =>{
    var gis = require('g-image-search');
    let image = message.content.split(' ').slice(1).join(' ');
    msg = message.channel.send("```Procurando...```").then((msg) =>
            gis(image).then(function logResults(results) {
                results = results.slice(0, 20)
                img = results[Math.floor(Math.random() * results.length)]
                if (img == undefined) {
                    msg.edit("```Um erro ocorreu```")
                    return
                }
                msg.edit(img)
                message.delete();
            }).catch(function(err) {
                console.log(err);
            }));

}