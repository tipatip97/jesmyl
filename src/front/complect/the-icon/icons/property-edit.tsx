import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 11.5C21 7.02166 21 4.78249 19.6088 3.39124C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39124C2 4.78249 2 7.02166 2 11.5C2 15.9783 2 18.2175 3.39124 19.6088C4.72972 20.9472 6.85301 20.998 11 20.9999',
  d2: 'M2 7H21',
  d3: 'M10 16H11.5M6 16H7M10 12H16M6 12H7',
  d4: 'M21.2633 14.8717C20.3622 13.8651 19.8215 13.925 19.2208 14.1048C18.8003 14.1647 17.3585 15.8422 16.7578 16.3765C15.7714 17.3478 14.7806 18.3479 14.7153 18.4784C14.5285 18.781 14.3548 19.3172 14.2707 19.9163C14.1145 20.815 13.8041 21.7815 14.1746 21.9133C14.3548 22.153 15.2559 21.8335 16.157 21.7017C16.7578 21.5938 17.1783 21.474 17.4787 21.2943C17.8992 21.0426 18.6801 20.1559 20.0258 18.8379C20.8697 17.9521 21.6838 17.34 21.9241 16.7409C22.1644 15.8422 21.804 15.3629 21.2633 14.8717Z',
  d5: 'M11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5C2 9.6509 2 8.18354 2.09793 7H20.9021C21 8.18354 21 9.6509 21 11.5C21 12.6733 21 13.6929 20.975 14.5839C20.7792 14.3915 20.6528 14.2789 20.5227 14.2037C20.0522 13.9321 19.4725 13.9321 19.0019 14.2037C18.8285 14.3039 18.6619 14.4705 18.3285 14.8039L15.0207 18.1117C14.4972 18.6352 14.3715 19.3698 14.2481 20.0912C14.2157 20.2805 14.1835 20.4689 14.1443 20.6523C14.1182 20.7741 14.0945 20.8851 14.0741 20.9865C13.309 21 12.4555 21 11.5 21Z',
  d6: 'M10 16H11.5M6 16H7',
  d7: 'M10 12H16M6 12H7',
  d8: 'M18.627 13.5542C19.3296 13.1486 20.1952 13.1486 20.8978 13.5542C21.1593 13.7053 21.4534 13.9999 21.7265 14.2735C22.0002 14.5467 22.2948 14.8407 22.4458 15.1023C22.8515 15.8049 22.8515 16.6705 22.4458 17.3731C22.2948 17.6347 22.06 17.869 21.7863 18.1421L18.4187 21.5097C17.9533 21.975 17.3914 22.1924 16.8866 22.3213C16.6346 22.3856 15.6899 22.5589 15.4603 22.5986L15.4602 22.5986C15.1542 22.6642 14.8481 22.7297 14.5948 22.7458C14.3159 22.7636 13.9114 22.7362 13.5876 22.4124C13.2638 22.0887 13.2365 21.6842 13.2542 21.4052C13.2703 21.152 13.3359 20.8458 13.4014 20.5398C13.4411 20.3101 13.6144 19.3654 13.6788 19.1134C13.8076 18.6086 14.0251 18.0467 14.4904 17.5814L17.858 14.2137C18.1311 13.94 18.3654 13.7053 18.627 13.5542Z',
  d9: 'M11.5572 1.25H11.4428H11.4428C9.25212 1.24999 7.53144 1.24998 6.18802 1.43059C4.81137 1.61568 3.71911 2.00272 2.86091 2.86091C2.00272 3.71911 1.61568 4.81137 1.43059 6.18802C1.40227 6.39867 1.38811 6.50399 1.43165 6.58807C1.45337 6.63001 1.48716 6.66865 1.52584 6.69577C1.60337 6.75012 1.7132 6.75012 1.93285 6.75012H21.0672C21.2868 6.75012 21.3966 6.75012 21.4742 6.69577C21.5128 6.66865 21.5466 6.63001 21.5683 6.58807C21.6119 6.50399 21.5977 6.39867 21.5694 6.18802C21.3843 4.81137 20.9973 3.71911 20.1391 2.86091C19.2809 2.00272 18.1886 1.61568 16.812 1.43059C15.4686 1.24998 13.7479 1.24999 11.5572 1.25H11.5572ZM21.7349 8.83105C21.7297 8.55822 21.7271 8.4218 21.6396 8.33596C21.552 8.25012 21.4144 8.25012 21.1391 8.25012H1.8609C1.5856 8.25012 1.44795 8.25012 1.36045 8.33596C1.27294 8.4218 1.27032 8.55822 1.26508 8.83105C1.24999 9.61693 1.24999 10.4849 1.25 11.4428V11.4428V11.5572V11.5572C1.24999 13.7479 1.24998 15.4686 1.43059 16.812C1.61568 18.1886 2.00272 19.2809 2.86091 20.1391C3.71911 20.9973 4.81137 21.3843 6.18802 21.5694C7.441 21.7379 9.29616 21.7492 11.3177 21.7499H11.3177H11.3177H11.3177C11.4369 21.75 11.4965 21.75 11.5431 21.7344C11.6307 21.7049 11.6902 21.6491 11.7252 21.5635C11.7438 21.5181 11.7482 21.4487 11.757 21.31C11.7803 20.9431 11.8666 20.5416 11.9249 20.2699L11.9284 20.2536C11.9748 19.9895 12.1465 19.0504 12.2251 18.7423C12.3859 18.1125 12.6944 17.2558 13.4295 16.5207L16.796 13.1542L16.841 13.1089C17.0767 12.8718 17.4379 12.5085 17.8767 12.2552C18.8245 11.708 20.0184 11.6463 21.0586 12.0036C21.2971 12.0855 21.4163 12.1265 21.4833 12.119C21.5976 12.1062 21.672 12.0532 21.7212 11.9492C21.75 11.8883 21.75 11.7779 21.75 11.5572V11.4425V11.4424V11.4423V11.4422C21.75 10.4846 21.75 9.61679 21.7349 8.83105ZM6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H7C7.41421 12.75 7.75 12.4142 7.75 12C7.75 11.5858 7.41421 11.25 7 11.25H6ZM10 11.25C9.58579 11.25 9.25 11.5858 9.25 12C9.25 12.4142 9.58579 12.75 10 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H10ZM6 15.25C5.58579 15.25 5.25 15.5858 5.25 16C5.25 16.4142 5.58579 16.75 6 16.75H7C7.41421 16.75 7.75 16.4142 7.75 16C7.75 15.5858 7.41421 15.25 7 15.25H6ZM10 15.25C9.58579 15.25 9.25 15.5858 9.25 16C9.25 16.4142 9.58579 16.75 10 16.75H11.5C11.9142 16.75 12.25 16.4142 12.25 16C12.25 15.5858 11.9142 15.25 11.5 15.25H10Z',
  d10: 'M21.6396 8.33584C21.7271 8.42168 21.7297 8.5581 21.7349 8.83093C21.75 9.61675 21.75 10.4847 21.75 11.4424V11.5571C21.75 11.7778 21.75 11.8881 21.7212 11.9491C21.672 12.053 21.5976 12.1061 21.4833 12.1189C21.4163 12.1263 21.2971 12.0854 21.0586 12.0035C20.0184 11.6462 18.8245 11.7079 17.8767 12.2551C17.4379 12.5084 17.0767 12.8717 16.841 13.1088L16.796 13.154L13.4295 16.5206C12.6944 17.2557 12.3859 18.1124 12.2251 18.7422C12.1465 19.0503 11.9748 19.9894 11.9284 20.2534L11.9249 20.2698C11.8666 20.5415 11.7803 20.943 11.757 21.3099C11.7482 21.4486 11.7438 21.5179 11.7252 21.5634C11.6902 21.649 11.6307 21.7048 11.5431 21.7342C11.4965 21.7499 11.4369 21.7499 11.3177 21.7498C9.29616 21.7491 7.441 21.7377 6.18802 21.5693C4.81137 21.3842 3.71911 20.9972 2.86091 20.139C2.00272 19.2808 1.61568 18.1885 1.43059 16.8119C1.24998 15.4684 1.24999 13.7478 1.25 11.5571V11.4427C1.24999 10.4848 1.24999 9.61682 1.26508 8.83093C1.27032 8.5581 1.27294 8.42168 1.36045 8.33584C1.44795 8.25 1.5856 8.25 1.8609 8.25H21.1391C21.4144 8.25 21.552 8.25 21.6396 8.33584Z',
  d11: 'M11.4432 1.25H11.5575C13.7482 1.24999 15.4689 1.24998 16.8123 1.43059C18.189 1.61568 19.2812 2.00272 20.1394 2.86091C20.9976 3.71911 21.3847 4.81137 21.5697 6.18802C21.5981 6.39867 21.6122 6.50399 21.5687 6.58807C21.547 6.63001 21.5132 6.66865 21.4745 6.69577C21.397 6.75012 21.2871 6.75012 21.0675 6.75012H1.93319C1.71354 6.75012 1.60371 6.75012 1.52618 6.69577C1.4875 6.66865 1.45371 6.63001 1.43199 6.58807C1.38845 6.50399 1.40261 6.39867 1.43093 6.18802C1.61602 4.81137 2.00306 3.71911 2.86125 2.86091C3.71945 2.00272 4.81171 1.61568 6.18836 1.43059C7.53178 1.24998 9.25247 1.24999 11.4432 1.25Z',
  d12: 'M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H7C7.41421 11.25 7.75 11.5858 7.75 12C7.75 12.4142 7.41421 12.75 7 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12ZM9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12ZM5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H7C7.41421 15.25 7.75 15.5858 7.75 16C7.75 16.4142 7.41421 16.75 7 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16ZM9.25 16C9.25 15.5858 9.58579 15.25 10 15.25H11.5C11.9142 15.25 12.25 15.5858 12.25 16C12.25 16.4142 11.9142 16.75 11.5 16.75H10C9.58579 16.75 9.25 16.4142 9.25 16Z',
  d13: 'M20.0376 11V2H2V20H11.0188',
  d14: 'M2 7H20.0376',
  d15: 'M10.0171 15.5H13.0234M6.00879 15.5H8.01297M10.0171 11.5H16.0297M6.00879 11.5H8.01297',
  d16: 'M14.0332 19.4459L19.466 14.0292C19.5052 13.9902 19.5686 13.9903 19.6077 14.0294L21.9701 16.3982C22.0091 16.4372 22.0091 16.5005 21.9701 16.5396L16.5253 22.0007L14.0332 21.9829V19.4459Z',
  d17: 'M19.9999 13.25C20.1988 13.25 20.3896 13.329 20.5302 13.4697L23.0302 15.9697C23.3231 16.2626 23.3231 16.7374 23.0302 17.0303L17.3105 22.75H13.7499V19.1893L19.4695 13.4697C19.6102 13.329 19.801 13.25 19.9999 13.25Z',
  d18: 'M1.50024 1.25C1.08603 1.25 0.750244 1.58579 0.750244 2V6.25H20.2502V2C20.2502 1.58579 19.9145 1.25 19.5002 1.25H1.50024Z',
  d19: 'M20.2502 7.75H0.750244V20C0.750244 20.4142 1.08603 20.75 1.50024 20.75L12.2502 20.75V18.568L18.4093 12.409C18.8312 11.9871 19.4035 11.75 20.0002 11.75C20.0842 11.75 20.1676 11.7547 20.2502 11.7639V7.75ZM7.50024 13H5.50024V11.5H7.50024V13ZM15.5002 13H9.50024V11.5H15.5002V13ZM7.50024 17H5.50024V15.5H7.50024V17ZM12.5002 17H9.50024V15.5H12.5002V17Z',
};

export const IconPropertyEditStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-edit-stroke-rounded IconPropertyEditStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconPropertyEditDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-edit-duotone-rounded IconPropertyEditDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconPropertyEditTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-edit-twotone-rounded IconPropertyEditTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyEditSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-edit-solid-rounded IconPropertyEditSolidRounded"
    >
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

export const IconPropertyEditBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-edit-bulk-rounded IconPropertyEditBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyEditStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-edit-stroke-sharp IconPropertyEditStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyEditSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-edit-solid-sharp IconPropertyEditSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPropertyEdit: TheIconSelfPack = {
  name: 'PropertyEdit',
  StrokeRounded: IconPropertyEditStrokeRounded,
  DuotoneRounded: IconPropertyEditDuotoneRounded,
  TwotoneRounded: IconPropertyEditTwotoneRounded,
  SolidRounded: IconPropertyEditSolidRounded,
  BulkRounded: IconPropertyEditBulkRounded,
  StrokeSharp: IconPropertyEditStrokeSharp,
  SolidSharp: IconPropertyEditSolidSharp,
};