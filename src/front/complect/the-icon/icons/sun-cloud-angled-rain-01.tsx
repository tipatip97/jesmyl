import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 16L11.5 18M17 16L16 18M13.5 20L12.5 22M8 16L7 18M9 20L8 22',
  d2: 'M17.4776 8.89801L17.5 8.89795C19.9853 8.89795 22 10.8784 22 13.3214C22 14.8551 21.206 16.2065 20 17M17.4776 8.89801C17.4924 8.73611 17.5 8.57216 17.5 8.40646C17.5 5.42055 15.0376 3 12 3C9.12324 3 6.76233 5.17106 6.52042 7.93728M17.4776 8.89801C17.3753 10.0132 16.9286 11.0307 16.2428 11.8469M6.52042 7.93728C3.98398 8.17454 2 10.2745 2 12.8299C2 14.4378 2.78565 15.8652 4 16.7619M6.52042 7.93728C6.67826 7.92251 6.83823 7.91496 7 7.91496C8.12582 7.91496 9.16474 8.28072 10.0005 8.89795',
  d3: 'M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9',
  d4: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d5: 'M8.57243 14.9808C9.06641 15.2278 9.26664 15.8285 9.01965 16.3224L8.01965 18.3224C7.77266 18.8164 7.17198 19.0166 6.67801 18.7696C6.18403 18.5227 5.9838 17.922 6.23079 17.428L7.23079 15.428C7.47778 14.934 8.07845 14.7338 8.57243 14.9808ZM13.0724 14.9808C13.5664 15.2278 13.7666 15.8285 13.5196 16.3224L12.5196 18.3224C12.2727 18.8164 11.672 19.0166 11.178 18.7696C10.684 18.5227 10.4838 17.922 10.7308 17.428L11.7308 15.428C11.9778 14.934 12.5785 14.7338 13.0724 14.9808ZM17.5724 14.9808C18.0664 15.2278 18.2666 15.8285 18.0196 16.3224L17.0196 18.3224C16.7727 18.8164 16.172 19.0166 15.678 18.7696C15.184 18.5227 14.9838 17.922 15.2308 17.428L16.2308 15.428C16.4778 14.934 17.0785 14.7338 17.5724 14.9808ZM9.57243 18.9808C10.0664 19.2278 10.2666 19.8285 10.0196 20.3224L9.01965 22.3224C8.77266 22.8164 8.17198 23.0166 7.67801 22.7696C7.18403 22.5227 6.9838 21.922 7.23079 21.428L8.23079 19.428C8.47778 18.934 9.07845 18.7338 9.57243 18.9808ZM14.0724 18.9808C14.5664 19.2278 14.7666 19.8285 14.5196 20.3224L13.5196 22.3224C13.2727 22.8164 12.672 23.0166 12.178 22.7696C11.684 22.5227 11.4838 21.922 11.7308 21.428L12.7308 19.428C12.9778 18.934 13.5785 18.7338 14.0724 18.9808Z',
  d6: 'M6.06431 7.09283C6.01491 7.28884 5.9902 7.38684 5.93372 7.4447C5.87724 7.50255 5.77924 7.52976 5.58325 7.58419C3.15606 8.2582 1.375 10.4833 1.375 13.125C1.375 15.0021 2.27451 16.6692 3.666 17.7186C4.00828 17.9768 4.17942 18.1059 4.32852 18.0568C4.47761 18.0078 4.56104 17.727 4.7279 17.1656C4.76901 17.0272 4.82271 16.8906 4.88948 16.757L5.88948 14.757C6.50695 13.5221 8.00864 13.0215 9.24358 13.639C9.74699 13.8907 10.1284 14.2893 10.3617 14.7569C10.3674 14.7683 10.3838 14.7684 10.3895 14.757C11.007 13.5221 12.5086 13.0215 13.7436 13.639C14.247 13.8907 14.6284 14.2893 14.8617 14.7569C14.8674 14.7683 14.8838 14.7684 14.8895 14.757C15.507 13.5221 17.0086 13.0215 18.2436 13.639C19.4785 14.2565 19.9791 15.7581 19.3616 16.9931L18.9749 17.7665C18.7424 18.2316 18.6261 18.4642 18.7662 18.6164C18.9064 18.7687 19.1295 18.6793 19.5757 18.5007C21.5092 17.7264 22.875 15.8352 22.875 13.625C22.875 11.1535 21.1672 9.08089 18.8673 8.52286C18.6239 8.4638 18.5022 8.43427 18.4397 8.36328C18.3772 8.2923 18.3635 8.16961 18.3362 7.92424C17.9878 4.80231 15.3399 2.375 12.125 2.375C9.20171 2.375 6.74772 4.38153 6.06431 7.09283Z',
  d7: 'M3.125 5.98179C3.125 4.40086 4.40141 3.125 5.96888 3.125C6.74917 3.125 7.45702 3.44017 7.97224 3.95404C8.47713 3.5048 9.05535 3.1362 9.68671 2.86845C8.79982 1.80488 7.46405 1.125 5.96888 1.125C3.29052 1.125 1.125 3.30262 1.125 5.98179C1.125 7.37511 1.71096 8.63195 2.64756 9.51703C3.07158 8.99154 3.58625 8.54223 4.16783 8.19283C3.53021 7.66805 3.125 6.8729 3.125 5.98179Z',
  d8: 'M6.10547 17.8555L7.10547 15.8555L8.89432 16.7499L7.89432 18.7499L6.10547 17.8555ZM10.6055 17.8555L11.6055 15.8555L13.3943 16.7499L12.3943 18.7499L10.6055 17.8555ZM15.1055 17.8555L16.1055 15.8555L17.8943 16.7499L16.8943 18.7499L15.1055 17.8555ZM7.10547 21.8555L8.10547 19.8555L9.89432 20.7499L8.89432 22.7499L7.10547 21.8555ZM11.6055 21.8555L12.6055 19.8555L14.3943 20.7499L13.3943 22.7499L11.6055 21.8555Z',
  d9: 'M1.25 5.85826C1.25 7.17454 1.80115 8.36245 2.68308 9.20164C1.79103 10.2146 1.25 11.544 1.25 13C1.25 15.2055 2.49166 17.1209 4.31407 18.0854L6.43539 13.8428L10.0354 15.6428L10.9354 13.8428L14.5354 15.6428L15.4354 13.8428L19.9075 16.0788L18.6333 18.6274C20.988 18.1093 22.75 16.0104 22.75 13.5C22.75 10.8541 20.7927 8.66534 18.2469 8.30273C18.1428 4.94224 15.3858 2.25 12 2.25C11.0435 2.25 10.1372 2.46484 9.32672 2.8489C8.48541 1.87157 7.23857 1.25 5.84601 1.25C3.30471 1.25 1.25 3.31619 1.25 5.85826ZM5.84601 3.14766C4.35875 3.14766 3.14766 4.35823 3.14766 5.85826C3.14766 6.72264 3.54949 7.49188 4.17797 7.98912C4.69233 7.69886 5.25587 7.48547 5.853 7.36454C6.1002 6.01824 6.77854 4.82293 7.7396 3.92707C7.25136 3.44376 6.58272 3.14766 5.84601 3.14766Z',
} as const;

export const IconSunCloudAngledRain01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-01-stroke-rounded IconSunCloudAngledRain01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRain01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-01-duotone-rounded IconSunCloudAngledRain01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRain01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-01-twotone-rounded IconSunCloudAngledRain01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRain01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-01-solid-rounded IconSunCloudAngledRain01SolidRounded"
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

export const IconSunCloudAngledRain01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-01-bulk-rounded IconSunCloudAngledRain01BulkRounded"
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

export const IconSunCloudAngledRain01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-01-stroke-sharp IconSunCloudAngledRain01StrokeSharp"
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

export const IconSunCloudAngledRain01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-01-solid-sharp IconSunCloudAngledRain01SolidSharp"
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

export const iconPackOfSunCloudAngledRain01: TheIconSelfPack = {
  name: 'SunCloudAngledRain01',
  StrokeRounded: IconSunCloudAngledRain01StrokeRounded,
  DuotoneRounded: IconSunCloudAngledRain01DuotoneRounded,
  TwotoneRounded: IconSunCloudAngledRain01TwotoneRounded,
  SolidRounded: IconSunCloudAngledRain01SolidRounded,
  BulkRounded: IconSunCloudAngledRain01BulkRounded,
  StrokeSharp: IconSunCloudAngledRain01StrokeSharp,
  SolidSharp: IconSunCloudAngledRain01SolidSharp,
};