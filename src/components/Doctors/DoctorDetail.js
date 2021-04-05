import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, Modal, Pressable, Alert } from 'react-native';
import { AirbnbRating, Avatar, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

import DoctorHeader from '../../layout/HeaderDoctor';
import BackgroundHeaderV from '../../layout/BackgroundHeaderV'


const W = Dimensions.get('window').width;

const DoctorDetail = ({ route }) => {


    const { doctor } = route.params;

    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const docName = doctor.first_name
    const doctName = docName.charAt(0).toUpperCase() + docName.slice(1)

    const docLast = doctor.last_name
    const doctLast = docLast.charAt(0).toUpperCase() + docLast.slice(1)


    const reservationAlert = () =>
        Alert.alert(
            "Book Appointment ",
            `Your appointment is on ${date.toDateString()} at ${date.toLocaleTimeString()} in the ${doctor.addres} who with the Dr ${doctName} ${doctLast}
            `,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => setModalVisible(!modalVisible) }
            ]
        );

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
        reviews = [],
        placeId
    } = doctor;




    return (

        <View key={id}>
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
                            <Text style={styles.appoimentBtn} onPress={() => setModalVisible(true)}>appoiment</Text>
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

            <Modal
                visible={modalVisible}
                animationType="slide"
            >
                <View style={styles.header}>
                    <BackgroundHeaderV />
                    <View style={styles.titleModal}>
                        <Text style={styles.titleTextM}>Get Appoiment</Text>
                        <Text style={styles.doctorName}>with doctor {first_name} {last_name}</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 50, paddingVertical: 20 }}>
                    <View style={styles.horizon} >
                        <Text style={styles.title}>Date:</Text>
                        <Text onPress={showDatepicker} style={styles.picker}>{date.toLocaleDateString('en-US')}</Text>
                    </View>
                    <View style={styles.horizon}>
                        <Text style={styles.title}>Time:</Text>
                        <Text onPress={showTimepicker} style={styles.picker} >{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </Text>
                    </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}

                    <Button title="Continue" onPress={reservationAlert} containerStyle={{ marginTop: 20 }} />

                </View>
                <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.closeBtn}>
                    <Text style={{ color: "#fff", textAlign: "center" }}>Close Modal</Text>
                </Pressable>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    header: {
        position: "relative"
    },
    titleModal: {
        position: "absolute",
        top: 50,
        left: 90,
    },
    titleTextM: {
        zIndex: 9999,
        color: "#fff",
        fontSize: 30
    },
    doctorName: {
        color: "#fff",
        left: 15,
        textTransform: "capitalize"
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
    },
    horizon: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    picker: {
        fontSize: 18,
        borderBottomColor: "#000",
        borderBottomWidth: 1
    },
    closeBtn: {
        backgroundColor: "rgb(138,0,0)",
        paddingVertical: 10,
        marginHorizontal: 50,
        borderRadius: 5
    }


})

export default DoctorDetail;