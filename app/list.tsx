import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { MovieCard } from '../components/MovieCard';
import { useEffect, useState } from 'react';
import { Menu } from '../components/Menu';
import { movies } from '../data/movies';
import styles from '../styles/styles';
import { router } from 'expo-router';

export default function List() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Menu active="list" />
        <View style={styles.loading_box}>
          <ActivityIndicator size="large" color="#490068ff" />
          <Text style={styles.loading_text}>Carregando catálogo…</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Menu active="list" />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.page}
        ListHeaderComponent={<Text style={styles.list_title}>Catálogo de Obras</Text>}
        renderItem={({ item }) => (
          <MovieCard
            id={item.id}
            name={item.name}
            genres={item.genres}
            image={item.image}
            favorite={item.favorite}
            onPress={() => router.push({ pathname: '/details', params: { id: item.id } })}
          />
        )}
      />
    </View>
  );
}
