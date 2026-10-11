import { View, Text, Image, Pressable } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import { useState, useEffect } from 'react';
import { movies } from '../data/movies';
import styles from '../styles/styles';
import { Button } from './Button';

type MovieCardProps = {
  id: string;
  name: string;
  genres: string[];
  image: ImageSourcePropType;
  favorite: boolean;
  onPress?: () => void;
};

export function MovieCard({ id, name, genres, image, favorite, onPress }: MovieCardProps) {
  const [fav, setFav] = useState(favorite);

  useEffect(() => {
    const movie = movies.find((m) => m.id === id);
    if (movie) {
      movie.favorite = fav;
    }
  }, [id, fav]);

  return (
    <View style={styles.mc_card}>
      <Text style={styles.mc_favIcon}>{fav ? '★' : '☆'}</Text>

      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.mc_content, pressed && styles.mc_pressedContent]}
      >
        <View style={styles.mc_topRow}>
          <Image source={image} style={styles.mc_image} resizeMode="cover" />

          <View style={styles.mc_info}>
            <Text style={styles.mc_title}>{name}</Text>
            <Text style={styles.mc_details}>{genres.join(' • ')}</Text>
            <Button
              title={fav ? '★ Favorito' : '☆ Favoritar'}
              variant={fav ? 'secondary' : 'primary'}
              onPress={() => setFav(!fav)}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
}
