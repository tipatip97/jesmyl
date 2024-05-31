import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22V6C12 4.11438 12 3.17157 11.4142 2.58579C10.8284 2 9.88562 2 8 2H6C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6V18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H12Z',
  d2: 'M12 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8H12',
  d3: 'M18.5 16H15.5M18.5 12L15.5 12',
  d4: 'M8.5 14H5.5M8.5 10H5.5M8.5 6H5.5',
  d5: 'M5.97858 1.25H8.02142C8.87097 1.24995 9.60296 1.24991 10.1891 1.33028C10.8173 1.41641 11.4195 1.61064 11.9079 2.10871C12.3964 2.60679 12.5868 3.22086 12.6713 3.86148C12.7501 4.45924 12.75 5.20569 12.75 6.07203L12.75 22.75L5.9786 22.75C5.12904 22.75 4.39705 22.7501 3.81087 22.6697C3.18267 22.5836 2.5805 22.3894 2.09207 21.8913C1.60365 21.3932 1.41318 20.7791 1.32872 20.1385C1.24991 19.5408 1.24995 18.7943 1.25 17.928L1.25 6.13637C1.25 6.11485 1.25 6.0934 1.25 6.07203C1.24995 5.20569 1.24991 4.45924 1.32872 3.86148C1.41318 3.22086 1.60365 2.60679 2.09207 2.10871C2.5805 1.61064 3.18267 1.41641 3.81087 1.33028C4.39704 1.24991 5.12903 1.24995 5.97858 1.25ZM4.06626 3.26739C3.65059 3.32438 3.52031 3.41639 3.44736 3.49079C3.37441 3.56518 3.28418 3.69804 3.2283 4.12192C3.16871 4.57391 3.16667 5.18736 3.16667 6.13637V17.8636C3.16667 18.8126 3.16871 19.4261 3.2283 19.8781C3.28418 20.302 3.37441 20.4348 3.44736 20.5092C3.52031 20.5836 3.65059 20.6756 4.06626 20.7326C4.5095 20.7934 5.11105 20.7955 6.04167 20.7955H10.8333V6.13637C10.8333 5.18736 10.8313 4.57391 10.7717 4.12192C10.7158 3.69804 10.6256 3.56518 10.5526 3.49079C10.4797 3.41639 10.3494 3.32438 9.93374 3.26739C9.49051 3.20662 8.88895 3.20455 7.95833 3.20455H6.04167C5.11105 3.20455 4.5095 3.20662 4.06626 3.26739Z',
  d6: 'M21.9445 8.05546C21.4891 7.59999 20.9223 7.41432 20.2945 7.32991C19.6997 7.24995 18.9505 7.24997 18.0521 7.25H18.052H18.052L11.25 7.25V22.75L18.052 22.75H18.052C18.9505 22.75 19.6997 22.7501 20.2945 22.6701C20.9223 22.5857 21.4891 22.4 21.9445 21.9445C22.4 21.4891 22.5857 20.9223 22.6701 20.2945C22.7501 19.6997 22.75 18.9505 22.75 18.052V18.052V11.948V11.948C22.75 11.0495 22.7501 10.3003 22.6701 9.70552C22.5857 9.07773 22.4 8.51093 21.9445 8.05546ZM15.5 11.25C15.0858 11.25 14.75 11.5858 14.75 12C14.75 12.4142 15.0858 12.75 15.5 12.75H18.5C18.9142 12.75 19.25 12.4142 19.25 12C19.25 11.5858 18.9142 11.25 18.5 11.25H15.5ZM15.5 15.25C15.0858 15.25 14.75 15.5858 14.75 16C14.75 16.4142 15.0858 16.75 15.5 16.75H18.5C18.9142 16.75 19.25 16.4142 19.25 16C19.25 15.5858 18.9142 15.25 18.5 15.25H15.5Z',
  d7: 'M4.5 6C4.5 5.44772 4.94772 5 5.5 5H8.5C9.05228 5 9.5 5.44772 9.5 6C9.5 6.55228 9.05228 7 8.5 7H5.5C4.94772 7 4.5 6.55228 4.5 6ZM4.5 10C4.5 9.44772 4.94772 9 5.5 9H8.5C9.05228 9 9.5 9.44772 9.5 10C9.5 10.5523 9.05228 11 8.5 11H5.5C4.94772 11 4.5 10.5523 4.5 10ZM4.5 14C4.5 13.4477 4.94772 13 5.5 13H8.5C9.05228 13 9.5 13.4477 9.5 14C9.5 14.5523 9.05228 15 8.5 15H5.5C4.94772 15 4.5 14.5523 4.5 14Z',
  d8: 'M20.2945 7.32991C20.9223 7.41432 21.4891 7.59999 21.9445 8.05546C22.4 8.51093 22.5857 9.07773 22.6701 9.70552C22.7501 10.3003 22.75 11.0495 22.75 11.948V11.948V18.052V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H18.052L11.25 22.75V7.25L18.052 7.25H18.052C18.9505 7.24997 19.6997 7.24995 20.2945 7.32991Z',
  d9: 'M14.75 12C14.75 11.5858 15.0858 11.25 15.5 11.25L18.5 11.25C18.9142 11.25 19.25 11.5858 19.25 12C19.25 12.4142 18.9142 12.75 18.5 12.75L15.5 12.75C15.0858 12.75 14.75 12.4142 14.75 12ZM14.75 16C14.75 15.5858 15.0858 15.25 15.5 15.25H18.5C18.9142 15.25 19.25 15.5858 19.25 16C19.25 16.4142 18.9142 16.75 18.5 16.75H15.5C15.0858 16.75 14.75 16.4142 14.75 16Z',
  d10: 'M12 2H2V22H12V2Z',
  d11: 'M12 8H22V22H12V8Z',
  d12: 'M19 16H15M19 12L15 12',
  d13: 'M9 14H5M9 10H5M9 6H5',
  d14: 'M1.25 2.22727C1.25 1.68754 1.67906 1.25 2.20833 1.25H11.7917C12.3209 1.25 12.75 1.68754 12.75 2.22727V21.7727C12.75 22.3125 12.3209 22.75 11.7917 22.75H2.20833C1.67906 22.75 1.25 22.3125 1.25 21.7727V2.22727ZM3.16667 3.20455V20.7955H10.8333V3.20455H3.16667Z',
  d15: 'M22 7.25C22.4142 7.25 22.75 7.58579 22.75 8V22C22.75 22.4142 22.4142 22.75 22 22.75H12C11.5858 22.75 11.25 22.4142 11.25 22V8C11.25 7.58579 11.5858 7.25 12 7.25H22ZM19 11.25H15V12.75H19V11.25ZM19 15.25H15V16.75H19V15.25Z',
  d16: 'M5 5H9V7H5V5ZM5 9H9V11H5V9ZM5 13H9V15H5V13Z',
} as const;

export const IconCorporateStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corporate-stroke-rounded IconCorporateStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCorporateDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corporate-duotone-rounded IconCorporateDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCorporateTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corporate-twotone-rounded IconCorporateTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCorporateSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corporate-solid-rounded IconCorporateSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCorporateBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corporate-bulk-rounded IconCorporateBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCorporateStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corporate-stroke-sharp IconCorporateStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCorporateSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corporate-solid-sharp IconCorporateSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCorporate: TheIconSelfPack = {
  name: 'Corporate',
  StrokeRounded: IconCorporateStrokeRounded,
  DuotoneRounded: IconCorporateDuotoneRounded,
  TwotoneRounded: IconCorporateTwotoneRounded,
  SolidRounded: IconCorporateSolidRounded,
  BulkRounded: IconCorporateBulkRounded,
  StrokeSharp: IconCorporateStrokeSharp,
  SolidSharp: IconCorporateSolidSharp,
};