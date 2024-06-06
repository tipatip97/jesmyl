import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19Z',
  d2: 'M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z',
  d3: 'M19 16C18.8433 13.547 17.9687 13 15.0119 13H8.9881C6.03127 13 5.15669 13.547 5 16',
  d4: 'M12 10H12.5625C14.1425 10 14.9325 10 15.5 9.62549C15.7457 9.46336 15.9566 9.25502 16.1208 9.01238C16.5 8.45188 16.5 7.67163 16.5 6.11111C16.5 5.1748 16.5 4.70665 16.2725 4.37035C16.174 4.22476 16.0474 4.09976 15.9 4.00249C15.5595 3.77778 15.0855 3.77778 14.1375 3.77778H12.6425C12.5126 3.77778 12.4476 3.77778 12.3879 3.76912C12.1645 3.73672 11.9647 3.61544 11.8358 3.43402C11.8014 3.38555 11.7726 3.32861 11.715 3.21472C11.4788 2.74826 11.263 2.27872 10.7397 2.08489C10.5105 2 10.2486 2 9.72492 2C8.90751 2 8.4988 2 8.19213 2.16903C7.97352 2.28952 7.79314 2.46767 7.67114 2.68358C7.5 2.98647 7.5 3.39013 7.5 4.19745V5.55556C7.5 7.65069 7.5 8.69825 8.15901 9.34913C8.81802 10 9.87868 10 12 10Z',
  d5: 'M1.25 19.0002C1.25 16.9292 2.92893 15.2502 5 15.2502C7.07107 15.2502 8.75 16.9292 8.75 19.0002C8.75 21.0713 7.07107 22.7502 5 22.7502C2.92893 22.7502 1.25 21.0713 1.25 19.0002Z',
  d6: 'M15.25 19.0002C15.25 16.9292 16.9289 15.2502 19 15.2502C21.0711 15.2502 22.75 16.9292 22.75 19.0002C22.75 21.0713 21.0711 22.7502 19 22.7502C16.9289 22.7502 15.25 21.0713 15.25 19.0002Z',
  d7: 'M5.35472 12.7725C6.2564 12.1147 7.53141 12.0002 8.98813 12.0002H15.0119C16.4687 12.0002 17.7437 12.1147 18.6454 12.7725C19.6342 13.4938 19.9158 14.6489 19.998 15.9365C20.0332 16.4877 19.6149 16.963 19.0638 16.9982C18.5126 17.0334 18.0373 16.6152 18.0021 16.064C17.9276 14.8986 17.6936 14.5537 17.4667 14.3883C17.1527 14.1592 16.512 14.0002 15.0119 14.0002H8.98813C7.48802 14.0002 6.84733 14.1592 6.53334 14.3883C6.30651 14.5537 6.07244 14.8986 5.998 16.064C5.9628 16.6152 5.48745 17.0334 4.93629 16.9982C4.38513 16.963 3.96686 16.4877 4.00207 15.9365C4.08431 14.6489 4.36588 13.4938 5.35472 12.7725Z',
  d8: 'M11.0002 1.38178C11.7884 1.67371 12.1334 2.37046 12.338 2.78369C12.3751 2.86512 12.4881 3.02798 12.6425 3.02798L14.1728 3.02798C14.6166 3.02796 15.0042 3.02794 15.3216 3.05983C15.6594 3.09377 15.9996 3.16983 16.3131 3.37671C16.5423 3.52797 16.7397 3.72274 16.8937 3.9503C17.1051 4.26274 17.183 4.60262 17.2176 4.93909C17.25 5.25397 17.25 5.7132 17.25 6.15067C17.25 6.89744 17.25 7.515 17.1987 8.0138C17.145 8.53434 17.0292 9.0083 16.742 9.43284C16.5224 9.75745 16.2406 10.0356 15.9131 10.2517C15.4862 10.5335 15.0102 10.647 14.4859 10.6996C13.9823 10.7502 13.3583 10.7502 12.6012 10.7502H12.6011H11.9476H11.9476C10.9315 10.7502 10.0946 10.7503 9.43242 10.6623C8.73823 10.5701 8.12442 10.3693 7.63199 9.88294C7.13826 9.39532 6.93316 8.78533 6.83923 8.0953C6.74995 7.43944 6.74997 6.61125 6.75 5.60916V5.60914L6.75 4.19766C6.74998 3.82036 6.74997 3.45824 6.77436 3.18489C6.80033 2.89393 6.85841 2.59758 7.01817 2.31484C7.20905 1.97701 7.49054 1.69955 7.8301 1.5124C8.11323 1.35634 8.40965 1.29961 8.70195 1.27416C8.97747 1.25017 9.43647 1.25008 9.81926 1.2501C10.2477 1.2494 10.641 1.24875 11.0002 1.38178Z',
  d9: 'M8.98901 12C7.5323 12 6.25729 12.1145 5.3556 12.7722C4.51414 13.386 4.18483 14.314 4.05469 15.3704C4.35695 15.2918 4.67403 15.25 5.00088 15.25C5.37227 15.25 5.73105 15.304 6.0698 15.4045C6.1764 14.7547 6.35751 14.5169 6.53423 14.388C6.84821 14.159 7.48891 14 8.98901 14H15.0128C16.5129 14 17.1536 14.159 17.4676 14.388C17.6443 14.5169 17.8254 14.7547 17.932 15.4045C18.2708 15.304 18.6295 15.25 19.0009 15.25C19.3278 15.25 19.6449 15.2918 19.9472 15.3704C19.817 14.314 19.4877 13.386 18.6462 12.7722C17.7445 12.1145 16.4695 12 15.0128 12H8.98901Z',
  d10: 'M8 22V17H2V22H8Z',
  d11: 'M22 22V17H16V22H22Z',
  d12: 'M4.99487 16.893V13.0934C4.99487 13.0382 5.03964 12.9934 5.09487 12.9934H18.9104C18.9656 12.9934 19.0104 13.0382 19.0104 13.0934V16.893',
  d13: 'M10.5282 1.99683H7.60391C7.54868 1.99683 7.50391 2.0416 7.50391 2.09683V9.90648C7.50391 9.96171 7.54868 10.0065 7.6039 10.0065L16.4255 10.0068C16.4808 10.0068 16.5255 9.962 16.5255 9.90677V4.08351C16.5255 4.02828 16.4808 3.98351 16.4255 3.98351H12.506L10.5282 1.99683Z',
  d14: 'M1.25 19C1.25 16.9289 2.92893 15.25 5 15.25C7.07107 15.25 8.75 16.9289 8.75 19C8.75 21.0711 7.07107 22.75 5 22.75C2.92893 22.75 1.25 21.0711 1.25 19Z',
  d15: 'M15.25 19C15.25 16.9289 16.9289 15.25 19 15.25C21.0711 15.25 22.75 16.9289 22.75 19C22.75 21.0711 21.0711 22.75 19 22.75C16.9289 22.75 15.25 21.0711 15.25 19Z',
  d16: 'M4.00138 12.9995C4.00163 12.4474 4.44927 12 5.00138 12H19C19.5523 12 20 12.4477 20 13L20 16L18 16L18 14H6.00092L6 16.0005L4 15.9995L4.00138 12.9995Z',
  d17: 'M6.75 2C6.75 1.58579 7.08579 1.25 7.5 1.25H10.8107L12.8107 3.25H16.5C16.9142 3.25 17.25 3.58579 17.25 4V10C17.25 10.4142 16.9142 10.75 16.5 10.75H7.5C7.08579 10.75 6.75 10.4142 6.75 10V2Z',
};

export const IconStructureFolderCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-circle-stroke-rounded IconStructureFolderCircleStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFolderCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-circle-duotone-rounded IconStructureFolderCircleDuotoneRounded"
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
        d={d.d4} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFolderCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-circle-twotone-rounded IconStructureFolderCircleTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconStructureFolderCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-circle-solid-rounded IconStructureFolderCircleSolidRounded"
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

export const IconStructureFolderCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-circle-bulk-rounded IconStructureFolderCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFolderCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-circle-stroke-sharp IconStructureFolderCircleStrokeSharp"
    >
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
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFolderCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-circle-solid-sharp IconStructureFolderCircleSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStructureFolderCircle: TheIconSelfPack = {
  name: 'StructureFolderCircle',
  StrokeRounded: IconStructureFolderCircleStrokeRounded,
  DuotoneRounded: IconStructureFolderCircleDuotoneRounded,
  TwotoneRounded: IconStructureFolderCircleTwotoneRounded,
  SolidRounded: IconStructureFolderCircleSolidRounded,
  BulkRounded: IconStructureFolderCircleBulkRounded,
  StrokeSharp: IconStructureFolderCircleStrokeSharp,
  SolidSharp: IconStructureFolderCircleSolidSharp,
};