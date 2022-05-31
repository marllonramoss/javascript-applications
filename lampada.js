const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const turnOnAndOff = document.getElementById('turnOnAndOff');
const lamp = document.getElementById('lamp');

//verification functions

function lampIsBroken(){
    return lamp.src.indexOf ('quebrada') > -1;
}
function lampIsOff(){
    return lamp.src.indexOf ('off') > -1;
}

//action functions

function lampOn(){
    if(!lampIsBroken()){
lamp.src = './imgs/on.jpg'
    }
}

function lampOff(){
    if(!lampIsBroken()){
lamp.src = './imgs/off.jpg'
    }
}

function lampBroken(){
    if(!lampIsBroken()){
    lamp.src = './imgs/quebrada.jpg'
    }else{
        lamp.src='./imgs/off.jpg'
    }
}

function turnBoth(){
    if(!lampIsBroken()){
        if(!lampIsOff()){
            lampOff()
        }else{
            lampOn()
        }
        
        }
    }


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken)
turnOnAndOff.addEventListener('click', turnBoth);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
