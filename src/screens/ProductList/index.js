import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import database from '@react-native-firebase/firestore';
import { Button } from 'react-native-paper';
import _ from 'lodash';
import styles from './style';

const Index = (props) => {
    const [productList, setProductList] = useState([]);
    const [productIDList, setProductIDList] = useState([]);
    console.log("Index ~ productList", productList)

    useEffect(() => {
        const subscriber = database()
            .collection('Product')
            .onSnapshot(querySnapshot => {
                const productList = [];
                const productIDList = [];

                querySnapshot.forEach(documentSnapshot => {
                    console.log("useEffect ~ documentSnapshot", documentSnapshot.id)
                    productIDList.push(documentSnapshot.id);
                    productList.push({
                        ...documentSnapshot.data(),
                    });
                });
                setProductIDList(productIDList);
                setProductList(productList);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, [])

    const onCreateProduct = () => {
        database().collection('Product').add({
            productID: 1,
            name: 'computer'
        });
    };

    const onDeleteProduct = () => {
        productIDList.forEach(item => {
            database()
            .collection('Product').doc(item).delete()
        })
    }

    const onUpdateProduct = () => {
        database()
            .collection('Product')
            .doc(productIDList[0])
            .update({
                name: 'Ada Lovelace',
                productID: 32,
            });
    }

    const onReplaceProduct = () => {
        database()
        .collection('Product')
        .doc(productIDList[0])
        .set({
            name: 'Ada Lovelace',
            productID: 32,
        });
    }

    const renderProductList = (props) => {
        console.log("renderProductList ~ props", props)
        return (
            <View key={`${props.index}`}>
                <Text>{props.item.productID}. {props.item.name}</Text>
            </View>
        );
    }

    return (
        <View style={styles.sectionContainer}>
            <Button onPress={onCreateProduct} mode="contained" style={styles.button}>Create products</Button>
            <Button onPress={onDeleteProduct} mode="contained" style={styles.button}>Delete product</Button>
            <Button onPress={onUpdateProduct} mode="contained" style={styles.button}>Update product</Button>
            <Button onPress={onReplaceProduct} mode="contained" style={styles.button}>Replace product</Button>
            <FlatList
                data={productList}
                renderItem={renderProductList}
            />
        </View>
    );
};

export default Index;
