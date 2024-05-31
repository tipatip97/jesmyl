import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 8V12L13.5 13.5',
  d2: 'M19.5454 16.4534C21.1818 17.337 22 17.7789 22 18.5C22 19.2211 21.1818 19.663 19.5454 20.5466L18.4311 21.1484C17.1744 21.827 16.5461 22.1663 16.2439 21.9196C15.504 21.3154 16.6567 19.7561 16.9403 19.2037C17.2277 18.644 17.2225 18.3459 16.9403 17.7963C16.6567 17.2439 15.504 15.6846 16.2439 15.0804C16.5461 14.8337 17.1744 15.173 18.4311 15.8516L19.5454 16.4534Z',
  d3: 'M13.0261 21.948C12.6888 21.9824 12.3464 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6849 21.9311 13.3538 21.8 14',
  d4: 'M20.632 17.0519C21.5015 15.5693 22 13.8429 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.4284 22 14.7868 21.7005 16.016 21.1609C16.0973 20.6317 16.4723 20.0022 16.7354 19.5607C16.8196 19.4193 16.8924 19.2971 16.9403 19.2037C17.2277 18.644 17.2225 18.3459 16.9403 17.7963C16.8924 17.7029 16.8196 17.5807 16.7354 17.4393C16.3211 16.744 15.6291 15.5824 16.2439 15.0804C16.5461 14.8337 17.1744 15.173 18.4311 15.8516L19.5454 16.4534C19.9602 16.6773 20.3223 16.8729 20.632 17.0519Z',
  d5: 'M12 7C12.5523 7 13 7.44772 13 8V11.5858L14.2071 12.7929C14.5976 13.1834 14.5976 13.8166 14.2071 14.2071C13.8166 14.5976 13.1834 14.5976 12.7929 14.2071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V8C11 7.44772 11.4477 7 12 7Z',
  d6: 'M18.7423 15.1672L19.9573 15.8234C20.728 16.2395 21.3843 16.5939 21.8403 16.9406C22.3187 17.3044 22.75 17.7892 22.75 18.4999C22.75 19.2106 22.3187 19.6955 21.8403 20.0593C21.3843 20.406 20.728 20.7603 19.9573 21.1765L19.9573 21.1765L18.7423 21.8326C18.1525 22.1512 17.6488 22.4232 17.2547 22.5786C17.0514 22.6588 16.8202 22.732 16.5841 22.7471C16.3297 22.7633 16.0298 22.713 15.7695 22.5005C15.3535 22.1608 15.237 21.6936 15.2511 21.2916C15.2644 20.9141 15.3901 20.5445 15.5199 20.2445C15.6538 19.9348 15.8198 19.638 15.9603 19.3976C16.0173 19.3001 16.0666 19.2175 16.109 19.1463L16.109 19.1463C16.1827 19.0227 16.2359 18.9336 16.2731 18.8611C16.3956 18.6225 16.404 18.5351 16.4039 18.4984C16.4038 18.4611 16.3946 18.3754 16.2731 18.1387C16.2359 18.0663 16.1827 17.9771 16.109 17.8536L16.109 17.8535C16.0666 17.7824 16.0173 17.6997 15.9603 17.6023C15.8198 17.3619 15.6538 17.065 15.5199 16.7554C15.3901 16.4554 15.2644 16.0857 15.2511 15.7083C15.237 15.3063 15.3535 14.8391 15.7695 14.4994C16.0298 14.2869 16.3297 14.2366 16.5841 14.2528C16.8202 14.2679 17.0514 14.341 17.2547 14.4212C17.6488 14.5767 18.1525 14.8487 18.7423 15.1672L18.7423 15.1672Z',
  d7: 'M12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C12.3054 20.7955 12.6069 20.7799 12.9037 20.7497C13.4406 20.6949 13.9203 21.0859 13.975 21.6228C14.0298 22.1598 13.6388 22.6394 13.1019 22.6941C12.7393 22.7311 12.3717 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 12.735 22.6761 13.4538 22.535 14.149C22.4276 14.6779 21.9118 15.0197 21.3828 14.9123C20.8539 14.8049 20.5121 14.2891 20.6195 13.7601C20.7348 13.1922 20.7955 12.6037 20.7955 12C20.7955 7.1424 16.8576 3.20455 12 3.20455Z',
  d8: 'M11.9805 6.99951V11.9995L13.9769 13.9995',
  d9: 'M13.0045 21.9475C12.6678 21.9819 12.326 21.9995 11.9802 21.9995C6.46722 21.9995 1.99805 17.5223 1.99805 11.9995C1.99805 6.47666 6.46722 1.99951 11.9802 1.99951C17.4932 1.99951 21.9624 6.47666 21.9624 11.9995C21.9624 12.6844 21.8936 13.3533 21.7628 13.9995',
  d10: 'M21.9521 18.427C22.0186 18.4655 22.0186 18.5616 21.9522 18.6002L16.1179 21.9866C16.0389 22.0325 15.945 21.9569 15.9727 21.8698L17.0399 18.5135L15.9728 15.1694C15.945 15.0823 16.0388 15.0066 16.1178 15.0523L21.9521 18.427Z',
  d11: 'M11 7H13V11.5858L14.7071 13.2929L13.2929 14.7071L11 12.4142V7Z',
  d12: 'M15.5399 14.4077C15.7817 14.2199 16.1134 14.1979 16.3779 14.3522L22.3779 17.8522C22.6084 17.9866 22.75 18.2333 22.75 18.5C22.75 18.7668 22.6084 19.0134 22.3779 19.1478L16.3779 22.6478C16.1134 22.8021 15.7817 22.7801 15.5399 22.5923C15.2981 22.4044 15.1948 22.0884 15.2789 21.794L16.22 18.5L15.2789 15.206C15.1948 14.9116 15.2981 14.5956 15.5399 14.4077Z',
  d13: 'M12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C12.3054 20.7955 12.6069 20.7799 12.9037 20.7497L13.1019 22.6941C12.7393 22.7311 12.3717 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 12.735 22.6761 13.4538 22.535 14.149L20.6195 13.7601C20.7348 13.1922 20.7955 12.6037 20.7955 12C20.7955 7.1424 16.8576 3.20455 12 3.20455Z',
} as const;

export const IconTimeScheduleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-schedule-stroke-rounded IconTimeScheduleStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTimeScheduleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-schedule-duotone-rounded IconTimeScheduleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTimeScheduleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-schedule-twotone-rounded IconTimeScheduleTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTimeScheduleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-schedule-solid-rounded IconTimeScheduleSolidRounded"
    >
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconTimeScheduleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-schedule-bulk-rounded IconTimeScheduleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconTimeScheduleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-schedule-stroke-sharp IconTimeScheduleStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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

export const IconTimeScheduleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-schedule-solid-sharp IconTimeScheduleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
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

export const iconPackOfTimeSchedule: TheIconSelfPack = {
  name: 'TimeSchedule',
  StrokeRounded: IconTimeScheduleStrokeRounded,
  DuotoneRounded: IconTimeScheduleDuotoneRounded,
  TwotoneRounded: IconTimeScheduleTwotoneRounded,
  SolidRounded: IconTimeScheduleSolidRounded,
  BulkRounded: IconTimeScheduleBulkRounded,
  StrokeSharp: IconTimeScheduleStrokeSharp,
  SolidSharp: IconTimeScheduleSolidSharp,
};