import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5286 8H13.4714C14.0307 8 14.6182 8.00228 14.8682 8.61732C15.0439 9.04998 15.0439 9.95002 14.8682 10.3827C14.6182 10.9977 14.0307 11 13.4714 11H10.5286C9.96929 11 9.38175 10.9977 9.13185 10.3827C8.95605 9.95002 8.95605 9.04998 9.13185 8.61732C9.38175 8.00228 9.96929 8 10.5286 8Z',
  d2: 'M10.5286 11H13.4714C14.0307 11 14.6182 11.0023 14.8682 11.6173C15.0439 12.05 15.0439 12.95 14.8682 13.3827C14.6182 13.9977 14.0307 14 13.4714 14H10.5286C9.96929 14 9.38175 13.9977 9.13185 13.3827C8.95605 12.95 8.95605 12.05 9.13185 11.6173C9.38175 11.0023 9.96929 11 10.5286 11Z',
  d3: 'M7.5 19C7.54219 18.8734 7.56329 18.8101 7.58586 18.754C7.87405 18.0371 8.54939 17.5504 9.32061 17.5037C9.38101 17.5 9.44772 17.5 9.58114 17.5H14.4189C14.5523 17.5 14.619 17.5 14.6794 17.5037C15.4506 17.5504 16.126 18.0371 16.4141 18.754C16.4367 18.8101 16.4578 18.8734 16.5 19',
  d4: 'M12 17.5V22M12 22H19M12 22H5',
  d5: 'M21 8.5L19.7959 7.09525C18.9123 6.06437 18.4705 5.54892 17.8738 5.27446C17.277 5 16.5981 5 15.2404 5H8.75961C7.40185 5 6.72297 5 6.12623 5.27446C5.5295 5.54892 5.08769 6.06437 4.20407 7.09525L3 8.5',
  d6: 'M12 8L12 2',
  d7: 'M12 8V2',
  d8: 'M7.49997 19C7.54216 18.8734 7.56326 18.8101 7.58583 18.754C7.87402 18.0371 8.54936 17.5504 9.32058 17.5037C9.38098 17.5 9.44769 17.5 9.58111 17.5H14.4189C14.5523 17.5 14.619 17.5 14.6794 17.5037C15.4506 17.5504 16.126 18.0371 16.4141 18.754C16.4367 18.8101 16.4578 18.8734 16.5 19',
  d9: 'M12 17.5V22',
  d10: 'M19 22H12H4.99997',
  d11: 'M10.4949 7.25002L10.5286 7.25004H13.4714L13.5051 7.25002C13.7598 7.24978 14.1483 7.24941 14.5093 7.36215C14.9451 7.49821 15.3438 7.79557 15.563 8.33504C15.7039 8.68174 15.75 9.12673 15.75 9.50004C15.75 9.87336 15.7039 10.3184 15.563 10.6651C15.3438 11.2045 14.9451 11.5019 14.5093 11.6379C14.1483 11.7507 13.7598 11.7503 13.5051 11.7501L13.4714 11.75H10.5286L10.4949 11.7501C10.2402 11.7503 9.85171 11.7507 9.49065 11.6379C9.05491 11.5019 8.65621 11.2045 8.43701 10.6651C8.29614 10.3184 8.25 9.87336 8.25 9.50004C8.25 9.12673 8.29614 8.68174 8.43701 8.33504C8.65621 7.79557 9.05491 7.49821 9.49065 7.36215C9.85171 7.24941 10.2402 7.24978 10.4949 7.25002Z',
  d12: 'M10.4949 10.25L10.5286 10.25H13.4714L13.5051 10.25C13.7598 10.2498 14.1483 10.2494 14.5093 10.3622C14.9451 10.4982 15.3438 10.7956 15.563 11.335C15.7039 11.6817 15.75 12.1267 15.75 12.5C15.75 12.8734 15.7039 13.3184 15.563 13.6651C15.3438 14.2045 14.9451 14.5019 14.5093 14.6379C14.1483 14.7507 13.7598 14.7503 13.5051 14.7501L13.4714 14.75H10.5286L10.4949 14.7501C10.2402 14.7503 9.85171 14.7507 9.49065 14.6379C9.05491 14.5019 8.65621 14.2045 8.43701 13.6651C8.29614 13.3184 8.25 12.8734 8.25 12.5C8.25 12.1267 8.29614 11.6817 8.43701 11.335C8.65621 10.7956 9.05491 10.4982 9.49065 10.3622C9.85171 10.2494 10.2402 10.2498 10.4949 10.25Z',
  d13: 'M14.4186 16.5C12.7982 16.5 11.1778 16.5004 9.55741 16.5C9.44722 16.5 9.35135 16.5 9.25986 16.5055C8.10302 16.5756 7.09001 17.3057 6.65772 18.381C6.62113 18.472 6.58901 18.5698 6.55101 18.6838C6.37637 19.2077 6.65953 19.774 7.18347 19.9487C7.70742 20.1233 8.27374 19.8402 8.44838 19.3162C8.49477 19.1771 8.50483 19.1483 8.51338 19.127C8.65748 18.7686 8.99515 18.5252 9.38076 18.5018C9.40365 18.5005 9.43414 18.5 9.58084 18.5H14.4186C14.5653 18.5 14.5957 18.5005 14.6186 18.5018C15.0042 18.5252 15.3419 18.7686 15.486 19.127C15.4946 19.1483 15.5046 19.1771 15.551 19.3162C15.7257 19.8402 16.292 20.1233 16.8159 19.9487C17.3399 19.774 17.623 19.2077 17.4484 18.6838C17.4104 18.5698 17.3783 18.472 17.3417 18.381C16.9094 17.3057 15.8964 16.5756 14.7395 16.5055C14.6416 16.4996 14.5387 16.5 14.4186 16.5Z',
  d14: 'M12 16.5C11.4477 16.5 11 16.9477 11 17.5V21H5C4.44771 21 4 21.4477 4 22C4 22.5523 4.44771 23 5 23H19C19.5523 23 20 22.5523 20 22C20 21.4477 19.5523 21 19 21H13V17.5C13 16.9477 12.5523 16.5 12 16.5Z',
  d15: 'M8.57076 3.99986C8.6329 3.99991 8.69584 3.99997 8.7596 3.99997H15.2404C15.3041 3.99997 15.3671 3.99991 15.4292 3.99986C16.6013 3.99885 17.4919 3.99808 18.2916 4.36592C19.0914 4.73375 19.6703 5.41041 20.4324 6.30099C20.4728 6.34821 20.5137 6.39602 20.5552 6.44443L21.7592 7.84918C22.1187 8.2685 22.0701 8.8998 21.6508 9.25922C21.2315 9.61865 20.6002 9.57008 20.2407 9.15076L19.0367 7.74601C18.0935 6.64564 17.8072 6.34453 17.4559 6.18294C17.1046 6.02136 16.6897 5.99997 15.2404 5.99997H8.7596C7.31032 5.99997 6.8954 6.02136 6.54408 6.18294C6.19275 6.34453 5.90649 6.64564 4.96331 7.74601L3.75924 9.15076C3.39982 9.57008 2.76852 9.61865 2.3492 9.25922C1.92987 8.8998 1.88131 8.2685 2.24073 7.84918L3.4448 6.44443C3.48629 6.39602 3.52721 6.3482 3.56761 6.30098C4.32964 5.4104 4.90861 4.73375 5.70836 4.36592C6.50812 3.99808 7.39867 3.99885 8.57076 3.99986Z',
  d16: 'M12 1C12.5523 1 13 1.44772 13 2L13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8L11 2C11 1.44772 11.4477 1 12 1Z',
  d17: 'M10.5286 7.25004L10.4949 7.25002C10.2402 7.24978 9.85168 7.24941 9.49062 7.36215C9.05488 7.49821 8.65618 7.79556 8.43698 8.33504C8.29611 8.68174 8.24997 9.12673 8.24997 9.50004C8.24997 9.87336 8.29611 10.3184 8.43698 10.6651C8.48743 10.7892 8.54739 10.9005 8.61512 11C8.54739 11.0995 8.48743 11.2109 8.43698 11.335C8.29611 11.6817 8.24997 12.1267 8.24997 12.5C8.24997 12.8734 8.29611 13.3184 8.43698 13.6651C8.65618 14.2045 9.05488 14.5019 9.49062 14.6379C9.85168 14.7507 10.2402 14.7503 10.4949 14.7501L10.5286 14.75H13.4714L13.505 14.7501C13.7598 14.7503 14.1483 14.7507 14.5093 14.6379C14.9451 14.5019 15.3438 14.2045 15.563 13.6651C15.7038 13.3184 15.75 12.8734 15.75 12.5C15.75 12.1267 15.7038 11.6817 15.563 11.335C15.5125 11.2109 15.4525 11.0995 15.3848 11C15.4525 10.9005 15.5125 10.7892 15.563 10.6651C15.7038 10.3184 15.75 9.87336 15.75 9.50004C15.75 9.12673 15.7038 8.68174 15.563 8.33504C15.3438 7.79557 14.9451 7.49821 14.5093 7.36215C14.1483 7.24941 13.7598 7.24978 13.505 7.25002L13.4714 7.25004L10.5286 7.25004Z',
  d18: 'M12 16.5C11.4477 16.5 11 16.9477 11 17.5V21H13V17.5C13 16.9477 12.5523 16.5 12 16.5Z',
  d19: 'M4.99997 21C4.44768 21 3.99997 21.4477 3.99997 22C3.99997 22.5523 4.44768 23 4.99997 23H19C19.5523 23 20 22.5523 20 22C20 21.4477 19.5523 21 19 21C12.1 21 12.2616 21 4.99997 21Z',
  d20: 'M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V7.25004H13L13 2Z',
  d21: 'M7.5 19L9 17.5H15L16.5 19',
  d22: 'M14 8H10C9.44772 8 9 8.44772 9 9V10C9 10.5523 9.44772 11 10 11H14C14.5523 11 15 10.5523 15 10V9C15 8.44772 14.5523 8 14 8Z',
  d23: 'M14 11H10C9.44772 11 9 11.4477 9 12V13C9 13.5523 9.44772 14 10 14H14C14.5523 14 15 13.5523 15 13V12C15 11.4477 14.5523 11 14 11Z',
  d24: 'M21 8.49991L18 5L6 5.00015L3 8.49991',
  d25: 'M8.29236 16.2929C8.47989 16.1054 8.73425 16 8.99947 16H14.9995C15.2647 16 15.519 16.1054 15.7066 16.2929L17.2066 17.7929L15.7924 19.2071L14.5853 18H9.41368L8.20657 19.2071L6.79236 17.7929L8.29236 16.2929Z',
  d26: 'M12.9995 20.5V17H10.9995V20.5H4.99947V22.5H18.9995V20.5H12.9995Z',
  d27: 'M10.0005 6.75C9.03404 6.75 8.25053 7.5335 8.25053 8.5V9.5C8.25053 9.87181 8.36649 10.2165 8.56421 10.5C8.36649 10.7835 8.25053 11.1282 8.25053 11.5V12.5C8.25053 13.4665 9.03404 14.25 10.0005 14.25H14.0005C14.967 14.25 15.7505 13.4665 15.7505 12.5V11.5C15.7505 11.1282 15.6346 10.7835 15.4369 10.5C15.6346 10.2165 15.7505 9.87181 15.7505 9.5V8.5C15.7505 7.5335 14.967 6.75 14.0005 6.75H10.0005Z',
  d28: 'M6.00566 3.50015L17.9943 3.5C18.2859 3.5 18.563 3.62756 18.7528 3.8492L21.75 7.34911L20.2329 8.65071L17.5348 5.50001L6.46516 5.50015L3.76703 8.65073L2.25 7.3491L5.24716 3.84934C5.43696 3.62771 5.71403 3.50016 6.00566 3.50015Z',
  d29: 'M12.9995 1.5L12.9995 7.5H10.9995L10.9995 1.5H12.9995Z',
};

export const IconEquipmentWeightliftingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-weightlifting-stroke-rounded IconEquipmentWeightliftingStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentWeightliftingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-weightlifting-duotone-rounded IconEquipmentWeightliftingDuotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentWeightliftingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-weightlifting-twotone-rounded IconEquipmentWeightliftingTwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentWeightliftingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-weightlifting-solid-rounded IconEquipmentWeightliftingSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentWeightliftingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-weightlifting-bulk-rounded IconEquipmentWeightliftingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentWeightliftingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-weightlifting-stroke-sharp IconEquipmentWeightliftingStrokeSharp"
    >
      <path 
        d={d.d21} 
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
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
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

export const IconEquipmentWeightliftingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-weightlifting-solid-sharp IconEquipmentWeightliftingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEquipmentWeightlifting: TheIconSelfPack = {
  name: 'EquipmentWeightlifting',
  StrokeRounded: IconEquipmentWeightliftingStrokeRounded,
  DuotoneRounded: IconEquipmentWeightliftingDuotoneRounded,
  TwotoneRounded: IconEquipmentWeightliftingTwotoneRounded,
  SolidRounded: IconEquipmentWeightliftingSolidRounded,
  BulkRounded: IconEquipmentWeightliftingBulkRounded,
  StrokeSharp: IconEquipmentWeightliftingStrokeSharp,
  SolidSharp: IconEquipmentWeightliftingSolidSharp,
};