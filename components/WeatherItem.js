import { Text, StyleSheet, View, Image, Pressable } from "react-native";

function WeatherItem({data, setCitySelected, setCity}){
    let source = data.weather === 'rainy' ? require('../assets/images/weather-rain.png') : data.weather === 'sunny' ? require('../assets/images/weather-sun.png') : require('../assets/images/weather-clouds.png');
    function onCitySelectHandeler(){
        setCitySelected(true);
        setCity(data.city);
    }
    return(
    <Pressable onPress={onCitySelectHandeler} style={({pressed})=> pressed ? [styles.pressed, styles.weatherContainer] : styles.weatherContainer}>
        <View style={styles.imageContainer}>
            <Image style={styles.weatherImage} source={source}/>
            <View>
                <Text style={styles.cityText}>{data.city}</Text>
                <Text style={styles.timeText}>{data.time}</Text>
            </View>
        </View>
        <Text style={styles.text}>{data.temprature}°</Text>
    </Pressable>)
}


const styles = StyleSheet.create({
    weatherContainer: {
        height: 80,
        width: '98%',
        backgroundColor: '#202B3C',
        padding: 20,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: '#C4C7CB',
        fontSize: 24
    },
    weatherImage: {
        height: 60,
        width: 60,
    },
    imageContainer: {
        flexDirection: 'row',
        gap: 14,
        alignItems: 'center'
    },
    cityText: {
        color: '#C4C7CB',
        fontSize: 24,
        fontWeight: 'bold'
    },
    timeText: {
        color: '#C4C7CB',
        fontSize: 12,
        paddingTop: 2,
    },
    pressed: {
        opacity: 0.60,
    },
})

export default WeatherItem;