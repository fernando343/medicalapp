import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Card, AirbnbRating  } from 'react-native-elements';
import { FavoritesContext } from '../../hooks/favoritesContext';
import BackgroudHeaderV from '../../layout/BackgroundHeaderV';


const FavoriteScreen = () => {

    const { favorites } = useContext(FavoritesContext)


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
                            <Card key={key} containerStyle={styles.doctorCard}>
                                <View style={styles.contentCard}>
                                    <View style={styles.cardInfo}>

                                        {doctor.picture ?
                                            <Avatar
                                                size="medium"
                                                rounded
                                                source={{
                                                    uri: doctor.picture
                                                }}
                                            />
                                            : <Avatar
                                                size="medium"
                                                rounded
                                                source={{
                                                    uri: 'https://i.postimg.cc/7Yc9mn8k/blank-profile-picture-973460-640.png'
                                                }}
                                            />
                                        }

                                        <View style={styles.cardInfoText}>
                                            <Text style={styles.cityText}>{doctor.city}</Text>
                                            <Text style={styles.nameText}>{`dr ${doctor.first_name} ${doctor.last_name}`}</Text>
                                            <Text style={styles.specialistText}>{doctor.specialty}</Text>
                                            <Text style={styles.countryText}>{`${doctor.city}, ${doctor.state}`}</Text>
                                            <View style={styles.raiting}>
                                                <AirbnbRating
                                                    size={20}
                                                    count={5}
                                                    defaultRating={doctor.raiting}
                                                    showRating={false}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Card>
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
    },
    doctorCard: {
        borderRadius: 20,
    },
    contentCard: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cardInfo: {
        flexDirection: "row",
    },
    cardInfoText: {
        marginLeft: 30,
    },
    cityText: {
        textTransform: "capitalize",
        fontSize: 10,
        color: "#089DE3"
    },
    nameText: {
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: 16
    },
    specialistText: {
        textTransform: "capitalize",
        fontSize: 15,
        color: "#A7A7A7"
    },
    countryText: {
        textTransform: "capitalize",
        fontSize: 15,
        color: "#A7A7A7"
    },
    raiting: {
        marginTop: 5,
        marginLeft: -10
    }
});
export default FavoriteScreen;