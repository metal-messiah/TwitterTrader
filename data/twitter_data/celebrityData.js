const tAuth = require("../secret/twitter");
const Twitter = require('twitter');

let celebrityIds = require("./ids")


var client = new Twitter({
    consumer_key: tAuth.consumer_key,
    consumer_secret: tAuth.consumer_secret,
    access_token_key: tAuth.accesss_token_key,
    access_token_secret: tAuth.access_token_secret
});

let Celebrity = class {
    constructor(id) {

        this.id = id;
        this.mentions = 0;
        this.alias = "";
        this.username = "";
        this.followers = 0;
        this.picture = "";
        this.description = "";
        this.tweets = 0;
        this.color = "";

    }
}

let celebrities = celebrityIds.map((id) => {
    //console.log(id)
    return new Celebrity(id)
})


client.post('users/lookup', {
    user_id: celebrities.map(celeb => celeb.id).join(",")
}, function (error, tweets, response) {
    var data = JSON.parse(response.body)

    data.forEach(account => {
        var index = celebrities.findIndex(celeb => celeb.id == account.id);
        celebrities[index].alias = account.name;
        celebrities[index].username = account.screen_name;
        celebrities[index].followers = account.followers_count;
        celebrities[index].picture = account.profile_image_url;
        celebrities[index].description = account.description;
        celebrities[index].tweets = account.statuses_count;
        celebrities[index].color = account.profile_background_color;
        // console.log(celebrities[index].username)
    })

    client.stream('statuses/filter', {
        follow: celebrities.map(celeb => celeb.id).join(","),
        track: celebrities.map(celeb => celeb.alias).join(",")
    }, function (stream) {
        stream.on('data', function (event) {

            celebrities.forEach((celeb, i) => {
                if (event.text) {
                    var textdata = event.text.toLowerCase();
                    if (textdata.indexOf(celeb.alias.toLowerCase()) >= 0 || textdata.indexOf(celeb.username.toLowerCase()) >= 0) {
                        celebrities[i].mentions += 1
                    }
                }
            })

        });
        stream.on('error', function (error) {
            //console.log(error);
        });
    });

})



module.exports = celebrities;