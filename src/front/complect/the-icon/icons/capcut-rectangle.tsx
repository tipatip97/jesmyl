import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.8 12L5.99997 14.5C5.99997 15.6785 5.99997 15.7678 6.35152 16.1339C6.70307 16.5 7.26887 16.5 8.40049 16.5H13.2015C14.3332 16.5 14.899 16.5 15.2505 16.1339C15.6021 15.7678 15.6021 15.6785 15.6021 14.5M10.8 12L18 8.25M10.8 12L5.99997 9.5C5.99997 8.32149 5.99997 8.23223 6.35152 7.86612C6.70307 7.5 7.26887 7.5 8.40049 7.5H13.2015C14.3332 7.5 14.899 7.5 15.2505 7.86612C15.6021 8.23223 15.6021 8.32149 15.6021 9.5M10.8 12L18 15.75',
  d2: 'M2.49777 12C2.49777 7.52166 2.49777 5.28249 3.88901 3.89124C5.28026 2.5 7.51943 2.5 11.9978 2.5C16.4761 2.5 18.7153 2.5 20.1065 3.89124C21.4978 5.28249 21.4978 7.52166 21.4978 12C21.4978 16.4783 21.4978 18.7175 20.1065 20.1088C18.7153 21.5 16.4761 21.5 11.9978 21.5C7.51943 21.5 5.28026 21.5 3.88901 20.1088C2.49777 18.7175 2.49777 16.4783 2.49777 12Z',
  d3: 'M3.88901 3.89124C2.49777 5.28249 2.49777 7.52166 2.49777 12C2.49777 16.4783 2.49777 18.7175 3.88901 20.1088C5.28026 21.5 7.51943 21.5 11.9978 21.5C16.4761 21.5 18.7153 21.5 20.1065 20.1088C21.4978 18.7175 21.4978 16.4783 21.4978 12C21.4978 7.52166 21.4978 5.28249 20.1065 3.89124C18.7153 2.5 16.4761 2.5 11.9978 2.5C7.51943 2.5 5.28026 2.5 3.88901 3.89124ZM10.8002 12L6.00021 14.5C6.00021 15.6785 6.00021 15.7678 6.35176 16.1339C6.70331 16.5 7.26912 16.5 8.40073 16.5H13.2018C14.3334 16.5 14.8992 16.5 15.2508 16.1339C15.6023 15.7678 15.6023 15.6785 15.6023 14.5L10.8002 12ZM6.00021 9.5L10.8002 12L15.6023 9.5C15.6023 8.32149 15.6023 8.23223 15.2508 7.86612C14.8992 7.5 14.3334 7.5 13.2018 7.5H8.40073C7.26912 7.5 6.70331 7.5 6.35176 7.86612C6.00021 8.23223 6.00021 8.32149 6.00021 9.5Z',
  d4: 'M17.3097 1.93059C15.9663 1.74998 14.2457 1.74999 12.0549 1.75H11.9406C9.74989 1.74999 8.02921 1.74998 6.6858 1.93059C5.30914 2.11568 4.21688 2.50271 3.35869 3.36091C2.50049 4.21911 2.11345 5.31137 1.92837 6.68802C1.74775 8.03144 1.74776 9.75212 1.74777 11.9428V12.0572C1.74776 14.2479 1.74775 15.9686 1.92837 17.312C2.11345 18.6886 2.50049 19.7809 3.35869 20.6391C4.21688 21.4973 5.30914 21.8843 6.6858 22.0694C8.02921 22.25 9.74988 22.25 11.9406 22.25H11.9406H12.0549H12.055C14.2457 22.25 15.9663 22.25 17.3097 22.0694C18.6864 21.8843 19.7787 21.4973 20.6369 20.6391C21.4951 19.7809 21.8821 18.6886 22.0672 17.312C22.2478 15.9686 22.2478 14.2479 22.2478 12.0572V12.0572V11.9428V11.9428C22.2478 9.7521 22.2478 8.03144 22.0672 6.68802C21.8821 5.31137 21.4951 4.21911 20.6369 3.36091C19.7787 2.50271 18.6864 2.11568 17.3097 1.93059ZM8.35219 6.75L13.2499 6.75C13.7742 6.74995 14.2433 6.74991 14.6226 6.80302C15.0383 6.86122 15.4546 6.99575 15.7915 7.34667C15.9999 7.5636 16.2174 7.86286 16.3041 8.28768L17.6536 7.58482C18.0209 7.39348 18.4739 7.53618 18.6652 7.90356C18.8565 8.27093 18.7138 8.72385 18.3465 8.91519L12.4236 12L18.3465 15.0848C18.7138 15.2762 18.8565 15.7291 18.6652 16.0965C18.4739 16.4638 18.0209 16.6065 17.6536 16.4152L16.3041 15.7123C16.2174 16.1372 15.9999 16.4364 15.7915 16.6533C15.4546 17.0043 15.0383 17.1388 14.6226 17.197C14.2433 17.2501 13.7742 17.2501 13.25 17.25H13.25L8.35213 17.25H8.35212C7.82791 17.2501 7.35881 17.2501 6.97953 17.197C6.56382 17.1388 6.14754 17.0043 5.81059 16.6533C5.60228 16.4364 5.39578 16.1963 5.30911 15.7715C5.2496 15.4799 5.24977 15.0931 5.25 14.5941L5.25002 14.5C5.25002 14.2204 5.40558 13.964 5.65357 13.8348L9.17642 12L5.65357 10.1652C5.40558 10.036 5.25002 9.77962 5.25002 9.50001L5.25 9.40589C5.24977 8.9069 5.2496 8.52016 5.30911 8.22849C5.39578 7.80367 5.60228 7.5636 5.81059 7.34666C6.14754 6.99575 6.56382 6.86122 6.97953 6.80302C7.35882 6.74991 7.82795 6.74995 8.35219 6.75ZM10.8 11.1544L14.851 9.04451C14.8502 8.96119 14.849 8.88779 14.847 8.82191C14.8418 8.7085 14.807 8.46228 14.7087 8.38468C14.6933 8.36855 14.6481 8.32121 14.4146 8.28852C14.1518 8.25172 13.7895 8.25 13.2016 8.25L8.40056 8.25C7.8127 8.25 7.45033 8.25172 7.18755 8.28852C6.95405 8.32121 6.90884 8.36855 6.89343 8.38468C6.77764 8.43893 6.75302 8.69877 6.75518 8.82191C6.75316 8.88808 6.75194 8.96182 6.75119 9.0456L10.8 11.1544ZM10.8 12.8456L6.75119 14.9544C6.75194 15.0382 6.75316 15.1119 6.75518 15.1781C6.77162 15.3459 6.88109 15.6876 7.18755 15.7115C7.45033 15.7483 7.8127 15.75 8.40056 15.75L13.2016 15.75C13.7895 15.75 14.1518 15.7483 14.4146 15.7115C14.7151 15.6807 14.8281 15.3431 14.847 15.1781C14.849 15.1122 14.8502 15.0388 14.851 14.9555L10.8 12.8456Z',
  d5: 'M12.0549 1.75C14.2457 1.74999 15.9663 1.74998 17.3097 1.93059C18.6864 2.11568 19.7787 2.50271 20.6369 3.36091C21.4951 4.21911 21.8821 5.31137 22.0672 6.68802C22.2478 8.03144 22.2478 9.7521 22.2478 11.9428V11.9428V12.0572V12.0572C22.2478 14.2479 22.2478 15.9686 22.0672 17.312C21.8821 18.6886 21.4951 19.7809 20.6369 20.6391C19.7787 21.4973 18.6864 21.8843 17.3097 22.0694C15.9663 22.25 14.2457 22.25 12.055 22.25H12.0549H11.9406H11.9406C9.74988 22.25 8.02921 22.25 6.6858 22.0694C5.30914 21.8843 4.21688 21.4973 3.35869 20.6391C2.50049 19.7809 2.11345 18.6886 1.92837 17.312C1.74775 15.9686 1.74776 14.2479 1.74777 12.0572V11.9428C1.74776 9.75212 1.74775 8.03144 1.92837 6.68802C2.11345 5.31137 2.50049 4.21911 3.35869 3.36091C4.21688 2.50271 5.30914 2.11568 6.6858 1.93059C8.02921 1.74998 9.74989 1.74999 11.9406 1.75H12.0549Z',
  d6: 'M13.2499 6.75H8.35219C7.82795 6.74995 7.35882 6.74991 6.97953 6.80302C6.56382 6.86122 6.14754 6.99575 5.81059 7.34667C5.60228 7.5636 5.39578 7.80367 5.30911 8.22849C5.2496 8.52016 5.24977 8.9069 5.25 9.40589L5.25002 9.50001C5.25002 9.77963 5.40558 10.036 5.65357 10.1652L9.17642 12L5.65357 13.8348C5.40558 13.964 5.25002 14.2204 5.25002 14.5L5.25 14.5941C5.24977 15.0931 5.2496 15.4799 5.30911 15.7715C5.39578 16.1963 5.60228 16.4364 5.81059 16.6533C6.14754 17.0043 6.56382 17.1388 6.97953 17.197C7.35881 17.2501 7.82792 17.2501 8.35213 17.25H13.25C13.7742 17.2501 14.2433 17.2501 14.6226 17.197C15.0383 17.1388 15.4546 17.0043 15.7915 16.6533C15.9999 16.4364 16.2174 16.1372 16.3041 15.7123L17.6536 16.4152C18.0209 16.6065 18.4739 16.4638 18.6652 16.0965C18.8565 15.7291 18.7138 15.2762 18.3465 15.0848L12.4236 12L18.3465 8.91519C18.7138 8.72385 18.8565 8.27093 18.6652 7.90356C18.4739 7.53618 18.0209 7.39348 17.6536 7.58482L16.3041 8.28768C16.2174 7.86286 15.9999 7.5636 15.7915 7.34667C15.4546 6.99575 15.0383 6.86122 14.6226 6.80302C14.2433 6.74991 13.7742 6.74995 13.2499 6.75ZM14.851 9.04451L10.8 11.1544L6.75119 9.0456C6.75194 8.96182 6.75316 8.88808 6.75518 8.82191C6.75302 8.69877 6.77764 8.43893 6.89343 8.38468C6.90884 8.36855 6.95405 8.32121 7.18755 8.28852C7.45033 8.25172 7.8127 8.25 8.40056 8.25H13.2016C13.7895 8.25 14.1518 8.25172 14.4146 8.28852C14.6481 8.32121 14.6933 8.36855 14.7087 8.38468C14.807 8.46228 14.8418 8.7085 14.847 8.82191C14.849 8.88779 14.8502 8.96119 14.851 9.04451ZM6.75119 14.9544L10.8 12.8456L14.851 14.9555C14.8502 15.0388 14.849 15.1122 14.847 15.1781C14.8281 15.3431 14.7151 15.6807 14.4146 15.7115C14.1518 15.7483 13.7895 15.75 13.2016 15.75H8.40056C7.8127 15.75 7.45033 15.7483 7.18755 15.7115C6.88109 15.6876 6.77162 15.3459 6.75518 15.1781C6.75316 15.1119 6.75194 15.0382 6.75119 14.9544Z',
  d7: 'M10.8 12L5.99998 14.5L6.00006 16.5H15.6021V14.5M10.8 12L18 8.25M10.8 12L5.99998 9.5L6.00016 7.50036L15.6021 7.50013V9.5M10.8 12L18 15.75',
  d8: 'M2.99998 2.25C2.58577 2.25 2.24998 2.58579 2.24998 3L2.24998 21C2.24998 21.4142 2.58577 21.75 2.99998 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L2.99998 2.25ZM16.3521 8.26255V6.75L5.25027 6.75026L5.24998 9.95487L9.17642 11.9999L5.25001 14.0449L5.25013 17.2499L16.3521 17.2499V15.7372L17.6536 16.4151L18.3465 15.0847L12.4236 11.9999L18.3465 8.91507L17.6536 7.5847L16.3521 8.26255ZM14.8521 9.0438L10.8 11.1543L6.75007 9.0449L6.75014 8.25023L14.8521 8.25004V9.0438ZM6.75004 14.9549L10.8 12.8455L14.8521 14.956V15.7499L6.75007 15.7499L6.75004 14.9549Z',
};

export const IconCapcutRectangleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-rectangle-stroke-rounded IconCapcutRectangleStrokeRounded"
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

export const IconCapcutRectangleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-rectangle-duotone-rounded IconCapcutRectangleDuotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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

export const IconCapcutRectangleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-rectangle-twotone-rounded IconCapcutRectangleTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapcutRectangleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-rectangle-solid-rounded IconCapcutRectangleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCapcutRectangleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-rectangle-bulk-rounded IconCapcutRectangleBulkRounded"
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

export const IconCapcutRectangleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-rectangle-stroke-sharp IconCapcutRectangleStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <rect 
        x="2.99998" 
        y="3" 
        width="18" 
        height="18" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></rect>
    </TheIconWrapper>
  );
};

export const IconCapcutRectangleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-rectangle-solid-sharp IconCapcutRectangleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCapcutRectangle: TheIconSelfPack = {
  name: 'CapcutRectangle',
  StrokeRounded: IconCapcutRectangleStrokeRounded,
  DuotoneRounded: IconCapcutRectangleDuotoneRounded,
  TwotoneRounded: IconCapcutRectangleTwotoneRounded,
  SolidRounded: IconCapcutRectangleSolidRounded,
  BulkRounded: IconCapcutRectangleBulkRounded,
  StrokeSharp: IconCapcutRectangleStrokeSharp,
  SolidSharp: IconCapcutRectangleSolidSharp,
};