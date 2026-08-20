import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../content/projects';
import { theme } from '../theme';

export default function ProjectsPage() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <Text style={styles.title}>Projects</Text>
        <Text style={styles.subtitle}>
          Robotics, embedded systems, and hardware projects across air, land, and sea.
        </Text>
        <View style={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </View>
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
    maxWidth: theme.contentMaxWidth + 200,
    gap: 12,
  },
  title: {
    color: theme.colors.text,
    fontSize: 34,
    fontWeight: '800',
  },
  subtitle: {
    color: theme.colors.textMuted,
    fontSize: 16,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
});
