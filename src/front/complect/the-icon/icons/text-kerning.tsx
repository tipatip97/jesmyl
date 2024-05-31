import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 13.5L20.2857 9M20.2857 9L18.7816 5.0518C18.7399 4.9422 18.719 4.8874 18.6926 4.84085C18.5914 4.66247 18.4186 4.5405 18.2216 4.50838C18.1702 4.5 18.1135 4.5 18 4.5C17.8865 4.5 17.8298 4.5 17.7784 4.50838C17.5814 4.5405 17.4086 4.66247 17.3074 4.84085C17.281 4.8874 17.2601 4.9422 17.2184 5.0518L15.7143 9M20.2857 9L15.7143 9M15.7143 9L14 13.5',
  d2: 'M2 4.5L5.21836 12.9482C5.26012 13.0578 5.28099 13.1126 5.3074 13.1591C5.40861 13.3375 5.5814 13.4595 5.77836 13.4916C5.82975 13.5 5.8865 13.5 6 13.5C6.1135 13.5 6.17025 13.5 6.22164 13.4916C6.4186 13.4595 6.59138 13.3375 6.6926 13.1591C6.71901 13.1126 6.73988 13.0578 6.78164 12.9482L10 4.5',
  d3: 'M12 19.5H22M22 19.5C22 19.8314 21.6667 20.098 21 20.6314L19.9142 21.5M22 19.5C22 19.1686 21.6667 18.902 21 18.3686L19.9142 17.5',
  d4: 'M14.5 2.5L9.5 15.5',
  d5: 'M18.7822 5.0518L20.2863 9L15.7148 9L17.2189 5.0518C17.2607 4.9422 17.2815 4.8874 17.308 4.84085C17.4092 4.66247 17.582 4.5405 17.7789 4.50838C17.8303 4.5 17.8871 4.5 18.0006 4.5C18.1141 4.5 18.1708 4.5 18.2222 4.50838C18.4192 4.5405 18.5919 4.66247 18.6932 4.84085C18.7196 4.8874 18.7404 4.9422 18.7822 5.0518Z',
  d6: 'M17.0625 4.28804C17.3217 4.12779 17.6587 4 18.0003 4C18.3419 4 18.6788 4.12779 18.938 4.28804C19.215 4.45928 19.5221 4.74055 19.701 5.15768C19.7064 5.17028 19.7115 5.18299 19.7164 5.1958L22.9348 13.644C23.1314 14.1601 22.8724 14.7379 22.3563 14.9345C21.8402 15.1311 21.2624 14.8721 21.0658 14.356L19.7019 10.7759H16.2986L14.9348 14.356C14.7381 14.8721 14.1604 15.1311 13.6443 14.9345C13.1282 14.7379 12.8692 14.1601 13.0658 13.644L16.2841 5.1958C16.289 5.18299 16.2942 5.17028 16.2996 5.15768C16.4784 4.74055 16.7855 4.45928 17.0625 4.28804ZM17.0605 8.7759H18.94L18.0003 6.30903L17.0605 8.7759Z',
  d7: 'M5.06252 14.712C5.32175 14.8722 5.65866 15 6.00027 15C6.34188 15 6.67879 14.8722 6.93802 14.712C7.21501 14.5407 7.52209 14.2594 7.70097 13.8423C7.70637 13.8297 7.71151 13.817 7.71639 13.8042L10.9348 5.356C11.1314 4.83989 10.8724 4.26212 10.3563 4.06551C9.84016 3.8689 9.26239 4.1279 9.06578 4.64401L6.00027 12.691L2.93476 4.64401C2.73815 4.1279 2.16038 3.8689 1.64427 4.06551C1.12817 4.26212 0.869172 4.83989 1.06578 5.356L4.28415 13.8042C4.28903 13.817 4.29417 13.8297 4.29957 13.8423C4.47845 14.2594 4.78553 14.5407 5.06252 14.712Z',
  d8: 'M20.5389 21.7808C20.1076 22.1258 19.4784 22.0559 19.1333 21.6247C18.9947 21.4514 18.9231 21.2462 18.915 21.0402V20H12C11.4477 20 11 19.5522 11 19C11 18.4477 11.4477 18 12 18H18.915V16.9597C18.9231 16.7538 18.9947 16.5485 19.1333 16.3753C19.4784 15.944 20.1076 15.8741 20.5389 16.2191L21.6247 17.0877L21.6672 17.1217C21.9633 17.3585 22.2595 17.5953 22.4737 17.8199C22.7068 18.0643 23 18.4522 23 19C23 19.5478 22.7068 19.9356 22.4737 20.1801C22.2595 20.4046 21.9633 20.6414 21.6672 20.8782L21.6247 20.9122L20.5389 21.7808Z',
  d9: 'M14.8592 2.06692C15.3747 2.26518 15.6319 2.84378 15.4336 3.35925L10.4336 16.3592C10.2354 16.8747 9.65676 17.1319 9.14129 16.9336C8.62582 16.7354 8.36867 16.1568 8.56692 15.6413L13.5669 2.64129C13.7652 2.12582 14.3438 1.86867 14.8592 2.06692Z',
  d10: 'M22 14L18.5 4H17.5L14 14M15.5 10.5H20.5',
  d11: 'M10 4L6 14L2 4',
  d12: 'M12 19H21.4176M20 21.5L22 19L20 16.5',
  d13: 'M16.5977 3.10889H19.0166L22.751 13.7785L20.8633 14.4392L19.8727 11.6089H15.7416L14.751 14.4392L12.8633 13.7785L16.5977 3.10889ZM16.4416 9.60889H19.1727L17.8071 5.7074L16.4416 9.60889Z',
  d14: 'M6.17848 11.4161L9.25 3.7373L11.107 4.48009L7.10695 14.4801C6.95509 14.8597 6.58738 15.1087 6.17848 15.1087C5.76957 15.1087 5.40186 14.8597 5.25 14.4801L1.25 4.48009L3.10695 3.73731L6.17848 11.4161Z',
  d15: 'M20.2502 21.75L18.6885 20.5006L19.3888 19.6253H11.4694V17.6253H19.3888L18.6885 16.75L20.2502 15.5006L22.75 18.6253L20.2502 21.75Z',
  d16: 'M8.25 15.25L13.25 2.25L15.1167 2.96796L10.1167 15.968L8.25 15.25Z',
} as const;

export const IconTextKerningStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-kerning-stroke-rounded IconTextKerningStrokeRounded"
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

export const IconTextKerningDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-kerning-duotone-rounded IconTextKerningDuotoneRounded"
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

export const IconTextKerningTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-kerning-twotone-rounded IconTextKerningTwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextKerningSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-kerning-solid-rounded IconTextKerningSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextKerningBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-kerning-bulk-rounded IconTextKerningBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTextKerningStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-kerning-stroke-sharp IconTextKerningStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextKerningSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-kerning-solid-sharp IconTextKerningSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfTextKerning: TheIconSelfPack = {
  name: 'TextKerning',
  StrokeRounded: IconTextKerningStrokeRounded,
  DuotoneRounded: IconTextKerningDuotoneRounded,
  TwotoneRounded: IconTextKerningTwotoneRounded,
  SolidRounded: IconTextKerningSolidRounded,
  BulkRounded: IconTextKerningBulkRounded,
  StrokeSharp: IconTextKerningStrokeSharp,
  SolidSharp: IconTextKerningSolidSharp,
};