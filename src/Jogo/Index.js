import {View,Image,Text,TouchableOpacity,StyleSheet, FlatList} from 'react-native'
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import Cabecalho from './src/components/Cabecalho/Cabecalho';
import Botao from './src/components/botoes/Index';
import { FontAwesome } from '@expo/vector-icons';
import Jogos from './src/components/Jogo';
import Dados from './src/Dados/dadosJogos';



export default function App(){

    return(
       <View>
           <Cabecalho>


           </Cabecalho> 

           <Botao
           Logo="game-controller"
           texto="Jogos"
           cor="green"
           Logo2="apps"
           texto2="Aplicativos"
           cor2="#295cd1"

            />

        <Botao
           Logo="book"
           texto="Livros"
           cor="#DAA520"
           Logo2="film"
           texto2="Filmes"
           cor2="#D81F26"

            />
            <Botao
           Logo="cart"
           texto="Loja"
           cor="orange"
           Logo2="cog"
           texto2="Configurações"
           cor2="gray"

            />
        <FlatList
        horizontal = {true}
        data = {Dados}
        keyExtractor = {(item)=> item.id}
        renderItem = {({item}) => (

        <Jogos
        titulo = {item.nome}
        imagem = {item.imagem}
        valor = {item.valor} 
        />
        )}

        />

       </View>

    );
  }

  const estilo = StyleSheet.create( {

      header: {

          backgroundColor:'#002333',

          borderRadius:2,

          marginTop:8,

          width:'99,9%',

          padding:20,

          margin:2,

          alignItems:'center',

          flexDirection:'row',

          justifyContent: 'space-between',

          marginBottom:20

      },

      Texto:{

          color:'white',

          marginLeft:-120,

          fontSize:20,

          fontWeight:'bold'

      }

  })