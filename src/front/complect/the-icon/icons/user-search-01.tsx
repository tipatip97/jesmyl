import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453366 18.0441 4.1628 16.324 5.57757 15.4816C7.53058 14.3187 9.7927 13.8404 12 14.0466',
  d2: 'M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z',
  d3: 'M20.4 20.4L22 22M21.2 17.6C21.2 15.6118 19.5882 14 17.6 14C15.6118 14 14 15.6118 14 17.6C14 19.5882 15.6118 21.2 17.6 21.2C19.5882 21.2 21.2 19.5882 21.2 17.6Z',
  d4: 'M5.34646 16.0505C5.52444 15.9498 5.68784 15.8574 5.82855 15.7736C8.76427 14.0255 12.3985 13.8243 15.495 15.1699C14.733 15.83 14.251 16.8047 14.251 17.892C14.251 19.8802 15.8628 21.492 17.851 21.492C18.0131 21.492 18.1728 21.4813 18.3293 21.4605C17.5385 21.9732 16.6663 22.292 15.6601 22.292H6.84185C5.29647 22.292 4.06729 21.54 2.96364 20.4886C0.929046 18.5502 3.73496 16.9624 5.34646 16.0505Z',
  d5: 'M13.251 22.292H6.84185C5.29647 22.292 4.06729 21.54 2.96364 20.4886C0.704343 18.3361 4.41378 16.616 5.82855 15.7736C7.78156 14.6107 10.0437 14.1324 12.251 14.3386',
  d6: 'M15.751 6.79199C15.751 9.27727 13.7363 11.292 11.251 11.292C8.7657 11.292 6.75098 9.27727 6.75098 6.79199C6.75098 4.30671 8.7657 2.29199 11.251 2.29199C13.7363 2.29199 15.751 4.30671 15.751 6.79199Z',
  d7: 'M20.651 20.692L22.251 22.292M21.451 17.892C21.451 15.9038 19.8392 14.292 17.851 14.292C15.8628 14.292 14.251 15.9038 14.251 17.892C14.251 19.8802 15.8628 21.492 17.851 21.492C19.8392 21.492 21.451 19.8802 21.451 17.892Z',
  d8: 'M12.875 17.475C12.875 14.9345 14.9345 12.875 17.475 12.875C20.0155 12.875 22.075 14.9345 22.075 17.475C22.075 18.3798 21.8137 19.2237 21.3626 19.9351L22.5859 21.1717C22.9743 21.5643 22.9709 22.1975 22.5783 22.5859C22.1857 22.9743 21.5525 22.9709 21.1641 22.5783L19.9512 21.3523C19.2364 21.8098 18.3867 22.075 17.475 22.075C14.9345 22.075 12.875 20.0155 12.875 17.475ZM17.475 14.875C16.0391 14.875 14.875 16.0391 14.875 17.475C14.875 18.9109 16.0391 20.075 17.475 20.075C18.9109 20.075 20.075 18.9109 20.075 17.475C20.075 16.0391 18.9109 14.875 17.475 14.875Z',
  d9: 'M5.62535 6.375C5.62535 3.4755 7.97586 1.125 10.8754 1.125C13.7748 1.125 16.1254 3.4755 16.1254 6.375C16.1254 9.27449 13.7748 11.625 10.8754 11.625C7.97586 11.625 5.62535 9.27449 5.62535 6.375Z',
  d10: 'M12.4799 13.2375C12.7089 13.2698 12.8022 13.5469 12.6601 13.7293C11.8547 14.7631 11.375 16.063 11.375 17.475C11.375 18.9003 11.8638 20.2114 12.683 21.2499C13.2283 21.9411 13.5009 22.2868 13.4189 22.4559C13.3369 22.625 12.9393 22.625 12.144 22.625H6.46604C4.64774 22.625 3.24195 21.7306 2.0705 20.6146C1.39149 19.9677 1.05302 19.2396 1.13783 18.4638C1.21757 17.7342 1.65623 17.1387 2.1179 16.6868C2.85606 15.9643 3.93357 15.3564 4.64639 14.9543C4.80901 14.8625 4.95275 14.7814 5.06904 14.7122C6.37389 13.9352 7.80596 13.4441 9.27043 13.2375C10.3343 13.0875 11.4161 13.0875 12.4799 13.2375Z',
  d11: 'M10.8755 1.125C7.97599 1.125 5.62549 3.4755 5.62549 6.375C5.62549 9.27449 7.97599 11.625 10.8755 11.625C13.775 11.625 16.1255 9.27449 16.1255 6.375C16.1255 3.4755 13.775 1.125 10.8755 1.125Z',
  d12: 'M12.6601 13.7293C12.8022 13.5469 12.7089 13.2698 12.4799 13.2375C11.4161 13.0875 10.3343 13.0875 9.27043 13.2375C7.80596 13.4441 6.37389 13.9352 5.06904 14.7122C4.95278 14.7814 4.80908 14.8625 4.64651 14.9542C3.93369 15.3563 2.85606 15.9643 2.1179 16.6868C1.65623 17.1387 1.21757 17.7342 1.13783 18.4638C1.05302 19.2396 1.39149 19.9677 2.0705 20.6146C3.24195 21.7306 4.64774 22.625 6.46604 22.625H12.144C12.9393 22.625 13.3369 22.625 13.4189 22.4559C13.5009 22.2868 13.2283 21.9411 12.683 21.2499C11.8638 20.2115 11.375 18.9003 11.375 17.475C11.375 16.063 11.8547 14.7631 12.6601 13.7293Z',
  d13: 'M12 20H2C2 16.134 5.58172 13 10 13C11.0513 13 12.0553 13.1775 12.975 13.5M14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6Z',
  d14: 'M20.1555 20.1356L22 22M21.2 17.6C21.2 15.6118 19.5882 14 17.6 14C15.6118 14 14 15.6118 14 17.6C14 19.5882 15.6118 21.2 17.6 21.2C19.5882 21.2 21.2 19.5882 21.2 17.6Z',
  d15: 'M12.75 17.3535C12.75 14.8111 14.8095 12.75 17.35 12.75C19.8905 12.75 21.95 14.8111 21.95 17.3535C21.95 18.259 21.6887 19.1035 21.2376 19.8155L22.75 21.3423L21.3282 22.75L19.8262 21.2338C19.1114 21.6916 18.2617 21.957 17.35 21.957C14.8095 21.957 12.75 19.8959 12.75 17.3535ZM17.35 14.7515C15.9141 14.7515 14.75 15.9165 14.75 17.3535C14.75 18.7905 15.9141 19.9555 17.35 19.9555C18.7859 19.9555 19.95 18.7905 19.95 17.3535C19.95 15.9165 18.7859 14.7515 17.35 14.7515Z',
  d16: 'M10 1.25C7.37665 1.25 5.25 3.37665 5.25 6C5.25 8.62335 7.37665 10.75 10 10.75C12.6234 10.75 14.75 8.62335 14.75 6C14.75 3.37665 12.6234 1.25 10 1.25Z',
  d17: 'M10 12.25C5.26471 12.25 1.25 15.6289 1.25 20V20.75H12.281C11.6298 19.7789 11.25 18.6105 11.25 17.3535C11.25 15.551 12.0311 13.9305 13.2735 12.813C12.2561 12.449 11.1493 12.25 10 12.25Z',
} as const;

export const IconUserSearch01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-01-stroke-rounded IconUserSearch01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSearch01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-01-duotone-rounded IconUserSearch01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconUserSearch01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-01-twotone-rounded IconUserSearch01TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSearch01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-01-solid-rounded IconUserSearch01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconUserSearch01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-01-bulk-rounded IconUserSearch01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconUserSearch01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-01-stroke-sharp IconUserSearch01StrokeSharp"
    >
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

export const IconUserSearch01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-01-solid-sharp IconUserSearch01SolidSharp"
    >
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
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserSearch01: TheIconSelfPack = {
  name: 'UserSearch01',
  StrokeRounded: IconUserSearch01StrokeRounded,
  DuotoneRounded: IconUserSearch01DuotoneRounded,
  TwotoneRounded: IconUserSearch01TwotoneRounded,
  SolidRounded: IconUserSearch01SolidRounded,
  BulkRounded: IconUserSearch01BulkRounded,
  StrokeSharp: IconUserSearch01StrokeSharp,
  SolidSharp: IconUserSearch01SolidSharp,
};