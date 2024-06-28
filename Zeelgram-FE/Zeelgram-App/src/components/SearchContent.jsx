import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const SearchContent = props => {
  const searchData = [
    {
      id: 0,
      images: [
        require('../assets/data/photo-1.avif'),
        require('../assets/data/photo-2.avif'),
        require('../assets/data/photo-2.avif'),
        require('../assets/data/photo-1701602997683-9528c7297c16.avif'),
        require('../assets/data/photo-1701754052633-413399ffc65d.avif'),
        require('../assets/data/photo-1701602997683-9528c7297c16.avif'),
      ],
    },
    {
      id: 1,
      images: [
        require('../assets/data/z4936286477082_767a0f72c5aed430b98a725920bfb649.jpg'),
        require('../assets/data/photo-1701602997683-9528c7297c16.avif'),
        require('../assets/data/photo-1701602997683-9528c7297c16.avif'),
        require('../assets/data/photo-1702217535011-ec79fe11c88c.avif'),
        require('../assets/data/photo-1701893852514-e079530f6bb8.avif'),
        require('../assets/data/z4936286477082_767a0f72c5aed430b98a725920bfb649.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../assets/data/photo-1701602997683-9528c7297c16.avif'),
        require('../assets/data/photo-1701754052633-413399ffc65d.avif'),
        require('../assets/data/photo-2.avif'),
      ],
    },
  ];

  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  width:'100%'
                }}>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                      style={{paddingBottom: 2,width:'33%'}}>
                      <Image
                        source={imageData}
                        style={{width: '100%', height: 150}}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width:'66.5%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2,width:'49.5%'}}>
                        <Image
                          source={imageData}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                  style={{marginLeft: 2,width:'33%'}}>
                  <Image
                    source={data.images[5]}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                  style={{paddingRight: 2,width:'66.5%'}}>
                  <Image
                    source={data.images[2]}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '33%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2,width:'100%'}}>
                        <Image
                          source={imageData}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;