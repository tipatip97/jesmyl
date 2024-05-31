import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 21V9H10C9.05719 9 8.58579 9 8.29289 9.29289C8 9.58579 8 10.0572 8 11V21',
  d2: 'M16 21V11C16 10.0572 16 9.58579 15.7071 9.29289C15.4142 9 14.9428 9 14 9H12V21',
  d3: 'M20 5V9M22 7H18',
  d4: 'M6 7H2',
  d5: 'M10 9V5.9999C10 5.06808 10 4.60218 9.84776 4.23463C9.64477 3.74458 9.25542 3.35523 8.76537 3.15224C8.39782 3 7.93188 3 7 3',
  d6: 'M14 9V5.9999C14 5.06808 14 4.60218 14.1522 4.23463C14.3552 3.74458 14.7446 3.35523 15.2346 3.15224C15.6022 3 16.0681 3 17 3',
  d7: 'M8 11V21H16V11C16 10.0572 16 9.58579 15.7071 9.29289C15.4142 9 14.9428 9 14 9H10C9.05719 9 8.58579 9 8.29289 9.29289C8 9.58579 8 10.0572 8 11Z',
  d8: 'M20 4.25C20.4142 4.25 20.75 4.58579 20.75 5V6.25H22C22.4142 6.25 22.75 6.58579 22.75 7C22.75 7.41421 22.4142 7.75 22 7.75H20.75V9C20.75 9.41421 20.4142 9.75 20 9.75C19.5858 9.75 19.25 9.41421 19.25 9V7.75H18C17.5858 7.75 17.25 7.41421 17.25 7C17.25 6.58579 17.5858 6.25 18 6.25H19.25V5C19.25 4.58579 19.5858 4.25 20 4.25Z',
  d9: 'M1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H6C6.41421 6.25 6.75 6.58579 6.75 7C6.75 7.41421 6.41421 7.75 6 7.75H2C1.58579 7.75 1.25 7.41421 1.25 7Z',
  d10: 'M8.04326 3.76729C7.79579 3.75041 7.4762 3.75 7 3.75C6.58579 3.75 6.25 3.41421 6.25 3C6.25 2.58579 6.58579 2.25 7 2.25L7.02525 2.25C7.46971 2.24999 7.84075 2.24999 8.14536 2.27077C8.46246 2.29241 8.76199 2.33905 9.05238 2.45933C9.72621 2.73844 10.2616 3.27379 10.5407 3.94762C10.6609 4.23801 10.7076 4.53752 10.7292 4.85461C10.75 5.1592 10.75 5.53022 10.75 5.97465L10.75 9C10.75 9.41421 10.4142 9.75 10 9.75C9.58579 9.75 9.25 9.41421 9.25 9V5.9999C9.25 5.52373 9.24959 5.20417 9.23271 4.95672C9.21629 4.71602 9.18681 4.5988 9.15485 4.52165C9.02798 4.21536 8.78464 3.97202 8.47835 3.84515C8.4012 3.81319 8.28399 3.78372 8.04326 3.76729Z',
  d11: 'M16.9747 2.25L17 2.25C17.4142 2.25 17.75 2.58579 17.75 3C17.75 3.41421 17.4142 3.75 17 3.75C16.5238 3.75 16.2042 3.75041 15.9567 3.76729C15.716 3.78372 15.5988 3.81319 15.5216 3.84515C15.2154 3.97202 14.972 4.21536 14.8452 4.52165C14.8132 4.5988 14.7837 4.71602 14.7673 4.95672C14.7504 5.20417 14.75 5.52373 14.75 5.9999V9C14.75 9.41421 14.4142 9.75 14 9.75C13.5858 9.75 13.25 9.41421 13.25 9L13.25 5.97465C13.25 5.53022 13.25 5.15921 13.2708 4.85461C13.2924 4.53752 13.3391 4.23801 13.4593 3.94762C13.7384 3.27379 14.2738 2.73844 14.9476 2.45933C15.238 2.33905 15.5375 2.29241 15.8546 2.27077C16.1592 2.24999 16.5303 2.24999 16.9747 2.25Z',
  d12: 'M11.25 8.25H9.95526C9.52244 8.24995 9.12561 8.24991 8.8028 8.29331C8.44732 8.3411 8.07159 8.45355 7.76257 8.76257C7.45355 9.07159 7.3411 9.44732 7.29331 9.8028C7.24991 10.1256 7.24995 10.5224 7.25 10.9553L7.25001 21C7.25001 21.4142 7.58579 21.75 8.00001 21.75H11.25V8.25ZM12.75 21.75H16C16.4142 21.75 16.75 21.4142 16.75 21L16.75 10.9553V10.9553V10.9552C16.7501 10.5224 16.7501 10.1256 16.7067 9.8028C16.6589 9.44732 16.5465 9.07159 16.2374 8.76257C15.9284 8.45355 15.5527 8.3411 15.1972 8.29331C14.8744 8.24991 14.4776 8.24995 14.0448 8.25H12.75V21.75Z',
  d13: 'M11.25 8.25H9.95526C9.52244 8.24995 9.12561 8.24991 8.8028 8.29331C8.44732 8.3411 8.07159 8.45355 7.76257 8.76257C7.45355 9.07159 7.3411 9.44732 7.29331 9.8028C7.24991 10.1256 7.24995 10.5224 7.25 10.9553L7.25001 21C7.25001 21.4142 7.58579 21.75 8.00001 21.75H11.25V8.25Z',
  d14: 'M12.75 21.75H16C16.4142 21.75 16.75 21.4142 16.75 21L16.75 10.9553C16.7501 10.5225 16.7501 10.1256 16.7067 9.8028C16.6589 9.44732 16.5465 9.07159 16.2374 8.76257C15.9284 8.45355 15.5527 8.3411 15.1972 8.29331C14.8744 8.24991 14.4776 8.24995 14.0448 8.25H12.75V21.75Z',
  d15: 'M7 3.75C7.4762 3.75 7.79579 3.75041 8.04326 3.76729C8.28399 3.78372 8.4012 3.81319 8.47835 3.84515C8.78464 3.97202 9.02798 4.21536 9.15485 4.52165C9.18681 4.5988 9.21629 4.71602 9.23271 4.95672C9.24959 5.20417 9.25 5.52373 9.25 5.9999V8.25824C9.46828 8.24995 9.70579 8.24997 9.95526 8.25H10.75L10.75 5.97465C10.75 5.53024 10.75 5.1592 10.7292 4.85461C10.7076 4.53752 10.6609 4.23801 10.5407 3.94762C10.2616 3.27379 9.72621 2.73844 9.05238 2.45933C8.76199 2.33905 8.46246 2.29241 8.14536 2.27077C7.84076 2.24999 7.46973 2.24999 7.02528 2.25H7C6.58579 2.25 6.25 2.58579 6.25 3C6.25 3.41421 6.58579 3.75 7 3.75Z',
  d16: 'M14.75 8.25824C14.5317 8.24995 14.2942 8.24997 14.0448 8.25H13.25V5.97465C13.25 5.53025 13.25 5.15919 13.2708 4.85461C13.2924 4.53752 13.339 4.23801 13.4593 3.94762C13.7384 3.27379 14.2738 2.73844 14.9476 2.45933C15.238 2.33905 15.5375 2.29241 15.8546 2.27077C16.1592 2.24999 16.5303 2.24999 16.9747 2.25H17C17.4142 2.25 17.75 2.58579 17.75 3C17.75 3.41421 17.4142 3.75 17 3.75C16.5238 3.75 16.2042 3.75041 15.9567 3.76729C15.716 3.78372 15.5988 3.81319 15.5216 3.84515C15.2154 3.97202 14.972 4.21536 14.8451 4.52165C14.8132 4.5988 14.7837 4.71602 14.7673 4.95672C14.7504 5.20417 14.75 5.52373 14.75 5.9999V8.25824Z',
  d17: 'M12 9H8L8 21M12 9H16V21M12 9V21',
  d18: 'M10 9V5C10 3.89543 9.10457 3 8 3H7M14 9V5C14 3.89543 14.8954 3 16 3H17',
  d19: 'M20.75 4.25V6.25H22.75V7.75H20.75V9.75H19.25V7.75H17.25V6.25H19.25V4.25H20.75Z',
  d20: 'M1.25 6.25H6.75V7.75H1.25V6.25Z',
  d21: 'M8 3.75H7V2.25H8C9.51878 2.25 10.75 3.48122 10.75 5V9H9.25V5C9.25 4.30964 8.69036 3.75 8 3.75ZM16 3.75C15.3096 3.75 14.75 4.30964 14.75 5V9H13.25V5C13.25 3.48122 14.4812 2.25 16 2.25H17V3.75H16Z',
  d22: 'M11.25 8.25H7.25V21.75H11.25V8.25ZM12.75 21.75H16.75V8.25H12.75V21.75Z',
} as const;

export const IconElectricWireStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-wire-stroke-rounded IconElectricWireStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconElectricWireDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-wire-duotone-rounded IconElectricWireDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconElectricWireTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-wire-twotone-rounded IconElectricWireTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconElectricWireSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-wire-solid-rounded IconElectricWireSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const IconElectricWireBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-wire-bulk-rounded IconElectricWireBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricWireStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-wire-stroke-sharp IconElectricWireStrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricWireSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-wire-solid-sharp IconElectricWireSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfElectricWire: TheIconSelfPack = {
  name: 'ElectricWire',
  StrokeRounded: IconElectricWireStrokeRounded,
  DuotoneRounded: IconElectricWireDuotoneRounded,
  TwotoneRounded: IconElectricWireTwotoneRounded,
  SolidRounded: IconElectricWireSolidRounded,
  BulkRounded: IconElectricWireBulkRounded,
  StrokeSharp: IconElectricWireStrokeSharp,
  SolidSharp: IconElectricWireSolidSharp,
};