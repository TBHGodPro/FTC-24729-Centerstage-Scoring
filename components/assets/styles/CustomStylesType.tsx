import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type Styles = ViewStyle & TextStyle & ImageStyle;

export type CustomStylesType<T extends any> = {
  [P in keyof T]: Styles | ((...args: any[]) => Styles);
};

export type LayeredCustomStylesType<K extends any, T extends any> = {
  [I in keyof K]: CustomStylesType<T>;
};

export const s = StyleSheet.create;
