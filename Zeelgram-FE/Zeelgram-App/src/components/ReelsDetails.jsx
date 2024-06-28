import React, { useState } from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { videoData } from '../utils/VideoData';
import SingleReels from './SingleReels';

const ReelsDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({ item, index }) => (
        <SingleReels item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(_item, index) => index}
    />
  );
};

export default ReelsDetails;