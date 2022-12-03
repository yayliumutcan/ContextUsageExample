import React, { useContext } from 'react';
import { PracticeContext} from '../Global/PracticeContext';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import styles from '../App.style'

function Profile({navigation}) {
    const { val, setVal } = useContext(PracticeContext);
    function HandleBackNavigation(){
        navigation.goBack();
    }
    return (
        <SafeAreaView  style={styles.backgroundStyle}>
            <Text style={styles.TextValue}>{val}</Text>
            <TouchableOpacity style={styles.ButtonContainer} onPress={HandleBackNavigation}><Text style={styles.Button} >Back to screen</Text></TouchableOpacity>
        </SafeAreaView>
    )
} export default Profile;