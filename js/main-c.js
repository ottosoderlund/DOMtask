'use strict';
// Put code of task C here
const main = document.querySelector('main');

const kuva = document.createElement('img');
kuva.src = 'http://placekitten.com/320/160';
kuva.alt = 'title';

const kuvateksti = document.createElement('figcaption');
kuvateksti.innerHTML = 'Caption';

const figure =  document.createElement('figure');
figure.appendChild(kuva);
figure.appendChild(kuvateksti);

const otsikko = document.createElement('h2');
otsikko.innerHTML = 'Article header 2';

const header = document.createElement('header');
header.appendChild(otsikko);

const kappale = document.createElement('p');
kappale.innerHTML = 'Here is some text. foooooo fooooo foooooo foofof fo fo fofofoo';

const artikkeli = document.createElement('article');
artikkeli.appendChild(otsikko);
artikkeli.appendChild(figure);
artikkeli.appendChild(kappale);

main.appendChild(artikkeli);
