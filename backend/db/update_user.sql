UPDATE
    users
SET
    firstname = $2,
    lastname = $3,
    gender = $4,
    haircolor = $5,
    eyecolor = $6,
    hobby = $7,
    birthday = $8,
    birthmonth = $9,
    birthyear = $10,
    picture = $11
WHERE
    id = $1;