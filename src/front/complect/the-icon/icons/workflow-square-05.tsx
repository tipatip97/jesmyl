import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 4.4C3 3.26863 3 2.70294 3.35147 2.35147C3.70294 2 4.26863 2 5.4 2H5.6C6.73137 2 7.29706 2 7.64853 2.35147C8 2.70294 8 3.26863 8 4.4V4.6C8 5.73137 8 6.29706 7.64853 6.64853C7.29706 7 6.73137 7 5.6 7H5.4C4.26863 7 3.70294 7 3.35147 6.64853C3 6.29706 3 5.73137 3 4.6V4.4Z',
  d2: 'M16 9.4C16 8.26863 16 7.70294 16.3515 7.35147C16.7029 7 17.2686 7 18.4 7H18.6C19.7314 7 20.2971 7 20.6485 7.35147C21 7.70294 21 8.26863 21 9.4V9.6C21 10.7314 21 11.2971 20.6485 11.6485C20.2971 12 19.7314 12 18.6 12H18.4C17.2686 12 16.7029 12 16.3515 11.6485C16 11.2971 16 10.7314 16 9.6V9.4Z',
  d3: 'M3 14.4C3 13.2686 3 12.7029 3.35147 12.3515C3.70294 12 4.26863 12 5.4 12H5.6C6.73137 12 7.29706 12 7.64853 12.3515C8 12.7029 8 13.2686 8 14.4V14.6C8 15.7314 8 16.2971 7.64853 16.6485C7.29706 17 6.73137 17 5.6 17H5.4C4.26863 17 3.70294 17 3.35147 16.6485C3 16.2971 3 15.7314 3 14.6V14.4Z',
  d4: 'M16 19.4C16 18.2686 16 17.7029 16.3515 17.3515C16.7029 17 17.2686 17 18.4 17H18.6C19.7314 17 20.2971 17 20.6485 17.3515C21 17.7029 21 18.2686 21 19.4V19.6C21 20.7314 21 21.2971 20.6485 21.6485C20.2971 22 19.7314 22 18.6 22H18.4C17.2686 22 16.7029 22 16.3515 21.6485C16 21.2971 16 20.7314 16 19.6V19.4Z',
  d5: 'M8 4.5L15 9.5L9 14.5L16 19.5',
  d6: 'M7.18634 3.91872C7.50735 3.4693 8.1319 3.36521 8.58132 3.68622L15.5813 8.68622C15.8334 8.86631 15.9878 9.1531 15.9994 9.46272C16.0109 9.77234 15.8783 10.0698 15.6403 10.2682L10.6352 14.439L16.5813 18.6862C17.0307 19.0072 17.1348 19.6318 16.8138 20.0812C16.4928 20.5306 15.8683 20.6347 15.4188 20.3137L8.41884 15.3137C8.16671 15.1336 8.01231 14.8468 8.00077 14.5372C7.98923 14.2276 8.12187 13.9301 8.35989 13.7317L13.3649 9.56088L7.41884 5.31369C6.96943 4.99268 6.86534 4.36813 7.18634 3.91872Z',
  d7: 'M5.35304 1.25L5.40001 1.25001H5.60001L5.64697 1.25C6.17232 1.24996 6.6395 1.24992 7.01667 1.30063C7.42661 1.35574 7.84055 1.48283 8.17886 1.82115C8.51718 2.15946 8.64427 2.5734 8.69938 2.98334C8.75009 3.3605 8.75005 3.82767 8.75001 4.35301V4.35305L8.75001 4.40001V4.60001L8.75001 4.64697V4.647C8.75005 5.17234 8.75009 5.63951 8.69938 6.01667C8.64427 6.42661 8.51718 6.84055 8.17886 7.17886C7.84055 7.51718 7.42661 7.64427 7.01667 7.69938C6.63951 7.75009 6.17234 7.75005 5.647 7.75001H5.64697L5.60001 7.75001H5.40001L5.35305 7.75001H5.35301C4.82767 7.75005 4.3605 7.75009 3.98334 7.69938C3.5734 7.64427 3.15946 7.51718 2.82115 7.17886C2.48283 6.84055 2.35574 6.42661 2.30063 6.01667C2.24992 5.6395 2.24996 5.17232 2.25 4.64697L2.25001 4.60001V4.40001L2.25 4.35304C2.24996 3.82769 2.24992 3.36051 2.30063 2.98334C2.35574 2.5734 2.48283 2.15946 2.82115 1.82115C3.15946 1.48283 3.5734 1.35574 3.98334 1.30063C4.36051 1.24992 4.82769 1.24996 5.35304 1.25Z',
  d8: 'M18.353 6.25L18.4 6.25001H18.6L18.647 6.25C19.1723 6.24996 19.6395 6.24992 20.0167 6.30063C20.4266 6.35574 20.8406 6.48283 21.1789 6.82115C21.5172 7.15946 21.6443 7.5734 21.6994 7.98334C21.7501 8.3605 21.7501 8.82767 21.75 9.35301V9.35305L21.75 9.40001V9.60001L21.75 9.64697V9.647C21.7501 10.1723 21.7501 10.6395 21.6994 11.0167C21.6443 11.4266 21.5172 11.8406 21.1789 12.1789C20.8406 12.5172 20.4266 12.6443 20.0167 12.6994C19.6395 12.7501 19.1723 12.7501 18.647 12.75H18.647L18.6 12.75H18.4L18.353 12.75H18.353C17.8277 12.7501 17.3605 12.7501 16.9833 12.6994C16.5734 12.6443 16.1595 12.5172 15.8211 12.1789C15.4828 11.8406 15.3557 11.4266 15.3006 11.0167C15.2499 10.6395 15.25 10.1723 15.25 9.64697L15.25 9.60001V9.40001L15.25 9.35304C15.25 8.82769 15.2499 8.36051 15.3006 7.98334C15.3557 7.5734 15.4828 7.15946 15.8211 6.82115C16.1595 6.48283 16.5734 6.35574 16.9833 6.30063C17.3605 6.24992 17.8277 6.24996 18.353 6.25Z',
  d9: 'M5.35304 11.25L5.40001 11.25H5.60001L5.64697 11.25C6.17232 11.25 6.6395 11.2499 7.01667 11.3006C7.42661 11.3557 7.84055 11.4828 8.17886 11.8211C8.51718 12.1595 8.64427 12.5734 8.69938 12.9833C8.75009 13.3605 8.75005 13.8277 8.75001 14.353V14.353L8.75001 14.4V14.6L8.75001 14.647V14.647C8.75005 15.1723 8.75009 15.6395 8.69938 16.0167C8.64427 16.4266 8.51718 16.8406 8.17886 17.1789C7.84055 17.5172 7.42661 17.6443 7.01667 17.6994C6.63951 17.7501 6.17234 17.7501 5.647 17.75H5.64697L5.60001 17.75H5.40001L5.35305 17.75H5.35301C4.82767 17.7501 4.3605 17.7501 3.98334 17.6994C3.5734 17.6443 3.15946 17.5172 2.82115 17.1789C2.48283 16.8406 2.35574 16.4266 2.30063 16.0167C2.24992 15.6395 2.24996 15.1723 2.25 14.647L2.25001 14.6V14.4L2.25 14.353C2.24996 13.8277 2.24992 13.3605 2.30063 12.9833C2.35574 12.5734 2.48283 12.1595 2.82115 11.8211C3.15946 11.4828 3.5734 11.3557 3.98334 11.3006C4.36051 11.2499 4.82769 11.25 5.35304 11.25Z',
  d10: 'M18.353 16.25L18.4 16.25H18.6L18.647 16.25C19.1723 16.25 19.6395 16.2499 20.0167 16.3006C20.4266 16.3557 20.8406 16.4828 21.1789 16.8211C21.5172 17.1595 21.6443 17.5734 21.6994 17.9833C21.7501 18.3605 21.7501 18.8277 21.75 19.353V19.353L21.75 19.4V19.6L21.75 19.647V19.647C21.7501 20.1723 21.7501 20.6395 21.6994 21.0167C21.6443 21.4266 21.5172 21.8406 21.1789 22.1789C20.8406 22.5172 20.4266 22.6443 20.0167 22.6994C19.6395 22.7501 19.1723 22.7501 18.647 22.75H18.647L18.6 22.75H18.4L18.353 22.75H18.353C17.8277 22.7501 17.3605 22.7501 16.9833 22.6994C16.5734 22.6443 16.1595 22.5172 15.8211 22.1789C15.4828 21.8406 15.3557 21.4266 15.3006 21.0167C15.2499 20.6395 15.25 20.1723 15.25 19.647L15.25 19.6V19.4L15.25 19.353C15.25 18.8277 15.2499 18.3605 15.3006 17.9833C15.3557 17.5734 15.4828 17.1595 15.8211 16.8211C16.1595 16.4828 16.5734 16.3557 16.9833 16.3006C17.3605 16.2499 17.8277 16.25 18.353 16.25Z',
  d11: 'M8.66797 6.2058L13.3646 9.56056L8.73621 13.4176C8.74978 13.6994 8.74975 14.0139 8.74972 14.3526V14.6465C8.74975 14.9693 8.74978 15.2701 8.73803 15.5416L15.2521 20.1945C15.2497 20.0205 15.2497 19.8374 15.2497 19.6466V19.3526C15.2497 18.8273 15.2496 18.3601 15.3003 17.9829C15.3088 17.9197 15.319 17.8564 15.3315 17.7934L10.635 14.4387L15.2632 10.5818C15.2497 10.2999 15.2497 9.98535 15.2497 9.64657V9.35259C15.2497 9.02986 15.2497 8.72903 15.2614 8.45759L8.74734 3.80469C8.74976 3.97863 8.74974 4.16178 8.74972 4.3526V4.64652C8.74977 5.17186 8.74981 5.63906 8.6991 6.01622C8.6906 6.07942 8.6804 6.14271 8.66797 6.2058Z',
  d12: 'M8 7V2H3V7H8Z',
  d13: 'M8 17V12H3V17H8Z',
  d14: 'M21 12V7H16V12H21Z',
  d15: 'M21 22V17H16V22H21Z',
  d16: 'M8 4.5L16 9.5L8 14.5L16 19.5',
  d17: 'M2.25 2C2.25 1.58579 2.58579 1.25 3 1.25H8C8.41421 1.25 8.75 1.58579 8.75 2V7C8.75 7.41421 8.41421 7.75 8 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7V2Z',
  d18: 'M2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H8C8.41421 11.25 8.75 11.5858 8.75 12V17C8.75 17.4142 8.41421 17.75 8 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17V12Z',
  d19: 'M15.25 7C15.25 6.58579 15.5858 6.25 16 6.25H21C21.4142 6.25 21.75 6.58579 21.75 7V12C21.75 12.4142 21.4142 12.75 21 12.75H16C15.5858 12.75 15.25 12.4142 15.25 12V7Z',
  d20: 'M15.25 17C15.25 16.5858 15.5858 16.25 16 16.25H21C21.4142 16.25 21.75 16.5858 21.75 17V22C21.75 22.4142 21.4142 22.75 21 22.75H16C15.5858 22.75 15.25 22.4142 15.25 22V17Z',
  d21: 'M14.1132 9.49998L7.47 5.34797L8.53 3.65198L16.53 8.65198C16.8224 8.83472 17 9.15519 17 9.49998C17 9.84477 16.8224 10.1652 16.53 10.348L9.8868 14.5L16.53 18.652L15.47 20.348L7.47 15.348C7.17762 15.1652 7 14.8448 7 14.5C7 14.1552 7.17762 13.8347 7.47 13.652L14.1132 9.49998Z',
};

export const IconWorkflowSquare05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-05-stroke-rounded IconWorkflowSquare05StrokeRounded"
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

export const IconWorkflowSquare05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-05-duotone-rounded IconWorkflowSquare05DuotoneRounded"
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

export const IconWorkflowSquare05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-05-twotone-rounded IconWorkflowSquare05TwotoneRounded"
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

export const IconWorkflowSquare05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-05-solid-rounded IconWorkflowSquare05SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-05-bulk-rounded IconWorkflowSquare05BulkRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-05-stroke-sharp IconWorkflowSquare05StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-05-solid-sharp IconWorkflowSquare05SolidSharp"
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

export const iconPackOfWorkflowSquare05: TheIconSelfPack = {
  name: 'WorkflowSquare05',
  StrokeRounded: IconWorkflowSquare05StrokeRounded,
  DuotoneRounded: IconWorkflowSquare05DuotoneRounded,
  TwotoneRounded: IconWorkflowSquare05TwotoneRounded,
  SolidRounded: IconWorkflowSquare05SolidRounded,
  BulkRounded: IconWorkflowSquare05BulkRounded,
  StrokeSharp: IconWorkflowSquare05StrokeSharp,
  SolidSharp: IconWorkflowSquare05SolidSharp,
};