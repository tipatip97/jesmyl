import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.542 12L10.9325 8.87597C11.0235 8.14798 11.3545 8 12.042 8C12.7295 8 13.0605 8.14798 13.1515 8.87597L13.542 12',
  d2: 'M8.2844 12.611C9.6196 11.7996 10.785 12.1266 11.485 12.6474C11.7721 12.861 11.9156 12.9678 12 12.9678C12.0845 12.9678 12.228 12.861 12.5151 12.6474C13.2151 12.1266 14.3805 11.7996 15.7157 12.611C17.468 13.6759 17.8645 17.189 13.8226 20.153C13.0527 20.7175 12.6678 20.9998 12 20.9998C11.3323 20.9998 10.9474 20.7175 10.1775 20.153C6.13558 17.189 6.53208 13.6759 8.2844 12.611Z',
  d3: 'M2.0059 3C1.90863 4.57768 2.97686 8.04306 8.05347 9.66181M21.9941 3C22.0914 4.57768 21.0231 8.04306 15.9465 9.66181',
  d4: 'M8.26872 12.5348C9.60954 11.7161 10.7798 12.0461 11.4828 12.5716C11.7711 12.7871 11.9152 12.8948 12 12.8948C12.0848 12.8948 12.2289 12.7871 12.5172 12.5716C13.2202 12.0461 14.3905 11.7161 15.7313 12.5348C17.491 13.6093 17.8891 17.1538 13.8302 20.1442C13.0571 20.7138 12.6706 20.9986 12 20.9986C11.3294 20.9986 10.9429 20.7138 10.1698 20.1442C6.11086 17.1538 6.50903 13.6093 8.26872 12.5348Z',
  d5: 'M10.5 12.0402L10.8905 8.93053C10.9815 8.20589 11.3125 8.05859 12 8.05859C12.6875 8.05859 13.0185 8.20589 13.1095 8.93053L13.5 12.0402',
  d6: 'M2.0059 3.00146C1.90863 4.57188 2.97686 8.02131 8.05347 9.63261M21.9941 3.00146C22.0914 4.57188 21.0231 8.02131 15.9465 9.63261',
  d7: 'M10.5 12.0402L10.8905 8.93016C10.9815 8.20542 11.3125 8.05811 12 8.05811C12.6875 8.05811 13.0185 8.20542 13.1095 8.93016L13.5 12.0402',
  d8: 'M8.26872 12.5354C9.60954 11.7166 10.7798 12.0466 11.4828 12.5721C11.7711 12.7877 11.9152 12.8954 12 12.8954C12.0848 12.8954 12.2289 12.7877 12.5172 12.5721C13.2202 12.0466 14.3905 11.7166 15.7313 12.5354C17.491 13.61 17.8891 17.155 13.8302 20.1458C13.0571 20.7155 12.6706 21.0003 12 21.0003C11.3294 21.0003 10.9429 20.7155 10.1698 20.1458C6.11086 17.155 6.50903 13.61 8.26872 12.5354Z',
  d9: 'M2.0059 3C1.90863 4.57063 2.97686 8.02052 8.05347 9.63204M21.9941 3C22.0914 4.57063 21.0231 8.02052 15.9465 9.63204',
  d10: 'M2 2.25C2.55228 2.25 3 2.69772 3 3.25C3 5.53711 4.97821 7.76705 8.2959 8.79478C8.82345 8.9582 9.11864 9.51835 8.95522 10.0459C8.7918 10.5735 8.23165 10.8686 7.7041 10.7052C3.95817 9.54483 1 6.77755 1 3.25C1 2.69772 1.44772 2.25 2 2.25ZM22 2.25C22.5523 2.25 23 2.69772 23 3.25C23 6.77755 20.0418 9.54483 16.2959 10.7052C15.7683 10.8686 15.2082 10.5735 15.0448 10.0459C14.8814 9.51835 15.1765 8.9582 15.7041 8.79478C19.0218 7.76705 21 5.53711 21 3.25C21 2.69772 21.4477 2.25 22 2.25Z',
  d11: 'M11.5474 11.6841L11.8826 9.00223C11.9166 9.00079 11.9555 9 12.0001 9C12.0447 9 12.0836 9.00079 12.1176 9.00223L12.4528 11.6836C12.3146 11.7607 12.1855 11.8452 12.0664 11.9346L11.9996 11.9847L11.9328 11.9346C11.814 11.8454 11.6852 11.7611 11.5474 11.6841ZM9.58431 11.2641L9.89833 8.75193C9.95856 8.27013 10.1291 7.71473 10.6423 7.34993C11.0995 7.0249 11.64 7 12.0001 7C12.3602 7 12.9007 7.0249 13.3579 7.34993C13.8711 7.71473 14.0417 8.27013 14.1019 8.75193L14.4159 11.2642C14.9527 11.3134 15.5289 11.4936 16.123 11.8581C17.3044 12.5828 17.9248 14.0637 17.7057 15.6976C17.4846 17.346 16.4262 19.1534 14.276 20.7448C13.5776 21.2628 12.9203 21.7503 11.9996 21.7503C11.0789 21.7503 10.4216 21.2628 9.72318 20.7448C7.57303 19.1534 6.51463 17.346 6.29354 15.6976C6.07441 14.0637 6.69478 12.5828 7.87618 11.8581C8.47067 11.4934 9.04728 11.3131 9.58431 11.2641Z',
  d12: 'M10 12.0005L11 8.00049H13L14 12.0005',
  d13: 'M22 3.00049C22 5.90782 19.0318 8.40643 15.5 9.50049M2 3.00049C2 5.90782 4.96819 8.40643 8.5 9.50049',
  d14: 'M15.9141 13.0592C16.2641 13.5001 16.6892 14.4268 16.4092 16.0141C16.1542 17.4594 14.7385 19.5438 12.9913 20.5992L12.3403 20.8858C12.1712 20.9602 11.9843 20.991 11.8078 20.9362C10.5756 20.5541 8.15868 18.6989 7.60499 16.017C7.2677 14.3832 7.82066 13.3835 8.17068 12.9425C8.60086 12.2908 9.81738 11.7539 10.817 12.1191C11.2584 12.2803 11.6975 12.6437 12.0066 12.9294L12.4555 12.5305C13.8422 11.4022 15.4073 12.3143 15.9141 13.0592Z',
  d15: 'M4.44225 6.13634C5.52779 7.16804 7.04566 8.01433 8.72193 8.53359L8.27807 9.96641C6.42253 9.39162 4.6904 8.44157 3.40889 7.22362C2.12907 6.00727 1.25 4.47203 1.25 2.75H2.75C2.75 3.9353 3.35503 5.10304 4.44225 6.13634ZM19.5578 6.13634C20.645 5.10304 21.25 3.9353 21.25 2.75H22.75C22.75 4.47203 21.8709 6.00727 20.5911 7.22362C19.3096 8.44157 17.5775 9.39162 15.7219 9.96641L15.2781 8.53359C16.9543 8.01433 18.4722 7.16804 19.5578 6.13634Z',
  d16: 'M13.5515 6.75H10.3803L9.37166 10.7846C8.88585 10.8544 8.37053 11.0329 7.84102 11.3577C6.65962 12.0824 6.03926 13.5634 6.25838 15.1972C6.47947 16.8457 7.53787 18.653 9.68802 20.2445C10.1488 20.5855 10.6737 20.8283 11.0629 20.9826C11.2614 21.0613 11.4337 21.1204 11.5575 21.1603C11.6196 21.1803 11.7683 21.2238 11.7683 21.2238C11.8966 21.2586 12.0321 21.2586 12.1604 21.2239C12.1604 21.2239 12.3093 21.1803 12.3714 21.1603C12.4953 21.1204 12.6675 21.0613 12.866 20.9826C13.2552 20.8283 13.7801 20.5855 14.2409 20.2445C16.391 18.653 17.4494 16.8457 17.6705 15.1972C17.8897 13.5634 17.2693 12.0824 16.0879 11.3577C15.5595 11.0336 15.0452 10.8551 14.5602 10.785L13.5515 6.75ZM13.0454 10.9104L12.3803 8.25H11.5515L10.8862 10.9113C11.2716 11.0351 11.6133 11.2207 11.8977 11.4342L11.9643 11.4864L12.0313 11.4342C12.3162 11.2202 12.6589 11.0343 13.0454 10.9104Z',
} as const;

export const IconNecklaceStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="necklace-stroke-rounded IconNecklaceStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconNecklaceDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="necklace-duotone-rounded IconNecklaceDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
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

export const IconNecklaceTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="necklace-twotone-rounded IconNecklaceTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNecklaceSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="necklace-solid-rounded IconNecklaceSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconNecklaceBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="necklace-bulk-rounded IconNecklaceBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconNecklaceStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="necklace-stroke-sharp IconNecklaceStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNecklaceSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="necklace-solid-sharp IconNecklaceSolidSharp"
    >
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

export const iconPackOfNecklace: TheIconSelfPack = {
  name: 'Necklace',
  StrokeRounded: IconNecklaceStrokeRounded,
  DuotoneRounded: IconNecklaceDuotoneRounded,
  TwotoneRounded: IconNecklaceTwotoneRounded,
  SolidRounded: IconNecklaceSolidRounded,
  BulkRounded: IconNecklaceBulkRounded,
  StrokeSharp: IconNecklaceStrokeSharp,
  SolidSharp: IconNecklaceSolidSharp,
};