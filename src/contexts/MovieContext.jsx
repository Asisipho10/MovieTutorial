// import { createContext, useState, useContext, useEffect } from "react";

// const MovieContext = createContext()

// export const useMovieContext = () => useContext(MovieContext)

// export const MovieProvider = ({children}) => {
//   const [favorites, setFavorites] = useState([])
  
//   useEffect(() => {
//     const storedFavs = localStorage.getItem("favorites")

//     if (storedFavs) setFavorites(JSON.parse(storedFavs))
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('favorites', JSON.stringify(favorites))
//   }, [favorites])

//   const addToFavorites = (movie) => {
//     setFavorites(prev => [...prev, movie])
//   }

//   const removeFromFavorites = (movieId) => {
//     setFavorites(prev => prev.filter(movie => movie.id !== movieId))
//   }

//   const isFavorite = (movieId) => {
//     return favorites.some(movie => movie.id === movieId)
//   }

//   const value = {
//     favorites,
//     addToFavorites,
//     removeFromFavorites,
//     isFavorite
//   }
//   return (
//     <MovieContext.Provider value={value}>
//       {children}
//     </MovieContext.Provider>
//   )
// }


import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    // Initialize state with favorites from localStorage
    const storedFavs = localStorage.getItem("favorites");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  // Update localStorage whenever favorites change
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      const updatedFavorites = [...prev, movie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Ensure immediate sync
      return updatedFavorites;
    });
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.filter((movie) => movie.id !== movieId);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Ensure immediate sync
      return updatedFavorites;
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
