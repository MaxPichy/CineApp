import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/styles';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Menu active="home" />

      <ScrollView contentContainerStyle={styles.home_body} showsVerticalScrollIndicator={false}>
        <View style={styles.home_banner}>
          <Text style={styles.home_icon}>🎬</Text>
          <Text style={styles.home_title}>CineApp</Text>
          <Text style={styles.home_subtitle}>Catálogo de Filmes</Text>

          <Button
            title="Ver Listagem de Obras"
            variant="secondary"
            onPress={() => router.push('/list')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
