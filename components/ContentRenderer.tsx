import { Linking, Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ContentBlock } from '../content/types';
import { theme } from '../theme';
import { AutoImage } from './AutoImage';
import { RichText } from './RichText';

interface Props {
  blocks: ContentBlock[];
}

/** Renders an array of content blocks. Used by project and research pages. */
export function ContentRenderer({ blocks }: Props) {
  const { width } = useWindowDimensions();
  const stackRows = width < 700;

  return (
    <View style={styles.container}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading': {
            const level = block.level ?? 2;
            const headingStyle =
              level === 1 ? styles.h1 : level === 2 ? styles.h2 : styles.h3;
            return (
              <Text key={i} style={headingStyle}>
                {block.text}
              </Text>
            );
          }
          case 'paragraph':
            return <RichText key={i} text={block.text} style={styles.paragraph} />;
          case 'image':
            return (
              <View
                key={i}
                style={[
                  styles.imageWrap,
                  block.maxWidth ? { maxWidth: block.maxWidth, alignSelf: 'center', width: '100%' } : null,
                ]}
              >
                <AutoImage source={block.source} />
                {block.caption ? <RichText text={block.caption} style={styles.caption} /> : null}
              </View>
            );
          case 'imageRow':
            return (
              <View key={i} style={styles.imageWrap}>
                <View style={[styles.imageRow, stackRows && { flexDirection: 'column', alignItems: 'stretch' }]}>
                  {block.images.map((img, j) => (
                    // flex: 1 collapses to zero height when the row stacks vertically
                    <View key={j} style={[styles.imageRowItem, !stackRows && { flex: 1 }]}>
                      {img.label ? <Text style={styles.imageLabel}>{img.label}</Text> : null}
                      <AutoImage source={img.source} />
                    </View>
                  ))}
                </View>
                {block.caption ? <RichText text={block.caption} style={styles.caption} /> : null}
              </View>
            );
          case 'list':
            return (
              <View key={i} style={styles.list}>
                {block.items.map((item, j) => (
                  <View key={j} style={styles.listItem}>
                    <Text style={styles.listMarker}>{block.ordered ? `${j + 1}.` : '\u2022'}</Text>
                    <RichText text={item} style={styles.listText} />
                  </View>
                ))}
              </View>
            );
          case 'table':
            return (
              <View key={i} style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeaderRow]}>
                  {block.headers.map((h, j) => (
                    <Text key={j} style={[styles.tableCell, styles.tableHeaderCell]}>
                      {h}
                    </Text>
                  ))}
                </View>
                {block.rows.map((row, j) => (
                  <View key={j} style={styles.tableRow}>
                    {row.map((cell, k) => (
                      <RichText key={k} text={cell} style={styles.tableCell} />
                    ))}
                  </View>
                ))}
              </View>
            );
          case 'youtube': {
            const url = `https://www.youtube.com/watch?v=${block.videoId}`;
            return (
              <View key={i} style={styles.imageWrap}>
                {Platform.OS === 'web' ? (
                  <View style={styles.videoFrame}>
                    <iframe
                      src={`https://www.youtube.com/embed/${block.videoId}?rel=0`}
                      style={{ width: '100%', height: '100%', border: 0, borderRadius: 8 }}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </View>
                ) : (
                  <Text style={styles.link} onPress={() => Linking.openURL(url)}>
                    Watch video: {url}
                  </Text>
                )}
                {block.caption ? <RichText text={block.caption} style={styles.caption} /> : null}
              </View>
            );
          }
          case 'video':
            return (
              <View key={i} style={styles.imageWrap}>
                {Platform.OS === 'web' ? (
                  <video
                    src={block.uri}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', borderRadius: 8 }}
                  />
                ) : (
                  <Text style={styles.link} onPress={() => Linking.openURL(block.uri)}>
                    Watch video
                  </Text>
                )}
                {block.caption ? <RichText text={block.caption} style={styles.caption} /> : null}
              </View>
            );
          case 'link':
            return (
              <Text key={i} style={styles.link} onPress={() => Linking.openURL(block.url)}>
                {block.label}
              </Text>
            );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  h1: {
    color: theme.colors.text,
    fontSize: 32,
    fontWeight: '700',
    marginTop: 8,
  },
  h2: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: '700',
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingBottom: 8,
  },
  h3: {
    color: theme.colors.text,
    fontSize: 19,
    fontWeight: '600',
    marginTop: 8,
  },
  paragraph: {
    color: theme.colors.textMuted,
    fontSize: 16,
    lineHeight: 26,
  },
  imageWrap: {
    gap: 8,
  },
  imageRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-end',
  },
  imageRowItem: {
    gap: 6,
  },
  imageLabel: {
    color: theme.colors.text,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  caption: {
    color: theme.colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
  list: {
    gap: 8,
    paddingLeft: 4,
  },
  listItem: {
    flexDirection: 'row',
    gap: 10,
  },
  listMarker: {
    color: theme.colors.accent,
    fontSize: 16,
    lineHeight: 26,
  },
  listText: {
    flex: 1,
    color: theme.colors.textMuted,
    fontSize: 16,
    lineHeight: 26,
  },
  table: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  tableHeaderRow: {
    borderTopWidth: 0,
    backgroundColor: theme.colors.surface,
  },
  tableCell: {
    flex: 1,
    color: theme.colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
    padding: 10,
  },
  tableHeaderCell: {
    color: theme.colors.text,
    fontWeight: '700',
  },
  link: {
    color: theme.colors.accent,
    fontSize: 16,
  },
  videoFrame: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: theme.colors.surface,
  },
});
