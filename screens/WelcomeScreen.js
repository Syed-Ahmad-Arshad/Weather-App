import { Image, View, StyleSheet, Text, Pressable } from "react-native";
import {AntDesign} from '@expo/vector-icons';

function WelcomeScreen({setPressed}){

    function onPressHandler(){
        setPressed(true);
    }
    return (
    <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
            <Image 
                style={styles.imageStyle} 
                source={require('../assets/images/weather-wind.png')} 
            />
        </View>
        <View>
            <Text style={styles.text}>breezy</Text>
            <Text style={styles.summaryText}>Know Your Weather</Text>
        </View>
        <Pressable onPress={onPressHandler} style={({pressed})=> pressed ? [styles.pressed, styles.pressableStyle] : styles.pressableStyle}>
            <AntDesign name="arrowright" size={20} color={'white'} />
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        rowGap: 40,
        alignSelf: 'center'
    },  
    imageContainer: {
        width: 110,
        height: 110,
        borderColor: 'white',
        overflow: 'hidden',
        marginVertical: 6,
        alignSelf: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'freedom',
        fontSize: 40
    },
    pressableStyle: {
        backgroundColor: '#0195FF',
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 400,
        alignSelf: 'center'
    },
    pressed: {
        opacity: 0.55,
    },
    summaryText: {
        fontFamily: 'queen-sides',
        fontSize: 24,   
        color: '#828994',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});


export default WelcomeScreen;