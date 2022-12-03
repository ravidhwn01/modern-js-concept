const yt1 = {
name:"ravi",
content:"programming",
feature: function(){
    console.log(`very fast teaching  of ${this.name} and fav channel of ${this.content} `);
}
}
const yt2 = {
name:"raju",
content:"programming and dsa ",

}

yt1.feature();

yt1.feature.call(yt2) // yt1 ke method ko use kr sakte hai hai yt2 me 👍

