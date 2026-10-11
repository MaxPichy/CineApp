import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from '../components/Button';
import { Menu } from '../components/Menu';
import { movies } from '../data/movies';
import styles from '../styles/styles';
import { useState } from 'react';

export default function Details() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const movie = movies.find((m) => m.id === String(id));
  const [fav, setFav] = useState(movie?.favorite ?? false);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Menu active="list" />
        <View style={styles.dt_notFound}>
          <Text style={styles.dt_notFoundText}>Filme não encontrado.</Text>
          <Button title="Voltar" onPress={() => router.back()} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Menu active="list" />

      <ScrollView contentContainerStyle={styles.dt_body} showsVerticalScrollIndicator={false}>
        <View style={styles.dt_posterWrapper}>
          <Image source={movie.image} style={styles.dt_poster} resizeMode="cover" />
          <Text style={styles.dt_favIcon}>{fav ? '★' : '☆'}</Text>
        </View>

        <View style={styles.dt_titleRow}>
          <Text style={styles.dt_title}>{movie.name}</Text>
          <Text style={styles.dt_rate}>★ {movie.rate.toFixed(1)}</Text>
        </View>

        <View style={styles.dt_metaRow}>
          <Text style={styles.dt_meta}>Ano: {movie.year}</Text>
          <Text style={styles.dt_metaDot}>•</Text>
          <Text style={styles.dt_meta}>Duração: {movie.duration || '—'}</Text>
        </View>

        <Text style={styles.dt_genres}>{movie.genres.join(' • ')}</Text>

        <View style={styles.dt_section}>
          <Text style={styles.dt_label}>Comentários frequentes</Text>
          <Text style={styles.dt_review}>"{movie.general_review}"</Text>
        </View>

        <Button
          title={fav ? '★ Favorito' : '☆ Favoritar'}
          variant={fav ? 'secondary' : 'primary'}
          onPress={() => setFav(!fav)}
        />
        <Button title="Voltar" variant="secondary" onPress={() => router.back()} />
      </ScrollView>
    </View>
  );
}
