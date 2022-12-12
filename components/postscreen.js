import React ,{useState,useEffect} from 'react'
import { Text,ScrollView, View, FlatList,useWindowDimensions } from 'react-native'
import Header from './Header'
import userData from '../assets/data'
import Stories from './Stories'


function Post(){

  const wdth = useWindowDimensions().width;
  const hgt = useWindowDimensions().height;

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
  
    useEffect(() => {
      setLoading(true);
      fetchData();
    }, []);

    


    return (
      <ScrollView>
        <View >
          <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    
        data={userData}
        renderItem={({item}) => {
          return(
              <Stories item={item}/>
          )
         }}
        keyExtractor={(item) => item.id}
       // extraData={selectedId}
      />
      </View>

<View >
         <FlatList
        data={userData}
    ListFooterComponent={<View style={{paddingBottom:50}}/>}
        
       renderItem={({item}) => {
        return(
            <Header item={item}/>
        )
       }}
       /> 

</View>
      </ScrollView>
    )
  }


export default Post;
