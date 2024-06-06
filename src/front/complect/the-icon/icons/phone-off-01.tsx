import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2',
  d2: 'M11 19H13',
  d3: 'M2 2L22 22',
  d4: 'M18.9836 18.9959C18.8039 20.9154 17.4166 22.0002 15.4836 22.0002H8.49219C6.55919 22.0002 4.99219 20.4332 4.99219 18.5002L5.09241 5.48584',
  d5: 'M7.14062 2.27035C7.55637 2.09621 8.01286 2 8.49182 2H15.4833C17.4163 2 18.9833 3.567 18.9833 5.5V15.0051',
  d6: 'M4.67773 8.67666V14.7236C4.67773 18.0492 4.67773 19.712 5.71405 20.7452C6.75037 21.7783 8.4183 21.7783 11.7541 21.7783C15.09 21.7783 16.7579 21.7783 17.7943 20.7452C18.283 20.2579 18.5412 19.6306 18.6777 18.7549L4.75551 5.27832C4.67773 6.16694 4.67773 7.27387 4.67773 8.67666Z',
  d7: 'M8.67773 1.77832L8.76673 2.31234C8.95961 3.46961 9.05605 4.04825 9.45292 4.40036C9.86693 4.76766 10.4538 4.77832 11.6777 4.77832C12.9016 4.77832 13.4885 4.76766 13.9025 4.40036C14.2994 4.04825 14.3958 3.46961 14.5887 2.31234L14.6777 1.77832',
  d8: 'M18.6779 18.7737C18.4982 20.6932 17.1109 21.778 15.1779 21.778H8.18652C6.25352 21.778 4.68652 20.211 4.68652 18.278L4.78674 5.26367',
  d9: 'M6.83496 2.04867C7.25071 1.87453 7.7072 1.77832 8.18616 1.77832H15.1776C17.1106 1.77832 18.6776 3.34532 18.6776 5.27832V14.7834',
  d10: 'M10.6777 18.7783H12.6777',
  d11: 'M1.67773 1.77832L21.6777 21.7783',
  d12: 'M18.9954 18.9567C18.8156 20.9011 17.4284 21.9999 15.4954 21.9999H8.50391C6.57091 21.9999 5.00391 20.4126 5.00391 18.4546V5.26201',
  d13: 'M7.00195 2.38554C7.4177 2.2114 7.90755 2.11579 8.4856 2.04835L15.4956 2C17.4286 2 18.9956 3.567 18.9956 5.5V15.0051M15.0102 2.00335L14.6089 3.76267C14.5666 3.94797 14.5096 4.12959 14.4384 4.3058V4.3058C14.2857 4.68374 13.9189 4.93117 13.5113 4.93117H10.4298C9.98997 4.93117 9.60175 4.64374 9.47337 4.22302L9.34579 3.8049L8.91621 2.04538',
  d14: 'M14.1703 1.41553C14.1825 1.33623 14.1223 1.26427 14.0421 1.26258C13.4437 1.24999 12.7831 1.24999 12.0559 1.25H12.0559H11.9443H11.9443C11.2187 1.24999 10.5593 1.24999 9.9619 1.2625C9.87997 1.26422 9.8183 1.33739 9.83005 1.41849C9.92881 2.01096 9.99345 2.39014 10.0752 2.66868C10.1517 2.92953 10.2198 3.01384 10.2729 3.06094C10.3313 3.11277 10.4222 3.16922 10.6865 3.20574C10.9759 3.24574 11.3709 3.24992 11.9999 3.24992C12.629 3.24992 13.024 3.24574 13.3134 3.20574C13.5776 3.16922 13.6686 3.11277 13.727 3.06094C13.7801 3.01384 13.8481 2.92952 13.9247 2.66868C14.0066 2.38967 14.0713 2.00969 14.1703 1.41553ZM8.3406 1.59979C8.32081 1.46323 8.19637 1.36642 8.05962 1.38481C7.41649 1.47128 6.84379 1.6179 6.34042 1.8781C6.08595 2.00963 5.95872 2.0754 5.93533 2.2259C5.91195 2.3764 6.02537 2.48982 6.25221 2.71667L18.93 15.3945C19.1884 15.6529 19.3176 15.7821 19.4301 15.7895C19.5231 15.7957 19.6143 15.7579 19.6757 15.6878C19.75 15.603 19.75 15.4206 19.75 15.0557V8.94424C19.75 7.34164 19.75 6.06268 19.6152 5.05959C19.4759 4.02333 19.1803 3.16992 18.5052 2.49478C17.8301 1.81964 16.9767 1.52413 15.9404 1.38481C15.8045 1.36654 15.6806 1.46211 15.6599 1.59764L15.6507 1.65723L15.6437 1.69937C15.5533 2.24195 15.4746 2.71391 15.3639 3.09107C15.2448 3.4969 15.0662 3.87796 14.7225 4.18296C14.3669 4.49844 13.9573 4.63097 13.5187 4.6916C13.1051 4.74876 12.5947 4.7499 11.9999 4.7499C11.4051 4.7499 10.8947 4.74876 10.4811 4.6916C10.0424 4.63097 9.6329 4.49844 9.27733 4.18296C8.93355 3.87796 8.75495 3.4969 8.63584 3.09107C8.52515 2.71391 8.44652 2.24195 8.35612 1.69937L8.3491 1.65722L8.34665 1.64149L8.3406 1.59979ZM4.25 15.0557V8.9442V8.94419C4.24998 7.34163 4.24997 6.06267 4.38483 5.05959C4.38518 5.05698 4.38536 5.05567 4.38736 5.04582C4.43131 4.8297 4.71278 4.73459 4.87881 4.87975C4.88637 4.88636 4.88992 4.88991 4.89701 4.897L19.2853 19.2853C19.4004 19.4003 19.4579 19.4578 19.4785 19.5361C19.4992 19.6143 19.4791 19.6874 19.4389 19.8335C19.2615 20.4782 18.9754 21.035 18.5052 21.5052C17.8301 22.1803 16.9767 22.4758 15.9404 22.6152C14.9373 22.75 13.6583 22.75 12.0557 22.75H11.9443C10.3417 22.75 9.0627 22.75 8.05962 22.6152C7.02335 22.4758 6.16994 22.1803 5.4948 21.5052C4.81966 20.83 4.52415 19.9766 4.38483 18.9404C4.24997 17.9373 4.24998 16.6583 4.25 15.0557V15.0557ZM10.25 20C10.25 19.5858 10.5858 19.25 11 19.25H13C13.4142 19.25 13.75 19.5858 13.75 20C13.75 20.4142 13.4142 20.75 13 20.75H11C10.5858 20.75 10.25 20.4142 10.25 20Z',
  d15: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d16: 'M14.1716 1.41553C14.1837 1.33623 14.1236 1.26427 14.0434 1.26258C13.445 1.24999 12.7844 1.24999 12.0572 1.25H11.9456C11.22 1.24999 10.5605 1.24999 9.96317 1.2625C9.88124 1.26422 9.81957 1.33739 9.83133 1.41849C9.93008 2.01096 9.99472 2.39014 10.0765 2.66868C10.153 2.92953 10.2211 3.01384 10.2742 3.06094C10.3326 3.11277 10.4235 3.16922 10.6878 3.20574C10.9772 3.24574 11.3722 3.24992 12.0012 3.24992C12.6303 3.24992 13.0253 3.24574 13.3146 3.20574C13.5789 3.16922 13.6699 3.11277 13.7283 3.06094C13.7814 3.01384 13.8494 2.92953 13.926 2.66868C14.0079 2.38967 14.0726 2.00969 14.1716 1.41553Z',
  d17: 'M8.34188 1.59979C8.32209 1.46323 8.19764 1.36642 8.06089 1.38481C7.41776 1.47128 6.84506 1.6179 6.3417 1.8781C6.08723 2.00963 5.95999 2.0754 5.93661 2.2259C5.91322 2.3764 6.02664 2.48983 6.25349 2.71667L18.9313 15.3945C19.1897 15.6529 19.3189 15.7821 19.4314 15.7895C19.5244 15.7957 19.6156 15.7579 19.677 15.6878C19.7513 15.603 19.7513 15.4206 19.7513 15.0557V8.94424C19.7513 7.34164 19.7513 6.06268 19.6164 5.05959C19.4771 4.02333 19.1816 3.16992 18.5065 2.49478C17.8313 1.81964 16.9779 1.52413 15.9417 1.38481C15.8058 1.36654 15.6819 1.46212 15.6611 1.59764L15.652 1.65723L15.6449 1.69937C15.5545 2.24195 15.4759 2.71391 15.3652 3.09107C15.2461 3.4969 15.0675 3.87796 14.7237 4.18296C14.3681 4.49844 13.9586 4.63097 13.5199 4.6916C13.1064 4.74876 12.596 4.7499 12.0012 4.7499C11.4064 4.7499 10.896 4.74876 10.4824 4.6916C10.0437 4.63097 9.63418 4.49844 9.2786 4.18296C8.93483 3.87796 8.75622 3.4969 8.63712 3.09107C8.52642 2.71391 8.44779 2.24195 8.35739 1.69937L8.35037 1.65722L8.34792 1.64149L8.34188 1.59979Z',
  d18: 'M4.25 15.058V8.94646C4.24998 7.3439 4.24997 6.06492 4.38483 5.06185C4.38518 5.05923 4.38536 5.05792 4.38736 5.04807C4.43131 4.83195 4.71278 4.73684 4.87881 4.882C4.88637 4.88861 4.88992 4.89216 4.89701 4.89925L19.2853 19.2876C19.4004 19.4026 19.4579 19.4601 19.4785 19.5383C19.4992 19.6166 19.4791 19.6896 19.4389 19.8358C19.2615 20.4805 18.9754 21.0372 18.5052 21.5074C17.8301 22.1826 16.9767 22.4781 15.9404 22.6174C14.9373 22.7523 13.6583 22.7523 12.0557 22.7522H11.9443C10.3417 22.7523 9.0627 22.7523 8.05962 22.6174C7.02335 22.4781 6.16994 22.1826 5.4948 21.5074C4.81966 20.8323 4.52415 19.9789 4.38483 18.9426C4.24997 17.9395 4.24998 16.6605 4.25 15.058ZM10.25 20.002C10.25 19.5878 10.5858 19.252 11 19.252H13C13.4142 19.252 13.75 19.5878 13.75 20.002C13.75 20.4162 13.4142 20.752 13 20.752H11C10.5858 20.752 10.25 20.4162 10.25 20.002Z',
  d19: 'M9 2L10 5H14L15 2',
  d20: 'M10.5 19H13.5',
  d21: 'M5.18198 2H19V15.818M19 18.9989V22H5V4.99887',
  d22: 'M8.4269 1.25H4.99414C4.92874 1.25 4.8653 1.25837 4.80483 1.2741L19.7441 16.2134V2C19.7441 1.58579 19.4084 1.25 18.9941 1.25H15.5583L14.5584 4.74999H9.4269L8.4269 1.25ZM4.24414 22C4.24414 22.4142 4.57993 22.75 4.99414 22.75H18.9941C19.4084 22.75 19.7441 22.4142 19.7441 22V19.7489L4.24414 4.24894V22ZM9.98693 1.25H13.9983L13.4269 3.24999H10.5584L9.98693 1.25ZM10.498 19.75H13.498V18.25H10.498V19.75Z',
  d23: 'M21.3338 22.75L1.24805 2.66421L2.66226 1.25L22.748 21.3358L21.3338 22.75Z',
};

export const IconPhoneOff01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="phone-off-01-stroke-rounded IconPhoneOff01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPhoneOff01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="phone-off-01-duotone-rounded IconPhoneOff01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconPhoneOff01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="phone-off-01-twotone-rounded IconPhoneOff01TwotoneRounded"
    >
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPhoneOff01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="phone-off-01-solid-rounded IconPhoneOff01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPhoneOff01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="phone-off-01-bulk-rounded IconPhoneOff01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPhoneOff01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="phone-off-01-stroke-sharp IconPhoneOff01StrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
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
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPhoneOff01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="phone-off-01-solid-sharp IconPhoneOff01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPhoneOff01: TheIconSelfPack = {
  name: 'PhoneOff01',
  StrokeRounded: IconPhoneOff01StrokeRounded,
  DuotoneRounded: IconPhoneOff01DuotoneRounded,
  TwotoneRounded: IconPhoneOff01TwotoneRounded,
  SolidRounded: IconPhoneOff01SolidRounded,
  BulkRounded: IconPhoneOff01BulkRounded,
  StrokeSharp: IconPhoneOff01StrokeSharp,
  SolidSharp: IconPhoneOff01SolidSharp,
};