import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 8H9C7.11438 8 6.17157 8 5.58579 8.58579C5 9.17157 5 10.1144 5 12V18C5 19.8856 5 20.8284 5.58579 21.4142C6.17157 22 7.11438 22 9 22H15C16.8856 22 17.8284 22 18.4142 21.4142C19 20.8284 19 19.8856 19 18V12C19 10.1144 19 9.17157 18.4142 8.58579C17.8284 8 16.8856 8 15 8Z',
  d2: 'M18 8V6C18 4.11438 18 3.17157 17.4142 2.58579C16.8284 2 15.8856 2 14 2H10C8.11438 2 7.17157 2 6.58579 2.58579C6 3.17157 6 4.11438 6 6V8',
  d3: 'M12 8V5',
  d4: 'M9 8V5',
  d5: 'M15 8V5',
  d6: 'M12.1543 19C13.7259 19 15 17.7464 15 16.2C15 13.9048 12.5608 13.4 12.5608 11C10.7317 12 11 15 11 15C11 15 9.31084 15 9.31026 13.5C8.36162 16 9.66704 19 12.1543 19Z',
  d7: 'M9 8H15C16.8856 8 17.8284 8 18.4142 8.58579C19 9.17157 19 10.1144 19 12V18C19 19.8856 19 20.8284 18.4142 21.4142C17.8284 22 16.8856 22 15 22H9C7.11438 22 6.17157 22 5.58579 21.4142C5 20.8284 5 19.8856 5 18V12C5 10.1144 5 9.17157 5.58579 8.58579C6.17157 8 7.11438 8 9 8ZM15 16.2C15 17.7464 13.7259 19 12.1543 19C9.66704 19 8.36162 16 9.31026 13.5C9.31084 15 11 15 11 15C11 15 10.7317 12 12.5608 11C12.5608 12.2134 13.1843 12.9424 13.8008 13.6632C14.4037 14.3681 15 15.0652 15 16.2Z',
  d8: 'M17.2945 7.32991C16.6997 7.24995 15.9505 7.24997 15.052 7.25H15.052L8.948 7.25H8.94797C8.04951 7.24997 7.3003 7.24995 6.70552 7.32991C6.07773 7.41432 5.51093 7.59999 5.05546 8.05546C4.59999 8.51093 4.41432 9.07773 4.32991 9.70552C4.24995 10.3003 4.24997 11.0495 4.25 11.948V11.948V18.052V18.052C4.24997 18.9505 4.24995 19.6997 4.32991 20.2945C4.41432 20.9223 4.59999 21.4891 5.05546 21.9445C5.51093 22.4 6.07773 22.5857 6.70552 22.6701C7.3003 22.7501 8.04951 22.75 8.94798 22.75H8.94801H15.052H15.052C15.9505 22.75 16.6997 22.7501 17.2945 22.6701C17.9223 22.5857 18.4891 22.4 18.9445 21.9445C19.4 21.4891 19.5857 20.9223 19.6701 20.2945C19.7501 19.6997 19.75 18.9505 19.75 18.052V18.052V11.948V11.948C19.75 11.0495 19.7501 10.3003 19.6701 9.70552C19.5857 9.07773 19.4 8.51093 18.9445 8.05546C18.4891 7.59999 17.9223 7.41432 17.2945 7.32991ZM15.5 16.2762C15.5 18.0159 14.0136 19.4262 12.18 19.4262C9.62064 19.4262 8.13386 16.8008 8.57797 14.2514C8.63458 13.9265 8.66288 13.764 8.72568 13.748C8.78848 13.7321 8.91801 13.8957 9.17707 14.223C9.4474 14.5644 9.84571 14.7401 10.184 14.8305C10.4439 14.8999 10.5739 14.9346 10.6903 14.8476C10.8068 14.7606 10.8112 14.5968 10.8199 14.2691C10.844 13.3659 11.0462 11.7459 12.1102 10.8028C12.3068 10.6285 12.4051 10.5414 12.5151 10.5789C12.6252 10.6164 12.6553 10.773 12.7154 11.0863C12.9048 12.0737 13.5057 12.7511 14.101 13.4223C14.8044 14.2153 15.5 14.9996 15.5 16.2762Z',
  d9: 'M9 4.25C9.41421 4.25 9.75 4.58579 9.75 5V8C9.75 8.41421 9.41421 8.75 9 8.75C8.58579 8.75 8.25 8.41421 8.25 8V5C8.25 4.58579 8.58579 4.25 9 4.25ZM12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8V5C11.25 4.58579 11.5858 4.25 12 4.25ZM15 4.25C15.4142 4.25 15.75 4.58579 15.75 5V8C15.75 8.41421 15.4142 8.75 15 8.75C14.5858 8.75 14.25 8.41421 14.25 8V5C14.25 4.58579 14.5858 4.25 15 4.25Z',
  d10: 'M9.93417 1C9.95604 1 9.97799 1 10 1L14.0658 1C14.9523 0.999953 15.7161 0.99991 16.3278 1.08215C16.9833 1.17028 17.6117 1.36902 18.1213 1.87868C18.631 2.38835 18.8297 3.0167 18.9179 3.67221C19.0001 4.28387 19.0001 5.04769 19 5.93417L19 8C19 8.55229 18.5523 9 18 9C17.4477 9 17 8.55229 17 8V6C17 5.02893 16.9979 4.40122 16.9357 3.93871C16.8571 3.35411 16.6459 3.14291 16.0613 3.06431C15.5988 3.00213 14.9711 3 14 3L10 3C9.02893 3 8.40122 3.00213 7.93871 3.06431C7.35411 3.14291 7.14291 3.35411 7.06431 3.93871C7.00213 4.40122 7 5.02893 7 6V8C7 8.55229 6.55229 9 6 9C5.44772 9 5 8.55229 5 8L5 6C5 5.97799 5 5.95604 5 5.93417C4.99995 5.04769 4.99991 4.28387 5.08215 3.67221C5.17028 3.0167 5.36902 2.38835 5.87868 1.87868C6.38835 1.36902 7.0167 1.17028 7.67221 1.08215C8.28387 0.99991 9.04769 0.999953 9.93417 1Z',
  d11: 'M10 1L9.93417 0.999998C9.04769 0.999948 8.28387 0.999905 7.67221 1.08214C7.0167 1.17027 6.38835 1.36902 5.87868 1.87868C5.36902 2.38834 5.17028 3.01669 5.08215 3.67221C4.99991 4.28387 4.99995 5.04768 5 5.93417L5 6V8C5 8.55228 5.44772 9 6 9C6.55229 9 7 8.55228 7 8V6C7 5.02892 7.00213 4.40121 7.06431 3.9387C7.14291 3.3541 7.35411 3.1429 7.93871 3.06431C8.40122 3.00212 9.02893 3 10 3H14C14.9711 3 15.5988 3.00212 16.0613 3.06431C16.6459 3.1429 16.8571 3.3541 16.9357 3.9387C16.9979 4.40121 17 5.02892 17 6V8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8L19 5.93417C19.0001 5.04768 19.0001 4.28387 18.9179 3.67221C18.8297 3.01669 18.631 2.38834 18.1213 1.87868C17.6117 1.36902 16.9833 1.17027 16.3278 1.08214C15.7161 0.999905 14.9523 0.999948 14.0658 0.999998L10 1ZM9.75 5C9.75 4.58578 9.41421 4.25 9 4.25C8.58579 4.25 8.25 4.58578 8.25 5V8C8.25 8.41421 8.58579 8.75 9 8.75C9.41421 8.75 9.75 8.41421 9.75 8V5ZM12.75 5C12.75 4.58578 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58578 11.25 5V8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8V5ZM15.75 5C15.75 4.58578 15.4142 4.25 15 4.25C14.5858 4.25 14.25 4.58578 14.25 5V8C14.25 8.41421 14.5858 8.75 15 8.75C15.4142 8.75 15.75 8.41421 15.75 8V5Z',
  d12: 'M19 8H5V22H19V8Z',
  d13: 'M18 8V2H6V8',
  d14: 'M12 8V4',
  d15: 'M9 8V4',
  d16: 'M15 8V4',
  d17: 'M12.1543 19C13.7259 19 15 17.7464 15 16.2C15 13.9048 12.5608 13.4 12.5608 11C10.7317 12 11 15 11 15L9.31026 13.5C8.36162 16 9.66704 19 12.1543 19Z',
  d18: 'M5.25 2.17857C5.25 1.66574 5.68173 1.25 6.21429 1.25H17.7857C18.3183 1.25 18.75 1.66574 18.75 2.17857V7.75H16.8214V3.10714H7.17857V7.75H5.25V2.17857Z',
  d19: 'M12.75 4V8H11.25V4H12.75Z',
  d20: 'M9.75 4V8H8.25V4H9.75Z',
  d21: 'M15.75 4V8H14.25V4H15.75Z',
  d22: 'M5 7.25C4.58579 7.25 4.25 7.58579 4.25 8V22C4.25 22.4142 4.58579 22.75 5 22.75H19C19.4142 22.75 19.75 22.4142 19.75 22V8C19.75 7.58579 19.4142 7.25 19 7.25H5ZM15.5 16.35C15.5 18.0897 14.0136 19.5 12.18 19.5C9.27821 19.5 7.75522 16.125 8.86197 13.3125L10.8333 15C10.8333 15 10.5203 11.625 12.6543 10.5C12.6543 11.8651 13.3817 12.6851 14.101 13.4961C14.8044 14.2891 15.5 15.0734 15.5 16.35Z',
};

export const IconMatchesStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matches-stroke-rounded IconMatchesStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMatchesDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matches-duotone-rounded IconMatchesDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMatchesTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matches-twotone-rounded IconMatchesTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMatchesSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matches-solid-rounded IconMatchesSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMatchesBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matches-bulk-rounded IconMatchesBulkRounded"
    >
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMatchesStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matches-stroke-sharp IconMatchesStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMatchesSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matches-solid-sharp IconMatchesSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMatches: TheIconSelfPack = {
  name: 'Matches',
  StrokeRounded: IconMatchesStrokeRounded,
  DuotoneRounded: IconMatchesDuotoneRounded,
  TwotoneRounded: IconMatchesTwotoneRounded,
  SolidRounded: IconMatchesSolidRounded,
  BulkRounded: IconMatchesBulkRounded,
  StrokeSharp: IconMatchesStrokeSharp,
  SolidSharp: IconMatchesSolidSharp,
};