import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, FlatList } from 'react-native'
import { auth } from '../firebase'

const DenaliDetails = ({navigation}) => {

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    const denaliImage = {
        uri: "https://cdn.aarp.net/content/dam/aarp/travel/trips/2020/08/1140-camping-at-denali.jpg",
        width: 200,
        height: 100,
    }

    const listOfActivities = [
        {key: 'Go dog sledding'},
        {key: 'Take a zipline tour of the park'},
        {key: 'Raft the Nenana River'}
    ]

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={denaliImage} />
            <Text style={styles.bigTitle}>Planning a Trip to Denali:</Text>
            <Text style={styles.smallTitle}>Distance from Villanova: 4336 miles</Text>
            <Text style={styles.smallTitle}>Best Months to Visit: June - August</Text>
            <Text style={styles.smallTitle}>3 Ideas for Activities:</Text>
            <FlatList
                data={listOfActivities}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 20 }}>- {item.key}</Text>
                        </View>
                    )
                }}
            />
            <Text style={styles.email}>Email: {auth.currentUser?.email}</Text>
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

export default DenaliDetails

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
    bigTitle: {
        fontSize: 30,
        fontWeight: 500,
        padding: 10,
        textAlign: 'center',
    },
    smallTitle: {
        fontSize: 25,
        padding: 30,
        textAlign: 'left',
    },
    questionButton: {
        backgroundColor: '#0782F9',
        width: '30%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    email: {
        padding: 20,
    },
    emptySpace: {
        padding: 5,
    },

})