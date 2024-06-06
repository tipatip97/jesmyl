import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.72727 2C6.46607 2 4.83546 2 3.70307 2.79784C3.37862 3.02643 3.09058 3.29752 2.8477 3.60289C2 4.66867 2 6.20336 2 9.27273V11.8182C2 14.7814 2 16.2629 2.46894 17.4462C3.22281 19.3486 4.81714 20.8491 6.83836 21.5586C8.09563 22 9.66981 22 12.8182 22C14.6173 22 15.5168 22 16.2352 21.7478C17.3902 21.3424 18.3012 20.4849 18.732 19.3979C19 18.7217 19 17.8751 19 16.1818V15.5',
  d2: 'M15 7.5C15 7.5 15.5 7.5 16 8.5C16 8.5 17.5882 6 19 5.5',
  d3: 'M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z',
  d4: 'M2 12C2 13.8409 3.49238 15.3333 5.33333 15.3333C5.99912 15.3333 6.78404 15.2167 7.43137 15.3901C8.00652 15.5442 8.45576 15.9935 8.60988 16.5686C8.78333 17.216 8.66667 18.0009 8.66667 18.6667C8.66667 20.5076 10.1591 22 12 22',
  d5: 'M2 9.27273V11.8182C2 12.9663 2 13.5403 2.2721 14.0072C2.44053 14.2961 2.70388 14.5595 2.99285 14.7279C3.45967 15 4.04771 15 5.2238 15H6.5C7.44281 15 7.91421 15 8.20711 15.2929C8.5 15.5858 8.5 16.0572 8.5 17V18.2741C8.5 19.9755 8.5 20.8263 9.08516 21.4119C9.67031 21.9976 10.4869 21.9983 12.1201 21.9998C12.3439 22 12.5764 22 12.8182 22C14.6173 22 15.5168 22 16.2352 21.7478C17.3902 21.3424 18.3012 20.4849 18.732 19.3979C19 18.7217 19 17.8751 19 16.1818V11.584C18.3875 11.8516 17.7111 12 17 12C14.2386 12 12 9.76142 12 7C12 4.70721 13.5433 2.77486 15.6477 2.18503C14.526 2 13.0385 2 11 2H9.72727C6.46607 2 4.83546 2 3.70307 2.79784C3.37862 3.02643 3.09058 3.29752 2.8477 3.60289C2 4.66867 2 6.20336 2 9.27273Z',
  d6: 'M17 1.25C13.8244 1.25 11.25 3.82436 11.25 7C11.25 10.1756 13.8244 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7C22.75 3.82436 20.1756 1.25 17 1.25ZM19.2504 6.20717C19.6408 6.06889 19.8453 5.64027 19.707 5.24982C19.5687 4.85937 19.1401 4.65495 18.7496 4.79323C18.2675 4.96399 17.8199 5.28384 17.4411 5.61601C17.0546 5.955 16.6963 6.34574 16.3947 6.70726C16.2485 6.88246 16.1135 7.05341 15.9928 7.21192C15.9046 7.12935 15.8162 7.05964 15.7285 7.00117C15.7105 6.98917 15.6926 6.97667 15.6743 6.96394C15.5311 6.86424 15.3673 6.7502 15 6.7502C14.5858 6.7502 14.25 7.08599 14.25 7.5002C14.25 7.87492 14.5248 8.18546 14.8839 8.24127C14.8875 8.2434 14.8917 8.24603 14.8965 8.24924C14.9522 8.28637 15.1237 8.42459 15.3292 8.83561C15.4501 9.07738 15.6917 9.2354 15.9616 9.24922C16.2315 9.26304 16.4882 9.13018 16.6332 8.90213C16.796 8.67148 17.276 7.9924 17.5465 7.66815C17.8184 7.34217 18.1219 7.01416 18.4302 6.74377C18.7463 6.46657 19.0266 6.28642 19.2504 6.20717Z',
  d7: 'M9.74761 1.25H9.6927C8.1516 1.24999 6.91879 1.24997 5.93654 1.35273C4.92712 1.45832 4.0659 1.68141 3.32114 2.20807C2.93077 2.48412 2.58223 2.8129 2.28704 3.18539C1.71721 3.90445 1.47396 4.74234 1.35985 5.71573C1.24996 6.65306 1.24998 7.82571 1.25 9.2738V11.8572C1.25 13.2755 1.25 14.3882 1.30919 15.2889C1.36944 16.2058 1.49398 16.9705 1.77509 17.6824C2.61848 19.8185 4.39222 21.4812 6.61221 22.2634C7.99465 22.7505 9.68131 22.7503 12.5209 22.7499L12.9605 22.75C14.5155 22.7505 15.548 22.7509 16.4068 22.4483C17.7834 21.9633 18.8918 20.929 19.4206 19.5897C19.6039 19.1255 19.6795 18.6399 19.7153 18.0952C19.75 17.5666 19.75 16.9191 19.75 16.1199V15.4204C19.75 14.8807 19.3141 14.4431 18.7763 14.4431C18.2386 14.4431 17.8026 14.8807 17.8026 15.4204V16.0867C17.8026 16.927 17.8021 17.5099 17.7721 17.9666C17.7427 18.4145 17.6879 18.673 17.6102 18.8696C17.3001 19.655 16.6344 20.2966 15.7618 20.6041C15.2584 20.7814 14.5913 20.7954 12.7572 20.7954C12.1529 20.7954 11.6157 20.7949 11.135 20.7915C10.7351 20.7886 10.3295 20.6768 10.0645 20.3772C9.66164 19.9216 9.41711 19.3227 9.41711 18.6667L9.4536 17.6263C9.46149 17.2462 9.44949 16.8027 9.33477 16.3745C9.1113 15.5405 8.4599 14.8891 7.62592 14.6657C7.19778 14.551 6.75424 14.539 6.37414 14.5468L5.33378 14.5833C4.66776 14.5833 4.06061 14.3313 3.60251 13.9174C3.3073 13.6507 3.19945 13.2465 3.19831 12.8487C3.1974 12.5305 3.19737 12.1894 3.19737 11.8223V9.33468C3.19737 7.81122 3.19894 6.7539 3.29387 5.94413C3.38611 5.15734 3.55555 4.72455 3.81111 4.40206C3.98891 4.1777 4.20128 3.97661 4.44274 3.80586C4.80057 3.55283 5.28449 3.38606 6.13841 3.29674C7.00786 3.20578 8.13899 3.20454 9.74761 3.20454C10.2854 3.20454 10.7213 2.767 10.7213 2.22727C10.7213 1.68754 10.2854 1.25 9.74761 1.25Z',
  d8: 'M11 2H2.01C2.00448 2 2 2.00448 2 2.01V15M2 15L9 22M2 15H9V22M9 22H18.99C18.9955 22 19 21.9955 19 21.99V14',
  d9: 'M14.75 7L16.25 8.5L19.25 5.5M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z',
  d10: 'M17 1.25C13.8244 1.25 11.25 3.82436 11.25 7C11.25 10.1756 13.8244 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7C22.75 3.82436 20.1756 1.25 17 1.25ZM19.7804 6.03039L18.7197 4.96973L16.2501 7.4394L15.2804 6.46973L14.2197 7.53039L16.2501 9.56072L19.7804 6.03039Z',
  d11: 'M3.19737 3.20455H10.9868V1.25H2.22368C1.68593 1.25 1.25 1.68754 1.25 2.22727V15.3366L8.63616 22.75H18.7763C19.0346 22.75 19.2822 22.647 19.4648 22.4638C19.6474 22.2805 19.75 22.0319 19.75 21.7727V13.9545L17.8026 13.9545L17.8026 20.7955H10.0132V13.9545H3.19737V3.20455Z',
};

export const IconFileValidationStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-validation-stroke-rounded IconFileValidationStrokeRounded"
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

export const IconFileValidationDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-validation-duotone-rounded IconFileValidationDuotoneRounded"
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
        d={d.d5} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileValidationTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-validation-twotone-rounded IconFileValidationTwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileValidationSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-validation-solid-rounded IconFileValidationSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileValidationBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-validation-bulk-rounded IconFileValidationBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileValidationStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-validation-stroke-sharp IconFileValidationStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconFileValidationSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-validation-solid-sharp IconFileValidationSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfFileValidation: TheIconSelfPack = {
  name: 'FileValidation',
  StrokeRounded: IconFileValidationStrokeRounded,
  DuotoneRounded: IconFileValidationDuotoneRounded,
  TwotoneRounded: IconFileValidationTwotoneRounded,
  SolidRounded: IconFileValidationSolidRounded,
  BulkRounded: IconFileValidationBulkRounded,
  StrokeSharp: IconFileValidationStrokeSharp,
  SolidSharp: IconFileValidationSolidSharp,
};