'use strict';

var favorite_passtime
var favorite_videogame
var favorite_genre_of_music
var preference_between_cats_and_dogs
var best_final_fantasy





var favorite_passtime_correct_answer = 'y'
var favorite_videogame_correct_answer = 't'
var favorite_genre_of_music_correct_answer = 'f'
var preference_between_cats_and_dogs_correct_answer = 'n'
var best_final_fantasy_correct_answer = 'n'



console.log(favorite_passtime + 'y or n')
favorite_passtime = prompt('Do you think that rob obsessivly plays video games? Y or N')
if(favorite_passtime === favorite_passtime_correct_answer){
  alert('How could he not come on now')}
else{
  alert('Well your wrong because gaming is life!')
}

console.log(favorite_videogame + 't or f')
favorite_videogame = prompt('Kingdom Hearts is Robs favorite videogame? T or F')
if(favorite_videogame === favorite_videogame_correct_answer){
  alert('Its just so beutiful!')}
else{
  alert('Find me a better one then eh!!!')
}

console.log(favorite_genre_of_music + 't or f')
favorite_genre_of_music = prompt('Robs favorite genre of music is country! T or F')
if(favorite_genre_of_music === favorite_genre_of_music_correct_answer){
  alert('Never was my thing to be honest. All about that ROCK YEAH!!!')}
else{
  alert('Yeah.. noooo nooo mister superman not here')
}

console.log(preference_between_cats_and_dogs + 't or f')
preference_between_cats_and_dogs = prompt('If Rob had to save 2 lives a cat or a dog, He would definitely save the cat! T or F')
if(preference_between_cats_and_dogs === preference_between_cats_and_dogs_correct_answer){
  alert('Cat: hey human remember how i use your furniture as a scratching post? Me: Come here dog!')}
else{
  alert('and betray mans best friend ha!! Never.')
}

console.log(best_final_fantasy + 'Y or N')
best_final_fantasy = prompt('Is Final Fantasy 9 the best final fantasy of all time? Y or N')
if(best_final_fantasy === best_final_fantasy_correct_answer){
  alert('Final fantasy 7 all day!!!')}
else{
  alert('Negative!!! Final Fantasy 9 was by far the absolute worst!');
}

