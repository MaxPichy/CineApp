import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/styles';

type MenuRoute = 'home' | 'list' | 'about';

type MenuProps = {
  active?: MenuRoute;
};

const items: { key: MenuRoute; label: string; route: string }[] = [
  { key: 'home', label: 'Home', route: '/' },
  { key: 'list', label: 'List', route: '/list' },
  { key: 'about', label: 'About', route: '/about' },
];

export function Menu({ active }: MenuProps) {
  const router = useRouter();

  return (
    <View style={styles.menu_container}>
      {items.map((item) => {
        const isActive = item.key === active;

        return (
          <Pressable
            key={item.key}
            onPress={() => router.push(item.route as any)}
            style={({ pressed }) => [
              styles.menu_item,
              isActive && styles.menu_activeItem,
              pressed && styles.menu_pressedItem,
            ]}
          >
            <Text style={[styles.menu_text, isActive && styles.menu_activeText]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}