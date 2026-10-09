import { View, Text, Image, Pressable } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import styles from '../styles/styles';
import { Button } from './Button';
import { useState } from 'react';

type MovieCardProps = {
  name: string;
  genres: string[];
  year: number;
  image: ImageSourcePropType;
  rate: number;
  favorite: boolean;
  general_review: string;
  onPress?: () => void;
};

export function MovieCard({
  name,
  genres,
  year,
  image,
  rate,
  favorite,
  general_review,
  onPress,
}: MovieCardProps) {
  const [fav, setFav] = useState(false);

  return (
    <View style={styles.mc_card}>
      <Text style={styles.mc_favIcon}>{fav ? '★' : '☆'}</Text>

      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.mc_content,
          pressed && styles.mc_pressedContent,
        ]}
      >
        <View style={styles.mc_topRow}>
          <Image source={image} style={styles.mc_image} resizeMode="cover" />

          <View style={styles.mc_info}>
            <View style={styles.mc_titleRow}>
              <Text style={styles.mc_title}>{name}</Text>
              <Text style={styles.mc_rate}>★ {rate.toFixed(1)}</Text>
            </View>
            <Text style={styles.mc_details}>
              {genres.join(' • ')} • {year}
            </Text>
            <Text style={styles.mc_review}>"{general_review}"</Text>
          </View>
        </View>
      </Pressable>

      <View style={styles.mc_buttonArea}>
        <Button
          title={fav ? '★ Favorito' : '☆ Favoritar'}
          variant={fav ? 'secondary' : 'primary'}
          onPress={() => setFav(!fav)}
        />
      </View>
    </View>
  );
}