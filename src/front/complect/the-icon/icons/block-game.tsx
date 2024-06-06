import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18Z',
  d2: 'M22 10C22 11.4001 22 12.1002 21.7275 12.635C21.4878 13.1054 21.1054 13.4878 20.635 13.7275C20.1002 14 19.4001 14 18 14C16.5999 14 15.8998 14 15.365 13.7275C14.8946 13.4878 14.5122 13.1054 14.2725 12.635C14 12.1002 14 11.4001 14 10C14 8.59987 14 7.8998 14.2725 7.36502C14.5122 6.89462 14.8946 6.51217 15.365 6.27248C15.8998 6 16.5999 6 18 6C19.4001 6 20.1002 6 20.635 6.27248C21.1054 6.51217 21.4878 6.89462 21.7275 7.36502C22 7.8998 22 8.59987 22 10Z',
  d3: 'M14 18C14 19.4001 14 20.1002 13.7275 20.635C13.4878 21.1054 13.1054 21.4878 12.635 21.7275C12.1002 22 11.4001 22 10 22C8.59987 22 7.8998 22 7.36502 21.7275C6.89462 21.4878 6.51217 21.1054 6.27248 20.635C6 20.1002 6 19.4001 6 18C6 16.5999 6 15.8998 6.27248 15.365C6.51217 14.8946 6.89462 14.5122 7.36502 14.2725C7.8998 14 8.59987 14 10 14C11.4001 14 12.1002 14 12.635 14.2725C13.1054 14.5122 13.4878 14.8946 13.7275 15.365C14 15.8998 14 16.5999 14 18Z',
  d4: 'M10 6C10 7.40013 10 8.1002 9.72752 8.63497C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72751C2.89462 9.48783 2.51217 9.10538 2.27248 8.63497C2 8.10019 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6Z',
  d5: 'M18.0281 13.75C18.6306 13.75 19.1234 13.75 19.5238 13.7827C19.9383 13.8166 20.3127 13.8888 20.6623 14.0669C21.2094 14.3457 21.6543 14.7906 21.9331 15.3377C22.1112 15.6873 22.1834 16.0617 22.2173 16.4762C22.25 16.8766 22.25 17.3694 22.25 17.9718V17.9719V18.0281V18.0281C22.25 18.6306 22.25 19.1233 22.2173 19.5238C22.1834 19.9383 22.1112 20.3127 21.9331 20.6623C21.6543 21.2094 21.2094 21.6543 20.6623 21.9331C20.3127 22.1112 19.9383 22.1834 19.5238 22.2173C19.1233 22.25 18.6306 22.25 18.0281 22.25H18.028H17.9719H17.9718C17.3694 22.25 16.8766 22.25 16.4762 22.2173C16.0617 22.1834 15.6873 22.1112 15.3377 21.9331C14.7906 21.6543 14.3457 21.2094 14.0669 20.6623C13.8888 20.3127 13.8166 19.9383 13.7827 19.5238C13.75 19.1233 13.75 18.6306 13.75 18.0281V18.0281V17.9719V17.9719C13.75 17.3694 13.75 16.8767 13.7827 16.4762C13.8166 16.0617 13.8888 15.6873 14.0669 15.3377C14.3457 14.7906 14.7906 14.3457 15.3377 14.0669C15.6873 13.8888 16.0617 13.8166 16.4762 13.7827C16.8767 13.75 17.3694 13.75 17.9719 13.75H17.9719H18.0281H18.0281Z',
  d6: 'M18.0281 4.25C18.6306 4.24999 19.1234 4.24999 19.5238 4.2827C19.9383 4.31657 20.3127 4.38881 20.6623 4.56694C21.2094 4.84573 21.6543 5.29058 21.9331 5.83774C22.1112 6.18735 22.1834 6.56171 22.2173 6.9762C22.25 7.37665 22.25 7.86937 22.25 8.47185V8.47187V8.52808V8.52811C22.25 9.13061 22.25 9.62335 22.2173 10.0238C22.1834 10.4383 22.1112 10.8127 21.9331 11.1623C21.6543 11.7094 21.2094 12.1543 20.6623 12.4331C20.3127 12.6112 19.9383 12.6834 19.5238 12.7173C19.1233 12.75 18.6306 12.75 18.0281 12.75H18.028H17.9719H17.9718C17.3694 12.75 16.8766 12.75 16.4762 12.7173C16.0617 12.6834 15.6873 12.6112 15.3377 12.4331C14.7906 12.1543 14.3457 11.7094 14.0669 11.1623C13.8888 10.8127 13.8166 10.4383 13.7827 10.0238C13.75 9.62335 13.75 9.13061 13.75 8.52812V8.52811V8.47189V8.47188C13.75 7.86939 13.75 7.37665 13.7827 6.9762C13.8166 6.5617 13.8888 6.18735 14.0669 5.83774C14.3457 5.29058 14.7906 4.84573 15.3377 4.56694C15.6873 4.38881 16.0617 4.31657 16.4762 4.2827C16.8767 4.24999 17.3694 4.24999 17.9719 4.25H17.9719H18.0281H18.0281Z',
  d7: 'M6.02812 1.75C6.63062 1.74999 7.12335 1.74999 7.5238 1.7827C7.9383 1.81657 8.31265 1.88881 8.66226 2.06694C9.20942 2.34573 9.65427 2.79058 9.93306 3.33774C10.1112 3.68735 10.1834 4.06171 10.2173 4.4762C10.25 4.87665 10.25 5.36937 10.25 5.97185V5.97187V6.02808V6.02811C10.25 6.63061 10.25 7.12335 10.2173 7.5238C10.1834 7.9383 10.1112 8.31265 9.93306 8.66226C9.65427 9.20942 9.20942 9.65427 8.66226 9.93306C8.31265 10.1112 7.9383 10.1834 7.5238 10.2173C7.12334 10.25 6.63059 10.25 6.02808 10.25H6.02805H5.97187H5.97185C5.36937 10.25 4.87665 10.25 4.4762 10.2173C4.0617 10.1834 3.68735 10.1112 3.33774 9.93306C2.79058 9.65427 2.34573 9.20942 2.06694 8.66226C1.88881 8.31265 1.81657 7.93829 1.7827 7.5238C1.74999 7.12335 1.74999 6.63061 1.75 6.02812V6.02811V5.97189V5.97188C1.74999 5.36939 1.74999 4.87665 1.7827 4.4762C1.81657 4.0617 1.88881 3.68735 2.06694 3.33774C2.34573 2.79058 2.79058 2.34573 3.33774 2.06694C3.68735 1.88881 4.06171 1.81657 4.4762 1.7827C4.87665 1.74999 5.36939 1.74999 5.97188 1.75H5.97189H6.02811H6.02812Z',
  d8: 'M4.25 17.9719C4.24999 17.3694 4.24999 16.8766 4.2827 16.4762C4.31657 16.0617 4.38881 15.6873 4.56694 15.3377C4.84573 14.7906 5.29058 14.3457 5.83774 14.0669C6.18735 13.8888 6.56171 13.8166 6.9762 13.7827C7.37665 13.75 7.86937 13.75 8.47185 13.75L8.47187 13.75L8.52808 13.75L8.52811 13.75C9.13061 13.75 9.62335 13.75 10.0238 13.7827C10.4383 13.8166 10.8127 13.8888 11.1623 14.0669C11.7094 14.3457 12.1543 14.7906 12.4331 15.3377C12.6112 15.6873 12.6834 16.0617 12.7173 16.4762C12.75 16.8767 12.75 17.3694 12.75 17.9719L12.75 17.972L12.75 18.0281L12.75 18.0282C12.75 18.6306 12.75 19.1234 12.7173 19.5238C12.6834 19.9383 12.6112 20.3127 12.4331 20.6623C12.1543 21.2094 11.7094 21.6543 11.1623 21.9331C10.8127 22.1112 10.4383 22.1834 10.0238 22.2173C9.62335 22.25 9.13061 22.25 8.52812 22.25L8.52811 22.25L8.47189 22.25L8.47188 22.25C7.86939 22.25 7.37665 22.25 6.9762 22.2173C6.5617 22.1834 6.18735 22.1112 5.83774 21.9331C5.29058 21.6543 4.84573 21.2094 4.56694 20.6623C4.38881 20.3127 4.31657 19.9383 4.2827 19.5238C4.24999 19.1233 4.24999 18.6306 4.25 18.0281L4.25 18.0281L4.25 17.9719L4.25 17.9719Z',
  d9: 'M10 2H2V10H10V2Z',
  d10: 'M22 6H14V14H22V6Z',
  d11: 'M22 14H14V22H22V14Z',
  d12: 'M14 14H6V22H14V14Z',
  d13: 'M9.75 1.75H1.75V9.75H9.75V1.75Z',
  d14: 'M22.25 4.75H14.25V12.75H22.25V4.75Z',
  d15: 'M22.25 14.25H14.25V22.25H22.25V14.25Z',
  d16: 'M12.75 14.25H4.75V22.25H12.75V14.25Z',
};

export const IconBlockGameStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="block-game-stroke-rounded IconBlockGameStrokeRounded"
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

export const IconBlockGameDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="block-game-duotone-rounded IconBlockGameDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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

export const IconBlockGameTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="block-game-twotone-rounded IconBlockGameTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockGameSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="block-game-solid-rounded IconBlockGameSolidRounded"
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

export const IconBlockGameBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="block-game-bulk-rounded IconBlockGameBulkRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconBlockGameStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="block-game-stroke-sharp IconBlockGameStrokeSharp"
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

export const IconBlockGameSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="block-game-solid-sharp IconBlockGameSolidSharp"
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

export const iconPackOfBlockGame: TheIconSelfPack = {
  name: 'BlockGame',
  StrokeRounded: IconBlockGameStrokeRounded,
  DuotoneRounded: IconBlockGameDuotoneRounded,
  TwotoneRounded: IconBlockGameTwotoneRounded,
  SolidRounded: IconBlockGameSolidRounded,
  BulkRounded: IconBlockGameBulkRounded,
  StrokeSharp: IconBlockGameStrokeSharp,
  SolidSharp: IconBlockGameSolidSharp,
};