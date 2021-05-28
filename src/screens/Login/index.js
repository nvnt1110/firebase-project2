import React from 'react';
import PropTypes from 'prop-types';

import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { HOME_SCREEN } from '../../commons/screenNames';

import styles from './style';
import { useState } from 'react';
import { validateTextInput } from '../../commons/validation/validateTextInput';

const Index = (props) => {
    const { navigation } = props;
    const [state, setState] = useState({
        username: '',
        password: ''
    });
    const [stateError, setStateError] = useState({
        username: '',
        password: ''
    });

    const validation = () => {
        let hasError = false;
        switch (validateTextInput(state.username)) {
            case 'value null':
                hasError = true;
                setStateError({ username: 'Please enter username' });
                break;

            case 'character special':
                hasError = true;
                setStateError({ username: 'Username do not contain special character' });
                break;
            default:
                break;
        }
        switch (validateTextInput(state.password)) {
            case 'value null':
                hasError = true;
                setStateError({ password: 'Please enter password' });
                break;

            case 'character special':
                hasError = true;
                setStateError({ password: 'Password do not contain special character' });
                break;
            default:
                break;
        }
        return hasError;
    };

    const navigateToProduct = () => {
        if (validation() === false) {
            navigation.navigate(HOME_SCREEN);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={{flex: 1}}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        label='Username'
                        name='username'
                        mode='outlined'
                        style={styles.input}
                        error={stateError.username}
                        value={state.username}  
                        onChangeText={text => setState({ ...state, username: text })}
                    />
                    <TextInput
                        label='Password'
                        name='password'
                        mode='outlined'
                        style={styles.input}
                        error={stateError.password}
                        value={state.password}
                        onChangeText={text => setState({ ...state, password: text })}
                    />
                    <Button mode="contained" style={styles.button} onPress={() => navigateToProduct()}>Login</Button>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

Index.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

export default Index;
