import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid
} from 'react-native';
// import Sound from 'react-native-sound';
var Sound = require('react-native-sound');
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import Styles from './Styles';
import { Buffer } from 'buffer';
import Permissions from 'react-native-permissions';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AudioRecord from 'react-native-audio-record';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function RecordPage(props) {

  const [fillNo, setFillNo] = useState(0)
  const [recording, setrecording] = useState(false)
  const [audioFile, setAudioFile] = useState("")

  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);


  useEffect(() => {
    checkPermission();
    // setTimeout(function () {


    renderModalAndSound()

    // }, 1000)
  });


  const checkPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Permissions for record audio',
            message: 'Give permission to your device to record audio',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('permission granted');
          recordeInitialize()
        } else {
          console.log('permission denied');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
  };

  const recordeInitialize = async () => {
    const options = {
      sampleRate: 16000,
      channels: 1,
      bitsPerSample: 16,
      wavFile: 'test.wav'
    };

    AudioRecord.init(options);

    AudioRecord.on('data', data => {
      const chunk = Buffer.from(data, 'base64');
      console.log('chunk size', chunk.byteLength);
      // do something with audio chunk
    });
  };


  const renderModalAndSound = () => {
    try {
     
      const url = 'ringme.mp3';
      Sound.setCategory('Playback');
      const sound = new Sound(url, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound.setVolume(0.1);
        sound.play();
        sound.setVolume(0.1);
        setTimeout(function () {
          sound.stop();
        }, 7000)
      });
    } catch (error) {


    }
  }

  const start = () => {
  

      console.log('start record');
      // this.setState({ audioFile: '', recording: true, loaded: false });
      setAudioFile("")
      setrecording(true)
      setIsTimerStart(true);
      setResetTimer(false);
      AudioRecord.start();

  };

  const stop = async () => {
    // if (!recording) return;
    console.log('stop record');
    AudioRecord.stop();
    setrecording(false)
    setIsTimerStart(false);
    setResetTimer(true);
    // generatefile()
  };

  const generatefile = async () => {
    try {
      let audioFile = await AudioRecord.stop();
      console.log('audioFile', audioFile);
      setAudioFile(audioFile)
    } catch (error) {
      console.log('stop record---generatefile---', error);
    }
  }

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <View style={Styles.mainContainer}>
        <View style={Styles.mainWrapper}>

          <View style={Styles.userRound}>
            <Image source={Images.user} style={Styles.iconUser} />
          </View>

          <Text style={Styles.loginText}>{"THE LISTENER"}</Text>
        </View>

        <View style={Styles.countDownWrap}>
          <AnimatedCircularProgress
            size={250}
            width={8}
            fill={0}
            tintColor="#d1582c"
            backgroundColor={Colors.mediumBlack}>
            {
              (fill) => (
                <View style={Styles.countInner}>

                  <Stopwatch

                    laps
                    msecs={false}
                    start={isTimerStart}
                    //To start
                    reset={resetTimer}
                    //To reset
                    options={options}
                    //options for the styling
                    getTime={(time) => {
                      console.log("time---::--", time);
                    }}
                  // totalDuration={timerDuration}
                  // msecs={false}
                  // //Time Duration
                  // start={isTimerStart}
                  // //To start
                  // reset={resetTimer}
                  // //To reset
                  // options={options}
                  // //options for the styling
                  // // handleFinish={() => {
                  // //   alert('Custom Completion Function');
                  // // }}
                  // //can call a function On finish of the time
                  // getTime={(time) => {
                  //   console.log("time",time);
                  // }}
                  />
                  <Text style={Styles.descriptionText}>
                    {"Minutes"}
                  </Text>
                </View>
              )
            }
          </AnimatedCircularProgress>
          <Text style={Styles.prayerText}>{"Say Your Prayer"}</Text>

        </View>


      </View>
      <View style={Styles.bottomContainer}>
        <View style={Styles.bottomWrapper}>
          {/* 1 */}
          <View style={Styles.userRound}>
            <Image source={Images.clock} style={Styles.clockIcon} />
          </View>

          {/* Record Button */}
          {
            recording === true ?
              <TouchableOpacity onPress={() => { stop() }}
                style={Styles.recordRoundButton}>
                <View style={Styles.recordInner}>
                  <Text style={Styles.recordText}>{"STOP"}</Text>
                </View>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={start}
                style={Styles.recordRoundButton}>
                <View style={Styles.recordInner}>
                  <Text style={Styles.recordText}>{"REC"}</Text>
                </View>
              </TouchableOpacity>}


          {/* 2 */}
          <View style={Styles.userRound}>
            <Image source={Images.folder} style={Styles.folderIcon} />
          </View>

        </View>
      </View>


    </SafeAreaView>

  );
}

const options = {
  // container: {
  //   backgroundColor: '#FF0000',
  //   padding: 5,
  //   borderRadius: 5,
  //   width: 200,
  //   alignItems: 'center',
  // },
  text: {

    fontSize: hp(2.7),
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.white,
  },
};
