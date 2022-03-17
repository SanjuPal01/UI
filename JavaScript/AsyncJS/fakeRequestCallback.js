const fakeRequestCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(()=>{
        if(delay > 4000){
            failure('Connection Timeout :(')
        }else{
            success(`Here is Your fake Data from ${url}`)
        }
    },delay)
}

fakeRequestCallBack('books.com/page1', 
    function(response) {
        console.log("IT WORKED!! - 1")
        console.log(response)
        fakeRequestCallBack('books.com/page2', 
            function(response){
                console.log("IT WORKED - 2")
                console.log(response)
                fakeRequestCallBack('books.com/page3', 
                    function(response){
                        console.log("IT WORKED - 3")
                        console.log(response) 
                    },
                    function(err){
                        console.log("Not Working!!!! - 3")
                        console.log(err)
                    })  
                },
            function(err){
                console.log("Not Working!!!! - 2")
                console.log(err)
            })   
        },
    function(err){
        console.log("Not Working!!!! - 1")
        console.log(err)
    })