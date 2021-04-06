import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Card, Avatar, Icon } from 'react-native-elements';
import * as Notifications from 'expo-notifications';

const AppoimentItem = ({ appoiment = {} }) => {

    const {
        id = 1,
        first_name = "Anthony",
        last_name = "roger",
        addres = "570 memmer shores",
        city = "new york",
        state = "Ny",
        year = 2021,
        mounth = 3,
        day = 5,
        hours = 23,
        minutes = 0,
        seconds = 0,
        zip = 9563
    } = appoiment;

    const [date, setDate] = useState(new Date());

    const lesHour = hours - 1;


    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    const yearN = date.getFullYear();
    const mounthN = date.getMonth();
    const dayN = date.getDate();
    const hourN = date.getHours();
    const minutesN = date.getMinutes();
    const secondsN = date.getSeconds()
    

    if (yearN === year && mounthN === mounth &&  dayN === day && hourN === lesHour && minutesN === minutes && secondsN === seconds) {
        console.log("notification send");
        presentLocalNotification()
    }


    async function presentLocalNotification() {
        function sendNotification() {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true
                })
            });

            Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Your appoment for doctor',
                    body: `Dont forget your appoiment with you doctor at ${hours}:${minutes}`
                },
                trigger: null
            });
        }

        let permissions = await Notifications.getPermissionsAsync();
        if (!permissions.granted) {
            permissions = await Notifications.requestPermissionsAsync();
        }
        if (permissions.granted) {
            sendNotification();
        }
    }

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
                    <Text style={styles.dateText}>{`${mounth}/${day}/${year} at ${hours}:`}{minutes < 10 ? `0${minutes}`: minutes}</Text>
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