import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 15C5.34315 15 4 16.3431 4 18C4 19.6569 5.34315 21 7 21C8.65685 21 10 19.6569 10 18C10 16.3431 8.65685 15 7 15Z',
  d2: 'M17 15C15.3431 15 14 16.3431 14 18C14 19.6569 15.3431 21 17 21C18.6569 21 20 19.6569 20 18C20 16.3431 18.6569 15 17 15Z',
  d3: 'M14 17H10',
  d4: 'M22 13C19.5434 11.7725 15.9734 11 12 11C8.02658 11 4.45659 11.7725 2 13',
  d5: 'M19 11.5L17.9425 4.71245C17.7268 3.3282 16.2232 2.57812 15.0093 3.24919L14.3943 3.58915C12.9019 4.41412 11.0981 4.41412 9.60574 3.58915L8.99074 3.24919C7.77676 2.57812 6.27318 3.3282 6.05751 4.71246L5 11.5',
  d6: 'M14.3943 3.58915L15.0093 3.24919C16.2233 2.57812 17.7269 3.3282 17.9425 4.71245L18.9127 11.8567C16.8938 11.3128 14.5286 11 12 11C9.47146 11 7.10626 11.3128 5.0874 11.8567L6.05755 4.71246C6.27322 3.3282 7.7768 2.57812 8.99078 3.24919L9.60578 3.58915C11.0982 4.41412 12.9019 4.41412 14.3943 3.58915Z',
  d7: 'M7.13889 16.125C6.065 16.125 5.19444 16.9645 5.19444 18C5.19444 19.0355 6.065 19.875 7.13889 19.875C8.21278 19.875 9.08333 19.0355 9.08333 18C9.08333 16.9645 8.21278 16.125 7.13889 16.125ZM3.25 18C3.25 15.9289 4.99112 14.25 7.13889 14.25C8.57833 14.25 9.83511 15.0041 10.5075 16.125H13.4925C14.1649 15.0041 15.4217 14.25 16.8611 14.25C19.0089 14.25 20.75 15.9289 20.75 18C20.75 20.0711 19.0089 21.75 16.8611 21.75C14.7133 21.75 12.9722 20.0711 12.9722 18L11.0278 18C11.0278 20.0711 9.28666 21.75 7.13889 21.75C4.99112 21.75 3.25 20.0711 3.25 18ZM16.8611 16.125C15.7872 16.125 14.9167 16.9645 14.9167 18C14.9167 19.0355 15.7872 19.875 16.8611 19.875C17.935 19.875 18.8056 19.0355 18.8056 18C18.8056 16.9645 17.935 16.125 16.8611 16.125Z',
  d8: 'M5.31646 4.59694C5.61042 2.71017 7.67282 1.66363 9.35359 2.59274L9.96859 2.9327C11.2352 3.63285 12.7648 3.63285 14.0314 2.9327L14.6464 2.59274C16.3272 1.66364 18.3896 2.71017 18.6836 4.59693L19.7411 11.3845C19.779 11.6276 19.6951 11.8739 19.5168 12.0435C19.3385 12.213 19.0883 12.2843 18.8473 12.2342C16.732 11.7944 10.9674 11.1664 5.1355 12.2376C4.8965 12.2815 4.65105 12.2069 4.47691 12.0374C4.30278 11.8679 4.22154 11.6246 4.25895 11.3845L5.31646 4.59694Z',
  d9: 'M12.0005 11.9999C8.22613 11.9999 4.89604 12.6593 2.66477 13.6575C2.18196 13.8735 1.59501 13.6982 1.35376 13.2659C1.11251 12.8337 1.30834 12.3082 1.79114 12.0922C4.3613 10.9424 8.00877 10.25 12.0005 10.25C15.9922 10.25 19.6397 10.9424 22.2098 12.0922C22.6926 12.3082 22.8885 12.8337 22.6472 13.2659C22.406 13.6982 21.819 13.8735 21.3362 13.6575C19.1049 12.6593 15.7748 11.9999 12.0005 11.9999Z',
  d10: 'M19 11.4998L18 2H17.5C14.3834 4.66667 9.61659 4.66667 6.5 2H6L5 11.4998',
  d11: 'M7.13987 16.625C6.06598 16.625 5.19542 17.4645 5.19542 18.5C5.19542 19.5355 6.06598 20.375 7.13987 20.375C8.21375 20.375 9.08431 19.5355 9.08431 18.5C9.08431 17.4645 8.21375 16.625 7.13987 16.625ZM3.25098 18.5C3.25098 16.4289 4.99209 14.75 7.13987 14.75C8.5793 14.75 9.83608 15.5041 10.5085 16.625H13.4935C14.1659 15.5041 15.4227 14.75 16.8621 14.75C19.0099 14.75 20.751 16.4289 20.751 18.5C20.751 20.5711 19.0099 22.25 16.8621 22.25C14.7143 22.25 12.9732 20.5711 12.9732 18.5L11.0288 18.5C11.0288 20.5711 9.28764 22.25 7.13987 22.25C4.99209 22.25 3.25098 20.5711 3.25098 18.5ZM16.8621 16.625C15.7882 16.625 14.9176 17.4645 14.9176 18.5C14.9176 19.5355 15.7882 20.375 16.8621 20.375C17.936 20.375 18.8065 19.5355 18.8065 18.5C18.8065 17.4645 17.936 16.625 16.8621 16.625Z',
  d12: 'M12 12.5516C8.21061 12.5516 4.86727 13.2911 2.62711 14.4105L1.75 12.6551C4.33039 11.3658 7.99238 10.5894 12 10.5894C16.0076 10.5894 19.6696 11.3658 22.25 12.6551L21.3729 14.4105C19.1327 13.2911 15.7894 12.5516 12 12.5516Z',
  d13: 'M6.77735 1.75L6.98787 1.93013C9.82376 4.35662 14.1768 4.35662 17.0127 1.93013L17.2232 1.75H18.6755L19.7462 11.9213H4.25439L5.32508 1.75H6.77735Z',
};

export const IconAnonymousStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="anonymous-stroke-rounded IconAnonymousStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAnonymousDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="anonymous-duotone-rounded IconAnonymousDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconAnonymousTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="anonymous-twotone-rounded IconAnonymousTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconAnonymousSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="anonymous-solid-rounded IconAnonymousSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAnonymousBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="anonymous-bulk-rounded IconAnonymousBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAnonymousStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="anonymous-stroke-sharp IconAnonymousStrokeSharp"
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAnonymousSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="anonymous-solid-sharp IconAnonymousSolidSharp"
    >
      <path 
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAnonymous: TheIconSelfPack = {
  name: 'Anonymous',
  StrokeRounded: IconAnonymousStrokeRounded,
  DuotoneRounded: IconAnonymousDuotoneRounded,
  TwotoneRounded: IconAnonymousTwotoneRounded,
  SolidRounded: IconAnonymousSolidRounded,
  BulkRounded: IconAnonymousBulkRounded,
  StrokeSharp: IconAnonymousStrokeSharp,
  SolidSharp: IconAnonymousSolidSharp,
};