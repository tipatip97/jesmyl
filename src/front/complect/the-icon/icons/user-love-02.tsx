import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z',
  d2: 'M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z',
  d3: 'M16.7612 3.27615C17.5657 2.81923 18.2679 3.00336 18.6897 3.29667C18.8626 3.41693 18.9491 3.47706 19 3.47706C19.0509 3.47706 19.1374 3.41693 19.3103 3.29667C19.7321 3.00336 20.4343 2.81923 21.2388 3.27615C22.2946 3.87582 22.5335 5.85413 20.0981 7.52315C19.6343 7.84105 19.4024 8 19 8C18.5976 8 18.3657 7.84105 17.9019 7.52315C15.4665 5.85413 15.7054 3.87582 16.7612 3.27615Z',
  d4: 'M4.801 14.6493C7.98419 12.7836 12.0162 12.7836 15.1994 14.6493C15.3002 14.7084 15.4257 14.7781 15.5686 14.8574C16.2012 15.2086 17.1731 15.7481 17.8385 16.3892C18.254 16.7896 18.6635 17.3303 18.7383 18.0037C18.8184 18.7252 18.4961 19.3911 17.8798 19.9691C16.8297 20.9539 15.5618 21.75 13.9194 21.75H6.08096C4.43862 21.75 3.1707 20.9538 2.12062 19.9691C1.5043 19.3911 1.18195 18.7252 1.26207 18.0037C1.33684 17.3303 1.7464 16.7896 2.16189 16.3892C2.82728 15.7481 3.79919 15.2086 4.43183 14.8574C4.57465 14.7781 4.7002 14.7084 4.801 14.6493Z',
  d5: 'M5.25019 7C5.25019 4.37665 7.37684 2.25 10.0002 2.25C12.6235 2.25 14.7502 4.37665 14.7502 7C14.7502 9.62335 12.6235 11.75 10.0002 11.75C7.37684 11.75 5.25019 9.62335 5.25019 7Z',
  d6: 'M19.0007 2.60437C19.6324 2.21949 20.588 2.04383 21.6098 2.62423C22.4404 3.09598 22.8716 4.06342 22.7206 5.10638C22.5693 6.1507 21.8573 7.22745 20.5228 8.14204L20.4611 8.18442C20.0485 8.46828 19.6387 8.75023 19.0007 8.75023C18.3627 8.75023 17.9528 8.46828 17.5402 8.18442L17.4785 8.14204C16.144 7.22745 15.4321 6.1507 15.2808 5.10638C15.1297 4.06342 15.5609 3.09598 16.3915 2.62423C17.4134 2.04383 18.369 2.21949 19.0007 2.60437Z',
  d7: 'M2 21H17C17 16.9066 13.6421 13.5882 9.5 13.5882C5.35786 13.5882 2 16.9066 2 21Z',
  d8: 'M13.25 6.70588C13.25 8.75258 11.5711 10.4118 9.5 10.4118C7.42893 10.4118 5.75 8.75258 5.75 6.70588C5.75 4.65918 7.42893 3 9.5 3C11.5711 3 13.25 4.65918 13.25 6.70588Z',
  d9: 'M20.9002 8.74823C19.5031 8.03461 18.5 9.08657 18.5 9.08657C18.5 9.08657 17.4968 8.03461 16.0997 8.74823C14.4076 9.61256 14.2861 12.9973 18.5 14.5C22.714 12.9973 22.5924 9.61256 20.9002 8.74823Z',
  d10: 'M5 6.70588C5 4.23662 7.02311 2.25 9.5 2.25C11.9769 2.25 14 4.23662 14 6.70588C14 9.17514 11.9769 11.1618 9.5 11.1618C7.02311 11.1618 5 9.17514 5 6.70588Z',
  d11: 'M1.25 21C1.25 16.484 4.95204 12.8382 9.5 12.8382C14.048 12.8382 17.75 16.484 17.75 21V21.75H1.25V21Z',
  d12: 'M18.1073 7.95547C18.2548 8.01572 18.3861 8.08363 18.4999 8.15129C18.6137 8.08363 18.745 8.01572 18.8925 7.95548C19.4817 7.71478 20.3142 7.60673 21.2413 8.08031C22.4524 8.69891 22.9961 10.1484 22.6426 11.5662C22.2813 13.0147 21.027 14.3951 18.7519 15.2064L18.4999 15.2962L18.248 15.2064C15.9729 14.3951 14.7186 13.0147 14.3573 11.5662C14.0037 10.1485 14.5474 8.69891 15.7585 8.0803C16.6856 7.60673 17.5181 7.71478 18.1073 7.95547Z',
} as const;

export const IconUserLove02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-love-02-stroke-rounded IconUserLove02StrokeRounded"
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

export const IconUserLove02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-love-02-duotone-rounded IconUserLove02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconUserLove02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-love-02-twotone-rounded IconUserLove02TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserLove02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-love-02-solid-rounded IconUserLove02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserLove02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-love-02-bulk-rounded IconUserLove02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserLove02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-love-02-stroke-sharp IconUserLove02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserLove02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-love-02-solid-sharp IconUserLove02SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfUserLove02: TheIconSelfPack = {
  name: 'UserLove02',
  StrokeRounded: IconUserLove02StrokeRounded,
  DuotoneRounded: IconUserLove02DuotoneRounded,
  TwotoneRounded: IconUserLove02TwotoneRounded,
  SolidRounded: IconUserLove02SolidRounded,
  BulkRounded: IconUserLove02BulkRounded,
  StrokeSharp: IconUserLove02StrokeSharp,
  SolidSharp: IconUserLove02SolidSharp,
};