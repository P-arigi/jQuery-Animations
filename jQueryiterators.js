/* EACH it accepts a callback, and that callback can take
two arguments:the first refers to the current index,
and the second refers to the  current element corresponding to that 
index */

$("li").each(function(i,el){
    console.log("Day " + i + ": " + $(el).text());
})

/* MAP:map creates a new jQuery object that contains
the return values from the callback inside of map */

var summary=$("li").map(function(i,el){
    return $("<p>",{
        text:"On day "+ i + ", I earned " +$(el).text()
    });

});

// summary is now a jQuery object which contains one p tag for each li

$("body").append(summary.get()); 
// this appends the summary to the page.
// The .get method turns summary, a jQuery object, into an array.
// Without invoking get, you'll receive a TypeError.


/* Filter:uppose we wanted red text highlighting the days we lost money. Here's how we could achieve that effect using filter:  */

$("li").filter(function(i,el){
    $(el).text()[0]==="-";
}).css("color","red");