import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import HomeData from "../json/Home.json";
import PostDetail from "../component/PostDetail"

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Image
          style={styles.iconStyle01}
          source={{ uri: HomeData.header[0].CameraUrl }}
        />
        <Image
          style={styles.InstagramStyle}
          source={{ uri: HomeData.header[0].InstagramUrl }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Message')}
        >
          <Image
            style={styles.iconStyle01}
            source={{ uri: HomeData.header[0].MessageUrl }}
          />
        </TouchableOpacity>
      </View>
      {/* <PostDetailJs/> */}
      <FlatList
        data={HomeData.PostDetail}
        renderItem={({ item }) =>
          <PostDetail
            Post={item}
          />}
        keyExtractor={item => item.PersonId}
      />
      <View style={styles.HomeFooterStyle}>
        <Image
          style={styles.iconhome}
          source={{ uri: HomeData.Icon[0].Home }}
        />
        <Image
          style={styles.iconsearch}
          source={{ uri: HomeData.Icon[0].Search }}
        />
        <Image
          style={styles.iconadd}
          source={{ uri: HomeData.Icon[0].Add }}
        />
        <Image
          style={styles.iconStyle01}
          source={{ uri: HomeData.Icon[0].Heart }}
        />
        <Image
          style={styles.iconperson}
          source={{ uri: HomeData.Icon[0].Person }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  headerStyle: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 70,
    paddingTop: 28,
    paddingLeft: 12,
    paddingRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  iconStyle01: {
    width: 26,
    height: 24,
  },
  iconhome: {
    width: 26,
    height: 24,
    position: "relative",
    left: 12,
  },
  iconsearch: {
    width: 28,
    height: 28,
    position: "relative",
    left: 4,
  },
  iconperson: {
    width: 35,
    height: 35,
    position: "relative",
    right: 8,
  },
  iconadd: {
    width: 26,
    height: 24,
    position: "relative",
    left: 4,
  },
  InstagramStyle: {
    width: 100,
    height: 28,
  },

  HomeFooterStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 47,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopWidth: 0.5,
    borderTopColor: "#E6E6E6",
  }
});