let pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let randomNo = Math.floor(Math.random() * 10);
        if (randomNo > 5) resolve(`resolved with ${randomNo}`) // resolve code is passed to then function
        else reject(`rejected with ${randomNo}`);  // reject code is passed to catch function
    }, 3000);
})

//promise methods
// pr.then(function(val){
//     console.log(val);
// }).catch(function(val){
//     console.log(val);
// })

//async/await
async function abcd() {
    try {    //executes resolved code
        let val = await pr;
        console.log(val);
    } catch (err) {    //executes rejected code
        console.log(err);
    }
}

abcd();