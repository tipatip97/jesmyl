import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5',
  d2: 'M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5',
  d3: 'M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17',
  d4: 'M12.3077 12L10.847 7.47891C10.7552 7.19466 10.4734 7 10.1538 7C9.83425 7 9.55249 7.19466 9.46066 7.47891L8 12M15 7V12M8.53846 10.5H11.7692',
  d5: 'M12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5C3.5 18.1193 4.61929 17 6 17H20.5V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2Z',
  d6: 'M12.5564 1.25C14.3942 1.24998 15.8498 1.24997 16.989 1.40314C18.1614 1.56076 19.1104 1.89288 19.8588 2.64124C20.6071 3.38961 20.9392 4.33856 21.0969 5.51098C21.25 6.65018 21.25 8.10585 21.25 9.94359V17C21.25 17.4142 20.9142 17.75 20.5 17.75C19.5335 17.75 18.75 18.5335 18.75 19.5C18.75 20.4665 19.5335 21.25 20.5 21.25C20.9142 21.25 21.25 21.5858 21.25 22C21.25 22.4142 20.9142 22.75 20.5 22.75H6C4.20508 22.75 2.75 21.2949 2.75 19.5V9.94357V9.94356C2.74998 8.10581 2.74997 6.65019 2.90314 5.51098C3.06076 4.33856 3.39288 3.38961 4.14124 2.64124C4.88961 1.89288 5.83856 1.56076 7.01098 1.40314C8.15019 1.24997 9.60582 1.24998 11.4436 1.25H11.4436H12.5564H12.5564ZM4.25 19.5C4.25 20.4665 5.0335 21.25 6 21.25H17.7609C17.4375 20.7449 17.25 20.1443 17.25 19.5C17.25 18.8557 17.4375 18.2551 17.7609 17.75H6C5.0335 17.75 4.25 18.5335 4.25 19.5ZM10.154 6.25C9.53997 6.25 8.94823 6.62604 8.74718 7.24834L7.28652 11.7694C7.15918 12.1636 7.37548 12.5863 7.76963 12.7137C8.16378 12.841 8.58654 12.6247 8.71388 12.2306L9.03068 11.25H11.2774L11.5942 12.2306C11.7216 12.6247 12.1443 12.841 12.5385 12.7137C12.9326 12.5863 13.1489 12.1636 13.0216 11.7694L11.5609 7.24834C11.3599 6.62604 10.7681 6.25 10.154 6.25ZM10.154 7.77291L10.7928 9.75H9.5153L10.154 7.77291ZM15.7502 7C15.7502 6.58579 15.4144 6.25 15.0002 6.25C14.586 6.25 14.2502 6.58579 14.2502 7V12C14.2502 12.4142 14.586 12.75 15.0002 12.75C15.4144 12.75 15.7502 12.4142 15.7502 12V7Z',
  d7: 'M16.989 1.40314C15.8498 1.24997 14.3942 1.24998 12.5564 1.25H11.4436C9.60583 1.24998 8.15019 1.24997 7.01098 1.40314C5.83856 1.56076 4.88961 1.89288 4.14124 2.64124C3.39288 3.38961 3.06076 4.33856 2.90314 5.51098C2.74997 6.65019 2.74998 8.10582 2.75 9.94357V19.5C2.75 21.2949 4.20508 22.75 6 22.75H20.5C20.9142 22.75 21.25 22.4142 21.25 22C21.25 21.5858 20.9142 21.25 20.5 21.25C19.5335 21.25 18.75 20.4665 18.75 19.5C18.75 18.5335 19.5335 17.75 20.5 17.75C20.9142 17.75 21.25 17.4142 21.25 17V9.94359C21.25 8.10585 21.25 6.65018 21.0969 5.51098C20.9392 4.33856 20.6071 3.38961 19.8588 2.64124C19.1104 1.89288 18.1614 1.56076 16.989 1.40314ZM6 21.25C5.0335 21.25 4.25 20.4665 4.25 19.5C4.25 18.5335 5.0335 17.75 6 17.75H17.7609C17.4375 18.2551 17.25 18.8557 17.25 19.5C17.25 20.1443 17.4375 20.7449 17.7609 21.25H6Z',
  d8: 'M8.74718 7.24834C8.94823 6.62604 9.53997 6.25 10.154 6.25C10.7681 6.25 11.3599 6.62604 11.5609 7.24834L13.0216 11.7694C13.1489 12.1636 12.9326 12.5863 12.5385 12.7137C12.1443 12.841 11.7216 12.6247 11.5942 12.2306L11.2774 11.25H9.03068L8.71388 12.2306C8.58654 12.6247 8.16378 12.841 7.76963 12.7137C7.37548 12.5863 7.15918 12.1636 7.28652 11.7694L8.74718 7.24834ZM9.5153 9.75H10.7928L10.154 7.77291L9.5153 9.75ZM15.0002 6.25C15.4144 6.25 15.7502 6.58579 15.7502 7V12C15.7502 12.4142 15.4144 12.75 15.0002 12.75C14.586 12.75 14.2502 12.4142 14.2502 12V7C14.2502 6.58579 14.586 6.25 15.0002 6.25Z',
  d9: 'M21.0006 22H5.68074C4.1074 22 2.95029 20.927 3.00112 19.5152M3.00112 19.5152C3.04952 18.1711 4.28629 17.0075 5.68075 17.0075H20.2333V2H6.11784C4.39652 2 3.00111 3.34583 3.00111 5.006L3.00112 19.5152ZM18.1066 17.0075V22',
  d10: 'M7.74542 10.7184L9.61533 6.05245L11.4937 10.7184M7.74542 10.7184L6.74561 13.2132M7.74542 10.7184H11.4937M11.4937 10.7184L12.498 13.2132M15.0736 5.72754V13.2132',
  d11: 'M2.75 5C2.75 2.92893 4.42893 1.25 6.5 1.25H21.25V17.75H19.25V21.25H21.25V22.75H6C4.20507 22.75 2.75 21.2949 2.75 19.5V5ZM4.25 19.5C4.25 20.4665 5.0335 21.25 6 21.25H17.75V17.75H6C5.0335 17.75 4.25 18.5335 4.25 19.5ZM10.8731 5.75H9.26796L6.53125 12.9339L7.93298 13.4679L8.70169 11.45H11.4394L12.2081 13.4679L13.6098 12.9339L10.8731 5.75ZM10.868 9.95H9.27312L10.0705 7.85677L10.868 9.95ZM16.2491 13.25V5.75H14.7491V13.25H16.2491Z',
};

export const IconAiBookStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-book-stroke-rounded IconAiBookStrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiBookDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-book-duotone-rounded IconAiBookDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiBookTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-book-twotone-rounded IconAiBookTwotoneRounded"
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
        strokeLinecap="round" 
      />
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

export const IconAiBookSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-book-solid-rounded IconAiBookSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiBookBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-book-bulk-rounded IconAiBookBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiBookStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-book-stroke-sharp IconAiBookStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconAiBookSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-book-solid-sharp IconAiBookSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiBook: TheIconSelfPack = {
  name: 'AiBook',
  StrokeRounded: IconAiBookStrokeRounded,
  DuotoneRounded: IconAiBookDuotoneRounded,
  TwotoneRounded: IconAiBookTwotoneRounded,
  SolidRounded: IconAiBookSolidRounded,
  BulkRounded: IconAiBookBulkRounded,
  StrokeSharp: IconAiBookStrokeSharp,
  SolidSharp: IconAiBookSolidSharp,
};