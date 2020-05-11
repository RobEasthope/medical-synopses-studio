import S from '@sanity/desk-tool/structure-builder';
import {
  GoBook,
  GoBookmark,
  GoBriefcase,
  GoCode,
  GoNote,
  GoPaintcan,
  GoPerson,
  GoRocket,
  GoTerminal,
} from 'react-icons/go';
import { FaRegAddressCard, FaUniversity } from 'react-icons/fa';

// const hiddenTypes = ['about'];

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Synopses')
        .schemaType('synopsis')
        .icon(GoPaintcan)
        .child(S.documentTypeList('synopsis')),
      S.listItem()
        .title('Pages')
        .icon(GoBook)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About page')
                .child(
                  S.editor()
                    .id('about')
                    .schemaType('about')
                    .documentId('about')
                )
                .icon(GoNote),
              S.listItem()
                .title('Contact page')
                .child(
                  S.editor()
                    .id('contact')
                    .schemaType('contact')
                    .documentId('contact')
                )
                .icon(GoNote),
            ])
        ),
    ]);
