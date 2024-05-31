import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.2872 8L4.68174 14.6055C4.05287 15.2344 3.72789 16.052 3.70679 16.876C3.67836 17.986 3.66415 18.5409 3.57991 18.7372C3.49566 18.9334 3.30358 19.1255 2.91944 19.5096L2.32535 20.1037C1.89155 20.5375 1.89155 21.2409 2.32535 21.6747C2.75915 22.1084 3.46247 22.1084 3.89627 21.6747L4.49036 21.0806C4.87451 20.6964 5.06658 20.5043 5.26283 20.4201C5.45909 20.3358 6.01406 20.3216 7.12396 20.2932C7.94797 20.2721 8.76565 19.9471 9.39451 19.3183L11.3227 17.3901M14.4291 14.2837L16 12.7128M14.4291 14.2837L12.8582 12.7128M14.4291 14.2837L11.3227 17.3901M11.3227 17.3901L9.75177 15.8192',
  d2: 'M21.068 7.43213L19.5002 8.99992C18.6718 9.82837 18.6718 11.1715 19.5002 12L12 4.49979C12.8285 5.32824 14.1716 5.32824 15.0001 4.49979L16.5679 2.93201C17.8105 1.68933 19.8253 1.68933 21.068 2.93201C22.3107 4.17468 22.3107 6.18946 21.068 7.43213Z',
  d3: 'M11.9008 7.53374C12.2791 7.91206 12.2791 8.52544 11.9008 8.90376L5.50169 15.3028C5.07499 15.7295 4.85497 16.2823 4.84063 16.8422L4.84013 16.8617L4.84013 16.8618C4.82679 17.3829 4.81614 17.7988 4.79812 18.1073C4.78897 18.264 4.77691 18.4125 4.75838 18.5444C4.74185 18.6621 4.71173 18.8342 4.63947 19.0025C4.53898 19.2366 4.34816 19.6518 4.34816 19.6518C4.34816 19.6518 4.76338 19.461 4.99747 19.3605C5.1658 19.2883 5.33791 19.2582 5.45555 19.2416C5.58746 19.2231 5.73601 19.211 5.89271 19.2019C6.20124 19.1839 6.61727 19.1732 7.13849 19.1599L7.13853 19.1599L7.15779 19.1594C7.71772 19.145 8.27047 18.925 8.69717 18.4983L9.88009 17.3154L9.04327 16.4786C8.66495 16.1002 8.66495 15.4869 9.04327 15.1085C9.42159 14.7302 10.035 14.7302 10.4133 15.1085L11.2501 15.9454L12.8894 14.3061L12.0526 13.4693C11.6743 13.0909 11.6743 12.4776 12.0526 12.0992C12.4309 11.7209 13.0443 11.7209 13.4226 12.0992L14.2594 12.9361L15.0962 12.0992C15.4746 11.7209 16.0879 11.7209 16.4663 12.0992C16.8446 12.4776 16.8446 13.0909 16.4663 13.4693L10.0672 19.8683C9.27547 20.66 8.24398 21.0697 7.20739 21.0962C6.66242 21.1102 6.27849 21.1201 6.00567 21.1361C5.8891 21.1429 5.80724 21.15 5.75099 21.1569C5.66181 21.2357 5.51102 21.3808 5.3163 21.5756L4.74077 22.1511C3.94221 22.9496 2.64748 22.9496 1.84892 22.1511C1.05036 21.3525 1.05036 20.0578 1.84892 19.2592L2.42444 18.6837C2.61916 18.489 2.76427 18.3382 2.8431 18.249C2.84996 18.1928 2.85711 18.1109 2.86392 17.9943C2.87985 17.7215 2.88981 17.3376 2.90377 16.7926C2.93031 15.756 3.33995 14.7245 4.13167 13.9328L10.5307 7.53374C10.9091 7.15542 11.5224 7.15542 11.9008 7.53374Z',
  d4: 'M16.0375 2.40168C17.5731 0.866108 20.0628 0.866109 21.5983 2.40168C23.1339 3.93725 23.1339 6.42689 21.5983 7.96246L20.0305 9.53025C19.495 10.0658 19.495 10.9341 20.0305 11.4697C20.3234 11.7626 20.3234 12.2374 20.0305 12.5303C19.7376 12.8232 19.2628 12.8232 18.9699 12.5303L11.4697 5.03012C11.1768 4.73723 11.1768 4.26235 11.4697 3.96946C11.7626 3.67657 12.2374 3.67657 12.5303 3.96946C13.0659 4.50477 13.9343 4.50494 14.4698 3.96946L16.0375 2.40168Z',
  d5: 'M13.7575 5.69677L16.514 2.9408C17.7687 1.6864 19.803 1.6864 21.0577 2.9408C22.3124 4.1952 22.3124 6.229 21.0577 7.4834L18.3012 10.2394M13.7575 5.69677L18.3012 10.2394M13.7575 5.69677L11.999 3.93868M18.3012 10.2394L20.0598 11.9975',
  d6: 'M12.0202 7.01953L3.99101 15.0002V18.4271L2.40636 20.019C1.78449 20.6531 1.98164 21.2777 2.32978 21.6541C2.57352 21.9177 3.21777 22.2959 3.95215 21.6242L5.57415 20.0017H9.00726L11.4635 17.5346M11.4635 17.5346L9.75298 15.8213M11.4635 17.5346L14.5805 14.4238M16.9853 11.9884L14.5805 14.4238M14.5805 14.4238L12.8532 12.6969',
  d7: 'M21.5596 8.17952L19.585 10.1543L20.5981 11.1674L19.2355 12.53L17.5411 10.8356L11.4688 4.76323L12.8314 3.40064L13.8444 4.41367L15.819 2.43891C17.4042 0.853695 19.9744 0.853695 21.5596 2.43892C23.1448 4.02413 23.1448 6.5943 21.5596 8.17952Z',
  d8: 'M11.2823 6.46973L12.6604 7.84778L5.15036 15.3578V18.8513L8.64445 18.8519L10.0729 17.4235L9.09091 16.4415L10.469 15.0635L11.4509 16.0454L13.0998 14.3965L12.1179 13.4146L13.4959 12.0365L14.4779 13.0185L16.1545 11.3419L17.5325 12.7199L9.45169 20.8008L6.10973 20.8008L4.76319 22.1473C3.95995 22.9505 2.65763 22.9505 1.85439 22.1473C1.05114 21.3441 1.05114 20.0417 1.85439 19.2385L3.2015 17.8914L3.2015 14.5506L11.2823 6.46973Z',
} as const;

export const IconDropperStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dropper-stroke-rounded IconDropperStrokeRounded"
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

export const IconDropperDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dropper-duotone-rounded IconDropperDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconDropperTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dropper-twotone-rounded IconDropperTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconDropperSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dropper-solid-rounded IconDropperSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDropperBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dropper-bulk-rounded IconDropperBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDropperStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dropper-stroke-sharp IconDropperStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDropperSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dropper-solid-sharp IconDropperSolidSharp"
    >
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

export const iconPackOfDropper: TheIconSelfPack = {
  name: 'Dropper',
  StrokeRounded: IconDropperStrokeRounded,
  DuotoneRounded: IconDropperDuotoneRounded,
  TwotoneRounded: IconDropperTwotoneRounded,
  SolidRounded: IconDropperSolidRounded,
  BulkRounded: IconDropperBulkRounded,
  StrokeSharp: IconDropperStrokeSharp,
  SolidSharp: IconDropperSolidSharp,
};