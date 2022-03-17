const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor=color
            resolve()
        }, delay)
    })
}


delayedColorChange('orange', 1000)
.then( () => delayedColorChange('red', 1000))
.then( () => delayedColorChange('yellow', 1000))
.then( () => delayedColorChange('green', 1000))
.then( () => delayedColorChange('lightblue', 1000))

