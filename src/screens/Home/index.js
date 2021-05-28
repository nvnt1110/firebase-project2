import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { Button } from 'react-native-paper';

import styles from './style';
import { PRODUCT_LIST_SCREEN, USER_LIST_SCREEN } from '../../commons/screenNames';

const listMenu = [
    { name: PRODUCT_LIST_SCREEN },
    { name: USER_LIST_SCREEN },
]

const Index = (props) => {
    const { navigation } = props;
    const renderListMenu = ({ item, index }) => {
        const onNavigate = () => {
            navigation.navigate(item.name);
        }

        return (
            <TouchableOpacity key={`${index}`} style={styles.itemList} onPress={onNavigate}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.sectionContainer}>
            <FlatList
                data={listMenu}
                renderItem={renderListMenu}
            />
        </View>
    );
};

Index.propTypes = {
    navigation: PropTypes.instanceOf(Object)
}

export default Index;
