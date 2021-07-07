//time 
let timeInitial = new Date().getTime();

function getRandomColor(){
    let letters = '0123456789ABCDEF'.split('');
    let color = '#'

    for(let i = 0; i<6; i++){
        color += letters [Math.round(Math.random()*15)];
    }
    return color;
}
function showImage(){
    //give it a position aleatory
    let top = Math.random()*400;
    let left = Math.random()*400;

    //give with and heigth
    let width = (Math.random()*200) + 100; // hundred is the minimum tamaño
    let returnValorColorAleatorio = getRandomColor();

    if(Math.random() > 0.5){
        document.getElementById('square').style = "border-radius : 50px ";
    }else{
        document.getElementById('square').style = "border-radius : 0px";
    }

    document.getElementById('square').style.display="block";
    document.getElementById('square').style.top = top;
    document.getElementById('square').style.left = left;
    document.getElementById('square').style.width = width;
    document.getElementById('square').style.height = width;
    document.getElementById('square').style.backgroundColor = returnValorColorAleatorio;
    
    //make the time reset
    timeInitial = new Date().getTime();
};
function showFigureAfterTimeOut(){
    setTimeout(showImage, Math.random() * 2000);
};
 
document.getElementById('square').onclick = function(){
    document.getElementById('square').style.display = "none";
    //calculate time ejection in the moment that you push the figure
    let timeFinal= new Date().getTime();
    let resultado = (timeFinal - timeInitial) /1000;
    
    document.getElementById('timee').innerHTML = `${resultado} segundos`;
        
     //show figuere between 2 seconds
     showFigureAfterTimeOut();
};


