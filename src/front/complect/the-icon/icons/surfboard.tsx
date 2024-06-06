import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.0529 6.50695C13.3334 3.22644 18.3612 1.84155 20.939 2.01431C21.302 2.03865 21.4835 2.05081 21.7164 2.28365C21.9492 2.51648 21.9614 2.698 21.9857 3.06103C22.1585 5.63883 20.7736 10.6666 17.4931 13.9471C14.4457 16.9945 9.81522 19.8991 6.81046 21.6485C6.45729 21.8541 6.2807 21.9569 6.13279 21.985C5.71158 22.0647 5.28599 21.8201 5.143 21.4159C5.09278 21.274 5.09278 21.0656 5.09278 20.6488C5.09278 20.2524 5.09278 20.0541 5.05038 19.8912C4.93033 19.4299 4.57009 19.0697 4.10879 18.9496C3.94588 18.9072 3.74764 18.9072 3.35117 18.9072C2.9344 18.9072 2.72601 18.9072 2.58409 18.857C2.17994 18.714 1.93525 18.2884 2.01503 17.8672C2.04305 17.7193 2.14586 17.5427 2.35148 17.1895C4.10093 14.1848 7.00549 9.55434 10.0529 6.50695Z',
  d2: 'M21 8C17.4091 14.1336 10.3975 8.45321 5.5 12.5',
  d3: 'M7 17L8 16',
  d4: 'M6.81046 21.6485C9.81522 19.899 14.4457 16.9945 17.4931 13.9471C19.1917 12.2484 20.3821 10.0812 21.1112 8.02832C19.7814 10.7735 15.928 11.3196 12.8463 10.8748C10.3808 10.519 6.99271 11.491 5.60683 12.0216C4.32616 13.8826 3.20224 15.7283 2.35148 17.1895C2.14586 17.5427 2.04305 17.7193 2.01503 17.8672C1.93525 18.2884 2.17994 18.714 2.58409 18.857C2.726 18.9072 2.93439 18.9072 3.35115 18.9072C3.74762 18.9072 3.94588 18.9072 4.10879 18.9496C4.57009 19.0696 4.93033 19.4299 5.05038 19.8912C5.09278 20.0541 5.09278 20.2523 5.09278 20.6488C5.09278 21.0656 5.09278 21.274 5.143 21.4159C5.28599 21.82 5.71158 22.0647 6.13279 21.9849C6.2807 21.9569 6.45729 21.8541 6.81046 21.6485Z',
  d5: 'M20.6285 9.20508C18.7792 9.84507 14.3341 11.0387 11.349 10.6931C8.3638 10.3475 6.2755 11.3811 5.60449 11.9411',
  d6: 'M20.8011 1.26615C19.3651 1.1699 17.3656 1.50438 15.3354 2.2542C13.293 3.00855 11.1317 4.21516 9.40612 5.94071C6.33063 9.0162 3.43838 13.6391 1.72626 16.5798C1.63505 16.7364 1.53776 16.9035 1.47222 17.031C1.40473 17.1622 1.32181 17.3407 1.28181 17.5519C1.11409 18.4374 1.62255 19.3218 2.47216 19.6224C2.67616 19.6946 2.87442 19.7124 3.02198 19.72C3.16668 19.7274 3.36251 19.7274 3.54778 19.7274C3.75011 19.7274 3.87017 19.7276 3.96026 19.7316C4.06294 19.7278 4.26831 19.7839 4.26831 20.0397C4.2723 20.1298 4.27253 20.2498 4.27253 20.4522C4.27252 20.6374 4.27251 20.8333 4.27995 20.978C4.28755 21.1255 4.30539 21.3238 4.37756 21.5278C4.67816 22.3774 5.56255 22.8858 6.44803 22.7181C6.65921 22.6781 6.83772 22.5952 6.96897 22.5277C7.09623 22.4623 7.26358 22.3648 7.41997 22.2738L7.42014 22.2737C10.3608 20.5616 14.9837 17.6693 18.0592 14.5938C19.7848 12.8683 20.9914 10.707 21.7457 8.66453C22.4956 6.6343 22.83 4.63488 22.7338 3.1988L22.7316 3.16599C22.7221 3.01863 22.707 2.78551 22.6412 2.56131C22.5541 2.26452 22.3982 2.02504 22.1865 1.81341C21.9749 1.60178 21.7354 1.44586 21.4386 1.35873C21.2144 1.29291 20.9813 1.27783 20.834 1.2683L20.8011 1.26615ZM10.7887 7.32289C12.2691 5.8425 14.1675 4.76943 16.0131 4.0878C17.8709 3.40165 19.5878 3.14383 20.6709 3.21642C20.706 3.20375 20.7778 3.20865 20.7841 3.32961C20.8567 4.41274 20.5989 6.12966 19.9127 7.98747C19.8415 8.18043 19.7659 8.37397 19.6861 8.56754C19.0338 9.32873 18.305 9.75933 17.5255 10.0068C16.4281 10.3551 15.1832 10.3571 13.7797 10.2836C13.5172 10.2698 13.2484 10.2529 12.9748 10.2357L12.9748 10.2357C11.4455 10.1394 9.7609 10.0334 8.12494 10.4114C8.98285 9.29177 9.881 8.23056 10.7887 7.32289ZM8.53027 16.5303C8.82316 16.2374 8.82316 15.7626 8.53027 15.4697C8.23738 15.1768 7.7625 15.1768 7.46961 15.4697L6.46961 16.4697C6.17672 16.7626 6.17672 17.2374 6.46961 17.5303C6.7625 17.8232 7.23738 17.8232 7.53027 17.5303L8.53027 16.5303Z',
  d7: 'M15.3354 2.2542C17.3656 1.50438 19.3651 1.1699 20.8011 1.26615L20.834 1.2683C20.9813 1.27783 21.2144 1.29291 21.4386 1.35873C21.7354 1.44586 21.9749 1.60178 22.1865 1.81341C22.3982 2.02504 22.5541 2.26452 22.6412 2.56131C22.707 2.78551 22.7221 3.01863 22.7316 3.16599L22.7338 3.1988C22.83 4.63488 22.4956 6.6343 21.7457 8.66453C20.9914 10.707 19.7848 12.8683 18.0592 14.5938C14.9837 17.6693 10.3608 20.5616 7.42014 22.2737C7.2637 22.3648 7.09628 22.4623 6.96897 22.5277C6.83772 22.5952 6.65921 22.6781 6.44803 22.7181C5.56255 22.8858 4.67816 22.3774 4.37756 21.5278C4.30539 21.3238 4.28755 21.1255 4.27995 20.978C4.27251 20.8333 4.27252 20.6374 4.27253 20.4522C4.27253 20.2498 4.2723 20.1298 4.26831 20.0397C4.26831 19.7839 4.06294 19.7278 3.96026 19.7316C3.87017 19.7276 3.75011 19.7274 3.54778 19.7274C3.36251 19.7274 3.16668 19.7274 3.02198 19.72C2.87442 19.7124 2.67616 19.6946 2.47216 19.6224C1.62255 19.3218 1.11409 18.4374 1.28181 17.5519C1.32181 17.3407 1.40473 17.1622 1.47222 17.031C1.53776 16.9035 1.63505 16.7364 1.72626 16.5798C3.43838 13.6391 6.33063 9.0162 9.40612 5.94071C11.1317 4.21516 13.293 3.00855 15.3354 2.2542ZM16.0131 4.0878C14.1675 4.76943 12.2691 5.8425 10.7887 7.32289C9.881 8.23056 8.98285 9.29177 8.12494 10.4114C9.7609 10.0334 11.4455 10.1394 12.9748 10.2357C13.2484 10.2529 13.5172 10.2698 13.7797 10.2836C15.1832 10.3571 16.4281 10.3551 17.5255 10.0068C18.305 9.75933 19.0338 9.32873 19.6861 8.56754C19.7659 8.37397 19.8415 8.18043 19.9127 7.98747C20.5989 6.12966 20.8567 4.41274 20.7841 3.32961C20.7778 3.20865 20.706 3.20375 20.6709 3.21642C19.5878 3.14383 17.8709 3.40165 16.0131 4.0878Z',
  d8: 'M8.53027 15.4697C8.82316 15.7626 8.82316 16.2374 8.53027 16.5303L7.53027 17.5303C7.23738 17.8232 6.7625 17.8232 6.46961 17.5303C6.17672 17.2374 6.17672 16.7626 6.46961 16.4697L7.46961 15.4697C7.7625 15.1768 8.23738 15.1768 8.53027 15.4697Z',
  d9: 'M10.0528 6.49596C13.3332 3.21313 18.5115 2.00028 21.9997 2.00012C21.9997 5.48828 20.7733 10.6586 17.4928 13.9414C14.4455 16.9909 9.00751 20.2494 6.00279 22.0001L5.50212 18.4976L1.99969 17.9973C3.74911 14.9904 7.00543 9.54551 10.0528 6.49596Z',
  d10: 'M21 8C17.4091 14.1336 12 9 5.5 12',
  d11: 'M7 17L9 15',
  d12: 'M23 1.75144V1L22.2485 1.00003C18.638 1.00019 13.2248 2.24473 9.74731 5.72458C8.32968 7.14319 6.87622 9.05441 5.54815 10.9995C3.98508 13.3029 2.49317 15.7984 1.56088 17.4007L1 18.3647L5.05537 18.9441L5.63517 23L6.59941 22.4382C9.59183 20.6947 15.1301 17.3829 18.2646 14.2462C21.7407 10.7677 23 5.36406 23 1.75144ZM20.5748 7.37858C21.1188 5.69487 21.4036 3.99687 21.4777 2.52246C18.1486 2.68807 13.6787 3.91696 10.8108 6.78683C9.8555 7.74276 8.87507 8.94576 7.92578 10.2389C9.92634 9.8276 11.7963 9.97066 13.4328 10.0959C13.8332 10.1265 14.2198 10.1561 14.5907 10.1762C15.8776 10.246 16.9594 10.209 17.9174 9.84068C18.8463 9.48355 19.7351 8.78353 20.562 7.37108L20.5748 7.37858ZM7.73839 17.2804L9.73839 15.2804L8.67773 14.2197L6.67773 16.2197L7.73839 17.2804Z',
};

export const IconSurfboardStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="surfboard-stroke-rounded IconSurfboardStrokeRounded"
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

export const IconSurfboardDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="surfboard-duotone-rounded IconSurfboardDuotoneRounded"
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
        d={d.d1} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSurfboardTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="surfboard-twotone-rounded IconSurfboardTwotoneRounded"
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

export const IconSurfboardSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="surfboard-solid-rounded IconSurfboardSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSurfboardBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="surfboard-bulk-rounded IconSurfboardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSurfboardStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="surfboard-stroke-sharp IconSurfboardStrokeSharp"
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

export const IconSurfboardSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="surfboard-solid-sharp IconSurfboardSolidSharp"
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

export const iconPackOfSurfboard: TheIconSelfPack = {
  name: 'Surfboard',
  StrokeRounded: IconSurfboardStrokeRounded,
  DuotoneRounded: IconSurfboardDuotoneRounded,
  TwotoneRounded: IconSurfboardTwotoneRounded,
  SolidRounded: IconSurfboardSolidRounded,
  BulkRounded: IconSurfboardBulkRounded,
  StrokeSharp: IconSurfboardStrokeSharp,
  SolidSharp: IconSurfboardSolidSharp,
};