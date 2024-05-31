import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.41601 14V10.5M7.41601 10.5V4.25C7.41601 3.2835 8.19951 2.5 9.16601 2.5C10.1325 2.5 10.916 3.2835 10.916 4.25V9.5L13.993 9.97757C15.9216 10.2669 16.886 10.4115 17.5652 10.8184C18.6872 11.4906 19.5 12.5 19.5 13.9736C19.5 15 19.2463 15.6886 18.6296 17.5387C18.2383 18.7127 18.0426 19.2996 17.7236 19.7643C17.1983 20.5293 16.4233 21.0878 15.5315 21.3442C14.9898 21.5 14.3711 21.5 13.1336 21.5H11.7287C9.94422 21.5 9.05198 21.5 8.28584 21.1651C7.9397 21.0137 7.61674 20.8141 7.32659 20.5722C6.68438 20.0367 6.28536 19.2387 5.48731 17.6426C4.84015 16.3483 4.51657 15.7011 4.50083 15.0302C4.49373 14.7276 4.53246 14.4256 4.61571 14.1346C4.80031 13.4894 5.27678 12.9448 6.2297 11.8558L7.41601 10.5Z',
  d2: 'M7.41601 4.25V10.5L6.2297 11.8558C5.27678 12.9448 4.80031 13.4894 4.61571 14.1346C4.53246 14.4256 4.49373 14.7276 4.50083 15.0302C4.51657 15.7011 4.84015 16.3483 5.48731 17.6426C6.28536 19.2387 6.68438 20.0367 7.32659 20.5722C7.61674 20.8141 7.9397 21.0137 8.28584 21.1651C9.05198 21.5 9.94422 21.5 11.7287 21.5H13.1336C14.3711 21.5 14.9898 21.5 15.5315 21.3442C16.4233 21.0878 17.1983 20.5293 17.7236 19.7643C18.0426 19.2996 18.2383 18.7127 18.6296 17.5387C19.2463 15.6886 19.5 15 19.5 13.9736C19.5 12.5 18.6872 11.4906 17.5652 10.8184C16.886 10.4115 15.9216 10.2669 13.993 9.97757L10.916 9.5V4.25C10.916 3.2835 10.1325 2.5 9.16601 2.5C8.19951 2.5 7.41601 3.2835 7.41601 4.25Z',
  d3: 'M10.916 21.5H13.1336C14.3711 21.5 14.9898 21.5 15.5315 21.3442C16.4233 21.0878 17.1983 20.5293 17.7236 19.7643C18.0426 19.2996 18.2383 18.7127 18.6296 17.5387C19.2463 15.6886 19.5 15 19.5 13.9736C19.5 12.5 18.6872 11.4906 17.5652 10.8184C16.886 10.4115 15.9216 10.2669 13.993 9.97757L10.916 9.5V4.25C10.916 3.2835 10.1325 2.5 9.16601 2.5C9.11002 2.5 9.05464 2.50263 9 2.50777',
  d4: 'M6.66601 10.2182V4.25C6.66601 2.86929 7.78529 1.75 9.16601 1.75C10.5467 1.75 11.666 2.86929 11.666 4.25V8.85743L14.1043 9.23587L14.108 9.23645L14.1306 9.23982C15.0726 9.38112 15.8158 9.4926 16.4068 9.62099C17.0075 9.75147 17.5095 9.91078 17.9506 10.1751C19.2281 10.9404 20.25 12.1633 20.25 13.9736C20.25 15.0606 19.9875 15.8446 19.4727 17.3824L19.4727 17.3824C19.1188 18.4447 18.7216 19.6359 18.3418 20.1888C17.718 21.0973 16.7978 21.7605 15.7388 22.065C15.0941 22.2504 12.6741 22.2503 11.5544 22.25C9.93867 22.2505 8.89712 22.2508 7.9854 21.8523C7.57436 21.6726 7.19085 21.4355 6.8463 21.1482C6.08206 20.511 5.61655 19.5793 4.8944 18.1339C4.5825 17.5101 4.23662 16.8183 4.06139 16.3823C3.87909 15.9287 3.76179 15.506 3.75103 15.0478C3.74216 14.6695 3.79057 14.2921 3.89464 13.9283C4.02073 13.4876 4.24093 13.1082 4.53182 12.7153C4.81144 12.3377 5.18574 11.9099 5.645 11.3851L6.66601 10.2182Z',
  d5: 'M7.41601 15.0302V10.5M7.41601 10.5V4.25C7.41601 3.2835 8.19951 2.5 9.16601 2.5C10.1325 2.5 10.916 3.2835 10.916 4.25V9.5H16.5C18.1569 9.5 19.5 10.8431 19.5 12.5V18.5C19.5 20.1569 18.1569 21.5 16.5 21.5H8L5.48731 17.6426C4.61571 16.3152 4.51657 15.7011 4.50083 15.0302C4.49373 14.7276 4.53246 14.4256 4.61571 14.1346C4.80031 13.4894 5.27678 12.9448 6.2297 11.8558L7.41601 10.5Z',
  d6: 'M6.66601 10.2182V4.25C6.66601 2.86929 7.78529 1.75 9.16601 1.75C10.5467 1.75 11.666 2.86929 11.666 4.25V8.75H16.5C18.5711 8.75 20.25 10.4289 20.25 12.5V18.5C20.25 20.5711 18.5711 22.25 16.5 22.25H7.59346L4.86038 18.0543L4.85959 18.0531C4.40464 17.36 4.12579 16.8153 3.96228 16.3294C3.79394 15.8291 3.75991 15.4259 3.75103 15.0478C3.74216 14.6695 3.79057 14.2921 3.89464 13.9283C4.02073 13.4876 4.24093 13.1082 4.53182 12.7153C4.81143 12.3377 5.18572 11.9099 5.64497 11.3851L5.64499 11.3851L5.66526 11.3619L6.66601 10.2182Z',
} as const;

export const IconTouch04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-04-stroke-rounded IconTouch04StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-04-duotone-rounded IconTouch04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-04-twotone-rounded IconTouch04TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-04-solid-rounded IconTouch04SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-04-bulk-rounded IconTouch04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-04-stroke-sharp IconTouch04StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-04-solid-sharp IconTouch04SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTouch04: TheIconSelfPack = {
  name: 'Touch04',
  StrokeRounded: IconTouch04StrokeRounded,
  DuotoneRounded: IconTouch04DuotoneRounded,
  TwotoneRounded: IconTouch04TwotoneRounded,
  SolidRounded: IconTouch04SolidRounded,
  BulkRounded: IconTouch04BulkRounded,
  StrokeSharp: IconTouch04StrokeSharp,
  SolidSharp: IconTouch04SolidSharp,
};