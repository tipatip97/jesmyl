import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z',
  d2: 'M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z',
  d3: 'M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z',
  d4: 'M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z',
  d5: 'M18.0366 1.25C18.7757 1.24999 19.3832 1.24998 19.8747 1.29671C20.3854 1.34527 20.8478 1.44953 21.2683 1.70725C21.6859 1.9631 22.0369 2.31414 22.2928 2.73166C22.5505 3.15221 22.6547 3.61456 22.7033 4.12529C22.75 4.61678 22.75 5.22429 22.75 5.96343V5.96344V6.03656V6.03658C22.75 6.77571 22.75 7.38322 22.7033 7.87471C22.6547 8.38544 22.5505 8.84779 22.2928 9.26834C22.0369 9.68586 21.6859 10.0369 21.2683 10.2928C20.8478 10.5505 20.3854 10.6547 19.8747 10.7033C19.3832 10.75 18.7757 10.75 18.0366 10.75H18.0366H17.9634H17.9634C17.2243 10.75 16.6168 10.75 16.1253 10.7033C15.6146 10.6547 15.1522 10.5505 14.7317 10.2928C14.3141 10.0369 13.9631 9.68586 13.7072 9.26834C13.4495 8.84779 13.3453 8.38544 13.2967 7.87471C13.25 7.38322 13.25 6.7757 13.25 6.03656V6.03655V5.96345V5.96344C13.25 5.2243 13.25 4.61679 13.2967 4.12529C13.3453 3.61456 13.4495 3.15221 13.7072 2.73166C13.9631 2.31414 14.3141 1.9631 14.7317 1.70725C15.1522 1.44953 15.6146 1.34527 16.1253 1.29671C16.6168 1.24998 17.2243 1.24999 17.9634 1.25H17.9635H18.0365H18.0366Z',
  d6: 'M6.03656 1.25C6.7757 1.24999 7.38322 1.24998 7.87471 1.29671C8.38544 1.34527 8.84779 1.44953 9.26834 1.70725C9.68586 1.9631 10.0369 2.31414 10.2928 2.73166C10.5505 3.15221 10.6547 3.61456 10.7033 4.12529C10.75 4.61678 10.75 5.22429 10.75 5.96343V5.96344V6.03656V6.03658C10.75 6.77571 10.75 7.38322 10.7033 7.87471C10.6547 8.38544 10.5505 8.84779 10.2928 9.26834C10.0369 9.68586 9.68586 10.0369 9.26834 10.2928C8.84779 10.5505 8.38544 10.6547 7.87471 10.7033C7.38322 10.75 6.77571 10.75 6.03658 10.75H6.03656H5.96344H5.96343C5.22429 10.75 4.61678 10.75 4.12529 10.7033C3.61456 10.6547 3.15221 10.5505 2.73166 10.2928C2.31414 10.0369 1.9631 9.68586 1.70725 9.26834C1.44953 8.84779 1.34527 8.38544 1.29671 7.87471C1.24998 7.38322 1.24999 6.7757 1.25 6.03656V6.03655V5.96345V5.96344C1.24999 5.2243 1.24998 4.61679 1.29671 4.12529C1.34527 3.61456 1.44953 3.15221 1.70725 2.73166C1.9631 2.31414 2.31414 1.9631 2.73166 1.70725C3.15221 1.44953 3.61456 1.34527 4.12529 1.29671C4.61678 1.24998 5.2243 1.24999 5.96344 1.25H5.96345H6.03655H6.03656Z',
  d7: 'M18.0366 13.25C18.7757 13.25 19.3832 13.25 19.8747 13.2967C20.3854 13.3453 20.8478 13.4495 21.2683 13.7072C21.6859 13.9631 22.0369 14.3141 22.2928 14.7317C22.5505 15.1522 22.6547 15.6146 22.7033 16.1253C22.75 16.6168 22.75 17.2243 22.75 17.9634V17.9634V18.0366V18.0366C22.75 18.7757 22.75 19.3832 22.7033 19.8747C22.6547 20.3854 22.5505 20.8478 22.2928 21.2683C22.0369 21.6859 21.6859 22.0369 21.2683 22.2928C20.8478 22.5505 20.3854 22.6547 19.8747 22.7033C19.3832 22.75 18.7757 22.75 18.0366 22.75H18.0366H17.9634H17.9634C17.2243 22.75 16.6168 22.75 16.1253 22.7033C15.6146 22.6547 15.1522 22.5505 14.7317 22.2928C14.3141 22.0369 13.9631 21.6859 13.7072 21.2683C13.4495 20.8478 13.3453 20.3854 13.2967 19.8747C13.25 19.3832 13.25 18.7757 13.25 18.0366V18.0365V17.9635V17.9634C13.25 17.2243 13.25 16.6168 13.2967 16.1253C13.3453 15.6146 13.4495 15.1522 13.7072 14.7317C13.9631 14.3141 14.3141 13.9631 14.7317 13.7072C15.1522 13.4495 15.6146 13.3453 16.1253 13.2967C16.6168 13.25 17.2243 13.25 17.9634 13.25H17.9635H18.0365H18.0366Z',
  d8: 'M6.03656 13.25C6.7757 13.25 7.38322 13.25 7.87471 13.2967C8.38544 13.3453 8.84779 13.4495 9.26834 13.7072C9.68586 13.9631 10.0369 14.3141 10.2928 14.7317C10.5505 15.1522 10.6547 15.6146 10.7033 16.1253C10.75 16.6168 10.75 17.2243 10.75 17.9634V17.9634V18.0366V18.0366C10.75 18.7757 10.75 19.3832 10.7033 19.8747C10.6547 20.3854 10.5505 20.8478 10.2928 21.2683C10.0369 21.6859 9.68586 22.0369 9.26834 22.2928C8.84779 22.5505 8.38544 22.6547 7.87471 22.7033C7.38322 22.75 6.77571 22.75 6.03658 22.75H6.03656H5.96344H5.96343C5.22429 22.75 4.61678 22.75 4.12529 22.7033C3.61456 22.6547 3.15221 22.5505 2.73166 22.2928C2.31414 22.0369 1.9631 21.6859 1.70725 21.2683C1.44953 20.8478 1.34527 20.3854 1.29671 19.8747C1.24998 19.3832 1.24999 18.7757 1.25 18.0366V18.0365V17.9635V17.9634C1.24999 17.2243 1.24998 16.6168 1.29671 16.1253C1.34527 15.6146 1.44953 15.1522 1.70725 14.7317C1.9631 14.3141 2.31414 13.9631 2.73166 13.7072C3.15221 13.4495 3.61456 13.3453 4.12529 13.2967C4.61678 13.25 5.2243 13.25 5.96344 13.25H5.96345H6.03655H6.03656Z',
  d9: 'M10 2V10H2V2H10Z',
  d10: 'M22 2V10H14V2H22Z',
  d11: 'M22 14V22H14V14H22Z',
  d12: 'M10 14V22H2V14H10Z',
  d13: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H10C10.4142 1.25 10.75 1.58579 10.75 2V10C10.75 10.4142 10.4142 10.75 10 10.75H2C1.58579 10.75 1.25 10.4142 1.25 10V2Z',
  d14: 'M13.25 2C13.25 1.58579 13.5858 1.25 14 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V10C22.75 10.4142 22.4142 10.75 22 10.75H14C13.5858 10.75 13.25 10.4142 13.25 10V2Z',
  d15: 'M13.25 14C13.25 13.5858 13.5858 13.25 14 13.25H22C22.4142 13.25 22.75 13.5858 22.75 14V22C22.75 22.4142 22.4142 22.75 22 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22V14Z',
  d16: 'M1.25 14C1.25 13.5858 1.58579 13.25 2 13.25H10C10.4142 13.25 10.75 13.5858 10.75 14V22C10.75 22.4142 10.4142 22.75 10 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V14Z',
};

export const IconGridViewStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grid-view-stroke-rounded IconGridViewStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGridViewDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grid-view-duotone-rounded IconGridViewDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGridViewTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grid-view-twotone-rounded IconGridViewTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGridViewSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grid-view-solid-rounded IconGridViewSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGridViewBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grid-view-bulk-rounded IconGridViewBulkRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGridViewStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grid-view-stroke-sharp IconGridViewStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGridViewSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grid-view-solid-sharp IconGridViewSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGridView: TheIconSelfPack = {
  name: 'GridView',
  StrokeRounded: IconGridViewStrokeRounded,
  DuotoneRounded: IconGridViewDuotoneRounded,
  TwotoneRounded: IconGridViewTwotoneRounded,
  SolidRounded: IconGridViewSolidRounded,
  BulkRounded: IconGridViewBulkRounded,
  StrokeSharp: IconGridViewStrokeSharp,
  SolidSharp: IconGridViewSolidSharp,
};