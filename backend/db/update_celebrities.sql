UPDATE
    celebrities
SET
    twittername = $1, 
    twitter = $2,
    twitterid = $3, 
    current_likes = $4, 
    current_follows =$5,
    cost_amount = $6
WHERE
    twitterid = $3;