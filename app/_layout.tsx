import { Slot, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Sidebar } from '../components/Sidebar';
import { theme } from '../theme';

const MOBILE_BREAKPOINT = 900;

export default function RootLayout() {
  const { width } = useWindowDimensions();
  const isMobile = width < MOBILE_BREAKPOINT;
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the drawer whenever navigation happens on mobile.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={styles.root} edges={['top', 'left', 'right']}>
        {isMobile && (
          <View style={styles.topBar}>
            <Pressable onPress={() => setMenuOpen((open) => !open)} style={styles.menuButton}>
              <Text style={styles.menuIcon}>{menuOpen ? '\u2715' : '\u2630'}</Text>
            </Pressable>
            <Text style={styles.topBarTitle}>Tedi Qafko</Text>
          </View>
        )}
        <View style={styles.body}>
          {(!isMobile || menuOpen) && (
            <View style={isMobile ? styles.drawer : undefined}>
              <Sidebar onNavigate={isMobile ? () => setMenuOpen(false) : undefined} />
            </View>
          )}
          <View style={styles.content}>
            <Slot />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    zIndex: 20,
  },
  menuButton: {
    padding: 6,
  },
  menuIcon: {
    color: theme.colors.text,
    fontSize: 20,
  },
  topBarTitle: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
  },
  content: {
    flex: 1,
  },
});
