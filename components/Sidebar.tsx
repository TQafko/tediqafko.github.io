import { Link, usePathname } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { projects } from '../content/projects';
import { theme } from '../theme';

interface Props {
  onNavigate?: () => void;
}

interface NavItemProps {
  href: string;
  label: string;
  active: boolean;
  nested?: boolean;
  onNavigate?: () => void;
}

function NavItem({ href, label, active, nested, onNavigate }: NavItemProps) {
  const [hovered, setHovered] = useState(false);

  // Visual styles live on the inner View: expo-router's `Link asChild`
  // drops the style prop of its direct child.
  return (
    <Link href={href} asChild>
      <Pressable
        onPress={onNavigate}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
      >
        <View
          style={[
            styles.navItem,
            nested && styles.navItemNested,
            hovered && !active && styles.navItemHovered,
            active && styles.navItemActive,
          ]}
        >
          <Text style={[styles.navText, nested && styles.navTextNested, active && styles.navTextActive]}>
            {label}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}

/** Wiki-docs style navigation: top-level pages plus every project listed. */
export function Sidebar({ onNavigate }: Props) {
  const pathname = usePathname();

  return (
    <View style={styles.sidebar}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Link href="/" asChild>
          <Pressable onPress={onNavigate}>
            <View style={styles.brand}>
              <Image source={require('../assets/img/logo_tedi.jpg')} style={styles.brandLogo} />
              <View>
                <Text style={styles.brandName}>Tedi Qafko</Text>
                <Text style={styles.brandSub}>Portfolio</Text>
              </View>
            </View>
          </Pressable>
        </Link>

        <Text style={styles.sectionLabel}>Pages</Text>
        <NavItem href="/" label="Projects" active={pathname === '/'} onNavigate={onNavigate} />
        <NavItem href="/about" label="About Me" active={pathname === '/about'} onNavigate={onNavigate} />
        <NavItem href="/research" label="Research" active={pathname === '/research'} onNavigate={onNavigate} />

        <Text style={styles.sectionLabel}>Projects</Text>
        {projects.map((project) => (
          <NavItem
            key={project.slug}
            href={`/projects/${project.slug}`}
            label={project.title}
            active={pathname === `/projects/${project.slug}`}
            nested
            onNavigate={onNavigate}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: theme.sidebarWidth,
    backgroundColor: theme.colors.surface,
    borderRightWidth: 1,
    borderRightColor: theme.colors.border,
    height: '100%',
  },
  scrollContent: {
    padding: 16,
    gap: 2,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginBottom: 12,
  },
  brandLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  brandName: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  brandSub: {
    color: theme.colors.textMuted,
    fontSize: 12,
  },
  sectionLabel: {
    color: theme.colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginTop: 16,
    marginBottom: 6,
    paddingHorizontal: 10,
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  navItemNested: {
    marginLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.border,
    borderRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  navItemHovered: {
    backgroundColor: theme.colors.surfaceHover,
  },
  navItemActive: {
    backgroundColor: theme.colors.accentSoft,
  },
  navText: {
    color: theme.colors.textMuted,
    fontSize: 15,
    fontWeight: '600',
  },
  navTextNested: {
    fontSize: 14,
    fontWeight: '500',
  },
  navTextActive: {
    color: theme.colors.accent,
  },
});
