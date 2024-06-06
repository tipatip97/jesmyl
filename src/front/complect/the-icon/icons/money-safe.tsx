import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 2H11C6.75736 2 4.63604 2 3.31802 3.31802C2 4.63604 2 6.75736 2 11C2 15.2426 2 17.364 3.31802 18.682C4.63604 20 6.75736 20 11 20H13C17.2426 20 19.364 20 20.682 18.682C22 17.364 22 15.2426 22 11C22 6.75736 22 4.63604 20.682 3.31802C19.364 2 17.2426 2 13 2Z',
  d2: 'M17 15C18 14.4692 18 13.6148 18 11.9062V10.0938C18 8.38516 18 7.53082 17 7',
  d3: 'M18 22V20',
  d4: 'M6 22V20',
  d5: 'M9.49983 13C10.6158 13 11.5205 12.1046 11.5205 11C11.5205 9.89543 10.6158 9 9.49983 9M9.49983 13C8.38384 13 7.47914 12.1046 7.47914 11C7.47914 9.89543 8.38384 9 9.49983 9M9.49983 13V15M9.49983 9V7M7.74987 12L5.9999 13M12.9998 9L11.2498 10M11.2499 12L12.9999 13M6 9L7.74997 10',
  d6: 'M11 2H13C17.2426 2 19.364 2 20.682 3.31802C22 4.63604 22 6.75736 22 11C22 15.2426 22 17.364 20.682 18.682C19.364 20 17.2426 20 13 20H11C6.75736 20 4.63604 20 3.31802 18.682C2 17.364 2 15.2426 2 11C2 6.75736 2 4.63604 3.31802 3.31802C4.63604 2 6.75736 2 11 2ZM9.49921 13C10.6152 13 11.5199 12.1046 11.5199 11C11.5199 9.89543 10.6152 9 9.49921 9C8.38321 9 7.47852 9.89543 7.47852 11C7.47852 12.1046 8.38321 13 9.49921 13Z',
  d7: 'M17 20.6779C17.3696 20.6537 17.7151 20.6213 18.0377 20.578C18.3758 20.5325 18.6964 20.4741 19 20.3984V21.9994C19 22.5517 18.5523 22.9994 18 22.9994C17.4477 22.9994 17 22.5517 17 21.9994V20.6779Z',
  d8: 'M5 20.3984C5.30362 20.4741 5.62416 20.5325 5.96234 20.578C6.28494 20.6213 6.63037 20.6537 7 20.6779V21.9994C7 22.5517 6.55228 22.9994 6 22.9994C5.44772 22.9994 5 22.5517 5 21.9994V20.3984Z',
  d9: 'M13.0569 1.25H10.9431H10.943C8.87001 1.24999 7.23769 1.24998 5.96234 1.42144C4.65376 1.59737 3.60928 1.9661 2.78769 2.78769C1.9661 3.60928 1.59737 4.65376 1.42144 5.96234C1.24998 7.23769 1.24999 8.87001 1.25 10.943V10.9431V11.0569V11.057C1.24999 13.13 1.24998 14.7623 1.42144 16.0377C1.59737 17.3462 1.9661 18.3907 2.78769 19.2123C3.60928 20.0339 4.65376 20.4026 5.96234 20.5786C7.23769 20.75 8.87002 20.75 10.9431 20.75H13.0569C15.13 20.75 16.7623 20.75 18.0377 20.5786C19.3462 20.4026 20.3907 20.0339 21.2123 19.2123C22.0339 18.3907 22.4026 17.3462 22.5786 16.0377C22.75 14.7623 22.75 13.13 22.75 11.0569V10.9431C22.75 8.87002 22.75 7.23769 22.5786 5.96234C22.4026 4.65376 22.0339 3.60928 21.2123 2.78769C20.3907 1.9661 19.3462 1.59737 18.0377 1.42144C16.7623 1.24998 15.13 1.24999 13.057 1.25H13.0569ZM9.50007 6.25C9.91428 6.25 10.2501 6.58579 10.2501 7V8.35213C10.7014 8.47794 11.107 8.71449 11.4342 9.03094L12.6279 8.34882C12.9876 8.14331 13.4457 8.26825 13.6512 8.62789C13.8567 8.98753 13.7318 9.44567 13.3721 9.65118L12.1876 10.328C12.2419 10.5429 12.2708 10.768 12.2708 11C12.2708 11.232 12.2419 11.4571 12.1876 11.6719L13.3722 12.3488C13.7319 12.5543 13.8568 13.0125 13.6513 13.3721C13.4458 13.7317 12.9877 13.8567 12.628 13.6512L11.4343 12.969C11.107 13.2855 10.7014 13.5221 10.2501 13.6479V15C10.2501 15.4142 9.91428 15.75 9.50007 15.75C9.08585 15.75 8.75007 15.4142 8.75007 15V13.6479C8.29874 13.5221 7.89318 13.2855 7.56592 12.9691L6.37224 13.6512C6.0126 13.8567 5.55446 13.7317 5.34895 13.3721C5.14344 13.0125 5.26838 12.5543 5.62802 12.3488L6.81251 11.672C6.75822 11.4571 6.72937 11.2321 6.72937 11C6.72937 10.7679 6.75823 10.5428 6.81252 10.328L5.62812 9.65118C5.26849 9.44567 5.14354 8.98753 5.34905 8.62789C5.55456 8.26825 6.0127 8.14331 6.37234 8.34882L7.56596 9.0309C7.89321 8.71446 8.29876 8.47793 8.75007 8.35213V7C8.75007 6.58579 9.08585 6.25 9.50007 6.25ZM8.39381 10.3853L8.40151 10.3721L8.40205 10.3712C8.62114 10.0014 9.02796 9.75 9.50019 9.75C10.2093 9.75 10.7709 10.3169 10.7709 11C10.7709 11.6831 10.2093 12.25 9.50019 12.25C8.7911 12.25 8.22949 11.6831 8.22949 11C8.22949 10.7776 8.28903 10.5675 8.39381 10.3853ZM16.6485 7.6626C16.2826 7.4684 16.1435 7.01437 16.3377 6.64851C16.5319 6.28264 16.9859 6.14349 17.3518 6.33769C18.0447 6.70549 18.4268 7.22892 18.6022 7.92122C18.7505 8.50673 18.7503 9.22886 18.7502 10.0135V11.9868C18.7503 12.7714 18.7505 13.4936 18.6022 14.0791C18.4268 14.7714 18.0447 15.2948 17.3518 15.6626C16.9859 15.8568 16.5319 15.7177 16.3377 15.3518C16.1435 14.9859 16.2826 14.5319 16.6485 14.3377C16.9556 14.1747 17.0735 14.0055 17.1481 13.7108C17.2448 13.3292 17.2501 12.7993 17.2501 11.9063V10.094C17.2501 9.20104 17.2448 8.67109 17.1481 8.28952C17.0735 7.99478 16.9556 7.82562 16.6485 7.6626Z',
  d10: 'M13.0569 1.25H10.9431C8.87002 1.24999 7.23769 1.24997 5.96234 1.42144C4.65376 1.59737 3.60928 1.9661 2.78769 2.78769C1.9661 3.60928 1.59737 4.65376 1.42144 5.96234C1.24997 7.23769 1.24999 8.87002 1.25 10.9431V11.0569C1.24999 13.13 1.24997 14.7623 1.42144 16.0377C1.59737 17.3462 1.9661 18.3907 2.78769 19.2123C3.60928 20.0339 4.65376 20.4026 5.96234 20.5786C7.23769 20.75 8.87002 20.75 10.9431 20.75H13.0569C15.13 20.75 16.7623 20.75 18.0377 20.5786C19.3462 20.4026 20.3907 20.0339 21.2123 19.2123C22.0339 18.3907 22.4026 17.3462 22.5786 16.0377C22.75 14.7623 22.75 13.13 22.75 11.0569V10.9431C22.75 8.87002 22.75 7.23769 22.5786 5.96234C22.4026 4.65376 22.0339 3.60928 21.2123 2.78769C20.3907 1.9661 19.3462 1.59737 18.0377 1.42144C16.7623 1.24997 15.13 1.24999 13.0569 1.25Z',
  d11: 'M9.50007 6.25C9.91428 6.25 10.2501 6.58579 10.2501 7V8.35213C10.7014 8.47794 11.107 8.71449 11.4342 9.03094L12.6279 8.34882C12.9876 8.14331 13.4457 8.26825 13.6512 8.62789C13.8567 8.98753 13.7318 9.44567 13.3721 9.65118L12.1876 10.328C12.2419 10.5429 12.2708 10.768 12.2708 11C12.2708 11.232 12.2419 11.4571 12.1876 11.6719L13.3722 12.3488C13.7319 12.5543 13.8568 13.0125 13.6513 13.3721C13.4458 13.7317 12.9877 13.8567 12.628 13.6512L11.4343 12.969C11.107 13.2855 10.7014 13.5221 10.2501 13.6479V15C10.2501 15.4142 9.91428 15.75 9.50007 15.75C9.08585 15.75 8.75007 15.4142 8.75007 15V13.6479C8.29874 13.5221 7.89318 13.2855 7.56592 12.9691L6.37224 13.6512C6.0126 13.8567 5.55446 13.7317 5.34895 13.3721C5.14344 13.0125 5.26838 12.5543 5.62802 12.3488L6.81251 11.672C6.75822 11.4571 6.72937 11.2321 6.72937 11C6.72937 10.7679 6.75823 10.5428 6.81252 10.328L5.62812 9.65118C5.26849 9.44567 5.14354 8.98753 5.34905 8.62789C5.55456 8.26825 6.0127 8.14331 6.37234 8.34882L7.56596 9.0309C7.89321 8.71446 8.29876 8.47793 8.75007 8.35213V7C8.75007 6.58579 9.08585 6.25 9.50007 6.25ZM8.39381 10.3853L8.40151 10.3721L8.40205 10.3712C8.62114 10.0014 9.02796 9.75 9.50019 9.75C10.2093 9.75 10.7709 10.3169 10.7709 11C10.7709 11.6831 10.2093 12.25 9.50019 12.25C8.7911 12.25 8.22949 11.6831 8.22949 11C8.22949 10.7776 8.28903 10.5675 8.39381 10.3853Z',
  d12: 'M16.3377 6.64851C16.1435 7.01437 16.2826 7.4684 16.6485 7.6626C16.9556 7.82562 17.0735 7.99478 17.1481 8.28952C17.2448 8.67109 17.2501 9.20104 17.2501 10.094V11.9063C17.2501 12.7993 17.2448 13.3292 17.1481 13.7108C17.0735 14.0055 16.9556 14.1747 16.6485 14.3377C16.2826 14.5319 16.1435 14.9859 16.3377 15.3518C16.5319 15.7177 16.9859 15.8568 17.3518 15.6626C18.0447 15.2948 18.4268 14.7714 18.6022 14.0791C18.7505 13.4936 18.7503 12.7714 18.7502 11.9868V10.0135C18.7503 9.22886 18.7505 8.50673 18.6022 7.92122C18.4268 7.22892 18.0447 6.70549 17.3518 6.33769C16.9859 6.14349 16.5319 6.28264 16.3377 6.64851Z',
  d13: 'M22 2H2V19H22V2Z',
  d14: 'M17 6.5L18 7.5V13.5L17 14.5',
  d15: 'M18 22V19',
  d16: 'M6 22V19',
  d17: 'M9.49994 12.5C10.6159 12.5 11.5206 11.6046 11.5206 10.5C11.5206 9.39543 10.6159 8.5 9.49994 8.5M9.49994 12.5C8.38394 12.5 7.47924 11.6046 7.47924 10.5C7.47924 9.39543 8.38394 8.5 9.49994 8.5M9.49994 12.5V14.5M9.49994 8.5V6.5M7.74997 11.5L6 12.5M12.9999 8.5L11.2499 9.5M11.25 11.5L13 12.5M6.0001 8.5L7.75008 9.5',
  d18: 'M7 19.25V22.25H5V19.25H7ZM19 19.25V22.25H17V19.25H19Z',
  d19: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V19.5C22.75 19.9142 22.4142 20.25 22 20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V2.5ZM17.5294 6.46967L18.7491 7.68934V14.3107L17.5294 15.5303L16.4688 14.4697L17.2491 13.6893V8.31066L16.4688 7.53033L17.5294 6.46967ZM8.749 7V8.35213C8.29769 8.47793 7.89215 8.71446 7.56489 9.0309L6.37127 8.34882L5.62706 9.65118L6.81145 10.328C6.75716 10.5428 6.7283 10.7679 6.7283 11C6.7283 11.2321 6.75716 11.4571 6.81144 11.672L5.62695 12.3488L6.37117 13.6512L7.56485 12.9691C7.89211 13.2855 8.29767 13.5221 8.749 13.6479V15H10.249V13.6479C10.7003 13.5221 11.1059 13.2855 11.4332 12.969L12.627 13.6512L13.3712 12.3488L12.1866 11.6719C12.2408 11.4571 12.2697 11.232 12.2697 11C12.2697 10.768 12.2408 10.5429 12.1866 10.328L13.3711 9.65118L12.6269 8.34882L11.4332 9.03094C11.1059 8.71449 10.7003 8.47794 10.249 8.35213V7H8.749ZM8.2283 11C8.2283 10.3169 8.78992 9.75 9.499 9.75C10.2081 9.75 10.7697 10.3169 10.7697 11C10.7697 11.6831 10.2081 12.25 9.499 12.25C8.78992 12.25 8.2283 11.6831 8.2283 11Z',
};

export const IconMoneySafeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-safe-stroke-rounded IconMoneySafeStrokeRounded"
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

export const IconMoneySafeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-safe-duotone-rounded IconMoneySafeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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

export const IconMoneySafeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-safe-twotone-rounded IconMoneySafeTwotoneRounded"
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

export const IconMoneySafeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-safe-solid-rounded IconMoneySafeSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMoneySafeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-safe-bulk-rounded IconMoneySafeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySafeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-safe-stroke-sharp IconMoneySafeStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySafeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-safe-solid-sharp IconMoneySafeSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfMoneySafe: TheIconSelfPack = {
  name: 'MoneySafe',
  StrokeRounded: IconMoneySafeStrokeRounded,
  DuotoneRounded: IconMoneySafeDuotoneRounded,
  TwotoneRounded: IconMoneySafeTwotoneRounded,
  SolidRounded: IconMoneySafeSolidRounded,
  BulkRounded: IconMoneySafeBulkRounded,
  StrokeSharp: IconMoneySafeStrokeSharp,
  SolidSharp: IconMoneySafeSolidSharp,
};