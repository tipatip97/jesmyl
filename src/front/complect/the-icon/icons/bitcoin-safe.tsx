import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 2H13C17.2426 2 19.364 2 20.682 3.31802C22 4.63604 22 6.75736 22 11C22 15.2426 22 17.364 20.682 18.682C19.364 20 17.2426 20 13 20H11C6.75736 20 4.63604 20 3.31802 18.682C2 17.364 2 15.2426 2 11C2 6.75736 2 4.63604 3.31802 3.31802C4.63604 2 6.75736 2 11 2Z',
  d2: 'M7 15C6 14.4692 6 13.6148 6 11.9062V10.0938C6 8.38516 6 7.53082 7 7',
  d3: 'M18 22V20',
  d4: 'M6 22V20',
  d5: 'M12.9375 13.6667L12.9375 8.33333M14.5 8.33333V7M14.5 15V13.6667M12.9375 11H16.0625M16.0625 11C16.5803 11 17 11.4477 17 12V12.6667C17 13.219 16.5803 13.6667 16.0625 13.6667H12M16.0625 11C16.5803 11 17 10.5523 17 10V9.33333C17 8.78105 16.5803 8.33333 16.0625 8.33333H12',
  d6: 'M18 19.25C18.4142 19.25 18.75 19.5858 18.75 20V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V20C17.25 19.5858 17.5858 19.25 18 19.25Z',
  d7: 'M6 19.25C6.41421 19.25 6.75 19.5858 6.75 20V22C6.75 22.4142 6.41421 22.75 6 22.75C5.58579 22.75 5.25 22.4142 5.25 22V20C5.25 19.5858 5.58579 19.25 6 19.25Z',
  d8: 'M10.9431 1.25C8.87001 1.24999 7.23769 1.24997 5.96234 1.42144C4.65376 1.59737 3.60927 1.9661 2.78769 2.78769C1.9661 3.60928 1.59737 4.65376 1.42144 5.96234C1.24997 7.23769 1.24998 8.9839 1.25 11.0569C1.24998 13.13 1.24997 14.7623 1.42144 16.0377C1.59737 17.3462 1.9661 18.3907 2.78769 19.2123C3.60927 20.0339 4.65376 20.4026 5.96234 20.5786C7.23769 20.75 8.87002 20.75 10.9431 20.75H13.0569C15.13 20.75 16.7623 20.75 18.0377 20.5786C19.3462 20.4026 20.3907 20.0339 21.2123 19.2123C22.0339 18.3907 22.4026 17.3462 22.5786 16.0377C22.75 14.7623 22.75 13.13 22.75 11.057V11.057V11.0569C22.75 8.98391 22.75 7.23769 22.5786 5.96234C22.4026 4.65376 22.0339 3.60928 21.2123 2.78769C20.3907 1.9661 19.3462 1.59737 18.0377 1.42144C16.7623 1.24997 15.13 1.24999 13.0569 1.25H10.9431ZM7.66248 6.64851C7.85669 7.01437 7.71753 7.4684 7.35167 7.6626C7.04456 7.82562 6.92672 7.99478 6.85207 8.28952C6.75542 8.67109 6.75002 9.20104 6.75002 10.094V11.9063C6.75002 12.7993 6.75542 13.3292 6.85207 13.7108C6.92672 14.0055 7.04456 14.1747 7.35167 14.3377C7.71753 14.5319 7.85669 14.9859 7.66248 15.3518C7.46827 15.7177 7.01424 15.8568 6.64838 15.6626C5.95549 15.2948 5.57333 14.7714 5.39798 14.0791C5.24968 13.4936 5.24984 12.7714 5.25001 11.9868L5.25002 11.9063V10.094L5.25001 10.0135C5.24984 9.22886 5.24968 8.50673 5.39798 7.92122C5.57333 7.22892 5.95549 6.70549 6.64838 6.33769C7.01424 6.14349 7.46827 6.28264 7.66248 6.64851ZM15.25 7C15.25 6.58579 14.9142 6.25 14.5 6.25C14.0858 6.25 13.75 6.58579 13.75 7V7.58333H12C11.5858 7.58333 11.25 7.91912 11.25 8.33333C11.25 8.74755 11.5858 9.08333 12 9.08333H12.1875V12.9167H12C11.5858 12.9167 11.25 13.2525 11.25 13.6667C11.25 14.0809 11.5858 14.4167 12 14.4167H13.75V15C13.75 15.4142 14.0858 15.75 14.5 15.75C14.9142 15.75 15.25 15.4142 15.25 15V14.4167H16.0625C17.0393 14.4167 17.75 13.5868 17.75 12.6667V12C17.75 11.6376 17.6398 11.2892 17.4465 11C17.6398 10.7108 17.75 10.3624 17.75 10V9.33333C17.75 8.41317 17.0393 7.58333 16.0625 7.58333H15.25V7ZM13.6875 10.25V9.08333H16.0625C16.1212 9.08333 16.25 9.14893 16.25 9.33333V10C16.25 10.1844 16.1212 10.25 16.0625 10.25H13.6875ZM13.6875 11.75H16.0625C16.1212 11.75 16.25 11.8156 16.25 12V12.6667C16.25 12.8511 16.1212 12.9167 16.0625 12.9167H13.6875V11.75Z',
  d9: 'M10.9431 1.25C8.87001 1.24999 7.23769 1.24997 5.96234 1.42144C4.65376 1.59737 3.60927 1.9661 2.78769 2.78769C1.9661 3.60928 1.59737 4.65376 1.42144 5.96234C1.24997 7.23769 1.24998 8.9839 1.25 11.0569C1.24998 13.13 1.24997 14.7623 1.42144 16.0377C1.59737 17.3462 1.9661 18.3907 2.78769 19.2123C3.60927 20.0339 4.65376 20.4026 5.96234 20.5786C7.23769 20.75 8.87002 20.75 10.9431 20.75H13.0569C15.13 20.75 16.7623 20.75 18.0377 20.5786C19.3462 20.4026 20.3907 20.0339 21.2123 19.2123C22.0339 18.3907 22.4026 17.3462 22.5786 16.0377C22.75 14.7623 22.75 13.13 22.75 11.0569C22.75 8.98391 22.75 7.23769 22.5786 5.96234C22.4026 4.65376 22.0339 3.60928 21.2123 2.78769C20.3907 1.9661 19.3462 1.59737 18.0377 1.42144C16.7623 1.24997 15.13 1.24999 13.0569 1.25H10.9431Z',
  d10: 'M7.66248 6.64851C7.85669 7.01437 7.71753 7.4684 7.35167 7.6626C7.04456 7.82562 6.92672 7.99478 6.85207 8.28952C6.75542 8.67109 6.75002 9.20104 6.75002 10.094V11.9063C6.75002 12.7993 6.75542 13.3292 6.85207 13.7108C6.92672 14.0055 7.04456 14.1747 7.35167 14.3377C7.71753 14.5319 7.85669 14.9859 7.66248 15.3518C7.46827 15.7177 7.01424 15.8568 6.64838 15.6626C5.95549 15.2948 5.57333 14.7714 5.39798 14.0791C5.24968 13.4936 5.24984 12.7714 5.25001 11.9868C5.25002 11.96 5.25002 11.9332 5.25002 11.9063V10.094C5.25002 10.0671 5.25002 10.0403 5.25001 10.0135C5.24984 9.22886 5.24968 8.50673 5.39798 7.92122C5.57333 7.22892 5.95549 6.70549 6.64838 6.33769C7.01424 6.14349 7.46827 6.28264 7.66248 6.64851Z',
  d11: 'M14.5 6.25C14.9142 6.25 15.25 6.58579 15.25 7V7.58333H16.0625C17.0393 7.58333 17.75 8.41317 17.75 9.33333V10C17.75 10.3624 17.6398 10.7108 17.4465 11C17.6398 11.2892 17.75 11.6376 17.75 12V12.6667C17.75 13.5868 17.0393 14.4167 16.0625 14.4167H15.25V15C15.25 15.4142 14.9142 15.75 14.5 15.75C14.0858 15.75 13.75 15.4142 13.75 15V14.4167H12C11.5858 14.4167 11.25 14.0809 11.25 13.6667C11.25 13.2525 11.5858 12.9167 12 12.9167H12.1875L12.1875 9.08333H12C11.5858 9.08333 11.25 8.74755 11.25 8.33333C11.25 7.91912 11.5858 7.58333 12 7.58333H13.75V7C13.75 6.58579 14.0858 6.25 14.5 6.25ZM13.6875 9.08333V10.25H16.0625C16.1212 10.25 16.25 10.1844 16.25 10V9.33333C16.25 9.14893 16.1212 9.08333 16.0625 9.08333H13.6875ZM16.0625 11.75H13.6875L13.6875 12.9167H16.0625C16.1212 12.9167 16.25 12.8511 16.25 12.6667V12C16.25 11.8156 16.1212 11.75 16.0625 11.75Z',
  d12: 'M17.25 20.6604C17.5265 20.6387 17.7889 20.6118 18.0377 20.5784C18.2844 20.5452 18.5218 20.5052 18.75 20.4565V21.9998C18.75 22.414 18.4142 22.7498 18 22.7498C17.5858 22.7498 17.25 22.414 17.25 21.9998V20.6604Z',
  d13: 'M5.25 20.4565C5.47824 20.5052 5.7156 20.5452 5.96234 20.5784C6.2111 20.6118 6.47345 20.6387 6.75 20.6604V21.9998C6.75 22.414 6.41421 22.7498 6 22.7498C5.58579 22.7498 5.25 22.414 5.25 21.9998V20.4565Z',
  d14: 'M22 2.00041L2 2V20H22V2.00041Z',
  d15: 'M7.5 15.5L6 14V8L7.5 7',
  d16: 'M7 18.75V22.75H5V18.75H7ZM19 18.75V22.75H17V18.75H19Z',
  d17: 'M1.25 1.25L22.75 1.25044V20.75H1.25V1.25ZM6.75 8.4014L7.91603 7.62405L7.08397 6.37598L5.25 7.59863V14.3107L6.96967 16.0303L8.03033 14.9697L6.75 13.6894V8.4014ZM15.25 7.58333V6.25H13.75V7.58333H11.25V9.08333H12.1875V12.9167H11.25V14.4167H13.75V15.75H15.25V14.4167H16.0625C17.0393 14.4167 17.75 13.5868 17.75 12.6667V12C17.75 11.6376 17.6398 11.2892 17.4465 11C17.6398 10.7108 17.75 10.3624 17.75 10V9.33333C17.75 8.41317 17.0393 7.58333 16.0625 7.58333H15.25ZM13.6875 10.25V9.08333H16.0625C16.1212 9.08333 16.25 9.14893 16.25 9.33333V10C16.25 10.1844 16.1212 10.25 16.0625 10.25H13.6875ZM13.6875 11.75H16.0625C16.1212 11.75 16.25 11.8156 16.25 12V12.6667C16.25 12.8511 16.1212 12.9167 16.0625 12.9167H13.6875V11.75Z',
};

export const IconBitcoinSafeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-safe-stroke-rounded IconBitcoinSafeStrokeRounded"
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

export const IconBitcoinSafeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-safe-duotone-rounded IconBitcoinSafeDuotoneRounded"
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

export const IconBitcoinSafeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-safe-twotone-rounded IconBitcoinSafeTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBitcoinSafeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-safe-solid-rounded IconBitcoinSafeSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinSafeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-safe-bulk-rounded IconBitcoinSafeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinSafeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-safe-stroke-sharp IconBitcoinSafeStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinSafeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-safe-solid-sharp IconBitcoinSafeSolidSharp"
    >
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

export const iconPackOfBitcoinSafe: TheIconSelfPack = {
  name: 'BitcoinSafe',
  StrokeRounded: IconBitcoinSafeStrokeRounded,
  DuotoneRounded: IconBitcoinSafeDuotoneRounded,
  TwotoneRounded: IconBitcoinSafeTwotoneRounded,
  SolidRounded: IconBitcoinSafeSolidRounded,
  BulkRounded: IconBitcoinSafeBulkRounded,
  StrokeSharp: IconBitcoinSafeStrokeSharp,
  SolidSharp: IconBitcoinSafeSolidSharp,
};