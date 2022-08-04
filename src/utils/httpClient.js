const API = "https://api.themoviedb.org/3"

export function get(url){
   return fetch(API + url, {
        headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTBmOTZjNThiZDE0NzExOGU3NDZjYWI3NmJkZTFkOSIsInN1YiI6IjYyZDQ1ODk0NzJjMTNlMDA1MWZjZjYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QxnF8euDibuNB4VCiu9g6KkIqplKgJMo1qiJpXzWInQ",
            "Content-Type": "application/json;charset=utf-8",
        },
    })
    .then((result) => result.json());
}
