import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C7.75736 22 5.63604 22 4.31802 20.5355C3 19.0711 3 16.714 3 12C3 7.28596 3 4.92893 4.31802 3.46447C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.46447C21 4.92893 21 7.28595 21 12C21 16.714 21 19.0711 19.682 20.5355C18.364 22 16.2426 22 12 22Z',
  d2: 'M8 2.5V9.82621C8 11.0733 8 11.6969 8.38642 11.9201C9.13473 12.3523 10.5384 10.9103 11.205 10.4761C11.5916 10.2243 11.7849 10.0984 12 10.0984C12.2151 10.0984 12.4084 10.2243 12.795 10.4761C13.4616 10.9103 14.8653 12.3523 15.6136 11.9201C16 11.6969 16 11.0733 16 9.82621V2.5',
  d3: 'M8 2.08106V9.82615C8 11.0733 8 11.6968 8.38642 11.92C8.95772 12.25 9.91098 11.4876 10.6266 10.9152C10.8484 10.7379 11.0473 10.5787 11.205 10.476C11.5916 10.2242 11.7849 10.0983 12 10.0983C12.2151 10.0983 12.4084 10.2242 12.795 10.476C12.9527 10.5787 13.1516 10.7379 13.3734 10.9152C14.089 11.4876 15.0423 12.25 15.6136 11.92C16 11.6968 16 11.0733 16 9.82615V2.08105C17.7432 2.21273 18.8664 2.55818 19.682 3.46441C21 4.92887 21 7.2859 21 11.9999C21 16.714 21 19.071 19.682 20.5355C18.364 21.9999 16.2426 21.9999 12 21.9999C7.75737 21.9999 5.63604 21.9999 4.31802 20.5355C3 19.071 3 16.714 3 11.9999C3 7.2859 3 4.92888 4.31802 3.46441C5.13363 2.55818 6.25685 2.21273 8 2.08106Z',
  d4: 'M20.2395 2.96274C19.4223 2.05481 18.3725 1.63907 17.0485 1.44129C15.7678 1.24997 14.1308 1.24998 12.0625 1.25H11.9375C9.86922 1.24998 8.23221 1.24997 6.95147 1.44129C5.62747 1.63908 4.57769 2.05481 3.76055 2.96274C2.95359 3.85936 2.59338 4.99222 2.42018 6.42355C2.24998 7.83014 2.24999 9.63499 2.25 11.9478C2.24999 14.2607 2.24998 16.1699 2.42018 17.5765C2.59338 19.0078 2.95359 20.1406 3.76055 21.0373C4.57769 21.9452 5.62747 22.3609 6.95147 22.5587C8.23221 22.75 9.86921 22.75 11.9375 22.75H12.0625C14.1308 22.75 15.7678 22.75 17.0485 22.5587C18.3725 22.3609 19.4223 21.9452 20.2395 21.0373C21.0464 20.1406 21.4066 19.0078 21.5798 17.5765C21.75 16.1699 21.75 14.2607 21.75 11.9478C21.75 9.63498 21.75 7.83014 21.5798 6.42355C21.4066 4.99222 21.0464 3.85936 20.2395 2.96274ZM12 2.96099C13.289 2.96099 14.3541 2.96169 15.25 2.99978V9.82599C15.25 10.474 15.2353 10.9545 15.1963 11.2287C15.0492 11.1804 14.8404 11.0701 14.5969 10.9036C14.0648 10.4869 12.9352 9.62774 12.6737 9.52434C12.4908 9.43112 12.2686 9.34815 12 9.34815C11.7314 9.34815 11.5092 9.43112 11.3263 9.52434C11.0564 9.63001 9.93171 10.4879 9.40312 10.9036C9.15961 11.0701 8.96192 11.1768 8.81477 11.2251C8.77578 10.9509 8.75 10.474 8.75 9.82599V2.99978C9.64594 2.96169 10.711 2.96099 12 2.96099Z',
  d5: 'M17.0485 1.44129C18.3725 1.63907 19.4223 2.05481 20.2395 2.96274C21.0464 3.85936 21.4066 4.99222 21.5798 6.42355C21.75 7.83014 21.75 9.63498 21.75 11.9478C21.75 14.2607 21.75 16.1699 21.5798 17.5765C21.4066 19.0078 21.0464 20.1406 20.2395 21.0373C19.4223 21.9452 18.3725 22.3609 17.0485 22.5587C15.7678 22.75 14.1308 22.75 12.0625 22.75H11.9375C9.86921 22.75 8.23221 22.75 6.95147 22.5587C5.62747 22.3609 4.57769 21.9452 3.76055 21.0373C2.95359 20.1406 2.59338 19.0078 2.42018 17.5765C2.24998 16.1699 2.24999 14.2607 2.25 11.9478C2.24999 9.63499 2.24998 7.83014 2.42018 6.42355C2.59338 4.99222 2.95359 3.85936 3.76055 2.96274C4.57769 2.05481 5.62747 1.63908 6.95147 1.44129C8.23221 1.24997 9.86922 1.24998 11.9375 1.25H12.0625C14.1308 1.24998 15.7678 1.24997 17.0485 1.44129Z',
  d6: 'M15.25 3C14.3541 2.96191 13.289 2.96121 12 2.96121C10.711 2.96121 9.64594 2.96191 8.75 3V9.82621C8.75 10.4742 8.77578 10.9511 8.81477 11.2253C8.96192 11.177 9.15961 11.0703 9.40312 10.9038C9.93171 10.4881 11.0564 9.63023 11.3263 9.52456C11.5092 9.43134 11.7314 9.34837 12 9.34837C12.2686 9.34837 12.4908 9.43134 12.6737 9.52456C12.9352 9.62796 14.0648 10.4872 14.5969 10.9038C14.8404 11.0703 15.0492 11.1806 15.1963 11.2289C15.2353 10.9547 15.25 10.4742 15.25 9.82621V3Z',
  d7: 'M21 22.0002V1.99972L3 2.00041L3.00025 22.0002H21Z',
  d8: 'M8 2V12L12 9L16 12V2',
  d9: 'M20.9999 1.25L2.99996 1.25068C2.44769 1.2507 1.99999 1.68823 2 2.22794L2.00025 21.7728C2.00025 22.3125 2.44797 22.75 3.00025 22.75H21C21.5523 22.75 22 22.3125 22 21.7727V2.22725C22 1.96806 21.8946 1.71949 21.7071 1.53622C21.5195 1.35295 21.2652 1.24999 20.9999 1.25ZM12 8.06183L8.75 10.4993V3.20435L15.25 3.2041V10.4993L12 8.06183Z',
};

export const IconBookmark03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-03-stroke-rounded IconBookmark03StrokeRounded"
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

export const IconBookmark03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-03-duotone-rounded IconBookmark03DuotoneRounded"
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
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconBookmark03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-03-twotone-rounded IconBookmark03TwotoneRounded"
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
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmark03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-03-solid-rounded IconBookmark03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmark03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-03-bulk-rounded IconBookmark03BulkRounded"
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

export const IconBookmark03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-03-stroke-sharp IconBookmark03StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmark03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-03-solid-sharp IconBookmark03SolidSharp"
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

export const iconPackOfBookmark03: TheIconSelfPack = {
  name: 'Bookmark03',
  StrokeRounded: IconBookmark03StrokeRounded,
  DuotoneRounded: IconBookmark03DuotoneRounded,
  TwotoneRounded: IconBookmark03TwotoneRounded,
  SolidRounded: IconBookmark03SolidRounded,
  BulkRounded: IconBookmark03BulkRounded,
  StrokeSharp: IconBookmark03StrokeSharp,
  SolidSharp: IconBookmark03SolidSharp,
};