import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 9.19974 2 7.79961 2.54497 6.73005C3.02433 5.78924 3.78924 5.02433 4.73005 4.54497C5.79961 4 7.19974 4 10 4H14C16.8003 4 18.2004 4 19.27 4.54497C20.2108 5.02433 20.9757 5.78924 21.455 6.73005C22 7.79961 22 9.19974 22 12C22 14.8003 22 16.2004 21.455 17.27C20.9757 18.2108 20.2108 18.9757 19.27 19.455C18.2004 20 16.8003 20 14 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12Z',
  d2: 'M12 4H10C7.19974 4 5.79961 4 4.73005 4.54497C3.78924 5.02433 3.02433 5.78924 2.54497 6.73005C2 7.79961 2 9.19974 2 12C2 14.8003 2 16.2004 2.54497 17.27C3.02433 18.2108 3.78924 18.9757 4.73005 19.455C5.79961 20 7.19974 20 10 20H12',
  d3: 'M9.96644 3.25H14.0336C15.4053 3.25 16.4807 3.24999 17.3451 3.32061C18.2252 3.39252 18.9523 3.54138 19.6104 3.87671C20.6924 4.42798 21.572 5.30762 22.1233 6.38955C22.4586 7.04769 22.6075 7.77479 22.6794 8.65494C22.75 9.51928 22.75 10.5947 22.75 11.9664V12.0336C22.75 13.4053 22.75 14.4807 22.6794 15.3451C22.6075 16.2252 22.4586 16.9523 22.1233 17.6104C21.572 18.6924 20.6924 19.572 19.6104 20.1233C18.9523 20.4586 18.2252 20.6075 17.3451 20.6794C16.4807 20.75 15.4053 20.75 14.0336 20.75H9.96642C8.59471 20.75 7.51928 20.75 6.65494 20.6794C5.77479 20.6075 5.04769 20.4586 4.38955 20.1233C3.30762 19.572 2.42798 18.6924 1.87671 17.6104C1.54138 16.9523 1.39252 16.2252 1.32061 15.3451C1.24999 14.4807 1.25 13.4053 1.25 12.0336V11.9664C1.25 10.5947 1.24999 9.51929 1.32061 8.65494C1.39252 7.77479 1.54138 7.04769 1.87671 6.38955C2.42798 5.30762 3.30762 4.42798 4.38955 3.87671C5.04769 3.54138 5.77479 3.39252 6.65494 3.32061C7.51929 3.24999 8.59472 3.25 9.96644 3.25Z',
  d4: 'M22.1225 6.39133C22.4578 7.04946 22.6067 7.77657 22.6786 8.65671C22.7492 9.52104 22.7492 10.5965 22.7492 11.9681V11.9682V12.0354V12.0354C22.7492 13.4071 22.7492 14.4825 22.6786 15.3468C22.6067 16.227 22.4578 16.9541 22.1225 17.6122C21.5712 18.6941 20.6916 19.5738 19.6097 20.1251C18.9515 20.4604 18.2244 20.6092 17.3443 20.6812C16.4799 20.7518 15.4045 20.7518 14.0328 20.7518H14.0328H9.96563H9.96558C8.59389 20.7518 7.51848 20.7518 6.65414 20.6812C5.774 20.6092 5.04689 20.4604 4.38876 20.1251C3.84624 19.8486 3.35458 19.4896 2.92969 19.064L20.9992 4.87109C21.4522 5.30973 21.8327 5.82258 22.1225 6.39133Z',
  d5: 'M22 3.5H2V20.5H22V3.5Z',
  d6: 'M1.25 3.54286C1.25 3.10497 1.58579 2.75 2 2.75H22C22.4142 2.75 22.75 3.10497 22.75 3.54286V20.4571C22.75 20.895 22.4142 21.25 22 21.25H2C1.58579 21.25 1.25 20.895 1.25 20.4571V3.54286Z',
};

export const IconRectangularStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-stroke-rounded IconRectangularStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRectangularDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-duotone-rounded IconRectangularDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRectangularTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-twotone-rounded IconRectangularTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconRectangularSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-solid-rounded IconRectangularSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRectangularBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-bulk-rounded IconRectangularBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconRectangularStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-stroke-sharp IconRectangularStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRectangularSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-solid-sharp IconRectangularSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRectangular: TheIconSelfPack = {
  name: 'Rectangular',
  StrokeRounded: IconRectangularStrokeRounded,
  DuotoneRounded: IconRectangularDuotoneRounded,
  TwotoneRounded: IconRectangularTwotoneRounded,
  SolidRounded: IconRectangularSolidRounded,
  BulkRounded: IconRectangularBulkRounded,
  StrokeSharp: IconRectangularStrokeSharp,
  SolidSharp: IconRectangularSolidSharp,
};