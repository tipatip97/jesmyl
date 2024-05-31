import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 5H4C10.5997 5 13.8995 5 15.9497 7.12067C18 9.24133 18 12.6545 18 19.4808V21',
  d2: 'M6 2C5.39316 2.58984 3 4.15973 3 5C3 5.84027 5.39316 7.41016 6 8',
  d3: 'M15 19C15.5898 19.6068 17.1597 22 18 22C18.8403 22 20.4102 19.6068 21 19',
  d4: 'M3 5H4C10.5997 5 13.8995 5 15.9497 7.12067C18 9.24133 18 12.6545 18 19.4808V21M3 5C3 4.15973 5.39316 2.58984 6 2M3 5C3 5.84027 5.39316 7.41016 6 8M15 19C15.5898 19.6068 17.1597 22 18 22C18.8403 22 20.4102 19.6068 21 19',
  d5: 'M5.01704 4L4 4C3.44771 4 3 4.44772 3 5C3 5.55229 3.44771 6 4 6H4.93333C8.04441 6 10.2664 6.0026 11.9548 6.25417C13.603 6.49974 14.5982 6.96412 15.344 7.79059C16.103 8.63176 16.5402 9.77831 16.7681 11.6566C16.9983 13.5539 17 16.0421 17 19.4808V21C17 21.5523 17.4477 22 18 22C18.5523 22 19 21.5523 19 21L19 19.4107C19 16.0569 19 13.4475 18.7535 11.4157C18.503 9.3506 17.9834 7.73023 16.8289 6.45074C15.661 5.15654 14.1596 4.56059 12.2495 4.276C10.3969 3.99996 8.02587 3.99998 5.01704 4Z',
  d6: 'M6.71708 1.30301C6.33214 0.906978 5.69904 0.897982 5.30301 1.28292C5.19819 1.3848 4.91297 1.61236 4.58548 1.86959L4.58546 1.8696C4.2951 2.09752 3.95281 2.3662 3.62596 2.64315C3.276 2.93969 2.90896 3.27451 2.62211 3.61131C2.47834 3.78012 2.33436 3.97285 2.22233 4.1822C2.11454 4.38363 2 4.66729 2 5C2 5.33271 2.11454 5.61638 2.22233 5.8178C2.33436 6.02715 2.47834 6.21989 2.62211 6.3887C2.90896 6.72549 3.276 7.06032 3.62596 7.35685C3.95282 7.63381 4.29513 7.90251 4.58549 8.13043C4.91298 8.38766 5.19819 8.6152 5.30301 8.71708C5.69904 9.10202 6.33214 9.09302 6.71708 8.69699C6.90599 8.50264 7.00002 8.25119 7 8V2C7.00002 1.74881 6.90599 1.49736 6.71708 1.30301Z',
  d7: 'M14.303 18.2829C13.907 18.6679 13.898 19.301 14.2829 19.697C14.3848 19.8018 14.6124 20.087 14.8696 20.4145C15.0975 20.7049 15.3662 21.0472 15.6431 21.374C15.9397 21.724 16.2745 22.091 16.6113 22.3779C16.7801 22.5217 16.9728 22.6656 17.1822 22.7777C17.3836 22.8855 17.6673 23 18 23C18.3327 23 18.6164 22.8855 18.8178 22.7777C19.0271 22.6656 19.2199 22.5217 19.3887 22.3779C19.7255 22.091 20.0603 21.724 20.3568 21.374C20.6338 21.0472 20.9025 20.7049 21.1304 20.4145L21.1304 20.4145C21.3876 20.087 21.6152 19.8018 21.7171 19.697C22.102 19.301 22.093 18.6679 21.697 18.2829C21.4968 18.0883 21.236 17.9944 20.9774 18.0003H14.9772C14.7336 18.0058 14.4915 18.0997 14.303 18.2829Z',
  d8: 'M13.0064 16.9823L17.0284 21L21 17.0204M7.00511 3L3 6.98672L6.99127 10.9776M3.40974 6.98743L16.909 7.01077C16.9643 7.01077 17.0284 7.05574 17.0284 7.11122L17.0284 20.5272',
  d9: 'M5.82834 5.70724L8.12132 3.41419L6.70709 2L2 6.70723L6.7071 11.4143L8.12131 10.0001L5.82844 7.70724L16.2928 7.70734L16.2928 18.1716L13.9999 15.8788L12.5857 17.293L17.2928 22L21.9999 17.293L20.5857 15.8788L18.2928 18.1716L18.2928 6.70735C18.2928 6.15507 17.8451 5.70735 17.2928 5.70735L5.82834 5.70724Z',
} as const;

export const IconArrowMoveLeftDownStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-left-down-stroke-rounded IconArrowMoveLeftDownStrokeRounded"
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

export const IconArrowMoveLeftDownDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-left-down-duotone-rounded IconArrowMoveLeftDownDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowMoveLeftDownTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-left-down-twotone-rounded IconArrowMoveLeftDownTwotoneRounded"
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

export const IconArrowMoveLeftDownSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-left-down-solid-rounded IconArrowMoveLeftDownSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconArrowMoveLeftDownBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-left-down-bulk-rounded IconArrowMoveLeftDownBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconArrowMoveLeftDownStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-left-down-stroke-sharp IconArrowMoveLeftDownStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowMoveLeftDownSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-move-left-down-solid-sharp IconArrowMoveLeftDownSolidSharp"
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

export const iconPackOfArrowMoveLeftDown: TheIconSelfPack = {
  name: 'ArrowMoveLeftDown',
  StrokeRounded: IconArrowMoveLeftDownStrokeRounded,
  DuotoneRounded: IconArrowMoveLeftDownDuotoneRounded,
  TwotoneRounded: IconArrowMoveLeftDownTwotoneRounded,
  SolidRounded: IconArrowMoveLeftDownSolidRounded,
  BulkRounded: IconArrowMoveLeftDownBulkRounded,
  StrokeSharp: IconArrowMoveLeftDownStrokeSharp,
  SolidSharp: IconArrowMoveLeftDownSolidSharp,
};