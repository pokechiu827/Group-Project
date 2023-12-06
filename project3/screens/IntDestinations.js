import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const USDestinations = ({navigation}) => {
    // const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    const rightAnswer = () => {
        navigation.navigate("Question2", {numCorrect: numCorrect+1})
    }

    const wrongAnswer = () => {
        navigation.navigate("Question2", {numCorrect: numCorrect})
    }

    const londonImage = {
        uri: "https://dandg.azureedge.net/cache/2/2/5/7/f/a/2257fa9015c73278d8fa06c2ce23f2df6d5531c4.jpg",
    }

    const tokyoImage = {
        uri: "https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg",
    }

    const sydneyImage = {
        uri: "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",

    }

    const parisImage = {
        uri: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",

    }

    const mcImage = {
        uri: "https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city.JPG",
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.question}>Choose a destination to view details:</Text>
            <Image style={styles.image} source={londonImage} />
            <TouchableOpacity style={styles.questionButton} onPress={wrongAnswer}>
                <Text style={styles.buttonText}>London</Text>
            </TouchableOpacity>
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={tokyoImage} />
            <TouchableOpacity style={styles.questionButton} onPress={wrongAnswer}>
                <Text style={styles.buttonText}>Tokyo</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={sydneyImage} />
            <TouchableOpacity style={styles.questionButton} onPress={rightAnswer}>
                <Text style={styles.buttonText}>Sydney</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={parisImage} />
            <TouchableOpacity style={styles.questionButton} onPress={rightAnswer}>
                <Text style={styles.buttonText}>Paris</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={mcImage} />
            <TouchableOpacity style={styles.questionButton} onPress={rightAnswer}>
                <Text style={styles.buttonText}>Mexico City</Text>
            </TouchableOpacity> 
            <Text>Email: {auth.currentUser?.email}</Text>
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

export default USDestinations

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
        width: 280,
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
        padding: 5,
    },
})