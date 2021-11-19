import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, ViewBase } from 'react-native';
import { estilo } from './css/Style';

export default function App() {
  return (
    <View style={estilo.container}>


{/* Início do header */}
      <View style={estilo.header}>

        <View style={estilo.perfil}>
          <Image source={{uri: "https://cdn.pixabay.com/photo/2016/01/07/04/32/girl-1125322_960_720.jpg" }} style={estilo.imgperfil} />
        </View>

        <View style={estilo.titulo}>
            <Text style={estilo.nome}> João Miguel</Text>
            <Text style={estilo.descricao}>Programador</Text>
          </View>
          
        

        <View style={estilo.pesquisa}>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/meta/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png" }} style={estilo.imgpesquisa} />
        </View>

      </View>
{/* Fim do header ################################## */}


      {/* rolagem vertical */}
      <ScrollView horizontal={false}>

{/* Inicio do Stores ============================================== */}
      <View style={estilo.stories}>
        <Text style={estilo.titulostories}>
          Stories
        </Text>

        {/* imagens */}
        <ScrollView horizontal={true} style={estilo.scrollstories}>
          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{uri:"https://images.wallpaperscraft.com/image/single/raccoon_water_walk_animal_59815_800x1280.jpg"}} style={estilo.imgstories} />
            <View style={estilo.txticon}>
                <Text style={estilo.txt}>Guaxinin</Text>
                {/* inserindo img local */}
                <Image source={require("./assets/iconeverificado.png")} style={estilo.icon}/>
            </View>
          </View>
          <View>
            <Text style={estilo.redbox}>Premiere</Text>
            <Image source={{ uri: "https://images.hdqwalls.com/download/cheetah-predator-animal-sf-800x1280.jpg" }} style={estilo.imgstories} />
            <View style={estilo.txticon}>
                <Text style={estilo.txt}>Leopardo</Text>
                {/* inserindo img local */}
                <Image source={require("./assets/iconeverificado.png")} style={estilo.icon}/>
            </View>
          </View>
          <View>
            <Image source={{ uri: "https://wallpapersmug.com/download/800x1280/c99c25/wild-brown-fox-4k.jpg" }} style={estilo.imgstories} />
            <View style={estilo.txticon}>
                <Text style={estilo.txt}>Raposa</Text>
                {/* inserindo img local */}
                <Image source={require("./assets/iconeverificado.png")} style={estilo.icon}/>
            </View>
          </View>
          <View>
            <Image source={{ uri: "https://mfiles.alphacoders.com/877/thumb-1920-877272.jpg" }} style={estilo.imgstories} />
            <View style={estilo.txticon}>
                <Text style={estilo.txt}>Husky siberiano</Text>
                {/* inserindo img local */}
                <Image source={require("./assets/iconeverificado.png")} style={estilo.icon}/>
            </View>
          </View>
          <View>
            <Image source={{ uri: "https://images.wallpaperscraft.com/image/single/husky_dog_cute_161024_800x1280.jpg" }} style={estilo.imgstories} />
            <View style={estilo.txticon}>
                <Text style={estilo.txt}>Cachorro 2</Text>
                {/* inserindo img local */}
                <Image source={require("./assets/iconeverificado.png")} style={estilo.icon}/>
            </View>
          </View>
        </ScrollView>
      </View>
{/* Fim do Stores ################################## */}


{/* Inicio da Trending */}
      {/* header trending */}
      <View style={estilo.trending}>
        <View style={estilo.caixatitulo}>
            <Text style={estilo.trendingtitulo}>Trending</Text>
            <Image source={require("./assets/more.png")} style={estilo.trendingmore}></Image>
        </View>

        {/* main trending */}
        <View style={estilo.caixatrendingdetalhe}>
          <View>
            <Image source={{uri:"https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043_960_720.jpg"}} style={estilo.detalheimg}/>
            <Text style={estilo.detalhelike}>Like</Text>
          </View>

          <View style={estilo.trendingusuario}>
            <Image source={{uri:"https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_960_720.jpg"}} style={estilo.trendingusuarioimg}/>
            <View>
              <Text style={estilo.trendingusuariotitulo}>Isadora </Text>
              <Text style={estilo.trendingusuariotitulosub}> Há 2 min atrás</Text>
            </View>
          </View>
          <Text style={estilo.trendingobs}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestiae provident illum quibusdam. Recusandae sit a camily fuma</Text>
        </View>
      </View>
{/* fim da trending */}

      </ScrollView>
    </View>
  );
}