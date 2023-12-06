import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const Question4 = ({navigation, route}) => {
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

    const rightAnswer = () => {
        navigation.navigate("Question5", {numCorrect: numCorrect+1})
    }

    const nextQuestion = () => {
        navigation.navigate("Question5", {numCorrect: numCorrect})
    }


    const coloniesImage = {
        uri: "https://assets.editorial.aetnd.com/uploads/2009/11/washington-crosses-the-delaware.jpg",
        width: 140,
        height: 100,
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Image style={styles.image} source={coloniesImage} />
            <Text style={styles.question}>How many colonies did the United States have during the Revolutionary War?</Text>
            <TouchableOpacity style={styles.questionButton} onPress={rightAnswer}>
                <Text style={styles.buttonText}>13</Text>
            </TouchableOpacity>
            <Text style={styles.emptySpace}> </Text>
            <TouchableOpacity style={styles.questionButton} onPress={nextQuestion}>
                <Text style={styles.buttonText}>18</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
            <TouchableOpacity style={styles.questionButton} onPress={nextQuestion}>
                <Text style={styles.buttonText}>25</Text>
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

export default Question4

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