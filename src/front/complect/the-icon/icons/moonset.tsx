import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 6.5C17.4915 7.0057 18.7998 9 19.5 9M22 6.5C21.5085 7.0057 20.2002 9 19.5 9M19.5 9V3',
  d2: 'M16.75 18C17.3235 17.1916 17.7446 16.2813 18 15.3219C15.7006 15.6252 13.3471 14.4775 12.1157 12.2135C10.8843 9.94939 11.1247 7.21203 12.5219 5.24984C10.6594 4.74879 8.61836 4.98806 6.823 6.08837C3.1672 8.32888 1.91462 13.2911 4.0253 17.1718C4.18331 17.4623 4.35569 17.7385 4.54094 18',
  d3: 'M2 21H22',
  d4: 'M6.823 6.08837C3.1672 8.32888 1.91462 13.2911 4.0253 17.1718C4.18331 17.4623 4.35569 17.7385 4.54094 18H16.75C17.3235 17.1916 17.7446 16.2813 18 15.3219C15.7006 15.6252 13.3471 14.4775 12.1157 12.2135C10.8843 9.94939 11.1247 7.21203 12.5219 5.24984C10.6594 4.74879 8.61836 4.98806 6.823 6.08837Z',
  d5: 'M20.5059 3C20.5059 2.44772 20.0581 2 19.5059 2C18.9536 2 18.5059 2.44772 18.5059 3L18.5059 6.50004L17.9116 6.50002C17.736 6.49989 17.5203 6.49974 17.3439 6.52181L17.3405 6.52223C17.2141 6.538 16.638 6.60983 16.3637 7.17543C16.0887 7.74225 16.3907 8.24239 16.456 8.3506L16.7951 8.81908C17.0897 9.19491 17.4954 9.70937 17.8759 10.1004C18.0657 10.2955 18.283 10.4967 18.5139 10.6556C18.7191 10.7968 19.0693 11 19.5 11C19.9307 11 20.2809 10.7968 20.4861 10.6556C20.717 10.4967 20.9343 10.2955 21.1241 10.1004C21.5046 9.70937 21.9102 9.19492 22.2049 8.81909L22.544 8.35059C22.6093 8.24239 22.9113 7.74225 22.6363 7.17543C22.362 6.60983 21.7859 6.53799 21.6595 6.52223L21.6561 6.52181C21.4797 6.49974 21.264 6.49989 21.0884 6.50002L20.5059 6.50004L20.5059 3Z',
  d6: 'M6.43061 5.44888C8.40635 4.23802 10.6603 3.97246 12.7162 4.52557C12.9534 4.58937 13.1443 4.76527 13.2273 4.99644C13.3103 5.22761 13.2748 5.48476 13.1323 5.68483C11.8972 7.4195 11.6832 9.84934 12.7741 11.8551C13.8608 13.853 15.9171 14.84 17.9014 14.5783C18.1496 14.5455 18.3977 14.6388 18.5629 14.8268C18.7281 15.0148 18.7887 15.2729 18.7243 15.5148C18.4466 16.5579 17.9881 17.5503 17.3612 18.4339C17.2206 18.6322 16.9926 18.75 16.7495 18.75H4.54045C4.29721 18.75 4.06907 18.632 3.92846 18.4335C3.72605 18.1478 3.53804 17.8465 3.36596 17.5301C1.07397 13.316 2.41796 7.9081 6.43061 5.44888Z',
  d7: 'M1 21C1 20.4477 1.44772 20 2 20H22C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H2C1.44772 22 1 21.5523 1 21Z',
  d8: 'M19.5 3V8.44939M22 6.5L19.5 9L17 6.5',
  d9: 'M18.793 9.91406L22.0002 6.70696L20.5859 5.29274L19.793 6.08564V2.49985L17.793 2.49985V6.08564L17.0002 5.29274L15.5859 6.70696L18.793 9.91406Z',
  d10: 'M7.07982 5.17209C3.18029 7.58495 1.84422 12.9289 4.09561 17.1081C4.26416 17.4209 4.44803 17.7184 4.64562 18H17.6686C18.2804 17.1294 18.7295 16.1491 19.002 15.1158C16.5492 15.4425 14.0389 14.2065 12.7254 11.7683C11.4119 9.33012 11.6683 6.38219 13.1586 4.26906C11.172 3.72946 8.99487 3.98715 7.07982 5.17209Z',
  d11: 'M22 21.5H2V19.5H22V21.5Z',
} as const;

export const IconMoonsetStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moonset-stroke-rounded IconMoonsetStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMoonsetDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moonset-duotone-rounded IconMoonsetDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconMoonsetTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moonset-twotone-rounded IconMoonsetTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMoonsetSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moonset-solid-rounded IconMoonsetSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconMoonsetBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moonset-bulk-rounded IconMoonsetBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMoonsetStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moonset-stroke-sharp IconMoonsetStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconMoonsetSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moonset-solid-sharp IconMoonsetSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfMoonset: TheIconSelfPack = {
  name: 'Moonset',
  StrokeRounded: IconMoonsetStrokeRounded,
  DuotoneRounded: IconMoonsetDuotoneRounded,
  TwotoneRounded: IconMoonsetTwotoneRounded,
  SolidRounded: IconMoonsetSolidRounded,
  BulkRounded: IconMoonsetBulkRounded,
  StrokeSharp: IconMoonsetStrokeSharp,
  SolidSharp: IconMoonsetSolidSharp,
};