import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 8.5H8.70711C8.25435 8.5 7.82014 8.67986 7.5 9M14 8.5H15.2929C15.7456 8.5 16.1799 8.67986 16.5 9',
  d2: 'M16 21.1679C14.7751 21.7031 13.4222 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.4292 21.1338 16.6562 19.6934 18.3888',
  d3: 'M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15',
  d4: 'M15 16C16.9444 16.4782 20.5737 17.4805 19.9229 20.5384C19.5873 22.0505 17.8294 22.33 16.875 21.6496C14.5772 20.0116 16.875 18.4 15 16Z',
  d5: 'M19.625 18.4702C18.7257 16.9745 16.416 16.3483 15 16C15.8974 17.1487 15.8389 18.1168 15.7859 18.9937C15.7414 19.73 15.7008 20.4019 16.2334 21.0624C14.9478 21.6639 13.5131 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.4675 21.1063 16.7262 19.625 18.4702Z',
  d6: 'M14.7729 17.0401C15.4257 16.6802 16.0009 16.1972 16.467 15.6229C17.2448 15.8634 18.1061 16.1962 18.8433 16.6738C19.4461 17.0644 20.0088 17.5781 20.3666 18.2592C20.7323 18.9556 20.8542 19.7715 20.6574 20.696L20.656 20.7024C20.4217 21.7581 19.6716 22.3976 18.8403 22.6381C18.0404 22.8695 17.1213 22.7471 16.4405 22.2618C15.7625 21.7784 15.3605 21.2477 15.1644 20.6479C14.9782 20.0786 15.005 19.5169 15.0311 19.0684C15.0713 18.3939 15.1104 17.739 14.7729 17.0401Z',
  d7: 'M16.229 14.2856C17.1656 14.5418 18.4374 14.9206 19.5221 15.6233C19.9213 15.8819 20.3292 16.2007 20.6967 16.5932C21.0246 16.9434 21.1886 17.1185 21.3462 17.093C21.5039 17.0675 21.5916 16.8774 21.7669 16.4973C22.398 15.129 22.75 13.6056 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.6179 22.75 13.2235 22.6979 13.8129 22.5978C14.2007 22.5319 14.3945 22.499 14.4627 22.3631C14.5308 22.2273 14.4252 22.0211 14.2142 21.6087C14.1203 21.4253 14.0406 21.2342 13.9755 21.035C13.7106 20.2252 13.7556 19.454 13.7815 19.0091L13.7886 18.889C13.8157 18.4356 13.8243 18.1916 13.7825 17.9607C13.7511 17.7874 13.7354 17.7008 13.6325 17.63L13.6285 17.6273C13.5246 17.5582 13.4029 17.5831 13.1595 17.633C12.785 17.7097 12.3972 17.75 12 17.75C10.1185 17.75 8.44802 16.8454 7.40035 15.4505C7.1516 15.1192 7.21843 14.6491 7.54964 14.4003C7.88084 14.1516 8.35099 14.2184 8.59974 14.5496C9.37631 15.5836 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5836 15.4003 14.5496C15.5974 14.2873 15.9333 14.1908 16.229 14.2856ZM8.70711 7.75C8.05544 7.75 7.43047 8.00887 6.96967 8.46967C6.67678 8.76256 6.67678 9.23744 6.96967 9.53033C7.26256 9.82322 7.73744 9.82322 8.03033 9.53033C8.20982 9.35084 8.45327 9.25 8.70711 9.25H10C10.4142 9.25 10.75 8.91421 10.75 8.5C10.75 8.08579 10.4142 7.75 10 7.75H8.70711ZM14 7.75C13.5858 7.75 13.25 8.08579 13.25 8.5C13.25 8.91421 13.5858 9.25 14 9.25H15.2929C15.5467 9.25 15.7902 9.35084 15.9697 9.53033C16.2626 9.82322 16.7374 9.82322 17.0303 9.53033C17.3232 9.23744 17.3232 8.76256 17.0303 8.46967C16.5695 8.00887 15.9446 7.75 15.2929 7.75H14Z',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d9: 'M16.229 14.2856C17.1656 14.5418 18.4374 14.9206 19.5221 15.6233C20.2387 16.0875 20.9836 16.7458 21.4724 17.6766C21.9825 18.6479 22.1327 19.7638 21.8792 20.9548L21.8755 20.9718C21.5299 22.5286 20.4005 23.4862 19.1869 23.8374C18.0559 24.1646 16.7349 24.0059 15.7141 23.2782C14.8637 22.672 14.2703 21.9366 13.9755 21.035C13.7106 20.2252 13.7556 19.454 13.7815 19.0091L13.7886 18.889C13.8157 18.4356 13.8243 18.1916 13.7825 17.9607C13.7596 17.8345 13.717 17.6923 13.6189 17.5189C13.1054 17.6693 12.5622 17.75 12 17.75C10.1185 17.75 8.44802 16.8454 7.40035 15.4505C7.1516 15.1192 7.21843 14.6491 7.54964 14.4003C7.88084 14.1516 8.35099 14.2184 8.59974 14.5496C9.37631 15.5836 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5836 15.4003 14.5496C15.5974 14.2873 15.9333 14.1908 16.229 14.2856Z',
  d10: 'M6.96967 8.46967C7.43047 8.00887 8.05544 7.75 8.70711 7.75H10C10.4142 7.75 10.75 8.08579 10.75 8.5C10.75 8.91421 10.4142 9.25 10 9.25H8.70711C8.45327 9.25 8.20982 9.35084 8.03033 9.53033C7.73744 9.82322 7.26256 9.82322 6.96967 9.53033C6.67678 9.23744 6.67678 8.76256 6.96967 8.46967ZM13.25 8.5C13.25 8.08579 13.5858 7.75 14 7.75H15.2929C15.9446 7.75 16.5695 8.00887 17.0303 8.46967C17.3232 8.76256 17.3232 9.23744 17.0303 9.53033C16.7374 9.82322 16.2626 9.82322 15.9697 9.53033C15.7902 9.35084 15.5467 9.25 15.2929 9.25H14C13.5858 9.25 13.25 8.91421 13.25 8.5Z',
  d11: 'M16.426 17.1865C16.6052 17.885 16.5671 18.5087 16.5352 19.0284L16.5277 19.1544C16.5009 19.6135 16.5013 19.9119 16.5891 20.1804C16.667 20.4185 16.8395 20.7035 17.3103 21.0391C17.5839 21.2341 18.0209 21.3122 18.4225 21.196C18.7919 21.0891 19.0881 20.8337 19.1901 20.3791C19.3176 19.7763 19.2298 19.3213 19.0377 18.9555C18.8372 18.5737 18.493 18.2336 18.0268 17.9315C17.5494 17.6222 16.9895 17.3808 16.426 17.1865Z',
  d12: 'M14.5635 15.3904C14.8798 15.1507 15.1617 14.8676 15.4004 14.5498L16.5998 15.4506C16.5563 15.5085 16.5118 15.5655 16.4662 15.6217C17.244 15.8621 18.1053 16.195 18.8425 16.6726C19.4454 17.0632 20.008 17.5768 20.3658 18.258C20.419 18.3593 20.467 18.4632 20.5097 18.5695C21.9143 16.7528 22.75 14.474 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C13.4357 22.75 14.8057 22.4686 16.0577 21.9578C15.6059 21.5572 15.3196 21.1238 15.1636 20.6467C14.9774 20.0773 15.0042 19.5157 15.0303 19.0672L15.0364 18.9637V18.9637C15.0765 18.2923 15.1116 17.7037 14.7774 17.0359C13.9543 17.4909 13.0074 17.7502 12.0001 17.7502C10.1185 17.7502 8.44806 16.8455 7.40039 15.4506L8.59978 14.5498C9.37635 15.5838 10.6103 16.2502 12.0001 16.2502C12.9502 16.2502 13.8276 15.9387 14.5357 15.4112C14.5448 15.4041 14.5541 15.3971 14.5635 15.3904ZM19.2479 19.9393C18.7394 20.4038 18.1861 20.82 17.5952 21.1809C17.4892 21.1455 17.3925 21.0976 17.3104 21.0391C16.8396 20.7035 16.6671 20.4185 16.5893 20.1804C16.5014 19.9119 16.501 19.6135 16.5278 19.1544L16.5354 19.0284C16.5672 18.5086 16.6053 17.8849 16.4261 17.1865C16.9896 17.3808 17.5495 17.6222 18.0269 17.9315C18.4931 18.2335 18.8373 18.5737 19.0378 18.9554C19.1802 19.2265 19.2652 19.5465 19.2479 19.9393ZM9.99947 7.75L8.32242 7.75L7.16406 8.32918L7.83488 9.67082L8.67652 9.25H9.99947V7.75ZM13.9995 9.25H15.3224L16.1641 9.67082L16.8349 8.32918L15.6765 7.75H13.9995V9.25Z',
} as const;

export const IconDroolingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drooling-stroke-rounded IconDroolingStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDroolingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drooling-duotone-rounded IconDroolingDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDroolingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drooling-twotone-rounded IconDroolingTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDroolingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drooling-solid-rounded IconDroolingSolidRounded"
    >
      <path 
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

export const IconDroolingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drooling-bulk-rounded IconDroolingBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDroolingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drooling-stroke-sharp IconDroolingStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconDroolingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drooling-solid-sharp IconDroolingSolidSharp"
    >
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

export const iconPackOfDrooling: TheIconSelfPack = {
  name: 'Drooling',
  StrokeRounded: IconDroolingStrokeRounded,
  DuotoneRounded: IconDroolingDuotoneRounded,
  TwotoneRounded: IconDroolingTwotoneRounded,
  SolidRounded: IconDroolingSolidRounded,
  BulkRounded: IconDroolingBulkRounded,
  StrokeSharp: IconDroolingStrokeSharp,
  SolidSharp: IconDroolingSolidSharp,
};