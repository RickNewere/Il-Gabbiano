import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Room } from '@/mocks/rooms';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import { Bed, Users, ArrowRight } from 'lucide-react-native';

interface RoomCardProps {
  room: Room;
}

const { width } = Dimensions.get('window');
const cardWidth = width > 700 ? 320 : width - 48;

export default function RoomCard({ room }: RoomCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/rooms/${room.id}`)}
    >
      <Image
        source={{ uri: room.images[0] }}
        style={styles.image}
        contentFit="cover"
        transition={300}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{room.name}</Text>
        <Text style={styles.price}>{room.price}€ <Text style={styles.perNight}>/ notte</Text></Text>

        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Bed size={16} color={Colors.primary} />
            <Text style={styles.detailText}>{room.beds}</Text>
          </View>
          <View style={styles.detailItem}>
            <Users size={16} color={Colors.primary} />
            <Text style={styles.detailText}>Max {room.capacity} persone</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {room.description}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.viewDetails}>Visualizza dettagli</Text>
          <ArrowRight size={16} color={Colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    backgroundColor: Colors.white,
    borderRadius: theme.borderRadius.medium,
    overflow: 'hidden',
    marginBottom: theme.spacing.l,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: theme.spacing.m,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: theme.spacing.s,
  },
  perNight: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.lightText,
  },
  details: {
    flexDirection: 'row',
    marginBottom: theme.spacing.s,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.m,
  },
  detailText: {
    fontSize: 14,
    color: Colors.lightText,
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: Colors.lightText,
    marginBottom: theme.spacing.m,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewDetails: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    marginRight: 4,
  }
});