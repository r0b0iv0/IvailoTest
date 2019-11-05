var playerNums;
var playerHealth = 5;
var enemyHealth = 5;
var enemyNums = new Array(4);
for (var i = 0; i < enemyNums.length; i++) {
    enemyNums[i] = Math.floor(Math.random() * 4) + 1;
}
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the numbers 1 2 3 4 with intervals in random order: ', function (answer) {
    playerNums = answer.split(" ", 4).map(Number);
    console.log("Enemy numbers are: ");
    console.log(enemyNums);
    console.log("Your numbers are: ");
    console.log(playerNums);
    rl.pause();
    for (var i = 0; i < enemyNums.length; i++) {
        if (playerNums[i] >= enemyNums[i]) {
            var dmg = playerNums[i] - enemyNums[i];
            console.log("Player deals " + dmg);
            enemyHealth -= dmg;
        }
        else {
            var dmg = enemyNums[i] - playerNums[i];
            console.log("Enemy deals " + dmg);
            playerHealth -= dmg;
        }
    }
    console.log(enemyHealth);
    console.log(playerHealth);
    ///
    if (enemyHealth > 0 && playerHealth > 0) {
        rl.question("Enter the numbers 1 2 3 4 with intervals in random \n      order again to finish off your enemy: ", function (answer) {
            console.log("Enemy numbers are: ");
            console.log(enemyNums);
            console.log("Your numbers are: ");
            console.log(playerNums);
            for (var i = 0; i < enemyNums.length; i++) {
                if (playerNums[i] >= enemyNums[i]) {
                    var dmg = playerNums[i] - enemyNums[i];
                    console.log("Player deals -" + dmg);
                    enemyHealth -= dmg;
                }
                else {
                    var dmg = enemyNums[i] - playerNums[i];
                    console.log("Enemy deals -" + dmg);
                    playerHealth -= dmg;
                }
            }
            if (enemyHealth <= 0) {
                console.log("You win");
            }
            else {
                console.log("You lose");
            }
            rl.close();
        });
    }
});
