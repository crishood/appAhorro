import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native'
import { Title, MedText, BoldMedText, WhiteContainer, SmallText } from '../styled/withStyle'
import { LinearGradient } from 'expo-linear-gradient'

function Menu (props) {
    return(
        <View>
            <WhiteContainer style = {styles.menu}>
                <View style = {styles.option}>
                    <View style = {styles.iconMenu} >
                        <Image
                            
                            source = { require('../../../assets/home_24px.png')}
                        />
                        
                    </View>
                    <SmallText fontColor = "#A99DC6">Inicio</SmallText>
                </View>
                <View style = {styles.option}>
                    <View style = {styles.iconMenu} >
                        <Image
                            
                            source = { require('../../../assets/format_list_bulleted_24px.png')}
                        />
                        
                    </View>
                    <SmallText fontColor = "#A99DC6">Historia</SmallText>
                </View>
                <View style = {styles.option}>
                    <View style = {styles.iconMenu} >
                        <View style = {styles.containerBtn}>
                            <LinearGradient 
                                style = {styles.addBtn}
                                colors = {['#54D1ED', 'rgba(44, 82, 216, 0.4)' ]}
                            >
                                <Image
                                    source = { require('../../../assets/add_24px.png')}
                                />
                            </LinearGradient>
                        </View>
                    </View>
                    <SmallText fontColor = "#A99DC6">Ahorrar</SmallText>
                </View>
                <View style = {styles.option}>
                    <View style = {styles.iconMenu} >
                        <Image
                            
                            source = { require('../../../assets/account_circle_24px.png')}
                        />
                        
                    </View>
                    <SmallText fontColor = "#A99DC6">Mi perfil</SmallText>
                </View>
                <View style = {styles.option}>
                    <View style = {styles.iconMenu} >
                        <Image
                            
                            source = { require('../../../assets/more_horiz_24px.png')}
                        />
                        
                    </View>
                    <SmallText fontColor = "#A99DC6">Más</SmallText>
                </View>
                
              
            </WhiteContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    option: {
        alignItems: 'center',
    },
    iconMenu: {
        marginBottom: 7,
        alignContent: 'center',
        justifyContent: 'center',
        height: 20,
        
    },
    containerBtn: {
        borderRadius: 50,
        backgroundColor: '#F8F8FC',
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 30
    },
    addBtn: {
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'

    }

})

export default Menu