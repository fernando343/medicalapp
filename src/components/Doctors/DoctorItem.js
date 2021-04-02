import React from 'react'
import { Pressable } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { AirbnbRating, Card, Avatar, Icon } from 'react-native-elements';

const DoctorItem = ({ doctor = {} }) => {


    const {
        id = 1,
        picture = "https://i.postimg.cc/7Yc9mn8k/blank-profile-picture-973460-640.png",
        first_name = "Anthony",
        last_name = "roger",
        addres = null,
        country = "united states",
        city = "new york",
        state = "Ny",
        at_home = "yes",
        where_work = null,
        experience_years = 5,
        specialty = "neurosurgeon",
        raiting = 4
    } = doctor;

    return (
        <Pressable onPress={() => console.log("go page")
          }>
            <Card key={id} containerStyle={styles.doctorCard}>
                <View style={styles.contentCard}>
                    <View style={styles.cardInfo}>
                        <Avatar
                            size="medium"
                            rounded
                            source={{
                                uri: 'https://i.postimg.cc/7Yc9mn8k/blank-profile-picture-973460-640.png'
                            }}
                        />
                        <View style={styles.cardInfoText}>
                            <Text style={styles.cityText}>wellness</Text>
                            <Text style={styles.nameText}>{`dr ${first_name} ${last_name}`}</Text>
                            <Text style={styles.specialistText}>demartologist</Text>
                            <Text style={styles.countryText}>san francisco, ca | 5 min</Text>
                            <View style={styles.raiting}>
                                <AirbnbRating
                                    size={20}
                                    count={5}
                                    defaultRating={2}
                                    showRating={false}
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Icon
                            onPress={() => console.log('add favorite')}
                            name='heart'
                            color="rgba(204,48,137,0.5)"
                            type='material-community'
                            size={30} />
                    </View>
                </View>
            </Card>
        </Pressable>
    );
}

const styles = StyleSheet.create({
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
        marginLeft: -60
    }
})

export default DoctorItem;