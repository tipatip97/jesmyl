import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C21.8652 15.1114 21.9777 13.8094 21.9963 11.5',
  d2: 'M13 6.66667C13 7.95533 14.0074 9 15.25 9H19.975C21.0934 9 22 8.0598 22 6.9C22 5.7402 21.0833 4.80003 19.9649 4.80003C20.0897 3.36433 18.9799 2 17.5 2C16.2055 2 15.143 3.03069 15.0342 4.34393C13.8928 4.45657 13 5.45349 13 6.66667Z',
  d3: 'M11 15H13',
  d4: 'M12 18V22',
  d5: 'M8 22H16',
  d6: 'M10 2H14C15.2251 2 16.2214 2 17.0494 2.04244C15.9663 2.24903 15.1301 3.1868 15.0342 4.34393C13.8928 4.45657 13 5.45349 13 6.66667C13 7.95533 14.0074 9 15.25 9H19.975C20.9765 9 21.8081 8.24609 21.9711 7.25571C22 8.02074 22 8.92173 22 10C22 13.2792 22 14.9188 21.1862 16.0811C20.8851 16.5111 20.5111 16.8851 20.0811 17.1862C18.9188 18 17.2792 18 14 18H10C6.72077 18 5.08116 18 3.91891 17.1862C3.48891 16.8851 3.1149 16.5111 2.81382 16.0811C2 14.9188 2 13.2792 2 10C2 6.72077 2 5.08116 2.81382 3.91891C3.1149 3.48891 3.48891 3.1149 3.91891 2.81382C5.08116 2 6.72077 2 10 2Z',
  d7: 'M14.6291 3.46381C14.9925 2.05994 16.2339 1 17.7461 1C19.4542 1 20.737 2.34919 20.9418 3.89911C22.1335 4.23013 22.9961 5.35041 22.9961 6.65C22.9961 8.19807 21.7792 9.5 20.2211 9.5H15.4961C13.8138 9.5 12.4961 8.0936 12.4961 6.41667C12.4961 5.04042 13.3812 3.84916 14.6291 3.46381Z',
  d8: 'M10 14C10 13.4477 10.4477 13 11 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H11C10.4477 15 10 14.5523 10 14Z',
  d9: 'M9.94328 1L11 1C11.5523 1 12 1.44772 12 2C12 2.55229 11.5523 3 11 3H10C8.33876 3 7.17091 3.0013 6.27041 3.09622C5.38772 3.18926 4.8778 3.36317 4.49248 3.63297C4.15804 3.86715 3.86715 4.15804 3.63297 4.49248C3.36317 4.8778 3.18926 5.38772 3.09622 6.27041C3.0013 7.17091 3 8.33876 3 10C3 11.6612 3.0013 12.8291 3.09622 13.7296C3.18926 14.6123 3.36317 15.1222 3.63297 15.5075C3.86715 15.842 4.15804 16.1329 4.49248 16.367C4.8778 16.6368 5.38772 16.8107 6.27041 16.9038C7.17091 16.9987 8.33876 17 10 17H14C15.6612 17 16.8291 16.9987 17.7296 16.9038C18.6123 16.8107 19.1222 16.6368 19.5075 16.367C19.842 16.1329 20.1329 15.842 20.367 15.5075C20.8376 14.8355 20.9772 13.866 20.9963 11.4919C21.0008 10.9397 21.4521 10.4956 22.0044 10.5C22.5566 10.5045 23.0007 10.9558 22.9963 11.5081C22.9782 13.7528 22.8928 15.3873 22.0053 16.6547C21.6373 17.1802 21.1802 17.6373 20.6547 18.0053C19.8777 18.5494 18.9867 18.7824 17.9392 18.8928C16.9216 19 15.6482 19 14.0567 19H13.4C13.0229 19 13 19.0229 13 19.4V20C13 20.8273 13.1727 21 14 21H16C16.5523 21 17 21.4477 17 22C17 22.5523 16.5523 23 16 23H8C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21H10C10.8273 21 11 20.8273 11 20V19.4C11 19.0229 10.9771 19 10.6 19H9.94327C8.35178 19 7.07837 19 6.06076 18.8928C5.01328 18.7824 4.12227 18.5494 3.34533 18.0053C2.81978 17.6373 2.36266 17.1802 1.99466 16.6547C1.45065 15.8777 1.21765 14.9867 1.10724 13.9392C0.999973 12.9216 0.999985 11.6482 1 10.0567V9.94328C0.999985 8.35179 0.999973 7.07838 1.10724 6.06076C1.21765 5.01328 1.45065 4.12227 1.99466 3.34533C2.36266 2.81978 2.81978 2.36266 3.34533 1.99466C4.12227 1.45065 5.01328 1.21765 6.06076 1.10724C7.07838 0.999973 8.35179 0.999985 9.94328 1Z',
  d10: 'M22 11V18H2V3H11',
  d11: 'M10.5 15H13.5',
  d12: 'M12 18.001V21.9996M12 21.9996H8M12 21.9996H16',
  d13: 'M13 6.66667C13 7.95533 14.0074 9 15.25 9H19.975C21.0934 9 22 8.0598 22 6.9C22 5.7402 21.0934 4.8 19.975 4.8C19.975 4.8 19.975 2 17.5 2C16.2055 2 15.143 3.03069 15.0342 4.34393C13.8928 4.45657 13 5.45349 13 6.66667Z',
  d14: 'M14.383 3.71381C14.7464 2.30994 15.9878 1.25 17.5 1.25C19.2081 1.25 20.4909 2.59919 20.6957 4.14911C21.8874 4.48013 22.75 5.60041 22.75 6.9C22.75 8.44807 21.5331 9.75 19.975 9.75H15.25C13.5677 9.75 12.25 8.3436 12.25 6.66667C12.25 5.29042 13.1351 4.09916 14.383 3.71381Z',
  d15: 'M13.5 15.25H10.5V13.25H13.5V15.25Z',
  d16: 'M2.22727 1.25C1.68754 1.25 1.25 1.68528 1.25 2.22222V17.7778C1.25 18.3147 1.68754 18.75 2.22727 18.75H9.25V20.75H7V22.75H17V20.75H14.75V18.75H21.7727C22.3125 18.75 22.75 18.3147 22.75 17.7778V12L20.7955 12V16.8056H3.20455V3.19444H11L11 1.25H2.22727Z',
} as const;

export const IconComputerCloudStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-cloud-stroke-rounded IconComputerCloudStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerCloudDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-cloud-duotone-rounded IconComputerCloudDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerCloudTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-cloud-twotone-rounded IconComputerCloudTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerCloudSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-cloud-solid-rounded IconComputerCloudSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerCloudBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-cloud-bulk-rounded IconComputerCloudBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerCloudStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-cloud-stroke-sharp IconComputerCloudStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerCloudSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-cloud-solid-sharp IconComputerCloudSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComputerCloud: TheIconSelfPack = {
  name: 'ComputerCloud',
  StrokeRounded: IconComputerCloudStrokeRounded,
  DuotoneRounded: IconComputerCloudDuotoneRounded,
  TwotoneRounded: IconComputerCloudTwotoneRounded,
  SolidRounded: IconComputerCloudSolidRounded,
  BulkRounded: IconComputerCloudBulkRounded,
  StrokeSharp: IconComputerCloudStrokeSharp,
  SolidSharp: IconComputerCloudSolidSharp,
};