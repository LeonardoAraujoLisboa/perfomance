import React, { memo } from 'react'
import {Text, TouchableOpacity} from 'react-native'
import lodash from 'lodash'

interface Props {
    data: {
        name: string;
        likes: number
    },
    follow: () => void;
}

const Item = ({data, follow}: Props) => {
  return (
    <Text style={{marginBottom: 10}}>
      {data.name} - Likes: {data.likes}
      <TouchableOpacity onPress={follow}>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>
    </Text>
  )
}

export default memo(Item)//pode ser assim

/* export default memo(Item, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data)
}) ou pode ser assim */

/* export default memo(Item, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.data, nextProps.data)
}) pode fazer com o lodash tbm, mas ele é um pacote mt grande*/

//Pra usar isso o ideal é usar em componentes puros, que sao apenas componentes usados para exibir algo.
//Se tiver alguma regra dentro tipo um estado e talls ai ja nao vale mais a pena