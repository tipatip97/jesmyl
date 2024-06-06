import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.03751 12.5387L9.9765 6.59975C11.3763 5.19992 12.0763 4.5 12.946 4.5C13.8157 4.5 14.5157 5.19992 15.9155 6.59975L17.4002 8.0845C18.8001 9.48434 19.5 10.1843 19.5 11.054C19.5 11.9237 18.8001 12.6237 17.4002 14.0235L11.4613 19.9625C9.41124 22.0125 6.08752 22.0125 4.03751 19.9625C1.9875 17.9125 1.9875 14.5888 4.03751 12.5387Z',
  d2: 'M8.5 17C8.5 16.1716 7.82843 15.5 7 15.5C6.17157 15.5 5.5 16.1716 5.5 17C5.5 17.8284 6.17157 18.5 7 18.5C7.82843 18.5 8.5 17.8284 8.5 17Z',
  d3: 'M14.5 5.35034L15.8832 3.96713C16.8613 2.98904 17.3503 2.5 17.958 2.5C18.5657 2.5 19.0548 2.98904 20.0329 3.96713C21.011 4.94521 21.5 5.43425 21.5 6.04195C21.5 6.64966 21.011 7.1387 20.0329 8.11678L18.6497 9.5',
  d4: 'M9.9765 6.59975L4.03751 12.5387C1.9875 14.5888 1.9875 17.9125 4.03751 19.9625C6.08752 22.0125 9.41124 22.0125 11.4613 19.9625L17.4002 14.0235C18.8001 12.6237 19.5 11.9237 19.5 11.054C19.5 10.1843 18.8001 9.48434 17.4002 8.0845L15.9155 6.59975C14.5157 5.19992 13.8157 4.5 12.946 4.5C12.0763 4.5 11.3763 5.19992 9.9765 6.59975ZM7 15.5C7.82843 15.5 8.5 16.1716 8.5 17C8.5 17.8284 7.82843 18.5 7 18.5C6.17157 18.5 5.5 17.8284 5.5 17C5.5 16.1716 6.17157 15.5 7 15.5Z',
  d5: 'M16.203 2.32176C15.8286 2.60744 15.4212 3.01488 14.9695 3.4667L14.6168 3.81939C14.4657 3.97055 14.3901 4.04612 14.3007 4.06383C14.2113 4.08154 14.0962 4.03364 13.8659 3.93784C13.5803 3.819 13.2773 3.75 12.946 3.75C12.2812 3.75 11.7305 4.02781 11.2051 4.42867C10.7062 4.80931 10.1516 5.364 9.48322 6.03237L3.50718 12.0084C1.16427 14.3513 1.16427 18.1499 3.50718 20.4928C5.85008 22.8357 9.64868 22.8357 11.9916 20.4928L17.9676 14.5168C18.636 13.8484 19.1907 13.2938 19.5713 12.7949C19.9722 12.2695 20.25 11.7188 20.25 11.054C20.25 10.7227 20.181 10.4198 20.0622 10.1342C19.9664 9.90393 19.9185 9.7888 19.9362 9.69941C19.9539 9.61002 20.0295 9.53444 20.1807 9.38329L20.5334 9.03058C20.9852 8.57885 21.3926 8.17149 21.6783 7.79706C21.9907 7.38762 22.2501 6.90236 22.2501 6.29195C22.2501 5.68155 21.9907 5.19629 21.6783 4.78685C21.3927 4.41245 20.9851 4.00501 20.5334 3.55332L20.4468 3.46671C19.995 3.01488 19.5877 2.60744 19.2132 2.32176C18.8038 2.00937 18.3185 1.75 17.7081 1.75C17.0977 1.75 16.6125 2.00937 16.203 2.32176ZM16.3403 4.92423C16.8494 4.4152 17.1615 4.10606 17.4161 3.9118C17.534 3.82186 17.6076 3.78232 17.6499 3.76466C17.6843 3.75032 17.6984 3.75 17.7081 3.75C17.7177 3.75 17.7318 3.75032 17.7662 3.76466C17.8085 3.78232 17.8821 3.82186 18 3.9118C18.2546 4.10606 18.5668 4.4152 19.0758 4.92423C19.5848 5.43326 19.894 5.74541 20.0882 6.00001C20.1782 6.1179 20.2177 6.19147 20.2354 6.23382C20.2497 6.26821 20.25 6.28232 20.25 6.29195C20.25 6.30159 20.2497 6.3157 20.2354 6.35009C20.2177 6.39244 20.1782 6.46601 20.0882 6.58389C19.894 6.8385 19.5848 7.15064 19.0758 7.65968L18.9825 7.753C18.7808 7.95465 18.68 8.05547 18.5557 8.05544C18.4314 8.0554 18.3301 7.95403 18.1276 7.75129L16.2487 5.87242C16.046 5.66991 15.9446 5.56866 15.9446 5.44435C15.9445 5.32003 16.0454 5.21921 16.247 5.01756L16.3403 4.92423ZM7 19C5.89543 19 5 18.1046 5 17C5 15.8954 5.89543 15 7 15C8.10457 15 9 15.8954 9 17C9 18.1046 8.10457 19 7 19Z',
  d6: 'M14.9695 3.4667C15.4212 3.01488 15.8286 2.60744 16.203 2.32176C16.6125 2.00937 17.0977 1.75 17.7081 1.75C18.3185 1.75 18.8038 2.00937 19.2132 2.32176C19.5877 2.60744 19.995 3.01488 20.4468 3.46671L20.5334 3.55332C20.9851 4.00501 21.3927 4.41245 21.6783 4.78685C21.9907 5.19629 22.2501 5.68155 22.2501 6.29195C22.2501 6.90236 21.9907 7.38762 21.6783 7.79706C21.3926 8.17149 20.9852 8.57885 20.5334 9.03058L20.1807 9.38329C20.0295 9.53444 19.9539 9.61002 19.9362 9.69941C19.9185 9.7888 19.9664 9.90393 20.0622 10.1342C20.181 10.4198 20.25 10.7227 20.25 11.054C20.25 11.7188 19.9722 12.2695 19.5713 12.7949C19.1907 13.2938 18.636 13.8484 17.9676 14.5168L11.9916 20.4928C9.64868 22.8357 5.85008 22.8357 3.50718 20.4928C1.16427 18.1499 1.16427 14.3513 3.50718 12.0084L9.48322 6.03237C10.1516 5.364 10.7062 4.80931 11.2051 4.42867C11.7305 4.02781 12.2812 3.75 12.946 3.75C13.2773 3.75 13.5803 3.819 13.8659 3.93784C14.0962 4.03364 14.2113 4.08154 14.3007 4.06383C14.3901 4.04612 14.4657 3.97055 14.6168 3.81939L14.9695 3.4667ZM17.4161 3.9118C17.1615 4.10606 16.8494 4.4152 16.3403 4.92423L16.247 5.01756C16.0454 5.21921 15.9445 5.32003 15.9446 5.44435C15.9446 5.56866 16.046 5.66991 16.2487 5.87242L18.1276 7.75129C18.3301 7.95403 18.4314 8.0554 18.5557 8.05544C18.68 8.05547 18.7808 7.95465 18.9825 7.753L19.0758 7.65968C19.5848 7.15064 19.894 6.8385 20.0882 6.58389C20.1782 6.46601 20.2177 6.39244 20.2354 6.35009C20.2497 6.3157 20.25 6.30159 20.25 6.29195C20.25 6.28232 20.2497 6.26821 20.2354 6.23382C20.2177 6.19147 20.1782 6.1179 20.0882 6.00001C19.894 5.74541 19.5848 5.43326 19.0758 4.92423C18.5668 4.4152 18.2546 4.10606 18 3.9118C17.8821 3.82186 17.8085 3.78232 17.7662 3.76466C17.7318 3.75032 17.7177 3.75 17.7081 3.75C17.6984 3.75 17.6843 3.75032 17.6499 3.76466C17.6076 3.78232 17.534 3.82186 17.4161 3.9118Z',
  d7: 'M5 17C5 18.1046 5.89543 19 7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17Z',
  d8: 'M20.5 10.9779L11.0266 20.4512C8.96162 22.5162 5.61367 22.5162 3.54872 20.4512C1.48376 18.3863 1.48376 15.0383 3.54872 12.9734L13.0221 3.5L20.5 10.9779Z',
  d9: 'M14.8496 5L17.8506 2L22.0002 6.14966L18.9993 9.14966',
  d10: 'M17.3213 1.46958C17.6142 1.17677 18.089 1.17681 18.3819 1.46967L22.5315 5.61933C22.6722 5.75999 22.7512 5.95078 22.7512 6.14972C22.7512 6.34865 22.6721 6.53943 22.5314 6.68007L19.8967 9.31398L21.5607 10.978L11.5569 20.9817C9.19906 23.3395 5.37623 23.3395 3.01839 20.9817C0.660538 18.6238 0.660539 14.801 3.01839 12.4432L13.0221 2.43945L14.6864 4.10366L17.3213 1.46958ZM20.9404 6.14957L18.836 8.25332L15.747 5.16432L17.8514 3.06057L20.9404 6.14957ZM7 15C8.10457 15 9 15.8954 9 17C9 18.1046 8.10457 19 7 19C5.89543 19 5 18.1046 5 17C5 15.8954 5.89543 15 7 15Z',
};

export const IconUsbMemory01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-01-stroke-rounded IconUsbMemory01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbMemory01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-01-duotone-rounded IconUsbMemory01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbMemory01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-01-twotone-rounded IconUsbMemory01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbMemory01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-01-solid-rounded IconUsbMemory01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbMemory01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-01-bulk-rounded IconUsbMemory01BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconUsbMemory01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-01-stroke-sharp IconUsbMemory01StrokeSharp"
    >
      <path 
        d={d.d8} 
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbMemory01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-01-solid-sharp IconUsbMemory01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUsbMemory01: TheIconSelfPack = {
  name: 'UsbMemory01',
  StrokeRounded: IconUsbMemory01StrokeRounded,
  DuotoneRounded: IconUsbMemory01DuotoneRounded,
  TwotoneRounded: IconUsbMemory01TwotoneRounded,
  SolidRounded: IconUsbMemory01SolidRounded,
  BulkRounded: IconUsbMemory01BulkRounded,
  StrokeSharp: IconUsbMemory01StrokeSharp,
  SolidSharp: IconUsbMemory01SolidSharp,
};