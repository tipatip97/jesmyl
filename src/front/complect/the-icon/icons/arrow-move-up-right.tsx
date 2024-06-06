import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 21V18.9231C4 16.9221 4 15.9217 4.14533 15.0846C4.94529 10.4765 8.90656 6.86243 13.9574 6.13259C14.8749 6 16.8068 6 19 6',
  d2: 'M17 3C17.6068 3.58984 20 5.15973 20 6C20 6.84027 17.6068 8.41016 17 9',
  d3: 'M4 21V18.9231C4 16.9221 4 15.9217 4.14533 15.0846C4.94529 10.4765 8.90656 6.86243 13.9574 6.13259C14.8749 6 16.8068 6 19 6M17 3C17.6068 3.58984 20 5.15973 20 6C20 6.84027 17.6068 8.41016 17 9',
  d4: 'M4 22C3.44772 22 3 21.5523 3 21L3 18.7957C2.99992 16.9155 2.99987 15.8363 3.16006 14.9135C4.04276 9.82886 8.38788 5.927 13.8143 5.14287C14.3224 5.06946 15.0896 5.03375 16 5.01639C16.0004 4.50287 16.0046 4.02991 16.0439 3.66125C16.0794 3.3298 16.1883 2.49957 16.8757 2.13765C17.5581 1.77835 18.1697 2.21463 18.4141 2.402C18.7116 2.63002 19.0641 2.98013 19.4407 3.35427L19.4865 3.39974C19.816 3.72699 20.1576 4.0945 20.4241 4.46605C20.5578 4.65253 20.6916 4.86598 20.7957 5.09883C20.8964 5.32435 21 5.63611 21 6C21 6.36389 20.8964 6.67565 20.7957 6.90117C20.6916 7.13402 20.5578 7.34747 20.4241 7.53395C20.1576 7.90549 19.816 8.27301 19.4865 8.60026L19.4407 8.64572C19.0641 9.01987 18.7116 9.36998 18.4141 9.598C18.1697 9.78537 17.5581 10.2217 16.8757 9.86235C16.1883 9.50044 16.0794 8.6702 16.0439 8.33875C16.0054 7.97803 16.0006 7.51747 16.0001 7.01675C15.1677 7.03252 14.5102 7.06308 14.1004 7.12231C9.42524 7.79787 5.84782 11.1241 5.13059 15.2556C5.00371 15.9865 5 16.8804 5 18.9231V21C5 21.5523 4.55228 22 4 22Z',
  d5: 'M3.99994 22C3.44766 22 2.99994 21.5523 2.99994 21L2.99994 18.7957C2.99986 16.9155 2.99981 15.8363 3.16 14.9135C4.04271 9.82886 8.38782 5.927 13.8143 5.14287C14.3223 5.06946 15.0896 5.03375 16 5.01639L16 7.01675C15.1677 7.03252 14.5102 7.06308 14.1003 7.12231C9.42518 7.79787 5.84777 11.1241 5.13053 15.2556C5.00365 15.9865 4.99994 16.8804 4.99994 18.9231V21C4.99994 21.5523 4.55223 22 3.99994 22Z',
  d6: 'M18.4141 9.598C18.1697 9.78537 17.5581 10.2217 16.8757 9.86235C16.1883 9.50044 16.0794 8.6702 16.0439 8.33875C16.0054 7.97803 16.0006 7.51747 16.0001 7.01675C16.0004 6.50323 16.0046 4.02991 16.0439 3.66125C16.0794 3.3298 16.1883 2.49956 16.8757 2.13765C17.5581 1.77835 18.1697 2.21463 18.4141 2.402C18.7116 2.63002 19.0641 2.98013 19.4407 3.35427L19.4865 3.39974C19.816 3.72699 20.1576 4.0945 20.4241 4.46605C20.5578 4.65253 20.6916 4.86598 20.7957 5.09883C20.8964 5.32435 21 5.63611 21 6C21 6.36389 20.8964 6.67565 20.7957 6.90117C20.6916 7.13402 20.5578 7.34747 20.4241 7.53395C20.1576 7.90549 19.816 8.27301 19.4865 8.60026L19.4407 8.64572C19.0641 9.01987 18.7116 9.36998 18.4141 9.598Z',
  d7: 'M15.0173 10.941L19 6.97047L15.0173 3M5 21V7.08982C5 7.03447 5.04501 6.97047 5.10053 6.97047H18.7136',
  d8: 'M16.1717 6.70724L13.8787 4.41419L15.2929 3L20 7.70723L15.2929 12.4143L13.8787 11.0001L16.1716 8.70724L6 8.70736L6.00014 21.0001H4.00014L4 7.70737C4 7.15508 4.44771 6.70737 4.99999 6.70737L16.1717 6.70724Z',
};

export const IconArrowMoveUpRightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-up-right-stroke-rounded IconArrowMoveUpRightStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowMoveUpRightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-up-right-duotone-rounded IconArrowMoveUpRightDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowMoveUpRightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-up-right-twotone-rounded IconArrowMoveUpRightTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowMoveUpRightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-up-right-solid-rounded IconArrowMoveUpRightSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowMoveUpRightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-up-right-bulk-rounded IconArrowMoveUpRightBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowMoveUpRightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-up-right-stroke-sharp IconArrowMoveUpRightStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowMoveUpRightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-up-right-solid-sharp IconArrowMoveUpRightSolidSharp"
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

export const iconPackOfArrowMoveUpRight: TheIconSelfPack = {
  name: 'ArrowMoveUpRight',
  StrokeRounded: IconArrowMoveUpRightStrokeRounded,
  DuotoneRounded: IconArrowMoveUpRightDuotoneRounded,
  TwotoneRounded: IconArrowMoveUpRightTwotoneRounded,
  SolidRounded: IconArrowMoveUpRightSolidRounded,
  BulkRounded: IconArrowMoveUpRightBulkRounded,
  StrokeSharp: IconArrowMoveUpRightStrokeSharp,
  SolidSharp: IconArrowMoveUpRightSolidSharp,
};