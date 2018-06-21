module.exports.run = async(client, message, args) => {
    var weather = require('weather-js');
    let tempo = message.content.split(' ').slice(1).join(' ');

    if (!tempo) {
        message.channel.send("Você precisa especificar uma cidade.")
        return
    }

    weather.find({
        search: tempo,
        degreeType: 'C'
    }, function(err, result) {
        if (err) {
            message.channel.sendMessage(err)
        }

        if(!result) {
            message.channel.send("Eu não consegui encontrar esta cidade.");
            return;
        }

        if(!result[0]) {
            message.channel.send("Eu não consegui encontrar esta cidade.");
            return;
        }

        message.channel.send("Temperatura para: " + result[0].location.name +
         "\nTemperatura: " + result[0].current.temperature + 
         "°C\nSensação Térmica: " + result[0].current.feelslike + 
         "°C\n" + result[0].current.skytext + 
         "\n" + result[0].current.humidity +"% Humididade relativa do AR" + 
         "\nVelocidade do Vento: " + result[0].current.winddisplay);
    });

}