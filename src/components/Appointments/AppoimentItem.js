import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Card, Avatar, Icon } from 'react-native-elements';
//icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const AppoimentItem = () => {

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
                    <Text style={styles.nameText}>dr ayon dash</Text>
                    <Text style={styles.dateText}>sunday, may 15th at 15:00</Text>
                    <Text style={styles.addresText}>570 memmer shores</Text>
                    <Text style={styles.countryText}>{`san francisco, ca 90293`}</Text>
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