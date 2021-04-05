import React, { useContext } from 'react'
import { Icon } from 'react-native-elements';
import { FavoritesContext } from '../../hooks/favoritesContext'


export const Favorite = ({ doctor }) => {
    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

    const isFavorite = favorites.find((d) => d.Id === doctor.Id);

    console.log(isFavorite);

    return (

        <Icon
            onPress={() => !isFavorite ? addToFavorites(doctor) : removeFromFavorites(doctor)}
            name='heart'
            color={isFavorite ? "red" : "rgba(204,48,137,0.5)"}
            type='material-community'
            size={30} />


    );


}
