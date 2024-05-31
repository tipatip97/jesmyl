import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.5 10C14.0697 8.55426 12.5855 7.5 11 7.5C9.067 7.5 7.5 9.067 7.5 11C7.5 12.7632 8.80385 14.2574 10.5 14.5',
  d2: 'M19.9504 10C19.4697 5.53446 15.5596 2 11 2C6.12944 2 2 6.03298 2 10.9258C2 15.9137 6.2039 19.3616 10.073 21.7567C10.3555 21.9162 10.675 22 11 22C11.325 22 11.6445 21.9162 11.927 21.7567C12.1816 21.6009 12.4376 21.4403 12.6937 21.2748',
  d3: 'M17.5 12C19.9353 12 22 14.0165 22 16.4629C22 18.9482 19.9017 20.6924 17.9635 21.8783C17.8223 21.9581 17.6625 22 17.5 22C17.3375 22 17.1777 21.9581 17.0365 21.8783C15.1019 20.6808 13 18.9568 13 16.4629C13 14.0165 15.0647 12 17.5 12Z',
  d4: 'M17.5 16.5H17.509',
  d5: 'M11 2C15.8706 2 20 6.03298 20 10.9258C20 11.5248 19.9391 12.1022 19.8251 12.6588C19.1413 12.2415 18.3428 12 17.5 12C15.0647 12 13 14.0165 13 16.4629C13 17.8543 13.6543 19.0061 14.5688 19.9605C13.7071 20.6198 12.8087 21.2171 11.927 21.7567C11.6445 21.9162 11.325 22 11 22C10.675 22 10.3555 21.9162 10.073 21.7567C6.2039 19.3616 2 15.9137 2 10.9258C2 6.03298 6.12944 2 11 2ZM14.5 11C14.5 12.933 12.933 14.5 11 14.5C9.067 14.5 7.5 12.933 7.5 11C7.5 9.067 9.067 7.5 11 7.5C12.933 7.5 14.5 9.067 14.5 11Z',
  d6: 'M1.25 10.9258C1.25 5.60954 5.72587 1.25 11.0029 1.25C15.9318 1.25 20.1617 5.05315 20.6985 9.88679C20.7318 10.1864 20.7484 10.3362 20.6564 10.4047C20.5644 10.4732 20.4147 10.4096 20.1151 10.2826C19.3069 9.93958 18.4233 9.75 17.5049 9.75C16.7745 9.75 16.066 9.86994 15.4 10.0916C15.1822 10.1641 15.0734 10.2003 14.9989 10.1624C14.9243 10.1245 14.8883 10.0114 14.8163 9.7853C14.302 8.17005 12.7891 7 11.0029 7C8.79314 7 7.00174 8.79086 7.00174 11C7.00174 13.014 8.49058 14.6803 10.428 14.959C10.661 14.9925 10.7775 15.0093 10.8271 15.0761C10.8768 15.1428 10.8598 15.2556 10.826 15.4811C10.7779 15.8015 10.7529 16.1293 10.7529 16.4629C10.7529 18.3959 11.5817 19.9511 12.5901 21.1236C12.6881 21.2376 12.7885 21.3488 12.8909 21.4573C13.0532 21.6293 13.1343 21.7153 13.1225 21.8089C13.1108 21.9025 13.0144 21.9634 12.8218 22.0854C12.6545 22.1913 12.4877 22.2949 12.3218 22.3964L12.3105 22.4033L12.299 22.4098C11.9037 22.6329 11.457 22.75 11.0029 22.75C10.5489 22.75 10.1022 22.6329 9.70688 22.4098L9.69368 22.4024L9.68079 22.3944C7.7203 21.1811 5.62628 19.6728 4.01773 17.8025C2.40222 15.9241 1.25 13.6482 1.25 10.9258Z',
  d7: 'M17.5 11.25C14.6598 11.25 12.25 13.5931 12.25 16.4629C12.25 17.9384 12.8764 19.1598 13.7241 20.1457C14.5649 21.1236 15.6491 21.9016 16.6417 22.516L16.6546 22.524L16.6678 22.5315C16.9218 22.6748 17.2086 22.75 17.5 22.75C17.7914 22.75 18.0782 22.6748 18.3322 22.5315L18.3437 22.525L18.355 22.5181C19.3529 21.9074 20.4376 21.1268 21.2781 20.1459C22.1249 19.1576 22.75 17.9337 22.75 16.4629C22.75 13.5931 20.3402 11.25 17.5 11.25ZM17.4911 14.5C16.3914 14.5 15.5 15.3954 15.5 16.5C15.5 17.6046 16.3914 18.5 17.4911 18.5H17.5089C18.6086 18.5 19.5 17.6046 19.5 16.5C19.5 15.3954 18.6086 14.5 17.5089 14.5H17.4911Z',
  d8: 'M22 16.5C22 20 17.5 22 17.5 22C17.5 22 13 20 13 16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5Z',
  d9: 'M11 14.5C9.067 14.5 7.5 12.933 7.5 11C7.5 9.067 9.067 7.5 11 7.5C12.7533 7.5 14.2056 8.78927 14.4604 10.4715',
  d10: 'M19.9662 10.2147C19.5684 5.61188 15.706 2 11 2C6.02944 2 2 6.02944 2 11C2 18 11 22 11 22C11 22 11.6605 21.7065 12.6235 21.1393',
  d11: 'M16.4254 22.2158C16.6503 22.3441 16.8389 22.4421 16.9732 22.5088L17.502 22.75L18.0307 22.5088C18.165 22.4421 18.3536 22.3441 18.5785 22.2158C19.0266 21.9601 19.6274 21.579 20.2321 21.0782C21.4162 20.0975 22.752 18.5409 22.752 16.4679C22.752 13.5861 20.4014 11.25 17.502 11.25C14.6025 11.25 12.252 13.5861 12.252 16.4679C12.252 18.5409 13.5877 20.0975 14.7718 21.0782C15.3765 21.579 15.9773 21.9601 16.4254 22.2158ZM17.496 14.5C16.3947 14.5 15.502 15.3954 15.502 16.5C15.502 17.6046 16.3947 18.5 17.496 18.5H17.5079C18.6092 18.5 19.502 17.6046 19.502 16.5C19.502 15.3954 18.6092 14.5 17.5079 14.5H17.496Z',
  d12: 'M10.2759 22.4156C10.0186 22.2874 9.65423 22.0977 9.2184 21.8483C8.34843 21.3505 7.18507 20.6101 6.01791 19.6407C3.70881 17.7227 1.24805 14.7912 1.24805 10.968C1.24805 5.60091 5.61327 1.25 10.998 1.25C16.2499 1.25 20.5319 5.38871 20.7401 10.5724C19.778 10.0479 18.6742 9.75 17.502 9.75C16.5916 9.75 15.7224 9.92969 14.9289 10.2556C14.5801 8.4022 12.9528 7 10.998 7C8.78891 7 6.99805 8.79086 6.99805 11C6.99805 13.1809 8.74345 14.9542 10.9136 14.9991C10.8078 15.4717 10.752 15.9632 10.752 16.4679C10.752 18.7653 11.9831 20.4973 13.1464 21.6329C13.0186 21.7091 12.8955 21.7809 12.7777 21.8483C12.3419 22.0977 11.9775 22.2874 11.7202 22.4156L10.998 22.75L10.2759 22.4156Z',
} as const;

export const IconMapPinpoint01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="map-pinpoint-01-stroke-rounded IconMapPinpoint01StrokeRounded"
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
        strokeLinecap="round" 
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

export const IconMapPinpoint01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="map-pinpoint-01-duotone-rounded IconMapPinpoint01DuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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

export const IconMapPinpoint01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="map-pinpoint-01-twotone-rounded IconMapPinpoint01TwotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMapPinpoint01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="map-pinpoint-01-solid-rounded IconMapPinpoint01SolidRounded"
    >
      <path 
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

export const IconMapPinpoint01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="map-pinpoint-01-bulk-rounded IconMapPinpoint01BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconMapPinpoint01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="map-pinpoint-01-stroke-sharp IconMapPinpoint01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
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

export const IconMapPinpoint01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="map-pinpoint-01-solid-sharp IconMapPinpoint01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMapPinpoint01: TheIconSelfPack = {
  name: 'MapPinpoint01',
  StrokeRounded: IconMapPinpoint01StrokeRounded,
  DuotoneRounded: IconMapPinpoint01DuotoneRounded,
  TwotoneRounded: IconMapPinpoint01TwotoneRounded,
  SolidRounded: IconMapPinpoint01SolidRounded,
  BulkRounded: IconMapPinpoint01BulkRounded,
  StrokeSharp: IconMapPinpoint01StrokeSharp,
  SolidSharp: IconMapPinpoint01SolidSharp,
};