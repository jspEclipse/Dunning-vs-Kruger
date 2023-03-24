var player1Score = 0;
var player2Score = 0;
var acceleration1 = 1;
var acceleration2 = 1;
let base1 = 1;
let base2 = 1;
var pressedD = false;

setInterval(oneSecondFunction1, 1000);
setInterval(oneSecondFunction2, 1000);

document.addEventListener("keydown", (event) =>{ 
    console.log(event)
    switch(event.key){
        case 'q':
            if(10*base1 <= player1Score){
                player1Score -= 10*base1;
                base1 = base1+1;
            }
            console.log(base1);
            break;
        case 'a':
            if(5 <= player1Score){
                acceleration1 = acceleration1+1;
                player1Score -= 5;
            }
            console.log(acceleration1);
            break;
        
        case 'g':
        case 'b':
        case 'h':
        case 'c':
        case 'm':
        case 'e':
        case 'l':
        case 's':
        case 'r':
        case 'j':
            random();
             break;
            
        
    
    }
});
function oneSecondFunction1() {
    const score1HTML = document.getElementById("cnt1");
    const accel1 = document.getElementById("accel1");
    const scoreM = document.getElementById("base1");
    player1Score += acceleration1*base1;
    score1HTML.textContent = player1Score.toString();
    accel1.textContent = acceleration1.toString();
    scoreM.textContent = base1.toString();




    if(player1Score > 100){
        let element = document.getElementById('rule2');
        element.style.color = 'aliceblue';
    }
}

function oneSecondFunction2() {
    const score2HTML = document.getElementById("cnt2");
    const accel2 = document.getElementById("accel2");
    const scoreM2 = document.getElementById("base2");
    player2Score += acceleration2*base2;
    score2HTML.textContent = player2Score.toString();
    accel2.textContent = acceleration2.toString();
    scoreM.textContent = base2.toString();
}

function random(){
    player1Score = Math.floor(Math.random() * 10000);
    player2Score = Math.floor(Math.random() * 10000);
    acceleration1 = Math.floor(Math.random() * 10000);
    acceleration2 = Math.floor(Math.random() * 10000);    
    base1 = Math.floor(Math.random()*10);
    base2 = Math.floor(Math.random()*10)

}


