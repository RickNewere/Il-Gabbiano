import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Platform } from 'react-native';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import Button from './Button';
import { Mail, Send } from 'lucide-react-native';
import { useLanguageStore } from '@/stores/language-store';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { language } = useLanguageStore();

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert(
        language === 'it' ? 'Errore' : 'Error',
        language === 'it' ? 'Per favore compila tutti i campi' : 'Please fill in all fields'
      );
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        language === 'it' ? 'Messaggio inviato' : 'Message sent',
        language === 'it'
          ? 'Grazie per averci contattato. Ti risponderemo al più presto.'
          : 'Thank you for contacting us. We will respond as soon as possible.',
        [
          {
            text: 'OK',
            onPress: () => {
              setName('');
              setEmail('');
              setMessage('');
            }
          }
        ]
      );
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Mail size={24} color={Colors.primary} />
        <Text style={styles.title}>{language === 'it' ? 'Contattaci' : 'Contact Us'}</Text>
      </View>

      <Text style={styles.description}>
        {language === 'it'
          ? 'Compila il modulo sottostante per richiedere informazioni o prenotare il tuo soggiorno.'
          : 'Fill out the form below to request information or book your stay.'}
      </Text>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{language === 'it' ? 'Nome' : 'Name'}</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder={language === 'it' ? 'Il tuo nome' : 'Your name'}
            placeholderTextColor={Colors.lightText}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder={language === 'it' ? 'La tua email' : 'Your email'}
            placeholderTextColor={Colors.lightText}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{language === 'it' ? 'Messaggio' : 'Message'}</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={message}
            onChangeText={setMessage}
            placeholder={language === 'it' ? 'Il tuo messaggio' : 'Your message'}
            placeholderTextColor={Colors.lightText}
            multiline
            numberOfLines={Platform.OS === 'ios' ? 0 : 4}
            textAlignVertical="top"
          />
        </View>

        <Button
          title={language === 'it' ? 'Invia messaggio' : 'Send message'}
          onPress={handleSubmit}
          loading={loading}
          icon={<Send size={16} color={Colors.white} />}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.l,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginLeft: theme.spacing.s,
  },
  description: {
    fontSize: 14,
    color: Colors.lightText,
    marginBottom: theme.spacing.l,
  },
  form: {
    gap: theme.spacing.m,
  },
  inputContainer: {
    marginBottom: theme.spacing.s,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Colors.secondary,
    borderRadius: theme.borderRadius.small,
    padding: theme.spacing.m,
    fontSize: 16,
    color: Colors.text,
  },
  textArea: {
    minHeight: 120,
  },
  button: {
    marginTop: theme.spacing.s,
  }
});