import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.75 4H8.25C7.54777 4 7.19665 4 6.94443 4.16853C6.83524 4.24149 6.74149 4.33524 6.66853 4.44443C6.5 4.69665 6.5 5.04777 6.5 5.75C6.5 6.45223 6.5 6.80335 6.66853 7.05557C6.74149 7.16476 6.83524 7.25851 6.94443 7.33147C7.19665 7.5 7.54777 7.5 8.25 7.5H15.75C16.4522 7.5 16.8033 7.5 17.0556 7.33147C17.1648 7.25851 17.2585 7.16476 17.3315 7.05557C17.5 6.80335 17.5 6.45223 17.5 5.75C17.5 5.04777 17.5 4.69665 17.3315 4.44443C17.2585 4.33524 17.1648 4.24149 17.0556 4.16853C16.8033 4 16.4522 4 15.75 4Z',
  d2: 'M15 22L14.3288 17.9728C14.2153 17.2915 14.1585 16.9509 13.9933 16.6924C13.8309 16.4382 13.5956 16.2388 13.3181 16.1204C13.036 16 12.6907 16 12 16C11.3093 16 10.964 16 10.6819 16.1204C10.4044 16.2388 10.1691 16.4382 10.0067 16.6924C9.84152 16.9509 9.78475 17.2915 9.6712 17.9728L9 22',
  d3: 'M16 7.5H8L6 22H18L16 7.5Z',
  d4: 'M17.7935 22C19.9211 22 20.9849 22 21.5825 21.3174C22.18 20.6349 22.0394 19.5804 21.7582 17.4713L21.4916 15.4713C21.0656 12.2764 20.0925 12 17 12',
  d5: 'M6.2067 22C4.079 22 3.01515 22 2.41757 21.3174C1.81998 20.6349 1.96059 19.5804 2.24179 17.4713L2.50846 15.4713C2.93326 12.2853 3.89738 12 7 12',
  d6: 'M8 4V2',
  d7: 'M12 4V2',
  d8: 'M16 4V2',
  d9: 'M8 7.5H16L18 22H15L14.3288 17.9728C14.2153 17.2915 14.1585 16.9509 13.9933 16.6924C13.8309 16.4382 13.5956 16.2388 13.3181 16.1204C13.036 16 12.6907 16 12 16C11.3093 16 10.964 16 10.6819 16.1204C10.4044 16.2388 10.1691 16.4382 10.0067 16.6924C9.84152 16.9509 9.78475 17.2915 9.6712 17.9728L9 22H6L8 7.5Z',
  d10: 'M15 22L14.3288 17.9728L14.3288 17.9728C14.2153 17.2915 14.1585 16.9509 13.9933 16.6924C13.8309 16.4382 13.5956 16.2388 13.3181 16.1204C13.036 16 12.6907 16 12 16C11.3093 16 10.964 16 10.6819 16.1204C10.4044 16.2388 10.1691 16.4382 10.0067 16.6924C9.84152 16.9509 9.78475 17.2915 9.6712 17.9728L9 22H15Z',
  d11: 'M8.27462 6.75921C8.80218 6.83239 9.17087 7.32178 9.0981 7.8523L7.32071 20.8106H16.6793L14.9019 7.8523C14.8291 7.32178 15.1978 6.83239 15.7254 6.75921C16.2529 6.68604 16.7396 7.05679 16.8124 7.58731L17.3149 11.2511C17.9622 11.2558 18.5434 11.2782 19.0523 11.3506C19.6463 11.4352 20.1972 11.5948 20.6699 11.9191C21.6424 12.586 22.0199 13.7591 22.235 15.3722L22.509 17.4277C22.6434 18.4349 22.7546 19.2693 22.7498 19.9347C22.7448 20.6337 22.6137 21.2781 22.1468 21.8115C21.6798 22.3449 21.0584 22.56 20.3662 22.6574C19.7073 22.7501 18.8657 22.75 17.8496 22.75L17.7935 22.75L17.7898 22.75L17.7857 22.75H6.21429L6.21028 22.75L6.2067 22.75L6.1507 22.75C5.13461 22.75 4.29286 22.7501 3.63388 22.6574C2.94172 22.56 2.32029 22.3449 1.85328 21.8115C1.38626 21.2781 1.25517 20.6337 1.25015 19.9347C1.24537 19.2692 1.35664 18.4349 1.49096 17.4277L1.76503 15.3722C1.97941 13.7644 2.35404 12.5916 3.32469 11.9232C3.79684 11.5981 4.34755 11.4373 4.94248 11.352C5.4524 11.2788 6.03521 11.256 6.68509 11.2511L7.18762 7.58731C7.26039 7.05679 7.74705 6.68604 8.27462 6.75921Z',
  d12: 'M9 2.25C9 1.69772 8.55228 1.25 8 1.25C7.44772 1.25 7 1.69772 7 2.25V3.25889C7 3.30436 6.96923 3.3438 6.92579 3.35723C6.79182 3.39864 6.65763 3.45815 6.52776 3.54493C6.33667 3.67261 6.17261 3.83667 6.04493 4.02776C5.8646 4.29764 5.80202 4.58617 5.77492 4.85256C5.74995 5.09806 5.74997 5.39429 5.75 5.71698V5.78303C5.74997 6.10572 5.74995 6.40194 5.77492 6.64745C5.80202 6.91383 5.8646 7.20237 6.04493 7.47225C6.17261 7.66333 6.33667 7.8274 6.52776 7.95508C6.79764 8.13541 7.08617 8.19799 7.35256 8.22509C7.59807 8.25006 7.89429 8.25003 8.21699 8.25001H15.783C16.1057 8.25003 16.4019 8.25006 16.6474 8.22509C16.9138 8.19799 17.2024 8.13541 17.4722 7.95508C17.6633 7.8274 17.8274 7.66333 17.9551 7.47225C18.1354 7.20237 18.198 6.91383 18.2251 6.64745C18.2501 6.40196 18.25 6.10575 18.25 5.78308V5.71698C18.25 5.39431 18.2501 5.09805 18.2251 4.85256C18.198 4.58617 18.1354 4.29764 17.9551 4.02776C17.8274 3.83667 17.6633 3.67261 17.4722 3.54493C17.3424 3.45815 17.2082 3.39864 17.0742 3.35723C17.0308 3.3438 17 3.30436 17 3.25889V2.25C17 1.69772 16.5523 1.25 16 1.25C15.4477 1.25 15 1.69772 15 2.25V3.15C15 3.20523 14.9552 3.25 14.9 3.25H13.1C13.0448 3.25 13 3.20523 13 3.15V2.25C13 1.69772 12.5523 1.25 12 1.25C11.4477 1.25 11 1.69772 11 2.25V3.15C11 3.20523 10.9552 3.25 10.9 3.25H9.1C9.04477 3.25 9 3.20523 9 3.15V2.25Z',
  d13: 'M14.9564 8.2499H15.783C16.1057 8.24993 16.4019 8.24996 16.6474 8.22498C16.7282 8.21676 16.8111 8.20528 16.8948 8.18823L17.3149 11.251C17.9622 11.2557 18.5434 11.2781 19.0523 11.3505C19.6463 11.4351 20.1972 11.5947 20.6699 11.919C21.6424 12.5859 22.0199 13.759 22.235 15.3721L22.509 17.4276C22.6434 18.4348 22.7546 19.2691 22.7498 19.9346C22.7448 20.6336 22.6137 21.278 22.1468 21.8114C21.6798 22.3448 21.0584 22.5599 20.3662 22.6573C19.7073 22.7499 18.8657 22.7499 17.8496 22.7499L17.7935 22.7499L17.7898 22.7499L17.7857 22.7499H6.21429L6.21028 22.7499L6.2067 22.7499L6.1507 22.7499C5.13461 22.7499 4.29286 22.7499 3.63388 22.6573C2.94172 22.5599 2.32029 22.3448 1.85328 21.8114C1.38626 21.278 1.25517 20.6336 1.25015 19.9346C1.24537 19.2691 1.35664 18.4348 1.49096 17.4276L1.76503 15.3721C1.97941 13.7643 2.35404 12.5915 3.32469 11.9231C3.79684 11.598 4.34755 11.4372 4.94248 11.3519C5.4524 11.2787 6.03521 11.2559 6.68509 11.251L7.10518 8.18823C7.18892 8.20528 7.27176 8.21676 7.35256 8.22498C7.59807 8.24996 7.89429 8.24993 8.21699 8.2499H9.04355L7.32071 20.8105H16.6793L14.9564 8.2499Z',
  d14: 'M17.493 4H6.49792V7.5H17.493V4Z',
  d15: 'M14.4946 22L13.9948 17H9.9966L9.49683 22',
  d16: 'M15.9936 7.5H7.99715L5.99805 22H17.9927L15.9936 7.5Z',
  d17: 'M7.99707 4V2',
  d18: 'M11.9961 4V2',
  d19: 'M15.9941 4V2',
  d20: 'M16.8047 12.0088H20.4356C20.4852 12.0088 20.5273 12.0451 20.5345 12.0942L21.9942 21.9939H17.3921',
  d21: 'M7.18569 12H3.55475C3.50518 12 3.46309 12.0363 3.45586 12.0854L1.99622 21.9851H6.59824',
  d22: 'M5.13818 22.5L7.1037 8.25H16.8938L18.8593 22.5H15.2306L14.7463 16.6877C14.7139 16.299 14.3889 16 13.9989 16H9.99887C9.60881 16 9.28386 16.299 9.25146 16.6877L8.76711 22.5H5.13818Z',
  d23: 'M10.2723 22.5H13.7254L13.3088 17.5H10.689L10.2723 22.5Z',
  d24: 'M8.74939 3V1.5H7.24939V3H6.49939C6.08518 3 5.74939 3.33579 5.74939 3.75V6.25C5.74939 6.66421 6.08518 7 6.49939 7H17.4994C17.9136 7 18.2494 6.66421 18.2494 6.25V3.75C18.2494 3.33579 17.9136 3 17.4994 3H16.7494V1.5H15.2494V3H12.7494V1.5H11.2494V3H8.74939Z',
  d25: 'M5.46321 11H3.49931C3.12806 11 2.81268 11.2716 2.75761 11.6387L0.999512 22.5H3.877L5.46321 11Z',
  d26: 'M20.1217 22.5H23.0004L21.2412 11.6387C21.1861 11.2716 20.8708 11 20.4995 11H18.5355L20.1217 22.5Z',
} as const;

export const IconCastleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-stroke-rounded IconCastleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCastleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-duotone-rounded IconCastleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCastleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-twotone-rounded IconCastleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCastleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-solid-rounded IconCastleSolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCastleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-bulk-rounded IconCastleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCastleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-stroke-sharp IconCastleStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCastleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-solid-sharp IconCastleSolidSharp"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCastle: TheIconSelfPack = {
  name: 'Castle',
  StrokeRounded: IconCastleStrokeRounded,
  DuotoneRounded: IconCastleDuotoneRounded,
  TwotoneRounded: IconCastleTwotoneRounded,
  SolidRounded: IconCastleSolidRounded,
  BulkRounded: IconCastleBulkRounded,
  StrokeSharp: IconCastleStrokeSharp,
  SolidSharp: IconCastleSolidSharp,
};