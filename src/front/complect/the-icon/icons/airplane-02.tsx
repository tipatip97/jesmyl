import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 9.5L5.27531 4.47562C4.85705 4.02447 4.92403 3.69493 5.41729 3.40962C6.34454 2.87327 7.06689 2.8587 8.04428 3.39508L12.949 6.08672C13.2982 6.27833 13.6406 6.47256 14 6.57852',
  d2: 'M12.5 13.6632L14.6103 20.4696C14.7826 21.0255 15.086 21.1262 15.556 20.8567C16.4396 20.3501 16.7958 19.765 16.8197 18.7107L16.9395 13.4198C16.9555 12.7131 16.9526 12.0215 17.5 11.5',
  d3: 'M8.32846 10.9842L10.2154 9.60554L14.6377 6.38133L14.6416 6.37848L14.6491 6.37298C14.7535 6.29658 16.3094 5.16235 17.1919 4.77578C18.2765 4.30064 19.2869 4.52153 20.3739 4.82512C20.9362 4.98215 21.2173 5.06066 21.4202 5.20714C21.742 5.43955 21.9513 5.79725 21.9943 6.18849C22.0215 6.43507 21.9498 6.71456 21.8065 7.27353L21.8065 7.27355C21.5294 8.35428 21.2181 9.32816 20.2588 10.0175C19.4782 10.5784 17.7045 11.341 17.5856 11.3918L17.5771 11.3955L17.5726 11.3974L12.5317 13.5644L10.3782 14.4875L10.3782 14.4876C9.5974 14.8223 9.207 14.9896 8.94139 15.3002C8.31933 16.0275 8.23148 17.3437 7.99931 18.2493C7.87101 18.7498 7.16748 19.617 6.54058 19.4868C6.15355 19.4065 6.14613 18.922 6.09796 18.6131L5.6342 15.6389C5.5233 14.9276 5.51479 14.913 4.94599 14.4626L2.56757 12.5792C2.32053 12.3836 1.89903 12.135 2.022 11.7641C2.22119 11.1633 3.33408 10.9957 3.83747 11.1363C4.74834 11.3907 5.94747 11.9737 6.89684 11.8058C7.3022 11.7341 7.64428 11.4841 8.32844 10.9842L8.32846 10.9842Z',
  d4: 'M16.8916 4.08864C18.2406 3.4977 19.4859 3.79805 20.5763 4.1026C21.0334 4.22947 21.545 4.37153 21.8599 4.59893C22.3519 4.95425 22.674 5.50221 22.7405 6.10628C22.7908 6.5632 22.6458 7.02222 22.5337 7.45964C22.2553 8.54536 21.8943 9.76611 20.6971 10.6264C20.2473 10.9496 19.5539 11.3053 18.9996 11.5717C18.4298 11.8455 17.9455 12.0537 17.8812 12.0812L10.6744 15.1767C9.82528 15.5407 9.63722 15.6411 9.51202 15.7875C8.92913 16.469 8.939 17.6065 8.72648 18.4354C8.61964 18.8521 8.32214 19.3095 7.98071 19.6418C7.66238 19.9517 7.08224 20.365 6.38874 20.221C5.67465 20.0727 5.44332 19.4151 5.36405 18.778L4.87562 15.7141C4.8454 15.5251 4.83029 15.4307 4.78321 15.3499C4.73613 15.2692 4.66132 15.2096 4.51169 15.0902L2.06112 13.1358C1.54519 12.752 1.07991 12.2242 1.31076 11.5279C1.53486 10.8519 2.19469 10.5637 2.61973 10.4482C3.08074 10.323 3.62657 10.2983 4.03988 10.4137C4.87945 10.6482 5.86913 11.2259 6.76686 11.0671C6.96091 11.0328 7.14377 10.9213 7.88664 10.3785L14.2068 5.76756C14.2633 5.72623 14.6882 5.41643 15.2134 5.06641C15.7246 4.72579 16.3833 4.31128 16.8916 4.08864Z',
  d5: 'M13.2079 15.4496C12.8147 15.6185 12.6181 15.703 12.5377 15.8772C12.4573 16.0515 12.5207 16.2558 12.6474 16.6646L13.896 20.6918C14.0032 21.0375 14.2192 21.4833 14.7008 21.6714C15.1814 21.8591 15.6365 21.6764 15.9312 21.5075C16.4425 21.2143 16.8677 20.8603 17.1574 20.3718C17.4468 19.8838 17.5578 19.3346 17.5716 18.7277L17.6753 14.147C17.6816 13.8668 17.6848 13.7267 17.5943 13.6656C17.5038 13.6045 17.375 13.6598 17.1175 13.7704L13.2079 15.4496Z',
  d6: 'M8.40741 2.73758C7.84936 2.43133 7.29636 2.24499 6.70776 2.2501C6.11803 2.25523 5.57758 2.4518 5.04406 2.7604C4.73771 2.93761 4.34306 3.24839 4.26505 3.76936C4.18718 4.28938 4.47126 4.70904 4.7276 4.98554L7.55368 7.99088C7.84163 8.2971 7.9856 8.4502 8.17391 8.46775C8.36221 8.4853 8.53199 8.36143 8.87156 8.1137L12.3693 5.56187C12.598 5.39504 12.7123 5.31163 12.7053 5.20198C12.6983 5.09234 12.5742 5.02425 12.326 4.88806L8.40741 2.73758Z',
  d7: 'M10.2809 10.4115L7.76246 13.3079L3.75739 12.9162C3.75248 12.9157 3.74788 12.9185 3.74632 12.923L3.00054 15.127C2.99884 15.1319 3.00128 15.1371 3.0062 15.1393L7.03332 16.9733L8.87299 20.9834C8.87521 20.988 8.88075 20.9903 8.88587 20.9888L11.0578 20.2812C11.0625 20.2798 11.0656 20.2754 11.0651 20.2707L10.6983 16.2368L13.5944 13.7611M10.2809 10.4115L4.1193 6.70223C4.11337 6.69889 4.11236 6.69117 4.11723 6.68656L6.30424 4.50791L13.5401 6.43307M10.2809 10.4115L13.5401 6.43307M13.5401 6.43307C15.085 4.50791 15.716 3.46136 17.725 3.07172C19.1267 2.79988 20.3159 3.27561 20.5974 3.41274C20.9246 4.08676 21.1784 5.48693 20.8393 6.69224C20.5002 7.89754 20.1103 8.5795 17.5627 10.471M17.5627 10.471L19.4996 17.7128L17.3038 19.9118C17.2989 19.9165 17.2908 19.9155 17.2872 19.9099L13.5944 13.7611M17.5627 10.471L13.5944 13.7611',
  d8: 'M21.1396 2.8614C21.1396 2.8614 21.3108 3.21319 21.3322 3.26518C21.3751 3.36904 21.4305 3.51516 21.4869 3.69682C21.5992 4.05877 21.7178 4.57024 21.7446 5.17502C21.7988 6.40181 21.4707 7.99336 20.011 9.44562C19.9939 9.46262 19.976 9.47879 19.9573 9.49408L14.065 14.3216L11.4735 16.5551L11.8049 20.1996C11.8364 20.5462 11.6253 20.8689 11.2951 20.979L9.09752 21.7115C8.7334 21.8328 8.33642 21.6597 8.17759 21.3103L6.46266 17.5377L2.6898 15.8228C2.34037 15.664 2.16724 15.267 2.28863 14.9029L3.02115 12.7054C3.13122 12.3752 3.45396 12.1642 3.80056 12.1957L7.44532 12.527L9.67868 9.93597L14.4996 4.03782C14.5155 4.01842 14.5323 3.99983 14.55 3.98212C16.0058 2.52644 17.5986 2.20057 18.8257 2.25573C19.4307 2.28293 19.9423 2.40175 20.3042 2.51412C20.4859 2.57051 20.632 2.62594 20.7359 2.66883C20.7879 2.6903 21.1396 2.8614 21.1396 2.8614Z',
  d9: 'M11.6529 5.15005L8.52914 8.97183L7.79928 9.81858L3.71109 7.35962C3.51331 7.24066 3.38132 7.03726 3.35323 6.80817C3.32515 6.57909 3.40411 6.34983 3.5673 6.18662L6.06908 3.68457L11.6529 5.15005Z',
  d10: 'M18.8484 12.3416L15.0296 15.4703L14.1817 16.2011L16.6401 20.2879C16.7591 20.4857 16.9625 20.6177 17.1916 20.6458C17.4206 20.6738 17.6499 20.5949 17.8131 20.4317L20.3153 17.9301L18.8484 12.3416Z',
};

export const IconAirplane02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-02-stroke-rounded IconAirplane02StrokeRounded"
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

export const IconAirplane02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-02-duotone-rounded IconAirplane02DuotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconAirplane02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-02-twotone-rounded IconAirplane02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAirplane02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-02-solid-rounded IconAirplane02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconAirplane02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-02-bulk-rounded IconAirplane02BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconAirplane02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-02-stroke-sharp IconAirplane02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplane02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-02-solid-sharp IconAirplane02SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAirplane02: TheIconSelfPack = {
  name: 'Airplane02',
  StrokeRounded: IconAirplane02StrokeRounded,
  DuotoneRounded: IconAirplane02DuotoneRounded,
  TwotoneRounded: IconAirplane02TwotoneRounded,
  SolidRounded: IconAirplane02SolidRounded,
  BulkRounded: IconAirplane02BulkRounded,
  StrokeSharp: IconAirplane02StrokeSharp,
  SolidSharp: IconAirplane02SolidSharp,
};