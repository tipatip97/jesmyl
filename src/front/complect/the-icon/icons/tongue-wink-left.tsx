import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 8C9 8 10 9 10 10C9.25 9 7.75 9 7 10',
  d2: 'M16.009 9H16',
  d3: 'M8 14C8.91212 15.2144 10.3643 16 12 16C13.6357 16 15.0879 15.2144 16 14',
  d4: 'M10 16V17.5C10 18.6046 10.8954 19.5 12 19.5C13.1046 19.5 14 18.6046 14 17.5V16',
  d5: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10 17.5021C10 18.6066 10.8954 19.5021 12 19.5021C13.1046 19.5021 14 18.6066 14 17.5021V15.5859C13.3875 15.8536 12.7111 16.0021 12 16.0021C11.2889 16.0021 10.6125 15.8536 10 15.5859V17.5021Z',
  d6: 'M8 14C8.91212 15.2144 10.3643 16 12 16C13.6357 16 15.0879 15.2144 16 14M10 16V17.5C10 18.6046 10.8954 19.5 12 19.5C13.1046 19.5 14 18.6046 14 17.5V16',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.53037 7.46967C9.23748 7.17678 8.76261 7.17678 8.46971 7.46967C8.18652 7.75286 8.17714 8.20618 8.44158 8.50064C7.67372 8.51754 6.91205 8.86732 6.40004 9.55C6.15152 9.88137 6.21867 10.3515 6.55004 10.6C6.88141 10.8485 7.35152 10.7814 7.60004 10.45C8.05004 9.85 8.95004 9.85 9.40004 10.45C9.59374 10.7083 9.93096 10.8136 10.2372 10.7115C10.5435 10.6094 10.75 10.3228 10.75 10C10.75 9.27456 10.399 8.62133 10.1241 8.20897C9.9785 7.9906 9.83401 7.8101 9.72574 7.68378C9.67448 7.62398 9.5766 7.51917 9.53709 7.47686L9.53037 7.46967ZM14.75 9C14.75 8.30964 15.3076 7.75 15.9955 7.75H16.0045C16.6924 7.75 17.25 8.30964 17.25 9C17.25 9.69036 16.6924 10.25 16.0045 10.25H15.9955C15.3076 10.25 14.75 9.69036 14.75 9ZM8.59974 13.5496C8.35099 13.2184 7.88084 13.1515 7.54964 13.4003C7.21843 13.649 7.1516 14.1192 7.40035 14.4504C7.89332 15.1068 8.52418 15.6546 9.25004 16.0507V17.5C9.25004 19.0188 10.4813 20.25 12 20.25C13.5188 20.25 14.75 19.0188 14.75 17.5V16.0507C15.4759 15.6546 16.1068 15.1068 16.5997 14.4504C16.8485 14.1192 16.7817 13.649 16.4505 13.4003C16.1192 13.1515 15.6491 13.2184 15.4003 13.5496C14.6238 14.5835 13.3898 15.25 12 15.25C10.6103 15.25 9.37631 14.5835 8.59974 13.5496ZM10.75 17.5V16.6136C11.1525 16.7029 11.5708 16.75 12 16.75C12.4293 16.75 12.8476 16.7029 13.25 16.6136V17.5C13.25 18.1903 12.6904 18.75 12 18.75C11.3097 18.75 10.75 18.1903 10.75 17.5Z',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d9: 'M8.46971 7.46967C8.76261 7.17678 9.23748 7.17678 9.53037 7.46967C9.56414 7.50585 9.67126 7.62023 9.72574 7.68378C9.83401 7.8101 9.9785 7.9906 10.1241 8.20897C10.399 8.62133 10.75 9.27456 10.75 10C10.75 10.3228 10.5435 10.6094 10.2372 10.7115C9.93096 10.8136 9.59374 10.7083 9.40004 10.45C8.95004 9.85 8.05004 9.85 7.60004 10.45C7.35152 10.7814 6.88142 10.8485 6.55004 10.6C6.21867 10.3515 6.15152 9.88137 6.40004 9.55C6.91205 8.86732 7.67372 8.51754 8.44158 8.50064C8.17714 8.20618 8.18652 7.75286 8.46971 7.46967Z',
  d10: 'M14.75 9C14.75 8.30964 15.3076 7.75 15.9955 7.75H16.0045C16.6924 7.75 17.25 8.30964 17.25 9C17.25 9.69036 16.6924 10.25 16.0045 10.25H15.9955C15.3076 10.25 14.75 9.69036 14.75 9Z',
  d11: 'M7.54964 13.4003C7.88084 13.1516 8.35099 13.2184 8.59974 13.5496C9.37631 14.5836 10.6103 15.25 12 15.25C13.3898 15.25 14.6238 14.5836 15.4003 13.5496C15.6491 13.2184 16.1192 13.1516 16.4505 13.4003C16.7817 13.6491 16.8485 14.1192 16.5997 14.4505C16.1068 15.1068 15.4759 15.6546 14.75 16.0507V17.5C14.75 19.0188 13.5188 20.25 12 20.25C10.4813 20.25 9.25004 19.0188 9.25004 17.5V16.0507C8.52418 15.6546 7.89332 15.1068 7.40035 14.4505C7.1516 14.1192 7.21843 13.6491 7.54964 13.4003ZM10.75 16.6137V17.5C10.75 18.1904 11.3097 18.75 12 18.75C12.6904 18.75 13.25 18.1904 13.25 17.5V16.6137C12.8476 16.703 12.4293 16.75 12 16.75C11.5708 16.75 11.1525 16.703 10.75 16.6137Z',
  d12: 'M9 7.5C9 7.5 10 9 10 10C9.25 9 7.75 9 7 10',
  d13: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.00039 7.49981C8.37635 7.91583 8.37629 7.91574 8.37624 7.91566L8.37718 7.91709L8.38341 7.9266C8.38929 7.93561 8.39852 7.94986 8.41061 7.96887C8.43483 8.00693 8.4704 8.06381 8.51352 8.13568C8.57373 8.23603 8.64768 8.36395 8.72554 8.50936C7.86553 8.43621 6.97547 8.78303 6.40039 9.54981L7.60039 10.4498C8.05039 9.84981 8.95039 9.84981 9.40039 10.4498C9.59408 10.7081 9.9313 10.8134 10.2376 10.7113C10.5438 10.6092 10.7504 10.3226 10.7504 9.99981C10.7504 9.30869 10.4242 8.54528 10.1712 8.0394C10.0355 7.76799 9.90061 7.53201 9.79976 7.36394C9.74913 7.27956 9.70658 7.21144 9.67611 7.16356C9.66086 7.1396 9.6486 7.12064 9.63983 7.1072L9.62934 7.0912L9.62616 7.08639L9.62457 7.08399C9.62449 7.08388 9.62443 7.08378 9.00039 7.49981ZM14.75 9C14.75 8.30964 15.3096 7.75 16 7.75H16.009C16.6993 7.75 17.259 8.30964 17.259 9C17.259 9.69036 16.6993 10.25 16.009 10.25H16C15.3096 10.25 14.75 9.69036 14.75 9ZM15.4004 13.5498C14.6238 14.5838 13.3899 15.2502 12.0001 15.2502C10.6103 15.2502 9.37635 14.5838 8.59978 13.5498L7.40039 14.4506C7.89336 15.107 8.52422 15.6548 9.25008 16.0509V17.5002C9.25008 19.019 10.4813 20.2502 12.0001 20.2502C13.5189 20.2502 14.7501 19.019 14.7501 17.5002V16.0509C15.4759 15.6548 16.1068 15.107 16.5998 14.4506L15.4004 13.5498ZM10.7501 17.5002V16.6139C11.1525 16.7031 11.5708 16.7502 12.0001 16.7502C12.4294 16.7502 12.8477 16.7031 13.2501 16.6139V17.5002C13.2501 18.1906 12.6904 18.7502 12.0001 18.7502C11.3097 18.7502 10.7501 18.1906 10.7501 17.5002Z',
};

export const IconTongueWinkLeftStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-wink-left-stroke-rounded IconTongueWinkLeftStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconTongueWinkLeftDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-wink-left-duotone-rounded IconTongueWinkLeftDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconTongueWinkLeftTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-wink-left-twotone-rounded IconTongueWinkLeftTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTongueWinkLeftSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-wink-left-solid-rounded IconTongueWinkLeftSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTongueWinkLeftBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-wink-left-bulk-rounded IconTongueWinkLeftBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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

export const IconTongueWinkLeftStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-wink-left-stroke-sharp IconTongueWinkLeftStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTongueWinkLeftSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-wink-left-solid-sharp IconTongueWinkLeftSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTongueWinkLeft: TheIconSelfPack = {
  name: 'TongueWinkLeft',
  StrokeRounded: IconTongueWinkLeftStrokeRounded,
  DuotoneRounded: IconTongueWinkLeftDuotoneRounded,
  TwotoneRounded: IconTongueWinkLeftTwotoneRounded,
  SolidRounded: IconTongueWinkLeftSolidRounded,
  BulkRounded: IconTongueWinkLeftBulkRounded,
  StrokeSharp: IconTongueWinkLeftStrokeSharp,
  SolidSharp: IconTongueWinkLeftSolidSharp,
};