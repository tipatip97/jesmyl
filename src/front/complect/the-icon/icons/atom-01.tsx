import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 9H21.99M2.00995 9H2M12.005 22H11.995',
  d2: 'M7.55556 21C4.47364 19.4999 2.37683 16.5285 2 13.1273M16.4444 21C19.5264 19.4999 21.6232 16.5285 22 13.1273M5.55555 4.25658C9.23956 1.24781 14.5382 1.24781 18.2222 4.25658',
  d3: 'M7.56166 21.1114C4.50021 19.6024 2.41732 16.6137 2.04298 13.1925C1.64564 8.06443 4.23206 5.10734 5.57494 4.26981C9.23449 1.2434 14.498 1.2434 18.1575 4.26981C21.9105 7.29268 22.223 11.4778 21.9102 13.1925C21.5359 16.6137 19.453 19.6024 16.3916 21.1114C12.7715 22.7208 8.99662 21.782 7.56166 21.1114ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z',
  d4: 'M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z',
  d5: 'M17.4627 5.18948C14.2222 2.5429 9.56081 2.5429 6.32028 5.18948C5.90225 5.53089 5.2866 5.46877 4.94519 5.05074C4.60378 4.63271 4.66589 4.01706 5.08392 3.67565C9.04395 0.441449 14.739 0.44145 18.6991 3.67565C19.1171 4.01706 19.1792 4.63271 18.8378 5.05074C18.4964 5.46877 17.8807 5.53089 17.4627 5.18948ZM1.25009 9.06818C1.25009 8.52845 1.68763 8.09091 2.22736 8.09091H2.23708C2.77682 8.09091 3.21436 8.52845 3.21436 9.06818C3.21436 9.60791 2.77682 10.0455 2.23708 10.0455H2.22736C1.68763 10.0455 1.25009 9.60791 1.25009 9.06818ZM20.7858 9.06818C20.7858 8.52845 21.2234 8.09091 21.7631 8.09091H21.7728C22.3125 8.09091 22.7501 8.52845 22.7501 9.06818C22.7501 9.60791 22.3125 10.0455 21.7728 10.0455H21.7631C21.2234 10.0455 20.7858 9.60791 20.7858 9.06818ZM2.11974 12.1303C2.65619 12.0709 3.13925 12.4576 3.19869 12.994C3.52996 15.984 5.37338 18.5972 8.08437 19.9167C8.56966 20.153 8.77158 20.7379 8.53536 21.2232C8.29914 21.7085 7.71423 21.9104 7.22894 21.6742C3.91618 20.0617 1.6613 16.8671 1.25603 13.2093C1.19659 12.6728 1.58329 12.1898 2.11974 12.1303ZM21.8804 12.1303C22.4169 12.1898 22.8036 12.6728 22.7441 13.2093C22.3389 16.8671 20.084 20.0617 16.7712 21.6742C16.2859 21.9104 15.701 21.7085 15.4648 21.2232C15.2286 20.7379 15.4305 20.153 15.9158 19.9167C18.6268 18.5972 20.4702 15.984 20.8015 12.994C20.8609 12.4576 21.344 12.0709 21.8804 12.1303ZM11.018 21.7727C11.018 21.233 11.4555 20.7955 11.9952 20.7955H12.0049C12.5447 20.7955 12.9822 21.233 12.9822 21.7727C12.9822 22.3125 12.5447 22.75 12.0049 22.75H11.9952C11.4555 22.75 11.018 22.3125 11.018 21.7727Z',
  d6: 'M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z',
  d7: 'M1 9C1 8.44772 1.44772 8 2 8H2.00995C2.56224 8 3.00995 8.44772 3.00995 9C3.00995 9.55228 2.56224 10 2.00995 10H2C1.44772 10 1 9.55228 1 9ZM20.99 9C20.99 8.44772 21.4378 8 21.99 8H22C22.5523 8 23 8.44772 23 9C23 9.55228 22.5523 10 22 10H21.99C21.4378 10 20.99 9.55228 20.99 9ZM10.995 22C10.995 21.4477 11.4427 21 11.995 21H12.005C12.5573 21 13.005 21.4477 13.005 22C13.005 22.5523 12.5573 23 12.005 23H11.995C11.4427 23 10.995 22.5523 10.995 22Z',
  d8: 'M17.5894 5.03109C14.2736 2.32297 9.50377 2.32297 6.18789 5.03109L4.92277 3.48206C8.9749 0.172646 14.8024 0.172646 18.8546 3.48206L17.5894 5.03109ZM2.9937 13.0171C3.33267 16.0767 5.21896 18.7506 7.993 20.1009L7.11767 21.8991C3.72787 20.2491 1.42055 16.9803 1.00586 13.2374L2.9937 13.0171ZM22.9937 13.2374C22.579 16.9803 20.2717 20.2491 16.8819 21.8991L16.0066 20.1009C18.7806 18.7506 20.6669 16.0767 21.0059 13.0171L22.9937 13.2374Z',
} as const;

export const IconAtom01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-01-stroke-rounded IconAtom01StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconAtom01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-01-duotone-rounded IconAtom01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12.002" 
        cy="12" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconAtom01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-01-twotone-rounded IconAtom01TwotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconAtom01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-01-solid-rounded IconAtom01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAtom01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-01-bulk-rounded IconAtom01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAtom01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-01-stroke-sharp IconAtom01StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAtom01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atom-01-solid-sharp IconAtom01SolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAtom01: TheIconSelfPack = {
  name: 'Atom01',
  StrokeRounded: IconAtom01StrokeRounded,
  DuotoneRounded: IconAtom01DuotoneRounded,
  TwotoneRounded: IconAtom01TwotoneRounded,
  SolidRounded: IconAtom01SolidRounded,
  BulkRounded: IconAtom01BulkRounded,
  StrokeSharp: IconAtom01StrokeSharp,
  SolidSharp: IconAtom01SolidSharp,
};