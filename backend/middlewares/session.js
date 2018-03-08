/**
 * Created by Porter on 2/7/2018.
 */
let id = 0;

module.exports = function( req, res, next ) {
    //const { session, method } = req;
    //console.log(req.passport)
    var session = req.session;
    var id = req.sessionID;
    // console.log(id)
    // console.log(session.user);
    if ( !session.user ) {
        session.user = {
            test:true
        };
    }
    console.log("SESSION ID",req.sessionID)

    next();
};
