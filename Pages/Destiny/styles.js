import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "column",  
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    background: {
        flex: 1,
        resizeMode: "cover",
    },

    header: {
        backgroundColor: '#2a9df4',
        paddingTop: 40,
        paddingBottom: 10,
        alignItems: 'center',
    },

    header_txt: {
        color: 'white',
        fontWeight: 'bold',
    },

    options_container: {
        width: '100%',
        alignItems: 'center',
    },

    options: {
        marginTop: 20,
        width: '90%',
        borderWidth: 1,
        borderBottomColor: 'black',
        backgroundColor: 'white',
        paddingBottom: 30,
    },

    options_header: {
        flexDirection: 'row',
        backgroundColor: '#2a9df4',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'space-around',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },

    options_txt: {
        color: 'white',
        fontWeight: 'bold',
    },

    input_options: {
        paddingLeft: 10,
        paddingTop: 10,
    },

    input_container: {
        marginTop: 20,
    },

    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },

    input: {
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 5,
        width: '90%',
    },

    passengers: {
        alignItems: 'center',
        marginTop: 40,
    },

    passengers_txt: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    passengers_select: {
        color: '#2a9df4',
        fontWeight: 'bold',
    },

    search_btn: {
        width: '70%',
        backgroundColor: 'green',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        fontWeight: 'bold',
        borderRadius: 3,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 30,

    },

    search_txt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },

    activity: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }

});

export default styles;