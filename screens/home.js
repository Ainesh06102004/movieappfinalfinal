import axios from 'axios';
import *as React from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native'
import { Header } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'



export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            searchword: '',
            details: {}
        }
    }
    

    getmovie = () => {
        const url = 'http://127.0.0.1:5000/get-movie'
        fetch(url, { method: 'GET', mode: 'no-cors'})
            .then(response => response.json).then(function(data) {
               var details = data
               console.log("success")
               console.log(details)
            }).catch(error => {console.log(error)});
    }

    componentDidMount(){
        this.getmovie()
    }
    render() {
        return (
            <SafeAreaProvider style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Header centerComponent={{ text: 'Movie recommendations' }} />
                <Image source={require('../assets/logo.jpg')} style={{ width: 380, height: 180 }} />
                <TextInput
                    style={{ width: 150, height: 50, borderColor: 'black', borderwidth: 3 }}
                    placeholder={"Type your movie name here..."}
                    onChangeText={(text) => {
                        this.setState({
                            searchword: text
                        })
                    }}
                />

                <TouchableOpacity style={{ marginTop: 10 }}
                    onPress={() => { this.getmovie() }}
                >
                    <Text>GO</Text>
                </TouchableOpacity>

            </SafeAreaProvider>

        )
    }
}