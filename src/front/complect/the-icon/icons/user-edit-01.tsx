import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C8.12805 13.9629 11.2057 13.6118 14 14.4281',
  d2: 'M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z',
  d3: 'M18.4332 13.8485C18.7685 13.4851 18.9362 13.3035 19.1143 13.1975C19.5442 12.9418 20.0736 12.9339 20.5107 13.1765C20.6918 13.2771 20.8646 13.4537 21.2103 13.8067C21.5559 14.1598 21.7287 14.3364 21.8272 14.5214C22.0647 14.9679 22.0569 15.5087 21.8066 15.9478C21.7029 16.1298 21.5251 16.3011 21.1694 16.6437L16.9378 20.7194C16.2638 21.3686 15.9268 21.6932 15.5056 21.8577C15.0845 22.0222 14.6214 22.0101 13.6954 21.9859L13.5694 21.9826C13.2875 21.9752 13.1466 21.9715 13.0646 21.8785C12.9827 21.7855 12.9939 21.6419 13.0162 21.3548L13.0284 21.1988C13.0914 20.3906 13.1228 19.9865 13.2807 19.6232C13.4385 19.2599 13.7107 18.965 14.2552 18.375L18.4332 13.8485Z',
  d4: 'M16.4224 15.4816C16.5215 15.5406 16.6319 15.6039 16.7507 15.6714L14.2552 18.375C13.7107 18.965 13.4385 19.2599 13.2807 19.6232C13.1228 19.9865 13.0914 20.3906 13.0284 21.1988L13.0162 21.3548C12.9939 21.6419 12.9827 21.7855 13.0646 21.8785L6.59087 22C5.04549 22 3.81631 21.248 2.71266 20.1966C0.678069 18.2582 3.48398 16.6704 5.09548 15.7585C5.27346 15.6578 5.43687 15.5654 5.57757 15.4816C8.89519 13.5061 13.1048 13.5061 16.4224 15.4816Z',
  d5: 'M18.7309 12.5529C19.39 12.1609 20.204 12.1485 20.8746 12.5208C21.1544 12.6762 21.4016 12.9293 21.6821 13.2166L21.8093 13.3465C22.0917 13.6343 22.3384 13.8858 22.4892 14.1692C22.8475 14.8426 22.8359 15.6564 22.4581 16.3192C22.2992 16.5981 22.0452 16.8422 21.7547 17.1213L21.7547 17.1213L17.3646 21.3497C16.7826 21.9111 16.3419 22.3362 15.7784 22.5563C15.2133 22.777 14.6043 22.7606 13.8042 22.739L13.5237 22.7316H13.5237C13.4073 22.7287 13.2528 22.7248 13.1185 22.7024C12.9506 22.6744 12.7022 22.6018 12.5018 22.3744C12.3037 22.1495 12.2616 21.8967 12.2524 21.7312C12.2448 21.5958 12.257 21.4418 12.2664 21.3225L12.289 21.032C12.3433 20.3293 12.3838 19.8051 12.5927 19.3243C12.8021 18.8423 13.1571 18.4582 13.6308 17.9456L17.9439 13.2725L17.944 13.2725C18.2162 12.9767 18.4558 12.7165 18.7309 12.5529Z',
  d6: 'M6.75035 6.5C6.75035 3.6005 9.10086 1.25 12.0004 1.25C14.8998 1.25 17.2504 3.6005 17.2504 6.5C17.2504 9.39949 14.8998 11.75 12.0004 11.75C9.10086 11.75 6.75035 9.39949 6.75035 6.5Z',
  d7: 'M10.7546 21.8148L10.7569 21.8532C10.7894 22.324 10.8056 22.5594 10.7167 22.6547C10.6277 22.75 10.4351 22.75 10.0498 22.75H6.59104C4.77274 22.75 3.36695 21.8556 2.1955 20.7396C1.51649 20.0927 1.17802 19.3646 1.26283 18.5888C1.34257 17.8592 1.78123 17.2637 2.2429 16.8118C2.98106 16.0893 4.05868 15.4813 4.77149 15.0792C4.93409 14.9875 5.07776 14.9064 5.19404 14.8372C6.49889 14.0602 7.93096 13.5691 9.39543 13.3625C10.4593 13.2125 11.5411 13.2125 12.6049 13.3625C13.1988 13.4463 13.7874 13.5769 14.3644 13.7543C14.7341 13.8681 14.919 13.9249 14.9621 14.0848C15.0053 14.2447 14.869 14.3923 14.5966 14.6874L12.4612 17.001C12.0426 17.4527 11.5299 18.0061 11.2168 18.7267C10.9053 19.4437 10.848 20.1965 10.801 20.8155L10.7546 21.8148Z',
  d8: 'M12.0005 1.25C9.10099 1.25 6.75049 3.6005 6.75049 6.5C6.75049 9.39949 9.10099 11.75 12.0005 11.75C14.9 11.75 17.2505 9.39949 17.2505 6.5C17.2505 3.6005 14.9 1.25 12.0005 1.25Z',
  d9: 'M10.7569 21.8532L10.7546 21.8148L10.801 20.8155C10.848 20.1965 10.9053 19.4437 11.2168 18.7267C11.5299 18.0061 12.0426 17.4527 12.4612 17.001L14.5966 14.6875C14.869 14.3923 15.0053 14.2447 14.9621 14.0848C14.919 13.9249 14.7341 13.8681 14.3644 13.7543C13.7874 13.5769 13.1988 13.4463 12.6049 13.3625C11.5411 13.2125 10.4593 13.2125 9.39543 13.3625C7.93096 13.5691 6.49889 14.0602 5.19404 14.8372C5.07776 14.9064 4.93415 14.9874 4.77155 15.0792C4.05873 15.4813 2.98106 16.0893 2.2429 16.8118C1.78123 17.2637 1.34257 17.8592 1.26283 18.5888C1.17802 19.3646 1.51649 20.0927 2.1955 20.7396C3.36695 21.8556 4.77274 22.75 6.59104 22.75H10.0498C10.4351 22.75 10.6277 22.75 10.7167 22.6547C10.8056 22.5594 10.7894 22.324 10.7569 21.8532Z',
  d10: 'M11.0005 20.0032H2.00098C2.00098 16.1365 5.58252 13.002 10.0006 13.002C11.8924 13.002 13.6308 13.5767 15.0003 14.5375M14.0004 6.00072C14.0004 8.21025 12.2096 10.0014 10.0006 10.0014C7.79155 10.0014 6.00078 8.21025 6.00078 6.00072C6.00078 3.79118 7.79155 2 10.0006 2C12.2096 2 14.0004 3.79118 14.0004 6.00072Z',
  d11: 'M16.5008 21.9979H13.9941V19.5249L19.4899 14.0098C19.4938 14.0059 19.5001 14.0059 19.504 14.0098L22.0026 16.5097C22.0065 16.5136 22.0065 16.52 22.0026 16.5239L16.5008 21.9979Z',
  d12: 'M19.5 13.25C19.6989 13.25 19.8897 13.329 20.0303 13.4697L22.5303 15.9697C22.8232 16.2626 22.8232 16.7374 22.5303 17.0303L16.8107 22.75H13.25V19.1893L18.9697 13.4697C19.1103 13.329 19.3011 13.25 19.5 13.25Z',
  d13: 'M5.25 6C5.25 3.37665 7.37665 1.25 10 1.25C12.6234 1.25 14.75 3.37665 14.75 6C14.75 8.62335 12.6234 10.75 10 10.75C7.37665 10.75 5.25 8.62335 5.25 6Z',
  d14: 'M1.25 20C1.25 15.6289 5.26471 12.25 10 12.25C12.2835 12.25 14.3995 13.0357 15.9784 14.3396L11.75 18.568V20.75H1.25V20Z',
} as const;

export const IconUserEdit01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-edit-01-stroke-rounded IconUserEdit01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserEdit01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-edit-01-duotone-rounded IconUserEdit01DuotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserEdit01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-edit-01-twotone-rounded IconUserEdit01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserEdit01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-edit-01-solid-rounded IconUserEdit01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserEdit01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-edit-01-bulk-rounded IconUserEdit01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconUserEdit01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-edit-01-stroke-sharp IconUserEdit01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserEdit01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-edit-01-solid-sharp IconUserEdit01SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfUserEdit01: TheIconSelfPack = {
  name: 'UserEdit01',
  StrokeRounded: IconUserEdit01StrokeRounded,
  DuotoneRounded: IconUserEdit01DuotoneRounded,
  TwotoneRounded: IconUserEdit01TwotoneRounded,
  SolidRounded: IconUserEdit01SolidRounded,
  BulkRounded: IconUserEdit01BulkRounded,
  StrokeSharp: IconUserEdit01StrokeSharp,
  SolidSharp: IconUserEdit01SolidSharp,
};