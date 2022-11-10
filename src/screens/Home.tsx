import React, {useCallback, useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native'
import SearchResults from '../components/SearchResults'

const Home = () => {
    const [name, setName] = useState('')
    const [friends, setFriends] = useState([])

    const handleSearch = async () => {
        const res = await fetch(`http://192.168.2.150:3333/friends?q=${name}`)
        const data = await res.json()
        setFriends(data)
    }//O USECALLBACK MEMORIZA FUNÇÃO

    const handleFollow = useCallback(() => {
        console.log('follow user');
    }, [])//essa função ta sendo repassado em todos os outros componentes, entao ela seria renderizada as 3 vezes
    //pois ela esta sendo usada na mesma referencia

  return (
    <View style={styles.container}>
        <Text>Amigos</Text>
        <TextInput 
            placeholder='Nome do cliente'
            onChangeText={setName}
            style={styles.input}
        />
        <Button
            Title='Buscar'
            onPress={handleSearch}
        />
        <ScrollView style={styles.list}>
            <SearchResults follow={handleFollow} data={friends} />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        padding: 25
    },
    input: {
        border: 1,
        padding: 7,
        marginBottom: 10
    },
    list: {
        marginTop: 29
    }
})

export default Home