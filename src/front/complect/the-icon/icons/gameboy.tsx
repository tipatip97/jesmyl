import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5 6C15.2766 6 15.6649 6 15.9711 6.12687C16.3795 6.29602 16.704 6.62048 16.8731 7.02886C17 7.33515 17 7.72343 17 8.5C17 9.27657 17 9.66485 16.8731 9.97114C16.704 10.3795 16.3795 10.704 15.9711 10.8731C15.6649 11 15.2766 11 14.5 11L9.5 11C8.72343 11 8.33515 11 8.02886 10.8731C7.62048 10.704 7.29602 10.3795 7.12687 9.97114C7 9.66485 7 9.27657 7 8.5C7 7.72343 7 7.33515 7.12687 7.02886C7.29602 6.62048 7.62048 6.29602 8.02886 6.12687C8.33515 6 8.72343 6 9.5 6L14.5 6Z',
  d2: 'M11 17H9M9 17L7 17M9 17L9 19M9 17L9 15',
  d3: 'M17 18V16',
  d4: 'M21 13V11C21 7.25027 21 5.3754 20.0451 4.06107C19.7367 3.6366 19.3634 3.26331 18.9389 2.95491C17.6246 2 15.7497 2 12 2C8.25027 2 6.3754 2 5.06107 2.95491C4.6366 3.26331 4.26331 3.6366 3.95491 4.06107C3 5.3754 3 7.25027 3 11V13C3 16.7497 3 18.6246 3.95491 19.9389C4.26331 20.3634 4.6366 20.7367 5.06107 21.0451C6.3754 22 8.25027 22 12 22C15.7497 22 17.6246 22 18.9389 21.0451C19.3634 20.7367 19.7367 20.3634 20.0451 19.9389C21 18.6246 21 16.7497 21 13Z',
  d5: 'M21 11V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3 18.6246 3 16.7497 3 13V11C3 7.25027 3 5.3754 3.95491 4.06107C4.26331 3.6366 4.6366 3.26331 5.06107 2.95491C6.3754 2 8.25027 2 12 2C15.7497 2 17.6246 2 18.9389 2.95491C19.3634 3.26331 19.7367 3.6366 20.0451 4.06107C21 5.3754 21 7.25027 21 11ZM15.9711 6.12687C15.6649 6 15.2766 6 14.5 6H9.5C8.72343 6 8.33515 6 8.02886 6.12687C7.62048 6.29602 7.29602 6.62048 7.12687 7.02886C7 7.33515 7 7.72343 7 8.5C7 9.27657 7 9.66485 7.12687 9.97114C7.29602 10.3795 7.62048 10.704 8.02886 10.8731C8.33515 11 8.72343 11 9.5 11H14.5C15.2766 11 15.6649 11 15.9711 10.8731C16.3795 10.704 16.704 10.3795 16.8731 9.97114C17 9.66485 17 9.27657 17 8.5C17 7.72343 17 7.33515 16.8731 7.02886C16.704 6.62048 16.3795 6.29602 15.9711 6.12687Z',
  d6: 'M12.0452 1.25H12.0453C13.8818 1.24999 15.3214 1.24999 16.4635 1.37373C17.6291 1.50001 18.5734 1.76232 19.3798 2.34815C19.8679 2.70281 20.2972 3.13209 20.6518 3.62023C21.2377 4.42656 21.5 5.37094 21.6263 6.53648C21.75 7.67859 21.75 9.11824 21.75 10.9547V13.0453C21.75 14.8818 21.75 16.3214 21.6263 17.4635C21.5 18.6291 21.2377 19.5734 20.6518 20.3798C20.2972 20.8679 19.8679 21.2972 19.3798 21.6518C18.5734 22.2377 17.6291 22.5 16.4635 22.6263C15.3214 22.75 13.8818 22.75 12.0453 22.75H11.9547C10.1182 22.75 8.67859 22.75 7.53648 22.6263C6.37094 22.5 5.42656 22.2377 4.62024 21.6518C4.13209 21.2972 3.70281 20.8679 3.34815 20.3798C2.76232 19.5734 2.50001 18.6291 2.37373 17.4635C2.24999 16.3214 2.24999 14.8818 2.25 13.0453V13.0452V10.9548V10.9547C2.24999 9.11821 2.24999 7.67861 2.37373 6.53648C2.50001 5.37094 2.76232 4.42656 3.34815 3.62024C3.70281 3.13209 4.13209 2.70281 4.62024 2.34815C5.42656 1.76232 6.37094 1.50001 7.53648 1.37373C8.67861 1.24999 10.1182 1.24999 11.9547 1.25H11.9548H12.0452ZM17 15.25C17.4142 15.25 17.75 15.5858 17.75 16V18C17.75 18.4142 17.4142 18.75 17 18.75C16.5858 18.75 16.25 18.4142 16.25 18V16C16.25 15.5858 16.5858 15.25 17 15.25ZM9 14.25C9.41421 14.25 9.75 14.5858 9.75 15V16.25H11C11.4142 16.25 11.75 16.5858 11.75 17C11.75 17.4142 11.4142 17.75 11 17.75H9.75V19C9.75 19.4142 9.41421 19.75 9 19.75C8.58579 19.75 8.25 19.4142 8.25 19V17.75H7C6.58579 17.75 6.25 17.4142 6.25 17C6.25 16.5858 6.58579 16.25 7 16.25H8.25V15C8.25 14.5858 8.58579 14.25 9 14.25ZM9.47552 5.25H14.5245C14.8919 5.24999 15.2048 5.24999 15.463 5.26625C15.7336 5.28329 15.9984 5.32049 16.2582 5.41981C16.8503 5.64622 17.3208 6.08049 17.566 6.62709C17.6736 6.86687 17.7139 7.1113 17.7324 7.3611C17.75 7.59938 17.75 7.88826 17.75 8.22738V8.2274V8.27268V8.2727C17.75 8.61181 17.75 8.90062 17.7324 9.1389C17.7139 9.3887 17.6736 9.63313 17.566 9.87291C17.3208 10.4195 16.8503 10.8538 16.2582 11.0802C15.9984 11.1795 15.7336 11.2167 15.463 11.2338C15.2049 11.25 14.8919 11.25 14.5245 11.25H14.5245H9.47546H9.47545C9.10806 11.25 8.79517 11.25 8.53702 11.2338C8.26641 11.2167 8.00161 11.1795 7.74185 11.0802C7.1497 10.8538 6.67924 10.4195 6.43396 9.87291C6.32636 9.63313 6.28606 9.3887 6.2676 9.1389C6.24999 8.9006 6.24999 8.61175 6.25 8.2726V8.22739C6.24999 7.88824 6.24999 7.5994 6.2676 7.3611C6.28606 7.1113 6.32636 6.86687 6.43396 6.62709C6.67924 6.08049 7.1497 5.64622 7.74185 5.41981C8.00161 5.32049 8.26641 5.28329 8.53702 5.26625C8.79518 5.24999 9.1081 5.24999 9.47552 5.25Z',
  d7: 'M12.0453 1.25H12.0452H11.9548H11.9547C10.1182 1.24999 8.67861 1.24999 7.53648 1.37373C6.37094 1.50001 5.42656 1.76232 4.62024 2.34815C4.13209 2.70281 3.70281 3.13209 3.34815 3.62024C2.76232 4.42656 2.50001 5.37094 2.37373 6.53648C2.24999 7.67861 2.24999 9.11821 2.25 10.9547V10.9548V13.0452V13.0453C2.24999 14.8818 2.24999 16.3214 2.37373 17.4635C2.50001 18.6291 2.76232 19.5734 3.34815 20.3798C3.70281 20.8679 4.13209 21.2972 4.62024 21.6518C5.42656 22.2377 6.37094 22.5 7.53648 22.6263C8.67859 22.75 10.1182 22.75 11.9547 22.75H12.0453C13.8818 22.75 15.3214 22.75 16.4635 22.6263C17.6291 22.5 18.5734 22.2377 19.3798 21.6518C19.8679 21.2972 20.2972 20.8679 20.6518 20.3798C21.2377 19.5734 21.5 18.6291 21.6263 17.4635C21.75 16.3214 21.75 14.8818 21.75 13.0453V10.9547C21.75 9.11824 21.75 7.67859 21.6263 6.53648C21.5 5.37094 21.2377 4.42656 20.6518 3.62023C20.2972 3.13209 19.8679 2.70281 19.3798 2.34815C18.5734 1.76232 17.6291 1.50001 16.4635 1.37373C15.3214 1.24999 13.8818 1.24999 12.0453 1.25Z',
  d8: 'M17.75 16C17.75 15.5858 17.4142 15.25 17 15.25C16.5858 15.25 16.25 15.5858 16.25 16V18C16.25 18.4142 16.5858 18.75 17 18.75C17.4142 18.75 17.75 18.4142 17.75 18V16Z',
  d9: 'M9 14.25C9.41421 14.25 9.75 14.5858 9.75 15V16.25H11C11.4142 16.25 11.75 16.5858 11.75 17C11.75 17.4142 11.4142 17.75 11 17.75H9.75V19C9.75 19.4142 9.41421 19.75 9 19.75C8.58579 19.75 8.25 19.4142 8.25 19V17.75H7C6.58579 17.75 6.25 17.4142 6.25 17C6.25 16.5858 6.58579 16.25 7 16.25H8.25V15C8.25 14.5858 8.58579 14.25 9 14.25Z',
  d10: 'M14.5245 5.25H9.47552C9.1081 5.24999 8.79518 5.24999 8.53702 5.26625C8.26641 5.28329 8.00161 5.32049 7.74185 5.41981C7.1497 5.64622 6.67924 6.08049 6.43396 6.62709C6.32636 6.86687 6.28606 7.1113 6.2676 7.3611C6.24999 7.5994 6.24999 7.88824 6.25 8.22739V8.2726C6.24999 8.61175 6.24999 8.9006 6.2676 9.1389C6.28606 9.3887 6.32636 9.63313 6.43396 9.87291C6.67924 10.4195 7.1497 10.8538 7.74185 11.0802C8.00161 11.1795 8.26641 11.2167 8.53702 11.2338C8.79517 11.25 9.10807 11.25 9.47546 11.25H14.5245C14.8919 11.25 15.2048 11.25 15.463 11.2338C15.7336 11.2167 15.9984 11.1795 16.2582 11.0802C16.8503 10.8538 17.3208 10.4195 17.566 9.87291C17.6736 9.63313 17.7139 9.3887 17.7324 9.1389C17.75 8.90062 17.75 8.6118 17.75 8.27268V8.2274C17.75 7.88827 17.75 7.59938 17.7324 7.3611C17.7139 7.1113 17.6736 6.86687 17.566 6.62709C17.3208 6.08049 16.8503 5.64622 16.2582 5.41981C15.9984 5.32049 15.7336 5.28329 15.463 5.26625C15.2048 5.24999 14.8919 5.24999 14.5245 5.25Z',
  d11: 'M11.5 16.5L9 16.5M9 16.5L6.5 16.5M9 16.5L9 19M9 16.5V14',
  d12: 'M16 18V15',
  d13: 'M21 2H3V22H21V2Z',
  d14: 'M17 6H7V11H17V6Z',
  d15: 'M3 1.25C2.58579 1.25 2.25 1.58579 2.25 2V22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V2C21.75 1.58579 21.4142 1.25 21 1.25H3ZM8.25 19L8.25 17.25H6.5V15.75H8.25V14H9.75V15.75H11.5V17.25H9.75L9.75 19H8.25ZM16.75 15V18H15.25V15H16.75ZM6 5H18V11H6V5Z',
};

export const IconGameboyStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gameboy-stroke-rounded IconGameboyStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconGameboyDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gameboy-duotone-rounded IconGameboyDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
      />
    </TheIconWrapper>
  );
};

export const IconGameboyTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gameboy-twotone-rounded IconGameboyTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconGameboySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gameboy-solid-rounded IconGameboySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGameboyBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gameboy-bulk-rounded IconGameboyBulkRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGameboyStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gameboy-stroke-sharp IconGameboyStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGameboySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gameboy-solid-sharp IconGameboySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGameboy: TheIconSelfPack = {
  name: 'Gameboy',
  StrokeRounded: IconGameboyStrokeRounded,
  DuotoneRounded: IconGameboyDuotoneRounded,
  TwotoneRounded: IconGameboyTwotoneRounded,
  SolidRounded: IconGameboySolidRounded,
  BulkRounded: IconGameboyBulkRounded,
  StrokeSharp: IconGameboyStrokeSharp,
  SolidSharp: IconGameboySolidSharp,
};