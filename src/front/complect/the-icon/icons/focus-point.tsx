import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.13432 2.5C6.46805 2.56075 4.9107 2.81456 3.84664 3.87493C2.91537 4.80297 2.60406 6.10756 2.5 8.2M14.8657 2.5C17.532 2.56075 19.0893 2.81456 20.1534 3.87493C21.0846 4.80297 21.3959 6.10756 21.5 8.2M14.8657 21.5C17.532 21.4392 19.0893 21.1854 20.1534 20.1251C21.0846 19.197 21.3959 17.8924 21.5 15.8M9.13432 21.5C6.46805 21.4392 4.9107 21.1854 3.84664 20.1251C2.91537 19.197 2.60406 17.8924 2.5 15.8',
  d2: 'M11.5 7L12.5 7M11.5 12H12.5M11.5 17H12.5M5 12H6M18 12H19',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d4: 'M10.1341 2.47723C10.1466 3.02937 9.70925 3.48716 9.15711 3.49974C6.45364 3.56134 5.29953 3.83885 4.55254 4.58326C3.90785 5.22571 3.60144 6.18551 3.49878 8.24967C3.47135 8.80128 3.00195 9.2262 2.45035 9.19877C1.89875 9.17133 1.47382 8.70193 1.50126 8.15033C1.60672 6.02962 1.92292 4.38024 3.14078 3.1666C4.5219 1.79027 6.48248 1.56017 9.11155 1.50026C9.66369 1.48768 10.1215 1.92508 10.1341 2.47723ZM13.8659 2.47723C13.8785 1.92508 14.3363 1.48768 14.8884 1.50026C17.5175 1.56017 19.4781 1.79027 20.8592 3.1666C22.0771 4.38024 22.3933 6.02962 22.4987 8.15033C22.5262 8.70193 22.1013 9.17133 21.5497 9.19877C20.998 9.2262 20.5286 8.80128 20.5012 8.24967C20.3986 6.18551 20.0921 5.22571 19.4475 4.58326C18.7005 3.83885 17.5464 3.56134 14.8429 3.49974C14.2907 3.48716 13.8533 3.02937 13.8659 2.47723ZM2.45035 14.8012C3.00195 14.7738 3.47135 15.1987 3.49878 15.7503C3.60144 17.8145 3.90785 18.7743 4.55254 19.4167C5.29953 20.1611 6.45364 20.4387 9.15711 20.5003C9.70925 20.5128 10.1466 20.9706 10.1341 21.5228C10.1215 22.0749 9.66369 22.5123 9.11155 22.4997C6.48248 22.4398 4.5219 22.2097 3.14078 20.8334C1.92292 19.6198 1.60672 17.9704 1.50126 15.8497C1.47382 15.2981 1.89875 14.8287 2.45035 14.8012ZM21.5497 14.8012C22.1013 14.8287 22.5262 15.2981 22.4987 15.8497C22.3933 17.9704 22.0771 19.6198 20.8592 20.8334C19.4781 22.2097 17.5175 22.4398 14.8884 22.4997C14.3363 22.5123 13.8785 22.0749 13.8659 21.5228C13.8533 20.9706 14.2907 20.5128 14.8429 20.5003C17.5464 20.4387 18.7005 20.1611 19.4475 19.4167C20.0921 18.7743 20.3986 17.8145 20.5012 15.7503C20.5286 15.1987 20.998 14.7738 21.5497 14.8012Z',
  d5: 'M10.5 7C10.5 6.44771 10.9477 6 11.5 6L12.5 6C13.0523 6 13.5 6.44772 13.5 7C13.5 7.55228 13.0523 8 12.5 8H11.5C10.9477 8 10.5 7.55228 10.5 7ZM4 12C4 11.4477 4.44771 11 5 11H6C6.55228 11 6.99999 11.4477 6.99999 12C6.99999 12.5523 6.55228 13 6 13H5C4.44771 13 4 12.5523 4 12ZM10.5 12C10.5 11.4477 10.9477 11 11.5 11H12.5C13.0523 11 13.5 11.4477 13.5 12C13.5 12.5523 13.0523 13 12.5 13H11.5C10.9477 13 10.5 12.5523 10.5 12ZM17 12C17 11.4477 17.4477 11 18 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H18C17.4477 13 17 12.5523 17 12ZM10.5 17C10.5 16.4477 10.9477 16 11.5 16H12.5C13.0523 16 13.5 16.4477 13.5 17C13.5 17.5523 13.0523 18 12.5 18H11.5C10.9477 18 10.5 17.5523 10.5 17Z',
  d6: 'M10.1341 2.47723C10.1467 3.02937 9.70927 3.48717 9.15713 3.49975C6.45365 3.56134 5.29954 3.83886 4.55254 4.58326C3.90786 5.22571 3.60144 6.18551 3.49879 8.24968C3.47136 8.80128 3.00195 9.2262 2.45035 9.19877C1.89875 9.17134 1.47382 8.70194 1.50126 8.15033C1.60672 6.02963 1.92292 4.38024 3.14079 3.1666C4.5219 1.79027 6.48249 1.56017 9.11157 1.50026C9.66371 1.48768 10.1215 1.92508 10.1341 2.47723ZM13.866 2.47723C13.8785 1.92508 14.3363 1.48768 14.8885 1.50026C17.5176 1.56017 19.4781 1.79027 20.8593 3.1666C22.0771 4.38024 22.3933 6.02963 22.4988 8.15033C22.5262 8.70194 22.1013 9.17134 21.5497 9.19877C20.9981 9.2262 20.5287 8.80128 20.5013 8.24968C20.3986 6.18551 20.0922 5.22571 19.4475 4.58326C18.7005 3.83886 17.5464 3.56134 14.8429 3.49975C14.2908 3.48717 13.8534 3.02937 13.866 2.47723ZM2.45035 14.8012C3.00195 14.7738 3.47136 15.1987 3.49879 15.7503C3.60144 17.8145 3.90786 18.7743 4.55254 19.4167C5.29954 20.1612 6.45365 20.4387 9.15713 20.5003C9.70927 20.5128 10.1467 20.9706 10.1341 21.5228C10.1215 22.0749 9.66371 22.5123 9.11157 22.4997C6.48249 22.4398 4.5219 22.2097 3.14079 20.8334C1.92292 19.6198 1.60673 17.9704 1.50126 15.8497C1.47382 15.2981 1.89875 14.8287 2.45035 14.8012ZM21.5497 14.8012C22.1013 14.8287 22.5262 15.2981 22.4988 15.8497C22.3933 17.9704 22.0771 19.6198 20.8593 20.8334C19.4781 22.2097 17.5176 22.4398 14.8885 22.4997C14.3363 22.5123 13.8785 22.0749 13.866 21.5228C13.8534 20.9706 14.2908 20.5128 14.8429 20.5003C17.5464 20.4387 18.7005 20.1612 19.4475 19.4167C20.0922 18.7743 20.3986 17.8145 20.5013 15.7503C20.5287 15.1987 20.9981 14.7738 21.5497 14.8012Z',
  d7: 'M10.5 7C10.5 6.44772 10.9477 6 11.5 6L12.5 6C13.0523 6 13.5 6.44772 13.5 7C13.5 7.55228 13.0523 8 12.5 8H11.5C10.9477 8 10.5 7.55228 10.5 7ZM4 12C4 11.4477 4.44772 11 5 11H6C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H5C4.44772 13 4 12.5523 4 12ZM10.5 12C10.5 11.4477 10.9477 11 11.5 11H12.5C13.0523 11 13.5 11.4477 13.5 12C13.5 12.5523 13.0523 13 12.5 13H11.5C10.9477 13 10.5 12.5523 10.5 12ZM17 12C17 11.4477 17.4477 11 18 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H18C17.4477 13 17 12.5523 17 12ZM10.5 17C10.5 16.4477 10.9477 16 11.5 16H12.5C13.0523 16 13.5 16.4477 13.5 17C13.5 17.5523 13.0523 18 12.5 18H11.5C10.9477 18 10.5 17.5523 10.5 17Z',
  d8: 'M9 2.5L2.5 2.50011L2.50009 8M15.0001 2.50021L21.5001 2.5V8M15.0001 21.5002H21.5001V16M9 21.5002L2.50153 21.5V16',
  d9: 'M10.5 7H13.5M10.5 12H13.5M10.5 17H13.5M4 12H7M17 12H20',
  d10: 'M13.5 8H10.5V6H13.5V8ZM7 13H4V11H7V13ZM13.5 13H10.5V11H13.5V13ZM20 13H17V11H20V13ZM13.5 18H10.5V16H13.5V18Z',
  d11: 'M22.2499 1.74988V8.09507H20.2975V3.7023L14.9286 3.70247L14.9285 1.75011L22.2499 1.74988ZM9.07134 1.74991L9.07138 3.70227L3.70239 3.70236L3.70247 8.09506L1.75011 8.09509L1.75 1.75003L9.07134 1.74991ZM1.75151 15.9045H3.70387V20.2973L9.07139 20.2975L9.07133 22.2499L1.75151 22.2496V15.9045ZM20.2975 20.2975V15.9045H22.2499V22.2499H14.9285V20.2975H20.2975Z',
};

export const IconFocusPointStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="focus-point-stroke-rounded IconFocusPointStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFocusPointDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="focus-point-duotone-rounded IconFocusPointDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconFocusPointTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="focus-point-twotone-rounded IconFocusPointTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFocusPointSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="focus-point-solid-rounded IconFocusPointSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFocusPointBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="focus-point-bulk-rounded IconFocusPointBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFocusPointStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="focus-point-stroke-sharp IconFocusPointStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFocusPointSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="focus-point-solid-sharp IconFocusPointSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFocusPoint: TheIconSelfPack = {
  name: 'FocusPoint',
  StrokeRounded: IconFocusPointStrokeRounded,
  DuotoneRounded: IconFocusPointDuotoneRounded,
  TwotoneRounded: IconFocusPointTwotoneRounded,
  SolidRounded: IconFocusPointSolidRounded,
  BulkRounded: IconFocusPointBulkRounded,
  StrokeSharp: IconFocusPointStrokeSharp,
  SolidSharp: IconFocusPointSolidSharp,
};