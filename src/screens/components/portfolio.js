import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'
import SectionTitle from './section-title'
import { Title, MedText, BoldMedText, WhiteContainer, SmallText, Pill } from '../styled/withStyle'

function Portfolio (props) {
    return (
       
            <View style = {{marginBottom: 40}}>
                <SectionTitle>
                    <Title>Conoce tu portafolio</Title>
                    <Pill>
                        <SmallText fontColor = "#41CF69">Estratega</SmallText>
                    </Pill>
                </SectionTitle>
                <WhiteContainer>
                    <View style = {styles.fundsTop}>
                        <Image source = {require('../../../assets/holding_donut.png')}/>
                        <View>
                            <View  style = {styles.fundsTopLogo}>
                                <Image source = {require('../../../assets/logo.png')}/>
                                <Pill bgColor = "#41CF69"><SmallText fontColor = "white">15%</SmallText></Pill>
                            </View>
                            <MedText style = {{fontSize: 12, marginTop: 5}}>FIC Old Mutual Efectivo</MedText>
                            <BoldMedText>$240.000</BoldMedText>
                            <SmallText fontColor = "#41CF69">Tipo de activo</SmallText>
                            <SmallText>Renta fija</SmallText>
                            <SmallText>Depósito a la fija</SmallText>
                            <View style = {styles.sliderBtns}>
                                <View style = {styles.btn}>
                                    <Image source = {require('../../../assets/chevron_left_24px.png')}/>
                                </View>
                                <View style = {styles.btn}>
                                    <Image source = {require('../../../assets/chevron_right_24px.png')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <SmallText>
                            Tu dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.
                        </SmallText>
                    </View>
                </WhiteContainer>
            </View>
       
    )
}

const styles = StyleSheet.create({
    fundsTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    fundsTopLogo: {
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    sliderBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    btn: {
        width: 30,
        height: 30,
        padding: 5,
        borderColor: '#FAF9FD',
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default Portfolio