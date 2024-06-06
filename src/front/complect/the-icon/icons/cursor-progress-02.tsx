import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 3.32038C6.75053 2.8233 3.67361 2.85605 2.76477 3.76477C0.59286 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L18 14.8519',
  d2: 'M17 7.00013C16.5211 5.21272 15.132 3.91229 13.4651 3.46388M17 7.00013C18.3088 5.69133 18.7403 3.83746 18.2946 2.16923M17 7.00013C18.7878 7.47917 20.609 6.92595 21.8309 5.70585M17 7.00013C17.4789 8.78744 18.8679 10.0878 20.5348 10.5362M17 7.00013C15.6912 8.30889 15.2597 10.1626 15.7053 11.8308M17 7.00013C15.2121 6.52107 13.391 7.07439 12.1692 8.29462M13.4651 3.46388C12.5599 4.36875 12 5.61899 12 7C12 7.44772 12.0588 7.8817 12.1692 8.29462M13.4651 3.46388C14.3698 2.5594 15.6196 2 17 2C17.4477 2 17.8817 2.05885 18.2946 2.16923M18.2946 2.16923C20.0157 2.6293 21.371 3.98469 21.8309 5.70585M21.8309 5.70585C21.9412 6.11863 22 6.55245 22 7C22 8.38107 21.4401 9.63137 20.5348 10.5362M20.5348 10.5362C19.6301 11.4407 18.3804 12 17 12C16.5523 12 16.1183 11.9411 15.7053 11.8308M15.7053 11.8308C13.9844 11.3707 12.6293 10.0155 12.1692 8.29462',
  d3: 'M13.0497 3.93449C8.89614 2.88907 3.95893 2.57077 2.76477 3.76477C0.59286 5.93695 3.42489 20.494 6.53497 20.1912C7.55678 20.088 8.3938 19.0639 9.202 18.0751C9.74337 17.4127 10.2718 16.7661 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L15.8784 13.222C15.4281 12.876 15.0857 12.3865 15.4229 11.8342C15.4378 11.8098 15.4532 11.7855 15.4692 11.7613C13.8611 11.2447 12.608 9.93602 12.1692 8.29462C12.0588 7.8817 12 7.44772 12 7C12 5.84479 12.3918 4.78109 13.0497 3.93449Z',
  d4: 'M15.5514 3.44956C16.183 3.86849 16.734 4.41273 17.1629 5.05856C17.405 4.46369 17.4915 3.82004 17.422 3.18955C17.2837 3.17444 17.1429 3.16667 17 3.16667C16.4872 3.16667 15.9982 3.26707 15.5514 3.44956ZM19.3504 3.97155C19.3033 4.7276 19.1076 5.47647 18.7629 6.17036C19.3993 6.08255 20.0002 5.83552 20.5116 5.45984C20.2533 4.872 19.8514 4.361 19.3504 3.97155ZM20.7983 7.52122C20.1199 7.85852 19.3734 8.06347 18.6 8.11192C18.9941 8.61895 19.5081 9.01569 20.0888 9.27073C20.4599 8.76711 20.7102 8.17018 20.7983 7.52122ZM18.4485 10.5505C17.8169 10.1316 17.2659 9.58741 16.8371 8.94166C16.5951 9.53646 16.5085 10.18 16.578 10.8104C16.7163 10.8256 16.8571 10.8333 17 10.8333C17.5128 10.8333 18.0017 10.7329 18.4485 10.5505ZM14.6496 10.0285C14.6967 9.2725 14.8925 8.52372 15.2371 7.82991C14.6007 7.91774 13.9999 8.16479 13.4885 8.5405C13.7468 9.12821 14.1487 9.63908 14.6496 10.0285ZM13.2017 6.47917C13.8801 6.14179 14.6266 5.9368 15.4 5.88833C15.0059 5.38122 14.4918 4.98443 13.9111 4.72937C13.54 5.23308 13.2897 5.83011 13.2017 6.47917ZM12.9348 2.93346C13.9743 1.89436 15.4128 1.25 17 1.25C17.5134 1.25 18.0124 1.31752 18.4882 1.44468C20.4687 1.97412 22.0262 3.53173 22.5555 5.51237C22.6825 5.98793 22.75 6.48682 22.75 7C22.75 8.58796 22.105 10.0271 21.0651 11.0667C20.0256 12.1057 18.5871 12.75 17 12.75C16.4866 12.75 15.9875 12.6825 15.5118 12.5553C13.5314 12.0259 11.9741 10.4685 11.4447 8.48817C11.3175 8.01245 11.25 7.51337 11.25 7C11.25 5.4121 11.8949 3.97301 12.9348 2.93346Z',
  d5: 'M10.6204 3.55391C10.8331 3.16087 10.9394 2.96435 10.8703 2.82505C10.8012 2.68576 10.5971 2.65406 10.189 2.59066C8.8242 2.37868 7.47972 2.25642 6.2943 2.25025C5.43169 2.24575 4.62991 2.3025 3.95577 2.44097C3.30626 2.57439 2.66365 2.80529 2.23441 3.23447C1.80522 3.66371 1.57439 4.30625 1.44097 4.95576C1.3025 5.62989 1.24575 6.43167 1.25025 7.29428C1.25924 9.0223 1.51493 11.0883 1.93559 13.0624C2.35535 15.0323 2.94924 16.9572 3.65577 18.3896C4.00723 19.1021 4.407 19.7351 4.85888 20.19C5.30547 20.6395 5.8994 21.0066 6.60768 20.9376L6.6103 20.9374C7.22975 20.8748 7.75659 20.5837 8.19377 20.239C8.62932 19.8956 9.0218 19.4621 9.37198 19.0469C9.5253 18.8652 9.66476 18.6944 9.7989 18.5301C9.99274 18.2926 10.1757 18.0685 10.3732 17.8449C10.6766 17.5011 10.9394 17.249 11.1786 17.0924C11.1957 17.0811 11.2042 17.0755 11.2517 17.0631C11.2992 17.0507 11.2617 17.0482 11.2767 17.0492C11.3422 17.0537 11.459 17.1162 11.6273 17.3353L14.9742 21.6918C15.2706 22.0775 15.6379 22.4942 16.1575 22.6673C16.7237 22.8559 17.2718 22.6994 17.7838 22.4372C19.276 21.6733 20.6745 20.2728 21.4371 18.7837C21.6993 18.2717 21.8559 17.7237 21.6673 17.1574C21.4943 16.6379 21.0776 16.2705 20.6919 15.9742L18.5075 14.296C18.4053 14.2175 18.3543 14.1783 18.2956 14.1629C18.237 14.1475 18.1695 14.1572 18.0343 14.1766C17.6964 14.2249 17.3511 14.25 17 14.25C16.3546 14.25 15.7254 14.1651 15.1244 14.0044C12.6257 13.3364 10.6635 11.3742 9.99557 8.87554C9.83493 8.2746 9.75 7.64533 9.75 7C9.75 5.75343 10.0659 4.57889 10.6204 3.55391Z',
  d6: 'M16 14.3996L20 18.3996L16.4005 22L11.0001 16.5996L5.59999 21.9993L2 4L9 5.39999',
  d7: 'M10.0741 4.84997C9.86346 5.52931 9.75 6.2514 9.75 7C9.75 10.9742 12.9477 14.2016 16.9106 14.2495L20.5303 17.8692C20.8232 18.1621 20.8232 18.6369 20.5304 18.9298L16.931 22.5303C16.7903 22.671 16.5995 22.75 16.4006 22.75C16.2017 22.75 16.0109 22.671 15.8702 22.5303L11.0001 17.6602L6.13031 22.5297C5.93473 22.7252 5.64738 22.7973 5.38265 22.7171C5.11793 22.637 4.91881 22.4176 4.86457 22.1464L1.26458 4.1471C1.2154 3.90121 1.29236 3.647 1.46968 3.46968C1.647 3.29237 1.9012 3.2154 2.1471 3.26458L10.0741 4.84997Z',
  d8: 'M14.9638 3.26843C15.8861 3.78123 16.6679 4.54629 17.197 5.49945C17.651 4.66775 17.8065 3.71612 17.6628 2.80126C17.4471 2.76755 17.2258 2.75 17 2.75C16.262 2.75 15.5684 2.93771 14.9638 3.26843ZM19.2136 3.37117C19.2306 4.42624 18.959 5.48572 18.3981 6.42038C19.3456 6.39766 20.2476 6.05641 20.9681 5.47426C20.6299 4.59527 20.0073 3.85656 19.2136 3.37117ZM21.2488 7.10311C20.3437 7.64509 19.2907 7.93942 18.2011 7.92106C18.6943 8.72983 19.4404 9.34023 20.3043 9.67319C20.8761 8.96751 21.2256 8.07619 21.2488 7.10311ZM19.0361 10.7317C18.1138 10.2189 17.332 9.45387 16.803 8.50079C16.3491 9.33242 16.1935 10.284 16.3372 11.1987C16.5528 11.2325 16.7742 11.25 17 11.25C17.7379 11.25 18.4315 11.0623 19.0361 10.7317ZM14.7864 10.6288C14.7694 9.57385 15.0411 8.51447 15.6019 7.57988C14.6545 7.60262 13.7524 7.94392 13.032 8.52613C13.3703 9.40494 13.9928 10.1435 14.7864 10.6288ZM12.7512 6.89731C13.6562 6.35524 14.7093 6.06084 15.7989 6.07921C15.3057 5.27034 14.5596 4.65988 13.6957 4.32692C13.1238 5.03269 12.7742 5.92412 12.7512 6.89731ZM12.9348 2.93346C13.9745 1.89413 15.4127 1.25 17 1.25C17.5137 1.25 18.0128 1.31755 18.4883 1.44467C20.4686 1.97403 22.0263 3.53187 22.5555 5.51223C22.6825 5.9876 22.75 6.48649 22.75 7C22.75 8.58802 22.1053 10.0269 21.0651 11.0667C20.0254 12.1059 18.5872 12.75 17 12.75C16.4863 12.75 15.9872 12.6824 15.5116 12.5553C13.5316 12.026 11.974 10.4684 11.4447 8.48831C11.3176 8.01277 11.25 7.5137 11.25 7C11.25 5.41204 11.8947 3.97324 12.9348 2.93346Z',
};

export const IconCursorProgress02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-02-stroke-rounded IconCursorProgress02StrokeRounded"
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

export const IconCursorProgress02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-02-duotone-rounded IconCursorProgress02DuotoneRounded"
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

export const IconCursorProgress02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-02-twotone-rounded IconCursorProgress02TwotoneRounded"
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

export const IconCursorProgress02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-02-solid-rounded IconCursorProgress02SolidRounded"
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

export const IconCursorProgress02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-02-bulk-rounded IconCursorProgress02BulkRounded"
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

export const IconCursorProgress02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-02-stroke-sharp IconCursorProgress02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorProgress02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-02-solid-sharp IconCursorProgress02SolidSharp"
    >
      <path 
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

export const iconPackOfCursorProgress02: TheIconSelfPack = {
  name: 'CursorProgress02',
  StrokeRounded: IconCursorProgress02StrokeRounded,
  DuotoneRounded: IconCursorProgress02DuotoneRounded,
  TwotoneRounded: IconCursorProgress02TwotoneRounded,
  SolidRounded: IconCursorProgress02SolidRounded,
  BulkRounded: IconCursorProgress02BulkRounded,
  StrokeSharp: IconCursorProgress02StrokeSharp,
  SolidSharp: IconCursorProgress02SolidSharp,
};