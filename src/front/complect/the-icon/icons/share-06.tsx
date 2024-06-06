import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.7083 7C20.1334 8.59227 21 10.6949 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 10.6949 3.86656 8.59227 5.29168 7',
  d2: 'M12.0253 2.00052L12 14M12.0253 2.00052C11.8627 1.99379 11.6991 2.05191 11.5533 2.17492C10.6469 2.94006 9 4.92886 9 4.92886M12.0253 2.00052C12.1711 2.00657 12.3162 2.06476 12.4468 2.17508C13.3531 2.94037 15 4.92886 15 4.92886',
  d3: 'M10.9771 6.00001C10.7044 6.00001 10.4318 5.99984 10.1591 6.00004C9.92688 6.00021 9.6494 6.00041 9.42259 5.96723C9.18709 5.93277 8.63317 5.81135 8.3656 5.24535C8.0995 4.68246 8.35889 4.19385 8.48601 3.99344C8.61511 3.78991 8.81144 3.56868 8.96575 3.39141C9.51848 2.75645 10.3023 1.88992 10.883 1.41077C11.2039 1.14606 11.6161 0.983094 12.0681 1.0014C12.47 1.01767 12.8307 1.17478 13.1169 1.41106C13.6973 1.89011 14.481 2.75629 15.0339 3.39116C15.1883 3.56846 15.3847 3.78969 15.5138 3.99322C15.641 4.19357 15.9005 4.68223 15.6344 5.24525C15.3669 5.81137 14.8128 5.93278 14.5774 5.96723C14.3505 6.00041 14.073 6.00021 13.8407 6.00004C13.5681 5.99984 13.2956 6.00001 13.0231 6.00001L13.0231 14C13.0231 14.5523 12.5651 15 12.0001 15C11.4351 15 10.9771 14.5523 10.9771 14L10.9771 6.00001Z',
  d4: 'M5.95859 6.25487C6.37012 6.6232 6.40514 7.2554 6.03682 7.66692C4.76945 9.08294 4 10.9504 4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13C20 10.9504 19.2306 9.08294 17.9632 7.66692C17.5949 7.2554 17.6299 6.6232 18.0414 6.25487C18.4529 5.88655 19.0851 5.92157 19.4535 6.3331C21.0363 8.10162 22 10.4395 22 13C22 18.5229 17.5228 23 12 23C6.47715 23 2 18.5229 2 13C2 10.4395 2.96367 8.10162 4.54655 6.3331C4.91487 5.92157 5.54707 5.88655 5.95859 6.25487Z',
  d5: 'M12 14L12 2.80348M9 5L12 2L15 5',
  d6: 'M20 13C20 10.9505 19.2306 9.08297 17.9632 7.66696L19.4535 6.33313C21.0363 8.10165 22 10.4395 22 13C22 18.5229 17.5228 23 12 23C6.47715 23 2 18.5229 2 13C2 10.4395 2.96367 8.10165 4.54655 6.33313L6.03682 7.66696C4.76945 9.08297 4 10.9505 4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13Z',
  d7: 'M8.29297 4.70723L12.0001 1.00012L15.7072 4.70723L14.293 6.12144L13.0001 4.82855L13.0001 14.4143L11.0001 14.4143L11.0001 4.82855L9.70718 6.12144L8.29297 4.70723Z',
};

export const IconShare06StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-06-stroke-rounded IconShare06StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShare06DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-06-duotone-rounded IconShare06DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="13" 
        r="9" 
        fill="var(--icon-fill)"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShare06TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-06-twotone-rounded IconShare06TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShare06SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-06-solid-rounded IconShare06SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare06BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-06-bulk-rounded IconShare06BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare06StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-06-stroke-sharp IconShare06StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare06SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-06-solid-sharp IconShare06SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShare06: TheIconSelfPack = {
  name: 'Share06',
  StrokeRounded: IconShare06StrokeRounded,
  DuotoneRounded: IconShare06DuotoneRounded,
  TwotoneRounded: IconShare06TwotoneRounded,
  SolidRounded: IconShare06SolidRounded,
  BulkRounded: IconShare06BulkRounded,
  StrokeSharp: IconShare06StrokeSharp,
  SolidSharp: IconShare06SolidSharp,
};