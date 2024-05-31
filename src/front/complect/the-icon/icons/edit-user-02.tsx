import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z',
  d2: 'M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z',
  d3: 'M19.6221 4.56564C19.8457 4.32342 19.9574 4.20232 20.0762 4.13168C20.3628 3.96123 20.7157 3.95593 21.0071 4.1177C21.1279 4.18474 21.2431 4.30244 21.4735 4.53783C21.7039 4.77322 21.8192 4.89092 21.8848 5.01428C22.0431 5.31194 22.038 5.67244 21.8711 5.96521C21.8019 6.08655 21.6834 6.20073 21.4463 6.4291L18.6252 9.14629C18.1759 9.57906 17.9512 9.79545 17.6704 9.90512C17.3896 10.0148 17.081 10.0067 16.4636 9.99057L16.3796 9.98838C16.1917 9.98346 16.0977 9.98101 16.0431 9.91901C15.9885 9.85702 15.9959 9.7613 16.0108 9.56985L16.0189 9.4659C16.0609 8.92706 16.0819 8.65765 16.1871 8.41547C16.2923 8.17328 16.4738 7.97664 16.8368 7.58335L19.6221 4.56564Z',
  d4: 'M4.801 14.6493C7.98419 12.7836 12.0162 12.7836 15.1994 14.6493C15.3002 14.7084 15.4257 14.7781 15.5686 14.8574C16.2012 15.2086 17.1731 15.7481 17.8385 16.3892C18.254 16.7896 18.6635 17.3303 18.7383 18.0037C18.8184 18.7252 18.4961 19.3911 17.8798 19.9691C16.8297 20.9539 15.5618 21.75 13.9194 21.75H6.08096C4.43862 21.75 3.1707 20.9538 2.12062 19.9691C1.5043 19.3911 1.18195 18.7252 1.26207 18.0037C1.33684 17.3303 1.7464 16.7896 2.16189 16.3892C2.82728 15.7481 3.79919 15.2086 4.43183 14.8574C4.57465 14.7781 4.7002 14.7084 4.801 14.6493Z',
  d5: 'M5.25019 7C5.25019 4.37665 7.37684 2.25 10.0002 2.25C12.6235 2.25 14.7502 4.37665 14.7502 7C14.7502 9.62335 12.6235 11.75 10.0002 11.75C7.37684 11.75 5.25019 9.62335 5.25019 7Z',
  d6: 'M19.6927 3.48706C20.2086 3.18027 20.8461 3.17056 21.371 3.46197C21.5915 3.58437 21.7825 3.78045 21.961 3.9636L22.0094 4.01318L22.0574 4.06215C22.2375 4.24523 22.4283 4.4393 22.5468 4.66202C22.8259 5.18658 22.8169 5.82021 22.5226 6.33657C22.3977 6.55581 22.2012 6.7442 22.016 6.92177L22.016 6.92177L21.9665 6.96929L19.1454 9.68647L19.0691 9.76011C18.6967 10.1199 18.3674 10.438 17.9432 10.6037C17.5174 10.77 17.0613 10.7574 16.5488 10.7432L16.4439 10.7403L16.3599 10.7381L16.3412 10.7377C16.2666 10.7358 16.1459 10.7329 16.0378 10.7149C15.8969 10.6914 15.667 10.6268 15.4803 10.4149C15.2958 10.2055 15.2596 9.97238 15.2519 9.83471C15.2459 9.72654 15.2554 9.60697 15.2615 9.53055L15.263 9.5116L15.2711 9.40764L15.278 9.31828C15.3125 8.86786 15.3425 8.47713 15.4991 8.1166C15.6563 7.75486 15.9215 7.46825 16.2254 7.13981L16.2856 7.07467L19.0709 4.05696L19.1178 4.00596L19.1178 4.00596C19.2909 3.8175 19.4761 3.61592 19.6927 3.48706Z',
  d7: 'M2 20.9997H17C17 16.9063 13.6421 13.5879 9.5 13.5879C5.35786 13.5879 2 16.9063 2 20.9997Z',
  d8: 'M13.25 6.70588C13.25 8.75258 11.5711 10.4118 9.5 10.4118C7.42893 10.4118 5.75 8.75258 5.75 6.70588C5.75 4.65918 7.42893 3 9.5 3C11.5711 3 13.25 4.65918 13.25 6.70588Z',
  d9: 'M17.8773 12H16V10.1432L20.116 6.00221C20.1189 5.99927 20.1236 5.99926 20.1265 6.0022L21.9978 7.87926C22.0007 7.8822 22.0007 7.88697 21.9978 7.8899L17.8773 12Z',
  d10: 'M5 6.70588C5 4.23662 7.02311 2.25 9.5 2.25C11.9769 2.25 14 4.23662 14 6.70588C14 9.17514 11.9769 11.1618 9.5 11.1618C7.02311 11.1618 5 9.17514 5 6.70588Z',
  d11: 'M1.25 21C1.25 16.484 4.95204 12.8382 9.5 12.8382C14.048 12.8382 17.75 16.484 17.75 21V21.75H1.25V21Z',
  d12: 'M20.125 5.25C20.3239 5.25 20.5147 5.32902 20.6553 5.46967L22.5303 7.34467C22.8232 7.63756 22.8232 8.11244 22.5303 8.40533L18.1857 12.75H15.25V9.81434L19.5947 5.46967C19.7353 5.32902 19.9261 5.25 20.125 5.25Z',
} as const;

export const IconEditUser02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-user-02-stroke-rounded IconEditUser02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEditUser02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-user-02-duotone-rounded IconEditUser02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEditUser02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-user-02-twotone-rounded IconEditUser02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEditUser02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-user-02-solid-rounded IconEditUser02SolidRounded"
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

export const IconEditUser02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-user-02-bulk-rounded IconEditUser02BulkRounded"
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

export const IconEditUser02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-user-02-stroke-sharp IconEditUser02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconEditUser02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-user-02-solid-sharp IconEditUser02SolidSharp"
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

export const iconPackOfEditUser02: TheIconSelfPack = {
  name: 'EditUser02',
  StrokeRounded: IconEditUser02StrokeRounded,
  DuotoneRounded: IconEditUser02DuotoneRounded,
  TwotoneRounded: IconEditUser02TwotoneRounded,
  SolidRounded: IconEditUser02SolidRounded,
  BulkRounded: IconEditUser02BulkRounded,
  StrokeSharp: IconEditUser02StrokeSharp,
  SolidSharp: IconEditUser02SolidSharp,
};