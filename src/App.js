import React from 'react';
import Movie from './components/movie';
import './App.css';

function App() {

  const [movieList, setMovieList] = React.useState([
    {
      id: 1,
      title: "Persuite of Happiness",
      rating: "9.2",
      image: "https://img.favpng.com/23/22/3/youtube-film-criticism-quotation-trailer-png-favpng-UUzYDp2askApXuqyd8FAFHaz3.jpg",
      actors: "Will Smith, Joden Smith, Thandie Newton, James Karen",
      liked: false,
      isWatched: false,
      discription: "The Pursuit of Happyness is a 2006 American biographical drama film directed by Gabriele Muccino and starring Will Smith as Chris Gardner, a homeless salesman. Smith's son Jaden Smith co-stars, making his film debut as Gardner's son, Christopher Jr. The screenplay by Steven Conrad is based on the best-selling 2006 memoir of the same name written by Gardner with Quincy Troupe. It is based on Gardner's nearly one-year struggle being homeless.[2] The unusual spelling of the film's title comes from a mural that Gardner sees on the wall outside the daycare facility his son attends."
    },
    {
      id: 2,
      title: "Udaan",
      rating: "8.2",
      image: "https://img.favpng.com/23/22/3/youtube-film-criticism-quotation-trailer-png-favpng-UUzYDp2askApXuqyd8FAFHaz3.jpg",
      actors: "Rajat Barmecha,Ronit Roy, Ram Kapoor, Manjot Singh",
      liked: false,
      isWatched: false,
      description: "Something something..."
    },
    {
      id: 3,
      title: "Swades",
      rating: "8.2",
      image: "https://img.favpng.com/23/22/3/youtube-film-criticism-quotation-trailer-png-favpng-UUzYDp2askApXuqyd8FAFHaz3.jpg",
      actors: "Gayatri Joshi, Shahrukh Khan, Kishori Ballal",
      liked: false,
      isWatched: false,
      description: "Something something..."
    },
    {
      id: 4,
      title: "Inception",
      rating: "8.8",
      image: "https://img.favpng.com/23/22/3/youtube-film-criticism-quotation-trailer-png-favpng-UUzYDp2askApXuqyd8FAFHaz3.jpg",
      actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page,Tom Hardy",
      liked: false,
      isWatched: false,
      description: "Something something..."
    },
    {
      id: 5,
      title: "Interstellar",
      rating: "8.6",
      image: "https://img.favpng.com/23/22/3/youtube-film-criticism-quotation-trailer-png-favpng-UUzYDp2askApXuqyd8FAFHaz3.jpg",
      actors:
        "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Matt Damon",
      liked: false,
      isWatched: false,
      description: "Something something..."
    }

  ]);

  const handleLike = function(id) {

    const likedMovie = movieList.map((mv) => {
      const copyMv = {...mv};
      if(copyMv.id === id) {
        if(copyMv.liked)
          copyMv.liked = false;
        else
          copyMv.liked = true;
      }
      return copyMv;
    });

    setMovieList(likedMovie);
  }

  const handleWatchList = function(id) {
    const watchListedMovie = movieList.map((mv) => {
      const cpyMv = {...mv};
      if(cpyMv.id === id) {
        if(cpyMv.isWatched)
        cpyMv.isWatched = false;
        else
          cpyMv.isWatched = true;
      }
      return cpyMv;
    });

    setMovieList(watchListedMovie);
  }

  const handleDelete = function(id) {
    const freshMovieList = movieList.filter((mv) => mv.id !== id);
    setMovieList(freshMovieList);
  }

  return (
    <div className="App">
      {movieList.map((mv) => (
        <Movie 
          key = {mv.id}
          id = {mv.id}
          image = {mv.image}
          title = {mv.title}
          rating = {mv.rating}
          actors = {mv.actors}
          liked = {mv.liked}
          isWatchList = {mv.isWatched}
          onLike = {handleLike}
          onDelete = {handleDelete}
          watchList = {handleWatchList}
        />
      ))}
    </div>
  );
}

export default App;
