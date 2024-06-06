import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 22V10.2014C3 10.0655 3.13111 9.96866 3.25997 10.0094L6.35997 10.9896C6.4433 11.0159 6.5 11.0937 6.5 11.1816V22',
  d2: 'M21 22V10.2014C21 10.0655 20.8689 9.96866 20.74 10.0094L17.64 10.9896C17.5567 11.0159 17.5 11.0937 17.5 11.1816V22',
  d3: 'M9 22V8H15V22',
  d4: 'M2 22L22 22',
  d5: 'M9 8L7.17245 3.31623C6.79764 2.25381 6.99125 2 8.17652 2H15.8235C17.0087 2 17.2024 2.25381 16.8275 3.31623L15 8',
  d6: 'M7.17245 3.31623L9 8H15L16.8275 3.31623C17.2024 2.25381 17.0087 2 15.8235 2H8.17652C6.99125 2 6.79764 2.25381 7.17245 3.31623Z',
  d7: 'M21 10.2014V22H17.5V11.1816C17.5 11.0937 17.5567 11.0159 17.64 10.9896L20.74 10.0094C20.8689 9.96866 21 10.0655 21 10.2014Z',
  d8: 'M3 10.2014V22H6.5V11.1816C6.5 11.0937 6.4433 11.0159 6.35997 10.9896L3.25997 10.0094C3.13111 9.96866 3 10.0655 3 10.2014Z',
  d9: 'M3.75 11.2932V22.001C3.75 22.5533 3.30228 23.001 2.75 23.001C2.19772 23.001 1.75 22.5533 1.75 22.001V10.2024C1.75 9.39894 2.52994 8.80985 3.31145 9.05696L6.41145 10.0372C6.91381 10.196 7.25 10.6619 7.25 11.1826V22.001C7.25 22.5533 6.80228 23.001 6.25 23.001C5.69772 23.001 5.25 22.5533 5.25 22.001V11.7675L3.75 11.2932Z',
  d10: 'M20.6886 9.05696C21.4701 8.80985 22.25 9.39894 22.25 10.2024V22.001C22.25 22.5533 21.8023 23.001 21.25 23.001C20.6977 23.001 20.25 22.5533 20.25 22.001V11.2932L18.75 11.7675V22.001C18.75 22.5533 18.3023 23.001 17.75 23.001C17.1977 23.001 16.75 22.5533 16.75 22.001V11.1826C16.75 10.6619 17.0862 10.196 17.5886 10.0372L20.6886 9.05696Z',
  d11: 'M8 8C8 7.44772 8.44772 7 9 7H15C15.5523 7 16 7.44772 16 8V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V9H10V22C10 22.5523 9.55228 23 9 23C8.44772 23 8 22.5523 8 22V8Z',
  d12: 'M1 22C1 21.4477 1.44772 21 2 21L22 21C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23L2 23C1.44772 23 1 22.5523 1 22Z',
  d13: 'M8.12244 3.00021L9.93146 7.6365C10.1322 8.15101 9.87787 8.73084 9.36336 8.9316C8.84886 9.13235 8.26902 8.878 8.06827 8.3635L6.24072 3.67972C6.23674 3.66952 6.23293 3.65925 6.22928 3.64892C6.12822 3.36248 6.03634 3.05357 6.00866 2.75456C5.98027 2.44803 6.00866 2.02757 6.29424 1.65319C6.57188 1.28925 6.95938 1.14562 7.24659 1.0808C7.53618 1.01543 7.85985 1 8.17638 1H15.8233C16.1399 1 16.4635 1.01543 16.7531 1.0808C17.0403 1.14562 17.4278 1.28925 17.7055 1.65319C17.9911 2.02757 18.0195 2.44803 17.9911 2.75456C17.9634 3.05357 17.8715 3.36248 17.7704 3.64892C17.7668 3.65925 17.763 3.66952 17.759 3.67972L15.9315 8.3635C15.7307 8.878 15.1509 9.13235 14.6364 8.9316C14.1219 8.73084 13.8675 8.15101 14.0683 7.6365L15.8773 3.00021C15.8598 3.00007 15.8418 3 15.8233 3H8.17638C8.1579 3 8.13992 3.00007 8.12244 3.00021Z',
  d14: 'M21 21.9999V10L17.5 11V21.9999',
  d15: 'M3 21.9999V10L6.5 11V21.9999',
  d16: 'M1 22L23 22',
  d17: 'M9.00001 8L6.99963 2.00001L17 2.00001L15 8',
  d18: 'M22 8.67432V21.9999H20V11.3258L18.5 11.7543V21.9999H16.5V10.2457L22 8.67432Z',
  d19: 'M2 8.67432V21.9999H4V11.3258L5.5 11.7543V21.9999H7.5V10.2457L2 8.67432Z',
  d20: 'M23 23L1 23L1 21L23 21L23 23Z',
  d21: 'M6.18838 1.41531C6.37633 1.15453 6.67819 1 6.99964 1L17 1C17.3215 1 17.6233 1.15452 17.8113 1.41529C17.9992 1.67606 18.0503 2.01128 17.9487 2.31623L16 8.16226V22H14V8.99998H10V22H8.00001V8.16229L6.05098 2.31628C5.94931 2.01133 6.00043 1.67609 6.18838 1.41531ZM9.72073 6.99998H14.2793L15.6126 3L8.38715 3L9.72073 6.99998Z',
};

export const IconCentralShaheedMinarStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="central-shaheed-minar-stroke-rounded IconCentralShaheedMinarStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconCentralShaheedMinarDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="central-shaheed-minar-duotone-rounded IconCentralShaheedMinarDuotoneRounded"
    >
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
        d={d.d8} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconCentralShaheedMinarTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="central-shaheed-minar-twotone-rounded IconCentralShaheedMinarTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconCentralShaheedMinarSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="central-shaheed-minar-solid-rounded IconCentralShaheedMinarSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCentralShaheedMinarBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="central-shaheed-minar-bulk-rounded IconCentralShaheedMinarBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCentralShaheedMinarStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="central-shaheed-minar-stroke-sharp IconCentralShaheedMinarStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCentralShaheedMinarSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="central-shaheed-minar-solid-sharp IconCentralShaheedMinarSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCentralShaheedMinar: TheIconSelfPack = {
  name: 'CentralShaheedMinar',
  StrokeRounded: IconCentralShaheedMinarStrokeRounded,
  DuotoneRounded: IconCentralShaheedMinarDuotoneRounded,
  TwotoneRounded: IconCentralShaheedMinarTwotoneRounded,
  SolidRounded: IconCentralShaheedMinarSolidRounded,
  BulkRounded: IconCentralShaheedMinarBulkRounded,
  StrokeSharp: IconCentralShaheedMinarStrokeSharp,
  SolidSharp: IconCentralShaheedMinarSolidSharp,
};