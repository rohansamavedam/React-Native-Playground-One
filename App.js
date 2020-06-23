import React, {Component} from 'react'
import {View, StyleSheet, ScrollView } from 'react-native'
import SocialPage from './components/SocialPage'
import Header from './components/Header'
import TopBar from './components/TopBar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch('https://demo0918883.mockable.io/getusers')
    .then((response) => response.json())
    .then((json) => {
      this.setState({data: json})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return(
    <View style={styles.container}>
      <Header username={"Rohan Samavedam"}/>
      <TopBar/>
      <ScrollView>
        {/* Properties for Social Page: title, body, image, members, followers, thanks */}
        {
          this.state.data.map((prop, key) => {
          return (
            <SocialPage title={prop.title} body={prop.body} image={prop.image} members={prop.members} followers={prop.followers} thanks={prop.thanks} key={key}/>
          );
          })
        }
      </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  }
})

export default App;