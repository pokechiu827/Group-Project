import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const USCityDestinations = ({navigation}) => {

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    const gcImage = {
        uri: "https://www.nps.gov/grca/planyourvisit/images/mather-point-2021.jpg?maxwidth=1300&maxheight=1300&autorotate=false",

    }

    const acadiaImage = {
        uri: "https://upload.wikimedia.org/wikipedia/commons/7/76/Bass_Harbor_Lighthouse_b.jpg",

    }

    const yosemiteImage = {
        uri: "https://images.unsplash.com/photo-1562310503-a918c4c61e38?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9zZW1pdGUlMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",

    }

    const glacierImage = {
        uri: "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2021/03/1140-glacier-national-park-hero.imgcache.rev.web.1140.655.jpg",
    }

    const denaliImage = {
        uri: "https://cdn.aarp.net/content/dam/aarp/travel/trips/2020/08/1140-camping-at-denali.jpg",
    }

    const goToDetails = () => {

    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.question}>Choose a destination to view details:</Text>
            <Image style={styles.image} source={gcImage} />
            <TouchableOpacity style={styles.questionButton} onPress={goToDetails}>
                <Text style={styles.buttonText}>Grand Canyon National Park, AZ</Text>
            </TouchableOpacity>
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={acadiaImage} />
            <TouchableOpacity style={styles.questionButton} onPress={goToDetails}>
                <Text style={styles.buttonText}>Acadia National Park, ME</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={yosemiteImage} />
            <TouchableOpacity style={styles.questionButton} onPress={goToDetails}>
                <Text style={styles.buttonText}>Yosemite National Park, CA</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={glacierImage} />
            <TouchableOpacity style={styles.questionButton} onPress={goToDetails}>
                <Text style={styles.buttonText}>Glacier National Park, MT</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={denaliImage} />
            <TouchableOpacity style={styles.questionButton} onPress={goToDetails}>
                <Text style={styles.buttonText}>Denali National Park, AK</Text>
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

export default USCityDestinations

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
        textAlign: 'center',
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
        padding: 5,
    },
})