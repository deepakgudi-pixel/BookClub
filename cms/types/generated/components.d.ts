import type { Schema, Attribute } from '@strapi/strapi';

export interface InformationBookInfo extends Schema.Component {
  collectionName: 'components_information_book_infos';
  info: {
    displayName: 'BookInfo';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    poster: Attribute.Media;
    author: Attribute.Relation<
      'information.book-info',
      'oneToOne',
      'api::author.author'
    >;
    bookName: Attribute.Relation<
      'information.book-info',
      'oneToOne',
      'api::book.book'
    >;
    published: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'information.book-info': InformationBookInfo;
    }
  }
}
