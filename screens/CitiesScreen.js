import { FlatList, View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import {AntDesign} from '@expo/vector-icons';
import WeatherItem from "../components/WeatherItem";


const weatherData = [
    {
        "weather": "sunny",
        "city": "Lahore",
        "time": "08:21",
        "temprature": "42",
        "id": "1",
    },
    {
        "weather": "rainy",
        "city": "London",
        "time": "10:40",
        "temprature": "23",
        "id": "2",
    },
    {
        "weather": "cloudy",
        "city": "Mumbai",
        "time": "03:20",
        "temprature": "29",
        "id": "3",
    },
    {
        "weather": "rainy",
        "city": "London",
        "time": "10:40",
        "temprature": "49",
        "id": "4",
    },
    {
        "weather": "sunny",
        "city": "Melbourne",
        "time": "09:41",
        "temprature": "12",
        "id": "5",
    },
    {
        "weather": "cloudy",
        "city": "Amsterdam",
        "time": "02:20",
        "temprature": "05",
        "id": "6",
    },
    {
        "weather": "rainy",
        "city": "New York",
        "time": "06:14",
        "temprature": "21",
        "id": "7",
    },
    {
        "weather": "cloudy",
        "city": "Helsinki",
        "time": "10:12",
        "temprature": "42",
        "id": "8",
    },
    {
        "weather": "sunny",
        "city": "Berlin",
        "time": "12:20",
        "temprature": "24",
        "id": "9",
    }
];


function CitiesScreen({setPressed, setCitySelected, setCity}){

    function homeScreenHandler() {
        setPressed(false);
    }
    return (
        <View style={styles.rootContainer}>
            <Pressable onPress={homeScreenHandler} style={({pressed})=> pressed ? [styles.pressed, styles.pressableStyle] : styles.pressableStyle}>
                <AntDesign name="arrowleft" size={20} color={'white'} />
            </Pressable>
            <View style={styles.searchBar}>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    placeholder="Search your city here"
                    placeholderTextColor="#828994" 
                     />
            </View>
            <View style={styles.cityArea}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={weatherData}
                    renderItem={
                        (itemData)=><WeatherItem setCity={setCity} setCitySelected={setCitySelected} data={itemData.item}/>} 
                    keyExtractor={(item)=>item.id}
                />
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
        
    },
    searchBar:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 4,
        justifyItems: 'center',
    },
    input: {
        height: 36,
        fontSize: 14,
        borderWidth: 0.5,
        borderRadius: 10,
        color: 'white',
        marginVertical: 8,
        padding: 2,
        paddingLeft: 10,
        backgroundColor: '#202B3C',
        width: '100%',

    },
    cityArea: {
        flex: 10,
        paddingTop: 30,
    },
    pressableStyle: {
        height: 40,
        width: 40,
        alignContent: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    pressed: {
        backgroundColor: '#202B3C',
        borderRadius: 400,
        height: 40,
        width: 40,
    },
});

export default CitiesScreen