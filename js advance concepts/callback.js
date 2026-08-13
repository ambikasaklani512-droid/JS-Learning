//callback
function show(fnc){
    setTimeout(fnc, (Math.random())*1000);
}
show(function(){
    console.log("hey");
})

//callback hell
function profile(username, callback){  //ye func kahi or likha hoga or iske paas already data hoga
    setTimeout(()=>{
        console.log(`profile fetched of ${username}`);
        callback({username, _id:101101, age:20, email:"huihui@mail.com"});
    }, 2000);
}

function posts(id, callback){
    setTimeout(()=>{
        console.log(`posts fetched of id ${id}`);
        callback({_id: id, posts:["heyyy","heyyyyy","heyyyyygrl"]});
    }, 3000)
}

function savedPosts(id, callback){
    console.log("fetching saved posts...");
    setTimeout(()=>{
        callback({_id: id, savedPosts : ["heyyy","grl","goodmorning"]});
    },4000)
}
profile("harsh", function(profiledata){ //hume ye call wla chalana h isliye hume jo btana h hum callback me likh kr bhejenge
    console.log(profiledata);
    posts(profiledata._id, function(posts){
        console.log(posts);
        savedPosts(profiledata._id, function(savedPosts){
            console.log(savedPosts);
        })
    });
})

