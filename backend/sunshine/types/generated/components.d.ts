import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductsProducts extends Schema.Component {
  collectionName: 'components_products_products';
  info: {
    displayName: 'products';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    des: Attribute.RichText;
    buttontext: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'products.products': ProductsProducts;
    }
  }
}
