import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 14.5C2 11.2125 2 9.56878 2.90796 8.46243C3.07418 8.25989 3.25989 8.07418 3.46243 7.90796C4.56878 7 6.21252 7 9.5 7H14.5C17.7875 7 19.4312 7 20.5376 7.90796C20.7401 8.07418 20.9258 8.25989 21.092 8.46243C22 9.56878 22 11.2125 22 14.5C22 17.7875 22 19.4312 21.092 20.5376C20.9258 20.7401 20.7401 20.9258 20.5376 21.092C19.4312 22 17.7875 22 14.5 22H9.5C6.21252 22 4.56878 22 3.46243 21.092C3.25989 20.9258 3.07418 20.7401 2.90796 20.5376C2 19.4312 2 17.7875 2 14.5Z',
  d2: 'M12 7V5C12 4.44772 12.4477 4 13 4C13.5523 4 14 3.55228 14 3V2',
  d3: 'M10 16L8.5 14.5M8.5 14.5L7 13M8.5 14.5L7 16M8.5 14.5L10 13',
  d4: 'M17 15.5L17 13.5',
  d5: 'M15 2C15 1.44772 14.5523 1 14 1C13.4477 1 13 1.44772 13 2V2.8C13 2.89202 13 2.93803 12.9741 2.9666C12.9482 2.99518 12.8989 3.00007 12.8003 3.00985C11.7895 3.11006 11 3.96283 11 5V6.25H13V5.2C13 5.10798 13 5.06197 13.0259 5.0334C13.0518 5.00482 13.1011 4.99993 13.1997 4.99015L13.1997 4.99015C14.2105 4.88994 15 4.03717 15 3V2Z',
  d6: 'M14.5489 6.25H9.45109C7.84883 6.24999 6.57947 6.24998 5.57525 6.36868C4.54428 6.49054 3.69558 6.74638 2.98663 7.3282C2.74612 7.52558 2.52558 7.74612 2.3282 7.98663C1.74638 8.69558 1.49055 9.54428 1.36868 10.5753C1.24998 11.5795 1.24999 12.8488 1.25 14.4511V14.4511V14.5489V14.5489C1.24999 16.1512 1.24998 17.4205 1.36868 18.4248C1.49055 19.4557 1.74638 20.3044 2.3282 21.0134C2.52558 21.2539 2.74612 21.4744 2.98663 21.6718C3.69558 22.2536 4.54428 22.5095 5.57525 22.6313C6.57944 22.75 7.84875 22.75 9.45095 22.75H9.45097H9.45099H14.5489H14.5489H14.549C16.1511 22.75 17.4206 22.75 18.4248 22.6313C19.4557 22.5095 20.3044 22.2536 21.0134 21.6718C21.2539 21.4744 21.4744 21.2539 21.6718 21.0134C22.2536 20.3044 22.5095 19.4557 22.6313 18.4248C22.75 17.4206 22.75 16.1512 22.75 14.549V14.549V14.549V14.4511V14.4511V14.4511C22.75 12.8489 22.75 11.5794 22.6313 10.5753C22.5095 9.54428 22.2536 8.69558 21.6718 7.98663C21.4744 7.74612 21.2539 7.52558 21.0134 7.3282C20.3044 6.74638 19.4557 6.49054 18.4248 6.36868C17.4205 6.24998 16.1512 6.24999 14.5489 6.25ZM10.5303 12.4697C10.8232 12.7626 10.8232 13.2374 10.5303 13.5303L9.56066 14.5L10.5303 15.4697C10.8232 15.7626 10.8232 16.2374 10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303L8.5 15.5607L7.53033 16.5303C7.23744 16.8232 6.76256 16.8232 6.46967 16.5303C6.17678 16.2374 6.17678 15.7626 6.46967 15.4697L7.43934 14.5L6.46967 13.5303C6.17678 13.2374 6.17678 12.7626 6.46967 12.4697C6.76256 12.1768 7.23744 12.1768 7.53033 12.4697L8.5 13.4393L9.46967 12.4697C9.76256 12.1768 10.2374 12.1768 10.5303 12.4697ZM18 13.5C18 12.9477 17.5523 12.5 17 12.5C16.4477 12.5 16 12.9477 16 13.5V15.5C16 16.0523 16.4477 16.5 17 16.5C17.5523 16.5 18 16.0523 18 15.5V13.5Z',
  d7: 'M14.5489 6.25H9.45109C7.84883 6.24999 6.57947 6.24998 5.57525 6.36868C4.54428 6.49054 3.69558 6.74638 2.98663 7.3282C2.74612 7.52558 2.52558 7.74612 2.3282 7.98663C1.74638 8.69558 1.49055 9.54428 1.36868 10.5753C1.24998 11.5795 1.24999 12.8488 1.25 14.4511V14.5489C1.24999 16.1512 1.24998 17.4205 1.36868 18.4248C1.49055 19.4557 1.74638 20.3044 2.3282 21.0134C2.52558 21.2539 2.74612 21.4744 2.98663 21.6718C3.69558 22.2536 4.54428 22.5095 5.57525 22.6313C6.57945 22.75 7.84877 22.75 9.45099 22.75H14.5489C16.1511 22.75 17.4206 22.75 18.4248 22.6313C19.4557 22.5095 20.3044 22.2536 21.0134 21.6718C21.2539 21.4744 21.4744 21.2539 21.6718 21.0134C22.2536 20.3044 22.5095 19.4557 22.6313 18.4248C22.75 17.4205 22.75 16.1512 22.75 14.549V14.4511C22.75 12.8489 22.75 11.5795 22.6313 10.5753C22.5095 9.54428 22.2536 8.69558 21.6718 7.98663C21.4744 7.74612 21.2539 7.52558 21.0134 7.3282C20.3044 6.74638 19.4557 6.49054 18.4248 6.36868C17.4205 6.24998 16.1512 6.24999 14.5489 6.25Z',
  d8: 'M10.5303 12.4697C10.8232 12.7626 10.8232 13.2374 10.5303 13.5303L9.56066 14.5L10.5303 15.4697C10.8232 15.7626 10.8232 16.2374 10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303L8.5 15.5607L7.53033 16.5303C7.23744 16.8232 6.76256 16.8232 6.46967 16.5303C6.17678 16.2374 6.17678 15.7626 6.46967 15.4697L7.43934 14.5L6.46967 13.5303C6.17678 13.2374 6.17678 12.7626 6.46967 12.4697C6.76256 12.1768 7.23744 12.1768 7.53033 12.4697L8.5 13.4393L9.46967 12.4697C9.76256 12.1768 10.2374 12.1768 10.5303 12.4697Z',
  d9: 'M17 12.5C17.5523 12.5 18 12.9477 18 13.5L18 15.5C18 16.0523 17.5523 16.5 17 16.5C16.4477 16.5 16 16.0523 16 15.5L16 13.5C16 12.9477 16.4477 12.5 17 12.5Z',
  d10: 'M22 8H2V22H22V8Z',
  d11: 'M12 8V5H14V2',
  d12: 'M11 17L9 15M9 15L7 13M9 15L7 17M9 15L11 13',
  d13: 'M17 17L17 13',
  d14: 'M13 5.75H15V1.75H13V3.75H11V6.75H2C1.58579 6.75 1.25 7.08579 1.25 7.5V21.5C1.25 21.9142 1.58579 22.25 2 22.25H22C22.4142 22.25 22.75 21.9142 22.75 21.5V7.5C22.75 7.08579 22.4142 6.75 22 6.75H13V5.75ZM7.93842 14.5001L6.46875 15.9697L7.52941 17.0304L8.99908 15.5607L10.4688 17.0304L11.5294 15.9697L10.0597 14.5001L11.5294 13.0304L10.4688 11.9697L8.99908 13.4394L7.52941 11.9697L6.46875 13.0304L7.93842 14.5001ZM17.75 16.5V12.5H16.25V16.5H17.75Z',
};

export const IconGameStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="game-stroke-rounded IconGameStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconGameDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="game-duotone-rounded IconGameDuotoneRounded"
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
        strokeLinecap="round" 
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

export const IconGameTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="game-twotone-rounded IconGameTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGameSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="game-solid-rounded IconGameSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconGameBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="game-bulk-rounded IconGameBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGameStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="game-stroke-sharp IconGameStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGameSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="game-solid-sharp IconGameSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGame: TheIconSelfPack = {
  name: 'Game',
  StrokeRounded: IconGameStrokeRounded,
  DuotoneRounded: IconGameDuotoneRounded,
  TwotoneRounded: IconGameTwotoneRounded,
  SolidRounded: IconGameSolidRounded,
  BulkRounded: IconGameBulkRounded,
  StrokeSharp: IconGameStrokeSharp,
  SolidSharp: IconGameSolidSharp,
};