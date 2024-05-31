import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.0005 9.90909V7.81818C20.0005 6.12494 20.0005 5.27832 19.7325 4.60214C19.3017 3.5151 18.3907 2.65765 17.2357 2.2522C16.5172 2 15.6177 2 13.8186 2C10.6703 2 9.09612 2 7.83885 2.44135C5.81762 3.15088 4.2233 4.65142 3.46942 6.55375C3.00049 7.73706 3.00049 9.21865 3.00049 12.1818V14.7273C3.00049 17.7966 3.00049 19.3313 3.84819 20.3971C4.09107 20.7025 4.37911 20.9736 4.70356 21.2022C5.83595 22 7.46655 22 10.7277 22H11.5005C12.0351 22 13.0342 22 13.5005 21.9972M3.00049 12C3.00049 10.159 4.49287 8.66667 6.33382 8.66667C6.9996 8.66667 7.78452 8.78333 8.43185 8.60988C9.007 8.45576 9.45625 8.00652 9.61036 7.43136C9.78381 6.78404 9.66715 5.99912 9.66715 5.33333C9.66715 3.49238 11.1595 2 13.0005 2',
  d2: 'M20.7526 15.8111C20.8574 14.5466 18.9227 13.5141 17.4442 14.2069C15.5972 15.0722 15.7582 17.2594 18.0394 17.3751C19.0545 17.4265 19.9424 17.3169 20.5458 17.9708C21.1492 18.6248 21.4107 20.2901 19.632 20.8553C17.8534 21.4204 15.9995 20.4125 15.9995 19.1831M18.4705 13V13.9777M18.4705 21.2204V22',
  d3: 'M12.5 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2H13.8182C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V14.5C20 17.7875 20 19.4312 19.092 20.5376C18.9258 20.7401 18.7401 20.9258 18.5376 21.092C17.4312 22 15.7875 22 12.5 22Z',
  d4: 'M21.2057 15.5043C20.9315 14.8089 20.2265 13.9939 18.6202 13.9939C16.7537 13.9939 15.9684 14.849 15.809 15.3061C15.5604 15.9174 15.5369 17.2356 17.7978 17.3114C20.4979 17.4019 21.6279 17.7682 21.4886 19.2482C21.3492 20.7282 19.793 20.9336 18.6201 21.0136C17.4153 20.9794 15.9252 20.7274 15.5 19.4491M18.4938 12.5V13.9364M18.5025 21.0089V22.5',
  d5: 'M20 9.90909V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3013 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44135C5.81714 3.15088 4.22282 4.65142 3.46894 6.55375C3 7.73706 3 9.21865 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.83546 22 7.46607 22 10.7273 22H11.5C12.0347 22 13.0337 22 13.5 21.9972',
  d6: 'M3 12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d7: 'M19.9734 9.90909V7.81818C19.9734 6.12494 19.9734 5.27832 19.7059 4.60214C19.2758 3.5151 18.3664 2.65765 17.2133 2.2522C16.4961 2 15.5981 2 13.8021 2C10.6592 2 9.08764 2 7.83252 2.44135C5.81475 3.15088 4.22316 4.65142 3.47057 6.55375C3.00244 7.73706 3.00244 9.21865 3.00244 12.1818V14.7273C3.00244 17.7966 3.00244 19.3313 3.84869 20.3971C4.09116 20.7025 4.3787 20.9736 4.7026 21.2022C5.83305 22 7.46086 22 10.7165 22H11.4879C12.0216 22 13.019 22 13.4845 21.9972',
  d8: 'M3.00244 12C3.00244 10.159 4.49227 8.66667 6.33007 8.66667C6.99471 8.66667 7.77829 8.78333 8.42451 8.60988C8.99868 8.45576 9.44716 8.00652 9.601 7.43136C9.77416 6.78404 9.6577 5.99912 9.6577 5.33333C9.6577 3.49238 11.1475 2 12.9854 2',
  d9: 'M20.7513 15.8111C20.856 14.5466 18.9246 13.5141 17.4485 14.2069C15.6047 15.0722 15.7655 17.2594 18.0427 17.3751C19.0561 17.4265 19.9425 17.3169 20.5449 17.9708C21.1472 18.6248 21.4083 20.2901 19.6327 20.8553C17.8571 21.4204 16.0063 20.4125 16.0063 19.1831M18.4731 13V13.9777M18.4731 21.2204V22',
  d10: 'M17.7502 10.7498C18.3025 10.7498 18.7502 11.1975 18.7502 11.7498V12.0043C19.8691 12.3317 20.7816 13.1983 20.9965 14.3755C21.0957 14.9188 20.7357 15.4397 20.1924 15.5389C19.6491 15.6381 19.1283 15.2781 19.029 14.7348C18.9548 14.3281 18.4928 13.8611 17.7502 13.8611C16.9128 13.8611 16.4586 14.4325 16.4586 14.8775C16.4586 15.2436 16.5529 15.3373 16.6057 15.3798C16.7083 15.4622 17.0055 15.6059 17.7502 15.6059C18.6619 15.6059 19.5598 15.7563 20.2392 16.2847C20.9747 16.8568 21.2502 17.7035 21.2502 18.6224C21.2502 19.6399 20.8347 20.4577 20.1003 20.9837C19.6957 21.2736 19.2301 21.4497 18.7502 21.5453V21.7498C18.7502 22.302 18.3025 22.7498 17.7502 22.7498C17.198 22.7498 16.7502 22.302 16.7502 21.7498V21.5099C15.4027 21.1598 14.2502 20.1164 14.2502 18.6224C14.2502 18.0701 14.698 17.6224 15.2502 17.6224C15.8025 17.6224 16.2502 18.0701 16.2502 18.6224C16.2502 18.9938 16.7104 19.6389 17.7502 19.6389C18.3241 19.6389 18.7153 19.5157 18.9357 19.3578C19.1062 19.2357 19.2502 19.0452 19.2502 18.6224C19.2502 18.1009 19.1091 17.9395 19.0113 17.8634C18.8574 17.7437 18.5052 17.6059 17.7502 17.6059C16.8283 17.6059 15.9797 17.4423 15.3531 16.939C14.6768 16.3956 14.4586 15.6252 14.4586 14.8775C14.4586 13.4544 15.4773 12.3807 16.7502 12.0058V11.7498C16.7502 11.1975 17.198 10.7498 17.7502 10.7498Z',
  d11: 'M11.1842 22.7498C9.5903 22.7498 8.33513 22.7498 7.33936 22.646C6.32263 22.5401 5.48656 22.319 4.77134 21.8151C4.38955 21.5461 4.04906 21.226 3.76097 20.8638C3.21609 20.1787 2.97573 19.3732 2.86135 18.401C2.75022 17.4566 2.75023 16.2691 2.75024 14.7752V12.1541C2.75024 10.6957 2.75024 9.56414 2.81049 8.65078C2.87155 7.72497 2.99679 6.97154 3.27194 6.27724C4.11005 4.16235 5.87488 2.51115 8.09019 1.73349C9.46906 1.24945 11.161 1.24957 14.1264 1.24979L14.4891 1.24978C16.1242 1.24944 17.1432 1.24923 17.9839 1.54434C19.333 2.01792 20.4145 3.02603 20.9295 4.32563C21.1042 4.76637 21.1792 5.23427 21.2151 5.7792C21.2503 6.31174 21.2502 6.96737 21.2502 7.79163V8.99881C21.2502 9.55162 20.8021 9.99976 20.2493 9.99976C19.6972 9.99976 19.2493 9.55271 19.2484 9.0006L19.2466 7.99976C19.2277 5.98349 19.1099 4.86689 18.3715 4.12848C17.4928 3.2498 16.0786 3.2498 13.2501 3.2498H12.9558C12.4511 3.2498 12.1988 3.2498 11.8594 3.43795C11.5201 3.6261 11.4492 3.73958 11.3075 3.96654C11.0599 4.36294 10.9168 4.83133 10.9168 5.33313C10.9168 5.48026 10.9233 5.63844 10.9315 5.81604L10.9346 5.88192C10.9419 6.03681 10.9498 6.20539 10.9533 6.3735C10.9612 6.75359 10.9492 7.19713 10.8345 7.62528C10.611 8.45925 9.95959 9.11066 9.12562 9.33412C8.69747 9.44884 8.25393 9.46085 7.87384 9.45295C7.70571 9.44946 7.53711 9.44154 7.3822 9.43426L7.31638 9.43118C7.13879 9.42294 6.98061 9.41647 6.83348 9.41647C6.35241 9.41647 5.90206 9.54796 5.5164 9.77696C5.28149 9.91645 5.16403 9.9862 4.96763 10.3312C4.77124 10.6763 4.77124 10.9341 4.77124 11.4498V14.7498C4.77124 17.5783 4.77124 18.9925 5.64992 19.8712C6.5286 20.7498 7.94281 20.7498 10.7712 20.7498L12.501 20.7498C13.0529 20.7498 13.5002 21.1972 13.5002 21.7491C13.5002 22.3005 13.0536 22.7476 12.5022 22.7483L11.1842 22.7498Z',
  d12: 'M18 11V12.5M18 12.5C16.4812 12.5 15.25 13.4286 15.25 14.5741C15.25 15.7196 16 16.3519 18 16.3519C20 16.3519 21 16.9445 21 18.426C21 19.9075 19.6569 20.5 18 20.5M18 12.5C19.5188 12.5 20.75 13.4286 20.75 14.5741M18 20.5V22M18 20.5C16.3431 20.5 15 19.5715 15 18.426',
  d13: 'M10 2V9H3',
  d14: 'M19.9677 8.99207V2.0139C19.9677 2.00838 19.9633 2.00391 19.9577 2.00391L9.95655 2.0042L3 8.98853V21.99C3 21.9955 3.00448 22 3.01 22H12.9804',
  d15: 'M16.75 11.6092V11H18.75V11.6092C19.3259 11.7377 19.856 11.9767 20.2967 12.3091C20.984 12.8275 21.5 13.6185 21.5 14.5741H19.5C19.5 14.3843 19.4004 14.1382 19.0924 13.9059C18.7839 13.6732 18.3126 13.5 17.75 13.5C17.1874 13.5 16.7161 13.6732 16.4076 13.9059C16.0996 14.1382 16 14.3843 16 14.5741C16 14.9 16.0869 14.9965 16.1921 15.069C16.3782 15.1971 16.817 15.3519 17.75 15.3519C18.8087 15.3519 19.8041 15.5009 20.5547 16.0013C21.3917 16.5594 21.75 17.4284 21.75 18.426C21.75 19.5324 21.2179 20.3652 20.3945 20.8707C19.9063 21.1705 19.3378 21.3443 18.75 21.4306V22H16.75V21.4053C16.1221 21.2838 15.5422 21.0484 15.06 20.7151C14.334 20.2132 13.75 19.4203 13.75 18.426H15.75C15.75 18.5772 15.8376 18.8213 16.1973 19.07C16.5531 19.3159 17.0989 19.5 17.75 19.5C18.4847 19.5 19.0254 19.3645 19.3481 19.1663C19.6105 19.0052 19.75 18.801 19.75 18.426C19.75 17.9421 19.6083 17.7741 19.4453 17.6654C19.1959 17.4992 18.6913 17.3519 17.75 17.3519C16.683 17.3519 15.7468 17.1906 15.0579 16.7162C14.2881 16.1861 14 15.3937 14 14.5741C14 13.6185 14.516 12.8275 15.2033 12.3091C15.644 11.9767 16.1741 11.7377 16.75 11.6092Z',
  d16: 'M19.7763 1.25C20.3141 1.25 20.75 1.68754 20.75 2.22727V9.06818H18.8026V3.20455L11.0132 3.20455L11.0132 10.0455H4.19737L4.19737 20.7955H12.9605V22.75H3.22368C2.68593 22.75 2.25 22.3125 2.25 21.7727V8.66338L9.63616 1.25H19.7763Z',
} as const;

export const IconFileDollarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-dollar-stroke-rounded IconFileDollarStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFileDollarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-dollar-duotone-rounded IconFileDollarDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileDollarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-dollar-twotone-rounded IconFileDollarTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileDollarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-dollar-solid-rounded IconFileDollarSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileDollarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-dollar-bulk-rounded IconFileDollarBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileDollarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-dollar-stroke-sharp IconFileDollarStrokeSharp"
    >
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
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileDollarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-dollar-solid-sharp IconFileDollarSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileDollar: TheIconSelfPack = {
  name: 'FileDollar',
  StrokeRounded: IconFileDollarStrokeRounded,
  DuotoneRounded: IconFileDollarDuotoneRounded,
  TwotoneRounded: IconFileDollarTwotoneRounded,
  SolidRounded: IconFileDollarSolidRounded,
  BulkRounded: IconFileDollarBulkRounded,
  StrokeSharp: IconFileDollarStrokeSharp,
  SolidSharp: IconFileDollarSolidSharp,
};