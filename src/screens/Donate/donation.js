import React, { useState, useEffect } from "react";
import { ScrollView, Picker, StyleSheet, TextInput, Text, Button, Linking, View, Platform, Image } from "react-native";
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import * as ImagePicker from 'react-native-image-picker';
import * as Permissions from 'expo-permissions'
// import * as ImagePicker from 'expo-image-picker'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const TextIn = () => {
    const [image, setImage] = React.useState(null);
    const [text, onChangeText] = React.useState(null);
    const [Price, onChangePrice] = React.useState(0);
    const [text1, onChangeText1] = React.useState(null)
    const [number, onChangeNumber] = React.useState("0");
    const [address, setAddress] = useState("")
    const [numb, onChang] = React.useState("number");
    const [selectedValue, setSelectedValue] = useState("null");
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [filePath, setFilePath] = useState({});


    const data = [
        { category: "Major Appliances", baseValueByNumber: 500, baseValueByWeight: 450 },
        { category: "Small Appliances", baseValueByNumber: 150, baseValueByWeight: 50 },
        { category: "Computer Applications", baseValueByNumber: 150, baseValueByWeight: 150 },
        { category: "Consumer Electronics", baseValueByNumber: 50, baseValueByWeight: 50 },
        { category: "Lighting Devices", baseValueByNumber: 50, baseValueByWeight: 25 },
        { category: "Electronic Tools", baseValueByNumber: 50, baseValueByWeight: 40 },
        { category: "Toys", baseValueByNumber: 20, baseValueByWeight: 20 },
        { category: "Monitoring Devices", baseValueByNumber: 50, baseValueByWeight: 75 }
    ]
    const chooseFile = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose Photo from Custom Option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log(
                    'User tapped custom button: ',
                    response.customButton
                );
                alert(response.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath: source,
                });
                // You can also display the image using data:
                // let source = {
                //   uri: 'data:image/jpeg;base64,' + response.data
                // };
            }
        });
    };


    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (selectedValue === item.category) {
                setSelectedCategory(item)
                break;
            }
            else {
                setSelectedCategory(null)
            }
        }
    }, [selectedValue])


    useEffect(() => {
        console.log(selectedCategory)
        if (selectedCategory !== null && number !== "0" && number !== "") {

            if (numb === "number") {
                onChangePrice(Number(number) * selectedCategory.baseValueByNumber)
            }
            else {
                onChangePrice(Number(number) * selectedCategory.baseValueByWeight)

            }
        }
        else {
            onChangePrice(0)
        }
    }, [number, selectedValue, numb, selectedCategory]);


    return (
        <ScrollView style={styles.conatiner}>
            <Text style={{ margin: 10, fontSize: 19 }}>Address Line    📌 </Text>
            <TextInput
                style={styles.input1}
                onChangeText={setAddress}
                value={address}
                multiline={true}
                placeholderTextColor='#16A085'

            />
            <Text style={{ margin: 10, fontSize: 19 }}>Item Name   📦 </Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholderTextColor='white'
            />
            <Text style={{ margin: 10, fontSize: 19 }}>Description About the item(Optional)     🧾 </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText1}
                value={text1}
                placeholderTextColor='white'

            />
            <Text style={{ margin: 10, fontSize: 19 }}>Select a Category    ⚙ </Text>
            <View style={styles.picker}>
                <Picker
                    mode='dropdown'
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Selected Category" value="null" />
                    {
                        data.map((item, index) => {
                            return (
                                <Picker.Item key={index} onPress={() => setSelectedCategory(item)} label={item.category} value={item.category} />
                            )
                        })
                    }
                    {/*  */}

                </Picker>
            </View>
            <Text style={{ margin: 10, fontSize: 19 }}>Total Number/ Weight of Items    ⚖️</Text>

            <View style={styles.drop}>
                <TextInput
                    style={styles.input2}
                    value={number}
                    onChangeText={onChangeNumber}
                    keyboardType={"numeric"}
                    placeholderTextColor='white'
                />
                <Picker
                    mode='dropdown'
                    selectedValue={numb}
                    onValueChange={(itemValue, itemIndex) => onChang(itemValue)}
                    style={{ width: "50%", right: 0, position: "absolute" }}>
                    <Picker.Item label="Number" value="number" />
                    <Picker.Item label="Weight" value="weight" />
                </Picker>
            </View>
            <Text style={{ margin: 5, fontSize: 19 }}>Price Generated (in ₹) : </Text>
            <Text style={styles.gen} > {Price}</Text>
            <View style={{ marginTop: 10, marginBottom: 100, alignItems: "center" }}>
                <Button color="#16A085" title="Submit" />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={{
                        uri: 'data:image/jpeg;base64,' + this.resourcePath.data,
                    }}
                    style={{ width: 100, height: 100 }}
                />
                <Image
                    source={{ uri: this.state.resourcePath.uri }}
                    style={{ width: 200, height: 200 }}
                />
                <Text style={{ alignItems: 'center' }}>
                    {this.state.resourcePath.uri}
                </Text>
                <View onPress={this.chooseFile} >
                    <Text>Select File</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'white',
        borderColor: '#16A085',
        maxHeight: 80
    },
    input1: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'white',
        borderColor: '#16A085',
        height: 100

        // placeholderTextColor: 'white'
    },
    input2: {
        height: 40,
        marginBottom: 12,
        marginHorizontal: 12,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        color: 'white',
        borderColor: '#16A085',
        // backgroundColor:"green",
        width: "40%",
        display: "flex",
        position: "absolute",

        // placeholderTextColor: 'white'
    },
    drop:
    {
        width: "100%",
        color: 'white',
        // borderColor: '#16A085',
        height: 40,
        marginBottom: 20,
        position: "relative",
        display: "flex",
        justifyContent: "space-between"
    },
    gen: {
        height: 40,
        margin: 12,
        marginRight: 200,
        borderWidth: 1,
        padding: 10,
        color: 'white',
        borderColor: '#16A085',
        marginBottom: 25
    },
    picker: {
        // textDecorationLine: 'underline',
        // height: 50,
        // width: 170, 
        color: 'red',
        backgroundColor: '#fff',
        // marginLeft: 10,
        marginHorizontal: 10,
        marginVertical: 5
    }

});

export default TextIn