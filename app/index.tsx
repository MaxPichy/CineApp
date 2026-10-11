import { View, Text, ScrollView, Image } from 'react-native';
import { Button } from '../components/Button';
import { Menu } from '../components/Menu';
import { useRouter } from 'expo-router';
import styles from '../styles/styles';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Menu active="home" />

      <ScrollView contentContainerStyle={styles.home_body} showsVerticalScrollIndicator={false}>
        <View style={styles.home_banner}>
          <Image
            source={require('../assets/images/cine_app_logo.jpg')}
            style={styles.home_bannerImage}
            resizeMode="cover"
          />
          <View style={styles.home_bannerOverlay} />
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
