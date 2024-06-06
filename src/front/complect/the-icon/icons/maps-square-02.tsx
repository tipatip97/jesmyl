import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5 9.5H14.509',
  d2: 'M14.5 6C16.3941 6 18 7.61319 18 9.57031C18 11.5586 16.368 12.9539 14.8605 13.9027C14.7506 13.9665 14.6264 14 14.5 14C14.3736 14 14.2494 13.9665 14.1395 13.9027C12.6348 12.9446 11 11.5655 11 9.57031C11 7.61319 12.6059 6 14.5 6Z',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d4: 'M17 21L3 7',
  d5: 'M10 14L4 20',
  d6: 'M20.1088 20.1088C19.4276 20.79 18.543 21.1376 17.2919 21.3151L2.68848 6.68359C2.93467 5.88322 3.51991 4.20424 3.89128 3.89124C5.28252 2.5 7.52169 2.5 12 2.5C16.4784 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088ZM18 9.57031C18 7.61319 16.3941 6 14.5 6C12.6059 6 11 7.61319 11 9.57031C11 11.5655 12.6348 12.9446 14.1395 13.9027C14.2494 13.9665 14.3736 14 14.5 14C14.6264 14 14.7506 13.9665 14.8605 13.9027C16.368 12.9539 18 11.5586 18 9.57031Z',
  d7: 'M3 7L17 21M10 14L4 20',
  d8: 'M12.0727 1.75C14.1969 1.74998 15.8903 1.74996 17.218 1.92847C18.589 2.11279 19.7153 2.50337 20.606 3.39404C21.4966 4.28471 21.8872 5.41104 22.0715 6.78198C22.25 8.10974 22.25 9.80317 22.25 11.9273V12.0727C22.25 14.1968 22.25 15.8903 22.0715 17.218C21.8872 18.589 21.4966 19.7153 20.606 20.606C19.7153 21.4966 18.589 21.8872 17.218 22.0715C15.8903 22.25 14.1968 22.25 12.0727 22.25H11.9273C9.80317 22.25 8.10974 22.25 6.78198 22.0715C6.07286 21.9762 5.42919 21.8257 4.84972 21.5793C4.54956 21.4517 4.39948 21.3879 4.3691 21.2313C4.33872 21.0748 4.46388 20.9496 4.71421 20.6993L10.2828 15.1303C10.4828 14.9303 10.5828 14.8303 10.707 14.8303C10.8313 14.8303 10.9313 14.9303 11.1313 15.1303L16.1166 20.1156C16.1785 20.1775 16.2644 20.2094 16.3517 20.202C16.5646 20.1838 16.7665 20.1621 16.9583 20.1363C18.1128 19.9811 18.7584 19.6926 19.2259 19.2252C19.6933 18.7577 19.9818 18.1121 20.137 16.9576C20.296 15.7751 20.2981 14.2132 20.2981 11.9998C20.2981 9.78631 20.296 8.22442 20.137 7.0419C19.9818 5.88745 19.6933 5.2418 19.2259 4.77435C18.7584 4.3069 18.1128 4.01842 16.9583 3.86321C15.7758 3.70422 14.2139 3.70215 12.0005 3.70215C9.78702 3.70215 8.22513 3.70422 7.04261 3.86321C5.88816 4.01842 5.24251 4.3069 4.77506 4.77435C4.3076 5.2418 4.01913 5.88745 3.86392 7.0419C3.83812 7.23376 3.81646 7.4356 3.79826 7.64859C3.79081 7.73585 3.82275 7.82177 3.88467 7.88369L8.86856 12.8676C9.06855 13.0676 9.16855 13.1676 9.16855 13.2918C9.16855 13.4161 9.06856 13.5161 8.86857 13.7161L3.30031 19.2848C3.04992 19.5352 2.92472 19.6604 2.76817 19.63C2.61161 19.5996 2.54782 19.4494 2.42023 19.1492C2.17414 18.57 2.02375 17.9267 1.92847 17.218C1.74996 15.8903 1.74998 14.1968 1.75 12.0727V12.0727V11.9273V11.9273C1.74998 9.80314 1.74996 8.10973 1.92847 6.78198C2.11279 5.41104 2.50337 4.28471 3.39404 3.39404C4.28471 2.50337 5.41104 2.11279 6.78198 1.92847C8.10973 1.74996 9.80315 1.74998 11.9273 1.75H11.9273H12.0727H12.0727Z',
  d9: 'M14.5 5.25C12.1811 5.25 10.25 7.20968 10.25 9.57031C10.25 12.003 12.2346 13.5789 13.7367 14.5353L13.7496 14.5436L13.7629 14.5513C13.9866 14.6811 14.2406 14.75 14.5 14.75C14.7594 14.75 15.0134 14.6811 15.2371 14.5513L15.2487 14.5446L15.26 14.5374C16.7714 13.5861 18.75 11.9949 18.75 9.57031C18.75 7.20968 16.8189 5.25 14.5 5.25ZM14.4933 8C13.6686 8 13 8.67157 13 9.5C13 10.3284 13.6686 11 14.4933 11H14.5067C15.3314 11 16 10.3284 16 9.5C16 8.67157 15.3314 8 14.5067 8H14.4933Z',
  d10: 'M14.5 5.99996C12.567 5.99996 11 7.4471 11 9.23224C11 10.253 11.4375 11.0467 12.3125 11.7556C12.9292 12.2553 14.0514 13.3272 14.5 14C14.9713 13.3406 16.0708 12.2553 16.6875 11.7556C17.5625 11.0467 18 10.253 18 9.23224C18 7.4471 16.433 5.99996 14.5 5.99996Z',
  d11: 'M3 21H21V3H3V21Z',
  d12: 'M10 14L3 21',
  d13: 'M14.5 5.25C12.2101 5.25 10.25 6.97785 10.25 9.23228C10.25 10.5222 10.826 11.5165 11.8404 12.3384C12.1243 12.5684 12.5394 12.9429 12.9384 13.3427C13.3454 13.7505 13.6945 14.1439 13.876 14.4161C14.0127 14.6211 14.2414 14.7459 14.4878 14.7499C14.7342 14.7539 14.9669 14.6366 15.1102 14.4361C15.5296 13.8493 16.575 12.812 17.1596 12.3384C18.174 11.5165 18.75 10.5222 18.75 9.23228C18.75 6.97785 16.7899 5.25 14.5 5.25ZM14.4933 8C13.6686 8 13 8.67157 13 9.5C13 10.3284 13.6686 11 14.4933 11H14.5067C15.3314 11 16 10.3284 16 9.5C16 8.67157 15.3314 8 14.5067 8H14.4933Z',
  d14: 'M3 2C2.44772 2 2 2.44772 2 3V20.5857L9.82254 12.7629L4 6.94032V4H20V20H17.0597L11.2368 14.1771L3.41409 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3Z',
};

export const IconMapsSquare02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-square-02-stroke-rounded IconMapsSquare02StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsSquare02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-square-02-duotone-rounded IconMapsSquare02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsSquare02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-square-02-twotone-rounded IconMapsSquare02TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsSquare02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-square-02-solid-rounded IconMapsSquare02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsSquare02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-square-02-bulk-rounded IconMapsSquare02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsSquare02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-square-02-stroke-sharp IconMapsSquare02StrokeSharp"
    >
      <path 
        d={d.d1} 
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
        d={d.d11} 
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsSquare02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-square-02-solid-sharp IconMapsSquare02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMapsSquare02: TheIconSelfPack = {
  name: 'MapsSquare02',
  StrokeRounded: IconMapsSquare02StrokeRounded,
  DuotoneRounded: IconMapsSquare02DuotoneRounded,
  TwotoneRounded: IconMapsSquare02TwotoneRounded,
  SolidRounded: IconMapsSquare02SolidRounded,
  BulkRounded: IconMapsSquare02BulkRounded,
  StrokeSharp: IconMapsSquare02StrokeSharp,
  SolidSharp: IconMapsSquare02SolidSharp,
};