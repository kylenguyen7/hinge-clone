import { StyleSheet, Text, ImageBackground } from 'react-native';
import Constants from '../Constants';

export default function ProfileCard({profile}) {
  return (
    <ImageBackground source={profile.image} style={[styles.profileCardContainer, styles.shadow]} imageStyle={styles.profileCardImage}>
      <Text style={[styles.profileCardText, {fontSize: 38}]}>{profile.name}</Text>
      <Text style={[styles.profileCardText, {fontSize: 18}]}>{profile.caption}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  profileCardContainer: {
    width: '86%',
    height: 'auto',
    aspectRatio: 1/1.1,
    maxWidth: Constants.maxWidth,
    maxHeight: Constants.maxWidth * 1.1,
    marginBottom: '3%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  profileCardImage: {
    width: '100%',
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 12
  },
  profileCardText: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    margin: '2%'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,  
    elevation: 5
  }
})