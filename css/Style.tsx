import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090909'
    },

    header: {
        flexDirection: 'row',
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,

    },

    perfil: {

    },

    imgperfil: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        borderRadius: 100
    },

    titulo: {
        flex: 2
    },
    
    nome: {
        color: '#989cac',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
    },
    descricao: {
        color: '#989cac',
        paddingLeft: 20
    },
    pesquisa: {

    },
    imgpesquisa: {
        flex: 1,
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },

    stories: {

    },

    titulostories: {
        fontSize: 20,
        marginLeft: 25,
        color: '#989cac'
    },

    scrollstories: {

    },

    imgstories: {
        width: 200,
        height: 300,
        borderRadius: 40,
        margin: 7,
        resizeMode: 'contain'
    },


    blackbox: {
        backgroundColor: "#090909",
        color: "#989cac",
        fontSize: 15,
        padding: 10,
        width: 50,
        borderRadius: 10,
        position: "absolute",
        zIndex: 1000,
        top: 20,
        left: 30,
        textAlign: "center"
    },

    redbox: {
        backgroundColor: "#600",
        color: "#989cac",
        fontSize: 15,
        padding: 10,
        width: 100,
        borderRadius: 10,
        position: "absolute",
        zIndex: 1000,
        top: 20,
        left: 30,
        textAlign: "center"
    },

    txticon: {
        marginLeft: 15,
        flexDirection: "row", //deixa lado a lado
        alignItems: "center"

    },

    txt: {

        fontSize: 16,
        color: "#989cac"
    },

    icon: {
        marginLeft: 6,
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },




    //TREDING
    //HEADER
    trending: {
        marginTop:40
    },

    caixatitulo: {
        flexDirection: "row",
        marginTop:30,
        marginBottom:30
    },

    trendingtitulo: {
        fontSize: 20,
        marginLeft: 25,
        color: "#989cac"
    },

    trendingmore: {
        marginTop: 17,
        marginLeft: 170,
        width:60,
        height:10,
        resizeMode: "contain",

    },

    //MAIN
    caixatrendingdetalhe: {
        backgroundColor: "#403d40",
        borderRadius: 20,
        margin: 15,
       /*  widht:"90%", */
        /* marginLeft:"auto",
        marginRight:"auto" */
    },

    detalheimg: {
        width:280,
        height: 300,
        top: 20,
        left:25,
        borderRadius: 15,
        resizeMode: "cover"
    },



    detalhelike: {
        backgroundColor: "#ff6",
        padding: 10,
        borderWidth: 5,
        borderColor: "rgba(255, 255, 100, 0.7)",
        position: "absolute",
        zIndex: 1000,  //sobrepondo
        bottom:0, //mandando o like para baixo
        right:25, //mandando o like para o lado direito
        borderBottomRightRadius:10, //deixando a borda do like transparente e arredondado no canto inferior direito
    },

    trendingusuario: {
        flexDirection: "row", //lado a lado
        marginTop:40,
        marginBottom:20                                    
    },

    trendingusuarioimg: {
        width: 50,
        height: 50,
        borderRadius: 100,
        resizeMode: "contain"
    },

    trendingusuariotitulo: {
        fontSize: 20,
        color: "#989cac",
        fontWeight: "bold" //negrito
    },

    trendingusuariotitulosub: {
        color: "#989cac"
    },

    trendingobs: {

    }
})
