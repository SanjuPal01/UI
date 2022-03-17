// Simplest Version

console.log("Sending Request to Change Color")
setTimeout(()=>{
    document.body.style.backgroundColor="orange"
}, 1000)
console.log("Color Changed - Server Closing")


// But what if we need to change color after every 1s for the next 5s
// Option1 - But here you can see we need to do calculation by our own
/*
setTimeout(()=>{
    document.body.style.backgroundColor="orange"
}, 1000)
setTimeout(()=>{
    document.body.style.backgroundColor="red"
}, 2000)
setTimeout(()=>{
    document.body.style.backgroundColor="yellow"
}, 3000)
setTimeout(()=>{
    document.body.style.backgroundColor="green"
}, 4000)
setTimeout(()=>{
    document.body.style.backgroundColor="lightblue"
}, 5000)
*/


// Option 2 - we can Put one timeout inside other - You can clearly see how hard to manage it is
/*
setTimeout(()=>{
    document.body.style.backgroundColor="orange"
    setTimeout(()=>{
        document.body.style.backgroundColor="red"
        setTimeout(()=>{
            document.body.style.backgroundColor="yellow"
            setTimeout(()=>{
                document.body.style.backgroundColor="green"
                setTimeout(()=>{
                    document.body.style.backgroundColor="lightblue"
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
*/


// Option 3 - Still too much nesting
const delayedColorChange = (color, delay, doNext) => {
    setTimeout(()=>{
        document.body.style.backgroundColor=color
        doNext && doNext()
    }, delay)
}

delayedColorChange('orange', 1000, ()=>{
    delayedColorChange('red', 1000, ()=>{
        delayedColorChange('yellow', 1000, ()=>{
            delayedColorChange('green', 1000, ()=>{
                delayedColorChange('lightblue', 1000, ()=>{
        
                })
            })
        })    
    })
})


