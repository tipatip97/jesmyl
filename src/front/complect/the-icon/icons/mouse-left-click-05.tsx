import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 2.31844C10.7306 2.11067 11.5601 2 12.5 2C18.5 2 20 6.50998 20 12C20 17.49 18.5 22 12.5 22C6.49993 22 5 17.49 5 12C5 11.4906 5.01291 10.9897 5.04113 10.5',
  d2: 'M14 7C14 6.53406 14 6.30109 13.9239 6.11732C13.8224 5.87229 13.6277 5.67761 13.3827 5.57612C13.1989 5.5 12.9659 5.5 12.5 5.5C12.0341 5.5 11.8011 5.5 11.6173 5.57612C11.3723 5.67761 11.1776 5.87229 11.0761 6.11732C11 6.30109 11 6.53406 11 7V7.5C11 7.96594 11 8.19891 11.0761 8.38268C11.1776 8.62771 11.3723 8.82239 11.6173 8.92388C11.8011 9 12.0341 9 12.5 9C12.9659 9 13.1989 9 13.3827 8.92388C13.6277 8.82239 13.8224 8.62771 13.9239 8.38268C14 8.19891 14 7.96594 14 7.5V7Z',
  d3: 'M12.5 5.5V2M12.5 12V9',
  d4: 'M5.5 12H19.5',
  d5: 'M20 12C20 17.49 18.5 22 12.5 22C6.49993 22 5 17.49 5 12H20Z',
  d6: 'M2.75 5.5C2.75 3.70507 4.20507 2.25 6 2.25C7.79493 2.25 9.25 3.70507 9.25 5.5C9.25 7.29493 7.79493 8.75 6 8.75C4.20507 8.75 2.75 7.29493 2.75 5.5Z',
  d7: 'M10.308 1.59848C11.116 1.36711 12.012 1.25 13 1.25C16.2005 1.25 18.3559 2.48859 19.6483 4.58655C20.8862 6.59603 21.25 9.26561 21.25 12C21.25 14.7344 20.8862 17.404 19.6483 19.4135C18.3559 21.5114 16.2005 22.75 13 22.75C9.79941 22.75 7.64401 21.5114 6.35163 19.4135C5.11376 17.404 4.75 14.7344 4.75 12C4.75 11.4858 4.76294 10.9774 4.79153 10.4779C4.82237 9.93902 5.2812 9.52738 5.81635 9.55844C6.35151 9.58949 6.76033 10.0515 6.72949 10.5903L6.72707 10.6333C6.71128 10.9194 6.70338 11.0624 6.79214 11.1562C6.88091 11.25 7.02685 11.25 7.31873 11.25H11.4C11.6828 11.25 11.8243 11.25 11.9121 11.1621C12 11.0743 12 10.9328 12 10.65V9.00002C12 8.44774 12.4477 8.00002 13 8.00002C13.5523 8.00002 14 8.44774 14 9.00002V10.65C14 10.9328 14 11.0743 14.0879 11.1621C14.1757 11.25 14.3172 11.25 14.6 11.25H18.6812C18.9731 11.25 19.119 11.25 19.2078 11.1562C19.2966 11.0624 19.2886 10.9193 19.2728 10.6332C19.1604 8.59997 18.7759 6.87845 17.9987 5.61679C17.3158 4.50824 16.285 3.68251 14.6609 3.35683C14.3668 3.29785 14.2197 3.26836 14.1099 3.35838C14 3.4484 14 3.60704 14 3.92433V5.50002C14 6.05231 13.5523 6.50002 13 6.50002C12.4477 6.50002 12 6.05231 12 5.50002V3.92496C12 3.60758 12 3.44889 11.8901 3.35887C11.7802 3.26885 11.6332 3.29835 11.3392 3.35735C11.1652 3.39229 10.9985 3.4328 10.839 3.47848C10.3234 3.62612 9.78659 3.32496 9.63996 2.80581C9.49333 2.28666 9.79243 1.74612 10.308 1.59848Z',
  d8: 'M13.0218 4.75H13H12.9782H12.9782C12.7639 4.74999 12.5671 4.74998 12.4018 4.76126C12.2241 4.77338 12.0288 4.80099 11.8303 4.88321C11.4015 5.06083 11.0608 5.40151 10.8832 5.83031C10.801 6.02881 10.7734 6.22415 10.7613 6.40179C10.75 6.56712 10.75 6.76396 10.75 6.97824V7.52176C10.75 7.73604 10.75 7.93289 10.7613 8.09821C10.7734 8.27585 10.801 8.47119 10.8832 8.6697C11.0608 9.0985 11.4015 9.43918 11.8303 9.61679C12.0288 9.69901 12.2241 9.72663 12.4018 9.73875C12.5671 9.75003 12.764 9.75002 12.9782 9.75H13.0218C13.236 9.75002 13.4329 9.75003 13.5982 9.73875C13.7759 9.72663 13.9712 9.69901 14.1697 9.61679C14.5985 9.43918 14.9392 9.0985 15.1168 8.6697C15.199 8.47119 15.2266 8.27585 15.2387 8.09821C15.25 7.9329 15.25 7.73606 15.25 7.5218V7.52176V6.97825V6.9782C15.25 6.76394 15.25 6.56711 15.2387 6.40179C15.2266 6.22415 15.199 6.02881 15.1168 5.83031C14.9392 5.40151 14.5985 5.06083 14.1697 4.88321C13.9712 4.80099 13.7759 4.77338 13.5982 4.76126C13.4329 4.74998 13.2361 4.74999 13.0218 4.75H13.0218Z',
  d9: 'M14 5.5H11V9H14V5.5Z',
  d10: 'M2.75 4.25C2.75 2.59315 4.09315 1.25 5.75 1.25C7.40685 1.25 8.75 2.59315 8.75 4.25C8.75 5.90685 7.40685 7.25 5.75 7.25C4.09315 7.25 2.75 5.90685 2.75 4.25Z',
  d11: 'M4.9727 8.68312C4.8122 9.7496 4.75 10.8693 4.75 12C4.75 14.7344 5.11376 17.404 6.35163 19.4135C7.64401 21.5114 9.79941 22.75 13 22.75C16.2005 22.75 18.3559 21.5114 19.6483 19.4135C20.8862 17.404 21.25 14.7344 21.25 12C21.25 9.26561 20.8862 6.59603 19.6483 4.58655C18.3559 2.48859 16.2005 1.25 13 1.25C11.68 1.25 10.5378 1.46066 9.56066 1.85538C9.90429 2.40107 10.134 3.02576 10.2162 3.69603C10.7283 3.48024 11.318 3.32947 11.999 3.25586V4.99989H11.499C11.0848 4.99989 10.749 5.33567 10.749 5.74989V8.74989C10.749 9.1641 11.0848 9.49989 11.499 9.49989H11.999V10.9999H6.70898C6.74241 10.1397 6.82158 9.33176 6.95516 8.5868C6.57159 8.69316 6.16743 8.75 5.75 8.75C5.48492 8.75 5.2252 8.72708 4.9727 8.68312ZM17.9978 5.61668C18.8213 6.95353 19.2039 8.80669 19.2891 10.9999H13.999V9.49989H14.499C14.9133 9.49989 15.249 9.1641 15.249 8.74989V5.74989C15.249 5.33567 14.9133 4.99989 14.499 4.99989H13.999V3.25587C16.0114 3.4734 17.2265 4.36466 17.9978 5.61668Z',
};

export const IconMouseLeftClick05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-05-stroke-rounded IconMouseLeftClick05StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="5.5" 
        cy="5.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-05-duotone-rounded IconMouseLeftClick05DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5.5" 
        cy="5.5" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="5.5" 
        cy="5.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d3} 
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

export const IconMouseLeftClick05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-05-twotone-rounded IconMouseLeftClick05TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5.5" 
        cy="5.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-05-solid-rounded IconMouseLeftClick05SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMouseLeftClick05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-05-bulk-rounded IconMouseLeftClick05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-05-stroke-sharp IconMouseLeftClick05StrokeSharp"
    >
      <path 
        d={d.d1} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="5.5" 
        cy="5.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-05-solid-sharp IconMouseLeftClick05SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouseLeftClick05: TheIconSelfPack = {
  name: 'MouseLeftClick05',
  StrokeRounded: IconMouseLeftClick05StrokeRounded,
  DuotoneRounded: IconMouseLeftClick05DuotoneRounded,
  TwotoneRounded: IconMouseLeftClick05TwotoneRounded,
  SolidRounded: IconMouseLeftClick05SolidRounded,
  BulkRounded: IconMouseLeftClick05BulkRounded,
  StrokeSharp: IconMouseLeftClick05StrokeSharp,
  SolidSharp: IconMouseLeftClick05SolidSharp,
};