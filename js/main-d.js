const picArray = [
  {
    'title': 'Title 1',
    'caption': 'Caption 1',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'filename': 'img/pic1.jpg',
  },
  {

    'title': 'Title 2',
    'caption': 'Caption 2',
    'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    'filename': 'img/pic2.jpg',
  },
  {
    'title': 'Title 3',
    'caption': 'Caption 3',
    'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    'filename': 'img/pic3.jpg',
  },
  {
    'title': 'Title 4',
    'caption': 'Caption 4',
    'description': 'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    'filename': 'img/pic4.jpg',
  },
  {

    'title': 'Title 5',
    'caption': 'Caption 5',
    'description': 'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    'filename': 'img/pic5.jpg',
  },
  {
    'title': 'Title 6',
    'caption': 'Caption 6',
    'description': 'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    'filename': 'img/pic6.jpg',
  }, {
    'title': 'Title 7',
    'caption': 'Caption 7',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'filename': 'img/pic7.jpg',
  },
  {

    'title': 'Title 8',
    'caption': 'Caption 8',
    'description': 'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    'filename': 'img/pic8.jpg',
  },
  {
    'title': 'Title 9',
    'caption': 'Caption 9',
    'description': 'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    'filename': 'img/pic9.jpg',
  },
];

// Put code of task D here
const main = document.querySelector('main');

for(let i = 0; i < picArray.length; i++){
const kuva = document.createElement('img');
kuva.src = picArray[i].filename;
kuva.alt = picArray[i].title;

const kuvateksti = document.createElement('figcaption');
kuvateksti.innerHTML = picArray[i].caption;

const figure = document.createElement('figure');
figure.appendChild(kuva);
figure.appendChild(kuvateksti);

const otsikko = document.createElement('h2');
otsikko.innerHTML = 'Article header 3';

const header = document.createElement('header');
header.appendChild(otsikko);

const kappale = document.createElement('p');
kappale.innerHTML = 'foo fofof of offo fo fofofof offooo foofo ofofo';

const artikkeli = document.createElement('article');
artikkeli.appendChild(otsikko);
artikkeli.appendChild(figure);
artikkeli.appendChild(kappale);
main.appendChild(artikkeli);



}

