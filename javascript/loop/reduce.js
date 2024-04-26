const arr = [
    {id:1,productName:'hawkins',price:3200},
    {id:14,productName:'tomato',price:500},
    {id:11,productName:'potato',price:200},
    {id:15,productName:'sunsilk',price:300}
  ]
  
 const abc = arr.reduce((sum,item)=>{
    sum = sum + item.price
    return sum
    
  },0)
  console.log(abc)