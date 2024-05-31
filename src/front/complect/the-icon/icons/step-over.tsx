import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 14L15.5858 15.8398C16.2525 16.6133 16.5858 17 17 17C17.4142 17 17.7475 16.6133 18.4142 15.8398L20 14',
  d2: 'M17 17V11C17 8.19108 17 6.78661 16.3259 5.77772C16.034 5.34096 15.659 4.96596 15.2223 4.67412C14.2134 4 12.8089 4 10 4C7.19108 4 5.78661 4 4.77772 4.67412C4.34096 4.96596 3.96596 5.34096 3.67412 5.77772C3 6.78661 3 8.19108 3 11L3 17',
  d3: 'M7 20H13',
  d4: 'M14 14L15.5858 15.8398C16.2525 16.6133 16.5858 17 17 17M20 14L18.4142 15.8398C17.7475 16.6133 17.4142 17 17 17M17 17V11C17 8.19108 17 6.78661 16.3259 5.77772C16.034 5.34096 15.659 4.96596 15.2223 4.67412C14.2134 4 12.8089 4 10 4C7.19108 4 5.78661 4 4.77772 4.67412C4.34096 4.96596 3.96596 5.34096 3.67412 5.77772C3 6.78661 3 8.19108 3 11V17',
  d5: 'M10.6789 3H10.5711H10.571C9.21239 2.99999 8.11673 2.99997 7.23764 3.0894C6.33023 3.18171 5.54329 3.3775 4.84715 3.84265C4.3012 4.20745 3.83245 4.6762 3.46765 5.22215C3.0025 5.91829 2.80671 6.70523 2.7144 7.61264C2.62497 8.49173 2.62499 9.58737 2.625 10.946V10.946V17C2.625 17.5523 3.07272 18 3.625 18C4.17729 18 4.625 17.5523 4.625 17L4.625 11C4.625 9.57473 4.62621 8.58104 4.70413 7.81505C4.78035 7.06578 4.92162 6.64604 5.13059 6.33329C5.34947 6.00572 5.63072 5.72447 5.95829 5.50559C6.27104 5.29662 6.69078 5.15535 7.44005 5.07913C8.20604 5.00121 9.19973 5 10.625 5C12.0503 5 13.044 5.00121 13.8099 5.07913C14.5592 5.15535 14.979 5.29662 15.2917 5.50559C15.6193 5.72447 15.9005 6.00572 16.1194 6.33329C16.3284 6.64604 16.4696 7.06578 16.5459 7.81505C16.6238 8.58104 16.625 9.57473 16.625 11V13.25H14.6237C14.4506 13.2502 14.2767 13.31 14.1354 13.4319C13.8216 13.7023 13.7865 14.1759 14.0569 14.4897L15.6735 16.3652C15.9802 16.7212 16.2585 17.0441 16.5155 17.2715C16.7922 17.5165 17.1514 17.75 17.625 17.75C18.0986 17.75 18.4579 17.5165 18.7346 17.2715C18.9915 17.0441 19.2697 16.7212 19.5764 16.3653L21.1931 14.4897C21.4635 14.1759 21.4284 13.7023 21.1147 13.4319C20.9729 13.3097 20.7985 13.2499 20.625 13.25H18.625V10.946C18.625 9.5874 18.625 8.49173 18.5356 7.61265C18.4433 6.70523 18.2475 5.91829 17.7823 5.22215C17.4176 4.6762 16.9488 4.20745 16.4029 3.84265C15.7067 3.37751 14.9198 3.18171 14.0124 3.0894C13.1333 2.99997 12.0376 2.99999 10.679 3H10.6789Z',
  d6: 'M6.625 20C6.625 19.4477 7.07272 19 7.625 19H13.625C14.1773 19 14.625 19.4477 14.625 20C14.625 20.5523 14.1773 21 13.625 21H7.625C7.07272 21 6.625 20.5523 6.625 20Z',
  d7: 'M7 20.0234H13',
  d8: 'M20.0021 14.0587L16.9886 17.0432L13.9928 14.0735M3.00098 17.0204L3.00098 4.12065C3.00098 4.06534 3.04575 4.02051 3.10098 4.02051L16.8886 4.02059C16.9438 4.02059 16.9886 4.06543 16.9886 4.12074V16.3386',
  d9: 'M2.5 4C2.5 3.44772 2.94772 3 3.5 3H17.5C17.7652 3 18.0196 3.10536 18.2071 3.29289C18.3946 3.48043 18.5 3.73478 18.5 4L18.5 14.5858L20.0858 13L21.5 14.4142L17.5 18.4142L13.5 14.4142L14.9142 13L16.5 14.5858L16.5 5H4.5V17H2.5V4Z',
  d10: 'M13.5 21H7.5V19H13.5V21Z',
} as const;

export const IconStepOverStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="step-over-stroke-rounded IconStepOverStrokeRounded"
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

export const IconStepOverDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="step-over-duotone-rounded IconStepOverDuotoneRounded"
    >
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStepOverTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="step-over-twotone-rounded IconStepOverTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStepOverSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="step-over-solid-rounded IconStepOverSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStepOverBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="step-over-bulk-rounded IconStepOverBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStepOverStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="step-over-stroke-sharp IconStepOverStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStepOverSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="step-over-solid-sharp IconStepOverSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStepOver: TheIconSelfPack = {
  name: 'StepOver',
  StrokeRounded: IconStepOverStrokeRounded,
  DuotoneRounded: IconStepOverDuotoneRounded,
  TwotoneRounded: IconStepOverTwotoneRounded,
  SolidRounded: IconStepOverSolidRounded,
  BulkRounded: IconStepOverBulkRounded,
  StrokeSharp: IconStepOverStrokeSharp,
  SolidSharp: IconStepOverSolidSharp,
};