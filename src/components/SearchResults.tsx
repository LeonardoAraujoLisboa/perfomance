import React, { useMemo } from 'react'
import {FlatList, Text, View} from 'react-native'
import Item from './Item';

interface Props {
    data: {
        id: number;
        name: string;
        likes: number
    }[];
    follow: () => void
}

const SearchResults = ({data, follow}: Props) => {

  const totalLikes = useMemo(() => {
    data.reduce((likes, friend) => {
      return likes + friend.likes
    }, 0)//sem isso o tempo fica 363ms
    //com esse total ele fica 525ms, quase dobrou
  }, [data])//com o usememo ele ficou 343. Motivo para utilizar o useMemo, 
  //é para esse tipo de calculo/lógica q vc tenha que fazer dentro do componente
  //O USE MEMO MEMORIZA VALORES

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>
        <FlatList
          keyExtractor={item => String(item.id)}/*nao é uma boa pratica utilizar o INDEX, utilize sempre o id, pois caso vc utilize um draganddrop ai a referencia de posição ja nao é mais mesma ai vai renderizar dnv */
          data={data}
          renderItem={({item}) => (
            <Item
                follow={follow}
                data={item}
              />
            )}//Quando vc quer gerar uma lista com MUITOS elementos nao é mt bom voce fazer com o map assim, ai no caso é melhor utilizar uma flatlist
        />
    </View>
  )
}

export default SearchResults
//export default memo(SearchResults) posso fazer assim q ja resolve, mas vou usar o useMemo agr