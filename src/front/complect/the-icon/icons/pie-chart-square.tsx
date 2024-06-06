import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z',
  d2: 'M15.1063 12.1246C16.0897 12.172 16.5814 12.1957 16.8597 12.6591C17.1379 13.1224 16.9705 13.467 16.6357 14.1562C16.4977 14.4403 16.3324 14.7121 16.1412 14.9678C15.5443 15.7659 14.7221 16.3706 13.7783 16.7057C12.8346 17.0407 11.8118 17.091 10.8393 16.85C9.86672 16.6091 8.98811 16.0879 8.31455 15.3523C7.64099 14.6166 7.20274 13.6996 7.0552 12.7172C6.90766 11.7347 7.05747 10.731 7.48568 9.83294C7.91389 8.93486 8.60127 8.18277 9.46089 7.67175C9.73632 7.50802 10.0255 7.3714 10.3242 7.26291C11.049 6.99967 11.4115 6.86805 11.8499 7.18747C12.2883 7.50689 12.2644 7.99405 12.2165 8.96837L12.1672 9.97174C12.1207 10.9175 12.0975 11.3904 12.3796 11.6985C12.6617 12.0067 13.139 12.0297 14.0936 12.0757L15.1063 12.1246Z',
  d3: 'M3.69797 4.25276C2.5 5.6554 2.5 7.77027 2.5 12C2.5 16.2297 2.5 18.3446 3.69797 19.7472C3.86808 19.9464 4.05358 20.1319 4.25276 20.302C5.6554 21.5 7.77027 21.5 12 21.5C16.2297 21.5 18.3446 21.5 19.7472 20.302C19.9464 20.1319 20.1319 19.9464 20.302 19.7472C21.5 18.3446 21.5 16.2297 21.5 12C21.5 7.77027 21.5 5.6554 20.302 4.25276C20.1319 4.05358 19.9464 3.86808 19.7472 3.69797C18.3446 2.5 16.2297 2.5 12 2.5C7.77027 2.5 5.6554 2.5 4.25276 3.69797C4.05358 3.86808 3.86808 4.05358 3.69797 4.25276ZM16.8597 12.6591C16.5814 12.1957 16.0897 12.172 15.1063 12.1246L14.0936 12.0757C13.139 12.0297 12.6617 12.0067 12.3796 11.6985C12.0975 11.3904 12.1207 10.9175 12.1672 9.97174L12.2165 8.96837C12.2644 7.99405 12.2883 7.50689 11.8499 7.18747C11.4115 6.86805 11.049 6.99967 10.3242 7.26291C10.0255 7.3714 9.73632 7.50802 9.46089 7.67175C8.60127 8.18277 7.91389 8.93486 7.48568 9.83294C7.05747 10.731 6.90766 11.7347 7.0552 12.7172C7.20274 13.6996 7.641 14.6166 8.31455 15.3523C8.98811 16.0879 9.86672 16.6091 10.8393 16.85C11.8118 17.091 12.8346 17.0407 13.7783 16.7057C14.7221 16.3706 15.5443 15.7659 16.1412 14.9678C16.3324 14.7121 16.4977 14.4403 16.6357 14.1562C16.9705 13.467 17.1379 13.1224 16.8597 12.6591Z',
  d4: 'M17.0242 1.90522C15.7462 1.74998 14.1227 1.74999 12.0513 1.75H11.9487C9.87731 1.74999 8.25376 1.74998 6.97578 1.90522C5.66982 2.06386 4.62456 2.39411 3.76567 3.12767C3.53662 3.3233 3.3233 3.53662 3.12767 3.76567C2.39411 4.62456 2.06386 5.66982 1.90522 6.97578C1.74998 8.25376 1.74999 9.87731 1.75 11.9487V12.0513C1.74999 14.1227 1.74998 15.7462 1.90522 17.0242C2.06386 18.3302 2.39411 19.3754 3.12767 20.2343C3.3233 20.4634 3.53662 20.6767 3.76567 20.8723C4.62456 21.6059 5.66982 21.9361 6.97578 22.0948C8.25376 22.25 9.87731 22.25 11.9487 22.25H12.0513C14.1227 22.25 15.7462 22.25 17.0242 22.0948C18.3302 21.9361 19.3754 21.6059 20.2343 20.8723C20.4634 20.6767 20.6767 20.4634 20.8723 20.2343C21.6059 19.3754 21.9361 18.3302 22.0948 17.0242C22.25 15.7462 22.25 14.1227 22.25 12.0513V11.9487C22.25 9.87731 22.25 8.25376 22.0948 6.97578C21.9361 5.66982 21.6059 4.62456 20.8723 3.76567C20.6767 3.53662 20.4634 3.3233 20.2343 3.12767C19.3754 2.39411 18.3302 2.06386 17.0242 1.90522ZM17.5886 12.7579C17.2686 12.2251 16.7031 12.1978 15.5723 12.1432L14.4076 12.0871C13.3099 12.0341 12.761 12.0077 12.4366 11.6533C12.1121 11.299 12.1389 10.7552 12.1923 9.66751L12.249 8.51363C12.304 7.39315 12.3316 6.83292 11.8274 6.46559C11.3232 6.09825 10.9064 6.24962 10.0728 6.55234C9.72928 6.67711 9.39677 6.83423 9.08002 7.02252C8.09145 7.61018 7.30097 8.47509 6.80853 9.50788C6.31609 10.5407 6.14381 11.6949 6.31348 12.8247C6.48315 13.9545 6.98714 15.0091 7.76174 15.8551C8.53633 16.7011 9.54672 17.3005 10.6652 17.5776C11.7836 17.8546 12.9598 17.7968 14.0451 17.4115C15.1304 17.0262 16.076 16.3307 16.7623 15.413C16.9822 15.1189 17.1724 14.8063 17.3311 14.4797C17.7161 13.6871 17.9086 13.2908 17.5886 12.7579Z',
  d5: 'M12.0513 1.75C14.1227 1.74999 15.7462 1.74998 17.0242 1.90522C18.3302 2.06386 19.3754 2.39411 20.2343 3.12767C20.4634 3.3233 20.6767 3.53662 20.8723 3.76567C21.6059 4.62456 21.9361 5.66982 22.0948 6.97578C22.25 8.25376 22.25 9.87731 22.25 11.9487V12.0513C22.25 14.1227 22.25 15.7462 22.0948 17.0242C21.9361 18.3302 21.6059 19.3754 20.8723 20.2343C20.6767 20.4634 20.4634 20.6767 20.2343 20.8723C19.3754 21.6059 18.3302 21.9361 17.0242 22.0948C15.7462 22.25 14.1227 22.25 12.0513 22.25H11.9487C9.87731 22.25 8.25376 22.25 6.97578 22.0948C5.66982 21.9361 4.62456 21.6059 3.76567 20.8723C3.53662 20.6767 3.3233 20.4634 3.12767 20.2343C2.39411 19.3754 2.06386 18.3302 1.90522 17.0242C1.74998 15.7462 1.74999 14.1227 1.75 12.0513V11.9487C1.74999 9.87731 1.74998 8.25376 1.90522 6.97578C2.06386 5.66982 2.39411 4.62456 3.12767 3.76567C3.3233 3.53662 3.53662 3.3233 3.76567 3.12767C4.62456 2.39411 5.66982 2.06386 6.97578 1.90522C8.25376 1.74998 9.87731 1.74999 11.9487 1.75H12.0513Z',
  d6: 'M15.5723 12.1432C16.7031 12.1978 17.2686 12.2251 17.5886 12.7579C17.9086 13.2908 17.7161 13.6871 17.3311 14.4797C17.1724 14.8063 16.9822 15.1189 16.7623 15.413C16.076 16.3307 15.1304 17.0262 14.0451 17.4115C12.9598 17.7968 11.7836 17.8546 10.6652 17.5776C9.54672 17.3005 8.53633 16.7011 7.76174 15.8551C6.98714 15.0091 6.48315 13.9545 6.31348 12.8247C6.14381 11.6949 6.31609 10.5407 6.80853 9.50788C7.30097 8.47509 8.09146 7.61018 9.08002 7.02252C9.39677 6.83423 9.72928 6.67711 10.0728 6.55234C10.9064 6.24962 11.3232 6.09825 11.8274 6.46559C12.3316 6.83292 12.304 7.39315 12.249 8.51363L12.1923 9.66751C12.1389 10.7552 12.1121 11.299 12.4366 11.6533C12.761 12.0077 13.3099 12.0341 14.4076 12.0871L15.5723 12.1432Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M12 17C14.7614 17 17 14.7614 17 12H12V7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM12 6.25C8.82436 6.25 6.25 8.82436 6.25 12C6.25 15.1756 8.82436 17.75 12 17.75C15.1756 17.75 17.75 15.1756 17.75 12V11.25H12.75V6.25H12Z',
};

export const IconPieChartSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-square-stroke-rounded IconPieChartSquareStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPieChartSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-square-duotone-rounded IconPieChartSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <rect 
        x="2.5" 
        y="2.5" 
        width="19" 
        height="19" 
        rx="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPieChartSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-square-twotone-rounded IconPieChartSquareTwotoneRounded"
    >
      <rect 
        x="2.5" 
        y="2.5" 
        width="19" 
        height="19" 
        rx="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPieChartSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-square-solid-rounded IconPieChartSquareSolidRounded"
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

export const IconPieChartSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-square-bulk-rounded IconPieChartSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPieChartSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-square-stroke-sharp IconPieChartSquareStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPieChartSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-square-solid-sharp IconPieChartSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPieChartSquare: TheIconSelfPack = {
  name: 'PieChartSquare',
  StrokeRounded: IconPieChartSquareStrokeRounded,
  DuotoneRounded: IconPieChartSquareDuotoneRounded,
  TwotoneRounded: IconPieChartSquareTwotoneRounded,
  SolidRounded: IconPieChartSquareSolidRounded,
  BulkRounded: IconPieChartSquareBulkRounded,
  StrokeSharp: IconPieChartSquareStrokeSharp,
  SolidSharp: IconPieChartSquareSolidSharp,
};