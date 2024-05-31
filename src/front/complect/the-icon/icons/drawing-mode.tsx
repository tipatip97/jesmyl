import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16',
  d2: 'M16 9H15C12.1716 9 10.7574 9 9.87868 9.87868C9 10.7574 9 12.1716 9 15V16C9 18.8284 9 20.2426 9.87868 21.1213C10.7574 22 12.1716 22 15 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V15C22 12.1716 22 10.7574 21.1213 9.87868C20.2426 9 18.8284 9 16 9Z',
  d3: 'M9 3.1875C5.78984 3.1875 3.1875 5.78984 3.1875 9C3.1875 12.2102 5.78984 14.8125 9 14.8125C9.53503 14.8125 9.96875 15.2462 9.96875 15.7812C9.96875 16.3163 9.53503 16.75 9 16.75C4.71979 16.75 1.25 13.2802 1.25 9C1.25 4.71979 4.71979 1.25 9 1.25C13.2802 1.25 16.75 4.71979 16.75 9C16.75 9.53503 16.3163 9.96875 15.7812 9.96875C15.2462 9.96875 14.8125 9.53503 14.8125 9C14.8125 5.78984 12.2102 3.1875 9 3.1875Z',
  d4: 'M16.0549 8.25C17.4225 8.24998 18.5248 8.24996 19.3918 8.36652C20.2919 8.48754 21.0497 8.74643 21.6517 9.34835C22.2536 9.95027 22.5125 10.7081 22.6335 11.6082C22.75 12.4752 22.75 13.5775 22.75 14.9451V14.9451V16.0549V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H16.0549H14.9451H14.9451C13.5775 22.75 12.4752 22.75 11.6082 22.6335C10.7081 22.5125 9.95027 22.2536 9.34835 21.6517C8.74643 21.0497 8.48754 20.2919 8.36652 19.3918C8.24996 18.5248 8.24998 17.4225 8.25 16.0549V16.0549V14.9451V14.9451C8.24998 13.5775 8.24996 12.4752 8.36652 11.6082C8.48754 10.7081 8.74643 9.95027 9.34835 9.34835C9.95027 8.74643 10.7081 8.48754 11.6082 8.36652C12.4752 8.24996 13.5775 8.24998 14.9451 8.25H14.9451H16.0549H16.0549Z',
  d5: 'M3.1875 9C3.1875 5.78984 5.78984 3.1875 9 3.1875C11.956 3.1875 14.3967 5.39412 14.7646 8.25001C14.8242 8.25 14.8844 8.25 14.9451 8.25H16.0549C16.2819 8.25 16.5017 8.24999 16.7142 8.25052C16.3372 4.32197 13.0274 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.0274 4.32197 16.3372 8.25052 16.7142C8.24999 16.5017 8.25 16.2819 8.25 16.0549V14.9451C8.25 14.8844 8.25 14.8242 8.25001 14.7646C5.39412 14.3967 3.1875 11.956 3.1875 9Z',
  d6: 'M22 22L9 22L9 9L22 9V22Z',
  d7: 'M9 3.1875C5.78984 3.1875 3.1875 5.78984 3.1875 9C3.1875 12.2102 5.78984 14.8125 9 14.8125V16.75C4.71979 16.75 1.25 13.2802 1.25 9C1.25 4.71979 4.71979 1.25 9 1.25C13.2802 1.25 16.75 4.71979 16.75 9H14.8125C14.8125 5.78984 12.2102 3.1875 9 3.1875Z',
  d8: 'M9 8.25H22C22.1989 8.25 22.3897 8.32902 22.5303 8.46967C22.671 8.61032 22.75 8.80109 22.75 9V22C22.75 22.4142 22.4142 22.75 22 22.75L9 22.75C8.80109 22.75 8.61032 22.671 8.46967 22.5303C8.32902 22.3897 8.25 22.1989 8.25 22V9C8.25 8.58579 8.58579 8.25 9 8.25Z',
} as const;

export const IconDrawingModeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-mode-stroke-rounded IconDrawingModeStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDrawingModeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-mode-duotone-rounded IconDrawingModeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconDrawingModeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-mode-twotone-rounded IconDrawingModeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDrawingModeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-mode-solid-rounded IconDrawingModeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDrawingModeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-mode-bulk-rounded IconDrawingModeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDrawingModeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-mode-stroke-sharp IconDrawingModeStrokeSharp"
    >
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconDrawingModeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-mode-solid-sharp IconDrawingModeSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfDrawingMode: TheIconSelfPack = {
  name: 'DrawingMode',
  StrokeRounded: IconDrawingModeStrokeRounded,
  DuotoneRounded: IconDrawingModeDuotoneRounded,
  TwotoneRounded: IconDrawingModeTwotoneRounded,
  SolidRounded: IconDrawingModeSolidRounded,
  BulkRounded: IconDrawingModeBulkRounded,
  StrokeSharp: IconDrawingModeStrokeSharp,
  SolidSharp: IconDrawingModeSolidSharp,
};