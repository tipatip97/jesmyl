import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 12.1294L12.9388 18.207C11.1557 19.9949 10.2641 20.8889 9.16993 20.9877C8.98904 21.0041 8.80705 21.0041 8.62616 20.9877C7.53195 20.8889 6.64039 19.9949 4.85726 18.207L2.83687 16.1811C1.72104 15.0622 1.72104 13.2482 2.83687 12.1294M19 12.1294L10.9184 4.02587M19 12.1294H2.83687M10.9184 4.02587L2.83687 12.1294M10.9184 4.02587L8.89805 2',
  d2: 'M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 20 17 20 17C20 17 22 18.8954 22 20Z',
  d3: 'M12.9388 18.2065L19 12.1289H2.83687C1.72104 13.2478 1.72104 15.0618 2.83687 16.1806L4.85726 18.2065C6.64039 19.9945 7.53195 20.8885 8.62616 20.9873C8.80705 21.0036 8.98904 21.0036 9.16993 20.9873C10.2641 20.8885 11.1557 19.9945 12.9388 18.2066L12.9388 18.2065Z',
  d4: 'M10.9184 4.02587L19 12.1294L12.9388 18.207C11.1557 19.9949 10.2641 20.8889 9.16993 20.9877C8.98904 21.0041 8.80705 21.0041 8.62616 20.9877C7.53195 20.8889 6.64039 19.9949 4.85726 18.207L2.83687 16.1811C1.72104 15.0622 1.72104 13.2482 2.83687 12.1294L10.9184 4.02587ZM10.9184 4.02587L8.89805 2',
  d5: 'M19 12.1289H2.83691',
  d6: 'M9.62963 1.53686C9.2499 1.15511 8.6334 1.15428 8.25264 1.53499C7.87188 1.91569 7.87104 2.53378 8.25077 2.91553L9.53229 4.20383L2.3491 11.425C0.883634 12.8983 0.88363 15.2857 2.3491 16.759L4.35904 18.7796L4.35905 18.7796C5.19077 19.6157 5.87615 20.3048 6.48928 20.7895C7.13019 21.2961 7.79082 21.6619 8.58788 21.7341C8.82229 21.7553 9.05812 21.7553 9.29252 21.7341C10.0896 21.6619 10.7502 21.2961 11.3911 20.7895C12.0042 20.3048 12.6896 19.6158 13.5213 18.7797L13.5214 18.7795L19.4657 12.8037C19.8448 12.4227 19.8448 11.806 19.4657 11.425L9.62963 1.53686ZM5.38477 11.1379L10.9075 5.58594L16.4302 11.1379L5.38477 11.1379Z',
  d7: 'M19.4841 16.4556C19.7734 16.1815 20.2266 16.1815 20.5159 16.4556L20.5236 16.4637C20.728 16.6762 21.3177 17.2893 21.5808 17.6112C21.8449 17.9345 22.1242 18.3122 22.341 18.6973C22.5466 19.0623 22.75 19.5266 22.75 20C22.75 21.5188 21.5188 22.75 20 22.75C18.4812 22.75 17.25 21.5188 17.25 20C17.25 19.5266 17.4534 19.0623 17.659 18.6973C17.8758 18.3122 18.1551 17.9345 18.4192 17.6112C18.6823 17.2893 19.272 16.6762 19.4764 16.4637L19.4841 16.4556Z',
  d8: 'M8.25262 1.53499C8.63338 1.15428 9.24989 1.15511 9.62962 1.53686L19.4657 11.425C19.8447 11.806 19.8447 12.4227 19.4657 12.8037L13.5213 18.7796C12.6896 19.6158 12.0042 20.3048 11.3911 20.7895C10.7502 21.2961 10.0896 21.6619 9.29251 21.7341C9.0581 21.7553 8.82227 21.7553 8.58787 21.7341C7.79081 21.6619 7.13017 21.2961 6.48927 20.7895C5.87613 20.3048 5.19074 19.6157 4.35899 18.7795L2.3491 16.759C0.883631 15.2857 0.883635 12.8983 2.3491 11.425L9.53227 4.20383L8.25076 2.91553C7.87103 2.53378 7.87186 1.91569 8.25262 1.53499ZM10.9074 5.58624L3.72796 12.8037C3.0205 13.5149 3.0205 14.6691 3.72796 15.3803L5.69518 17.3579C6.58035 18.2478 7.18417 18.8525 7.69502 19.2563C8.18857 19.6465 8.49469 19.7653 8.76304 19.7896C8.8809 19.8003 8.99947 19.8003 9.11733 19.7896C9.38568 19.7653 9.6918 19.6465 10.1854 19.2563C10.6962 18.8525 11.3 18.2478 12.1852 17.358L17.4011 12.1144L10.9074 5.58624Z',
  d9: 'M3.72786 12.8027C3.0204 13.5139 3.0204 14.6681 3.72786 15.3793L5.69508 17.357C6.58025 18.2468 7.18407 18.8515 7.69493 19.2554C8.18847 19.6455 8.49459 19.7643 8.76294 19.7886C8.8808 19.7993 8.99937 19.7993 9.11723 19.7886C9.38558 19.7643 9.6917 19.6455 10.1853 19.2554C10.6961 18.8515 11.2999 18.2468 12.1851 17.357L17.401 12.1134L16.4295 11.1367H5.3851L3.72786 12.8027Z',
  d10: 'M10.9184 4.02587L19 12.1294L12.9388 18.207C11.1557 19.9949 10.2641 20.8889 9.16993 20.9877C8.98904 21.0041 8.80705 21.0041 8.62616 20.9877C7.53195 20.8889 6.64039 19.9949 4.85726 18.207L2.83687 16.1811C1.72104 15.0622 1.72104 13.2482 2.83687 12.1294M10.9184 4.02587L2.83687 12.1294M10.9184 4.02587L8.89805 2M2.83687 12.1294H18.2648',
  d11: 'M13.8529 18.9133L13.853 18.9133L13.8531 18.9132L20.6623 12.0855L9.85611 1.25L8.43998 2.6623L9.75613 3.98202L2.37881 11.3794C0.873732 12.8885 0.873728 15.3342 2.37881 16.8434L4.44307 18.9132C5.29728 19.7698 6.00118 20.4757 6.63088 20.9722C7.28911 21.4912 7.9676 21.8659 8.7862 21.9398C9.02694 21.9616 9.26915 21.9616 9.50989 21.9398C10.3285 21.8659 11.007 21.4912 11.6652 20.9722C12.2949 20.4757 12.9988 19.7699 13.8529 18.9133ZM5.49609 11.0858L11.1681 5.39844L16.84 11.0858L5.49609 11.0858Z',
  d12: 'M20 15.9668C20.0587 16.0247 20.7543 16.6909 20.8531 16.7936C21.0499 16.9983 21.3143 17.2852 21.5808 17.6113C21.8449 17.9346 22.1242 18.3123 22.341 18.6974C22.5466 19.0624 22.75 19.5267 22.75 20.0001C22.75 21.5189 21.5188 22.7501 20 22.7501C18.4812 22.7501 17.25 21.5189 17.25 20.0001C17.25 19.5267 17.4534 19.0624 17.659 18.6974C17.8758 18.3123 18.1551 17.9346 18.4192 17.6113C18.6857 17.2852 18.9501 16.9983 19.1469 16.7936C19.2457 16.6909 19.9413 16.0247 20 15.9668Z',
};

export const IconPaintBucketStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-bucket-stroke-rounded IconPaintBucketStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPaintBucketDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-bucket-duotone-rounded IconPaintBucketDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconPaintBucketTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-bucket-twotone-rounded IconPaintBucketTwotoneRounded"
    >
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPaintBucketSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-bucket-solid-rounded IconPaintBucketSolidRounded"
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

export const IconPaintBucketBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-bucket-bulk-rounded IconPaintBucketBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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

export const IconPaintBucketStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-bucket-stroke-sharp IconPaintBucketStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPaintBucketSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-bucket-solid-sharp IconPaintBucketSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPaintBucket: TheIconSelfPack = {
  name: 'PaintBucket',
  StrokeRounded: IconPaintBucketStrokeRounded,
  DuotoneRounded: IconPaintBucketDuotoneRounded,
  TwotoneRounded: IconPaintBucketTwotoneRounded,
  SolidRounded: IconPaintBucketSolidRounded,
  BulkRounded: IconPaintBucketBulkRounded,
  StrokeSharp: IconPaintBucketStrokeSharp,
  SolidSharp: IconPaintBucketSolidSharp,
};