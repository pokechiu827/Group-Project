import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const DomesticOrInt = ({navigation}) => {
    // const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    const nationalParkTravel = () => {
        navigation.navigate("NationalParkDestinations")
    }

    const cityTravel = () => {
        navigation.navigate("USDestinations")
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.question}>City or National Park?</Text>
            <TouchableOpacity style={styles.questionButton} onPress={cityTravel}>
                <Text style={styles.buttonText}>US Cities</Text>
            </TouchableOpacity>
            <Text style={styles.emptySpace}> </Text>
            <TouchableOpacity style={styles.questionButton} onPress={nationalParkTravel}>
                <Text style={styles.buttonText}>US National Parks</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
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

export default DomesticOrInt

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
        textAlign: 'center'
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
        width: '40%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    emptySpace: {
        padding: 15,
    },
})