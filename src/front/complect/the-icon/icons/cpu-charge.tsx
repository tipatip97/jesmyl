import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.5 2V4',
  d2: 'M14.5 2V4',
  d3: 'M9.5 20V22',
  d4: 'M14.5 20V22',
  d5: 'M22 14.5L20 14.5',
  d6: 'M4 9.5L2 9.5',
  d7: 'M4 14.5L2 14.5',
  d8: 'M22 9.5L20 9.5',
  d9: 'M12.6939 8.5L10.6029 11.0373C10.3788 11.3092 10.5394 11.7005 10.9048 11.7729L13.0952 12.2068C13.4848 12.284 13.6334 12.7171 13.361 12.9815L10.7666 15.5',
  d10: 'M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z',
  d11: 'M11.9436 3.25H12.0564H12.0565H12.0565C13.8942 3.24999 15.3498 3.24997 16.489 3.40314C17.6614 3.56076 18.6104 3.89288 19.3588 4.64125C20.1071 5.38961 20.4392 6.33856 20.5969 7.51098C20.75 8.65019 20.75 10.1058 20.75 11.9435V12.0564C20.75 13.8942 20.75 15.3498 20.5969 16.489C20.4392 17.6614 20.1071 18.6104 19.3588 19.3588C18.6104 20.1071 17.6614 20.4392 16.489 20.5969C15.3498 20.75 13.8942 20.75 12.0565 20.75H11.9436C10.1059 20.75 8.65019 20.75 7.51098 20.5969C6.33856 20.4392 5.38961 20.1071 4.64125 19.3588C3.89288 18.6104 3.56076 17.6614 3.40314 16.489C3.24997 15.3498 3.24999 13.8942 3.25 12.0565V12.0564V12.0564V11.9436V11.9436V11.9435C3.24999 10.1058 3.24997 8.65018 3.40314 7.51098C3.56076 6.33856 3.89288 5.38961 4.64125 4.64125C5.38961 3.89288 6.33856 3.56076 7.51098 3.40314C8.65018 3.24997 10.1058 3.24999 11.9435 3.25H11.9436H11.9436ZM13.3301 7.72831C13.7563 8.07955 13.8171 8.70979 13.4659 9.136L11.9606 10.9626L13.2898 11.2259C13.8247 11.3319 14.2519 11.7023 14.4225 12.1995C14.5962 12.7057 14.4802 13.2891 14.0578 13.6991L11.4634 16.2176C11.0671 16.6022 10.434 16.5928 10.0493 16.1966C9.66466 15.8003 9.67406 15.1672 10.0703 14.7825L11.9145 12.9923L10.7107 12.7538C9.72352 12.5582 9.05034 11.3492 9.83143 10.4014L11.9225 7.86406C12.2737 7.43785 12.9039 7.37708 13.3301 7.72831Z',
  d12: 'M9.5 1C10.0523 1 10.5 1.44772 10.5 2V4C10.5 4.55228 10.0523 5 9.5 5C8.94772 5 8.5 4.55228 8.5 4V2C8.5 1.44772 8.94772 1 9.5 1ZM14.5 1C15.0523 1 15.5 1.44772 15.5 2V4C15.5 4.55228 15.0523 5 14.5 5C13.9477 5 13.5 4.55228 13.5 4V2C13.5 1.44772 13.9477 1 14.5 1ZM1 9.5C1 8.94772 1.44772 8.5 2 8.5H4C4.55228 8.5 5 8.94772 5 9.5C5 10.0523 4.55228 10.5 4 10.5H2C1.44772 10.5 1 10.0523 1 9.5ZM19 9.5C19 8.94772 19.4477 8.5 20 8.5H22C22.5523 8.5 23 8.94772 23 9.5C23 10.0523 22.5523 10.5 22 10.5H20C19.4477 10.5 19 10.0523 19 9.5ZM1 14.5C1 13.9477 1.44772 13.5 2 13.5H4C4.55228 13.5 5 13.9477 5 14.5C5 15.0523 4.55228 15.5 4 15.5H2C1.44772 15.5 1 15.0523 1 14.5ZM19 14.5C19 13.9477 19.4477 13.5 20 13.5H22C22.5523 13.5 23 13.9477 23 14.5C23 15.0523 22.5523 15.5 22 15.5H20C19.4477 15.5 19 15.0523 19 14.5ZM9.5 19C10.0523 19 10.5 19.4477 10.5 20V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V20C8.5 19.4477 8.94772 19 9.5 19ZM14.5 19C15.0523 19 15.5 19.4477 15.5 20V22C15.5 22.5523 15.0523 23 14.5 23C13.9477 23 13.5 22.5523 13.5 22V20C13.5 19.4477 13.9477 19 14.5 19Z',
  d13: 'M10.5 2C10.5 1.44772 10.0523 1 9.5 1C8.94772 1 8.5 1.44772 8.5 2V3.30982C9.09592 3.2727 9.76055 3.25861 10.5 3.25327V2ZM15.5 3.30982C14.9041 3.2727 14.2395 3.25861 13.5 3.25327V2C13.5 1.44772 13.9477 1 14.5 1C15.0523 1 15.5 1.44772 15.5 2V3.30982ZM20.7467 10.5C20.7414 9.76055 20.7273 9.09593 20.6902 8.5H22C22.5523 8.5 23 8.94772 23 9.5C23 10.0523 22.5523 10.5 22 10.5H20.7467ZM20.6902 15.5C20.7273 14.9041 20.7414 14.2394 20.7467 13.5H22C22.5523 13.5 23 13.9477 23 14.5C23 15.0523 22.5523 15.5 22 15.5H20.6902ZM13.5 20.7467C14.2395 20.7414 14.9041 20.7273 15.5 20.6902V22C15.5 22.5523 15.0523 23 14.5 23C13.9477 23 13.5 22.5523 13.5 22V20.7467ZM8.5 20.6902C9.09593 20.7273 9.76055 20.7414 10.5 20.7467V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V20.6902ZM3.25327 13.5C3.25861 14.2394 3.2727 14.9041 3.30982 15.5H2C1.44772 15.5 1 15.0523 1 14.5C1 13.9477 1.44772 13.5 2 13.5H3.25327ZM3.30982 8.5C3.2727 9.09592 3.25861 9.76055 3.25327 10.5H2C1.44772 10.5 1 10.0523 1 9.5C1 8.94772 1.44772 8.5 2 8.5H3.30982Z',
  d14: 'M12.0564 3.25H11.9436H11.9436C10.1058 3.24999 8.65018 3.24997 7.51098 3.40314C6.33856 3.56076 5.38961 3.89288 4.64124 4.64124C3.89288 5.38961 3.56076 6.33856 3.40314 7.51098C3.24997 8.65018 3.24999 10.1058 3.25 11.9436V11.9436V12.0564V12.0564C3.24999 13.8942 3.24997 15.3498 3.40314 16.489C3.56076 17.6614 3.89288 18.6104 4.64124 19.3588C5.38961 20.1071 6.33856 20.4392 7.51098 20.5969C8.65019 20.75 10.1059 20.75 11.9436 20.75H12.0565C13.8942 20.75 15.3498 20.75 16.489 20.5969C17.6614 20.4392 18.6104 20.1071 19.3588 19.3588C20.1071 18.6104 20.4392 17.6614 20.5969 16.489C20.75 15.3498 20.75 13.8942 20.75 12.0564V11.9435C20.75 10.1058 20.75 8.65019 20.5969 7.51098C20.4392 6.33856 20.1071 5.38961 19.3588 4.64124C18.6104 3.89288 17.6614 3.56076 16.489 3.40314C15.3498 3.24997 13.8942 3.24999 12.0565 3.25H12.0564Z',
  d15: 'M13.4659 9.136C13.8171 8.70979 13.7563 8.07955 13.3301 7.72831C12.9039 7.37708 12.2737 7.43785 11.9225 7.86406L9.83143 10.4014C9.05035 11.3492 9.72352 12.5582 10.7107 12.7538L11.9145 12.9923L10.0703 14.7825C9.67406 15.1672 9.66466 15.8003 10.0493 16.1966C10.434 16.5928 11.0671 16.6022 11.4634 16.2176L14.0578 13.6991C14.4802 13.2891 14.5962 12.7057 14.4225 12.1995C14.2519 11.7023 13.8247 11.3319 13.2898 11.2259L11.9606 10.9626L13.4659 9.136Z',
  d16: 'M12 16L14 12H10L12 8',
  d17: 'M19.5 4.5H4.5V19.5H19.5V4.5Z',
  d18: 'M9.5 2V4.5M14.5 2V4.5',
  d19: 'M9.5 19.5V22M14.5 19.5V22',
  d20: 'M4.5 9.5H2M4.5 14.5H2',
  d21: 'M22 14.5H19.5M22 9.5L19.5 9.5',
  d22: 'M8.5 4.5V2H10.5V4.5H8.5ZM13.5 4.5V2H15.5V4.5H13.5ZM2 8.5H4.5V10.5H2V8.5ZM19.5 8.5H22V10.5H19.5V8.5ZM2 13.5H4.5V15.5H2V13.5ZM19.5 13.5H22V15.5H19.5V13.5ZM8.5 22V19.5H10.5V22H8.5ZM13.5 22V19.5H15.5V22H13.5Z',
  d23: 'M4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75H4.5ZM12.8953 8.44716L11.6189 10.9999H15.6189L12.8953 16.4472L11.1064 15.5527L12.3828 12.9999H8.38281L11.1064 7.55273L12.8953 8.44716Z',
} as const;

export const IconCpuChargeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-charge-stroke-rounded IconCpuChargeStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuChargeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-charge-duotone-rounded IconCpuChargeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuChargeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-charge-twotone-rounded IconCpuChargeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuChargeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-charge-solid-rounded IconCpuChargeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuChargeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-charge-bulk-rounded IconCpuChargeBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuChargeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-charge-stroke-sharp IconCpuChargeStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuChargeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-charge-solid-sharp IconCpuChargeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCpuCharge: TheIconSelfPack = {
  name: 'CpuCharge',
  StrokeRounded: IconCpuChargeStrokeRounded,
  DuotoneRounded: IconCpuChargeDuotoneRounded,
  TwotoneRounded: IconCpuChargeTwotoneRounded,
  SolidRounded: IconCpuChargeSolidRounded,
  BulkRounded: IconCpuChargeBulkRounded,
  StrokeSharp: IconCpuChargeStrokeSharp,
  SolidSharp: IconCpuChargeSolidSharp,
};