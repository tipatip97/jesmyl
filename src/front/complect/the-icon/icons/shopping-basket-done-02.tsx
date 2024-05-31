import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 22H10.0796C7.74664 22 6.58014 22 5.76809 21.2752C4.95603 20.5505 4.75097 19.3264 4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L20.1413 14',
  d2: 'M14 20.3333C14 20.3333 14.875 20.3333 15.75 22C15.75 22 18.5294 17.8333 21 17',
  d3: 'M7 7.5V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V7.5',
  d4: 'M4.5 17.5H11.5',
  d5: 'M4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L19.6591 16.8781C19.6167 17.1313 19.5765 17.3714 19.5376 17.5993H4.46242C4.42349 17.3714 4.38327 17.1313 4.34085 16.8781Z',
  d6: 'M11.875 3.125C9.66586 3.125 7.875 4.91586 7.875 7.125V7.625C7.875 8.17728 7.42728 8.625 6.875 8.625C6.32272 8.625 5.875 8.17728 5.875 7.625V7.125C5.875 3.81129 8.56129 1.125 11.875 1.125C15.1887 1.125 17.875 3.81129 17.875 7.125V7.625C17.875 8.17728 17.4273 8.625 16.875 8.625C16.3227 8.625 15.875 8.17728 15.875 7.625V7.125C15.875 4.91586 14.0841 3.125 11.875 3.125Z',
  d7: 'M21.8225 16.5557C21.9991 17.079 21.7179 17.6463 21.1946 17.8228C20.7446 17.9746 20.218 18.3041 19.6534 18.7756C19.0984 19.2391 18.557 19.7973 18.0758 20.3467C17.5964 20.8939 17.0772 21.5809 16.7895 21.9691C16.646 22.1627 16.5331 22.3213 16.4569 22.4302C16.2611 22.7236 15.9249 22.8924 15.5726 22.8739C15.2202 22.8554 14.9036 22.6526 14.7396 22.3401C14.3663 21.629 14.0381 21.3578 13.8859 21.2612C13.8315 21.2267 13.7936 21.2104 13.7753 21.2037C13.2698 21.1536 12.875 20.7272 12.875 20.2086C12.875 19.6563 13.3227 19.2086 13.875 19.2086C14.4273 19.2086 14.7075 19.4137 14.9579 19.5727C15.1811 19.7145 15.4127 19.9037 15.6451 20.1536C15.9073 19.8158 16.2209 19.4289 16.5713 19.0289C17.0938 18.4324 17.7104 17.7927 18.3714 17.2406C19.0228 16.6965 19.7701 16.1926 20.5554 15.9277C21.0787 15.7512 21.646 16.0323 21.8225 16.5557Z',
  d8: 'M3.60622 6.67985C3.96847 6.62488 4.42069 6.62494 4.91418 6.625H18.8358C19.3293 6.62494 19.7815 6.62488 20.1438 6.67985C20.5459 6.74089 20.9689 6.88713 21.2795 7.28259C21.5825 7.66848 21.6366 8.1121 21.6231 8.51862C21.6106 8.89781 21.5326 9.36325 21.4447 9.88736L20.7697 13.9167C20.7348 14.1255 20.7173 14.23 20.6581 14.2952C20.5989 14.3604 20.4754 14.3936 20.2284 14.46C20.1775 14.4737 20.1266 14.489 20.076 14.5061C19.0395 14.8557 18.1266 15.4903 17.4098 16.089C17.3562 16.1338 17.303 16.179 17.2502 16.2245C17.1628 16.2998 17.1192 16.3374 17.0686 16.3562C17.0181 16.375 16.9621 16.375 16.85 16.375H3.89991C3.65734 16.375 3.53606 16.375 3.45216 16.304C3.36826 16.233 3.34823 16.1134 3.30815 15.8741L2.30527 9.88734C2.21742 9.36322 2.13942 8.89782 2.12686 8.51862C2.1134 8.1121 2.16745 7.66848 2.47054 7.28259C2.78113 6.88713 3.20406 6.74089 3.60622 6.67985Z',
  d9: 'M11.8392 18.757C11.9694 18.5747 12.0345 18.4835 12.0066 18.4292C11.9787 18.375 11.8743 18.375 11.6656 18.375H4.45718C4.11991 18.375 3.95127 18.375 3.86121 18.4869C3.77114 18.5989 3.8065 18.7602 3.8772 19.0829C3.93428 19.3433 3.99386 19.5846 4.05849 19.8071C4.28233 20.578 4.5905 21.2161 5.14368 21.7098C5.70196 22.2081 6.36025 22.4261 7.13014 22.5279C7.86418 22.6251 8.78041 22.625 9.90298 22.625H11.8371C12.3051 22.625 12.5391 22.625 12.5653 22.5651C12.5915 22.5051 12.4128 22.3119 12.0554 21.9256C11.6354 21.4715 11.375 20.8647 11.375 20.2083C11.375 19.6672 11.5469 19.1662 11.8392 18.757Z',
  d10: 'M11.8394 18.757C11.9696 18.5747 12.0347 18.4835 12.0068 18.4292C11.9789 18.375 11.8745 18.375 11.6658 18.375H4.45738C4.1201 18.375 3.95147 18.375 3.8614 18.4869C3.77134 18.5989 3.80669 18.7602 3.8774 19.0829C3.93447 19.3433 3.99406 19.5846 4.05869 19.8071C4.28253 20.578 4.59069 21.2161 5.14388 21.7098C5.70216 22.2081 6.36045 22.4261 7.13033 22.5279C7.86438 22.6251 8.78061 22.625 9.90318 22.625H11.8373C12.3053 22.625 12.5393 22.625 12.5655 22.5651C12.5917 22.5051 12.413 22.3119 12.0556 21.9256C11.6356 21.4715 11.3752 20.8647 11.3752 20.2083C11.3752 19.6672 11.5471 19.1662 11.8394 18.757Z',
  d11: 'M17.499 7.49976C17.499 4.46219 15.0366 1.99976 11.999 1.99976C8.96145 1.99976 6.49902 4.46219 6.49902 7.49976',
  d12: 'M4.49902 17.4998H11.499',
  d13: 'M13.499 19.9998L15.249 21.9998L20.499 16.9998',
  d14: 'M11.5198 22.0002H5.04591L2.49918 7.53004C2.4981 7.52392 2.50281 7.51831 2.50903 7.51831H21.49C21.4963 7.51831 21.501 7.52395 21.4999 7.53009L20.4179 13.9933',
  d15: 'M22.7508 17.0303L16.7455 22.7497L14.3086 19.9647L15.8137 18.6477L16.8769 19.8627L21.3715 15.582L22.7508 17.0303Z',
  d16: 'M11.5 1.25C8.25021 1.25 5.55745 3.63491 5.07645 6.75H2.00001C1.77881 6.75 1.56889 6.84764 1.42639 7.01682C1.28389 7.186 1.22333 7.40945 1.26091 7.62743L2.79066 16.5H18.2324L20.5977 14.2473L21.7391 7.62743C21.7767 7.40945 21.7161 7.186 21.5736 7.01682C21.4311 6.84764 21.2212 6.75 21 6.75H17.9236C17.4425 3.63491 14.7498 1.25 11.5 1.25ZM11.5 3.25C9.35841 3.25 7.56624 4.74601 7.11151 6.75H15.8885C15.4338 4.74601 13.6416 3.25 11.5 3.25Z',
  d17: 'M13.7044 18.5H3.13549L3.86825 22.75H14.7517L12.1914 19.8239L13.7044 18.5Z',
} as const;

export const IconShoppingBasketDone02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-02-stroke-rounded IconShoppingBasketDone02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-02-duotone-rounded IconShoppingBasketDone02DuotoneRounded"
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

export const IconShoppingBasketDone02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-02-twotone-rounded IconShoppingBasketDone02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconShoppingBasketDone02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-02-solid-rounded IconShoppingBasketDone02SolidRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-02-bulk-rounded IconShoppingBasketDone02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-02-stroke-sharp IconShoppingBasketDone02StrokeSharp"
    >
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
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-02-solid-sharp IconShoppingBasketDone02SolidSharp"
    >
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
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasketDone02: TheIconSelfPack = {
  name: 'ShoppingBasketDone02',
  StrokeRounded: IconShoppingBasketDone02StrokeRounded,
  DuotoneRounded: IconShoppingBasketDone02DuotoneRounded,
  TwotoneRounded: IconShoppingBasketDone02TwotoneRounded,
  SolidRounded: IconShoppingBasketDone02SolidRounded,
  BulkRounded: IconShoppingBasketDone02BulkRounded,
  StrokeSharp: IconShoppingBasketDone02StrokeSharp,
  SolidSharp: IconShoppingBasketDone02SolidSharp,
};