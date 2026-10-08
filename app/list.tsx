import { View, FlatList, StyleSheet } from 'react-native';
import { MovieCard } from '../components/MovieCard';
import { Menu } from '../components/Menu';
import { movies } from '../data/movies';
import styles from '../styles/styles';

export default function Catalogo() {
  return (
    <View style={styles.container}>
      <Menu active="list" />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.page}
        renderItem={({ item }) => (
          <MovieCard
            name={item.name}
            genres={item.genres}
            year={item.year}
            image={item.image}
            rate={item.rate}
            favorite={item.favorite}
            general_review={item.general_review}
          />
        )}
      />
    </View>
  );
}
