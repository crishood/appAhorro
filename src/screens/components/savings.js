import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native'
import SectionTitle from './section-title'
import { Title, MedText, BoldMedText, WhiteContainer, SmallText, Pill, BreadCrumb } from '../styled/withStyle'
import { LinearGradient } from 'expo-linear-gradient'

function Savings (props) {
    return (
        <View style = {{marginBottom:140}}>
            <SectionTitle>
                <Title>Los P*t@s del ahorro</Title>
            </SectionTitle>
            <View style = {{marginVertical: 20}}>
                <View>
                    <ImageBackground style = {styles.video} borderRadius = {20} source = {require('../../../assets/thumb.png')}>
                        <Image
                            style = {styles.play}
                            source = {require('../../../assets/play_circle_outline_24px.png')}
                        />
                    </ImageBackground>
                    <ImageBackground style = {styles.vector} borderBottomLeftRadius = {20} borderBottomRightRadius = {20} source = {require('../../../assets/vector.png')}>
                        <View style = {{paddingHorizontal: 20, paddingVertical: 30}}>
                            <BoldMedText fontColor = "white" style = {{fontSize: 24}}>Esto es AHORRO</BoldMedText>
                            <SmallText fontColor = "white" style = {{fontSize: 12}}>Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.</SmallText>
                        </View>
                    </ImageBackground>
                </View>
                <View style = {styles.breadcrumbs}>
                    <LinearGradient 
                        colors = {['#54D1ED', 'rgba(44, 82, 216, 0.4)' ]}
                        style = {{width: 10, height: 10, borderRadius: 20}} >
                    </LinearGradient>
                    <BreadCrumb></BreadCrumb>
                    <BreadCrumb></BreadCrumb>
                </View>
            </View>
            <WhiteContainer>
                <View style = {styles.advice}>
                    <View style = {styles.adviceDescription}> 
                        <MedText>10 gastos que debes evitar</MedText>
                        <SmallText>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</SmallText>
                    </View>
                    <Image
                        source = {require('../../../assets/blog1.png')}
                    />
                </View>
                <View style = {[styles.advice, styles.lineTop]}>
                    <View style = {styles.adviceDescription}> 
                        <MedText>10 gastos que debes evitar</MedText>
                        <SmallText>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</SmallText>
                    </View>
                    <Image
                        source = {require('../../../assets/blog2.png')}
                    />
                </View>
                <View style = {[styles.advice, styles.lineTop]}>
                    <View style = {styles.adviceDescription}> 
                        <MedText>10 gastos que debes evitar</MedText>
                        <SmallText>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</SmallText>
                    </View>
                    <Image
                        source = {require('../../../assets/blog3.png')}
                    />
                </View>
            </WhiteContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: 221,
        zIndex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vector: {
        width: '100%',
        height: 135,
        marginTop: -65,
        zIndex: 2
    },
    breadcrumbs: {
        flexDirection: 'row',
        marginTop: 14,
    },
    advice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    adviceDescription: {
        width: '75%',
        marginBottom: 15,
        paddingTop: 15
    },
    lineTop: {
        borderTopColor: '#FAF9FD',
        borderTopWidth: 2
    }


}
)

export default Savings