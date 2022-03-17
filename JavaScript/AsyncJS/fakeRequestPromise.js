const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject)=>{
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// Option 1 - Every block have seperate catch block
/*
fakeRequestPromise('books.com/page1')
    .then((response)=>{
        console.log("It Worked - 1")
        console.log(response)
        fakeRequestPromise('books.com/page2')
            .then((response)=>{
                console.log("It Worked - 2")
                console.log(response)
                fakeRequestPromise('books.com/page3')
                    .then((response)=>{
                        console.log("It Worked - 3")
                        console.log(response)
                    })
                    .catch((err)=>{
                        console.log("Not Working - 3")
                        console.log(err)
                    })
            })
            .catch((err)=>{
                console.log("Not Working - 2")
                console.log(err)
            })
    })
    .catch((err)=>{
        console.log("Not Working - 1")
        console.log(err)
    })
*/


// Option 2 - All Blocks have single catch block
fakeRequestPromise('books.com/page1')
    .then((response)=>{
        console.log("It Worked - 1")
        console.log(response)
        return fakeRequestPromise('books.com/page2')
    })
    .then((response)=>{
        console.log("It Worked - 2")
        console.log(response)
        return fakeRequestPromise('books.com/page3')
    })
    .then((response)=>{
        console.log("It Worked - 3")
        console.log(response)
    })
    .catch((err)=>{
        console.log("Not Working")
        console.log(err)
    })