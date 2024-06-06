import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 22H6.5C4.62513 22 3.6877 22 3.03054 21.4695C2.8183 21.2982 2.63166 21.0908 2.47746 20.855C2 20.1248 2 19.0832 2 17C2 14.9168 2 13.8752 2.47746 13.145C2.63166 12.9092 2.8183 12.7018 3.03054 12.5305C3.6877 12 4.62513 12 6.5 12H17.5C19.3749 12 20.3123 12 20.9695 12.5305C21.1817 12.7018 21.3683 12.9092 21.5225 13.145C22 13.8752 22 14.9168 22 17C22 19.0832 22 20.1248 21.5225 20.855C21.3683 21.0908 21.1817 21.2982 20.9695 21.4695C20.3123 22 19.3749 22 17.5 22Z',
  d2: 'M12.4996 9H12.5086M17 3.95174C15.8483 2.74585 14.2574 2 12.5 2C10.7426 2 9.15165 2.74585 8 3.95174M10.25 6.30769C10.8258 5.70475 11.6213 5.33182 12.5 5.33182C13.3787 5.33182 14.1742 5.70475 14.75 6.30769',
  d3: 'M17.9998 17H18.0088',
  d4: 'M13.9998 17H14.0088',
  d5: 'M6 17H10',
  d6: 'M7.27682 3.51108C8.60423 2.12116 10.4513 1.25 12.5 1.25C14.5487 1.25 16.3958 2.12116 17.7232 3.51108C18.1046 3.91048 18.0901 4.54348 17.6907 4.92492C17.2913 5.30636 16.6583 5.2918 16.2768 4.8924C15.3009 3.87054 13.966 3.25 12.5 3.25C11.034 3.25 9.69908 3.87054 8.72318 4.8924C8.34174 5.2918 7.70875 5.30636 7.30934 4.92492C6.90994 4.54348 6.89538 3.91048 7.27682 3.51108ZM9.52682 5.86703C10.2784 5.08006 11.33 4.58182 12.5 4.58182C13.67 4.58182 14.7216 5.08006 15.4732 5.86703C15.8546 6.26644 15.8401 6.89943 15.4407 7.28087C15.0413 7.66231 14.4083 7.64775 14.0268 7.24835C13.6267 6.82944 13.0873 6.58182 12.5 6.58182C11.9127 6.58182 11.3733 6.82944 10.9732 7.24835C10.5917 7.64775 9.95875 7.66231 9.55934 7.28087C9.15994 6.89943 9.14538 6.26644 9.52682 5.86703ZM11.4996 9.25C11.4996 8.69772 11.9473 8.25 12.4996 8.25H12.5086C13.0609 8.25 13.5086 8.69772 13.5086 9.25C13.5086 9.80228 13.0609 10.25 12.5086 10.25H12.4996C11.9473 10.25 11.4996 9.80228 11.4996 9.25Z',
  d7: 'M17.5463 11.25H6.45372H6.4537H6.45369C5.55567 11.25 4.81482 11.25 4.21899 11.3217C3.59372 11.397 3.03942 11.5595 2.55943 11.9469C2.28428 12.1691 2.04536 12.4354 1.84974 12.7346C1.51619 13.2447 1.37825 13.8255 1.31322 14.4924C1.24998 15.1409 1.24999 15.9525 1.25 16.9608V16.9608V16.9608V17.0392V17.0392V17.0392C1.24999 18.0475 1.24998 18.8591 1.31322 19.5076C1.37825 20.1745 1.51619 20.7553 1.84974 21.2654C2.04536 21.5646 2.28428 21.8309 2.55943 22.0531C3.03942 22.4406 3.59372 22.603 4.21899 22.6783C4.81483 22.75 5.55566 22.75 6.45369 22.75H17.5463C18.4443 22.75 19.1852 22.75 19.781 22.6783C20.4063 22.603 20.9606 22.4406 21.4406 22.0531C21.7157 21.8309 21.9546 21.5646 22.1503 21.2654C22.4838 20.7553 22.6218 20.1745 22.6868 19.5076C22.75 18.8591 22.75 18.0475 22.75 17.0391V16.9609C22.75 15.9525 22.75 15.1409 22.6868 14.4924C22.6218 13.8255 22.4838 13.2447 22.1503 12.7346C21.9546 12.4354 21.7157 12.1691 21.4406 11.9469C20.9606 11.5595 20.4063 11.397 19.781 11.3217C19.1852 11.25 18.4444 11.25 17.5463 11.25H17.5463H17.5463ZM16.9998 17C16.9998 16.4477 17.4455 16 17.9953 16H18.0042C18.554 16 18.9998 16.4477 18.9998 17C18.9998 17.5523 18.554 18 18.0042 18H17.9953C17.4455 18 16.9998 17.5523 16.9998 17ZM13.9953 16C13.4455 16 12.9998 16.4477 12.9998 17C12.9998 17.5523 13.4455 18 13.9953 18H14.0042C14.554 18 14.9998 17.5523 14.9998 17C14.9998 16.4477 14.554 16 14.0042 16H13.9953ZM5 17C5 16.4477 5.44772 16 6 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H6C5.44772 18 5 17.5523 5 17Z',
  d8: 'M6.45372 11.25H17.5463H17.5463C18.4443 11.25 19.1852 11.25 19.781 11.3217C20.4063 11.397 20.9606 11.5595 21.4406 11.9469C21.7157 12.1691 21.9546 12.4354 22.1503 12.7346C22.4838 13.2447 22.6218 13.8255 22.6868 14.4924C22.75 15.1409 22.75 15.9525 22.75 16.9609V17.0391C22.75 18.0475 22.75 18.8591 22.6868 19.5076C22.6218 20.1745 22.4838 20.7553 22.1503 21.2654C21.9546 21.5646 21.7157 21.8309 21.4406 22.0531C20.9606 22.4405 20.4063 22.603 19.781 22.6783C19.1852 22.75 18.4443 22.75 17.5463 22.75H6.45369C5.55565 22.75 4.81483 22.75 4.21899 22.6783C3.59372 22.603 3.03942 22.4405 2.55943 22.0531C2.28428 21.8309 2.04536 21.5646 1.84974 21.2654C1.51618 20.7553 1.37825 20.1745 1.31322 19.5076C1.24998 18.8591 1.24999 18.0475 1.25 17.0392V17.0392V16.9608V16.9608C1.24999 15.9525 1.24998 15.1409 1.31322 14.4924C1.37825 13.8255 1.51618 13.2447 1.84974 12.7346C2.04536 12.4354 2.28428 12.1691 2.55943 11.9469C3.03942 11.5595 3.59372 11.397 4.21899 11.3217C4.81482 11.25 5.55568 11.25 6.4537 11.25H6.45372Z',
  d9: 'M17.9953 16C17.4455 16 16.9998 16.4477 16.9998 17C16.9998 17.5523 17.4455 18 17.9953 18H18.0042C18.554 18 18.9998 17.5523 18.9998 17C18.9998 16.4477 18.554 16 18.0042 16H17.9953ZM12.9998 17C12.9998 16.4477 13.4455 16 13.9953 16H14.0042C14.554 16 14.9998 16.4477 14.9998 17C14.9998 17.5523 14.554 18 14.0042 18H13.9953C13.4455 18 12.9998 17.5523 12.9998 17ZM6 16C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18H10C10.5523 18 11 17.5523 11 17C11 16.4477 10.5523 16 10 16H6Z',
  d10: 'M22 12H2V22H22V12Z',
  d11: 'M12.5 9H12.509',
  d12: 'M17 3.95174C15.8483 2.74585 14.2574 2 12.5 2C10.7426 2 9.15165 2.74585 8 3.95174M10.25 6.30769C10.8258 5.70475 11.6213 5.33182 12.5 5.33182C13.3787 5.33182 14.1742 5.70475 14.75 6.30769',
  d13: 'M5 17H11',
  d14: 'M11.5 9C11.5 8.44772 11.9477 8 12.5 8H12.509C13.0613 8 13.509 8.44772 13.509 9C13.509 9.55228 13.0613 10 12.509 10H12.5C11.9477 10 11.5 9.55228 11.5 9Z',
  d15: 'M7.45703 3.43374C8.7405 2.08984 10.5235 1.25 12.4994 1.25C14.4753 1.25 16.2583 2.08984 17.5418 3.43374L16.457 4.46973C15.4372 3.40187 14.0383 2.75 12.4994 2.75C10.9606 2.75 9.56164 3.40187 8.5418 4.46973L7.45703 3.43374ZM9.70703 5.7897C10.4147 5.04873 11.4022 4.58182 12.4994 4.58182C13.5966 4.58182 14.5842 5.04873 15.2918 5.7897L14.207 6.82569C13.763 6.36077 13.1596 6.08182 12.4994 6.08182C11.8393 6.08182 11.2358 6.36077 10.7918 6.82569L9.70703 5.7897Z',
  d16: 'M2 11.25C1.58579 11.25 1.25 11.5858 1.25 12V22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V12C22.75 11.5858 22.4142 11.25 22 11.25H2ZM19.009 16H17V18H19.009V16ZM13 16H15.009V18H13V16ZM5 18H11V16H5V18Z',
};

export const IconRouterStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="router-stroke-rounded IconRouterStrokeRounded"
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

export const IconRouterDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="router-duotone-rounded IconRouterDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconRouterTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="router-twotone-rounded IconRouterTwotoneRounded"
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

export const IconRouterSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="router-solid-rounded IconRouterSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconRouterBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="router-bulk-rounded IconRouterBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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

export const IconRouterStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="router-stroke-sharp IconRouterStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRouterSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="router-solid-sharp IconRouterSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRouter: TheIconSelfPack = {
  name: 'Router',
  StrokeRounded: IconRouterStrokeRounded,
  DuotoneRounded: IconRouterDuotoneRounded,
  TwotoneRounded: IconRouterTwotoneRounded,
  SolidRounded: IconRouterSolidRounded,
  BulkRounded: IconRouterBulkRounded,
  StrokeSharp: IconRouterStrokeSharp,
  SolidSharp: IconRouterSolidSharp,
};