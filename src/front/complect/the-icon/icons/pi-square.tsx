import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 8H9.22222C7.99492 8 7 8.89543 7 10M10.3333 8L9.3738 14.9086C9.29052 15.5083 8.67713 15.9299 8.01245 15.8445C7.5622 15.7866 7.18693 15.5047 7.04309 15.1164L7 15M13.6667 16L14.7778 8',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM9.22249 7.00012H10.3167C10.3271 6.99996 10.3375 6.99996 10.348 7.00012H14.7611C14.7716 6.99996 14.782 6.99996 14.7924 7.00012H17.0003C17.5526 7.00012 18.0003 7.44784 18.0003 8.00012C18.0003 8.55241 17.5526 9.00012 17.0003 9.00012H15.6488L14.6574 16.1377C14.5815 16.6847 14.0764 17.0666 13.5294 16.9906C12.9823 16.9146 12.6005 16.4096 12.6764 15.8626L13.6296 9.00012H11.2043L10.3646 15.0463C10.1932 16.28 8.99793 16.9795 7.8852 16.8364C7.10991 16.7367 6.39332 16.2406 6.10562 15.4638L6.06252 15.3474C5.87071 14.8295 6.13505 14.2542 6.65296 14.0624C7.17086 13.8706 7.7462 14.1349 7.93802 14.6528L7.98111 14.7692C7.98138 14.7699 7.98719 14.785 8.01371 14.8049C8.04047 14.825 8.08312 14.8454 8.14025 14.8527C8.22786 14.864 8.30038 14.8401 8.34494 14.8095C8.36639 14.7948 8.377 14.7815 8.38115 14.7751C8.38268 14.7728 8.38339 14.7713 8.38365 14.7707L9.18506 9.00055C8.43147 9.01771 8.00027 9.55171 8.00027 10.0001C8.00027 10.5524 7.55256 11.0001 7.00027 11.0001C6.44799 11.0001 6.00027 10.5524 6.00027 10.0001C6.00027 8.24677 7.54462 7.00012 9.22249 7.00012Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M10.3167 7.00012H9.22249C7.54462 7.00012 6.00027 8.24677 6.00027 10.0001C6.00027 10.5524 6.44799 11.0001 7.00027 11.0001C7.55256 11.0001 8.00027 10.5524 8.00027 10.0001C8.00027 9.55171 8.43147 9.01771 9.18506 9.00055L8.38365 14.7707C8.38339 14.7713 8.38268 14.7728 8.38115 14.7751C8.377 14.7815 8.36639 14.7948 8.34494 14.8095C8.30038 14.8401 8.22786 14.864 8.14025 14.8527C8.08312 14.8454 8.04047 14.825 8.01371 14.8049C7.98719 14.785 7.98138 14.7699 7.98111 14.7692L7.93802 14.6528C7.7462 14.1349 7.17086 13.8706 6.65296 14.0624C6.13505 14.2542 5.87071 14.8295 6.06252 15.3474L6.10562 15.4638C6.39332 16.2406 7.10991 16.7367 7.8852 16.8364C8.99793 16.9795 10.1932 16.28 10.3646 15.0463L11.2043 9.00012H13.6296L12.6764 15.8626C12.6005 16.4096 12.9823 16.9146 13.5294 16.9906C14.0764 17.0666 14.5815 16.6847 14.6574 16.1377L15.6488 9.00012H17.0003C17.5526 9.00012 18.0003 8.55241 18.0003 8.00012C18.0003 7.44784 17.5526 7.00012 17.0003 7.00012H14.7924C14.782 6.99996 14.7716 6.99996 14.7611 7.00012H10.348C10.3375 6.99996 10.3271 6.99996 10.3167 7.00012Z',
  d6: 'M17 8H10.2222C8.99492 8 8 8.89543 8 10M11.3333 8L10.3738 14.9086C10.2905 15.5083 9.67713 15.9299 9.01245 15.8445C8.5622 15.7866 8.18693 15.5047 8.04309 15.1164L8 15M13.6667 16L14.7778 8',
  d7: 'M3 21H21V3.00046L3 3V21Z',
  d8: 'M3.00002 2.25C2.8011 2.24999 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00046C21.75 2.58626 21.4142 2.25047 21 2.25046L3.00002 2.25ZM9 10C9 9.55159 9.4312 9.01758 10.1848 9.00042L9.38338 14.7706C9.38338 14.7706 9.38241 14.7727 9.38088 14.775C9.37673 14.7814 9.36612 14.7946 9.34467 14.8094C9.30011 14.84 9.22759 14.8639 9.13998 14.8526C9.08284 14.8453 9.0402 14.8249 9.01344 14.8048C8.98691 14.7848 8.98084 14.769 8.98084 14.769L8.93775 14.6527L7.06225 15.3473L7.10535 15.4637C7.39305 16.2405 8.10964 16.7366 8.88493 16.8363C9.99766 16.9794 11.1929 16.2799 11.3643 15.0462L12.204 9H13.6293L12.6762 15.8624L14.6572 16.1376L15.6485 9H17V7H10.2222C8.54435 7 7 8.24665 7 10H9Z',
};

export const IconPiSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-square-stroke-rounded IconPiSquareStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPiSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-square-duotone-rounded IconPiSquareDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPiSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-square-twotone-rounded IconPiSquareTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPiSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-square-solid-rounded IconPiSquareSolidRounded"
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

export const IconPiSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-square-bulk-rounded IconPiSquareBulkRounded"
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

export const IconPiSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-square-stroke-sharp IconPiSquareStrokeSharp"
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

export const IconPiSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-square-solid-sharp IconPiSquareSolidSharp"
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

export const iconPackOfPiSquare: TheIconSelfPack = {
  name: 'PiSquare',
  StrokeRounded: IconPiSquareStrokeRounded,
  DuotoneRounded: IconPiSquareDuotoneRounded,
  TwotoneRounded: IconPiSquareTwotoneRounded,
  SolidRounded: IconPiSquareSolidRounded,
  BulkRounded: IconPiSquareBulkRounded,
  StrokeSharp: IconPiSquareStrokeSharp,
  SolidSharp: IconPiSquareSolidSharp,
};