import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V12C2 15.7712 2 17.6569 3.17157 18.8284C4.23467 19.8915 5.8857 19.99 9 19.9991H9.5',
  d2: 'M14.5285 21.0596C12.8812 21.1735 11.249 13.4909 12.3697 12.37C13.4905 11.2491 21.1736 12.8801 21.0598 14.5274C20.9814 15.6063 19.1553 16.033 19.2086 16.9918C19.2243 17.2726 19.579 17.5286 20.2885 18.0404C20.7815 18.3961 21.2841 18.7415 21.7687 19.1086C21.9621 19.2551 22.0385 19.5015 21.9817 19.7337C21.7089 20.8491 20.854 21.7078 19.7341 21.9817C19.5018 22.0385 19.2555 21.9621 19.109 21.7686C18.742 21.284 18.3967 20.7813 18.041 20.2882C17.5292 19.5786 17.2733 19.2239 16.9925 19.2082C16.0339 19.1549 15.6072 20.9812 14.5285 21.0596Z',
  d3: 'M2 7H20',
  d4: 'M2.03516 7.03125L19.9665 7.03562C20 7.86982 20 8.84689 20 10.0004V12.0006C20 12.4931 20 12.9534 19.9972 13.3843C17.87 12.2567 13.2221 11.5175 12.3697 12.37C11.5177 13.2222 12.2568 17.8672 13.3841 19.9952C13.1124 19.998 12.8291 19.9996 12.5333 20.0004L9 19.9994C5.8857 19.9903 4.23467 19.8919 3.17157 18.8288C2 17.6572 2 15.7716 2 12.0004L2.03516 7.03125Z',
  d5: 'M21.2936 13.3837C21.5653 13.6537 21.8438 14.0605 21.808 14.5791L21.8078 14.5818C21.7722 15.0718 21.5374 15.4497 21.2937 15.7275C21.0647 15.9884 20.7646 16.2243 20.5484 16.3942C20.3023 16.5877 20.1089 16.7569 20.0012 16.8821C20.1419 17.0085 20.3641 17.1702 20.7273 17.4322C20.881 17.5431 21.0405 17.6564 21.2027 17.7716L21.2028 17.7716L21.2029 17.7717C21.54 18.0111 21.8889 18.2588 22.2215 18.5108C22.6729 18.8527 22.832 19.4137 22.7102 19.9119C22.3712 21.2983 21.3047 22.3696 19.9123 22.7102C19.4139 22.8321 18.8529 22.6727 18.5111 22.2214C18.2592 21.8887 18.0115 21.5398 17.7721 21.2026C17.6569 21.0403 17.5437 20.8807 17.4327 20.727C17.1708 20.3638 17.0092 20.1417 16.8828 20.0009C16.7576 20.1086 16.5747 20.3197 16.3812 20.5658C16.2112 20.7821 15.9894 21.0644 15.7285 21.2934C15.4508 21.5372 15.0729 21.772 14.5829 21.8077L14.5802 21.8078C14.0616 21.8437 13.6548 21.5652 13.3848 21.2936C13.107 21.014 12.8708 20.6421 12.6701 20.2476C12.2654 19.452 11.925 18.4035 11.6804 17.347C11.4349 16.2869 11.2754 15.1733 11.2528 14.2347C11.2415 13.7671 11.2635 13.3187 11.336 12.9318C11.4035 12.5715 11.5358 12.1434 11.8394 11.8397C12.143 11.536 12.5711 11.4037 12.9314 11.3361C13.3183 11.2636 13.7667 11.2415 14.2344 11.2528C15.1729 11.2753 16.2866 11.4346 17.3468 11.6799C18.4033 11.9244 19.4519 12.2646 20.2476 12.6692C20.6421 12.8698 21.0141 13.106 21.2936 13.3837Z',
  d6: 'M12.0468 1.25H9.95407C8.17614 1.24998 6.74303 1.24995 5.61593 1.40149C4.44573 1.55882 3.46045 1.8954 2.67792 2.67792C1.8954 3.46045 1.55882 4.44573 1.40149 5.61593C1.24995 6.74303 1.24998 8.17612 1.25 9.95405V12.0468C1.24998 13.8248 1.24995 15.2579 1.40149 16.385C1.55882 17.5552 1.8954 18.5405 2.67792 19.323C3.38671 20.0318 4.26317 20.3757 5.29576 20.5509C6.29998 20.7213 7.54227 20.7456 9.04751 20.75L9.05037 20.75H9.53789C10.0764 20.75 10.5129 20.3135 10.5129 19.775C10.5129 19.2365 10.0764 18.7999 9.53789 18.7999H9.05195C7.52128 18.7954 6.44073 18.7672 5.62198 18.6283C4.83136 18.4942 4.38463 18.2718 4.05685 17.9441C3.69704 17.5843 3.46245 17.0791 3.33419 16.1251C3.20216 15.1431 3.20009 13.8416 3.20009 11.9755V10.0254C3.20009 9.41577 3.20031 8.86638 3.20522 8.36871C3.20793 8.09274 3.20929 7.95475 3.297 7.86792C3.38471 7.78109 3.52372 7.78113 3.80173 7.78119L18.1995 7.7847C18.4774 7.78477 18.6164 7.78481 18.704 7.87163C18.7917 7.95846 18.793 8.09641 18.7957 8.37227C18.8006 8.869 18.8008 9.41722 18.8008 10.0254C18.8008 10.5639 19.2374 11.0005 19.7759 11.0005C20.3144 11.0005 20.7509 10.5639 20.7509 10.0254V9.9541C20.7509 8.17614 20.751 6.74304 20.5994 5.61593C20.4421 4.44573 20.1055 3.46045 19.323 2.67792C18.5405 1.8954 17.5552 1.55882 16.385 1.40149C15.2579 1.24995 13.8248 1.24998 12.0468 1.25Z',
  d7: 'M20 10.0004V2.00028L2 2V19.9994H9.5',
  d8: 'M21.9999 14L12 12L14 21.9996L17.0001 18.9998L20.0003 22L22 19.9998L18.9999 16.9997L21.9999 14Z',
  d9: 'M11.4697 11.4697C11.647 11.2924 11.9012 11.2154 12.1471 11.2646L22.147 13.2645C22.4182 13.3188 22.6376 13.5179 22.7177 13.7826C22.7979 14.0474 22.7258 14.3347 22.5302 14.5303L20.0606 16.9997L22.5303 19.4694C22.8232 19.7623 22.8232 20.2371 22.5304 20.53L20.5307 22.5303C20.3901 22.671 20.1993 22.75 20.0004 22.75C19.8014 22.75 19.6106 22.671 19.47 22.5303L17.0001 20.0604L14.5303 22.53C14.3347 22.7255 14.0474 22.7976 13.7827 22.7174C13.5179 22.6373 13.3188 22.4179 13.2646 22.1467L11.2646 12.1471C11.2154 11.9012 11.2924 11.647 11.4697 11.4697Z',
  d10: 'M2.22502 1.25C1.96643 1.25 1.71843 1.35272 1.53558 1.53557C1.35272 1.71843 1.25 1.96643 1.25 2.22503V19.775C1.25 20.3135 1.68652 20.75 2.225 20.75H9.5375V18.7999H3.2V7.75H18.8V10.0256H20.75V2.2253C20.75 1.68681 20.3135 1.25028 19.775 1.25027L2.22502 1.25Z',
} as const;

export const IconCursorInWindowStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-in-window-stroke-rounded IconCursorInWindowStrokeRounded"
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

export const IconCursorInWindowDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-in-window-duotone-rounded IconCursorInWindowDuotoneRounded"
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
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconCursorInWindowTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-in-window-twotone-rounded IconCursorInWindowTwotoneRounded"
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

export const IconCursorInWindowSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-in-window-solid-rounded IconCursorInWindowSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorInWindowBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-in-window-bulk-rounded IconCursorInWindowBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorInWindowStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-in-window-stroke-sharp IconCursorInWindowStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconCursorInWindowSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-in-window-solid-sharp IconCursorInWindowSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCursorInWindow: TheIconSelfPack = {
  name: 'CursorInWindow',
  StrokeRounded: IconCursorInWindowStrokeRounded,
  DuotoneRounded: IconCursorInWindowDuotoneRounded,
  TwotoneRounded: IconCursorInWindowTwotoneRounded,
  SolidRounded: IconCursorInWindowSolidRounded,
  BulkRounded: IconCursorInWindowBulkRounded,
  StrokeSharp: IconCursorInWindowStrokeSharp,
  SolidSharp: IconCursorInWindowSolidSharp,
};