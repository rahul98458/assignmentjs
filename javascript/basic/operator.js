//Q1 create two constants, add them assign to a new constants
    const x = 10
    const y = 20
    const z = x + y
    console.log(z)


//Check below code, output should be false by comparing. console.log the answer
const a = 10
const b = '10'
const c = (a===b)
console.log(c)


// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"

const randNum = Math.random() * 5;
const roundOffVal = Math.floor(randNum)
console.log(randNum)
console.log(roundOffVal)
if(roundOffVal<3)
console.log('lesser')
else if(roundOffVal == 3)
console.log('equal')
else
console.log('greataer')