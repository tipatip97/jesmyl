import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z',
  d2: 'M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z',
  d3: 'M14.5 17.5H9.5M2 4H12C13.4142 4 14.1213 4 14.5607 4.43934C15 4.87868 15 5.58579 15 7V15.5M15.5 6.5H17.3014C18.1311 6.5 18.5459 6.5 18.8898 6.6947C19.2336 6.8894 19.4471 7.2451 19.8739 7.95651L21.5725 10.7875C21.7849 11.1415 21.8911 11.3186 21.9456 11.5151C22 11.7116 22 11.918 22 12.331V15C22 15.9346 22 16.4019 21.799 16.75C21.6674 16.978 21.478 17.1674 21.25 17.299C20.9019 17.5 20.4346 17.5 19.5 17.5M2 13V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5',
  d4: 'M2 7H8M2 10H6',
  d5: 'M2 4V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5H14.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5C20.4346 17.5 20.9019 17.5 21.25 17.299C21.478 17.1674 21.6674 16.978 21.799 16.75C22 16.4019 22 15.9346 22 15V12.331C22 11.918 22 11.7116 21.9456 11.5151C21.8911 11.3186 21.7849 11.1415 21.5725 10.7875L19.8739 7.95651C19.4471 7.2451 19.2336 6.8894 18.8898 6.6947C18.5459 6.5 18.1311 6.5 17.3014 6.5H14.9991C14.9931 5.41249 14.9449 4.82353 14.5607 4.43934C14.1213 4 13.4142 4 12 4H2Z',
  d6: 'M1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H8C8.41421 6.25 8.75 6.58579 8.75 7C8.75 7.41421 8.41421 7.75 8 7.75H2C1.58579 7.75 1.25 7.41421 1.25 7ZM1.25 10C1.25 9.58579 1.58579 9.25 2 9.25H6C6.41421 9.25 6.75 9.58579 6.75 10C6.75 10.4142 6.41421 10.75 6 10.75H2C1.58579 10.75 1.25 10.4142 1.25 10Z',
  d7: 'M5.09886 3.25H12.0601C12.6994 3.24994 13.2737 3.24989 13.7386 3.31207C14.2462 3.37996 14.7669 3.53758 15.1934 3.9619C15.6199 4.38622 15.8073 5.17563 15.8756 5.68056L17.2199 5.68056C17.5917 5.68053 17.9369 5.68049 18.2295 5.70878C18.5534 5.7401 18.8861 5.81108 19.2145 5.99605C19.5429 6.18102 19.7753 6.4284 19.9689 6.68857C20.1439 6.92361 20.3215 7.21817 20.5128 7.53538L22.2319 10.3857L22.2319 10.3857C22.4006 10.6644 22.5714 10.9464 22.6612 11.269C22.751 11.5917 22.7505 11.9209 22.7499 12.2462L22.7498 14.9558C22.7499 15.3765 22.7499 15.7551 22.7213 16.069C22.6906 16.4059 22.6209 16.7623 22.4225 17.1042C22.2081 17.4737 21.8997 17.7805 21.5282 17.9938C21.1846 18.1912 20.5063 18.2799 20.1677 18.3105C19.7501 19.7207 18.439 20.75 16.8862 20.75C15.3368 20.75 14.0279 19.725 13.6075 18.3194H10.3924C9.97188 19.725 8.66305 20.75 7.11359 20.75C5.56083 20.75 4.24973 19.7207 3.83214 18.3105C3.4935 18.2799 2.81519 18.1912 2.47159 17.9938C2.10018 17.7805 1.79176 17.4737 1.57733 17.1042C1.37894 16.7623 1.30923 16.4059 1.27854 16.069C1.24995 15.7551 1.24997 15.3766 1.25 14.9558V14.9558V12.25H6C7.24264 12.25 8.25 11.2426 8.25 10C8.25 9.73583 8.20447 9.4823 8.12083 9.24681C9.30729 9.18402 10.25 8.2021 10.25 7C10.25 5.75736 9.24264 4.75 8 4.75H1.46787C1.56979 4.47027 1.72506 4.20119 1.96559 3.9619C2.39211 3.53758 2.9128 3.37996 3.42036 3.31207C3.88525 3.24989 4.4596 3.24994 5.09886 3.25ZM16.887 13.9444C16.5474 13.9444 16.2194 13.9937 15.9097 14.0854V7.625H18.2529L20.796 11.7881V15.8889C20.796 16.069 20.6136 16.3646 20.1626 16.3646C19.7388 14.9644 18.4326 13.9444 16.887 13.9444ZM5.64843 17.3472C5.64843 16.5418 6.30474 15.8889 7.11433 15.8889C7.92392 15.8889 8.58023 16.5418 8.58023 17.3472C8.58023 18.1526 7.92392 18.8056 7.11433 18.8056C6.30474 18.8056 5.64843 18.1526 5.64843 17.3472ZM16.887 15.8889C16.0774 15.8889 15.4211 16.5418 15.4211 17.3472C15.4211 18.1526 16.0774 18.8056 16.887 18.8056C17.6966 18.8056 18.3529 18.1526 18.3529 17.3472C18.3529 16.5418 17.6966 15.8889 16.887 15.8889Z',
  d8: 'M12.0601 3.25H5.09886C4.4596 3.24994 3.88525 3.24989 3.42036 3.31207C2.91281 3.37996 2.39211 3.53758 1.96559 3.9619C1.72506 4.20119 1.56979 4.47027 1.46787 4.75H8C9.24264 4.75 10.25 5.75736 10.25 7C10.25 8.2021 9.30729 9.18402 8.12084 9.24681C8.20447 9.4823 8.25 9.73583 8.25 10C8.25 11.2426 7.24264 12.25 6 12.25H1.25V14.9558C1.24998 15.3765 1.24995 15.7551 1.27854 16.069C1.30924 16.4059 1.37894 16.7623 1.57733 17.1042C1.79176 17.4737 2.10018 17.7805 2.47159 17.9938C2.8152 18.1912 3.4935 18.2799 3.83214 18.3105C4.24974 19.7207 5.56083 20.75 7.11359 20.75C8.66306 20.75 9.97188 19.725 10.3924 18.3194H13.6075C14.0279 19.725 15.3368 20.75 16.8862 20.75C18.439 20.75 19.7501 19.7207 20.1677 18.3105C20.5063 18.2799 21.1846 18.1912 21.5282 17.9938C21.8997 17.7805 22.2081 17.4737 22.4225 17.1042C22.6209 16.7623 22.6906 16.4059 22.7213 16.069C22.7499 15.7551 22.7499 15.3765 22.7498 14.9558L22.7499 12.2462C22.7505 11.9209 22.751 11.5917 22.6612 11.269C22.5714 10.9464 22.4006 10.6644 22.2319 10.3857L20.5128 7.53538C20.3215 7.21817 20.1439 6.92361 19.9689 6.68857C19.7753 6.4284 19.5429 6.18102 19.2145 5.99605C18.8861 5.81108 18.5534 5.7401 18.2295 5.70878C17.9369 5.68049 17.5917 5.68053 17.2199 5.68056L15.8756 5.68056C15.8073 5.17563 15.6199 4.38622 15.1934 3.9619C14.7669 3.53758 14.2462 3.37996 13.7386 3.31207C13.2737 3.24989 12.6994 3.24994 12.0601 3.25Z',
  d9: 'M15.9078 14.0854C16.2174 13.9937 16.5454 13.9444 16.885 13.9444C18.4307 13.9444 19.7369 14.9644 20.1607 16.3646C20.6117 16.3646 20.7941 16.069 20.7941 15.8889V11.7881L18.251 7.625H15.9078V14.0854Z',
  d10: 'M7.11238 15.8889C6.30279 15.8889 5.64648 16.5418 5.64648 17.3472C5.64648 18.1526 6.30279 18.8056 7.11238 18.8056C7.92197 18.8056 8.57828 18.1526 8.57828 17.3472C8.57828 16.5418 7.92197 15.8889 7.11238 15.8889Z',
  d11: 'M16.885 15.8889C16.0754 15.8889 15.4191 16.5418 15.4191 17.3472C15.4191 18.1526 16.0754 18.8056 16.885 18.8056C17.6946 18.8056 18.3509 18.1526 18.3509 17.3472C18.3509 16.5418 17.6946 15.8889 16.885 15.8889Z',
  d12: 'M19.5847 17.5C19.5847 18.8807 18.5028 20 17.1683 20C15.8338 20 14.752 18.8807 14.752 17.5C14.752 16.1193 15.8338 15 17.1683 15C18.5028 15 19.5847 16.1193 19.5847 17.5Z',
  d13: 'M9.91869 17.5C9.91869 18.8807 8.83684 20 7.50231 20C6.16779 20 5.08594 18.8807 5.08594 17.5C5.08594 16.1193 6.16779 15 7.50231 15C8.83684 15 9.91869 16.1193 9.91869 17.5Z',
  d14: 'M2.66992 7H8.46922M2.66992 10H6.53612',
  d15: 'M2.02344 4L15.2694 4.02237V16M15.9852 6.59009H19.1217L22.021 11.2722V17.9947H19.6072M2.75014 12.8201V17.9835H5.14608M9.96542 18.001H14.7954',
  d16: 'M1.25 6.25H8.75V7.75H1.25V6.25ZM1.25 9.25H6.75V10.75H1.25V9.25Z',
  d17: 'M20.1652 18.3194C19.7447 19.725 18.4359 20.75 16.8864 20.75C15.3369 20.75 14.0281 19.725 13.6076 18.3194H10.3926C9.97206 19.725 8.66324 20.75 7.11378 20.75C5.56432 20.75 4.2555 19.725 3.83501 18.3194H1.25L1.25009 12.25H8.25V9.25H10.25V4.75H1.2502L1.25022 3.25H15.9091V5.68056H19.3637L22.7498 10.7334L22.75 18.3194H20.1652ZM16.8869 13.9444C16.5474 13.9444 16.2193 13.9937 15.9097 14.0854V7.625H18.3183L20.7958 11.3222L20.796 16.375H20.1657C19.7452 14.9694 18.4364 13.9444 16.8869 13.9444ZM5.64844 17.3472C5.64844 16.5418 6.30474 15.8889 7.11433 15.8889C7.92392 15.8889 8.58022 16.5418 8.58022 17.3472C8.58022 18.1526 7.92392 18.8056 7.11433 18.8056C6.30474 18.8056 5.64844 18.1526 5.64844 17.3472ZM16.8869 15.8889C16.0774 15.8889 15.4211 16.5418 15.4211 17.3472C15.4211 18.1526 16.0774 18.8056 16.8869 18.8056C17.6965 18.8056 18.3528 18.1526 18.3528 17.3472C18.3528 16.5418 17.6965 15.8889 16.8869 15.8889Z',
};

export const IconDeliveryTruck02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-truck-02-stroke-rounded IconDeliveryTruck02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconDeliveryTruck02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-truck-02-duotone-rounded IconDeliveryTruck02DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconDeliveryTruck02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-truck-02-twotone-rounded IconDeliveryTruck02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconDeliveryTruck02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-truck-02-solid-rounded IconDeliveryTruck02SolidRounded"
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

export const IconDeliveryTruck02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-truck-02-bulk-rounded IconDeliveryTruck02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconDeliveryTruck02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-truck-02-stroke-sharp IconDeliveryTruck02StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryTruck02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-truck-02-solid-sharp IconDeliveryTruck02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDeliveryTruck02: TheIconSelfPack = {
  name: 'DeliveryTruck02',
  StrokeRounded: IconDeliveryTruck02StrokeRounded,
  DuotoneRounded: IconDeliveryTruck02DuotoneRounded,
  TwotoneRounded: IconDeliveryTruck02TwotoneRounded,
  SolidRounded: IconDeliveryTruck02SolidRounded,
  BulkRounded: IconDeliveryTruck02BulkRounded,
  StrokeSharp: IconDeliveryTruck02StrokeSharp,
  SolidSharp: IconDeliveryTruck02SolidSharp,
};