import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

    const correctAnswer = () => {
        // setNumCorrect2(numCorrect2+1);
        navigation.navigate("Question3", {numCorrect: numCorrect+1})
    }

    const nextQuestion = () => {
        navigation.navigate("Question3", {numCorrect: numCorrect})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.question}>Question 2</Text>
            <TouchableOpacity style={styles.questionButton} onPress={correctAnswer}>
                <Text style={styles.buttonText}>Answer 1</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.questionButton} onPress={nextQuestion}>
                <Text style={styles.buttonText}>Answer 2</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.questionButton} onPress={nextQuestion}>
                <Text style={styles.buttonText}>Answer 3</Text>
            </TouchableOpacity>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={nextQuestion}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Next Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Question2

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    question: {
        fontSize: 25,
    },
    questionButton: {
        backgroundColor: '#0782F9',
        width: '30%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    }
})