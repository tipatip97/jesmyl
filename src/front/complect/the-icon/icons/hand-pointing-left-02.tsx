import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 7.41601L10.5 7.41601M10.5 7.41601L4.25 7.41601C3.2835 7.41601 2.5 8.19951 2.5 9.16601C2.5 10.1325 3.2835 10.916 4.25 10.916L9.5 10.916L9.97758 13.993C10.2669 15.9216 10.4115 16.886 10.8184 17.5652C11.4906 18.6872 12.5 19.5 13.9736 19.5C15 19.5 15.6886 19.2463 17.5387 18.6296C18.7127 18.2383 19.2996 18.0426 19.7643 17.7236C20.5293 17.1983 21.0878 16.4233 21.3442 15.5315C21.5 14.9898 21.5 14.3711 21.5 13.1336L21.5 11.7287C21.5 9.94422 21.5 9.05198 21.1651 8.28584C21.0137 7.9397 20.8141 7.61674 20.5722 7.32659C20.0367 6.68438 19.2387 6.28535 17.6426 5.48731C16.3483 4.84015 15.7011 4.51657 15.0302 4.50082C14.7276 4.49372 14.4256 4.53246 14.1346 4.61571C13.4894 4.80031 12.9448 5.27678 11.8558 6.2297L10.5 7.41601Z',
  d2: 'M4.25 7.41601L10.5 7.41601L11.8558 6.2297C12.9448 5.27678 13.4894 4.80031 14.1346 4.61571C14.4256 4.53246 14.7276 4.49373 15.0302 4.50083C15.7011 4.51657 16.3483 4.84015 17.6426 5.48731C19.2387 6.28536 20.0367 6.68438 20.5722 7.32659C20.8141 7.61674 21.0137 7.9397 21.1651 8.28584C21.5 9.05198 21.5 9.94422 21.5 11.7287L21.5 13.1336C21.5 14.3711 21.5 14.9898 21.3442 15.5315C21.0878 16.4233 20.5293 17.1983 19.7643 17.7236C19.2996 18.0426 18.7127 18.2383 17.5387 18.6296C15.6886 19.2463 15 19.5 13.9736 19.5C12.5 19.5 11.4906 18.6872 10.8184 17.5652C10.4115 16.886 10.2669 15.9216 9.97757 13.993L9.5 10.916L4.25 10.916C3.2835 10.916 2.5 10.1325 2.5 9.16601C2.5 8.19951 3.2835 7.41601 4.25 7.41601Z',
  d3: 'M21.5 10.916V13.1336C21.5 14.3711 21.5 14.9898 21.3442 15.5315C21.0878 16.4233 20.5293 17.1983 19.7643 17.7236C19.2996 18.0426 18.7127 18.2383 17.5387 18.6296C15.6886 19.2463 15 19.5 13.9736 19.5C12.5 19.5 11.4906 18.6872 10.8184 17.5652C10.4115 16.886 10.2669 15.9216 9.97758 13.993L9.5 10.916L4.25 10.916C3.2835 10.916 2.5 10.1325 2.5 9.16601C2.5 9.11002 2.50263 9.05464 2.50777 9',
  d4: 'M10.2182 6.66601L4.25 6.66601C2.86929 6.66601 1.75 7.78529 1.75 9.16601C1.75 10.5467 2.86929 11.666 4.25 11.666H8.85743L9.23587 14.1043L9.23645 14.108L9.23983 14.1306C9.38112 15.0726 9.4926 15.8158 9.62099 16.4068C9.75147 17.0075 9.91078 17.5095 10.1751 17.9506C10.9404 19.2281 12.1633 20.25 13.9736 20.25C15.0606 20.25 15.8446 19.9875 17.3824 19.4727C18.4447 19.1188 19.6359 18.7216 20.1888 18.3418C21.0973 17.718 21.7605 16.7978 22.065 15.7388C22.2504 15.0941 22.2503 12.6741 22.25 11.5544C22.2505 9.93866 22.2508 8.89712 21.8523 7.9854C21.6726 7.57436 21.4355 7.19085 21.1482 6.8463C20.511 6.08206 19.5793 5.61655 18.1339 4.8944C17.5101 4.5825 16.8183 4.23662 16.3823 4.06139C15.9287 3.87909 15.506 3.76179 15.0478 3.75103C14.6695 3.74216 14.2921 3.79057 13.9283 3.89464C13.4876 4.02073 13.1082 4.24093 12.7153 4.53182C12.3377 4.81144 11.9099 5.18574 11.3851 5.645L10.2182 6.66601Z',
  d5: 'M15.0302 7.41601L10.5 7.41601M10.5 7.41601L4.25 7.41601C3.2835 7.41601 2.5 8.19951 2.5 9.16601C2.5 10.1325 3.2835 10.916 4.25 10.916H9.5V16.5C9.5 18.1569 10.8431 19.5 12.5 19.5H18.5C20.1569 19.5 21.5 18.1569 21.5 16.5V8L17.6426 5.48731C16.3152 4.61571 15.7011 4.51657 15.0302 4.50083C14.7276 4.49373 14.4256 4.53246 14.1346 4.61571C13.4894 4.80031 12.9448 5.27679 11.8558 6.2297L10.5 7.41601Z',
  d6: 'M13.9283 3.89464C14.2921 3.79057 14.6695 3.74216 15.0478 3.75103C15.4259 3.75991 15.8291 3.79394 16.3294 3.96228C16.8153 4.12579 17.36 4.40463 18.0531 4.85959L18.0543 4.86038L22.25 7.59346V16.5C22.25 18.5711 20.5711 20.25 18.5 20.25H12.5C10.4289 20.25 8.75 18.5711 8.75 16.5V11.666H4.25C2.86929 11.666 1.75 10.5467 1.75 9.16601C1.75 7.78529 2.86929 6.66601 4.25 6.66601L10.2182 6.66601L11.3851 5.64498C11.9099 5.18573 12.3377 4.81144 12.7153 4.53183C13.1082 4.24093 13.4876 4.02073 13.9283 3.89464Z',
};

export const IconHandPointingLeft02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-02-stroke-rounded IconHandPointingLeft02StrokeRounded"
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

export const IconHandPointingLeft02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-02-duotone-rounded IconHandPointingLeft02DuotoneRounded"
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

export const IconHandPointingLeft02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-02-twotone-rounded IconHandPointingLeft02TwotoneRounded"
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

export const IconHandPointingLeft02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-02-solid-rounded IconHandPointingLeft02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-02-bulk-rounded IconHandPointingLeft02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-02-stroke-sharp IconHandPointingLeft02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-02-solid-sharp IconHandPointingLeft02SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandPointingLeft02: TheIconSelfPack = {
  name: 'HandPointingLeft02',
  StrokeRounded: IconHandPointingLeft02StrokeRounded,
  DuotoneRounded: IconHandPointingLeft02DuotoneRounded,
  TwotoneRounded: IconHandPointingLeft02TwotoneRounded,
  SolidRounded: IconHandPointingLeft02SolidRounded,
  BulkRounded: IconHandPointingLeft02BulkRounded,
  StrokeSharp: IconHandPointingLeft02StrokeSharp,
  SolidSharp: IconHandPointingLeft02SolidSharp,
};