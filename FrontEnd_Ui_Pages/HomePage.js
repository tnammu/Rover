import React, {
    Component
} from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import {  Content, Card, CardItem, Button } from 'native-base';



export default class HomePage extends Component {

    static navigationOptions = {
        title: "Home",
        headerLeft: () => null
    };

    SignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.props.navigation.navigate('Welcome')
            })
            .catch((err) => {
                alert(err.message)
            })
    }


    render() {
        return (
            <View style={styles.container}>
               
                    <Content>
                        <Card>
                            <CardItem>
                                <Text style={styles.placesText}>Camera to Scan</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Text style={styles.placesText}>Show Postings</Text>
                            </CardItem>
                        </Card>
                    </Content>
                    <Button full dark
                        onPress={() => {
                            this.SignOut()
                        }}
                    ><Text style={styles.text}>Logout</Text></Button>
                <Card>
                    <CardItem>
                        <Text style={styles.placesText}>Notifications</Text>
                    </CardItem>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
   
    text: {
        color: "#fff",
        fontFamily: 'Roboto-Light',
        fontSize: 16
    },
    placesText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16
    }

});