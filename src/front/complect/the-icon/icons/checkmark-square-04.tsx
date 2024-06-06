import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 2.5H12C7.52166 2.5 5.28249 2.5 3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12V10',
  d2: 'M8.5 10L12 13.5L21.0002 3.5',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d4: 'M12.0569 1.75C14.2476 1.74999 15.9683 1.74998 17.3117 1.93059C18.183 2.04773 18.9403 2.24575 19.5965 2.59288C19.8511 2.72757 19.9784 2.79492 20.004 2.93916C20.0296 3.0834 19.9242 3.2005 19.7134 3.43471L12.3846 11.5776C12.1861 11.7981 12.0869 11.9084 11.958 11.9118C11.8291 11.9152 11.7242 11.8103 11.5144 11.6004L9.20686 9.2929C8.81634 8.90238 8.18317 8.90238 7.79265 9.2929C7.40212 9.68343 7.40212 10.3166 7.79265 10.7071L11.2926 14.2071C11.4866 14.4011 11.7518 14.5069 12.026 14.4997C12.3003 14.4925 12.5595 14.3729 12.743 14.169L20.8646 5.14523C21.1347 4.84518 21.2697 4.69515 21.4402 4.73255C21.6107 4.76994 21.6663 4.94912 21.7776 5.30748C21.9094 5.73226 22.0024 6.19165 22.0692 6.68802C22.2498 8.03144 22.2498 9.75214 22.2498 11.9428V12.0572C22.2498 14.2479 22.2498 15.9686 22.0692 17.312C21.8841 18.6886 21.497 19.7809 20.6388 20.6391C19.7806 21.4973 18.6884 21.8843 17.3117 22.0694C15.9683 22.25 14.2476 22.25 12.0569 22.25H11.9426C9.75186 22.25 8.03119 22.25 6.68778 22.0694C5.31112 21.8843 4.21887 21.4973 3.36067 20.6391C2.50247 19.7809 2.11544 18.6886 1.93035 17.312C1.74973 15.9686 1.74974 14.2479 1.74976 12.0572V11.9428C1.74974 9.75213 1.74973 8.03144 1.93035 6.68802C2.11544 5.31137 2.50247 4.21911 3.36067 3.36091C4.21887 2.50272 5.31112 2.11568 6.68778 1.93059C8.03119 1.74998 9.75187 1.74999 11.9426 1.75H12.0569Z',
  d5: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d6: 'M21.6692 2.75672C22.0797 3.12619 22.113 3.75848 21.7435 4.16898L12.7433 14.169C12.5598 14.3729 12.3005 14.4925 12.0263 14.4997C11.752 14.5069 11.4869 14.4011 11.2929 14.2071L7.79289 10.7071C7.40237 10.3166 7.40237 9.68343 7.79289 9.2929C8.18342 8.90238 8.81658 8.90238 9.20711 9.2929L11.9618 12.0476L20.257 2.83103C20.6264 2.42053 21.2587 2.38726 21.6692 2.75672Z',
  d7: 'M21 10V21H3V3H15',
  d8: 'M20.9562 2.25L11.9687 12.0544L9.20718 9.29291L7.79297 10.7071L12.0315 14.9456L21.75 4.34385V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3C2.25 2.58579 2.58579 2.25 3 2.25H20.9562Z',
};

export const IconCheckmarkSquare04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-04-stroke-rounded IconCheckmarkSquare04StrokeRounded"
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

export const IconCheckmarkSquare04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-04-duotone-rounded IconCheckmarkSquare04DuotoneRounded"
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

export const IconCheckmarkSquare04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-04-twotone-rounded IconCheckmarkSquare04TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkSquare04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-04-solid-rounded IconCheckmarkSquare04SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkSquare04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-04-bulk-rounded IconCheckmarkSquare04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkSquare04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-04-stroke-sharp IconCheckmarkSquare04StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkSquare04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-04-solid-sharp IconCheckmarkSquare04SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCheckmarkSquare04: TheIconSelfPack = {
  name: 'CheckmarkSquare04',
  StrokeRounded: IconCheckmarkSquare04StrokeRounded,
  DuotoneRounded: IconCheckmarkSquare04DuotoneRounded,
  TwotoneRounded: IconCheckmarkSquare04TwotoneRounded,
  SolidRounded: IconCheckmarkSquare04SolidRounded,
  BulkRounded: IconCheckmarkSquare04BulkRounded,
  StrokeSharp: IconCheckmarkSquare04StrokeSharp,
  SolidSharp: IconCheckmarkSquare04SolidSharp,
};