import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FavoritesContext } from '../../hooks/favoritesContext';
import BackgroudHeaderV from '../../layout/BackgroundHeaderV';


const FavoriteScreen = () => {

    const {favorites} = useContext(FavoritesContext)


    return (
        <View>
            <View style={styles.Header}>
                <BackgroudHeaderV />
                <Text style={styles.titleText}>Favorites</Text>
            </View>

            <View>
            {
                favorites.map((doctor) => {
                    const key = doctor.id;
                    return (
                        <Text key={key}>{doctor.first_name}</Text>
                    );
                })
            }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Header: {
        position: "relative",
    },
    titleText: {

        position: "absolute",
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold",
        marginLeft: 30,
        marginVertical: 50
    }
});
export default FavoriteScreen;