const initalState = {

    firstname: "",
    lastname:"",
    gender:"",
    hairColor:"",
    eyeColor:"",
    hobby:"",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    id: "",
    picture:"",
    friends:[]

}

const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
const UPDATE_LASTNAME = "UPDATE_LASTNAME";
const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_EYECOLOR = "UPDATE_EYECOLOR";
const UPDATE_HAIRCOLOR = "UPDATE_HAIRCOLOR";
const UPDATE_HOBBY = "UPDATE_HOBBY";
const UPDATE_BIRTHDAY = "UPDATE_BIRTHDAY";
const UPDATE_BIRTHMONTH = "UPDATE_BIRTHMONTH";
const UPDATE_BIRTHYEAR = "UPDATE_BIRTHYEAR";
const UPDATE_PICTURE = "UPDATE_PICTURE";
const UPDATE_FRIENDS = "UPDATE_FRIENDS";

function reducer(state = initalState, action){
    console.log("REDUCER!")
    switch(action.type){
        case UPDATE_FIRSTNAME:
            console.log(UPDATE_FIRSTNAME);
            return Object.assign({}, state, {firstname: action.payload});

        case UPDATE_LASTNAME:
            return Object.assign({}, state, {lastname: action.payload});

        case UPDATE_GENDER:
            return Object.assign({}, state, {gender: action.payload});

        case UPDATE_EYECOLOR:
            return Object.assign({}, state, {eyeColor: action.payload});

        case UPDATE_HAIRCOLOR:
            return Object.assign({}, state, {hairColor: action.payload});

        case UPDATE_HOBBY:
            return Object.assign({}, state, {hobby: action.payload});

        case UPDATE_BIRTHDAY:
            return Object.assign({}, state, {birthDay: action.payload});

        case UPDATE_BIRTHMONTH:
            return Object.assign({}, state, {birthMonth: action.payload});

        case UPDATE_BIRTHYEAR:
            return Object.assign({}, state, {birthYear: action.payload});

        case UPDATE_PICTURE:
            return Object.assign({}, state, {picture: action.payload});

        case UPDATE_FRIENDS:
        return Object.assign({}, state, {friends: action.payload});

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

export function updateGender (gender) {
    return {
        type: UPDATE_GENDER,
        payload: gender
    }
}

export function updateEyeColor (eyeColor) {
    return {
        type: UPDATE_EYECOLOR,
        payload: eyeColor
    }
}

export function updateHairColor (hairColor) {
    return {
        type: UPDATE_HAIRCOLOR,
        payload: hairColor
    }
}

export function updateHobby (hobby) {
    return {
        type: UPDATE_HOBBY,
        payload: hobby
    }
}

export function updateBirthDay (birthDay) {
    return {
        type: UPDATE_BIRTHDAY,
        payload: birthDay
    }
}

export function updateBirthMonth (birthMonth) {
    return {
        type: UPDATE_BIRTHMONTH,
        payload: birthMonth
    }
}

export function updateBirthYear (birthYear) {
    return {
        type: UPDATE_BIRTHYEAR,
        payload: birthYear
    }
}

export function updatePicture (picture) {
    return {
        type: UPDATE_PICTURE,
        payload: picture
    }
}

export function updateFriends (friends) {
    return {
        type: UPDATE_FRIENDS,
        payload: friends
    }
}

export default reducer;