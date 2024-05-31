import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5 19.5C19.5 20.8807 18.3807 22 17 22C15.6193 22 14.5 20.8807 14.5 19.5C14.5 18.1193 15.6193 17 17 17C18.3807 17 19.5 18.1193 19.5 19.5Z',
  d2: 'M9.5 19.5C9.5 20.8807 8.38071 22 7 22C5.61929 22 4.5 20.8807 4.5 19.5C4.5 18.1193 5.61929 17 7 17C8.38071 17 9.5 18.1193 9.5 19.5Z',
  d3: 'M14.5 19.5H9.5M19.5 19.5H20.2632C20.4831 19.5 20.5931 19.5 20.6855 19.4885C21.3669 19.4036 21.9036 18.8669 21.9885 18.1855C22 18.0931 22 17.9831 22 17.7632V15C22 11.4101 19.0899 8.5 15.5 8.5M11 6H12C13.4142 6 14.1213 6 14.5607 6.43934C15 6.87868 15 7.58579 15 9V17.5M2 12V17C2 17.9346 2 18.4019 2.20096 18.75C2.33261 18.978 2.52197 19.1674 2.75 19.299C3.09808 19.5 3.56538 19.5 4.5 19.5',
  d4: 'M7.85 7.85L6.5 6.95V4.7M2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5Z',
  d5: 'M2.06649 7.27502C2.4338 9.39098 4.279 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 6.331 10.9907 6.16417 10.9725 6H12C13.4142 6 14.1213 6 14.5607 6.43934C14.9449 6.82353 14.9931 7.41249 14.9991 8.5H15.5C19.0899 8.5 22 11.4101 22 15V17.7632C22 17.9831 22 18.0931 21.9885 18.1855C21.9036 18.8669 21.3669 19.4036 20.6855 19.4885C20.6704 19.4904 20.2286 19.4916 19.5 19.4924C19.4959 18.1152 18.3782 17 17 17C15.6215 17 14.5036 18.1157 14.5 19.4934C12.846 19.493 11.0797 19.4923 9.49999 19.4915C9.49538 18.1147 8.37786 17 7 17C5.62313 17 4.50623 18.1131 4.50003 19.4885L4.3774 19.4885C3.53576 19.4891 3.07973 19.4894 2.75 19.299C2.52197 19.1674 2.33261 18.978 2.20096 18.75C2 18.4019 2 17.9346 2 17V9C2 8.24636 2 7.69353 2.06649 7.27502Z',
  d6: 'M1.25 10.7431V16.9559V16.9559C1.24997 17.3767 1.24995 17.7552 1.27854 18.069C1.30923 18.4059 1.37894 18.7624 1.57733 19.1043C1.79176 19.4737 2.10018 19.7806 2.47159 19.9939C2.8152 20.1913 3.49351 20.28 3.83215 20.3106C4.24975 21.7207 5.56086 22.7501 7.11363 22.7501C8.6631 22.7501 9.97193 21.7251 10.3924 20.3195H13.6075C14.028 21.7251 15.3369 22.7501 16.8863 22.7501C18.4358 22.7501 19.7446 21.7251 20.1651 20.3196C21.2749 20.182 22.5929 19.2936 22.7312 18.1896C22.7502 18.0376 22.7501 17.8714 22.75 17.7017V17.7017V17.7016V17.7016L22.75 14.9723C22.75 11.0977 19.7122 7.92895 15.8768 7.69455C15.8085 7.18962 15.62 6.3863 15.1935 5.96199C14.767 5.53767 14.2462 5.38004 13.7387 5.31215C13.5544 5.28751 13.3529 5.27264 13.137 5.26367C13.2112 5.66451 13.25 6.07777 13.25 6.50008C13.25 10.228 10.2279 13.2501 6.5 13.2501C4.37955 13.2501 2.48747 12.2723 1.25 10.7431ZM16.887 15.9442C16.5475 15.9442 16.2194 15.9934 15.9098 16.0851V9.64657C18.6493 9.89217 20.7961 12.1827 20.7961 14.972V17.8887C20.7961 18.1893 20.608 18.3747 20.1658 18.3747C19.7453 16.9692 18.4365 15.9442 16.887 15.9442ZM5.64843 19.347C5.64843 18.5416 6.30474 17.8887 7.11434 17.8887C7.92394 17.8887 8.58024 18.5416 8.58024 19.347C8.58024 20.1524 7.92394 20.8053 7.11434 20.8053C6.30474 20.8053 5.64843 20.1524 5.64843 19.347ZM16.887 17.8887C16.0774 17.8887 15.4211 18.5416 15.4211 19.347C15.4211 20.1524 16.0774 20.8053 16.887 20.8053C17.6966 20.8053 18.3529 20.1524 18.3529 19.347C18.3529 18.5416 17.6966 17.8887 16.887 17.8887Z',
  d7: 'M6.5 1.25C3.6005 1.25 1.25 3.6005 1.25 6.5C1.25 9.3995 3.6005 11.75 6.5 11.75C9.3995 11.75 11.75 9.3995 11.75 6.5C11.75 3.6005 9.3995 1.25 6.5 1.25ZM7.25 4.69922C7.25 4.28501 6.91421 3.94922 6.5 3.94922C6.08579 3.94922 5.75 4.28501 5.75 4.69922V6.94922C5.75 7.19998 5.87533 7.43416 6.08397 7.57326L7.43397 8.47326C7.77862 8.70302 8.24427 8.60989 8.47404 8.26524C8.7038 7.9206 8.61067 7.45495 8.26603 7.22518L7.25 6.54783V4.69922Z',
  d8: 'M1.25 10.7431V16.9559C1.24998 17.3766 1.24995 17.7552 1.27854 18.069C1.30924 18.4059 1.37894 18.7624 1.57733 19.1043C1.79176 19.4737 2.10018 19.7806 2.47159 19.9939C2.81521 20.1913 3.49351 20.28 3.83216 20.3106C4.24975 21.7207 5.56086 22.7501 7.11363 22.7501C8.6631 22.7501 9.97194 21.7251 10.3924 20.3195H13.6075C14.028 21.7251 15.3369 22.7501 16.8863 22.7501C18.4358 22.7501 19.7446 21.7251 20.1651 20.3196C21.2749 20.182 22.5929 19.2936 22.7312 18.1896C22.7502 18.0376 22.7501 17.8714 22.75 17.7017L22.75 14.9723C22.75 11.0977 19.7122 7.92895 15.8768 7.69455C15.8085 7.18962 15.62 6.3863 15.1935 5.96199C14.767 5.53767 14.2463 5.38004 13.7387 5.31215C13.5544 5.28751 13.3529 5.27264 13.137 5.26367C13.2112 5.66451 13.25 6.07777 13.25 6.50009C13.25 10.228 10.2279 13.2501 6.5 13.2501C4.37955 13.2501 2.48747 12.2723 1.25 10.7431Z',
  d9: 'M15.9078 16.085C16.2175 15.9934 16.5455 15.9441 16.8851 15.9441C18.4346 15.9441 19.7434 16.9691 20.1639 18.3746C20.606 18.3746 20.7942 18.1892 20.7942 17.8886V14.9719C20.7942 12.1826 18.6474 9.89208 15.9078 9.64648V16.085Z',
  d10: 'M7.11239 17.8886C6.30279 17.8886 5.64648 18.5415 5.64648 19.3469C5.64648 20.1523 6.30279 20.8052 7.11239 20.8052C7.92199 20.8052 8.5783 20.1523 8.5783 19.3469C8.5783 18.5415 7.92199 17.8886 7.11239 17.8886Z',
  d11: 'M16.8851 17.8886C16.0755 17.8886 15.4192 18.5415 15.4192 19.3469C15.4192 20.1523 16.0755 20.8052 16.8851 20.8052C17.6947 20.8052 18.351 20.1523 18.351 19.3469C18.351 18.5415 17.6947 17.8886 16.8851 17.8886Z',
  d12: 'M14.5 19.5H9.5M19.5 19.5H22V15C22 11.4101 19.0899 8.5 15.5 8.5M11 6H15V18M2 12V19.4885L4.5 19.5',
  d13: 'M8 8L6.5 6.95V4M2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5Z',
  d14: 'M1.25 10.743V20.3239L3.83264 20.3121C4.25076 21.7215 5.56146 22.75 7.11364 22.75C8.66311 22.75 9.97195 21.725 10.3924 20.3194H13.6076C14.0281 21.725 15.3369 22.75 16.8864 22.75C18.4358 22.75 19.7447 21.725 20.1652 20.3194H22.75V14.9722C22.75 11.1085 19.7293 7.94665 15.9091 7.6965V5.25H13.1345C13.2103 5.65508 13.25 6.07291 13.25 6.5C13.25 10.2279 10.2279 13.25 6.5 13.25C4.37955 13.25 2.48747 12.2723 1.25 10.743ZM16.8871 15.9441C16.5475 15.9441 16.2195 15.9934 15.9098 16.085V9.64648C18.6493 9.89208 20.7962 12.1826 20.7962 14.9719V18.3747H20.1659C19.7454 16.9691 18.4366 15.9441 16.8871 15.9441ZM5.64844 19.3469C5.64844 18.5415 6.30475 17.8886 7.11435 17.8886C7.92395 17.8886 8.58026 18.5415 8.58026 19.3469C8.58026 20.1523 7.92395 20.8052 7.11435 20.8052C6.30475 20.8052 5.64844 20.1523 5.64844 19.3469ZM16.8871 17.8886C16.0775 17.8886 15.4212 18.5415 15.4212 19.3469C15.4212 20.1523 16.0775 20.8052 16.8871 20.8052C17.6967 20.8052 18.353 20.1523 18.353 19.3469C18.353 18.5415 17.6967 17.8886 16.8871 17.8886Z',
  d15: 'M6.5 1.25C3.6005 1.25 1.25 3.6005 1.25 6.5C1.25 9.3995 3.6005 11.75 6.5 11.75C9.3995 11.75 11.75 9.3995 11.75 6.5C11.75 3.6005 9.3995 1.25 6.5 1.25ZM7.25 4V6.55951L8.4301 7.38558L7.5699 8.61442L5.75 7.34049V4H7.25Z',
} as const;

export const IconDeliveryDelay01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-01-stroke-rounded IconDeliveryDelay01StrokeRounded"
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

export const IconDeliveryDelay01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-01-duotone-rounded IconDeliveryDelay01DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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

export const IconDeliveryDelay01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-01-twotone-rounded IconDeliveryDelay01TwotoneRounded"
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

export const IconDeliveryDelay01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-01-solid-rounded IconDeliveryDelay01SolidRounded"
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

export const IconDeliveryDelay01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-01-bulk-rounded IconDeliveryDelay01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d11} 
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

export const IconDeliveryDelay01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-01-stroke-sharp IconDeliveryDelay01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryDelay01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-01-solid-sharp IconDeliveryDelay01SolidSharp"
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

export const iconPackOfDeliveryDelay01: TheIconSelfPack = {
  name: 'DeliveryDelay01',
  StrokeRounded: IconDeliveryDelay01StrokeRounded,
  DuotoneRounded: IconDeliveryDelay01DuotoneRounded,
  TwotoneRounded: IconDeliveryDelay01TwotoneRounded,
  SolidRounded: IconDeliveryDelay01SolidRounded,
  BulkRounded: IconDeliveryDelay01BulkRounded,
  StrokeSharp: IconDeliveryDelay01StrokeSharp,
  SolidSharp: IconDeliveryDelay01SolidSharp,
};