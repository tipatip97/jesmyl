import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2C13.6348 2 14.4522 2 15.1648 2.28954C15.5483 2.44535 15.9052 2.66072 16.2227 2.92783C16.8128 3.42423 17.1996 4.15077 17.9732 5.60384L18.7735 7.10708C20.174 9.73759 20.8743 11.0528 20.2973 12.0264C19.7203 13 18.2406 13 15.2811 13H8.71885C5.75941 13 4.27968 13 3.7027 12.0264C3.12572 11.0528 3.82597 9.73758 5.22647 7.10708L6.02681 5.60384C6.80043 4.15076 7.18725 3.42423 7.77728 2.92783C8.09479 2.66072 8.45174 2.44535 8.83521 2.28954C9.54784 2 10.3652 2 12 2Z',
  d2: 'M12 13V19',
  d3: 'M9.45585 20.2991C9.72509 19.8443 9.85972 19.6168 10.0568 19.4477C10.2568 19.276 10.5028 19.1476 10.7739 19.0733C11.0411 19 11.3421 19 11.944 19H12.0562C12.6582 19 12.9592 19 13.2263 19.0733C13.4976 19.1476 13.7436 19.2761 13.9437 19.4479C14.1407 19.617 14.2753 19.8445 14.5444 20.2994C14.8656 20.8422 15.0262 21.1136 14.9965 21.3346C14.9666 21.5571 14.8206 21.7567 14.5984 21.8787C14.3777 22 14.0186 22 13.3003 22H10.6999C9.98144 22 9.6222 22 9.40146 21.8787C9.17933 21.7566 9.03337 21.557 9.00349 21.3346C8.97379 21.1135 9.13448 20.8421 9.45585 20.2991Z',
  d4: 'M12 2C13.6348 2 14.4522 2 15.1648 2.28954C15.5483 2.44535 15.9052 2.66072 16.2227 2.92783C16.8128 3.42423 17.1996 4.15076 17.9732 5.60384L18.7735 7.10708C20.174 9.73759 20.8743 11.0528 20.2973 12.0264C19.7203 13 18.2406 13 15.2811 13H8.71885C5.75941 13 4.27968 13 3.7027 12.0264C3.12572 11.0528 3.82597 9.73758 5.22647 7.10708L6.02681 5.60384C6.80043 4.15076 7.18725 3.42423 7.77728 2.92783C8.09479 2.66072 8.45175 2.44535 8.83521 2.28954C9.54784 2 10.3652 2 12 2Z',
  d5: 'M11.839 1.25003L12.0001 1.25006L12.1611 1.25003C13.6402 1.2496 14.5969 1.24932 15.4472 1.59477C15.9036 1.78021 16.3282 2.03643 16.7056 2.35398C17.4082 2.94503 17.8595 3.79335 18.5596 5.10923L18.6353 5.25144L19.4658 6.81144L19.4659 6.81154C20.1405 8.07849 20.6868 9.10465 20.9834 9.93617C21.2875 10.7884 21.4025 11.6329 20.9426 12.4089C20.4813 13.1872 19.6851 13.4865 18.7939 13.6201C17.9263 13.7501 16.7707 13.7501 15.3464 13.7501H8.6537C7.2294 13.7501 6.07388 13.7501 5.20626 13.6201C4.31501 13.4865 3.51882 13.1872 3.05757 12.4089C2.59768 11.6329 2.71268 10.7884 3.0167 9.93617C3.31332 9.10464 3.8597 8.07846 4.53428 6.81148L4.53428 6.81147L5.36486 5.25143L5.44055 5.10921C6.14064 3.79334 6.59198 2.94502 7.29452 2.35398C7.67197 2.03643 8.09656 1.78021 8.55297 1.59477C9.40319 1.24932 10.3599 1.2496 11.839 1.25003Z',
  d6: 'M13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13V17.915C11 18.0793 11 18.1615 10.9565 18.2161C10.913 18.2708 10.8221 18.2917 10.6404 18.3336C10.2485 18.4239 9.87305 18.617 9.56831 18.8785C9.23115 19.1679 9.01705 19.5675 8.79403 19.9447C8.52978 20.3911 8.18682 20.8885 8.26015 21.4344C8.32615 21.9257 8.64044 22.3162 9.0402 22.5359C9.29575 22.6764 9.57318 22.7155 9.80928 22.7328C10.0441 22.75 10.3368 22.75 10.6731 22.75H13.3271C13.6633 22.75 13.9559 22.75 14.1907 22.7328C14.4267 22.7155 14.7041 22.6764 14.9596 22.536C15.3594 22.3163 15.6738 21.9258 15.7398 21.4344C15.8131 20.8887 15.4704 20.3914 15.2063 19.9451C14.9833 19.5678 14.7693 19.1682 14.4322 18.8788C14.127 18.6168 13.7516 18.4243 13.3592 18.3334C13.1777 18.2914 13.0869 18.2703 13.0434 18.2157C13 18.161 13 18.0789 13 17.9146V13Z',
  d7: 'M11.9961 12.998V18.998',
  d8: 'M9.01465 21.998H14.9772L13.9834 18.998H10.0084L9.01465 21.998Z',
  d9: 'M3.50587 12.8445L8.01976 2.00195H15.9595L20.4933 12.8444C20.5209 12.9103 20.4728 12.9832 20.4017 12.9832H3.59753C3.52653 12.9832 3.47844 12.9104 3.50587 12.8445Z',
  d10: 'M21.1941 12.7157C21.2888 12.947 21.262 13.2103 21.1228 13.4179C20.9835 13.6254 20.75 13.7499 20.5 13.7499H3.5C3.25014 13.7499 3.01668 13.6255 2.87738 13.4181C2.73807 13.2106 2.71122 12.9474 2.80576 12.7162L7.49242 1.25H16.4994L21.1941 12.7157Z',
  d11: 'M10.9961 19V13H12.9961V19H10.9961Z',
  d12: 'M9.45508 18.25H14.5362L16.0362 22.75H7.95508L9.45508 18.25Z',
} as const;

export const IconLampStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-stroke-rounded IconLampStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLampDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-duotone-rounded IconLampDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLampTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-twotone-rounded IconLampTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconLampSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-solid-rounded IconLampSolidRounded"
    >
      <path 
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

export const IconLampBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-bulk-rounded IconLampBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLampStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-stroke-sharp IconLampStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLampSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-solid-sharp IconLampSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfLamp: TheIconSelfPack = {
  name: 'Lamp',
  StrokeRounded: IconLampStrokeRounded,
  DuotoneRounded: IconLampDuotoneRounded,
  TwotoneRounded: IconLampTwotoneRounded,
  SolidRounded: IconLampSolidRounded,
  BulkRounded: IconLampBulkRounded,
  StrokeSharp: IconLampStrokeSharp,
  SolidSharp: IconLampSolidSharp,
};