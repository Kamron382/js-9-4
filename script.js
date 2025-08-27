let data = [
    { name: 'first', scr: "1.mp3", title: 'music that gave me yahyo' },
    { name:'second', scr: "2.mp3", title: 'music that gave me yahyo' }
]

let index = 0
let next = ()=>{
    index = (index + 1) % data.length
    loadMusic(data[index])  
}
let prev = ()=>{
    index = (index - 1 + data.length) % data.length
    loadMusic(data[index])  
}   
let loadMusic = (music)=>{
    let title = document.querySelector('.title')
    let audio = document.querySelector('#audio')
    title.innerText = music.title
    audio.src = music.scr
    audio.play()
}
window.onload = ()=>{
    loadMusic(data[index])
    let nextBtn = document.querySelector('.next')
    let prevBtn = document.querySelector('.prev')
    nextBtn.addEventListener('click', next)
    prevBtn.addEventListener('click', prev)
}
