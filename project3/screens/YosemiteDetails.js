import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, FlatList } from 'react-native'
import { auth } from '../firebase'

const YosemiteDetails = ({navigation}) => {

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    const yosemiteImage = {
        uri: "https://images.unsplash.com/photo-1562310503-a918c4c61e38?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9zZW1pdGUlMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
        width: 200,
        height: 100,
    }

    const listOfActivities = [
        {key: 'Hike to Vernal Fall'},
        {key: 'Visit Glacier Point'},
        {key: 'Visit Tunnel View'}
    ]

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.emptySpace}> </Text>
            <Image style={styles.image} source={yosemiteImage} />
            <Text style={styles.bigTitle}>Planning a Trip to Yosemite:</Text>
            <Text style={styles.smallTitle}>Distance from Villanova: 2885 miles</Text>
            <Text style={styles.smallTitle}>Best Months to Visit: June - September</Text>
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

export default YosemiteDetails

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