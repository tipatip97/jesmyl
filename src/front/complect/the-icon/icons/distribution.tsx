import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.5 10.2653V6H19.5V10.2653C19.5 13.4401 19.5 15.0275 18.5237 16.0137C17.5474 17 15.976 17 12.8333 17H11.1667C8.02397 17 6.45262 17 5.47631 16.0137C4.5 15.0275 4.5 13.4401 4.5 10.2653Z',
  d2: 'M4.5 6L5.22115 4.46154C5.78045 3.26838 6.06009 2.6718 6.62692 2.3359C7.19375 2 7.92084 2 9.375 2H14.625C16.0792 2 16.8062 2 17.3731 2.3359C17.9399 2.6718 18.2196 3.26838 18.7788 4.46154L19.5 6',
  d3: 'M10.5 9H13.5',
  d4: 'M4 22H12M20 22H12M12 22V19.5',
  d5: 'M4.5 5.125C4.08579 5.125 3.75 5.46079 3.75 5.875L3.75 10.1954V10.1954V10.1954C3.74998 11.736 3.74997 12.9677 3.8786 13.9341C4.01152 14.9329 4.29392 15.7604 4.9433 16.4164C5.59372 17.0734 6.41588 17.3601 7.40816 17.4949C8.36637 17.625 9.58689 17.625 11.1107 17.625H12.8893C14.4131 17.625 15.6336 17.625 16.5918 17.4949C17.5841 17.3601 18.4063 17.0734 19.0567 16.4164C19.7061 15.7604 19.9885 14.9329 20.1214 13.9341C20.25 12.9677 20.25 11.736 20.25 10.1953V5.875C20.25 5.46079 19.9142 5.125 19.5 5.125L4.5 5.125ZM10.5 7.875C9.94772 7.875 9.5 8.32271 9.5 8.875C9.5 9.42728 9.94772 9.875 10.5 9.875H13.5C14.0523 9.875 14.5 9.42728 14.5 8.875C14.5 8.32271 14.0523 7.875 13.5 7.875L10.5 7.875Z',
  d6: 'M12 18.375C12.5523 18.375 13 18.8227 13 19.375V20.875L20 20.875C20.5523 20.875 21 21.3227 21 21.875C21 22.4273 20.5523 22.875 20 22.875H4C3.44772 22.875 3 22.4273 3 21.875C3 21.3227 3.44772 20.875 4 20.875H11V19.375C11 18.8227 11.4477 18.375 12 18.375Z',
  d7: 'M9.40754 1.125H14.5925C15.26 1.12498 15.829 1.12496 16.2976 1.16774C16.7948 1.21313 17.2654 1.31233 17.7097 1.56096C18.1614 1.81378 18.4684 2.1551 18.725 2.54655C18.9595 2.90425 19.1836 3.35587 19.4369 3.86618L20.158 5.3191C20.3855 5.77748 20.1765 6.32326 19.6911 6.53812C19.2058 6.75299 18.6279 6.55558 18.4004 6.0972L17.7005 4.687C17.4196 4.12115 17.2426 3.76775 17.0746 3.51159C16.9223 3.27922 16.8185 3.19317 16.7201 3.1381C16.6142 3.07883 16.4569 3.02408 16.1109 2.9925C15.7467 2.95925 15.2722 2.95826 14.5477 2.95826H9.45228C8.7278 2.95826 8.25326 2.95925 7.88911 2.9925C7.5431 3.02408 7.38579 3.07883 7.2799 3.1381C7.18149 3.19317 7.0777 3.27922 6.92537 3.51159C6.75744 3.76775 6.58037 4.12115 6.29952 4.687L5.59959 6.0972C5.37209 6.55558 4.7942 6.75299 4.30885 6.53812C3.8235 6.32326 3.61448 5.77748 3.84199 5.3191L4.54191 3.9089C4.549 3.89462 4.55607 3.88038 4.56311 3.86619C4.81635 3.35588 5.04046 2.90426 5.27496 2.54655C5.53158 2.1551 5.83857 1.81378 6.29031 1.56096C6.73456 1.31233 7.20516 1.21313 7.70236 1.16774C8.17098 1.12496 8.74001 1.12498 9.40754 1.125Z',
  d8: 'M3.75 5.875C3.75 5.46079 4.08579 5.125 4.5 5.125H19.5C19.9142 5.125 20.25 5.46079 20.25 5.875V10.1953C20.25 11.736 20.25 12.9677 20.1214 13.9341C19.9885 14.9329 19.7061 15.7604 19.0567 16.4164C18.4063 17.0734 17.5841 17.3601 16.5918 17.4949C15.6336 17.625 14.4131 17.625 12.8893 17.625H11.1107C9.58689 17.625 8.36637 17.625 7.40816 17.4949C6.41588 17.3601 5.59372 17.0734 4.9433 16.4164C4.29392 15.7604 4.01152 14.9329 3.8786 13.9341C3.74997 12.9677 3.74998 11.736 3.75 10.1954V10.1954V5.875Z',
  d9: 'M9.5 8.875C9.5 8.32272 9.94772 7.875 10.5 7.875H13.5C14.0523 7.875 14.5 8.32272 14.5 8.875C14.5 9.42728 14.0523 9.875 13.5 9.875H10.5C9.94772 9.875 9.5 9.42728 9.5 8.875Z',
  d10: 'M17.9179 5.125H19.5C19.8868 5.125 20.2052 5.41784 20.2457 5.79392C20.2615 5.63633 20.2343 5.4728 20.158 5.3191L19.4369 3.86618C19.1837 3.35588 18.9595 2.90425 18.725 2.54655C18.4684 2.1551 18.1614 1.81378 17.7097 1.56096C17.2654 1.31233 16.7948 1.21313 16.2976 1.16774C15.829 1.12496 15.26 1.12498 14.5925 1.125H9.40754C8.74002 1.12498 8.17098 1.12496 7.70236 1.16774C7.20516 1.21313 6.73456 1.31233 6.29031 1.56096C5.83857 1.81378 5.53158 2.1551 5.27496 2.54655C5.04046 2.90426 4.81635 3.35588 4.56311 3.86619L3.84199 5.3191C3.7657 5.4728 3.7385 5.63633 3.75433 5.79391C3.79476 5.41783 4.11319 5.125 4.5 5.125H6.08213L6.29952 4.687C6.58037 4.12115 6.75744 3.76775 6.92537 3.51159C7.0777 3.27922 7.18149 3.19317 7.2799 3.1381C7.38579 3.07883 7.5431 3.02408 7.88911 2.9925C8.25326 2.95925 8.7278 2.95826 9.45228 2.95826H14.5477C15.2722 2.95826 15.7467 2.95925 16.1109 2.9925C16.4569 3.02408 16.6142 3.07883 16.7201 3.1381C16.8185 3.19317 16.9223 3.27922 17.0746 3.51159C17.2426 3.76775 17.4196 4.12115 17.7005 4.687L17.9179 5.125Z',
  d11: 'M4.5 17V6H19.5V17H4.5Z',
  d12: 'M4.5 6L6.5 2.00001L17.5 2L19.5 6',
  d13: 'M10 9H14',
  d14: 'M3 22H12M21 22L12 22M12 22V19',
  d15: 'M20.25 5.87381L17.9381 1.25L6.06191 1.25L3.75 5.87381L3.75 16.7794C3.75 17.3155 4.18455 17.75 4.72059 17.75L19.2794 17.75C19.8155 17.75 20.25 17.3155 20.25 16.7794V5.87381ZM6.23047 5.24998L7.25988 3.19116L16.7366 3.19116L17.7661 5.24998L6.23047 5.24998ZM10 10.25H14V8.25L10 8.25V10.25Z',
  d16: 'M11 20.75H3V22.75H21V20.75L13 20.75V18.75H11V20.75Z',
} as const;

export const IconDistributionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribution-stroke-rounded IconDistributionStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDistributionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribution-duotone-rounded IconDistributionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDistributionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribution-twotone-rounded IconDistributionTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDistributionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribution-solid-rounded IconDistributionSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDistributionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribution-bulk-rounded IconDistributionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDistributionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribution-stroke-sharp IconDistributionStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDistributionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribution-solid-sharp IconDistributionSolidSharp"
    >
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

export const iconPackOfDistribution: TheIconSelfPack = {
  name: 'Distribution',
  StrokeRounded: IconDistributionStrokeRounded,
  DuotoneRounded: IconDistributionDuotoneRounded,
  TwotoneRounded: IconDistributionTwotoneRounded,
  SolidRounded: IconDistributionSolidRounded,
  BulkRounded: IconDistributionBulkRounded,
  StrokeSharp: IconDistributionStrokeSharp,
  SolidSharp: IconDistributionSolidSharp,
};