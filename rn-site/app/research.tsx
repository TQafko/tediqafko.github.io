import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { publications } from '../content/research';
import { theme } from '../theme';

export default function ResearchPage() {
  const { width } = useWindowDimensions();
  const stacked = width < 700;

  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <Text style={styles.title}>Research</Text>
        {years.map((year) => (
          <View key={year} style={styles.yearSection}>
            <Text style={styles.year}>{year}</Text>
            {publications
              .filter((p) => p.year === year)
              .map((pub, i) => (
                <View key={i} style={[styles.publication, stacked && styles.publicationStacked]}>
                  <Image
                    source={pub.image}
                    style={[styles.image, stacked && styles.imageStacked]}
                    resizeMode="cover"
                  />
                  <Text style={styles.citation}>{pub.citation}</Text>
                </View>
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 24,
    alignItems: 'center',
  },
  page: {
    width: '100%',
    maxWidth: theme.contentMaxWidth,
    gap: 8,
  },
  title: {
    color: theme.colors.text,
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 8,
  },
  yearSection: {
    gap: 16,
    marginBottom: 16,
  },
  year: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: '700',
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.border,
    paddingBottom: 6,
    marginTop: 12,
  },
  publication: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 12,
    padding: 14,
  },
  publicationStacked: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  image: {
    width: 200,
    height: 130,
    borderRadius: 8,
    backgroundColor: theme.colors.background,
  },
  imageStacked: {
    width: '100%',
    height: 180,
  },
  citation: {
    flex: 1,
    color: theme.colors.textMuted,
    fontSize: 15,
    lineHeight: 24,
  },
});
