import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Home from './src/screens/containers/home'
import InvestCard from './src/screens/components/invest-card'
import Goals from './src/screens/components/goals'
import Portfolio from './src/screens/components/portfolio'
import Savings from './src/screens/components/savings'
import Menu from './src/screens/components/menu'

export default class App extends Component {
  render(){
    return (
      <View>
      <View style = {styles.container}>
  
          <Home>
            <ScrollView style = {styles.scroller}>
            
                <InvestCard/>
                <Goals/>
                <Portfolio/>
                <Savings/>
              
            </ScrollView>
          </Home>
          
         
      
      </View>
      <View style = {styles.menuHome}>
        <Menu/>

      </View>

      </View>
      
    )
  }

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#F8F8FC',
  },
  menuHome: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    paddingHorizontal: 24,

  }

})