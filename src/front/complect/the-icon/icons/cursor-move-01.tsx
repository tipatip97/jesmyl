import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 3.32038C6.75053 2.8233 3.67361 2.85605 2.76477 3.76477C0.592862 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L18 14.8519',
  d2: 'M16.9998 2L16.9998 5M16.9998 2C16.7994 2 15.7378 2.98517 15.2998 3.39172M16.9998 2C17.2002 2 18.2798 3 18.6998 3.39172',
  d3: 'M16.9998 12L16.9998 9M16.9998 12C17.2002 12 18.2618 11.0148 18.6998 10.6083M16.9998 12C16.7993 12 15.7198 11 15.2998 10.6083',
  d4: 'M12 6.99977L15 6.99979M12 6.99977C12 7.2002 12.9852 8.26179 13.3917 8.69979M12 6.99977C12 6.79935 13 5.71979 13.3917 5.2998',
  d5: 'M22 6.99982L19 6.9998M22 6.99982C22 6.79939 21.0148 5.7378 20.6083 5.2998M22 6.99982C22 7.20024 21 8.2798 20.6083 8.69979',
  d6: 'M6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L15.8784 13.222C15.4281 12.876 15.0857 12.3865 15.4229 11.8342C16.2787 10.4322 19.019 9.24121 19.1912 7.53495C19.4941 4.42489 4.93696 1.59287 2.76477 3.76477C0.592861 5.93695 3.42489 20.494 6.53497 20.1912Z',
  d7: 'M10 3.32038C6.75053 2.8233 3.67361 2.85605 2.76477 3.76477C0.592861 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L18 14.8519',
  d8: 'M16.9998 2V5M16.9998 2C16.7994 2 15.7378 2.98517 15.2998 3.39172M16.9998 2C17.2002 2 18.2798 3 18.6998 3.39172',
  d9: 'M16.9998 12V9M16.9998 12C17.2002 12 18.2618 11.0148 18.6998 10.6083M16.9998 12C16.7993 12 15.7198 11 15.2998 10.6083',
  d10: 'M22 6.99983L19 6.9998M22 6.99983C22 6.79939 21.0148 5.7378 20.6083 5.2998M22 6.99983C22 7.20025 21 8.2798 20.6083 8.69979',
  d11: 'M19.1919 2.85877C19.4876 3.14887 19.4921 3.62373 19.202 3.91939C19.0678 4.05617 18.894 4.13063 18.7168 4.14244H17.75V5C17.75 5.41421 17.4142 5.75 17 5.75C16.5858 5.75 16.25 5.41421 16.25 5V4.14244H15.2832C15.106 4.13063 14.9322 4.05617 14.798 3.91939C14.5079 3.62373 14.5124 3.14887 14.8081 2.85877L15.6617 2.02115C15.8363 1.84971 16.0164 1.67295 16.187 1.54519C16.3842 1.39762 16.6515 1.25 17 1.25C17.3485 1.25 17.6158 1.39762 17.813 1.54519C17.9836 1.67295 18.1637 1.84971 18.3383 2.02115L18.3383 2.02116L19.1919 2.85877Z',
  d12: 'M15 6.25C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75H14.1441L14.1441 8.66736C14.1439 8.86144 14.0689 9.05534 13.9194 9.20201C13.6237 9.49211 13.1489 9.4876 12.8588 9.19194L12.0212 8.33828C11.8497 8.16366 11.6729 7.98361 11.5452 7.81296C11.3976 7.61584 11.25 7.3485 11.25 7C11.25 6.6515 11.3976 6.38416 11.5452 6.18704C11.6729 6.01639 11.8497 5.83635 12.0211 5.66173L12.0212 5.66172L12.8588 4.80806C13.1489 4.5124 13.6237 4.50789 13.9194 4.79799C14.069 4.94477 14.144 5.13883 14.1441 5.33305V6.25H15Z',
  d13: 'M20.0806 4.798C20.3763 4.50789 20.8511 4.5124 21.1412 4.80806L21.9788 5.6617C22.1503 5.83633 22.327 6.01638 22.4548 6.18704C22.6024 6.38416 22.75 6.6515 22.75 7C22.75 7.3485 22.6024 7.61584 22.4548 7.81296C22.3271 7.98361 22.1503 8.16366 21.9789 8.33828L21.1412 9.19194C20.8511 9.4876 20.3763 9.49211 20.0806 9.20201C19.9311 9.05534 19.8561 8.86144 19.8559 8.66736V7.75H19C18.5858 7.75 18.25 7.41421 18.25 7C18.25 6.58579 18.5858 6.25 19 6.25H19.8559V5.33305C19.856 5.13883 19.931 4.94477 20.0806 4.798Z',
  d14: 'M17 8.25C17.4142 8.25 17.75 8.58579 17.75 9V9.85591H18.6611C18.8573 9.85447 19.0538 9.92952 19.202 10.0806C19.4921 10.3763 19.4876 10.8511 19.1919 11.1412L18.3383 11.9788C18.1637 12.1503 17.9836 12.3271 17.813 12.4548C17.6158 12.6024 17.3485 12.75 17 12.75C16.6515 12.75 16.3842 12.6024 16.187 12.4548C16.0164 12.3271 15.8363 12.1503 15.6617 11.9788L14.8081 11.1412C14.5124 10.8511 14.5079 10.3763 14.798 10.0806C14.9435 9.93236 15.1354 9.85731 15.3279 9.85591H16.25V9C16.25 8.58579 16.5858 8.25 17 8.25Z',
  d15: 'M12.0625 2.93559C12.2715 2.98013 12.2937 3.35861 12.1178 3.48002C12.0014 3.56038 11.8909 3.65293 11.7881 3.75767L10.3444 5.28825C10.0968 5.61905 9.75 6.19946 9.75 7.00016C9.75 7.80085 10.0967 8.38126 10.3444 8.71207L11.7881 10.2426C12.0392 10.4985 12.3364 10.6817 12.6536 10.792C12.8798 10.8706 12.9929 10.91 13.0416 10.9586C13.0902 11.0072 13.1295 11.1204 13.2082 11.3466C13.3184 11.6637 13.5016 11.961 13.7575 12.2121L15.2881 13.6558C15.6189 13.9034 16.1993 14.2502 17 14.2502C17.294 14.2502 17.5583 14.2034 17.7914 14.132C17.9787 14.0746 18.0724 14.0459 18.144 14.0589C18.2157 14.0718 18.2817 14.1225 18.4136 14.2239L20.6919 15.9742C21.0776 16.2705 21.4943 16.6379 21.6673 17.1574C21.8559 17.7237 21.6993 18.2717 21.4371 18.7837C20.6745 20.2728 19.276 21.6733 17.7838 22.4372C17.2718 22.6994 16.7237 22.8559 16.1575 22.6673C15.6379 22.4942 15.2706 22.0775 14.9742 21.6918L11.6273 17.3353C11.459 17.1162 11.3422 17.0537 11.2767 17.0492C11.2617 17.0482 11.2992 17.0507 11.2517 17.0631C11.2042 17.0755 11.1957 17.0811 11.1786 17.0924C10.9394 17.249 10.6766 17.5011 10.3732 17.8449C10.1757 18.0685 9.993 18.2923 9.79915 18.5297C9.66501 18.694 9.5253 18.8652 9.37198 19.0469C9.0218 19.4621 8.62932 19.8956 8.19377 20.239C7.75659 20.5837 7.22975 20.8748 6.6103 20.9374L6.60768 20.9376C5.8994 21.0066 5.30547 20.6395 4.85888 20.19C4.407 19.7351 4.00723 19.1021 3.65577 18.3896C2.94924 16.9572 2.35535 15.0323 1.93559 13.0624C1.51493 11.0883 1.25924 9.0223 1.25025 7.29428C1.24575 6.43167 1.3025 5.62989 1.44097 4.95576C1.57439 4.30625 1.80522 3.66371 2.23441 3.23447C2.66365 2.80529 3.30626 2.57439 3.95577 2.44097C4.62991 2.3025 5.43169 2.24575 6.2943 2.25025C8.02232 2.25924 10.0883 2.51493 12.0625 2.93559Z',
  d16: 'M16.6062 14.9868L20.0022 18.3829L16.4065 21.9796L11.0119 16.5847L5.61761 21.9789L2.02148 3.99805L10.0129 5.5964',
  d17: 'M15.0095 6.9976H12.5856M14.0051 4.98988L12.002 6.9976L14.0051 8.99604M19.0129 6.9976H21.5839M20.0173 4.98988L22.0205 6.9976L20.0173 8.99604M17.01 8.99574V11.5381M15.0024 10.0002L17.01 12.0034L19.0084 10.0002M17.001 4.99011V2.46285M19.0086 3.98569L17.001 1.98242L15.0027 3.98569',
  d18: 'M16.6896 1.25L19.2199 3.78033L18.1592 4.84099L17.4396 4.12132V5.31066H15.9396V4.12132L15.2199 4.84099L14.1592 3.78033L16.6896 1.25ZM13.5002 8.06066L14.2199 8.78033L13.1592 9.84099L10.6289 7.31066L13.1592 4.78033L14.2199 5.84099L13.5002 6.56066H14.6896V8.06066H13.5002ZM19.8789 6.56066L19.1592 5.84099L20.2199 4.78033L22.7502 7.31066L20.2199 9.84099L19.1592 8.78033L19.8789 8.06066H18.6896V6.56066H19.8789ZM17.4396 9.31066V10.5L18.1592 9.78033L19.2199 10.841L16.6896 13.3713L14.1592 10.841L15.2199 9.78033L15.9396 10.5V9.31066H17.4396Z',
  d19: 'M10.8196 4.99858L2.1471 3.26409C1.9012 3.21491 1.647 3.29188 1.46968 3.4692C1.29236 3.64651 1.2154 3.90072 1.26458 4.14662L4.86457 22.1459C4.91881 22.4171 5.11793 22.6365 5.38265 22.7166C5.64738 22.7968 5.93473 22.7247 6.13031 22.5292L11.0001 17.6597L15.8702 22.5299C16.0109 22.6705 16.2017 22.7495 16.4006 22.7495C16.5995 22.7495 16.7903 22.6705 16.931 22.5298L20.5304 18.9293C20.8232 18.6364 20.8232 18.1616 20.5303 17.8688L17.4219 14.7603L16.6898 15.4924L8.50781 7.3104L10.8196 4.99858Z',
};

export const IconCursorMove01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-move-01-stroke-rounded IconCursorMove01StrokeRounded"
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

export const IconCursorMove01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-move-01-duotone-rounded IconCursorMove01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMove01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-move-01-twotone-rounded IconCursorMove01TwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMove01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-move-01-solid-rounded IconCursorMove01SolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMove01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-move-01-bulk-rounded IconCursorMove01BulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMove01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-move-01-stroke-sharp IconCursorMove01StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorMove01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-move-01-solid-sharp IconCursorMove01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCursorMove01: TheIconSelfPack = {
  name: 'CursorMove01',
  StrokeRounded: IconCursorMove01StrokeRounded,
  DuotoneRounded: IconCursorMove01DuotoneRounded,
  TwotoneRounded: IconCursorMove01TwotoneRounded,
  SolidRounded: IconCursorMove01SolidRounded,
  BulkRounded: IconCursorMove01BulkRounded,
  StrokeSharp: IconCursorMove01StrokeSharp,
  SolidSharp: IconCursorMove01SolidSharp,
};