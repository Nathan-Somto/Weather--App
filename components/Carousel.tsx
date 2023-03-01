import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import Carousel from 'react-native-snap-carousel';
import DailyData, { ITEM_WIDTH, SLIDER_WIDTH } from './DailyData';
import { dailyDataType } from '../utils/getDailyData';
type RenderItemType = {
  item: dailyDataType;
  index: number;
};
const CarouselContainer = ({data}:{data:dailyDataType[]}) => {
    const isCarousel = useRef(null);
  return (
    <Carousel
    layout='stack'
    layoutCardOffset={data.length*3}
    ref={isCarousel}
    data={data as dailyDataType[]}
    renderItem={ ({item,index}) => (
      <DailyData date={item.date} temp={item.temp} icon={item.icon} description ={item.description}/>
    )}
    sliderWidth={SLIDER_WIDTH}
    itemWidth={ITEM_WIDTH}
    inactiveSlideShift={0}
    useScrollView={true}
    onSnapToItem ={()=>console.log('something')}
    vertical={false}
  />
  )
}

export default CarouselContainer;