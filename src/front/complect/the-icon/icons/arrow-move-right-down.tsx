import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 5H19.0667C12.907 5 9.82714 5 7.91357 7.12067C6 9.24133 6 12.6545 6 19.4808V21',
  d2: 'M18 2C18.6068 2.58984 21 4.15973 21 5C21 5.84027 18.6068 7.41016 18 8',
  d3: 'M9 19C8.41016 19.6068 6.84027 22 6 22C5.15973 22 3.58984 19.6068 3 19',
  d4: 'M20 5H19.0667C12.907 5 9.82714 5 7.91357 7.12067C6 9.24133 6 12.6545 6 19.4808V21M18 2C18.6068 2.58984 21 4.15973 21 5C21 5.84027 18.6068 7.41016 18 8M9 19C8.41016 19.6068 6.84027 22 6 22C5.15973 22 3.58984 19.6068 3 19',
  d5: 'M18.983 4L20 4C20.5523 4 21 4.44772 21 5C21 5.55229 20.5523 6 20 6H19.0667C15.9556 6 13.7336 6.0026 12.0452 6.25417C10.397 6.49974 9.40176 6.96412 8.656 7.79059C7.89697 8.63176 7.45978 9.77831 7.23192 11.6566C7.00174 13.5539 7 16.0421 7 19.4808V21C7 21.5523 6.55229 22 6 22C5.44772 22 5 21.5523 5 21L5 19.4107C4.99999 16.0569 4.99998 13.4475 5.24648 11.4157C5.49701 9.3506 6.0166 7.73023 7.17114 6.45074C8.33895 5.15654 9.84043 4.56059 11.7505 4.276C13.6031 3.99996 15.9741 3.99998 18.983 4Z',
  d6: 'M17.2829 1.30301C17.6679 0.906978 18.301 0.897982 18.697 1.28292C18.8018 1.3848 19.087 1.61236 19.4145 1.86959L19.4145 1.8696C19.7049 2.09752 20.0472 2.3662 20.374 2.64315C20.724 2.93969 21.091 3.27451 21.3779 3.61131C21.5217 3.78012 21.6656 3.97285 21.7777 4.1822C21.8855 4.38363 22 4.66729 22 5C22 5.33271 21.8855 5.61638 21.7777 5.8178C21.6656 6.02715 21.5217 6.21989 21.3779 6.3887C21.091 6.72549 20.724 7.06032 20.374 7.35685C20.0472 7.63381 19.7049 7.90251 19.4145 8.13043C19.087 8.38766 18.8018 8.6152 18.697 8.71708C18.301 9.10202 17.6679 9.09302 17.2829 8.69699C17.094 8.50264 17 8.25119 17 8V2C17 1.74881 17.094 1.49736 17.2829 1.30301Z',
  d7: 'M9.69699 18.2829C10.093 18.6679 10.102 19.301 9.71708 19.697C9.6152 19.8018 9.38764 20.087 9.13041 20.4145C8.90249 20.7049 8.63381 21.0472 8.35685 21.374C8.06032 21.724 7.72549 22.091 7.3887 22.3779C7.21989 22.5217 7.02715 22.6656 6.8178 22.7777C6.61638 22.8855 6.33271 23 6 23C5.66729 23 5.38363 22.8855 5.1822 22.7777C4.97285 22.6656 4.78012 22.5217 4.61131 22.3779C4.27451 22.091 3.93969 21.724 3.64315 21.374C3.3662 21.0472 3.09751 20.7049 2.86959 20.4145L2.86959 20.4145C2.61236 20.087 2.3848 19.8018 2.28292 19.697C1.89798 19.301 1.90698 18.6679 2.30301 18.2829C2.5032 18.0883 2.76397 17.9944 3.02265 18.0003H9.02282C9.26637 18.0058 9.50852 18.0997 9.69699 18.2829Z',
  d8: 'M10.9936 16.9823L6.97164 21L3 17.0204M16.9949 3L21 6.98672L17.0087 10.9776M20.6718 6.98729L7.09102 7.01077C7.03566 7.01077 6.97164 7.05574 6.97164 7.11122L6.97164 20.6719',
  d9: 'M18.1716 5.70724L15.8786 3.41419L17.2928 2L21.9999 6.70723L17.2928 11.4143L15.8786 10.0001L18.1715 7.70724L7.70711 7.70734L7.7071 18.1716L10 15.8788L11.4142 17.293L6.7071 22L2 17.293L3.41419 15.8788L5.7071 18.1716L5.7071 6.70735C5.7071 6.15507 6.15481 5.70735 6.7071 5.70735L18.1716 5.70724Z',
};

export const IconArrowMoveRightDownStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-right-down-stroke-rounded IconArrowMoveRightDownStrokeRounded"
    >
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

export const IconArrowMoveRightDownDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-right-down-duotone-rounded IconArrowMoveRightDownDuotoneRounded"
    >
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

export const IconArrowMoveRightDownTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-right-down-twotone-rounded IconArrowMoveRightDownTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconArrowMoveRightDownSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-right-down-solid-rounded IconArrowMoveRightDownSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconArrowMoveRightDownBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-right-down-bulk-rounded IconArrowMoveRightDownBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconArrowMoveRightDownStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-right-down-stroke-sharp IconArrowMoveRightDownStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowMoveRightDownSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-right-down-solid-sharp IconArrowMoveRightDownSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowMoveRightDown: TheIconSelfPack = {
  name: 'ArrowMoveRightDown',
  StrokeRounded: IconArrowMoveRightDownStrokeRounded,
  DuotoneRounded: IconArrowMoveRightDownDuotoneRounded,
  TwotoneRounded: IconArrowMoveRightDownTwotoneRounded,
  SolidRounded: IconArrowMoveRightDownSolidRounded,
  BulkRounded: IconArrowMoveRightDownBulkRounded,
  StrokeSharp: IconArrowMoveRightDownStrokeSharp,
  SolidSharp: IconArrowMoveRightDownSolidSharp,
};