import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductsJSON from '../data/products.json';
import ProductBox from '../components/ProductBox';

export default function ClientProducts() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        loadProducts();
    }, []);

    async function loadProducts() {
        try {
            setProducts(ProductsJSON);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <FlatList
        data={products}
        renderItem={({item}) => <ProductBox {...item}/>}
        keyExtractor={item => item.id}
        />
    )
}