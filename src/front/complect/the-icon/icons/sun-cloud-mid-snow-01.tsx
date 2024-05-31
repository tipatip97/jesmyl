import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9',
  d2: 'M17.4776 9.00915C17.485 9.00911 17.4925 9.00909 17.5 9.00909C19.9853 9.00909 22 11.0269 22 13.5159C22 15.4782 20.7478 16.8813 19 17.5M17.4776 9.00915C17.4924 8.8442 17.5 8.67716 17.5 8.50834C17.5 5.46617 15.0376 3 12 3C9.12324 3 6.76233 5.21197 6.52042 8.03032M17.4776 9.00915C17.3753 10.1453 16.9286 11.182 16.2428 12.0136M6.52042 8.03032C3.98398 8.27205 2 10.4116 2 13.0152C2 15.0686 3.2341 16.7103 5 17.5M6.52042 8.03032C6.67826 8.01527 6.83823 8.00758 7 8.00758C8.12582 8.00758 9.16474 8.38023 10.0005 9.00909',
  d3: 'M12 14V20M14.5 15.5L9.50013 18.5M9.5 15.5L14.4999 18.5',
  d4: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d5: 'M12.1252 13.875C12.6774 13.875 13.1252 14.3227 13.1252 14.875V16.1088L14.1106 15.5175C14.5842 15.2334 15.1985 15.3869 15.4826 15.8605C15.7668 16.3341 15.6132 16.9483 15.1397 17.2325L14.0688 17.875L15.1395 18.5175C15.6131 18.8017 15.7667 19.4159 15.4825 19.8895C15.1984 20.3631 14.5841 20.5166 14.1105 20.2325L13.1252 19.6413V20.875C13.1252 21.4273 12.6774 21.875 12.1252 21.875C11.5729 21.875 11.1252 21.4273 11.1252 20.875V19.6413L10.1398 20.2325C9.66621 20.5166 9.05195 20.3631 8.7678 19.8895C8.48364 19.4159 8.6372 18.8017 9.11078 18.5175L10.1815 17.875L9.11065 17.2325C8.63707 16.9483 8.48351 16.3341 8.76766 15.8605C9.05182 15.3869 9.66608 15.2334 10.1397 15.5175L11.1252 16.1088V14.875C11.1252 14.3227 11.5729 13.875 12.1252 13.875Z',
  d6: 'M6.06431 8.09283C6.01491 8.28884 5.9902 8.38684 5.93372 8.4447C5.87724 8.50255 5.77924 8.52976 5.58325 8.58419C3.15606 9.2582 1.375 11.4833 1.375 14.125C1.375 17.3006 3.94936 19.875 7.125 19.875C7.151 19.875 7.17044 19.8511 7.16576 19.8256C7.06765 19.2895 7.14922 18.738 7.38899 18.2572C7.49251 18.0496 7.54427 17.9457 7.54427 17.8751C7.54427 17.8044 7.4925 17.7006 7.38895 17.493C7.02055 16.7543 7.02548 15.849 7.48166 15.0887C7.90848 14.3774 8.63322 13.9549 9.40059 13.885C9.6222 13.8648 9.73301 13.8547 9.79182 13.8194C9.85064 13.7841 9.91173 13.691 10.0339 13.5049C10.4806 12.8244 11.2505 12.375 12.1254 12.375C13.0002 12.375 13.7701 12.8244 14.2169 13.5049C14.339 13.691 14.4001 13.7841 14.4589 13.8194C14.5178 13.8547 14.6286 13.8648 14.8502 13.885C15.6175 13.9549 16.3423 14.3774 16.7691 15.0887C17.2253 15.849 17.2302 16.7543 16.8618 17.493C16.7583 17.7006 16.7065 17.8044 16.7065 17.8751C16.7065 17.9457 16.7582 18.0496 16.8618 18.2572C17.0277 18.59 17.1179 18.9568 17.1252 19.3288C17.1292 19.5357 17.1312 19.6392 17.1542 19.6929C17.1899 19.7765 17.2332 19.819 17.3174 19.8531C17.3716 19.875 17.4561 19.875 17.625 19.875C20.5245 19.875 22.875 17.5245 22.875 14.625C22.875 12.1535 21.1672 10.0809 18.8673 9.52286C18.6239 9.4638 18.5022 9.43427 18.4397 9.36328C18.3772 9.2923 18.3635 9.16961 18.3362 8.92424C17.9878 5.80231 15.3399 3.375 12.125 3.375C9.20171 3.375 6.74772 5.38153 6.06431 8.09283Z',
  d7: 'M3.125 6.98179C3.125 5.40086 4.40141 4.125 5.96888 4.125C6.74917 4.125 7.45702 4.44017 7.97224 4.95404C8.47713 4.5048 9.05535 4.1362 9.68671 3.86845C8.79982 2.80488 7.46405 2.125 5.96888 2.125C3.29052 2.125 1.125 4.30262 1.125 6.98179C1.125 8.37511 1.71096 9.63195 2.64756 10.517C3.07158 9.99154 3.58625 9.54223 4.16783 9.19283C3.53021 8.66805 3.125 7.8729 3.125 6.98179Z',
  d8: 'M11 17.509V15.75H13V17.509L14.4961 16.6362L15.5039 18.3638L13.9846 19.25L15.5037 20.1362L14.4959 21.8638L13 20.9911V22.75H11V20.9911L9.50401 21.8638L8.49625 20.1362L10.0154 19.25L8.49609 18.3638L9.50386 16.6362L11 17.509Z',
  d9: 'M1.25 5.85826C1.25 7.17454 1.80115 8.36245 2.68308 9.20164C1.79103 10.2146 1.25 11.544 1.25 13C1.25 16.0241 3.58459 18.503 6.54982 18.7326L9.28985 14.25H14.7797L17.4644 18.75H17.5C20.3995 18.75 22.75 16.3995 22.75 13.5C22.75 10.8541 20.7927 8.66534 18.2469 8.30273C18.1428 4.94224 15.3858 2.25 12 2.25C11.0435 2.25 10.1372 2.46484 9.32672 2.8489C8.48541 1.87157 7.23857 1.25 5.84601 1.25C3.30471 1.25 1.25 3.31619 1.25 5.85826ZM5.84601 3.14766C4.35875 3.14766 3.14766 4.35823 3.14766 5.85826C3.14766 6.72264 3.54949 7.49188 4.17797 7.98912C4.69233 7.69886 5.25587 7.48547 5.853 7.36454C6.1002 6.01824 6.77854 4.82293 7.7396 3.92707C7.25136 3.44376 6.58272 3.14766 5.84601 3.14766Z',
} as const;

export const IconSunCloudMidSnow01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-01-stroke-rounded IconSunCloudMidSnow01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudMidSnow01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-01-duotone-rounded IconSunCloudMidSnow01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudMidSnow01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-01-twotone-rounded IconSunCloudMidSnow01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudMidSnow01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-01-solid-rounded IconSunCloudMidSnow01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSunCloudMidSnow01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-01-bulk-rounded IconSunCloudMidSnow01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSunCloudMidSnow01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-01-stroke-sharp IconSunCloudMidSnow01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconSunCloudMidSnow01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-01-solid-sharp IconSunCloudMidSnow01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudMidSnow01: TheIconSelfPack = {
  name: 'SunCloudMidSnow01',
  StrokeRounded: IconSunCloudMidSnow01StrokeRounded,
  DuotoneRounded: IconSunCloudMidSnow01DuotoneRounded,
  TwotoneRounded: IconSunCloudMidSnow01TwotoneRounded,
  SolidRounded: IconSunCloudMidSnow01SolidRounded,
  BulkRounded: IconSunCloudMidSnow01BulkRounded,
  StrokeSharp: IconSunCloudMidSnow01StrokeSharp,
  SolidSharp: IconSunCloudMidSnow01SolidSharp,
};