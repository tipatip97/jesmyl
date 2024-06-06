import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 8.8C3 7 5.06126 5.2 7.68468 5.2L16.9574 5.2C19.2 5.2 21 3.85 21 2.5',
  d2: 'M16.5 5.5L16 11',
  d3: 'M10 5.5C9.86667 8.5625 9.6 14.25 9.2 16C8.8 17.75 8 19.5 6 19.5',
  d4: 'M17 16.1667V17.5M17 17.5V18.8333M17 17.5H18.3333M17 17.5H15.6667M21 17.5C21 19.7091 19.2091 21.5 17 21.5C14.7909 21.5 13 19.7091 13 17.5C13 15.2909 14.7909 13.5 17 13.5C19.2091 13.5 21 15.2909 21 17.5Z',
  d5: 'M21 17.5C21 19.7091 19.2091 21.5 17 21.5C14.7909 21.5 13 19.7091 13 17.5C13 15.2909 14.7909 13.5 17 13.5C19.2091 13.5 21 15.2909 21 17.5Z',
  d6: 'M21 1.625C21.5523 1.625 22 2.07272 22 2.625C22 3.75141 21.2687 4.69359 20.3894 5.3031C19.4837 5.93088 18.2724 6.325 16.9574 6.325L7.68468 6.325C6.59922 6.325 5.64865 6.69823 4.98348 7.23069C4.30509 7.77373 4 8.4105 4 8.925C4 9.47728 3.55228 9.925 3 9.925C2.44772 9.925 2 9.47728 2 8.925C2 7.6395 2.72554 6.47627 3.73363 5.66931C4.75495 4.85177 6.14673 4.325 7.68468 4.325L16.9574 4.325C17.885 4.325 18.695 4.04412 19.25 3.6594C19.8313 3.25641 20 2.84859 20 2.625C20 2.07272 20.4477 1.625 21 1.625Z',
  d7: 'M16.5906 4.62917C17.1406 4.67917 17.546 5.16558 17.496 5.7156L16.996 11.2156C16.946 11.7656 16.4595 12.171 15.9095 12.121C15.3595 12.071 14.9542 11.5845 15.0042 11.0345L15.5042 5.53453C15.5542 4.98451 16.0406 4.57917 16.5906 4.62917Z',
  d8: 'M10.0435 4.62596C10.5953 4.64999 11.0231 5.11675 10.9991 5.66851C10.9324 7.20044 10.832 9.39753 10.6978 11.433C10.5661 13.4326 10.3963 15.3792 10.1749 16.3478C9.96409 17.27 9.625 18.311 8.99543 19.1373C8.3303 20.0103 7.34969 20.625 6 20.625C5.44772 20.625 5 20.1773 5 19.625C5 19.0727 5.44772 18.625 6 18.625C6.65031 18.625 7.0697 18.3647 7.40457 17.9252C7.775 17.439 8.03591 16.7301 8.22514 15.9022C8.40373 15.1209 8.56726 13.3487 8.70216 11.3015C8.83471 9.29001 8.93431 7.1121 9.00095 5.58152C9.02497 5.02976 9.49173 4.60194 10.0435 4.62596Z',
  d9: 'M17 12.875C14.3766 12.875 12.25 15.0016 12.25 17.625C12.25 20.2484 14.3766 22.375 17 22.375C19.6234 22.375 21.75 20.2484 21.75 17.625C21.75 15.0016 19.6234 12.875 17 12.875ZM17.7513 16.293C17.7513 15.8788 17.4155 15.543 17.0013 15.543C16.5871 15.543 16.2513 15.8788 16.2513 16.293V16.8763H15.668C15.2538 16.8763 14.918 17.2121 14.918 17.6263C14.918 18.0405 15.2538 18.3763 15.668 18.3763H16.2513V18.9596C16.2513 19.3738 16.5871 19.7096 17.0013 19.7096C17.4155 19.7096 17.7513 19.3738 17.7513 18.9596V18.3763H18.3346C18.7488 18.3763 19.0846 18.0405 19.0846 17.6263C19.0846 17.2121 18.7488 16.8763 18.3346 16.8763H17.7513V16.293Z',
  d10: 'M19.25 3.0344C19.8313 2.63141 20 2.22359 20 2H22C22 3.12641 21.2687 4.06859 20.3894 4.6781C19.4837 5.30588 18.2724 5.7 16.9574 5.7L7.68468 5.7C6.59922 5.7 5.64865 6.07323 4.98348 6.60569C4.30509 7.14873 4 7.7855 4 8.3H2C2 7.0145 2.72554 5.85127 3.73363 5.04431C4.75495 4.22677 6.14673 3.7 7.68468 3.7L16.9574 3.7C17.885 3.7 18.695 3.41912 19.25 3.0344Z',
  d11: 'M15.0039 10.4092L15.5039 4.90918L17.4957 5.09025L16.9957 10.5903L15.0039 10.4092Z',
  d12: 'M8.70216 10.676C8.83471 8.66454 8.93431 6.48663 9.00095 4.95605L10.9991 5.04305C10.9324 6.57497 10.832 8.77206 10.6978 10.8075C10.5661 12.8071 10.3963 14.7537 10.1749 15.7224C9.96409 16.6445 9.625 17.6855 8.99543 18.5118C8.3303 19.3848 7.34969 19.9996 6 19.9996V17.9996C6.65031 17.9996 7.0697 17.7393 7.40457 17.2998C7.775 16.8136 8.03591 16.1046 8.22514 15.2767C8.40373 14.4954 8.56726 12.7232 8.70216 10.676Z',
  d13: 'M17 12.5C14.3766 12.5 12.25 14.6266 12.25 17.25C12.25 19.8734 14.3766 22 17 22C19.6234 22 21.75 19.8734 21.75 17.25C21.75 14.6266 19.6234 12.5 17 12.5ZM17.7493 16.5003V15.167H16.2493V16.5003H14.916V18.0003H16.2493V19.3337H17.7493V18.0003H19.0827V16.5003H17.7493Z',
};

export const IconInsertPiStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="insert-pi-stroke-rounded IconInsertPiStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconInsertPiDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="insert-pi-duotone-rounded IconInsertPiDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      />
    </TheIconWrapper>
  );
};

export const IconInsertPiTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="insert-pi-twotone-rounded IconInsertPiTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconInsertPiSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="insert-pi-solid-rounded IconInsertPiSolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconInsertPiBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="insert-pi-bulk-rounded IconInsertPiBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconInsertPiStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="insert-pi-stroke-sharp IconInsertPiStrokeSharp"
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInsertPiSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="insert-pi-solid-sharp IconInsertPiSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfInsertPi: TheIconSelfPack = {
  name: 'InsertPi',
  StrokeRounded: IconInsertPiStrokeRounded,
  DuotoneRounded: IconInsertPiDuotoneRounded,
  TwotoneRounded: IconInsertPiTwotoneRounded,
  SolidRounded: IconInsertPiSolidRounded,
  BulkRounded: IconInsertPiBulkRounded,
  StrokeSharp: IconInsertPiStrokeSharp,
  SolidSharp: IconInsertPiSolidSharp,
};