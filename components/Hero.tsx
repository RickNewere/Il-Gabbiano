import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, TouchableOpacity, Linking } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import Button from './Button';
import { useRouter } from 'expo-router';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  isExternalLink?: boolean;
}

const { width, height } = Dimensions.get('window');
const heroHeight = Math.min(height * 0.6, 500);

export default function Hero({ title, subtitle, imageUrl, ctaText, ctaLink, isExternalLink = false }: HeroProps) {
  const router = useRouter();

  const handlePress = () => {
    if (isExternalLink && ctaLink) {
      Linking.openURL(ctaLink);
    } else if (ctaLink) {
      router.push(ctaLink);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        contentFit="cover"
        transition={300}
      />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.gradient}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        {ctaText && ctaLink && (
          <Button
            title={ctaText}
            onPress={handlePress}
            style={styles.cta}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: heroHeight,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing.l,
    paddingBottom: Platform.OS === 'web' ? theme.spacing.xl : theme.spacing.l,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: theme.spacing.s,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: theme.spacing.l,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  cta: {
    alignSelf: 'flex-start',
  }
});