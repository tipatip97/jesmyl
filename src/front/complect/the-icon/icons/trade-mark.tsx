import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M5.99414 9.47593H8.5095M8.5095 9.47593H10.9932M8.5095 9.47593V15.4958M12.9904 15.4863V9.47598C13.3259 9.36901 15.5002 11.4773 15.5002 11.4773C15.5002 11.4773 17.6725 9.36901 18.0081 9.47599V15.4863',
  d3: 'M5.99316 9.49168H8.50852M8.50852 9.49168H10.9922M8.50852 9.49168V15.5116M12.9894 15.5021V9.49173C13.3249 9.38476 15.4992 11.493 15.4992 11.493C15.4992 11.493 17.6715 9.38476 18.0071 9.49174V15.5021',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.5 10.4817L14.0929 9.19241C13.9758 9.09855 13.8309 8.98241 13.6974 8.90423C13.5625 8.82522 13.2001 8.64063 12.7885 8.83845C12.3769 9.03628 12.2946 9.43462 12.272 9.58931C12.2497 9.74236 12.2499 9.92805 12.25 10.0782V10.0782V10.0782V10.0782L12.25 15.5009C12.25 15.9151 12.5858 16.2509 13 16.2509C13.4142 16.2509 13.75 15.9151 13.75 15.5009V10.9098L14.9922 12.0528C15.2792 12.3169 15.7208 12.3169 16.0078 12.0528L17.25 10.9098V15.5009C17.25 15.9151 17.5858 16.2509 18 16.2509C18.4142 16.2509 18.75 15.9151 18.75 15.5009L18.75 10.0782V10.0781V10.0781V10.0781C18.7501 9.92801 18.7503 9.74234 18.728 9.58931C18.7054 9.43462 18.6231 9.03628 18.2115 8.83845C17.7999 8.64063 17.4375 8.82522 17.3026 8.90423C17.1691 8.9824 17.0242 9.09852 16.9071 9.19238L16.9071 9.19241L15.5 10.4817ZM6 8.75088C5.58579 8.75088 5.25 9.08667 5.25 9.50088C5.25 9.91509 5.58579 10.2509 6 10.2509H7.75V15.5009C7.75 15.9151 8.08579 16.2509 8.5 16.2509C8.91421 16.2509 9.25 15.9151 9.25 15.5009V10.2509H11C11.4142 10.2509 11.75 9.91509 11.75 9.50088C11.75 9.08667 11.4142 8.75088 11 8.75088H6Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d6: 'M14.0929 9.19241L15.5 10.4817L16.9071 9.19241L16.9071 9.1924C17.0242 9.09854 17.1691 8.98241 17.3026 8.90423C17.4375 8.82522 17.7999 8.64063 18.2115 8.83845C18.6231 9.03628 18.7054 9.43462 18.728 9.58931C18.7503 9.74236 18.7501 9.92807 18.75 10.0782V10.0782L18.75 15.5009C18.75 15.9151 18.4142 16.2509 18 16.2509C17.5858 16.2509 17.25 15.9151 17.25 15.5009V10.9098L16.0078 12.0528C15.7208 12.3169 15.2792 12.3169 14.9922 12.0528L13.75 10.9098V15.5009C13.75 15.9151 13.4142 16.2509 13 16.2509C12.5858 16.2509 12.25 15.9151 12.25 15.5009L12.25 10.0782C12.2499 9.92808 12.2497 9.74237 12.272 9.58931C12.2946 9.43462 12.3769 9.03628 12.7885 8.83845C13.2001 8.64063 13.5625 8.82522 13.6974 8.90423C13.8309 8.98241 13.9758 9.09855 14.0929 9.19241Z',
  d7: 'M5.25 9.50088C5.25 9.08667 5.58579 8.75088 6 8.75088H11C11.4142 8.75088 11.75 9.08667 11.75 9.50088C11.75 9.91509 11.4142 10.2509 11 10.2509H9.25V15.5009C9.25 15.9151 8.91421 16.2509 8.5 16.2509C8.08579 16.2509 7.75 15.9151 7.75 15.5009V10.2509H6C5.58579 10.2509 5.25 9.91509 5.25 9.50088Z',
  d8: 'M8.00617 15.4834V9.46387M8.00617 9.46387H10.4688M8.00617 9.46387H5.51855M12.5338 15.5218L12.5335 9.55361C12.5335 9.5447 12.5443 9.54024 12.5506 9.54654L15.009 12.0076L17.4915 9.54604C17.4978 9.53978 17.5086 9.54425 17.5086 9.55314V15.5218',
  d9: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13.1553 8.84469C12.9408 8.63019 12.6182 8.56603 12.338 8.68211C12.0577 8.7982 11.875 9.07168 11.875 9.37502V15.375H13.375V11.1857L15.125 12.9357L16.875 11.1857V15.375H18.375V9.37502C18.375 9.07168 18.1923 8.7982 17.912 8.68211C17.6318 8.56603 17.3092 8.63019 17.0947 8.84469L15.125 10.8144L13.1553 8.84469ZM5.625 10.125H7.375V15.375H8.875V10.125H10.625V8.62502H5.625V10.125Z',
} as const;

export const IconTradeMarkStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trade-mark-stroke-rounded IconTradeMarkStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTradeMarkDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trade-mark-duotone-rounded IconTradeMarkDuotoneRounded"
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

export const IconTradeMarkTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trade-mark-twotone-rounded IconTradeMarkTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconTradeMarkSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trade-mark-solid-rounded IconTradeMarkSolidRounded"
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

export const IconTradeMarkBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trade-mark-bulk-rounded IconTradeMarkBulkRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTradeMarkStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trade-mark-stroke-sharp IconTradeMarkStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconTradeMarkSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trade-mark-solid-sharp IconTradeMarkSolidSharp"
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

export const iconPackOfTradeMark: TheIconSelfPack = {
  name: 'TradeMark',
  StrokeRounded: IconTradeMarkStrokeRounded,
  DuotoneRounded: IconTradeMarkDuotoneRounded,
  TwotoneRounded: IconTradeMarkTwotoneRounded,
  SolidRounded: IconTradeMarkSolidRounded,
  BulkRounded: IconTradeMarkBulkRounded,
  StrokeSharp: IconTradeMarkStrokeSharp,
  SolidSharp: IconTradeMarkSolidSharp,
};