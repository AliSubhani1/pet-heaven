// This file will be used for exporting the constants

export enum Navigation {
  HOME = '/',
  CONTACT = '/contact',
  PetDetails = '/pet-details',
  PetCare = '/pet-care',
  ABOUT = '/about',
}

export const BASE_URL =
  'https://d0d70d41-858e-4b30-89b0-3b6a3dd32625.mock.pstmn.io/';


export const navbarItems = [
    {title: 'Home', path: '/'},
    {title: 'Pet Care', path: '/pet-care'},
    {title: 'Contact', path: '/contact'},
    {title: 'About', path: '/about'},
]