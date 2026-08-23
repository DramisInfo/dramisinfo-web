/**
 * Jetons de design DramisInfo — source unique de vérité.
 *
 * Ce fichier est un préréglage Tailwind autonome, sans dépendance au site.
 * Il est destiné à être partagé : le jour où un portail client existe, quel que
 * soit le cadre choisi, il hérite de la même identité visuelle en important ce
 * fichier — aucune duplication de couleurs ni de typographie.
 *
 * Identité : « le registre ». Papier, encre, filets réglés, chiffres en
 * tabulaire, un seul accent employé comme un tampon.
 */

export const tokens = {
  color: {
    // Papier — fonds. Légèrement chaud, jamais crème.
    paper:  '#fbfaf7',
    paper2: '#f4f2ed',
    paper3: '#ebe8e1',

    // Encre — texte et surfaces sombres. Noir légèrement bleuté.
    ink:    '#14161a',
    ink2:   '#2c3138',
    ink3:   '#5a6068',
    ink4:   '#8b9098',

    // Filets — bordures et règles du registre.
    rule:      '#d8d5ce',
    ruleLight: '#e7e4dd',
    ruleDark:  '#3a4048',

    // Minium — l'accent unique. Le rouge-orangé des structures d'acier.
    accent:     '#b3401c',
    accentDeep: '#8d3115',
    accentSoft: '#f6e5dd',

    // États — jamais utilisés comme accent décoratif.
    ok:   '#1f5d3f',
    warn: '#8a6a14',
  },

  font: {
    display: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
    body:    "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono:    "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace",
  },

  radius: {
    none: '0',
    sm:   '2px',
    md:   '4px',
  },
};

/** Préréglage Tailwind dérivé des jetons ci-dessus. */
export default {
  theme: {
    extend: {
      colors: {
        paper:  { DEFAULT: tokens.color.paper, 2: tokens.color.paper2, 3: tokens.color.paper3 },
        ink:    { DEFAULT: tokens.color.ink, 2: tokens.color.ink2, 3: tokens.color.ink3, 4: tokens.color.ink4 },
        rule:   { DEFAULT: tokens.color.rule, light: tokens.color.ruleLight, dark: tokens.color.ruleDark },
        accent: { DEFAULT: tokens.color.accent, deep: tokens.color.accentDeep, soft: tokens.color.accentSoft },
        ok:     tokens.color.ok,
      },
      fontFamily: {
        display: [tokens.font.display],
        sans:    [tokens.font.body],
        mono:    [tokens.font.mono],
      },
      borderRadius: tokens.radius,
      letterSpacing: {
        label: '0.14em',
      },
      maxWidth: {
        prose: '68ch',
        page:  '1120px',
      },
    },
  },
};
