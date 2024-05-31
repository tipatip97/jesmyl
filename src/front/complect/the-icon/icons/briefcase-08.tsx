import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 10V17.9861C3 19.9268 4.79086 21.5 7 21.5H17C19.2091 21.5 21 19.9268 21 17.9861V10',
  d2: 'M19.0571 3.5C19.5618 3.5 19.8141 3.5 20.0228 3.55014C20.7343 3.7211 21.29 4.30597 21.4524 5.05496C21.5 5.27465 21.5 5.54025 21.5 6.07143C21.5 7.39939 21.5 8.06336 21.3809 8.6126C20.9749 10.4851 19.5858 11.9473 17.807 12.3746C17.2852 12.5 16.6544 12.5 15.3929 12.5H8.60714C7.34558 12.5 6.7148 12.5 6.19303 12.3746C4.41417 11.9473 3.0251 10.4851 2.61909 8.6126C2.5 8.06336 2.5 7.39939 2.5 6.07143C2.5 5.54025 2.5 5.27465 2.54764 5.05496C2.71004 4.30597 3.26567 3.7211 3.97721 3.55014C4.18592 3.5 4.43823 3.5 4.94286 3.5M9.15 3.5H14.85',
  d3: 'M5 4C5 3.53406 5 3.30109 5.07612 3.11732C5.17761 2.87229 5.37229 2.67761 5.61732 2.57612C5.80109 2.5 6.03406 2.5 6.5 2.5H7.5C7.96594 2.5 8.19891 2.5 8.38268 2.57612C8.62771 2.67761 8.82239 2.87229 8.92388 3.11732C9 3.30109 9 3.53406 9 4C9 4.46594 9 4.69891 8.92388 4.88268C8.82239 5.12771 8.62771 5.32239 8.38268 5.42388C8.19891 5.5 7.96594 5.5 7.5 5.5H6.5C6.03406 5.5 5.80109 5.5 5.61732 5.42388C5.37229 5.32239 5.17761 5.12771 5.07612 4.88268C5 4.69891 5 4.46594 5 4Z',
  d4: 'M15 4C15 3.53406 15 3.30109 15.0761 3.11732C15.1776 2.87229 15.3723 2.67761 15.6173 2.57612C15.8011 2.5 16.0341 2.5 16.5 2.5H17.5C17.9659 2.5 18.1989 2.5 18.3827 2.57612C18.6277 2.67761 18.8224 2.87229 18.9239 3.11732C19 3.30109 19 3.53406 19 4C19 4.46594 19 4.69891 18.9239 4.88268C18.8224 5.12771 18.6277 5.32239 18.3827 5.42388C18.1989 5.5 17.9659 5.5 17.5 5.5H16.5C16.0341 5.5 15.8011 5.5 15.6173 5.42388C15.3723 5.32239 15.1776 5.12771 15.0761 4.88268C15 4.69891 15 4.46594 15 4Z',
  d5: 'M7 18H10',
  d6: 'M15.3929 12.5H8.60714C7.34558 12.5 6.7148 12.5 6.19303 12.3746C4.8844 12.0602 3.78673 11.1858 3.1362 10H3V17.9861C3 19.9268 4.79086 21.5 7 21.5H17C19.2091 21.5 21 19.9268 21 17.9861V10H20.8638C20.2133 11.1858 19.1156 12.0602 17.807 12.3746C17.2852 12.5 16.6544 12.5 15.3929 12.5Z',
  d7: 'M2.25195 12.8203C2.25195 12.7297 2.36363 12.6849 2.42799 12.7486C3.30923 13.621 4.41772 14.2621 5.67454 14.5643C6.45935 14.753 7.33522 14.7525 8.35089 14.752L8.49418 14.7519L15.6531 14.752C16.6688 14.7525 17.5445 14.753 18.3294 14.5643C19.5862 14.2621 20.6947 13.621 21.5759 12.7486C21.6403 12.6849 21.752 12.7297 21.752 12.8203V17.9877C21.752 20.431 19.5311 22.2516 17.002 22.2516H7.00195C4.47285 22.2516 2.25195 20.431 2.25195 17.9877V12.8203ZM7.00195 17.25C6.58774 17.25 6.25195 17.5858 6.25195 18C6.25195 18.4142 6.58774 18.75 7.00195 18.75H10.002C10.4162 18.75 10.752 18.4142 10.752 18C10.752 17.5858 10.4162 17.25 10.002 17.25H7.00195Z',
  d8: 'M1.81574 4.89607C1.98146 4.13181 2.45416 3.47787 3.10886 3.09862C3.24299 3.02092 3.31006 2.98207 3.36118 3.01424C3.4123 3.04641 3.40564 3.13218 3.39231 3.30374L3.37623 3.98733C3.3761 4.21084 3.37429 4.43462 3.38951 4.65774C3.4047 4.88031 3.44239 5.18184 3.57604 5.50451C3.84246 6.14771 4.35348 6.65873 4.99668 6.92515C5.46459 7.11897 5.96452 7.12504 6.46235 7.12497H7.5401C8.03793 7.12504 8.53786 7.11897 9.00577 6.92515C9.64897 6.65873 10.16 6.14771 10.4264 5.50451C10.5601 5.18184 10.5978 4.88031 10.6129 4.65774C10.6288 4.4258 10.6263 4.19316 10.6262 3.96082C10.6263 3.7604 10.6263 3.53775 10.6129 3.3422C10.5977 3.11836 10.59 3.00644 10.6122 2.94627C10.6438 2.86055 10.6877 2.81357 10.7711 2.77622C10.8296 2.75 10.9251 2.75 11.1162 2.75H12.8862C13.0773 2.75 13.1729 2.75 13.2314 2.77622C13.3148 2.81357 13.3587 2.86055 13.3902 2.94627C13.4124 3.00644 13.4048 3.11836 13.3895 3.3422C13.3759 3.54128 13.3761 3.74104 13.3762 3.94053C13.3762 4.17962 13.3732 4.41906 13.3895 4.65775C13.4047 4.88031 13.4424 5.18184 13.576 5.50451C13.8425 6.14771 14.3535 6.65873 14.9967 6.92515C15.4646 7.11897 15.9645 7.12504 16.4624 7.12497H17.5401C18.0379 7.12504 18.5379 7.11897 19.0058 6.92515C19.649 6.65873 20.16 6.14771 20.4264 5.50451C20.5601 5.18184 20.5978 4.8803 20.6129 4.65774C20.6292 4.4191 20.6263 4.17971 20.6263 3.94067L20.6263 3.91726C20.6264 3.71348 20.6266 3.51572 20.6102 3.30391C20.5968 3.13234 20.5902 3.04656 20.6413 3.01439C20.6924 2.98223 20.7595 3.02109 20.8936 3.09882C21.5482 3.4781 22.0207 4.13194 22.1864 4.89607C22.2515 5.19626 22.2513 5.53867 22.2511 5.98976C22.251 6.90954 22.3111 7.86673 22.115 8.77157C21.6516 10.9085 20.0586 12.6053 17.9833 13.1039C17.374 13.2503 16.6606 13.2502 15.5119 13.2501H8.49022C7.34153 13.2502 6.62819 13.2503 6.01889 13.1039C3.94359 12.6053 2.35056 10.9085 1.8872 8.77157C1.691 7.86671 1.75114 6.90951 1.75105 5.98971C1.75082 5.53863 1.75065 5.19626 1.81574 4.89607Z',
  d9: 'M7.51263 2.125H6.48738C6.26515 2.125 6.07962 2.12499 5.92732 2.13539C5.76877 2.1462 5.61901 2.16952 5.47381 2.22967C5.1369 2.36922 4.86922 2.6369 4.72967 2.97381C4.66952 3.11901 4.6462 3.26877 4.63539 3.42732C4.62499 3.57962 4.625 3.76514 4.625 3.98736V4.01263C4.625 4.23485 4.62499 4.42038 4.63539 4.57268C4.6462 4.73123 4.66952 4.881 4.72967 5.02619C4.86922 5.3631 5.1369 5.63078 5.47381 5.77033C5.61901 5.83048 5.76877 5.8538 5.92732 5.86462C6.07962 5.87501 6.26514 5.875 6.48737 5.875H7.51263C7.73486 5.875 7.92038 5.87501 8.07268 5.86462C8.23123 5.8538 8.381 5.83048 8.52619 5.77033C8.8631 5.63078 9.13078 5.3631 9.27033 5.02619C9.33048 4.881 9.3538 4.73123 9.36462 4.57268C9.37501 4.42038 9.375 4.23486 9.375 4.01263V3.98737C9.375 3.76514 9.37501 3.57962 9.36462 3.42732C9.3538 3.26877 9.33048 3.11901 9.27033 2.97381C9.13078 2.6369 8.8631 2.36922 8.52619 2.22967C8.381 2.16952 8.23123 2.1462 8.07268 2.13539C7.92038 2.12499 7.73485 2.125 7.51263 2.125Z',
  d10: 'M17.5126 2.125H16.4874C16.2651 2.125 16.0796 2.12499 15.9273 2.13539C15.7688 2.1462 15.619 2.16952 15.4738 2.22967C15.1369 2.36922 14.8692 2.6369 14.7297 2.97381C14.6695 3.11901 14.6462 3.26877 14.6354 3.42732C14.625 3.57962 14.625 3.76514 14.625 3.98737V4.01263C14.625 4.23486 14.625 4.42038 14.6354 4.57268C14.6462 4.73123 14.6695 4.881 14.7297 5.02619C14.8692 5.3631 15.1369 5.63078 15.4738 5.77033C15.619 5.83048 15.7688 5.8538 15.9273 5.86462C16.0796 5.87501 16.2651 5.875 16.4874 5.875H17.5126C17.7349 5.875 17.9204 5.87501 18.0727 5.86462C18.2312 5.8538 18.381 5.83048 18.5262 5.77033C18.8631 5.63078 19.1308 5.3631 19.2703 5.02619C19.3305 4.881 19.3538 4.73123 19.3646 4.57268C19.375 4.42038 19.375 4.23486 19.375 4.01263V3.98737C19.375 3.76514 19.375 3.57962 19.3646 3.42732C19.3538 3.26877 19.3305 3.11901 19.2703 2.97381C19.1308 2.6369 18.8631 2.36922 18.5262 2.22967C18.381 2.16952 18.2312 2.1462 18.0727 2.13539C17.9204 2.12499 17.7349 2.125 17.5126 2.125Z',
  d11: 'M21.75 9.25H2.25V17.9861C2.25 20.4293 4.4709 22.25 7 22.25H17C19.5291 22.25 21.75 20.4293 21.75 17.9861V9.25Z',
  d12: 'M6.25 18C6.25 17.5858 6.58579 17.25 7 17.25H10C10.4142 17.25 10.75 17.5858 10.75 18C10.75 18.4142 10.4142 18.75 10 18.75H7C6.58579 18.75 6.25 18.4142 6.25 18Z',
  d13: 'M3.5 10.5V21.5H20.5V10.5',
  d14: 'M9.15 4H14.85M19 4H21.5V7.5C21.5 10.2614 19.2614 12.5 16.5 12.5H7.5C4.73858 12.5 2.5 10.2614 2.5 7.5V4H5',
  d15: 'M13.75 3.25H10.25V6H3.75V3.25H2.5C2.08579 3.25 1.75 3.58579 1.75 4V7.5C1.75 10.6756 4.32436 13.25 7.5 13.25H16.5C19.6756 13.25 22.25 10.6756 22.25 7.5V4C22.25 3.58579 21.9142 3.25 21.5 3.25H20.25V6H13.75V3.25Z',
  d16: 'M2.75 21.5002V12.9775C4.02227 14.0818 5.68308 14.7502 7.5 14.7502H16.5C18.3169 14.7502 19.9777 14.0818 21.25 12.9775V21.5002C21.25 21.9144 20.9142 22.2502 20.5 22.2502H3.5C3.08579 22.2502 2.75 21.9144 2.75 21.5002ZM7 19.7501H10V18.2501H7V19.7501Z',
} as const;

export const IconBriefcase08StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-08-stroke-rounded IconBriefcase08StrokeRounded"
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

export const IconBriefcase08DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-08-duotone-rounded IconBriefcase08DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <rect 
        opacity="var(--icon-opacity)" 
        x="5" 
        y="2.5" 
        width="4" 
        height="3" 
        rx="1" 
        fill="var(--icon-fill)"></rect>
      <rect 
        opacity="var(--icon-opacity)" 
        x="15" 
        y="2.5" 
        width="4" 
        height="3" 
        rx="1" 
        fill="var(--icon-fill)"></rect>
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
      <rect 
        x="5" 
        y="2.5" 
        width="4" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="15" 
        y="2.5" 
        width="4" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
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

export const IconBriefcase08TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-08-twotone-rounded IconBriefcase08TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <rect 
        x="5" 
        y="2.5" 
        width="4" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="15" 
        y="2.5" 
        width="4" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
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

export const IconBriefcase08SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-08-solid-rounded IconBriefcase08SolidRounded"
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

export const IconBriefcase08BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-08-bulk-rounded IconBriefcase08BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBriefcase08StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-08-stroke-sharp IconBriefcase08StrokeSharp"
    >
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
      <rect 
        x="5" 
        y="2.5" 
        width="4" 
        height="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></rect>
      <rect 
        x="15" 
        y="2.5" 
        width="4" 
        height="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></rect>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase08SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-08-solid-sharp IconBriefcase08SolidSharp"
    >
      <rect 
        x="5" 
        y="1.75" 
        width="4" 
        height="3" 
        fill="var(--icon-fill)"></rect>
      <rect 
        x="15" 
        y="1.75" 
        width="4" 
        height="3" 
        fill="var(--icon-fill)"></rect>
      <path 
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

export const iconPackOfBriefcase08: TheIconSelfPack = {
  name: 'Briefcase08',
  StrokeRounded: IconBriefcase08StrokeRounded,
  DuotoneRounded: IconBriefcase08DuotoneRounded,
  TwotoneRounded: IconBriefcase08TwotoneRounded,
  SolidRounded: IconBriefcase08SolidRounded,
  BulkRounded: IconBriefcase08BulkRounded,
  StrokeSharp: IconBriefcase08StrokeSharp,
  SolidSharp: IconBriefcase08SolidSharp,
};