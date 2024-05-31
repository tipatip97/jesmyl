import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.6 8.40033V12.9003C15.6 14.3915 16.8088 15.6003 18.3 15.6003C19.7912 15.6003 21 14.3915 21 12.9003V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.0265 21 15.8965 20.3302 17.4009 19.2M15.6 12.0003C15.6 13.9886 13.9882 15.6003 12 15.6003C10.0118 15.6003 8.4 13.9886 8.4 12.0003C8.4 10.0121 10.0118 8.40033 12 8.40033C13.9882 8.40033 15.6 10.0121 15.6 12.0003Z',
  d2: 'M12.0325 21.0005C17.0026 21.0005 21.0317 16.9714 21.0317 12.0012C21.0317 7.03106 17.0026 3.00195 12.0325 3.00195C7.06231 3.00195 3.0332 7.03106 3.0332 12.0012C3.0332 16.9714 7.06231 21.0005 12.0325 21.0005ZM12.032 15.5913C14.015 15.5913 15.6226 13.9838 15.6226 12.0007C15.6226 10.0177 14.015 8.41016 12.032 8.41016C10.049 8.41016 8.44141 10.0177 8.44141 12.0007C8.44141 13.9838 10.049 15.5913 12.032 15.5913Z',
  d3: 'M18.3 15.6003C19.7912 15.6003 21 14.3915 21 12.9003V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.0265 21 15.8965 20.3302 17.4009 19.2',
  d4: 'M15.6004 8.40039V12.9004C15.6004 14.3916 16.8092 15.6004 18.3004 15.6004M15.6004 12.0004C15.6004 13.9886 13.9886 15.6004 12.0004 15.6004C10.0122 15.6004 8.40039 13.9886 8.40039 12.0004C8.40039 10.0122 10.0122 8.40039 12.0004 8.40039C13.9886 8.40039 15.6004 10.0122 15.6004 12.0004Z',
  d5: 'M12 4.2C7.69218 4.2 4.2 7.69218 4.2 12C4.2 16.3078 7.69218 19.8 12 19.8C13.7574 19.8 15.3765 19.22 16.6802 18.2405C17.1107 17.917 17.7219 18.0038 18.0454 18.4343C18.3688 18.8649 18.282 19.4761 17.8515 19.7995C16.2217 21.024 14.1942 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12V12.8778C21.75 14.8702 20.1349 16.4853 18.1425 16.4853C16.9728 16.4853 15.9331 15.9286 15.274 15.0657C14.4556 15.9394 13.2916 16.4853 12 16.4853C9.523 16.4853 7.515 14.4773 7.515 12.0003C7.515 9.52332 9.523 7.51532 12 7.51532C12.9479 7.51532 13.8271 7.80938 14.5514 8.31126C14.6355 7.8583 15.0327 7.51532 15.51 7.51532C16.0485 7.51532 16.485 7.95184 16.485 8.49032V12.8778C16.485 13.7932 17.2271 14.5353 18.1425 14.5353C19.0579 14.5353 19.8 13.7932 19.8 12.8778V12C19.8 7.69218 16.3078 4.2 12 4.2ZM14.535 12.0003C14.535 10.6003 13.4 9.46532 12 9.46532C10.6 9.46532 9.465 10.6003 9.465 12.0003C9.465 13.4004 10.6 14.5353 12 14.5353C13.4 14.5353 14.535 13.4004 14.535 12.0003Z',
  d6: 'M12 4.2C7.69218 4.2 4.2 7.69218 4.2 12C4.2 16.3078 7.69218 19.8 12 19.8C13.7574 19.8 15.3765 19.22 16.6802 18.2405C17.1107 17.917 17.7219 18.0038 18.0454 18.4343C18.3688 18.8649 18.282 19.4761 17.8515 19.7995C16.2217 21.024 14.1942 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12V12.8778C21.75 14.8702 20.1349 16.4853 18.1425 16.4853V14.5353C19.0579 14.5353 19.8 13.7932 19.8 12.8778V12C19.8 7.69218 16.3078 4.2 12 4.2Z',
  d7: 'M15.2746 15.066C15.9337 15.9289 16.9734 16.4856 18.1431 16.4856V14.5356C17.2277 14.5356 16.4856 13.7935 16.4856 12.8781V8.49062C16.4856 7.95215 16.0491 7.51562 15.5106 7.51562C15.0333 7.51562 14.6361 7.85861 14.552 8.31156C13.8277 7.80969 12.9485 7.51562 12.0006 7.51562C9.52363 7.51562 7.51562 9.52363 7.51562 12.0006C7.51562 14.4776 9.52363 16.4856 12.0006 16.4856C13.2922 16.4856 14.4562 15.9397 15.2746 15.066ZM11.9998 9.46582C13.3999 9.46582 14.5348 10.6008 14.5348 12.0008C14.5348 13.4009 13.3999 14.5358 11.9998 14.5358C10.5998 14.5358 9.46484 13.4009 9.46484 12.0008C9.46484 10.6008 10.5998 9.46582 11.9998 9.46582Z',
  d8: 'M15.6 7.5V12.9003C15.6 14.3915 16.8088 15.6003 18.3 15.6003C19.7912 15.6003 21 14.3915 21 12.9003V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.0265 21 15.8965 20.3302 17.4009 19.2M15.6 12.0003C15.6 13.9886 13.9882 15.6003 12 15.6003C10.0118 15.6003 8.4 13.9886 8.4 12.0003C8.4 10.0121 10.0118 8.40033 12 8.40033C13.9882 8.40033 15.6 10.0121 15.6 12.0003Z',
  d9: 'M12 4.2C7.69218 4.2 4.2 7.69218 4.2 12C4.2 16.3078 7.69218 19.8 12 19.8C13.7574 19.8 15.3765 19.22 16.6802 18.2405L17.8515 19.7995C16.2217 21.024 14.1942 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12V12.8778C21.75 14.8702 20.1349 16.4853 18.1425 16.4853C16.9728 16.4853 15.9331 15.9286 15.274 15.0657C14.4556 15.9394 13.2916 16.4853 12 16.4853C9.523 16.4853 7.515 14.4773 7.515 12.0003C7.515 9.52332 9.523 7.51532 12 7.51532C12.9408 7.51532 13.8139 7.80497 14.535 8.29994V7.6125H16.485V12.8778C16.485 13.7932 17.2271 14.5353 18.1425 14.5353C19.0579 14.5353 19.8 13.7932 19.8 12.8778V12C19.8 7.69218 16.3078 4.2 12 4.2ZM14.535 12.0003C14.535 10.6003 13.4 9.46532 12 9.46532C10.6 9.46532 9.465 10.6003 9.465 12.0003C9.465 13.4004 10.6 14.5353 12 14.5353C13.4 14.5353 14.535 13.4004 14.535 12.0003Z',
} as const;

export const IconAtStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="at-stroke-rounded IconAtStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAtDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="at-duotone-rounded IconAtDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAtTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="at-twotone-rounded IconAtTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconAtSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="at-solid-rounded IconAtSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAtBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="at-bulk-rounded IconAtBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAtStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="at-stroke-sharp IconAtStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAtSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="at-solid-sharp IconAtSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAt: TheIconSelfPack = {
  name: 'At',
  StrokeRounded: IconAtStrokeRounded,
  DuotoneRounded: IconAtDuotoneRounded,
  TwotoneRounded: IconAtTwotoneRounded,
  SolidRounded: IconAtSolidRounded,
  BulkRounded: IconAtBulkRounded,
  StrokeSharp: IconAtStrokeSharp,
  SolidSharp: IconAtSolidSharp,
};