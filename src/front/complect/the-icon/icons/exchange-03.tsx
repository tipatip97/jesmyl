import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.125 20.5L16.125 14.5M18 14.5V13M18 22V20.5M16.125 17.5H19.875M19.875 17.5C20.4963 17.5 21 18.0037 21 18.625V19.375C21 19.9963 20.4963 20.5 19.875 20.5H15M19.875 17.5C20.4963 17.5 21 16.9963 21 16.375V15.625C21 15.0037 20.4963 14.5 19.875 14.5H15',
  d2: 'M11 5C13.8284 5 16.2426 5 17.1213 5.7988C18 6.5976 18 7.4287 18 10L16 9',
  d3: 'M12 20C9.17157 20 6.75736 20 5.87868 19.2012C5 18.4024 5 17.5713 5 15L7 16',
  d4: 'M5.5 3.25C4.11929 3.25 3 4.08947 3 5.125C3 6.16053 4.11929 7 5.5 7C6.88071 7 8 7.83947 8 8.875C8 9.91053 6.88071 10.75 5.5 10.75M5.5 3.25C6.58852 3.25 7.51455 3.77175 7.85775 4.5M5.5 3.25V2M5.5 10.75C4.41148 10.75 3.48545 10.2282 3.14225 9.5M5.5 10.75V12',
  d5: 'M16.125 14.5V20.5H19.875C20.4963 20.5 21 19.9963 21 19.375V18.625C21 18.0037 20.4963 17.5 19.875 17.5C20.4963 17.5 21 16.9963 21 16.375V15.625C21 15.0037 20.4963 14.5 19.875 14.5H16.125Z',
  d6: 'M18 12.25C18.4142 12.25 18.75 12.5858 18.75 13V13.75H19.875C20.9105 13.75 21.75 14.5895 21.75 15.625V16.375C21.75 16.7971 21.6105 17.1866 21.3751 17.5C21.6105 17.8134 21.75 18.2029 21.75 18.625V19.375C21.75 20.4105 20.9105 21.25 19.875 21.25H18.75V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V21.25H15C14.5858 21.25 14.25 20.9142 14.25 20.5C14.25 20.0858 14.5858 19.75 15 19.75H15.375V17.5002C15.375 17.5001 15.375 17.5002 15.375 17.5002L15.375 15.25H15C14.5858 15.25 14.25 14.9142 14.25 14.5C14.25 14.0858 14.5858 13.75 15 13.75H17.25V13C17.25 12.5858 17.5858 12.25 18 12.25ZM16.875 15.25V16.75H19.875C20.0821 16.75 20.25 16.5821 20.25 16.375V15.625C20.25 15.4179 20.0821 15.25 19.875 15.25H16.875ZM19.875 18.25H16.875L16.875 19.75H19.875C20.0821 19.75 20.25 19.5821 20.25 19.375V18.625C20.25 18.4179 20.0821 18.25 19.875 18.25Z',
  d7: 'M14.7219 5.84659C13.6974 5.75071 12.4259 5.75 11 5.75C10.5858 5.75 10.25 5.41421 10.25 5C10.25 4.58579 10.5858 4.25 11 4.25L11.0282 4.25C12.4206 4.25 13.7598 4.24999 14.8617 4.35311C15.4185 4.40522 15.9415 4.48576 16.3975 4.61572C16.8467 4.74376 17.286 4.93495 17.6258 5.24384C18.1966 5.76276 18.4925 6.32392 18.629 7.10571C18.7501 7.79938 18.7501 8.70511 18.75 9.91847C18.75 9.9455 18.75 9.97267 18.75 10C18.75 10.2599 18.6154 10.5013 18.3943 10.638C18.1732 10.7746 17.8971 10.7871 17.6646 10.6708L15.6646 9.67082C15.2941 9.48558 15.1439 9.03507 15.3292 8.66459C15.5144 8.29411 15.9649 8.14394 16.3354 8.32918L17.2448 8.78389C17.2361 8.16132 17.213 7.71672 17.1513 7.36372C17.0682 6.88743 16.9247 6.63364 16.6168 6.35375C16.5173 6.26325 16.3253 6.15489 15.9863 6.05827C15.6541 5.96357 15.2321 5.89433 14.7219 5.84659Z',
  d8: 'M4.60571 14.362C4.82682 14.2254 5.10292 14.2129 5.33542 14.3292L7.33542 15.3292C7.7059 15.5144 7.85607 15.9649 7.67083 16.3354C7.48558 16.7059 7.03508 16.8561 6.66459 16.6708L5.75518 16.2161C5.76386 16.8387 5.78702 17.2833 5.84866 17.6363C5.93183 18.1126 6.07532 18.3664 6.38319 18.6462C6.48275 18.7368 6.67469 18.8451 7.01368 18.9417C7.3459 19.0364 7.7679 19.1057 8.27807 19.1534C9.30262 19.2493 10.5741 19.25 12 19.25C12.4142 19.25 12.75 19.5858 12.75 20C12.75 20.4142 12.4142 20.75 12 20.75H11.9718C10.5794 20.75 9.24021 20.75 8.13831 20.6469C7.58154 20.5948 7.05846 20.5142 6.6025 20.3843C6.1533 20.2562 5.71396 20.065 5.37418 19.7562C4.80337 19.2372 4.50752 18.6761 4.37102 17.8943C4.2499 17.2006 4.24994 16.2949 4.25 15.0815C4.25 15.0545 4.25001 15.0273 4.25001 15C4.25001 14.7401 4.38459 14.4987 4.60571 14.362Z',
  d9: 'M5.5 1.25C5.91421 1.25 6.25 1.58579 6.25 2V2.57022C7.25117 2.75995 8.13396 3.32678 8.53618 4.18028C8.71276 4.55497 8.55216 5.00186 8.17747 5.17844C7.80278 5.35502 7.35589 5.19441 7.17931 4.81972C6.99344 4.42532 6.38609 4 5.5 4C4.95623 4 4.49281 4.16625 4.18223 4.39917C3.87189 4.63193 3.75 4.89623 3.75 5.125C3.75 5.35377 3.87189 5.61807 4.18223 5.85083C4.49281 6.08375 4.95623 6.25 5.5 6.25C6.33694 6.25 7.12352 6.50349 7.71777 6.94917C8.31225 7.39503 8.75 8.06824 8.75 8.875C8.75 9.68176 8.31225 10.355 7.71777 10.8008C7.30533 11.1102 6.80026 11.3269 6.25 11.4306V12C6.25 12.4142 5.91421 12.75 5.5 12.75C5.08579 12.75 4.75 12.4142 4.75 12V11.4298C3.74883 11.24 2.86604 10.6732 2.46382 9.81973C2.28724 9.44503 2.44784 8.99814 2.82253 8.82156C3.19722 8.64498 3.64411 8.80559 3.82069 9.18028C4.00656 9.57468 4.61391 10 5.5 10C6.04377 10 6.50719 9.83375 6.81777 9.60083C7.12811 9.36807 7.25 9.10377 7.25 8.875C7.25 8.64623 7.12811 8.38193 6.81777 8.14918C6.50719 7.91625 6.04377 7.75 5.5 7.75C4.66306 7.75 3.87648 7.49651 3.28223 7.05083C2.68775 6.60497 2.25 5.93176 2.25 5.125C2.25 4.31824 2.68775 3.64503 3.28223 3.19917C3.69467 2.88985 4.19974 2.67311 4.75 2.56943V2C4.75 1.58579 5.08579 1.25 5.5 1.25Z',
  d10: 'M16.1378 20.7239V14.6542M18.0146 14.6542V13.1367M18.0146 22.2413V20.7239M16.1378 17.689H19.8914M19.8914 17.689C20.5132 17.689 21.0174 18.1986 21.0174 18.8271V19.5858C21.0174 20.2143 20.5132 20.7239 19.8914 20.7239H15.0117M19.8914 17.689C20.5132 17.689 21.0174 17.1795 21.0174 16.5509V15.7922C21.0174 15.1637 20.5132 14.6542 19.8914 14.6542H15.0117',
  d11: 'M11.0078 5.044L18.0145 5.04395V10.1022H17.514L15.5121 8.58462',
  d12: 'M12.0086 20.2183L5.00195 20.2184V15.1602H5.50243L7.50433 16.6777',
  d13: 'M5.50249 10.875C6.8776 10.875 8.02038 10.0422 8.02038 8.99996C8.02038 7.9577 6.8776 7.06699 5.50249 7.06699C4.12737 7.06699 3.0127 6.222 3.0127 5.17974C3.0127 4.17634 4.13049 3.26768 5.50627 3.26908M5.50249 10.875C4.41843 10.875 3.46958 10.3469 3.12774 9.61392M5.50249 10.875V12.8828M7.8523 4.55009C7.49499 3.73988 6.8711 3.37483 5.59229 3.26908C4.17269 3.26908 5.55962 3.26914 5.50627 3.26908M5.50627 3.26908V1.24609',
  d14: 'M18.75 12.25V13.75H19.875C20.9105 13.75 21.75 14.5895 21.75 15.625V16.375C21.75 16.7971 21.6105 17.1866 21.3751 17.5C21.6105 17.8134 21.75 18.2029 21.75 18.625V19.375C21.75 20.4105 20.9105 21.25 19.875 21.25H18.75V22.75H17.25V21.25H14.25V19.75H15.375L15.375 15.25H14.25V13.75H17.25V12.25H18.75ZM16.875 15.25V16.75H19.875C20.0821 16.75 20.25 16.5821 20.25 16.375V15.625C20.25 15.4179 20.0821 15.25 19.875 15.25H16.875ZM19.875 18.25H16.875L16.875 19.75H19.875C20.0821 19.75 20.25 19.5821 20.25 19.375V18.625C20.25 18.4179 20.0821 18.25 19.875 18.25Z',
  d15: 'M18.75 4.25V10.7501H17.25L15.05 9.1L15.95 7.90001L17.25 8.87504V5.75001L11 5.75006L11 4.25006L18.75 4.25Z',
  d16: 'M4.25 14.25L5.75001 14.25L7.95001 15.9001L7.04999 17.1L5.75 16.125L5.75 19.25L12 19.25L12 20.75L4.25 20.7501L4.25 14.25Z',
  d17: 'M6.25 1.25V2.57022C7.25117 2.75995 8.13396 3.32678 8.53618 4.18028L7.17931 4.81972C6.99344 4.42532 6.38609 4 5.5 4C4.95623 4 4.49281 4.16625 4.18223 4.39917C3.87189 4.63193 3.75 4.89623 3.75 5.125C3.75 5.35377 3.87189 5.61807 4.18223 5.85083C4.49281 6.08375 4.95623 6.25 5.5 6.25C6.33694 6.25 7.12352 6.50349 7.71777 6.94917C8.31225 7.39503 8.75 8.06824 8.75 8.875C8.75 9.68176 8.31225 10.355 7.71777 10.8008C7.30533 11.1102 6.80026 11.3269 6.25 11.4306V12.75H4.75V11.4298C3.74883 11.24 2.86604 10.6732 2.46382 9.81973L3.82069 9.18028C4.00656 9.57468 4.61391 10 5.5 10C6.04377 10 6.50719 9.83375 6.81777 9.60083C7.12811 9.36807 7.25 9.10377 7.25 8.875C7.25 8.64623 7.12811 8.38193 6.81777 8.14918C6.50719 7.91625 6.04377 7.75 5.5 7.75C4.66306 7.75 3.87648 7.49651 3.28223 7.05083C2.68775 6.60497 2.25 5.93176 2.25 5.125C2.25 4.31824 2.68775 3.64503 3.28223 3.19917C3.69467 2.88985 4.19974 2.67311 4.75 2.56943V1.25H6.25Z',
};

export const IconExchange03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-03-stroke-rounded IconExchange03StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconExchange03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-03-duotone-rounded IconExchange03DuotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconExchange03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-03-twotone-rounded IconExchange03TwotoneRounded"
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

export const IconExchange03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-03-solid-rounded IconExchange03SolidRounded"
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

export const IconExchange03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-03-bulk-rounded IconExchange03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconExchange03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-03-stroke-sharp IconExchange03StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconExchange03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-03-solid-sharp IconExchange03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfExchange03: TheIconSelfPack = {
  name: 'Exchange03',
  StrokeRounded: IconExchange03StrokeRounded,
  DuotoneRounded: IconExchange03DuotoneRounded,
  TwotoneRounded: IconExchange03TwotoneRounded,
  SolidRounded: IconExchange03SolidRounded,
  BulkRounded: IconExchange03BulkRounded,
  StrokeSharp: IconExchange03StrokeSharp,
  SolidSharp: IconExchange03SolidSharp,
};