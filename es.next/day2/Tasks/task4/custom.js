let myObj = {
    firstname: "ahmed",
    age: 20,
    lastname:'ayman',
    [Symbol.iterator]: function () {
      let  keys = Object.keys(myObj);
      let  counter = 0;
      let  length = keys.length;

      return {
        "next":function (){
         
            if(counter == length)
            {
              return {
                value: undefined,
                done: true,
              };
            }
            else
            {
              return {
                value: myObj[keys[counter++]],
                done: false,
              };
            }
            
        },
      };
    },
  };

  for(let x of myObj)
  {
    console.log(x);
  }