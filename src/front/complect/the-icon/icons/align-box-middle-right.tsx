import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 11C3 7.25027 3 5.3754 3.95491 4.06107C4.26331 3.6366 4.6366 3.26331 5.06107 2.95491C6.3754 2 8.25027 2 12 2C15.7497 2 17.6246 2 18.9389 2.95491C19.3634 3.26331 19.7367 3.6366 20.0451 4.06107C21 5.3754 21 7.25027 21 11V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3 18.6246 3 16.7497 3 13V11Z',
  d2: 'M17 9.5L9 9.5M17 14.5H14',
  d3: 'M16.4635 1.37373C15.3214 1.24999 13.8818 1.24999 12.0453 1.25H11.9547C10.1182 1.24999 8.67861 1.24999 7.53648 1.37373C6.37094 1.50001 5.42656 1.76232 4.62024 2.34815C4.13209 2.70281 3.70281 3.13209 3.34815 3.62024C2.76232 4.42656 2.50001 5.37094 2.37373 6.53648C2.24999 7.67861 2.24999 9.11822 2.25 10.9548V13.0453C2.24999 14.8818 2.24999 16.3214 2.37373 17.4635C2.50001 18.6291 2.76232 19.5734 3.34815 20.3798C3.70281 20.8679 4.13209 21.2972 4.62024 21.6518C5.42656 22.2377 6.37094 22.5 7.53648 22.6263C8.67859 22.75 10.1182 22.75 11.9547 22.75H12.0453C13.8818 22.75 15.3214 22.75 16.4635 22.6263C17.6291 22.5 18.5734 22.2377 19.3798 21.6518C19.8679 21.2972 20.2972 20.8679 20.6518 20.3798C21.2377 19.5734 21.5 18.6291 21.6263 17.4635C21.75 16.3214 21.75 14.8818 21.75 13.0453V10.9547C21.75 9.11824 21.75 7.67859 21.6263 6.53648C21.5 5.37094 21.2377 4.42656 20.6518 3.62024C20.2972 3.13209 19.8679 2.70281 19.3798 2.34815C18.5734 1.76232 17.6291 1.50001 16.4635 1.37373ZM8 9.5C8 8.94772 8.44772 8.5 9 8.5H17C17.5523 8.5 18 8.94772 18 9.5C18 10.0523 17.5523 10.5 17 10.5H9C8.44772 10.5 8 10.0523 8 9.5ZM13 14.5C13 13.9477 13.4477 13.5 14 13.5H17C17.5523 13.5 18 13.9477 18 14.5C18 15.0523 17.5523 15.5 17 15.5H14C13.4477 15.5 13 15.0523 13 14.5Z',
  d4: 'M12.0453 1.25C13.8818 1.24999 15.3214 1.24999 16.4635 1.37373C17.6291 1.50001 18.5734 1.76232 19.3798 2.34815C19.8679 2.70281 20.2972 3.13209 20.6518 3.62024C21.2377 4.42656 21.5 5.37094 21.6263 6.53648C21.75 7.67859 21.75 9.11824 21.75 10.9547V13.0453C21.75 14.8818 21.75 16.3214 21.6263 17.4635C21.5 18.6291 21.2377 19.5734 20.6518 20.3798C20.2972 20.8679 19.8679 21.2972 19.3798 21.6518C18.5734 22.2377 17.6291 22.5 16.4635 22.6263C15.3214 22.75 13.8818 22.75 12.0453 22.75H11.9547C10.1182 22.75 8.67859 22.75 7.53648 22.6263C6.37094 22.5 5.42656 22.2377 4.62024 21.6518C4.13209 21.2972 3.70281 20.8679 3.34815 20.3798C2.76232 19.5734 2.50001 18.6291 2.37373 17.4635C2.24999 16.3214 2.24999 14.8818 2.25 13.0453V10.9548C2.24999 9.11822 2.24999 7.67861 2.37373 6.53648C2.50001 5.37094 2.76232 4.42656 3.34815 3.62024C3.70281 3.13209 4.13209 2.70281 4.62024 2.34815C5.42656 1.76232 6.37094 1.50001 7.53648 1.37373C8.67861 1.24999 10.1182 1.24999 11.9547 1.25H12.0453Z',
  d5: 'M9 8.5C8.44772 8.5 8 8.94772 8 9.5C8 10.0523 8.44772 10.5 9 10.5H17C17.5523 10.5 18 10.0523 18 9.5C18 8.94772 17.5523 8.5 17 8.5H9ZM14 13.5C13.4477 13.5 13 13.9477 13 14.5C13 15.0523 13.4477 15.5 14 15.5H17C17.5523 15.5 18 15.0523 18 14.5C18 13.9477 17.5523 13.5 17 13.5H14Z',
  d6: 'M3 22L3 2L21 2.01302L21 22H3Z',
  d7: 'M17 9.5L7 9.5M17 14.5H12',
  d8: 'M2.99946 1.25635C2.58545 1.25665 2.25 1.59235 2.25 2.00635V21.9933C2.25 22.4075 2.58579 22.7433 3 22.7433L21 22.7498C21.4142 22.7498 21.75 22.414 21.75 21.9998V2.01282C21.75 1.59882 21.4145 1.26312 21.0005 1.26282L2.99946 1.25635ZM17 8.49988H7V10.4999H17V8.49988ZM17 13.4999H12V15.4999H17V13.4999Z',
} as const;

export const IconAlignBoxMiddleRightStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-box-middle-right-stroke-rounded IconAlignBoxMiddleRightStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAlignBoxMiddleRightDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-box-middle-right-duotone-rounded IconAlignBoxMiddleRightDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconAlignBoxMiddleRightTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-box-middle-right-twotone-rounded IconAlignBoxMiddleRightTwotoneRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconAlignBoxMiddleRightSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-box-middle-right-solid-rounded IconAlignBoxMiddleRightSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignBoxMiddleRightBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-box-middle-right-bulk-rounded IconAlignBoxMiddleRightBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignBoxMiddleRightStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-box-middle-right-stroke-sharp IconAlignBoxMiddleRightStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignBoxMiddleRightSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-box-middle-right-solid-sharp IconAlignBoxMiddleRightSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlignBoxMiddleRight: TheIconSelfPack = {
  name: 'AlignBoxMiddleRight',
  StrokeRounded: IconAlignBoxMiddleRightStrokeRounded,
  DuotoneRounded: IconAlignBoxMiddleRightDuotoneRounded,
  TwotoneRounded: IconAlignBoxMiddleRightTwotoneRounded,
  SolidRounded: IconAlignBoxMiddleRightSolidRounded,
  BulkRounded: IconAlignBoxMiddleRightBulkRounded,
  StrokeSharp: IconAlignBoxMiddleRightStrokeSharp,
  SolidSharp: IconAlignBoxMiddleRightSolidSharp,
};