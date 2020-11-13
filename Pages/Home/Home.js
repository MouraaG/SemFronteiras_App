import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

import styles from './styles';

import background from '../../assets/background_1.jpg';

export default class Home extends Component {
    constructor(props) {
        super(props);
    };

    login() {
      this.props.navigation.navigate('Destiny');
    }

    render() {
      return (
        <View style={styles.container}>
          <ImageBackground source={background} style={styles.background}>
            <ScrollView>
              <View styles={styles.home}>
                <Text style={styles.letters}>Bem-vindo ao Sem Fronteiras!</Text>

                <View style={styles.inputs}>
                  <Text style={styles.label}>Endereço de email</Text>
                  <TextInput style={styles.input} />

                  <Text style={styles.label}>Senha</Text>
                  <TextInput style={styles.input} />
                </View>

                <View style={styles.options}>
                  <Text style={styles.missing_account}>Não possui conta?</Text>
                  <Text style={styles.signup}>Cadastre-se</Text>
                </View>

                <View style={styles.login_container}>
                  <TouchableOpacity style={styles.login} onPress={() => this.login()}>
                    <Text style={styles.login_txt}>Entrar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    }
}
