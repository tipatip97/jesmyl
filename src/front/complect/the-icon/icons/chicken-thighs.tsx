import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 15.8446L6.68575 19.1589C7.45757 19.7089 7.56154 20.8655 6.88551 21.5416C6.27426 22.1528 5.28323 22.1528 4.67198 21.5416C4.19008 21.0597 4.02512 20.2787 4.30305 19.6969C3.72125 19.9749 2.94033 19.8099 2.45844 19.328C1.84719 18.7168 1.84719 17.7257 2.45844 17.1145C3.13447 16.4385 4.29108 16.5424 4.84114 17.3142L8.15538 14',
  d2: 'M12.5368 3.68189C14.8712 1.34751 18.1694 1.53315 20.3181 3.68189C22.033 5.39675 22.4975 7.8437 21.4285 9.94858C19.6533 7.59535 15.6579 9.39829 16.4055 12.3559C14.7572 11.6697 13.3426 13.7886 14.478 15.0632C12.0982 16.0318 9.73049 16.4381 8.64618 15.3538C6.49743 13.2051 10.2024 6.01628 12.5368 3.68189Z',
  d3: 'M12.0063 3.15163C14.6502 0.507733 18.4235 0.726883 20.8483 3.15163C22.774 5.07731 23.3246 7.87112 22.0971 10.2882C21.98 10.5189 21.7522 10.6729 21.4945 10.6957C21.2368 10.7185 20.9855 10.6069 20.8297 10.4003C20.198 9.56303 19.1635 9.43162 18.2881 9.84033C17.4219 10.2447 16.8634 11.1074 17.1325 12.1722C17.2021 12.4474 17.1103 12.7383 16.8954 12.9238C16.6804 13.1093 16.3792 13.1575 16.1171 13.0484C15.6805 12.8666 15.271 13.0307 15.0143 13.4013C14.7505 13.7822 14.7474 14.2383 15.0379 14.5644C15.1999 14.7463 15.2635 14.9956 15.2084 15.2329C15.1532 15.4703 14.9863 15.666 14.7606 15.7579C13.5339 16.2572 12.2689 16.6297 11.1397 16.7257C10.0344 16.8197 8.8918 16.6603 8.1157 15.8842C7.34655 15.1151 7.18336 13.9859 7.2716 12.8916C7.36167 11.7745 7.72489 10.5231 8.21448 9.30736C9.18971 6.88576 10.7482 4.4098 12.0063 3.15163Z',
  d4: 'M6.08819 15.431C6.03448 15.2878 6.00762 15.2162 5.95431 15.2047C5.901 15.1932 5.84867 15.2455 5.74399 15.3502L4.92998 16.1642C4.87676 16.2174 4.85015 16.244 4.81736 16.2488C4.78457 16.2536 4.74928 16.2346 4.67871 16.1965C3.81116 15.7286 2.67751 15.8342 1.92811 16.5836C1.02396 17.4877 1.02396 18.9536 1.92811 19.8578C2.28603 20.2157 2.76535 20.4591 3.27066 20.5463C3.34889 20.5598 3.388 20.5666 3.41043 20.589C3.43287 20.6114 3.43962 20.6505 3.45312 20.7288C3.54034 21.2341 3.78372 21.7134 4.14165 22.0713C5.04579 22.9755 6.5117 22.9755 7.41584 22.0713C8.16524 21.3219 8.27079 20.1883 7.80292 19.3207C7.76486 19.2501 7.74582 19.2149 7.75063 19.1821C7.75543 19.1493 7.78204 19.1227 7.83526 19.0694L8.64942 18.2553C8.75411 18.1506 8.80646 18.0983 8.79491 18.0449C8.78336 17.9916 8.71175 17.9648 8.56852 17.9111C8.03176 17.7098 7.51232 17.4018 7.05477 16.9442C6.59732 16.4868 6.28941 15.9675 6.08819 15.431Z',
  d5: 'M12.0063 3.15163C14.6502 0.507733 18.4235 0.726883 20.8483 3.15163C22.774 5.07731 23.3246 7.87112 22.0971 10.2882L21.5532 11.3594L20.8297 10.4003C20.198 9.56303 19.1635 9.43162 18.2881 9.84033C17.4219 10.2447 16.8634 11.1074 17.1325 12.1722L17.4995 13.6239L16.1171 13.0484C15.6805 12.8666 15.271 13.0307 15.0143 13.4013C14.7505 13.7822 14.7474 14.2383 15.0379 14.5644L15.7444 15.3575L14.7606 15.7579C13.5339 16.2572 12.2689 16.6297 11.1397 16.7257C10.0344 16.8197 8.8918 16.6603 8.1157 15.8842C7.34655 15.1151 7.18336 13.9859 7.2716 12.8916C7.36167 11.7745 7.72489 10.5231 8.21448 9.30736C9.18971 6.88576 10.7482 4.4098 12.0063 3.15163Z',
  d6: 'M5.98143 15.1133L4.81683 16.2779C3.93472 15.7197 2.71798 15.7943 1.92811 16.5841C1.02396 17.4883 1.02396 18.9542 1.92811 19.8583C2.32367 20.2539 2.86749 20.5096 3.43083 20.5692C3.49042 21.1325 3.74608 21.6763 4.14165 22.0719C5.04579 22.976 6.5117 22.976 7.41584 22.0719C8.20571 21.282 8.28031 20.0653 7.72211 19.1832L8.88683 18.0184C8.23844 17.8259 7.6023 17.4925 7.05477 16.9449C6.50726 16.3974 6.17397 15.7613 5.98143 15.1133Z',
} as const;

export const IconChickenThighsStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chicken-thighs-stroke-rounded IconChickenThighsStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconChickenThighsDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chicken-thighs-duotone-rounded IconChickenThighsDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChickenThighsTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chicken-thighs-twotone-rounded IconChickenThighsTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconChickenThighsSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chicken-thighs-solid-rounded IconChickenThighsSolidRounded"
    >
      <path 
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

export const IconChickenThighsBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chicken-thighs-bulk-rounded IconChickenThighsBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChickenThighsStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chicken-thighs-stroke-sharp IconChickenThighsStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconChickenThighsSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chicken-thighs-solid-sharp IconChickenThighsSolidSharp"
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

export const iconPackOfChickenThighs: TheIconSelfPack = {
  name: 'ChickenThighs',
  StrokeRounded: IconChickenThighsStrokeRounded,
  DuotoneRounded: IconChickenThighsDuotoneRounded,
  TwotoneRounded: IconChickenThighsTwotoneRounded,
  SolidRounded: IconChickenThighsSolidRounded,
  BulkRounded: IconChickenThighsBulkRounded,
  StrokeSharp: IconChickenThighsStrokeSharp,
  SolidSharp: IconChickenThighsSolidSharp,
};