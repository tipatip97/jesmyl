import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 8V21M18 8V21',
  d2: 'M3 8H21M3 12H21',
  d3: 'M10 8L10 12M14 8L14 12',
  d4: 'M20 3C18.5391 5.96343 15.5055 8 12 8C8.49452 8 5.46091 5.96343 4 3',
  d5: 'M6 8V12H10V8H6Z',
  d6: 'M14 8H18V12H14V8Z',
  d7: 'M3.55783 2.10329C4.05319 1.85909 4.65273 2.06269 4.89693 2.55805C6.19739 5.19602 8.89293 7.00022 12 7.00022C15.1071 7.00022 17.8026 5.19602 19.1031 2.55805C19.3473 2.06269 19.9468 1.85909 20.4422 2.10329C20.9375 2.34749 21.1411 2.94703 20.8969 3.44239C20.2046 4.8467 19.1932 6.06505 17.9575 7.00022H21C21.5523 7.00022 22 7.44794 22 8.00022C22 8.55251 21.5523 9.00022 21 9.00022H19V11.0002H21C21.5523 11.0002 22 11.4479 22 12.0002C22 12.5525 21.5523 13.0002 21 13.0002H19V21.0002C19 21.5525 18.5523 22.0002 18 22.0002C17.4477 22.0002 17 21.5525 17 21.0002V13.0002H7V21.0002C7 21.5525 6.55228 22.0002 6 22.0002C5.44772 22.0002 5 21.5525 5 21.0002V13.0002H3C2.44772 13.0002 2 12.5525 2 12.0002C2 11.4479 2.44772 11.0002 3 11.0002H5V9.00022H3C2.44772 9.00022 2 8.55251 2 8.00022C2 7.44794 2.44772 7.00022 3 7.00022H6.04246C4.80677 6.06505 3.79536 4.8467 3.10307 3.44239C2.85887 2.94703 3.06247 2.34749 3.55783 2.10329ZM7 9.00022V11.0002H9V9.00022H7ZM11 9.00022V11.0002H13V9.00022H11ZM15 9.00022V11.0002H17V9.00022H15Z',
  d8: 'M6 7C6.55228 7 7 7.44772 7 8V21C7 21.5523 6.55228 22 6 22C5.44772 22 5 21.5523 5 21V8C5 7.44772 5.44772 7 6 7ZM18 7C18.5523 7 19 7.44772 19 8V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V8C17 7.44772 17.4477 7 18 7Z',
  d9: 'M2 8C2 7.44772 2.44772 7 3 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H3C2.44772 9 2 8.55228 2 8ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z',
  d10: 'M10 7C9.44772 7 9 7.44772 9 8L9 12C9 12.5523 9.44771 13 10 13C10.5523 13 11 12.5523 11 12L11 8C11 7.44772 10.5523 7 10 7ZM14 7C13.4477 7 13 7.44772 13 8L13 12C13 12.5523 13.4477 13 14 13C14.5523 13 15 12.5523 15 12L15 8C15 7.44772 14.5523 7 14 7Z',
  d11: 'M3.55805 2.10329C4.05342 1.85909 4.65295 2.06269 4.89716 2.55805C6.19762 5.19602 8.89315 7.00022 12.0002 7.00022C15.1073 7.00022 17.8028 5.19602 19.1033 2.55805C19.3475 2.06269 19.947 1.85909 20.4424 2.10329C20.9378 2.34749 21.1414 2.94703 20.8972 3.44239C19.2758 6.7313 15.9041 9.00022 12.0002 9.00022C8.09634 9.00022 4.72465 6.7313 3.10329 3.44239C2.85909 2.94703 3.06269 2.34749 3.55805 2.10329Z',
  d12: 'M5 21.25V8.25H7V21.25H5ZM17 21.25V8.25H19V21.25H17Z',
  d13: 'M21 9.25H3V7.25H21V9.25ZM21 13.25H3V11.25H21V13.25Z',
  d14: 'M11 12.25L11 8.25L9 8.25L9 12.25L11 12.25ZM15 12.25L15 8.25L13 8.25L13 12.25L15 12.25Z',
  d15: 'M12.0008 9.19217C8.09687 9.19217 4.72518 6.92324 3.10382 3.63434L4.89768 2.75C6.19815 5.38796 8.89368 7.19217 12.0008 7.19217C15.1078 7.19217 17.8034 5.38796 19.1038 2.75L20.8977 3.63434C19.2763 6.92324 15.9046 9.19217 12.0008 9.19217Z',
} as const;

export const IconTorriGateStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="torri-gate-stroke-rounded IconTorriGateStrokeRounded"
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

export const IconTorriGateDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="torri-gate-duotone-rounded IconTorriGateDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      </g>
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

export const IconTorriGateTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="torri-gate-twotone-rounded IconTorriGateTwotoneRounded"
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

export const IconTorriGateSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="torri-gate-solid-rounded IconTorriGateSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTorriGateBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="torri-gate-bulk-rounded IconTorriGateBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTorriGateStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="torri-gate-stroke-sharp IconTorriGateStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTorriGateSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="torri-gate-solid-sharp IconTorriGateSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTorriGate: TheIconSelfPack = {
  name: 'TorriGate',
  StrokeRounded: IconTorriGateStrokeRounded,
  DuotoneRounded: IconTorriGateDuotoneRounded,
  TwotoneRounded: IconTorriGateTwotoneRounded,
  SolidRounded: IconTorriGateSolidRounded,
  BulkRounded: IconTorriGateBulkRounded,
  StrokeSharp: IconTorriGateStrokeSharp,
  SolidSharp: IconTorriGateSolidSharp,
};