import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 5C9 6.65685 7.65685 8 6 8C4.34315 8 3 6.65685 3 5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5Z',
  d2: 'M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5Z',
  d3: 'M9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19Z',
  d4: 'M6 16V8',
  d5: 'M18 8C18 8.93188 18 11.3978 17.8478 11.7654C17.6448 12.2554 17.2554 12.6448 16.7654 12.8478C16.3978 13 15.9319 13 15 13H9C8.06812 13 7.60218 13 7.23463 13.1522C6.74458 13.3552 6.35523 13.7446 6.15224 14.2346C6 14.6022 6 15.0681 6 16',
  d6: 'M5.25 16C5.25 16.4142 5.58579 16.75 6 16.75C6.41421 16.75 6.75 16.4142 6.75 16H5.25ZM6.75 8C6.75 7.58579 6.41421 7.25 6 7.25C5.58579 7.25 5.25 7.58579 5.25 8H6.75ZM16.7654 12.8478L17.0524 13.5407L16.7654 12.8478ZM18.75 8C18.75 7.58579 18.4142 7.25 18 7.25C17.5858 7.25 17.25 7.58579 17.25 8H18.75ZM17.8478 11.7654L18.5407 12.0524V12.0524L17.8478 11.7654ZM6.15224 14.2346L5.45933 13.9476H5.45933L6.15224 14.2346ZM7.23463 13.1522L6.94762 12.4593H6.94762L7.23463 13.1522ZM6.75 16V8H5.25V16H6.75ZM9 13.75H15V12.25H9V13.75ZM15 13.75C15.4557 13.75 15.835 13.7504 16.1454 13.7292C16.4625 13.7076 16.762 13.661 17.0524 13.5407L16.4784 12.1548C16.4012 12.1868 16.284 12.2163 16.0433 12.2327C15.7958 12.2496 15.4762 12.25 15 12.25V13.75ZM17.25 8C17.25 8.46694 17.25 9.30758 17.2312 10.076C17.2218 10.4611 17.2079 10.8192 17.1877 11.0992C17.1776 11.2398 17.1665 11.3515 17.1552 11.4326C17.1408 11.536 17.1336 11.5295 17.1548 11.4784L18.5407 12.0524C18.5999 11.9093 18.6261 11.7453 18.6408 11.6399C18.6586 11.5122 18.6725 11.3637 18.6838 11.2069C18.7065 10.8919 18.7211 10.5064 18.7307 10.1126C18.75 9.32322 18.75 8.46495 18.75 8H17.25ZM17.0524 13.5407C17.7262 13.2616 18.2616 12.7262 18.5407 12.0524L17.1548 11.4784C17.028 11.7846 16.7846 12.028 16.4784 12.1548L17.0524 13.5407ZM6.75 16C6.75 15.5238 6.75041 15.2042 6.76729 14.9567C6.78372 14.716 6.81319 14.5988 6.84515 14.5216L5.45933 13.9476C5.33905 14.238 5.29241 14.5375 5.27077 14.8546C5.24959 15.165 5.25 15.5443 5.25 16H6.75ZM9 12.25C8.54432 12.25 8.165 12.2496 7.85464 12.2708C7.53754 12.2924 7.23801 12.339 6.94762 12.4593L7.52165 13.8452C7.5988 13.8132 7.71601 13.7837 7.95674 13.7673C8.20421 13.7504 8.5238 13.75 9 13.75V12.25ZM6.84515 14.5216C6.97202 14.2154 7.21536 13.972 7.52165 13.8452L6.94762 12.4593C6.27379 12.7384 5.73844 13.2738 5.45933 13.9476L6.84515 14.5216Z',
  d7: 'M6 7C6.55229 7 7 7.44772 7 8V12.1728C7.27761 12.079 7.55764 12.0405 7.83762 12.0213C8.15088 12 8.52937 12 8.96802 12L15 12C15.4796 12 15.7893 11.9995 16.0262 11.9833C16.2542 11.9677 16.3411 11.9411 16.3827 11.9239C16.6117 11.829 16.7968 11.6527 16.9028 11.43C16.9042 11.4213 16.9058 11.4108 16.9076 11.3981C16.9178 11.3247 16.9284 11.2191 16.9384 11.0812C16.9581 10.8071 16.9719 10.4536 16.9813 10.0699C17 9.30497 17 8.46727 17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8V8.00314C19 8.46849 19 9.32761 18.9807 10.1187C18.971 10.514 18.9563 10.9041 18.9332 11.2248C18.9217 11.3844 18.9073 11.539 18.8884 11.6745C18.8737 11.7802 18.8443 11.9726 18.7716 12.148C18.4672 12.8831 17.8831 13.4672 17.1481 13.7716C16.8221 13.9066 16.4922 13.9561 16.1624 13.9787C15.8491 14 15.4706 14 15.032 14L9 14C8.52038 14 8.21074 14.0005 7.97376 14.0167C7.74576 14.0323 7.65893 14.0589 7.61732 14.0761C7.37229 14.1776 7.17762 14.3723 7.07612 14.6173C7.05888 14.6589 7.03227 14.7458 7.01671 14.9738C7.00054 15.2107 7 15.5204 7 16C7 16.5523 6.55229 17 6 17C5.44772 17 5 16.5523 5 16L5 15.968C5 15.9465 5 15.9252 5 15.904V8C5 7.44772 5.44772 7 6 7Z',
  d8: 'M2.25 5C2.25 2.92893 3.92893 1.25 6 1.25C8.07107 1.25 9.75 2.92893 9.75 5C9.75 7.07107 8.07107 8.75 6 8.75C3.92893 8.75 2.25 7.07107 2.25 5Z',
  d9: 'M14.25 5C14.25 2.92893 15.9289 1.25 18 1.25C20.0711 1.25 21.75 2.92893 21.75 5C21.75 7.07107 20.0711 8.75 18 8.75C15.9289 8.75 14.25 7.07107 14.25 5Z',
  d10: 'M2.25 19C2.25 16.9289 3.92893 15.25 6 15.25C8.07107 15.25 9.75 16.9289 9.75 19C9.75 21.0711 8.07107 22.75 6 22.75C3.92893 22.75 2.25 21.0711 2.25 19Z',
  d11: 'M5 8.61351C5.31836 8.70138 5.6537 8.74832 6 8.74832C6.3463 8.74832 6.68164 8.70138 7 8.61351V12.1711C7.27761 12.0773 7.55764 12.0388 7.83762 12.0197C8.15088 11.9983 8.52937 11.9983 8.96802 11.9983L15 11.9983C15.4796 11.9983 15.7893 11.9978 16.0262 11.9816C16.2542 11.9661 16.3411 11.9394 16.3827 11.9222C16.6117 11.8273 16.7968 11.651 16.9028 11.4283C16.9042 11.4197 16.9058 11.4091 16.9076 11.3964C16.9178 11.323 16.9284 11.2174 16.9384 11.0795C16.9581 10.8054 16.9719 10.4519 16.9813 10.0682C16.9933 9.57374 16.9976 9.04886 16.9992 8.61328C17.3178 8.7013 17.6534 8.74832 18 8.74832C18.346 8.74832 18.6811 8.70146 18.9992 8.61374C18.9976 9.05885 18.9932 9.60234 18.9807 10.1171C18.971 10.5123 18.9563 10.9024 18.9332 11.2231C18.9217 11.3827 18.9073 11.5373 18.8884 11.6728C18.8737 11.7786 18.8443 11.9709 18.7716 12.1464C18.4672 12.8815 17.8831 13.4655 17.148 13.77C16.8221 13.905 16.4922 13.9545 16.1624 13.977C15.8491 13.9983 15.4706 13.9983 15.032 13.9983L9 13.9983C8.52038 13.9983 8.21074 13.9989 7.97376 14.015C7.74576 14.0306 7.65893 14.0572 7.61732 14.0744C7.37229 14.1759 7.17761 14.3706 7.07612 14.6156C7.05888 14.6573 7.03227 14.7441 7.01671 14.9721C7.00879 15.0881 7.00463 15.2215 7.00243 15.3838C6.68335 15.2955 6.34718 15.2483 6 15.2483C5.6537 15.2483 5.31836 15.2953 5 15.3831V8.61351Z',
  d12: 'M18 8V13H9C8.06812 13 7.60218 13 7.23463 13.1522C6.74458 13.3552 6.35523 13.7446 6.15224 14.2346C6 14.6022 6 15.0681 6 16',
  d13: 'M5 15.904C5 15.9252 5 15.9465 5 15.968L5 16C5 16.5523 5.44772 17 6 17C6.55229 17 7 16.5523 7 16C7 15.5204 7.00054 15.2107 7.01671 14.9738C7.03227 14.7458 7.05888 14.6589 7.07612 14.6173C7.17762 14.3723 7.37229 14.1776 7.61732 14.0761C7.65893 14.0589 7.74576 14.0323 7.97376 14.0167C8.21074 14.0005 8.52038 14 9 14H18C18.5523 14 19 13.5523 19 13V8H17V12L8.96802 12C8.52937 12 8.15088 12 7.83762 12.0213C7.55764 12.0405 7.27761 12.079 7 12.1728V8H5V15.904Z',
} as const;

export const IconWorkflowCircle04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-04-stroke-rounded IconWorkflowCircle04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWorkflowCircle04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-04-duotone-rounded IconWorkflowCircle04DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconWorkflowCircle04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-04-twotone-rounded IconWorkflowCircle04TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowCircle04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-04-solid-rounded IconWorkflowCircle04SolidRounded"
    >
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

export const IconWorkflowCircle04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-04-bulk-rounded IconWorkflowCircle04BulkRounded"
    >
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

export const IconWorkflowCircle04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-04-stroke-sharp IconWorkflowCircle04StrokeSharp"
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
      <path 
        d={d.d3} 
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowCircle04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-04-solid-sharp IconWorkflowCircle04SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWorkflowCircle04: TheIconSelfPack = {
  name: 'WorkflowCircle04',
  StrokeRounded: IconWorkflowCircle04StrokeRounded,
  DuotoneRounded: IconWorkflowCircle04DuotoneRounded,
  TwotoneRounded: IconWorkflowCircle04TwotoneRounded,
  SolidRounded: IconWorkflowCircle04SolidRounded,
  BulkRounded: IconWorkflowCircle04BulkRounded,
  StrokeSharp: IconWorkflowCircle04StrokeSharp,
  SolidSharp: IconWorkflowCircle04SolidSharp,
};