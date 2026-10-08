import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import { Menu } from "../components/Menu";
import styles from "../styles/styles";

export default function Page() {
  return (
    <View style={styles.container}>
      {/* Teste Menu */}
      <View style={styles.container}>
            <Menu active="home" />
        <Text style={{fontFamily: 'Times New Roman, sans-serif', color:'Black', fontSize:50}}>MoviesApp</Text>
        <Text style={{fontFamily: 'Times New Roman, sans-serif', color:'Black'}}>This is the first page of your app.</Text>

        {/* Teste Button */}
        <Button title='Teste' variant='primary'></Button>
        <Button title='Teste' variant='secondary'></Button>
      </View>
    </View>
  );
}

