import { View, Text, ScrollView } from 'react-native';
import { Button } from '../components/Button';
import { Menu } from '../components/Menu';
import { useRouter } from 'expo-router';
import styles from '../styles/styles';

export default function About() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Menu active="about" />

      <ScrollView contentContainerStyle={styles.about_body} showsVerticalScrollIndicator={false}>
        <Text style={styles.about_title}>Sobre o CineApp</Text>
        <View style={styles.about_section}>
          <Text style={styles.about_label}>Finalidade</Text>
          <Text style={styles.about_text}>
            Aplicativo para explorar um catálogo de filmes, visualizar detalhes e favoritar suas
            obras preferidas.
          </Text>
        </View>

        <View style={styles.about_section}>
          <Text style={styles.about_label}>Versão</Text>
          <Text style={styles.about_text}>1.0.0 - Inicial</Text>
        </View>

        <View style={styles.about_section}>
          <Text style={styles.about_label}>Disciplina</Text>
          <Text style={styles.about_text}>Programação para Dispositivos Móveis I</Text>
        </View>

        <View style={styles.about_section}>
          <Text style={styles.about_label}>Aluna</Text>
          <Text style={styles.about_text}>Camila Machado de Souza - RA: 2991392513020</Text>
        </View>

        <Button title="Catálogo de Obras" variant="primary" onPress={() => router.push('/list')} />
      </ScrollView>
    </View>
  );
}
