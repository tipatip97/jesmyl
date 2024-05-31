import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 7V11M12 7V11',
  d2: 'M16 3H8C6.11438 3 5.17157 3 4.58579 3.58358C4 4.16716 4 5.10641 4 6.98492V13.56C4 13.9302 4 14.1153 4.02462 14.2702C4.16017 15.1228 4.83135 15.7914 5.68713 15.9265C5.8426 15.951 6.0284 15.951 6.4 15.951C6.4929 15.951 6.53935 15.951 6.57822 15.9571C6.79216 15.9909 6.95996 16.158 6.99384 16.3712C7 16.4099 7 16.4562 7 16.5487V18.0921C7 19.2742 7 19.8653 7.3345 19.9822C7.66899 20.0991 8.03962 19.6375 8.78087 18.7144L10.6998 16.3249C10.8473 16.1412 10.921 16.0493 11.0237 16.0002C11.1264 15.951 11.2445 15.951 11.4806 15.951H15.3431C16.1606 15.951 16.5694 15.951 16.9369 15.7993C17.3045 15.6477 17.5935 15.3597 18.1716 14.7838L18.8284 14.1295C19.4065 13.5536 19.6955 13.2656 19.8478 12.8995C20 12.5333 20 12.1261 20 11.3117V6.98492C20 5.10641 20 4.16716 19.4142 3.58358C18.8284 3 17.8856 3 16 3Z',
  d3: 'M3.65895 3.15224C4.31796 2.5 5.37862 2.5 7.49994 2.5H16.4999C18.6213 2.5 19.6819 2.5 20.3409 3.15224C20.9999 3.80447 20.9999 4.85422 20.9999 6.95373L20.9999 11.7895C20.9999 12.6998 20.9999 13.1549 20.8287 13.5641C20.6574 13.9734 20.3322 14.2952 19.6819 14.9388L19.6819 14.9388L18.943 15.6702C18.2926 16.3138 17.9675 16.6356 17.554 16.8051C17.1405 16.9746 16.6807 16.9746 15.761 16.9746H11.4156C11.15 16.9746 11.0171 16.9746 10.9016 17.0296C10.7861 17.0845 10.7031 17.1872 10.5372 17.3925L10.5372 17.3925L8.37842 20.0632C7.54451 21.0949 7.12756 21.6107 6.75125 21.4801C6.37494 21.3494 6.37494 20.6888 6.37494 19.3676V17.6427C6.37494 17.5393 6.37494 17.4875 6.36801 17.4443C6.32989 17.206 6.14112 17.0192 5.90043 16.9815C5.85671 16.9746 5.80445 16.9746 5.69994 16.9746C5.28189 16.9746 5.07286 16.9746 4.89796 16.9472C3.9352 16.7963 3.18013 16.049 3.02764 15.0961C2.99994 14.923 2.99994 14.7162 2.99994 14.3024L2.99994 6.95373C2.99994 4.85422 2.99994 3.80447 3.65895 3.15224ZM12.9999 7.5C12.9999 6.94771 12.5522 6.5 11.9999 6.5C11.4477 6.5 10.9999 6.94771 10.9999 7.5V11.5C10.9999 12.0523 11.4477 12.5 11.9999 12.5C12.5522 12.5 12.9999 12.0523 12.9999 11.5V7.5ZM16.9999 7.5C16.9999 6.94771 16.5522 6.5 15.9999 6.5C15.4477 6.5 14.9999 6.94771 14.9999 7.5V11.5C14.9999 12.0523 15.4477 12.5 15.9999 12.5C16.5522 12.5 16.9999 12.0523 16.9999 11.5V7.5Z',
  d4: 'M16.4999 2.5H7.49994C5.37862 2.5 4.31796 2.5 3.65895 3.15223C2.99994 3.80447 2.99994 4.85422 2.99994 6.95373V14.3024C2.99994 14.7162 2.99994 14.923 3.02764 15.0961C3.18013 16.049 3.9352 16.7963 4.89796 16.9472C5.07286 16.9746 5.28189 16.9746 5.69994 16.9746C5.80445 16.9746 5.85671 16.9746 5.90043 16.9815C6.14112 17.0192 6.32989 17.206 6.36801 17.4443C6.37494 17.4875 6.37494 17.5393 6.37494 17.6427V19.3676C6.37494 20.6888 6.37494 21.3494 6.75125 21.4801C7.12756 21.6107 7.54451 21.0949 8.37842 20.0632L10.5372 17.3925C10.7031 17.1872 10.7861 17.0845 10.9016 17.0296C11.0171 16.9746 11.15 16.9746 11.4156 16.9746H15.761C16.6807 16.9746 17.1405 16.9746 17.554 16.8051C17.9675 16.6356 18.2926 16.3138 18.943 15.6702L19.6819 14.9388C20.3322 14.2952 20.6574 13.9734 20.8287 13.5641C20.9999 13.1549 20.9999 12.6998 20.9999 11.7895V6.95373C20.9999 4.85422 20.9999 3.80447 20.3409 3.15223C19.6819 2.5 18.6213 2.5 16.4999 2.5Z',
  d5: 'M11.9999 6.5C12.5522 6.5 12.9999 6.94772 12.9999 7.5V11.5C12.9999 12.0523 12.5522 12.5 11.9999 12.5C11.4477 12.5 10.9999 12.0523 10.9999 11.5V7.5C10.9999 6.94772 11.4477 6.5 11.9999 6.5ZM15.9999 6.5C16.5522 6.5 16.9999 6.94772 16.9999 7.5V11.5C16.9999 12.0523 16.5522 12.5 15.9999 12.5C15.4477 12.5 14.9999 12.0523 14.9999 11.5V7.5C14.9999 6.94772 15.4477 6.5 15.9999 6.5Z',
  d6: 'M15.9796 7.49512V12.4951M11.9796 7.49512V12.4951',
  d7: 'M19.9909 3.49902H4.00915C4.00364 3.49902 3.99918 3.50351 3.99918 3.50904V16.5076C3.99918 16.5132 4.00373 16.5177 4.00929 16.5176L7.02167 16.4738V20.4909C7.02167 20.4999 7.03239 20.5043 7.03868 20.498L11.0141 16.5178H16.988L20.0008 13.5152V3.50904C20.0008 3.50351 19.9964 3.49902 19.9909 3.49902Z',
  d8: 'M4 2.75C3.80108 2.75 3.61032 2.82902 3.46966 2.96968C3.32901 3.11033 3.24999 3.3011 3.25 3.50002L3.25035 16.5002C3.25035 16.6991 3.32938 16.8899 3.47004 17.0305C3.6107 17.1712 3.80147 17.2502 4.00039 17.2502L6.23309 17.25L6.25001 20.5039C6.25159 20.8068 6.43519 21.079 6.71542 21.1939C6.99565 21.3088 7.31751 21.2439 7.53129 21.0294L11.2968 17.2501L17.3049 17.25L20.75 13.8111L20.75 3.5C20.75 3.08579 20.4142 2.75 20 2.75L4 2.75ZM11 7.5L11 12.5H13V7.5H11ZM15 7.5V12.5H17V7.5H15Z',
} as const;

export const IconTwitchStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twitch-stroke-rounded IconTwitchStrokeRounded"
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

export const IconTwitchDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twitch-duotone-rounded IconTwitchDuotoneRounded"
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

export const IconTwitchTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twitch-twotone-rounded IconTwitchTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTwitchSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twitch-solid-rounded IconTwitchSolidRounded"
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

export const IconTwitchBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twitch-bulk-rounded IconTwitchBulkRounded"
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

export const IconTwitchStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twitch-stroke-sharp IconTwitchStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconTwitchSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twitch-solid-sharp IconTwitchSolidSharp"
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

export const iconPackOfTwitch: TheIconSelfPack = {
  name: 'Twitch',
  StrokeRounded: IconTwitchStrokeRounded,
  DuotoneRounded: IconTwitchDuotoneRounded,
  TwotoneRounded: IconTwitchTwotoneRounded,
  SolidRounded: IconTwitchSolidRounded,
  BulkRounded: IconTwitchBulkRounded,
  StrokeSharp: IconTwitchStrokeSharp,
  SolidSharp: IconTwitchSolidSharp,
};