

  let playerNums:number[]
  let playerHealth:number = 5


  let enemyHealth:number = 5
  let enemyNums:number[] = new Array (4)

  
for (let i = 0; i < enemyNums.length; i++) {
    enemyNums[i] = Math.floor(Math.random() * 4) + 1
  }
  
  

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  

    rl.question('Enter the numbers 1 2 3 4 with intervals in random order: ', (answer:string) => {
      playerNums = answer.split(" ", 4).map(Number);
      
      console.log(`Enemy numbers are: `)
      console.log(enemyNums)
      console.log(`Your numbers are: `)
      console.log(playerNums)

  
      rl.pause();

      for (let i = 0; i < enemyNums.length; i++) {
        if (playerNums[i] >= enemyNums[i]) {
          let dmg = playerNums[i] - enemyNums[i]
          console.log(`Player deals ` + dmg)
          enemyHealth -= dmg
        } else {
          let dmg = enemyNums[i] - playerNums[i]
          console.log(`Enemy deals ` + dmg)
          playerHealth -= dmg
        }
      }
      console.log(enemyHealth)
      console.log(playerHealth)
    
  
      ///
      if(enemyHealth > 0 && playerHealth > 0){
      rl.question(`Enter the numbers 1 2 3 4 with intervals in random 
      order again to finish off your enemy: `, (answer:string) => {
        
        console.log(`Enemy numbers are: `)
        console.log(enemyNums)
        console.log(`Your numbers are: `)
        console.log(playerNums)
       

        for (let i = 0; i < enemyNums.length; i++) {
          if (playerNums[i] >= enemyNums[i]) {
            let dmg = playerNums[i] - enemyNums[i]
            console.log(`Player deals -` + dmg)
            enemyHealth -= dmg
          } else {
            let dmg = enemyNums[i] - playerNums[i]
            console.log(`Enemy deals -` + dmg)
            playerHealth -= dmg
          }
        }

        if(enemyHealth <= 0){
          console.log(`You win`)
        } else {
          console.log(`You lose`)
        }

        rl.close();

      })
    }
  })



  
      
        
    
    
    
  
    
  



    

  
