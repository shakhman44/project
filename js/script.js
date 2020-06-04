"use strict";

//alert("Hello!");
//const result = confirm("Are you here?");
//console.log(result);
//const answer = prompt("Вам есть 18?", "18");
//console.log(typeof(answer));
//const answers = [];
//answers[0] = prompt("Как ваше имя?", "");
//answers[1] = prompt("Как ваша фамилия?", ""); 
//answers[2] = prompt("Сколько вам лет?", "");

//document.write(answers);
//console.log(typeof(answers));
//alert(`Привет, ${answers[0]} ${answers[1]}!, Вам ${answers[2]} года!`);
//let incr = 10,
//    decr = 10;
//incr++;
//decr--;
//console.log(incr);
//console.log(decr);
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoiveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из полследних просмотренных фильмов?', ''),
      b = prompt('На сколько оцениваете его?', ''),
      c = prompt('Один из полследних просмотренных фильмов?', ''),
      d = prompt('На сколько оцениваете его?', '');

personalMoiveDB.movies[a] = b;
personalMoiveDB.movies[c] = d;

console.log(personalMoiveDB);