function  *gen(length){

  const arr = [0,1]
  for(let i = 0 ; i<length ; i++)
  {
     arr.push(arr[i] + arr[i+1])
     yield arr[i]
  }
  console.log(arr)
}
const value = gen(5)
for(let number of value){
  console.log(number)
}

//////////////////////////////////////////////

/*function  *gen(maxVAlue){

  const arr = [0,1]
  let max = 0 ;
  let i = 0;
  while(max<maxVAlue)
  {
      arr.push(arr[i] + arr[i+1])
      max = arr[i] + arr[i+1];
      yield arr[i+1]
      i++
  }
  //console.log(arr)
}
const value = gen(50)
for(let number of value){
  console.log(number)
}*/
