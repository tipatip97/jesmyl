import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.9637 2.04725C16.4347 1.98425 16.9126 1.98425 17.3836 2.04725M19.9008 3.08814C20.2758 3.37442 20.6254 3.72398 20.9117 4.09896M21.9529 6.61766C22.0157 7.08784 22.0157 7.56479 21.9529 8.03497M13.5964 3.31808C11.445 5.35612 11.5253 8.53789 13.4929 10.5051C15.4826 12.4943 18.7194 12.5591 20.75 10.3326',
  d2: 'M10 3.32038C6.75053 2.8233 3.67361 2.85605 2.76477 3.76477C0.59286 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L18 14.8519',
  d3: 'M15.4798 11.7452C15.46 11.7748 15.441 11.8044 15.4229 11.8342C15.0857 12.3865 15.4281 12.876 15.8784 13.222L20.235 16.569C20.9939 17.152 21.2198 17.5628 20.7696 18.4418C20.0785 19.7911 18.7939 21.0775 17.4421 21.7696C16.5628 22.2198 16.1521 21.9939 15.569 21.2348L12.222 16.8784C11.8761 16.4281 11.3865 16.0856 10.8342 16.4228C10.2718 16.7661 9.74337 17.4127 9.202 18.0751C8.3938 19.0639 7.55678 20.088 6.53497 20.1912C3.42489 20.494 0.59286 5.93695 2.76477 3.76477C3.95893 2.57077 8.89612 2.88907 13.0497 3.93449C11.4777 5.95272 11.7095 8.72877 13.489 10.5085C14.0672 11.0868 14.751 11.502 15.4798 11.7452Z',
  d4: 'M17.2406 3.2035C16.8735 3.1544 16.501 3.1544 16.1339 3.2035C15.6093 3.27366 15.1271 2.90526 15.057 2.38066C14.9868 1.85605 15.3552 1.3739 15.8798 1.30374C16.4156 1.23209 16.959 1.23209 17.4947 1.30374C18.0193 1.3739 18.3877 1.85605 18.3175 2.38066C18.2474 2.90526 17.7652 3.27366 17.2406 3.2035ZM19.0182 2.66962C19.3394 2.24893 19.9408 2.16824 20.3615 2.48941C20.7886 2.81553 21.1842 3.21111 21.5104 3.63827C21.8316 4.05894 21.7509 4.66035 21.3303 4.98154C20.9096 5.30274 20.3082 5.2221 19.987 4.80142C19.7644 4.50987 19.49 4.23546 19.1984 4.01288C18.7777 3.69171 18.697 3.09031 19.0182 2.66962ZM14.4339 2.81243C14.7979 3.19667 14.7815 3.80323 14.3973 4.16723C12.742 5.73527 12.7978 8.1629 14.3166 9.68138C15.8537 11.2181 18.3238 11.2606 19.8857 9.54799C20.2424 9.15693 20.8485 9.12904 21.2396 9.48569C21.6306 9.84235 21.6585 10.4485 21.3019 10.8396C18.9717 13.3945 15.2379 13.3127 12.9615 11.0368C10.7089 8.78478 10.6109 5.11399 13.0791 2.77578C13.4633 2.41178 14.0699 2.42819 14.4339 2.81243ZM21.6198 5.6837C22.1444 5.61367 22.6265 5.98219 22.6965 6.50681C22.7679 7.04156 22.7679 7.58392 22.6965 8.11867C22.6265 8.64329 22.1444 9.01181 21.6198 8.94178C21.0952 8.87175 20.7266 8.38968 20.7967 7.86506C20.8456 7.49864 20.8456 7.12684 20.7967 6.76041C20.7266 6.23579 21.0952 5.75373 21.6198 5.6837Z',
  d5: 'M10.6089 3.55232C10.8219 3.15912 10.9283 2.96252 10.8592 2.82317C10.7901 2.68381 10.586 2.65218 10.1777 2.58891C8.81683 2.37801 7.47647 2.2564 6.2943 2.25025C5.43169 2.24575 4.62991 2.3025 3.95577 2.44097C3.30626 2.57439 2.66365 2.80529 2.23441 3.23447C1.80522 3.66371 1.57439 4.30625 1.44097 4.95576C1.3025 5.62989 1.24575 6.43167 1.25025 7.29428C1.25924 9.0223 1.51493 11.0883 1.93559 13.0624C2.35535 15.0323 2.94924 16.9572 3.65577 18.3896C4.00723 19.1021 4.407 19.7351 4.85888 20.19C5.30547 20.6395 5.8994 21.0066 6.60768 20.9376L6.6103 20.9374C7.22975 20.8748 7.75659 20.5837 8.19377 20.239C8.62932 19.8956 9.0218 19.4621 9.37198 19.0469C9.5253 18.8652 9.66476 18.6944 9.7989 18.5301C9.99274 18.2926 10.1757 18.0685 10.3732 17.8449C10.6766 17.5011 10.9394 17.249 11.1786 17.0924C11.1957 17.0811 11.2042 17.0755 11.2517 17.0631C11.2992 17.0507 11.2617 17.0482 11.2767 17.0492C11.3422 17.0537 11.459 17.1162 11.6273 17.3353L14.9742 21.6918C15.2706 22.0775 15.6379 22.4942 16.1575 22.6673C16.7237 22.8559 17.2718 22.6994 17.7838 22.4372C19.276 21.6733 20.6745 20.2728 21.4371 18.7837C21.6993 18.2717 21.8559 17.7237 21.6673 17.1574C21.4943 16.6379 21.0776 16.2705 20.6919 15.9742L18.5157 14.3023C18.4141 14.2243 18.3634 14.1853 18.3051 14.1699C18.2468 14.1544 18.1795 14.1638 18.0449 14.1824C15.8442 14.4876 13.5576 13.754 11.901 12.0977C9.61993 9.8172 9.09327 6.35135 10.6089 3.55232Z',
  d6: 'M16 14.3996L20 18.3996L16.4005 22L11.0001 16.5996L5.59999 21.9993L2 4L9 5.39999',
  d7: 'M17.2842 2.79063C16.8791 2.73646 16.4681 2.73646 16.0631 2.79063L15.3197 2.89005L15.1209 1.40329L15.8642 1.30387C16.4013 1.23204 16.946 1.23204 17.4831 1.30387L18.2264 1.40329L18.0276 2.89005L17.2842 2.79063ZM19.7597 2.0369L20.3559 2.49201C20.7839 2.8188 21.1809 3.21578 21.5078 3.64382L21.9629 4.23992L20.7707 5.15021L20.3155 4.55411C20.0698 4.23219 19.7676 3.93005 19.4457 3.68428L18.8495 3.22918L19.7597 2.0369ZM14.6566 3.34677L14.1122 3.86256C12.2789 5.59923 12.3427 8.29455 14.0232 9.97473C15.7235 11.6747 18.4658 11.7241 20.1958 9.82721L20.7012 9.27306L21.8095 10.2838L21.3041 10.838C18.9729 13.3941 15.2416 13.3139 12.9627 11.0355C10.7079 8.78124 10.6111 5.11301 13.0806 2.77361L13.625 2.25781L14.6566 3.34677ZM22.5971 5.77502L22.6963 6.51843C22.7679 7.05447 22.7679 7.59816 22.6963 8.1342L22.5971 8.87761L21.1103 8.67914L21.2095 7.93573C21.2635 7.53142 21.2635 7.12121 21.2095 6.7169L21.1103 5.97349L22.5971 5.77502Z',
  d8: 'M10.0741 4.84997C9.86346 5.52931 9.75 6.2514 9.75 7C9.75 10.9742 12.9477 14.2016 16.9106 14.2495L20.5303 17.8692C20.8232 18.1621 20.8232 18.6369 20.5304 18.9298L16.931 22.5303C16.7903 22.671 16.5995 22.75 16.4006 22.75C16.2017 22.75 16.0109 22.671 15.8702 22.5303L11.0001 17.6602L6.13031 22.5297C5.93473 22.7252 5.64738 22.7973 5.38265 22.7171C5.11793 22.637 4.91881 22.4176 4.86457 22.1464L1.26458 4.1471C1.2154 3.90121 1.29236 3.647 1.46968 3.46968C1.647 3.29237 1.9012 3.2154 2.1471 3.26458L10.0741 4.84997Z',
} as const;

export const IconCursorProgress01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-01-stroke-rounded IconCursorProgress01StrokeRounded"
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

export const IconCursorProgress01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-01-duotone-rounded IconCursorProgress01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCursorProgress01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-01-twotone-rounded IconCursorProgress01TwotoneRounded"
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

export const IconCursorProgress01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-01-solid-rounded IconCursorProgress01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorProgress01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-01-bulk-rounded IconCursorProgress01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorProgress01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-01-stroke-sharp IconCursorProgress01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorProgress01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-01-solid-sharp IconCursorProgress01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCursorProgress01: TheIconSelfPack = {
  name: 'CursorProgress01',
  StrokeRounded: IconCursorProgress01StrokeRounded,
  DuotoneRounded: IconCursorProgress01DuotoneRounded,
  TwotoneRounded: IconCursorProgress01TwotoneRounded,
  SolidRounded: IconCursorProgress01SolidRounded,
  BulkRounded: IconCursorProgress01BulkRounded,
  StrokeSharp: IconCursorProgress01StrokeSharp,
  SolidSharp: IconCursorProgress01SolidSharp,
};