import { DefaultTheme } from 'styled-components';

export const Theme = {
  blueColor: '#0F4C81',
  greenColor: '#22C263',
  lightGrayColor: '#E5E5E5',
  grayColor: '#C4C4C4',
  darkGrayColor: '#707070',
  blackColor: '#222224',
  whiteColor: '#FAFAFA',
  boxBorder: '1px solid #C4C4C4',
  borderRadius: '12px',
  borderRadiusSmall: '8px',
  Overlay: 'rgba(0, 0, 0, 0.6)',
  mediaSize: '576px',
};

export const lightTheme: DefaultTheme = {
  isLight: true,
  bgColor: Theme.whiteColor,
  text: Theme.darkGrayColor,
  lightGrayColor: Theme.lightGrayColor,
  grayColor: Theme.grayColor,
  darkGrayColor: Theme.darkGrayColor,
  whiteColor: Theme.whiteColor,
  blackColor: Theme.blackColor,
  blueColor: Theme.blueColor,
  greenColor: Theme.greenColor,
  reverseColor: Theme.blackColor,
  borderRadius: Theme.borderRadius,
  borderRadiusSmall: Theme.borderRadiusSmall,
  boxBorder: Theme.boxBorder,
  Overlay: Theme.Overlay,
  mediaSize: Theme.mediaSize,
};

export const darkTheme: DefaultTheme = {
  isLight: false,
  bgColor: Theme.blackColor,
  text: Theme.lightGrayColor,
  lightGrayColor: Theme.lightGrayColor,
  grayColor: Theme.grayColor,
  darkGrayColor: Theme.darkGrayColor,
  whiteColor: Theme.whiteColor,
  blackColor: Theme.blackColor,
  blueColor: Theme.blueColor,
  greenColor: Theme.greenColor,
  reverseColor: Theme.whiteColor,
  borderRadius: Theme.borderRadius,
  borderRadiusSmall: Theme.borderRadiusSmall,
  boxBorder: Theme.boxBorder,
  Overlay: Theme.Overlay,
  mediaSize: Theme.mediaSize,
};
