const score = {
    mathScore : 100,
    scienceScore : 200,
    englishScore : 300
    
  }
  console.log(score['mathScore'])
  console.log(score['scienceScore'])
  console.log(score['englishScore'])

  let sum = 0
  for(let item in score)
  {
    sum = sum + score[item]
    console.log(item)
  }

  console.log(sum)