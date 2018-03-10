const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser')
const session = require('express-session');
const controller = require(`${__dirname}/controller`);

const cors = require('cors');
const massive = require('massive');

const passport = require('passport');
const strategy = require(`${__dirname}/strategy.js`);

const config = require(`${__dirname}/config.js`);
const {
    domain,
    clientID,
    clientSecret,
    db
} = config;

const celebrities = require("../data/twitter_data/celebrityData");



//require('dotenv').config()

const createInitialSession = require(`${__dirname}/middlewares/session.js`);

const app = express();

app.use(cors());


//users 


massive(db)
    .then(dbInstance => {
        app.set('db', dbInstance);
        console.log("Set DB Instance")
        updateCelebs(dbInstance);
    });

function updateCelebs(dbInstance) {

    celebrities.sort((a, b) => b.mentions - a.mentions)


    //console.log(celebrities);
    celebrities.forEach(celeb => {
        // console.log("---------------------------------------------------")
        //console.log(`${JSON.stringify(celeb)}`)

        //cost is 50 for now
        //console.log(celeb.id.toString())
        dbInstance.find_celebrity([celeb.id.toString()]).then(match => {
            if (match.length) {
                dbInstance.update_celebrities([celeb.alias, celeb.username, celeb.id.toString(), 0, celeb.followers, 50]).then(() => {
                    console.log("UPDATED " + celeb.alias)
                });
            } else {
                dbInstance.create_celebrity([celeb.alias, celeb.username, celeb.id.toString(), 0, celeb.followers, 50]).then(() => {
                    console.log("ADDED "+celeb.alias)
                })
            }
        }).catch(err => {
            console.log(err)
        })
    })

    setTimeout(function () {
        updateCelebs(dbInstance)
    }, 3600000) // run once per hour
    return;

}


function runGame(res, end_time) {
    if (new Date(end_time) > new Date()) {
        let dbInstance = app.get('db');
        celebrities.sort((a, b) => b.mentions - a.mentions)

        celebrities.forEach(celeb => {
            // console.log("---------------------------------------------------")
            // console.log(`${JSON.stringify(celeb)}`)
            dbInstance.update_assets([celeb.twitterid, celeb.mentions]);
        })

        setTimeout(function () {
            runGame()
        }, 30000)
        return;
    } else {
        //game over
    }
}


// app.use(express.static(`../client/build`));
app.use(session({
    secret: 'fractionalcarpentry',
    resave: true,
    rolling: true,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser(function (user, done) {
    console.log("SERIALIZE")
    let {
        id,
        first,
        last
    } = user;
    done(null, {
        id: id || '',
        first: first || '',
        last: last || '',
        picture: 'https://robohash.org/me'
    });

});

passport.deserializeUser((user, done) => {
    console.log("DESERIALIZE")
    let {
        id,
        first,
        last
    } = user;
    let dbInstance = app.get('db');
    dbInstance.find_user([id]).then((match) => {
        if (match.length) {
            console.log("user exists")
            done(null, match[0])
        } else {
            dbInstance.create_user([id, first, last, 'https://robohash.org/me', null, 100, 0]).then((r) => {
                console.log("added new user to DB")
                dbInstance.find_user([id]).then((newMatch) => {
                    done(null, newMatch[0])
                })
            })
        }
    })

});

const authUrl = "/api/auth";
const userUrl = "/api/user";
const assetsUrl = "/api/assets";


app.get(`${authUrl}/login/`, passport.authenticate('auth0', {
    successRedirect: `${authUrl}/setUser/`,
    failureRedirect: `${authUrl}/login/`,
    failureFlash: true
}));

//TEST for GITHUB

app.get(`${authUrl}/setUser/`, passport.authenticate('auth0'), (req, res) => {
    console.log("SETUSER ENDPOINT")
    res.redirect(`${authUrl}/loggedin/`)
});

app.get(`${authUrl}/loggedin/`, (req, res, next) => {
    //console.log(req.user)
    console.log("LOGGEDIN ENDPOINT")
    if (!req.user) {
        console.log("REDIRECT TO LOGIN")
        res.status(403).redirect(`${authUrl}/login/`);
    } else {
        console.log("REDIRECT TO DASHBOARD")
        res.status(200).redirect("/#/");
    }
});

app.get(`${authUrl}/authenticated/`, (req, res, next) => {
    console.log(req.user)
    console.log("AUTHENTICATE ENDPOINT")
    if (!req.user) {
        res.send(false);
    } else {
        res.send(true);
    }
});

app.get(`${authUrl}/logout/`, (req, res, next) => {
    req.logout();
    delete req.session;
    delete req.user;
    res.status(200).redirect(`/#/auth`);
});

app.patch(`${userUrl}/update/`, controller.updateUser);
app.get(`${userUrl}/`, controller.getUser);

app.get(`${assetsUrl}/getAssets/`, controller.getAssets)
app.post(`${assetsUrl}/updateAssets/`, controller.setAsset)

app.get(`/api/admin/celebs`, controller.getCelebrities)

//app.delete(`/api/admin/reset`, controller.reset);

app.post(`/api/admin/startgame`, (req, res) => {
    runGame(res, req.end_time)
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`feeling porty --> ${port}`);
});