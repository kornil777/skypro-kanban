// src/styles/styledUtils.js
export const getCategoryColors = (category, colors) => {
  switch(category) {
    case 'Web Design':
      return {
        background: colors.category.orange.background,
        text: colors.category.orange.text
      };
    case 'Research':
      return {
        background: colors.category.green.background,
        text: colors.category.green.text
      };
    case 'Copywriting':
      return {
        background: colors.category.purple.background,
        text: colors.category.purple.text
      };
    default:
      return {
        background: colors.category.gray.background,
        text: colors.category.gray.text
      };
  }
};

// Media queries helper
export const media = {
  xs: (styles) => `@media (max-width: 375px) { ${styles} }`,
  sm: (styles) => `@media (max-width: 495px) { ${styles} }`,
  md: (styles) => `@media (max-width: 660px) { ${styles} }`,
  lg: (styles) => `@media (max-width: 768px) { ${styles} }`,
  xl: (styles) => `@media (max-width: 1200px) { ${styles} }`,
};