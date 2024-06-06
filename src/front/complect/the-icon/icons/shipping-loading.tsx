import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 9.87755V6H18V9.87755C18 12.7637 18 14.2068 17.0888 15.1034C16.1776 16 14.711 16 11.7778 16H10.2222C7.28904 16 5.82245 16 4.91122 15.1034C4 14.2068 4 12.7637 4 9.87755Z',
  d2: 'M4 6L4.67308 4.46154C5.19508 3.26838 5.45609 2.6718 5.98513 2.3359C6.51417 2 7.19278 2 8.55 2H13.45C14.8072 2 15.4858 2 16.0149 2.3359C16.5439 2.6718 16.8049 3.26838 17.3269 4.46154L18 6',
  d3: 'M9.5 9H12.5',
  d4: 'M3 16H18C19.6569 16 21 17.3431 21 19C21 20.6569 19.6569 22 18 22H3',
  d5: 'M17 19H17.009M11 19H11.009M5 19H5.00898',
  d6: 'M2.25 16.1875C2.25 15.6697 2.68652 15.25 3.225 15.25H17.85C20.0039 15.25 21.75 16.9289 21.75 19C21.75 21.0711 20.0039 22.75 17.85 22.75H3.225C2.68652 22.75 2.25 22.3303 2.25 21.8125C2.25 21.2947 2.68652 20.875 3.225 20.875H17.85C18.927 20.875 19.8 20.0355 19.8 19C19.8 17.9645 18.927 17.125 17.85 17.125H3.225C2.68652 17.125 2.25 16.7053 2.25 16.1875Z',
  d7: 'M4 19C4 18.4477 4.44772 18 5 18H5.00898C5.56126 18 6.00898 18.4477 6.00898 19C6.00898 19.5523 5.56126 20 5.00898 20H5C4.44772 20 4 19.5523 4 19ZM9.99551 19C9.99551 18.4477 10.4432 18 10.9955 18H11.0045C11.5568 18 12.0045 18.4477 12.0045 19C12.0045 19.5523 11.5568 20 11.0045 20H10.9955C10.4432 20 9.99551 19.5523 9.99551 19ZM15.991 19C15.991 18.4477 16.4387 18 16.991 18H17C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20H16.991C16.4387 20 15.991 19.5523 15.991 19Z',
  d8: 'M8.58013 1.25H13.4199C14.0375 1.24997 14.5733 1.24995 15.0163 1.29337C15.4916 1.33994 15.9478 1.44271 16.3772 1.7007C16.8099 1.96064 17.0979 2.30744 17.3348 2.69545C17.5527 3.0522 17.7609 3.50261 17.997 4.01337L18.6685 5.46574C18.883 5.92953 18.6595 6.47001 18.1693 6.67292C17.6792 6.87583 17.108 6.66434 16.8935 6.20054L16.2415 4.79035C15.98 4.22482 15.8144 3.86996 15.6573 3.61268C15.5133 3.37687 15.4186 3.2963 15.3388 3.24835C15.2557 3.19844 15.127 3.14727 14.8167 3.11687C14.4854 3.0844 14.0508 3.08326 13.3734 3.08326H8.62664C7.94917 3.08326 7.51463 3.0844 7.18325 3.11687C6.87301 3.14727 6.74431 3.19844 6.66124 3.24835C6.58143 3.2963 6.4867 3.37687 6.34269 3.61268C6.18557 3.86996 6.01997 4.22482 5.75849 4.79035L5.10646 6.20054C4.89202 6.66434 4.32084 6.87583 3.83068 6.67292C3.34053 6.47001 3.11702 5.92953 3.33146 5.46574L3.98349 4.05554C3.99001 4.04143 3.99651 4.02737 4.00299 4.01335C4.23911 3.5026 4.44732 3.05219 4.66519 2.69545C4.90214 2.30744 5.19007 1.96064 5.62276 1.7007C6.05218 1.44271 6.50841 1.33994 6.98368 1.29337C7.42672 1.24995 7.96248 1.24997 8.58013 1.25Z',
  d9: 'M4 5.25C3.58579 5.25 3.25 5.58579 3.25 6L3.25 9.93331V9.93333V9.93334C3.24998 11.329 3.24996 12.4537 3.37081 13.3381C3.49638 14.2571 3.76488 15.0276 4.3852 15.638C5.00383 16.2467 5.78195 16.5087 6.71013 16.6314C7.60655 16.75 8.74741 16.75 10.1678 16.75H10.1679H10.1679H11.8321H11.8321H11.8322C13.2526 16.75 14.3935 16.75 15.2899 16.6314C16.2181 16.5087 16.9962 16.2467 17.6148 15.638C18.2351 15.0276 18.5036 14.2571 18.6292 13.3381C18.75 12.4536 18.75 11.329 18.75 9.93331V6C18.75 5.58579 18.4142 5.25 18 5.25L4 5.25ZM9.5 8C8.94772 8 8.5 8.44771 8.5 9C8.5 9.55228 8.94772 10 9.5 10H12.5C13.0523 10 13.5 9.55228 13.5 9C13.5 8.44771 13.0523 8 12.5 8L9.5 8Z',
  d10: 'M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V9.93331C18.75 11.329 18.75 12.4536 18.6292 13.3381C18.5036 14.2571 18.2351 15.0276 17.6148 15.638C16.9962 16.2467 16.2181 16.5087 15.2899 16.6314C14.3935 16.75 13.2526 16.75 11.8321 16.75H11.8321H10.1679H10.1679C8.74743 16.75 7.60655 16.75 6.71013 16.6314C5.78195 16.5087 5.00383 16.2467 4.3852 15.638C3.76488 15.0276 3.49638 14.2571 3.37081 13.3381C3.24996 12.4537 3.24998 11.329 3.25 9.93333V9.93331V6Z',
  d11: 'M8.5 9C8.5 8.44772 8.94772 8 9.5 8H12.5C13.0523 8 13.5 8.44772 13.5 9C13.5 9.55228 13.0523 10 12.5 10H9.5C8.94772 10 8.5 9.55228 8.5 9Z',
  d12: 'M16.454 5.25H18C18.3868 5.25 18.7053 5.54287 18.7457 5.91898C18.7607 5.76905 18.7369 5.6135 18.6685 5.46574L17.997 4.01337C17.7609 3.50261 17.5527 3.0522 17.3348 2.69545C17.0979 2.30744 16.8099 1.96064 16.3772 1.7007C15.9478 1.44271 15.4916 1.33994 15.0163 1.29337C14.5733 1.24995 14.0375 1.24997 13.4199 1.25H8.58013C7.96248 1.24997 7.42672 1.24995 6.98368 1.29337C6.50841 1.33994 6.05218 1.44271 5.62276 1.7007C5.19007 1.96064 4.90214 2.30744 4.66519 2.69545C4.44732 3.05219 4.23911 3.50259 4.00299 4.01335L3.33146 5.46574C3.26314 5.6135 3.23928 5.76905 3.25432 5.91899C3.29472 5.54287 3.61316 5.25 4 5.25H5.54596L5.75849 4.79035C6.01997 4.22482 6.18557 3.86996 6.34269 3.61268C6.4867 3.37687 6.58143 3.2963 6.66124 3.24835C6.74431 3.19844 6.87301 3.14727 7.18325 3.11687C7.51463 3.0844 7.94917 3.08326 8.62664 3.08326H13.3734C14.0508 3.08326 14.4854 3.0844 14.8167 3.11687C15.127 3.14727 15.2557 3.19844 15.3388 3.24835C15.4186 3.2963 15.5133 3.37687 15.6573 3.61268C15.8144 3.86996 15.98 4.22482 16.2415 4.79035L16.454 5.25Z',
  d13: 'M5 16V6H19V16H5Z',
  d14: 'M5 6L7 2H17L19 6',
  d15: 'M10.5 9H13.5',
  d16: 'M2 16H19C20.6569 16 22 17.3431 22 19C22 20.6569 20.6569 22 19 22H2',
  d17: 'M18 19H18.009M12 19H12.009M6 19H6.00898',
  d18: 'M18.5 16.5H1.5V15H18.5C20.5711 15 22.25 16.6789 22.25 18.75C22.25 20.8211 20.5711 22.5 18.5 22.5H1.5V21H18.5C19.7426 21 20.75 19.9926 20.75 18.75C20.75 17.5074 19.7426 16.5 18.5 16.5Z',
  d19: 'M19.2529 15.7812C19.2529 16.3163 18.8192 16.75 18.2842 16.75H4.72168C4.18665 16.75 3.75293 16.3163 3.75293 15.7812V5.86506L6.06046 1.25H16.9454L19.2529 5.86506V15.7812ZM7.25684 3.1875L6.28809 5.125H16.7156L15.7469 3.1875H7.25684ZM9.99902 9.75H12.999V8.25H9.99902V9.75Z',
  d20: 'M18.5 16.75H1.5V14.75H18.5C20.7091 14.75 22.5 16.5409 22.5 18.75C22.5 20.9591 20.7091 22.75 18.5 22.75H1.5V20.75H18.5C19.6046 20.75 20.5 19.8546 20.5 18.75C20.5 17.6454 19.6046 16.75 18.5 16.75Z',
  d21: 'M4.50391 18.75C4.50391 18.1977 4.95133 17.75 5.50327 17.75H5.51224C6.06417 17.75 6.5116 18.1977 6.5116 18.75C6.5116 19.3023 6.06417 19.75 5.51224 19.75H5.50327C4.95133 19.75 4.50391 19.3023 4.50391 18.75ZM10.5001 18.75C10.5001 18.1977 10.9475 17.75 11.4994 17.75H11.5084C12.0603 17.75 12.5078 18.1977 12.5078 18.75C12.5078 19.3023 12.0603 19.75 11.5084 19.75H11.4994C10.9475 19.75 10.5001 19.3023 10.5001 18.75ZM16.4962 18.75C16.4962 18.1977 16.9436 17.75 17.4956 17.75H17.5045C18.0565 17.75 18.5039 18.1977 18.5039 18.75C18.5039 19.3023 18.0565 19.75 17.5045 19.75H17.4956C16.9436 19.75 16.4962 19.3023 16.4962 18.75Z',
};

export const IconShippingLoadingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-loading-stroke-rounded IconShippingLoadingStrokeRounded"
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

export const IconShippingLoadingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-loading-duotone-rounded IconShippingLoadingDuotoneRounded"
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

export const IconShippingLoadingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-loading-twotone-rounded IconShippingLoadingTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShippingLoadingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-loading-solid-rounded IconShippingLoadingSolidRounded"
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

export const IconShippingLoadingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-loading-bulk-rounded IconShippingLoadingBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShippingLoadingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-loading-stroke-sharp IconShippingLoadingStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShippingLoadingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-loading-solid-sharp IconShippingLoadingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShippingLoading: TheIconSelfPack = {
  name: 'ShippingLoading',
  StrokeRounded: IconShippingLoadingStrokeRounded,
  DuotoneRounded: IconShippingLoadingDuotoneRounded,
  TwotoneRounded: IconShippingLoadingTwotoneRounded,
  SolidRounded: IconShippingLoadingSolidRounded,
  BulkRounded: IconShippingLoadingBulkRounded,
  StrokeSharp: IconShippingLoadingStrokeSharp,
  SolidSharp: IconShippingLoadingSolidSharp,
};