import { Asset } from 'expo-asset';
import { Image, ImageStyle } from 'expo-image';
import { useEffect, useState } from 'react';
import { Image as RNImage, ImageSourcePropType, StyleProp } from 'react-native';

interface Props {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

/**
 * Image that fills its container width while preserving the source's
 * intrinsic aspect ratio (images otherwise need explicit dimensions).
 */
export function AutoImage({ source, style }: Props) {
  const [aspectRatio, setAspectRatio] = useState<number>(() => {
    if (typeof source === 'number') {
      const asset = Asset.fromModule(source);
      if (asset.width && asset.height) return asset.width / asset.height;
    }
    return 16 / 9;
  });

  useEffect(() => {
    let cancelled = false;
    if (typeof source !== 'number') {
      const uri = Array.isArray(source) ? source[0]?.uri : source?.uri;
      if (uri) {
        RNImage.getSize(
          uri,
          (w, h) => {
            if (!cancelled && w && h) setAspectRatio(w / h);
          },
          () => {},
        );
      }
    }
    return () => {
      cancelled = true;
    };
  }, [source]);

  return (
    <Image
      source={source}
      contentFit="contain"
      style={[{ width: '100%', aspectRatio, borderRadius: 8 }, style]}
    />
  );
}
