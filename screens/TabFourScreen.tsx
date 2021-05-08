import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFourScreen() {
    return (
        <View >

            <View style={styles.container} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text>Bike No. HR 26 DY 9505
                Amount- 20
            </Text>

            <Text>Bike No. HR 26 DY 9505
            Amount- 30
            </Text>
            <Text>Bike No. HR 29 DY 9505
            Amount- 100
            </Text>
            <Text>Bike No. HR 26 DE 9505
            Amount- 180
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
