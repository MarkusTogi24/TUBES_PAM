import * as React from 'react';

import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Dimensions,
    Linking,
    Platform,
    TouchableOpacity
} from 'react-native';

import { Appbar, ProgressBar, Colors, Text, Button  } from 'react-native-paper';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
import API_Index from '../api/Index';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

import Show from './Show';

export default function Index(){
    const { data, isPending, error } = API_Index();
    // console.log(data);
    const handlePress = (id) => {
        console.log(id);
        <Show id={id}/>
    }
    return(
        <>
            <View style={styles.mainContainer}>
                { isPending && (
                    <View style={styles.loading}>
                        <ProgressBar progress={0.5} color={Colors.red800} />
                    </View>
                )}
                { error && (
                    <View style={styles.loading}>
                        <Text>Terjadi Kesalahan</Text>
                    </View>
                )}
                { data && (
                    <View>
                        <Appbar.Header style={ [{backgroundColor:"#6e0358"} ]} >
                            <Appbar.Content title="Semua Produk" subtitle={'118140037 - Markus Togi F.R. Sinaga'} />
                            <Appbar.Action icon="magnify" onPress={() => {}} />
                            <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
                        </Appbar.Header>
                        <ScrollView style={styles.body}>
                            <Text style={{ fontSize:24, fontFamily:'Montserrat-Semibold', marginBottom:4 }}>Webservice API Source</Text>
                            <Text style={{ color:'#6e0358', textDecorationLine:'underline', marginBottom:20 }} 
                                onPress={() => {
                                    Linking.openURL('https://server-tubes-pam-app.herokuapp.com');
                                }}>
                                https://server-tubes-pam-app.herokuapp.com
                            </Text>
                            { 
                                data.map((product) => (
                                    <TouchableOpacity
                                        key={ product.id } 
                                        style={styles.button}
                                        onPress={() => handlePress(product.id)}
                                    >
                                        <View style={styles.product} >
                                            <View style={styles.productsImage}>
                                                <Image source={{uri: 'https://server-tubes-pam-app.herokuapp.com/'+product.image}} style={{width:80, height:80}}/>
                                            </View>
                                            <View style={styles.productsDetail}>
                                                <Text style={styles.productsName}>{ product.name }</Text>
                                                <View style={styles.productsDescription}>
                                                    <Text>{product.description}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                ) }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width:width,
        height: '100%',
        alignItems: 'center',
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#34eb5b'
    },
    body: {
        height: '100%',
        width:width,
        backgroundColor:'#ffedfb',
        padding:12,
        paddingBottom:60,
        // backgroundColor:'#34eb5b'
    },
    productsImage:{
        width:'25%'
    },
    productsDetail:{
        flex:1,
        width:'72%'
    },
    productsName:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:16
    },
    productsDescription:{
        height:70,
        width:'100%',
        overflow:'hidden'
    },
    product: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        backgroundColor:'white',
        marginBottom:12,
        padding:8,
        
    },
});