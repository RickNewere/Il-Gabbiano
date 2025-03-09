import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Testimonial } from '@/mocks/testimonials';
import Colors from '@/constants/colors';
import theme from '@/constants/theme';
import { Star } from 'lucide-react-native';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          fill={i < testimonial.rating ? Colors.accent : 'none'}
          color={i < testimonial.rating ? Colors.accent : Colors.lightText}
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{testimonial.name}</Text>
          <Text style={styles.country}>{testimonial.country}</Text>
        </View>
        <Text style={styles.date}>{testimonial.date}</Text>
      </View>

      <View style={styles.starsContainer}>
        {renderStars()}
      </View>

      <Text style={styles.comment}>{testimonial.comment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.s,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  country: {
    fontSize: 14,
    color: Colors.lightText,
  },
  date: {
    fontSize: 14,
    color: Colors.lightText,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.s,
  },
  comment: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  }
});