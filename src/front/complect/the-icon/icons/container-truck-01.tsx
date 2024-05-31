import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z',
  d2: 'M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z',
  d3: 'M14.5 17.5H9.5M19.5 17.5H20.2632C20.4831 17.5 20.5931 17.5 20.6855 17.4885C21.3669 17.4036 21.9036 16.8669 21.9885 16.1855C22 16.0931 22 15.9831 22 15.7632V13C22 9.41015 19.0899 6.5 15.5 6.5M15 15.5V7C15 5.58579 15 4.87868 14.5607 4.43934C14.1213 4 13.4142 4 12 4H5C3.58579 4 2.87868 4 2.43934 4.43934C2 4.87868 2 5.58579 2 7V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5',
  d4: 'M6.5 7V10.9998M10.5 7V10.9998',
  d5: 'M22 15.7632V13C22 9.41015 19.0899 6.5 15.5 6.5H14.9991C14.9931 5.41249 14.9449 4.82353 14.5607 4.43934C14.1213 4 13.4142 4 12 4H5C3.58579 4 2.87868 4 2.43934 4.43934C2 4.87868 2 5.58579 2 7V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.07973 17.4894 3.53576 17.4891 4.3774 17.4885L4.50003 17.4885C4.50623 16.1131 5.62313 15 7 15C8.37786 15 9.49538 16.1147 9.49999 17.4915C11.0797 17.4923 12.846 17.493 14.5 17.4934C14.5036 16.1157 15.6215 15 17 15C18.3782 15 19.4959 16.1152 19.5 17.4924C20.2286 17.4916 20.6704 17.4904 20.6855 17.4885C21.3669 17.4036 21.9036 16.8669 21.9885 16.1855C22 16.0931 22 15.9831 22 15.7632Z',
  d6: 'M5.09888 3.25H12.0602C12.6994 3.24994 13.2738 3.24989 13.7387 3.31207C14.2463 3.37996 14.767 3.53758 15.1935 3.9619C15.62 4.38622 15.8085 5.18953 15.8768 5.69447C19.7122 5.92886 22.75 9.09762 22.75 12.9722L22.75 15.7015V15.7015V15.7016V15.7016C22.7501 15.8713 22.7502 16.0375 22.7312 16.1895C22.5929 17.2935 21.2749 18.1819 20.1651 18.3195C19.7446 19.7251 18.4358 20.75 16.8863 20.75C15.3369 20.75 14.028 19.725 13.6075 18.3194H10.3924C9.97194 19.725 8.6631 20.75 7.11363 20.75C5.56086 20.75 4.24976 19.7207 3.83216 18.3105C3.49351 18.2799 2.81521 18.1912 2.4716 17.9938C2.10019 17.7805 1.79176 17.4737 1.57733 17.1042C1.37895 16.7623 1.30924 16.4059 1.27855 16.069C1.24995 15.7551 1.24998 15.3766 1.25001 14.9558L1.25 7.079C1.24994 6.44304 1.24989 5.87165 1.31239 5.40916C1.38063 4.90423 1.53908 4.38622 1.9656 3.9619C2.39212 3.53758 2.91282 3.37996 3.42037 3.31207C3.88527 3.24989 4.45963 3.24994 5.09888 3.25ZM16.887 13.9441C16.5475 13.9441 16.2194 13.9934 15.9098 14.085V7.64648C18.6493 7.89208 20.7961 10.1826 20.7961 12.9719V15.8886C20.7961 16.1892 20.608 16.3746 20.1658 16.3746C19.7453 14.9691 18.4365 13.9441 16.887 13.9441ZM5.64844 17.3469C5.64844 16.5415 6.30475 15.8886 7.11434 15.8886C7.92394 15.8886 8.58025 16.5415 8.58025 17.3469C8.58025 18.1523 7.92394 18.8052 7.11434 18.8052C6.30475 18.8052 5.64844 18.1523 5.64844 17.3469ZM16.887 15.8886C16.0774 15.8886 15.4211 16.5415 15.4211 17.3469C15.4211 18.1523 16.0774 18.8052 16.887 18.8052C17.6966 18.8052 18.353 18.1523 18.353 17.3469C18.353 16.5415 17.6966 15.8886 16.887 15.8886ZM7.25 7C7.25 6.58579 6.91421 6.25 6.5 6.25C6.08579 6.25 5.75 6.58579 5.75 7V10.9998C5.75 11.414 6.08579 11.7498 6.5 11.7498C6.91421 11.7498 7.25 11.414 7.25 10.9998V7ZM11.25 7C11.25 6.58579 10.9142 6.25 10.5 6.25C10.0858 6.25 9.75 6.58579 9.75 7V10.9998C9.75 11.414 10.0858 11.7498 10.5 11.7498C10.9142 11.7498 11.25 11.414 11.25 10.9998V7Z',
  d7: 'M5.09888 3.25H12.0602C12.6994 3.24994 13.2738 3.24989 13.7387 3.31207C14.2463 3.37996 14.767 3.53758 15.1935 3.9619C15.62 4.38622 15.8085 5.18953 15.8768 5.69447C19.7122 5.92886 22.75 9.09762 22.75 12.9722L22.75 15.7015V15.7015C22.7501 15.8713 22.7502 16.0375 22.7312 16.1895C22.5929 17.2935 21.2749 18.1819 20.1651 18.3195C19.7446 19.7251 18.4358 20.75 16.8863 20.75C15.3369 20.75 14.028 19.725 13.6075 18.3194H10.3924C9.97194 19.725 8.6631 20.75 7.11363 20.75C5.56086 20.75 4.24976 19.7207 3.83216 18.3105C3.49351 18.2799 2.81521 18.1912 2.4716 17.9938C2.10019 17.7805 1.79176 17.4737 1.57733 17.1042C1.37895 16.7623 1.30924 16.4059 1.27855 16.069C1.24995 15.7551 1.24998 15.3766 1.25001 14.9558L1.25 7.079C1.24994 6.44304 1.24989 5.87165 1.31239 5.40916C1.38063 4.90423 1.53908 4.38622 1.9656 3.9619C2.39212 3.53758 2.91282 3.37996 3.42037 3.31207C3.88527 3.24989 4.45963 3.24994 5.09888 3.25Z',
  d8: 'M15.9098 14.085C16.2194 13.9934 16.5475 13.9441 16.887 13.9441C18.4365 13.9441 19.7453 14.9691 20.1658 16.3746C20.608 16.3746 20.7961 16.1892 20.7961 15.8886V12.9719C20.7961 10.1826 18.6493 7.89208 15.9098 7.64648V14.085Z',
  d9: 'M7.11434 15.8886C6.30475 15.8886 5.64844 16.5415 5.64844 17.3469C5.64844 18.1523 6.30475 18.8052 7.11434 18.8052C7.92394 18.8052 8.58025 18.1523 8.58025 17.3469C8.58025 16.5415 7.92394 15.8886 7.11434 15.8886Z',
  d10: 'M16.887 15.8886C16.0774 15.8886 15.4211 16.5415 15.4211 17.3469C15.4211 18.1523 16.0774 18.8052 16.887 18.8052C17.6966 18.8052 18.353 18.1523 18.353 17.3469C18.353 16.5415 17.6966 15.8886 16.887 15.8886Z',
  d11: 'M6.5 6.25C6.91421 6.25 7.25 6.58579 7.25 7V10.9998C7.25 11.414 6.91421 11.7498 6.5 11.7498C6.08579 11.7498 5.75 11.414 5.75 10.9998V7C5.75 6.58579 6.08579 6.25 6.5 6.25ZM10.5 6.25C10.9142 6.25 11.25 6.58579 11.25 7V10.9998C11.25 11.414 10.9142 11.7498 10.5 11.7498C10.0858 11.7498 9.75 11.414 9.75 10.9998V7C9.75 6.58579 10.0858 6.25 10.5 6.25Z',
  d12: 'M14.5 17.5H9.5M19.5 17.5H22V13C22 9.41015 19.0899 6.5 15.5 6.5M15 15.5V4H2V17.5L4.5 17.4885',
  d13: 'M6.5 7V11.9998M10.5 7V11.9998',
  d14: 'M15.9091 5.6965C19.7293 5.94665 22.75 9.10849 22.75 12.9722V18.3194H20.1652C19.7447 19.725 18.4358 20.75 16.8864 20.75C15.3369 20.75 14.0281 19.725 13.6076 18.3194H10.3924C9.97195 19.725 8.66311 20.75 7.11364 20.75C5.56146 20.75 4.25076 19.7215 3.83264 18.3121L1.25 18.3239V3.25H15.9091V5.6965ZM16.8871 13.9441C16.5475 13.9441 16.2195 13.9934 15.9098 14.085V7.64648C18.6493 7.89208 20.7962 10.1826 20.7962 12.9719V16.3747H20.1659C19.7454 14.9691 18.4366 13.9441 16.8871 13.9441ZM5.64844 17.3469C5.64844 16.5415 6.30475 15.8886 7.11435 15.8886C7.92395 15.8886 8.58026 16.5415 8.58026 17.3469C8.58026 18.1523 7.92395 18.8052 7.11435 18.8052C6.30475 18.8052 5.64844 18.1523 5.64844 17.3469ZM16.8871 15.8886C16.0775 15.8886 15.4212 16.5415 15.4212 17.3469C15.4212 18.1523 16.0775 18.8052 16.8871 18.8052C17.6967 18.8052 18.353 18.1523 18.353 17.3469C18.353 16.5415 17.6967 15.8886 16.8871 15.8886ZM5.75 7V11.9998H7.25V7H5.75ZM9.75 7V11.9998H11.25V7H9.75Z',
} as const;

export const IconContainerTruck01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-01-stroke-rounded IconContainerTruck01StrokeRounded"
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

export const IconContainerTruck01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-01-duotone-rounded IconContainerTruck01DuotoneRounded"
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

export const IconContainerTruck01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-01-twotone-rounded IconContainerTruck01TwotoneRounded"
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

export const IconContainerTruck01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-01-solid-rounded IconContainerTruck01SolidRounded"
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

export const IconContainerTruck01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-01-bulk-rounded IconContainerTruck01BulkRounded"
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

export const IconContainerTruck01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-01-stroke-sharp IconContainerTruck01StrokeSharp"
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
        strokeLinecap="round" 
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

export const IconContainerTruck01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-01-solid-sharp IconContainerTruck01SolidSharp"
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

export const iconPackOfContainerTruck01: TheIconSelfPack = {
  name: 'ContainerTruck01',
  StrokeRounded: IconContainerTruck01StrokeRounded,
  DuotoneRounded: IconContainerTruck01DuotoneRounded,
  TwotoneRounded: IconContainerTruck01TwotoneRounded,
  SolidRounded: IconContainerTruck01SolidRounded,
  BulkRounded: IconContainerTruck01BulkRounded,
  StrokeSharp: IconContainerTruck01StrokeSharp,
  SolidSharp: IconContainerTruck01SolidSharp,
};