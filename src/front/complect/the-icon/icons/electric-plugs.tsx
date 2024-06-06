import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 2L9 5',
  d2: 'M15 2L15 5',
  d3: 'M12 18L12 22',
  d4: 'M12.6939 8.5L10.6029 10.6749C10.3788 10.9079 10.5394 11.2433 10.9048 11.3053L13.0952 11.6773C13.4848 11.7434 13.6334 12.1147 13.361 12.3413L10.7666 14.5',
  d5: 'M14.3066 5L9.69342 5C7.5551 5 6.48594 5 5.89527 5.69774C5.3046 6.39548 5.46717 7.46639 5.79232 9.60823L6.31604 13.0581C6.83606 16.4836 8.28588 18 12 18C15.7141 18 17.1639 16.4836 17.684 13.0581L18.2077 9.60823C18.5328 7.46639 18.6954 6.39548 18.1047 5.69774C17.5141 5 16.4449 5 14.3066 5Z',
  d6: 'M9 1C9.55228 1 10 1.44772 10 2V4.25H9.63635C9.02839 4.24998 8.48218 4.24997 8 4.27001V2C8 1.44772 8.44772 1 9 1ZM11 18.7111L11 22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V18.7111C12.6805 18.7374 12.3472 18.75 12 18.75C11.6528 18.75 11.3195 18.7374 11 18.7111ZM16 4.27001V2C16 1.44772 15.5523 1 15 1C14.4477 1 14 1.44772 14 2V4.25H14.3636C14.9716 4.24998 15.5178 4.24997 16 4.27001Z',
  d7: 'M9.63635 4.25H14.3636H14.3637C15.3842 4.24997 16.2307 4.24995 16.8924 4.34481C17.5887 4.44462 18.2137 4.66574 18.6772 5.21315C19.139 5.75865 19.258 6.41312 19.2496 7.12043C19.2415 7.79559 19.113 8.6417 18.9576 9.66551L18.4255 13.1707C18.1553 14.9502 17.6238 16.3913 16.5431 17.3696C15.4552 18.3545 13.9457 18.75 12 18.75C10.0543 18.75 8.54481 18.3545 7.45688 17.3696C6.37623 16.3913 5.84467 14.9502 5.57454 13.1707L5.04242 9.66552C4.88697 8.6417 4.75849 7.79559 4.75041 7.12043C4.74195 6.41312 4.86105 5.75865 5.32284 5.21315C5.78625 4.66574 6.41127 4.44462 7.10755 4.34481C7.76932 4.24994 8.61583 4.24997 9.63632 4.25H9.63635ZM13.2346 9.01981C13.5217 8.72122 13.5124 8.24643 13.2138 7.95935C12.9152 7.67227 12.4404 7.6816 12.1533 7.98019L10.0623 10.1551C9.73672 10.4937 9.66153 10.9712 9.85642 11.3782C10.0373 11.756 10.4003 11.9804 10.7793 12.0447L12.0313 12.2573C12.1155 12.2716 12.1442 12.3781 12.0785 12.4328L10.287 13.9235C9.96855 14.1884 9.9252 14.6613 10.1901 14.9797C10.4551 15.2981 10.928 15.3415 11.2464 15.0765L13.8408 12.9178C14.2118 12.6091 14.3525 12.1196 14.1727 11.6704C14.0064 11.2549 13.6232 11.0062 13.2208 10.9378L11.8337 10.7023C11.7546 10.6889 11.7227 10.5923 11.7784 10.5344L13.2346 9.01981Z',
  d8: 'M14.3636 4.25H9.63635C8.61585 4.24997 7.76932 4.24994 7.10755 4.34481C6.41127 4.44462 5.78625 4.66574 5.32284 5.21315C4.86105 5.75865 4.74195 6.41312 4.75041 7.12043C4.75849 7.79559 4.88697 8.6417 5.04242 9.66552L5.57454 13.1707C5.84467 14.9502 6.37623 16.3913 7.45688 17.3696C8.54481 18.3545 10.0543 18.75 12 18.75C13.9457 18.75 15.4552 18.3545 16.5431 17.3696C17.6238 16.3913 18.1553 14.9502 18.4255 13.1707L18.9576 9.66551C19.113 8.6417 19.2415 7.79559 19.2496 7.12043C19.258 6.41312 19.139 5.75865 18.6772 5.21315C18.2137 4.66574 17.5887 4.44462 16.8924 4.34481C16.2307 4.24994 15.3841 4.24997 14.3636 4.25Z',
  d9: 'M13.2138 7.95935C13.5124 8.24643 13.5217 8.72122 13.2346 9.01981L11.7784 10.5344C11.7227 10.5923 11.7546 10.6889 11.8337 10.7023L13.2208 10.9378C13.6232 11.0062 14.0064 11.2549 14.1727 11.6704C14.3525 12.1196 14.2118 12.6091 13.8408 12.9178L11.2464 15.0765C10.928 15.3415 10.4551 15.2981 10.1901 14.9797C9.9252 14.6613 9.96855 14.1884 10.287 13.9235L12.0785 12.4328C12.1442 12.3781 12.1155 12.2716 12.0313 12.2573L10.7793 12.0447C10.4003 11.9804 10.0373 11.756 9.85642 11.3782C9.66153 10.9712 9.73672 10.4937 10.0623 10.1551L12.1533 7.98019C12.4404 7.6816 12.9152 7.67227 13.2138 7.95935Z',
  d10: 'M11.5 15L13.5 11.5H10.5L12.5 8',
  d11: 'M18.4987 5H5.49805V11.4997C5.49805 15.0897 8.40834 18 11.9984 18C15.5884 18 18.4987 15.0897 18.4987 11.4997V5Z',
  d12: 'M10.002 4.25H14.002V2H16.002V4.25H18.4987C18.9129 4.25 19.2487 4.58579 19.2487 5V11.4997C19.2487 15.1634 16.5312 18.1924 13.002 18.6811V22H11.002V18.6821C7.46919 18.1965 4.74805 15.1659 4.74805 11.4997V5C4.74805 4.58579 5.08383 4.25 5.49805 4.25H8.00195L8.00195 2H10.002V4.25ZM13.1486 8.37214L11.7898 10.75H14.7898L12.1486 15.3721L10.8463 14.6279L12.2051 12.25H9.20508L11.8463 7.62793L13.1486 8.37214Z',
};

export const IconElectricPlugsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-plugs-stroke-rounded IconElectricPlugsStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconElectricPlugsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-plugs-duotone-rounded IconElectricPlugsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconElectricPlugsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-plugs-twotone-rounded IconElectricPlugsTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconElectricPlugsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-plugs-solid-rounded IconElectricPlugsSolidRounded"
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

export const IconElectricPlugsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-plugs-bulk-rounded IconElectricPlugsBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricPlugsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-plugs-stroke-sharp IconElectricPlugsStrokeSharp"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricPlugsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-plugs-solid-sharp IconElectricPlugsSolidSharp"
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

export const iconPackOfElectricPlugs: TheIconSelfPack = {
  name: 'ElectricPlugs',
  StrokeRounded: IconElectricPlugsStrokeRounded,
  DuotoneRounded: IconElectricPlugsDuotoneRounded,
  TwotoneRounded: IconElectricPlugsTwotoneRounded,
  SolidRounded: IconElectricPlugsSolidRounded,
  BulkRounded: IconElectricPlugsBulkRounded,
  StrokeSharp: IconElectricPlugsStrokeSharp,
  SolidSharp: IconElectricPlugsSolidSharp,
};