import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 17C15.7593 17 18.9168 14.4405 19.8036 10.9798C20.0098 10.175 20.1129 9.77257 19.8107 9.38629C19.5085 9 19.0187 9 18.039 9H5.96096C4.98134 9 4.49153 9 4.18931 9.38629C3.88709 9.77257 3.99019 10.175 4.19641 10.9798C5.08317 14.4405 8.24074 17 12 17Z',
  d2: 'M12 9V3.5C12 2.67157 12.6716 2 13.5 2C14.3284 2 15 2.67157 15 3.5',
  d3: 'M9 9V8C9 7.05719 9 6.58579 8.70711 6.29289C8.41421 6 7.94281 6 7 6',
  d4: 'M15 7V9',
  d5: 'M9 16.5L9.64223 20.0323C9.84941 21.1717 10.8418 22 12 22C13.1582 22 14.1506 21.1717 14.3578 20.0323L15 16.5',
  d6: 'M12.001 17C15.7603 17 18.9178 14.4405 19.8046 10.9798C20.0108 10.175 20.1139 9.77257 19.8117 9.38629C19.5095 9 19.0197 9 18.04 9H5.96193C4.98231 9 4.4925 9 4.19028 9.38629C3.88806 9.77257 3.99116 10.175 4.19738 10.9798C5.08414 14.4405 8.24171 17 12.001 17Z',
  d7: 'M12.001 9V3.5C12.001 2.67157 12.6726 2 13.501 2C14.3294 2 15.001 2.67157 15.001 3.5',
  d8: 'M9.00098 9V8C9.00098 7.05719 9.00098 6.58579 8.70809 6.29289C8.41519 6 7.94379 6 7.00098 6',
  d9: 'M15.001 7V9',
  d10: 'M9.00098 16.5L9.64321 20.0323C9.85039 21.1717 10.8428 22 12.001 22C13.1592 22 14.1516 21.1717 14.3588 20.0323L15.001 16.5',
  d11: 'M5.90787 8.25001L5.96091 8.25001H18.039L18.092 8.25001C18.5358 8.24991 18.9586 8.24982 19.3051 8.30901C19.7087 8.37795 20.1012 8.54053 20.4013 8.92415C20.6825 9.28353 20.7687 9.66812 20.7466 10.0675C20.7287 10.392 20.635 10.7572 20.5432 11.1146L20.5301 11.1659C19.5596 14.9534 16.107 17.75 11.9999 17.75C7.89293 17.75 4.4403 14.9533 3.46983 11.1659L3.45666 11.1146C3.36494 10.7572 3.27121 10.392 3.25328 10.0675C3.23123 9.66812 3.31739 9.28353 3.59856 8.92416C3.8987 8.54053 4.29117 8.37795 4.69478 8.30901C5.04126 8.24982 5.4641 8.24991 5.90787 8.25001Z',
  d12: 'M13.5 3C13.2239 3 13 3.22386 13 3.5V9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9V3.5C11 2.11929 12.1193 1 13.5 1C14.8807 1 16 2.11929 16 3.5C16 4.05228 15.5523 4.5 15 4.5C14.4477 4.5 14 4.05228 14 3.5C14 3.22386 13.7761 3 13.5 3Z',
  d13: 'M7.96402 7.02771C7.77383 7.00214 7.49967 7.00001 7 7.00001C6.44772 7.00001 6 6.5523 6 6.00001C6 5.44773 6.44772 5.00001 7 5.00001C7.01815 5.00001 7.03629 5.00001 7.05441 5.00001C7.47848 4.99992 7.8906 4.99984 8.23052 5.04554C8.61372 5.09706 9.051 5.22259 9.41421 5.5858C9.77743 5.94902 9.90295 6.38629 9.95447 6.76949C10.0002 7.10941 10.0001 7.52153 10 7.9456C10 7.96372 10 7.98186 10 8.00001V9.00001C10 9.5523 9.55228 10 9 10C8.44772 10 8 9.5523 8 9.00001V8.00001C8 7.50034 7.99788 7.22618 7.97231 7.03599C7.97197 7.03351 7.97164 7.03108 7.97131 7.02871C7.96893 7.02838 7.9665 7.02804 7.96402 7.02771Z',
  d14: 'M15 6C15.5523 6 16 6.44772 16 7V9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9V7C14 6.44772 14.4477 6 15 6Z',
  d15: 'M15.313 15.4563C15.842 15.6147 16.1425 16.1721 15.9841 16.7011L15.975 16.7316L15.3427 20.2092C15.0491 21.8242 13.6425 22.9981 12.0011 22.9981C10.3596 22.9981 8.95306 21.8242 8.65943 20.2092L8.02292 16.7084L8.01028 16.6576C7.87695 16.1217 8.20333 15.5791 8.73928 15.4458C9.27523 15.3125 9.81779 15.6388 9.95112 16.1748L9.97149 16.2567C9.97664 16.2774 9.98112 16.2982 9.98494 16.3192L10.6272 19.8515C10.7479 20.5154 11.3262 20.9981 12.0011 20.9981C12.6759 20.9981 13.2542 20.5154 13.375 19.8515L14.0172 16.3192C14.0238 16.2828 14.0325 16.2467 14.0431 16.2113L14.0682 16.1275C14.2266 15.5984 14.7839 15.2979 15.313 15.4563Z',
  d16: 'M13.7909 17.5683C14.5549 17.4115 15.2827 17.1562 15.9604 16.8164L15.3433 20.2105C15.0497 21.8254 13.6431 22.9993 12.0017 22.9993C10.3602 22.9993 8.95367 21.8254 8.66004 20.2105L8.04297 16.8166C8.72065 17.1564 9.4485 17.4116 10.2125 17.5684L10.6278 19.8527C10.7485 20.5167 11.3268 20.9993 12.0017 20.9993C12.6766 20.9993 13.2549 20.5167 13.3756 19.8527L13.7909 17.5683Z',
  d17: 'M8 8.25002H10L10 7.9456C10.0001 7.52153 10.0002 7.10941 9.95447 6.76949C9.90295 6.38629 9.77743 5.94902 9.41421 5.5858C9.051 5.22259 8.61372 5.09706 8.23052 5.04554C7.8906 4.99984 7.47848 4.99992 7.05441 5.00001L7 5.00001C6.44772 5.00001 6 5.44773 6 6.00001C6 6.5523 6.44772 7.00001 7 7.00001C7.49967 7.00001 7.77383 7.00214 7.96402 7.02771L7.97131 7.02871L7.97231 7.03599C7.99788 7.22618 8 7.50034 8 8.00001V8.25002Z',
  d18: 'M14 8.25002H16V7C16 6.44772 15.5523 6 15 6C14.4477 6 14 6.44772 14 7V8.25002Z',
  d19: 'M11 8.25002H13V3.5C13 3.22386 13.2239 3 13.5 3C13.7761 3 14 3.22386 14 3.5C14 4.05228 14.4477 4.5 15 4.5C15.5523 4.5 16 4.05228 16 3.5C16 2.11929 14.8807 1 13.5 1C12.1193 1 11 2.11929 11 3.5V8.25002Z',
  d20: 'M12 17C16.4183 17 20 13.4183 20 9H4C4 13.4183 7.58172 17 12 17Z',
  d21: 'M12 9V3.5C12 2.67157 12.6716 2 13.5 2C14.3284 2 15 2.67157 15 3.5V4',
  d22: 'M9 9V6.00001L7 6',
  d23: 'M15 6V9',
  d24: 'M9.5 16.5V19.5C9.5 20.8807 10.6193 22 12 22C13.3807 22 14.5 20.8807 14.5 19.5V16.5',
  d25: 'M20.75 8.25024V9.00024C20.75 13.8327 16.8325 17.7502 12 17.7502C7.16751 17.7502 3.25 13.8327 3.25 9.00024V8.25024H20.75Z',
  d26: 'M13.5 3.00024C13.2239 3.00024 13 3.2241 13 3.50024V9.00024H11V3.50024C11 2.11953 12.1193 1.00024 13.5 1.00024C14.8807 1.00024 16 2.11953 16 3.50024V4.00024H14V3.50024C14 3.2241 13.7761 3.00024 13.5 3.00024Z',
  d27: 'M8 7.00025L7 7.00024L7.00001 5.00024L9.00001 5.00025C9.55229 5.00026 10 5.44797 10 6.00025V9.00024H8V7.00025Z',
  d28: 'M14 9.00024V6.00024H16V9.00024H14Z',
  d29: 'M8.75 18.7239V19.7498C8.75 21.5448 10.2051 22.9998 12 22.9998C13.7949 22.9998 15.25 21.5448 15.25 19.7498V18.7239C14.2288 19.065 13.136 19.2498 12 19.2498C10.864 19.2498 9.77123 19.065 8.75 18.7239Z',
};

export const IconSink02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-02-stroke-rounded IconSink02StrokeRounded"
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

export const IconSink02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-02-duotone-rounded IconSink02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSink02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-02-twotone-rounded IconSink02TwotoneRounded"
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
        opacity="0.54" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSink02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-02-solid-rounded IconSink02SolidRounded"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSink02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-02-bulk-rounded IconSink02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSink02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-02-stroke-sharp IconSink02StrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSink02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-02-solid-sharp IconSink02SolidSharp"
    >
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSink02: TheIconSelfPack = {
  name: 'Sink02',
  StrokeRounded: IconSink02StrokeRounded,
  DuotoneRounded: IconSink02DuotoneRounded,
  TwotoneRounded: IconSink02TwotoneRounded,
  SolidRounded: IconSink02SolidRounded,
  BulkRounded: IconSink02BulkRounded,
  StrokeSharp: IconSink02StrokeSharp,
  SolidSharp: IconSink02SolidSharp,
};