import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.6609 21C13.1414 21.4575 12.5013 21.7823 11.7922 21.9231C11.4052 22 10.9397 22 10.0088 22C9.07782 22 8.61235 22 8.22528 21.9231C6.63574 21.6075 5.39317 20.3671 5.07699 18.7804C5 18.394 5 17.9293 5 17V11.5C5 9.61438 5 8.67157 5.58681 8.08579C6.17362 7.5 7.11808 7.5 9.007 7.5H11.0105C12.8994 7.5 13.8439 7.5 14.4307 8.08579C14.8355 8.48987 14.9611 9.06385 15 10',
  d2: 'M13.5 7.5V5.5C13.5 4.09554 13.5 3.39331 13.1629 2.88886C13.017 2.67048 12.8295 2.48298 12.6111 2.33706C12.1067 2 11.4045 2 10 2C8.59554 2 7.89331 2 7.38886 2.33706C7.17048 2.48298 6.98298 2.67048 6.83706 2.88886C6.5 3.39331 6.5 4.09554 6.5 5.5V7.5',
  d3: 'M9.5 4.5H10.5',
  d4: 'M11 16C11 16 12 16 13 18C13 18 16.1765 13 19 12',
  d5: 'M5 11.5C5 9.61438 5 8.67157 5.58579 8.08579C6.17157 7.5 7.11438 7.5 9 7.5H11C12.8856 7.5 13.8284 7.5 14.4142 8.08579C15 8.67157 15 9.61438 15 11.5V17C15 17.9293 15 18.394 14.9231 18.7804C14.6075 20.3671 13.3671 21.6075 11.7804 21.9231C11.394 22 10.9293 22 10 22C9.07069 22 8.60603 22 8.21964 21.9231C6.63288 21.6075 5.39249 20.3671 5.07686 18.7804C5 18.394 5 17.9293 5 17V11.5Z',
  d6: 'M10.2883 1.25H10.2117H10.2116C9.54209 1.24999 8.98334 1.24997 8.53102 1.29599C8.05755 1.34415 7.61818 1.44886 7.22218 1.71346C6.92191 1.9141 6.6641 2.17191 6.46346 2.47218C6.19886 2.86818 6.09415 3.30755 6.04598 3.78102C5.99997 4.23335 5.99998 4.79208 6 5.46166L6 6.1546C6 6.34026 6 6.43309 5.96025 6.50241C5.9205 6.57173 5.8252 6.6275 5.63462 6.73903C5.457 6.84298 5.28802 6.97069 5.13036 7.12807C4.61988 7.63766 4.42067 8.26615 4.33234 8.92199C4.24994 9.53376 4.24998 10.2977 4.25003 11.1841L4.25002 16.8659C4.24981 17.6834 4.24968 18.2408 4.34631 18.7258C4.7417 20.7101 6.29514 22.2598 8.28055 22.654C8.76584 22.7504 9.32379 22.7502 10.143 22.75H10.143H10.1431H10.3746H10.3746H10.3746C11.1938 22.7502 11.7517 22.7504 12.237 22.654C13.1226 22.4782 13.9226 22.0722 14.5718 21.5005C14.9863 21.1355 15.0264 20.5036 14.6614 20.0891C14.2965 19.6746 13.6646 19.6345 13.2501 19.9995C12.8601 20.3429 12.3801 20.5865 11.8475 20.6923C11.5812 20.7452 11.2376 20.75 10.2588 20.75C9.28 20.75 8.9364 20.7452 8.67008 20.6923C7.4764 20.4553 6.54472 19.5242 6.30775 18.3349C6.2549 18.0697 6.25004 17.7273 6.25004 16.75V11.25C6.25004 10.2789 6.25217 9.65131 6.31444 9.18894C6.37281 8.75552 6.46701 8.61971 6.54334 8.54352C6.61991 8.46708 6.75666 8.37273 7.19167 8.31434C7.65527 8.25212 8.28436 8.25001 9.25704 8.25001H11.2605C12.2332 8.25001 12.8623 8.25212 13.3259 8.31434C13.7609 8.37273 13.8977 8.46708 13.9742 8.54352C14.0843 8.65337 14.2125 8.86786 14.2509 9.79157C14.2739 10.3434 14.7398 10.7721 15.2916 10.7491C15.8434 10.7262 16.2721 10.2602 16.2492 9.70844C16.2097 8.75986 16.0868 7.82639 15.3872 7.12807C15.2255 6.96658 15.0518 6.83634 14.8691 6.73095C14.6767 6.61997 14.5804 6.56448 14.5402 6.49484C14.5 6.42521 14.5 6.33175 14.5 6.14483L14.5 5.46166C14.5 4.7921 14.5 4.23335 14.454 3.78102C14.4059 3.30755 14.3011 2.86818 14.0365 2.47218C13.8359 2.17191 13.5781 1.9141 13.2778 1.71346C12.8818 1.44886 12.4425 1.34415 11.969 1.29599C11.5167 1.24997 10.9579 1.24999 10.2884 1.25H10.2883ZM8.5 3.91016C8.5 3.49594 8.83579 3.16016 9.25 3.16016H11.25C11.6642 3.16016 12 3.49594 12 3.91016C12 4.32437 11.6642 4.66016 11.25 4.66016H9.25C8.83579 4.66016 8.5 4.32437 8.5 3.91016Z',
  d7: 'M19.6926 11.4164C19.877 11.937 19.6044 12.5085 19.0838 12.6929C18.5502 12.8819 17.9337 13.2888 17.2807 13.8615C16.638 14.4251 16.0128 15.1021 15.4591 15.7659C14.9072 16.4274 14.4385 17.0611 14.1074 17.5301C13.9422 17.7641 13.8122 17.9558 13.7243 18.0879L13.5941 18.2865C13.4008 18.5906 13.0587 18.7674 12.6989 18.749C12.3389 18.7305 12.0168 18.5198 11.8556 18.1975C11.4149 17.3161 11.0196 16.9652 10.8203 16.8323C10.736 16.7761 10.679 16.7536 10.6564 16.7459C10.148 16.6987 9.75 16.271 9.75 15.7503C9.75 15.198 10.1977 14.7503 10.75 14.7503C10.8324 14.7511 11.0371 14.7661 11.1966 14.82C11.4045 14.8794 11.6553 14.9853 11.9297 15.1682C12.204 15.3511 12.4916 15.6038 12.7804 15.9497C13.0956 15.5189 13.484 15.0113 13.9233 14.4847C14.5166 13.7735 15.215 13.0129 15.962 12.3578C16.6986 11.7118 17.538 11.1186 18.4162 10.8076C18.9368 10.6233 19.5082 10.8958 19.6926 11.4164Z',
  d8: 'M10.2117 1.25H10.2883H10.2884C10.9579 1.24999 11.5167 1.24997 11.969 1.29599C12.4425 1.34415 12.8818 1.44886 13.2778 1.71346C13.5781 1.9141 13.8359 2.17191 14.0365 2.47218C14.3011 2.86818 14.4059 3.30755 14.454 3.78102C14.5 4.23335 14.5 4.7921 14.5 5.46166L14.5 6.14483C14.5 6.33175 14.5 6.42521 14.5402 6.49484C14.5804 6.56448 14.6767 6.61997 14.8691 6.73095C15.0518 6.83634 15.2255 6.96658 15.3872 7.12807C16.0868 7.82639 16.2097 8.75986 16.2492 9.70844C16.2721 10.2602 15.8434 10.7262 15.2916 10.7491C14.7398 10.7721 14.2739 10.3434 14.2509 9.79157C14.2125 8.86786 14.0843 8.65337 13.9742 8.54352C13.8977 8.46708 13.7609 8.37273 13.3259 8.31434C12.8623 8.25212 12.2332 8.25001 11.2605 8.25001H9.25704C8.28436 8.25001 7.65527 8.25212 7.19167 8.31434C6.75666 8.37273 6.61991 8.46708 6.54334 8.54352C6.46701 8.61971 6.37281 8.75552 6.31444 9.18894C6.25217 9.65131 6.25004 10.2789 6.25004 11.25V16.75C6.25004 17.7273 6.2549 18.0697 6.30775 18.3349C6.54472 19.5242 7.4764 20.4553 8.67008 20.6923C8.9364 20.7452 9.28 20.75 10.2588 20.75C11.2376 20.75 11.5812 20.7452 11.8475 20.6923C12.3801 20.5865 12.8601 20.3429 13.2501 19.9995C13.6646 19.6345 14.2965 19.6746 14.6614 20.0891C15.0264 20.5036 14.9863 21.1355 14.5718 21.5005C13.9226 22.0722 13.1226 22.4782 12.237 22.654C11.7517 22.7504 11.1938 22.7502 10.3746 22.75H10.3746H10.1431H10.143C9.3238 22.7502 8.76584 22.7504 8.28055 22.654C6.29514 22.2598 4.7417 20.7101 4.34631 18.7258C4.24968 18.2408 4.24981 17.6834 4.25002 16.8659L4.25003 11.1841C4.24998 10.2977 4.24994 9.53376 4.33234 8.92199C4.42067 8.26615 4.61988 7.63766 5.13036 7.12807C5.28802 6.97069 5.457 6.84298 5.63462 6.73903C5.8252 6.6275 5.9205 6.57173 5.96025 6.50241C6 6.43309 6 6.34026 6 6.1546L6 5.46166C5.99998 4.79208 5.99997 4.23335 6.04598 3.78102C6.09415 3.30755 6.19886 2.86818 6.46346 2.47218C6.6641 2.17191 6.92191 1.9141 7.22218 1.71346C7.61818 1.44886 8.05755 1.34415 8.53102 1.29599C8.98334 1.24997 9.54209 1.24999 10.2116 1.25H10.2117Z',
  d9: 'M9.25 3.16016C8.83579 3.16016 8.5 3.49594 8.5 3.91016C8.5 4.32437 8.83579 4.66016 9.25 4.66016H11.25C11.6642 4.66016 12 4.32437 12 3.91016C12 3.49594 11.6642 3.16016 11.25 3.16016H9.25Z',
  d10: 'M15 13V7.5H5V17C5 19.7614 7.23858 22 10 22',
  d11: 'M13.5 7.5V2H6.5V7.5',
  d12: 'M9 4.5H11',
  d13: 'M10.5 17.5L13 20L19 14',
  d14: 'M6 1.25C5.58579 1.25 5.25 1.58579 5.25 2V6.75H3.75V16.9318C3.75 20.1451 6.32436 22.75 9.5 22.75V20.8106C7.38291 20.8106 5.66667 19.074 5.66667 16.9318V8.68939H13.3333V13.9318H15.25V6.75H13.75V2C13.75 1.58579 13.4142 1.25 13 1.25H6ZM11 5.25H8V3.75H11V5.25Z',
  d15: 'M20.2502 16.0431L13.543 22.7502L10.3359 19.5431L11.7502 18.1289L13.543 19.9218L18.8359 14.6289L20.2502 16.0431Z',
};

export const IconUsbConnected02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-02-stroke-rounded IconUsbConnected02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbConnected02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-02-duotone-rounded IconUsbConnected02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbConnected02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-02-twotone-rounded IconUsbConnected02TwotoneRounded"
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
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconUsbConnected02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-02-solid-rounded IconUsbConnected02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconUsbConnected02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-02-bulk-rounded IconUsbConnected02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbConnected02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-02-stroke-sharp IconUsbConnected02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbConnected02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-02-solid-sharp IconUsbConnected02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfUsbConnected02: TheIconSelfPack = {
  name: 'UsbConnected02',
  StrokeRounded: IconUsbConnected02StrokeRounded,
  DuotoneRounded: IconUsbConnected02DuotoneRounded,
  TwotoneRounded: IconUsbConnected02TwotoneRounded,
  SolidRounded: IconUsbConnected02SolidRounded,
  BulkRounded: IconUsbConnected02BulkRounded,
  StrokeSharp: IconUsbConnected02StrokeSharp,
  SolidSharp: IconUsbConnected02SolidSharp,
};