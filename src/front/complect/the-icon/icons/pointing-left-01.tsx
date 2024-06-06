import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.01709 4.49918H8.00914M2.01709 4.49918C2.01709 3.79932 4.00875 2.49176 4.51378 2.00049M2.01709 4.49918C2.01709 5.19904 4.00875 6.5066 4.51378 6.99787',
  d2: 'M21.9999 10.8266L21.0513 10.8266C20.4058 10.8266 19.7774 10.6178 19.2594 10.2311L14.3566 6.57098C13.7911 6.14885 13.0895 5.8117 12.4419 6.09039C11.3935 6.54155 10.7124 7.81436 12.2842 9.37227L13.9936 10.9706L3.57057 10.9706C1.52742 11.0268 1.42614 14.3171 3.57057 14.4578L9.51058 14.4578C9.31944 15.9388 10.3629 22.9156 14.7831 21.8986C14.9931 21.8503 15.2062 21.8021 15.4165 21.755C16.3353 21.5492 17.9727 20.941 18.93 20.2702C19.9265 19.5719 20.9191 19.8183 21.9999 19.8183',
  d3: 'M17.6912 20.9884C16.2145 21.6951 13.3246 22.6622 11.9638 21.3108C9.81862 19.1804 9.42599 16.2007 9.50195 14.4934H3.75195C2.78545 14.4934 2.00195 13.7103 2.00195 12.7444C2.00195 11.7784 2.78545 10.9953 3.75195 10.9953H14.002L11.6733 8.77994C11.0331 8.0563 11.1392 6.96271 11.9073 6.36733C12.5464 5.87197 13.4554 5.8753 14.0906 6.37534L18.4256 9.65469C19.1808 10.226 19.5585 10.5117 19.9993 10.6687C20.0384 10.6826 20.0778 10.6958 20.1175 10.7081C20.5648 10.8472 21.0438 10.8472 22.002 10.8472V19.8824H20.384C19.4584 19.8824 18.49 20.606 17.6912 20.9884Z',
  d4: 'M2.00195 4.49864H8.00195M2.00195 4.49864C2.00195 3.79879 3.99625 2.49126 4.50195 2M2.00195 4.49864C2.00195 5.19849 3.99625 6.50601 4.50195 6.99728',
  d5: 'M21.9979 10.8335H21.0493C20.4038 10.8335 19.7754 10.6248 19.2574 10.2383L14.3546 6.58019C13.7891 6.15829 13.0875 5.82132 12.4399 6.09986C11.3915 6.55077 10.7104 7.82289 12.2822 9.37995L13.9916 10.9774H3.56862C1.52547 11.0336 1.42419 14.3221 3.56862 14.4627H9.50863C9.31749 15.9429 10.3609 22.9159 14.7811 21.8995C14.9911 21.8512 15.2042 21.803 15.4145 21.7559C16.3333 21.5502 17.9707 20.9424 18.928 20.2719C19.9245 19.574 20.9171 19.8203 21.9979 19.8203',
  d6: 'M2.00391 4.50024H8.00391M2.00391 4.50024C2.00391 3.80001 3.99821 2.49177 4.50391 2.00024M2.00391 4.50024C2.00391 5.20047 3.99821 6.50871 4.50391 7.00024',
  d7: 'M21.9999 10.8268H21.0513C20.4058 10.8268 19.7774 10.618 19.2594 10.2313L14.3566 6.57123C13.7911 6.1491 13.0895 5.81195 12.4419 6.09064C11.3935 6.5418 10.7124 7.81461 12.2842 9.37252L13.9936 10.9708H3.57057C1.52742 11.027 1.42614 14.3173 3.57057 14.458H9.51058C9.31944 15.939 10.3629 22.9158 14.7831 21.8988C14.9931 21.8505 15.2062 21.8023 15.4165 21.7552C16.3353 21.5494 17.9727 20.9412 18.93 20.2704C19.9265 19.5721 20.9191 19.8185 21.9999 19.8185',
  d8: 'M3.75 10.2502C2.36929 10.2502 1.25 11.3695 1.25 12.7502C1.25 14.131 2.36929 15.2502 3.75 15.2502H8.74751C8.81064 17.1141 9.38616 19.8193 11.4332 21.8533C12.3751 22.7893 13.7529 22.8447 14.8931 22.674C16.0699 22.4978 17.2359 22.0473 18.0131 21.6751C18.2264 21.5559 19.1202 21.0744 19.3235 20.9728C19.7563 20.7564 20.1001 20.6421 20.382 20.6421C20.6473 20.6421 20.918 20.6422 21.1214 20.625C21.3409 20.6066 21.5809 20.5643 21.8165 20.44C22.1284 20.2754 22.3833 20.0205 22.5479 19.7086C22.6721 19.473 22.7145 19.2331 22.7329 19.0135C22.75 18.8101 22.75 18.5664 22.75 18.3011V12.7166C22.75 12.4089 22.7501 12.1254 22.7266 11.8896C22.7012 11.633 22.6003 11.1699 22.3382 10.9077C22.1107 10.6377 21.7789 10.4886 21.5062 10.3826C21.2149 10.2695 20.8293 10.1495 20.3655 10.0052C20.0584 9.89574 19.6676 9.65984 18.8763 9.06086L14.5465 5.78372C13.641 5.07504 12.3548 5.07203 11.4457 5.77706C10.3388 6.63549 10.1793 8.22852 11.1094 9.28045L12.1242 10.2502L3.75 10.2502Z',
  d9: 'M8.25391 5.5061C8.80619 5.5061 9.25391 5.05839 9.25391 4.5061C9.25391 3.95382 8.80619 3.5061 8.25391 3.5061L5.75387 3.5061L5.75389 2.91184C5.75401 2.73621 5.75417 2.52056 5.7321 2.34412L5.73168 2.34077C5.71591 2.21432 5.64407 1.63828 5.07848 1.36392C4.51165 1.08896 4.01151 1.3909 3.90331 1.45622L3.43482 1.79536C3.059 2.08999 2.54454 2.49569 2.15353 2.87612C1.95842 3.06595 1.75718 3.28322 1.59834 3.51412C1.45713 3.71938 1.25387 4.06958 1.25387 4.50024C1.25387 4.93091 1.45713 5.2811 1.59834 5.48636C1.75718 5.71727 1.95842 5.93454 2.15353 6.12437C2.54454 6.5048 3.05899 6.91049 3.43482 7.20512L3.90331 7.54427C4.01152 7.60959 4.51166 7.91153 5.07848 7.63657C5.64408 7.36221 5.71591 6.78616 5.73168 6.65972L5.7321 6.65637C5.75417 6.47993 5.75401 6.26428 5.75389 6.08864L5.75387 5.5061L8.25391 5.5061Z',
  d10: 'M8.08648 4.04274H2.78145M4.6081 1.55273L2.12354 4.04274L4.6081 6.53274',
  d11: 'M21.9752 10.3682L19.946 10.3682L14.1319 5.93224C14.0137 5.84203 13.8833 5.7687 13.7497 5.70334V5.70334C13.6051 5.63255 13.4549 5.57217 13.2968 5.54139C13.2258 5.52758 13.1847 5.52755 13.0121 5.52725C12.7529 5.52681 12.5364 5.55059 12.2656 5.67172C12.131 5.73193 11.9658 5.86369 11.8712 5.93627C11.4943 6.22568 11.2877 6.72368 11.2722 7.23546C11.2568 7.74417 11.5028 8.10227 11.8721 8.44996C12.5984 9.13385 13.2266 9.69984 14.0551 10.5144L4.17536 10.5142C3.64975 10.5125 3.02722 10.6126 2.68143 10.9774C1.92914 11.8352 1.92351 12.6098 2.67378 13.5163C3.01995 13.8977 3.56309 13.9843 4.10229 13.9861L9.59792 13.9862C9.43242 16.5633 10.4346 19.2136 11.7124 20.4993C12.5781 21.4808 13.4718 21.5829 14.9158 21.3655C16.5834 21.0686 17.5915 20.5186 19.9329 19.371L21.9229 19.371',
  d12: 'M19.4695 20.4787C18.9907 20.7075 18.4122 20.984 18.0131 21.1751C17.2359 21.5473 16.0699 21.9978 14.8931 22.174C13.7529 22.3447 12.3751 22.2893 11.4332 21.3533C9.38616 19.3193 8.81064 16.6141 8.74751 14.7502H3.75C2.36929 14.7502 1.25 13.631 1.25 12.2502C1.25 10.8695 2.36929 9.75024 3.75 9.75024L12.1242 9.75024L11.1308 8.80464L11.1094 8.78045C10.1793 7.72852 10.3388 6.13549 11.4457 5.27706C12.3547 4.57207 13.6409 4.57504 14.5464 5.28361L20.2556 9.60205H22.75V20.1421H20.1738L19.4695 20.4787Z',
  d13: 'M4.45711 1.75024L1.25 4.95735L4.45711 8.16446L5.87132 6.75024L5.07843 5.95735L8.66421 5.95735V3.95735L5.07843 3.95735L5.87132 3.16446L4.45711 1.75024Z',
};

export const IconPointingLeft01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-01-stroke-rounded IconPointingLeft01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPointingLeft01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-01-duotone-rounded IconPointingLeft01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-01-twotone-rounded IconPointingLeft01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-01-solid-rounded IconPointingLeft01SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-01-bulk-rounded IconPointingLeft01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-01-stroke-sharp IconPointingLeft01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-01-solid-sharp IconPointingLeft01SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPointingLeft01: TheIconSelfPack = {
  name: 'PointingLeft01',
  StrokeRounded: IconPointingLeft01StrokeRounded,
  DuotoneRounded: IconPointingLeft01DuotoneRounded,
  TwotoneRounded: IconPointingLeft01TwotoneRounded,
  SolidRounded: IconPointingLeft01SolidRounded,
  BulkRounded: IconPointingLeft01BulkRounded,
  StrokeSharp: IconPointingLeft01StrokeSharp,
  SolidSharp: IconPointingLeft01SolidSharp,
};