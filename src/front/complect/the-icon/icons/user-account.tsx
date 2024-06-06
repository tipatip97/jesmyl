import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 9H18',
  d2: 'M14 12.5H17',
  d3: 'M5 16C6.20831 13.4189 10.7122 13.2491 12 16',
  d4: 'M10.5 9C10.5 10.1046 9.60457 11 8.5 11C7.39543 11 6.5 10.1046 6.5 9C6.5 7.89543 7.39543 7 8.5 7C9.60457 7 10.5 7.89543 10.5 9Z',
  d5: 'M2.95491 5.06107C2 6.3754 2 8.25027 2 12C2 15.7497 2 17.6246 2.95491 18.9389C3.26331 19.3634 3.6366 19.7367 4.06107 20.0451C5.3754 21 7.25027 21 11 21H13C16.7497 21 18.6246 21 19.9389 20.0451C20.3634 19.7367 20.7367 19.3634 21.0451 18.9389C22 17.6246 22 15.7497 22 12C22 8.25027 22 6.3754 21.0451 5.06107C20.7367 4.6366 20.3634 4.26331 19.9389 3.95491C18.6246 3 16.7497 3 13 3H11C7.25027 3 5.3754 3 4.06107 3.95491C3.6366 4.26331 3.26331 4.6366 2.95491 5.06107ZM8.5 11C9.60457 11 10.5 10.1046 10.5 9C10.5 7.89543 9.60457 7 8.5 7C7.39543 7 6.5 7.89543 6.5 9C6.5 10.1046 7.39543 11 8.5 11Z',
  d6: 'M13.0452 2.25C14.8818 2.24999 16.3214 2.24999 17.4635 2.37373C18.6291 2.50001 19.5734 2.76232 20.3798 3.34815C20.8679 3.70281 21.2972 4.13209 21.6518 4.62024C22.2377 5.42656 22.5 6.37094 22.6263 7.53648C22.75 8.67859 22.75 10.1182 22.75 11.9547V11.9547V12.0453V12.0453C22.75 13.8818 22.75 15.3214 22.6263 16.4635C22.5 17.6291 22.2377 18.5734 21.6518 19.3798C21.2972 19.8679 20.8679 20.2972 20.3798 20.6518C19.5734 21.2377 18.6291 21.5 17.4635 21.6263C16.3214 21.75 14.8818 21.75 13.0453 21.75H13.0453H10.9547H10.9547C9.11817 21.75 7.67859 21.75 6.53648 21.6263C5.37094 21.5 4.42656 21.2377 3.62024 20.6518C3.13209 20.2972 2.70281 19.8679 2.34815 19.3798C1.76232 18.5734 1.50001 17.6291 1.37373 16.4635C1.24999 15.3214 1.24999 13.8818 1.25 12.0452V11.9548C1.24999 10.1182 1.24999 8.67861 1.37373 7.53648C1.50001 6.37094 1.76232 5.42656 2.34815 4.62024C2.70281 4.13209 3.13209 3.70281 3.62024 3.34815C4.42656 2.76232 5.37094 2.50001 6.53648 2.37373C7.67861 2.24999 9.11821 2.24999 10.9548 2.25H13.0452ZM13 9C13 8.44772 13.4477 8 14 8H18C18.5523 8 19 8.44772 19 9C19 9.55228 18.5523 10 18 10H14C13.4477 10 13 9.55228 13 9ZM13 12.5C13 11.9477 13.4477 11.5 14 11.5H17C17.5523 11.5 18 11.9477 18 12.5C18 13.0523 17.5523 13.5 17 13.5H14C13.4477 13.5 13 13.0523 13 12.5ZM8.5 6.24988C6.98122 6.24988 5.75 7.4811 5.75 8.99988C5.75 10.5187 6.98122 11.7499 8.5 11.7499C10.0188 11.7499 11.25 10.5187 11.25 8.99988C11.25 7.4811 10.0188 6.24988 8.5 6.24988ZM4.32093 15.6819C4.14531 16.057 4.30705 16.5035 4.68219 16.6791C4.78522 16.7274 4.89363 16.7501 5.00033 16.75H12C12.1067 16.7501 12.2151 16.7274 12.3182 16.6791C12.6933 16.5035 12.8551 16.057 12.6794 15.6819C11.8767 13.9672 10.1036 13.2262 8.45929 13.2505C6.82412 13.2746 5.08074 14.0588 4.32093 15.6819Z',
  d7: 'M13.0452 2.25C14.8818 2.24999 16.3214 2.24999 17.4635 2.37373C18.6291 2.50001 19.5734 2.76232 20.3798 3.34815C20.8679 3.70281 21.2972 4.13209 21.6518 4.62024C22.2377 5.42656 22.5 6.37094 22.6263 7.53648C22.75 8.67859 22.75 10.1182 22.75 11.9547V11.9547V12.0453V12.0453C22.75 13.8818 22.75 15.3214 22.6263 16.4635C22.5 17.6291 22.2377 18.5734 21.6518 19.3798C21.2972 19.8679 20.8679 20.2972 20.3798 20.6518C19.5734 21.2377 18.6291 21.5 17.4635 21.6263C16.3214 21.75 14.8818 21.75 13.0453 21.75H13.0453H10.9547H10.9547C9.11817 21.75 7.67859 21.75 6.53648 21.6263C5.37094 21.5 4.42656 21.2377 3.62024 20.6518C3.13209 20.2972 2.70281 19.8679 2.34815 19.3798C1.76232 18.5734 1.50001 17.6291 1.37373 16.4635C1.24999 15.3214 1.24999 13.8818 1.25 12.0452V11.9548C1.24999 10.1182 1.24999 8.67861 1.37373 7.53648C1.50001 6.37094 1.76232 5.42656 2.34815 4.62024C2.70281 4.13209 3.13209 3.70281 3.62024 3.34815C4.42656 2.76232 5.37094 2.50001 6.53648 2.37373C7.67861 2.24999 9.11821 2.24999 10.9548 2.25H13.0452Z',
  d8: 'M13 9C13 8.44772 13.4477 8 14 8H18C18.5523 8 19 8.44772 19 9C19 9.55228 18.5523 10 18 10H14C13.4477 10 13 9.55228 13 9Z',
  d9: 'M13 12.5C13 11.9477 13.4477 11.5 14 11.5H17C17.5523 11.5 18 11.9477 18 12.5C18 13.0523 17.5523 13.5 17 13.5H14C13.4477 13.5 13 13.0523 13 12.5Z',
  d10: 'M4.68219 16.6792C4.30705 16.5036 4.14531 16.0571 4.32093 15.682C5.08074 14.059 6.82412 13.2747 8.45929 13.2506C10.1036 13.2263 11.8767 13.9673 12.6794 15.682C12.8551 16.0571 12.6933 16.5036 12.3182 16.6792C12.2151 16.7275 12.1067 16.7503 12 16.7502H5.00033C4.89363 16.7503 4.78522 16.7275 4.68219 16.6792Z',
  d11: 'M5.75 9C5.75 7.48122 6.98122 6.25 8.5 6.25C10.0188 6.25 11.25 7.48122 11.25 9C11.25 10.5188 10.0188 11.75 8.5 11.75C6.98122 11.75 5.75 10.5188 5.75 9Z',
  d12: 'M14 9H19',
  d13: 'M2 3.5H22V20.5H2V3.5Z',
  d14: 'M5 16.5C6.20831 13.9189 10.7122 13.7491 12 16.5M10.5 9.5C10.5 10.6046 9.60457 11.5 8.5 11.5C7.39543 11.5 6.5 10.6046 6.5 9.5C6.5 8.39543 7.39543 7.5 8.5 7.5C9.60457 7.5 10.5 8.39543 10.5 9.5Z',
  d15: 'M2 2.75C1.58579 2.75 1.25 3.08579 1.25 3.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H22C22.4142 21.25 22.75 20.9142 22.75 20.5V3.5C22.75 3.08579 22.4142 2.75 22 2.75H2ZM14 10H19V8H14V10ZM17 13.5H14V11.5H17V13.5ZM8.5 6.5C6.98122 6.5 5.75 7.73122 5.75 9.25C5.75 10.7688 6.98122 12 8.5 12C10.0188 12 11.25 10.7688 11.25 9.25C11.25 7.73122 10.0188 6.5 8.5 6.5ZM8.5 12.5C6.15279 12.5 4.25 14.4028 4.25 16.75V17.5H12.75V16.75C12.75 14.4028 10.8472 12.5 8.5 12.5Z',
};

export const IconUserAccountStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-account-stroke-rounded IconUserAccountStrokeRounded"
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
      />
      <rect 
        x="2" 
        y="3" 
        width="20" 
        height="18" 
        rx="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></rect>
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
      />
    </TheIconWrapper>
  );
};

export const IconUserAccountDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-account-duotone-rounded IconUserAccountDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <rect 
        x="2" 
        y="3" 
        width="20" 
        height="18" 
        rx="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></rect>
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
      />
    </TheIconWrapper>
  );
};

export const IconUserAccountTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-account-twotone-rounded IconUserAccountTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <rect 
        x="2" 
        y="3" 
        width="20" 
        height="18" 
        rx="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></rect>
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
      />
    </TheIconWrapper>
  );
};

export const IconUserAccountSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-account-solid-rounded IconUserAccountSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserAccountBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-account-bulk-rounded IconUserAccountBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserAccountStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-account-stroke-sharp IconUserAccountStrokeSharp"
    >
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
    </TheIconWrapper>
  );
};

export const IconUserAccountSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-account-solid-sharp IconUserAccountSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserAccount: TheIconSelfPack = {
  name: 'UserAccount',
  StrokeRounded: IconUserAccountStrokeRounded,
  DuotoneRounded: IconUserAccountDuotoneRounded,
  TwotoneRounded: IconUserAccountTwotoneRounded,
  SolidRounded: IconUserAccountSolidRounded,
  BulkRounded: IconUserAccountBulkRounded,
  StrokeSharp: IconUserAccountStrokeSharp,
  SolidSharp: IconUserAccountSolidSharp,
};