const obj = {
  name: 'ahmed16',
  address: 'address',
  age: 25
}

const handler = {
  set(target, prop, value) {

    if (target.hasOwnProperty(prop)) {
        if(prop == 'age' && (value <25 || value>60))
        {
          throw 'not valid age';
        }
        else
        {
          target[prop]=value;
        }

        if(prop == 'address' && typeof value != 'string')
        {
          throw 'not valid address';
        }
        else
        {
          target[prop]=value;
        }


        if(prop == 'name' &&  value.length != 7 && typeof value == 'string')
        {
          throw 'not valid name';
        }
        else
        {
          target[prop]=value;
        }
    }
    else {
      throw 'non existing property'
    }
  },
  get(target, prop) {
    if (target.hasOwnProperty(prop)) {
      return target[prop]
    }
    else {
      throw 'invalid Property'
    }
  }

}

const myProxy = new Proxy(obj, handler)
// myProxy.x=50
myProxy.age = 30
myProxy.address = 'address'
myProxy.name = 'ahmed16'

console.log(myProxy)
