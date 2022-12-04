// by this method, we can bind an object to a common function, so that
// the function gives different result when its need.


const ravi = {
    name:"ravi",
    content:"programming",
    feature: function(rating,support){
        console.log(`very fast teaching  of ${this.name} and fav channel of ${this.content} and give them ${rating} rating and ${support}`);
    }

}

ravi.feature(4,"support");
const ytfunc = ravi.feature;
ytfunc(5,"support"); // this will give undefined because this is not binded to any object

const yt = ravi.feature.bind(ravi);
yt(5,"support");