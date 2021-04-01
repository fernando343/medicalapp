import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Card, Avatar, Icon } from 'react-native-elements';

const AppoimentItem = ({ appoiment = {} }) => {

    const {
        id = 1,
        picture = "https://i.postimg.cc/7Yc9mn8k/blank-profile-picture-973460-640.png",
        first_name = "Anthony",
        last_name = "roger",
        addres = "570 memmer shores",
        country = "united states",
        city = "new york",
        state = "Ny",
        at_home = "yes",
        where_work = null,
        experience_years = 5,
        specialty = "neurosurgeon",
        raiting = 4,
        date = "Sunday, May 15th At 15:00",
        zip = 9563
    } = appoiment;


    return (
        <Card containerStyle={styles.card}>
            <View style={styles.cardContent}>
                <Avatar
                    size="medium"
                    rounded
                    source={{
                        uri: 'https://i.postimg.cc/7Yc9mn8k/blank-profile-picture-973460-640.png'
                    }}
                />
                <View style={styles.cardInfoContent}>
                    <Text style={styles.nameText}>{first_name} {last_name}</Text>
                    <Text style={styles.dateText}>{date}</Text>
                    <Text style={styles.addresText}>{addres}</Text>
                    <Text style={styles.countryText}>{`${city}, ${state} ${zip}`}</Text>
                </View>
            </View>
            <View style={styles.appoimentMenu}>
                <View>
                    <Icon
                        onPress={() => console.log("check")}
                        name='check-circle-outline'
                        type='material-community'
                        size={50} />
                    <Text>Check-in</Text>
                </View>
                <View>
                    <Icon
                        onPress={() => console.log("cancel")}
                        name='close-circle-outline'
                        type='material-community'
                        size={50}
                    />
                    <Text>Cancel</Text>
                </View>
                <View>
                    <Icon
                        onPress={() => console.log("add to calendar")}
                        name='calendar-plus'
                        type='material-community'
                        size={50}
                    />
                    <Text>Calendar</Text>
                </View>
                <View>
                    <Icon
                        onPress={() => console.log("get addresss")}
                        name='compass-outline'
                        type='material-community'
                        size={50}
                    />
                    <Text>Directions</Text>
                </View>
            </View>
        </Card>
    );

}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20
    },
    cardContent: {
        flexDirection: "row",
        borderBottomColor: "rgba(0,0,0,0.2)",
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    cardInfoContent: {
        marginLeft: 20
    },
    nameText: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    dateText: {
        fontSize: 15,
        textTransform: "capitalize"
    },
    addresText: {
        fontSize: 15,
        textTransform: "capitalize",
        color: "#A7A7A7"
    },
    countryText: {
        fontSize: 15,
        textTransform: "capitalize",
        color: "#A7A7A7"
    },
    appoimentMenu: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    }

});

export default AppoimentItem;