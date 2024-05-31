import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 15L10.7506 19.068C9.25288 20.5543 8.504 21.2975 7.56806 21.6741C6.63212 22.0508 5.6032 22.0231 3.54536 21.9676L3.26538 21.9601C2.63891 21.9432 2.32567 21.9348 2.14359 21.7219C1.9615 21.509 1.98636 21.1802 2.03608 20.5227L2.06308 20.1657C2.20301 18.3151 2.27297 17.3898 2.62371 16.5581C2.97444 15.7263 3.57944 15.051 4.78943 13.7003L9 9',
  d2: 'M11.5 6.67393L14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L17.5 12.5',
  d3: 'M13 4L20 11',
  d4: 'M2 2L22 22',
  d5: 'M3.26538 21.9601L3.54536 21.9676H3.54538C5.60321 22.0231 6.63212 22.0508 7.56806 21.6741C8.504 21.2975 9.25288 20.5543 10.7506 19.068L15 15L9 9L4.78943 13.7003C3.57944 15.051 2.97444 15.7263 2.62371 16.5581C2.27297 17.3898 2.20301 18.3151 2.06308 20.1657L2.03608 20.5227C1.98636 21.1802 1.9615 21.509 2.14359 21.7219C2.32567 21.9348 2.6389 21.9432 3.26537 21.9601H3.26538Z',
  d6: 'M20.245 3.79278L20.245 3.79276L20.245 3.79274C19.4769 3.00811 19.0929 2.6158 18.6904 2.39232C17.7191 1.85309 16.5427 1.87076 15.5874 2.43893C15.1915 2.6744 14.8189 3.07808 14.0737 3.88544L14.0737 3.88545L13.5 4.5L19.5 10.6894L20.1543 10.097C20.9446 9.33578 21.3398 8.95516 21.5703 8.5507C22.1265 7.57479 22.1438 6.37312 21.6159 5.38093C21.3972 4.96973 21.0131 4.57741 20.245 3.79278Z',
  d7: 'M11.5 6.67393L14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L17.5 12.5M13.4991 4.50798L19.5705 10.6255',
  d8: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d9: 'M19.0527 1.7366C17.8479 1.06772 16.3869 1.0898 15.2023 1.79431C14.8262 2.01799 14.479 2.35124 14.0419 2.81506C13.8559 3.01231 13.763 3.11094 13.7648 3.2326C13.7666 3.35426 13.8634 3.45109 14.0571 3.64476L20.4484 10.036C20.6461 10.2338 20.745 10.3327 20.8689 10.3329C20.9928 10.3332 21.0908 10.236 21.2869 10.0416C21.7077 9.62443 22.0127 9.28622 22.2202 8.92206C22.9038 7.72256 22.9249 6.24777 22.2764 5.02866C22.006 4.52051 21.5507 4.05569 20.8704 3.36116L20.6863 3.17307C20.0083 2.48005 19.5525 2.01406 19.0527 1.7366Z',
  d10: 'M12.7336 5.14972L18.9917 11.4078C19.1952 11.6113 19.2969 11.713 19.2957 11.8389C19.2945 11.9648 19.1909 12.0646 18.9837 12.2642L17.5736 13.6223C17.4559 13.7357 17.269 13.734 17.1534 13.6184L10.5525 7.01747C10.4386 6.90361 10.4349 6.72018 10.5441 6.60186L11.8684 5.16704C12.0674 4.95146 12.1669 4.84367 12.2947 4.84112C12.4225 4.83856 12.5262 4.94228 12.7336 5.14972Z',
  d11: 'M4.14251 13.5377C3.02245 14.7509 2.33596 15.4944 1.93411 16.4194C1.53303 17.3425 1.45405 18.3582 1.32491 20.019L1.32469 20.0219C1.32445 20.0248 1.2392 21.1155 1.25236 21.3517C1.26726 21.6191 1.33095 21.9442 1.57916 22.2259C1.82961 22.5101 2.14618 22.6123 2.41271 22.6568C2.64454 22.6955 3.68873 22.7227 3.69083 22.7227C5.58798 22.7727 6.76074 22.8036 7.83921 22.3823C8.91615 21.9617 9.76721 21.1417 11.1481 19.8112L15.3405 15.7732C15.4614 15.6568 15.4632 15.4637 15.3445 15.345L8.8725 8.87303C8.75201 8.75255 8.55548 8.75648 8.43992 8.88169L4.14251 13.5377Z',
  d12: 'M4.14251 13.5377C3.02245 14.7509 2.33596 15.4944 1.93411 16.4193C1.53303 17.3425 1.45405 18.3582 1.32491 20.019L1.32469 20.0219C1.32445 20.0248 1.2392 21.1155 1.25236 21.3517C1.26726 21.6191 1.33095 21.9442 1.57916 22.2259C1.82961 22.5101 2.14618 22.6123 2.41271 22.6568C2.64454 22.6954 3.68873 22.7226 3.69083 22.7227C5.58798 22.7727 6.76074 22.8036 7.83921 22.3823C8.91615 21.9617 9.76721 21.1417 11.1481 19.8112L15.3405 15.7732C15.4614 15.6567 15.4632 15.4637 15.3445 15.345L8.8725 8.87302C8.75201 8.75254 8.55548 8.75647 8.43992 8.88168L4.14251 13.5377Z',
  d13: 'M19.0529 1.7366C17.8481 1.06772 16.3872 1.0898 15.2026 1.79431C14.8265 2.01799 14.4793 2.35124 14.0421 2.81506C13.8562 3.01231 13.7632 3.11094 13.765 3.2326C13.7668 3.35426 13.8637 3.45109 14.0573 3.64476L20.4486 10.036C20.6464 10.2338 20.7452 10.3327 20.8691 10.3329C20.993 10.3332 21.0911 10.236 21.2872 10.0416C21.708 9.62443 22.0129 9.28622 22.2205 8.92206C22.9041 7.72256 22.9252 6.24777 22.2766 5.02866C22.0063 4.52051 21.551 4.05569 20.8706 3.36116L20.6865 3.17307C20.0086 2.48005 19.5527 2.01406 19.0529 1.7366Z',
  d14: 'M12.7339 5.14972L18.9919 11.4078C19.1954 11.6113 19.2971 11.713 19.296 11.8389C19.2948 11.9648 19.1911 12.0646 18.9839 12.2642L17.5739 13.6223C17.4561 13.7357 17.2692 13.734 17.1536 13.6184L10.5527 7.01747C10.4389 6.90361 10.4352 6.72018 10.5444 6.60186L11.8687 5.16704C12.0677 4.95146 12.1672 4.84367 12.2949 4.84112C12.4227 4.83856 12.5264 4.94228 12.7339 5.14972Z',
  d15: 'M12 6.00049L18 12.0005',
  d16: 'M2 2.00049L22 22.0005',
  d17: 'M15.0166 15.0075L8.03622 22.0003H2.05957L2.0597 16.0084L9.02282 9.00655M16.6217 13.3831L21.997 8.01476C22.0009 8.01086 22.0009 8.00454 21.997 8.00063L16.0082 2.00456C16.002 1.99844 15.9921 1.99849 15.9859 2.00467L10.6078 7.39951',
  d18: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d19: 'M21.9991 8L15.9991 2L10.7672 7.23217L16.7671 13.232L21.9991 8Z',
  d20: 'M2 16V22H7.99908L14.9993 14.9998L8.99954 9L2 16Z',
} as const;

export const IconEditOffStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-off-stroke-rounded IconEditOffStrokeRounded"
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

export const IconEditOffDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-off-duotone-rounded IconEditOffDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEditOffTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-off-twotone-rounded IconEditOffTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEditOffSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-off-solid-rounded IconEditOffSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconEditOffBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-off-bulk-rounded IconEditOffBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconEditOffStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-off-stroke-sharp IconEditOffStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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

export const IconEditOffSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-off-solid-sharp IconEditOffSolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEditOff: TheIconSelfPack = {
  name: 'EditOff',
  StrokeRounded: IconEditOffStrokeRounded,
  DuotoneRounded: IconEditOffDuotoneRounded,
  TwotoneRounded: IconEditOffTwotoneRounded,
  SolidRounded: IconEditOffSolidRounded,
  BulkRounded: IconEditOffBulkRounded,
  StrokeSharp: IconEditOffStrokeSharp,
  SolidSharp: IconEditOffSolidSharp,
};