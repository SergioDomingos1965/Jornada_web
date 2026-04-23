// const users = ['ana', 'maria', 'paulo']
// let i = 0;
// while(i < users.length)
// {
//     console.log(users[i]);
//     i++;
// }

// const users = ['ana', 'maria', 'paulo']

// for(let name of users)
// {
//     console.log(name);
// }

// const user = {
//     name: 'Rodolfo',
//     age: 33,
//     street: "Rua dos Bobos"
// }

// for(let key in user)
// {
//     console.log(key);
// }

const users = [{name: 'Ana', age: 33, contact: '(19) 94343-3434'},
               {name: 'Paula', age: 21, contact: '(12) 93443-3434'},
]

users.forEach(function (item , index , array) {
    console.log( item.name);
    console.log(index);
    console.log(array);
});