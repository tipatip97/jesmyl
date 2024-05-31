import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 2H14C15.8152 2 16 2.92494 16 4.5C16 6.07506 15.8152 7 14 7H10C8.1848 7 8 6.07506 8 4.5C8 2.92494 8.1848 2 10 2Z',
  d2: 'M2 19.5C2 18.3215 2 17.7322 2.36612 17.3661C2.73223 17 3.32149 17 4.5 17C5.67851 17 6.26777 17 6.63388 17.3661C7 17.7322 7 18.3215 7 19.5C7 20.6785 7 21.2678 6.63388 21.6339C6.26777 22 5.67851 22 4.5 22C3.32149 22 2.73223 22 2.36612 21.6339C2 21.2678 2 20.6785 2 19.5Z',
  d3: 'M17 19.5C17 18.3215 17 17.7322 17.3661 17.3661C17.7322 17 18.3215 17 19.5 17C20.6785 17 21.2678 17 21.6339 17.3661C22 17.7322 22 18.3215 22 19.5C22 20.6785 22 21.2678 21.6339 21.6339C21.2678 22 20.6785 22 19.5 22C18.3215 22 17.7322 22 17.3661 21.6339C17 21.2678 17 20.6785 17 19.5Z',
  d4: 'M14.5 12.5C14.5 13.8807 13.3807 15 12 15C10.6193 15 9.5 13.8807 9.5 12.5C9.5 11.1193 10.6193 10 12 10C13.3807 10 14.5 11.1193 14.5 12.5Z',
  d5: 'M12 7V10M9.5 13L4.5 17M14.5 13L19.5 17',
  d6: 'M12 6C12.5523 6 13 6.44772 13 7V10C13 10.5523 12.5523 11 12 11C11.4478 11 11 10.5523 11 10V7C11 6.44772 11.4478 6 12 6ZM10.2809 12.3753C10.6259 12.8066 10.556 13.4359 10.1247 13.7809L5.12473 17.7809C4.69347 18.1259 4.06418 18.056 3.71917 17.6247C3.37416 17.1934 3.44408 16.5641 3.87534 16.2191L8.87534 12.2191C9.3066 11.8741 9.9359 11.944 10.2809 12.3753ZM13.7192 12.3753C14.0642 11.944 14.6935 11.8741 15.1247 12.2191L20.1247 16.2191C20.556 16.5641 20.6259 17.1934 20.2809 17.6247C19.9359 18.056 19.3066 18.1259 18.8753 17.7809L13.8753 13.7809C13.4441 13.4359 13.3742 12.8066 13.7192 12.3753Z',
  d7: 'M7.68699 2.256C8.16023 1.51414 8.97917 1.25 10 1.25H14C15.0208 1.25 15.8398 1.51414 16.313 2.256C16.7214 2.89623 16.75 3.74489 16.75 4.5C16.75 5.25511 16.7214 6.10377 16.313 6.744C15.8398 7.48586 15.0208 7.75 14 7.75H10C8.97917 7.75 8.16023 7.48586 7.68699 6.744C7.27859 6.10377 7.25 5.25511 7.25 4.5C7.25 3.74489 7.27859 2.89623 7.68699 2.256Z',
  d8: 'M4.45257 16.25L4.50001 16.25L4.54744 16.25L4.54744 16.25C5.09599 16.25 5.58077 16.2499 5.97153 16.3025C6.39509 16.3594 6.81858 16.4902 7.16422 16.8358C7.50985 17.1814 7.64061 17.6049 7.69755 18.0285C7.75009 18.4192 7.75005 18.904 7.75001 19.4525V19.4526L7.75 19.5L7.75001 19.5474V19.5475C7.75005 20.096 7.75009 20.5808 7.69755 20.9715C7.64061 21.3951 7.50985 21.8186 7.16422 22.1642C6.81858 22.5099 6.39509 22.6406 5.97153 22.6976C5.58078 22.7501 5.096 22.7501 4.54745 22.75H4.54743L4.50001 22.75L4.45258 22.75H4.45256C3.90401 22.7501 3.41923 22.7501 3.02848 22.6976C2.60492 22.6406 2.18143 22.5099 1.83579 22.1642C1.49016 21.8186 1.3594 21.3951 1.30246 20.9715C1.24992 20.5808 1.24996 20.096 1.25 19.5474L1.25 19.5L1.25 19.4526L1.25 19.4526C1.24996 18.904 1.24992 18.4192 1.30246 18.0285C1.3594 17.6049 1.49016 17.1814 1.83579 16.8358C2.18143 16.4902 2.60492 16.3594 3.02848 16.3025C3.41924 16.2499 3.90402 16.25 4.45257 16.25Z',
  d9: 'M19.4526 16.25L19.5 16.25L19.5474 16.25L19.5474 16.25C20.096 16.25 20.5808 16.2499 20.9715 16.3025C21.3951 16.3594 21.8186 16.4902 22.1642 16.8358C22.5099 17.1814 22.6406 17.6049 22.6976 18.0285C22.7501 18.4192 22.7501 18.904 22.75 19.4525V19.4526L22.75 19.5L22.75 19.5474V19.5475C22.7501 20.096 22.7501 20.5808 22.6976 20.9715C22.6406 21.3951 22.5099 21.8186 22.1642 22.1642C21.8186 22.5099 21.3951 22.6406 20.9715 22.6976C20.5808 22.7501 20.096 22.7501 19.5475 22.75H19.5474L19.5 22.75L19.4526 22.75H19.4526C18.904 22.7501 18.4192 22.7501 18.0285 22.6976C17.6049 22.6406 17.1814 22.5099 16.8358 22.1642C16.4902 21.8186 16.3594 21.3951 16.3025 20.9715C16.2499 20.5808 16.25 20.096 16.25 19.5474L16.25 19.5L16.25 19.4526L16.25 19.4526C16.25 18.904 16.2499 18.4192 16.3025 18.0285C16.3594 17.6049 16.4902 17.1814 16.8358 16.8358C17.1814 16.4902 17.6049 16.3594 18.0285 16.3025C18.4192 16.2499 18.904 16.25 19.4526 16.25Z',
  d10: 'M8.75 12.5C8.75 10.7051 10.2051 9.25 12 9.25C13.7949 9.25 15.25 10.7051 15.25 12.5C15.25 14.2949 13.7949 15.75 12 15.75C10.2051 15.75 8.75 14.2949 8.75 12.5Z',
  d11: 'M11.001 7.75V9.40674C11.316 9.30498 11.6521 9.25 12.001 9.25C12.3499 9.25 12.686 9.30498 13.001 9.40676V7.75H11.001Z',
  d12: 'M14.6425 14.3938C15.0255 13.8606 15.251 13.2066 15.251 12.5C15.251 12.438 15.2492 12.3764 15.2458 12.3152L20.1257 16.2191C20.1395 16.2302 20.153 16.2416 20.1661 16.2532C19.9713 16.25 19.7648 16.25 19.5484 16.25H19.4535C18.905 16.25 18.4202 16.2499 18.0294 16.3025C17.7776 16.3363 17.5257 16.3963 17.2902 16.512L14.6425 14.3938Z',
  d13: 'M8.75612 12.3153C8.7527 12.3764 8.75096 12.438 8.75096 12.5C8.75096 13.2066 8.97648 13.8606 9.35947 14.3938L6.71173 16.512C6.47625 16.3963 6.22438 16.3363 5.97249 16.3025C5.58173 16.2499 5.09695 16.25 4.5484 16.25H4.45354C4.23713 16.25 4.03064 16.25 3.83594 16.2532C3.84902 16.2416 3.86247 16.2302 3.8763 16.2191L8.75612 12.3153Z',
  d14: 'M7.687 2.256C8.16024 1.51414 8.97917 1.25 10 1.25H14C15.0208 1.25 15.8398 1.51414 16.313 2.256C16.7214 2.89623 16.75 3.74489 16.75 4.5C16.75 5.25511 16.7214 6.10377 16.313 6.744C15.8398 7.48586 15.0208 7.75 14 7.75H10C8.97917 7.75 8.16024 7.48586 7.687 6.744C7.27859 6.10377 7.25 5.25511 7.25 4.5C7.25 3.74489 7.27859 2.89623 7.687 2.256Z',
  d15: 'M4.45257 16.25H4.54744C5.09599 16.25 5.58077 16.2499 5.97153 16.3025C6.39509 16.3594 6.81858 16.4902 7.16422 16.8358C7.50985 17.1814 7.64061 17.6049 7.69755 18.0285C7.75009 18.4192 7.75005 18.904 7.75001 19.4526V19.5474C7.75005 20.096 7.75009 20.5808 7.69755 20.9715C7.64061 21.3951 7.50985 21.8186 7.16422 22.1642C6.81858 22.5098 6.39509 22.6406 5.97153 22.6975C5.58078 22.7501 5.09598 22.75 4.54743 22.75H4.45258C3.90403 22.75 3.41923 22.7501 3.02848 22.6975C2.60492 22.6406 2.18143 22.5098 1.83579 22.1642C1.49016 21.8186 1.3594 21.3951 1.30246 20.9715C1.24992 20.5808 1.24996 20.096 1.25 19.5474V19.4526C1.24996 18.904 1.24992 18.4192 1.30246 18.0285C1.3594 17.6049 1.49016 17.1814 1.83579 16.8358C2.18143 16.4902 2.60492 16.3594 3.02848 16.3025C3.41924 16.2499 3.90402 16.25 4.45257 16.25Z',
  d16: 'M19.4526 16.25H19.5474C20.096 16.25 20.5808 16.2499 20.9715 16.3025C21.3951 16.3594 21.8186 16.4902 22.1642 16.8358C22.5099 17.1814 22.6406 17.6049 22.6976 18.0285C22.7501 18.4192 22.75 18.904 22.75 19.4526V19.5474C22.75 20.096 22.7501 20.5808 22.6976 20.9715C22.6406 21.3951 22.5099 21.8186 22.1642 22.1642C21.8186 22.5098 21.3951 22.6406 20.9715 22.6975C20.5808 22.7501 20.096 22.75 19.5474 22.75H19.4526C18.904 22.75 18.4192 22.7501 18.0285 22.6975C17.6049 22.6406 17.1814 22.5098 16.8358 22.1642C16.4902 21.8186 16.3594 21.3951 16.3025 20.9715C16.2499 20.5808 16.25 20.096 16.25 19.5474V19.4526C16.25 18.904 16.2499 18.4192 16.3025 18.0285C16.3594 17.6049 16.4902 17.1814 16.8358 16.8358C17.1814 16.4902 17.6049 16.3594 18.0285 16.3025C18.4192 16.2499 18.904 16.25 19.4526 16.25Z',
  d17: 'M16 7V2H8V7H16Z',
  d18: 'M7 22V17H2V22H7Z',
  d19: 'M22 22V17H17V22H22Z',
  d20: 'M7.25 2C7.25 1.58579 7.58579 1.25 8 1.25H16C16.4142 1.25 16.75 1.58579 16.75 2V7C16.75 7.41421 16.4142 7.75 16 7.75H8C7.58579 7.75 7.25 7.41421 7.25 7V2Z',
  d21: 'M1.25 17C1.25 16.5858 1.58579 16.25 2 16.25H7C7.41421 16.25 7.75 16.5858 7.75 17V22C7.75 22.4142 7.41421 22.75 7 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V17Z',
  d22: 'M16.25 17C16.25 16.5858 16.5858 16.25 17 16.25H22C22.4142 16.25 22.75 16.5858 22.75 17V22C22.75 22.4142 22.4142 22.75 22 22.75H17C16.5858 22.75 16.25 22.4142 16.25 22V17Z',
  d23: 'M10.9999 10V7H12.9999V10H10.9999ZM3.87524 16.2191L8.87524 12.2191L10.1246 13.7809L5.12463 17.7809L3.87524 16.2191ZM18.8752 17.7809L13.8752 13.7809L15.1246 12.2191L20.1246 16.2191L18.8752 17.7809Z',
} as const;

export const IconHierarchySquare06StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-06-stroke-rounded IconHierarchySquare06StrokeRounded"
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

export const IconHierarchySquare06DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-06-duotone-rounded IconHierarchySquare06DuotoneRounded"
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

export const IconHierarchySquare06TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-06-twotone-rounded IconHierarchySquare06TwotoneRounded"
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

export const IconHierarchySquare06SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-06-solid-rounded IconHierarchySquare06SolidRounded"
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

export const IconHierarchySquare06BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-06-bulk-rounded IconHierarchySquare06BulkRounded"
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
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconHierarchySquare06StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-06-stroke-sharp IconHierarchySquare06StrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
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
    </TheIconWrapper>
  );
};

export const IconHierarchySquare06SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-06-solid-sharp IconHierarchySquare06SolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHierarchySquare06: TheIconSelfPack = {
  name: 'HierarchySquare06',
  StrokeRounded: IconHierarchySquare06StrokeRounded,
  DuotoneRounded: IconHierarchySquare06DuotoneRounded,
  TwotoneRounded: IconHierarchySquare06TwotoneRounded,
  SolidRounded: IconHierarchySquare06SolidRounded,
  BulkRounded: IconHierarchySquare06BulkRounded,
  StrokeSharp: IconHierarchySquare06StrokeSharp,
  SolidSharp: IconHierarchySquare06SolidSharp,
};