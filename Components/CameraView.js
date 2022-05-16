import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Button } from 'react-native-web';

 const CameraView = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera){
      const data=await camera.takePictureAsync(null)
      setImage(data.uri);
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No Camera Access, Fool!</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>Try and Ignore ME!!!!!</Text>
      <View style={styles.cameraContainer}>
        <Camera ref={ref => setCamera(ref)}
        style={styles.fixedRatio}
        type={type}
        ratio={'1:1'}
        />
      </View>
        <Pressable
        title= 'flip camera'
        onPress={() => {setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}}
        ><Text> ♲  </Text></Pressable>
        <Pressable onPress={() => takePicture()}><Text> 📸  </Text></Pressable>
        
        
        
        {image && <Image source={{uri: image}} style={{flex:1}} />}
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  }
})

export default CameraView;