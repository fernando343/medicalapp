import React from 'react'
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import { AirbnbRating, Avatar } from 'react-native-elements';

import DoctorHeader from '../../layout/HeaderDoctor';


const W = Dimensions.get('window').width;

const DoctorDetail = ({ route }) => {

    const { doctor } = route.params;

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
        raiting = 4,
        introduce = "",
        reviews = [1, 2],
        placeId
    } = doctor;


    return (

        <View>
            <View style={styles.header}>
                <DoctorHeader />
                <View style={styles.headerInfo}>
                    <View style={styles.headerInformation}>
                        {picture ?
                            <Avatar
                                avatarStyle={styles.avatar}
                                size="xlarge"
                                source={{
                                    uri: picture
                                }} />

                            :

                            <Avatar
                                avatarStyle={styles.avatar}
                                size="xlarge"
                                source={{
                                    uri: 'https://i.postimg.cc/7Yc9mn8k/blank-profile-picture-973460-640.png'
                                }}
                            />

                        }
                        <View>
                            <Text style={styles.nameText}>{`${first_name} ${last_name}`}</Text>
                            <Text style={styles.specialistText}>{specialty}</Text>
                            <View style={styles.star}>
                                <AirbnbRating
                                    size={15}
                                    count={5}
                                    defaultRating={raiting}
                                    showRating={false}

                                />
                            </View>
                            <Text style={styles.appoimentBtn} onPress={() => console.log("appoiment")}>appoiment</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.introduce}>
                        <Text style={styles.introduceTitle}>Introduce</Text>
                        <Text>{introduce}</Text>
                    </View>
                    <View>
                        <Text style={styles.introduceTitle}>Reviews</Text>
                        {reviews.map((review, i) => <Text key={`review-${placeId}-${i}`}>{`-${review}`}</Text>)}
                    </View>
                </View>



            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    header: {
        position: "relative"
    },
    headerInfo: {
        position: "absolute",
        width: W,
        paddingHorizontal: 20
    },
    titleText: {
        color: "#fff",
        textAlign: "center",
    },
    headerInformation: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        borderRadius: 20,
        width: 120,
        borderColor: "#e3e3e3",
    },
    nameText: {
        color: "#fff",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: 25
    },
    specialistText: {
        color: "#fff",
        textTransform: "capitalize",
        fontSize: 16
    },
    star: {
        marginLeft: -80,
        paddingVertical: 5
    },
    appoimentBtn: {
        textAlign: "center",
        color: "#005F95",
        backgroundColor: "#fff",
        paddingVertical: 5,
        textTransform: "capitalize",
        borderRadius: 20,
        width: 100,
        fontWeight: "bold",
        marginTop: 5
    },
    content: {
        padding: 20
    },
    introduceTitle: {
        fontWeight: "bold",
        fontSize: 17,
    },
    introduce: {
        marginBottom: 20,
        borderBottomColor: "rgba(0,0,0,0.2)",
        borderBottomWidth: 1,
        paddingBottom: 10
    }


})

export default DoctorDetail;