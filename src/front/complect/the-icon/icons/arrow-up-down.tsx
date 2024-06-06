import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 4V20',
  d2: 'M17 19L17 4',
  d3: 'M10 6.99998C10 6.99998 7.79053 4.00001 6.99998 4C6.20942 3.99999 4 7 4 7',
  d4: 'M20 17C20 17 17.7905 20 17 20C16.2094 20 14 17 14 17',
  d5: 'M17 19V4M20 17.0001C20 17.0001 17.7905 20.0001 17 20.0001C16.2094 20.0001 14 17.0001 14 17.0001',
  d6: 'M7.75001 19.9999C7.75001 20.5522 7.30229 20.9999 6.75001 20.9999C6.19773 20.9999 5.75001 20.5522 5.75001 19.9999V7.99999L4.56829 8L4.53443 8.00003H4.53442C4.39798 8.00025 4.19919 8.00056 4.02998 7.9746C3.84511 7.94624 3.36011 7.83812 3.11374 7.32267C2.86919 6.81104 3.08093 6.36183 3.17545 6.19364C3.26004 6.04314 3.38325 5.88606 3.46679 5.77954L3.48764 5.75295C3.83845 5.3042 4.34774 4.67868 4.85106 4.15775C5.10066 3.89942 5.3718 3.64263 5.63789 3.44332C5.77108 3.34356 5.92353 3.24258 6.08808 3.16319C6.24265 3.08862 6.47491 3 6.74999 3C7.02506 3 7.25731 3.08862 7.41188 3.16319C7.57642 3.24258 7.72888 3.34356 7.86206 3.44332C8.12815 3.64263 8.3993 3.89941 8.6489 4.15774C9.15222 4.67866 9.66152 5.30417 10.0123 5.75291L10.0332 5.77951L10.0332 5.77952C10.1167 5.88603 10.24 6.04311 10.3245 6.19361C10.4191 6.36179 10.6308 6.811 10.3863 7.32264C10.1399 7.83809 9.65489 7.94621 9.47003 7.97458C9.30081 8.00054 9.10202 8.00023 8.96557 8.00002L8.93172 7.99998L7.75001 7.99998V19.9999Z',
  d7: 'M18.25 4.00006C18.25 3.44778 17.8023 3.00006 17.25 3.00006C16.6977 3.00006 16.25 3.44778 16.25 4.00006V16L15.0683 16L15.0344 16H15.0344C14.898 15.9998 14.6992 15.9994 14.53 16.0254C14.3451 16.0538 13.8601 16.1619 13.6137 16.6773C13.3692 17.189 13.5809 17.6382 13.6755 17.8064C13.76 17.9569 13.8832 18.1139 13.9668 18.2205L13.9876 18.2471C14.3385 18.6958 14.8477 19.3213 15.3511 19.8422C15.6007 20.1006 15.8718 20.3574 16.1379 20.5567C16.2711 20.6564 16.4235 20.7574 16.5881 20.8368C16.7426 20.9114 16.9749 21 17.25 21C17.5251 21 17.7573 20.9114 17.9119 20.8368C18.0764 20.7574 18.2289 20.6564 18.3621 20.5567C18.6282 20.3574 18.8993 20.1006 19.1489 19.8423C19.6522 19.3213 20.1615 18.6958 20.5123 18.2471L20.5332 18.2205L20.5332 18.2205C20.6167 18.114 20.74 17.9569 20.8245 17.8064C20.9191 17.6382 21.1308 17.189 20.8863 16.6774C20.6399 16.1619 20.1549 16.0538 19.97 16.0254C19.8008 15.9995 19.602 15.9998 19.4656 16L19.4317 16L18.25 16V4.00006Z',
  d8: 'M7.75 20C7.75 20.5522 7.30228 21 6.75 21C6.19772 21 5.75 20.5522 5.75 20V8.00001L7.75 8V20Z',
  d9: 'M6.08808 3.16319C6.24265 3.08862 6.47491 3 6.74999 3C7.02506 3 7.25731 3.08862 7.41188 3.16319C7.57642 3.24258 7.72888 3.34356 7.86206 3.44332C8.12815 3.64263 8.3993 3.89941 8.6489 4.15774C9.15222 4.67866 9.66152 5.30417 10.0123 5.75291L10.0332 5.77951L10.0332 5.77952C10.1167 5.88603 10.24 6.04311 10.3245 6.19361C10.4191 6.36179 10.6308 6.811 10.3863 7.32264C10.1399 7.83809 9.65489 7.94621 9.47003 7.97458C9.30081 8.00054 9.10202 8.00023 8.96557 8.00002L8.93172 7.99998L7.75001 7.99998L4.56829 8L4.53443 8.00003H4.53442C4.39798 8.00025 4.19919 8.00056 4.02998 7.9746C3.84511 7.94624 3.36011 7.83812 3.11374 7.32267C2.86919 6.81104 3.08093 6.36183 3.17545 6.19364C3.26004 6.04314 3.38325 5.88606 3.46679 5.77954L3.48764 5.75295C3.83845 5.3042 4.34774 4.67868 4.85106 4.15775C5.10066 3.89942 5.3718 3.64263 5.63789 3.44332C5.77108 3.34356 5.92353 3.24258 6.08808 3.16319Z',
  d10: 'M18.25 4.00005C18.25 3.44776 17.8023 3.00005 17.25 3.00005C16.6977 3.00005 16.25 3.44776 16.25 4.00005V16L18.25 16V4.00005Z',
  d11: 'M16.5881 20.8368C16.7426 20.9114 16.9749 21 17.25 21C17.5251 21 17.7573 20.9114 17.9119 20.8368C18.0764 20.7574 18.2289 20.6564 18.3621 20.5567C18.6282 20.3574 18.8993 20.1006 19.1489 19.8423C19.6522 19.3213 20.1615 18.6958 20.5123 18.2471L20.5332 18.2205L20.5332 18.2205C20.6167 18.114 20.74 17.9569 20.8245 17.8064C20.9191 17.6382 21.1308 17.189 20.8863 16.6774C20.6399 16.1619 20.1549 16.0538 19.97 16.0254C19.8008 15.9995 19.602 15.9998 19.4656 16L19.4317 16L18.25 16L15.0683 16L15.0344 16H15.0344C14.898 15.9998 14.6992 15.9994 14.53 16.0254C14.3451 16.0538 13.8601 16.1619 13.6137 16.6773C13.3692 17.189 13.5809 17.6382 13.6755 17.8064C13.76 17.9569 13.8832 18.1139 13.9668 18.2205L13.9876 18.2471C14.3385 18.6958 14.8477 19.3213 15.3511 19.8422C15.6007 20.1006 15.8718 20.3574 16.1379 20.5567C16.2711 20.6564 16.4235 20.7574 16.5881 20.8368Z',
  d12: 'M17.0002 4L17.0001 19.46M21.0002 16L17.0001 20.0001L13 16',
  d13: 'M6.99983 19.9999L6.99977 4.32214M3 7.99994L6.99977 4L11 8.00015',
  d14: 'M18.0004 4L18.0002 17.1716L20.586 14.5858L22.0002 16L17.0002 21L12 16L13.4142 14.5858L16.0002 17.1716L16.0004 4H18.0004Z',
  d15: 'M6.9998 3L11.9999 8.00004L10.5857 9.41427L7.99983 6.82841L7.99988 20L5.99988 20L5.99983 6.8285L3.41424 9.41422L2 8.00004L6.9998 3Z',
} as const;

export const IconArrowUpDownStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-down-stroke-rounded IconArrowUpDownStrokeRounded"
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

export const IconArrowUpDownDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-down-duotone-rounded IconArrowUpDownDuotoneRounded"
    >
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

export const IconArrowUpDownTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-down-twotone-rounded IconArrowUpDownTwotoneRounded"
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

export const IconArrowUpDownSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-down-solid-rounded IconArrowUpDownSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUpDownBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-down-bulk-rounded IconArrowUpDownBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconArrowUpDownStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-down-stroke-sharp IconArrowUpDownStrokeSharp"
    >
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
    </TheIconWrapper>
  );
};

export const IconArrowUpDownSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-down-solid-sharp IconArrowUpDownSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfArrowUpDown: TheIconSelfPack = {
  name: 'ArrowUpDown',
  StrokeRounded: IconArrowUpDownStrokeRounded,
  DuotoneRounded: IconArrowUpDownDuotoneRounded,
  TwotoneRounded: IconArrowUpDownTwotoneRounded,
  SolidRounded: IconArrowUpDownSolidRounded,
  BulkRounded: IconArrowUpDownBulkRounded,
  StrokeSharp: IconArrowUpDownStrokeSharp,
  SolidSharp: IconArrowUpDownSolidSharp,
};