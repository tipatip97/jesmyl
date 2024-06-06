import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 16C19 18.8284 19 20.2426 17.9749 21.1213C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 21.1213C5 20.2426 5 18.8284 5 16L5 8C5 5.17157 5 3.75736 6.02513 2.87868C7.05026 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 2.87868C19 3.75736 19 5.17157 19 8L19 16Z',
  d2: 'M14.5 18H14.491M9.50115 16L9.49219 16',
  d3: 'M12.0078 7L11.9988 7',
  d4: 'M19 12L5 12',
  d5: 'M19 16V12L5 12L5 16C5 18.8284 5 20.2426 6.02512 21.1213C7.05025 22 8.70017 22 12 22C15.2998 22 16.9497 22 17.9749 21.1213C19 20.2426 19 18.8284 19 16Z',
  d6: 'M17.9749 2.87868C16.9497 2 15.2998 2 12 2C8.70017 2 7.05025 2 6.02513 2.87868C5 3.75736 5 5.17157 5 8V12L19 12L19 8C19 5.17157 19 3.75736 17.9749 2.87868Z',
  d7: 'M19.15 12.75C19.4328 12.75 19.5743 12.75 19.6621 12.8379C19.75 12.9257 19.75 13.0672 19.75 13.35L19.75 16.0625C19.75 17.4235 19.7501 18.533 19.6128 19.408C19.468 20.3314 19.1566 21.0963 18.463 21.6908C17.7861 22.271 16.9436 22.518 15.9263 22.6352C14.9303 22.75 13.6574 22.75 12.0488 22.75L11.9514 22.75C10.3427 22.75 9.06975 22.75 8.07369 22.6352C7.05638 22.518 6.21396 22.271 5.53704 21.6908C4.84344 21.0962 4.53204 20.3314 4.38721 19.408C4.24995 18.533 4.24997 17.4235 4.25 16.0625L4.25001 13.35C4.25001 13.0672 4.25001 12.9257 4.33787 12.8379C4.42574 12.75 4.56716 12.75 4.85001 12.75L19.15 12.75ZM19.15 11.25C19.4328 11.25 19.5743 11.25 19.6621 11.1621C19.75 11.0743 19.75 10.9328 19.75 10.65L19.75 7.93751C19.75 6.5765 19.7501 5.46703 19.6128 4.59197C19.468 3.66863 19.1566 2.90375 18.463 2.30924C17.786 1.72902 16.9436 1.482 15.9263 1.36477C14.9303 1.24998 13.6574 1.24999 12.0488 1.25L11.9514 1.25C10.3427 1.24999 9.06975 1.24998 8.07369 1.36477C7.05637 1.482 6.21396 1.72902 5.53704 2.30924C4.84344 2.90375 4.53203 3.66863 4.3872 4.59197C4.24995 5.46703 4.24997 6.57646 4.25 7.93746L4.25 10.65C4.25 10.9328 4.25 11.0743 4.33787 11.1621C4.42574 11.25 4.56716 11.25 4.85 11.25L19.15 11.25ZM8.25195 16.75C8.25195 16.0596 8.81101 15.5 9.50065 15.5L9.5096 15.5C10.1992 15.5 10.7583 16.0596 10.7583 16.75C10.7583 17.4404 10.1992 18 9.5096 18L9.50065 18C8.81101 18 8.25195 17.4404 8.25195 16.75ZM13.2456 18.75C13.2456 18.0596 13.8047 17.5 14.4943 17.5L14.5033 17.5C15.1929 17.5 15.752 18.0596 15.752 18.75C15.752 19.4404 15.1929 20 14.5033 20L14.4943 20C13.8047 20 13.2456 19.4404 13.2456 18.75ZM12.0142 7.5C12.7021 7.5 13.2598 6.94036 13.2598 6.25C13.2598 5.55964 12.7021 5 12.0142 5L12.0053 5C11.3174 5 10.7598 5.55964 10.7598 6.25C10.7598 6.94036 11.3174 7.5 12.0053 7.5L12.0142 7.5Z',
  d8: 'M19.15 12.75C19.4328 12.75 19.5743 12.75 19.6621 12.8379C19.75 12.9257 19.75 13.0672 19.75 13.35L19.75 16.0625C19.75 17.4235 19.7501 18.533 19.6128 19.408C19.468 20.3314 19.1566 21.0963 18.463 21.6908C17.7861 22.271 16.9436 22.518 15.9263 22.6352C14.9303 22.75 13.6574 22.75 12.0488 22.75H11.9514C10.3427 22.75 9.06975 22.75 8.07369 22.6352C7.05638 22.518 6.21396 22.271 5.53704 21.6908C4.84344 21.0962 4.53204 20.3314 4.38721 19.408C4.24995 18.533 4.24997 17.4235 4.25 16.0625L4.25001 13.35C4.25001 13.0672 4.25001 12.9257 4.33787 12.8379C4.42574 12.75 4.56716 12.75 4.85001 12.75H19.15Z',
  d9: 'M19.15 11.25C19.4328 11.25 19.5743 11.25 19.6621 11.1621C19.75 11.0743 19.75 10.9328 19.75 10.65L19.75 7.93751C19.75 6.5765 19.7501 5.46703 19.6128 4.59197C19.468 3.66863 19.1566 2.90375 18.463 2.30924C17.786 1.72902 16.9436 1.482 15.9263 1.36477C14.9303 1.24998 13.6574 1.24999 12.0488 1.25H11.9514C10.3427 1.24999 9.06975 1.24998 8.07369 1.36477C7.05637 1.482 6.21396 1.72902 5.53704 2.30924C4.84344 2.90375 4.53203 3.66863 4.3872 4.59197C4.24995 5.46703 4.24997 6.57646 4.25 7.93746L4.25 10.65C4.25 10.9328 4.25 11.0743 4.33787 11.1621C4.42574 11.25 4.56716 11.25 4.85 11.25H19.15Z',
  d10: 'M8.25195 16.75C8.25195 16.0596 8.81102 15.5 9.50065 15.5H9.50961C10.1992 15.5 10.7583 16.0596 10.7583 16.75C10.7583 17.4404 10.1992 18 9.5096 18H9.50065C8.81101 18 8.25195 17.4404 8.25195 16.75ZM13.2456 18.75C13.2456 18.0596 13.8047 17.5 14.4943 17.5H14.5033C15.1929 17.5 15.752 18.0596 15.752 18.75C15.752 19.4404 15.1929 20 14.5033 20H14.4943C13.8047 20 13.2456 19.4404 13.2456 18.75Z',
  d11: 'M13.2598 6.25C13.2598 6.94036 12.7021 7.5 12.0142 7.5L12.0053 7.5C11.3174 7.5 10.7598 6.94036 10.7598 6.25C10.7598 5.55964 11.3174 5 12.0053 5L12.0142 5C12.7021 5 13.2598 5.55964 13.2598 6.25Z',
  d12: 'M19 2H5V22H19V2Z',
  d13: 'M19.7474 12.7502V22.0002C19.7474 22.4145 19.4117 22.7502 18.9974 22.7502H4.99744C4.58322 22.7502 4.24744 22.4145 4.24744 22.0002L4.24744 12.7502L19.7474 12.7502ZM8.49353 15.7502H10.5025L10.5025 17.7502H8.49353L8.49353 15.7502ZM13.4924 17.7502H15.5013V19.7502H13.4924V17.7502Z',
  d14: 'M4.99744 1.25024C4.58322 1.25024 4.24744 1.58603 4.24744 2.00024L4.24744 11.2502L19.7474 11.2502V2.00024C19.7474 1.58603 19.4117 1.25024 18.9974 1.25024L4.99744 1.25024ZM10.9885 7.25024L12.9974 7.25024V5.25024L10.9885 5.25024V7.25024Z',
};

export const IconDominoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="domino-stroke-rounded IconDominoStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDominoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="domino-duotone-rounded IconDominoDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconDominoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="domino-twotone-rounded IconDominoTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconDominoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="domino-solid-rounded IconDominoSolidRounded"
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

export const IconDominoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="domino-bulk-rounded IconDominoBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
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

export const IconDominoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="domino-stroke-sharp IconDominoStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDominoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="domino-solid-sharp IconDominoSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfDomino: TheIconSelfPack = {
  name: 'Domino',
  StrokeRounded: IconDominoStrokeRounded,
  DuotoneRounded: IconDominoDuotoneRounded,
  TwotoneRounded: IconDominoTwotoneRounded,
  SolidRounded: IconDominoSolidRounded,
  BulkRounded: IconDominoBulkRounded,
  StrokeSharp: IconDominoStrokeSharp,
  SolidSharp: IconDominoSolidSharp,
};