import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react-native';
import { useLanguageStore } from '@/stores/language-store';

export default function Footer() {
  const router = useRouter();
  const { language } = useLanguageStore();

  const openMap = () => {
    const address = 'Largo Amalfitana 20, 70043 Monopoli, Puglia, Italia';
    const url = Platform.OS === 'ios'
      ? `maps:0,0?q=${address}`
      : `geo:0,0?q=${address}`;

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${address}`);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Il Gabbiano B&B</Text>
          <Text style={styles.text}>
            {language === 'it'
              ? "Un'oasi di tranquillità nel cuore del centro storico di Monopoli, a due passi dal mare."
              : "An oasis of tranquility in the heart of Monopoli's historic center, just steps from the sea."}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{language === 'it' ? 'Contatti' : 'Contact'}</Text>

          <TouchableOpacity style={styles.contactItem} onPress={openMap}>
            <MapPin size={16} color={Colors.white} />
            <Text style={styles.contactText}>Largo Amalfitana 20, 70043 Monopoli (BA)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => Linking.openURL('tel:+393328237842')}
          >
            <Phone size={16} color={Colors.white} />
            <Text style={styles.contactText}>+39 332 823 7842 / +39 338 929 0144</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => Linking.openURL('mailto:riccardoranieri00@gmail.com')}
          >
            <Mail size={16} color={Colors.white} />
            <Text style={styles.contactText}>riccardoranieri00@gmail.com</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{language === 'it' ? 'Collegamenti' : 'Links'}</Text>

          <TouchableOpacity onPress={() => router.push('/')}>
            <Text style={styles.linkText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/gallery')}>
            <Text style={styles.linkText}>{language === 'it' ? 'Galleria' : 'Gallery'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/location')}>
            <Text style={styles.linkText}>{language === 'it' ? 'Posizione' : 'Location'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/contact')}>
            <Text style={styles.linkText}>{language === 'it' ? 'Contatti' : 'Contact'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.social}>
        <TouchableOpacity
          style={styles.socialIcon}
          onPress={() => Linking.openURL('https://www.instagram.com/il_gabbiano_/')}
        >
          <Instagram size={24} color={Colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialIcon}
          onPress={() => Linking.openURL('https://www.facebook.com/ilgabbianoamonopoli')}
        >
          <Facebook size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.copyright}>
        <Text style={styles.copyrightText}>
          © {new Date().getFullYear()} Il Gabbiano B&B. {language === 'it' ? 'Tutti i diritti riservati.' : 'All rights reserved.'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.l,
  },
  content: {
    paddingHorizontal: theme.spacing.l,
    flexDirection: 'column',
    gap: theme.spacing.xl,
  },
  section: {
    marginBottom: theme.spacing.l,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: theme.spacing.m,
  },
  text: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.8,
    lineHeight: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
  },
  contactText: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.8,
    marginLeft: theme.spacing.s,
  },
  linkText: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.8,
    marginBottom: theme.spacing.s,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: theme.spacing.l,
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: theme.spacing.s,
  },
  copyright: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: theme.spacing.m,
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: 12,
    color: Colors.white,
    opacity: 0.6,
  }
});