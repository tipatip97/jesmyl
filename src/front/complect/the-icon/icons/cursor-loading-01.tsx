import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.0853 3.50494C7.46 2.82682 3.77445 2.75522 2.76477 3.76477C0.59286 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L18 14.8519',
  d2: 'M20.6007 2H15.3993C14.6704 2 14.0309 2.49235 14.0017 3.20178C13.965 4.09439 14.5928 4.68711 15.2521 5.24355L15.2521 5.24355C16.1643 6.01331 16.6203 6.39819 16.6682 6.88541C16.6757 6.96164 16.6757 7.03836 16.6682 7.11459C16.6203 7.60181 16.1643 7.98669 15.2521 8.75645C14.5746 9.32822 13.9631 9.85975 14.0017 10.7982C14.0309 11.5076 14.6704 12 15.3993 12L20.6007 12C21.3296 12 21.969 11.5076 21.9983 10.7982C22.0215 10.2334 21.8122 9.671 21.3676 9.27999C21.1649 9.10172 20.9544 8.93077 20.7479 8.75645C19.8357 7.98669 19.3797 7.60181 19.3318 7.11459C19.3243 7.03836 19.3243 6.96164 19.3318 6.88541C19.3797 6.39819 19.8357 6.01331 20.7479 5.24355C21.4183 4.67779 22.0364 4.12905 21.9983 3.20178C21.969 2.49235 21.3296 2 20.6007 2Z',
  d3: 'M14.3223 4.28555C14.5599 4.64156 14.9015 4.94768 15.2521 5.24355C16.1643 6.01331 16.6203 6.39819 16.6682 6.88541C16.6757 6.96164 16.6757 7.03836 16.6682 7.11459C16.6203 7.60181 16.1643 7.98669 15.2521 8.75645C14.5746 9.32822 13.9631 9.85975 14.0017 10.7982C14.0302 11.4887 14.6367 11.9736 15.3412 11.999C15.1557 12.4836 15.4735 12.9109 15.8784 13.222L20.235 16.569C20.9939 17.152 21.2198 17.5628 20.7696 18.4418C20.0785 19.7911 18.7939 21.0775 17.4421 21.7696C16.5628 22.2198 16.1521 21.9939 15.569 21.2348L12.222 16.8784C11.8761 16.4281 11.3865 16.0856 10.8342 16.4228C10.2718 16.7661 9.74337 17.4127 9.202 18.0751C8.3938 19.0639 7.55678 20.088 6.53497 20.1912C3.42489 20.494 0.59286 5.93695 2.76477 3.76477C4.08385 2.44586 9.97007 2.97222 14.3223 4.28555Z',
  d4: 'M13.2524 3.17092C13.302 1.96492 14.3703 1.25 15.3993 1.25H20.6007C21.6297 1.25 22.698 1.96492 22.7476 3.17092C22.802 4.4922 21.8906 5.26087 21.2599 5.79281C20.7886 6.19055 20.4615 6.46841 20.2667 6.67933C20.0854 6.87556 20.0793 6.94686 20.0783 6.95798C20.0756 6.98548 20.0755 7.01381 20.0782 7.04131C20.0792 7.05243 20.0854 7.12444 20.2667 7.32067C20.4615 7.53159 20.9487 7.94322 21.42 8.34096L21.4201 8.34101C21.5645 8.46143 21.7186 8.58988 21.8629 8.71682C22.4942 9.27198 22.7792 10.0612 22.7476 10.8291C22.698 12.0351 21.6297 12.75 20.6007 12.75L15.3993 12.75C14.3703 12.75 13.302 12.0351 13.2524 10.8291C13.1979 9.50675 14.0894 8.75548 14.7242 8.22054C15.1955 7.8228 15.5385 7.53159 15.7333 7.32067C15.9146 7.12444 15.9207 7.05314 15.9217 7.04202C15.9244 7.01452 15.9245 6.98619 15.9218 6.95869C15.9208 6.94757 15.9146 6.87556 15.7333 6.67933C15.5385 6.46841 15.2397 6.21446 14.7684 5.81672C14.1415 5.28769 13.1987 4.47404 13.2524 3.17092Z',
  d5: 'M11.54 2.82854C11.671 2.85431 11.7592 2.97591 11.7537 3.10921C11.6688 5.17079 13.1472 6.41347 13.7501 6.92019C13.7996 6.96187 13.7996 7.03804 13.7501 7.07971L13.6975 7.12403C13.0753 7.64573 11.6686 8.82508 11.7537 10.8908C11.845 13.1079 13.7911 14.25 15.3994 14.25L18.2437 14.25C18.3447 14.25 18.3953 14.25 18.4422 14.2659C18.4891 14.2819 18.5292 14.3127 18.6093 14.3742L20.6919 15.9742C21.0776 16.2705 21.4943 16.6379 21.6673 17.1574C21.8559 17.7237 21.6993 18.2717 21.4371 18.7837C20.6745 20.2728 19.276 21.6733 17.7838 22.4372C17.2718 22.6994 16.7237 22.8559 16.1575 22.6673C15.6379 22.4942 15.2706 22.0775 14.9742 21.6918L11.6273 17.3353C11.459 17.1162 11.3422 17.0537 11.2767 17.0492C11.2617 17.0482 11.2992 17.0507 11.2517 17.0631C11.2042 17.0755 11.1957 17.0811 11.1786 17.0924C10.9394 17.249 10.6766 17.5011 10.3732 17.8449C10.1757 18.0685 9.993 18.2923 9.79915 18.5297C9.66501 18.694 9.5253 18.8652 9.37198 19.0469C9.0218 19.4621 8.62932 19.8956 8.19377 20.239C7.75659 20.5837 7.22975 20.8748 6.6103 20.9374L6.60768 20.9376C5.8994 21.0066 5.30547 20.6395 4.85888 20.19C4.407 19.7351 4.00723 19.1021 3.65577 18.3896C2.94924 16.9572 2.35535 15.0323 1.93559 13.0624C1.51493 11.0883 1.25924 9.0223 1.25025 7.29428C1.24575 6.43167 1.3025 5.62989 1.44097 4.95576C1.57439 4.30625 1.80522 3.66371 2.23441 3.23447C2.66365 2.80529 3.30626 2.57439 3.95577 2.44097C4.62991 2.3025 5.43169 2.24575 6.2943 2.25025C7.87043 2.25845 9.72774 2.47189 11.54 2.82854Z',
  d6: 'M17 14.3996L21 18.3996L17.4005 22L12.0001 16.5996L6.59999 21.9993L3 4L13 5.99998',
  d7: 'M18 7C19.6569 7 21 5.65685 21 4V2H15V4C15 5.65685 16.3431 7 18 7ZM18 7C19.6569 7 21 8.34315 21 10V12H15V10C15 8.34315 16.3431 7 18 7Z',
  d8: 'M21.75 3C21.75 4.2267 21.161 5.31583 20.2504 6C21.161 6.68417 21.75 7.7733 21.75 9V10.75H14.25V9C14.25 7.7733 14.839 6.68417 15.7496 6C14.839 5.31583 14.25 4.2267 14.25 3V1.25H21.75V3Z',
  d9: 'M13.2748 5.29011L3.1471 3.26458C2.9012 3.2154 2.647 3.29237 2.46968 3.46968C2.29236 3.647 2.2154 3.90121 2.26458 4.1471L5.86457 22.1464C5.91881 22.4176 6.11793 22.637 6.38265 22.7171C6.64738 22.7973 6.93473 22.7252 7.13031 22.5297L12.0001 17.6602L16.8702 22.5303C17.0109 22.671 17.2017 22.75 17.4006 22.75C17.5995 22.75 17.7903 22.671 17.931 22.5303L21.5304 18.9298C21.8232 18.6369 21.8232 18.1621 21.5303 17.8692L16.6606 12.9995L17.4101 12.25H12.75V9C12.75 7.88429 13.0987 6.84985 13.6913 6C13.5349 5.77561 13.3954 5.53834 13.2748 5.29011Z',
} as const;

export const IconCursorLoading01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-01-stroke-rounded IconCursorLoading01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorLoading01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-01-duotone-rounded IconCursorLoading01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorLoading01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-01-twotone-rounded IconCursorLoading01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorLoading01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-01-solid-rounded IconCursorLoading01SolidRounded"
    >
      <path 
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

export const IconCursorLoading01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-01-bulk-rounded IconCursorLoading01BulkRounded"
    >
      <path 
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

export const IconCursorLoading01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-01-stroke-sharp IconCursorLoading01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorLoading01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-01-solid-sharp IconCursorLoading01SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCursorLoading01: TheIconSelfPack = {
  name: 'CursorLoading01',
  StrokeRounded: IconCursorLoading01StrokeRounded,
  DuotoneRounded: IconCursorLoading01DuotoneRounded,
  TwotoneRounded: IconCursorLoading01TwotoneRounded,
  SolidRounded: IconCursorLoading01SolidRounded,
  BulkRounded: IconCursorLoading01BulkRounded,
  StrokeSharp: IconCursorLoading01StrokeSharp,
  SolidSharp: IconCursorLoading01SolidSharp,
};