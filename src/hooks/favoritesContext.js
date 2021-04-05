import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = (doctor) => {
    setFavorites([...favorites, doctor]);
  };

  const remove = (doctor) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== doctor.placeId
    );

    setFavorites(newFavorites);
  };
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};