const yt1 = {
name:"ravi",
content:"programming",
feature: function(rating,support){
    console.log(`very fast teaching  of ${this.name} and fav channel of ${this.content} and give them ${rating} and ${support}`);
}
}
const yt2 = {
name:"raju",
content:"programming and dsa ",

}

yt1.feature(5,"support");
// call method 
yt1.feature.call(yt2,3,"support") // yt1 ke method ko use kr sakte hai hai yt2 me 👍

