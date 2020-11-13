import React, { Component } from 'react';
import { Text, View, TextInput, ImageBackground, Alert, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

import styles from './styles';

import background from '../../assets/background_2.jpg';

export default class Destiny extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        }
    }

    searchPassengers() {
        console.log("Logged!");

        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });

            Alert.alert(
                'Resultados encontrados!',
                'Existem vagas 3 para o seu destino. Faça login e compre agora!',
                [
                  {
                    text: 'Ok!',
                    onPress: () => {

                        // navegar para a Home
                        this.props.navigation.navigate('Home');
                    },
                  },
                ],
                { cancelable: false },
              );
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={background} style={styles.background}>

                    {
                        this.state.loading ? <ActivityIndicator size="large" style={styles.activity} color="#0000ff" /> : 
                        <ScrollView>
                            <View style={styles.header}>
                                <Text style={styles.header_txt}>Selecionar Destino</Text>
                            </View>

                            <View style={styles.options_container}>
                                <View style={styles.options}>
                                    <View style={styles.options_header}>
                                        <Text style={styles.options_txt}>IDA E VOLTA</Text>
                                        <Text style={styles.options_txt}>SOMENTE IDA</Text>
                                        <Text style={styles.options_txt}>MULTITRECHO</Text>
                                    </View>

                                    <View style={styles.input_options}>

                                        <View style={styles.input_container}>
                                            <Text style={styles.label}>Origem</Text>
                                            <TextInput style={styles.input} placeholder="Chegando em..." />
                                        </View>

                                        <View style={styles.input_container}>
                                            <Text style={styles.label}>Destino</Text>
                                            <TextInput style={styles.input} placeholder="Saindo de..." />
                                        </View>

                                        <View style={styles.input_container}>
                                            <Text style={styles.label}>Partida</Text>
                                            <TextInput style={styles.input} placeholder="dd/mm/aaaa" />
                                        </View>

                                        <View style={styles.input_container}>
                                            <Text style={styles.label}>Retorno</Text>
                                            <TextInput style={styles.input} placeholder="dd/mm/aaaa" />
                                        </View>

                                    </View>

                                    <View style={styles.passengers}>
                                        <Text style={styles.passengers_txt}>Passageiros</Text>
                                        <Text style={styles.passengers_select}>Selecionar</Text>
                                    </View>
                                </View>

                                <TouchableOpacity style={styles.search_btn} onPress={() => this.searchPassengers()}>
                                    <Text style={styles.search_txt}>Buscar passagens</Text>
                                </TouchableOpacity>
                            </View>
                            </ScrollView>
                    }

                </ImageBackground>
            </View>
        );
    }
}
