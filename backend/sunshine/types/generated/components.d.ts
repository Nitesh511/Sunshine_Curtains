import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductsProducts extends Schema.Component {
  collectionName: 'components_products_products';
  info: {
    displayName: 'productsdetails';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    title1: Attribute.String;
    imgtext1: Attribute.String;
    imgtext2: Attribute.String;
    buttontext: Attribute.String;
    title2: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'products.products': ProductsProducts;
    }
  }
}
