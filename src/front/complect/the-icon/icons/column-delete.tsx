import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.5 3.00024C6.90446 3.00024 7.60669 3.00024 8.11114 3.37944C8.32952 3.54359 8.51702 3.75453 8.66294 4.00021C9 4.56771 9 5.35772 9 6.93774L9 17.0627C9 18.6428 9 19.4328 8.66294 20.0003C8.51702 20.246 8.32952 20.4569 8.11114 20.6211C7.60669 21.0002 6.90446 21.0002 5.5 21.0002C4.09554 21.0002 3.39331 21.0002 2.88886 20.6211C2.67048 20.4569 2.48298 20.246 2.33706 20.0003C2 19.4328 2 18.6428 2 17.0627L2 6.93774C2 5.35772 2 4.56771 2.33706 4.00021C2.48298 3.75453 2.67048 3.54359 2.88886 3.37944C3.39331 3.00024 4.09554 3.00024 5.5 3.00024Z',
  d2: 'M20 11.9375L20 17.0625C20 18.6425 20 19.4325 19.6629 20C19.517 20.2457 19.3295 20.4566 19.1111 20.6208C18.6067 21 17.9045 21 16.5 21C15.0955 21 14.3933 21 13.8889 20.6208C13.6705 20.4566 13.483 20.2457 13.3371 20C13 19.4325 13 18.6425 13 17.0625L13 6.9375C13 5.35748 13 4.56747 13.3371 3.99997',
  d3: 'M22 8.99936L16 3M22 3.00064L16 9',
  d4: 'M16.5 3C17.9045 3 18.6067 3 19.1111 3.37919C19.3295 3.54335 19.517 3.75429 19.6629 3.99997C20 4.56747 20 5.35748 20 6.9375L20 17.0625C20 18.6425 20 19.4325 19.6629 20C19.517 20.2457 19.3295 20.4566 19.1111 20.6208C18.6067 21 17.9045 21 16.5 21C15.0955 21 14.3933 21 13.8889 20.6208C13.6705 20.4566 13.483 20.2457 13.3371 20C13 19.4325 13 18.6425 13 17.0625L13 6.9375C13 5.35748 13 4.56747 13.3371 3.99997C13.483 3.75429 13.6705 3.54335 13.8889 3.37919C14.3933 3 15.0955 3 16.5 3Z',
  d5: 'M5.5 3C6.90446 3 7.60669 3 8.11114 3.37919C8.32952 3.54335 8.51702 3.75429 8.66294 3.99997C9 4.56747 9 5.35748 9 6.9375L9 17.0625C9 18.6425 9 19.4325 8.66294 20C8.51702 20.2457 8.32952 20.4566 8.11114 20.6208C7.60669 21 6.90446 21 5.5 21C4.09554 21 3.39331 21 2.88886 20.6208C2.67048 20.4566 2.48298 20.2457 2.33706 20C2 19.4325 2 18.6425 2 17.0625L2 6.9375C2 5.35748 2 4.56747 2.33706 3.99997C2.48298 3.75429 2.67048 3.54335 2.88886 3.37919C3.39331 3 4.09554 3 5.5 3Z',
  d6: 'M1.125 7.02713C1.12499 6.26715 1.12498 5.64635 1.17018 5.14649C1.21686 4.63027 1.31682 4.16358 1.56722 3.74197C1.76079 3.41607 2.01302 3.13033 2.31321 2.90468C2.71312 2.60406 3.16241 2.48268 3.64665 2.42726C4.1037 2.37495 4.70876 2.37498 5.375 2.375C6.04124 2.37497 6.6463 2.37495 7.10335 2.42726C7.58759 2.48268 8.03688 2.60406 8.43679 2.90468C8.73698 3.13033 8.98921 3.41607 9.18278 3.74197C9.43318 4.16358 9.53314 4.63027 9.57982 5.14649C9.62502 5.64635 9.62501 6.26717 9.625 7.02717L9.625 7.02717L9.625 17.2228L9.625 17.2228C9.62501 17.9828 9.62502 18.6036 9.57982 19.1035C9.53314 19.6197 9.43318 20.0864 9.18278 20.508C8.98921 20.8339 8.73698 21.1197 8.43679 21.3453C8.03688 21.6459 7.58759 21.7673 7.10335 21.8227C6.6463 21.875 6.04125 21.875 5.375 21.875C4.70876 21.875 4.1037 21.875 3.64665 21.8227C3.16241 21.7673 2.71312 21.6459 2.31321 21.3453C2.01302 21.1197 1.76079 20.8339 1.56722 20.508C1.31682 20.0864 1.21686 19.6197 1.17018 19.1035C1.12498 18.6036 1.12499 17.9828 1.125 17.2228L1.125 17.2228L1.125 7.02718L1.125 7.02713Z',
  d7: 'M15.1679 2.41781C15.5584 2.02726 16.1915 2.02723 16.5821 2.41773L18.8753 4.71074L21.1679 2.41837C21.5585 2.02787 22.1916 2.02791 22.5821 2.41845C22.9726 2.809 22.9726 3.44216 22.5821 3.83266L20.2896 6.12488L22.5821 8.41709C22.9726 8.8076 22.9726 9.44076 22.5821 9.83131C22.1916 10.2219 21.5585 10.2219 21.1679 9.83138L18.8753 7.53902L16.5821 9.83202C16.1915 10.2225 15.5584 10.2225 15.1679 9.83195C14.7774 9.4414 14.7774 8.80824 15.1679 8.41773L17.461 6.12488L15.1679 3.83202C14.7774 3.44152 14.7774 2.80835 15.1679 2.41781Z',
  d8: 'M13.3819 3.31255C13.3666 3.10634 13.3589 3.00324 13.299 2.9808C13.2391 2.95836 13.1732 3.02355 13.0414 3.15393C12.8575 3.3358 12.6866 3.5425 12.5672 3.74346C12.3168 4.16506 12.2169 4.63176 12.1702 5.14798C12.125 5.64783 12.125 6.26863 12.125 7.02859V17.2243C12.125 17.9843 12.125 18.6051 12.1702 19.105C12.2169 19.6212 12.3168 20.0879 12.5672 20.5095C12.7608 20.8354 13.013 21.1211 13.3132 21.3468C13.7131 21.6474 14.1624 21.7688 14.6466 21.8242C15.1037 21.8765 15.7087 21.8765 16.3749 21.8765C17.0412 21.8765 17.6463 21.8765 18.1034 21.8242C18.5876 21.7688 19.0369 21.6474 19.4368 21.3468C19.737 21.1211 19.9892 20.8354 20.1828 20.5095C20.4332 20.0879 20.5331 19.6212 20.5798 19.105C20.625 18.6051 20.625 17.9843 20.625 17.2243L20.625 11.6376C20.625 11.4785 20.625 11.3989 20.5946 11.3367C20.5643 11.2744 20.4889 11.2155 20.3383 11.0978C20.2582 11.0353 20.181 10.9672 20.1073 10.8935L19.2996 10.0858C19.0996 9.88581 18.9996 9.78583 18.8753 9.78583C18.7511 9.78583 18.6511 9.88581 18.4511 10.0858L17.6427 10.8941C16.6663 11.8704 15.0834 11.8703 14.1071 10.8939C13.1309 9.91755 13.131 8.33464 14.1073 7.35838L14.9153 6.55053C15.1153 6.35052 15.2153 6.25052 15.2153 6.12624C15.2153 6.00197 15.1153 5.90197 14.9153 5.70196L14.1073 4.8941C13.6665 4.45337 13.4247 3.88896 13.3819 3.31255Z',
  d9: 'M2 21L2 3L9 3.01172L9 21H2Z',
  d10: 'M13 3L13 21H20L20 12.0059',
  d11: 'M1.47011 3.46923C1.61104 3.32854 1.80213 3.24967 2.00126 3.25L9.00126 3.26172C9.41498 3.26241 9.75 3.598 9.75 4.01172V22C9.75 22.4142 9.41421 22.75 9 22.75H2C1.80109 22.75 1.61032 22.671 1.46967 22.5303C1.32902 22.3897 1.25 22.1989 1.25 22V4C1.25 3.80087 1.32919 3.60991 1.47011 3.46923Z',
  d12: 'M20.4576 4.95714L22.7501 7.24936L21.3359 8.66365L19.0433 6.37128L16.7501 8.66429L15.3359 7.25L17.629 4.95714L15.3359 2.66429L16.7501 1.25L19.0433 3.54301L21.3359 1.25064L22.7501 2.66493L20.4576 4.95714Z',
  d13: 'M14.154 3.25193L13.0013 3.25C12.8021 3.24967 12.611 3.32854 12.4701 3.46923C12.3292 3.60992 12.25 3.80087 12.25 4V22C12.25 22.1989 12.329 22.3897 12.4697 22.5303C12.6103 22.671 12.8011 22.75 13 22.75H20C20.4142 22.75 20.75 22.4142 20.75 22V9.84721L19.0416 8.13896L16.7482 10.4321L13.5664 7.24991L15.8594 4.95714L14.154 3.25193Z',
};

export const IconColumnDeleteStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-delete-stroke-rounded IconColumnDeleteStrokeRounded"
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

export const IconColumnDeleteDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-delete-duotone-rounded IconColumnDeleteDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinecap="round" 
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

export const IconColumnDeleteTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-delete-twotone-rounded IconColumnDeleteTwotoneRounded"
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
      />
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

export const IconColumnDeleteSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-delete-solid-rounded IconColumnDeleteSolidRounded"
    >
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

export const IconColumnDeleteBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-delete-bulk-rounded IconColumnDeleteBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconColumnDeleteStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-delete-stroke-sharp IconColumnDeleteStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconColumnDeleteSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-delete-solid-sharp IconColumnDeleteSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfColumnDelete: TheIconSelfPack = {
  name: 'ColumnDelete',
  StrokeRounded: IconColumnDeleteStrokeRounded,
  DuotoneRounded: IconColumnDeleteDuotoneRounded,
  TwotoneRounded: IconColumnDeleteTwotoneRounded,
  SolidRounded: IconColumnDeleteSolidRounded,
  BulkRounded: IconColumnDeleteBulkRounded,
  StrokeSharp: IconColumnDeleteStrokeSharp,
  SolidSharp: IconColumnDeleteSolidSharp,
};