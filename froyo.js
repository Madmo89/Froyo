//global variables
const flavors = [ "vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"];




//functions

function countflavors(obj, num){
    obj[num] = (++obj[num] || 1);
    return obj;
}
 const answer = flavors.reduce(countflavors, {});
