import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import HomeData from "../json/Home.json";

export default function PostDetail({ Post }) {
  return (
    <ScrollView>
      <View style={styles.PostContainerStyle}>
        <View style={styles.PostHeaderStyle}>
          <View style={styles.PersonDetailStyle}>
            <Image
              style={styles.PersonImageStyle}
              source={{ uri: Post.PersonUrl }}
            />
            <Text style={styles.PersonIdStyle}>
              {Post.PersonId}
            </Text>
          </View>
          <View>
            <Image
              style={styles.iconthreedot}
              source={{ uri: HomeData.Icon[0].More }}
            />
          </View>
        </View>
        <View>
          <Image
            style={styles.PhotoStyle}
            source={{ uri: Post.PhotoUrl }}
          />
        </View>
        <View style={styles.AllofIconStyle}>
          <View style={styles.LeftIconStyle}>
            <Image
              style={styles.iconStyle01}
              source={{ uri: HomeData.Icon[0].Heart }}
            />
            <Image
              style={styles.iconStyle02}
              source={{ uri: HomeData.Icon[0].Answer }}
            />
            <Image
              style={styles.iconMessageStyle}
              source={{ uri: HomeData.Icon[0].Message }}
            />
          </View>
          <View>
            <Image
              style={styles.icontag}
              source={{ uri: HomeData.Icon[0].Tag }}
            />
          </View>
        </View>
        <View style={styles.HeartNumberStyle}>
          <Text style={styles.HeartNumberTextStyle}>{Post.HeartNumber}</Text>
        </View>
        <View style={styles.ContentStyle}>
          <Text style={styles.PersonIdStyle}>
            {Post.PersonId}
          </Text>
          <Text>{Post.Content}</Text>
        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  iconStyle01: {
    width: 24,
    height: 24,
  },
  iconMessageStyle: {
    width: 25,
    height: 25,
    marginTop: 2,
    marginLeft: 10,
  },
  iconStyle02: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  iconthreedot: {
    width: 15,
    height: 15,
    position:"relative",
    right:5,
  },
  icontag:{
    width: 32,
    height: 32,
    position:"relative",
    right:2,
  },
  PostContainerStyle: {
    paddingBottom: 12,
  },
  PostHeaderStyle: {
    height: 55,
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 6,
    paddingRight: 18,
    paddingTop: 2,
  },
  PersonDetailStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  PersonImageStyle: {
    width: 35,
    height: 35,
    marginRight: 5
  },
  PersonIdStyle: {
    fontWeight: '600',
    marginRight: 2,
  },
  PhotoStyle: {
    height: 370,
  },
  AllofIconStyle: {
    height: 45,
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 12,
  },
  LeftIconStyle: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  HeartNumberStyle: {
    flexDirection: 'row',
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 12,
  },
  HeartNumberTextStyle: {
    fontWeight: '600',
  },
  ContentStyle: {
    width: 270,
    flexDirection: 'row',
    paddingLeft: 12,
  }
});