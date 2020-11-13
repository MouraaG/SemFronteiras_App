import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",  
    },

    background: {
        flex: 1,
        resizeMode: "cover",
    },

    home: {
        marginLeft: 20,
    },

    letters: {
        marginTop: 100,
        fontWeight: 'bold',
        fontSize: 40,
        width: 200,
        marginLeft: 10,
    },

    inputs: {
        marginLeft: 10,
        marginTop: 80
    },

    input: {
        backgroundColor: 'white',
        width: '75%',
        borderColor: 'black',
        borderRadius: 2,
        paddingLeft: 5,
    },

    label: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
        fontSize: 15,
    },

    options: {
        marginTop: 50
    },

    missing_account: {
        fontWeight: 'bold',
    },

    signup: {
        fontWeight: 'bold',
        color: '#2a9df4',
        textDecorationLine: 'underline'
    },

    login_container: {
        marginTop: 40,
        alignItems: 'center',
    },

    login: {
        backgroundColor: '#2a9df4',
        width: 200,
        color: 'white',
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
    },

    login_txt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }

});

export default styles;