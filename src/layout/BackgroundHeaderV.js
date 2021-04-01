import React, { Children } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const W = Dimensions.get('window').width;

const BackgroudHeaderV = ({Children}) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.linearGradient}
            colors={['#005F95', '#089DE3']}>
            <View style={[styles.line, {top: 50, left: -270}]} />
            <View style={[styles.line, { top: 90, left: -100 }]} />
            <View style={[styles.line, { top: 150, left: 50 }]} />
            {Children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        height: 150,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    line: {
        position: 'absolute',
        width: W,
        top: 100,
        left: -300,
        height: 80,
        backgroundColor: 'rgba(255,255,255,0.1)',
        transform: [
            {
                rotate: '-25deg',
            },
        ],
        borderRadius: 60,
    },
    headerText:{
        fontSize: 35,
        fontWeight: "bold",
        marginTop: 100,
        marginLeft: 20,
        color: "#fff"
    }

})

export default BackgroudHeaderV;