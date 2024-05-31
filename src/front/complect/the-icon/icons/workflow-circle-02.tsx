import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 19.5C21 20.8807 19.8807 22 18.5 22C17.1193 22 16 20.8807 16 19.5C16 18.1193 17.1193 17 18.5 17C19.8807 17 21 18.1193 21 19.5Z',
  d2: 'M21 9.5C21 10.8807 19.8807 12 18.5 12C17.1193 12 16 10.8807 16 9.5C16 8.11929 17.1193 7 18.5 7C19.8807 7 21 8.11929 21 9.5Z',
  d3: 'M8 14.5C8 15.8807 6.88071 17 5.5 17C4.11929 17 3 15.8807 3 14.5C3 13.1193 4.11929 12 5.5 12C6.88071 12 8 13.1193 8 14.5Z',
  d4: 'M8 4.5C8 5.88071 6.88071 7 5.5 7C4.11929 7 3 5.88071 3 4.5C3 3.11929 4.11929 2 5.5 2C6.88071 2 8 3.11929 8 4.5Z',
  d5: 'M8 4.5L15.5 9.5L8.5 14.5L16 19.5',
  d6: 'M7.16806 3.94541C7.47441 3.48588 8.09528 3.3617 8.55481 3.66806L16.0548 8.66806C16.3283 8.85036 16.4947 9.15538 16.5 9.48398C16.5053 9.81259 16.3488 10.1228 16.0813 10.3138L10.2603 14.4717L16.5548 18.6681C17.0143 18.9744 17.1385 19.5953 16.8322 20.0548C16.5258 20.5143 15.9049 20.6385 15.4454 20.3322L7.94541 15.3322C7.67196 15.1499 7.50553 14.8448 7.50024 14.5162C7.49494 14.1876 7.65144 13.8774 7.91887 13.6864L13.7399 9.52849L7.44541 5.33216C6.98588 5.0258 6.8617 4.40493 7.16806 3.94541Z',
  d7: 'M15.25 19.5C15.25 17.7051 16.7051 16.25 18.5 16.25C20.2949 16.25 21.75 17.7051 21.75 19.5C21.75 21.2949 20.2949 22.75 18.5 22.75C16.7051 22.75 15.25 21.2949 15.25 19.5Z',
  d8: 'M15.25 9.5C15.25 7.70507 16.7051 6.25 18.5 6.25C20.2949 6.25 21.75 7.70507 21.75 9.5C21.75 11.2949 20.2949 12.75 18.5 12.75C16.7051 12.75 15.25 11.2949 15.25 9.5Z',
  d9: 'M2.25 14.5C2.25 12.7051 3.70507 11.25 5.5 11.25C7.29493 11.25 8.75 12.7051 8.75 14.5C8.75 16.2949 7.29493 17.75 5.5 17.75C3.70507 17.75 2.25 16.2949 2.25 14.5Z',
  d10: 'M2.25 4.5C2.25 2.70507 3.70507 1.25 5.5 1.25C7.29493 1.25 8.75 2.70507 8.75 4.5C8.75 6.29493 7.29493 7.75 5.5 7.75C3.70507 7.75 2.25 6.29493 2.25 4.5Z',
  d11: 'M8.40039 5.96856L13.7402 9.52843L8.50776 13.2659C8.66409 13.6464 8.75029 14.0632 8.75029 14.5001C8.75029 14.9287 8.66731 15.338 8.51654 15.7127L15.34 20.2616C15.2814 20.0174 15.2503 19.7623 15.2503 19.5001C15.2503 18.9716 15.3764 18.4725 15.6003 18.0314L10.2606 14.4717L15.4929 10.7343C15.3365 10.3538 15.2503 9.93699 15.2503 9.50007C15.2503 9.07137 15.3333 8.66207 15.4841 8.28734L8.66052 3.73828C8.71921 3.98263 8.75029 4.23772 8.75029 4.50007C8.75029 5.02851 8.62417 5.52749 8.40039 5.96856Z',
  d12: 'M8 4.5L16 9.5L8 14.5L16 19.5',
  d13: 'M14.1132 9.5001L7.47 5.3481L8.53 3.6521L16.53 8.6521C16.8224 8.83484 17 9.15531 17 9.5001C17 9.84489 16.8224 10.1654 16.53 10.3481L9.8868 14.5001L16.53 18.6521L15.47 20.3481L7.47 15.3481C7.17762 15.1654 7 14.8449 7 14.5001C7 14.1553 7.17762 13.8348 7.47 13.6521L14.1132 9.5001Z',
} as const;

export const IconWorkflowCircle02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-02-stroke-rounded IconWorkflowCircle02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWorkflowCircle02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-02-duotone-rounded IconWorkflowCircle02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWorkflowCircle02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-02-twotone-rounded IconWorkflowCircle02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowCircle02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-02-solid-rounded IconWorkflowCircle02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconWorkflowCircle02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-02-bulk-rounded IconWorkflowCircle02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWorkflowCircle02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-02-stroke-sharp IconWorkflowCircle02StrokeSharp"
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowCircle02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-02-solid-sharp IconWorkflowCircle02SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWorkflowCircle02: TheIconSelfPack = {
  name: 'WorkflowCircle02',
  StrokeRounded: IconWorkflowCircle02StrokeRounded,
  DuotoneRounded: IconWorkflowCircle02DuotoneRounded,
  TwotoneRounded: IconWorkflowCircle02TwotoneRounded,
  SolidRounded: IconWorkflowCircle02SolidRounded,
  BulkRounded: IconWorkflowCircle02BulkRounded,
  StrokeSharp: IconWorkflowCircle02StrokeSharp,
  SolidSharp: IconWorkflowCircle02SolidSharp,
};