//users
// id, firstname, lastname, image_name, image_data, coins, score

// assets
// userid, name, twitter, twitter_id, inital_likes, initial_mentions, initial_follows, current_likes, current_mentions, current_follows, cost

//celebrities
// name, twitter, twitter_id,current_likes, current_follows, cost

//games
// id, inprogress, start_time, end_time, users


module.exports = {

    updateUser: (req, res) => {
        let dbInstance = req.app.get('db');

        // console.log(req);
        console.log(req.query);
        const {
            id
        } = req.user;

        const {
            coins,
            score
        } = req.query;

        dbInstance.update_user([id, coins, score]).then(() => {
            dbInstance.find_user([id]).then(user => {
                res.status(200).send(user)
            }).catch(err => res.status(500).send(err))
        }).catch(err => res.status(500).send(err))
    },
    getUser: (req, res) => {
        let dbInstance = req.app.get('db');
        const {
            id
        } = req.user;
        //console.log(id)

        dbInstance.find_user([id]).then(user => {
            res.status(200).send(user)
        }).catch(err => res.status(500).send(err))

    },
    setAsset: (req, res) => {
        let dbInstance = req.app.get('db');
        const {
            id
        } = req.user;

        const {
            twitterid
        } = req.query;

        dbInstance.find_celebrity([twitterid]).then(celebrity => {

            let {
                name,
                twitter,
                twitterid,
                current_likes,
                current_follows,
                cost
            } = celebrity

            dbInstance.create_asset([userid, name, twitter, twitterid, current_likes, 0, current_follows, current_likes, 0, current_follows, cost]).then(() => {

            })
        })
    },

    updateAssets: (req, res) => {
        let dbInstance = req.app.get('db');

        // console.log(req);
        console.log(req.query);
        const {
            id
        } = req.user;

        const {
            twitter,
            current_likes,
            current_mentions,
            current_follows,
            current_cost
        } = req.query;

        dbInstance.update_asset([id, coins, score]).then(() => {
            dbInstance.get_assets([id]).then(user => {
                res.status(200).send(user)
            }).catch(err => res.status(500).send(err))
        }).catch(err => res.status(500).send(err))
    },
    getAssets: (req, res) => {
        let dbInstance = req.app.get('db');
        const {
            id
        } = req.user;
        //console.log(id)

        dbInstance.find_user([id]).then(user => {
            res.status(200).send(user)
        }).catch(err => res.status(500).send(err))

    },
    getCelebrities: (req, res)=>{
        let dbInstance = req.app.get('db');
        // const {
        //     id
        // } = req.user;
        //console.log(id)

        dbInstance.get_all_celebrities([]).then(user => {
            res.status(200).send(user)
        }).catch(err => res.status(500).send(err))
    }
};