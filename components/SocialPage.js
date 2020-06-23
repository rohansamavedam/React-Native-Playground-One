import React from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import CustomButton from './CustomButton'

const SocialPage = ({image, title, body, members, thanks, followers}) => {


  return (
        <View style={styles.container}>
            <Grid>
                <Col style={{width: 90}}><Image style={styles.image} source={{uri: image}}/></Col>
                <Col>
                    <Row style={{height: 30}}>
                        <Col style={{width: 222}}><Text style={styles.titleText}>{title}</Text></Col>
                        <Col><CustomButton/></Col>
                    </Row>
                    <Row style={styles.rowWidth}>
                        <Text style={styles.bodyText}>{body}</Text>
                    </Row>
                    <Row>
                        <Col><Text style={styles.bodyText}>{members} Members</Text></Col>
                        <Col><Text style={styles.bodyText}>{thanks}M Thanks</Text></Col>
                        <Col><Text style={styles.bodyText}>{followers}k Followers</Text></Col>
                    </Row>
                </Col>
            </Grid>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 413,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        padding: 10
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 100 / 2,
      borderWidth: 2,
      borderColor: 'white',
    },
    titleText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    },
    bodyText: {
        fontSize: 14,
        color: 'grey',
    },
    button: {
        height: 10,
        width: 25,
        backgroundColor: 'red',
        borderRadius: 25,
    },
    rowWidth: {
        height: 'auto',
        paddingBottom: 10,
    }
  
})

export default SocialPage;