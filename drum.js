document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#ch1Rec').addEventListener('click', btnCh1Click)
document.querySelector("#ch1Play").addEventListener("click", playCh1)

const ch1 = []
let ch1Start = Date.now()
const sounds = {
    KeyA: '#boom',
    KeyS: '#clap',
    KeyD: '#hihat',
    KeyF: '#kick',
    KeyG: '#snare',
    KeyH: '#tink',
    KeyJ: '#openhat',
    KeyK: '#ride',
}

function playCh1(){
    ch1.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}

function onKeyPress(e) {
    playSound(sounds[e.code]);
    const time = Date.now() - ch1Start;
    const sound = {
        sound: e.code,
        time: time
    }
    ch1.push(sound)
}

function playSound(id) {
    const audioTag = document.querySelector(id)
    audioTag.currentTime = 0
    audioTag.play()
}

function btnCh1Click() {
    ch1Start = Date.now()
}