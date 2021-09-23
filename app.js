const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let Index = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click',()=>{
    changeSlide('up')
})

downBtn.addEventListener('click',()=>{
    changeSlide('down')
})

document.addEventListener('keydown',(event)=>{
    if(event.key === 'ArrowUp'){
        changeSlide('up')
    }else if(event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(dir){
    if(dir === 'up'){
        Index++
        if(Index === slidesCount){
            Index = 0
        }
    }else if(dir === 'down'){
        Index--
        if(Index < 0){
            Index = slidesCount-1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${Index * height}px)`
    sidebar.style.transform = `translateY(${Index * height}px)`
}

