import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.1911 3.07767L18.895 4.49715C18.991 4.69475 19.2469 4.88428 19.4629 4.92057L20.7388 5.1343C21.5547 5.27141 21.7467 5.86824 21.1587 6.457L20.1668 7.45709C19.9989 7.62646 19.9069 7.9531 19.9589 8.18699L20.2428 9.425C20.4668 10.4049 19.9509 10.784 19.091 10.2718L17.8951 9.55808C17.6791 9.42903 17.3232 9.42903 17.1032 9.55808L15.9073 10.2718C15.0514 10.784 14.5315 10.4009 14.7554 9.425L15.0394 8.18699C15.0914 7.9531 14.9994 7.62646 14.8314 7.45709L13.8395 6.457C13.2556 5.86824 13.4436 5.27141 14.2595 5.1343L15.5353 4.92057C15.7473 4.88428 16.0033 4.69475 16.0993 4.49715L16.8032 3.07767C17.1872 2.30744 17.8111 2.30744 18.1911 3.07767Z',
  d2: 'M2.5 11.8049C2.5 17.1594 6.84065 21.5 12.1951 21.5C16.601 21.5 20.3204 18.5611 21.5 14.5367C20.0791 15.5691 18.3306 16.1779 16.44 16.1779C11.6804 16.1779 7.82208 12.3196 7.82208 7.56005C7.82208 5.66937 8.43094 3.9209 9.46326 2.5C5.4389 3.67959 2.5 7.39904 2.5 11.8049Z',
  d3: 'M17.4982 1.75C18.1701 1.75 18.6201 2.25346 18.8629 2.74519L19.5587 4.14843L19.5645 4.15396C19.5693 4.15832 19.5749 4.16298 19.5811 4.16761C19.5874 4.17225 19.5935 4.17634 19.5992 4.17976L19.6075 4.18442L20.8626 4.39467C21.4028 4.48545 21.9905 4.77498 22.1893 5.39848C22.3877 6.02099 22.0775 6.59742 21.6899 6.98603L21.6889 6.98696L20.7132 7.97079C20.7098 7.97785 20.7053 7.98878 20.7014 8.00268C20.697 8.01815 20.6949 8.03139 20.6942 8.04014L20.9735 9.25789C21.0995 9.80931 21.1116 10.5753 20.5171 11.0123C19.9194 11.4516 19.1913 11.2048 18.7061 10.9159L17.5294 10.2135L17.5219 10.2125C17.5155 10.2117 17.5081 10.2113 17.5002 10.2113C17.4922 10.2113 17.4847 10.2117 17.4779 10.2125C17.4734 10.213 17.4697 10.2136 17.4668 10.2142L16.2915 10.9157C15.8046 11.2069 15.0783 11.4496 14.4815 11.0106C13.8883 10.5742 13.897 9.81064 14.024 9.25723L14.3031 8.04014C14.3024 8.03139 14.3003 8.01815 14.2959 8.00268C14.292 7.98877 14.2875 7.97785 14.2841 7.97079L13.3065 6.98514C12.9213 6.59671 12.6123 6.02107 12.8091 5.39983C13.0068 4.77573 13.5941 4.48552 14.1351 4.39461L15.3859 4.18508L15.393 4.18099C15.3987 4.17753 15.4049 4.17338 15.4113 4.16866C15.4176 4.16394 15.4233 4.15918 15.4282 4.15471L15.4345 4.14868L16.1308 2.74447L16.1315 2.74307C16.3762 2.25224 16.8273 1.75 17.4982 1.75Z',
  d4: 'M10.0764 2.06806C10.2612 2.3304 10.2587 2.68126 10.07 2.94088C9.12767 4.23795 8.57208 5.83304 8.57208 7.5601C8.57208 11.9054 12.0947 15.428 16.44 15.428C18.167 15.428 19.7621 14.8724 21.0592 13.93C21.3188 13.7414 21.6697 13.7389 21.932 13.9237C22.1943 14.1085 22.31 14.4398 22.2197 14.7477C20.949 19.0829 16.9429 22.25 12.1951 22.25C6.42643 22.25 1.75 17.5736 1.75 11.8049C1.75 7.05715 4.91711 3.05103 9.25231 1.78033C9.56026 1.69006 9.89152 1.80573 10.0764 2.06806Z',
  d5: 'M18.9138 4.91401L17.5845 2.6586C17.5456 2.59262 17.45 2.59305 17.4117 2.65938L16.11 4.91401L13.6749 5.50997C13.6009 5.5281 13.5735 5.61914 13.6254 5.67507L15.3134 7.49655L14.6677 10.3124C14.6495 10.3915 14.7283 10.4582 14.8034 10.4271L17.5092 9.30614L20.2016 10.4337C20.2766 10.4651 20.3558 10.3986 20.3377 10.3192L19.6947 7.49655L21.3989 5.67522C21.4511 5.61938 21.4239 5.52793 21.3496 5.50976L18.9138 4.91401Z',
  d6: 'M18.9 4.9L17.5 2.5L16.1 4.9L13.5 5.55573L15.3 7.5L14.6279 10.5L17.5 9.3L20.3721 10.5L19.7 7.5L21.5 5.55573L18.9 4.9Z',
};

export const IconRamadhan01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ramadhan-01-stroke-rounded IconRamadhan01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRamadhan01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ramadhan-01-duotone-rounded IconRamadhan01DuotoneRounded"
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
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRamadhan01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ramadhan-01-twotone-rounded IconRamadhan01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRamadhan01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ramadhan-01-solid-rounded IconRamadhan01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRamadhan01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ramadhan-01-bulk-rounded IconRamadhan01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRamadhan01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ramadhan-01-stroke-sharp IconRamadhan01StrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRamadhan01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ramadhan-01-solid-sharp IconRamadhan01SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRamadhan01: TheIconSelfPack = {
  name: 'Ramadhan01',
  StrokeRounded: IconRamadhan01StrokeRounded,
  DuotoneRounded: IconRamadhan01DuotoneRounded,
  TwotoneRounded: IconRamadhan01TwotoneRounded,
  SolidRounded: IconRamadhan01SolidRounded,
  BulkRounded: IconRamadhan01BulkRounded,
  StrokeSharp: IconRamadhan01StrokeSharp,
  SolidSharp: IconRamadhan01SolidSharp,
};