module.exports.run = async(client, message, args) =>{
    var giphy = require('giphy-api')();
    let sb = message.content.split(' ').slice(1).join(' ');
    giphy.random({
        tag: sb,
        rating: 'g',
        fmt: 'json'
    }, function(err, res) {
        if (getValue("image_url", res)) {

            message.channel.send(getValue("image_url", res))
        }
    })

}

function getValue(key, array) {
	for (var el in array) {
		if (array[el].hasOwnProperty(key)) {
			return array[el][key];
		}
	}
}