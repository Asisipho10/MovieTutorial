// import "../css/Favorites.css";
// import { useMovieContext } from "../contexts/MovieContext";
// import MovieCard from "../components/MovieCard";

// function Favorites() {
//   const { favorites } = useMovieContext();
  
//   if (favorites) {
//     return (
//       <div className="favorites">
//         <h2>Your Favorite Movies</h2>
//         <div className="movies-grid">
//           {favorites.map((movie) => (
//             <MovieCard movie={movie} key={movie.id} />
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="favorites-empty">
//       <h2>No Favorite Movies Yet</h2>
//       <p>Start adding movies to your favorites and they will appear here..</p>  
//     </div>
//   )  
// } 

// export default Favorites

import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h2>Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding movies to your favorites and they will appear here.</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
