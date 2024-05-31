import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.0011 13.5V15M9 16.5V18M15 16.5V18M6.5 19.5V21M17.5 19.5V21M12 19.5V21',
  d2: 'M17.4776 8.89801L17.5 8.89795C19.9853 8.89795 22 10.8784 22 13.3214C22 14.8551 21.206 16.2065 20 17M17.4776 8.89801C17.4924 8.73611 17.5 8.57216 17.5 8.40646C17.5 5.42055 15.0376 3 12 3C9.12324 3 6.76233 5.17106 6.52042 7.93728M17.4776 8.89801C17.3753 10.0132 16.9286 11.0307 16.2428 11.8469M6.52042 7.93728C3.98398 8.17454 2 10.2745 2 12.8299C2 14.4378 2.78565 15.8652 4 16.7619M6.52042 7.93728C6.67826 7.92251 6.83823 7.91496 7 7.91496C8.12582 7.91496 9.16474 8.28072 10.0005 8.89795',
  d3: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d4: 'M12.0011 12.25C12.5534 12.25 13.0011 12.6977 13.0011 13.25V14.75C13.0011 15.3023 12.5534 15.75 12.0011 15.75C11.4488 15.75 11.0011 15.3023 11.0011 14.75V13.25C11.0011 12.6977 11.4488 12.25 12.0011 12.25ZM9 15.25C9.55228 15.25 10 15.6977 10 16.25V17.75C10 18.3023 9.55228 18.75 9 18.75C8.44772 18.75 8 18.3023 8 17.75V16.25C8 15.6977 8.44772 15.25 9 15.25ZM15 15.25C15.5523 15.25 16 15.6977 16 16.25V17.75C16 18.3023 15.5523 18.75 15 18.75C14.4477 18.75 14 18.3023 14 17.75V16.25C14 15.6977 14.4477 15.25 15 15.25ZM6.5 18.25C7.05228 18.25 7.5 18.6977 7.5 19.25V20.75C7.5 21.3023 7.05228 21.75 6.5 21.75C5.94772 21.75 5.5 21.3023 5.5 20.75V19.25C5.5 18.6977 5.94772 18.25 6.5 18.25ZM12 18.25C12.5523 18.25 13 18.6977 13 19.25V20.75C13 21.3023 12.5523 21.75 12 21.75C11.4477 21.75 11 21.3023 11 20.75V19.25C11 18.6977 11.4477 18.25 12 18.25ZM17.5 18.25C18.0523 18.25 18.5 18.6977 18.5 19.25V20.75C18.5 21.3023 18.0523 21.75 17.5 21.75C16.9477 21.75 16.5 21.3023 16.5 20.75V19.25C16.5 18.6977 16.9477 18.25 17.5 18.25Z',
  d5: 'M5.93931 6.96783C5.88991 7.16384 5.8652 7.26184 5.80872 7.3197C5.75224 7.37755 5.65424 7.40476 5.45825 7.45919C3.03106 8.1332 1.25 10.3583 1.25 13C1.25 14.9823 2.25312 16.7303 3.77944 17.7642C3.98555 17.9037 4.0886 17.9735 4.20034 17.9598C4.31209 17.946 4.4202 17.8252 4.63643 17.5835C4.98905 17.1895 5.4648 16.9079 6.0032 16.7994C6.21955 16.7558 6.32773 16.734 6.38304 16.6914C6.42477 16.6592 6.44593 16.6334 6.46918 16.5861C6.5 16.5235 6.5 16.4323 6.5 16.25C6.5 14.8693 7.61929 13.75 9 13.75C9.16362 13.75 9.24543 13.75 9.28789 13.7372C9.39688 13.7042 9.45529 13.6458 9.48824 13.5368C9.50107 13.4944 9.50107 13.4282 9.50107 13.2958V13.25C9.50107 11.8693 10.6204 10.75 12.0011 10.75C13.3818 10.75 14.5011 11.8693 14.5011 13.25V13.2976C14.5011 13.4284 14.5011 13.4938 14.5136 13.5358C14.5464 13.6457 14.6054 13.7047 14.7153 13.7375C14.7573 13.75 14.8382 13.75 15 13.75C16.3807 13.75 17.5 14.8693 17.5 16.25C17.5 16.4323 17.5 16.5235 17.5308 16.5861C17.5541 16.6334 17.5752 16.6592 17.617 16.6914C17.6723 16.734 17.7805 16.7558 17.9968 16.7994C18.5878 16.9185 19.1032 17.2461 19.4632 17.7021C19.6698 17.9636 19.773 18.0944 19.887 18.1136C20.0009 18.1329 20.1079 18.0646 20.3218 17.9279C21.7819 16.9955 22.75 15.3608 22.75 13.5C22.75 11.0285 21.0422 8.95589 18.7423 8.39786C18.4989 8.3388 18.3772 8.30927 18.3147 8.23828C18.2522 8.1673 18.2385 8.04461 18.2112 7.79924C17.8628 4.67731 15.2149 2.25 12 2.25C9.07671 2.25 6.62272 4.25653 5.93931 6.96783Z',
  d6: 'M5.93931 6.96783C5.88991 7.16384 5.8652 7.26184 5.80872 7.3197C5.75224 7.37755 5.65424 7.40476 5.45825 7.45919C3.03106 8.1332 1.25 10.3583 1.25 13C1.25 14.9823 2.25312 16.7303 3.77944 17.7642C3.98555 17.9037 4.0886 17.9735 4.20034 17.9598C4.31209 17.946 4.4202 17.8252 4.63643 17.5835C4.98905 17.1895 5.4648 16.9079 6.0032 16.7994C6.21955 16.7558 6.32773 16.734 6.38304 16.6914C6.42476 16.6592 6.44593 16.6334 6.46918 16.5861C6.5 16.5235 6.5 16.4323 6.5 16.25C6.5 14.8693 7.61929 13.75 9 13.75C9.16362 13.75 9.24543 13.75 9.28789 13.7372C9.39688 13.7042 9.45529 13.6458 9.48824 13.5368C9.50107 13.4944 9.50107 13.4282 9.50107 13.2958V13.25C9.50107 11.8693 10.6204 10.75 12.0011 10.75C13.3818 10.75 14.5011 11.8693 14.5011 13.25V13.2976C14.5011 13.4284 14.5011 13.4938 14.5136 13.5358C14.5464 13.6457 14.6054 13.7047 14.7153 13.7375C14.7573 13.75 14.8382 13.75 15 13.75C16.3807 13.75 17.5 14.8693 17.5 16.25C17.5 16.4323 17.5 16.5235 17.5308 16.5861C17.5541 16.6334 17.5752 16.6592 17.617 16.6914C17.6723 16.734 17.7805 16.7558 17.9968 16.7994C18.5878 16.9185 19.1032 17.2461 19.4632 17.7021C19.6698 17.9636 19.773 18.0944 19.887 18.1136C20.0009 18.1329 20.1079 18.0646 20.3218 17.9279C21.7819 16.9955 22.75 15.3608 22.75 13.5C22.75 11.0285 21.0422 8.95589 18.7423 8.39786C18.4989 8.3388 18.3772 8.30927 18.3147 8.23828C18.2522 8.1673 18.2385 8.04461 18.2112 7.79924C17.8628 4.67731 15.2149 2.25 12 2.25C9.07671 2.25 6.62272 4.25653 5.93931 6.96783Z',
  d7: 'M11.0011 15.75V13.25H13.0011V15.75H11.0011ZM8 18.75V16.25H10V18.75H8ZM14 18.75V16.25H16V18.75H14ZM5.5 21.75V19.25H7.5V21.75H5.5ZM11 21.75V19.25H13V21.75H11ZM16.5 21.75V19.25H18.5V21.75H16.5Z',
  d8: 'M5.853 7.36454C3.22664 7.89643 1.25 10.217 1.25 13C1.25 14.9733 2.24404 16.7145 3.75869 17.75H6.5V14.75H9.50107V11.75H14.5011V14.75H17.5V17.75H20.5828C21.8961 16.7958 22.75 15.2476 22.75 13.5C22.75 10.8541 20.7927 8.66534 18.2469 8.30273C18.1428 4.94224 15.3858 2.25 12 2.25C8.93585 2.25 6.38731 4.45456 5.853 7.36454Z',
} as const;

export const IconCloudLittleRainStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-little-rain-stroke-rounded IconCloudLittleRainStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudLittleRainDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-little-rain-duotone-rounded IconCloudLittleRainDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudLittleRainTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-little-rain-twotone-rounded IconCloudLittleRainTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudLittleRainSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-little-rain-solid-rounded IconCloudLittleRainSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudLittleRainBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-little-rain-bulk-rounded IconCloudLittleRainBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudLittleRainStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-little-rain-stroke-sharp IconCloudLittleRainStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconCloudLittleRainSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-little-rain-solid-sharp IconCloudLittleRainSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCloudLittleRain: TheIconSelfPack = {
  name: 'CloudLittleRain',
  StrokeRounded: IconCloudLittleRainStrokeRounded,
  DuotoneRounded: IconCloudLittleRainDuotoneRounded,
  TwotoneRounded: IconCloudLittleRainTwotoneRounded,
  SolidRounded: IconCloudLittleRainSolidRounded,
  BulkRounded: IconCloudLittleRainBulkRounded,
  StrokeSharp: IconCloudLittleRainStrokeSharp,
  SolidSharp: IconCloudLittleRainSolidSharp,
};