import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={require('./assets/batman-avatar.png')} style={styles.profileImage}></Image>
        <Text style={{textAlign: 'center', maxWidth: 200}}>"It's not who I am underneath, but what I do that defines me."</Text>
      </View>
      <View style={styles.profileDetails}>
        <View style={styles.textRow}>
          <Text style={styles.titleText}>Name:</Text>
          <Text style={styles.infoText}>Batman</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.titleText}>City:</Text>
          <Text style={styles.infoText}>Gotham</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.titleText}>Favorite Color:</Text>
          <Text style={styles.infoText}>Black</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.titleText}>Job:</Text>
          <Text style={styles.infoText}>Batting</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  profileImageContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 20
  },
  profileImage: {
    margin: 20
  },
  profileDetails: { 
    flex: 0.6
  },
  textRow: { 
    flex: 0.25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  titleText: { 
    flex: 0.9,
    color: 'orange',
    fontSize: 18
  },
  infoText: {
    fontSize: 18
  }
});
