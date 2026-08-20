import { Linking, StyleProp, Text, TextStyle } from 'react-native';
import { theme } from '../theme';

interface Props {
  text: string;
  style?: StyleProp<TextStyle>;
}

const URL_REGEX = /(https?:\/\/[^\s)]+)/g;
const BOLD_REGEX = /\*\*([^*]+)\*\*/g;

/**
 * Lightweight text renderer supporting **bold** and auto-linked URLs so
 * content files can stay close to plain markdown-style strings.
 */
export function RichText({ text, style }: Props) {
  const nodes: React.ReactNode[] = [];
  let key = 0;

  const pushWithLinks = (chunk: string, bold: boolean) => {
    const parts = chunk.split(URL_REGEX);
    for (const part of parts) {
      if (!part) continue;
      if (URL_REGEX.test(part)) {
        URL_REGEX.lastIndex = 0;
        nodes.push(
          <Text
            key={key++}
            style={{ color: theme.colors.accent }}
            onPress={() => Linking.openURL(part)}
          >
            {part}
          </Text>,
        );
      } else {
        nodes.push(
          <Text key={key++} style={bold ? { fontWeight: '700' } : undefined}>
            {part}
          </Text>,
        );
      }
    }
  };

  let lastIndex = 0;
  for (const match of text.matchAll(BOLD_REGEX)) {
    if (match.index! > lastIndex) pushWithLinks(text.slice(lastIndex, match.index), false);
    pushWithLinks(match[1], true);
    lastIndex = match.index! + match[0].length;
  }
  if (lastIndex < text.length) pushWithLinks(text.slice(lastIndex), false);

  return <Text style={style}>{nodes}</Text>;
}
