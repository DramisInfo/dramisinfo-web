/**
 * Jetons de design DramisInfo — source unique de vérité.
 *
 * Ce fichier est un préréglage Tailwind autonome, sans dépendance au site.
 * Il est destiné à être partagé : le jour où un portail client existe, quel que
 * soit le cadre choisi, il hérite de la même identité visuelle en important ce
 * fichier — aucune duplication de couleurs ni de typographie.
 *
 * Les valeurs viennent du guide de marque DramisInfo v1.1 (août 2026), qui fait
 * autorité sur toute décision visuelle. Ne rien ajouter ici sans l'y retrouver.
 */

export const tokens = {
  color: {
    // Papier — fonds. Le crème du guide, jamais un blanc pur en pleine page.
    paper:  '#fbfaf7',
    paper2: '#f4f2ed',
    paper3: '#ebe8e1',

    // Encre — texte et surfaces sombres.
    ink:    '#101010',
    ink2:   '#3a3a3a',
    ink3:   '#6e6e6e',
    ink4:   '#9a9a9a',

    // Filets — bordures et règles.
    rule:      '#e6e6e6',
    ruleLight: '#efefef',
    ruleDark:  '#3a3a3a',

    // Sarcelle — l'accent unique. Jamais un fond de grande surface : il marque
    // un état actif, un lien, un chiffre-clé, la moitié du mark.
    //
    // ATTENTION CONTRASTE : `accent` ne donne que 3.8:1 sur le papier. Il est
    // réservé au texte de 19 px et plus (ou au 700 gras) et aux aplats. Pour
    // tout texte coloré plus petit, utiliser `accent-deep` (5.9:1).
    accent:     '#0f8f86',
    accentDeep: '#0b6a63',
    // Obligatoire pour tout texte ou filet sarcelle posé sur fond encre.
    accentInv:  '#23bdb1',
    accentSoft: '#e2f0ee',

    // États — jamais utilisés comme accent décoratif.
    ok:   '#1f5d3f',
    warn: '#8a6a14',
  },

  font: {
    display: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
    body:    "'Archivo', 'Helvetica Neue', Arial, sans-serif",
    mono:    "'IBM Plex Mono', Consolas, 'Courier New', monospace",
  },

  // Le guide interdit tout rayon : angles vifs, toujours.
  radius: {
    none: '0',
    sm:   '0',
    md:   '0',
  },
};

/** Préréglage Tailwind dérivé des jetons ci-dessus. */
export default {
  theme: {
    // Aucune ombre nulle part : la marque est plate. Un filet 1 px remplace
    // toute carte flottante.
    boxShadow: {
      none: 'none',
    },
    extend: {
      colors: {
        paper:  { DEFAULT: tokens.color.paper, 2: tokens.color.paper2, 3: tokens.color.paper3 },
        ink:    { DEFAULT: tokens.color.ink, 2: tokens.color.ink2, 3: tokens.color.ink3, 4: tokens.color.ink4 },
        rule:   { DEFAULT: tokens.color.rule, light: tokens.color.ruleLight, dark: tokens.color.ruleDark },
        accent: {
          DEFAULT: tokens.color.accent,
          deep: tokens.color.accentDeep,
          inv: tokens.color.accentInv,
          soft: tokens.color.accentSoft,
        },
        ok:     tokens.color.ok,
      },
      fontFamily: {
        display: [tokens.font.display],
        sans:    [tokens.font.body],
        mono:    [tokens.font.mono],
      },
      borderRadius: tokens.radius,
      letterSpacing: {
        label: '0.16em',
      },
      maxWidth: {
        prose: '68ch',
        page:  '1180px',
      },
      transitionDuration: {
        DEFAULT: '120ms',
      },
    },
  },
};
