import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.5 10H6.5C5.08579 10 4.37868 10 3.93934 9.56066C3.5 9.12132 3.5 8.41421 3.5 7C3.5 5.58579 3.5 4.87868 3.93934 4.43934C4.37868 4 5.08579 4 6.5 4H7.5C8.91421 4 9.62132 4 10.0607 4.43934C10.5 4.87868 10.5 5.58579 10.5 7C10.5 8.41421 10.5 9.12132 10.0607 9.56066C9.62132 10 8.91421 10 7.5 10Z',
  d2: 'M3.5 6H2',
  d3: 'M22 6H20.5',
  d4: 'M3.15224 18.7654L2.45933 19.0524L2.45933 19.0524L3.15224 18.7654ZM4.23463 19.8478L3.94762 20.5407H3.94762L4.23463 19.8478ZM4.23463 14.1522L3.94762 13.4593L3.94762 13.4593L4.23463 14.1522ZM3.15224 15.2346L2.45933 14.9476V14.9476L3.15224 15.2346ZM21 14.75C21.4142 14.75 21.75 14.4142 21.75 14C21.75 13.5858 21.4142 13.25 21 13.25V14.75ZM21 20.75C21.4142 20.75 21.75 20.4142 21.75 20C21.75 19.5858 21.4142 19.25 21 19.25V20.75ZM20 20.75C20.4142 20.75 20.75 20.4142 20.75 20C20.75 19.5858 20.4142 19.25 20 19.25V20.75ZM20 14.75C20.4142 14.75 20.75 14.4142 20.75 14C20.75 13.5858 20.4142 13.25 20 13.25V14.75ZM2.25 17C2.25 17.4557 2.24959 17.835 2.27077 18.1454C2.29241 18.4625 2.33905 18.762 2.45933 19.0524L3.84515 18.4784C3.81319 18.4012 3.78372 18.284 3.76729 18.0433C3.75041 17.7958 3.75 17.4762 3.75 17H2.25ZM6 19.25C5.5238 19.25 5.20421 19.2496 4.95674 19.2327C4.71602 19.2163 4.5988 19.1868 4.52165 19.1548L3.94762 20.5407C4.23801 20.661 4.53754 20.7076 4.85464 20.7292C5.165 20.7504 5.54432 20.75 6 20.75V19.25ZM2.45933 19.0524C2.73844 19.7262 3.27379 20.2616 3.94762 20.5407L4.52165 19.1548C4.21536 19.028 3.97202 18.7846 3.84515 18.4784L2.45933 19.0524ZM6 13.25C5.54432 13.25 5.165 13.2496 4.85464 13.2708C4.53754 13.2924 4.23801 13.339 3.94762 13.4593L4.52165 14.8452C4.5988 14.8132 4.71602 14.7837 4.95674 14.7673C5.20421 14.7504 5.5238 14.75 6 14.75V13.25ZM3.75 17C3.75 16.5238 3.75041 16.2042 3.76729 15.9567C3.78372 15.716 3.81319 15.5988 3.84515 15.5216L2.45933 14.9476C2.33905 15.238 2.29241 15.5375 2.27077 15.8546C2.24959 16.165 2.25 16.5443 2.25 17H3.75ZM3.94762 13.4593C3.27379 13.7384 2.73844 14.2738 2.45933 14.9476L3.84515 15.5216C3.97202 15.2154 4.21536 14.972 4.52165 14.8452L3.94762 13.4593ZM21 13.25H6V14.75H21V13.25ZM6 20.75H21V19.25H6V20.75ZM20 19.25C19.7765 19.25 19.4824 19.1141 19.2098 18.7053C18.9408 18.3017 18.75 17.701 18.75 17H17.25C17.25 17.9558 17.5069 18.8551 17.9617 19.5373C18.4131 20.2143 19.1189 20.75 20 20.75V19.25ZM18.75 17C18.75 16.299 18.9408 15.6983 19.2098 15.2947C19.4824 14.8859 19.7765 14.75 20 14.75V13.25C19.1189 13.25 18.4131 13.7857 17.9617 14.4627C17.5069 15.1449 17.25 16.0442 17.25 17H18.75Z',
  d5: 'M16.5 10H17.5C18.9142 10 19.6213 10 20.0607 9.56066C20.5 9.12132 20.5 8.41421 20.5 7C20.5 5.58579 20.5 4.87868 20.0607 4.43934C19.6213 4 18.9142 4 17.5 4H16.5C15.0858 4 14.3787 4 13.9393 4.43934C13.5 4.87868 13.5 5.58579 13.5 7C13.5 8.41421 13.5 9.12132 13.9393 9.56066C14.3787 10 15.0858 10 16.5 10Z',
  d6: 'M13.5 6C13.5 5.17157 12.8284 4.5 12 4.5C11.1716 4.5 10.5 5.17157 10.5 6',
  d7: 'M3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H20C18.8954 14 18 15.3431 18 17C18 18.6569 18.8954 20 20 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654Z',
  d8: 'M21.0033 14H4.88975C4.40202 14 4.04066 14.1723 3.75585 14.4515C3.28726 14.9108 3.11891 15.5901 3.04463 16.2429C2.95868 16.9982 2.98971 17.6886 3.20059 18.4377C3.4358 19.2734 4.01985 20 4.88529 20H21.0033M19.4091 20C17.8699 18.5885 17.2378 16.1421 19.4091 14',
  d9: 'M20.9966 14L6.45851 14C5.3836 14 4.84614 14 4.42218 14.1523C3.85691 14.3552 3.4078 14.7446 3.17365 15.2346C2.99805 15.6022 2.99805 16.0681 2.99805 17C2.99805 17.9319 2.99805 18.3978 3.17365 18.7654C3.4078 19.2554 3.85691 19.6448 4.42218 19.8478C4.84614 20 5.3836 20 6.45851 20H20.9966M20.3004 20C19.0262 20 17.9934 18.6569 17.9934 17C17.9934 15.3431 19.0262 14 20.3004 14',
  d10: 'M3.5 6H2M22 6H20.5M13.5 6C13.5 5.17157 12.8284 4.5 12 4.5C11.1716 4.5 10.5 5.17157 10.5 6M7.5 10H6.5C5.08579 10 4.37868 10 3.93934 9.56066C3.5 9.12132 3.5 8.41421 3.5 7C3.5 5.58579 3.5 4.87868 3.93934 4.43934C4.37868 4 5.08579 4 6.5 4H7.5C8.91421 4 9.62132 4 10.0607 4.43934C10.5 4.87868 10.5 5.58579 10.5 7C10.5 8.41421 10.5 9.12132 10.0607 9.56066C9.62132 10 8.91421 10 7.5 10ZM16.5 10H17.5C18.9142 10 19.6213 10 20.0607 9.56066C20.5 9.12132 20.5 8.41421 20.5 7C20.5 5.58579 20.5 4.87868 20.0607 4.43934C19.6213 4 18.9142 4 17.5 4H16.5C15.0858 4 14.3787 4 13.9393 4.43934C13.5 4.87868 13.5 5.58579 13.5 7C13.5 8.41421 13.5 9.12132 13.9393 9.56066C14.3787 10 15.0858 10 16.5 10Z',
  d11: 'M6.11882 12.75L20.775 12.75C21.3135 12.75 21.75 13.1977 21.75 13.75C21.75 14.3023 21.3135 14.75 20.775 14.75H19.8C19.6889 14.75 19.4691 14.8193 19.2324 15.1834C19.0003 15.5405 18.825 16.0915 18.825 16.75C18.825 17.4085 19.0003 17.9595 19.2324 18.3166C19.4691 18.6807 19.6889 18.75 19.8 18.75H20.775C21.3135 18.75 21.75 19.1977 21.75 19.75C21.75 20.3023 21.3135 20.75 20.775 20.75L6.11881 20.75C5.69113 20.75 5.3221 20.75 5.01668 20.7287C4.6951 20.7061 4.37343 20.6566 4.05565 20.5216C3.33895 20.2172 2.76952 19.6331 2.47265 18.8981C2.34102 18.5721 2.29276 18.2422 2.27082 17.9124C2.24998 17.5991 2.24999 17.2206 2.25 16.782V16.718C2.24999 16.2794 2.24998 15.9009 2.27082 15.5876C2.29276 15.2578 2.34102 14.9279 2.47265 14.602C2.76952 13.8669 3.33895 13.2828 4.05565 12.9784C4.37343 12.8434 4.6951 12.7939 5.01668 12.7714C5.32211 12.75 5.69113 12.75 6.11882 12.75ZM17.2565 18.75C17.0081 18.1499 16.875 17.4625 16.875 16.75C16.875 16.0375 17.0081 15.3501 17.2565 14.75H6.15C5.68237 14.75 5.38047 14.7505 5.14942 14.7667C4.92712 14.7823 4.84246 14.8089 4.80188 14.8261C4.56298 14.9276 4.37317 15.1223 4.27422 15.3673C4.25741 15.4089 4.23146 15.4958 4.21629 15.7238C4.20053 15.9607 4.2 16.2704 4.2 16.75C4.2 17.2296 4.20053 17.5393 4.21629 17.7762C4.23146 18.0042 4.25741 18.0911 4.27422 18.1327C4.37317 18.3777 4.56298 18.5724 4.80189 18.6739C4.84246 18.6911 4.92712 18.7177 5.14942 18.7333C5.38047 18.7495 5.68237 18.75 6.15 18.75H17.2565Z',
  d12: 'M1 6C1 5.44772 1.44772 5 2 5H3.5C4.05228 5 4.5 5.44772 4.5 6C4.5 6.55228 4.05228 7 3.5 7H2C1.44772 7 1 6.55228 1 6Z',
  d13: 'M19.5 6C19.5 5.44772 19.9477 5 20.5 5H22C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7H20.5C19.9477 7 19.5 6.55228 19.5 6Z',
  d14: 'M16.4506 3.25H17.5494C18.2142 3.24997 18.7871 3.24994 19.2459 3.31161C19.7375 3.37771 20.2088 3.52677 20.591 3.90902C20.9732 4.29126 21.1223 4.76253 21.1884 5.25416C21.2501 5.71291 21.25 6.28577 21.25 6.95064V7.04938C21.25 7.71424 21.2501 8.2871 21.1884 8.74585C21.1223 9.23749 20.9732 9.70875 20.591 10.091C20.2088 10.4732 19.7375 10.6223 19.2459 10.6884C18.7871 10.7501 18.2142 10.75 17.5494 10.75H16.4506C15.7858 10.75 15.2129 10.7501 14.7542 10.6884C14.2625 10.6223 13.7913 10.4732 13.409 10.091C13.0268 9.70875 12.8777 9.23749 12.8116 8.74585C12.7499 8.28712 12.75 7.71428 12.75 7.04943V6.95063C12.75 6.60839 12.75 6.29047 12.7584 6H12.75C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6H11.2416C11.25 6.29049 11.25 6.60837 11.25 6.95064V7.04938C11.25 7.71424 11.2501 8.2871 11.1884 8.74585C11.1223 9.23749 10.9732 9.70875 10.591 10.091C10.2088 10.4732 9.73749 10.6223 9.24585 10.6884C8.7871 10.7501 8.21424 10.75 7.54938 10.75H6.45064C5.78577 10.75 5.21291 10.7501 4.75416 10.6884C4.26253 10.6223 3.79126 10.4732 3.40902 10.091C3.02677 9.70875 2.87771 9.23749 2.81161 8.74585C2.74994 8.28713 2.74997 7.7143 2.75 7.04948V6.95063C2.74997 6.28581 2.74994 5.71289 2.81161 5.25416C2.87771 4.76253 3.02677 4.29126 3.40902 3.90902C3.79126 3.52677 4.26253 3.37771 4.75416 3.31161C5.21289 3.24994 5.78571 3.24997 6.45053 3.25H7.54938C8.2142 3.24997 8.78713 3.24994 9.24585 3.31161C9.73749 3.37771 10.2088 3.52677 10.591 3.90902C10.6574 3.97538 10.7167 4.04443 10.7698 4.1158C11.1233 3.88449 11.546 3.75 12 3.75C12.454 3.75 12.8767 3.88449 13.2302 4.1158C13.2833 4.04443 13.3427 3.97538 13.409 3.90902C13.7913 3.52677 14.2625 3.37771 14.7542 3.31161C15.2129 3.24994 15.7858 3.24997 16.4506 3.25Z',
  d15: 'M2.85439 5H2C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7H2.75V6.95063C2.74997 6.28581 2.74994 5.71289 2.81161 5.25416C2.8231 5.16871 2.8371 5.08387 2.85439 5ZM21.25 7H22C22.5523 7 23 6.55228 23 6C23 5.44772 22.5523 5 22 5H21.1456C21.1629 5.08387 21.1769 5.16871 21.1884 5.25416C21.2501 5.71291 21.25 6.28577 21.25 6.95064V7Z',
  d16: 'M13.5 10H20.5V4H13.5V10Z',
  d17: 'M3.5 10H10.5V4H3.5V10Z',
  d18: 'M13.5 5.5H10.5',
  d19: 'M18.5283 19.9986H3.01C3.00448 19.9986 3 19.9941 3 19.9886V14.011C3 14.0054 3.00448 14.001 3.01 14.001H18.4818M18.5283 19.9986H20.9682M18.5283 19.9986L18.4818 14.001M20.9995 14.001L18.4818 14.001',
  d20: 'M2 13.75C2 13.1977 2.44772 12.75 3 12.75H21V14.75H19.5V18.75H21V20.75H3C2.44772 20.75 2 20.3023 2 19.75V13.75ZM17.5 18.75V14.75H4V18.75H17.5Z',
  d21: 'M13.5 3.25C13.0858 3.25 12.75 3.58579 12.75 4V5H11.25V4C11.25 3.58579 10.9142 3.25 10.5 3.25H3.5C3.08579 3.25 2.75 3.58579 2.75 4V5H1V7H2.75V10C2.75 10.4142 3.08579 10.75 3.5 10.75H10.5C10.9142 10.75 11.25 10.4142 11.25 10V7H12.75V10C12.75 10.4142 13.0858 10.75 13.5 10.75H20.5C20.9142 10.75 21.25 10.4142 21.25 10V7H23V5H21.25V4C21.25 3.58579 20.9142 3.25 20.5 3.25H13.5Z',
};

export const IconKnowledge02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="knowledge-02-stroke-rounded IconKnowledge02StrokeRounded"
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
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconKnowledge02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="knowledge-02-duotone-rounded IconKnowledge02DuotoneRounded"
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
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKnowledge02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="knowledge-02-twotone-rounded IconKnowledge02TwotoneRounded"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKnowledge02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="knowledge-02-solid-rounded IconKnowledge02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnowledge02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="knowledge-02-bulk-rounded IconKnowledge02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnowledge02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="knowledge-02-stroke-sharp IconKnowledge02StrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnowledge02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="knowledge-02-solid-sharp IconKnowledge02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKnowledge02: TheIconSelfPack = {
  name: 'Knowledge02',
  StrokeRounded: IconKnowledge02StrokeRounded,
  DuotoneRounded: IconKnowledge02DuotoneRounded,
  TwotoneRounded: IconKnowledge02TwotoneRounded,
  SolidRounded: IconKnowledge02SolidRounded,
  BulkRounded: IconKnowledge02BulkRounded,
  StrokeSharp: IconKnowledge02StrokeSharp,
  SolidSharp: IconKnowledge02SolidSharp,
};