var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju.',
        foto: 'harry.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny.',
        foto: 'lew.jpeg'
    },
    {
        id: 3,
        title: 'Dzwonnik z Notre Dame.',
        desc: 'Film o Quasimodo.',
        foto: 'dzwonnik.jpeg'
    },
    {
        id: 4,
        title: 'Księżniczka i żaba',
        desc: 'Film o  o dziewczynie z Nowego Orleanu i księciu zamienionym w żabę, desperacko pragnącym być znów człowiekiem.',
        foto: 'ksiezniczka.png'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {}, movie.foto)
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów:'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));