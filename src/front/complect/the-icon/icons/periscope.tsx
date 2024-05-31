import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2C7.58172 2 4 5.61783 4 10.0807C4 12.6325 5 14.6167 7 16.389C8.40971 17.6382 10.1175 19.7131 11.1429 21.3951C11.6346 22.2016 12.33 22.2016 12.8571 21.3951C13.9344 19.7466 15.5903 17.6382 17 16.389C19 14.6167 20 12.6325 20 10.0807C20 5.61783 16.4183 2 12 2Z',
  d2: 'M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C11.838 6 11.6782 6.00963 11.5212 6.02836C11.8223 6.44123 12 6.94986 12 7.5C12 8.88071 10.8807 10 9.5 10C8.94986 10 8.44123 9.8223 8.02836 9.52118C8.00963 9.67817 8 9.83796 8 10C8 12.2091 9.79086 14 12 14Z',
  d3: 'M4 10.0807C4 5.61783 7.58172 2 12 2C16.4183 2 20 5.61783 20 10.0807C20 12.6325 19 14.6167 17 16.389C15.5903 17.6382 13.9344 19.7466 12.8571 21.3951C12.33 22.2016 11.6346 22.2016 11.1429 21.3951C10.1175 19.7131 8.40971 17.6382 7 16.389C5 14.6167 4 12.6325 4 10.0807ZM16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 9.83796 8.00963 9.67817 8.02836 9.52118C8.44123 9.8223 8.94986 10 9.5 10C10.8807 10 12 8.88071 12 7.5C12 6.94986 11.8223 6.44123 11.5212 6.02836C11.6782 6.00963 11.838 6 12 6C14.2091 6 16 7.79086 16 10Z',
  d4: 'M12 1.25C7.16043 1.25 3.25 5.21073 3.25 10.0807C3.25 12.8754 4.36442 15.0556 6.50258 16.9503C7.85192 18.146 9.51277 20.162 10.5025 21.7855C10.8169 22.3012 11.3161 22.75 11.9867 22.75C12.6489 22.75 13.1545 22.311 13.4849 21.8054C14.543 20.1863 16.1569 18.1382 17.4974 16.9503C19.6356 15.0556 20.75 12.8754 20.75 10.0807C20.75 5.21073 16.8396 1.25 12 1.25ZM16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 9.888 8 9.832 8.01632 9.79411C8.05009 9.71574 8.12095 9.67068 8.20625 9.67334C8.24748 9.67463 8.31192 9.70482 8.44079 9.76518L8.4408 9.76519C8.76242 9.91583 9.12138 10 9.5 10C10.8807 10 12 8.88071 12 7.5C12 7.12138 11.9158 6.76241 11.7652 6.4408C11.7048 6.31192 11.6746 6.24748 11.6733 6.20625C11.6707 6.12095 11.7157 6.05009 11.7941 6.01632C11.832 6 11.888 6 12 6C14.2091 6 16 7.79086 16 10Z',
  d5: 'M3.25 10.0807C3.25 5.21073 7.16043 1.25 12 1.25C16.8396 1.25 20.75 5.21073 20.75 10.0807C20.75 12.8754 19.6356 15.0556 17.4974 16.9503C16.1569 18.1382 14.543 20.1863 13.4849 21.8054C13.1545 22.311 12.6489 22.75 11.9867 22.75C11.3161 22.75 10.8169 22.3012 10.5025 21.7855C9.51277 20.162 7.85192 18.146 6.50258 16.9503C4.36442 15.0556 3.25 12.8754 3.25 10.0807Z',
  d6: 'M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C11.888 6 11.832 6 11.7941 6.01632C11.7157 6.05009 11.6707 6.12095 11.6733 6.20625C11.6746 6.24748 11.7048 6.31192 11.7652 6.4408C11.9158 6.76242 12 7.12138 12 7.5C12 8.88071 10.8807 10 9.5 10C9.12138 10 8.76242 9.91583 8.4408 9.76519C8.31192 9.70482 8.24748 9.67463 8.20625 9.67334C8.12095 9.67068 8.05009 9.71574 8.01632 9.79411C8 9.832 8 9.888 8 10C8 12.2091 9.79086 14 12 14Z',
  d7: 'M12 2C16.4183 2 20 5.61783 20 10.0807C20 12.6325 19 14 17 16.389L12 22L7 16.389C5 14 4 12.6325 4 10.0807C4 5.61783 7.58172 2 12 2Z',
  d8: 'M12 1.25C7.16043 1.25 3.25 5.21073 3.25 10.0807C3.25 11.4708 3.52621 12.5704 4.08489 13.6425C4.62807 14.6848 5.43072 15.6829 6.42492 16.8704C6.42988 16.8764 6.43492 16.8822 6.44006 16.888L11.4401 22.499C11.5824 22.6587 11.7861 22.75 12 22.75C12.2139 22.75 12.4176 22.6587 12.5599 22.499L17.5599 16.888C17.5651 16.8822 17.5701 16.8764 17.5751 16.8704C18.5693 15.6829 19.3719 14.6848 19.9151 13.6425C20.4738 12.5704 20.75 11.4708 20.75 10.0807C20.75 5.21073 16.8396 1.25 12 1.25ZM16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 9.83796 8.00963 9.67817 8.02836 9.52118C8.44123 9.8223 8.94986 10 9.5 10C10.8807 10 12 8.88071 12 7.5C12 6.94986 11.8223 6.44123 11.5212 6.02836C11.6782 6.00964 11.838 6 12 6C14.2091 6 16 7.79086 16 10Z',
} as const;

export const IconPeriscopeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="periscope-stroke-rounded IconPeriscopeStrokeRounded"
    >
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconPeriscopeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="periscope-duotone-rounded IconPeriscopeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconPeriscopeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="periscope-twotone-rounded IconPeriscopeTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPeriscopeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="periscope-solid-rounded IconPeriscopeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPeriscopeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="periscope-bulk-rounded IconPeriscopeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPeriscopeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="periscope-stroke-sharp IconPeriscopeStrokeSharp"
    >
      <path 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconPeriscopeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="periscope-solid-sharp IconPeriscopeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPeriscope: TheIconSelfPack = {
  name: 'Periscope',
  StrokeRounded: IconPeriscopeStrokeRounded,
  DuotoneRounded: IconPeriscopeDuotoneRounded,
  TwotoneRounded: IconPeriscopeTwotoneRounded,
  SolidRounded: IconPeriscopeSolidRounded,
  BulkRounded: IconPeriscopeBulkRounded,
  StrokeSharp: IconPeriscopeStrokeSharp,
  SolidSharp: IconPeriscopeSolidSharp,
};