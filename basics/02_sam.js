const accountId = 144553
let accountEmail = "samrat@google.com"
var accountPassword = "12345"
accountCity = "asansol"
let accountState;

// accountId = 2 // not allowed


accountEmail = "samratc@.com"
accountPassword = "21212121"
accountCity = "kolkata"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])