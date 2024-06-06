import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 14H5C3.58579 14 2.87868 14 2.43934 14.4393C2 14.8787 2 15.5858 2 17V19C2 20.4142 2 21.1213 2.43934 21.5607C2.87868 22 3.58579 22 5 22H19C20.4142 22 21.1213 22 21.5607 21.5607C22 21.1213 22 20.4142 22 19V17C22 15.5858 22 14.8787 21.5607 14.4393C21.1213 14 20.4142 14 19 14Z',
  d2: 'M2 18H22',
  d3: 'M12 18L12 14',
  d4: 'M7 22L7 18',
  d5: 'M17 22L17 18',
  d6: 'M18.8412 11C18.5539 9.80598 17.8362 8.63931 16.3747 7.6C12.4372 4.8 11.9997 2 11.9997 2C11.9997 2 7.93797 5.6 10.2497 10C8.14967 10.32 7.17231 8 6.94613 6.8C5.97628 8.08998 5.20609 9.53564 5.03516 11',
  d7: 'M5 22H19C20.4142 22 21.1213 22 21.5607 21.5607C22 21.1213 22 20.4142 22 19V18H2V19C2 20.4142 2 21.1213 2.43934 21.5607C2.87868 22 3.58579 22 5 22Z',
  d8: 'M19 14H5C3.58579 14 2.87868 14 2.43934 14.4393C2 14.8787 2 15.5858 2 17V18H22V17C22 15.5858 22 14.8787 21.5607 14.4393C21.1213 14 20.4142 14 19 14Z',
  d9: 'M11.25 13.85C11.25 13.5672 11.25 13.4257 11.1621 13.3379C11.0743 13.25 10.9328 13.25 10.65 13.25H4.95063H4.95058H4.95053C4.28571 13.25 3.71288 13.2499 3.25416 13.3116C2.76252 13.3777 2.29126 13.5268 1.90901 13.909C1.52677 14.2913 1.37771 14.7625 1.31161 15.2542C1.24994 15.7129 1.24996 16.2857 1.25 16.9505V16.9506V16.9506C1.25 17.116 1.38403 17.25 1.54937 17.25L10.65 17.25C10.9328 17.25 11.0743 17.25 11.1621 17.1621C11.25 17.0743 11.25 16.9328 11.25 16.65L11.25 13.85ZM1.54938 18.75C1.38403 18.75 1.25 18.884 1.25 19.0494V19.0494V19.0495C1.24996 19.7143 1.24994 20.2871 1.31161 20.7458C1.37771 21.2375 1.52677 21.7087 1.90901 22.091C2.29126 22.4732 2.76252 22.6223 3.25416 22.6884C3.7129 22.7501 4.28575 22.75 4.95061 22.75H4.95062H4.95063H5.65C5.93284 22.75 6.07426 22.75 6.16213 22.6621C6.25 22.5743 6.25 22.4329 6.25 22.15L6.25 19.35C6.25 19.0672 6.25 18.9257 6.16213 18.8379C6.07426 18.75 5.93284 18.75 5.65 18.75H1.54938ZM7.75 22.15C7.75 22.4329 7.75 22.5743 7.83787 22.6621C7.92574 22.75 8.06716 22.75 8.35 22.75L15.65 22.75C15.9328 22.75 16.0743 22.75 16.1621 22.6621C16.25 22.5743 16.25 22.4328 16.25 22.15V19.35C16.25 19.0672 16.25 18.9257 16.1621 18.8379C16.0743 18.75 15.9328 18.75 15.65 18.75L8.35 18.75C8.06716 18.75 7.92574 18.75 7.83787 18.8379C7.75 18.9257 7.75 19.0672 7.75 19.35L7.75 22.15ZM17.75 22.15C17.75 22.4329 17.75 22.5743 17.8379 22.6621C17.9257 22.75 18.0672 22.75 18.35 22.75H19.0494C19.7142 22.75 20.2871 22.7501 20.7458 22.6884C21.2375 22.6223 21.7087 22.4732 22.091 22.091C22.4732 21.7087 22.6223 21.2375 22.6884 20.7458C22.7501 20.2871 22.75 19.7142 22.75 19.0494C22.75 18.884 22.616 18.75 22.4506 18.75L18.35 18.75C18.0672 18.75 17.9257 18.75 17.8379 18.8379C17.75 18.9257 17.75 19.0672 17.75 19.35L17.75 22.15ZM22.4506 17.25C22.616 17.25 22.75 17.116 22.75 16.9506C22.75 16.2858 22.7501 15.7129 22.6884 15.2542C22.6223 14.7625 22.4732 14.2913 22.091 13.909C21.7087 13.5268 21.2375 13.3777 20.7458 13.3116C20.2871 13.2499 19.7143 13.25 19.0495 13.25H19.0494H19.0494H13.35C13.0672 13.25 12.9257 13.25 12.8379 13.3379C12.75 13.4257 12.75 13.5672 12.75 13.85L12.75 16.65C12.75 16.9328 12.75 17.0743 12.8379 17.1621C12.9257 17.25 13.0672 17.25 13.35 17.25L22.4506 17.25Z',
  d10: 'M12.2539 1.29428C12.5101 1.38643 12.6961 1.61008 12.7401 1.87842C12.7549 1.94001 12.7972 2.11177 12.8411 2.24314C12.9291 2.50574 13.0871 2.89776 13.3618 3.37718C13.9095 4.3332 14.9296 5.65181 16.8097 6.9888C18.3611 8.09202 19.5912 9.64965 19.5912 11.5C19.5912 11.9142 19.2554 12.25 18.8412 12.25L5.03515 12.25C4.62094 12.25 4.28515 11.9142 4.28515 11.5C4.28515 10.6082 4.56077 9.64934 4.93855 8.77405C5.32002 7.8902 5.82853 7.03899 6.34706 6.34931C6.52562 6.11181 6.82755 6.00212 7.11692 6.06963C7.40629 6.13713 7.62852 6.3691 7.68355 6.6611C7.78156 7.18107 8.04595 7.94004 8.48828 8.51039C8.55297 8.59381 8.58532 8.63552 8.64651 8.65396C8.73188 8.67968 8.84526 8.62995 8.88416 8.54972C8.91204 8.49222 8.9003 8.42261 8.87683 8.2834C8.59796 6.6297 9.018 5.15102 9.58763 4.01406C9.98452 3.22187 10.4576 2.58458 10.8296 2.14606C11.0164 1.92592 11.2609 1.65295 11.5026 1.43874C11.7078 1.25687 11.9959 1.20147 12.2539 1.29428Z',
  d11: 'M19.0494 13.25C19.7143 13.25 20.2871 13.2499 20.7458 13.3116C21.2375 13.3777 21.7087 13.5268 22.091 13.909C22.4732 14.2913 22.6223 14.7625 22.6884 15.2542C22.7501 15.7129 22.75 16.2858 22.75 16.9506V19.0494C22.75 19.7142 22.7501 20.2871 22.6884 20.7458C22.6223 21.2375 22.4732 21.7087 22.091 22.091C21.7087 22.4732 21.2375 22.6223 20.7458 22.6884C20.2871 22.7501 19.7142 22.75 19.0494 22.75H4.95063H4.95062C4.28576 22.75 3.7129 22.7501 3.25416 22.6884C2.76252 22.6223 2.29126 22.4732 1.90901 22.091C1.52676 21.7087 1.3777 21.2375 1.31161 20.7458C1.24993 20.2871 1.24996 19.7143 1.25 19.0494V19.0494V16.9506V16.9506C1.24996 16.2857 1.24993 15.7129 1.31161 15.2542C1.3777 14.7625 1.52676 14.2913 1.90901 13.909C2.29126 13.5268 2.76252 13.3777 3.25416 13.3116C3.71289 13.2499 4.28573 13.25 4.95057 13.25H4.95063H19.0494H19.0494Z',
  d12: 'M11.25 17.25H1.25V18.75H6.25L6.25 22.75H7.75L7.75 18.75H16.25V22.75H17.75V18.75H22.75V17.25H12.75L12.75 13.25H11.25L11.25 17.25Z',
  d13: 'M12.2539 1.29428C12.5101 1.38643 12.6961 1.61008 12.7401 1.87842C12.7549 1.94001 12.7972 2.11177 12.8411 2.24314C12.9291 2.50574 13.0871 2.89776 13.3618 3.37718C13.9095 4.3332 14.9296 5.65181 16.8097 6.9888C18.3611 8.09202 19.5912 9.64965 19.5912 11.5C19.5912 11.9142 19.2554 12.25 18.8412 12.25L5.03516 12.25C4.62094 12.25 4.28516 11.9142 4.28516 11.5C4.28516 10.6082 4.56077 9.64934 4.93855 8.77405C5.32002 7.8902 5.82853 7.03899 6.34706 6.34931C6.52562 6.11181 6.82756 6.00212 7.11692 6.06963C7.40629 6.13713 7.62852 6.3691 7.68356 6.6611C7.78156 7.18107 8.04596 7.94004 8.48828 8.51039C8.55298 8.59381 8.58532 8.63552 8.64651 8.65396C8.73188 8.67968 8.84526 8.62995 8.88417 8.54972C8.91205 8.49222 8.90031 8.42261 8.87683 8.2834C8.59796 6.6297 9.01801 5.15102 9.58763 4.01406C9.98453 3.22187 10.4576 2.58458 10.8296 2.14606C11.0164 1.92592 11.2609 1.65295 11.5026 1.43874C11.7078 1.25687 11.9959 1.20147 12.2539 1.29428Z',
  d14: 'M22 14H2V22H22L22 14Z',
  d15: 'M19 11C19 10 17.9809 8.63931 16.499 7.6C12.5064 4.8 12.0628 2 12.0628 2C12.0628 2 7.94433 5.6 10.2883 10C8.15899 10.32 7.16797 8 6.93863 6.8C5.95522 8.08998 4.96435 9 5.00093 11',
  d16: 'M12.3184 1.29489C12.5731 1.38721 12.7581 1.6097 12.8026 1.87668L12.8043 1.88554C12.8066 1.89678 12.811 1.91807 12.8185 1.94874C12.8334 2.0101 12.8602 2.10899 12.9047 2.24015C12.9937 2.50231 13.1538 2.89403 13.4322 3.37328C13.9874 4.32894 15.0219 5.6481 16.9296 6.98597C17.7264 7.54474 18.4132 8.19934 18.9083 8.86885C19.39 9.52029 19.75 10.268 19.75 11V12L4.25099 12L4.25099 11.0067C4.21656 9.00587 5.11851 7.88033 5.95578 6.83551C6.0875 6.67114 6.21761 6.50878 6.34222 6.34531C6.52161 6.11001 6.82257 6.00216 7.11057 6.06998C7.39858 6.1378 7.6198 6.3686 7.67534 6.65922C7.77446 7.17789 8.04212 7.93612 8.49057 8.50641C8.66961 8.73409 8.86665 8.92109 9.08753 9.05413C8.49686 7.0886 8.96177 5.32165 9.62794 4.01032C10.0305 3.21782 10.5103 2.58049 10.8874 2.14215C11.0767 1.92207 11.5692 1.43533 11.5692 1.43533C11.7748 1.25567 12.0617 1.20187 12.3184 1.29489Z',
  d17: 'M1.25 17.25H11.25L11.25 13.25H2C1.58579 13.25 1.25 13.5858 1.25 14V17.25Z',
  d18: 'M1.25 18.75V22C1.25 22.1989 1.32902 22.3897 1.46967 22.5303C1.61032 22.671 1.80109 22.75 2 22.75H6.25L6.25 18.75H1.25Z',
  d19: 'M7.75 22.75H16.25V18.75H7.75L7.75 22.75Z',
  d20: 'M17.75 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V18.75H17.75V22.75Z',
  d21: 'M22.75 17.25V14C22.75 13.8011 22.671 13.6103 22.5303 13.4697C22.3897 13.329 22.1989 13.25 22 13.25H12.75L12.75 17.25H22.75Z',
};

export const IconFirewallStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="firewall-stroke-rounded IconFirewallStrokeRounded"
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

export const IconFirewallDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="firewall-duotone-rounded IconFirewallDuotoneRounded"
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

export const IconFirewallTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="firewall-twotone-rounded IconFirewallTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconFirewallSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="firewall-solid-rounded IconFirewallSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconFirewallBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="firewall-bulk-rounded IconFirewallBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFirewallStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="firewall-stroke-sharp IconFirewallStrokeSharp"
    >
      <path 
        d={d.d14} 
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
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconFirewallSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="firewall-solid-sharp IconFirewallSolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFirewall: TheIconSelfPack = {
  name: 'Firewall',
  StrokeRounded: IconFirewallStrokeRounded,
  DuotoneRounded: IconFirewallDuotoneRounded,
  TwotoneRounded: IconFirewallTwotoneRounded,
  SolidRounded: IconFirewallSolidRounded,
  BulkRounded: IconFirewallBulkRounded,
  StrokeSharp: IconFirewallStrokeSharp,
  SolidSharp: IconFirewallSolidSharp,
};