import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 4H21M17 4C17 4.56018 18.4943 5.60678 19 6M17 4C17 3.43982 18.4943 2.39322 19 2',
  d2: 'M7 4H3M7 4C7 3.43982 5.5057 2.39322 5 2M7 4C7 4.56018 5.5057 5.60678 5 6',
  d3: 'M9.8348 22L9.8348 21.0513C9.8348 20.4058 9.6261 19.7775 9.23964 19.2595L5.58206 14.3566C5.16022 13.7911 4.8233 13.0896 5.1018 12.4419C5.55264 11.3935 6.82458 10.7124 8.38144 12.2843L9.97865 13.9937L9.97865 3.57057C10.0349 1.52742 13.3229 1.42614 13.4635 3.57057L13.4635 9.5106C14.9435 9.31946 21.9155 10.3629 20.8993 14.7831C20.851 14.9931 20.8028 15.2063 20.7557 15.4165C20.5501 16.3353 19.9422 17.9727 19.2719 18.93C18.5741 19.9266 18.8203 20.9192 18.8203 22',
  d4: 'M19.9985 17.6892C20.7056 16.2125 21.6732 13.3226 20.3211 11.9618C18.1895 9.81667 15.2082 9.42404 13.5 9.5V3.75C13.5 2.7835 12.7165 2 11.75 2C10.7835 2 10 2.7835 10 3.75V14L7.78341 11.6713C7.05938 11.0311 5.96519 11.1372 5.36948 11.9053C4.87385 12.5444 4.87719 13.4534 5.3775 14.0886L8.65864 18.4236C9.23025 19.1788 9.51608 19.5565 9.6732 19.9973C9.68714 20.0364 9.70028 20.0758 9.71263 20.1155C9.85181 20.5628 9.85181 21.0418 9.85181 22H18.8919V20.382C18.8919 19.4564 19.6159 18.488 19.9985 17.6892Z',
  d5: 'M9.8348 22V21.0513C9.8348 20.4058 9.6261 19.7775 9.23964 19.2595L5.58206 14.3566C5.16022 13.7911 4.8233 13.0896 5.1018 12.4419C5.55264 11.3935 6.82458 10.7124 8.38144 12.2843L9.97865 13.9937V3.57057C10.0349 1.52742 13.3229 1.42614 13.4635 3.57057V9.5106C14.9435 9.31946 21.9155 10.3629 20.8993 14.7831C20.851 14.9931 20.8028 15.2063 20.7557 15.4165C20.5501 16.3353 19.9422 17.9727 19.2719 18.93C18.5741 19.9266 18.8203 20.9192 18.8203 22',
  d6: 'M9.25 3.75C9.25 2.36929 10.3693 1.25 11.75 1.25C13.1307 1.25 14.25 2.36929 14.25 3.75V8.74751C16.1139 8.81064 18.819 9.38616 20.8531 11.4332C21.789 12.3751 21.8445 13.7529 21.6737 14.8931C21.4975 16.0699 21.0471 17.2359 20.6749 18.0131C20.5556 18.2264 20.0742 19.1202 19.9725 19.3235C19.7561 19.7563 19.6419 20.1001 19.6419 20.382V20.382C19.6419 20.6473 19.6419 20.918 19.6248 21.1214C19.6063 21.3409 19.564 21.5809 19.4397 21.8165C19.2752 22.1284 19.0203 22.3833 18.7084 22.5479C18.4727 22.6721 18.2328 22.7145 18.0133 22.7329C17.8098 22.75 17.5662 22.75 17.3009 22.75H11.7164H11.7164C11.4087 22.75 11.1252 22.7501 10.8893 22.7266C10.6327 22.7012 10.1696 22.6003 9.9075 22.3382C9.6375 22.1107 9.48834 21.7789 9.3824 21.5062C9.26927 21.2149 9.14929 20.8294 9.00495 20.3655L9.00494 20.3655C8.89549 20.0584 8.6596 19.6676 8.06062 18.8763L4.78347 14.5465C4.0748 13.641 4.07179 12.3548 4.77682 11.4457C5.63524 10.3388 7.22827 10.1793 8.2802 11.1094L9.25 12.1242V3.75Z',
  d7: 'M18.2896 6.5921C18.6166 6.84637 19.0878 6.78741 19.3421 6.46042C19.4486 6.32341 19.5001 6.16108 19.5 6V4.99995L21 4.99995C21.5523 4.99995 22 4.55223 22 3.99995C22 3.44766 21.5523 2.99995 21 2.99995H19.5V2.0068C19.5016 1.84352 19.4501 1.67857 19.3421 1.53965C19.0878 1.21266 18.6166 1.1537 18.2896 1.40796C18.2376 1.44844 18.1675 1.50131 18.0848 1.5637L18.0847 1.56371C17.817 1.76565 17.4169 2.06744 17.0675 2.37212C16.836 2.5739 16.5961 2.8025 16.4082 3.03496C16.3139 3.15156 16.2192 3.28548 16.1455 3.43173C16.0743 3.57295 16 3.76987 16 4.00003C16 4.2302 16.0743 4.42712 16.1455 4.56834C16.2192 4.71459 16.3139 4.84851 16.4082 4.96511C16.5961 5.19756 16.836 5.42616 17.0675 5.62795C17.4169 5.93264 17.817 6.23442 18.0847 6.43636C18.1675 6.49875 18.2376 6.55163 18.2896 6.5921Z',
  d8: 'M5.71038 6.5921C5.38339 6.84637 4.91219 6.78741 4.65793 6.46042C4.55139 6.32341 4.49988 6.16108 4.5 6V4.99995L3 4.99995C2.44772 4.99995 2 4.55223 2 3.99995C2 3.44766 2.44772 2.99995 3 2.99995H4.5V2.0068C4.49842 1.84352 4.54991 1.67857 4.65793 1.53965C4.91219 1.21266 5.38339 1.1537 5.71038 1.40796C5.76244 1.44844 5.83252 1.50131 5.91524 1.5637L5.91525 1.56371C6.18298 1.76565 6.58306 2.06744 6.93251 2.37212C7.16395 2.5739 7.40389 2.8025 7.59183 3.03496C7.68611 3.15156 7.78075 3.28548 7.85449 3.43173C7.9257 3.57295 8 3.76987 8 4.00003C8 4.2302 7.9257 4.42712 7.85449 4.56834C7.78075 4.71459 7.68611 4.84851 7.59183 4.96511C7.40389 5.19756 7.16395 5.42616 6.93251 5.62795C6.58305 5.93264 6.18298 6.23442 5.91525 6.43636C5.83253 6.49875 5.76244 6.55163 5.71038 6.5921Z',
  d9: 'M13.5062 9.52066V3.76942C13.5062 2.7922 12.7167 2 11.7428 2C10.769 2 9.97949 2.7922 9.97949 3.76942V12.4367M13.5062 9.52066C14.9874 9.46863 16.1152 9.60377 17.6929 10.2551C18.9012 10.7538 20.1795 11.3967 20.717 12.5916C21.26 13.7986 20.9776 15.2365 20.2441 17.0933L18.8568 20.0417V21.9995M13.5062 9.52066V10.2618M9.87531 22V20.0664L5.40208 14.0638C5.06649 13.6135 4.88711 13.0277 5.07789 12.4989C5.09407 12.4541 5.11166 12.4096 5.13096 12.3653C5.36777 11.8221 5.84758 11.357 6.43158 11.2667C6.5783 11.244 6.72836 11.2451 6.88822 11.2672C7.3546 11.3315 7.74602 11.6338 8.06753 11.9789L9.98332 14.035V11.6955',
  d10: 'M21 4H17.5212M19 6L17 4L19 2',
  d11: 'M3 4H6.49623M5 2L7 4L5 6',
  d12: 'M9.10181 20.4992L4.7835 14.7966C4.0748 13.891 4.07178 12.6048 4.77682 11.6957C5.63524 10.5888 7.22827 10.4293 8.2802 11.3594L8.30439 11.3808L9.25 12.3742V4C9.25 2.61929 10.3693 1.5 11.75 1.5C13.1307 1.5 14.25 2.61929 14.25 4V8.99751C16.1139 9.06064 18.819 9.63616 20.8531 11.6832C21.789 12.6251 21.8445 14.0029 21.6737 15.1431C21.4975 16.3199 21.0471 17.4859 20.6749 18.2631C20.4835 18.6627 20.2068 19.2399 19.978 19.7171L19.6419 20.4179V23H9.10181V20.4992Z',
  d13: 'M19.043 1L20.4573 2.41421L19.6644 3.20711H21.2502V5.20711H19.6644L20.4573 6L19.043 7.41421L15.8359 4.20711L19.043 1Z',
  d14: 'M4.45711 1L7.66421 4.20711L4.45711 7.41421L3.04289 6L3.83579 5.20711H2.25V3.20711H3.83579L3.04289 2.41421L4.45711 1Z',
} as const;

export const IconResize01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resize-01-stroke-rounded IconResize01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconResize01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resize-01-duotone-rounded IconResize01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconResize01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resize-01-twotone-rounded IconResize01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconResize01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resize-01-solid-rounded IconResize01SolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconResize01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resize-01-bulk-rounded IconResize01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconResize01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resize-01-stroke-sharp IconResize01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconResize01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resize-01-solid-sharp IconResize01SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfResize01: TheIconSelfPack = {
  name: 'Resize01',
  StrokeRounded: IconResize01StrokeRounded,
  DuotoneRounded: IconResize01DuotoneRounded,
  TwotoneRounded: IconResize01TwotoneRounded,
  SolidRounded: IconResize01SolidRounded,
  BulkRounded: IconResize01BulkRounded,
  StrokeSharp: IconResize01StrokeSharp,
  SolidSharp: IconResize01SolidSharp,
};