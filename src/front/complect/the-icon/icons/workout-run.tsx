import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5Z',
  d2: 'M15 20.9999L14.3359 18.384C14.1161 17.5182 13.6615 16.7276 13.0207 16.0965L11.5 14.599M6 11.1526C7 9.18281 8.53767 8.04144 12 8.0005M12 8.0005C12.2186 7.99792 12.5444 7.99714 12.8698 7.9972C13.3747 7.99728 13.6271 7.99732 13.8282 8.09128C14.0293 8.18524 14.2356 8.4317 14.6482 8.92463C14.7664 9.06586 14.8878 9.1924 15 9.27657M12 8.0005L10.7309 9.95871C10.0332 11.0353 9.68429 11.5736 9.67069 12.1388C9.66463 12.3906 9.70617 12.6412 9.79313 12.8775C9.98834 13.4081 10.4922 13.8051 11.5 14.599M15 9.27657C16.1547 10.1425 17.9627 10.4912 20 8.19827M15 9.27657L11.5 14.599',
  d3: 'M4 17.7303L4.67822 17.8916C6.40663 18.3028 8.20324 17.5164 9 16',
  d4: 'M12.8697 7.99805C12.5442 7.99799 12.2184 7.99877 11.9998 8.00136L10.7307 9.95956C10.033 11.0362 9.6841 11.5745 9.6705 12.1397C9.66444 12.3914 9.70598 12.642 9.79294 12.8784C9.98815 13.409 10.492 13.8059 11.4998 14.5998L14.9998 9.27743C14.8876 9.19326 14.7662 9.06672 14.648 8.92548C14.2354 8.43256 14.0292 8.18609 13.828 8.09214C13.6269 7.99818 13.3745 7.99813 12.8697 7.99805Z',
  d5: 'M15 21.0028L14.3359 18.3868C14.1161 17.521 13.6615 16.7304 13.0207 16.0993L11.5 14.6018M6 11.1554C7 9.18562 8.53767 8.04425 12 8.00331M12 8.00331C12.2186 8.00073 12.5444 7.99995 12.8698 8C13.3747 8.00009 13.6271 8.00013 13.8282 8.09409C14.0293 8.18805 14.2356 8.43451 14.6482 8.92744C14.7664 9.06867 14.8878 9.19521 15 9.27938M12 8.00331L10.7309 9.96151C10.0332 11.0381 9.68429 11.5764 9.67069 12.1416C9.66463 12.3934 9.70617 12.644 9.79313 12.8803C9.98834 13.4109 10.4922 13.8079 11.5 14.6018M15 9.27938C16.1547 10.1453 17.9627 10.494 20 8.20108M15 9.27938L11.5 14.6018',
  d6: 'M15 21.0008L14.3359 18.3848C14.1161 17.5191 13.6615 16.7284 13.0207 16.0974L11.5 14.5998M6 11.1534C7 9.18366 8.53767 8.0423 12 8.00136M12 8.00136C12.2186 7.99877 12.5444 7.99799 12.8698 7.99805C13.3747 7.99813 13.6271 7.99818 13.8282 8.09214C14.0293 8.18609 14.2356 8.43256 14.6482 8.92548C14.7664 9.06672 14.8878 9.19326 15 9.27743M12 8.00136L10.7309 9.95956C10.0332 11.0362 9.68429 11.5745 9.67069 12.1397C9.66463 12.3914 9.70617 12.642 9.79313 12.8784C9.98834 13.409 10.4922 13.8059 11.5 14.5998M15 9.27743C16.1547 10.1433 17.9627 10.4921 20 8.19913M15 9.27743L11.5 14.5998',
  d7: 'M13.25 4.5C13.25 3.25736 14.2574 2.25 15.5 2.25C16.7426 2.25 17.75 3.25736 17.75 4.5C17.75 5.74264 16.7426 6.75 15.5 6.75C14.2574 6.75 13.25 5.74264 13.25 4.5Z',
  d8: 'M17.2756 10.9191C16.5463 10.9973 15.8869 10.8611 15.3183 10.6154L12.7866 14.4653L13.7224 15.3868C14.4923 16.1451 15.0401 17.0967 15.3051 18.1407L15.9693 20.7567C16.1052 21.292 15.7814 21.8361 15.2461 21.972C14.7108 22.1079 14.1666 21.7841 14.0307 21.2488L13.3666 18.6329C13.1921 17.9454 12.8307 17.3157 12.3191 16.8119L10.8378 15.3531C10.3676 14.9828 9.96 14.6614 9.64998 14.3643C9.31812 14.0463 9.02566 13.6905 8.85463 13.2256C8.7242 12.8711 8.66189 12.4952 8.67098 12.1176C8.68289 11.6224 8.84491 11.1912 9.05643 10.7831C9.2551 10.3999 9.70775 9.70148 10.0355 9.19584C9.4367 9.3217 8.96043 9.50347 8.57156 9.72496C7.84377 10.1395 7.32932 10.746 6.89167 11.608C6.64166 12.1005 6.03977 12.297 5.54732 12.047C5.05486 11.797 4.85832 11.1951 5.10833 10.7027C5.67068 9.59498 6.42506 8.64592 7.58169 7.98711C8.72172 7.33775 10.157 7.02503 11.9882 7.00338C12.2134 7.00072 12.5739 6.99995 12.8995 7.00001C13.1263 7.00002 13.3497 7.00003 13.5404 7.01485C13.7518 7.03128 13.9985 7.06989 14.2515 7.18808C14.5268 7.31669 14.7336 7.51426 14.8838 7.67226C15.0341 7.83044 15.2061 8.03602 15.3964 8.26338C15.4969 8.38345 15.579 8.46367 15.5999 8.47933C16.0319 8.80326 16.526 8.98799 17.0625 8.9305C17.5972 8.87319 18.3463 8.55677 19.2525 7.53687C19.6193 7.12401 20.2514 7.0867 20.6642 7.45354C21.0771 7.82037 21.1144 8.45244 20.7475 8.86529C19.6164 10.1383 18.4428 10.794 17.2756 10.9191Z',
  d9: 'M9.4651 15.1147C9.95401 15.3716 10.1421 15.9762 9.88523 16.4651C8.86494 18.407 6.59621 19.3758 4.44675 18.8644L3.76853 18.7031C3.23124 18.5752 2.89931 18.0361 3.02714 17.4988C3.15496 16.9615 3.69414 16.6295 4.23143 16.7574L4.90965 16.9187C6.21701 17.2298 7.54152 16.6258 8.11473 15.5348C8.37161 15.0459 8.97619 14.8578 9.4651 15.1147Z',
  d10: 'M15 21.0014L14.3359 18.3855C14.1161 17.5197 13.6615 16.7291 13.0207 16.098L11.5 14.6005M6 11.1541C7 9.18431 8.53767 8.04294 12 8.002M12 8.002L14 8.00122C14 8.00122 14.3597 8.79792 15 9.27807M12 8.002L10.7309 9.96021C10.0332 11.0368 9.68429 11.5751 9.67069 12.1403C9.66463 12.3921 9.70617 12.6427 9.79313 12.879C9.98834 13.4096 10.4922 13.8066 11.5 14.6005M15 9.27807C16.1547 10.144 17.9627 10.4927 20 8.19978M15 9.27807L11.5 14.6005',
  d11: 'M4 17.7304L4.67822 17.8917C6.40663 18.3029 8.20324 17.5166 9 16.0001',
  d12: 'M13.1732 4.75C13.1732 3.50736 14.1805 2.5 15.4232 2.5C16.6658 2.5 17.6732 3.50736 17.6732 4.75C17.6732 5.99264 16.6658 7 15.4232 7C14.1805 7 13.1732 5.99264 13.1732 4.75Z',
  d13: 'M13.9229 7.5011C14.2177 7.50098 14.4852 7.67359 14.6066 7.94221L14.6139 7.95742C14.6215 7.97294 14.6341 7.9981 14.6515 8.03084C14.6865 8.09671 14.74 8.19108 14.8102 8.2982C14.9557 8.52015 15.1499 8.76051 15.3731 8.92791C15.8414 9.2791 16.3971 9.49356 17.0123 9.42764C17.6261 9.36187 18.1949 9.00304 19.1292 7.95149L20.2505 8.94781C19.1475 10.1892 18.2603 10.8025 17.1721 10.9191C16.4102 11.0008 15.7275 10.8321 15.1509 10.5466L12.3881 14.748L13.4701 15.8135C14.2078 16.54 14.7322 17.4514 14.986 18.4508L15.6501 21.131L14.1962 21.5001L13.5321 18.8199C13.3463 18.0879 12.9615 17.4179 12.4176 16.8823L10.9265 15.4139C10.4485 15.0374 10.048 14.7217 9.7461 14.4324C9.42812 14.1277 9.16508 13.8028 9.01241 13.3879C8.89284 13.0629 8.83572 12.7183 8.84405 12.3721C8.85469 11.9301 8.99886 11.5378 9.20153 11.1468C9.39452 10.7744 9.67287 10.345 10.0051 9.83243L10.0051 9.83242L10.4787 9.10155C9.58544 9.22366 8.90614 9.45148 8.37098 9.7563C7.58958 10.2014 7.04514 10.8507 6.5919 11.7434L5.25439 11.0644C5.80116 9.98743 6.52555 9.08119 7.62857 8.45291C8.71915 7.83172 10.1081 7.52329 11.9143 7.50193L11.9229 7.50188L13.9229 7.5011Z',
  d14: 'M9.58707 16.5988C8.62266 18.4343 6.47196 19.3575 4.42776 18.8712L3.74954 18.7099L4.09672 17.2506L4.77494 17.4119C6.18756 17.748 7.63009 17.0985 8.25919 15.9011L9.58707 16.5988Z',
} as const;

export const IconWorkoutRunStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-run-stroke-rounded IconWorkoutRunStrokeRounded"
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

export const IconWorkoutRunDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-run-duotone-rounded IconWorkoutRunDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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

export const IconWorkoutRunTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-run-twotone-rounded IconWorkoutRunTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
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

export const IconWorkoutRunSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-run-solid-rounded IconWorkoutRunSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutRunBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-run-bulk-rounded IconWorkoutRunBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutRunStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-run-stroke-sharp IconWorkoutRunStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutRunSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-run-solid-sharp IconWorkoutRunSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfWorkoutRun: TheIconSelfPack = {
  name: 'WorkoutRun',
  StrokeRounded: IconWorkoutRunStrokeRounded,
  DuotoneRounded: IconWorkoutRunDuotoneRounded,
  TwotoneRounded: IconWorkoutRunTwotoneRounded,
  SolidRounded: IconWorkoutRunSolidRounded,
  BulkRounded: IconWorkoutRunBulkRounded,
  StrokeSharp: IconWorkoutRunStrokeSharp,
  SolidSharp: IconWorkoutRunSolidSharp,
};