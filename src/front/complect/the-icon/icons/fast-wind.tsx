import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 5.94145C5.5 9.37313 10.5755 7.90241 11.7324 5.94145C11.9026 5.65301 12 5.31814 12 4.96096C12 3.87795 11.1046 3 10 3C8.89543 3 8 3.87795 8 4.96096',
  d2: 'M17 8.92814C17 7.31097 18.1193 6 19.5 6C20.8807 6 22 7.31097 22 8.92814C22 9.6452 21.7799 10.3021 21.4146 10.8111C19.3463 14.1915 9.2764 12.9164 4 11.8563',
  d3: 'M13.0854 19.8873C13.2913 20.5356 13.8469 21 14.5 21C15.3284 21 16 20.2528 16 19.331C16 19.0176 15.9224 18.7244 15.7873 18.4738C14.4999 15.9925 7.99996 14.3239 2 18.7746',
  d4: 'M19 15.5H21',
  d5: 'M10.25 4.25C9.67904 4.25 9.25 4.69873 9.25 5.21096C9.25 5.76325 8.80229 6.21096 8.25 6.21096C7.69772 6.21096 7.25 5.76325 7.25 5.21096C7.25 3.55718 8.61182 2.25 10.25 2.25C11.8882 2.25 13.25 3.55718 13.25 5.21096C13.25 5.75255 13.1018 6.26218 12.8437 6.69958C12.4291 7.40231 11.7245 7.97445 10.9267 8.38876C10.1157 8.80996 9.13985 9.10489 8.0937 9.20879C5.99316 9.41742 3.54188 8.85859 1.5499 6.90549C1.15554 6.51883 1.1493 5.8857 1.53596 5.49134C1.92262 5.09699 2.55575 5.09075 2.9501 5.4774C4.45812 6.95598 6.29459 7.37764 7.89603 7.21859C8.70087 7.13865 9.42953 6.9127 10.0049 6.61386C10.5936 6.30813 10.9573 5.96106 11.1212 5.68331C11.2034 5.54385 11.25 5.38373 11.25 5.21096C11.25 4.69873 10.821 4.25 10.25 4.25Z',
  d6: 'M19.2502 7C18.5642 7 17.7502 7.70915 17.7502 8.92814C17.7502 9.48042 17.3025 9.92814 16.7502 9.92814C16.1979 9.92814 15.7502 9.48042 15.7502 8.92814C15.7502 6.91279 17.1748 5 19.2502 5C21.3256 5 22.7502 6.91279 22.7502 8.92814C22.7502 9.83526 22.476 10.6856 21.9983 11.3645C21.2746 12.5204 19.9593 13.1583 18.5626 13.518C17.1259 13.888 15.4109 14.0136 13.6522 13.9989C10.1276 13.9694 6.22193 13.3729 3.55321 12.8367C3.01175 12.7279 2.661 12.2008 2.76979 11.6593C2.87858 11.1178 3.40571 10.7671 3.94717 10.8759C6.55486 11.3998 10.3223 11.9709 13.6689 11.9989C15.3457 12.013 16.8658 11.8897 18.0638 11.5812C19.2892 11.2656 19.9971 10.8036 20.3118 10.2892L20.331 10.2579L20.3524 10.2281C20.5924 9.89364 20.7502 9.44185 20.7502 8.92814C20.7502 7.70915 19.9362 7 19.2502 7Z',
  d7: 'M16.9215 17.7565C16.4682 16.8876 15.624 16.1932 14.6259 15.7012C13.6105 15.2007 12.3599 14.8701 10.9782 14.777C8.20665 14.5901 4.84633 15.3537 1.65429 17.7215C1.21072 18.0505 1.11787 18.6768 1.44691 19.1204C1.77595 19.564 2.40227 19.6568 2.84584 19.3278C5.65376 17.2449 8.54339 16.6174 10.8437 16.7724C11.9978 16.8502 12.9886 17.1239 13.7416 17.4951C14.5092 17.8734 14.9585 18.3157 15.1498 18.6844L15.1534 18.6913L15.1571 18.6983C15.2136 18.803 15.2501 18.9332 15.2501 19.081C15.2501 19.5536 14.9285 19.75 14.7501 19.75C14.6022 19.75 14.3849 19.638 14.2885 19.3346C14.1213 18.8082 13.5591 18.517 13.0327 18.6842C12.5063 18.8514 12.2152 19.4137 12.3824 19.9401C12.6978 20.9332 13.5917 21.75 14.7501 21.75C16.2285 21.75 17.2501 20.4519 17.2501 19.081C17.2501 18.6048 17.1327 18.1512 16.9215 17.7565Z',
  d8: 'M17.75 15.75C17.75 15.1977 18.1977 14.75 18.75 14.75H20.75C21.3023 14.75 21.75 15.1977 21.75 15.75C21.75 16.3023 21.3023 16.75 20.75 16.75H18.75C18.1977 16.75 17.75 16.3023 17.75 15.75Z',
  d9: 'M9.50089 4C8.92993 4 8.50089 4.44873 8.50089 4.96096H6.50089C6.50089 3.30718 7.8627 2 9.50089 2C11.1391 2 12.5009 3.30718 12.5009 4.96096C12.5009 5.50255 12.3527 6.01218 12.0946 6.44958C11.68 7.15231 10.9754 7.72445 10.1776 8.13876C9.36663 8.55996 8.39074 8.85489 7.34458 8.95879C5.48393 9.14359 3.34807 8.72622 1.5 7.271L2.92765 5.84335C4.27557 6.82328 5.79499 7.10286 7.14692 6.96859C7.95176 6.88865 8.68041 6.6627 9.25583 6.36386C9.84451 6.05813 10.2082 5.71106 10.372 5.43331C10.4543 5.29385 10.5009 5.13373 10.5009 4.96096C10.5009 4.44873 10.0718 4 9.50089 4Z',
  d10: 'M18.9997 7C18.3137 7 17.4997 7.70915 17.4997 8.92814H15.4997C15.4997 6.91279 16.9243 5 18.9997 5C21.0751 5 22.4997 6.91279 22.4997 8.92814C22.4997 9.83526 22.2255 10.6856 21.7479 11.3645C21.0241 12.5204 19.7088 13.1583 18.3121 13.518C16.8754 13.888 15.1604 14.0136 13.4017 13.9989C9.87711 13.9694 5.97145 13.3729 3.30273 12.8367L3.69669 10.8759C6.30438 11.3998 10.0719 11.9709 13.4184 11.9989C15.0952 12.013 16.6153 11.8897 17.8133 11.5812C19.0387 11.2656 19.7466 10.8036 20.0613 10.2892L20.0805 10.2579L20.1019 10.2281C20.3419 9.89364 20.4997 9.44185 20.4997 8.92814C20.4997 7.70915 19.6857 7 18.9997 7Z',
  d11: 'M13.8759 15.9512C14.874 16.4432 15.7182 17.1376 16.1715 18.0065C16.3827 18.4012 16.5001 18.8548 16.5001 19.331C16.5001 20.7019 15.4785 22 14.0001 22C12.8418 22 11.9478 21.1832 11.6324 20.1901L13.5385 19.5846C13.6349 19.888 13.8522 20 14.0001 20C14.1785 20 14.5001 19.8036 14.5001 19.331C14.5001 19.1832 14.4636 19.053 14.4071 18.9483L14.4034 18.9413L14.3998 18.9344C14.2085 18.5657 13.7592 18.1234 12.9916 17.7451C12.2386 17.3739 11.2479 17.1002 10.0937 17.0224C8.02399 16.8829 5.47718 17.3769 2.94206 18.9946L1.49805 17.5506C4.50956 15.5129 7.628 14.8517 10.2282 15.027C11.6099 15.1201 12.8605 15.4507 13.8759 15.9512Z',
  d12: 'M20.5 16.5H18.5V14.5H20.5V16.5Z',
} as const;

export const IconFastWindStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fast-wind-stroke-rounded IconFastWindStrokeRounded"
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

export const IconFastWindDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fast-wind-duotone-rounded IconFastWindDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFastWindTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fast-wind-twotone-rounded IconFastWindTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFastWindSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fast-wind-solid-rounded IconFastWindSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconFastWindBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fast-wind-bulk-rounded IconFastWindBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFastWindStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fast-wind-stroke-sharp IconFastWindStrokeSharp"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFastWindSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fast-wind-solid-sharp IconFastWindSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFastWind: TheIconSelfPack = {
  name: 'FastWind',
  StrokeRounded: IconFastWindStrokeRounded,
  DuotoneRounded: IconFastWindDuotoneRounded,
  TwotoneRounded: IconFastWindTwotoneRounded,
  SolidRounded: IconFastWindSolidRounded,
  BulkRounded: IconFastWindBulkRounded,
  StrokeSharp: IconFastWindStrokeSharp,
  SolidSharp: IconFastWindSolidSharp,
};