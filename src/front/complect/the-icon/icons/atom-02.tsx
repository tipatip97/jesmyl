import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.3541 3.64593C18.5085 1.8004 13.2722 4.04455 8.65837 8.65837C4.04455 13.2722 1.8004 18.5085 3.64593 20.3541C5.49146 22.1996 10.7278 19.9555 15.3416 15.3416C19.9555 10.7278 22.1996 5.49146 20.3541 3.64593Z',
  d2: 'M3.64593 3.64593C1.8004 5.49146 4.04455 10.7278 8.65837 15.3416C13.2722 19.9555 18.5085 22.1996 20.3541 20.3541C22.1996 18.5085 19.9555 13.2722 15.3416 8.65837C10.7278 4.04455 5.49146 1.8004 3.64593 3.64593Z',
  d3: 'M12.009 12H12',
  d4: 'M13.708 5.84197C14.4971 6.47945 15.2828 7.18538 16.0487 7.95124C16.8146 8.71709 17.5205 9.50288 18.158 10.2919C18.6498 9.51475 19.0501 8.76374 19.3509 8.06172C19.7749 7.07249 19.9804 6.22927 19.9986 5.57522C20.0168 4.92408 19.8512 4.55731 19.6469 4.35301C19.4426 4.14871 19.0759 3.98313 18.4247 4.0013C17.7707 4.01956 16.9274 4.22505 15.9382 4.64901C15.2362 4.94988 14.4852 5.35018 13.708 5.84197ZM12 4.57128C13.0813 3.83545 14.146 3.24117 15.1504 2.81072C16.2777 2.3276 17.3779 2.02974 18.3689 2.00208C19.3628 1.97435 20.3427 2.22033 21.0611 2.93879C21.7796 3.65726 22.0256 4.6371 21.9979 5.63101C21.9702 6.62202 21.6723 7.72228 21.1892 8.84956C20.7588 9.85395 20.1645 10.9186 19.4287 12C20.1645 13.0813 20.7588 14.146 21.1892 15.1504C21.6723 16.2777 21.9702 17.3779 21.9979 18.3689C22.0256 19.3628 21.7796 20.3427 21.0611 21.0611C20.3427 21.7796 19.3628 22.0256 18.3689 21.9979C17.3779 21.9702 16.2777 21.6723 15.1504 21.1892C14.146 20.7588 13.0813 20.1645 12 19.4287C10.9186 20.1645 9.85395 20.7588 8.84956 21.1892C7.72228 21.6723 6.62202 21.9702 5.63101 21.9979C4.6371 22.0256 3.65726 21.7796 2.93879 21.0611C2.22033 20.3427 1.97435 19.3628 2.00208 18.3689C2.02974 17.3779 2.3276 16.2777 2.81072 15.1504C3.24117 14.146 3.83545 13.0813 4.57128 12C3.83545 10.9186 3.24117 9.85395 2.81072 8.84956C2.3276 7.72228 2.02974 6.62202 2.00208 5.63101C1.97435 4.6371 2.22033 3.65726 2.93879 2.93879C3.65726 2.22033 4.6371 1.97435 5.63101 2.00208C6.62202 2.02974 7.72228 2.3276 8.84956 2.81072C9.85395 3.24117 10.9186 3.83545 12 4.57128ZM5.84197 10.2919C5.35018 9.51475 4.94988 8.76374 4.64901 8.06172C4.22505 7.07249 4.01956 6.22927 4.0013 5.57522C3.98313 4.92408 4.14871 4.55731 4.35301 4.35301C4.55731 4.14871 4.92408 3.98313 5.57522 4.0013C6.22927 4.01956 7.07249 4.22505 8.06172 4.64901C8.76374 4.94988 9.51475 5.35018 10.2919 5.84197C9.50288 6.47945 8.71709 7.18538 7.95124 7.95124C7.18538 8.71709 6.47945 9.50288 5.84197 10.2919ZM7.04144 12C7.71735 11.1235 8.49546 10.2354 9.36545 9.36545C10.2354 8.49546 11.1235 7.71735 12 7.04144C12.8764 7.71735 13.7645 8.49546 14.6345 9.36545C15.5045 10.2354 16.2826 11.1235 16.9585 12C16.2826 12.8764 15.5045 13.7645 14.6345 14.6345C13.7645 15.5045 12.8764 16.2826 12 16.9585C11.1235 16.2826 10.2354 15.5045 9.36545 14.6345C8.49546 13.7645 7.71735 12.8764 7.04144 12ZM5.84197 13.708C5.35018 14.4852 4.94988 15.2362 4.64901 15.9382C4.22505 16.9274 4.01956 17.7707 4.0013 18.4247C3.98313 19.0759 4.14871 19.4426 4.35301 19.6469C4.55731 19.8512 4.92408 20.0168 5.57522 19.9986C6.22927 19.9804 7.07249 19.7749 8.06172 19.3509C8.76374 19.0501 9.51475 18.6498 10.2919 18.158C9.50288 17.5205 8.71709 16.8146 7.95124 16.0487C7.18538 15.2828 6.47945 14.4971 5.84197 13.708ZM13.708 18.158C14.4852 18.6498 15.2362 19.0501 15.9382 19.3509C16.9274 19.7749 17.7707 19.9804 18.4247 19.9986C19.0759 20.0168 19.4426 19.8512 19.6469 19.6469C19.8512 19.4426 20.0168 19.0759 19.9986 18.4247C19.9804 17.7707 19.7749 16.9274 19.3509 15.9382C19.0501 15.2362 18.6498 14.4852 18.158 13.708C17.5205 14.4971 16.8146 15.2828 16.0487 16.0487C15.2828 16.8146 14.4971 17.5205 13.708 18.158Z',
  d5: 'M10.5 12C10.5 11.1716 11.1696 10.5 11.9955 10.5H12.0045C12.8304 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8304 13.5 12.0045 13.5H11.9955C11.1696 13.5 10.5 12.8284 10.5 12Z',
  d6: 'M18.3689 2.00208C19.3628 1.97435 20.3427 2.22033 21.0611 2.93879C21.7796 3.65726 22.0256 4.6371 21.9979 5.63101C21.9702 6.62202 21.6723 7.72228 21.1892 8.84956C20.2206 11.1096 18.4225 13.6749 16.0487 16.0487C13.6749 18.4225 11.1096 20.2206 8.84956 21.1892C7.72228 21.6723 6.62202 21.9702 5.63101 21.9979C4.6371 22.0256 3.65726 21.7796 2.93879 21.0611C2.22033 20.3427 1.97435 19.3628 2.00208 18.3689C2.02974 17.3779 2.3276 16.2777 2.81072 15.1504C3.77931 12.8903 5.57739 10.3251 7.95124 7.95124C10.3251 5.57739 12.8903 3.77931 15.1504 2.81072C16.2777 2.3276 17.3779 2.02974 18.3689 2.00208ZM15.9382 4.64901C13.9653 5.49456 11.6054 7.12547 9.36545 9.36545C7.12547 11.6054 5.49456 13.9653 4.64901 15.9382C4.22505 16.9274 4.01956 17.7707 4.0013 18.4247C3.98313 19.0759 4.14871 19.4426 4.35301 19.6469C4.55731 19.8512 4.92408 20.0168 5.57522 19.9986C6.22927 19.9804 7.07249 19.7749 8.06172 19.3509C10.0347 18.5054 12.3945 16.8745 14.6345 14.6345C16.8745 12.3945 18.5054 10.0347 19.3509 8.06172C19.7749 7.07249 19.9804 6.22927 19.9986 5.57522C20.0168 4.92408 19.8512 4.55731 19.6469 4.35301C19.4426 4.14871 19.0759 3.98313 18.4247 4.0013C17.7707 4.01956 16.9274 4.22505 15.9382 4.64901Z',
  d7: 'M8.84956 2.81072C11.1096 3.77931 13.6749 5.57739 16.0487 7.95124C18.4225 10.3251 20.2206 12.8903 21.1892 15.1504C21.6723 16.2777 21.9702 17.3779 21.9979 18.3689C22.0256 19.3628 21.7796 20.3427 21.0611 21.0611C20.3427 21.7796 19.3628 22.0256 18.3689 21.9979C17.3779 21.9702 16.2777 21.6723 15.1504 21.1892C12.8903 20.2206 10.3251 18.4225 7.95124 16.0487C5.57739 13.6749 3.77931 11.1096 2.81072 8.84956C2.3276 7.72228 2.02974 6.62202 2.00208 5.63101C1.97435 4.6371 2.22033 3.65726 2.93879 2.93879C3.65726 2.22033 4.6371 1.97435 5.63101 2.00208C6.62202 2.02974 7.72228 2.3276 8.84956 2.81072ZM5.57522 4.0013C4.92408 3.98313 4.55731 4.14871 4.35301 4.35301C4.14871 4.55731 3.98313 4.92408 4.0013 5.57522C4.01956 6.22927 4.22505 7.07249 4.64901 8.06172C5.49456 10.0347 7.12547 12.3945 9.36545 14.6345C11.6054 16.8745 13.9653 18.5054 15.9382 19.3509C16.9274 19.7749 17.7707 19.9804 18.4247 19.9986C19.0759 20.0168 19.4426 19.8512 19.6469 19.6469C19.8512 19.4426 20.0168 19.0759 19.9986 18.4247C19.9804 17.7707 19.7749 16.9274 19.3509 15.9382C18.5054 13.9653 16.8745 11.6054 14.6345 9.36545C12.3945 7.12547 10.0347 5.49456 8.06172 4.64901C7.07249 4.22505 6.22927 4.01956 5.57522 4.0013Z',
  d8: 'M10.75 12C10.75 11.3096 11.3076 10.75 11.9955 10.75H12.0045C12.6924 10.75 13.25 11.3096 13.25 12C13.25 12.6904 12.6924 13.25 12.0045 13.25H11.9955C11.3076 13.25 10.75 12.6904 10.75 12Z',
} as const;

export const IconAtom02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-02-stroke-rounded IconAtom02StrokeRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconAtom02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-02-duotone-rounded IconAtom02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconAtom02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-02-twotone-rounded IconAtom02TwotoneRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconAtom02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-02-solid-rounded IconAtom02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAtom02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-02-bulk-rounded IconAtom02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAtom02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-02-stroke-sharp IconAtom02StrokeSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconAtom02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-02-solid-sharp IconAtom02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfAtom02: TheIconSelfPack = {
  name: 'Atom02',
  StrokeRounded: IconAtom02StrokeRounded,
  DuotoneRounded: IconAtom02DuotoneRounded,
  TwotoneRounded: IconAtom02TwotoneRounded,
  SolidRounded: IconAtom02SolidRounded,
  BulkRounded: IconAtom02BulkRounded,
  StrokeSharp: IconAtom02StrokeSharp,
  SolidSharp: IconAtom02SolidSharp,
};