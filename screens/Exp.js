import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Appbar, Subheading, Title} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Autolink from 'react-native-autolink';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export default class Exp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    const ob = navigation.getParam('ob', '');
    const company = ob.company;
    const job_title = ob.job_title;
    const year = ob.year;
    const experience = ob.experience;
    const problems = ob.problems;
    const college = ob.college;
    const credits = ob.credits;
    return (
      <View style={{padding: 10, backgroundColor: '#C8DEBA', flex: 1}}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={[styles.dataContainer]}>
            <View style={{flexDirection: 'row'}}>
              <Title style={styles.title}>Company :</Title>
              <Subheading
                style={[styles.subHeading, {marginTop: 7}, {marginLeft: 10}]}>
                {company}
              </Subheading>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Title style={styles.title}>Role :</Title>
              <Subheading
                style={[
                  styles.subHeading,
                  {marginTop: 7},
                  {marginHorizontal: 10},
                ]}>
                {job_title}
              </Subheading>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Title style={styles.title}>Year :</Title>
              <Subheading
                style={[
                  styles.subHeading,
                  {marginTop: 7},
                  {marginHorizontal: 10},
                ]}>
                {year}
              </Subheading>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Title style={styles.title}>College :</Title>
              <Subheading
                style={[
                  styles.subHeading,
                  {marginTop: 7},
                  {marginHorizontal: 10},
                ]}>
                {college}
              </Subheading>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Title style={styles.title}>Author :</Title>
              <Subheading
                style={[
                  styles.subHeading,
                  {marginTop: 7},
                  {marginHorizontal: 10},
                ]}>
                {credits}
              </Subheading>
            </View>
          </View>
          <View style={[styles.dataContainer, {marginTop: 20}]}>
            <Title style={styles.title}>Experience :</Title>
            <Text style={styles.subHeading}>
              {'                     '}
              {experience}
            </Text>
          </View>
          <View
            style={[styles.dataContainer, {marginTop: 20}, {marginBottom: 25}]}>
            <Title style={styles.title}>Links :</Title>
            <Text style={styles.subHeading}>
              <Autolink
                text={problems}
                showAlert={true}
                />
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#C8DEBA',
  },
  dataContainer: {
    elevation: 10,
    backgroundColor: '#3BAD87',
    borderRadius: 20,
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: '#FFF',
  },
  subHeading: {
    fontSize: 18,
    color: '#FFF',
  },
});
