import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 18.5L10 7C10 6.07655 10 5.61483 10.2635 5.32794C10.5269 5.04106 11.0175 4.9992 11.9986 4.91549C16.022 4.57222 18.909 3.26005 20.3553 2.40978C20.6508 2.236 20.7986 2.14912 20.8993 2.20672C21 2.26432 21 2.4315 21 2.76587V16',
  d2: 'M10 10C15.8667 10 19.7778 7.66667 21 7',
  d3: 'M22 2.76473V6.97854C22.0003 6.99151 22.0003 7.00447 22 7.01742V15.9989C22 18.208 20.2091 19.9989 18 19.9989C15.7909 19.9989 14 18.208 14 15.9989C14 13.7897 15.7909 11.9989 18 11.9989C18.7286 11.9989 19.4117 12.1937 20 12.534V8.66243C18.1779 9.56241 15.086 10.7988 11 10.9771V18.4989C11 20.9841 8.98528 22.9989 6.5 22.9989C4.01472 22.9989 2 20.9841 2 18.4989C2 16.0136 4.01472 13.9989 6.5 13.9989C7.42507 13.9989 8.28495 14.278 9 14.7566V6.99886L8.99999 6.94765C8.99993 6.53037 8.99986 6.13046 9.04047 5.80159C9.08528 5.43863 9.19408 5.01285 9.5269 4.65042C9.86802 4.27895 10.302 4.13806 10.6619 4.06459C10.9981 3.99597 11.4161 3.96036 11.8628 3.9223L11.8628 3.9223L11.9136 3.91798C15.7632 3.58953 18.5076 2.33489 19.8485 1.54658L19.8771 1.52968C19.9968 1.45918 20.1623 1.36156 20.3139 1.29806C20.4584 1.23747 20.9159 1.06299 21.3959 1.33759C21.8697 1.60864 21.9554 2.08141 21.9779 2.24406C22.0004 2.40641 22.0002 2.59715 22 2.73194L22 2.76473Z',
  d4: 'M2 18.4062C2 20.8915 4.01472 22.9062 6.5 22.9062C8.98528 22.9062 11 20.8915 11 18.4062C11 15.921 8.98528 13.9062 6.5 13.9062C4.01472 13.9062 2 15.921 2 18.4062Z',
  d5: 'M14 15.9062C14 18.1154 15.7909 19.9062 18 19.9062C20.2091 19.9062 22 18.1154 22 15.9062C22 13.6971 20.2091 11.9062 18 11.9062C15.7909 11.9062 14 13.6971 14 15.9062Z',
  d6: 'M22 2.63818C22.0002 2.5034 22.0005 2.31266 21.978 2.15031C21.9554 1.98766 21.8697 1.51489 21.3959 1.24384C20.9159 0.969239 20.4584 1.14372 20.3139 1.20431C20.1624 1.26781 19.9968 1.36542 19.8772 1.43593L19.8772 1.43593L19.8485 1.45283C18.5076 2.24114 15.7632 3.49578 11.9136 3.82423L11.8628 3.82855C11.4162 3.8666 10.9981 3.90222 10.6619 3.97084C10.302 4.04431 9.86804 4.1852 9.52691 4.55667C9.19409 4.9191 9.08529 5.34488 9.04048 5.70784C8.99987 6.03671 8.99994 6.43662 9.00001 6.8539L9.00001 14.663C10.206 15.4703 11 16.8451 11 18.4053V10.8834C15.086 10.7051 18.1779 9.46866 20 8.56868V12.4404C21.1956 13.132 22 14.4247 22 15.9053V6.92367C22.0003 6.91072 22.0003 6.89776 22 6.88479L22 2.63819V2.63818Z',
  d7: 'M10 18.5L10 5L21 2V16',
  d8: 'M10 11L21 8',
  d9: 'M2.25 18.5C2.25 16.1528 4.15279 14.25 6.5 14.25C8.84721 14.25 10.75 16.1528 10.75 18.5C10.75 20.8472 8.84721 22.75 6.5 22.75C4.15279 22.75 2.25 20.8472 2.25 18.5Z',
  d10: 'M14.25 16C14.25 13.9289 15.9289 12.25 18 12.25C20.0711 12.25 21.75 13.9289 21.75 16C21.75 18.0711 20.0711 19.75 18 19.75C15.9289 19.75 14.25 18.0711 14.25 16Z',
  d11: 'M21.75 2.00001C21.75 1.76625 21.6367 1.54586 21.4435 1.40398C21.2503 1.26209 20.9993 1.21493 20.7648 1.27643L9.32477 4.27643C8.98542 4.36542 8.75 4.6618 8.75 5.00001V18.5L10.75 18.5V10.7955L19.75 8.34092V16L21.75 16V2.00001Z',
};

export const IconMusicNote03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-03-stroke-rounded IconMusicNote03StrokeRounded"
    >
      <circle 
        cx="6.5" 
        cy="18.5" 
        r="3.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="18" 
        cy="16" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconMusicNote03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-03-duotone-rounded IconMusicNote03DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="6.5" 
        cy="18.5" 
        r="3.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="6.5" 
        cy="18.5" 
        r="3.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        opacity="var(--icon-opacity)" 
        cx="18" 
        cy="16" 
        r="3" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="18" 
        cy="16" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconMusicNote03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-03-twotone-rounded IconMusicNote03TwotoneRounded"
    >
      <circle 
        cx="6.5" 
        cy="18.5" 
        r="3.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="18" 
        cy="16" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMusicNote03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-03-solid-rounded IconMusicNote03SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMusicNote03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-03-bulk-rounded IconMusicNote03BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMusicNote03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-03-stroke-sharp IconMusicNote03StrokeSharp"
    >
      <circle 
        cx="6.5" 
        cy="18.5" 
        r="3.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="18" 
        cy="16" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMusicNote03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-03-solid-sharp IconMusicNote03SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMusicNote03: TheIconSelfPack = {
  name: 'MusicNote03',
  StrokeRounded: IconMusicNote03StrokeRounded,
  DuotoneRounded: IconMusicNote03DuotoneRounded,
  TwotoneRounded: IconMusicNote03TwotoneRounded,
  SolidRounded: IconMusicNote03SolidRounded,
  BulkRounded: IconMusicNote03BulkRounded,
  StrokeSharp: IconMusicNote03StrokeSharp,
  SolidSharp: IconMusicNote03SolidSharp,
};