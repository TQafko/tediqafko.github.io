import { Link, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ContentRenderer } from '../../components/ContentRenderer';
import { projects } from '../../content/projects';
import { theme } from '../../theme';

/** Pre-render one HTML page per project so GitHub Pages can serve /projects/<slug>. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Project not found.</Text>
        <Link href="/" style={styles.backLink}>
          Back to projects
        </Link>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <Text style={styles.title}>{project.title}</Text>
        <View style={styles.tags}>
          {project.tags.map((tag) => (
            <Text key={tag} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
        <ContentRenderer blocks={project.content} />
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
    gap: 16,
  },
  title: {
    color: theme.colors.text,
    fontSize: 32,
    fontWeight: '800',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    color: theme.colors.tagText,
    backgroundColor: theme.colors.tagBackground,
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    overflow: 'hidden',
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  notFoundText: {
    color: theme.colors.text,
    fontSize: 18,
  },
  backLink: {
    color: theme.colors.accent,
    fontSize: 16,
  },
});
