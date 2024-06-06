import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 1.99805H21',
  d2: 'M10.7065 21.4609L10.7642 20.356M10.7642 20.356C11.0614 20.4329 11.5801 20.5697 11.8475 20.7115C14.1849 21.9513 14.724 22.3964 15.6596 21.6119L19.6081 17.7118C20.4039 16.7862 19.9641 16.243 18.7478 13.8959C18.6087 13.6272 18.4423 13.1425 18.3685 12.8449M10.7642 20.356C9.6351 20.0638 8.61165 20.1536 7.91851 19.6222C7.80514 19.5353 6.70763 18.3999 5.90132 17.586C5.29549 16.9745 5.90619 16.4083 6.43603 15.7908C6.77273 15.3984 7.07438 14.9695 7.43859 14.6024C9.4572 12.5676 10.8034 11.2337 12.8421 9.26321C13.2363 8.88215 13.7016 8.56682 14.1228 8.21572C14.5986 7.81919 15.1062 7.41506 15.6824 7.92493C16.5414 8.68505 17.6138 9.84696 17.6996 9.96109C18.2242 10.6589 18.0881 11.7144 18.3685 12.8449M10.7642 20.356L18.3685 12.8449M18.3685 12.8449L19.4853 12.7081M8.02515 19.6975L8.98808 18.4665M10.9943 14.5034L12.7186 12.8899M16.506 10.967L17.9194 10.3572M12.6945 9.36507L11.8555 8.48625C11.4739 8.08651 11.4897 7.45339 11.8908 7.07316L12.6923 6.31343C13.0846 5.94148 13.7021 5.94858 14.0858 6.32945L15.529 7.76203M7.40395 14.7199L6.53456 13.8711C6.13911 13.485 5.50489 13.4927 5.11903 13.8884L4.34804 14.6789C3.97057 15.0659 3.96983 15.6825 4.34637 16.0704L5.76263 17.5296',
  d3: 'M15.9196 7.6804L17.681 9.44189C18.4803 10.2411 18.4449 11.7092 18.4929 12.69L11.1842 19.9987C10.2034 19.9507 8.73527 19.9861 7.93604 19.1869L6.17455 17.4254C5.885 17.1358 5.82623 16.7072 6.03778 16.428L7.34708 14.6999L13.1941 8.85294L14.9222 7.54364C15.2014 7.33208 15.63 7.39086 15.9196 7.6804Z',
  d4: 'M3.25098 1.75293H21.251',
  d5: 'M10.9223 21.2089L10.98 20.104M10.98 20.104C11.2772 20.1809 11.7959 20.3177 12.0633 20.4595C14.4007 21.6993 14.9398 22.1444 15.8754 21.3599L19.8239 17.4598C20.6197 16.5342 20.1799 15.991 18.9636 13.6439C18.8245 13.3752 18.6581 12.8905 18.5843 12.5929M10.98 20.104C9.85088 19.8118 8.82743 19.9016 8.13429 19.3702C8.02092 19.2833 6.92341 18.1479 6.1171 17.334C5.51127 16.7225 6.12197 16.1563 6.65181 15.5388C6.98851 15.1464 7.21432 14.8563 7.57853 14.4892M10.98 20.104L18.5843 12.5929M18.5843 12.5929C18.3039 11.4624 18.44 10.4069 17.9154 9.7091C17.8296 9.59497 16.7572 8.43306 15.8982 7.67294C15.322 7.16307 14.8144 7.5672 14.3386 7.96373C13.9174 8.31483 13.4521 8.63016 13.0579 9.01122C11.0192 10.9817 9.59714 12.4544 7.57853 14.4892M18.5843 12.5929L19.7011 12.4561M7.57853 14.4892L6.75034 13.6191C6.3781 13.1357 5.72067 13.2407 5.33481 13.6364L4.56382 14.4269C4.18635 14.8139 4.18561 15.4305 4.56215 15.8184L5.97841 17.2776M8.24093 19.4455L9.20386 18.2145M11.2101 14.2514L12.9344 12.6379M16.7218 10.715L18.1352 10.1052M12.9103 9.11308L12.0713 8.23426C11.6897 7.83452 11.7055 7.2014 12.1066 6.82117L12.9081 6.06144C13.3004 5.68949 13.9179 5.69659 14.3016 6.07746L15.7448 7.51004',
  d6: 'M3 2H21',
  d7: 'M10.6704 21.4609L10.7281 20.356M10.7281 20.356C11.0253 20.4329 11.544 20.5697 11.8114 20.7115C14.1488 21.9513 14.6879 22.3964 15.6235 21.6119L19.572 17.7118C20.3678 16.7862 19.928 16.243 18.7117 13.8959C18.5726 13.6272 18.4062 13.1425 18.3324 12.8449M10.7281 20.356C9.59897 20.0638 8.57552 20.1536 7.88238 19.6222C7.76901 19.5353 6.6715 18.3999 5.86519 17.586C5.25936 16.9745 5.87006 16.4083 6.3999 15.7908C6.7366 15.3984 7.03825 14.9695 7.40246 14.6024C9.42107 12.5676 10.7673 11.2337 12.806 9.26321C13.2002 8.88215 13.6655 8.56682 14.0867 8.21572C14.5625 7.81919 15.0701 7.41506 15.6463 7.92493C16.5053 8.68505 17.5777 9.84696 17.6635 9.96109C18.1881 10.6589 18.052 11.7144 18.3324 12.8449M10.7281 20.356L18.3324 12.8449M18.3324 12.8449L19.4492 12.7081M7.98902 19.6975L8.95195 18.4665M10.9582 14.5034L12.6825 12.8899M16.4699 10.967L17.8833 10.3572M12.6584 9.36507L11.8194 8.48625C11.4378 8.08651 11.4536 7.45339 11.8547 7.07316L12.6562 6.31343C13.0485 5.94148 13.666 5.94858 14.0497 6.32945L15.4929 7.76203M7.36782 14.7199L6.49843 13.8711C6.10298 13.485 5.46876 13.4927 5.0829 13.8884L4.31191 14.6789C3.93444 15.0659 3.9337 15.6825 4.31024 16.0704L5.7265 17.5296',
  d8: 'M13.9378 6.31786L14.6998 7.07978C15.2427 6.93729 15.8257 7.14551 16.1995 7.51934L17.961 9.28083C18.5245 9.84433 18.7515 10.5966 18.8583 11.2453C18.9118 11.5701 18.9397 11.9052 18.957 12.2147L19.2556 12.1206C19.6507 11.9962 20.0718 12.2155 20.1963 12.6106C20.3208 13.0057 20.1014 13.4268 19.7064 13.5513L19.3909 13.6507L20.0536 14.9371C20.2664 15.3503 20.4535 15.7134 20.5745 16.0295C20.7049 16.3703 20.7882 16.7285 20.7317 17.1258C20.6747 17.5262 20.493 17.8441 20.2685 18.1293L16.0038 22.394C15.7187 22.6185 15.4007 22.8002 15.0003 22.8572C14.603 22.9137 14.2449 22.8303 13.904 22.7C13.5879 22.579 13.2248 22.3919 12.8116 22.1791L11.5252 21.5164L11.4258 21.8318C11.3013 22.2269 10.8802 22.4463 10.4851 22.3218C10.09 22.1973 9.87067 21.7761 9.99515 21.3811L10.0892 21.0825C9.77969 21.0652 9.44461 21.0373 9.11979 20.9838C8.47108 20.877 7.71884 20.65 7.15534 20.0865L5.39385 18.325C5.01984 17.951 4.81161 17.3676 4.95449 16.8245L4.19286 16.0628C3.86198 15.732 3.99532 15.1255 4.30296 14.8178L5.14046 13.9803C5.4481 13.6727 6.0546 13.5393 6.38548 13.8702L6.81025 14.295L12.17 8.93525L11.7452 8.51048C11.4143 8.1796 11.5477 7.5731 11.8553 7.26546L12.6928 6.42796C13.0005 6.12032 13.607 5.98698 13.9378 6.31786ZM14.4396 21.2992L12.5621 20.3583C12.3792 20.2666 12.3397 20.0227 12.4844 19.878L17.752 14.6104C17.8967 14.4657 18.1407 14.5051 18.2323 14.6881L19.1732 16.5656C19.2273 16.6956 19.2864 17.0048 19.0897 17.2015L15.0755 21.2157C14.8928 21.3984 14.5755 21.3475 14.4396 21.2992ZM17.4173 11.5224C17.792 11.3458 17.9526 10.8989 17.776 10.5242C17.5994 10.1495 17.1525 9.98891 16.7779 10.1655L16.1805 10.447C15.8058 10.6236 15.6452 11.0705 15.8218 11.4451C15.9983 11.8198 16.4452 11.9804 16.8199 11.8039L17.4173 11.5224ZM13.2087 13.6113C13.5134 13.3307 13.5329 12.8562 13.2523 12.5515C12.9717 12.2468 12.4973 12.2273 12.1926 12.5079L10.4922 14.0737C10.1875 14.3543 10.1679 14.8288 10.4485 15.1335C10.7291 15.4382 11.2036 15.4577 11.5083 15.1771L13.2087 13.6113ZM9.56658 19.1171C9.83811 18.8043 9.80465 18.3306 9.49185 18.0591C9.17905 17.7875 8.70535 17.821 8.43382 18.1338L8.02543 18.6043C7.7539 18.9171 7.78736 19.3908 8.10016 19.6623C8.41297 19.9338 8.88666 19.9004 9.15819 19.5876L9.56658 19.1171Z',
  d9: 'M2 2.125C2 1.57272 2.44772 1.125 3 1.125H21C21.5523 1.125 22 1.57272 22 2.125C22 2.67728 21.5523 3.125 21 3.125H3C2.44772 3.125 2 2.67728 2 2.125Z',
  d10: 'M14.6998 7.07978L13.9378 6.31786C13.607 5.98698 13.0005 6.12032 12.6928 6.42796L11.8553 7.26546C11.5477 7.5731 11.4143 8.1796 11.7452 8.51048L12.17 8.93525L6.81025 14.295L6.38548 13.8702C6.0546 13.5393 5.4481 13.6727 5.14046 13.9803L4.30296 14.8178C3.99532 15.1255 3.86198 15.732 4.19286 16.0628L4.95449 16.8245C4.81161 17.3676 5.01984 17.951 5.39385 18.325L7.15534 20.0865C7.71884 20.65 8.47108 20.877 9.11979 20.9838C9.44461 21.0373 9.77969 21.0652 10.0892 21.0825L9.99515 21.3811C9.87067 21.7761 10.09 22.1973 10.4851 22.3218C10.8802 22.4463 11.3013 22.2269 11.4258 21.8318L11.5252 21.5164L12.8116 22.1791C13.2248 22.3919 13.5879 22.579 13.904 22.7C14.2449 22.8303 14.603 22.9137 15.0003 22.8572C15.4007 22.8002 15.7187 22.6185 16.0038 22.394L20.2685 18.1293C20.493 17.8441 20.6747 17.5262 20.7317 17.1258C20.7882 16.7285 20.7049 16.3703 20.5745 16.0295C20.4535 15.7134 20.2664 15.3503 20.0536 14.9371L19.3909 13.6507L19.7064 13.5513C20.1014 13.4268 20.3208 13.0057 20.1963 12.6106C20.0718 12.2155 19.6507 11.9962 19.2556 12.1206L18.957 12.2147C18.9397 11.9052 18.9118 11.5701 18.8583 11.2453C18.7515 10.5966 18.5245 9.84433 17.961 9.28083L16.1995 7.51934C15.8257 7.14551 15.2427 6.93729 14.6998 7.07978ZM12.5621 20.3583L14.4396 21.2992C14.5755 21.3475 14.8928 21.3984 15.0755 21.2157L19.0897 17.2015C19.2864 17.0048 19.2273 16.6956 19.1732 16.5656L18.2323 14.6881C18.1407 14.5051 17.8967 14.4657 17.752 14.6104L12.4844 19.878C12.3397 20.0227 12.3792 20.2666 12.5621 20.3583Z',
  d11: 'M17.776 10.5242C17.9526 10.8989 17.792 11.3458 17.4173 11.5224L16.8199 11.8039C16.4452 11.9804 15.9983 11.8198 15.8218 11.4451C15.6452 11.0705 15.8058 10.6236 16.1805 10.447L16.7779 10.1655C17.1525 9.98891 17.5994 10.1495 17.776 10.5242ZM13.2523 12.5515C13.5329 12.8562 13.5134 13.3307 13.2087 13.6113L11.5083 15.1771C11.2036 15.4577 10.7291 15.4382 10.4485 15.1335C10.1679 14.8288 10.1875 14.3543 10.4922 14.0737L12.1926 12.5079C12.4973 12.2273 12.9717 12.2468 13.2523 12.5515ZM9.49185 18.0591C9.80465 18.3306 9.83811 18.8043 9.56658 19.1171L9.15819 19.5876C8.88666 19.9004 8.41297 19.9338 8.10016 19.6623C7.78736 19.3908 7.7539 18.9171 8.02543 18.6043L8.43382 18.1338C8.70535 17.821 9.17905 17.7875 9.49185 18.0591Z',
  d12: 'M5.45455 14.7273L4 13.2727M5.45455 14.7273L4 16.1818L6.90909 19.0909L9.81818 19.8182M5.45455 14.7273L12.7273 7.45455M12.7273 7.45455L11.2727 6M12.7273 7.45455L14.1818 6L17.0909 8.90909L17.8182 11.8182M9.81818 19.8182L14.1818 22L20 16.1818L17.8182 11.8182M9.81818 19.8182L17.8182 11.8182M9.81818 19.8182L9.09091 22M17.8182 11.8182L20 11.0909M15.6364 10.3636L16.8622 9.13777M8.36364 17.6364L7.21356 18.7864M12.3636 11.4545L9.45455 14.3636',
  d13: 'M20.2982 16.9851C20.593 16.6903 20.6675 16.2412 20.4831 15.8703L18.945 12.7767L19.9379 12.4425L19.3343 10.6135L18.2744 10.9703L17.8511 9.25321C17.8093 9.08367 17.7222 8.92901 17.5989 8.80578L14.8793 6.08614C14.5038 5.71064 13.8927 5.71292 13.5144 6.09124L12.962 6.64367L11.9013 5.58301L10.4871 6.99722L11.5477 8.05788L5.89089 13.7147L4.83023 12.6541L3.41602 14.0683L4.47668 15.1289L3.92425 15.6814C3.54593 16.0597 3.54365 16.6708 3.91915 17.0463L6.63879 19.7659C6.76202 19.8892 6.91668 19.9763 7.08622 20.0181L8.80334 20.4414L8.44651 21.5013L10.2755 22.1049L10.6097 21.112L13.7034 22.6501C14.0742 22.8345 14.5233 22.76 14.8181 22.4652L20.2982 16.9851ZM11.6818 19.4826L17.3161 13.8483L18.445 16.1189L13.9524 20.6116L11.6818 19.4826ZM14.0219 9.82496L15.0826 8.7643L16.1432 9.82496L15.0826 10.8856L14.0219 9.82496ZM8.71863 17.2496L7.65797 18.3102L6.59731 17.2496L7.65797 16.1889L8.71863 17.2496ZM9.07218 14.0676L11.9006 11.2392L12.9613 12.2998L10.1328 15.1283L9.07218 14.0676Z',
  d14: 'M21 3.25H3V1.25H21V3.25Z',
};

export const IconTrafficIncidentStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-incident-stroke-rounded IconTrafficIncidentStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTrafficIncidentDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-incident-duotone-rounded IconTrafficIncidentDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconTrafficIncidentTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-incident-twotone-rounded IconTrafficIncidentTwotoneRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconTrafficIncidentSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-incident-solid-rounded IconTrafficIncidentSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTrafficIncidentBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-incident-bulk-rounded IconTrafficIncidentBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrafficIncidentStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-incident-stroke-sharp IconTrafficIncidentStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrafficIncidentSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-incident-solid-sharp IconTrafficIncidentSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTrafficIncident: TheIconSelfPack = {
  name: 'TrafficIncident',
  StrokeRounded: IconTrafficIncidentStrokeRounded,
  DuotoneRounded: IconTrafficIncidentDuotoneRounded,
  TwotoneRounded: IconTrafficIncidentTwotoneRounded,
  SolidRounded: IconTrafficIncidentSolidRounded,
  BulkRounded: IconTrafficIncidentBulkRounded,
  StrokeSharp: IconTrafficIncidentStrokeSharp,
  SolidSharp: IconTrafficIncidentSolidSharp,
};