import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 17.4C21 19.0971 21 19.9456 20.3491 20.4728C19.6983 21 18.6507 21 16.5556 21H15.4444C13.3493 21 12.3017 21 11.6509 20.4728C11 19.9456 11 19.0971 11 17.4L11 6.6C11 4.90294 11 4.05442 11.6509 3.52721C12.3017 3 13.3493 3 15.4444 3L16.5556 3C18.6507 3 19.6983 3 20.3491 3.52721C21 4.05442 21 4.90294 21 6.6L21 17.4Z',
  d2: 'M3 5.04096C3 4.07884 3 3.59778 3.29289 3.29889C3.58579 3 4.05719 3 5 3C5.94281 3 6.41421 3 6.70711 3.29889C7 3.59778 7 4.07884 7 5.04096L7 15.8877C7 16.7952 7 17.2489 6.92429 17.6878C6.855 18.0895 6.73877 18.4813 6.57807 18.8547C6.40249 19.2628 6.15585 19.6403 5.66258 20.3954C5.44279 20.7318 5.33289 20.9 5.19487 20.9597C5.0703 21.0134 4.9297 21.0134 4.80513 20.9597C4.66711 20.9 4.55721 20.7318 4.33742 20.3954C3.84415 19.6403 3.59751 19.2628 3.42193 18.8548C3.26123 18.4813 3.14499 18.0895 3.07571 17.6878C3 17.2489 3 16.7952 3 15.8877L3 5.04096Z',
  d3: 'M11.5 16.5L13.5 16.5',
  d4: 'M11.5 12L13.5 12',
  d5: 'M11.5 7.5L13.5 7.5',
  d6: 'M7 7C7 7.55228 6.10457 8 5 8C3.89543 8 3 7.55228 3 7',
  d7: 'M21 17.4C21 19.0971 21 19.9456 20.3491 20.4728C19.6983 21 18.6507 21 16.5556 21H15.4444C13.3493 21 12.3017 21 11.6509 20.4728C11 19.9456 11 19.0971 11 17.4V6.6C11 4.90294 11 4.05442 11.6509 3.52721C12.3017 3 13.3493 3 15.4444 3H16.5556C18.6507 3 19.6983 3 20.3491 3.52721C21 4.05442 21 4.90294 21 6.6V17.4Z',
  d8: 'M11.5 16.5H13.5',
  d9: 'M11.5 12H13.5',
  d10: 'M11.5 7.5H13.5',
  d11: 'M7 7C7 7.55228 6.10457 8 5 8C3.89543 8 3 7.55228 3 7M3 5.04096C3 4.07884 3 3.59778 3.29289 3.29889C3.58579 3 4.05719 3 5 3C5.94281 3 6.41421 3 6.70711 3.29889C7 3.59778 7 4.07884 7 5.04096V15.8877C7 16.7952 7 17.2489 6.92429 17.6878C6.855 18.0895 6.73877 18.4813 6.57807 18.8547C6.40249 19.2628 6.15585 19.6403 5.66258 20.3954C5.44279 20.7318 5.33289 20.9 5.19487 20.9597C5.0703 21.0134 4.9297 21.0134 4.80513 20.9597C4.66711 20.9 4.55721 20.7318 4.33742 20.3954C3.84415 19.6403 3.59751 19.2628 3.42193 18.8548C3.26123 18.4813 3.14499 18.0895 3.07571 17.6878C3 17.2489 3 16.7952 3 15.8877V5.04096Z',
  d12: 'M16.5998 2.25H15.4002C14.3902 2.24999 13.5707 2.24998 12.9249 2.32031C12.2614 2.39256 11.6679 2.54823 11.1788 2.94441C10.6669 3.35907 10.4421 3.89598 10.3415 4.5021C10.2499 5.05392 10.2499 5.74286 10.25 6.53989L10.25 6.6C10.25 6.68284 10.3172 6.75 10.4 6.75H12.5C12.9142 6.75 13.25 7.08579 13.25 7.5C13.25 7.91421 12.9142 8.25 12.5 8.25L10.85 8.25C10.5672 8.25 10.4257 8.25 10.3379 8.33787C10.25 8.42574 10.25 8.56716 10.25 8.85L10.25 10.65C10.25 10.9328 10.25 11.0743 10.3379 11.1621C10.4257 11.25 10.5672 11.25 10.85 11.25H12.5C12.9142 11.25 13.25 11.5858 13.25 12C13.25 12.4142 12.9142 12.75 12.5 12.75H10.85C10.5672 12.75 10.4257 12.75 10.3379 12.8379C10.25 12.9257 10.25 13.0672 10.25 13.35L10.25 15.15C10.25 15.4328 10.25 15.5743 10.3379 15.6621C10.4257 15.75 10.5672 15.75 10.85 15.75H12.5C12.9142 15.75 13.25 16.0858 13.25 16.5C13.25 16.9142 12.9142 17.25 12.5 17.25H10.4601C10.3441 17.25 10.25 17.3441 10.25 17.4601C10.2499 18.2571 10.2499 18.9461 10.3415 19.4979C10.4421 20.104 10.6669 20.6409 11.1788 21.0556C11.6679 21.4518 12.2614 21.6074 12.9249 21.6797C13.5707 21.75 14.3902 21.75 15.4002 21.75H16.5998C17.6098 21.75 18.4293 21.75 19.0751 21.6797C19.7386 21.6074 20.3321 21.4518 20.8212 21.0556C21.3331 20.6409 21.5579 20.104 21.6585 19.4979C21.7501 18.9461 21.7501 18.2571 21.75 17.4601L21.75 6.53991C21.7501 5.74288 21.7501 5.05392 21.6585 4.50211C21.5579 3.89598 21.3331 3.35908 20.8212 2.94441C20.3321 2.54823 19.7386 2.39256 19.0751 2.32031C18.4293 2.24998 17.6098 2.24999 16.5998 2.25Z',
  d13: 'M4.95464 2.25C4.52238 2.24995 4.12462 2.2499 3.80079 2.29433C3.4425 2.34349 3.0656 2.45928 2.75722 2.77397C2.45092 3.08655 2.34025 3.46494 2.29304 3.82326C2.24991 4.15064 2.24996 4.55376 2.25 4.99659L2.25001 6.41458C2.25001 6.49381 2.25001 6.53342 2.26853 6.57342C2.28706 6.61341 2.31179 6.63437 2.36126 6.67631C3.03798 7.25 4.45314 7.25 5 7.25C5.54687 7.25 6.96205 7.25 7.63876 6.67629C7.68823 6.63436 7.71296 6.61339 7.73148 6.5734C7.75001 6.53341 7.75001 6.49379 7.75001 6.41457L7.75001 4.99659C7.75006 4.55376 7.7501 4.15064 7.70697 3.82326C7.65976 3.46494 7.54909 3.08655 7.24279 2.77397C6.93442 2.45928 6.55751 2.34349 6.19922 2.29433C5.87539 2.2499 5.47763 2.24995 5.04538 2.25H4.95464Z',
  d14: 'M7.75001 8.80383C7.75001 8.52945 7.75001 8.39226 7.66763 8.33236C7.58525 8.27246 7.44752 8.31709 7.17205 8.40635C6.42675 8.64786 5.63225 8.75 5 8.75C4.36775 8.75 3.57326 8.64787 2.82796 8.40636C2.5525 8.3171 2.41476 8.27246 2.33239 8.33237C2.25001 8.39227 2.25001 8.52946 2.25001 8.80383L2.25 15.9583C2.24994 16.7987 2.2499 17.3125 2.33663 17.8153C2.41591 18.275 2.54895 18.7235 2.73301 19.1512C2.93445 19.6193 3.21429 20.0476 3.67087 20.7464L3.72359 20.8271C3.82116 20.9765 3.91968 21.1274 4.01302 21.2457C4.11115 21.3702 4.26718 21.5443 4.50778 21.6482C4.82211 21.7839 5.1779 21.7839 5.49223 21.6482C5.73284 21.5443 5.88886 21.3702 5.98699 21.2457C6.08034 21.1274 6.17885 20.9765 6.27642 20.8271L6.32909 20.7465C6.7857 20.0477 7.06556 19.6194 7.267 19.1512C7.45106 18.7235 7.5841 18.275 7.66339 17.8153C7.75011 17.3125 7.75008 16.7987 7.75001 15.9583L7.75001 8.80383Z',
  d15: 'M16.5998 2.25C17.6098 2.24999 18.4293 2.24997 19.0751 2.32031C19.7386 2.39256 20.3321 2.54823 20.8212 2.94441C21.3331 3.35907 21.5579 3.89598 21.6585 4.5021C21.7501 5.05391 21.7501 5.74285 21.75 6.53988V6.53991L21.75 17.4601C21.7501 18.2571 21.7501 18.9461 21.6585 19.4979C21.5579 20.104 21.3331 20.6409 20.8212 21.0556C20.3321 21.4518 19.7386 21.6074 19.0751 21.6797C18.4293 21.75 17.6098 21.75 16.5998 21.75H15.4002C14.3902 21.75 13.5707 21.75 12.9249 21.6797C12.2614 21.6074 11.6679 21.4518 11.1788 21.0556C10.6669 20.6409 10.4421 20.104 10.3415 19.4979C10.2499 18.9461 10.2499 18.2571 10.25 17.4601L10.25 6.6L10.25 6.53989C10.2499 5.74285 10.2499 5.05391 10.3415 4.5021C10.4421 3.89598 10.6669 3.35907 11.1788 2.94441C11.6679 2.54823 12.2614 2.39256 12.9249 2.32031C13.5707 2.24997 14.3902 2.24999 15.4002 2.25H15.4002H16.5998H16.5998Z',
  d16: 'M10.25 8.25L10.25 6.75H12.5C12.9142 6.75 13.25 7.08579 13.25 7.5C13.25 7.91421 12.9142 8.25 12.5 8.25L10.25 8.25ZM10.25 12.75L10.25 11.25H12.5C12.9142 11.25 13.25 11.5858 13.25 12C13.25 12.4142 12.9142 12.75 12.5 12.75H10.25ZM10.25 17.25L10.25 15.75H12.5C12.9142 15.75 13.25 16.0858 13.25 16.5C13.25 16.9142 12.9142 17.25 12.5 17.25H10.25Z',
  d17: 'M4.95463 2.25C4.52238 2.24995 4.12462 2.2499 3.80079 2.29433C3.4425 2.34349 3.0656 2.45928 2.75722 2.77397C2.45092 3.08655 2.34025 3.46494 2.29304 3.82326C2.24991 4.15064 2.24996 4.55376 2.25 4.99659L2.25001 6.41458C2.25001 6.49381 2.25001 6.53342 2.26853 6.57342C2.28706 6.61341 2.31179 6.63437 2.36126 6.67631C3.03798 7.25 4.45314 7.25 5 7.25C5.54687 7.25 6.96205 7.25 7.63876 6.67629C7.68823 6.63436 7.71296 6.61339 7.73148 6.5734C7.75001 6.53341 7.75001 6.49379 7.75001 6.41457L7.75001 4.99659C7.75006 4.55376 7.7501 4.15064 7.70697 3.82326C7.65976 3.46494 7.54909 3.08655 7.24279 2.77397C6.93442 2.45928 6.55751 2.34349 6.19922 2.29433C5.87539 2.2499 5.47763 2.24995 5.04538 2.25H4.95463Z',
  d18: 'M11 20.9979H21V3H11V20.9979Z',
  d19: 'M11 16.4985H14M11 11.999H14M11 7.49951H14',
  d20: 'M7 7.49951H3',
  d21: 'M3.05882 3.04418L3.05859 18.9893L4.98371 21.0029L6.95667 18.9893L7.07585 3.04425C7.07589 3.0387 7.0714 3.03418 7.06585 3.03418H3.06882C3.06329 3.03418 3.05882 3.03866 3.05882 3.04418Z',
  d22: 'M11 2.25C10.5858 2.25 10.25 2.58579 10.25 3V6.75H13V8.25H10.25V11.25H13V12.75H10.25V15.75H13V17.25H10.25V21C10.25 21.4142 10.5858 21.75 11 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H11Z',
  d23: 'M7 2.25C7.41421 2.25 7.75 2.58579 7.75 3V6.75H2.25V3C2.25 2.58579 2.58579 2.25 3 2.25H7Z',
  d24: 'M2.25 8.25V18.9053L5 21.6553L7.75 18.9053V8.25H2.25Z',
};

export const IconStationeryStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stationery-stroke-rounded IconStationeryStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconStationeryDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stationery-duotone-rounded IconStationeryDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconStationeryTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stationery-twotone-rounded IconStationeryTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStationerySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stationery-solid-rounded IconStationerySolidRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStationeryBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stationery-bulk-rounded IconStationeryBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStationeryStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stationery-stroke-sharp IconStationeryStrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStationerySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stationery-solid-sharp IconStationerySolidSharp"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStationery: TheIconSelfPack = {
  name: 'Stationery',
  StrokeRounded: IconStationeryStrokeRounded,
  DuotoneRounded: IconStationeryDuotoneRounded,
  TwotoneRounded: IconStationeryTwotoneRounded,
  SolidRounded: IconStationerySolidRounded,
  BulkRounded: IconStationeryBulkRounded,
  StrokeSharp: IconStationeryStrokeSharp,
  SolidSharp: IconStationerySolidSharp,
};