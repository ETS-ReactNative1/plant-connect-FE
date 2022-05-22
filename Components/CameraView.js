import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Camera } from 'expo-camera';

 const CameraView = ({setImage, image, setCameraModalVisible, setCameraViewVisible}) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
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
      setCameraViewVisible(false);
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No Camera Access, Fool!</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera ref={ref => setCamera(ref)}
        style={styles.fixedRatio}
        type={type}
        ratio={'1:1'}
        />
      </View>
        {/* <Pressable
        title= 'flip camera'
        onPress={() => {setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}}
        ><Text style={styles.icon}> ♲  </Text></Pressable> */}
        <Pressable onPress={() => takePicture()}><Text style={styles.icon}> 📸  </Text></Pressable>
        <Pressable onPress={() => setCameraModalVisible(false)}><Text style={styles.icon}> ❌ </Text></Pressable>
        {{image} && <Image source={{uri: image}} style={styles.image} />}

    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    // height: 400,
    width: 400,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 10,
		borderColor: "blue",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 10,
		borderColor: "yellow",
  },
  icon: {
    fontSize: 40,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    borderWidth: 10,
		borderColor: "green",
  }
})

export default CameraView;
