import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Amenity } from '@/mocks/amenities';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import {
  Coffee, Wifi, Airplay, Sun, Bed, Briefcase, Map, Bike
} from 'lucide-react-native';
import { useLanguageStore } from '@/stores/language-store';

interface AmenityCardProps {
  amenity: Amenity;
}

export default function AmenityCard({ amenity }: AmenityCardProps) {
  const { language } = useLanguageStore();

  const getIcon = () => {
    switch (amenity.icon) {
      case 'coffee':
        return <Coffee size={24} color={Colors.primary} />;
      case 'wifi':
        return <Wifi size={24} color={Colors.primary} />;
      case 'airplay':
        return <Airplay size={24} color={Colors.primary} />;
      case 'sun':
        return <Sun size={24} color={Colors.primary} />;
      case 'bed':
        return <Bed size={24} color={Colors.primary} />;
      case 'briefcase':
        return <Briefcase size={24} color={Colors.primary} />;
      case 'map':
        return <Map size={24} color={Colors.primary} />;
      case 'bike':
        return <Bike size={24} color={Colors.primary} />;
      default:
        return <Coffee size={24} color={Colors.primary} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {getIcon()}
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{language === 'it' ? amenity.name : amenity.nameEn}</Text>
        <Text style={styles.description}>{language === 'it' ? amenity.description : amenity.descriptionEn}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.m,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: Colors.lightText,
  }
});