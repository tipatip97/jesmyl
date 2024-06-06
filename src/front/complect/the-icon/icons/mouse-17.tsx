import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 5V2M12 12V9',
  d2: 'M8.87257 3.33256L10.3339 2.4595C11.3594 1.84683 12.6406 1.84683 13.6661 2.4595L15.1274 3.33256C18.847 5.55476 20.1003 10.3299 17.9482 14.08C17.9114 14.1441 17.8857 14.2138 17.872 14.2864L17.2339 17.6748C17.174 17.9931 17.1441 18.1522 17.1094 18.291C16.5906 20.3673 14.7763 21.8666 12.6311 21.9916C12.4877 22 12.3252 22 12 22C11.6748 22 11.5123 22 11.3689 21.9916C9.22372 21.8666 7.40941 20.3673 6.89063 18.291C6.85595 18.1522 6.82599 17.9931 6.76606 17.6748L6.12799 14.2864C6.11434 14.2138 6.08859 14.1441 6.05182 14.08C3.89969 10.3299 5.15297 5.55476 8.87257 3.33256Z',
  d3: 'M18 15C16.6595 13.1832 14.4715 12 12 12C9.52848 12 7.34053 13.1832 6 15',
  d4: 'M10.5 6.5C10.5 6.03406 10.5 5.80109 10.5761 5.61732C10.6776 5.37229 10.8723 5.17761 11.1173 5.07612C11.3011 5 11.5341 5 12 5C12.4659 5 12.6989 5 12.8827 5.07612C13.1277 5.17761 13.3224 5.37229 13.4239 5.61732C13.5 5.80109 13.5 6.03406 13.5 6.5V7.5C13.5 7.96594 13.5 8.19891 13.4239 8.38268C13.3224 8.62771 13.1277 8.82239 12.8827 8.92388C12.6989 9 12.4659 9 12 9C11.5341 9 11.3011 9 11.1173 8.92388C10.8723 8.82239 10.6776 8.62771 10.5761 8.38268C10.5 8.19891 10.5 7.96594 10.5 7.5V6.5Z',
  d5: 'M8.87257 3.33256L10.3339 2.4595C10.8467 2.15317 11.4233 2 12 2V5C11.5341 5 11.3011 5 11.1173 5.07612C10.8723 5.17761 10.6776 5.37229 10.5761 5.61732C10.5 5.80109 10.5 6.03406 10.5 6.5V7.5C10.5 7.96594 10.5 8.19891 10.5761 8.38268C10.6776 8.62771 10.8723 8.82239 11.1173 8.92388C11.3011 9 11.5341 9 12 9V12C14.2368 12 16.2413 12.9691 17.5956 14.5L17.2339 17.6749C17.174 17.9929 17.144 18.1522 17.1094 18.291C16.5906 20.3673 14.7763 21.8666 12.6311 21.9916C12.4877 22 12.3252 22 12 22C11.6748 22 11.5123 22 11.3689 21.9916C9.22372 21.8666 7.40941 20.3673 6.89063 18.291C6.85595 18.1522 6.82599 17.9931 6.76606 17.6748L6.12799 14.2864C6.11434 14.2138 6.08859 14.1441 6.05182 14.08C3.89969 10.3299 5.15297 5.55476 8.87257 3.33256Z',
  d6: 'M11.9782 4.75H12H12.0218H12.0218C12.2361 4.74999 12.4329 4.74998 12.5982 4.76126C12.7759 4.77338 12.9712 4.80099 13.1697 4.88321C13.5985 5.06083 13.9392 5.40151 14.1168 5.83031C14.199 6.02881 14.2266 6.22415 14.2387 6.40179C14.25 6.56712 14.25 6.76396 14.25 6.97824V8.02176C14.25 8.23604 14.25 8.43289 14.2387 8.59821C14.2266 8.77585 14.199 8.97119 14.1168 9.1697C13.9392 9.5985 13.5985 9.93918 13.1697 10.1168C12.9712 10.199 12.7759 10.2266 12.5982 10.2387C12.4329 10.25 12.236 10.25 12.0218 10.25H11.9782C11.764 10.25 11.5671 10.25 11.4018 10.2387C11.2241 10.2266 11.0288 10.199 10.8303 10.1168C10.4015 9.93918 10.0608 9.5985 9.88321 9.1697C9.80099 8.97119 9.77338 8.77585 9.76126 8.59821C9.74998 8.4329 9.74999 8.23606 9.75 8.0218V8.02176V7V6.97825V6.9782C9.74999 6.76394 9.74998 6.56711 9.76126 6.40179C9.77338 6.22415 9.80099 6.02881 9.88321 5.83031C10.0608 5.40151 10.4015 5.06083 10.8303 4.88321C11.0288 4.80099 11.2241 4.77338 11.4018 4.76126C11.5671 4.74998 11.7639 4.74999 11.9782 4.75H11.9782Z',
  d7: 'M14.1108 1.83737C12.8114 1.05421 11.1886 1.05421 9.88921 1.83737L8.47355 2.69059C4.46269 5.10794 3.07921 10.2756 5.32185 14.3832C5.34642 14.4282 5.3587 14.4507 5.36665 14.473C5.3746 14.4953 5.37906 14.5192 5.38799 14.5671L5.98397 17.76C6.03607 18.0391 6.07 18.221 6.1106 18.3849C6.71642 20.831 8.83362 22.5932 11.3322 22.7402C11.4997 22.75 11.717 22.75 12 22.75C12.283 22.75 12.5003 22.75 12.6678 22.7402C15.1664 22.5932 17.2836 20.831 17.8894 18.3849C17.93 18.221 17.9639 18.0391 18.016 17.76L18.612 14.5671C18.6209 14.5192 18.6254 14.4953 18.6334 14.473C18.6413 14.4507 18.6536 14.4282 18.6782 14.3832C20.9208 10.2756 19.5373 5.10794 15.5264 2.69059L14.1108 1.83737ZM9.46685 4.36858L10.0911 3.99431C10.4939 3.7528 10.6953 3.63205 10.8475 3.71823C10.9996 3.80441 10.9996 4.03924 10.9996 4.50891V4.99996C10.9996 5.55225 11.4474 5.99996 11.9996 5.99996C12.5519 5.99996 12.9996 5.55225 12.9996 4.99996V4.50885C12.9996 4.03914 12.9996 3.80429 13.1518 3.71812C13.3039 3.63194 13.5054 3.75272 13.9082 3.99427L14.5324 4.36858C17.303 6.03843 18.4561 9.39218 17.4568 12.3535C17.3511 12.6665 17.2983 12.823 17.1586 12.8709C17.019 12.9188 16.8643 12.8165 16.5549 12.6119C15.6564 12.0178 14.6303 11.5947 13.5259 11.3898C13.2675 11.3419 13.1383 11.3179 13.069 11.2345C12.9996 11.1512 12.9996 11.0265 12.9996 10.7772V9.82598C12.9996 9.2737 12.5519 8.82598 11.9996 8.82598C11.4474 8.82598 10.9996 9.2737 10.9996 9.82598V10.7772C10.9996 11.0265 10.9996 11.1512 10.9303 11.2345C10.861 11.3179 10.7318 11.3419 10.4733 11.3898C9.36896 11.5947 8.34285 12.0177 7.4444 12.6119C7.13499 12.8165 6.98029 12.9188 6.84062 12.8709C6.70095 12.823 6.64813 12.6665 6.54249 12.3534C5.54313 9.39217 6.69625 6.03843 9.46685 4.36858Z',
  d8: 'M12 5.5V2M12 12V9',
  d9: 'M17.0934 17.6814L17.5364 14.3923C17.5616 14.2054 17.5741 14.1119 17.6014 14.0273C17.6286 13.9426 17.6782 13.8494 17.7773 13.663C19.7721 9.91197 20.2268 4.4262 12 2C3.77318 4.4262 4.22792 9.91183 6.22266 13.6628C6.3218 13.8492 6.37137 13.9425 6.39861 14.0271C6.42586 14.1118 6.43845 14.2053 6.46363 14.3922L6.90665 17.6812C6.96644 17.9996 6.99633 18.1588 7.03093 18.2976C7.54853 20.3748 9.45975 22 12 22C14.5402 22 16.4515 20.375 16.9691 18.2978C17.0037 18.1589 17.0336 17.9997 17.0934 17.6814Z',
  d10: 'M17.5 14C16.2712 12.7888 14.2656 12 12 12C9.73444 12 7.72882 12.7888 6.5 14',
  d11: 'M13.5 5.5H10.5V9H13.5V5.5Z',
  d12: 'M12.274 1.33137L12 1.25L11.726 1.33137C7.54701 2.57231 5.33515 4.67775 4.56348 7.18108C3.81097 9.6223 4.52177 12.1571 5.54822 14.1006C5.59901 14.1968 5.62678 14.2496 5.64596 14.2888L5.65053 14.2982L5.65107 14.3014C5.65711 14.3373 5.66386 14.3869 5.6769 14.4843L6.1094 17.7174L6.12019 17.7752C6.17218 18.0541 6.20603 18.2356 6.24652 18.3992C6.8572 20.8669 9.10173 22.75 12 22.75C14.8982 22.75 17.1428 20.8671 17.7535 18.3994C17.794 18.2358 17.8278 18.0542 17.8798 17.7754L17.8906 17.7175L18.3231 14.4844C18.3361 14.387 18.3429 14.3375 18.3489 14.3015L18.3495 14.2984L18.354 14.2889C18.3732 14.2497 18.401 14.1969 18.4518 14.1008C19.4782 12.1573 20.189 9.6224 19.4365 7.18116C18.6649 4.67779 16.453 2.57232 12.274 1.33137ZM17.1093 12.4158C17.764 10.8972 18.0433 9.24474 17.5855 7.75942C17.1306 6.28368 15.8753 4.75008 13.002 3.63617V4.75098H13.502C13.9162 4.75098 14.252 5.08676 14.252 5.50098V9.00098C14.252 9.41519 13.9162 9.75098 13.502 9.75098H13.002V11.0473C14.5431 11.1939 15.9664 11.6754 17.1093 12.4158ZM11.002 11.047C9.45887 11.1931 8.03372 11.6751 6.88971 12.4166C6.23464 10.8977 5.95514 9.24494 6.41308 7.75935C6.86826 6.28274 8.12484 4.74817 11.002 3.6341V4.75098H10.502C10.0877 4.75098 9.75195 5.08676 9.75195 5.50098V9.00098C9.75195 9.41519 10.0877 9.75098 10.502 9.75098H11.002V11.047Z',
} as const;

export const IconMouse17StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-17-stroke-rounded IconMouse17StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse17DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-17-duotone-rounded IconMouse17DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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

export const IconMouse17TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-17-twotone-rounded IconMouse17TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMouse17SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-17-solid-rounded IconMouse17SolidRounded"
    >
      <path 
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

export const IconMouse17BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-17-bulk-rounded IconMouse17BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse17StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-17-stroke-sharp IconMouse17StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse17SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-17-solid-sharp IconMouse17SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouse17: TheIconSelfPack = {
  name: 'Mouse17',
  StrokeRounded: IconMouse17StrokeRounded,
  DuotoneRounded: IconMouse17DuotoneRounded,
  TwotoneRounded: IconMouse17TwotoneRounded,
  SolidRounded: IconMouse17SolidRounded,
  BulkRounded: IconMouse17BulkRounded,
  StrokeSharp: IconMouse17StrokeSharp,
  SolidSharp: IconMouse17SolidSharp,
};