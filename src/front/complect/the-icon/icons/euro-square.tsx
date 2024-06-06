import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z',
  d2: 'M15 14.4923C14.5216 15.3957 13.6512 16 12.6568 16C11.147 16 9.92308 14.6071 9.92308 12.8889V11.1111C9.92308 9.39289 11.147 8 12.6568 8C13.6512 8 14.5216 8.60426 15 9.50774M9 12H12.9231',
  d3: 'M17.0242 1.90522C15.7462 1.74998 14.1227 1.74999 12.0513 1.75H11.9487C9.87731 1.74999 8.25376 1.74998 6.97578 1.90522C5.66982 2.06386 4.62456 2.39411 3.76567 3.12767C3.53662 3.3233 3.3233 3.53662 3.12767 3.76567C2.39411 4.62456 2.06386 5.66982 1.90522 6.97578C1.74998 8.25376 1.74999 9.87731 1.75 11.9487V12.0513C1.74999 14.1227 1.74998 15.7462 1.90522 17.0242C2.06386 18.3302 2.39411 19.3754 3.12767 20.2343C3.3233 20.4634 3.53662 20.6767 3.76567 20.8723C4.62456 21.6059 5.66982 21.9361 6.97578 22.0948C8.25376 22.25 9.87731 22.25 11.9487 22.25H12.0513C14.1227 22.25 15.7462 22.25 17.0242 22.0948C18.3302 21.9361 19.3754 21.6059 20.2343 20.8723C20.4634 20.6767 20.6767 20.4634 20.8723 20.2343C21.6059 19.3754 21.9361 18.3302 22.0948 17.0242C22.25 15.7462 22.25 14.1227 22.25 12.0513V11.9487C22.25 9.87731 22.25 8.25376 22.0948 6.97578C21.9361 5.66982 21.6059 4.62456 20.8723 3.76567C20.6767 3.53662 20.4634 3.3233 20.2343 3.12767C19.3754 2.39411 18.3302 2.06386 17.0242 1.90522ZM12.6568 7.25C10.6446 7.25 9.17308 9.07274 9.17308 11.1111V11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H9.17308V12.8889C9.17308 14.9273 10.6446 16.75 12.6568 16.75C13.9736 16.75 15.0767 15.9501 15.6628 14.8432C15.8566 14.4771 15.717 14.0233 15.3509 13.8294C14.9849 13.6356 14.531 13.7752 14.3372 14.1413C13.9665 14.8414 13.3289 15.25 12.6568 15.25C11.6494 15.25 10.6731 14.287 10.6731 12.8889V12.75H12.9231C13.3373 12.75 13.6731 12.4142 13.6731 12C13.6731 11.5858 13.3373 11.25 12.9231 11.25H10.6731V11.1111C10.6731 9.71305 11.6494 8.75 12.6568 8.75C13.3289 8.75 13.9665 9.15864 14.3372 9.85868C14.531 10.2248 14.9849 10.3644 15.3509 10.1706C15.717 9.97674 15.8566 9.52286 15.6628 9.1568C15.0767 8.04988 13.9736 7.25 12.6568 7.25Z',
  d4: 'M12.0513 1.75C14.1227 1.74999 15.7462 1.74998 17.0242 1.90522C18.3302 2.06386 19.3754 2.39411 20.2343 3.12767C20.4634 3.3233 20.6767 3.53662 20.8723 3.76567C21.6059 4.62456 21.9361 5.66982 22.0948 6.97578C22.25 8.25376 22.25 9.87731 22.25 11.9487V12.0513C22.25 14.1227 22.25 15.7462 22.0948 17.0242C21.9361 18.3302 21.6059 19.3754 20.8723 20.2343C20.6767 20.4634 20.4634 20.6767 20.2343 20.8723C19.3754 21.6059 18.3302 21.9361 17.0242 22.0948C15.7462 22.25 14.1227 22.25 12.0513 22.25H11.9487C9.87731 22.25 8.25376 22.25 6.97578 22.0948C5.66982 21.9361 4.62456 21.6059 3.76567 20.8723C3.53662 20.6767 3.3233 20.4634 3.12767 20.2343C2.39411 19.3754 2.06386 18.3302 1.90522 17.0242C1.74998 15.7462 1.74999 14.1227 1.75 12.0513V11.9487C1.74999 9.87731 1.74998 8.25376 1.90522 6.97578C2.06386 5.66982 2.39411 4.62456 3.12767 3.76567C3.3233 3.53662 3.53662 3.3233 3.76567 3.12767C4.62456 2.39411 5.66982 2.06386 6.97578 1.90522C8.25376 1.74998 9.87731 1.74999 11.9487 1.75H12.0513Z',
  d5: 'M9.17308 11.1111C9.17308 9.07274 10.6446 7.25 12.6568 7.25C13.9736 7.25 15.0768 8.04988 15.6628 9.1568C15.8566 9.52286 15.717 9.97674 15.3509 10.1706C14.9849 10.3644 14.531 10.2248 14.3372 9.85868C13.9665 9.15864 13.3289 8.75 12.6568 8.75C11.6494 8.75 10.6731 9.71305 10.6731 11.1111V11.25H12.9231C13.3373 11.25 13.6731 11.5858 13.6731 12C13.6731 12.4142 13.3373 12.75 12.9231 12.75H10.6731V12.8889C10.6731 14.287 11.6494 15.25 12.6568 15.25C13.3289 15.25 13.9665 14.8414 14.3372 14.1413C14.531 13.7752 14.9849 13.6356 15.3509 13.8294C15.717 14.0233 15.8566 14.4771 15.6628 14.8432C15.0768 15.9501 13.9736 16.75 12.6568 16.75C10.6446 16.75 9.17308 14.9273 9.17308 12.8889V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H9.17308V11.1111Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M15 14.4923C14.5216 15.3957 13.6512 16 12.6568 16C11.147 16 9.92308 14.6071 9.92308 12.8889V11.1111C9.92308 9.39289 11.147 8 12.6568 8C13.6512 8 14.5216 8.60426 15 9.50774M8 12H13',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM12.6568 7.25C10.6446 7.25 9.17308 9.07274 9.17308 11.1111V11.25H8V12.75H9.17308V12.8889C9.17308 14.9273 10.6446 16.75 12.6568 16.75C13.9736 16.75 15.0767 15.9501 15.6628 14.8432L14.3372 14.1413C13.9665 14.8414 13.3289 15.25 12.6568 15.25C11.6494 15.25 10.6731 14.287 10.6731 12.8889V12.75H13V11.25H10.6731V11.1111C10.6731 9.71305 11.6494 8.75 12.6568 8.75C13.3289 8.75 13.9665 9.15864 14.3372 9.85868L15.6628 9.1568C15.0767 8.04988 13.9736 7.25 12.6568 7.25Z',
};

export const IconEuroSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-square-stroke-rounded IconEuroSquareStrokeRounded"
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

export const IconEuroSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-square-duotone-rounded IconEuroSquareDuotoneRounded"
    >
      <rect 
        opacity="var(--icon-opacity)" 
        x="2.5" 
        y="2.5" 
        width="19" 
        height="19" 
        rx="5" 
        fill="var(--icon-fill)"></rect>
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEuroSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-square-twotone-rounded IconEuroSquareTwotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEuroSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-square-solid-rounded IconEuroSquareSolidRounded"
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

export const IconEuroSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-square-bulk-rounded IconEuroSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconEuroSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-square-stroke-sharp IconEuroSquareStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEuroSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-square-solid-sharp IconEuroSquareSolidSharp"
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

export const iconPackOfEuroSquare: TheIconSelfPack = {
  name: 'EuroSquare',
  StrokeRounded: IconEuroSquareStrokeRounded,
  DuotoneRounded: IconEuroSquareDuotoneRounded,
  TwotoneRounded: IconEuroSquareTwotoneRounded,
  SolidRounded: IconEuroSquareSolidRounded,
  BulkRounded: IconEuroSquareBulkRounded,
  StrokeSharp: IconEuroSquareStrokeSharp,
  SolidSharp: IconEuroSquareSolidSharp,
};