import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BackgroudHeaderV from '../../layout/BackgroundHeaderV';
import AppoimentItem from './AppoimentItem';

const AppoimentScreen = () => {
    return (
        <View>
            <View style={styles.Header}>
                <BackgroudHeaderV />
                <Text style={styles.titleText}>Appoiments</Text>
            </View>
            <View>
                <FlatList
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]}
                    renderItem={() =>
                        <AppoimentItem />
                    }
                    keyExtractor={(item) => item.id.toString()}
                />
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