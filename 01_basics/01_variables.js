const accountId = 1223344
let accountEmail = "aamir@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "a@a.com"
accountPassword = "112233"
accountCity = "Bengaluru"

/*
prefer not to use var
because of issue in block or functional scope
*/

// console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])