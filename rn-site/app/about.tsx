import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';

const TOOL_ICONS = [
  { name: 'Python', uri: 'https://media.giphy.com/media/3rCcV6sC1o2GY/giphy.gif' },
  { name: 'C/C++', uri: 'https://i.giphy.com/media/LMt9638dO8dftAjtco/200.webp' },
  { name: 'Linux', uri: 'https://i.giphy.com/media/IdyAQJVN2kVPNUrojM/200.webp' },
  { name: 'Git', uri: 'https://media.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif' },
  {
    name: 'MATLAB',
    uri: 'https://www.mathworks.com/company/newsletters/articles/the-mathworks-logo-is-an-eigenfunction-of-the-wave-equation/_jcr_content/mainParsys/image_2.adapt.full.medium.gif/1469941373397.gif',
  },
];

const BIO = [
  'A recent graduate in EECS working as a Software Engineer at MIT LL with a multidisciplinary skillset and a strong physics and mathematics background. I am looking to apply my knowledge, skills, and creativity to design and develop innovative solutions that contribute to electrical systems and advancements in Robotics, Signal Processing, and Embedded Systems.',
  'I have built and designed robot platforms that have required skills in designing power supply circuits, writing drivers, and building hardware with I2C, UART, and SPI protocols, ensuring signal integrity in platforms in air, land, and sea with underwater robotics, drones, and rovers. I have also developed experience in motor control systems, electrical hardware testing, and radar emulators and systems.',
  'I am currently learning more about how to apply Machine Learning and AI to these fields by learning more about Optimization and Control theory on my own.',
];

export default function AboutPage() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <Text style={styles.title}>About Me</Text>
        <Image
          source={require('../assets/img/logo_tedi.jpg')}
          style={styles.photo}
          resizeMode="cover"
        />
        {BIO.map((paragraph, i) => (
          <Text key={i} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}
        <Text style={styles.sectionTitle}>Languages and Tools</Text>
        <View style={styles.tools}>
          {TOOL_ICONS.map((tool) => (
            <View key={tool.name} style={styles.tool}>
              <Image source={{ uri: tool.uri }} style={styles.toolIcon} resizeMode="contain" />
              <Text style={styles.toolName}>{tool.name}</Text>
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
    maxWidth: theme.contentMaxWidth,
    gap: 16,
  },
  title: {
    color: theme.colors.text,
    fontSize: 34,
    fontWeight: '800',
  },
  photo: {
    width: '100%',
    maxWidth: 420,
    aspectRatio: 1,
    borderRadius: 12,
  },
  paragraph: {
    color: theme.colors.textMuted,
    fontSize: 16,
    lineHeight: 26,
  },
  sectionTitle: {
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: '700',
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingBottom: 8,
  },
  tools: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  tool: {
    alignItems: 'center',
    gap: 6,
  },
  toolIcon: {
    width: 72,
    height: 72,
    borderRadius: 10,
    backgroundColor: theme.colors.surface,
  },
  toolName: {
    color: theme.colors.textMuted,
    fontSize: 12,
  },
});
