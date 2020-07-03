export interface Diagnostic {
  locks_diagnostic: boolean;
  hair_texture_diagnostic?: 'wavy' | 'curly' | 'kinky';
  porosity_diagnostic?: 'low' | 'normal' | 'high';
  density_diagnostic?: 'low' | 'normal' | 'high';
  thickness_diagnostic?: 'light' | 'medium' | 'heavy';
  curl_pattern_diagnostic?: 'l' | 's' | 'z' | 'o';
  distance_between_curls_diagnostic?: 'loose' | 'medium' | 'tight' | 'very_tight';
}
