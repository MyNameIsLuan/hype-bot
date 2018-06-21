module.exports.run = async(client, message, args) =>{

    let image = message.content.split(' ').slice(1).join(' ');
    let author = message.author;

    if(!image) {
        message.delete();
        message.channel.send(`${author}, utilize !pic <link da sua imagem>`);
        return;
    } 

    message.delete();
    message.channel.send(`Imagem enviada por ${author}`, {file: `${image}`});

}