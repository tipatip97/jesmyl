import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 16C2 13.6611 2 12.4917 2.53647 11.6379C2.81621 11.1927 3.19267 10.8162 3.63789 10.5365C4.49167 10 5.66111 10 8 10H16C18.3389 10 19.5083 10 20.3621 10.5365C20.8073 10.8162 21.1838 11.1927 21.4635 11.6379C22 12.4917 22 13.6611 22 16C22 18.3389 22 19.5083 21.4635 20.3621C21.1838 20.8073 20.8073 21.1838 20.3621 21.4635C19.5083 22 18.3389 22 16 22H8C5.66111 22 4.49167 22 3.63789 21.4635C3.19267 21.1838 2.81621 20.8073 2.53647 20.3621C2 19.5083 2 18.3389 2 16Z',
  d2: 'M20 10C20 8.59987 20 7.8998 19.7275 7.36502C19.4878 6.89462 19.1054 6.51217 18.635 6.27248C18.1002 6 17.4001 6 16 6H8C6.59987 6 5.8998 6 5.36502 6.27248C4.89462 6.51217 4.51217 6.89462 4.27248 7.36502C4 7.8998 4 8.59987 4 10',
  d3: 'M18 6C18 4.11438 18 3.17157 17.4142 2.58579C16.8284 2 15.8856 2 14 2H10C8.11438 2 7.17157 2 6.58579 2.58579C6 3.17157 6 4.11438 6 6',
  d4: 'M15 14C15 15.1046 14.1046 16 13 16H11C9.89543 16 9 15.1046 9 14',
  d5: 'M14 2H10C8.11438 2 7.17157 2 6.58579 2.58579C6 3.17157 6 4.11438 6 6H18C18 4.11438 18 3.17157 17.4142 2.58579C16.8284 2 15.8856 2 14 2Z',
  d6: 'M16.0402 5.25C16.7061 5.24999 17.2656 5.24997 17.7234 5.28738C18.2021 5.3265 18.6571 5.41144 19.089 5.63148C19.7475 5.96703 20.283 6.50247 20.6185 7.16103C20.8386 7.59289 20.9235 8.04785 20.9626 8.52657C21 8.98443 21 9.54394 21 10.2098V10.2098V10.25C21 10.8023 20.5523 11.25 20 11.25C19.4477 11.25 19 10.8023 19 10.25C19 9.53343 18.9992 9.05615 18.9693 8.68944C18.9403 8.3344 18.889 8.17194 18.8365 8.06902C18.6927 7.78677 18.4632 7.5573 18.181 7.41349C18.0781 7.36105 17.9156 7.30975 17.5606 7.28074C17.1939 7.25078 16.7166 7.25 16 7.25H8C7.28343 7.25 6.80615 7.25078 6.43944 7.28074C6.0844 7.30975 5.92194 7.36105 5.81902 7.41349C5.53677 7.5573 5.3073 7.78677 5.16349 8.06902C5.11105 8.17194 5.05975 8.3344 5.03074 8.68944C5.00078 9.05615 5 9.53343 5 10.25C5 10.8023 4.55229 11.25 4 11.25C3.44772 11.25 3 10.8023 3 10.25V10.2098V10.2098C2.99999 9.54395 2.99997 8.98444 3.03738 8.52657C3.0765 8.04785 3.16144 7.59289 3.38148 7.16103C3.71704 6.50247 4.25247 5.96704 4.91103 5.63148C5.34289 5.41144 5.79785 5.3265 6.27657 5.28738C6.73444 5.24997 7.29395 5.24999 7.95981 5.25H7.95984H16.0402H16.0402Z',
  d7: 'M9.93417 1.25L10 1.25L14.0658 1.25C14.9523 1.24995 15.7161 1.24991 16.3278 1.33215C16.9833 1.42028 17.6117 1.61902 18.1213 2.12868C18.631 2.63835 18.8297 3.2667 18.9179 3.92221C19.0001 4.53387 19.0001 5.29769 19 6.18417L19 6.25C19 6.80229 18.5523 7.25 18 7.25C17.4477 7.25 17 6.80229 17 6.25C17 5.27893 16.9979 4.65122 16.9357 4.18871C16.8774 3.75497 16.7832 3.61902 16.7071 3.5429C16.631 3.46677 16.495 3.37263 16.0613 3.31431C15.5988 3.25213 14.9711 3.25 14 3.25H10C9.02893 3.25 8.40122 3.25213 7.93871 3.31431C7.50497 3.37263 7.36902 3.46677 7.2929 3.5429C7.21677 3.61902 7.12263 3.75497 7.06431 4.18871C7.00213 4.65122 7 5.27893 7 6.25C7 6.80229 6.55229 7.25 6 7.25C5.44772 7.25 5 6.80229 5 6.25L5 6.18417C4.99995 5.29769 4.99991 4.53387 5.08215 3.92221C5.17028 3.2667 5.36902 2.63835 5.87868 2.12868C6.38835 1.61902 7.0167 1.42028 7.67221 1.33215C8.28387 1.24991 9.04769 1.24995 9.93417 1.25Z',
  d8: 'M16.0391 9.25H16.0391H16.0391H7.96094H7.96093H7.96092C6.82461 9.24999 5.91736 9.24998 5.18963 9.32056C4.44204 9.39306 3.80522 9.54555 3.23886 9.90142C2.69825 10.2411 2.24111 10.6982 1.90142 11.2389C1.54555 11.8052 1.39306 12.442 1.32056 13.1896C1.24998 13.9174 1.24999 14.8246 1.25 15.9609V15.9609V15.9609V16.0391V16.0391V16.0391C1.24999 17.1754 1.24998 18.0826 1.32056 18.8104C1.39306 19.558 1.54555 20.1948 1.90142 20.7611C2.24111 21.3018 2.69825 21.7589 3.23886 22.0986C3.80523 22.4544 4.44204 22.6069 5.18963 22.6794C5.91736 22.75 6.82461 22.75 7.96092 22.75H16.0391C17.1754 22.75 18.0826 22.75 18.8104 22.6794C19.558 22.6069 20.1948 22.4544 20.7611 22.0986C21.3018 21.7589 21.7589 21.3018 22.0986 20.7611C22.4544 20.1948 22.6069 19.558 22.6794 18.8104C22.75 18.0826 22.75 17.1754 22.75 16.0391V15.9609C22.75 14.8246 22.75 13.9174 22.6794 13.1896C22.6069 12.442 22.4544 11.8052 22.0986 11.2389C21.7589 10.6982 21.3018 10.2411 20.7611 9.90142C20.1948 9.54555 19.558 9.39306 18.8104 9.32056C18.0826 9.24998 17.1754 9.24999 16.0391 9.25ZM10 14C10 13.4477 9.55228 13 9 13C8.44772 13 8 13.4477 8 14C8 15.6569 9.34315 17 11 17H13C14.6569 17 16 15.6569 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H11C10.4477 15 10 14.5523 10 14Z',
  d9: 'M16.0391 9.25C17.1754 9.24999 18.0826 9.24998 18.8104 9.32056C19.558 9.39306 20.1948 9.54555 20.7611 9.90142C21.3018 10.2411 21.7589 10.6982 22.0986 11.2389C22.4544 11.8052 22.6069 12.442 22.6794 13.1896C22.75 13.9174 22.75 14.8246 22.75 15.9609V16.0391C22.75 17.1754 22.75 18.0826 22.6794 18.8104C22.6069 19.558 22.4544 20.1948 22.0986 20.7611C21.7589 21.3018 21.3018 21.7589 20.7611 22.0986C20.1948 22.4544 19.558 22.6069 18.8104 22.6794C18.0826 22.75 17.1754 22.75 16.0391 22.75H7.96092C6.82461 22.75 5.91736 22.75 5.18963 22.6794C4.44204 22.6069 3.80522 22.4544 3.23886 22.0986C2.69825 21.7589 2.24111 21.3018 1.90142 20.7611C1.54555 20.1948 1.39306 19.558 1.32056 18.8104C1.24998 18.0826 1.24999 17.1754 1.25 16.0391V16.0391V15.9609V15.9609C1.24999 14.8246 1.24998 13.9174 1.32056 13.1896C1.39306 12.442 1.54555 11.8052 1.90142 11.2389C2.24111 10.6982 2.69825 10.2411 3.23886 9.90142C3.80522 9.54555 4.44204 9.39306 5.18963 9.32056C5.91736 9.24998 6.82462 9.24999 7.96093 9.25H7.96094H16.0391H16.0391Z',
  d10: 'M9 13C9.55228 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 14.4477 13 15 13C15.5523 13 16 13.4477 16 14C16 15.6569 14.6569 17 13 17H11C9.34315 17 8 15.6569 8 14C8 13.4477 8.44772 13 9 13Z',
  d11: 'M16.0402 5.25H7.95983C7.29398 5.24999 6.73442 5.24998 6.27656 5.28738C5.79784 5.3265 5.34288 5.41144 4.91102 5.63148C4.25245 5.96704 3.71702 6.50247 3.38147 7.16104C3.16142 7.59289 3.07648 8.04785 3.03737 8.52658C3.00274 8.9504 3.00018 9.46132 3 10.0631C3.07764 10.0066 3.1573 9.95267 3.23885 9.90142C3.75778 9.57536 4.33585 9.42003 5.00409 9.34053C5.00802 9.0849 5.01571 8.87328 5.03073 8.68944C5.05974 8.3344 5.11104 8.17194 5.16348 8.06902C5.30729 7.78677 5.53676 7.5573 5.819 7.41349C5.92193 7.36105 6.08439 7.30975 6.43943 7.28074C6.80614 7.25078 7.28342 7.25 7.99999 7.25H16C16.7166 7.25 17.1938 7.25078 17.5606 7.28074C17.9156 7.30975 18.0781 7.36105 18.181 7.41349C18.4632 7.5573 18.6927 7.78677 18.8365 8.06902C18.8889 8.17194 18.9402 8.3344 18.9692 8.68944C18.9843 8.87328 18.992 9.08491 18.9959 9.34054C19.6641 9.42004 20.2422 9.57536 20.7611 9.90142C20.8427 9.95267 20.9223 10.0066 21 10.0631C20.9998 9.46132 20.9972 8.9504 20.9626 8.52658C20.9235 8.04785 20.8386 7.59289 20.6185 7.16104C20.283 6.50247 19.7475 5.96704 19.089 5.63148C18.6571 5.41144 18.2021 5.3265 17.7234 5.28738C17.2656 5.24998 16.706 5.24999 16.0402 5.25Z',
  d12: 'M22 22V10H2.00019L2 22H22Z',
  d13: 'M4 10L4.00016 6H20V10',
  d14: 'M6 6L6.00012 2H18V6',
  d15: 'M16 14L14.5 16H9.5L8 14',
  d16: 'M3.25015 6.19996C3.25017 5.6753 3.68544 5.25 4.22237 5.25H19.7778C20.3147 5.25 20.75 5.67533 20.75 6.19999V9.99996H18.8056V7.14999H5.19456L5.19444 10L3.25 9.99993L3.25015 6.19996Z',
  d17: 'M5.25011 2.19997C5.25013 1.67531 5.68185 1.25 6.2144 1.25H17.7857C18.3183 1.25 18.75 1.67533 18.75 2.19999V5.99997H16.8214V3.14999H7.17866L7.17857 6L5.25 5.99994L5.25011 2.19997Z',
  d18: 'M2.00019 9.25C1.58599 9.25 1.2502 9.58578 1.25019 9.99999L1.25 22C1.25 22.1989 1.32901 22.3897 1.46967 22.5303C1.61032 22.671 1.80109 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V10C22.75 9.58579 22.4142 9.25 22 9.25H2.00019ZM8.79922 14.2L7.19922 15.4L8.99922 17.8H14.9992L16.7992 15.4L15.1992 14.2L13.9992 15.8H9.99922L8.79922 14.2Z',
};

export const IconArchive02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-02-stroke-rounded IconArchive02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconArchive02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-02-duotone-rounded IconArchive02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconArchive02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-02-twotone-rounded IconArchive02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconArchive02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-02-solid-rounded IconArchive02SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArchive02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-02-bulk-rounded IconArchive02BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArchive02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-02-stroke-sharp IconArchive02StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconArchive02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-02-solid-sharp IconArchive02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArchive02: TheIconSelfPack = {
  name: 'Archive02',
  StrokeRounded: IconArchive02StrokeRounded,
  DuotoneRounded: IconArchive02DuotoneRounded,
  TwotoneRounded: IconArchive02TwotoneRounded,
  SolidRounded: IconArchive02SolidRounded,
  BulkRounded: IconArchive02BulkRounded,
  StrokeSharp: IconArchive02StrokeSharp,
  SolidSharp: IconArchive02SolidSharp,
};