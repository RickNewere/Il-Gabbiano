import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Menu, Globe } from 'lucide-react-native';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import { useLanguageStore } from '@/stores/language-store';

interface HeaderProps {
  title?: string;
  showMenu?: boolean;
  onMenuPress?: () => void;
}

export default function Header({ title, showMenu = true, onMenuPress }: HeaderProps) {
  const router = useRouter();
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => router.push('/')} style={styles.logoContainer}>
          <Text style={styles.logoText}>Il Gabbiano</Text>
          <Text style={styles.logoSubtext}>B&B</Text>
        </TouchableOpacity>

        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
            <Globe size={20} color={Colors.primary} />
            <Text style={styles.languageText}>{language === 'it' ? 'EN' : 'IT'}</Text>
          </TouchableOpacity>

          {showMenu && (
            <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
              <Menu size={24} color={Colors.primary} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {title && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'ios' ? theme.spacing.l : theme.spacing.m,
    paddingBottom: theme.spacing.s,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.l,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  logoText: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.primary,
  },
  logoSubtext: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.accent,
    marginLeft: 4,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    padding: theme.spacing.xs,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.s,
    padding: theme.spacing.xs,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    marginLeft: 4,
  },
  titleContainer: {
    paddingHorizontal: theme.spacing.l,
    paddingTop: theme.spacing.m,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.text,
  }
});