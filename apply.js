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
    yt1.feature.apply(yt2,[3,"support"]) // yt1 ke method ko use kr sakte hai hai yt2 me 👍
    // apply me argument as an array hoga 👍
  let max = Math.max(1,2,3,4,5);
    console.log(max);
    let max1 = Math.max.apply(null,[1,2,3,4,5]);
    console.log(max1);


