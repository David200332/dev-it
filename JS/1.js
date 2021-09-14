const deepEqual = (obj1, obj2) => {
    return JSON.stringify(obj1)===JSON.stringify(obj2);
}

deepEqual({name: 'test'}, {name: 'test'}) // output true
deepEqual({name: 'test'}, {name: 'test1'}) // output false
deepEqual({name: 'test'}, {name: 'test', age: 10}) // false