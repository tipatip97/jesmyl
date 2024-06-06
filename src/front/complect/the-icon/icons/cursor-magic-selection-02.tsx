import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.02968 3.5V2M5 5L4 4M3.5 9.02975H2M5 13L4 14M14 4L13 5',
  d2: 'M8.33325 8.40742C9.93815 6.67911 22.01 10.9129 22 12.4586C21.9887 14.2115 17.2856 14.7507 15.982 15.1165C15.1981 15.3364 14.9882 15.5618 14.8074 16.3838C13.9888 20.1067 13.5778 21.9583 12.6411 21.9997C11.148 22.0657 6.76701 10.0941 8.33325 8.40742Z',
  d3: 'M9.15468 1.125C9.70697 1.125 10.1547 1.57272 10.1547 2.125V3.625C10.1547 4.17728 9.70697 4.625 9.15468 4.625C8.6024 4.625 8.15468 4.17728 8.15468 3.625V2.125C8.15468 1.57272 8.6024 1.125 9.15468 1.125ZM3.41789 3.41789C3.80842 3.02737 4.44158 3.02737 4.83211 3.41789L5.83211 4.41789C6.22263 4.80842 6.22263 5.44158 5.83211 5.83211C5.44158 6.22263 4.80842 6.22263 4.41789 5.83211L3.41789 4.83211C3.02737 4.44158 3.02737 3.80842 3.41789 3.41789ZM14.8321 3.41789C15.2226 3.80842 15.2226 4.44158 14.8321 4.83211L13.8321 5.83211C13.4416 6.22263 12.8084 6.22263 12.4179 5.83211C12.0274 5.44158 12.0274 4.80842 12.4179 4.41789L13.4179 3.41789C13.8084 3.02737 14.4416 3.02737 14.8321 3.41789ZM1.125 9.15475C1.125 8.60246 1.57272 8.15475 2.125 8.15475H3.625C4.17728 8.15475 4.625 8.60246 4.625 9.15475C4.625 9.70703 4.17728 10.1547 3.625 10.1547H2.125C1.57272 10.1547 1.125 9.70703 1.125 9.15475ZM5.83211 12.4179C6.22263 12.8084 6.22263 13.4416 5.83211 13.8321L4.83211 14.8321C4.44158 15.2226 3.80842 15.2226 3.41789 14.8321C3.02737 14.4416 3.02737 13.8084 3.41789 13.4179L4.41789 12.4179C4.80842 12.0274 5.44158 12.0274 5.83211 12.4179Z',
  d4: 'M22.5867 11.809C22.7202 11.9837 22.8771 12.2526 22.875 12.5885C22.8697 13.404 22.3134 13.9616 21.7738 14.3146C21.2195 14.6771 20.5073 14.945 19.8149 15.1514C19.1126 15.3609 18.3761 15.5226 17.7479 15.6528C17.3101 15.742 16.5326 15.901 16.3096 15.9636C15.9419 16.0667 15.8675 16.1334 15.8434 16.1594C15.8158 16.1891 15.751 16.2783 15.6649 16.6699L15.6616 16.685L15.6616 16.6851C15.2584 18.5187 14.9415 19.9598 14.6025 20.942C14.4331 21.4327 14.2367 21.8762 13.9787 22.211C13.7067 22.5641 13.3197 22.851 12.7992 22.874C12.4564 22.8891 12.1811 22.7327 12.0072 22.6036C11.8219 22.4659 11.6532 22.2857 11.5025 22.0975C11.1992 21.7186 10.8858 21.2013 10.5783 20.6137C9.95921 19.4306 9.30628 17.8498 8.75479 16.2272C8.2036 14.6055 7.74246 12.909 7.51973 11.4936C7.40874 10.7884 7.35226 10.1245 7.38357 9.56176C7.41277 9.03706 7.52496 8.43525 7.90865 8.02206C8.30445 7.59583 8.90729 7.45116 9.43472 7.40033C9.99767 7.34607 10.6634 7.38264 11.3697 7.47527C12.7875 7.66125 14.4935 8.0905 16.127 8.61631C17.7619 9.14257 19.359 9.7768 20.5593 10.3869C21.1557 10.69 21.6815 11.0009 22.069 11.3045C22.2617 11.4554 22.4452 11.6239 22.5867 11.809Z',
  d5: 'M9.02968 4V2M5.5 5.5L4 4M4 9.02975H2M5.5 12.5L4 14M14 4L12.5 5.5',
  d6: 'M22 12.6667L8 8L12.6667 22L15 15L22 12.6667Z',
  d7: 'M9.77871 1.75V3.75H7.77871V1.75H9.77871ZM4.45613 3.04289L5.95613 4.54289L4.54192 5.95711L3.04192 4.45711L4.45613 3.04289ZM11.5419 4.54289L13.0419 3.04289L14.4561 4.45711L12.9561 5.95711L11.5419 4.54289ZM1.74902 7.77975H3.74902V9.77975H1.74902V7.77975ZM3.04192 13.0429L4.54192 11.5429L5.95613 12.9571L4.45613 14.4571L3.04192 13.0429Z',
  d8: 'M6.96969 6.96969C7.17056 6.76882 7.46769 6.69867 7.73719 6.78851L21.7372 11.4552C22.0434 11.5573 22.25 11.8439 22.25 12.1667C22.25 12.4895 22.0434 12.7761 21.7372 12.8782L15.0929 15.0929L12.8782 21.7372C12.7761 22.0434 12.4895 22.25 12.1667 22.25C11.8439 22.25 11.5573 22.0434 11.4552 21.7372L6.78851 7.73719C6.69867 7.46769 6.76882 7.17056 6.96969 6.96969Z',
};

export const IconCursorMagicSelection02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-02-stroke-rounded IconCursorMagicSelection02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorMagicSelection02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-02-duotone-rounded IconCursorMagicSelection02DuotoneRounded"
    >
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
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMagicSelection02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-02-twotone-rounded IconCursorMagicSelection02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorMagicSelection02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-02-solid-rounded IconCursorMagicSelection02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMagicSelection02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-02-bulk-rounded IconCursorMagicSelection02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMagicSelection02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-02-stroke-sharp IconCursorMagicSelection02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMagicSelection02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-magic-selection-02-solid-sharp IconCursorMagicSelection02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCursorMagicSelection02: TheIconSelfPack = {
  name: 'CursorMagicSelection02',
  StrokeRounded: IconCursorMagicSelection02StrokeRounded,
  DuotoneRounded: IconCursorMagicSelection02DuotoneRounded,
  TwotoneRounded: IconCursorMagicSelection02TwotoneRounded,
  SolidRounded: IconCursorMagicSelection02SolidRounded,
  BulkRounded: IconCursorMagicSelection02BulkRounded,
  StrokeSharp: IconCursorMagicSelection02StrokeSharp,
  SolidSharp: IconCursorMagicSelection02SolidSharp,
};