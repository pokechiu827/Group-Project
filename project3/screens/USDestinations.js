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

    const nyImage = {
        uri: "https://static01.nyt.com/images/2019/05/29/realestate/00skyline-south4/88ce0191bfc249b6aae1b472158cccc4-superJumbo.jpg",
        width: 200,
        height: 100,
    }

    const laImage = {
        uri: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/19540604/shutterstock_1309273237.jpg",
        width: 140,
        height: 100,
    }

    const miamiImage = {
        uri: "https://media.istockphoto.com/id/1202852911/photo/miami-downtown-skyline-with-palm-trees-elevated-view.jpg?s=612x612&w=0&k=20&c=J0AQuK3MUkBHqU0x5WpdgugJ6FQ4mgD7FV87kQNCaSg=",

    }

    const sfImage = {
        uri: "https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg",
    }

    const honoluluImage = {
        uri: "https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    }

    const goToDetails = () => {

    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.question}>Choose a destination to view details:</Text>
            <Image style={styles.image} source={nyImage} />
            <TouchableOpacity style={styles.questionButton} onPress={goToDetails}>
                <Text style={styles.buttonText}>New York</Text>
            </TouchableOpacity>
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={laImage} />
            <TouchableOpacity style={styles.questionButton} onPress={goToDetails}>
                <Text style={styles.buttonText}>Los Angeles</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={miamiImage} />
            <TouchableOpacity style={styles.questionButton} onPress={goToDetails}>
                <Text style={styles.buttonText}>Miami</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={sfImage} />
            <TouchableOpacity style={styles.questionButton} onPress={goToDetails}>
                <Text style={styles.buttonText}>San Francisco</Text>
            </TouchableOpacity> 
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={honoluluImage} />
            <TouchableOpacity style={styles.questionButton} onPress={goToDetails}>
                <Text style={styles.buttonText}>Honolulu</Text>
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