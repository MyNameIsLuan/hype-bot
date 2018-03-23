const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const {get} = require("snekfetch"); 
var giphy = require('giphy-api')();
var gis = require('g-image-search');
var prefix = "!";
var weather = require('weather-js');
const randomPuppy = require('random-puppy');
const subreddits = [
    "nsfw",
    "porn",
    "BonerMaterial",
    "adorableporn",
    "nsfw2",
    "Sexy",
    "NSFW_nospam"
]
const dogeredit = [
    "doge",
    "shibe"
]


client.login(process.env.BOT_TOKEN);

client.on('ready', () =>{
    console.log('HypeBot Iniciado com Sucesso'.green);
    client.user.setActivity("o servidor do Hyper", {type: 'WATCHING'});
});

client.on('guildMemberAdd', member =>{
    let newbie = member.guild.roles.find('name', "💜 Newbie's");
    member.addRole(newbie);
    const welcomeembed = new Discord.RichEmbed()
    .setAuthor("HypeBot", client.user.avatarURL)
    .addField("Olá, você entrou no servidor privado do Hyper:", "Saiba que se você foi convidado para este servidor, você é uma pessoa muito especial para mim e eu te considero pra krl <3")
    .setColor('00FFFF')
    .setFooter("HyperGalactic")
    .setTimestamp();
    member.send(welcomeembed);

    let canal = member.guild.channels.find('name', "join-info");
    const joininfo = new Discord.RichEmbed()
    .setAuthor('>> Join', member.user.avatarURL)
    .addField('Usuário:', `${member}`)
    .addField('ID:', `${member.id}`)
    .setFooter("HypeBot")
    .setTimestamp();
    canal.send(joininfo);

});

client.on('message', message =>{

    if(message.content.startsWith('!anunciar')){

        if(!message.member.roles.find('name', "🌐 Hyper")) {
            message.delete();
            message.reply("apenas o Hyper pode fazer anuncios. sz");
            return;
        }

        let anuncio = message.content.split(' ').slice(1).join(' ');
        let canal = message.member.guild.channels.get('409499420707520523');

        const announceembed = new Discord.RichEmbed()
        .setAuthor('HypeBot Anúncio', client.user.avatarURL)
        .setColor('00FFFF')
        .addField("Anúncio:", `${anuncio}`)
        .addField("Por:", `${message.author}`)
        .setFooter('HypeBot')
        .setTimestamp();
        message.delete();
        canal.send(announceembed);
        console.log("O Hyper fez o seguinte anuncio: ".green +`${anuncio}`.green);
    }

    if(message.content.startsWith("please say")) {
        if(!message.member.roles.find('name', "🌐 Hyper")) {
            message.delete();
            message.reply("apenas o Hyper pode usar este comando. sz");
            return;
        }
        let saying = message.content.split(' ').slice(2).join(' ');

        message.delete();
        message.channel.send(saying);
        console.log("O Hyper me fez falar: ".yellow + `${saying}`.yellow);
    }

    if(message.content.startsWith("!pic")) {

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

    if (message.content.startsWith("!randomcat")) {
		try {
			get('https://random.cat/meow').then(response => {
				message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[2]}`}]});
			});
		} catch (e) {
			return message.channel.send(e.stack);
		}
};

    if(message.content.startsWith("!img")) {
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

return}

        if(message.content.startsWith("!gif")) {
            let sb = message.content.split(' ').slice(1).join(' ');
			giphy.random({
				tag: sb,
				rating: 'g',
				fmt: 'json'
			}, function(err, res) {
				if (getValue("image_url", res)) {

					message.channel.send(getValue("image_url", res))
				}

});
        }

        if(message.content.startsWith("!tempo")) {
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

        if(message.content.startsWith("!nsfwimage")) {
            var randSubreddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

            if(!message.channel.nsfw) {
                message.channel.send("Use este comando apenas em um canal nsfw. =D");
                return;
            }

            randomPuppy(randSubreddit)
                .then(url => {
                    const embed = new Discord.RichEmbed()
                        .setFooter(`/r/${randSubreddit}`)
                        .setAuthor("NSFW Image")
                        .setDescription(`[Image URL](${url})`)   
                        .setImage(url);
                        message.channel.send({embed});
                });
            }

            if(message.content.startsWith("!safeloli")) {
    
                randomPuppy("CleanLoli")
                    .then(url => {
                        const embed = new Discord.RichEmbed()
                            .setFooter(`/r/CleanLoli`)
                            .setAuthor("Safe Loli")
                            .setDescription(`[Image URL](${url})`)   
                            .setImage(url);
                            message.channel.send({embed});
                    });
                }

         if(message.content.startsWith("!nsfwgif")) {
                    if(!message.channel.nsfw) {
                        message.channel.send("Use este comando apenas em um canal nsfw. =D");
                        return;
                    }
        
                    randomPuppy("NSFW_GIF")
                        .then(url => {
                            const embed = new Discord.RichEmbed()
                                .setAuthor("NSFW GIF")
                                .setFooter(`/r/NSFW_GIF`)
                                .setDescription(`[Image URL](${url})`)   
                                .setImage(url);
                                message.channel.send({embed});
                        });
                    }
        
              if(message.content.startsWith("!randomhentai")) {
                        if(!message.channel.nsfw) {
                            message.channel.send("Use este comando apenas em um canal nsfw. =D");
                            return;
                        }
            
                        randomPuppy("hentai")
                            .then(url => {
                                const embed = new Discord.RichEmbed()
                                    .setFooter(`/r/hentai`)
                                    .setAuthor("Hentai")
                                    .setDescription(`[Image URL](${url})`)   
                                    .setImage(url);
                                    message.channel.send({embed});
                            });
                        }
                        if(message.content.startsWith("!doges")) {
                            
                            var randdoge = dogeredit[Math.round(Math.random() * (dogeredit.length - 1))];
                            randomPuppy(randdoge)
                                .then(url => {
                                    const embed = new Discord.RichEmbed()
                                        .setFooter(`/r/${randdoge}`)
                                        .setAuthor("Doges")
                                        .setDescription(`[Image URL](${url})`)   
                                        .setImage(url);
                                        message.channel.send({embed});
                                });
                            }

                            if(message.content.startsWith("!minions")) {
                        
                                randomPuppy("Minions")
                                    .then(url => {
                                        const embed = new Discord.RichEmbed()
                                            .setFooter(`/r/Minions`)
                                            .setAuthor("Minions")
                                            .setDescription(`[Image URL](${url})`)   
                                            .setImage(url);
                                            message.channel.send({embed});
                                    });
                                }
                                if(message.content.startsWith("!memes")) {
                        
                                    randomPuppy("memes")
                                        .then(url => {
                                            const embed = new Discord.RichEmbed()
                                                .setFooter(`/r/memes`)
                                                .setAuthor("Memes")
                                                .setDescription(`[Image URL](${url})`)   
                                                .setImage(url);
                                                message.channel.send({embed});
                                        });
                                    }
                                    if(message.content.startsWith(prefix + "set")) {
                                       
                                        const args = message.content.slice(prefix.length).slice(' ');

                                        if(args[0] == "newbie") {
                                            let newbie = message.member.guild.roles.find('name', "💜 Newbie's");
                                            let member = message.mentions.members.first();
                                            if(member.roles.has(newbie.id)) {
                                                return message.channel.send("This member already have this role.");
                                            }
                                            member.addRole(newbie);
                                            message.channel.send(`Successfully. Now ${member} has role ${newbie}`)
                                        }

                                        if(args[0] == "friend") {
                                            let friend = message.member.guild.roles.find('name', "💙 Friend's");
                                            let member = message.mentions.members.first();
                                            if(member.roles.has(newbie.id)) {
                                                return message.channel.send("This member already have this role.");
                                            }
                                            member.addRole(newbie);
                                            message.channel.send(`Successfully. Now ${member} has role ${newbie}`)
                                        }
                                        }

                                        if(args[0] == "old") {
                                            let old = message.member.guild.roles.find('name', "💛 Old's");
                                            let member = message.mentions.members.first();
                                            if(member.roles.has(newbie.id)) {
                                                return message.channel.send("This member already have this role.");
                                            }
                                            member.addRole(newbie);
                                            message.channel.send(`Successfully. Now ${member} has role ${newbie}`)
                                        }
                                        

                                        if(args[0] == "best") {
                                            let best = message.member.guild.roles.find('name', "💚 Best's");
                                            let member = message.mentions.members.first();
                                            if(member.roles.has(newbie.id)) {
                                                return message.channel.send("This member already have this role.");
                                            }
                                            member.addRole(newbie);
                                            message.channel.send(`Successfully. Now ${member} has role ${newbie}`)
                                        }

                                        return message.channel.send("Incorrect Arguments, !set <newbie,friend,old,best> <user-mention>")
       
                                
});

function getValue(key, array) {
	for (var el in array) {
		if (array[el].hasOwnProperty(key)) {
			return array[el][key];
		}
	}
}
