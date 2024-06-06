import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 18C21.8011 18.6891 21.4991 19.2323 21.0408 19.682C19.6974 21 17.5354 21 13.2113 21H11.1729C6.84873 21 4.68667 21 3.34333 19.682C2 18.364 2 16.2426 2 12C2 7.75736 2 5.63604 3.34333 4.31802C4.68667 3 6.84873 3 11.1729 3H13.2113C17.5354 3 19.6974 3 21.0408 4.31802C21.4991 4.76771 21.8011 5.31092 22 5.99999',
  d2: 'M6.5 3.5V20.5',
  d3: 'M19.6234 12.0023C19.6234 12.6584 20.1554 13.1903 20.8115 13.1903C21.4677 13.1903 21.9996 12.6584 21.9996 12.0023C21.9996 11.3461 21.4677 10.8142 20.8115 10.8142C20.1554 10.8142 19.6234 11.3461 19.6234 12.0023ZM19.6234 12.0023L10.0254 12.0062M12.385 8.52051L13.5067 8.56407C13.9096 8.57972 14.2637 8.83585 14.4047 9.21364L15.4367 12.004M14.194 15.4923L15.3157 15.4487C15.7187 15.4331 16.0728 15.1769 16.2138 14.7991L17.2313 12.0032',
  d4: 'M10.6992 3.22266H12.6992C16.9418 3.22266 19.0632 3.22266 20.3812 4.54068C21.6992 5.8587 21.6992 7.98002 21.6992 12.2227C21.6992 16.4653 21.6992 18.5867 20.3812 19.9047C19.0632 21.2227 16.9418 21.2227 12.6992 21.2227H10.6992C8.82196 21.2227 7.36002 21.2227 6.19922 21.1085V3.33684C7.36002 3.22266 8.82196 3.22266 10.6992 3.22266ZM20.4988 11.0567C21.1616 11.0567 21.6992 11.5784 21.6992 12.2227C21.6992 12.867 21.1616 13.39 20.4988 13.39C19.8361 13.39 19.2988 12.8677 19.2988 12.2234C19.2988 11.579 19.8361 11.0567 20.4988 11.0567Z',
  d5: 'M21.6992 18.2227C21.5003 18.9118 21.1983 19.455 20.74 19.9047C19.3966 21.2227 17.2346 21.2227 12.9105 21.2227H10.8721C6.54795 21.2227 4.38589 21.2227 3.04255 19.9047C1.69922 18.5867 1.69922 16.4653 1.69922 12.2227C1.69922 7.98002 1.69922 5.8587 3.04255 4.54068C4.38589 3.22266 6.54795 3.22266 10.8721 3.22266H12.9105C17.2346 3.22266 19.3966 3.22266 20.74 4.54068C21.1983 4.99037 21.5003 5.53358 21.6992 6.22265',
  d6: 'M19.3099 12.2181C19.3099 12.8742 19.8419 13.4061 20.498 13.4061C21.1542 13.4061 21.6861 12.8742 21.6861 12.2181C21.6861 11.5619 21.1542 11.03 20.498 11.03C19.8419 11.03 19.3099 11.5619 19.3099 12.2181ZM19.3099 12.2181L9.71191 12.222M12.0715 8.73633L13.1932 8.77989C13.5961 8.79554 13.9502 9.05167 14.0912 9.42946L15.1232 12.2198M13.8805 15.7081L15.0022 15.6645C15.4052 15.6489 15.7593 15.3927 15.9003 15.0149L16.9178 12.219',
  d7: 'M6.19922 3.72266V20.7227',
  d8: 'M19.6107 11.9959C19.6107 12.6521 20.1427 13.184 20.7988 13.184C21.455 13.184 21.9869 12.6521 21.9869 11.9959C21.9869 11.3398 21.455 10.8078 20.7988 10.8078C20.1427 10.8078 19.6107 11.3398 19.6107 11.9959ZM19.6107 11.9959L10.0127 11.9998M12.3723 8.51416L13.494 8.55772C13.8969 8.57337 14.251 8.82951 14.3921 9.2073L15.424 11.9976M14.1813 15.4859L15.303 15.4424C15.706 15.4267 16.0601 15.1706 16.2011 14.7928L17.2186 11.9969',
  d9: 'M13.2549 2.25H11.1202C9.06787 2.24998 7.43009 2.24996 6.14561 2.41901C4.82004 2.59346 3.72454 2.96355 2.85563 3.81412C1.98413 4.66721 1.60257 5.74704 1.42315 7.05336C1.24996 8.31434 1.24998 9.92064 1.25 11.9266V12.0734C1.24998 14.0793 1.24996 15.6857 1.42315 16.9466C1.60257 18.253 1.98413 19.3328 2.85563 20.1859C3.72454 21.0364 4.82004 21.4065 6.14561 21.581C7.43009 21.75 9.06784 21.75 11.1202 21.75H13.2549C15.3073 21.75 16.945 21.75 18.2295 21.581C19.5551 21.4065 20.6506 21.0364 21.5195 20.1859C22.1081 19.6097 22.479 18.9235 22.7114 18.1204C22.8611 17.6031 22.5621 17.0626 22.0435 16.9133C21.525 16.7639 20.9833 17.0622 20.8336 17.5796C20.6771 18.1202 20.4578 18.4933 20.1507 18.794C19.7068 19.2285 19.0894 19.5009 17.9739 19.6477C16.8321 19.798 15.3236 19.8 13.1836 19.8H11.1915C10.0116 19.8 9.02367 19.7994 8.18332 19.7737C7.74921 19.7604 7.53216 19.7537 7.39108 19.6083C7.25 19.4628 7.25 19.2403 7.25 18.7952V5.20483C7.25 4.75975 7.25 4.5372 7.39108 4.39174C7.53216 4.24628 7.74921 4.23963 8.18331 4.22634C9.02366 4.20061 10.0116 4.2 11.1915 4.2H13.1836C15.3236 4.2 16.8321 4.202 17.9739 4.35226C19.0894 4.49907 19.7068 4.77152 20.1507 5.20603C20.4578 5.50673 20.6771 5.87983 20.8336 6.42043C20.9833 6.93778 21.525 7.2361 22.0435 7.08674C22.5621 6.93738 22.8611 6.39691 22.7114 5.87956C22.479 5.07647 22.1081 4.39032 21.5195 3.81412C20.6506 2.96355 19.5551 2.59346 18.2295 2.41901C16.945 2.24996 15.3073 2.24998 13.2549 2.25Z',
  d10: 'M14.0884 9.52143C13.9082 9.50144 13.66 9.50001 13.2202 9.50001H13.15C12.5977 9.50001 12.15 9.05229 12.15 8.50001C12.15 7.94772 12.5977 7.50001 13.15 7.50001H13.2202L13.2649 7.5C13.6437 7.49995 14.0051 7.4999 14.309 7.53364C14.6488 7.57135 15.0153 7.6593 15.3606 7.90128C15.7082 8.14487 15.9147 8.46056 16.0628 8.77005C16.1936 9.04341 16.309 9.38036 16.4282 9.72803L16.443 9.77115L16.8643 11H17.9267C17.9421 10.9996 17.9576 10.9996 17.9732 11H18.5967C18.9677 10.299 19.7153 9.83334 20.55 9.83334C21.7383 9.83334 22.75 10.777 22.75 12C22.75 13.223 21.7383 14.1667 20.55 14.1667C19.7455 14.1667 19.022 13.7341 18.6385 13.0752L18.243 14.2289L18.2282 14.272L18.2282 14.272C18.109 14.6197 17.9936 14.9566 17.8628 15.23C17.7147 15.5395 17.5082 15.8551 17.1606 16.0987C16.8153 16.3407 16.4488 16.4287 16.109 16.4664C15.8051 16.5001 15.4437 16.5001 15.0649 16.5L15.0202 16.5H14.95C14.3977 16.5 13.95 16.0523 13.95 15.5C13.95 14.9477 14.3977 14.5 14.95 14.5H15.0202C15.46 14.5 15.7082 14.4986 15.8884 14.4786C15.9512 14.4716 15.9886 14.4639 16.0089 14.4585C16.0194 14.4426 16.036 14.4141 16.0587 14.3667C16.133 14.2113 16.2115 13.9874 16.3511 13.5802L16.55 13H16.1732C16.1576 13.0004 16.1421 13.0004 16.1267 13H10.75C10.1977 13 9.75 12.5523 9.75 12C9.75 11.4477 10.1977 11 10.75 11H14.75L14.5511 10.4198C14.4115 10.0126 14.333 9.78871 14.2587 9.6333C14.236 9.58591 14.2194 9.55744 14.2089 9.54152C14.1886 9.53616 14.1512 9.5284 14.0884 9.52143Z',
  d11: 'M22 7V3H2V21H22V17',
  d12: 'M6.5 3V21',
  d13: 'M11.0055 8.51149L12.9421 8.51123C12.9778 8.51123 13.0108 8.53025 13.0287 8.56116L14.9766 11.9286M12.9997 15.5092H14.9707C15.011 15.5092 15.0474 15.485 15.0629 15.4478L16.4144 12.2174M9.99023 11.9921H18.5037M22.0002 11.992C22.0002 12.7876 21.3553 13.4325 20.5597 13.4325C19.7641 13.4325 19.1191 12.7876 19.1191 11.992C19.1191 11.1964 19.7641 10.5514 20.5597 10.5514C21.3553 10.5514 22.0002 11.1964 22.0002 11.992Z',
  d14: 'M13 7.5H11V9.5H12.4197L13.2768 11H10V13H14.9835L14.3406 14.5H13V16.5H15C15.4 16.5 15.7616 16.2616 15.9191 15.8939L17.1594 13H18.4839C18.8521 13.7409 19.6166 14.25 20.5 14.25C21.7426 14.25 22.75 13.2426 22.75 12C22.75 10.7574 21.7426 9.75 20.5 9.75C19.6166 9.75 18.852 10.2592 18.4839 11H15.5803L13.8682 8.00386C13.6902 7.69229 13.3589 7.5 13 7.5Z',
  d15: 'M2.22727 2.25H21.7727C22.0319 2.25 22.2805 2.35272 22.4638 2.53557C22.647 2.71842 22.75 2.96641 22.75 3.225V7H20.7955V4.19995H8V19.8L20.7955 19.7999V17H22.75V20.775C22.75 21.3135 22.3125 21.75 21.7727 21.75L2.22727 21.75C1.96808 21.75 1.71951 21.6473 1.53624 21.4644C1.35296 21.2816 1.25 21.0336 1.25 20.775V3.225C1.25 2.68652 1.68754 2.25 2.22727 2.25Z',
};

export const IconTabletConnectedUsbStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-usb-stroke-rounded IconTabletConnectedUsbStrokeRounded"
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

export const IconTabletConnectedUsbDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-usb-duotone-rounded IconTabletConnectedUsbDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedUsbTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-usb-twotone-rounded IconTabletConnectedUsbTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedUsbSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-usb-solid-rounded IconTabletConnectedUsbSolidRounded"
    >
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

export const IconTabletConnectedUsbBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-usb-bulk-rounded IconTabletConnectedUsbBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTabletConnectedUsbStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-usb-stroke-sharp IconTabletConnectedUsbStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedUsbSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-usb-solid-sharp IconTabletConnectedUsbSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTabletConnectedUsb: TheIconSelfPack = {
  name: 'TabletConnectedUsb',
  StrokeRounded: IconTabletConnectedUsbStrokeRounded,
  DuotoneRounded: IconTabletConnectedUsbDuotoneRounded,
  TwotoneRounded: IconTabletConnectedUsbTwotoneRounded,
  SolidRounded: IconTabletConnectedUsbSolidRounded,
  BulkRounded: IconTabletConnectedUsbBulkRounded,
  StrokeSharp: IconTabletConnectedUsbStrokeSharp,
  SolidSharp: IconTabletConnectedUsbSolidSharp,
};