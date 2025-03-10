import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import SectionTitle from '@/components/SectionTitle';
import Footer from '@/components/Footer';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import { MapPin, Navigation, Car, Train, Plane } from 'lucide-react-native';
import { useLanguageStore } from '@/stores/language-store';

export default function LocationScreen() {
  const { language } = useLanguageStore();

  const openMap = () => {
    Linking.openURL('https://www.google.com/maps/place/Largo+Amalfitana,+20,+70043+Monopoli+BA/');
  };

  return (
      <View style={styles.container}>
        <StatusBar style="dark" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <SectionTitle
                title={language === 'it' ? "Dove siamo" : "Where we are"}
                subtitle={language === 'it'
                    ? "Nel cuore del centro storico di Monopoli, a due passi dal mare"
                    : "In the heart of Monopoli's historic center, just steps from the sea"}
            />
          </View>

          <TouchableOpacity onPress={openMap}>
            <Image
                source={{ uri: 'https://maps.googleapis.com/maps/api/staticmap?center=Largo+Amalfitana+20,+70043+Monopoli,+Italy&zoom=16&size=600x300&maptype=roadmap&markers=color:red%7CLargo+Amalfitana+20,+70043+Monopoli,+Italy&key=YOUR_API_KEY' }}
                style={styles.mapImage}
                contentFit="cover"
                fallbackSource={{ uri: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
            />
            <View style={styles.mapOverlay}>
              <MapPin size={32} color={Colors.primary} />
              <Text style={styles.mapText}>{language === 'it' ? "Apri mappa" : "Open map"}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.addressSection}>
            <View style={styles.addressCard}>
              <View style={styles.addressHeader}>
                <MapPin size={24} color={Colors.primary} />
                <Text style={styles.addressTitle}>{language === 'it' ? "Il nostro indirizzo" : "Our address"}</Text>
              </View>

              <Text style={styles.address}>
                B&B Il Gabbiano{"\n"}
                Largo Amalfitana 20{"\n"}
                70043 Monopoli (BA){"\n"}
                Puglia, Italia
              </Text>

              <TouchableOpacity
                  style={styles.directionsButton}
                  onPress={openMap}
              >
                <Navigation size={16} color={Colors.white} />
                <Text style={styles.directionsText}>{language === 'it' ? "Indicazioni stradali" : "Directions"}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <SectionTitle
                title={language === 'it' ? "Come raggiungerci" : "How to reach us"}
                subtitle={language === 'it'
                    ? "Diverse opzioni per arrivare al nostro B&B"
                    : "Different options to reach our B&B"}
            />

            <View style={styles.transportContainer}>
              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Car size={24} color={Colors.primary} />
                </View>
                <Text style={styles.transportTitle}>{language === 'it' ? "In auto" : "By car"}</Text>
                <Text style={styles.transportText}>
                  {language === 'it'
                      ? "Dall'autostrada A14, uscita Bari Sud, seguire le indicazioni per Monopoli. Il centro storico è a traffico limitato, ma ci sono parcheggi nelle vicinanze."
                      : "From the A14 highway, Bari Sud exit, follow the signs to Monopoli. The historic center has limited traffic, but there are parking lots nearby."}
                </Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Train size={24} color={Colors.primary} />
                </View>
                <Text style={styles.transportTitle}>{language === 'it' ? "In treno" : "By train"}</Text>
                <Text style={styles.transportText}>
                  {language === 'it'
                      ? "La stazione ferroviaria di Monopoli è ben collegata con le principali città italiane. Dal piazzale della stazione, il B&B dista circa 15 minuti a piedi."
                      : "Monopoli train station is well connected with the main Italian cities. From the station square, the B&B is about a 15-minute walk."}
                </Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Plane size={24} color={Colors.primary} />
                </View>
                <Text style={styles.transportTitle}>{language === 'it' ? "In aereo" : "By plane"}</Text>
                <Text style={styles.transportText}>
                  {language === 'it'
                      ? "Gli aeroporti più vicini sono quello di Bari-Palese, a circa 60 km, e quello di Brindisi-Salento, a circa 70 km. Da entrambi gli aeroporti è possibile prendere un treno o un autobus per Monopoli, oppure noleggiare un'auto."
                      : "The nearest airports are Bari-Palese, about 60 km away, and Brindisi-Salento, about 70 km away. From both airports, you can take a train or bus to Monopoli, or rent a car."}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <SectionTitle
                title={language === 'it' ? "Nei dintorni" : "Nearby"}
                subtitle={language === 'it'
                    ? "Luoghi di interesse vicino al nostro B&B"
                    : "Places of interest near our B&B"}
            />

            <View style={styles.poiContainer}>
              <View style={styles.poiItem}>
                <Text style={styles.poiName}>{language === 'it' ? "Centro Storico" : "Historic Center"}</Text>
                <Text style={styles.poiDistance}>{language === 'it' ? "0 m - Siamo nel cuore del centro storico" : "0 m - We are in the heart of the historic center"}</Text>
              </View>

              <View style={styles.poiItem}>
                <Text style={styles.poiName}>{language === 'it' ? "Spiaggia di Cala Porta Vecchia" : "Cala Porta Vecchia Beach"}</Text>
                <Text style={styles.poiDistance}>{language === 'it' ? "200 m - 3 minuti a piedi" : "200 m - 3 minutes walking"}</Text>
              </View>

              <View style={styles.poiItem}>
                <Text style={styles.poiName}>{language === 'it' ? "Castello Carlo V" : "Carlo V Castle"}</Text>
                <Text style={styles.poiDistance}>{language === 'it' ? "400 m - 5 minuti a piedi" : "400 m - 5 minutes walking"}</Text>
              </View>

              <View style={styles.poiItem}>
                <Text style={styles.poiName}>{language === 'it' ? "Cattedrale di Maria Santissima della Madia" : "Cathedral of Maria Santissima della Madia"}</Text>
                <Text style={styles.poiDistance}>{language === 'it' ? "300 m - 4 minuti a piedi" : "300 m - 4 minutes walking"}</Text>
              </View>

              <View style={styles.poiItem}>
                <Text style={styles.poiName}>{language === 'it' ? "Il Guazzetto - Ristorante di pesce" : "Il Guazzetto - Seafood Restaurant"}</Text>
                <Text style={styles.poiDistance}>{language === 'it' ? "100 m - 2 minuti a piedi" : "100 m - 2 minutes walking"}</Text>
              </View>
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
  header: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.m,
  },
  mapImage: {
    width: '100%',
    height: 250,
  },
  mapOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
    marginTop: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  addressSection: {
    paddingHorizontal: theme.spacing.l,
    marginTop: -30,
    marginBottom: theme.spacing.l,
    zIndex: 10,
  },
  addressCard: {
    backgroundColor: Colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.l,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginLeft: theme.spacing.s,
  },
  address: {
    fontSize: 16,
    color: Colors.lightText,
    lineHeight: 24,
    marginBottom: theme.spacing.m,
  },
  directionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: theme.borderRadius.medium,
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.l,
  },
  directionsText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
    marginLeft: theme.spacing.s,
  },
  section: {
    paddingTop: theme.spacing.l,
    paddingBottom: theme.spacing.l,
  },
  transportContainer: {
    paddingHorizontal: theme.spacing.l,
  },
  transportCard: {
    backgroundColor: Colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.l,
    marginBottom: theme.spacing.m,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  transportIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.s,
  },
  transportTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: theme.spacing.s,
  },
  transportText: {
    fontSize: 14,
    color: Colors.lightText,
    lineHeight: 20,
  },
  poiContainer: {
    paddingHorizontal: theme.spacing.l,
  },
  poiItem: {
    backgroundColor: Colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.s,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  poiName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  poiDistance: {
    fontSize: 14,
    color: Colors.lightText,
  },
});