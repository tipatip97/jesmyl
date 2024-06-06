import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.5 5L15 5C16.8856 5 17.8284 5 18.4142 5.58579C19 6.17157 19 7.11438 19 9V12C19 13.8856 19 14.8284 18.4142 15.4142C17.8284 16 16.8856 16 15 16H12C10.1144 16 9.17157 16 8.58579 15.4142C8 14.8284 8 13.8856 8 12L8 8M6.5 5C5.67157 5 5 5.67157 5 6.5V8H8M6.5 5C7.32843 5 8 5.67157 8 6.5V8M17 16C17 17.8856 17 18.8284 16.4142 19.4142C15.8284 20 14.8856 20 13 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16L5 11',
  d2: 'M22 4V5C22 5.93188 22 6.39782 21.8478 6.76537C21.6448 7.25542 21.2554 7.64477 20.7654 7.84776C20.3978 8 19.9319 8 19 8M2 4V5C2 5.93188 2 6.39782 2.15224 6.76537C2.35523 7.25542 2.74458 7.64477 3.23463 7.84776C3.60218 8 4.06812 8 5 8',
  d3: 'M15 16H12C10.1144 16 9.17157 16 8.58579 15.4142C8 14.8284 8 13.8856 8 12L8 8V6.5C8 5.67157 7.32843 5 6.5 5L15 5C16.8856 5 17.8284 5 18.4142 5.58579C19 6.17157 19 7.11438 19 9V12C19 13.8856 19 14.8284 18.4142 15.4142C17.8284 16 16.8856 16 15 16Z',
  d4: 'M5 6.5C5 5.67157 5.67157 5 6.5 5C7.32843 5 8 5.67157 8 6.5V8H5V6.5Z',
  d5: 'M17 16C17 17.8856 17 18.8284 16.4142 19.4142C15.8284 20 14.8856 20 13 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16L5 11',
  d6: 'M6.5 5L15 5C16.8856 5 17.8284 5 18.4142 5.58579C19 6.17157 19 7.11438 19 9V12C19 13.8856 19 14.8284 18.4142 15.4142C17.8284 16 16.8856 16 15 16H12C10.1144 16 9.17157 16 8.58579 15.4142C8 14.8284 8 13.8856 8 12L8 8M6.5 5C5.67157 5 5 5.67157 5 6.5V8H8M6.5 5C7.32843 5 8 5.67157 8 6.5V8',
  d7: 'M14.97 4.375C15.8288 4.37495 16.5687 4.37491 17.1613 4.45473C17.7963 4.54027 18.405 4.73317 18.8988 5.22784C19.3925 5.72251 19.585 6.33238 19.6704 6.96862C19.7501 7.56229 19.75 8.30363 19.75 9.16405V12.2036C19.75 13.064 19.7501 13.8054 19.6704 14.399C19.585 15.0353 19.3925 15.6451 18.8988 16.1398C18.5768 16.4624 18.206 16.6566 17.8108 16.7765C17.8064 17.3478 17.7904 17.853 17.7329 18.2814C17.6475 18.9176 17.455 19.5275 16.9613 20.0222C16.4675 20.5168 15.8588 20.7097 15.2238 20.7953C14.6312 20.8751 13.8913 20.875 13.0325 20.875H9.03C8.17121 20.875 7.43126 20.8751 6.83871 20.7953C6.20367 20.7097 5.59496 20.5168 5.10123 20.0222C4.60749 19.5275 4.41496 18.9176 4.32958 18.2814C4.24991 17.6877 4.24995 16.9464 4.25 16.0859L4.25 11.1691C4.25 10.6331 4.68373 10.1985 5.21875 10.1985C5.75378 10.1985 6.1875 10.6331 6.1875 11.1691L6.1875 16.0221C6.1875 16.9646 6.18956 17.5738 6.2498 18.0227C6.30629 18.4437 6.3975 18.5757 6.47124 18.6495C6.54499 18.7234 6.67669 18.8148 7.09687 18.8714C7.54493 18.9318 8.15302 18.9338 9.09375 18.9338H12.9687C13.9095 18.9338 14.5176 18.9318 14.9656 18.8714C15.3858 18.8148 15.5175 18.7234 15.5913 18.6495C15.665 18.5757 15.7562 18.4437 15.8127 18.0227C15.8493 17.7501 15.8644 17.4183 15.8706 16.9887C15.5876 16.9927 15.2869 16.9927 14.97 16.9926H11.9362H11.9362C11.0774 16.9927 10.3375 16.9927 9.74495 16.9129C9.10992 16.8274 8.50121 16.6345 8.00747 16.1398C7.51374 15.6451 7.3212 15.0353 7.23583 14.399C7.15616 13.8054 7.1562 13.064 7.15625 12.2036V12.2036L7.15625 6.80147C7.15625 6.53345 6.93939 6.31618 6.67188 6.31618C6.40437 6.31618 6.1875 6.53345 6.1875 6.80147L6.1875 7.80115C6.1875 8.33719 5.75378 8.77173 5.21875 8.77173C4.68373 8.77173 4.25 8.33719 4.25 7.80115L4.25 6.80147C4.25 5.46137 5.33431 4.375 6.67188 4.375L14.97 4.375Z',
  d8: 'M3 4.125C3 3.57272 2.55229 3.125 2 3.125C1.44772 3.125 1 3.57272 1 4.125L1 5.15698C0.999989 5.59559 0.99998 5.97415 1.02135 6.28738C1.04386 6.61721 1.09336 6.94712 1.22836 7.27305C1.53285 8.00813 2.11687 8.59216 2.85195 8.89664C3.17788 9.03164 3.50779 9.08115 3.83762 9.10365C4.15088 9.12502 4.52936 9.12501 4.96801 9.125L8 9.125C8.55228 9.125 9 8.67728 9 8.125C9 7.57272 8.55228 7.125 8 7.125H5C4.52038 7.125 4.21074 7.12446 3.97376 7.10829C3.74576 7.09273 3.65893 7.06612 3.61732 7.04888C3.37229 6.94739 3.17762 6.75271 3.07612 6.50768C3.05888 6.46607 3.03227 6.37924 3.01671 6.15124C3.00054 5.91426 3 5.60462 3 5.125V4.125Z',
  d9: 'M23 4.125C23 3.57272 22.5523 3.125 22 3.125C21.4477 3.125 21 3.57272 21 4.125V5.125C21 5.60462 20.9995 5.91426 20.9833 6.15124C20.9677 6.37924 20.9411 6.46607 20.9239 6.50768C20.8224 6.75271 20.6277 6.94739 20.3827 7.04888C20.3411 7.06612 20.2542 7.09273 20.0262 7.10829C19.7893 7.12446 19.4796 7.125 19 7.125C18.4477 7.125 18 7.57272 18 8.125C18 8.67728 18.4477 9.125 19 9.125L19.032 9.125C19.4706 9.12501 19.8491 9.12502 20.1624 9.10365C20.4922 9.08115 20.8221 9.03164 21.1481 8.89664C21.8831 8.59216 22.4672 8.00813 22.7716 7.27305C22.9066 6.94712 22.9561 6.61721 22.9787 6.28738C23 5.97413 23 5.59564 23 5.15699V4.125Z',
  d10: 'M5 10C5.55229 10 6 10.4477 6 11L6 16C6 16.9711 6.00213 17.5988 6.06431 18.0613C6.12263 18.495 6.21677 18.631 6.2929 18.7071C6.36902 18.7832 6.50497 18.8774 6.93871 18.9357C7.40122 18.9979 8.02893 19 9 19H13C13.9711 19 14.5988 18.9979 15.0613 18.9357C15.495 18.8774 15.631 18.7832 15.7071 18.7071C15.7832 18.631 15.8774 18.495 15.9357 18.0613C15.9979 17.5988 16 16.9711 16 16C16 15.4477 16.4477 15 17 15C17.5523 15 18 15.4477 18 16L18 16.0658C18.0001 16.9523 18.0001 17.7161 17.9179 18.3278C17.8297 18.9833 17.631 19.6117 17.1213 20.1213C16.6117 20.631 15.9833 20.8297 15.3278 20.9179C14.7161 21.0001 13.9523 21.0001 13.0658 21H8.93417C8.04769 21.0001 7.28387 21.0001 6.67221 20.9179C6.0167 20.8297 5.38835 20.631 4.87868 20.1213C4.36902 19.6117 4.17028 18.9833 4.08215 18.3278C3.99991 17.7161 3.99995 16.9523 4 16.0658C4 16.044 4 16.022 4 16L4 11C4 10.4477 4.44772 10 5 10Z',
  d11: 'M17.3278 4.08215C16.7161 3.99991 15.9523 3.99995 15.0658 4L6.5 4C5.11929 4 4 5.11929 4 6.5V8C4 8.55229 4.44772 9 5 9H7L7 12.0658C6.99995 12.9523 6.99991 13.7161 7.08214 14.3278C7.17027 14.9833 7.36902 15.6117 7.87868 16.1213C8.38834 16.631 9.01669 16.8297 9.67221 16.9179C10.2839 17.0001 11.0477 17.0001 11.9342 17H15.0658C15.9523 17.0001 16.7161 17.0001 17.3278 16.9179C17.9833 16.8297 18.6117 16.631 19.1213 16.1213C19.631 15.6117 19.8297 14.9833 19.9179 14.3278C20.0001 13.7161 20.0001 12.9523 20 12.0658V8.93417C20.0001 8.04769 20.0001 7.28387 19.9179 6.67221C19.8297 6.0167 19.631 5.38835 19.1213 4.87868C18.6117 4.36902 17.9833 4.17028 17.3278 4.08215ZM7 7V6.5C7 6.22386 6.77614 6 6.5 6C6.22386 6 6 6.22386 6 6.5V7H7Z',
  d12: 'M2 3C2.55229 3 3 3.44772 3 4V5C3 5.47962 3.00054 5.78926 3.01671 6.02624C3.03227 6.25424 3.05888 6.34107 3.07612 6.38268C3.17762 6.62771 3.37229 6.82239 3.61732 6.92388C3.65893 6.94112 3.74576 6.96773 3.97376 6.98329C4.21074 6.99946 4.52038 7 5 7C5.55229 7 6 7.44772 6 8C6 8.55228 5.55229 9 5 9L4.96801 9C4.52936 9.00001 4.15088 9.00002 3.83762 8.97865C3.50779 8.95615 3.17788 8.90664 2.85195 8.77164C2.11687 8.46716 1.53284 7.88313 1.22836 7.14805C1.09336 6.82212 1.04386 6.49221 1.02135 6.16238C0.999977 5.84912 0.999988 5.47063 1 5.03198C1 5.02136 1 5.0107 1 5V4C1 3.44772 1.44772 3 2 3ZM22 3C22.5523 3 23 3.44772 23 4V5.03199C23 5.47064 23 5.84913 22.9787 6.16238C22.9561 6.49221 22.9066 6.82212 22.7716 7.14805C22.4672 7.88313 21.8831 8.46716 21.1481 8.77164C20.8221 8.90664 20.4922 8.95615 20.1624 8.97865C19.8491 9.00002 19.4706 9.00001 19.032 9L19 9C18.4477 9 18 8.55228 18 8C18 7.44772 18.4477 7 19 7C19.4796 7 19.7893 6.99946 20.0262 6.98329C20.2542 6.96773 20.3411 6.94112 20.3827 6.92388C20.6277 6.82239 20.8224 6.62771 20.9239 6.38268C20.9411 6.34107 20.9677 6.25424 20.9833 6.02624C20.9995 5.78926 21 5.47962 21 5V4C21 3.44772 21.4477 3 22 3Z',
  d13: 'M6.5 5H17C18.1046 5 19 5.89543 19 7V16H17M6.5 5C5.67157 5 5 5.67157 5 6.5V8H8M6.5 5C7.32843 5 8 5.67157 8 6.5V8M5 10.5V20H17V16M8 8V16H17',
  d14: 'M22 4V8H19M2 4V8H5',
  d15: 'M6.5 3.75C5.25736 3.75 4.25 4.75736 4.25 6V6.75H2.75V3.75H1.25V7.5C1.25 7.91421 1.58579 8.25 2 8.25H5.75V6C5.75 5.58579 6.08579 5.25 6.5 5.25C6.91421 5.25 7.25 5.58579 7.25 6V16.25H16.25V18.75H5.75V10H4.25V20.25H17.75V16.25H19.75V8.25H22C22.4142 8.25 22.75 7.91421 22.75 7.5V3.75H21.25V6.75H19.75V6.5C19.75 4.98122 18.5188 3.75 17 3.75H6.5Z',
};

export const IconTowelsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="towels-stroke-rounded IconTowelsStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTowelsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="towels-duotone-rounded IconTowelsDuotoneRounded"
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
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconTowelsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="towels-twotone-rounded IconTowelsTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTowelsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="towels-solid-rounded IconTowelsSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTowelsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="towels-bulk-rounded IconTowelsBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTowelsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="towels-stroke-sharp IconTowelsStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTowelsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="towels-solid-sharp IconTowelsSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTowels: TheIconSelfPack = {
  name: 'Towels',
  StrokeRounded: IconTowelsStrokeRounded,
  DuotoneRounded: IconTowelsDuotoneRounded,
  TwotoneRounded: IconTowelsTwotoneRounded,
  SolidRounded: IconTowelsSolidRounded,
  BulkRounded: IconTowelsBulkRounded,
  StrokeSharp: IconTowelsStrokeSharp,
  SolidSharp: IconTowelsSolidSharp,
};