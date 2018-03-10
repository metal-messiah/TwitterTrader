const initalState = {

    //user
    firstname: "",
    lastname:"",
    imagename:"",
    imagedata:"",
    coins:100,
    score:0,
    //assets
    assets: [],
    //celebrities
    celebrities: [],
    //games 
    games:[],
    //app information
    activepanel: ""

}

const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
const UPDATE_LASTNAME = "UPDATE_LASTNAME";
const UPDATE_IMAGENAME = "UPDATE_IMAGENAME";
const UPDATE_IMAGEDATA = "UPDATE_IMAGEDATA";
const UPDATE_COINS = "UPDATE_COINS";
const UPDATE_SCORE = "UPDATE_SCORE";
const UPDATE_ASSETS = "UPDATE_ASSETS";
const UPDATE_CELEBRITIES = "UPDATE_CELEBRITIES";
const UPDATE_GAMES = "UPDATE_GAMES";
const UPDATE_ACTIVEPANEL = "UPDATE_ACTIVEPANEL";

function reducer(state = initalState, action){
    console.log("REDUCER!")
    switch(action.type){
        case UPDATE_FIRSTNAME:
            console.log(UPDATE_FIRSTNAME);
            return Object.assign({}, state, {firstname: action.payload});

        case UPDATE_LASTNAME:
            return Object.assign({}, state, {lastname: action.payload});

        case UPDATE_IMAGENAME:
            return Object.assign({}, state, {imagename: action.payload});

        case UPDATE_IMAGEDATA:
            return Object.assign({}, state, {imagedata: action.payload});

        case UPDATE_COINS:
            return Object.assign({}, state, {coins: action.payload});

        case UPDATE_SCORE:
            return Object.assign({}, state, {score: action.payload});

        case UPDATE_ASSETS:
            return Object.assign({}, state, {assets: action.payload});

        case UPDATE_CELEBRITIES:
            return Object.assign({}, state, {celebrities: action.payload});

        case UPDATE_GAMES:
            return Object.assign({}, state, {games: action.payload});

        case UPDATE_ACTIVEPANEL:
            return Object.assign({}, state, {activepanel: action.payload});

        default: return state;
    }
}

export function updateFirstname (firstname) {
    console.log(UPDATE_FIRSTNAME)
    return {
        type: UPDATE_FIRSTNAME,
        payload: firstname
    }
}

export function updateLastname (lastname) {
    return {
        type: UPDATE_LASTNAME,
        payload: lastname
    }
}

export function updateImageName (imagename) {
    return {
        type: UPDATE_IMAGENAME,
        payload: imagename
    }
}

export function updateImageData (imagedata) {
    return {
        type: UPDATE_IMAGEDATA,
        payload: imagedata
    }
}

export function updateCoins (coins) {
    return {
        type: UPDATE_COINS,
        payload: coins
    }
}

export function updateScore (score) {
    return {
        type: UPDATE_SCORE,
        payload: score
    }
}

export function updateAssets (assets) {
    return {
        type: UPDATE_ASSETS,
        payload: assets
    }
}

export function updateCelebrities (celebrities) {
    return {
        type: UPDATE_CELEBRITIES,
        payload: celebrities
    }
}

export function updateGames (games) {
    return {
        type: UPDATE_GAMES,
        payload: games
    }
}

export function updateActivePanel (activepanel) {
    return {
        type: UPDATE_ACTIVEPANEL,
        payload: activepanel
    }
}

export default reducer;