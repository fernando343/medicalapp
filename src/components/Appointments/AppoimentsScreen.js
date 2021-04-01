import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import BackgroudHeaderV from '../../layout/BackgroundHeaderV';

const AppoimentScreen = () => {
    return (
        <View>
            <View style={styles.Header}>
                <BackgroudHeaderV />
                <Text style={styles.titleText}>Appoiments</Text>
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

export default AppoimentScreen;