import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5 19.5C19.5 20.8807 18.3807 22 17 22C15.6193 22 14.5 20.8807 14.5 19.5C14.5 18.1193 15.6193 17 17 17C18.3807 17 19.5 18.1193 19.5 19.5Z',
  d2: 'M9.5 19.5C9.5 20.8807 8.38071 22 7 22C5.61929 22 4.5 20.8807 4.5 19.5C4.5 18.1193 5.61929 17 7 17C8.38071 17 9.5 18.1193 9.5 19.5Z',
  d3: 'M2 12V17C2 17.9346 2 18.4019 2.20096 18.75C2.33261 18.978 2.52197 19.1674 2.75 19.299C3.09808 19.5 3.56538 19.5 4.5 19.5M14.5 19.5H9.5M15 17.5V9C15 7.58579 15 6.87868 14.5607 6.43934C14.1213 6 13.4142 6 12 6H11M15.5 8.5H17.3014C18.1311 8.5 18.5459 8.5 18.8898 8.6947C19.2336 8.8894 19.4471 9.2451 19.8739 9.95651L21.5725 12.7875C21.7849 13.1415 21.8911 13.3186 21.9456 13.5151C22 13.7116 22 13.918 22 14.331V17C22 17.9346 22 18.4019 21.799 18.75C21.6674 18.978 21.478 19.1674 21.25 19.299C20.9019 19.5 20.4346 19.5 19.5 19.5',
  d4: 'M7.85 7.85L6.5 6.95V4.7M2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5Z',
  d5: 'M2.06649 7.27502C2.4338 9.39098 4.279 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 6.331 10.9907 6.16417 10.9725 6H12C13.4142 6 14.1213 6 14.5607 6.43934C14.9449 6.82353 14.9931 7.41249 14.9991 8.5H17.3014C18.1311 8.5 18.5459 8.5 18.8898 8.6947C19.2336 8.8894 19.4471 9.2451 19.8739 9.95651L21.5725 12.7875C21.7849 13.1415 21.8911 13.3186 21.9456 13.5151C22 13.7116 22 13.918 22 14.331V17C22 17.9346 22 18.4019 21.799 18.75C21.6674 18.978 21.478 19.1674 21.25 19.299C20.9019 19.5 20.4346 19.5 19.5 19.5C19.5 18.1193 18.3807 17 17 17C15.6193 17 14.5 18.1193 14.5 19.5H9.5C9.5 18.1193 8.38071 17 7 17C5.61929 17 4.5 18.1193 4.5 19.5C3.56538 19.5 3.09808 19.5 2.75 19.299C2.52197 19.1674 2.33261 18.978 2.20096 18.75C2 18.4019 2 17.9346 2 17V9C2 8.24636 2 7.69353 2.06649 7.27502Z',
  d6: 'M1.25 10.7431V16.9559V16.9559C1.24997 17.3767 1.24995 17.7552 1.27854 18.069C1.30923 18.4059 1.37894 18.7624 1.57733 19.1042C1.79176 19.4737 2.10018 19.7806 2.47159 19.9939C2.81519 20.1913 3.4935 20.28 3.83214 20.3106C4.24973 21.7207 5.56083 22.7501 7.11359 22.7501C8.66305 22.7501 9.97188 21.7251 10.3924 20.3195H13.6075C14.0279 21.7251 15.3368 22.7501 16.8862 22.7501C18.439 22.7501 19.7501 21.7207 20.1677 20.3106C20.5063 20.28 21.1846 20.1913 21.5282 19.9939C21.8997 19.7806 22.2081 19.4737 22.4225 19.1043C22.6209 18.7624 22.6906 18.4059 22.7213 18.069C22.7499 17.7552 22.7499 17.3766 22.7498 16.9558L22.7499 14.2463C22.7505 13.921 22.751 13.5917 22.6612 13.2691C22.5714 12.9465 22.4006 12.6645 22.2319 12.3858L22.2319 12.3857L20.5128 9.53546C20.3215 9.21825 20.1439 8.92369 19.9689 8.68865C19.7753 8.42848 19.5429 8.1811 19.2145 7.99613C18.8861 7.81116 18.5534 7.74018 18.2295 7.70887C17.9369 7.68058 17.5917 7.68061 17.2199 7.68064L15.8756 7.68064C15.8073 7.17571 15.6199 6.3863 15.1934 5.96198C14.7669 5.53767 14.2462 5.38004 13.7386 5.31215C13.5544 5.28751 13.3529 5.27264 13.137 5.26367C13.2112 5.66451 13.25 6.07776 13.25 6.50008C13.25 10.228 10.2279 13.2501 6.5 13.2501C4.37955 13.2501 2.48747 12.2723 1.25 10.7431ZM16.887 15.9445C16.5474 15.9445 16.2194 15.9938 15.9097 16.0854V9.62508H18.2529L20.796 13.7881V17.889C20.796 18.069 20.6136 18.3647 20.1626 18.3647C19.7388 16.9645 18.4326 15.9445 16.887 15.9445ZM5.64843 19.3473C5.64843 18.5419 6.30474 17.889 7.11433 17.889C7.92392 17.889 8.58023 18.5419 8.58023 19.3473C8.58023 20.1527 7.92392 20.8056 7.11433 20.8056C6.30474 20.8056 5.64843 20.1527 5.64843 19.3473ZM16.887 17.889C16.0774 17.889 15.4211 18.5419 15.4211 19.3473C15.4211 20.1527 16.0774 20.8056 16.887 20.8056C17.6966 20.8056 18.3529 20.1527 18.3529 19.3473C18.3529 18.5419 17.6966 17.889 16.887 17.889Z',
  d7: 'M6.5 1.25C3.6005 1.25 1.25 3.6005 1.25 6.5C1.25 9.3995 3.6005 11.75 6.5 11.75C9.3995 11.75 11.75 9.3995 11.75 6.5C11.75 3.6005 9.3995 1.25 6.5 1.25ZM7.25 4.69922C7.25 4.28501 6.91421 3.94922 6.5 3.94922C6.08579 3.94922 5.75 4.28501 5.75 4.69922V6.94922C5.75 7.19998 5.87533 7.43416 6.08397 7.57326L7.43397 8.47326C7.77862 8.70302 8.24427 8.60989 8.47404 8.26524C8.7038 7.9206 8.61067 7.45495 8.26603 7.22518L7.25 6.54783V4.69922Z',
  d8: 'M1.25 10.7431V16.9559C1.24998 17.3766 1.24995 17.7552 1.27854 18.069C1.30924 18.4059 1.37894 18.7624 1.57733 19.1042C1.79176 19.4737 2.10018 19.7806 2.47159 19.9939C2.8152 20.1913 3.4935 20.28 3.83214 20.3106C4.24974 21.7207 5.56083 22.7501 7.11359 22.7501C8.66306 22.7501 9.97188 21.7251 10.3924 20.3195H13.6075C14.028 21.7251 15.3368 22.7501 16.8862 22.7501C18.439 22.7501 19.7501 21.7207 20.1677 20.3106C20.5063 20.28 21.1846 20.1913 21.5282 19.9939C21.8997 19.7806 22.2081 19.4737 22.4225 19.1043C22.6209 18.7624 22.6906 18.4059 22.7213 18.069C22.7499 17.7552 22.7499 17.3766 22.7498 16.9558L22.7499 14.2463C22.7505 13.921 22.751 13.5917 22.6612 13.2691C22.5714 12.9465 22.4006 12.6645 22.2319 12.3858L20.5128 9.53546C20.3215 9.21825 20.1439 8.92369 19.9689 8.68865C19.7753 8.42848 19.5429 8.1811 19.2145 7.99613C18.8861 7.81116 18.5534 7.74018 18.2295 7.70887C17.9369 7.68058 17.5917 7.68061 17.2199 7.68064L15.8756 7.68064C15.8073 7.17571 15.6199 6.3863 15.1934 5.96198C14.7669 5.53767 14.2462 5.38004 13.7386 5.31215C13.5544 5.28751 13.3529 5.27264 13.137 5.26367C13.2112 5.66451 13.25 6.07776 13.25 6.50008C13.25 10.228 10.2279 13.2501 6.5 13.2501C4.37955 13.2501 2.48747 12.2723 1.25 10.7431Z',
  d9: 'M15.9078 16.0854C16.2174 15.9937 16.5454 15.9444 16.885 15.9444C18.4307 15.9444 19.7369 16.9644 20.1607 18.3646C20.6117 18.3646 20.7941 18.069 20.7941 17.8889V13.7881L18.251 9.625H15.9078V16.0854Z',
  d10: 'M7.11238 17.8889C6.30279 17.8889 5.64648 18.5418 5.64648 19.3472C5.64648 20.1526 6.30279 20.8056 7.11238 20.8056C7.92197 20.8056 8.57828 20.1526 8.57828 19.3472C8.57828 18.5418 7.92197 17.8889 7.11238 17.8889Z',
  d11: 'M16.885 17.8889C16.0754 17.8889 15.4191 18.5418 15.4191 19.3472C15.4191 20.1526 16.0754 20.8056 16.885 20.8056C17.6946 20.8056 18.3509 20.1526 18.3509 19.3472C18.3509 18.5418 17.6946 17.8889 16.885 17.8889Z',
  d12: 'M2.0002 12L2 19.5H4.5002M14.5002 19.5H9.5002M15.0002 18V6H11M15.5002 8.5H19L22 13L22.0002 19.5H19.5',
  d13: 'M8 8L6.5 6.95V4M2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5Z',
  d14: 'M1.25014 10.7432L1.25 20.3194H3.83501C4.2555 21.725 5.56432 22.75 7.11378 22.75C8.66324 22.75 9.97206 21.725 10.3926 20.3194H13.6076C14.0281 21.725 15.3369 22.75 16.8864 22.75C18.4359 22.75 19.7447 21.725 20.1652 20.3194H22.75L22.7498 12.7334L19.3637 7.68056H15.9091V5.25H13.1345C13.2103 5.65508 13.25 6.07291 13.25 6.5C13.25 10.2279 10.2279 13.25 6.5 13.25C4.37963 13.25 2.48761 12.2723 1.25014 10.7432ZM16.8869 15.9444C16.5474 15.9444 16.2193 15.9937 15.9097 16.0854V9.625H18.3183L20.7958 13.3222L20.796 18.375H20.1657C19.7452 16.9694 18.4364 15.9444 16.8869 15.9444ZM5.64844 19.3472C5.64844 18.5418 6.30474 17.8889 7.11433 17.8889C7.92392 17.8889 8.58022 18.5418 8.58022 19.3472C8.58022 20.1526 7.92392 20.8056 7.11433 20.8056C6.30474 20.8056 5.64844 20.1526 5.64844 19.3472ZM16.8869 17.8889C16.0774 17.8889 15.4211 18.5418 15.4211 19.3472C15.4211 20.1526 16.0774 20.8056 16.8869 20.8056C17.6965 20.8056 18.3528 20.1526 18.3528 19.3472C18.3528 18.5418 17.6965 17.8889 16.8869 17.8889Z',
  d15: 'M6.5 1.25C3.6005 1.25 1.25 3.6005 1.25 6.5C1.25 9.3995 3.6005 11.75 6.5 11.75C9.3995 11.75 11.75 9.3995 11.75 6.5C11.75 3.6005 9.3995 1.25 6.5 1.25ZM7.25 4V6.55951L8.4301 7.38558L7.5699 8.61442L5.75 7.34049V4H7.25Z',
} as const;

export const IconDeliveryDelay02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-02-stroke-rounded IconDeliveryDelay02StrokeRounded"
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

export const IconDeliveryDelay02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-02-duotone-rounded IconDeliveryDelay02DuotoneRounded"
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

export const IconDeliveryDelay02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-02-twotone-rounded IconDeliveryDelay02TwotoneRounded"
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

export const IconDeliveryDelay02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-02-solid-rounded IconDeliveryDelay02SolidRounded"
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

export const IconDeliveryDelay02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-02-bulk-rounded IconDeliveryDelay02BulkRounded"
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

export const IconDeliveryDelay02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-02-stroke-sharp IconDeliveryDelay02StrokeSharp"
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

export const IconDeliveryDelay02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-delay-02-solid-sharp IconDeliveryDelay02SolidSharp"
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

export const iconPackOfDeliveryDelay02: TheIconSelfPack = {
  name: 'DeliveryDelay02',
  StrokeRounded: IconDeliveryDelay02StrokeRounded,
  DuotoneRounded: IconDeliveryDelay02DuotoneRounded,
  TwotoneRounded: IconDeliveryDelay02TwotoneRounded,
  SolidRounded: IconDeliveryDelay02SolidRounded,
  BulkRounded: IconDeliveryDelay02BulkRounded,
  StrokeSharp: IconDeliveryDelay02StrokeSharp,
  SolidSharp: IconDeliveryDelay02SolidSharp,
};