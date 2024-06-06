import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 9.5C7 10.8807 5.88071 12 4.5 12C3.11929 12 2 10.8807 2 9.5C2 8.11929 3.11929 7 4.5 7C5.88071 7 7 8.11929 7 9.5ZM7 9.5V2C7.33333 2.5 7.6 4.6 10 5',
  d2: 'M13 19.5L13 11C13 10.09 13 9.63502 13.2466 9.35248C13.4932 9.06993 13.9938 9.00163 14.9949 8.86504C18.0085 8.45385 20.2013 7.19797 21.3696 6.42937C21.6498 6.24509 21.7898 6.15295 21.8949 6.20961C22 6.26627 22 6.43179 22 6.76283V17.9259',
  d3: 'M13 13C17.8 13 21 10.6667 22 10',
  d4: 'M7 9.5C7 10.8807 5.88071 12 4.5 12C3.11929 12 2 10.8807 2 9.5C2 8.11929 3.11929 7 4.5 7C5.88071 7 7 8.11929 7 9.5Z',
  d5: 'M6.71022 1.04299C7.13197 0.915287 7.58761 1.07872 7.83205 1.44538C7.93278 1.59647 8.00471 1.76386 8.0502 1.87381C8.07823 1.94156 8.1132 2.03071 8.14594 2.11419L8.14595 2.1142C8.16553 2.16413 8.18432 2.21204 8.20035 2.25212C8.30223 2.50681 8.41415 2.75946 8.56707 2.99821C8.85068 3.44099 9.29042 3.86802 10.1644 4.01368C10.7092 4.10448 11.0772 4.61971 10.9864 5.16448C10.8956 5.70925 10.3804 6.07727 9.8356 5.98647C9.0795 5.86046 8.47866 5.59485 8 5.25768V9.50008C8 11.4331 6.433 13.0001 4.5 13.0001C2.567 13.0001 1 11.4331 1 9.50008C1 7.56708 2.567 6.00008 4.5 6.00008C5.0368 6.00008 5.54537 6.12092 6 6.33689V2.00008C6 1.55941 6.28846 1.17068 6.71022 1.04299Z',
  d6: 'M23 6.76182V9.98347C23.0001 9.99321 23.0001 10.0029 23 10.0127V17.9249C23 17.934 22.9999 17.943 22.9996 17.952C22.9999 17.9676 23 17.9833 23 17.999C23 19.6558 21.6569 20.999 20 20.999C18.3431 20.999 17 19.6558 17 17.999C17 16.3421 18.3431 14.999 20 14.999C20.3506 14.999 20.6872 15.0591 21 15.1697V11.8205C19.4846 12.6912 17.0912 13.7695 14 13.9671V19.499C14 21.432 12.433 22.999 10.5 22.999C8.567 22.999 7 21.432 7 19.499C7 17.566 8.567 15.999 10.5 15.999C11.0368 15.999 11.5454 16.1198 12 16.3358V10.999L12 10.9497C11.9999 10.5374 11.9999 10.1453 12.0376 9.82344C12.0788 9.47243 12.1785 9.05447 12.4932 8.69389C12.8204 8.31909 13.2518 8.16775 13.5979 8.08222C13.9317 7.99974 14.3525 7.94236 14.8115 7.87979L14.8597 7.8732C17.6671 7.49016 19.7158 6.31939 20.8201 5.59292L20.8477 5.57469C20.96 5.50056 21.122 5.39366 21.2735 5.32268C21.4327 5.24804 21.8826 5.0659 22.3695 5.32837C22.8529 5.58902 22.9503 6.05981 22.9763 6.23764C23.0005 6.40299 23.0002 6.59642 23 6.72899L23 6.76182Z',
  d7: 'M8 9.5C8 10.8807 6.88071 12 5.5 12C4.11929 12 3 10.8807 3 9.5C3 8.11929 4.11929 7 5.5 7C6.88071 7 8 8.11929 8 9.5ZM8 9.5V2C8.33333 2.5 9 5 11 5',
  d8: 'M12 19.5L12 9L21 6V17.9259',
  d9: 'M12 14L21 11',
  d10: 'M21.4237 5.39832C21.6286 5.54599 21.75 5.78316 21.75 6.03572V16.5295L21.75 18C21.75 19.5188 20.5188 20.75 19 20.75C17.4812 20.75 16.25 19.5188 16.25 18C16.25 16.4812 17.4812 15.25 19 15.25C19.26 15.25 19.5116 15.2861 19.75 15.3535V11.4164L12.75 13.7498V19.5C12.75 21.2949 11.2949 22.75 9.5 22.75C7.70507 22.75 6.25 21.2949 6.25 19.5C6.25 17.7051 7.70507 16.25 9.5 16.25C9.94295 16.25 10.3652 16.3386 10.75 16.4991V9.17858C10.75 8.84038 10.9664 8.54013 11.2872 8.43318L20.7158 5.29033C20.9554 5.21046 21.2188 5.25064 21.4237 5.39832Z',
  d11: 'M7.5361 1.29046C7.93304 1.17027 8.36187 1.32409 8.59193 1.66918C8.67628 1.7957 8.74757 1.94575 8.79644 2.05084C8.81748 2.09608 8.85239 2.17311 8.8874 2.25034L8.8875 2.25056L8.88762 2.25081C8.9191 2.32026 8.95064 2.38983 8.9722 2.43654C9.09815 2.70944 9.24065 2.9952 9.41545 3.2574C9.7729 3.79357 10.1519 4.07358 10.6323 4.07358V5.95591C9.85011 5.95591 9.23168 5.67684 8.75 5.29846V9.49981C8.75 11.2947 7.29493 12.7498 5.5 12.7498C3.70507 12.7498 2.25 11.2947 2.25 9.49981C2.25 7.70489 3.70507 6.24981 5.5 6.24981C5.98856 6.24981 6.45195 6.35762 6.86766 6.55074V2.19124C6.86766 1.7765 7.13915 1.41064 7.5361 1.29046Z',
};

export const IconMusicNote01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-01-stroke-rounded IconMusicNote01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="10.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="20" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconMusicNote01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-01-duotone-rounded IconMusicNote01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="10.5" 
        cy="19.5" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="10.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        opacity="var(--icon-opacity)" 
        cx="20" 
        cy="18" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="20" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconMusicNote01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-01-twotone-rounded IconMusicNote01TwotoneRounded"
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
        cx="10.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="20" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconMusicNote01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-01-solid-rounded IconMusicNote01SolidRounded"
    >
      <path 
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

export const IconMusicNote01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-01-bulk-rounded IconMusicNote01BulkRounded"
    >
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

export const IconMusicNote01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-01-stroke-sharp IconMusicNote01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="9.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="19" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMusicNote01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-01-solid-sharp IconMusicNote01SolidSharp"
    >
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

export const iconPackOfMusicNote01: TheIconSelfPack = {
  name: 'MusicNote01',
  StrokeRounded: IconMusicNote01StrokeRounded,
  DuotoneRounded: IconMusicNote01DuotoneRounded,
  TwotoneRounded: IconMusicNote01TwotoneRounded,
  SolidRounded: IconMusicNote01SolidRounded,
  BulkRounded: IconMusicNote01BulkRounded,
  StrokeSharp: IconMusicNote01StrokeSharp,
  SolidSharp: IconMusicNote01SolidSharp,
};