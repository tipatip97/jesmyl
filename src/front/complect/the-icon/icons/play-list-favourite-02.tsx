import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.5 12.5V11.05C21.5 7.01949 21.5 5.00424 20.2479 3.75212C18.9958 2.5 16.9805 2.5 12.95 2.5H11.05C7.01949 2.5 5.00424 2.5 3.75212 3.75212C2.5 5.00424 2.5 7.01949 2.5 11.05V12.95C2.5 16.9805 2.5 18.9958 3.75212 20.2479C5.00424 21.5 7.01949 21.5 11.05 21.5H12.5',
  d2: 'M15.4515 15.859C16.4572 15.265 17.3349 15.5044 17.8621 15.8857C18.0783 16.042 18.1864 16.1202 18.25 16.1202C18.3136 16.1202 18.4217 16.042 18.6379 15.8857C19.1651 15.5044 20.0428 15.265 21.0485 15.859C22.3682 16.6386 22.6669 19.2104 19.6227 21.3801C19.0429 21.7934 18.7529 22 18.25 22C17.7471 22 17.4571 21.7934 16.8773 21.3801C13.8331 19.2104 14.1318 16.6386 15.4515 15.859Z',
  d3: 'M14.9609 11.782C14.8347 12.2297 14.2381 12.546 13.0449 13.1787C11.8914 13.7903 11.3147 14.0961 10.8499 13.9732C10.6578 13.9224 10.4827 13.8259 10.3415 13.6929C10 13.3713 10 12.7475 10 11.5C10 10.2525 10 9.6287 10.3415 9.30711C10.4827 9.17415 10.6578 9.07763 10.8499 9.02681C11.3147 8.90388 11.8914 9.20969 13.0449 9.82131C14.2381 10.454 14.8347 10.7703 14.9609 11.218C15.013 11.4028 15.013 11.5972 14.9609 11.782Z',
  d4: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 13.6763 21.5 15.0388 21.427 16.1606C21.3138 16.0421 21.1868 15.9407 21.0485 15.859C20.0428 15.265 19.1651 15.5044 18.6379 15.8857C18.4217 16.042 18.3136 16.1202 18.25 16.1202C18.1864 16.1202 18.0783 16.042 17.8621 15.8857C17.3349 15.5044 16.4572 15.265 15.4515 15.859C14.1342 16.6371 13.8342 19.2009 16.8606 21.3682C15.6179 21.5 14.0417 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12ZM13.0449 13.1787C14.2381 12.546 14.8347 12.2297 14.9609 11.782C15.013 11.5972 15.013 11.4028 14.9609 11.218C14.8347 10.7703 14.2381 10.454 13.0449 9.82131C11.8914 9.20969 11.3147 8.90388 10.8499 9.02681C10.6578 9.07763 10.4827 9.17415 10.3415 9.30711C10 9.6287 10 10.2525 10 11.5C10 12.7475 10 13.3713 10.3415 13.6929C10.4827 13.8259 10.6578 13.9224 10.8499 13.9732C11.3147 14.0961 11.8914 13.7903 13.0449 13.1787Z',
  d5: 'M10.9763 1.5H13.0237C14.9764 1.49997 16.5433 1.49995 17.7741 1.66543C19.0491 1.83686 20.1122 2.20218 20.955 3.04501C21.7978 3.88784 22.1631 4.95089 22.3346 6.22592C22.5 7.45673 22.5 9.02362 22.5 10.9763V12.5C22.5 13.0523 22.0523 13.5 21.5 13.5C20.9477 13.5 20.5 13.0523 20.5 12.5V11.05C20.5 9.00648 20.4979 7.57443 20.3524 6.49241C20.2108 5.43916 19.9501 4.86852 19.5408 4.45923C19.1315 4.04994 18.5608 3.78921 17.5076 3.6476C16.4256 3.50213 14.9935 3.5 12.95 3.5H11.05C9.00648 3.5 7.57443 3.50213 6.49241 3.6476C5.43916 3.78921 4.86852 4.04994 4.45923 4.45923C4.04994 4.86852 3.78921 5.43916 3.6476 6.49241C3.50213 7.57443 3.5 9.00648 3.5 11.05V12.95C3.5 14.9935 3.50213 16.4256 3.6476 17.5076C3.78921 18.5608 4.04994 19.1315 4.45923 19.5408C4.86852 19.9501 5.43916 20.2108 6.49241 20.3524C7.57443 20.4979 9.00648 20.5 11.05 20.5H12.5C13.0523 20.5 13.5 20.9477 13.5 21.5C13.5 22.0523 13.0523 22.5 12.5 22.5H10.9763C9.02362 22.5 7.45673 22.5 6.22592 22.3346C4.95089 22.1631 3.88784 21.7978 3.04501 20.955C2.20218 20.1122 1.83686 19.0491 1.66543 17.7741C1.49995 16.5433 1.49997 14.9764 1.5 13.0237V10.9763C1.49997 9.02364 1.49995 7.45674 1.66543 6.22592C1.83686 4.95089 2.20218 3.88784 3.04501 3.04501C3.88784 2.20218 4.95089 1.83686 6.22592 1.66543C7.45674 1.49995 9.02364 1.49997 10.9763 1.5Z',
  d6: 'M15.0697 15.2135C16.3368 14.4651 17.5111 14.7336 18.2496 15.2418C18.9882 14.7336 20.1625 14.4651 21.4295 15.2135C22.3921 15.7821 22.89 16.9421 22.7145 18.202C22.5379 19.4703 21.6988 20.8214 20.0576 21.9911C19.5107 22.381 19.0296 22.7503 18.2496 22.7503C17.4697 22.7503 16.9886 22.381 16.4417 21.9911C14.8005 20.8214 13.9614 19.4703 13.7848 18.202C13.6093 16.9421 14.1072 15.7821 15.0697 15.2135Z',
  d7: 'M15.0042 9.85162C15.38 10.1078 15.779 10.451 15.9274 10.9771C16.0239 11.3195 16.0239 11.6805 15.9274 12.0229C15.779 12.549 15.38 12.8922 15.0042 13.1484C14.5045 13.489 13.9578 13.7601 13.4244 14.0429C12.838 14.3539 12.3393 14.6183 11.9246 14.783C11.5005 14.9513 11.0198 15.0774 10.5163 14.9443C10.1827 14.856 9.87397 14.6873 9.62153 14.4496C9.23055 14.0814 9.10531 13.5948 9.05162 13.1519C8.98337 12.5891 8.99978 12.0165 8.99977 11.4506C8.99977 11.4506 8.9997 10.2762 9.05162 9.84807C9.10531 9.40524 9.23055 8.9186 9.62153 8.55042C9.87397 8.31271 10.1827 8.14396 10.5163 8.05574C11.0198 7.92255 11.5005 8.04871 11.9246 8.21705C12.3393 8.38168 12.838 8.64612 13.4244 8.95711L13.4244 8.95711C13.9578 9.23991 14.5045 9.51098 15.0042 9.85162Z',
  d8: 'M20 12V2H2V20H11',
  d9: 'M9 14.5V7.5L14.5 11L9 14.5Z',
  d10: 'M20.7431 15.2896C19.1465 14.457 18 15.6843 18 15.6843C18 15.6843 16.8535 14.457 15.2568 15.2896C13.323 16.298 13.1841 20.2469 18 22C22.816 20.2469 22.677 16.298 20.7431 15.2896Z',
  d11: 'M1.25 2.225C1.25 1.68652 1.68652 1.25 2.225 1.25H19.775C20.3135 1.25 20.75 1.68652 20.75 2.225V11.975H18.8V3.2H3.2V18.8H11V20.75H2.225C1.68652 20.75 1.25 20.3135 1.25 19.775V2.225Z',
  d12: 'M8.75 15V7L15.25 11L8.75 15Z',
  d13: 'M17.5147 14.4812C17.6999 14.558 17.862 14.6458 17.9989 14.7317C18.1358 14.6458 18.2979 14.558 18.483 14.4812C19.1357 14.2106 20.0586 14.0883 21.0888 14.6225C22.421 15.3132 23.0207 16.93 22.6302 18.5193C22.231 20.1443 20.8362 21.723 18.2554 22.6571L17.9989 22.75L17.7424 22.6571C15.1616 21.723 13.7668 20.1443 13.3676 18.5193C12.9771 16.93 13.5767 15.3132 14.909 14.6225C15.9391 14.0883 16.862 14.2106 17.5147 14.4812Z',
};

export const IconPlayListFavourite02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-02-stroke-rounded IconPlayListFavourite02StrokeRounded"
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
        strokeLinecap="round" 
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

export const IconPlayListFavourite02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-02-duotone-rounded IconPlayListFavourite02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
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

export const IconPlayListFavourite02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-02-twotone-rounded IconPlayListFavourite02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconPlayListFavourite02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-02-solid-rounded IconPlayListFavourite02SolidRounded"
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

export const IconPlayListFavourite02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-02-bulk-rounded IconPlayListFavourite02BulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListFavourite02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-02-stroke-sharp IconPlayListFavourite02StrokeSharp"
    >
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListFavourite02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-02-solid-sharp IconPlayListFavourite02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfPlayListFavourite02: TheIconSelfPack = {
  name: 'PlayListFavourite02',
  StrokeRounded: IconPlayListFavourite02StrokeRounded,
  DuotoneRounded: IconPlayListFavourite02DuotoneRounded,
  TwotoneRounded: IconPlayListFavourite02TwotoneRounded,
  SolidRounded: IconPlayListFavourite02SolidRounded,
  BulkRounded: IconPlayListFavourite02BulkRounded,
  StrokeSharp: IconPlayListFavourite02StrokeSharp,
  SolidSharp: IconPlayListFavourite02SolidSharp,
};