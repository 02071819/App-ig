import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import HomeData from "../json/Home.json";
import MessageDetailJs from "../component/MessageDetail"

export default function MessageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            style={styles.iconangle}
            source={{ uri: HomeData.Icon[0].Angle }}
          />
        </TouchableOpacity>
        <Text style={styles.HeaderTitleStyle}>Direct</Text>
        <View style={styles.HeaderRightStyle}>
          <Image
            style={styles.iconStyle01}
            source={{ uri: HomeData.Icon[0].Video }}
          />
          <Image
            style={styles.iconEditStyle}
            source={{ uri: HomeData.Icon[0].Edit }}
          />
        </View>
      </View>
      <View style={styles.SearchBoxAreaStyle}>
        <View style={styles.SearchBoxStyle}>
          <Image
            style={styles.iconSearch}
            source={{ uri: HomeData.Icon[0].SearchGray }}
          />
          <Text style={styles.SearchTextStyle}> Search</Text>
        </View>
      </View>
      <FlatList
        data={HomeData.MessageDetail}
        renderItem={({ item }) =>
          <MessageDetailJs
            Message={item}
          />}
        keyExtractor={item => item.PersonId}
      />
    </View>
  )
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
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    paddingLeft: 8,
    paddingRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  iconStyle01: {
    width: 24,
    height: 24,
  },
  iconStyle02: {
    width: 20,
    height: 20,
  },
  iconSearch: {
    width: 16,
    height: 16,
  },
  iconEditStyle: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  HeaderTitleStyle: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 48,
  },
  HeaderRightStyle: {
    flexDirection: 'row',
  },
  SearchBoxAreaStyle: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SearchBoxStyle: {
    width: 350,
    height: 37,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
  },
  SearchTextStyle: {
    marginLeft: 6,
    color: '#858585',
  },
  iconangle: {
    position: "relative",
    left: 5,
    width: 16,
    height: 16,
  },
});
