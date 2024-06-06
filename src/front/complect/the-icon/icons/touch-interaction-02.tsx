import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.53345 13.6528L10.5 15.3722V6.50065C10.5 5.67186 11.1719 5 12.0006 5C12.8289 5 13.5006 5.67107 13.5013 6.49935L13.5045 11.263L16.1409 11.6903C17.8426 11.9492 18.6935 12.0786 19.2928 12.4427C20.2828 13.0441 21 14 21 15.2657C21 16.1841 20.7762 16.8002 20.232 18.4556C19.8867 19.5059 19.7141 20.0311 19.4326 20.4469C18.9691 21.1313 18.2853 21.6311 17.4984 21.8605C17.0204 21.9999 16.4745 21.9999 15.3826 21.9999H14.4571C13.0054 21.9999 12.2796 21.9999 11.6335 21.7298C11.5176 21.6814 11.4044 21.6267 11.2942 21.566C10.68 21.2278 10.2224 20.6566 9.30698 19.5142L6.3436 15.8158C5.88822 15.2474 5.88518 14.4341 6.3363 13.8622C6.87851 13.175 7.87444 13.08 8.53345 13.6528Z',
  d2: 'M7 8H6.17647C4.67907 8 3.93037 8 3.46518 7.56066C3 7.12132 3 6.41421 3 5C3 3.58579 3 2.87868 3.46518 2.43934C3.93037 2 4.67907 2 6.17647 2H17.8235C19.3209 2 20.0696 2 20.5348 2.43934C21 2.87868 21 3.58579 21 5C21 6.41421 21 7.12132 20.5348 7.56066C20.0696 8 19.3209 8 17.8235 8H17',
  d3: 'M9.75 6.50065C9.75 5.25765 10.7576 4.25 12.0006 4.25C13.2429 4.25 14.2502 5.25647 14.2513 6.49871L14.2541 10.6247L16.2801 10.9529C17.1086 11.0789 17.767 11.1791 18.2916 11.2946C18.8261 11.4124 19.2805 11.5577 19.6822 11.8017C20.8364 12.5028 21.75 13.675 21.75 15.2657C21.75 16.25 21.5147 16.9625 21.0618 18.3342L21.0618 18.3342C20.7523 19.2765 20.3947 20.3636 20.0536 20.8674C19.493 21.6952 18.6645 22.3017 17.7083 22.5805C17.1259 22.7503 16.4788 22.7502 15.5015 22.7499H15.5015L14.3038 22.7499C13.0006 22.7504 12.1312 22.7507 11.3442 22.4218C11.2036 22.363 11.0661 22.2966 10.9324 22.223C10.186 21.812 9.6397 21.1297 8.81796 20.1034L5.7583 16.2847C5.08461 15.4439 5.08017 14.2436 5.74748 13.3977C6.5537 12.3758 8.04177 12.2318 9.02546 13.0868L9.0271 13.0882L9.75 13.7202V6.50065Z',
  d4: 'M6.26361 1.25L6.32206 1.25001L17.7364 1.25C18.4162 1.24995 19.0163 1.24991 19.4999 1.30896C20.0199 1.37245 20.5511 1.5184 20.9909 1.91781C21.4386 2.32437 21.61 2.8278 21.6836 3.32484C21.7501 3.77445 21.7501 4.44903 21.75 5.06015V5.06017C21.7501 5.67128 21.7501 6.22556 21.6836 6.67516C21.61 7.1722 21.4386 7.67563 20.9909 8.08219C20.5511 8.4816 20.0199 8.62755 19.4999 8.69104C19.0163 8.75009 18.4162 8.75005 17.7364 8.75L16.3875 8.74999C15.849 8.74999 15.4125 8.33026 15.4125 7.8125C15.4125 7.29473 15.849 6.875 16.3875 6.875H17.6779C18.434 6.875 18.9083 6.87322 19.2543 6.83098C19.5719 6.79219 19.636 6.73361 19.6512 6.71974L19.652 6.71904L19.6531 6.71812C19.6629 6.71014 19.715 6.66752 19.753 6.41091C19.7977 6.10935 19.8 5.69093 19.8 5C19.8 4.30907 19.7977 3.89065 19.753 3.58909C19.715 3.33248 19.6629 3.28986 19.6531 3.28188L19.652 3.28096L19.6512 3.28026C19.636 3.26639 19.5719 3.20781 19.2543 3.16902C18.9083 3.12678 18.434 3.125 17.6779 3.125H6.32206C5.56601 3.125 5.09167 3.12678 4.74572 3.16902C4.42805 3.20781 4.36396 3.26639 4.34879 3.28026L4.34802 3.28096L4.34692 3.28188C4.33715 3.28986 4.28496 3.33248 4.24697 3.58909C4.20232 3.89065 4.20001 4.30907 4.20001 5C4.20001 5.69093 4.20232 6.10935 4.24697 6.41091C4.28496 6.66753 4.33715 6.71014 4.34692 6.71812L4.34802 6.71904L4.34879 6.71974C4.36396 6.73361 4.42805 6.79219 4.74572 6.83098C5.09167 6.87322 5.56601 6.875 6.32206 6.875C6.86054 6.875 7.29706 7.29473 7.29706 7.8125C7.29706 8.33026 6.86054 8.74999 6.32206 8.74999C5.64223 8.75004 4.9837 8.75009 4.50009 8.69104C3.98007 8.62755 3.44893 8.4816 3.0091 8.08219C2.56141 7.67563 2.39002 7.1722 2.31643 6.67516C2.24987 6.22555 2.24994 5.61113 2.25001 5C2.24994 4.38887 2.24987 3.77445 2.31643 3.32484C2.39002 2.8278 2.56141 2.32437 3.0091 1.91781C3.44893 1.5184 3.98007 1.37245 4.50009 1.30896C4.9837 1.24991 5.58378 1.24995 6.26361 1.25Z',
  d5: 'M8.53345 13.6528L10.5 15.3722V6.50065C10.5 5.67186 11.1719 5 12.0006 5C12.8289 5 13.5006 5.67107 13.5013 6.49935L13.5045 12H17.5C18.8807 12 20 13.1193 20 14.5V19.4999C20 20.8806 18.8807 21.9999 17.5 21.9999H11L6.3436 15.8158C5.88822 15.2474 5.88518 14.4341 6.3363 13.8622C6.87851 13.175 7.87444 13.08 8.53345 13.6528Z',
  d6: 'M7 8H3V2H21V8H17',
  d7: 'M2.25 2.1875C2.25 1.66973 2.68652 1.25 3.225 1.25H20.775C21.3135 1.25 21.75 1.66973 21.75 2.1875V7.8125C21.75 8.33027 21.3135 8.75 20.775 8.75H16.875V6.875H19.8V3.125H4.2V6.875H7.125V8.75H3.225C2.68652 8.75 2.25 8.33027 2.25 7.8125V2.1875Z',
  d8: 'M9.75 6.50065C9.75 5.25765 10.7576 4.25 12.0006 4.25C13.2429 4.25 14.2502 5.25647 14.2513 6.49871L14.2541 11.25H17.5C19.2949 11.25 20.75 12.7051 20.75 14.5V19.4999C20.75 21.2948 19.2949 22.7499 17.5 22.7499H10.6259L5.75058 16.275C5.08458 15.4347 5.08273 14.2403 5.74748 13.3977C6.5537 12.3758 8.04177 12.2318 9.02546 13.0868L9.0271 13.0882L9.75 13.7202V6.50065Z',
};

export const IconTouchInteraction02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-02-stroke-rounded IconTouchInteraction02StrokeRounded"
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

export const IconTouchInteraction02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-02-duotone-rounded IconTouchInteraction02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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

export const IconTouchInteraction02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-02-twotone-rounded IconTouchInteraction02TwotoneRounded"
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

export const IconTouchInteraction02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-02-solid-rounded IconTouchInteraction02SolidRounded"
    >
      <path 
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

export const IconTouchInteraction02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-02-bulk-rounded IconTouchInteraction02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTouchInteraction02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-02-stroke-sharp IconTouchInteraction02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconTouchInteraction02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-02-solid-sharp IconTouchInteraction02SolidSharp"
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

export const iconPackOfTouchInteraction02: TheIconSelfPack = {
  name: 'TouchInteraction02',
  StrokeRounded: IconTouchInteraction02StrokeRounded,
  DuotoneRounded: IconTouchInteraction02DuotoneRounded,
  TwotoneRounded: IconTouchInteraction02TwotoneRounded,
  SolidRounded: IconTouchInteraction02SolidRounded,
  BulkRounded: IconTouchInteraction02BulkRounded,
  StrokeSharp: IconTouchInteraction02StrokeSharp,
  SolidSharp: IconTouchInteraction02SolidSharp,
};