import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 5C20.6068 4.59544 19.5602 3 19 3C18.4398 3 17.3932 4.59544 17 5',
  d2: 'M5 17C4.59544 17.3932 3 18.4398 3 19C3 19.5602 4.59544 20.6068 5 21',
  d3: 'M19 12H18C15.1716 12 13.7574 12 12.8787 12.8787C12 13.7574 12 15.1716 12 18V19',
  d4: 'M3 19H13C15.8284 19 17.2426 19 18.1213 18.1479C19 17.2959 19 15.9245 19 13.1818V3',
  d5: 'M12.8787 12.8787C13.7574 12 15.1716 12 18 12C18.5523 12 19 12.4477 19 13L19 13.1818V13.1818C19 15.9245 19 17.2959 18.1213 18.1479C17.2426 19 15.8284 19 13 19C12.4477 19 12 18.5523 12 18C12 15.1716 12 13.7574 12.8787 12.8787Z',
  d6: 'M16.4622 4.47726C16.1735 4.77428 16.1802 5.24911 16.4773 5.53781C16.623 5.67949 16.8116 5.75002 17 5.75H17.9997V11.25C16.6321 11.25 15.4752 11.25 14.6082 11.3665C13.7081 11.4875 12.9503 11.7464 12.3484 12.3484C11.7464 12.9503 11.4875 13.7081 11.3665 14.6082C11.25 15.4752 11.25 16.6324 11.25 18H5.75V17C5.75002 16.8116 5.67949 16.623 5.53781 16.4773C5.24911 16.1802 4.77428 16.1735 4.47726 16.4622C4.28386 16.614 3.58257 17.1795 3.36344 17.3652C3.12906 17.5638 2.88028 17.7905 2.68463 18.0202C2.58655 18.1353 2.48655 18.2688 2.40808 18.4155C2.33279 18.5562 2.25 18.7592 2.25 19C2.25 19.2408 2.33279 19.4438 2.40808 19.5845C2.48655 19.7312 2.58655 19.8647 2.68463 19.9798C2.88028 20.2095 3.12906 20.4362 3.36344 20.6348C3.58259 20.8205 4.28386 21.386 4.47726 21.5378C4.77428 21.8265 5.24911 21.8198 5.53781 21.5227C5.67949 21.377 5.75002 21.1884 5.75 21V20H13.0685H13.0685C14.4241 20 15.539 20 16.4208 19.8851C17.3431 19.7648 18.16 19.5031 18.8172 18.8658C19.4786 18.2244 19.7544 17.42 19.8804 16.5112C19.9998 15.6501 19.9997 14.5638 19.9997 13.2539V5.75H20.9994C21.188 5.75016 21.3768 5.67963 21.5227 5.53781C21.8198 5.24911 21.8265 4.77428 21.5378 4.47726C21.386 4.28388 20.8205 3.58255 20.6348 3.36344C20.4362 3.12906 20.2095 2.88028 19.9798 2.68463C19.8647 2.58655 19.7312 2.48655 19.5845 2.40808C19.4438 2.33279 19.2408 2.25 19 2.25C18.7592 2.25 18.5562 2.33279 18.4155 2.40808C18.2688 2.48655 18.1353 2.58655 18.0202 2.68463C17.7905 2.88028 17.5638 3.12906 17.3652 3.36344C17.1795 3.58259 16.614 4.28385 16.4622 4.47726Z',
  d7: 'M16.4622 4.47726C16.1735 4.77428 16.1802 5.24911 16.4773 5.53781C16.623 5.67949 16.8116 5.75002 17 5.75H17.9997V14.0136C17.9997 15.902 17.9997 16.8463 17.4128 17.4323C16.8258 18.0182 15.8816 18.0167 13.9931 18.0136L5.75 18V17C5.75002 16.8116 5.67949 16.623 5.53781 16.4773C5.24911 16.1802 4.77428 16.1735 4.47726 16.4622C4.28386 16.614 3.58257 17.1795 3.36344 17.3652C3.12906 17.5638 2.88028 17.7905 2.68463 18.0202C2.58655 18.1353 2.48655 18.2688 2.40808 18.4155C2.33279 18.5562 2.25 18.7592 2.25 19C2.25 19.2408 2.33279 19.4438 2.40808 19.5845C2.48655 19.7312 2.58655 19.8647 2.68463 19.9798C2.88028 20.2095 3.12906 20.4362 3.36344 20.6348C3.58259 20.8205 4.28386 21.386 4.47726 21.5378C4.77428 21.8265 5.24911 21.8198 5.53781 21.5227C5.67949 21.377 5.75002 21.1884 5.75 21V20H13.0685C14.4241 20 15.539 20 16.4208 19.8851C17.3431 19.7648 18.16 19.5031 18.8172 18.8658C19.4786 18.2244 19.7544 17.42 19.8804 16.5112C19.9998 15.6501 19.9997 14.5638 19.9997 13.2539V5.75H20.9994C21.188 5.75016 21.3768 5.67963 21.5227 5.53781C21.8198 5.24911 21.8265 4.77428 21.5378 4.47726C21.386 4.28388 20.8205 3.58255 20.6348 3.36344C20.4362 3.12906 20.2095 2.88028 19.9798 2.68463C19.8647 2.58655 19.7312 2.48655 19.5845 2.40808C19.4438 2.33279 19.2408 2.25 19 2.25C18.7592 2.25 18.5562 2.33279 18.4155 2.40808C18.2688 2.48655 18.1353 2.58655 18.0202 2.68463C17.7905 2.88028 17.5638 3.12906 17.3652 3.36344C17.1795 3.58259 16.614 4.28385 16.4622 4.47726Z',
  d8: 'M13.9931 18.0136C15.8816 18.0167 16.8258 18.0182 17.4128 17.4323C17.9997 16.8463 17.9997 15.902 17.9997 14.0136V11.25C16.6321 11.25 15.4752 11.25 14.6082 11.3665C13.7081 11.4875 12.9503 11.7464 12.3484 12.3484C11.7464 12.9503 11.4875 13.7081 11.3665 14.6083C11.25 15.4752 11.25 16.6324 11.25 18L13.9931 18.0136Z',
  d9: 'M18 12H12V18',
  d10: 'M21 6L18 3L15 6M6 15L3 18L6 21M18 3.62861V18H3.76512',
  d11: 'M22 5.70711L18.2929 2L14.5858 5.70711L16 7.12132L17.2929 5.82843V11H11V17.2929H5.82843L7.12132 16L5.70711 14.5858L2 18.2929L5.70711 22L7.12132 20.5858L5.82843 19.2929H19.2929V5.82843L20.5858 7.12132L22 5.70711Z',
} as const;

export const IconLeftAngleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-angle-stroke-rounded IconLeftAngleStrokeRounded"
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

export const IconLeftAngleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-angle-duotone-rounded IconLeftAngleDuotoneRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d5} 
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

export const IconLeftAngleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-angle-twotone-rounded IconLeftAngleTwotoneRounded"
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

export const IconLeftAngleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-angle-solid-rounded IconLeftAngleSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLeftAngleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-angle-bulk-rounded IconLeftAngleBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLeftAngleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-angle-stroke-sharp IconLeftAngleStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLeftAngleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-angle-solid-sharp IconLeftAngleSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLeftAngle: TheIconSelfPack = {
  name: 'LeftAngle',
  StrokeRounded: IconLeftAngleStrokeRounded,
  DuotoneRounded: IconLeftAngleDuotoneRounded,
  TwotoneRounded: IconLeftAngleTwotoneRounded,
  SolidRounded: IconLeftAngleSolidRounded,
  BulkRounded: IconLeftAngleBulkRounded,
  StrokeSharp: IconLeftAngleStrokeSharp,
  SolidSharp: IconLeftAngleSolidSharp,
};