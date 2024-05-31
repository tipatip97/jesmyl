import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.5 12C4.5 8.71252 4.5 7.06878 5.40796 5.96243C5.57418 5.75989 5.75989 5.57418 5.96243 5.40796C7.06878 4.5 8.71252 4.5 12 4.5C15.2875 4.5 16.9312 4.5 18.0376 5.40796C18.2401 5.57418 18.4258 5.75989 18.592 5.96243C19.5 7.06878 19.5 8.71252 19.5 12C19.5 15.2875 19.5 16.9312 18.592 18.0376C18.4258 18.2401 18.2401 18.4258 18.0376 18.592C16.9312 19.5 15.2875 19.5 12 19.5C8.71252 19.5 7.06878 19.5 5.96243 18.592C5.75989 18.4258 5.57418 18.2401 5.40796 18.0376C4.5 16.9312 4.5 15.2875 4.5 12Z',
  d2: 'M9 22H15',
  d3: 'M9 2H15',
  d4: 'M10 10L13 13M15 9L11 13',
  d5: 'M8 22C8 21.4477 8.44772 21 9 21H15C15.5523 21 16 21.4477 16 22C16 22.5523 15.5523 23 15 23H9C8.44772 23 8 22.5523 8 22Z',
  d6: 'M8 2C8 1.44772 8.44772 1 9 1H15C15.5523 1 16 1.44772 16 2C16 2.55228 15.5523 3 15 3H9C8.44772 3 8 2.55228 8 2Z',
  d7: 'M12.0489 3.75H12.0489H11.9511H11.9511C10.3488 3.74999 9.07947 3.74998 8.07525 3.86868C7.04428 3.99055 6.19558 4.24638 5.48663 4.8282C5.24612 5.02558 5.02558 5.24612 4.8282 5.48663C4.24638 6.19558 3.99055 7.04428 3.86868 8.07525C3.74998 9.07947 3.74999 10.3488 3.75 11.9511V11.9511V12.0489V12.0489C3.74999 13.6512 3.74998 14.9205 3.86868 15.9248C3.99055 16.9557 4.24638 17.8044 4.8282 18.5134C5.02558 18.7539 5.24612 18.9744 5.48663 19.1718C6.19558 19.7536 7.04428 20.0095 8.07525 20.1313C9.07945 20.25 10.3488 20.25 11.951 20.25H11.951H11.9511H12.0489H12.049H12.049C13.6512 20.25 14.9206 20.25 15.9248 20.1313C16.9557 20.0095 17.8044 19.7536 18.5134 19.1718C18.7539 18.9744 18.9744 18.7539 19.1718 18.5134C19.7536 17.8044 20.0095 16.9557 20.1313 15.9248C20.25 14.9206 20.25 13.6512 20.25 12.049V12.049V12.0489V11.9511V11.951V11.951C20.25 10.3488 20.25 9.07944 20.1313 8.07525C20.0095 7.04428 19.7536 6.19558 19.1718 5.48663C18.9744 5.24612 18.7539 5.02558 18.5134 4.8282C17.8044 4.24638 16.9557 3.99055 15.9248 3.86868C14.9205 3.74998 13.6512 3.74999 12.0489 3.75ZM15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L10.7071 9.29289C10.3166 8.90237 9.68342 8.90237 9.29289 9.29289C8.90237 9.68342 8.90237 10.3166 9.29289 10.7071L10.5858 12L10.2929 12.2929C9.90237 12.6834 9.90237 13.3166 10.2929 13.7071C10.6834 14.0976 11.3166 14.0976 11.7071 13.7071L12 13.4142L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289Z',
  d8: 'M12.0489 3.75C13.6512 3.74999 14.9205 3.74998 15.9248 3.86868C16.9557 3.99054 17.8044 4.24638 18.5134 4.8282C18.7539 5.02558 18.9744 5.24612 19.1718 5.48663C19.7536 6.19558 20.0095 7.04428 20.1313 8.07525C20.25 9.07945 20.25 10.3488 20.25 11.951V11.9511V12.0489V12.049C20.25 13.6512 20.25 14.9206 20.1313 15.9248C20.0095 16.9557 19.7536 17.8044 19.1718 18.5134C18.9744 18.7539 18.7539 18.9744 18.5134 19.1718C17.8044 19.7536 16.9557 20.0095 15.9248 20.1313C14.9206 20.25 13.6512 20.25 12.049 20.25H12.0489H11.9511H11.951C10.3488 20.25 9.07945 20.25 8.07525 20.1313C7.04428 20.0095 6.19558 19.7536 5.48663 19.1718C5.24612 18.9744 5.02558 18.7539 4.8282 18.5134C4.24638 17.8044 3.99054 16.9557 3.86868 15.9248C3.74998 14.9205 3.74999 13.6512 3.75 12.0489V11.9511C3.74999 10.3488 3.74998 9.07947 3.86868 8.07525C3.99054 7.04428 4.24638 6.19558 4.8282 5.48663C5.02558 5.24612 5.24612 5.02558 5.48663 4.8282C6.19558 4.24638 7.04428 3.99054 8.07525 3.86868C9.07947 3.74998 10.3488 3.74999 11.9511 3.75H12.0489Z',
  d9: 'M14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L13.4142 12L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L12 13.4142L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L10.5858 12L9.29289 10.7071C8.90237 10.3166 8.90237 9.68342 9.29289 9.29289C9.68342 8.90237 10.3166 8.90237 10.7071 9.29289L12 10.5858L14.2929 8.29289Z',
  d10: 'M9 9L13.5 13.5M16 8L10.5 13.5',
  d11: 'M19.5 19.5V4.5H4.5V19.5H19.5Z',
  d12: 'M8 22H16',
  d13: 'M8 2H16',
  d14: 'M4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75H4.5ZM15.293 7.29285L12.0001 10.5857L9.70718 8.29285L8.29297 9.70706L10.5859 12L9.79297 12.7928L11.2072 14.2071L12.0001 13.4142L12.793 14.2071L14.2072 12.7928L13.4143 12L16.7072 8.70706L15.293 7.29285Z',
  d15: 'M16 23H8V21H16V23Z',
  d16: 'M16 3H8V1H16V3Z',
} as const;

export const IconSmartWatch04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-04-stroke-rounded IconSmartWatch04StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconSmartWatch04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-04-duotone-rounded IconSmartWatch04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconSmartWatch04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-04-twotone-rounded IconSmartWatch04TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-04-solid-rounded IconSmartWatch04SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSmartWatch04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-04-bulk-rounded IconSmartWatch04BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSmartWatch04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-04-stroke-sharp IconSmartWatch04StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-04-solid-sharp IconSmartWatch04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSmartWatch04: TheIconSelfPack = {
  name: 'SmartWatch04',
  StrokeRounded: IconSmartWatch04StrokeRounded,
  DuotoneRounded: IconSmartWatch04DuotoneRounded,
  TwotoneRounded: IconSmartWatch04TwotoneRounded,
  SolidRounded: IconSmartWatch04SolidRounded,
  BulkRounded: IconSmartWatch04BulkRounded,
  StrokeSharp: IconSmartWatch04StrokeSharp,
  SolidSharp: IconSmartWatch04SolidSharp,
};