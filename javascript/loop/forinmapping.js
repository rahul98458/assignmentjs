const scores = {
    mathScore: 'A',
    scienceScore: 'B',
    physicsScore: 'B'
  }
   
  const gradeMapping = {
    'A':100,
    'B': 80,
    'C': 60
  }

  // mathscre + sciencescore + physicsscore = 100 + 80 + 80 = 260 req output

  let sum = 0
  for(let item in scores)
  {
    console.log(gradeMapping[scores[item]])
    sum = sum + gradeMapping[scores[item]]
  }
  console.log(sum)