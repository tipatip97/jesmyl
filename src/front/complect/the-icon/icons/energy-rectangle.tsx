import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z',
  d2: 'M8.12901 11.5977L12.128 6.20791C12.4408 5.78638 13.027 6.04874 13.027 6.61024V10.782C13.027 11.1183 13.2569 11.391 13.5405 11.391H15.4855C15.9274 11.391 16.1629 12.0089 15.871 12.4023L11.872 17.7921C11.5592 18.2136 10.973 17.9513 10.973 17.3898V13.218C10.973 12.8817 10.7431 12.609 10.4595 12.609H8.51449C8.07264 12.609 7.83711 11.9911 8.12901 11.5977Z',
  d3: 'M3.69797 4.25276C2.5 5.6554 2.5 7.77027 2.5 12C2.5 16.2297 2.5 18.3446 3.69797 19.7472C3.86808 19.9464 4.05358 20.1319 4.25276 20.302C5.6554 21.5 7.77027 21.5 12 21.5C16.2297 21.5 18.3446 21.5 19.7472 20.302C19.9464 20.1319 20.1319 19.9464 20.302 19.7472C21.5 18.3446 21.5 16.2297 21.5 12C21.5 7.77027 21.5 5.6554 20.302 4.25276C20.1319 4.05358 19.9464 3.86808 19.7472 3.69797C18.3446 2.5 16.2297 2.5 12 2.5C7.77027 2.5 5.6554 2.5 4.25276 3.69797C4.05358 3.86808 3.86808 4.05358 3.69797 4.25276ZM12.128 6.20791L8.12901 11.5977C7.83711 11.9911 8.07264 12.609 8.51449 12.609H10.4595C10.7431 12.609 10.973 12.8817 10.973 13.218V17.3898C10.973 17.9513 11.5592 18.2136 11.872 17.7921L15.871 12.4023C16.1629 12.0089 15.9274 11.391 15.4855 11.391H13.5405C13.2569 11.391 13.027 11.1183 13.027 10.782V6.61024C13.027 6.04874 12.4408 5.78638 12.128 6.20791Z',
  d4: 'M17.0242 1.90522C15.7462 1.74998 14.0202 1.74999 11.9487 1.75C9.87731 1.74999 8.25376 1.74998 6.97578 1.90522C5.66982 2.06386 4.62456 2.39411 3.76567 3.12767C3.53662 3.3233 3.3233 3.53662 3.12767 3.76567C2.39411 4.62456 2.06386 5.66982 1.90522 6.97578C1.74998 8.25376 1.74999 9.97982 1.75 12.0513C1.74999 14.1227 1.74998 15.7462 1.90522 17.0242C2.06386 18.3302 2.39411 19.3754 3.12767 20.2343C3.32329 20.4634 3.53662 20.6767 3.76567 20.8723C4.62456 21.6059 5.66982 21.9361 6.97578 22.0948C8.25376 22.25 9.97982 22.25 12.0513 22.25C14.1227 22.25 15.7462 22.25 17.0242 22.0948C18.3302 21.9361 19.3754 21.6059 20.2343 20.8723C20.4634 20.6767 20.6767 20.4634 20.8723 20.2343C21.6059 19.3754 21.9361 18.3302 22.0948 17.0242C22.25 15.7462 22.25 14.1227 22.25 12.0513C22.25 9.97982 22.25 8.25376 22.0948 6.97578C21.9361 5.66982 21.6059 4.62456 20.8723 3.76567C20.6767 3.53662 20.4634 3.32329 20.2343 3.12767C19.3754 2.39411 18.3302 2.06386 17.0242 1.90522ZM13.7768 6.61028C13.7768 6.06058 13.4801 5.57035 13.0009 5.35591C12.4938 5.12895 11.8913 5.26801 11.5255 5.76105L7.52647 11.1508C7.20753 11.5807 7.18968 12.1091 7.34555 12.518C7.50024 12.9239 7.89708 13.3591 8.51426 13.3591H10.2228V17.3898C10.2228 17.9395 10.5195 18.4297 10.9986 18.6442C11.5057 18.8711 12.1083 18.7321 12.4741 18.239L16.4731 12.8493C16.792 12.4194 16.8099 11.891 16.654 11.482C16.4993 11.0762 16.1025 10.641 15.4853 10.641H13.7768V6.61028Z',
  d5: 'M11.9487 1.75C14.0202 1.74999 15.7462 1.74998 17.0242 1.90522C18.3302 2.06386 19.3754 2.39411 20.2343 3.12767C20.4634 3.32329 20.6767 3.53662 20.8723 3.76567C21.6059 4.62456 21.9361 5.66982 22.0948 6.97578C22.25 8.25376 22.25 9.97982 22.25 12.0513C22.25 14.1227 22.25 15.7462 22.0948 17.0242C21.9361 18.3302 21.6059 19.3754 20.8723 20.2343C20.6767 20.4634 20.4634 20.6767 20.2343 20.8723C19.3754 21.6059 18.3302 21.9361 17.0242 22.0948C15.7462 22.25 14.1227 22.25 12.0513 22.25C9.97982 22.25 8.25376 22.25 6.97578 22.0948C5.66982 21.9361 4.62456 21.6059 3.76567 20.8723C3.53662 20.6767 3.32329 20.4634 3.12767 20.2343C2.39411 19.3754 2.06386 18.3302 1.90522 17.0242C1.74998 15.7462 1.74999 14.1227 1.75 12.0513C1.74999 9.97982 1.74998 8.25376 1.90522 6.97578C2.06386 5.66982 2.39411 4.62456 3.12767 3.76567C3.3233 3.53662 3.53662 3.3233 3.76567 3.12767C4.62456 2.39411 5.66982 2.06386 6.97578 1.90522C8.25376 1.74998 9.87731 1.74999 11.9487 1.75Z',
  d6: 'M13.0009 5.35591C13.4801 5.57035 13.7768 6.06058 13.7768 6.61028V10.641H15.4853C16.1025 10.641 16.4993 11.0762 16.654 11.482C16.8099 11.891 16.792 12.4194 16.4731 12.8493L12.4741 18.239C12.1083 18.7321 11.5057 18.8711 10.9986 18.6442C10.5195 18.4297 10.2228 17.9395 10.2228 17.3898V13.3591H8.51426C7.89708 13.3591 7.50024 12.9239 7.34555 12.518C7.18968 12.1091 7.20753 11.5807 7.52647 11.1508L11.5255 5.76105C11.8913 5.26801 12.4938 5.12895 13.0009 5.35591Z',
  d7: 'M21 3H3V21H21V3Z',
  d8: 'M8 12.5L12.9999 6V11.5H15.9999L10.9999 18V12.5H8Z',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM13.7499 6.00005C13.7499 5.6789 13.5454 5.3934 13.2414 5.28999C12.9374 5.18658 12.6012 5.28822 12.4054 5.54277L7.40553 12.0428C7.23133 12.2692 7.20093 12.575 7.32715 12.8314C7.45337 13.0877 7.71428 13.25 8.00001 13.25H10.2499V18C10.2499 18.3212 10.4544 18.6067 10.7584 18.7101C11.0624 18.8135 11.3986 18.7119 11.5944 18.4573L16.5944 11.9573C16.7686 11.7309 16.799 11.4251 16.6728 11.1687C16.5465 10.9124 16.2856 10.75 15.9999 10.75H13.7499V6.00005Z',
};

export const IconEnergyRectangleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="energy-rectangle-stroke-rounded IconEnergyRectangleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEnergyRectangleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="energy-rectangle-duotone-rounded IconEnergyRectangleDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEnergyRectangleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="energy-rectangle-twotone-rounded IconEnergyRectangleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEnergyRectangleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="energy-rectangle-solid-rounded IconEnergyRectangleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEnergyRectangleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="energy-rectangle-bulk-rounded IconEnergyRectangleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEnergyRectangleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="energy-rectangle-stroke-sharp IconEnergyRectangleStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEnergyRectangleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="energy-rectangle-solid-sharp IconEnergyRectangleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEnergyRectangle: TheIconSelfPack = {
  name: 'EnergyRectangle',
  StrokeRounded: IconEnergyRectangleStrokeRounded,
  DuotoneRounded: IconEnergyRectangleDuotoneRounded,
  TwotoneRounded: IconEnergyRectangleTwotoneRounded,
  SolidRounded: IconEnergyRectangleSolidRounded,
  BulkRounded: IconEnergyRectangleBulkRounded,
  StrokeSharp: IconEnergyRectangleStrokeSharp,
  SolidSharp: IconEnergyRectangleSolidSharp,
};