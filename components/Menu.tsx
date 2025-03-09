import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import { X, Globe } from 'lucide-react-native';
import { useLanguageStore } from '@/stores/language-store';

interface MenuProps {
  visible: boolean;
  onClose: () => void;
}

const { height } = Dimensions.get('window');

export default function Menu({ visible, onClose }: MenuProps) {
  const router = useRouter();
  const slideAnim = React.useRef(new Animated.Value(height)).current;
  const { language, toggleLanguage } = useLanguageStore();

  React.useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  const handleNavigation = (path: string) => {
    onClose();
    router.push(path);
  };

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: slideAnim }] }
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{language === 'it' ? 'Menu' : 'Menu'}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color={Colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleNavigation('/')}
          >
            <Text style={styles.menuText}>{language === 'it' ? 'Home' : 'Home'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleNavigation('/gallery')}
          >
            <Text style={styles.menuText}>{language === 'it' ? 'Galleria' : 'Gallery'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleNavigation('/location')}
          >
            <Text style={styles.menuText}>{language === 'it' ? 'Posizione' : 'Location'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleNavigation('/contact')}
          >
            <Text style={styles.menuText}>{language === 'it' ? 'Contatti' : 'Contact'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.languageButton}
            onPress={toggleLanguage}
          >
            <Globe size={20} color={Colors.primary} />
            <Text style={styles.languageText}>
              {language === 'it' ? 'English' : 'Italiano'}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    zIndex: 101,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.l,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  closeButton: {
    padding: theme.spacing.xs,
  },
  content: {
    padding: theme.spacing.l,
  },
  menuItem: {
    paddingVertical: theme.spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  menuText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.text,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    padding: theme.spacing.m,
    backgroundColor: Colors.secondary,
    borderRadius: theme.borderRadius.medium,
  },
  languageText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.primary,
    marginLeft: theme.spacing.s,
  }
});