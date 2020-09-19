import React, {useState} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native' 
import Carousel from 'react-native-snap-carousel';

import {styles} from '../pages/styles'
export default function Tabs({navigation}) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [event] = useState([
        {
            title: 'World Blood Donor Day',
            date: '17 Oct 2020',
            img_url: 'data:image/jpeg;base64,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'
        },
        {
            title: 'World Blood Donor Day',
            date: '17 Oct 2020',
            img_url: 'data:image/jpeg;base64,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'
        },
        {
            title: 'World Blood Donor Day',
            date: '17 Oct 2020',
            img_url: 'data:image/jpeg;base64,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'
        },

    ])

    const _renderItem = ({item,index}) => {
        return (
          <View style={styles.carouselItem}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <Text>{item.date}</Text>
                <Image 
                    source={{uri: item.img_url}}
                    style={styles.eventPoster}/>
                <TouchableOpacity style={styles.eventBtn} onPress={() => navigation.navigate('EventLocation')}>
                    <Text style={styles.seeLocationText}>See Location</Text>
                </TouchableOpacity>
          </View>

        )
    }


    return (
        <View>
            <View style={styles.titlesCont}>
                <Text style={styles.titles}>Event</Text>
            </View>
            <View style={styles.fluid}>
                <View style={styles.containerCarousel}>
                    <Carousel
                      layout={"default"}
                      data={event}
                      sliderWidth={400}
                      itemWidth={300}
                      renderItem={_renderItem}
                      onSnapToItem = { index => setActiveIndex(index) } />
                </View>
            </View>
        </View>
        
    )
}