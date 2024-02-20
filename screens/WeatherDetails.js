import { View, Pressable, StyleSheet, Text } from "react-native";
import {AntDesign} from '@expo/vector-icons';

function WeatherDetails({city}) {
    return(
        <View style={styles.rootContainer}>
            <Text>
                Ajeeb
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: 'yellow',
        // width: '100%',
    },
    detailText: {
        fontSize: 24,
        color: 'white',
        flexDirection: 'row',
    },
    detailHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    pressableStyle: {
        flex: 1,
        width: '100%',
        float: 'left'
    },
    pressed: {}

});

export default WeatherDetails;