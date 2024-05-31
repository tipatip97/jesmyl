import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22',
  d2: 'M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z',
  d3: 'M2.25629 8.74938C1.82198 9.76763 1.99849 10.9162 2.35151 13.2135L2.65255 15.1724C3.15299 18.4289 3.40321 20.0572 4.57112 21.0286C5.50418 21.8047 6.78158 21.9607 8.99888 21.9921L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L15 21.9921C17.2181 21.9608 18.4959 21.8048 19.4291 21.0286C20.597 20.0572 20.8473 18.4289 21.3477 15.1724L21.6487 13.2135C22.0018 10.9162 22.1783 9.76763 21.744 8.74938C21.3097 7.73112 20.3461 7.03443 18.419 5.64106L16.9791 4.6C14.5818 2.86667 13.3832 2 12.0001 2C10.6171 2 9.41841 2.86667 7.02111 4.6L5.58126 5.64106C3.65415 7.03443 2.69059 7.73112 2.25629 8.74938Z',
  d4: 'M9.52408 1.99594C10.36 1.52688 11.1342 1.25 12.0003 1.25C12.8663 1.25 13.6406 1.52688 14.4765 1.99594C15.2864 2.45043 16.2144 3.12145 17.3814 3.96523L17.3814 3.96525L18.8905 5.05633C19.827 5.73347 20.575 6.2743 21.1392 6.77487C21.7217 7.29173 22.1575 7.807 22.434 8.45513C22.711 9.10469 22.778 9.77045 22.7409 10.5381C22.705 11.2789 22.5677 12.1726 22.3964 13.2871L22.0811 15.3387C21.8377 16.9225 21.6439 18.1837 21.3592 19.1662C21.0648 20.1821 20.6501 20.9887 19.9089 21.6052C19.1707 22.2192 18.2914 22.4926 17.2172 22.6231C16.8516 22.6675 16.4525 22.6964 16.0169 22.7151L16.2482 18.554C16.4193 16.0923 14.4683 14 11.9995 14C9.53067 14 7.57973 16.0923 7.75081 18.554L7.98211 22.7151C7.54706 22.6963 7.14851 22.6675 6.78334 22.6231C5.70918 22.4926 4.82985 22.2192 4.09168 21.6052C3.35043 20.9887 2.93572 20.1821 2.64133 19.1662C2.35662 18.1836 2.16283 16.9225 1.91946 15.3387L1.6042 13.2872C1.43291 12.1727 1.29555 11.2789 1.25969 10.5381C1.22252 9.77045 1.28953 9.10469 1.56657 8.45513C1.84301 7.807 2.27883 7.29173 2.86137 6.77487C3.42556 6.27429 4.17357 5.73346 5.11011 5.05632L6.61915 3.96524C7.78614 3.12145 8.71418 2.45043 9.52408 1.99594ZM9.98711 22.7494C10.252 22.75 10.5266 22.75 10.8114 22.75H13.1892C13.4734 22.75 13.7475 22.75 14.0119 22.7494L14.2521 18.4277L14.2527 18.4199C14.3461 17.1122 13.3104 16 11.9995 16C10.6885 16 9.65292 17.1122 9.74632 18.4199L9.74688 18.4277L9.98711 22.7494Z',
  d5: 'M12.0002 1.25C11.1342 1.25 10.3599 1.52688 9.52405 1.99594C8.71415 2.45043 7.78611 3.12145 6.61912 3.96524L5.11008 5.05632C4.17354 5.73346 3.42553 6.27429 2.86134 6.77487C2.27879 7.29173 1.84298 7.807 1.56654 8.45513C1.2895 9.10469 1.22249 9.77045 1.25966 10.5381C1.29552 11.2789 1.43288 12.1727 1.60417 13.2872L1.91943 15.3387C2.1628 16.9225 2.35659 18.1836 2.64129 19.1662C2.93569 20.1821 3.3504 20.9887 4.09165 21.6052C4.82982 22.2192 5.70915 22.4926 6.7833 22.6231C7.82824 22.75 9.14639 22.75 10.8113 22.75H13.1892C14.8541 22.75 16.1723 22.75 17.2172 22.6231C18.2913 22.4926 19.1707 22.2192 19.9088 21.6052C20.6501 20.9887 21.0648 20.1821 21.3592 19.1662C21.6439 18.1837 21.8377 16.9225 22.0811 15.3387L22.3963 13.2871C22.5676 12.1726 22.705 11.2789 22.7408 10.5381C22.778 9.77045 22.711 9.10469 22.434 8.45513C22.1575 7.807 21.7217 7.29173 21.1392 6.77487C20.575 6.2743 19.827 5.73347 18.8904 5.05633L17.3814 3.96525C16.2144 3.12146 15.2863 2.45043 14.4764 1.99594C13.6406 1.52688 12.8663 1.25 12.0002 1.25Z',
  d6: 'M16.017 22.7151L16.2483 18.554C16.4194 16.0923 14.4684 14 11.9996 14C9.53079 14 7.57985 16.0923 7.75093 18.554L7.98223 22.7151C8.57914 22.7408 9.24476 22.7476 9.98723 22.7494L9.747 18.4277L9.74644 18.4199C9.65304 17.1122 10.6887 16 11.9996 16C13.3106 16 14.3462 17.1122 14.2528 18.4199L14.2522 18.4277L14.012 22.7494C14.7544 22.7476 15.4201 22.7409 16.017 22.7151Z',
  d7: 'M8.99915 22L9.0025 16L14.9991 16V22',
  d8: 'M19.5017 22L22.0018 9L12.0018 2L2.00012 9L4.50173 22H19.5017Z',
  d9: 'M12.4319 1.38558C12.1737 1.20482 11.83 1.20481 11.5718 1.38554L1.5701 8.38554C1.32779 8.55513 1.20777 8.85129 1.26366 9.14172L3.76527 22.1417C3.83322 22.4948 4.14219 22.75 4.50176 22.75H8.25065L8.25379 15.25H15.7501V22.75H19.5018C19.8614 22.75 20.1703 22.4948 20.2383 22.1416L22.7383 9.14164C22.7942 8.85125 22.6742 8.55515 22.4319 8.38558L12.4319 1.38558ZM14.2501 22.75V16.75L9.75316 16.75L9.75065 22.75H14.2501Z',
} as const;

export const IconHome03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-03-stroke-rounded IconHome03StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHome03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-03-duotone-rounded IconHome03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHome03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-03-twotone-rounded IconHome03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHome03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-03-solid-rounded IconHome03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHome03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-03-bulk-rounded IconHome03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconHome03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-03-stroke-sharp IconHome03StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHome03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-03-solid-sharp IconHome03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHome03: TheIconSelfPack = {
  name: 'Home03',
  StrokeRounded: IconHome03StrokeRounded,
  DuotoneRounded: IconHome03DuotoneRounded,
  TwotoneRounded: IconHome03TwotoneRounded,
  SolidRounded: IconHome03SolidRounded,
  BulkRounded: IconHome03BulkRounded,
  StrokeSharp: IconHome03StrokeSharp,
  SolidSharp: IconHome03SolidSharp,
};