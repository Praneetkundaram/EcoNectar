import { StyleSheet } from 'react-native';
export const HomeStyle = StyleSheet.create({
    mainBanner:{
        height:"30%",
        minHeight:270,
        maxHeight:270,
        marginTop:"3%",
        width:"95%",
        backgroundColor:"#16A085",
        padding:25,
        margin:"2.5%",
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        // marginBottom: 60
        
    },
    backg:
    {
        backgroundColor: "black",
        // marginBottom: 50
        // marginBottom:20s
    },
    HomeImg:{
        width:"35%",
        height:"100%",
        resizeMode: 'contain'
    },
    welcomeDescription:{
        width:"65%",
        padding:15,
    },
    userName:{
        fontSize:20,
        fontWeight:"bold",
        
    },
    butt:
    {
        width:20,
        // marginLeft: 
    },
    blogView:{
        width:"95%",
        height:240,
        backgroundColor:"red",
        margin:"2.5%",
        marginVertical:5,
        borderRadius:10,
        overflow:"hidden",
        backgroundColor:"#283747"
        
    },
    blogImg:{
        width:"98%",
        height:190,
        resizeMode:"cover",
        margin:"1%",
        borderRadius:10
    },
    blogText:{
        padding:5,
        paddingBottom:10,
        color: 'white'
    },
    blogView2:{
        width:"95%",
        height:240,
        backgroundColor:"red",
        margin:"2.5%",
        marginVertical:5,
        borderRadius:10,
        overflow:"hidden",
        backgroundColor:"#283747",
        marginBottom: 110
    },
    lasttxt:
    {
        color: "hsl(0,0%,50%)",
        textAlign: "center",
        marginTop: -120,
        color: '#556b2f',
        // paddingTop: -12
        
    },
    back:
    {
        backgroundColor: "transparent",
        marginTop: 10,
        // marginBottom: 10,
        paddingTop: 130,
        opacity: 20
    }
});
