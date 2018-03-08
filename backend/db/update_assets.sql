UPDATE
    assets
SET
    mentions = $2
WHERE
    twitterid = $1;