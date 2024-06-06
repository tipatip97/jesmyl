import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.06066 21.0607C4.47487 21.6464 3.52513 21.6464 2.93934 21.0607C2.35355 20.4749 2.35355 19.5251 2.93934 18.9393C3.52513 18.3536 4.47487 18.3536 5.06066 18.9393C5.64645 19.5251 5.64645 20.4749 5.06066 21.0607Z',
  d2: 'M8 16L5.5 18.5',
  d3: 'M9.5 16.5L20.0733 7.20318C20.3506 6.96283 20.5445 6.64067 20.627 6.28308L21.5 2.5L17.7169 3.37302C17.3593 3.45554 17.0372 3.64942 16.7968 3.92675L7.5 14.5',
  d4: 'M4 13H4.57157C5.10201 13 5.61071 13.2107 5.98579 13.5858L10.4142 18.0142C10.7893 18.3893 11 18.898 11 19.4284V20',
  d5: 'M5.56066 21.0607C4.97487 21.6464 4.02513 21.6464 3.43934 21.0607C2.85355 20.4749 2.85355 19.5251 3.43934 18.9393C4.02513 18.3536 4.97487 18.3536 5.56066 18.9393C6.14645 19.5251 6.14645 20.4749 5.56066 21.0607Z',
  d6: 'M20.0727 7.20318L9.49943 16.5L9.20711 16.8052L7.20312 14.7934L7.49943 14.5L16.7962 3.92675C17.0366 3.64942 17.3588 3.45554 17.7164 3.37302L21.4994 2.5L20.6264 6.28308C20.5439 6.64067 20.35 6.96283 20.0727 7.20318Z',
  d7: 'M3.94444 12.25C3.42284 12.25 3 12.6728 3 13.1944C3 13.716 3.42284 14.1389 3.94444 14.1389H4.48426C4.73475 14.1389 4.97497 14.2384 5.15209 14.4155L6.57546 15.8389L4.69329 17.7211C4.67322 17.7411 4.65424 17.7619 4.63636 17.7832C3.93966 17.6624 3.197 17.871 2.65901 18.409C1.78033 19.2877 1.78033 20.7123 2.65901 21.591C3.53769 22.4697 4.96231 22.4697 5.84099 21.591C6.57508 20.8569 6.69588 19.7418 6.20338 18.8823L7.91111 17.1745L9.33449 18.5979C9.51161 18.775 9.61111 19.0153 9.61111 19.2657V19.8056C9.61111 20.3272 10.034 20.75 10.5556 20.75C11.0772 20.75 11.5 20.3272 11.5 19.8056V19.2657C11.5 18.5143 11.2015 17.7936 10.6701 17.2623L6.48773 13.0799C5.95638 12.5485 5.23571 12.25 4.48426 12.25H3.94444ZM3.71967 19.4697C4.01256 19.1768 4.48744 19.1768 4.78033 19.4697C5.07322 19.7626 5.07322 20.2374 4.78033 20.5303C4.48744 20.8232 4.01256 20.8232 3.71967 20.5303C3.42678 20.2374 3.42678 19.7626 3.71967 19.4697Z',
  d8: 'M21.7798 1.96968C21.9626 2.15254 22.0384 2.41669 21.9802 2.66866L21.1072 6.45174C20.9892 6.96309 20.7122 7.42388 20.3161 7.76802L9.76883 17.042L9.49875 17.324C9.35905 17.4699 9.16642 17.5532 8.96446 17.5552C8.7625 17.5572 8.56828 17.4776 8.42574 17.3345L6.42176 15.3227C6.28111 15.1815 6.20244 14.9901 6.20313 14.7908C6.20382 14.5915 6.2838 14.4007 6.42542 14.2605L6.70332 13.9853L15.9814 3.43336C16.3255 3.03721 16.7863 2.76025 17.2977 2.64224L21.0808 1.76922C21.3328 1.71107 21.5969 1.78683 21.7798 1.96968Z',
  d9: 'M9.5 16.5L20.5 6.5L21.5 2.5L17.5 3.5L7.5 14.5',
  d10: 'M4 13H5.4L11 18.6V20',
  d11: 'M4.53021 19.4694C4.23731 19.1765 3.76244 19.1765 3.46955 19.4694C3.17665 19.7623 3.17665 20.2372 3.46955 20.5301C3.76244 20.823 4.23731 20.823 4.53021 20.5301C4.8231 20.2372 4.8231 19.7623 4.53021 19.4694ZM2.40889 18.4088C3.28757 17.5301 4.71219 17.5301 5.59087 18.4088C6.46955 19.2874 6.46955 20.7121 5.59087 21.5907C4.71219 22.4694 3.28757 22.4694 2.40889 21.5907C1.53021 20.7121 1.53021 19.2874 2.40889 18.4088Z',
  d12: 'M4.96863 17.9695L7.46863 15.4695L8.52929 16.5301L6.02929 19.0301L4.96863 17.9695Z',
  d13: 'M10.0047 17.0548L6.94519 13.9953L17.0979 2.82728L22.2502 1.75L21.1727 6.90201L10.0047 17.0548Z',
  d14: 'M5.08922 13.7498H3.99988V12.2498H5.71054L11.7499 18.2891V19.9998H10.2499V18.9104L5.08922 13.7498Z',
};

export const IconSword02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-02-stroke-rounded IconSword02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSword02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-02-duotone-rounded IconSword02DuotoneRounded"
    >
      <path 
        d={d.d5} 
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSword02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-02-twotone-rounded IconSword02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSword02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-02-solid-rounded IconSword02SolidRounded"
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

export const IconSword02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-02-bulk-rounded IconSword02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSword02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-02-stroke-sharp IconSword02StrokeSharp"
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
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSword02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-02-solid-sharp IconSword02SolidSharp"
    >
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSword02: TheIconSelfPack = {
  name: 'Sword02',
  StrokeRounded: IconSword02StrokeRounded,
  DuotoneRounded: IconSword02DuotoneRounded,
  TwotoneRounded: IconSword02TwotoneRounded,
  SolidRounded: IconSword02SolidRounded,
  BulkRounded: IconSword02BulkRounded,
  StrokeSharp: IconSword02StrokeSharp,
  SolidSharp: IconSword02SolidSharp,
};