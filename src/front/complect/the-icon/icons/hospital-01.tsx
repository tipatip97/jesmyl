import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 2V4M14 4V6M14 4H10M10 2V4M10 4V6',
  d2: 'M3 22V11.3808C3 7.8766 3 6.12452 4.15327 5.03591C4.88623 4.34404 5.90312 4.09189 7.5 4M21 22V11.3808C21 7.8766 21 6.12452 19.8467 5.03591C19.1138 4.34404 18.0969 4.09189 16.5 4',
  d3: 'M14 10H16',
  d4: 'M14 14H16',
  d5: 'M7 14H9',
  d6: 'M7 10H9',
  d7: 'M2 22H9.5M22 22H14.5',
  d8: 'M9.5 22V19.5C9.5 18.5654 9.5 18.0981 9.70096 17.75C9.83261 17.522 10.022 17.3326 10.25 17.201C10.5981 17 11.0654 17 12 17C12.9346 17 13.4019 17 13.75 17.201C13.978 17.3326 14.1674 17.522 14.299 17.75C14.5 18.0981 14.5 18.5654 14.5 19.5V22',
  d9: 'M3 11.3808V22H9.5V19.5C9.5 18.5654 9.5 18.0981 9.70096 17.75C9.83261 17.522 10.022 17.3326 10.25 17.201C10.5981 17 11.0654 17 12 17C12.9346 17 13.4019 17 13.75 17.201C13.978 17.3326 14.1674 17.522 14.299 17.75C14.5 18.0981 14.5 18.5654 14.5 19.5V22H21V11.3808C21 7.8766 21 6.12452 19.8467 5.03591C19.1138 4.34404 18.0969 4.09189 16.5 4H7.5C5.90312 4.09189 4.88623 4.34404 4.15327 5.03591C3 6.12452 3 7.8766 3 11.3808Z',
  d10: 'M2 22H9.5H22',
  d11: 'M2 22H9.5V19.5C9.5 18.5654 9.5 18.0981 9.70096 17.75C9.83261 17.522 10.022 17.3326 10.25 17.201C10.5981 17 11.0654 17 12 17C12.9346 17 13.4019 17 13.75 17.201C13.978 17.3326 14.1674 17.522 14.299 17.75C14.5 18.0981 14.5 18.5654 14.5 19.5V22H22',
  d12: 'M14 1C13.4477 1 13 1.44772 13 2V3H11V2C11 1.44772 10.5523 1 10 1C9.44772 1 9 1.44772 9 2V6C9 6.55228 9.44772 7 10 7C10.5523 7 11 6.55228 11 6V5L13 5V6C13 6.55228 13.4477 7 14 7C14.5523 7 15 6.55228 15 6V2C15 1.44772 14.5523 1 14 1Z',
  d13: 'M7.5 3.29292C7.5 3.26911 7.48069 3.24968 7.45691 3.25104C5.83192 3.34456 4.5772 3.6042 3.63845 4.49032C2.89181 5.19509 2.55883 6.09308 2.40165 7.19655C2.24997 8.26153 2.24998 9.61957 2.25 11.3216V11.3216V11.3216L2.25 21.9998C2.25 22.414 2.58579 22.7498 3 22.7498H9.49829C9.08487 22.7489 8.75 22.4135 8.75 21.9998L8.75 19.4676V19.4675C8.74998 19.0278 8.74997 18.6484 8.77818 18.3372C8.80802 18.008 8.87408 17.682 9.05145 17.3748C9.24892 17.0328 9.53296 16.7487 9.875 16.5512C10.1822 16.3739 10.5082 16.3078 10.8374 16.278C11.1486 16.2498 11.5924 16.2498 12.0322 16.2498H12.0323C12.472 16.2498 12.8514 16.2498 13.1627 16.278C13.4918 16.3078 13.8178 16.3739 14.125 16.5512C14.467 16.7487 14.7511 17.0328 14.9486 17.3748C15.1259 17.682 15.192 18.008 15.2218 18.3372C15.25 18.6484 15.25 19.0278 15.25 19.4675V19.4676L15.25 21.9998C15.25 22.4135 14.9151 22.7489 14.5017 22.7498L21 22.7498C21.4142 22.7498 21.75 22.414 21.75 21.9998L21.75 11.3216C21.75 9.6196 21.75 8.26154 21.5983 7.19655C21.4412 6.09308 21.1082 5.19509 20.3616 4.49032C19.4228 3.6042 18.1681 3.34456 16.5431 3.25104C16.5193 3.24968 16.5 3.26911 16.5 3.29292L16.5 5.99981C16.5 7.38052 15.3807 8.49981 14 8.49981L10 8.49981C8.61929 8.49981 7.5 7.38052 7.5 5.99981L7.5 3.29292ZM14.4983 22.7498C14.0849 22.7489 13.75 22.4135 13.75 21.9998V19.4998C13.75 19.0187 13.7493 18.708 13.7279 18.4726C13.7279 18.0108 13.2608 17.813 13.0273 17.7719C12.7918 17.7505 12.4811 17.7498 12 17.7498C11.5189 17.7498 11.2082 17.7505 10.9727 17.7719C10.7318 17.775 10.2721 17.9195 10.2721 18.4726C10.2507 18.708 10.25 19.0187 10.25 19.4998V21.9998C10.25 22.4135 9.91514 22.7489 9.50171 22.7498H14.4983ZM6.75 10.9998C6.75 10.5856 7.08579 10.2498 7.5 10.2498H9.5C9.91421 10.2498 10.25 10.5856 10.25 10.9998C10.25 11.414 9.91421 11.7498 9.5 11.7498H7.5C7.08579 11.7498 6.75 11.414 6.75 10.9998ZM13.75 10.9998C13.75 10.5856 14.0858 10.2498 14.5 10.2498H16.5C16.9142 10.2498 17.25 10.5856 17.25 10.9998C17.25 11.414 16.9142 11.7498 16.5 11.7498L14.5 11.7498C14.0858 11.7498 13.75 11.414 13.75 10.9998ZM6.75 13.9998C6.75 13.5856 7.08579 13.2498 7.5 13.2498H9.5C9.91421 13.2498 10.25 13.5856 10.25 13.9998C10.25 14.414 9.91421 14.7498 9.5 14.7498H7.5C7.08579 14.7498 6.75 14.414 6.75 13.9998ZM13.75 13.9998C13.75 13.5856 14.0858 13.2498 14.5 13.2498L16.5 13.2498C16.9142 13.2498 17.25 13.5856 17.25 13.9998C17.25 14.414 16.9142 14.7498 16.5 14.7498H14.5C14.0858 14.7498 13.75 14.414 13.75 13.9998Z',
  d14: 'M1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22Z',
  d15: 'M6.86612 3.29839C5.53454 3.42522 4.45175 3.72353 3.63845 4.49123C2.89181 5.19601 2.55883 6.09399 2.40165 7.19747C2.24997 8.26245 2.24998 9.6205 2.25 11.3225V22.0007C2.25 22.4149 2.58579 22.7507 3 22.7507H21C21.4142 22.7507 21.75 22.4149 21.75 22.0007V11.3225C21.75 9.62051 21.75 8.26246 21.5983 7.19747C21.4412 6.09399 21.1082 5.19601 20.3616 4.49123C19.5483 3.72353 18.4655 3.42522 17.1339 3.29839C16.8422 3.2706 16.6964 3.25671 16.5982 3.34598C16.5 3.43525 16.5 3.58562 16.5 3.88636L16.5 6.00072C16.5 7.38143 15.3807 8.50072 14 8.50072H10C8.61929 8.50072 7.5 7.38143 7.5 6.00072L7.5 3.88636C7.5 3.58562 7.5 3.43525 7.40183 3.34598C7.30365 3.25671 7.15781 3.2706 6.86612 3.29839Z',
  d16: 'M6.75 11C6.75 10.5858 7.08579 10.25 7.5 10.25H9.5C9.91421 10.25 10.25 10.5858 10.25 11C10.25 11.4142 9.91421 11.75 9.5 11.75H7.5C7.08579 11.75 6.75 11.4142 6.75 11ZM13.75 11C13.75 10.5858 14.0858 10.25 14.5 10.25H16.5C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75H14.5C14.0858 11.75 13.75 11.4142 13.75 11ZM6.75 14C6.75 13.5858 7.08579 13.25 7.5 13.25H9.5C9.91421 13.25 10.25 13.5858 10.25 14C10.25 14.4142 9.91421 14.75 9.5 14.75H7.5C7.08579 14.75 6.75 14.4142 6.75 14ZM13.75 14C13.75 13.5858 14.0858 13.25 14.5 13.25H16.5C16.9142 13.25 17.25 13.5858 17.25 14C17.25 14.4142 16.9142 14.75 16.5 14.75H14.5C14.0858 14.75 13.75 14.4142 13.75 14Z',
  d17: 'M12.0323 16.25C12.472 16.25 12.8514 16.25 13.1627 16.2782C13.4918 16.308 13.8178 16.3741 14.125 16.5514C14.467 16.7489 14.7511 17.033 14.9486 17.375C15.1259 17.6822 15.192 18.0082 15.2218 18.3374C15.25 18.6486 15.25 19.028 15.25 19.4678L15.25 22C15.25 22.4142 14.9142 22.75 14.5 22.75C14.0858 22.75 13.75 22.4142 13.75 22V19.5C13.75 19.0189 13.7493 18.7082 13.7279 18.4727C13.7279 18.011 13.2608 17.8132 13.0273 17.7721C12.7918 17.7507 12.4811 17.75 12 17.75C11.5189 17.75 11.2082 17.7507 10.9727 17.7721C10.7318 17.7752 10.2721 17.9197 10.2721 18.4727C10.2507 18.7082 10.25 19.0189 10.25 19.5V22C10.25 22.4142 9.91422 22.75 9.5 22.75C9.08579 22.75 8.75 22.4142 8.75 22V19.4678V19.4677C8.74998 19.028 8.74997 18.6486 8.77818 18.3374C8.80802 18.0082 8.87408 17.6822 9.05144 17.375C9.24892 17.033 9.53296 16.7489 9.875 16.5514C10.1822 16.3741 10.5082 16.308 10.8374 16.2782C11.1486 16.25 11.5924 16.25 12.0322 16.25H12.0323Z',
  d18: 'M14 2V4.99829M14 4.99829V7.99657M14 4.99829H10M10 2V4.99829M10 4.99829V7.99657',
  d19: 'M4 21.9882V4.99805H8M20 21.9882V4.99805H16',
  d20: 'M13 10.9946H16',
  d21: 'M13 13.9932H16',
  d22: 'M7 13.9932H10',
  d23: 'M7 10.9946H10',
  d24: 'M21.9948 21.9984H14.5026C14.497 21.9984 14.4926 21.9939 14.4926 21.9884V18.0051C14.4926 17.9996 14.4881 17.9951 14.4826 17.9951H9.50206C9.49653 17.9951 9.49206 17.9996 9.49206 18.0051V21.9732C9.49206 21.9787 9.48758 21.9832 9.48206 21.9832H1.99707',
  d25: 'M15 1.25L13 1.25V3.25H11V1.25L9 1.25V7.25H11V5.25L13 5.25V7.25H15V1.25Z',
  d26: 'M22 22.75H2V20.75H22V22.75Z',
  d27: 'M7.5 4.25035V7.25C7.5 8.07843 8.17157 8.75 9 8.75H15C15.8284 8.75 16.5 8.07843 16.5 7.25V4.2501L20 4.25C20.4142 4.25 20.75 4.58623 20.75 5.00045V22.0004C20.75 22.4146 20.4142 22.7504 20 22.7504H15.25V17C15.25 16.5858 14.9142 16.25 14.5 16.25H9.5C9.08579 16.25 8.75 16.5858 8.75 17V22.7504H4C3.58579 22.7504 3.25 22.4146 3.25 22.0004V5.00045C3.25 4.58623 3.58579 4.25045 4 4.25045L7.5 4.25035ZM16 11.75H13V10.25H16V11.75ZM13 14.75H16V13.25H13V14.75ZM10 14.75H7V13.25H10V14.75ZM7 11.75H10V10.25H7V11.75Z',
  d28: 'M13.75 22.7504V17.75H10.25V22.7504H13.75Z',
};

export const IconHospital01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-01-stroke-rounded IconHospital01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospital01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-01-duotone-rounded IconHospital01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospital01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-01-twotone-rounded IconHospital01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospital01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-01-solid-rounded IconHospital01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHospital01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-01-bulk-rounded IconHospital01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHospital01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-01-stroke-sharp IconHospital01StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHospital01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-01-solid-sharp IconHospital01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHospital01: TheIconSelfPack = {
  name: 'Hospital01',
  StrokeRounded: IconHospital01StrokeRounded,
  DuotoneRounded: IconHospital01DuotoneRounded,
  TwotoneRounded: IconHospital01TwotoneRounded,
  SolidRounded: IconHospital01SolidRounded,
  BulkRounded: IconHospital01BulkRounded,
  StrokeSharp: IconHospital01StrokeSharp,
  SolidSharp: IconHospital01SolidSharp,
};