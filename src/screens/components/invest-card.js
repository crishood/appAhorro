import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'
import SectionTitle from './section-title'
import { LinearGradient } from 'expo-linear-gradient'
import { Title, MedText, BoldMedText, WhiteContainer } from '../styled/withStyle'

function InvestCard (props) {
    return(
        <View style = {{marginTop: 54}} >
            <SectionTitle>
                <Title>Hola, Camila</Title>
                <Image 
                    source = {require('../../../assets/notifications_24px.png')}
                />
            </SectionTitle>
            <View style = {styles.investCard} >
                <LinearGradient 
                    colors = {['#54D1ED', 'rgba(44, 82, 216, 0.4)' ]}
                    style = {styles.colorCard} >

                    <View style = {styles.profile}>

                        <Title fontColor = "white">Eres{"\n"}estratega</Title>
                        <Image
                            source = {require('../../../assets/woman.png')}
                            style = {styles.profileImage}
                        />
                    </View>
                    <View>
                        <BoldMedText fontColor = "white">Tu saldo</BoldMedText>
                        <BoldMedText fontColor = "white" style = {{fontSize: 36}}>
                            $1.570.000
                        </BoldMedText> 
                    </View>
                </LinearGradient>
                <WhiteContainer>
                    <View style = {styles.investSummary}>
                        <MedText fontColor = "#58506B">Inversión</MedText>
                        <BoldMedText fontColor = "#58506B">$1.600.000</BoldMedText>
                    </View>
                    <View style = {styles.returnSummary}>
                        <MedText fontColor = "#58506B">Rendimiento</MedText>
                        <BoldMedText fontColor = "#58506B">-$30.000</BoldMedText>
                    </View>
                </WhiteContainer>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    investCard: {
       marginVertical: 40,
    },
    colorCard: {
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -70,
    },
    profileImage: {
        position: 'relative',
        top: -60,
    },
    investSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5
    },
    returnSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        borderTopColor: '#FAF9FD',
        borderTopWidth: 2
    }

    
})

export default InvestCard