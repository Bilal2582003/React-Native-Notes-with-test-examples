import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const Loader = () => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      
      {/* <Text>Loader</Text> */}
      {
      loading && (
    <View style={styles.loadingBox}>
      <ActivityIndicator size="large" color="red" />
    </View>
  )
  }
      
      <TouchableOpacity onPress={ ()=>{ setLoading(!loading) } } style={styles.button}> 
        <Text style={styles.buttonText}>{ loading ? 'Stop Loading' : 'Start Loading' }</Text>  
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItem:"center",
    padding: 10,
    backgroundColor: "#f0f0f0"
  },
  button:{
    textAlign: "center",
    color: "red",
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "red",
   paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    marginHorizontal: 70
  },
  buttonText:{
    textAlign:"center",
    color:"red",
    fontSize:16
  },
 loadingBox: {
  justifyContent: "center",
  alignItems: "center", // fixed
  // height: 120,
  // width: 120,
  borderWidth: 1,
  borderColor: "#f76d6d",
  borderRadius: 24,
  padding: 50,
  backgroundColor: "#fff",
  marginHorizontal: 100
}
})

export default Loader