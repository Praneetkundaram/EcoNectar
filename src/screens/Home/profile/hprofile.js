import React, { useState, useEffect } from "react"
import { StyleSheet, Text, ScrollView, Image, View, FlatList, Button, Linking, ActivityIndicator } from "react-native"
import { Card, CardTitle, CardContent, CardImage } from 'react-native-material-cards'
import { useNavigation, useIsFocused } from '@react-navigation/native';
import profimg from "../profile/userbg2.png"
import Sigut from "../../Login/google"
import sample from "../pics/pic5.png"
import Demo from "../profile/demo.png"
import Demo1 from "../profile/demo2.png"
import Demo2 from "../profile/demo3.png"
import Demo3 from "../profile/demo4.png"
import axios from "axios";


const profile = ({ }) => {
    const [isLoading, setisLoading] = useState(true);
    const navigation = useNavigation();
    const [userData, setUserData] = useState({});
    const isFocused = useIsFocused();

    useEffect(() => {
       if(isFocused)
       {
        setisLoading(true)
        axios.get("/user")
            .then(res => {
                setUserData(res.data)
                setisLoading(false)
                console.log(res.data)
            })
            .catch(err => {
                setisLoading(false)
                console.log(err)
            })
       }
    }, [isFocused])
    return (
        <View>
            {
                isLoading
                    ?
                    <View style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} >
                        < ActivityIndicator size="large" color="#16A085" />
                    </View>
                    :
                    <ScrollView style={UserStyles.backgr}>

                        <Image source={profimg} style={UserStyles.userImg} />
                        <View style={UserStyles.userback}>
                            <Text style={UserStyles.userhead}>
                                Welcome Back {userData.name}
                            </Text>
                            <Text style={{ fontSize: 15, textAlign: "left", color: "white", marginLeft: "41%" }}>
                                {userData.email}
                            </Text>
                            <View style={{ alignItems: "center", marginTop: "2%", marginLeft: "-2%" }}>
                                <Button title="SignOut" color="#16A085" />
                            </View>
                        </View>
                        <View style={UserStyles.don}>
                            <Text style={UserStyles.donate}>
                                Donated
                            </Text>
                            <Text style={UserStyles.donate}>
                                {userData.totalDonations}
                            </Text>
                        </View>
                        <View style={UserStyles.money}>
                            <Text style={UserStyles.mon}>
                                Total Earned
                            </Text>
                            <Text style={UserStyles.mon}>
                                {userData.totalEarned}
                            </Text>
                        </View>
                        <View style={UserStyles.cardBox}>
                            <Image source={Demo} style={UserStyles.cardImg} />
                            <Text style={UserStyles.cardHead}>Ductless Mini-Split</Text>
                            <View style={UserStyles.cardStatus}>
                                <Text style={{ margin: 2 }}>
                                    Status : <Text style={{ color: "#58D68D" }}>Registered</Text>
                                </Text>
                                <Text style={{ margin: 2 }}>
                                    Rewards : ₹ <Text style={{ color: "#F1948A", margin: "2%" }}>200</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={UserStyles.cardBox}>
                            <Image source={Demo1} style={UserStyles.cardImg} />
                            <Text style={UserStyles.cardHead}>Window Air Conditioner</Text>
                            <View style={UserStyles.cardStatus}>
                                <Text>
                                    Status :    <Text style={{ color: "#58D68D" }}>Registered</Text>
                                </Text>
                                <Text>
                                    Rewards :  ₹ <Text style={{ color: "#F1948A", margin: "2%" }}>50</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={UserStyles.cardBox}>
                            <Image source={Demo2} style={UserStyles.cardImg} />
                            <Text style={UserStyles.cardHead}>MicroWave Oven</Text>
                            <View style={UserStyles.cardStatus}>
                                <Text>
                                    Status :    <Text style={{ color: "#58D68D" }}>Registered</Text>
                                </Text>
                                <Text>
                                    Rewards : ₹  <Text style={{ color: "#F1948A", margin: "2%" }}>50</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={UserStyles.cardBox}>
                            <Image source={Demo3} style={UserStyles.cardImg} />
                            <Text style={UserStyles.cardHead}>32 inch Television</Text>
                            <View style={UserStyles.cardStatus}>
                                <Text>
                                    Status :    <Text style={{ color: "#58D68D" }}>Registered</Text>
                                </Text>
                                <Text>
                                    Rewards :  ₹ <Text style={{ color: "#F1948A", margin: "2%" }}>50</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={UserStyles.cardBox}>
                            <Image source={Demo} style={UserStyles.cardImg} />
                            <Text style={UserStyles.cardHead}> Smart Air Conditioner</Text>
                            <View style={UserStyles.cardStatus}>
                                <Text>
                                    Status :    <Text style={{ color: "#58D68D" }}>Registered</Text>
                                </Text>
                                <Text>
                                    Rewards :  ₹ <Text style={{ color: "#F1948A", margin: "2%" }}>50</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 100, marginTop: 18, alignItems: "center" }}>
                            <Button onPress={() => Linking.openURL('mailto:econectarewaste@example.com?subject=SendMail&body=Support us by donating ')}
                                title="Support Us" color="#16A085" />
                        </View>
                    </ScrollView >
            }
        </View>


    )
}
function Signout() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Sigut />
        </View>
    );
}
const UserStyles = StyleSheet.create({
    backgr:
    {
        backgroundColor: "black",
        flex: 1

    },
    cardStatus:
    {
        fontSize: 15,
        margin: 5
    },
    cardHead:
    {
        fontSize: 25,
        margin: 5
    },
    cardBox:
    {
        width: "94%",
        padding: 5,
        paddingRight: -20,
        backgroundColor: "#909497",
        borderRadius: 15,
        marginTop: 15,
        margin: 2
    },
    cardImg:
    {
        width: "99.5%",
        height: 190,
        resizeMode: "cover",
        backgroundColor: "white",
        borderRadius: 15
    },
    userImg:
    {
        width: 150,
        height: 150,
        alignItems: "flex-start",
        // marginHorizontal: "39%",
        // marginVertical: 50,
        // marginTop: 0,
        resizeMode: "contain",
        // backgroundColor: "white"
    },
    userback:
    {
        marginTop: "-25%",
        marginVertical: 60
    },
    userhead:
    {
        fontSize: 20,
        textAlign: "left",
        color: "white",
        marginLeft: "40%"
    },
    donate:
    {
        textAlign: "center",
        fontSize: 18,
        color: "white"

    },
    item: {
        padding: 10,
        fontSize: 18,
        // height: 44,
        color: "white",
        // textAlign: "left",
        // marginVertical: "1%",
        // marginBottom: 20,
        marginLeft: "15%"
    },
    itemmap:
    {
        marginVertical: 15,
        // flex:1

    },
    itemoney:
    {
        textAlign: "right",
        marginRight: "26%",
        color: "white",
        marginTop: -28
    },
    don:
    {
        width: 180,
        marginRight: "60%",
        marginTop: 22
    },
    mon:
    {
        textAlign: "center",
        fontSize: 18,
        color: "white"

    },
    money:
    {
        width: 180,
        marginLeft: "48%",
        marginTop: -40,

    }

})


export default profile