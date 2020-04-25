var movies = [
    {
        title: "In Bruges",
        rating: 5,
        haveWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        haveWatched: false
    },
    {
        title: "Max Max Fury Road",
        rating: 5,
        haveWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        haveWatched: false
    }
];

movies.forEach(function(movie){
    console.log(buildString(movie));
});

function buildString(movie){
    var result = "You have ";
    if(movie.haveWatched === true) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}