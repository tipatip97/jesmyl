import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.014 2C6.23617 2 4.34725 2 3.17362 3.17157C2 4.34315 2 6.22876 2 10C2 13.7712 2 15.6569 3.17362 16.8284C4.34725 18 6.23617 18 10.014 18H14.021C17.7989 18 19.6878 18 20.8614 16.8284C21.671 16.0203 21.9221 14.8723 22 13',
  d2: 'M12 18V22',
  d3: 'M8 22H16',
  d4: 'M11 15H13',
  d5: 'M17.4991 2C16.0744 2 15.1506 2.90855 14.0581 3.23971C13.6138 3.37436 13.3917 3.44168 13.3018 3.53659C13.2119 3.6315 13.1856 3.77019 13.133 4.04756C12.5696 7.0157 13.801 9.75979 16.7375 10.8279C17.053 10.9426 17.2108 11 17.5007 11C17.7906 11 17.9484 10.9426 18.2639 10.8279C21.2002 9.75978 22.4304 7.01569 21.8669 4.04756C21.8142 3.77014 21.7879 3.63143 21.698 3.53652C21.6081 3.44161 21.386 3.37432 20.9418 3.23974C19.8488 2.90862 18.9239 2 17.4991 2Z',
  d6: 'M10 2H14C15.1954 2 16.1728 2 16.9888 2.03942C16.3166 2.1437 15.7543 2.43834 15.2115 2.72278C14.8279 2.92377 14.4541 3.11967 14.0581 3.23971C13.6138 3.37436 13.3917 3.44168 13.3018 3.53659C13.2119 3.6315 13.1856 3.77019 13.133 4.04756C12.5696 7.0157 13.801 9.75979 16.7375 10.8279C17.053 10.9426 17.2108 11 17.5007 11C17.7906 11 17.9484 10.9426 18.2639 10.8279C20.3855 10.0561 21.6164 8.40937 21.9236 6.43535C22 7.35755 22 8.50938 22 10C22 13.2792 22 14.9188 21.1862 16.0811C20.8851 16.5111 20.5111 16.8851 20.0811 17.1862C18.9188 18 17.2792 18 14 18H10C6.72077 18 5.08116 18 3.91891 17.1862C3.48891 16.8851 3.1149 16.5111 2.81382 16.0811C2 14.9188 2 13.2792 2 10C2 6.72077 2 5.08116 2.81382 3.91891C3.1149 3.48891 3.48891 3.1149 3.91891 2.81382C5.08116 2 6.72077 2 10 2Z',
  d7: 'M10.0591 1.25H9.98771C8.2024 1.24997 6.76371 1.24995 5.63228 1.40102C4.45786 1.55783 3.46916 1.89323 2.68377 2.67319C1.89815 3.45338 1.5601 4.43595 1.40209 5.60306C1.24993 6.72702 1.24995 8.15604 1.24998 9.92874V10.0712C1.24995 11.8439 1.24993 13.273 1.40209 14.3969C1.5601 15.5641 1.89815 16.5466 2.68377 17.3268C3.46916 18.1068 4.45786 18.4422 5.63228 18.599C6.72228 18.7445 8.09743 18.7498 9.79296 18.75C9.81346 19.0807 9.79739 19.5402 9.74781 19.8083C9.68184 20.165 9.64885 20.3434 9.3772 20.5694C9.10554 20.7954 8.8385 20.7954 8.30443 20.7954H7.11397C6.57424 20.7954 6.1367 21.233 6.1367 21.7727C6.1367 22.3124 6.57424 22.75 7.11397 22.75H16.8867C17.4264 22.75 17.864 22.3124 17.864 21.7727C17.864 21.233 17.4264 20.7954 16.8867 20.7954H15.6962C15.1621 20.7954 14.8951 20.7954 14.6234 20.5694C14.3518 20.3434 14.3188 20.165 14.2528 19.8083C14.2032 19.5402 14.1872 19.0807 14.2077 18.75C15.9186 18.7499 17.3047 18.7455 18.4019 18.599C19.5763 18.4422 20.565 18.1068 21.3504 17.3268C22.4296 16.255 22.6725 14.7895 22.7491 12.9571C22.7716 12.4206 22.3526 11.9676 21.8133 11.9453C21.274 11.923 20.8187 12.3398 20.7963 12.8763C20.7206 14.6845 20.4727 15.451 19.9695 15.9507C19.608 16.3098 19.1002 16.5439 18.1419 16.6718C17.1557 16.8035 15.8486 16.8056 13.9751 16.8056H10.0591C8.18555 16.8056 6.87852 16.8035 5.89227 16.6718C4.93396 16.5439 4.4262 16.3098 4.06463 15.9507C3.7033 15.5918 3.46788 15.0883 3.33915 14.1374C3.20661 13.1584 3.20452 11.8608 3.20452 10C3.20452 8.13923 3.20661 6.84162 3.33915 5.8626C3.46788 4.91172 3.7033 4.40815 4.06463 4.04932C4.4262 3.69025 4.93396 3.45614 5.89227 3.32819C6.87851 3.1965 8.18555 3.19445 10.0591 3.19445C10.5989 3.19445 11.0364 2.75917 11.0364 2.22222C11.0364 1.68528 10.5989 1.25 10.0591 1.25Z',
  d8: 'M15.3238 1.82275C15.9099 1.53431 16.6191 1.25 17.5001 1.25C18.381 1.25 19.0905 1.5343 19.6769 1.82271C19.8714 1.91841 20.0421 2.00789 20.1989 2.09005C20.5527 2.27543 20.8354 2.42358 21.1601 2.52196C21.364 2.58373 21.5708 2.64634 21.7152 2.7001C21.8411 2.74694 22.0683 2.83594 22.2434 3.02072C22.3983 3.1843 22.4724 3.36418 22.5156 3.50776C22.5516 3.6276 22.5822 3.78901 22.6046 3.90766C23.2248 7.17405 21.8601 10.3182 18.5212 11.5327C18.2141 11.6445 17.9243 11.75 17.5016 11.75C17.079 11.75 16.7891 11.6445 16.4821 11.5327C13.1431 10.3183 11.7771 7.17434 12.3971 3.90771C12.4195 3.78907 12.4501 3.62769 12.4861 3.50785C12.5292 3.36428 12.6033 3.18442 12.7582 3.02085C12.9333 2.83606 13.1605 2.74702 13.2863 2.70018C13.4308 2.6464 13.6375 2.58375 13.8414 2.52195C14.166 2.42359 14.4484 2.2755 14.8018 2.09017C14.9586 2.00799 15.1293 1.91849 15.3238 1.82275Z',
  d9: 'M10 15C10 14.4477 10.4477 14 11 14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H11C10.4477 16 10 15.5523 10 15Z',
  d10: 'M10.0591 1.25H9.98771H9.98769C8.20239 1.24997 6.76371 1.24995 5.63228 1.40102C4.45786 1.55783 3.46916 1.89323 2.68377 2.67319C1.89815 3.45338 1.5601 4.43595 1.40209 5.60306C1.24993 6.72701 1.24995 8.15603 1.24998 9.92872V9.92874V10.0712V10.0713C1.24995 11.844 1.24993 13.273 1.40209 14.3969C1.5601 15.5641 1.89815 16.5466 2.68377 17.3268C3.46916 18.1068 4.45786 18.4422 5.63228 18.599C6.72228 18.7445 8.09743 18.7498 9.79296 18.75L14.2077 18.75C15.9186 18.7499 17.3047 18.7455 18.4019 18.599C19.5763 18.4422 20.565 18.1068 21.3504 17.3268C22.4296 16.255 22.6725 14.7895 22.7491 12.9571C22.7716 12.4206 22.3526 11.9676 21.8133 11.9453C21.274 11.923 20.8187 12.3398 20.7963 12.8763C20.7206 14.6845 20.4727 15.451 19.9695 15.9507C19.608 16.3098 19.1002 16.5439 18.1419 16.6718C17.1557 16.8035 15.8486 16.8056 13.9751 16.8056H10.0591C8.18555 16.8056 6.87852 16.8035 5.89227 16.6718C4.93396 16.5439 4.4262 16.3098 4.06463 15.9507C3.7033 15.5918 3.46788 15.0883 3.33915 14.1374C3.20661 13.1584 3.20452 11.8608 3.20452 10C3.20452 8.13923 3.20661 6.84162 3.33915 5.8626C3.46788 4.91172 3.7033 4.40815 4.06463 4.04932C4.4262 3.69025 4.93396 3.45614 5.89227 3.32819C6.87851 3.1965 8.18555 3.19445 10.0591 3.19445C10.5989 3.19445 11.0364 2.75917 11.0364 2.22222C11.0364 1.68528 10.5989 1.25 10.0591 1.25Z',
  d11: 'M9.79296 18.75C9.81346 19.0807 9.7974 19.5402 9.74782 19.8083C9.68185 20.165 9.64886 20.3434 9.3772 20.5694C9.10554 20.7954 8.83851 20.7954 8.30443 20.7954H7.11398C6.57424 20.7954 6.1367 21.233 6.1367 21.7727C6.1367 22.3124 6.57424 22.75 7.11398 22.75H16.8867C17.4264 22.75 17.864 22.3124 17.864 21.7727C17.864 21.233 17.4264 20.7954 16.8867 20.7954H15.6962C15.1621 20.7954 14.8951 20.7954 14.6234 20.5694C14.3518 20.3434 14.3188 20.165 14.2528 19.8083C14.2032 19.5402 14.1872 19.0807 14.2077 18.75L9.79296 18.75Z',
  d12: 'M10.0073 2.99707L2 2.99731V17.9489H21.9833V12.9649',
  d13: 'M10.4932 14.958H13.4907',
  d14: 'M15.941 2.33961C14.9315 2.88585 14.2493 3.4021 13.2698 3.4021C12.4428 7.35261 13.9446 9.91393 17.3129 10.9371C17.3345 10.9455 17.359 10.947 17.3814 10.9412C21.0377 10.2829 22.7065 7.04906 21.7148 3.28915C20.7984 3.28915 19.9895 2.8385 18.9659 2.32058C18.0087 1.83625 16.8844 1.82914 15.941 2.33961Z',
  d15: 'M11.9817 17.9336V21.9558M11.9817 21.9558H15.9879M11.9817 21.9558H8.00182',
  d16: 'M1.25 3.22059C1.25 2.68455 1.68754 2.25 2.22727 2.25H10L10 4.19118H3.20455V16.8088H20.7955V12.5H22.75V17.7794C22.75 18.3155 22.3125 18.75 21.7727 18.75H2.22727C1.68754 18.75 1.25 18.3155 1.25 17.7794V3.22059Z',
  d17: 'M14.5 20.75H17V22.75H7V20.75H9.5V18H14.5V20.75Z',
  d18: 'M13.5 15.5H10.5V13.5H13.5V15.5Z',
  d19: 'M15.0668 1.98627C15.6946 1.66071 16.4867 1.25 17.5 1.25C18.5177 1.25 19.3106 1.66149 19.9392 1.98767L19.9789 2.00828C20.6459 2.35417 21.1396 2.59801 21.7565 2.59801H22.3437L22.4846 3.16714C22.9972 5.2372 22.7525 7.17947 21.8764 8.7163C20.9979 10.2573 19.5113 11.3406 17.6498 11.7195L17.5 11.75L17.3502 11.7195C15.4887 11.3406 14.0021 10.2573 13.1236 8.71629C12.2475 7.17947 12.0028 5.23719 12.5154 3.16714L12.6564 2.59801H13.2435C13.8616 2.59801 14.3573 2.35383 15.0246 2.00815L15.0668 1.98627Z',
} as const;

export const IconComputerProtectionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-protection-stroke-rounded IconComputerProtectionStrokeRounded"
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

export const IconComputerProtectionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-protection-duotone-rounded IconComputerProtectionDuotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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

export const IconComputerProtectionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-protection-twotone-rounded IconComputerProtectionTwotoneRounded"
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

export const IconComputerProtectionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-protection-solid-rounded IconComputerProtectionSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconComputerProtectionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-protection-bulk-rounded IconComputerProtectionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerProtectionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-protection-stroke-sharp IconComputerProtectionStrokeSharp"
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
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerProtectionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-protection-solid-sharp IconComputerProtectionSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComputerProtection: TheIconSelfPack = {
  name: 'ComputerProtection',
  StrokeRounded: IconComputerProtectionStrokeRounded,
  DuotoneRounded: IconComputerProtectionDuotoneRounded,
  TwotoneRounded: IconComputerProtectionTwotoneRounded,
  SolidRounded: IconComputerProtectionSolidRounded,
  BulkRounded: IconComputerProtectionBulkRounded,
  StrokeSharp: IconComputerProtectionStrokeSharp,
  SolidSharp: IconComputerProtectionSolidSharp,
};