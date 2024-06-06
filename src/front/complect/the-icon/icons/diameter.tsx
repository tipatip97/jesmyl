import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.5 12H19',
  d2: 'M10.5 12H5',
  d3: 'M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z',
  d4: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z',
  d5: 'M7.00977 14C6.48977 13.48 4.99977 12.5 4.99977 12C4.99977 11.5 6.50977 10.5 7.00977 10',
  d6: 'M17 10C17.52 10.52 19.01 11.5 19.01 12C19.01 12.5 17.5 13.5 17 14',
  d7: 'M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12Z',
  d8: 'M7.01 14C6.49 13.48 5 12.5 5 12C5 11.5 6.51 10.5 7.01 10',
  d9: 'M16.9902 10C17.5102 10.52 19.0002 11.5 19.0002 12C19.0002 12.5 17.4902 13.5 16.9902 14',
  d10: 'M13.4951 12H18.9951M13.4951 12C13.4951 11.1716 12.8235 10.5 11.9951 10.5C11.1667 10.5 10.4951 11.1716 10.4951 12M13.4951 12C13.4951 12.8284 12.8235 13.5 11.9951 13.5C11.1667 13.5 10.4951 12.8284 10.4951 12M10.4951 12H4.99512M4.99512 12C4.99512 12.5 6.48489 13.48 7.00489 14M4.99512 12C4.99512 11.5 6.50489 10.5 7.00489 10M16.9951 10C17.5151 10.52 19.0051 11.5 19.0051 12C19.0051 12.5 17.4951 13.5 16.9951 14',
  d11: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12ZM17.4869 14.5705C17.1719 14.8394 16.6985 14.802 16.4295 14.4869C16.3089 14.3456 16.2499 14.1723 16.25 14V13.0001H14.0161C13.6479 13.7409 12.8834 14.2501 12 14.2501C11.1166 14.2501 10.3521 13.7409 9.98388 13.0001H7.75001V14C7.75011 14.1723 7.69112 14.3456 7.57045 14.487C7.30154 14.802 6.82814 14.8394 6.51309 14.5705L5.30921 13.5429C5.06118 13.3313 4.82042 13.1259 4.64794 12.9329C4.45843 12.7209 4.25 12.4155 4.25 12C4.25 11.5845 4.45843 11.2792 4.64794 11.0672C4.82042 10.8742 5.06117 10.6688 5.30921 10.4572L6.51309 9.42959C6.82814 9.16068 7.30154 9.19808 7.57045 9.51313C7.69109 9.65447 7.75009 9.82768 7.75001 10V11.0001H9.98388C10.3521 10.2592 11.1166 9.75006 12 9.75006C12.8834 9.75006 13.6479 10.2592 14.0161 11.0001H16.25V10C16.2499 9.82767 16.3089 9.65445 16.4295 9.5131C16.6985 9.19805 17.1719 9.16065 17.4869 9.42956L18.6908 10.4571C18.9388 10.6688 19.1796 10.8742 19.3521 11.0671C19.5416 11.2791 19.75 11.5845 19.75 12C19.75 12.4155 19.5416 12.7209 19.3521 12.9329C19.1796 13.1259 18.9388 13.3313 18.6908 13.5429L17.4869 14.5705Z',
  d12: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25Z',
  d13: 'M16.4295 14.4869C16.6985 14.802 17.1719 14.8394 17.4869 14.5705L18.6908 13.5429C18.9388 13.3313 19.1796 13.1259 19.3521 12.9329C19.5416 12.7209 19.75 12.4155 19.75 12C19.75 11.5845 19.5416 11.2791 19.3521 11.0671C19.1796 10.8742 18.9388 10.6688 18.6908 10.4571L17.4869 9.42956C17.1719 9.16065 16.6985 9.19805 16.4295 9.5131C16.3089 9.65445 16.2499 9.82767 16.25 10V11.0001H14.0161C13.6479 10.2592 12.8834 9.75006 12 9.75006C11.1166 9.75006 10.3521 10.2592 9.98388 11.0001H7.75001V10C7.75009 9.82768 7.69109 9.65447 7.57045 9.51313C7.30154 9.19808 6.82814 9.16068 6.51309 9.42959L5.30921 10.4572C5.06117 10.6688 4.82042 10.8742 4.64794 11.0672C4.45843 11.2792 4.25 11.5845 4.25 12C4.25 12.4155 4.45843 12.7209 4.64794 12.9329C4.82042 13.1259 5.06118 13.3313 5.30921 13.5429L6.51309 14.5705C6.82814 14.8394 7.30154 14.802 7.57045 14.487C7.69112 14.3456 7.75011 14.1723 7.75001 14V13.0001H9.98388C10.3521 13.7409 11.1166 14.2501 12 14.2501C12.8834 14.2501 13.6479 13.7409 14.0161 13.0001H16.25V14C16.2499 14.1723 16.3089 14.3456 16.4295 14.4869Z',
  d14: 'M16 9L19 12L16 15',
  d15: 'M7.9959 14.993L5.00293 11.9999L7.9959 8.99805',
  d16: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12ZM9.12132 9.70718L7.70711 8.29297L4 12.0001L7.70711 15.7072L9.12132 14.293L7.82835 13H9.98388C10.3521 13.7409 11.1166 14.25 12 14.25C12.8834 14.25 13.6479 13.7409 14.0161 13H16.1716L14.8787 14.293L16.2929 15.7072L20 12.0001L16.2929 8.29297L14.8787 9.70718L16.1715 11H14.0161C13.6479 10.2591 12.8834 9.75 12 9.75C11.1166 9.75 10.3521 10.2591 9.98388 11H7.8285L9.12132 9.70718Z',
};

export const IconDiameterStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diameter-stroke-rounded IconDiameterStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiameterDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diameter-duotone-rounded IconDiameterDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiameterTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diameter-twotone-rounded IconDiameterTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiameterSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diameter-solid-rounded IconDiameterSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiameterBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diameter-bulk-rounded IconDiameterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiameterStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diameter-stroke-sharp IconDiameterStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiameterSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diameter-solid-sharp IconDiameterSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDiameter: TheIconSelfPack = {
  name: 'Diameter',
  StrokeRounded: IconDiameterStrokeRounded,
  DuotoneRounded: IconDiameterDuotoneRounded,
  TwotoneRounded: IconDiameterTwotoneRounded,
  SolidRounded: IconDiameterSolidRounded,
  BulkRounded: IconDiameterBulkRounded,
  StrokeSharp: IconDiameterStrokeSharp,
  SolidSharp: IconDiameterSolidSharp,
};