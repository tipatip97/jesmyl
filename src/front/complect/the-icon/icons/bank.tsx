import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 8.56907C2 7.37289 2.48238 6.63982 3.48063 6.08428L7.58987 3.79744C9.7431 2.59915 10.8197 2 12 2C13.1803 2 14.2569 2.59915 16.4101 3.79744L20.5194 6.08428C21.5176 6.63982 22 7.3729 22 8.56907C22 8.89343 22 9.05561 21.9646 9.18894C21.7785 9.88945 21.1437 10 20.5307 10H3.46928C2.85627 10 2.22152 9.88944 2.03542 9.18894C2 9.05561 2 8.89343 2 8.56907Z',
  d2: 'M11.9959 7H12.0049',
  d3: 'M4 10V18.5M8 10V18.5',
  d4: 'M16 10V18.5M20 10V18.5',
  d5: 'M19 18.5H5C3.34315 18.5 2 19.8431 2 21.5C2 21.7761 2.22386 22 2.5 22H21.5C21.7761 22 22 21.7761 22 21.5C22 19.8431 20.6569 18.5 19 18.5Z',
  d6: 'M8 18.5V10H4V18.5H8Z',
  d7: 'M20 18.5V10H16V18.5H20Z',
  d8: 'M12.0002 1.25C11.2712 1.25 10.6011 1.43823 9.85974 1.76207C9.14074 2.07612 8.30696 2.54014 7.25824 3.12377L7.25823 3.12378L3.11608 5.42893C2.53967 5.74971 2.05726 6.15261 1.72587 6.69585C1.39281 7.24181 1.25016 7.86731 1.25016 8.56907L1.25008 8.63515C1.24962 8.89061 1.24915 9.14972 1.31072 9.38151C1.46568 9.9648 1.83495 10.3408 2.2872 10.5422C2.6946 10.7238 3.1372 10.75 3.46944 10.75H20.5309C20.8631 10.75 21.3057 10.7238 21.7131 10.5422C22.1654 10.3408 22.5346 9.9648 22.6896 9.38151C22.7512 9.14972 22.7507 8.89061 22.7502 8.63515L22.7502 8.56907C22.7502 7.86731 22.6075 7.24181 22.2745 6.69585C21.9431 6.15261 21.4607 5.74971 20.8842 5.42893L16.7421 3.12379C15.6934 2.54014 14.8596 2.07612 14.1406 1.76206C13.3992 1.43823 12.7292 1.25 12.0002 1.25ZM11.9961 6C11.4438 6 10.9961 6.44772 10.9961 7C10.9961 7.55228 11.4438 8 11.9961 8H12.0051C12.5574 8 13.0051 7.55228 13.0051 7C13.0051 6.44772 12.5574 6 12.0051 6H11.9961Z',
  d9: 'M1.25 21.75C1.25 20.0931 2.92893 18.75 5 18.75H19C21.0711 18.75 22.75 20.0931 22.75 21.75C22.75 22.3023 22.1904 22.75 21.5 22.75H2.5C1.80964 22.75 1.25 22.3023 1.25 21.75Z',
  d10: 'M4.99984 17.5H8.35C8.53856 17.5 8.63284 17.5 8.69142 17.4414C8.75 17.3828 8.75 17.2886 8.75 17.1V12.4C8.75 12.2114 8.75 12.1172 8.69142 12.0586C8.63284 12 8.53856 12 8.35 12H3.46944C3.45328 12 3.4452 12 3.4404 12.0002C3.33507 12.0053 3.25529 12.0851 3.25023 12.1904C3.25 12.1952 3.25 12.2021 3.25 12.216V17.2383C3.25 17.4944 3.25 17.6224 3.32664 17.6825C3.40327 17.7426 3.53568 17.71 3.80049 17.6448C4.18472 17.5502 4.58642 17.5 4.99984 17.5Z',
  d11: 'M18.9998 17.5C19.4134 17.5 19.8152 17.5502 20.1995 17.6448C20.4643 17.7101 20.5967 17.7427 20.6734 17.6826C20.75 17.6226 20.75 17.4945 20.75 17.2384V12.2157C20.75 12.2021 20.75 12.1953 20.7498 12.1906C20.7448 12.0851 20.6649 12.0052 20.5594 12.0002C20.5547 12 20.5467 12 20.5309 12H15.65C15.4614 12 15.3672 12 15.3086 12.0586C15.25 12.1172 15.25 12.2114 15.25 12.4V17.1C15.25 17.2886 15.25 17.3828 15.3086 17.4414C15.3672 17.5 15.4614 17.5 15.65 17.5H18.9998Z',
  d12: 'M11.9961 7.0127H12.0051',
  d13: 'M4 10.0078V18.5028M8 10.0078V18.5028',
  d14: 'M16 10.0078V18.5028M20 10.0078V18.5028',
  d15: 'M22 18.5029H2V22.0009H21.9997L22 18.5029Z',
  d16: 'M2.00551 7.01199L11.9844 2.00009C11.9872 1.99867 11.9906 1.99867 11.9934 2.00008L21.9945 7.01199C21.9979 7.01369 22 7.01715 22 7.02093V10.0078H2V7.02092C2 7.01714 2.00213 7.01369 2.00551 7.01199Z',
  d17: 'M12.3354 1.32918C12.1243 1.22361 11.8757 1.22361 11.6646 1.32918L1.66459 6.32918C1.4105 6.45622 1.25 6.71592 1.25 7V9.75H22.75V7C22.75 6.71592 22.5895 6.45622 22.3354 6.32918L12.3354 1.32918ZM13 6H11V8H13V6Z',
  d18: 'M1.25024 19.5C1.25024 19.0858 1.58603 18.75 2.00024 18.75H22.0002C22.1992 18.75 22.3899 18.829 22.5306 18.9697C22.6713 19.1104 22.7503 19.3011 22.7502 19.5001L22.7499 22.0001C22.7499 22.4143 22.4141 22.75 21.9999 22.75H2.00024C1.58603 22.75 1.25024 22.4142 1.25024 22V19.5Z',
  d19: 'M20.75 11.25H15.25V17.25H20.75V11.25Z',
  d20: 'M8.75 11.25H3.25V17.25H8.75V11.25Z',
} as const;

export const IconBankStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bank-stroke-rounded IconBankStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBankDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bank-duotone-rounded IconBankDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBankTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bank-twotone-rounded IconBankTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBankSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bank-solid-rounded IconBankSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconBankBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bank-bulk-rounded IconBankBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconBankStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bank-stroke-sharp IconBankStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBankSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bank-solid-sharp IconBankSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBank: TheIconSelfPack = {
  name: 'Bank',
  StrokeRounded: IconBankStrokeRounded,
  DuotoneRounded: IconBankDuotoneRounded,
  TwotoneRounded: IconBankTwotoneRounded,
  SolidRounded: IconBankSolidRounded,
  BulkRounded: IconBankBulkRounded,
  StrokeSharp: IconBankStrokeSharp,
  SolidSharp: IconBankSolidSharp,
};