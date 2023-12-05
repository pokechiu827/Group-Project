import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const Question2 = ({navigation, route}) => {
    // const navigation = useNavigation()

    let{numCorrect} = route.params


    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    // const correctAnswer = () => {
    //     navigation.navigate("Question3", {numCorrect: numCorrect+1})
    // }

    const nextQuestion = () => {
        navigation.navigate("Question3", {numCorrect: numCorrect})
    }

    const answer1 = () => {
        navigation.navigate("Question3", {numCorrect: numCorrect+30})
    }

    const answer2 = () => {
        navigation.navigate("Question3", {numCorrect: numCorrect+20})
    }

    const answer3 = () => {
        navigation.navigate("Question3", {numCorrect: numCorrect+10})
    }

    const boxImage = {
        uri: "https://mobileimages.lowes.com/productimages/f85bc66b-8a55-4610-bab9-699f2ff2bd40/15686221.jpg",
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.question}>How often do you get a styrofoam to-go box at the dining hall each week?</Text>
            <Image style={styles.image} source={boxImage} />
            <TouchableOpacity style={styles.questionButton} onPress={answer3}>
                <Text style={styles.buttonText}>A few times a week</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.questionButton} onPress={answer2}>
                <Text style={styles.buttonText}>Once a day</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.questionButton} onPress={answer1}>
                <Text style={styles.buttonText}>More than once a day</Text>
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

export default Question2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
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
        width: 160,
        height: 160,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    },
    question: {
        fontSize: 25,
        padding: 50,
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