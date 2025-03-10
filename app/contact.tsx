import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SectionTitle from '@/components/SectionTitle';
import Footer from '@/components/Footer';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react-native';
import { useLanguageStore } from '@/stores/language-store';
import Button from '@/components/Button';

export default function ContactScreen() {
  const { language } = useLanguageStore();

  const openWhatsApp = () => {
    const phoneNumber = '393382837842';
    const message = language === 'it'
        ? 'Ciao, vorrei avere maggiori informazioni sul B&B Il Gabbiano.'
        : 'Hello, I would like more information about B&B Il Gabbiano.';

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  return (
      <View style={styles.container}>
        <StatusBar style="dark" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <SectionTitle
                title={language === 'it' ? "Contatti" : "Contact"}
                subtitle={language === 'it'
                    ? "Siamo a tua disposizione per qualsiasi informazione"
                    : "We are at your disposal for any information"}
            />
          </View>

          <View style={styles.contactCardsContainer}>
            <TouchableOpacity
                style={styles.contactCard}
                onPress={() => Linking.openURL('tel:+393382837842')}
            >
              <View style={styles.contactIconContainer}>
                <Phone size={24} color={Colors.primary} />
              </View>
              <Text style={styles.contactTitle}>{language === 'it' ? "Telefono" : "Phone"}</Text>
              <Text style={styles.contactInfo}>+39 338 283 7842</Text>
              <Text style={styles.contactInfo}>+39 338 929 0144</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.contactCard}
                onPress={() => Linking.openURL('mailto:ilgabbianomonopoli@gmail.com')}
            >
              <View style={styles.contactIconContainer}>
                <Mail size={24} color={Colors.primary} />
              </View>
              <Text style={styles.contactTitle}>Email</Text>
              <Text style={styles.contactInfo}>ilgabbianomonopoli@gmail.com</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.contactCard}
                onPress={() => {
                  Linking.openURL('https://www.google.com/maps/place/Largo+Amalfitana,+20,+70043+Monopoli+BA/');
                }}
            >
              <View style={styles.contactIconContainer}>
                <MapPin size={24} color={Colors.primary} />
              </View>
              <Text style={styles.contactTitle}>{language === 'it' ? "Indirizzo" : "Address"}</Text>
              <Text style={styles.contactInfo}>Largo Amalfitana 20, Monopoli (BA)</Text>
            </TouchableOpacity>

            <View style={styles.contactCard}>
              <View style={styles.contactIconContainer}>
                <Clock size={24} color={Colors.primary} />
              </View>
              <Text style={styles.contactTitle}>{language === 'it' ? "Orari" : "Hours"}</Text>
              <Text style={styles.contactInfo}>{language === 'it' ? "Check-in: 14:00 - 20:00" : "Check-in: 2:00 PM - 8:00 PM"}</Text>
              <Text style={styles.contactInfo}>{language === 'it' ? "Check-out: entro le 10:30" : "Check-out: by 10:30 AM"}</Text>
            </View>
          </View>

          <View style={styles.whatsappSection}>
            <View style={styles.whatsappCard}>
              <Text style={styles.whatsappTitle}>
                {language === 'it'
                    ? "Hai domande o vuoi prenotare?"
                    : "Have questions or want to book?"}
              </Text>
              <Text style={styles.whatsappText}>
                {language === 'it'
                    ? "Contattaci direttamente su WhatsApp per ricevere una risposta rapida."
                    : "Contact us directly on WhatsApp for a quick response."}
              </Text>
              <Button
                  title={language === 'it' ? "Chatta con noi su WhatsApp" : "Chat with us on WhatsApp"}
                  onPress={openWhatsApp}
                  style={styles.whatsappButton}
                  icon={<MessageSquare size={20} color={Colors.white} />}
              />
            </View>
          </View>

          <View style={styles.faqSection}>
            <SectionTitle
                title={language === 'it' ? "Domande frequenti" : "Frequently Asked Questions"}
                subtitle={language === 'it'
                    ? "Risposte alle domande più comuni"
                    : "Answers to the most common questions"}
            />

            <View style={styles.faqContainer}>
              <View style={styles.faqItem}>
                <Text style={styles.faqQuestion}>{language === 'it' ? "È possibile portare animali domestici?" : "Can I bring pets?"}</Text>
                <Text style={styles.faqAnswer}>{language === 'it'
                    ? "Sì, gli animali domestici di piccola taglia sono i benvenuti. Vi preghiamo di comunicarcelo al momento della prenotazione."
                    : "Yes, small pets are welcome. Please let us know when booking."}</Text>
              </View>

              <View style={styles.faqItem}>
                <Text style={styles.faqQuestion}>{language === 'it' ? "C'è il parcheggio?" : "Is there parking?"}</Text>
                <Text style={styles.faqAnswer}>{language === 'it'
                    ? "Il B&B si trova nel centro storico, zona a traffico limitato. Ci sono parcheggi pubblici nelle vicinanze a circa 200-300 metri."
                    : "The B&B is located in the historic center, a limited traffic area. There are public parking lots nearby, about 200-300 meters away."}</Text>
              </View>

              <View style={styles.faqItem}>
                <Text style={styles.faqQuestion}>{language === 'it' ? "È disponibile il Wi-Fi?" : "Is Wi-Fi available?"}</Text>
                <Text style={styles.faqAnswer}>{language === 'it'
                    ? "Sì, il Wi-Fi è gratuito e disponibile in tutte le aree del B&B."
                    : "Yes, Wi-Fi is free and available in all areas of the B&B."}</Text>
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
  contactCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: theme.spacing.l,
    gap: theme.spacing.m,
    justifyContent: 'space-between',
  },
  contactCard: {
    width: '47%',
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
  contactIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.s,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  contactInfo: {
    fontSize: 14,
    color: Colors.lightText,
  },
  whatsappSection: {
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.l,
  },
  whatsappCard: {
    backgroundColor: Colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.l,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  whatsappTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: theme.spacing.s,
    textAlign: 'center',
  },
  whatsappText: {
    fontSize: 16,
    color: Colors.lightText,
    marginBottom: theme.spacing.l,
    textAlign: 'center',
  },
  whatsappButton: {
    paddingHorizontal: theme.spacing.xl,
  },
  faqSection: {
    paddingTop: theme.spacing.l,
    paddingBottom: theme.spacing.xl,
  },
  faqContainer: {
    paddingHorizontal: theme.spacing.l,
  },
  faqItem: {
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
  faqQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: theme.spacing.s,
  },
  faqAnswer: {
    fontSize: 14,
    color: Colors.lightText,
    lineHeight: 20,
  },
});