import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.5 10C9.5 12.6667 9 15.3333 7 18M14.5 10C14.5 12.6667 15 15.3333 17 18',
  d2: 'M15.5 5.42857C15.5 6.18741 15.2483 6.88867 14.8223 7.45663C14.4776 7.91614 14.134 8 13.5704 8H10.4296C9.866 8 9.52236 7.91614 9.17768 7.45663C8.75166 6.88867 8.5 6.18741 8.5 5.42857C8.5 3.53502 10.067 2 12 2C13.933 2 15.5 3.53502 15.5 5.42857Z',
  d3: 'M8 10H16',
  d4: 'M4.2049 20.6489L4.22572 20.5955C5.06668 18.4398 5.72681 18 8.12187 18H15.8781C18.2732 18 18.9333 18.4398 19.7743 20.5955L19.7951 20.6489C20.2188 21.735 20.0278 22 18.8211 22H5.17893C3.9722 22 3.78118 21.735 4.2049 20.6489Z',
  d5: 'M7 18C9 15.3333 9.5 12.6667 9.5 10H14.5C14.5 12.6667 15 15.3333 17 18H7Z',
  d6: 'M7.74988 5.42857C7.74988 3.10631 9.66732 1.25 11.9999 1.25C14.3324 1.25 16.2499 3.10631 16.2499 5.42857C16.2499 6.35639 15.9415 7.21433 15.4222 7.90666C15.186 8.22153 14.9089 8.4586 14.5527 8.59864C14.2185 8.73 13.8763 8.75 13.5702 8.75H10.4295C10.1235 8.75 9.78121 8.73 9.44704 8.59864C9.09081 8.4586 8.81377 8.22153 8.57759 7.90667C8.05828 7.21433 7.74988 6.35639 7.74988 5.42857Z',
  d7: 'M8.49988 11.25H8.70771C8.55701 13.3734 7.96802 15.4592 6.39988 17.55C6.22943 17.7773 6.20202 18.0813 6.32906 18.3354C6.45611 18.5895 6.7158 18.75 6.99988 18.75H16.9999C17.284 18.75 17.5437 18.5895 17.6707 18.3354C17.7977 18.0813 17.7703 17.7773 17.5999 17.55C16.0317 15.4592 15.4428 13.3734 15.2921 11.25H15.4999C16.0522 11.25 16.4999 10.8023 16.4999 10.25C16.4999 9.69772 16.0522 9.25 15.4999 9.25H8.49988C7.94759 9.25 7.49988 9.69772 7.49988 10.25C7.49988 10.8023 7.94759 11.25 8.49988 11.25Z',
  d8: 'M6.30793 19.3781C6.02582 19.5553 5.74995 19.9058 5.34728 20.879L5.33174 20.9166C5.34369 20.9166 5.35587 20.9167 5.36827 20.9167H18.6317C18.6441 20.9167 18.6563 20.9166 18.6683 20.9166L18.6527 20.879C18.2501 19.9058 17.9742 19.5553 17.6921 19.3781C17.402 19.1959 16.9259 19.0833 15.7705 19.0833H8.22952C7.07413 19.0833 6.59804 19.1959 6.30793 19.3781ZM5.22988 17.8523C6.04723 17.339 7.05633 17.25 8.22952 17.25H15.7705C16.9437 17.25 17.9528 17.339 18.7701 17.8523C19.5955 18.3707 20.0493 19.2099 20.4642 20.2127L20.4845 20.2617C20.5952 20.5292 20.6962 20.8151 20.7338 21.0915C20.772 21.3717 20.7614 21.7663 20.4883 22.1235C20.2207 22.4735 19.8345 22.6113 19.5514 22.673C19.2656 22.7352 18.9451 22.75 18.6317 22.75H5.36827C5.05491 22.75 4.73443 22.7352 4.44857 22.673C4.1655 22.6113 3.77928 22.4735 3.51166 22.1235C3.23857 21.7663 3.22797 21.3717 3.26615 21.0915C3.30383 20.8151 3.40479 20.5293 3.51551 20.2617L3.53575 20.2127C3.9507 19.2099 4.40455 18.3707 5.22988 17.8523Z',
  d9: 'M7.5 10.25C7.5 10.8023 7.94772 11.25 8.5 11.25H15.5C16.0523 11.25 16.5 10.8023 16.5 10.25C16.5 9.69772 16.0523 9.25 15.5 9.25H8.5C7.94772 9.25 7.5 9.69772 7.5 10.25Z',
  d10: 'M11.9994 2.00012C10.0664 2.00012 8.49939 3.56713 8.49939 5.50012C8.49939 6.47947 8.90162 7.36486 9.5499 8.00012H14.4489C15.0972 7.36486 15.4994 6.47947 15.4994 5.50012C15.4994 3.56713 13.9324 2.00012 11.9994 2.00012Z',
  d11: 'M20.0001 22H3.99988L5.49988 18H18.4999L20.0001 22Z',
  d12: 'M20.5001 22.75H3.49988L4.99988 18.75H18.9999L20.5001 22.75Z',
  d13: 'M16.0002 10.7501H15.2647C15.3526 12.9448 15.861 15.0958 17.3818 17.2501H6.61853C8.13931 15.0958 8.64769 12.9448 8.73562 10.7501H8.00016V9.25012H16.0002V10.7501Z',
  d14: 'M12.0002 1.25012C9.65303 1.25012 7.75024 3.15291 7.75024 5.50012C7.75024 6.32615 7.98638 7.09769 8.39418 7.75012H15.6063C16.0141 7.09769 16.2502 6.32615 16.2502 5.50012C16.2502 3.15291 14.3475 1.25012 12.0002 1.25012Z',
} as const;

export const IconChessPawnStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-pawn-stroke-rounded IconChessPawnStrokeRounded"
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

export const IconChessPawnDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-pawn-duotone-rounded IconChessPawnDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconChessPawnTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-pawn-twotone-rounded IconChessPawnTwotoneRounded"
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

export const IconChessPawnSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-pawn-solid-rounded IconChessPawnSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconChessPawnBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-pawn-bulk-rounded IconChessPawnBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
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

export const IconChessPawnStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-pawn-stroke-sharp IconChessPawnStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChessPawnSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-pawn-solid-sharp IconChessPawnSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfChessPawn: TheIconSelfPack = {
  name: 'ChessPawn',
  StrokeRounded: IconChessPawnStrokeRounded,
  DuotoneRounded: IconChessPawnDuotoneRounded,
  TwotoneRounded: IconChessPawnTwotoneRounded,
  SolidRounded: IconChessPawnSolidRounded,
  BulkRounded: IconChessPawnBulkRounded,
  StrokeSharp: IconChessPawnStrokeSharp,
  SolidSharp: IconChessPawnSolidSharp,
};