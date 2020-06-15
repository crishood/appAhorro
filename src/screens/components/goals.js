import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'
import SectionTitle from './section-title'
import { Title, MedText, BoldMedText, WhiteContainer, SmallText } from '../styled/withStyle'

function Goals (props) {
    return(

     <View>
        <SectionTitle>
            <Title>Tus metas</Title>
            <Image 
                source = {require('../../../assets/add_circle_outline_24px.png')}
            />
        </SectionTitle>
        <View style = {styles.goalsCard}>
            <WhiteContainer style = {styles.goal}>
                <View style = {styles.goalData}>
                    <Image
                        source = {require('../../../assets/island.png')}
                        style = {{marginBottom: 10}}
                    />
                    <BoldMedText>Viaje a Islas{"\n"}Canarias</BoldMedText>
                </View>
                <View style = {styles.goalPercentage}>
                    <Image
                            source = {require('../../../assets/s_donut_20.png')}
                    />
                    <View>
                        <BoldMedText fontColor = "#54D1ED" style = {{fontSize:12}}>$1.630.000</BoldMedText>
                        <SmallText>$8.000.000</SmallText>
                    </View>
                </View>
            </WhiteContainer>
            <WhiteContainer style = {styles.goal}>
                <View style = {styles.goalData}>
                        <Image
                            source = {require('../../../assets/laptop.png')}
                            style = {{marginBottom: 10}}
                        />
                        <BoldMedText>Macbook Pro</BoldMedText>
                    </View>
                    <View style = {styles.goalPercentage}>
                        <Image
                                source = {require('../../../assets/s_donut_0.png')}
                        />
                        <View>
                            <BoldMedText fontColor = "#54D1ED" style = {{fontSize:12}}>$0</BoldMedText>
                            <SmallText>$7.000.000</SmallText>
                        </View>
                    </View>
            </WhiteContainer>
        </View>
     </View>
    )
}

const styles = StyleSheet.create({
    goalsCard: {
       marginBottom: 40,
       flexDirection: 'row',
       justifyContent: 'space-between',
       width: '100%'
    },
    goal: {
        width: '48%'
    },
    goalData: {
        paddingBottom: 10,
        height: 100,
    },
   goalPercentage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        borderTopColor: '#FAF9FD',
        borderTopWidth: 2
   }
})



export default Goals