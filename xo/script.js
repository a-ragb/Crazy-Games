let title  = document.querySelector('.title');
let tern = 'x'
let squares = [];
let cnt = 0;
let flag = false;
function win(n1 , n2 , n3){
    title.innerHTML = `${squares[n1]} is the winner`;
    document.getElementById('item' + n1).style.backgroundColor = 'red';
    document.getElementById('item' + n2).style.backgroundColor = 'red';
    document.getElementById('item' + n3).style.backgroundColor = 'red';
    setInterval(function(){title.innerHTML += '.'}, 1000);
    setTimeout(function(){location.reload()}, 3000);
}
function winner(){
    for(let i = 1 ; i <= 9 ; i++){ 
        squares[i]= document.getElementById('item' + i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        win(1,2,3);
        flag = true;
    }
    if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''){
        win(4,5,6);
        flag = true;
    }
    if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != ''){
        win(7,8,9);
        flag = true;
    }
    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
        win(1,4,7);
        flag = true;
    }
    if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
        win(2,5,8);
        flag = true;
    }
    if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        win(3,6,9);
        flag = true;
    }
    if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''){
        win(1,5,9);
        flag = true;
    }
    if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
        win(3,5,7);
        flag = true;
    }
    if(cnt == 9 && flag == false){
        title.innerHTML = 'Draw';
        setInterval(function(){title.innerHTML += '.'}, 1000);
        setTimeout(function(){location.reload()}, 3000);
    }

}
function game(id){
    let element = document.getElementById(id);
    if(tern === 'x' && element.innerHTML == ''){
        cnt++;
        element.innerHTML = 'x';
        tern = 'o';
        title.innerHTML = 'O Turn';
    }else if(tern === 'o' && element.innerHTML == ''){
        cnt++;
        element.innerHTML = 'o';
        tern = 'x';
        title.innerHTML = 'X Turn';
    }
    winner();
}
