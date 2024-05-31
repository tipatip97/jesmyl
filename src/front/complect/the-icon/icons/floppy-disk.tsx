import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 22V19C8 17.1144 8 16.1716 8.58579 15.5858C9.17157 15 10.1144 15 12 15C13.8856 15 14.8284 15 15.4142 15.5858C16 16.1716 16 17.1144 16 19V22',
  d2: 'M10 7H14',
  d3: 'M3 11.8584C3 7.28199 3 4.99376 4.38674 3.54394C4.43797 3.49038 4.49038 3.43797 4.54394 3.38674C5.99376 2 8.28199 2 12.8584 2C13.943 2 14.4655 2.00376 14.9628 2.18936C15.4417 2.3681 15.8429 2.70239 16.6452 3.37099L18.8411 5.20092C19.9027 6.08561 20.4335 6.52795 20.7168 7.13266C21 7.73737 21 8.42833 21 9.81025V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3 18.6246 3 16.7497 3 13V11.8584Z',
  d4: 'M4.38674 3.54394C3 4.99376 3 7.28199 3 11.8584V13C3 16.7497 3 18.6246 3.95491 19.9389C4.26331 20.3634 4.6366 20.7367 5.06107 21.0451C5.792 21.5761 6.69629 21.8119 8 21.9165V19C8 17.1144 8 16.1716 8.58579 15.5858C9.17157 15 10.1144 15 12 15C13.8856 15 14.8284 15 15.4142 15.5858C16 16.1716 16 17.1144 16 19V21.9165C17.3037 21.8119 18.208 21.5761 18.9389 21.0451C19.3634 20.7367 19.7367 20.3634 20.0451 19.9389C21 18.6246 21 16.7497 21 13V9.81025C21 8.42833 21 7.73737 20.7168 7.13266C20.4335 6.52795 19.9027 6.08561 18.8411 5.20092L16.6452 3.37099C15.8429 2.70239 15.4417 2.3681 14.9628 2.18936C14.4655 2.00376 13.943 2 12.8584 2C8.28199 2 5.99376 2 4.54394 3.38674C4.49038 3.43797 4.43797 3.49038 4.38674 3.54394Z',
  d5: 'M15.2251 1.48673C14.59 1.24973 13.9301 1.24984 12.9389 1.25001L12.8028 1.25002C10.5617 1.25001 8.80538 1.25 7.43144 1.4297C6.02582 1.61355 4.91196 1.99694 4.02554 2.84484C3.96394 2.90376 3.90366 2.96404 3.84475 3.02564C2.99689 3.9121 2.61352 5.02601 2.42968 6.4317C2.24998 7.8057 2.24999 9.56213 2.25 11.8033V13.0458C2.24999 14.8824 2.24999 16.3221 2.37373 17.4643C2.50001 18.6299 2.76232 19.5743 3.34815 20.3807C3.70281 20.8688 4.13209 21.2981 4.62024 21.6528C5.42656 22.2387 6.37094 22.501 7.53648 22.6273C7.68582 22.6435 7.84026 22.6575 8 22.6697C9.06871 22.75 10.3656 22.75 11.9411 22.75H12.0591C13.6346 22.75 14.9313 22.75 16 22.6698C16.1597 22.6575 16.3142 22.6435 16.4635 22.6273C17.6291 22.501 18.5734 22.2387 19.3798 21.6528C19.8679 21.2981 20.2972 20.8688 20.6518 20.3807C21.2377 19.5743 21.5 18.6299 21.6263 17.4643C21.75 16.3221 21.75 14.8825 21.75 13.0459L21.7501 9.64917C21.7507 8.42467 21.7512 7.57322 21.396 6.81482C21.0408 6.05642 20.3864 5.51168 19.4453 4.72828L17.0324 2.71745C16.3202 2.12339 15.8256 1.71088 15.2251 1.48673ZM10 6C9.44772 6 9 6.44772 9 7C9 7.55228 9.44772 8 10 8H14C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6H10ZM8 19.6721C8 20.1104 8 20.3295 8.13979 20.4748C8.27957 20.62 8.49176 20.628 8.91613 20.6442H8.91615C9.7525 20.676 10.7573 20.6766 12.0001 20.6766C13.2428 20.6766 14.2476 20.676 15.0839 20.6442C15.5082 20.628 15.7204 20.62 15.8602 20.4748C16 20.3296 16 20.1104 16 19.6721V19.0002C16 17.1145 16 16.1716 15.4142 15.5858C14.8284 15 13.8856 15 12 15C10.1144 15 9.17157 15 8.58579 15.5858C8 16.1716 8 17.1145 8 19.0002V19.6721Z',
  d6: 'M15.2251 1.48673C14.59 1.24973 13.9301 1.24984 12.9389 1.25001L12.8028 1.25002C10.5617 1.25001 8.80538 1.25 7.43144 1.4297C6.02582 1.61355 4.91196 1.99694 4.02554 2.84484C3.96394 2.90376 3.90366 2.96404 3.84475 3.02564C2.99689 3.9121 2.61352 5.02601 2.42968 6.4317C2.24998 7.8057 2.24999 9.56213 2.25 11.8033V13.0458C2.24999 14.8824 2.24999 16.3221 2.37373 17.4643C2.50001 18.6299 2.76232 19.5743 3.34815 20.3807C3.70281 20.8688 4.13209 21.2981 4.62024 21.6528C5.42656 22.2387 6.37094 22.501 7.53648 22.6273C7.68582 22.6435 7.84026 22.6575 8 22.6697C9.06871 22.75 10.3656 22.75 11.9411 22.75H12.0591C13.6346 22.75 14.9313 22.75 16 22.6698C16.1597 22.6575 16.3142 22.6435 16.4635 22.6273C17.6291 22.501 18.5734 22.2387 19.3798 21.6528C19.8679 21.2981 20.2972 20.8688 20.6518 20.3807C21.2377 19.5743 21.5 18.6299 21.6263 17.4643C21.75 16.3221 21.75 14.8825 21.75 13.0459L21.7501 9.64917C21.7507 8.42467 21.7512 7.57322 21.396 6.81482C21.0408 6.05642 20.3864 5.51168 19.4453 4.72828L17.0324 2.71745C16.3202 2.12339 15.8256 1.71088 15.2251 1.48673Z',
  d7: 'M10 6C9.44772 6 9 6.44772 9 7C9 7.55228 9.44772 8 10 8H14C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6H10Z',
  d8: 'M8.13979 20.4748C8 20.3295 8 20.1104 8 19.6721V19.0002C8 17.1145 8 16.1716 8.58579 15.5858C9.17157 15 10.1144 15 12 15C13.8856 15 14.8284 15 15.4142 15.5858C16 16.1716 16 17.1145 16 19.0002V19.6721C16 20.1104 16 20.3296 15.8602 20.4748C15.7204 20.62 15.5082 20.628 15.0839 20.6442C14.2476 20.676 13.2428 20.6766 12.0001 20.6766C10.7573 20.6766 9.7525 20.676 8.91615 20.6442C8.49177 20.628 8.27958 20.62 8.13979 20.4748Z',
  d9: 'M8.00586 21.9975V14.9907H15.9613V21.9975',
  d10: 'M9.49805 6.98291H14.4702',
  d11: 'M3.09944 21.9976H20.8996C20.9547 21.9976 20.9994 21.9524 20.999 21.8969L20.9095 6.96025L15.017 2.00244L3.09944 2.00276C3.04452 2.00276 3 2.04757 3 2.10285V21.8975C3 21.9527 3.04452 21.9976 3.09944 21.9976Z',
  d12: 'M2.25 2C2.25 1.58579 2.58579 1.25 3 1.25H15.2715L21.75 6.64869V22C21.75 22.4142 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22V2ZM14.5 8H9.5V6H14.5V8ZM8 15V20.75H16V15H8Z',
} as const;

export const IconFloppyDiskStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floppy-disk-stroke-rounded IconFloppyDiskStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFloppyDiskDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floppy-disk-duotone-rounded IconFloppyDiskDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconFloppyDiskTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floppy-disk-twotone-rounded IconFloppyDiskTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconFloppyDiskSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floppy-disk-solid-rounded IconFloppyDiskSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFloppyDiskBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floppy-disk-bulk-rounded IconFloppyDiskBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFloppyDiskStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floppy-disk-stroke-sharp IconFloppyDiskStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconFloppyDiskSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floppy-disk-solid-sharp IconFloppyDiskSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFloppyDisk: TheIconSelfPack = {
  name: 'FloppyDisk',
  StrokeRounded: IconFloppyDiskStrokeRounded,
  DuotoneRounded: IconFloppyDiskDuotoneRounded,
  TwotoneRounded: IconFloppyDiskTwotoneRounded,
  SolidRounded: IconFloppyDiskSolidRounded,
  BulkRounded: IconFloppyDiskBulkRounded,
  StrokeSharp: IconFloppyDiskStrokeSharp,
  SolidSharp: IconFloppyDiskSolidSharp,
};