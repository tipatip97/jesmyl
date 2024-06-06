import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.7927 20.5894C8.32173 20.7602 5.87348 9.23635 7.55462 7.55498C9.23576 5.8736 20.7604 8.32015 20.5896 10.7911C20.472 12.4094 17.733 13.0495 17.813 14.4877C17.8364 14.9089 18.3685 15.2929 19.4327 16.0607C20.1722 16.5942 20.9262 17.1123 21.653 17.6629C21.9432 17.8827 22.0577 18.2522 21.9725 18.6006C21.5634 20.2737 20.2811 21.5616 18.6011 21.9725C18.2528 22.0577 17.8833 21.9431 17.6636 21.653C17.1131 20.926 16.595 20.1719 16.0615 19.4323C15.2938 18.368 14.91 17.8358 14.4888 17.8124C13.0508 17.7324 12.4107 20.4718 10.7927 20.5894Z',
  d2: 'M9.02968 3.5V2M5 5L4 4M3.5 9.02975H2M5 13L4 14M14 4L13 5',
  d3: 'M20.8011 9.4666C21.1735 9.83658 21.5058 10.3462 21.4629 10.9678L21.4627 10.9705C21.4173 11.5954 21.1181 12.0877 20.7837 12.4688C20.4635 12.8337 20.0636 13.1481 19.7336 13.4075C19.3726 13.6914 19.0803 13.924 18.8901 14.1451C18.7366 14.3235 18.6931 14.4413 18.6871 14.5296C18.7069 14.5574 18.7552 14.6171 18.8621 14.7144C19.092 14.9234 19.4488 15.1823 19.9965 15.5775C20.2319 15.7473 20.4738 15.919 20.7184 16.0927L20.7186 16.0929L20.7187 16.0929C21.2217 16.4501 21.7365 16.8155 22.2309 17.1901C22.779 17.6053 22.9762 18.2895 22.8261 18.9037C22.3507 20.8478 20.8567 22.3485 18.9043 22.826C18.2898 22.9763 17.6056 22.7788 17.1907 22.2307C16.8161 21.7362 16.4508 21.2214 16.0936 20.7183L16.0934 20.718C15.9198 20.4734 15.7481 20.2315 15.5782 19.9961C15.1831 19.4482 14.9243 19.0915 14.7153 18.8615C14.6181 18.7546 14.5584 18.7064 14.5306 18.6865C14.4424 18.6925 14.3247 18.736 14.1464 18.8895C13.9254 19.0797 13.6927 19.372 13.4089 19.7331L13.4089 19.7331C13.1495 20.0631 12.8352 20.4631 12.4704 20.7833C12.0893 21.1178 11.597 21.417 10.9721 21.4625L10.9694 21.4627C10.3479 21.5056 9.8382 21.1734 9.46818 20.801C9.09038 20.4208 8.75689 19.9013 8.46443 19.3264C7.87615 18.1699 7.37403 16.629 7.01095 15.061C6.64701 13.4892 6.41231 11.8446 6.37908 10.4681C6.3625 9.78135 6.39536 9.13721 6.49756 8.59169C6.59477 8.07284 6.77559 7.5234 7.14925 7.14969C7.52292 6.77597 8.07234 6.59507 8.59118 6.49779C9.1367 6.39551 9.78085 6.36256 10.4676 6.37903C11.8442 6.41206 13.4888 6.64652 15.0607 7.01022C16.6288 7.37307 18.1698 7.87496 19.3263 8.46306C19.9013 8.75544 20.4209 9.08885 20.8011 9.4666Z',
  d4: 'M9.15468 1.125C9.70697 1.125 10.1547 1.57272 10.1547 2.125V3.625C10.1547 4.17728 9.70697 4.625 9.15468 4.625C8.6024 4.625 8.15468 4.17728 8.15468 3.625V2.125C8.15468 1.57272 8.6024 1.125 9.15468 1.125ZM3.41789 3.41789C3.80842 3.02737 4.44158 3.02737 4.83211 3.41789L5.83211 4.41789C6.22263 4.80842 6.22263 5.44158 5.83211 5.83211C5.44158 6.22263 4.80842 6.22263 4.41789 5.83211L3.41789 4.83211C3.02737 4.44158 3.02737 3.80842 3.41789 3.41789ZM14.8321 3.41789C15.2226 3.80842 15.2226 4.44158 14.8321 4.83211L13.8321 5.83211C13.4416 6.22263 12.8084 6.22263 12.4179 5.83211C12.0274 5.44158 12.0274 4.80842 12.4179 4.41789L13.4179 3.41789C13.8084 3.02737 14.4416 3.02737 14.8321 3.41789ZM1.125 9.15475C1.125 8.60246 1.57272 8.15475 2.125 8.15475H3.625C4.17728 8.15475 4.625 8.60246 4.625 9.15475C4.625 9.70703 4.17728 10.1547 3.625 10.1547H2.125C1.57272 10.1547 1.125 9.70703 1.125 9.15475ZM5.83211 12.4179C6.22263 12.8084 6.22263 13.4416 5.83211 13.8321L4.83211 14.8321C4.44158 15.2226 3.80842 15.2226 3.41789 14.8321C3.02737 14.4416 3.02737 13.8084 3.41789 13.4179L4.41789 12.4179C4.80842 12.0274 5.44158 12.0274 5.83211 12.4179Z',
  d5: 'M21.9998 9.99994L7 7L9.99999 21.9994L14.5001 17.4997L19.0005 22L22 18.9996L17.4999 14.4995L21.9998 9.99994Z',
  d6: 'M9.02968 4V2M5.5 5.5L4 4M4 9.02975H2M5.5 12.5L4 14M14 4L12.5 5.5',
  d7: 'M6.46968 6.46968C6.647 6.29237 6.9012 6.2154 7.1471 6.26458L22.1469 9.26452C22.4181 9.31876 22.6375 9.51789 22.7177 9.78263C22.7978 10.0474 22.7257 10.3347 22.5301 10.5303L18.5606 14.4996L22.5303 18.4693C22.8232 18.7622 22.8232 19.237 22.5304 19.5299L19.5309 22.5303C19.3902 22.671 19.1994 22.75 19.0005 22.75C18.8016 22.75 18.6108 22.671 18.4701 22.5303L14.5001 18.5603L10.5303 22.5298C10.3347 22.7254 10.0474 22.7974 9.78266 22.7172C9.51794 22.6371 9.31882 22.4177 9.26457 22.1465L6.26458 7.1471C6.2154 6.90121 6.29236 6.647 6.46968 6.46968Z',
  d8: 'M9.27968 1.25V3.25H7.27968V1.25H9.27968ZM3.95711 2.54289L5.45711 4.04289L4.04289 5.45711L2.54289 3.95711L3.95711 2.54289ZM11.0429 4.04289L12.5429 2.54289L13.9571 3.95711L12.4571 5.45711L11.0429 4.04289ZM1.25 7.27975H3.25V9.27975H1.25V7.27975ZM2.54289 12.5429L4.04289 11.0429L5.45711 12.4571L3.95711 13.9571L2.54289 12.5429Z',
};

export const IconCursorMagicSelection01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-01-stroke-rounded IconCursorMagicSelection01StrokeRounded"
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

export const IconCursorMagicSelection01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-01-duotone-rounded IconCursorMagicSelection01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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

export const IconCursorMagicSelection01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-01-twotone-rounded IconCursorMagicSelection01TwotoneRounded"
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

export const IconCursorMagicSelection01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-01-solid-rounded IconCursorMagicSelection01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMagicSelection01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-01-bulk-rounded IconCursorMagicSelection01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMagicSelection01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-01-stroke-sharp IconCursorMagicSelection01StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMagicSelection01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-01-solid-sharp IconCursorMagicSelection01SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCursorMagicSelection01: TheIconSelfPack = {
  name: 'CursorMagicSelection01',
  StrokeRounded: IconCursorMagicSelection01StrokeRounded,
  DuotoneRounded: IconCursorMagicSelection01DuotoneRounded,
  TwotoneRounded: IconCursorMagicSelection01TwotoneRounded,
  SolidRounded: IconCursorMagicSelection01SolidRounded,
  BulkRounded: IconCursorMagicSelection01BulkRounded,
  StrokeSharp: IconCursorMagicSelection01StrokeSharp,
  SolidSharp: IconCursorMagicSelection01SolidSharp,
};