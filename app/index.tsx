import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../content/projects';
import { theme } from '../theme';

const GRID_GAP = 20;
const MIN_CARD_WIDTH = 300;

export default function ProjectsPage() {
  const [gridWidth, setGridWidth] = useState(0);

  // Compute a fixed column width so every card is exactly the same size,
  // including the last row.
  const columns = Math.max(1, Math.floor((gridWidth + GRID_GAP) / (MIN_CARD_WIDTH + GRID_GAP)));
  const cardWidth = (gridWidth - GRID_GAP * (columns - 1)) / columns;

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <Text style={styles.title}>Projects</Text>
        <Text style={styles.subtitle}>
          Robotics, embedded systems, and hardware projects across air, land, and sea.
        </Text>
        <View
          style={styles.grid}
          onLayout={(e) => setGridWidth(e.nativeEvent.layout.width)}
        >
          {gridWidth > 0 &&
            projects.map((project) => (
              <View key={project.slug} style={{ width: cardWidth }}>
                <ProjectCard project={project} />
              </View>
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
