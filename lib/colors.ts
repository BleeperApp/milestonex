/**
 * Application Color System
 * Exported as CSS color values for use in components and Tailwind classes
 */

export const colors = {
  // Light Theme
  background: '#F7F8FA',
  homeBackground: '#F5F5F7',
  zoneHairline: '#E8E8ED',
  surface: '#FFFFFF',
  secondarySurface: '#EEF1F4',
  text: '#1F2937',
  textSecondary: '#64748B',
  border: '#DCDEA',
  accent: '#102A43',
  accentHover: '#0B1F33',
  success: '#2E7D5B',
  error: '#C0392B',

  // Dark Theme
  backgroundDark: '#000000',
  surfaceDark: '#162032',
  secondarySurfaceDark: '#1E293B',
  textDark: '#F8FAFC',
  textSecondaryDark: '#94A3B8',
  borderDark: '#334155',
  accentDark: '#1D4ED8',
  accentHoverDark: '#2563EB',
  successDark: '#22C55E',
  errorDark: '#EF4444',
} as const;

/**
 * Utility to get theme-aware color
 */
export function getColor(colorName: keyof typeof colors, isDark?: boolean): string {
  const key = isDark && colorName in colors ? (colorName + 'Dark' as keyof typeof colors) : colorName;
  return colors[key];
}
