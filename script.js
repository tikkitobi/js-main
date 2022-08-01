let arr = [
    name
];


for(let i = 0; i < Infinity; i++){
    let a = prompt('Введите команду:');
    let name = prompt('Введите имя:');
    if(a == 'add, ' + name){
        arr.push(name);
    }
    else if(a == 'del, ' + name){
        arr.pop(name);
    }
    else if(a == 'stop') {
        break;
    }
    else {
        console.log('error 404');
    }
}