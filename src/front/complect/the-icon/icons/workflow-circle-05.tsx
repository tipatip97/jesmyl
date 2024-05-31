import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 5C9 6.65685 7.65685 8 6 8C4.34315 8 3 6.65685 3 5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5Z',
  d2: 'M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5Z',
  d3: 'M9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19Z',
  d4: 'M6 8V16',
  d5: 'M6 12H14C15.4001 12 16.1002 12 16.635 11.7275C17.1054 11.4878 17.4878 11.1054 17.7275 10.635C18 10.1002 18 9.40013 18 8',
  d6: 'M6.75 8C6.75 7.58579 6.41421 7.25 6 7.25C5.58579 7.25 5.25 7.58579 5.25 8H6.75ZM5.25 16C5.25 16.4142 5.58579 16.75 6 16.75C6.41421 16.75 6.75 16.4142 6.75 16H5.25ZM6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75V11.25ZM16.635 11.7275L16.9755 12.3958L16.635 11.7275ZM18.75 8C18.75 7.58579 18.4142 7.25 18 7.25C17.5858 7.25 17.25 7.58579 17.25 8H18.75ZM17.7275 10.635L17.0593 10.2945V10.2945L17.7275 10.635ZM5.25 8V16H6.75V8H5.25ZM6 12.75H14V11.25H6V12.75ZM14 12.75C14.6877 12.75 15.2486 12.7506 15.7031 12.7134C16.1663 12.6756 16.5847 12.5949 16.9755 12.3958L16.2945 11.0593C16.1504 11.1327 15.9514 11.1882 15.5809 11.2184C15.2017 11.2494 14.7124 11.25 14 11.25V12.75ZM17.25 8C17.25 8.71244 17.2494 9.20167 17.2184 9.58092C17.1882 9.95142 17.1327 10.1504 17.0593 10.2945L18.3958 10.9755C18.5949 10.5847 18.6756 10.1663 18.7134 9.70307C18.7506 9.24856 18.75 8.68769 18.75 8H17.25ZM16.9755 12.3958C17.587 12.0842 18.0842 11.587 18.3958 10.9755L17.0593 10.2945C16.8915 10.6238 16.6238 10.8915 16.2945 11.0593L16.9755 12.3958Z',
  d7: 'M6 7C6.55228 7 7 7.44772 7 8V11H14C14.7166 11 15.1938 10.9992 15.5606 10.9693C15.9156 10.9403 16.0781 10.889 16.181 10.8365C16.4632 10.6927 16.6927 10.4632 16.8365 10.181C16.889 10.0781 16.9403 9.9156 16.9693 9.56056C16.9992 9.19385 17 8.71657 17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8V8.04014C19 8.70602 19 9.26555 18.9626 9.72343C18.9235 10.2021 18.8386 10.6571 18.6185 11.089C18.283 11.7475 17.7475 12.283 17.089 12.6185C16.6571 12.8386 16.2021 12.9235 15.7234 12.9626C15.2656 13 14.706 13 14.0402 13L7 13V16C7 16.5523 6.55228 17 6 17C5.44772 17 5 16.5523 5 16V8C5 7.44772 5.44772 7 6 7Z',
  d8: 'M2.25 5C2.25 2.92893 3.92893 1.25 6 1.25C8.07107 1.25 9.75 2.92893 9.75 5C9.75 7.07107 8.07107 8.75 6 8.75C3.92893 8.75 2.25 7.07107 2.25 5Z',
  d9: 'M14.25 5C14.25 2.92893 15.9289 1.25 18 1.25C20.0711 1.25 21.75 2.92893 21.75 5C21.75 7.07107 20.0711 8.75 18 8.75C15.9289 8.75 14.25 7.07107 14.25 5Z',
  d10: 'M2.25 19C2.25 16.9289 3.92893 15.25 6 15.25C8.07107 15.25 9.75 16.9289 9.75 19C9.75 21.0711 8.07107 22.75 6 22.75C3.92893 22.75 2.25 21.0711 2.25 19Z',
  d11: 'M5 15.3832C5.31836 15.2953 5.6537 15.2484 6 15.2484C6.3463 15.2484 6.68164 15.2953 7 15.3832V12.9984L14.0402 12.9984C14.706 12.9984 15.2656 12.9984 15.7234 12.961C16.2021 12.9219 16.6571 12.837 17.089 12.6169C17.7475 12.2814 18.283 11.7459 18.6185 11.0874C18.8386 10.6555 18.9235 10.2006 18.9626 9.72183C18.9887 9.40249 18.9966 9.03371 18.999 8.61388C18.6809 8.70157 18.3459 8.74841 18 8.74841C17.6533 8.74841 17.3176 8.70135 16.9989 8.61328C16.9966 9.0072 16.9897 9.30881 16.9693 9.55897C16.9403 9.91401 16.889 10.0765 16.8365 10.1794C16.6927 10.4616 16.4632 10.6911 16.181 10.8349C16.0781 10.8874 15.9156 10.9387 15.5606 10.9677C15.1938 10.9976 14.7166 10.9984 14 10.9984H7V8.6136C6.68164 8.70147 6.3463 8.74841 6 8.74841C5.6537 8.74841 5.31836 8.70147 5 8.6136V15.3832Z',
  d12: 'M6 12H18V8',
  d13: 'M7 16V8H5V16H7Z',
  d14: 'M17 11V8H19V12C19 12.5523 18.5523 13 18 13H6V11H17Z',
} as const;

export const IconWorkflowCircle05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-05-stroke-rounded IconWorkflowCircle05StrokeRounded"
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

export const IconWorkflowCircle05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-05-duotone-rounded IconWorkflowCircle05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconWorkflowCircle05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-05-twotone-rounded IconWorkflowCircle05TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowCircle05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-05-solid-rounded IconWorkflowCircle05SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconWorkflowCircle05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-05-bulk-rounded IconWorkflowCircle05BulkRounded"
    >
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

export const IconWorkflowCircle05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-05-stroke-sharp IconWorkflowCircle05StrokeSharp"
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

export const IconWorkflowCircle05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-05-solid-sharp IconWorkflowCircle05SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWorkflowCircle05: TheIconSelfPack = {
  name: 'WorkflowCircle05',
  StrokeRounded: IconWorkflowCircle05StrokeRounded,
  DuotoneRounded: IconWorkflowCircle05DuotoneRounded,
  TwotoneRounded: IconWorkflowCircle05TwotoneRounded,
  SolidRounded: IconWorkflowCircle05SolidRounded,
  BulkRounded: IconWorkflowCircle05BulkRounded,
  StrokeSharp: IconWorkflowCircle05StrokeSharp,
  SolidSharp: IconWorkflowCircle05SolidSharp,
};