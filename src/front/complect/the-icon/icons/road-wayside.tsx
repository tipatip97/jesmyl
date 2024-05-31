import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.5 2.5C15.5 5.32843 15.5 6.74264 16.3787 7.62132C17.2574 8.5 18.6716 8.5 21.5 8.5',
  d2: 'M15.5 21.5C15.5 18.6716 15.5 17.2574 16.3787 16.3787C17.2574 15.5 18.6716 15.5 21.5 15.5',
  d3: 'M8.5 2.5C8.5 5.32843 8.5 6.74264 7.62132 7.62132C6.74264 8.5 5.32843 8.5 2.5 8.5',
  d4: 'M8.5 21.5C8.5 18.6716 8.5 17.2574 7.62132 16.3787C6.74264 15.5 5.32843 15.5 2.5 15.5',
  d5: 'M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z',
  d6: 'M12 2.5V4.5',
  d7: 'M21.5 12L19.5 12',
  d8: 'M12 19.5V21.5',
  d9: 'M4.5 12L2.5 12',
  d10: 'M15.5 2.5C15.5 5.32843 15.5 6.74264 16.3787 7.62132C17.2574 8.5 18.6716 8.5 21.5 8.5V15.5C18.6716 15.5 17.2574 15.5 16.3787 16.3787C15.5 17.2574 15.5 18.6716 15.5 21.5H8.5C8.5 18.6716 8.5 17.2574 7.62132 16.3787C6.74264 15.5 5.32843 15.5 2.5 15.5V8.5C5.32843 8.5 6.74264 8.5 7.62132 7.62132C8.5 6.74264 8.5 5.32843 8.5 2.5H15.5ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z',
  d11: 'M11.4121 2.08787C11.5 2.17574 11.5 2.31716 11.5 2.6V4.25C11.5 4.66421 11.8358 5 12.25 5C12.6642 5 13 4.66421 13 4.25V2.6C13 2.31716 13 2.17574 13.0879 2.08787C13.1757 2 13.3172 2 13.6 2H13.7938C14.2201 1.99995 14.6104 1.99991 14.9282 2.0417C15.2772 2.08758 15.6475 2.19536 15.9554 2.49406C16.2667 2.7961 16.3837 3.1709 16.4392 3.52079C16.4904 3.84328 16.5038 4.28689 16.517 4.72804C16.5642 6.29229 16.7485 6.93047 17.159 7.341C17.5695 7.75152 18.2077 7.93583 19.772 7.983C20.2131 7.99626 20.6567 8.0096 20.9792 8.06078C21.3291 8.11631 21.7039 8.23336 22.006 8.54465C22.3046 8.85248 22.4124 9.22283 22.4583 9.57177C22.5001 9.88957 22.5001 10.2799 22.5 10.7062V10.9C22.5 11.1828 22.5 11.3243 22.4121 11.4121C22.3243 11.5 22.1829 11.5 21.9 11.5H20.25C19.8358 11.5 19.5 11.8358 19.5 12.25C19.5 12.6642 19.8358 13 20.25 13H21.9C22.1829 13 22.3243 13 22.4121 13.0879C22.5 13.1757 22.5 13.3172 22.5 13.6V13.7938C22.5001 14.2201 22.5001 14.6104 22.4583 14.9282C22.4124 15.2772 22.3046 15.6475 22.006 15.9554C21.7039 16.2667 21.3291 16.3837 20.9792 16.4392C20.6567 16.4904 20.2131 16.5038 19.772 16.517C18.2077 16.5642 17.5695 16.7485 17.159 17.159C16.7485 17.5695 16.5642 18.2077 16.517 19.772C16.5038 20.2131 16.4904 20.6567 16.4392 20.9792C16.3837 21.3291 16.2667 21.7039 15.9554 22.006C15.6475 22.3046 15.2772 22.4124 14.9282 22.4583C14.6104 22.5001 14.2201 22.5001 13.7938 22.5H13.6C13.3172 22.5 13.1757 22.5 13.0879 22.4121C13 22.3243 13 22.1829 13 21.9V20.25C13 19.8358 12.6642 19.5 12.25 19.5C11.8358 19.5 11.5 19.8358 11.5 20.25V21.9C11.5 22.1829 11.5 22.3243 11.4121 22.4121C11.3243 22.5 11.1828 22.5 10.9 22.5H10.7062C10.2799 22.5001 9.88957 22.5001 9.57177 22.4583C9.22283 22.4124 8.85248 22.3046 8.54465 22.006C8.23336 21.7039 8.11631 21.3291 8.06078 20.9792C8.0096 20.6567 7.99626 20.2131 7.983 19.772C7.93583 18.2077 7.75152 17.5695 7.341 17.159C6.93047 16.7485 6.29229 16.5642 4.72804 16.517C4.28689 16.5038 3.84328 16.4904 3.52079 16.4392C3.1709 16.3837 2.7961 16.2667 2.49406 15.9554C2.19536 15.6475 2.08758 15.2772 2.0417 14.9282C1.99991 14.6104 1.99995 14.2201 2 13.7938V13.6C2 13.3172 2 13.1757 2.08787 13.0879C2.17574 13 2.31716 13 2.6 13H4.25C4.66421 13 5 12.6642 5 12.25C5 11.8358 4.66421 11.5 4.25 11.5H2.6C2.31716 11.5 2.17574 11.5 2.08787 11.4121C2 11.3243 2 11.1828 2 10.9V10.7062C1.99995 10.2799 1.99991 9.88957 2.0417 9.57177C2.08758 9.22283 2.19536 8.85248 2.49406 8.54465C2.7961 8.23336 3.1709 8.11631 3.52079 8.06078C3.84329 8.0096 4.28688 7.99626 4.72804 7.983C6.29229 7.93583 6.93047 7.75152 7.341 7.341C7.75152 6.93047 7.93583 6.29229 7.983 4.72804C7.99626 4.28688 8.0096 3.84329 8.06078 3.52079C8.11631 3.1709 8.23336 2.7961 8.54465 2.49406C8.85248 2.19536 9.22283 2.08758 9.57177 2.0417C9.88957 1.99991 10.2799 1.99995 10.7062 2H10.9C11.1828 2 11.3243 2 11.4121 2.08787ZM10 12.25C10 11.0074 11.0074 10 12.25 10C13.4926 10 14.5 11.0074 14.5 12.25C14.5 13.4926 13.4926 14.5 12.25 14.5C11.0074 14.5 10 13.4926 10 12.25ZM12.25 8.5C10.1789 8.5 8.5 10.1789 8.5 12.25C8.5 14.3211 10.1789 16 12.25 16C14.3211 16 16 14.3211 16 12.25C16 10.1789 14.3211 8.5 12.25 8.5Z',
  d12: 'M13.7938 2C14.2201 1.99995 14.6104 1.99991 14.9282 2.0417C15.2772 2.08758 15.6475 2.19536 15.9554 2.49406C16.2667 2.7961 16.3837 3.1709 16.4392 3.52079C16.4904 3.84328 16.5038 4.28689 16.517 4.72804C16.5642 6.29229 16.7485 6.93047 17.159 7.341C17.5695 7.75152 18.2077 7.93583 19.772 7.983C20.2131 7.99626 20.6567 8.0096 20.9792 8.06078C21.3291 8.11631 21.7039 8.23336 22.006 8.54465C22.3046 8.85248 22.4124 9.22283 22.4583 9.57177C22.5001 9.88957 22.5001 10.2799 22.5 10.7062V13.7938C22.5001 14.2201 22.5001 14.6104 22.4583 14.9282C22.4124 15.2772 22.3046 15.6475 22.006 15.9554C21.7039 16.2667 21.3291 16.3837 20.9792 16.4392C20.6567 16.4904 20.2131 16.5038 19.772 16.517C18.2077 16.5642 17.5695 16.7485 17.159 17.159C16.7485 17.5695 16.5642 18.2077 16.517 19.772C16.5038 20.2131 16.4904 20.6567 16.4392 20.9792C16.3837 21.3291 16.2667 21.7039 15.9554 22.006C15.6475 22.3046 15.2772 22.4124 14.9282 22.4583C14.6104 22.5001 14.2201 22.5001 13.7938 22.5H10.7062C10.2799 22.5001 9.88957 22.5001 9.57177 22.4583C9.22283 22.4124 8.85248 22.3046 8.54465 22.006C8.23336 21.7039 8.11631 21.3291 8.06078 20.9792C8.0096 20.6567 7.99626 20.2131 7.983 19.772C7.93583 18.2077 7.75152 17.5695 7.341 17.159C6.93047 16.7485 6.29229 16.5642 4.72804 16.517C4.28689 16.5038 3.84328 16.4904 3.52079 16.4392C3.1709 16.3837 2.7961 16.2667 2.49406 15.9554C2.19536 15.6475 2.08758 15.2772 2.0417 14.9282C1.99991 14.6104 1.99995 14.2201 2 13.7938L2 10.7062C1.99995 10.2799 1.99991 9.88957 2.0417 9.57177C2.08758 9.22283 2.19536 8.85248 2.49406 8.54465C2.7961 8.23336 3.1709 8.11631 3.52079 8.06078C3.84329 8.0096 4.28688 7.99626 4.72804 7.983C6.29229 7.93583 6.93047 7.75152 7.341 7.341C7.75152 6.93047 7.93583 6.29229 7.983 4.72804C7.99626 4.28688 8.0096 3.84329 8.06078 3.52079C8.11631 3.1709 8.23336 2.7961 8.54465 2.49406C8.85248 2.19536 9.22283 2.08758 9.57177 2.0417C9.88957 1.99991 10.2799 1.99995 10.7062 2L13.7938 2Z',
  d13: 'M2 13V11.5H4.25C4.66421 11.5 5 11.8358 5 12.25C5 12.6642 4.66421 13 4.25 13H2ZM13 22.5H11.5V20.25C11.5 19.8358 11.8358 19.5 12.25 19.5C12.6642 19.5 13 19.8358 13 20.25V22.5ZM22.5 11.5V13H20.25C19.8358 13 19.5 12.6642 19.5 12.25C19.5 11.8358 19.8358 11.5 20.25 11.5H22.5ZM13 2V4.25C13 4.66421 12.6642 5 12.25 5C11.8358 5 11.5 4.66421 11.5 4.25V2H13Z',
  d14: 'M12.25 10C11.0074 10 10 11.0074 10 12.25C10 13.4926 11.0074 14.5 12.25 14.5C13.4926 14.5 14.5 13.4926 14.5 12.25C14.5 11.0074 13.4926 10 12.25 10ZM8.5 12.25C8.5 10.1789 10.1789 8.5 12.25 8.5C14.3211 8.5 16 10.1789 16 12.25C16 14.3211 14.3211 16 12.25 16C10.1789 16 8.5 14.3211 8.5 12.25Z',
  d15: 'M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z',
  d16: 'M11.25 4.5V1.75H7.75V2.5C7.75 3.93542 7.74841 4.93653 7.64685 5.69188C7.5482 6.42565 7.36775 6.81423 7.09099 7.09099C6.81423 7.36775 6.42565 7.5482 5.69188 7.64685C4.93653 7.74841 3.93542 7.75 2.5 7.75H1.75V11.25H4.5V12.75H1.75V16.25H2.5C3.93542 16.25 4.93653 16.2516 5.69188 16.3531C6.42566 16.4518 6.81423 16.6322 7.09099 16.909C7.36775 17.1858 7.5482 17.5743 7.64685 18.3081C7.74841 19.0635 7.75 20.0646 7.75 21.5V22.25H11.25V19.5H12.75V22.25H16.25V21.5C16.25 20.0646 16.2516 19.0635 16.3531 18.3081C16.4518 17.5743 16.6322 17.1858 16.909 16.909C17.1858 16.6322 17.5743 16.4518 18.3081 16.3531C19.0635 16.2516 20.0646 16.25 21.5 16.25H22.25V12.75H19.5V11.25H22.25V7.75H21.5C20.0646 7.75 19.0635 7.74841 18.3081 7.64685C17.5743 7.5482 17.1858 7.36775 16.909 7.09099C16.6322 6.81423 16.4518 6.42566 16.3531 5.69188C16.2516 4.93653 16.25 3.93542 16.25 2.5V1.75H12.75V4.5H11.25ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z',
} as const;

export const IconRoadWaysideStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-wayside-stroke-rounded IconRoadWaysideStrokeRounded"
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
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconRoadWaysideDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-wayside-duotone-rounded IconRoadWaysideDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconRoadWaysideTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-wayside-twotone-rounded IconRoadWaysideTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconRoadWaysideSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-wayside-solid-rounded IconRoadWaysideSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoadWaysideBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-wayside-bulk-rounded IconRoadWaysideBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconRoadWaysideStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-wayside-stroke-sharp IconRoadWaysideStrokeSharp"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoadWaysideSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-wayside-solid-sharp IconRoadWaysideSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRoadWayside: TheIconSelfPack = {
  name: 'RoadWayside',
  StrokeRounded: IconRoadWaysideStrokeRounded,
  DuotoneRounded: IconRoadWaysideDuotoneRounded,
  TwotoneRounded: IconRoadWaysideTwotoneRounded,
  SolidRounded: IconRoadWaysideSolidRounded,
  BulkRounded: IconRoadWaysideBulkRounded,
  StrokeSharp: IconRoadWaysideStrokeSharp,
  SolidSharp: IconRoadWaysideSolidSharp,
};