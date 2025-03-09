import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Image } from 'expo-image';
import { GalleryImage } from '@/mocks/gallery';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';

interface GalleryGridProps {
  images: GalleryImage[];
  onImagePress?: (image: GalleryImage) => void;
}

const { width } = Dimensions.get('window');
const numColumns = width > 700 ? 3 : 2;
const gap = theme.spacing.s;
const itemWidth = (width - (theme.spacing.l * 2) - (gap * (numColumns - 1))) / numColumns;

export default function GalleryGrid({ images, onImagePress }: GalleryGridProps) {
  const renderItem = ({ item }: { item: GalleryImage }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => onImagePress && onImagePress(item)}
    >
      <Image
        source={{ uri: item.url }}
        style={styles.image}
        contentFit="cover"
        transition={300}
      />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.row}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.l,
    paddingBottom: theme.spacing.l,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: gap,
  },
  imageContainer: {
    width: itemWidth,
    height: itemWidth,
    borderRadius: theme.borderRadius.medium,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});