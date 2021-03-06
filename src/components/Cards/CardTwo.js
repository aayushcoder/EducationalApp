import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import { Colors } from '../../common';
import Rating from '../Rating/Rating';

const CardTwo = (props) => {
  return (
    <View>
      <View style={[styles.cardContainer,props.style]}>
        <TouchableOpacity onPress={() =>
          props.navigate('TrialCourses', {
            title: props.item.title,
            price: props.item.price,
            currentStudent: props.item.currentStudent,
            totalStudent: props.item.totalStudent,
            name: props.item.name,
            image: props.item.image
          })
        }
        >
          <View style={styles.card}>
            <View style={{flex: 1}}>
              <View style={{flex :1}}>
                <Image
                  source={props.item.image}
                  style={styles.image}
                />
                <View style={{flex: 1,alignItems: 'flex-end',marginTop: 5,marginRight: 5}}>
                  <Rating rating={props.item.rating} />
                </View>
                
              </View>
              <View style={{flex: 2,marginTop: 80,marginLeft: 10}}>
                <View style={{flex: 1}}>
                  <Text style={{ fontWeight: 'bold' }}>{props.item.title}</Text>
                </View>
                <View style={{flex: 1,marginTop: 10}}>
                  <Text style={{ color: Colors.main,fontWeight: 'bold' }}>$ {props.item.price}</Text>
                </View>
              </View>
              
            </View>

          </View>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = {
  cardContainer: {
    marginHorizontal: 16,
    marginTop: 10,
    paddingBottom: 20
  },
  card: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 0.2,
        
      },
      android: {
      }
    }),
    borderColor: '#ddd',
    borderWidth: 1,
    height: 180,
    width: 132,
    borderRadius: 4,
    
    
  },
  image: {
    height: 100,
    width: 130,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    position: 'absolute'
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  priceText: {
    color: '#fff',
    fontWeight: 'bold'
  }
}
export default CardTwo;