import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 5.5C2.5 3.85008 2.5 3.02513 3.01256 2.51256C3.52513 2 4.35008 2 6 2C7.64992 2 8.47487 2 8.98744 2.51256C9.5 3.02513 9.5 3.85008 9.5 5.5C9.5 7.14992 9.5 7.97487 8.98744 8.48744C8.47487 9 7.64992 9 6 9C4.35008 9 3.52513 9 3.01256 8.48744C2.5 7.97487 2.5 7.14992 2.5 5.5Z',
  d2: 'M3.65685 15.6569C4.76142 14.5523 5.31371 14 6 14C6.68629 14 7.23858 14.5523 8.34315 15.6569C9.44772 16.7614 10 17.3137 10 18C10 18.6863 9.44772 19.2386 8.34315 20.3431C7.23858 21.4477 6.68629 22 6 22C5.31371 22 4.76142 21.4477 3.65685 20.3431C2.55228 19.2386 2 18.6863 2 18C2 17.3137 2.55228 16.7614 3.65685 15.6569Z',
  d3: 'M6 9V14M10 18H15',
  d4: 'M15 18C15 16.3501 15 15.5251 15.5126 15.0126C16.0251 14.5 16.8501 14.5 18.5 14.5C20.1499 14.5 20.9749 14.5 21.4874 15.0126C22 15.5251 22 16.3501 22 18C22 19.6499 22 20.4749 21.4874 20.9874C20.9749 21.5 20.1499 21.5 18.5 21.5C16.8501 21.5 16.0251 21.5 15.5126 20.9874C15 20.4749 15 19.6499 15 18Z',
  d5: 'M5.94916 1.25L6 1.25L6.05085 1.25H6.05089C6.83242 1.24997 7.49342 1.24994 8.02016 1.32076C8.57988 1.39601 9.09891 1.56338 9.51777 1.98224C9.93663 2.40109 10.104 2.92013 10.1792 3.47984C10.2501 4.00659 10.25 4.66759 10.25 5.44912V5.44916V5.55084V5.55088C10.25 6.33241 10.2501 6.99342 10.1792 7.52016C10.104 8.07988 9.93663 8.59891 9.51777 9.01777C9.09891 9.43663 8.57988 9.60399 8.02016 9.67924C7.49342 9.75006 6.83241 9.75004 6.05088 9.75H6.05084H5.94916H5.94912C5.16759 9.75004 4.50659 9.75006 3.97984 9.67924C3.42013 9.60399 2.90109 9.43663 2.48224 9.01777C2.06338 8.59891 1.89601 8.07988 1.82076 7.52016C1.74994 6.99342 1.74997 6.33242 1.75 5.55089V5.55085L1.75 5.5L1.75 5.44916V5.44912C1.74997 4.66759 1.74994 4.00659 1.82076 3.47984C1.89601 2.92013 2.06338 2.40109 2.48224 1.98224C2.90109 1.56338 3.42013 1.39601 3.97984 1.32076C4.50659 1.24994 5.16759 1.24997 5.94912 1.25H5.94916Z',
  d6: 'M4.53035 13.8179C4.95899 13.4909 5.42694 13.25 6 13.25C6.57306 13.25 7.04101 13.4909 7.46965 13.8179C7.87188 14.1248 8.38723 14.6402 8.90907 15.1621C9.43097 15.684 9.87517 16.1281 10.1821 16.5303C10.5091 16.959 10.75 17.4269 10.75 18C10.75 18.5731 10.5091 19.041 10.1821 19.4697C9.87517 19.8719 9.43097 20.316 8.90907 20.8379C8.38723 21.3598 7.87187 21.8752 7.46965 22.1821C7.04101 22.5091 6.57306 22.75 6 22.75C5.42694 22.75 4.95899 22.5091 4.53035 22.1821C4.12812 21.8752 3.61278 21.3598 3.09093 20.8379C2.56903 20.316 2.12483 19.8719 1.81795 19.4697C1.4909 19.041 1.25 18.5731 1.25 18C1.25 17.4269 1.4909 16.959 1.81795 16.5303C2.12483 16.1281 2.64022 15.6128 3.16212 15.0909C3.68397 14.569 4.12812 14.1248 4.53035 13.8179Z',
  d7: 'M6 8C5.44771 8 5 8.44772 5 9V14C5 14.5523 5.44771 15 6 15C6.55229 15 7 14.5523 7 14V9C7 8.44772 6.55229 8 6 8ZM16 18C16 17.4477 15.5523 17 15 17H10C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19H15C15.5523 19 16 18.5523 16 18Z',
  d8: 'M18.4492 13.75L18.5 13.75L18.5508 13.75H18.5509C19.3324 13.75 19.9934 13.7499 20.5202 13.8208C21.0799 13.896 21.5989 14.0634 22.0178 14.4822C22.4366 14.9011 22.604 15.4201 22.6792 15.9798C22.7501 16.5066 22.75 17.1676 22.75 17.9491V17.9492V18.0508V18.0509C22.75 18.8324 22.7501 19.4934 22.6792 20.0202C22.604 20.5799 22.4366 21.0989 22.0178 21.5178C21.5989 21.9366 21.0799 22.104 20.5202 22.1792C19.9934 22.2501 19.3324 22.25 18.5509 22.25H18.5508H18.4492H18.4491C17.6676 22.25 17.0066 22.2501 16.4798 22.1792C15.9201 22.104 15.4011 21.9366 14.9822 21.5178C14.5634 21.0989 14.396 20.5799 14.3208 20.0202C14.2499 19.4934 14.25 18.8324 14.25 18.0509V18.0508L14.25 18L14.25 17.9492V17.9491C14.25 17.1676 14.2499 16.5066 14.3208 15.9798C14.396 15.4201 14.5634 14.9011 14.9822 14.4822C15.4011 14.0634 15.9201 13.896 16.4798 13.8208C17.0066 13.7499 17.6676 13.75 18.4491 13.75H18.4492Z',
  d9: 'M5 9.74609C5.29288 9.75189 5.60962 9.75188 5.94911 9.75186H6.05084C6.39034 9.75188 6.70711 9.75189 7 9.74609V13.5135C6.69889 13.3531 6.37154 13.2519 6 13.2519C5.62846 13.2519 5.30111 13.3531 5 13.5135V9.74609Z',
  d10: 'M10.4884 19.0019H14.2558C14.25 18.709 14.25 18.3922 14.25 18.0527V17.951C14.25 17.6115 14.25 17.2948 14.2558 17.0019H10.4884C10.6487 17.303 10.75 17.6303 10.75 18.0019C10.75 18.3734 10.6487 18.7008 10.4884 19.0019Z',
  d11: 'M5.94915 1.25H6.05085C6.83237 1.24997 7.49342 1.24994 8.02016 1.32076C8.57988 1.39601 9.09891 1.56338 9.51777 1.98224C9.93663 2.4011 10.104 2.92013 10.1792 3.47984C10.2501 4.00659 10.25 4.66763 10.25 5.44916V5.55088C10.25 6.33242 10.2501 6.99342 10.1792 7.52017C10.104 8.07988 9.93663 8.59891 9.51777 9.01777C9.09891 9.43663 8.57988 9.60399 8.02016 9.67924C7.49341 9.75006 6.83237 9.75004 6.05084 9.75H5.94912C5.16759 9.75004 4.50659 9.75006 3.97984 9.67924C3.42012 9.60399 2.90109 9.43663 2.48223 9.01777C2.06337 8.59891 1.89601 8.07988 1.82076 7.52017C1.74994 6.99342 1.74997 6.33238 1.75 5.55085V5.44916C1.74997 4.66763 1.74994 4.00659 1.82076 3.47984C1.89601 2.92013 2.06337 2.4011 2.48223 1.98224C2.90109 1.56338 3.42012 1.39601 3.97984 1.32076C4.50658 1.24994 5.16763 1.24997 5.94915 1.25Z',
  d12: 'M4.53035 13.818C4.95899 13.4909 5.42694 13.25 6 13.25C6.57306 13.25 7.04101 13.4909 7.46965 13.818C7.87188 14.1248 8.38723 14.6402 8.90907 15.1621C9.43097 15.684 9.87517 16.1281 10.1821 16.5303C10.5091 16.959 10.75 17.4269 10.75 18C10.75 18.5731 10.5091 19.041 10.1821 19.4697C9.87517 19.8719 9.43097 20.316 8.90907 20.8379C8.38723 21.3598 7.87187 21.8752 7.46965 22.1821C7.04101 22.5091 6.57306 22.75 6 22.75C5.42694 22.75 4.95899 22.5091 4.53035 22.1821C4.12812 21.8752 3.61278 21.3598 3.09093 20.8379C2.56903 20.316 2.12483 19.8719 1.81795 19.4697C1.4909 19.041 1.25 18.5731 1.25 18C1.25 17.4269 1.4909 16.959 1.81795 16.5303C2.12483 16.1281 2.64022 15.6128 3.16212 15.0909C3.68397 14.569 4.12812 14.1248 4.53035 13.818Z',
  d13: 'M18.4492 13.75H18.5508C19.3324 13.75 19.9934 13.7499 20.5202 13.8208C21.0799 13.896 21.5989 14.0634 22.0178 14.4822C22.4366 14.9011 22.604 15.4201 22.6792 15.9798C22.7501 16.5066 22.75 17.1676 22.75 17.9492V18.0509C22.75 18.8324 22.7501 19.4934 22.6792 20.0202C22.604 20.5799 22.4366 21.0989 22.0178 21.5178C21.5989 21.9366 21.0799 22.104 20.5202 22.1792C19.9934 22.2501 19.3324 22.25 18.5508 22.25H18.4491C17.6676 22.25 17.0066 22.2501 16.4798 22.1792C15.9201 22.104 15.4011 21.9366 14.9822 21.5178C14.5634 21.0989 14.396 20.5799 14.3208 20.0202C14.2499 19.4934 14.25 18.8324 14.25 18.0508V17.9492C14.25 17.1676 14.2499 16.5066 14.3208 15.9798C14.396 15.4201 14.5634 14.9011 14.9822 14.4822C15.4011 14.0634 15.9201 13.896 16.4798 13.8208C17.0066 13.7499 17.6676 13.75 18.4492 13.75Z',
  d14: 'M22 21.5V14.5H15V21.5H22Z',
  d15: 'M9.5 9V2H2.5V9H9.5Z',
  d16: 'M5.99878 22L9.99878 18L5.99878 14L1.99878 18L5.99878 22Z',
  d17: 'M14.25 14.5C14.25 14.0858 14.5858 13.75 15 13.75H22C22.4142 13.75 22.75 14.0858 22.75 14.5V21.5C22.75 21.9142 22.4142 22.25 22 22.25H15C14.5858 22.25 14.25 21.9142 14.25 21.5V14.5Z',
  d18: 'M1.75 2C1.75 1.58579 2.08579 1.25 2.5 1.25H9.5C9.91421 1.25 10.25 1.58579 10.25 2V9C10.25 9.41421 9.91421 9.75 9.5 9.75H2.5C2.08579 9.75 1.75 9.41421 1.75 9V2Z',
  d19: 'M5.99878 13.25C6.19769 13.25 6.38846 13.329 6.52911 13.4697L10.5291 17.4697C10.822 17.7626 10.822 18.2374 10.5291 18.5303L6.52911 22.5303C6.23622 22.8232 5.76134 22.8232 5.46845 22.5303L1.46845 18.5303C1.3278 18.3897 1.24878 18.1989 1.24878 18C1.24878 17.8011 1.3278 17.6103 1.46845 17.4697L5.46845 13.4697C5.6091 13.329 5.79987 13.25 5.99878 13.25Z',
  d20: 'M7 14V9H5V14H7ZM15 17H10V19H15V17Z',
};

export const IconFlowConnectionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-connection-stroke-rounded IconFlowConnectionStrokeRounded"
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

export const IconFlowConnectionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-connection-duotone-rounded IconFlowConnectionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconFlowConnectionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-connection-twotone-rounded IconFlowConnectionTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFlowConnectionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-connection-solid-rounded IconFlowConnectionSolidRounded"
    >
      <path 
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowConnectionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-connection-bulk-rounded IconFlowConnectionBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconFlowConnectionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-connection-stroke-sharp IconFlowConnectionStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowConnectionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-connection-solid-sharp IconFlowConnectionSolidSharp"
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
        d={d.d19} 
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

export const iconPackOfFlowConnection: TheIconSelfPack = {
  name: 'FlowConnection',
  StrokeRounded: IconFlowConnectionStrokeRounded,
  DuotoneRounded: IconFlowConnectionDuotoneRounded,
  TwotoneRounded: IconFlowConnectionTwotoneRounded,
  SolidRounded: IconFlowConnectionSolidRounded,
  BulkRounded: IconFlowConnectionBulkRounded,
  StrokeSharp: IconFlowConnectionStrokeSharp,
  SolidSharp: IconFlowConnectionSolidSharp,
};