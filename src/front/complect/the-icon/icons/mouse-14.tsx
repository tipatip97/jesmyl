import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 6.16705C21.5817 6.96357 20.6554 7.23648 19.931 6.77661L17.7448 5.38882C16.0959 4.34208 15.2714 3.81871 14.4634 4.05676C13.906 4.22097 13.5066 4.70326 13 5.58178',
  d2: 'M5.1851 18.9941C9.48005 21.4312 12.2743 19.1116 14.3687 15.5464C16.463 11.9811 17.1098 8.44303 12.8149 6.00594C8.51993 3.56885 5.72575 5.8884 3.63136 9.45367C1.53697 13.0189 0.890156 16.557 5.1851 18.9941Z',
  d3: 'M11.4883 7.99805L10.4883 9.7301',
  d4: 'M20.3331 6.14357C20.6557 6.34838 21.1039 6.2608 21.3361 5.81853C21.5287 5.4518 21.9821 5.31062 22.3488 5.50319C22.7155 5.69575 22.8567 6.14915 22.6641 6.51588C22.0599 7.66666 20.6554 8.12489 19.5291 7.40996L17.343 6.02217C16.4993 5.48659 15.9333 5.12946 15.48 4.92461C15.0475 4.72914 14.8363 4.72897 14.6755 4.77635C14.4318 4.84814 14.1599 5.07217 13.6498 5.95662C13.4429 6.31544 12.9843 6.43857 12.6254 6.23164C12.2666 6.02471 12.1435 5.56608 12.3504 5.20726C12.8536 4.33467 13.3805 3.59412 14.2516 3.33749C14.8988 3.14682 15.5038 3.28931 16.0977 3.5577C16.6597 3.81165 17.3155 4.22801 18.0999 4.72598L20.3331 6.14357Z',
  d5: 'M13.185 5.35383C10.8681 4.03913 8.83383 3.9553 7.07253 4.80336C5.37246 5.62195 4.05603 7.25023 2.98468 9.07398C1.91439 10.8959 1.13472 12.8343 1.26403 14.699C1.39841 16.6369 2.49864 18.3322 4.81497 19.6466C7.13189 20.9613 9.16616 21.0451 10.9275 20.197C12.6276 19.3784 13.944 17.7502 15.0153 15.9264C16.0856 14.1045 16.8653 12.1661 16.736 10.3014C16.6016 8.36346 15.5013 6.66819 13.185 5.35383ZM10.6195 7.49884C10.8957 7.02055 11.5072 6.85667 11.9855 7.13281C12.4638 7.40895 12.6277 8.02055 12.3516 8.49884L11.3516 10.2309C11.0754 10.7092 10.4638 10.8731 9.98554 10.5969C9.50724 10.3208 9.34337 9.70918 9.61951 9.23089L10.6195 7.49884Z',
  d6: 'M7.07253 4.80336C8.83383 3.9553 10.8681 4.03913 13.185 5.35383C15.5013 6.66819 16.6016 8.36346 16.736 10.3014C16.8653 12.1661 16.0856 14.1045 15.0153 15.9264C13.944 17.7502 12.6276 19.3784 10.9275 20.197C9.16616 21.0451 7.13189 20.9613 4.81497 19.6466C2.49864 18.3322 1.39841 16.6369 1.26403 14.699C1.13472 12.8343 1.91439 10.8959 2.98468 9.07398C4.05603 7.25023 5.37246 5.62195 7.07253 4.80336Z',
  d7: 'M11.9875 7.13281C11.5092 6.85667 10.8976 7.02055 10.6215 7.49884L9.62146 9.23089C9.34532 9.70918 9.5092 10.3208 9.98749 10.5969C10.4658 10.8731 11.0774 10.7092 11.3535 10.2309L12.3535 8.49884C12.6297 8.02055 12.4658 7.40895 11.9875 7.13281Z',
  d8: 'M10 10L11.5 8M22 5.5L20 8L14.5 4L13 6',
  d9: 'M5.1851 18.9941C0.890155 16.557 1.53697 13.0189 3.63136 9.45367C5.72575 5.8884 8.51993 3.56885 12.8149 6.00594C17.1098 8.44303 16.463 11.9811 14.3687 15.5464C12.2743 19.1116 9.48005 21.4312 5.1851 18.9941Z',
  d10: 'M13.9004 3.55005C14.1463 3.22212 14.61 3.1524 14.9415 3.39349L20.0262 6.97218L21.5787 5.03153L22.75 5.96857L20.75 8.46857C20.4996 8.78156 20.0474 8.84235 19.7232 8.6066L14.657 5.04129L13.6004 6.45005L12.4004 5.55005L13.9004 3.55005Z',
  d11: 'M13.185 5.35383C10.8681 4.03913 8.83383 3.9553 7.07253 4.80336C5.37246 5.62195 4.05603 7.25023 2.98468 9.07398C1.91439 10.8959 1.13472 12.8343 1.26403 14.699C1.39841 16.6369 2.49864 18.3322 4.81497 19.6466C7.13189 20.9613 9.16616 21.0451 10.9275 20.197C12.6276 19.3784 13.944 17.7502 15.0153 15.9264C16.0856 14.1045 16.8653 12.1661 16.736 10.3014C16.6016 8.36346 15.5013 6.66819 13.185 5.35383ZM10.6992 7.40039L9.19922 9.40039L10.7992 10.6004L12.2992 8.60039L10.6992 7.40039Z',
};

export const IconMouse14StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-14-stroke-rounded IconMouse14StrokeRounded"
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

export const IconMouse14DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-14-duotone-rounded IconMouse14DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
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

export const IconMouse14TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-14-twotone-rounded IconMouse14TwotoneRounded"
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

export const IconMouse14SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-14-solid-rounded IconMouse14SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse14BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-14-bulk-rounded IconMouse14BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconMouse14StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-14-stroke-sharp IconMouse14StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse14SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-14-solid-sharp IconMouse14SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfMouse14: TheIconSelfPack = {
  name: 'Mouse14',
  StrokeRounded: IconMouse14StrokeRounded,
  DuotoneRounded: IconMouse14DuotoneRounded,
  TwotoneRounded: IconMouse14TwotoneRounded,
  SolidRounded: IconMouse14SolidRounded,
  BulkRounded: IconMouse14BulkRounded,
  StrokeSharp: IconMouse14StrokeSharp,
  SolidSharp: IconMouse14SolidSharp,
};