import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Project } from '../content/types';
import { theme } from '../theme';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const [hovered, setHovered] = useState(false);

  // Visual styles live on Views, not the Pressable: expo-router's
  // `Link asChild` drops the style prop of its direct child.
  return (
    <View style={styles.gridItem}>
      <Link href={`/projects/${project.slug}`} asChild>
        <Pressable onHoverIn={() => setHovered(true)} onHoverOut={() => setHovered(false)}>
          <View style={[styles.card, hovered && styles.cardHovered]}>
            <Image source={project.image} style={styles.thumbnail} resizeMode="cover" />
            <View style={styles.cardBody}>
              <Text style={styles.title}>{project.title}</Text>
              <Text style={styles.description} numberOfLines={3}>
                {project.description}
              </Text>
              <View style={styles.tags}>
                {project.tags.map((tag) => (
                  <Text key={tag} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flexGrow: 1,
    flexBasis: 280,
    maxWidth: 420,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardHovered: {
    borderColor: theme.colors.accent,
  },
  thumbnail: {
    width: '100%',
    height: 180,
    backgroundColor: theme.colors.background,
  },
  cardBody: {
    padding: 16,
    gap: 8,
    flex: 1,
  },
  title: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    color: theme.colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
    flex: 1,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
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
});
