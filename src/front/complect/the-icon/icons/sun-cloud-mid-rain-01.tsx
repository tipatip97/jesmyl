import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9',
  d2: 'M17.4776 9.00915C17.485 9.00911 17.4925 9.00909 17.5 9.00909C19.9853 9.00909 22 11.0269 22 13.5159C22 15.4782 20.7478 16.8813 19 17.5M17.4776 9.00915C17.4924 8.8442 17.5 8.67716 17.5 8.50834C17.5 5.46617 15.0376 3 12 3C9.12324 3 6.76233 5.21197 6.52042 8.03032M17.4776 9.00915C17.3753 10.1453 16.9286 11.182 16.2428 12.0136M6.52042 8.03032C3.98398 8.27205 2 10.4116 2 13.0152C2 15.0686 3.2341 16.7103 5 17.5M6.52042 8.03032C6.67826 8.01527 6.83823 8.00758 7 8.00758C8.12582 8.00758 9.16474 8.38023 10.0005 9.00909',
  d3: 'M12.0434 13L10.907 14.036C10.3596 14.596 10.3596 15.492 10.9358 16.052C11.224 16.332 11.6401 16.5 12.0434 16.5C12.4468 16.5 12.7797 16.36 13.0678 16.108C13.6441 15.548 13.6441 14.624 13.0678 14.064L12.0434 13Z',
  d4: 'M8.54345 18.5L7.40701 19.536C6.8596 20.096 6.85963 20.992 7.43585 21.552C7.72396 21.832 8.14009 22 8.54345 22C8.9468 22 9.27972 21.86 9.56783 21.608C10.1441 21.048 10.1441 20.124 9.56783 19.564L8.54345 18.5Z',
  d5: 'M15.5434 18.5L14.407 19.536C13.8596 20.096 13.8596 20.992 14.4358 21.552C14.724 21.832 15.1401 22 15.5434 22C15.9468 22 16.2797 21.86 16.5678 21.608C17.1441 21.048 17.1441 20.124 16.5678 19.564L15.5434 18.5Z',
  d6: 'M12 3C15.0376 3 17.5 5.46243 17.5 8.5C17.5 8.66856 17.4924 8.83536 17.4776 9.00005L17.5 9C19.9853 9 22 11.0147 22 13.5C22 15.9853 19.9853 18 17.5 18H7C4.23858 18 2 15.7614 2 13C2 10.4003 3.98398 8.26407 6.52042 8.0227C6.76233 5.20862 9.12324 3 12 3ZM12.0434 13L10.907 14.036C10.3596 14.596 10.3596 15.492 10.9359 16.052C11.224 16.332 11.6401 16.5 12.0434 16.5C12.4468 16.5 12.7797 16.36 13.0678 16.108C13.6441 15.548 13.6441 14.624 13.0678 14.064L12.0434 13Z',
  d7: 'M11.6632 12.5707C11.9634 12.2971 12.427 12.3122 12.7087 12.6048L13.7254 13.6608C14.5948 14.5162 14.5915 15.9195 13.7155 16.7708C13.7061 16.78 13.6965 16.7889 13.6866 16.7975C13.2734 17.1589 12.7683 17.375 12.1684 17.375C11.5714 17.375 10.9673 17.1319 10.5381 16.7148C9.66131 15.8627 9.66102 14.4906 10.4957 13.6367L11.6632 12.5707Z',
  d8: 'M8.16317 18.0707C8.4634 17.7971 8.92696 17.8122 9.20873 18.1048L10.2254 19.1608C11.0948 20.0162 11.0915 21.4195 10.2155 22.2708C10.2061 22.28 10.1965 22.2889 10.1866 22.2975C9.77345 22.6589 9.26833 22.875 8.66844 22.875C8.07136 22.875 7.46729 22.6319 7.03814 22.2148C6.16131 21.3627 6.16102 19.9906 6.99568 19.1367L8.16317 18.0707Z',
  d9: 'M15.1632 18.0707C15.4634 17.7971 15.927 17.8122 16.2087 18.1048L17.2254 19.1608C18.0948 20.0162 18.0915 21.4195 17.2155 22.2708C17.2061 22.28 17.1965 22.2889 17.1866 22.2975C16.7734 22.6589 16.2683 22.875 15.6684 22.875C15.0714 22.875 14.4673 22.6319 14.0381 22.2148C13.1613 21.3627 13.161 19.9906 13.9957 19.1367L15.1632 18.0707Z',
  d10: 'M5.58325 7.58419C3.15606 8.2582 1.375 10.4833 1.375 13.125C1.375 15.5749 2.90712 17.6669 5.06546 18.4952C5.24688 18.5648 5.33759 18.5996 5.4307 18.5754C5.52382 18.5512 5.59725 18.4633 5.74411 18.2875C5.8036 18.2162 5.86426 18.1483 5.92302 18.0882L7.15262 16.9622C7.34643 16.7856 7.56292 16.649 7.79179 16.5522C8.17322 16.3909 8.36394 16.3103 8.41426 16.2238C8.46457 16.1374 8.44299 15.9528 8.39984 15.5837C8.27513 14.5167 8.62055 13.4091 9.42302 12.5882L10.6517 11.463L10.6526 11.4622C11.5533 10.6412 12.944 10.6865 13.7893 11.5645L14.7936 12.6076C15.6061 13.4168 15.9607 14.5114 15.8575 15.5697C15.8211 15.9431 15.8029 16.1299 15.8555 16.2156C15.908 16.3014 16.1027 16.3778 16.4922 16.5307C16.7847 16.6455 17.0575 16.8237 17.2893 17.0645L18.2936 18.1076C18.3804 18.1941 18.4687 18.2976 18.5527 18.4056C18.6858 18.5769 18.7524 18.6626 18.842 18.6906C18.9317 18.7187 19.0198 18.6911 19.1961 18.6359C21.3281 17.9681 22.875 15.9772 22.875 13.625C22.875 11.1535 21.1672 9.08089 18.8673 8.52286C18.6239 8.4638 18.5022 8.43427 18.4397 8.36328C18.3772 8.2923 18.3635 8.16962 18.3362 7.92426C17.9878 4.80234 15.3399 2.375 12.125 2.375C9.20171 2.375 6.74772 4.38153 6.06431 7.09283C6.01491 7.28884 5.9902 7.38684 5.93372 7.4447C5.87724 7.50255 5.77924 7.52976 5.58325 7.58419Z',
  d11: 'M3.125 5.98179C3.125 4.40086 4.40141 3.125 5.96888 3.125C6.74917 3.125 7.45702 3.44017 7.97224 3.95404C8.47713 3.5048 9.05535 3.1362 9.68671 2.86845C8.79982 1.80488 7.46405 1.125 5.96888 1.125C3.29052 1.125 1.125 3.30262 1.125 5.98179C1.125 7.37511 1.71096 8.63195 2.64756 9.51703C3.07158 8.99154 3.58625 8.54223 4.16783 8.19283C3.53021 7.66805 3.125 6.8729 3.125 5.98179Z',
  d12: 'M13.6023 13.5358C14.4718 14.3913 14.4685 15.7946 13.5925 16.6459L13.5784 16.6596L13.5636 16.6726C13.1504 17.0339 12.6453 17.25 12.0454 17.25C11.4483 17.25 10.8442 17.007 10.4151 16.5899C9.53827 15.7377 9.53797 14.3656 10.3726 13.5118L10.3877 13.4963L12.0795 11.9541L13.6023 13.5358Z',
  d13: 'M10.1023 19.0358C10.9718 19.8913 10.9685 21.2946 10.0925 22.1459L10.0784 22.1596L10.0636 22.1726C9.6504 22.5339 9.14528 22.75 8.54539 22.75C7.94831 22.75 7.34424 22.507 6.91509 22.0899C6.03827 21.2377 6.03797 19.8656 6.87263 19.0118L6.88773 18.9963L8.57949 17.4541L10.1023 19.0358Z',
  d14: 'M17.1023 19.0358C17.9718 19.8913 17.9685 21.2946 17.0925 22.1459L17.0784 22.1596L17.0636 22.1726C16.6504 22.5339 16.1453 22.75 15.5454 22.75C14.9483 22.75 14.3442 22.507 13.9151 22.0899C13.0383 21.2377 13.038 19.8656 13.8726 19.0118L13.8877 18.9963L15.5795 17.4541L17.1023 19.0358Z',
  d15: 'M1.25 5.85826C1.25 7.17454 1.80115 8.36245 2.68308 9.20164C1.79103 10.2146 1.25 11.544 1.25 13C1.25 15.6042 2.98128 17.8041 5.35567 18.5114C5.48316 18.3183 5.63064 18.1346 5.79801 17.9633L5.8433 17.917L8.30612 15.6719C8.10604 14.5411 8.44197 13.3391 9.29801 12.4633L9.3433 12.417L12.1457 9.8623L14.6686 12.4828C15.4828 13.2937 15.8373 14.3913 15.7319 15.4518L18.1686 17.9828C18.3656 18.179 18.5357 18.3919 18.6789 18.6171C21.0107 18.0821 22.75 15.9942 22.75 13.5C22.75 10.8541 20.7927 8.66534 18.2469 8.30273C18.1428 4.94224 15.3858 2.25 12 2.25C11.0435 2.25 10.1372 2.46484 9.32672 2.8489C8.48541 1.87157 7.23857 1.25 5.84601 1.25C3.30471 1.25 1.25 3.31619 1.25 5.85826ZM5.84601 3.14766C4.35875 3.14766 3.14766 4.35823 3.14766 5.85826C3.14766 6.72264 3.54949 7.49188 4.17797 7.98912C4.69233 7.69886 5.25587 7.48547 5.853 7.36454C6.1002 6.01824 6.77854 4.82293 7.7396 3.92707C7.25136 3.44376 6.58272 3.14766 5.84601 3.14766Z',
} as const;

export const IconSunCloudMidRain01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-01-stroke-rounded IconSunCloudMidRain01StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudMidRain01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-01-duotone-rounded IconSunCloudMidRain01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudMidRain01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-01-twotone-rounded IconSunCloudMidRain01TwotoneRounded"
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
      <g 
        opacity="var(--icon-opacity)">
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconSunCloudMidRain01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-01-solid-rounded IconSunCloudMidRain01SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSunCloudMidRain01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-01-bulk-rounded IconSunCloudMidRain01BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSunCloudMidRain01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-01-stroke-sharp IconSunCloudMidRain01StrokeSharp"
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

export const IconSunCloudMidRain01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-01-solid-sharp IconSunCloudMidRain01SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfSunCloudMidRain01: TheIconSelfPack = {
  name: 'SunCloudMidRain01',
  StrokeRounded: IconSunCloudMidRain01StrokeRounded,
  DuotoneRounded: IconSunCloudMidRain01DuotoneRounded,
  TwotoneRounded: IconSunCloudMidRain01TwotoneRounded,
  SolidRounded: IconSunCloudMidRain01SolidRounded,
  BulkRounded: IconSunCloudMidRain01BulkRounded,
  StrokeSharp: IconSunCloudMidRain01StrokeSharp,
  SolidSharp: IconSunCloudMidRain01SolidSharp,
};