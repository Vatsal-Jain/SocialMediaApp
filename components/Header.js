import {
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import React ,{useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Secondicon from 'react-native-vector-icons/FontAwesome'
import { Button, Snackbar,IconButton } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Header = ({item}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const wdth = useWindowDimensions().width;
  const hgt = useWindowDimensions().height;
//   const imagelink =
//     'https://avatars.dicebear.com/v2/avataaars/{{' +
//     item.username +
//     '}}.svg?options[mood][]=happy';
//   const imagelink2 =
//     'https://avatars.dicebear.com/v2/avataaars/{{bret}}.svg?options[mood][]=happy';
//   const newww =
//     'https://avatars.dicebear.com/v2/avataaars/' +
//     item.username +
//     '.svg?options[mood][]=happy';

const [visible, setVisible] = useState(false);
const [like,setLike] = useState(false)

const onToggleSnackBar = () => setVisible(!visible);

const onDismissSnackBar = () => setVisible(false);
const [count,setCount ] = useState(item.count);


const onHandleLike = () => {
  setLike(!like)
  {!like ?  setCount(count + 1) :   setCount(count - 1) }

  

  
}
  return (
  
    <View style={styles.headercontainer}>
      <View style={{display:'flex',flexDirection:'row'}}>
      <View style={styles.userdata}>
        <Image
          source={{uri: item.profileimage}}
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain',
            borderRadius: 20,
          }}
        />
        <View style={styles.usertext}>
          <Text style={styles.username}>{item.name}</Text>
          <Text
            style={[
              styles.userpostlocation,
              {color: isDarkMode ? Colors.light : Colors.light},
            ]}>
            {item.location}
          </Text>
        
        
          </View>
          
          
        </View>
        <View style={{right:0,display:'flex',justifyContent:'center',position:'absolute'}}>
          <IconButton icon="dots-horizontal" />
          </View>
      </View>
    
      <Image
        source={{uri: item.imageurl}}
        style={{width: wdth * 1, height: hgt * 0.5, resizeMode: 'contain'}}
      />
      <View style={styles.footer}>
      
      <View style={styles.footerdata}>
        
      {/* <Icon name={like ? 'heart' :'heart-outline'} color='white' size={26} type="Ionicons" onPress={() =>setLike(!like)}/> */}
      
      <IconButton
          onPress={() => onHandleLike()}
          icon={like ? 'heart' : 'heart-outline'}
          size={28}
          iconColor={like ? 'red' : 'white'}
          animated
        />

       
        
        <IconButton icon="send-outline" size={25} animated />

        {/* <Icon name="rocket" size={30} color="#900" />
        <Text style={{color:'white',fontSize:20}}>Share</Text> */}
        {/* <Icon name={visible ? 'heart' :'heart-outline'} color='white' size={26} type="Ionicons" onPress={() =>setVisible(!visible)}/> */}

        <IconButton
          onPress={() => setVisible(!visible)}
          icon={visible ? 'bookmark' : 'bookmark-outline'}
          size={28}
          animated
        />

         {/* <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Saved.
      </Snackbar>   */}
      </View>
      <View style={styles.footerdata}>
      {count ? 
      
      <Text
      style={{
        fontSize: 14,
        color: 'white',
        fontWeight:'500'
     }}
      >{count} Likes</Text> : <Text></Text>
      }
      </View>
      <View style={{
         marginHorizontal:20,
         marginVertical:2,
         flexDirection:'row',
         
       alignItems:'center'
      }}>
      <Text style={{
         fontSize: 16,
         color: 'white',
         fontWeight:'bold'
      }}>{item.name}</Text>
      <Text style={{
         
            fontWeight:'310',
         fontSize: 11,
         marginHorizontal:5,
         color: 'white',
      }}>{item.caption}
      <Text style={{
         
         fontWeight:'310',
      fontSize: 11,
      marginLeft:20,
      color: 'lightblue',
   }}>{" "}{item.tags}</Text>
      </Text>


      
      </View>
      <View style={styles.footerdata}>
      <Text>View all 12 comments</Text>
      </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
  
    justifyContent: 'center',
    paddingVertical:10,
  
    // borderTopColor:'white',
    // borderWidth:0.5
    
    
  },

  userdata: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'black',


  },
  usertext: {
    marginHorizontal: 10,
    flexDirection: 'column',
  },
  userpostlocation: {
    fontSize: 12,
    marginHorizontal: 5,
    fontWeight: '340',
  },
  username: {
    fontSize: 17,
    color: 'white',
    
  },
  footerdata:{
    marginHorizontal:20,
    marginVertical:2,
    flexDirection:'row',
    justifyContent:'space-between',
  alignItems:'center'
  },
  footer:{
    display:'flex',
    flexDirection:'column'
  }
});

export default Header;
