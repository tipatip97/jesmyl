import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M2.5 9H21.5',
  d3: 'M6.99981 6H7.00879',
  d4: 'M10.9998 6H11.0088',
  d5: 'M17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17',
  d6: 'M12.707 15.293L11.2928 16.7072',
  d7: 'M3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 10.8633 21.5 9.87091 21.4773 9H2.52275C2.5 9.87091 2.5 10.8633 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088Z',
  d8: 'M12.0568 1.75H11.9425C9.75179 1.74999 8.03109 1.74998 6.68768 1.93059C5.31102 2.11568 4.21877 2.50272 3.36057 3.36091C2.50237 4.21911 2.11534 5.31137 1.93025 6.68802C1.90789 6.85439 1.88829 7.02654 1.87112 7.20465C1.825 7.6831 1.80193 7.92233 1.95074 8.08616C2.09954 8.25 2.34861 8.25 2.84675 8.25H21.1526C21.6507 8.25 21.8998 8.25 22.0486 8.08616C22.1974 7.92233 22.1743 7.6831 22.1282 7.20465C22.111 7.02654 22.0914 6.85439 22.0691 6.68802C21.884 5.31137 21.4969 4.21911 20.6387 3.36091C19.7805 2.50272 18.6883 2.11568 17.3116 1.93059C15.9682 1.74998 14.2475 1.74999 12.0568 1.75ZM2.74594 9.75H21.2541C21.7205 9.75 21.9538 9.75 22.1001 9.89587C22.2465 10.0417 22.2472 10.2736 22.2487 10.7374V10.7374C22.25 11.1225 22.25 11.5241 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428V11.9426C1.75 11.5239 1.75 11.1224 1.75126 10.7374C1.75277 10.2736 1.75353 10.0417 1.89988 9.89587C2.04622 9.75 2.27946 9.75 2.74594 9.75ZM5.99219 5C5.99219 4.44772 6.4399 4 6.99219 4H7.00117C7.55345 4 8.00117 4.44772 8.00117 5C8.00117 5.55228 7.55345 6 7.00117 6H6.99219C6.4399 6 5.99219 5.55228 5.99219 5ZM10.9922 4C10.4399 4 9.99219 4.44772 9.99219 5C9.99219 5.55228 10.4399 6 10.9922 6H11.0012C11.5535 6 12.0012 5.55228 12.0012 5C12.0012 4.44772 11.5535 4 11.0012 4H10.9922ZM12 14.25C9.65279 14.25 7.75 16.1528 7.75 18.5C7.75 18.9142 7.41421 19.25 7 19.25C6.58579 19.25 6.25 18.9142 6.25 18.5C6.25 15.3244 8.82436 12.75 12 12.75C15.1756 12.75 17.75 15.3244 17.75 18.5C17.75 18.9142 17.4142 19.25 17 19.25C16.5858 19.25 16.25 18.9142 16.25 18.5C16.25 16.1528 14.3472 14.25 12 14.25ZM13.2374 16.2626C13.5303 16.5555 13.5303 17.0304 13.2374 17.3233L11.8231 18.7375C11.5303 19.0304 11.0554 19.0304 10.7625 18.7375C10.4696 18.4446 10.4696 17.9697 10.7625 17.6769L12.1767 16.2626C12.4696 15.9697 12.9445 15.9697 13.2374 16.2626Z',
  d9: 'M2.74594 9.75H21.2541C21.7205 9.75 21.9538 9.75 22.1001 9.89587C22.2465 10.0417 22.2472 10.2736 22.2487 10.7374C22.25 11.1225 22.25 11.5241 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.75 11.5242 1.75 11.1224 1.75126 10.7374C1.75277 10.2736 1.75353 10.0417 1.89988 9.89587C2.04622 9.75 2.27946 9.75 2.74594 9.75Z',
  d10: 'M11.9422 1.75H12.0565H12.0566C14.2472 1.74999 15.9679 1.74998 17.3113 1.93059C18.688 2.11568 19.7803 2.50272 20.6385 3.36091C21.4967 4.21911 21.8837 5.31137 22.0688 6.68802C22.0911 6.85439 22.1107 7.02654 22.1279 7.20465C22.174 7.6831 22.1971 7.92233 22.0483 8.08616C21.8995 8.25 21.6504 8.25 21.1523 8.25H2.84646C2.34832 8.25 2.09925 8.25 1.95044 8.08616C1.80164 7.92233 1.8247 7.6831 1.87083 7.20465C1.888 7.02654 1.90759 6.85439 1.92996 6.68802C2.11505 5.31137 2.50208 4.21911 3.36028 3.36091C4.21848 2.50272 5.31073 2.11568 6.68739 1.93059C8.0308 1.74998 9.75149 1.74999 11.9422 1.75H11.9422ZM6.99023 4C6.43795 4 5.99023 4.44772 5.99023 5C5.99023 5.55228 6.43795 6 6.99023 6H6.99922C7.5515 6 7.99922 5.55228 7.99922 5C7.99922 4.44772 7.5515 4 6.99922 4H6.99023ZM9.99023 5C9.99023 4.44772 10.4379 4 10.9902 4H10.9992C11.5515 4 11.9992 4.44772 11.9992 5C11.9992 5.55228 11.5515 6 10.9992 6H10.9902C10.4379 6 9.99023 5.55228 9.99023 5Z',
  d11: 'M7.75 18.5C7.75 16.1528 9.65279 14.25 12 14.25C14.3472 14.25 16.25 16.1528 16.25 18.5C16.25 18.9142 16.5858 19.25 17 19.25C17.4142 19.25 17.75 18.9142 17.75 18.5C17.75 15.3244 15.1756 12.75 12 12.75C8.82436 12.75 6.25 15.3244 6.25 18.5C6.25 18.9142 6.58579 19.25 7 19.25C7.41421 19.25 7.75 18.9142 7.75 18.5ZM13.2374 17.3233C13.5303 17.0304 13.5303 16.5555 13.2374 16.2626C12.9445 15.9697 12.4696 15.9697 12.1767 16.2626L10.7625 17.6769C10.4696 17.9697 10.4696 18.4446 10.7625 18.7375C11.0554 19.0304 11.5303 19.0304 11.8231 18.7375L13.2374 17.3233Z',
  d12: 'M21 3H3V21H21V3Z',
  d13: 'M2.96875 9H20.9688',
  d14: 'M13.5 14.5L11.2928 16.7072',
  d15: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V8.25H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM6 4.25H8V6.25H6V4.25ZM12 4.25H10V6.25H12V4.25Z',
  d16: 'M21.75 9.75H2.25V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V9.75ZM12 14.375C9.65279 14.375 7.75 16.2778 7.75 18.625H6.25C6.25 15.4494 8.82436 12.875 12 12.875C15.1756 12.875 17.75 15.4494 17.75 18.625H16.25C16.25 16.2778 14.3472 14.375 12 14.375ZM12.9689 15.3572L10.7617 17.5644L11.8224 18.625L14.0296 16.4178L12.9689 15.3572Z',
} as const;

export const IconDashboardBrowsingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-browsing-stroke-rounded IconDashboardBrowsingStrokeRounded"
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

export const IconDashboardBrowsingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-browsing-duotone-rounded IconDashboardBrowsingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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

export const IconDashboardBrowsingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-browsing-twotone-rounded IconDashboardBrowsingTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardBrowsingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-browsing-solid-rounded IconDashboardBrowsingSolidRounded"
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

export const IconDashboardBrowsingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-browsing-bulk-rounded IconDashboardBrowsingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardBrowsingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-browsing-stroke-sharp IconDashboardBrowsingStrokeSharp"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
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

export const IconDashboardBrowsingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-browsing-solid-sharp IconDashboardBrowsingSolidSharp"
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

export const iconPackOfDashboardBrowsing: TheIconSelfPack = {
  name: 'DashboardBrowsing',
  StrokeRounded: IconDashboardBrowsingStrokeRounded,
  DuotoneRounded: IconDashboardBrowsingDuotoneRounded,
  TwotoneRounded: IconDashboardBrowsingTwotoneRounded,
  SolidRounded: IconDashboardBrowsingSolidRounded,
  BulkRounded: IconDashboardBrowsingBulkRounded,
  StrokeSharp: IconDashboardBrowsingStrokeSharp,
  SolidSharp: IconDashboardBrowsingSolidSharp,
};