import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z',
  d2: 'M9.5 2V4',
  d3: 'M14.5 2V4',
  d4: 'M9.5 20V22',
  d5: 'M14.5 20V22',
  d6: 'M13 9L9 13',
  d7: 'M15 13L13 15',
  d8: 'M22 14.5L20 14.5',
  d9: 'M4 9.5L2 9.5',
  d10: 'M4 14.5L2 14.5',
  d11: 'M22 9.5L20 9.5',
  d12: 'M12.0565 3.25H12.0564H12.0564H11.9436H11.9436H11.9435C10.1058 3.24999 8.65018 3.24997 7.51098 3.40314C6.33856 3.56076 5.38961 3.89288 4.64124 4.64124C3.89288 5.38961 3.56076 6.33856 3.40314 7.51098C3.24997 8.65018 3.24999 10.1058 3.25 11.9436V11.9436V11.9436V12.0564V12.0564V12.0565C3.24999 13.8942 3.24997 15.3498 3.40314 16.489C3.56076 17.6614 3.89288 18.6104 4.64124 19.3588C5.38961 20.1071 6.33856 20.4392 7.51098 20.5969C8.65019 20.75 10.1059 20.75 11.9436 20.75H12.0565C13.8942 20.75 15.3498 20.75 16.489 20.5969C17.6614 20.4392 18.6104 20.1071 19.3588 19.3588C20.1071 18.6104 20.4392 17.6614 20.5969 16.489C20.75 15.3498 20.75 13.8942 20.75 12.0564V11.9435C20.75 10.1058 20.75 8.65019 20.5969 7.51098C20.4392 6.33856 20.1071 5.38961 19.3588 4.64124C18.6104 3.89288 17.6614 3.56076 16.489 3.40314C15.3498 3.24997 13.8942 3.24999 12.0565 3.25ZM13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289L8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L13.7071 9.70711ZM15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071L13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071C11.9024 15.3166 11.9024 14.6834 12.2929 14.2929L14.2929 12.2929C14.6834 11.9024 15.3166 11.9024 15.7071 12.2929Z',
  d13: 'M9.5 1C10.0523 1 10.5 1.44772 10.5 2V4C10.5 4.55228 10.0523 5 9.5 5C8.94772 5 8.5 4.55228 8.5 4V2C8.5 1.44772 8.94772 1 9.5 1ZM14.5 1C15.0523 1 15.5 1.44772 15.5 2V4C15.5 4.55228 15.0523 5 14.5 5C13.9477 5 13.5 4.55228 13.5 4V2C13.5 1.44772 13.9477 1 14.5 1ZM1 9.5C1 8.94772 1.44772 8.5 2 8.5H4C4.55228 8.5 5 8.94772 5 9.5C5 10.0523 4.55228 10.5 4 10.5H2C1.44772 10.5 1 10.0523 1 9.5ZM19 9.5C19 8.94772 19.4477 8.5 20 8.5H22C22.5523 8.5 23 8.94772 23 9.5C23 10.0523 22.5523 10.5 22 10.5H20C19.4477 10.5 19 10.0523 19 9.5ZM1 14.5C1 13.9477 1.44772 13.5 2 13.5H4C4.55228 13.5 5 13.9477 5 14.5C5 15.0523 4.55228 15.5 4 15.5H2C1.44772 15.5 1 15.0523 1 14.5ZM19 14.5C19 13.9477 19.4477 13.5 20 13.5H22C22.5523 13.5 23 13.9477 23 14.5C23 15.0523 22.5523 15.5 22 15.5H20C19.4477 15.5 19 15.0523 19 14.5ZM9.5 19C10.0523 19 10.5 19.4477 10.5 20V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V20C8.5 19.4477 8.94772 19 9.5 19ZM14.5 19C15.0523 19 15.5 19.4477 15.5 20V22C15.5 22.5523 15.0523 23 14.5 23C13.9477 23 13.5 22.5523 13.5 22V20C13.5 19.4477 13.9477 19 14.5 19Z',
  d14: 'M12.0564 3.25C13.8942 3.24999 15.3498 3.24997 16.489 3.40314C17.6614 3.56076 18.6104 3.89288 19.3588 4.64124C20.1071 5.38961 20.4392 6.33856 20.5969 7.51098C20.75 8.65018 20.75 10.1058 20.75 11.9435V12.0564C20.75 13.8942 20.75 15.3498 20.5969 16.489C20.4392 17.6614 20.1071 18.6104 19.3588 19.3588C18.6104 20.1071 17.6614 20.4392 16.489 20.5969C15.3498 20.75 13.8942 20.75 12.0565 20.75H11.9436C10.1059 20.75 8.65018 20.75 7.51098 20.5969C6.33856 20.4392 5.38961 20.1071 4.64124 19.3588C3.89288 18.6104 3.56076 17.6614 3.40314 16.489C3.24997 15.3498 3.24999 13.8942 3.25 12.0564V12.0564V11.9436V11.9436C3.24999 10.1058 3.24997 8.65019 3.40314 7.51098C3.56076 6.33856 3.89288 5.38961 4.64124 4.64124C5.38961 3.89288 6.33856 3.56076 7.51098 3.40314C8.65019 3.24997 10.1058 3.24999 11.9436 3.25H11.9436H12.0564H12.0564Z',
  d15: 'M13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289ZM15.7071 13.7071C16.0976 13.3166 16.0976 12.6834 15.7071 12.2929C15.3166 11.9024 14.6834 11.9024 14.2929 12.2929L12.2929 14.2929C11.9024 14.6834 11.9024 15.3166 12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071L15.7071 13.7071Z',
  d16: 'M10.5 2C10.5 1.44772 10.0523 1 9.5 1C8.94772 1 8.5 1.44772 8.5 2V3.30982C9.09592 3.2727 9.76055 3.25861 10.5 3.25327V2ZM15.5 3.30982C14.9041 3.2727 14.2395 3.25861 13.5 3.25327V2C13.5 1.44772 13.9477 1 14.5 1C15.0523 1 15.5 1.44772 15.5 2V3.30982ZM20.7467 10.5C20.7414 9.76055 20.7273 9.09592 20.6902 8.5H22C22.5523 8.5 23 8.94772 23 9.5C23 10.0523 22.5523 10.5 22 10.5H20.7467ZM20.6902 15.5C20.7273 14.9041 20.7414 14.2394 20.7467 13.5H22C22.5523 13.5 23 13.9477 23 14.5C23 15.0523 22.5523 15.5 22 15.5H20.6902ZM13.5 20.7467C14.2395 20.7414 14.9041 20.7273 15.5 20.6902V22C15.5 22.5523 15.0523 23 14.5 23C13.9477 23 13.5 22.5523 13.5 22V20.7467ZM8.5 20.6902C9.09593 20.7273 9.76055 20.7414 10.5 20.7467V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V20.6902ZM3.25327 13.5C3.25861 14.2395 3.2727 14.9041 3.30982 15.5H2C1.44772 15.5 1 15.0523 1 14.5C1 13.9477 1.44772 13.5 2 13.5H3.25327ZM3.30982 8.5C3.2727 9.09592 3.25861 9.76055 3.25327 10.5H2C1.44772 10.5 1 10.0523 1 9.5C1 8.94772 1.44772 8.5 2 8.5H3.30982Z',
  d17: 'M19.5 4.5H4.5V19.5H19.5V4.5Z',
  d18: 'M9.5 2V4.5M14.5 2V4.5',
  d19: 'M9.5 19.5V22M14.5 19.5V22',
  d20: 'M4.5 9.5H2M4.5 14.5H2',
  d21: 'M22 14.5H19.5M22 9.5L19.5 9.5',
  d22: 'M3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5ZM8.29297 12.2928L12.293 8.29285L13.7072 9.70706L9.70718 13.7071L8.29297 12.2928ZM14.293 12.2928L12.293 14.2928L13.7072 15.7071L15.7072 13.7071L14.293 12.2928Z',
  d23: 'M8.5 4.5V2H10.5V4.5H8.5ZM13.5 4.5V2H15.5V4.5H13.5ZM2 8.5H4.5V10.5H2V8.5ZM19.5 8.5H22V10.5H19.5V8.5ZM2 13.5H4.5V15.5H2V13.5ZM19.5 13.5H22V15.5H19.5V13.5ZM8.5 22V19.5H10.5V22H8.5ZM13.5 22V19.5H15.5V22H13.5Z',
} as const;

export const IconCpuStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-stroke-rounded IconCpuStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-duotone-rounded IconCpuDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-twotone-rounded IconCpuTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-solid-rounded IconCpuSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-bulk-rounded IconCpuBulkRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-stroke-sharp IconCpuStrokeSharp"
    >
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
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

export const IconCpuSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-solid-sharp IconCpuSolidSharp"
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

export const iconPackOfCpu: TheIconSelfPack = {
  name: 'Cpu',
  StrokeRounded: IconCpuStrokeRounded,
  DuotoneRounded: IconCpuDuotoneRounded,
  TwotoneRounded: IconCpuTwotoneRounded,
  SolidRounded: IconCpuSolidRounded,
  BulkRounded: IconCpuBulkRounded,
  StrokeSharp: IconCpuStrokeSharp,
  SolidSharp: IconCpuSolidSharp,
};