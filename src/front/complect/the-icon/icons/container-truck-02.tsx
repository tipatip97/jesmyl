import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z',
  d2: 'M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z',
  d3: 'M14.5 17.5H9.5M15 15.5V7C15 5.58579 15 4.87868 14.5607 4.43934C14.1213 4 13.4142 4 12 4H5C3.58579 4 2.87868 4 2.43934 4.43934C2 4.87868 2 5.58579 2 7V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5M15.5 6.5H17.3014C18.1311 6.5 18.5459 6.5 18.8898 6.6947C19.2336 6.8894 19.4471 7.2451 19.8739 7.95651L21.5725 10.7875C21.7849 11.1415 21.8911 11.3186 21.9456 11.5151C22 11.7116 22 11.918 22 12.331V15C22 15.9346 22 16.4019 21.799 16.75C21.6674 16.978 21.478 17.1674 21.25 17.299C20.9019 17.5 20.4346 17.5 19.5 17.5',
  d4: 'M6.5 7V10.9998M10.5 7V10.9998',
  d5: 'M2 7V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5H14.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5C20.4346 17.5 20.9019 17.5 21.25 17.299C21.478 17.1674 21.6674 16.978 21.799 16.75C22 16.4019 22 15.9346 22 15V12.331C22 11.918 22 11.7116 21.9456 11.5151C21.8911 11.3186 21.7849 11.1415 21.5725 10.7875L19.8739 7.95651C19.4471 7.2451 19.2336 6.8894 18.8898 6.6947C18.5459 6.5 18.1311 6.5 17.3014 6.5H14.9991C14.9931 5.41249 14.9449 4.82353 14.5607 4.43934C14.1213 4 13.4142 4 12 4H5C3.58579 4 2.87868 4 2.43934 4.43934C2 4.87868 2 5.58579 2 7Z',
  d6: 'M5.09886 3.25H12.0601C12.6994 3.24994 13.2737 3.24989 13.7386 3.31207C14.2462 3.37996 14.7669 3.53758 15.1934 3.9619C15.6199 4.38622 15.8073 5.17563 15.8756 5.68056L17.2199 5.68056C17.5917 5.68053 17.9369 5.68049 18.2295 5.70878C18.5534 5.7401 18.8861 5.81108 19.2145 5.99605C19.5429 6.18102 19.7753 6.4284 19.9689 6.68857C20.1439 6.92361 20.3215 7.21817 20.5128 7.53538L22.2319 10.3857L22.2319 10.3857C22.4006 10.6644 22.5714 10.9464 22.6612 11.269C22.751 11.5917 22.7505 11.9209 22.7499 12.2462L22.7498 14.9558C22.7499 15.3765 22.7499 15.7551 22.7213 16.069C22.6906 16.4059 22.6209 16.7623 22.4225 17.1042C22.2081 17.4737 21.8997 17.7805 21.5282 17.9938C21.1846 18.1912 20.5063 18.2799 20.1677 18.3105C19.7501 19.7207 18.439 20.75 16.8862 20.75C15.3368 20.75 14.028 19.725 13.6075 18.3194H10.3924C9.97189 19.725 8.66306 20.75 7.1136 20.75C5.56083 20.75 4.24974 19.7207 3.83214 18.3105C3.4935 18.2799 2.8152 18.1912 2.47159 17.9938C2.10018 17.7805 1.79176 17.4737 1.57733 17.1042C1.37895 16.7623 1.30924 16.4059 1.27855 16.069C1.24995 15.7551 1.24998 15.3766 1.25001 14.9558L1.25 7.079C1.24994 6.44304 1.24989 5.87165 1.31239 5.40916C1.38063 4.90423 1.53908 4.38622 1.96559 3.9619C2.39211 3.53758 2.91281 3.37996 3.42036 3.31207C3.88525 3.24989 4.45961 3.24994 5.09886 3.25ZM16.887 13.9444C16.5474 13.9444 16.2194 13.9937 15.9097 14.0854V7.625H18.2529L20.796 11.7881V15.8889C20.796 16.069 20.6136 16.3646 20.1627 16.3646C19.7388 14.9644 18.4326 13.9444 16.887 13.9444ZM5.64844 17.3472C5.64844 16.5418 6.30474 15.8889 7.11433 15.8889C7.92393 15.8889 8.58023 16.5418 8.58023 17.3472C8.58023 18.1526 7.92393 18.8056 7.11433 18.8056C6.30474 18.8056 5.64844 18.1526 5.64844 17.3472ZM16.887 15.8889C16.0774 15.8889 15.4211 16.5418 15.4211 17.3472C15.4211 18.1526 16.0774 18.8056 16.887 18.8056C17.6966 18.8056 18.3529 18.1526 18.3529 17.3472C18.3529 16.5418 17.6966 15.8889 16.887 15.8889ZM7.25 7C7.25 6.58579 6.91421 6.25 6.5 6.25C6.08579 6.25 5.75 6.58579 5.75 7V10.9998C5.75 11.414 6.08579 11.7498 6.5 11.7498C6.91421 11.7498 7.25 11.414 7.25 10.9998V7ZM11.25 7C11.25 6.58579 10.9142 6.25 10.5 6.25C10.0858 6.25 9.75 6.58579 9.75 7V10.9998C9.75 11.414 10.0858 11.7498 10.5 11.7498C10.9142 11.7498 11.25 11.414 11.25 10.9998V7Z',
  d7: 'M5.09886 3.25H12.0601C12.6994 3.24994 13.2737 3.24989 13.7386 3.31207C14.2462 3.37996 14.7669 3.53758 15.1934 3.9619C15.6199 4.38622 15.8073 5.17563 15.8756 5.68056L17.2199 5.68056C17.5917 5.68053 17.9369 5.68049 18.2295 5.70878C18.5534 5.7401 18.8861 5.81108 19.2145 5.99605C19.5429 6.18102 19.7753 6.4284 19.9689 6.68857C20.1439 6.92361 20.3215 7.21817 20.5128 7.53538L22.2319 10.3857L22.2319 10.3857C22.4006 10.6644 22.5714 10.9464 22.6612 11.269C22.751 11.5917 22.7505 11.9209 22.7499 12.2462L22.7498 14.9558C22.7499 15.3765 22.7499 15.7551 22.7213 16.069C22.6906 16.4059 22.6209 16.7623 22.4225 17.1042C22.2081 17.4737 21.8997 17.7805 21.5282 17.9938C21.1846 18.1912 20.5063 18.2799 20.1677 18.3105C19.7501 19.7207 18.439 20.75 16.8862 20.75C15.3368 20.75 14.028 19.725 13.6075 18.3194H10.3924C9.97189 19.725 8.66306 20.75 7.1136 20.75C5.56083 20.75 4.24974 19.7207 3.83214 18.3105C3.4935 18.2799 2.8152 18.1912 2.47159 17.9938C2.10018 17.7805 1.79176 17.4737 1.57733 17.1042C1.37895 16.7623 1.30924 16.4059 1.27855 16.069C1.24995 15.7551 1.24998 15.3766 1.25001 14.9558L1.25 7.079C1.24994 6.44304 1.24989 5.87165 1.31239 5.40916C1.38063 4.90423 1.53908 4.38622 1.96559 3.9619C2.39211 3.53758 2.91281 3.37996 3.42036 3.31207C3.88525 3.24989 4.45961 3.24994 5.09886 3.25Z',
  d8: 'M15.9097 14.0854C16.2194 13.9937 16.5474 13.9444 16.887 13.9444C18.4326 13.9444 19.7388 14.9644 20.1627 16.3646C20.6136 16.3646 20.796 16.069 20.796 15.8889V11.7881L18.2529 7.625H15.9097V14.0854Z',
  d9: 'M7.11433 15.8889C6.30474 15.8889 5.64844 16.5418 5.64844 17.3472C5.64844 18.1526 6.30474 18.8056 7.11433 18.8056C7.92393 18.8056 8.58023 18.1526 8.58023 17.3472C8.58023 16.5418 7.92393 15.8889 7.11433 15.8889Z',
  d10: 'M16.887 15.8889C16.0774 15.8889 15.4211 16.5418 15.4211 17.3472C15.4211 18.1526 16.0774 18.8056 16.887 18.8056C17.6966 18.8056 18.3529 18.1526 18.3529 17.3472C18.3529 16.5418 17.6966 15.8889 16.887 15.8889Z',
  d11: 'M6.5 6.25C6.91421 6.25 7.25 6.58579 7.25 7V10.9998C7.25 11.414 6.91421 11.7498 6.5 11.7498C6.08579 11.7498 5.75 11.414 5.75 10.9998V7C5.75 6.58579 6.08579 6.25 6.5 6.25ZM10.5 6.25C10.9142 6.25 11.25 6.58579 11.25 7V10.9998C11.25 11.414 10.9142 11.7498 10.5 11.7498C10.0858 11.7498 9.75 11.414 9.75 10.9998V7C9.75 6.58579 10.0858 6.25 10.5 6.25Z',
  d12: 'M14.5002 17.5H9.5002M15.0002 16V4H2.0002L2 17.5H4.5002M15.5002 6.5H19L22 11L22.0002 17.5H19.5',
  d13: 'M6.5 7V11.9998M10.5 7V11.9998',
  d14: 'M20.1652 18.3194C19.7447 19.725 18.4359 20.75 16.8864 20.75C15.3369 20.75 14.0281 19.725 13.6076 18.3194H10.3926C9.97206 19.725 8.66324 20.75 7.11378 20.75C5.56432 20.75 4.2555 19.725 3.83501 18.3194H1.25L1.25022 3.25H15.9091V5.68056H19.3637L22.7498 10.7334L22.75 18.3194H20.1652ZM16.8869 13.9444C16.5474 13.9444 16.2193 13.9937 15.9097 14.0854V7.625H18.3183L20.7958 11.3222L20.796 16.375H20.1657C19.7452 14.9694 18.4364 13.9444 16.8869 13.9444ZM5.64844 17.3472C5.64844 16.5418 6.30474 15.8889 7.11433 15.8889C7.92392 15.8889 8.58022 16.5418 8.58022 17.3472C8.58022 18.1526 7.92392 18.8056 7.11433 18.8056C6.30474 18.8056 5.64844 18.1526 5.64844 17.3472ZM16.8869 15.8889C16.0774 15.8889 15.4211 16.5418 15.4211 17.3472C15.4211 18.1526 16.0774 18.8056 16.8869 18.8056C17.6965 18.8056 18.3528 18.1526 18.3528 17.3472C18.3528 16.5418 17.6965 15.8889 16.8869 15.8889ZM5.75 7V11.9998H7.25V7H5.75ZM9.75 7V11.9998H11.25V7H9.75Z',
} as const;

export const IconContainerTruck02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-02-stroke-rounded IconContainerTruck02StrokeRounded"
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

export const IconContainerTruck02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-02-duotone-rounded IconContainerTruck02DuotoneRounded"
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

export const IconContainerTruck02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-02-twotone-rounded IconContainerTruck02TwotoneRounded"
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

export const IconContainerTruck02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-02-solid-rounded IconContainerTruck02SolidRounded"
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

export const IconContainerTruck02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-02-bulk-rounded IconContainerTruck02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconContainerTruck02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-02-stroke-sharp IconContainerTruck02StrokeSharp"
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconContainerTruck02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-02-solid-sharp IconContainerTruck02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfContainerTruck02: TheIconSelfPack = {
  name: 'ContainerTruck02',
  StrokeRounded: IconContainerTruck02StrokeRounded,
  DuotoneRounded: IconContainerTruck02DuotoneRounded,
  TwotoneRounded: IconContainerTruck02TwotoneRounded,
  SolidRounded: IconContainerTruck02SolidRounded,
  BulkRounded: IconContainerTruck02BulkRounded,
  StrokeSharp: IconContainerTruck02StrokeSharp,
  SolidSharp: IconContainerTruck02SolidSharp,
};