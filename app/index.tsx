import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import AmenityCard from '@/components/AmenityCard';
import Footer from '@/components/Footer';
import { rooms } from '@/mocks/rooms';
import { amenities } from '@/mocks/amenities';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import { Image } from 'expo-image';
import { ArrowRight, ExternalLink } from 'lucide-react-native';
import { useLanguageStore } from '@/stores/language-store';

export default function HomeScreen() {
  const { language } = useLanguageStore();
  const room = rooms[0]; // We only have one apartment

  const openAirbnb = () => {
    Linking.openURL(room.airbnbUrl);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Hero
          title="Il Gabbiano B&B"
          subtitle={language === 'it'
            ? "Un'oasi di tranquillità nel cuore di Monopoli, a due passi dal mare"
            : "An oasis of tranquility in the heart of Monopoli, just steps from the sea"}
          imageUrl="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          ctaText={language === 'it' ? "Prenota su Airbnb" : "Book on Airbnb"}
          ctaLink={room.airbnbUrl}
          isExternalLink={true}
        />

        <View style={styles.section}>
          <SectionTitle
            title={language === 'it' ? "Benvenuti al Gabbiano" : "Welcome to Il Gabbiano"}
            subtitle={language === 'it'
              ? "Un'esperienza autentica nel cuore del centro storico di Monopoli"
              : "An authentic experience in the heart of Monopoli's historic center"}
          />

          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>
              {language === 'it'
                ? ""
                : ""}
            </Text>
            <Text style={styles.welcomeText}>
              {language === 'it'
                ? room.description
                : room.descriptionEn}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <SectionTitle
            title={language === 'it' ? "Il nostro appartamento" : "Our apartment"}
            subtitle={language === 'it'
              ? "Comfort e stile per un soggiorno indimenticabile"
              : "Comfort and style for an unforgettable stay"}
          />

          <TouchableOpacity
            style={styles.apartmentCard}
            onPress={openAirbnb}
          >
            <Image
              source={{ uri: room.images[0] }}
              style={styles.apartmentImage}
              contentFit="cover"
              transition={300}
            />
            <View style={styles.apartmentContent}>
              <Text style={styles.apartmentName}>{room.name}</Text>
              <Text style={styles.apartmentPrice}>{room.price}€ <Text style={styles.perNight}>{language === 'it' ? "/ notte" : "/ night"}</Text></Text>
              <Text style={styles.apartmentDescription} numberOfLines={3}>
                {language === 'it' ? room.description : room.descriptionEn}
              </Text>
              <View style={styles.viewDetailsContainer}>
                <Text style={styles.viewDetails}>{language === 'it' ? "Prenota su Airbnb" : "Book on Airbnb"}</Text>
                <ExternalLink size={16} color={Colors.primary} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <SectionTitle
            title={language === 'it' ? "I nostri servizi" : "Our services"}
            subtitle={language === 'it'
              ? "Tutto ciò di cui hai bisogno per un soggiorno confortevole"
              : "Everything you need for a comfortable stay"}
          />

          <View style={styles.amenitiesContainer}>
            {amenities.slice(0, 4).map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </View>
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
  section: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.l,
  },
  welcomeContainer: {
    paddingHorizontal: theme.spacing.l,
    backgroundColor: Colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.l,
    marginHorizontal: theme.spacing.l,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  welcomeText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
    marginBottom: theme.spacing.m,
  },
  apartmentCard: {
    backgroundColor: Colors.white,
    borderRadius: theme.borderRadius.medium,
    overflow: 'hidden',
    marginHorizontal: theme.spacing.l,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  apartmentImage: {
    width: '100%',
    height: 200,
  },
  apartmentContent: {
    padding: theme.spacing.m,
  },
  apartmentName: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  apartmentPrice: {
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
  apartmentDescription: {
    fontSize: 14,
    color: Colors.lightText,
    lineHeight: 20,
    marginBottom: theme.spacing.m,
  },
  viewDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewDetails: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    marginRight: 4,
  },
  amenitiesContainer: {
    paddingHorizontal: theme.spacing.l,
  },
});