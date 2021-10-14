import React from 'react'
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native'
import BlockImg from "../pics/pic5.png"
import Img1 from "../pics/pic8.jpg"
import Img2 from "../pics/pic9.jpg"

const blog = ({ }) => {
    return (
        <ScrollView style={Styles.mback} showsVerticalScrollIndicator={false}>
            <Text style={Styles.heading}>
                Corporate Computers And Hardware Are Hiding A Ticking Time Bomb: End Of Life Devices
            </Text>
            <Text style={Styles.text1}>
                Did you know that corporate data theft is still a very real problem today? In fact, when it comes time to dispose of your old corporate computers and hardware, there is a hidden treasure trove of valuable information on your devices that could fall into the wrong hands.
                {"\n"}{"\n"}
                With that being said, if these end of life devices are not disposed of properly, many problems could arise, including data theft and litigation.
                {"\n"}{"\n"}
                In this article, learn how to protect your company from corporate data theft through proper IT recycling. But first, let’s discuss the dangers of improperly dumping end of life devices.
            </Text>
            <Image source={BlockImg} style={Styles.pic1} />
            <Text style={Styles.heading}>3 Dangers of Dumping End of Life Devices</Text>
            <Text style={Styles.text1}>
                When you have to get rid of your old electronic devices, it’s easy to take the simple route and just dump them in the trash. But, there are many dangers that come along with simply dumping your electronic devices into the garbage can.  {"\n"}{"\n"}

                In fact, improperly tossing your electronics can lead to:{"\n"}{"\n"}

                Negative environmental impacts{"\n"}
                Corporate data theft{"\n"}
                Legal costs{"\n"}{"\n"}

                Keep reading to learn more about the dangers of dumping end of life devices.{"\n"}{"\n"}
                1. Negative Environmental Impact{"\n"}{"\n"}
                Your electronic waste (e-waste) carries hidden dangers that you are unknowingly putting into the environment. Many electronics contain toxic substances that are a detriment to the environment.
                {"\n"}{"\n"}
                Unfortunately, when electronics are improperly thrown away, they can end up in landfills and these toxins can leach into the air, soil, and water.
                {"\n"}{"\n"}
                Because of this, these toxins could end up in the air and cause respiratory issues and other health risks for both animals and humans. Not only can these chemicals go into the air, but they also seep into the soil surrounding the landfills. This can then end up in the water we drink and the crops we eat.
                {"\n"}{"\n"}
                Rather than sending your end of life devices to your local dump, you should recycle those old hard drives, server racks, and laptops. It helps the environment and helps to protect you against data breaches and lawsuits.
            </Text>
            <Image source={Img1} style={Styles.pic2} />
            <Text style={Styles.text1}>
                This leads us to our next point; corporate data theft.
                {"\n"}{"\n"}
                2. Corporate Data Theft{"\n"}{"\n"}
                Besides pollution, data theft and litigation are also a major concern. In fact, improper e-waste disposal can put you at risk due to data recovery methods.
                {"\n"}{"\n"}
                Modern Data Recovery Methods Allow Criminals to Access Your Assets{"\n"}{"\n"}

                Many software companies are starting to strengthen their digital security, but have ignored the hardware they throw away. Simply wiping old drives and putting them out for sale isn’t quite enough. This is because data recovery tools have improved over the years so that a large amount of partial data still exists— often enough for thieves to use or get away with.
                {"\n"}{"\n"}
                Criminals salvage e-waste from landfills and are able to get your data, leading to identity theft and confidential company data being stolen. Some businesses have even found the hard drives they thought were destroyed on eBay!
            </Text>
            <Image source={Img2} style={Styles.pic2} />
            <Text style={Styles.text2}>
                A simple wipe or overwrite is not enough to protect your sensitive data. The only way to be sure your information is safe is by recycling it with a trusted, credentialed IT asset management company.
                {"\n"}{"\n"}
                3. Legal Costs{"\n"}{"\n"}
                In 2020, data breach litigation mounted across the US and the UK. Here’s why.
                {"\n"}{"\n"}
                In 2018, British Airways underwent a corporate data breach that leaked the personal and financial information of hundreds of thousands of customers. Also in 2018, another data breach occurred in the card readers at a convenience store chain called HyVee. This breach affected nearly 40 cities in Iowa and stole customers’ names, credit card numbers, verification codes, and expiration dates.
                {"\n"}{"\n"}
                Even as recently as ​​April 2021, Kroger’s lack of protection against employee data resulted in a data breach leaking millions of employees’ birthdates, social security numbers, salary amounts, and more.{"\n"}{"\n"}

                These customers and employees affected were able to file data breach lawsuits and receive settlements. Many businesses have had to learn the hard way that the cost of a data breach lawsuit is high.
                {"\n"}{"\n"}
                How Proper IT Recycling Can Protect Your Assets?{"\n"}{"\n"}
                IT Recycling is a vital routine process in most businesses. Simply put, recycling your electronics is environmentally friendly and is the best way to keep your data secure from corporate data theft.
                {"\n"}{"\n"}
                Once your material arrives at a recycling facility, it will be inventoried, and all company identification and/or sensitive information should be removed and destroyed. Then, components of value are repurposed for reuse, and the other remaining parts are processed further for final metals recovery.
                {"\n"}{"\n"}
                So, who can properly recycle your end of life devices?
                {"\n"}{"\n"}
                The Importance of an IT Asset Disposition Company (ITAD)
                An ITAD company, like Great Lakes Electronics, can help you manage your IT assets and securely destroy your data.
                {"\n"}{"\n"}
                In order to qualify as an ITAD, you need to get e-waste certifications. Luckily, Great Lakes Electronics Corporation has numerous e-waste certifications such as ISO 45001, Occupational Health & Safety (OHSAS) 18001:2007, and Responsible Recycling (R2).
                {"\n"}{"\n"}
                With these qualifications, ITADs like Great Lakes Electronics are able to offer services such as permanent data erasure, data destruction, and electronic recycling without the dangers.
            </Text>
        </ScrollView>
    )
}
const Styles = StyleSheet.create({
    pic1:
    {
        margin: 25,
        marginHorizontal: 40
    },
    mback: {
        // marginBottom: 20,
        paddingBottom: 50,
        backgroundColor: "black",
        flex: 1
    },
    pic2:
    {
        width: 350,
        height: 180,
        marginHorizontal: 25,
        marginVertical: 20

    },
    text2:
    {
        marginBottom: 50,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        marginHorizontal: 20

    },
    text1:
    {
        marginHorizontal: 20,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    },
    heading:
    {
        fontWeight: "bold",
        margin: 5,
        marginBottom: 15,
        fontSize: 30,
        marginHorizontal: 20,
        color: "white"
    }
})
export default blog