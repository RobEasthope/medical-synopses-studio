import { supportedLanguages } from '../supportedLanguages';

export default {
  name: 'localeSimpleRichText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'simpleRichText',
    fieldset: lang.isDefault ? null : 'translations',
  })),
};
