import React from 'react';
import {StyleSheet, View, Picker, ScrollView, Alert} from 'react-native';
import { Surface, Appbar, TextInput, Button, Headline,} from 'react-native-paper';
// import { ScrollView } from 'react-native-gesture-handler';

class HelpScreen extends React.Component {
    state = {
        company: '',
        job: '',
        year: '',
        type: '',
        exp: '',
        problem: '',
        hide: true,
        };

    display = () => {
        Alert.alert(
            'Thank You',
            'Many thanks for contributing !!!, We are processing your information and it will be on app shortly.',
            [
              {text: 'Cool ✌️️', onPress: () => this.props.navigation.navigate('Home')},
            ],
            {cancelable: false},
        );
        
    };
    


    render() {
        const {navigate} = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <Appbar.Header style={{backgroundColor: '#3BAD87'}}>
                    <Appbar.BackAction
                    onPress={() => navigate('Home')}
                    />
                    <Appbar.Content
                    title="NIT PREP GURU"
                    subtitle="The Placement Preparation Tool"
                    style={{}}
                    />
                </Appbar.Header>
                
                <ScrollView>
                    <Surface style={styles.form} >
                        <Headline style={{fontWeight: "bold", fontSize: 20}}>
                            Help us by sharing your Experience
                        </Headline>
                        <TextInput
                            label='Company Name'
                            value={this.state.company}
                            mode = 'outlined'
                            onChangeText={company => this.setState({ company })}
                        />
                        <TextInput
                            label='Job Title'
                            value={this.state.job}
                            mode = 'outlined'
                            onChangeText={job => this.setState({ job })}
                        />
                        <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
                            <Picker
                                selectedValue={this.state.year}
                                style={{height: 50, width: 100}}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({year: itemValue})
                                }>
                                <Picker.Item label="Year" value="" />
                                <Picker.Item label="2020" value="2020" />
                                <Picker.Item label="2019" value="2019" />
                                <Picker.Item label="2018" value="2018" />
                                <Picker.Item label="2017" value="2017" />
                                <Picker.Item label="2016" value="2016" />
                                <Picker.Item label="2015" value="2015" />
                                <Picker.Item label="2014" value="2014" />
                                <Picker.Item label="2013" value="2013" />
                                <Picker.Item label="2012" value="2012" />
                                <Picker.Item label="2011" value="2011" />
                                <Picker.Item label="2010" value="2010" />
                            </Picker>

                            <Picker
                            selectedValue={this.state.type}
                            style={{height: 50, width: 130}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({type: itemValue})
                            }>
                            <Picker.Item label="Placement" value="" />
                            <Picker.Item label="FTE" value="FTE" />
                            <Picker.Item label="Intern" value="Intern" />
                        </Picker>
                        </View>
                        <TextInput
                            label='Experience'
                            placeholder={"Intro\n\nRound 1\n\nRound 2\n\nRound 3\n\nResult, Tips & Conclusion"}
                            value={this.state.exp}
                            mode = 'outlined'
                            multiline = {true}
                            numberOfLines = {10}
                            selectionColor = '#3BAD87'
                            onChangeText={exp => this.setState({ exp })}
                        />
                        <TextInput
                            label='Problem Links'
                            placeholder={"(Optional)\nWrite the Problem Name & Paste the links if any\nEx: Prime Number: https://example.com"}
                            value={this.state.problem}
                            mode = 'outlined'
                            multiline = {true}
                            numberOfLines = {4}
                            onChangeText={problem => this.setState({ problem })}
                        />
                        <Button icon="rocket" style={{marginTop: 10}} mode="contained" onPress={() => this.display()}>
                            Submit
                        </Button>
                    </Surface>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
      elevation: 20,
      margin: 10,
      padding: 15,
      borderRadius: 10,
  }

});

export default HelpScreen;
