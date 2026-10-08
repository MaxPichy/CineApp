import { Pressable, Text } from 'react-native';
import styles from '../styles/styles';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
};

export function Button({ title, onPress, variant = 'primary' }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button_default,
        variant === 'secondary' && styles.button_secondary,
        pressed && styles.button_pressed,
      ]}
    >
      <Text style={styles.button_text}>{title}</Text>
    </Pressable>
  );
}
