import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 13.3424C2 9.9951 4.73825 6.68726 6.66022 4.77778C7.70404 3.74074 9.29597 3.74074 10.3398 4.77778C12.2617 6.68726 15 9.9951 15 13.3424C15 16.6243 12.5386 20 8.5 20C4.46142 20 2 16.6243 2 13.3424Z',
  d2: 'M15.4999 20C19.5385 20 21.9999 16.6243 21.9999 13.3424C21.9999 9.9951 19.2617 6.68726 17.3397 4.77778C16.2959 3.74074 14.704 3.74074 13.6602 4.77778',
  d3: 'M6.13162 4.24572C7.46793 2.91809 9.53207 2.91809 10.8684 4.24572C11.8525 5.22343 13.0607 6.5734 14.0272 8.12425C14.9888 9.66741 15.75 11.4716 15.75 13.3424C15.75 16.9566 13.0302 20.75 8.5 20.75C3.96978 20.75 1.25 16.9566 1.25 13.3424C1.25 11.4716 2.01121 9.66741 2.97285 8.12425C3.93928 6.5734 5.14752 5.22343 6.13162 4.24572Z',
  d4: 'M16.6928 5.6681C16.0706 5.03656 15.1548 5.03656 14.5326 5.6681C14.1597 6.04653 13.5571 6.04453 13.1867 5.66362C12.8163 5.28271 12.8182 4.66713 13.1911 4.28869C14.5556 2.90377 16.6698 2.90377 18.0343 4.28869C18.9781 5.24668 20.1417 6.57395 21.0746 8.10337C22.0014 9.62281 22.7502 11.4224 22.7502 13.3051C22.7502 16.9266 20.0799 20.75 15.6127 20.75C15.0871 20.75 14.661 20.3147 14.661 19.7778C14.661 19.2408 15.0871 18.8056 15.6127 18.8056C18.8322 18.8056 20.8468 16.0651 20.8468 13.3051C20.8468 11.9335 20.2926 10.498 19.4592 9.13174C18.6319 7.77547 17.578 6.56655 16.6928 5.6681Z',
  d5: 'M15 13.2C15 16.9555 12.0899 20 8.5 20C4.91015 20 2 16.9555 2 13.2C2 8 8.5 4 8.5 4C8.5 4 15 8 15 13.2Z',
  d6: 'M14 5.0804C14.8689 4.38837 15.5 4 15.5 4C15.5 4 22 8 22 13.2C22 16.9555 19.0899 20 15.5 20C15.3318 20 15.165 19.9933 15 19.9802',
  d7: 'M8.5 3.25C8.68696 3.3748 9.64915 3.99438 9.96513 4.22921C10.5958 4.69792 11.4388 5.37985 12.2844 6.23211C13.9487 7.90951 15.75 10.3742 15.75 13.2559C15.75 17.3628 12.5356 20.75 8.5 20.75C4.4644 20.75 1.25 17.3628 1.25 13.2559C1.25 10.3742 3.05132 7.90951 4.71564 6.23211C5.56124 5.37985 6.40417 4.69792 7.03487 4.22921C7.35085 3.99438 8.31304 3.3748 8.5 3.25Z',
  d8: 'M15.9784 5.83147C15.8312 5.72041 15.6973 5.62298 15.5805 5.53998C15.3553 5.69995 15.0673 5.91324 14.742 6.17415L13.5508 4.66773C13.9859 4.3187 14.3625 4.04544 14.6324 3.85806C14.7675 3.76428 15.504 3.29996 15.5805 3.25C15.7621 3.37306 16.8187 4.05936 17.1244 4.28988C17.7342 4.7497 18.5498 5.41911 19.3688 6.25666C20.9725 7.89671 22.7508 10.3465 22.7508 13.2393C22.7508 17.346 19.5807 20.75 15.5805 20.75C15.3943 20.75 15.2096 20.7425 15.0266 20.7279L15.1783 18.8081C15.3108 18.8188 15.445 18.8242 15.5805 18.8242C18.4443 18.8242 20.8387 16.3652 20.8387 13.2393C20.8387 11.1251 19.5099 9.14551 18.0064 7.60798C17.2718 6.85674 16.5339 6.2503 15.9784 5.83147Z',
};

export const IconRainDoubleDropStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-double-drop-stroke-rounded IconRainDoubleDropStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconRainDoubleDropDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-double-drop-duotone-rounded IconRainDoubleDropDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRainDoubleDropTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-double-drop-twotone-rounded IconRainDoubleDropTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRainDoubleDropSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-double-drop-solid-rounded IconRainDoubleDropSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRainDoubleDropBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-double-drop-bulk-rounded IconRainDoubleDropBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRainDoubleDropStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-double-drop-stroke-sharp IconRainDoubleDropStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRainDoubleDropSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-double-drop-solid-sharp IconRainDoubleDropSolidSharp"
    >
      <path 
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

export const iconPackOfRainDoubleDrop: TheIconSelfPack = {
  name: 'RainDoubleDrop',
  StrokeRounded: IconRainDoubleDropStrokeRounded,
  DuotoneRounded: IconRainDoubleDropDuotoneRounded,
  TwotoneRounded: IconRainDoubleDropTwotoneRounded,
  SolidRounded: IconRainDoubleDropSolidRounded,
  BulkRounded: IconRainDoubleDropBulkRounded,
  StrokeSharp: IconRainDoubleDropStrokeSharp,
  SolidSharp: IconRainDoubleDropSolidSharp,
};