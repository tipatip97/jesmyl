import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z',
  d2: 'M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z',
  d3: 'M14.5 17.5H9.5M19.5 17.5H20.2632C20.4831 17.5 20.5931 17.5 20.6855 17.4885C21.3669 17.4036 21.9036 16.8669 21.9885 16.1855C22 16.0931 22 15.9831 22 15.7632V13C22 9.41015 19.0899 6.5 15.5 6.5M15 15.5V7C15 5.58579 15 4.87868 14.5607 4.43934C14.1213 4 13.4142 4 12 4H5C3.58579 4 2.87868 4 2.43934 4.43934C2 4.87868 2 5.58579 2 7V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5',
  d4: 'M22 15.7632V13C22 9.41015 19.0899 6.5 15.5 6.5H14.9991C14.9931 5.41249 14.9449 4.82353 14.5607 4.43934C14.1213 4 13.4142 4 12 4H5C3.58579 4 2.87868 4 2.43934 4.43934C2 4.87868 2 5.58579 2 7V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.07973 17.4894 3.53576 17.4891 4.3774 17.4885L4.50003 17.4885C4.50623 16.1131 5.62313 15 7 15C8.37786 15 9.49538 16.1147 9.49999 17.4915C11.0797 17.4923 12.846 17.493 14.5 17.4934C14.5036 16.1157 15.6215 15 17 15C18.3782 15 19.4959 16.1152 19.5 17.4924C20.2286 17.4916 20.6704 17.4904 20.6855 17.4885C21.3669 17.4036 21.9036 16.8669 21.9885 16.1855C22 16.0931 22 15.9831 22 15.7632Z',
  d5: 'M12.0602 3.25H5.09888C4.45963 3.24994 3.88527 3.24989 3.42037 3.31207C2.91282 3.37996 2.39212 3.53758 1.9656 3.9619C1.53908 4.38622 1.38063 4.90423 1.31239 5.40916C1.24989 5.87165 1.24994 6.44304 1.25 7.079L1.25001 14.9558C1.24998 15.3766 1.24995 15.7551 1.27855 16.069C1.30924 16.4059 1.37895 16.7623 1.57733 17.1042C1.79176 17.4737 2.10019 17.7805 2.4716 17.9938C2.81521 18.1912 3.49351 18.2799 3.83216 18.3105C4.24976 19.7207 5.56086 20.75 7.11363 20.75C8.6631 20.75 9.97194 19.725 10.3924 18.3194H13.6075C14.028 19.725 15.3369 20.75 16.8863 20.75C18.4358 20.75 19.7446 19.7251 20.1651 18.3195C21.2749 18.1819 22.5929 17.2935 22.7312 16.1895C22.7502 16.0375 22.7501 15.8713 22.75 15.7016V15.7015V15.7015L22.75 12.9722C22.75 9.09762 19.7122 5.92886 15.8768 5.69447C15.8085 5.18953 15.62 4.38622 15.1935 3.9619C14.767 3.53758 14.2463 3.37996 13.7387 3.31207C13.2738 3.24989 12.6994 3.24994 12.0602 3.25ZM15.9098 14.085C16.2194 13.9934 16.5475 13.9441 16.887 13.9441C18.4365 13.9441 19.7453 14.9691 20.1658 16.3746C20.608 16.3746 20.7961 16.1892 20.7961 15.8886V12.9719C20.7961 10.1826 18.6493 7.89208 15.9098 7.64648V14.085ZM7.11434 15.8886C6.30475 15.8886 5.64844 16.5415 5.64844 17.3469C5.64844 18.1523 6.30475 18.8052 7.11434 18.8052C7.92394 18.8052 8.58025 18.1523 8.58025 17.3469C8.58025 16.5415 7.92394 15.8886 7.11434 15.8886ZM15.4211 17.3469C15.4211 16.5415 16.0774 15.8886 16.887 15.8886C17.6966 15.8886 18.353 16.5415 18.353 17.3469C18.353 18.1523 17.6966 18.8052 16.887 18.8052C16.0774 18.8052 15.4211 18.1523 15.4211 17.3469Z',
  d6: 'M5.09888 3.25H12.0602C12.6994 3.24994 13.2738 3.24989 13.7387 3.31207C14.2463 3.37996 14.767 3.53758 15.1935 3.9619C15.62 4.38622 15.8085 5.18953 15.8768 5.69447C19.7122 5.92886 22.75 9.09762 22.75 12.9722L22.75 15.7015V15.7015C22.7501 15.8713 22.7502 16.0375 22.7312 16.1895C22.5929 17.2935 21.2749 18.1819 20.1651 18.3195C19.7446 19.7251 18.4358 20.75 16.8863 20.75C15.3369 20.75 14.028 19.725 13.6075 18.3194H10.3924C9.97194 19.725 8.6631 20.75 7.11363 20.75C5.56086 20.75 4.24976 19.7207 3.83216 18.3105C3.49351 18.2799 2.81521 18.1912 2.4716 17.9938C2.10019 17.7805 1.79176 17.4737 1.57733 17.1042C1.37895 16.7623 1.30924 16.4059 1.27855 16.069C1.24995 15.7551 1.24998 15.3766 1.25001 14.9558L1.25 7.079C1.24994 6.44304 1.24989 5.87165 1.31239 5.40916C1.38063 4.90423 1.53908 4.38622 1.9656 3.9619C2.39212 3.53758 2.91282 3.37996 3.42037 3.31207C3.88527 3.24989 4.45963 3.24994 5.09888 3.25Z',
  d7: 'M15.9098 14.085C16.2194 13.9934 16.5475 13.9441 16.887 13.9441C18.4365 13.9441 19.7453 14.9691 20.1658 16.3746C20.608 16.3746 20.7961 16.1892 20.7961 15.8886V12.9719C20.7961 10.1826 18.6493 7.89208 15.9098 7.64648V14.085Z',
  d8: 'M7.11434 15.8886C6.30475 15.8886 5.64844 16.5415 5.64844 17.3469C5.64844 18.1523 6.30475 18.8052 7.11434 18.8052C7.92394 18.8052 8.58025 18.1523 8.58025 17.3469C8.58025 16.5415 7.92394 15.8886 7.11434 15.8886Z',
  d9: 'M16.887 15.8886C16.0774 15.8886 15.4211 16.5415 15.4211 17.3469C15.4211 18.1523 16.0774 18.8052 16.887 18.8052C17.6966 18.8052 18.353 18.1523 18.353 17.3469C18.353 16.5415 17.6966 15.8886 16.887 15.8886Z',
  d10: 'M14.5 17.5H9.5M19.5 17.5H22L22 13C22 9.41015 19.0899 6.5 15.5 6.5M15 16V4H2V17.4885L4.5 17.5',
  d11: 'M22.75 12.9722C22.75 9.10849 19.7293 5.94665 15.9091 5.6965V3.25H1.25V18.3239L3.83264 18.3121C4.25076 19.7215 5.56146 20.75 7.11364 20.75C8.66311 20.75 9.97195 19.725 10.3924 18.3194H13.6076C14.0281 19.725 15.3369 20.75 16.8864 20.75C18.4358 20.75 19.7447 19.725 20.1652 18.3194H22.75V12.9722ZM15.9098 14.085C16.2195 13.9934 16.5475 13.9441 16.8871 13.9441C18.4366 13.9441 19.7454 14.9691 20.1659 16.3747H20.7962V12.9719C20.7962 10.1826 18.6493 7.89208 15.9098 7.64648V14.085ZM7.11435 15.8886C6.30475 15.8886 5.64844 16.5415 5.64844 17.3469C5.64844 18.1523 6.30475 18.8052 7.11435 18.8052C7.92395 18.8052 8.58026 18.1523 8.58026 17.3469C8.58026 16.5415 7.92395 15.8886 7.11435 15.8886ZM15.4212 17.3469C15.4212 16.5415 16.0775 15.8886 16.8871 15.8886C17.6967 15.8886 18.353 16.5415 18.353 17.3469C18.353 18.1523 17.6967 18.8052 16.8871 18.8052C16.0775 18.8052 15.4212 18.1523 15.4212 17.3469Z',
} as const;

export const IconShippingTruck01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-truck-01-stroke-rounded IconShippingTruck01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconShippingTruck01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-truck-01-duotone-rounded IconShippingTruck01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconShippingTruck01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-truck-01-twotone-rounded IconShippingTruck01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconShippingTruck01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-truck-01-solid-rounded IconShippingTruck01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShippingTruck01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-truck-01-bulk-rounded IconShippingTruck01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconShippingTruck01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-truck-01-stroke-sharp IconShippingTruck01StrokeSharp"
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShippingTruck01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-truck-01-solid-sharp IconShippingTruck01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShippingTruck01: TheIconSelfPack = {
  name: 'ShippingTruck01',
  StrokeRounded: IconShippingTruck01StrokeRounded,
  DuotoneRounded: IconShippingTruck01DuotoneRounded,
  TwotoneRounded: IconShippingTruck01TwotoneRounded,
  SolidRounded: IconShippingTruck01SolidRounded,
  BulkRounded: IconShippingTruck01BulkRounded,
  StrokeSharp: IconShippingTruck01StrokeSharp,
  SolidSharp: IconShippingTruck01SolidSharp,
};