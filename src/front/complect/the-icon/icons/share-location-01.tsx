import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2C17.5237 2 22 6.47778 22 12C22 17.5222 17.5237 22 12 22',
  d2: 'M9 21.5C7.81163 21.0953 6.69532 20.5107 5.72302 19.7462M5.72302 4.25385C6.69532 3.50059 7.81163 2.90473 9 2.5M2 10.2461C2.21607 9.08813 2.66019 7.96386 3.29638 6.94078M2 13.7539C2.21607 14.9119 2.66019 16.0361 3.29638 17.0592',
  d3: 'M12.7185 16.2151C12.5258 16.3979 12.2682 16.5 12.0001 16.5C11.732 16.5 11.4744 16.3979 11.2817 16.2151C9.51674 14.5317 7.15154 12.6511 8.30498 9.92085C8.92863 8.44462 10.4257 7.5 12.0001 7.5C13.5745 7.5 15.0715 8.44462 15.6952 9.92085C16.8472 12.6477 14.4878 14.5375 12.7185 16.2151Z',
  d4: 'M11.9961 11.5H12.0024',
  d5: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.0001 16.5C12.2682 16.5 12.5258 16.3979 12.7185 16.2151C12.8531 16.0875 12.9911 15.9587 13.1307 15.8284C14.8264 14.2452 16.7596 12.4403 15.6952 9.92085C15.0715 8.44462 13.5745 7.5 12.0001 7.5C10.4257 7.5 8.92863 8.44462 8.30498 9.92085C7.24494 12.43 9.15677 14.2216 10.8433 15.802C10.9919 15.9412 11.1387 16.0788 11.2817 16.2151C11.4744 16.3979 11.732 16.5 12.0001 16.5Z',
  d6: 'M11.018 2.22727C11.018 1.68754 11.4556 1.25 11.9953 1.25C17.9333 1.25 22.7453 6.06364 22.7453 12C22.7453 17.9364 17.9333 22.75 11.9953 22.75C11.4556 22.75 11.018 22.3125 11.018 21.7727C11.018 21.233 11.4556 20.7955 11.9953 20.7955C16.8536 20.7955 20.7907 16.8571 20.7907 12C20.7907 7.14292 16.8536 3.20455 11.9953 3.20455C11.4556 3.20455 11.018 2.76701 11.018 2.22727ZM9.46274 2.54417C9.66105 3.04615 9.41488 3.61385 8.9129 3.81216C8.02516 4.16287 7.19408 4.63334 6.45948 5.20245C6.03281 5.533 5.41896 5.45508 5.08841 5.02841C4.75786 4.60174 4.83578 3.98789 5.26245 3.65734C6.14763 2.97158 7.14083 2.41068 8.19475 1.99433C8.69673 1.79602 9.26443 2.04219 9.46274 2.54417ZM4.00555 6.22586C4.46389 6.51088 4.6044 7.11349 4.31938 7.57183C3.75897 8.47304 3.37117 9.45814 3.18326 10.4652C3.08426 10.9958 2.57389 11.3457 2.04331 11.2467C1.51274 11.1477 1.16287 10.6373 1.26187 10.1067C1.49627 8.85047 1.97652 7.63814 2.65958 6.5397C2.9446 6.08136 3.54721 5.94085 4.00555 6.22586ZM2.04331 12.7533C2.57389 12.6543 3.08426 13.0042 3.18326 13.5348C3.37117 14.5419 3.75897 15.527 4.31938 16.4282C4.6044 16.8865 4.46389 17.4891 4.00555 17.7741C3.54721 18.0592 2.9446 17.9186 2.65958 17.4603C1.97652 16.3619 1.49627 15.1495 1.26187 13.8933C1.16287 13.3627 1.51274 12.8523 2.04331 12.7533ZM5.09273 18.9661C5.42634 18.5418 6.04073 18.4683 6.46502 18.8019C7.19378 19.3749 8.02134 19.8382 8.91115 20.1878C9.41351 20.3851 9.66078 20.9523 9.46343 21.4547C9.26608 21.9571 8.69886 22.2043 8.1965 22.007C7.14464 21.5938 6.14793 21.0389 5.25692 20.3383C4.83263 20.0047 4.75912 19.3903 5.09273 18.9661Z',
  d7: 'M11.9995 6.75C10.1363 6.75 8.35933 7.86363 7.61353 9.62898C6.91554 11.2812 7.30405 12.6979 8.07053 13.8708C8.68448 14.8104 9.58064 15.6488 10.3479 16.3667C10.4919 16.5014 10.6313 16.6318 10.7634 16.7578L10.7651 16.7594C11.0986 17.0756 11.5415 17.25 11.9995 17.25C12.4576 17.25 12.9005 17.0756 13.234 16.7594C13.3594 16.6404 13.4912 16.5176 13.6271 16.3909C14.402 15.6685 15.3097 14.8224 15.93 13.8711C16.6955 12.697 17.0827 11.2792 16.3855 9.62898C15.6397 7.86363 13.8627 6.75 11.9995 6.75ZM11.9896 9.75C11.0261 9.75 10.2451 10.5335 10.2451 11.5C10.2451 12.4665 11.0261 13.25 11.9896 13.25H12.0006C12.9641 13.25 13.7451 12.4665 13.7451 11.5C13.7451 10.5335 12.9641 9.75 12.0006 9.75H11.9896Z',
  d8: 'M16 11.5C16 14.65 12 16.45 12 16.45C12 16.45 8 14.65 8 11.5C8 9.26325 9.79086 7.45 12 7.45C14.2091 7.45 16 9.26325 16 11.5Z',
  d9: 'M20.7939 12C20.7939 7.14292 16.8538 3.20455 11.9917 3.20455V1.25C17.9343 1.25 22.75 6.06364 22.75 12C22.75 17.9364 17.9343 22.75 11.9917 22.75V20.7955C16.8538 20.7955 20.7939 16.8571 20.7939 12ZM9.37293 3.641C8.30978 4.00281 7.31442 4.53454 6.45162 5.20245L5.25367 3.65734C6.29274 2.85298 7.48096 2.22008 8.74231 1.79082L9.37293 3.641ZM4.30987 7.57183C3.74903 8.47304 3.36092 9.45814 3.17287 10.4652L1.25 10.1067C1.48458 8.85047 1.9652 7.63814 2.64879 6.5397L4.30987 7.57183ZM2.64879 17.4603C1.9652 16.3619 1.48458 15.1495 1.25 13.8933L3.17287 13.5348C3.36092 14.5419 3.74903 15.527 4.30987 16.4282L2.64879 17.4603ZM6.45716 18.8019C7.31297 19.4743 8.3048 19.9955 9.37294 20.359L8.74231 22.2092C7.48594 21.7816 6.29418 21.1602 5.24813 20.3383L6.45716 18.8019Z',
  d10: 'M11.002 16.749C11.2035 16.8653 11.3726 16.9542 11.4933 17.0148L12.0039 17.25L12.5145 17.0148C12.6352 16.9542 12.8043 16.8653 13.0058 16.749C13.4071 16.5173 13.9455 16.1718 14.4876 15.7176C15.5478 14.8292 16.7539 13.4109 16.7539 11.5171C16.7539 8.89306 14.636 6.75 12.0039 6.75C9.3718 6.75 7.25391 8.89306 7.25391 11.5171C7.25391 13.4109 8.46002 14.8292 9.52025 15.7176C10.0623 16.1718 10.6007 16.5173 11.002 16.749ZM11.9984 9.75C11.0349 9.75 10.2539 10.5335 10.2539 11.5C10.2539 12.4665 11.0349 13.25 11.9984 13.25H12.0094C12.9729 13.25 13.7539 12.4665 13.7539 11.5C13.7539 10.5335 12.9729 9.75 12.0094 9.75H11.9984Z',
} as const;

export const IconShareLocation01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-01-stroke-rounded IconShareLocation01StrokeRounded"
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

export const IconShareLocation01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-01-duotone-rounded IconShareLocation01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconShareLocation01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-01-twotone-rounded IconShareLocation01TwotoneRounded"
    >
      <path 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconShareLocation01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-01-solid-rounded IconShareLocation01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconShareLocation01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-01-bulk-rounded IconShareLocation01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconShareLocation01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-01-stroke-sharp IconShareLocation01StrokeSharp"
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconShareLocation01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-01-solid-sharp IconShareLocation01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShareLocation01: TheIconSelfPack = {
  name: 'ShareLocation01',
  StrokeRounded: IconShareLocation01StrokeRounded,
  DuotoneRounded: IconShareLocation01DuotoneRounded,
  TwotoneRounded: IconShareLocation01TwotoneRounded,
  SolidRounded: IconShareLocation01SolidRounded,
  BulkRounded: IconShareLocation01BulkRounded,
  StrokeSharp: IconShareLocation01StrokeSharp,
  SolidSharp: IconShareLocation01SolidSharp,
};