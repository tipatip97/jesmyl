import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 8C15.6501 8.06476 16.0876 8.21113 16.4142 8.54192C17 9.13523 17 10.0902 17 12C17 13.9098 17 14.8648 16.4142 15.4581C16.0876 15.7889 15.6501 15.9352 15 16M9 16C8.34994 15.9352 7.91238 15.7889 7.58579 15.4581C7 14.8648 7 13.9098 7 12C7 10.0902 7 9.13523 7.58579 8.54192C7.91238 8.21113 8.34994 8.06476 9 8',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.09914 8.99515C9.64871 8.9404 10.0498 8.4505 9.99508 7.90094C9.94033 7.35138 9.45044 6.95025 8.90087 7.005C8.16083 7.07873 7.44269 7.2636 6.87419 7.83941C6.3668 8.35332 6.16956 8.98554 6.08192 9.64575C5.99991 10.2636 5.99995 11.1664 6 12.0654C5.99995 12.9645 5.99991 13.7366 6.08192 14.3544C6.16956 15.0146 6.3668 15.6468 6.87419 16.1607C7.44269 16.7365 8.16083 16.9214 8.90087 16.9951C9.45044 17.0499 9.94033 16.6488 9.99508 16.0992C10.0498 15.5496 9.64871 15.0598 9.09914 15.005C8.53907 14.9492 8.38208 14.8413 8.2974 14.7556C8.219 14.6762 8.12334 14.5343 8.06453 14.0912C8.00208 13.6207 8 12.9829 8 12.0001C8 11.0172 8.00208 10.3794 8.06453 9.90892C8.12334 9.46587 8.219 9.32398 8.2974 9.24457C8.38208 9.1588 8.53907 9.05095 9.09914 8.99515ZM15.0991 7.005C14.5496 6.95025 14.0597 7.35137 14.0049 7.90094C13.9502 8.4505 14.3513 8.9404 14.9009 8.99515C15.4609 9.05095 15.6179 9.1588 15.7026 9.24457C15.781 9.32398 15.8767 9.46587 15.9355 9.90892C15.9979 10.3794 16 11.0172 16 12.0001C16 12.9829 15.9979 13.6207 15.9355 14.0912C15.8767 14.5343 15.781 14.6762 15.7026 14.7556C15.6179 14.8413 15.4609 14.9492 14.9009 15.005C14.3513 15.0598 13.9502 15.5496 14.0049 16.0992C14.0597 16.6488 14.5496 17.0499 15.0991 16.9951C15.8392 16.9214 16.5573 16.7365 17.1258 16.1607C17.6332 15.6468 17.8304 15.0146 17.9181 14.3544C18.0001 13.7366 18.0001 12.9645 18 12.0656V12.0655V12.0655V12.0654C18.0001 11.1664 18.0001 10.2636 17.9181 9.64575C17.8304 8.98554 17.6332 8.35331 17.1258 7.83941C16.5573 7.2636 15.8392 7.07873 15.0991 7.005Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M9.99508 7.90094C10.0498 8.4505 9.64871 8.9404 9.09914 8.99515C8.53907 9.05095 8.38208 9.1588 8.2974 9.24457C8.219 9.32398 8.12334 9.46587 8.06453 9.90892C8.00208 10.3794 8 11.0172 8 12.0001C8 12.9829 8.00208 13.6207 8.06453 14.0912C8.12334 14.5343 8.219 14.6762 8.2974 14.7556C8.38208 14.8413 8.53907 14.9492 9.09914 15.005C9.64871 15.0598 10.0498 15.5496 9.99508 16.0992C9.94033 16.6488 9.45044 17.0499 8.90087 16.9951C8.16083 16.9214 7.44269 16.7365 6.87418 16.1607C6.3668 15.6468 6.16956 15.0146 6.08192 14.3544C5.99991 13.7366 5.99995 12.9645 6 12.0654C5.99995 11.1664 5.99991 10.2636 6.08192 9.64575C6.16956 8.98554 6.3668 8.35332 6.87418 7.83941C7.44269 7.2636 8.16083 7.07873 8.90087 7.005C9.45044 6.95025 9.94033 7.35138 9.99508 7.90094Z',
  d5: 'M14.0049 7.90094C14.0597 7.35137 14.5496 6.95025 15.0991 7.005C15.8392 7.07873 16.5573 7.2636 17.1258 7.83941C17.6332 8.35331 17.8304 8.98554 17.9181 9.64575C18.0001 10.2636 18.0001 11.1664 18 12.0654C18.0001 12.9645 18.0001 13.7366 17.9181 14.3544C17.8304 15.0146 17.6332 15.6468 17.1258 16.1607C16.5573 16.7365 15.8392 16.9214 15.0991 16.9951C14.5496 17.0499 14.0597 16.6488 14.0049 16.0992C13.9502 15.5496 14.3513 15.0598 14.9009 15.005C15.4609 14.9492 15.6179 14.8413 15.7026 14.7556C15.781 14.6762 15.8767 14.5343 15.9355 14.0912C15.9979 13.6207 16 12.9829 16 12.0001C16 11.0172 15.9979 10.3794 15.9355 9.90892C15.8767 9.46587 15.781 9.32398 15.7026 9.24457C15.6179 9.1588 15.4609 9.05095 14.9009 8.99515C14.3513 8.9404 13.9502 8.4505 14.0049 7.90094Z',
  d6: 'M14.5 8.00015H17.0001V16L14.5 16.0001M9.5 16H7V8L9.5 8',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.5 7C7.23478 7 6.98043 7.10536 6.79289 7.29289C6.60536 7.48043 6.5 7.73478 6.5 8V16C6.5 16.5523 6.94772 17 7.5 17H10V15H8.5V9L10 9V7L7.5 7ZM14 9.00015H15.5001V15.0001L13.9999 15.0001L14.0001 17.0001L16.5002 17C17.0524 17 17.5001 16.5523 17.5001 16V8.00015C17.5001 7.44786 17.0524 7.00015 16.5001 7.00015H14V9.00015Z',
};

export const Icon2ndBracketCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-circle-stroke-rounded Icon2ndBracketCircleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const Icon2ndBracketCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-circle-duotone-rounded Icon2ndBracketCircleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const Icon2ndBracketCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-circle-twotone-rounded Icon2ndBracketCircleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const Icon2ndBracketCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-circle-solid-rounded Icon2ndBracketCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon2ndBracketCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-circle-bulk-rounded Icon2ndBracketCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon2ndBracketCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-circle-stroke-sharp Icon2ndBracketCircleStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const Icon2ndBracketCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-circle-solid-sharp Icon2ndBracketCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOf2ndBracketCircle: TheIconSelfPack = {
  name: '2ndBracketCircle',
  StrokeRounded: Icon2ndBracketCircleStrokeRounded,
  DuotoneRounded: Icon2ndBracketCircleDuotoneRounded,
  TwotoneRounded: Icon2ndBracketCircleTwotoneRounded,
  SolidRounded: Icon2ndBracketCircleSolidRounded,
  BulkRounded: Icon2ndBracketCircleBulkRounded,
  StrokeSharp: Icon2ndBracketCircleStrokeSharp,
  SolidSharp: Icon2ndBracketCircleSolidSharp,
};