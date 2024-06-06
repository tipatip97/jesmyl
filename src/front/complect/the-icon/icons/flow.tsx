import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 6.5C21 8.433 19.433 10 17.5 10C15.567 10 14 8.433 14 6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5Z',
  d2: 'M3 6.5C3 4.85008 3 4.02513 3.51256 3.51256C4.02513 3 4.85008 3 6.5 3C8.14992 3 8.97487 3 9.48744 3.51256C10 4.02513 10 4.85008 10 6.5C10 8.14992 10 8.97487 9.48744 9.48744C8.97487 10 8.14992 10 6.5 10C4.85008 10 4.02513 10 3.51256 9.48744C3 8.97487 3 8.14992 3 6.5Z',
  d3: 'M3 17.5C3 15.8501 3 15.0251 3.51256 14.5126C4.02513 14 4.85008 14 6.5 14C8.14992 14 8.97487 14 9.48744 14.5126C10 15.0251 10 15.8501 10 17.5C10 19.1499 10 19.9749 9.48744 20.4874C8.97487 21 8.14992 21 6.5 21C4.85008 21 4.02513 21 3.51256 20.4874C3 19.9749 3 19.1499 3 17.5Z',
  d4: 'M14 17.5C14 15.8501 14 15.0251 14.5126 14.5126C15.0251 14 15.8501 14 17.5 14C19.1499 14 19.9749 14 20.4874 14.5126C21 15.0251 21 15.8501 21 17.5C21 19.1499 21 19.9749 20.4874 20.4874C19.9749 21 19.1499 21 17.5 21C15.8501 21 15.0251 21 14.5126 20.4874C14 19.9749 14 19.1499 14 17.5Z',
  d5: 'M17.5 10V14M14 17.5H10M10 6.5H14',
  d6: 'M13.25 6.5C13.25 4.15279 15.1528 2.25 17.5 2.25C19.8472 2.25 21.75 4.15279 21.75 6.5C21.75 8.84721 19.8472 10.75 17.5 10.75C15.1528 10.75 13.25 8.84721 13.25 6.5Z',
  d7: 'M6.44916 2.25L6.5 2.25L6.55085 2.25H6.55089C7.33242 2.24997 7.99342 2.24994 8.52016 2.32076C9.07988 2.39601 9.59891 2.56338 10.0178 2.98224C10.4366 3.40109 10.604 3.92013 10.6792 4.47984C10.7501 5.00659 10.75 5.66759 10.75 6.44912V6.44916V6.55084V6.55088C10.75 7.33241 10.7501 7.99342 10.6792 8.52016C10.604 9.07988 10.4366 9.59891 10.0178 10.0178C9.59891 10.4366 9.07988 10.604 8.52016 10.6792C7.99342 10.7501 7.33241 10.75 6.55088 10.75H6.55084H6.44916H6.44912C5.66759 10.75 5.00659 10.7501 4.47984 10.6792C3.92013 10.604 3.40109 10.4366 2.98224 10.0178C2.56338 9.59891 2.39601 9.07988 2.32076 8.52016C2.24994 7.99342 2.24997 7.33242 2.25 6.55089V6.55085L2.25 6.5L2.25 6.44916V6.44912C2.24997 5.66759 2.24994 5.00659 2.32076 4.47984C2.39601 3.92013 2.56338 3.40109 2.98224 2.98224C3.40109 2.56338 3.92013 2.39601 4.47984 2.32076C5.00659 2.24994 5.66759 2.24997 6.44912 2.25H6.44916Z',
  d8: 'M6.44916 13.25L6.5 13.25L6.55085 13.25H6.55089C7.33242 13.25 7.99342 13.2499 8.52016 13.3208C9.07988 13.396 9.59891 13.5634 10.0178 13.9822C10.4366 14.4011 10.604 14.9201 10.6792 15.4798C10.7501 16.0066 10.75 16.6676 10.75 17.4491V17.4492V17.5508V17.5509C10.75 18.3324 10.7501 18.9934 10.6792 19.5202C10.604 20.0799 10.4366 20.5989 10.0178 21.0178C9.59891 21.4366 9.07988 21.604 8.52016 21.6792C7.99342 21.7501 7.33241 21.75 6.55088 21.75H6.55084H6.44916H6.44912C5.66759 21.75 5.00659 21.7501 4.47984 21.6792C3.92013 21.604 3.40109 21.4366 2.98224 21.0178C2.56338 20.5989 2.39601 20.0799 2.32076 19.5202C2.24994 18.9934 2.24997 18.3324 2.25 17.5509V17.5508L2.25 17.5L2.25 17.4492V17.4491C2.24997 16.6676 2.24994 16.0066 2.32076 15.4798C2.39601 14.9201 2.56338 14.4011 2.98224 13.9822C3.40109 13.5634 3.92013 13.396 4.47984 13.3208C5.00659 13.2499 5.66759 13.25 6.44912 13.25H6.44916Z',
  d9: 'M17.4492 13.25L17.5 13.25L17.5508 13.25H17.5509C18.3324 13.25 18.9934 13.2499 19.5202 13.3208C20.0799 13.396 20.5989 13.5634 21.0178 13.9822C21.4366 14.4011 21.604 14.9201 21.6792 15.4798C21.7501 16.0066 21.75 16.6676 21.75 17.4491V17.4492V17.5508V17.5509C21.75 18.3324 21.7501 18.9934 21.6792 19.5202C21.604 20.0799 21.4366 20.5989 21.0178 21.0178C20.5989 21.4366 20.0799 21.604 19.5202 21.6792C18.9934 21.7501 18.3324 21.75 17.5509 21.75H17.5508H17.4492H17.4491C16.6676 21.75 16.0066 21.7501 15.4798 21.6792C14.9201 21.604 14.4011 21.4366 13.9822 21.0178C13.5634 20.5989 13.396 20.0799 13.3208 19.5202C13.2499 18.9934 13.25 18.3324 13.25 17.5509V17.5508L13.25 17.5L13.25 17.4492V17.4491C13.25 16.6676 13.2499 16.0066 13.3208 15.4798C13.396 14.9201 13.5634 14.4011 13.9822 13.9822C14.4011 13.5634 14.9201 13.396 15.4798 13.3208C16.0066 13.2499 16.6676 13.25 17.4491 13.25H17.4492Z',
  d10: 'M9 6.5C9 5.94772 9.44772 5.5 10 5.5H14C14.5523 5.5 15 5.94772 15 6.5C15 7.05228 14.5523 7.5 14 7.5H10C9.44772 7.5 9 7.05228 9 6.5ZM17.5 9C18.0523 9 18.5 9.44772 18.5 10V14C18.5 14.5523 18.0523 15 17.5 15C16.9477 15 16.5 14.5523 16.5 14V10C16.5 9.44772 16.9477 9 17.5 9ZM9 17.5C9 16.9477 9.44772 16.5 10 16.5H14C14.5523 16.5 15 16.9477 15 17.5C15 18.0523 14.5523 18.5 14 18.5H10C9.44772 18.5 9 18.0523 9 17.5Z',
  d11: 'M13.3683 5.5C13.291 5.82069 13.25 6.15556 13.25 6.5C13.25 6.84444 13.291 7.17931 13.3683 7.5H10.7441C10.7499 7.20712 10.7499 6.89038 10.7499 6.55089V6.44916C10.7499 6.10966 10.7499 5.79289 10.7441 5.5H13.3683Z',
  d12: 'M16.4999 10.6317C16.8206 10.709 17.1555 10.75 17.5 10.75C17.8444 10.75 18.1792 10.709 18.4999 10.6317V13.2558C18.207 13.25 17.8903 13.25 17.5508 13.25H17.4491C17.1096 13.25 16.7928 13.25 16.4999 13.2558V10.6317Z',
  d13: 'M10.7441 18.5C10.7499 18.2071 10.7499 17.8904 10.7499 17.5509V17.4492C10.7499 17.1097 10.7499 16.7929 10.7441 16.5H13.2557C13.2499 16.7929 13.2499 17.1097 13.2499 17.4492V17.5508C13.2499 17.8903 13.2499 18.2071 13.2557 18.5H10.7441Z',
  d14: 'M9.5 9.5V3H3V9.5H9.5Z',
  d15: 'M9.5 20.5V14H3V20.5H9.5Z',
  d16: 'M20.5 20.5V14H14V20.5H20.5Z',
  d17: 'M13.25 6.75C13.25 4.40279 15.1528 2.5 17.5 2.5C19.8472 2.5 21.75 4.40279 21.75 6.75C21.75 9.09721 19.8472 11 17.5 11C15.1528 11 13.25 9.09721 13.25 6.75Z',
  d18: 'M2.25 3.25C2.25 2.83579 2.58579 2.5 3 2.5H9.5C9.91421 2.5 10.25 2.83579 10.25 3.25V9.75C10.25 10.1642 9.91421 10.5 9.5 10.5H3C2.58579 10.5 2.25 10.1642 2.25 9.75V3.25Z',
  d19: 'M2.25 14.25C2.25 13.8358 2.58579 13.5 3 13.5H9.5C9.91421 13.5 10.25 13.8358 10.25 14.25V20.75C10.25 21.1642 9.91421 21.5 9.5 21.5H3C2.58579 21.5 2.25 21.1642 2.25 20.75V14.25Z',
  d20: 'M13.25 14.25C13.25 13.8358 13.5858 13.5 14 13.5H20.5C20.9142 13.5 21.25 13.8358 21.25 14.25V20.75C21.25 21.1642 20.9142 21.5 20.5 21.5H14C13.5858 21.5 13.25 21.1642 13.25 20.75V14.25Z',
  d21: 'M14 7.75H10V5.75H14V7.75ZM16.5 14.25V10.25H18.5V14.25H16.5ZM10 16.75H14V18.75H10V16.75Z',
};

export const IconFlowStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-stroke-rounded IconFlowStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-duotone-rounded IconFlowDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-twotone-rounded IconFlowTwotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-solid-rounded IconFlowSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-bulk-rounded IconFlowBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconFlowStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-stroke-sharp IconFlowStrokeSharp"
    >
      <path 
        d={d.d1} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-solid-sharp IconFlowSolidSharp"
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
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlow: TheIconSelfPack = {
  name: 'Flow',
  StrokeRounded: IconFlowStrokeRounded,
  DuotoneRounded: IconFlowDuotoneRounded,
  TwotoneRounded: IconFlowTwotoneRounded,
  SolidRounded: IconFlowSolidRounded,
  BulkRounded: IconFlowBulkRounded,
  StrokeSharp: IconFlowStrokeSharp,
  SolidSharp: IconFlowSolidSharp,
};