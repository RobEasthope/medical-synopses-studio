import S from '@sanity/desk-tool/structure-builder';

import { GoMailRead } from 'react-icons/go';
import { GrUserSettings, GrTextWrap } from 'react-icons/gr';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { IoMdMedical } from 'react-icons/io';

// const hiddenTypes = ['about'];

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Synopses')
        .schemaType('synopsis')
        .icon(IoMdMedical)
        .child(S.documentTypeList('synopsis')),
      S.listItem()
        .title('Pages')
        .icon(GrTextWrap)
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
                .icon(GiPlagueDoctorProfile),
              S.listItem()
                .title('Contact page')
                .child(
                  S.editor()
                    .id('contact')
                    .schemaType('contact')
                    .documentId('contact')
                )
                .icon(GoMailRead),
            ])
        ),
      S.listItem()
        .title('settings')
        .schemaType('settings')
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
        )
        .icon(GrUserSettings),
    ]);
