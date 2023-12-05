import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const Question1 = ({navigation}) => {
    // const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    const answer1 = () => {
        navigation.navigate("Question2", {numCorrect: numCorrect+30})
    }

    const answer2 = () => {
        navigation.navigate("Question2", {numCorrect: numCorrect+20})
    }

    const answer3 = () => {
        navigation.navigate("Question2", {numCorrect: numCorrect+10})
    }

    const nextQuestion = () => {
        navigation.navigate("Question2", {numCorrect: numCorrect})
    }

    const [numCorrect, setNumCorrect] = useState(0);

    const carImage = {
        uri: "https://www.kimballstock.com/images/car-stock-photos/cutout-car-images.jpg",
        width: 140,
        height: 100,
    }

    const planeImage = {
        uri: "https://people.com/thmb/4ZYOrQ38_fodNbS6JXfIe7klAkI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(780x395:782x397)/American-Airlines-Pilot-080223-tout-165b7ed4edf54a75926d4ca6392ec0c6.jpg",
        width: 140,
        height: 100,
    }

    const trainImage = {
        uri: "https://www.visitphilly.com/wp-content/uploads/2018/02/amtrak-acela-NE-corridor-courtesy_Amtrak_2200x1237.jpg",
        width: 140,
        height: 140,
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.question}>What mode of transportation do you use to travel home during breaks?</Text>
            <Image style={styles.image} source={carImage} />
            <TouchableOpacity style={styles.questionButton} onPress={answer1}>
                <Text style={styles.buttonText}>Car</Text>
            </TouchableOpacity>
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={planeImage} />
            <TouchableOpacity style={styles.questionButton} onPress={answer2}>
                <Text style={styles.buttonText}>Plane</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={trainImage} />
            <TouchableOpacity style={styles.questionButton} onPress={answer3}>
                <Text style={styles.buttonText}>Train</Text>
            </TouchableOpacity> 
            <Text>Email: {auth.currentUser?.email}</Text>
            {/* <TouchableOpacity
                onPress={nextQuestion}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Next Page</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
            <Text style={styles.emptySpace}> </Text>
        </ScrollView>
    )
}

export default Question1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    image: {
        width: 200,
        height: 140,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    },
    question: {
        fontSize: 25,
        padding: 50,
        textAlign: 'center',
    },
    questionButton: {
        backgroundColor: '#0782F9',
        width: '30%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    emptySpace: {
        padding: 15,
    },
})