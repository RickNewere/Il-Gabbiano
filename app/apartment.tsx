import React from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { rooms } from '@/mocks/rooms';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import { Bed, Users, SquareMeters, Check, ChevronLeft, ChevronRight } from 'lucide-react-native';

export default function ApartmentScreen() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const room = rooms[0]; // We only have one apartment

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: room.images[currentImageIndex] }}
            style={styles.image}
            contentFit="cover"
          />

          {room.images.length > 1 && (
            <>
              <TouchableOpacity
                style={[styles.imageNavButton, styles.prevButton]}
                onPress={prevImage}
              >
                <ChevronLeft size={24} color={Colors.white} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.imageNavButton, styles.nextButton]}
                onPress={nextImage}
              >
                <ChevronRight size={24} color={Colors.white} />
              </TouchableOpacity>

              <View style={styles.imageDots}>
                {room.images.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      index === currentImageIndex && styles.activeDot
                    ]}
                  />
                ))}
              </View>
            </>
          )}
        </View>

        <View style={styles.content}>
          <Text style={styles.name}>{room.name}</Text>
          <Text style={styles.price}>{room.price}€ <Text style={styles.perNight}>/ notte</Text></Text>

          <View style={styles.details}>
            <View style={styles.detailItem}>
              <Bed size={20} color={Colors.primary} />
              <Text style={styles.detailText}>{room.beds}</Text>
            </View>

            <View style={styles.detailItem}>
              <Users size={20} color={Colors.primary} />
              <Text style={styles.detailText}>Max {room.capacity} persone</Text>
            </View>

            <View style={styles.detailItem}>
              <SquareMeters size={20} color={Colors.primary} />
              <Text style={styles.detailText}>{room.size} m²</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Descrizione</Text>
            <Text style={styles.description}>{room.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Servizi</Text>
            <View style={styles.amenitiesList}>
              {room.amenities.map((amenity, index) => (
                <View key={index} style={styles.amenityItem}>
                  <Check size={16} color={Colors.primary} />
                  <Text style={styles.amenityText}>{amenity}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Informazioni utili</Text>

            <View style={styles.infoItem}>
              <Text style={styles.infoItemTitle}>Check-in</Text>
              <Text style={styles.infoItemText}>Dalle 14:00 alle 20:00</Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoItemTitle}>Check-out</Text>
              <Text style={styles.infoItemText}>Entro le 10:30</Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoItemTitle}>Colazione</Text>
              <Text style={styles.infoItemText}>Dalle 7:30 alle 10:00</Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoItemTitle}>Politica di cancellazione</Text>
              <Text style={styles.infoItemText}>Cancellazione gratuita fino a 3 giorni prima dell'arrivo. In caso di cancellazione tardiva o no-show, verrà addebitato l'importo della prima notte.</Text>
            </View>
          </View>

          <Button
            title="Prenota ora"
            onPress={() => router.push('/contact')}
            style={styles.bookButton}
            size="large"
          />
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageContainer: {
    position: 'relative',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageNavButton: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -20 }],
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prevButton: {
    left: theme.spacing.m,
  },
  nextButton: {
    right: theme.spacing.m,
  },
  imageDots: {
    position: 'absolute',
    bottom: theme.spacing.m,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  activeDot: {
    backgroundColor: Colors.white,
  },
  content: {
    padding: theme.spacing.l,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: theme.spacing.m,
  },
  perNight: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.lightText,
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.l,
    gap: theme.spacing.m,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: Colors.lightText,
    marginLeft: 6,
  },
  section: {
    marginBottom: theme.spacing.l,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: theme.spacing.s,
  },
  description: {
    fontSize: 16,
    color: Colors.lightText,
    lineHeight: 24,
  },
  amenitiesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: theme.spacing.s,
  },
  amenityText: {
    fontSize: 14,
    color: Colors.lightText,
    marginLeft: 6,
  },
  infoItem: {
    marginBottom: theme.spacing.m,
  },
  infoItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  infoItemText: {
    fontSize: 14,
    color: Colors.lightText,
    lineHeight: 20,
  },
  bookButton: {
    marginTop: theme.spacing.m,
  },
});