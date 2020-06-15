import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'
import { Title } from '../styled/withStyle'

function SectionTitle (props) {
    return (
        <View style = {styles.header}>
            {props.children}
             
           
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default SectionTitle