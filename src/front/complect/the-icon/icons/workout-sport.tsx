import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 4.5C16 5.32843 15.3284 6 14.5 6C13.6716 6 13 5.32843 13 4.5C13 3.67157 13.6716 3 14.5 3C15.3284 3 16 3.67157 16 4.5Z',
  d2: 'M5 12L6.47621 9.67428C6.73692 9.26354 6.86728 9.05817 7.03751 8.89128C7.20774 8.72438 7.41178 8.60193 7.81986 8.35701L8.74159 7.8038C9.60409 7.28615 10.0353 7.02732 10.5122 7.00203C10.989 6.97673 11.4429 7.18861 12.3507 7.61236L14.0457 8.40358C14.4189 8.57782 14.6055 8.66493 14.7688 8.78684C14.8846 8.87324 14.9912 8.97234 15.087 9.08246C15.2221 9.23784 15.3272 9.42177 15.5373 9.78963C15.9071 10.4369 16.092 10.7606 16.3527 10.9886C16.5367 11.1495 16.7467 11.2744 16.9728 11.3573C17.2931 11.4748 17.6524 11.4748 18.3711 11.4748H19',
  d3: 'M11.5 7.5L8 14M8 14L9.44682 16.0256C10.0445 16.8623 9.91027 18.016 9.13636 18.6932L6.5 21M8 14H11.5M17 18L14.6 14.8C14.2223 14.2964 13.6295 14 13 14H11.5M11.5 14L15 9',
  d4: 'M9.26573 11.6494L11.5 7.5L15 9L11.9761 13.3198C11.6777 13.7461 11.1901 14 10.6697 14C9.46314 14 8.69367 12.7118 9.26573 11.6494Z',
  d5: 'M12.2499 4.375C12.2499 3.13236 13.2573 2.125 14.4999 2.125C15.7426 2.125 16.7499 3.13236 16.7499 4.375C16.7499 5.61764 15.7426 6.625 14.4999 6.625C13.2573 6.625 12.2499 5.61764 12.2499 4.375Z',
  d6: 'M15.3671 7.8605C15.1194 7.67555 14.8432 7.54692 14.5318 7.40185L12.7371 6.5641C12.3146 6.36685 11.9381 6.19108 11.6075 6.07251C11.2483 5.94366 10.8765 5.8563 10.4593 5.87843C10.0423 5.90055 9.68169 6.02661 9.33761 6.19235C9.02056 6.34507 8.66328 6.55953 8.2616 6.80063L7.23732 7.41533L7.23732 7.41534C6.89567 7.61996 6.59423 7.80052 6.33751 8.05219C6.0827 8.302 5.8931 8.60127 5.67544 8.94484L5.67544 8.94484L4.15578 11.3391C3.85982 11.8054 3.99788 12.4233 4.46417 12.7193C4.93046 13.0152 5.54838 12.8772 5.84435 12.4109L7.32056 10.0852C7.60559 9.63611 7.66879 9.54785 7.73764 9.48035C7.80449 9.41482 7.88814 9.35735 8.33453 9.08943L9.25626 8.53623C9.55588 8.3564 9.77969 8.22259 9.96229 8.12135L7.11948 13.4009C6.9387 13.7366 6.96459 14.1459 7.18622 14.4562L8.63304 16.4817C8.9319 16.9001 8.86476 17.477 8.47781 17.8156L5.84145 20.1224C5.42581 20.4861 5.38369 21.1178 5.74738 21.5335C6.11106 21.9491 6.74282 21.9912 7.15846 21.6275L9.79482 19.3207C10.9557 18.305 11.1571 16.5744 10.2605 15.3193L9.94314 14.8749H13C13.3147 14.8749 13.6111 15.0231 13.8 15.275L16.2 18.4749C16.5313 18.9168 17.1581 19.0063 17.6 18.6749C18.0418 18.3436 18.1313 17.7168 17.8 17.2749L15.4 14.0749C14.9146 13.4278 14.1924 13.0087 13.4017 12.9019L14.9633 10.6712C15.1831 11.0402 15.4042 11.3625 15.6945 11.6164C15.9694 11.8567 16.2854 12.0453 16.6283 12.1711C17.1203 12.3516 17.6528 12.3508 18.2455 12.35L19.0001 12.3498C19.5524 12.3498 20.0001 11.9021 20.0001 11.3498C20.0001 10.7976 19.5524 10.3498 19.0001 10.3498H18.3712C17.5773 10.3498 17.4314 10.3354 17.3173 10.2935C17.2082 10.2535 17.1042 10.1922 17.0111 10.1108C16.9072 10.02 16.7768 9.81818 16.3707 9.10724C16.1952 8.79952 16.0432 8.53311 15.8417 8.30129C15.6996 8.1379 15.5406 7.99001 15.3671 7.8605Z',
  d7: 'M5 11.9998L7.03751 8.49988L11.5 6.99988L15 8.9998L16.5 11.9999L19 11.4746',
  d8: 'M11.5 7.5L8 14L10.5 17.5L6.5 21M17 18L14 14H11.5M11.5 14L15 9M11.5 14H8.51024',
  d9: 'M12.3982 4.50012C12.3982 3.25748 13.4056 2.25012 14.6482 2.25012C15.8908 2.25012 16.8982 3.25748 16.8982 4.50012C16.8982 5.74276 15.8908 6.75012 14.6482 6.75012C13.4056 6.75012 12.3982 5.74276 12.3982 4.50012Z',
  d10: 'M10.4161 8.20539L7.4873 13.6445C7.35171 13.8963 7.37113 14.2033 7.53735 14.436L9.64241 17.3831L6.1543 20.6211L7.14205 21.75L11.1415 18.0645C11.4317 17.8106 11.4821 17.378 11.258 17.0642L9.60504 14.7501H13.7727L16.5477 18.4501L17.7477 17.5501L14.7477 13.5501C14.606 13.3613 14.3837 13.2501 14.1477 13.2501H13.0881L15.0403 10.4613L15.9773 12.3354C16.1298 12.6403 16.4687 12.8041 16.8024 12.734L19.5 12.0111L19.1916 10.5432L17.0602 11.1471L15.819 8.66452C15.7528 8.53208 15.6488 8.4222 15.5203 8.34874L12.0203 6.34881C11.8344 6.24263 11.6121 6.22089 11.4092 6.28909L6.94671 7.78909C6.77439 7.84701 6.62897 7.96556 6.53751 8.12267L4.5 11.6226L5.79633 12.3773L7.69196 9.12106L10.4161 8.20539Z',
} as const;

export const IconWorkoutSportStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-sport-stroke-rounded IconWorkoutSportStrokeRounded"
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

export const IconWorkoutSportDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-sport-duotone-rounded IconWorkoutSportDuotoneRounded"
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

export const IconWorkoutSportTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-sport-twotone-rounded IconWorkoutSportTwotoneRounded"
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

export const IconWorkoutSportSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-sport-solid-rounded IconWorkoutSportSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutSportBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-sport-bulk-rounded IconWorkoutSportBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutSportStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-sport-stroke-sharp IconWorkoutSportStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconWorkoutSportSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-sport-solid-sharp IconWorkoutSportSolidSharp"
    >
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

export const iconPackOfWorkoutSport: TheIconSelfPack = {
  name: 'WorkoutSport',
  StrokeRounded: IconWorkoutSportStrokeRounded,
  DuotoneRounded: IconWorkoutSportDuotoneRounded,
  TwotoneRounded: IconWorkoutSportTwotoneRounded,
  SolidRounded: IconWorkoutSportSolidRounded,
  BulkRounded: IconWorkoutSportBulkRounded,
  StrokeSharp: IconWorkoutSportStrokeSharp,
  SolidSharp: IconWorkoutSportSolidSharp,
};