import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 2.5V4C15 5.41421 15 6.12132 15.4393 6.56066C15.8787 7 16.5858 7 18 7H19.5',
  d2: 'M4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14.1716C14.5803 2 14.7847 2 14.9685 2.07612C15.1522 2.15224 15.2968 2.29676 15.5858 2.58579L19.4142 6.41421C19.7032 6.70324 19.8478 6.84776 19.9239 7.03153C20 7.2153 20 7.41968 20 7.82843V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16Z',
  d3: 'M8 11H16M8 14H16M8 17H12.1708',
  d4: 'M4 8L4 16C4 18.8284 4 20.2426 4.87868 21.1213C5.75736 22 7.17157 22 10 22H14C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V7.82843C20 7.41968 20 7.2153 19.9239 7.03153C19.9195 7.0209 19.9148 7.0104 19.91 7H18C16.5858 7 15.8787 7 15.4393 6.56066C15 6.12132 15 5.41421 15 4V2.09003C14.9896 2.08516 14.9791 2.08052 14.9685 2.07612C14.7847 2 14.5803 2 14.1716 2H10C7.17157 2 5.75736 2 4.87868 2.87868C4 3.75736 4 5.17157 4 8Z',
  d5: 'M8 11H16M8 14H16M8 17H14.5',
  d6: 'M13.6036 1.39694C13.75 1.54338 13.75 1.77908 13.75 2.25049V4.26941L13.75 4.31951V4.31955C13.75 5.03821 13.7499 5.65174 13.8158 6.14186C13.8862 6.66492 14.0437 7.15823 14.4428 7.55737C14.842 7.95652 15.3353 8.11403 15.8583 8.18435C16.3484 8.25024 16.962 8.25021 17.6806 8.25018H17.6806H17.6807L19.75 8.25018C20.2214 8.25018 20.4571 8.25018 20.6036 8.39662C20.75 8.54307 20.75 8.77877 20.75 9.25018V16.0554C20.75 17.423 20.75 18.5253 20.6335 19.3922C20.5125 20.2923 20.2536 21.0502 19.6517 21.6521C19.0497 22.2541 18.2919 22.513 17.3918 22.634C16.5248 22.7505 15.4225 22.7505 14.0549 22.7505L9.94513 22.7505C8.57754 22.7505 7.47522 22.7505 6.60825 22.634C5.70814 22.513 4.95027 22.2541 4.34835 21.6521C3.74644 21.0502 3.48754 20.2923 3.36653 19.3922C3.24997 18.5253 3.24998 17.423 3.25 16.0554V16.0554V16.0554V16.0554L3.25 7.94561V7.9456V7.94558V7.94557C3.24998 6.578 3.24997 5.4757 3.36653 4.60874C3.48754 3.70863 3.74644 2.95076 4.34835 2.34884C4.95027 1.74692 5.70814 1.48803 6.60825 1.36701C7.47521 1.25045 8.57752 1.25047 9.9451 1.25049H9.94511H9.94513L12.75 1.25049C13.2214 1.25049 13.4571 1.25049 13.6036 1.39694ZM20.6168 6.74501C20.6178 6.74747 20.616 6.75018 20.6133 6.75018L17.7308 6.75018C16.9481 6.75018 16.4365 6.74859 16.0582 6.69772C15.7015 6.64976 15.5775 6.5707 15.5035 6.49671C15.4295 6.42272 15.3504 6.29871 15.3025 5.94199C15.2516 5.56369 15.25 5.05211 15.25 4.26941V1.38737C15.25 1.38454 15.2529 1.38262 15.2555 1.3837C15.5822 1.51902 15.83 1.76828 16.0596 1.99923L16.1161 2.05595L19.9445 5.88437L20.0012 5.94086C20.2322 6.17048 20.4815 6.41831 20.6168 6.74501ZM8 11.2502C7.58579 11.2502 7.25 11.586 7.25 12.0002C7.25 12.4144 7.58579 12.7502 8 12.7502L16 12.7502C16.4142 12.7502 16.75 12.4144 16.75 12.0002C16.75 11.586 16.4142 11.2502 16 11.2502L8 11.2502ZM8 14.2502C7.58579 14.2502 7.25 14.586 7.25 15.0002C7.25 15.4144 7.58579 15.7502 8 15.7502L16 15.7502C16.4142 15.7502 16.75 15.4144 16.75 15.0002C16.75 14.586 16.4142 14.2502 16 14.2502L8 14.2502ZM8 17.2502C7.58579 17.2502 7.25 17.586 7.25 18.0002C7.25 18.4144 7.58579 18.7502 8 18.7502L14.5 18.7502C14.9142 18.7502 15.25 18.4144 15.25 18.0002C15.25 17.586 14.9142 17.2502 14.5 17.2502L8 17.2502Z',
  d7: 'M13.75 2.25C13.75 1.7786 13.75 1.54289 13.6036 1.39645C13.4571 1.25 13.2214 1.25 12.75 1.25H9.94513C8.57754 1.24998 7.47521 1.24996 6.60825 1.36652C5.70814 1.48754 4.95027 1.74643 4.34835 2.34835C3.74644 2.95027 3.48754 3.70814 3.36653 4.60825C3.24997 5.47521 3.24998 6.57752 3.25 7.9451V16.0549C3.24998 17.4225 3.24997 18.5248 3.36653 19.3918C3.48754 20.2919 3.74643 21.0497 4.34835 21.6517C4.95027 22.2536 5.70814 22.5125 6.60825 22.6335C7.47522 22.75 8.57754 22.75 9.94513 22.75H14.0549C15.4225 22.75 16.5248 22.75 17.3918 22.6335C18.2919 22.5125 19.0497 22.2536 19.6517 21.6517C20.2536 21.0497 20.5125 20.2919 20.6335 19.3918C20.75 18.5248 20.75 17.4225 20.75 16.0549V9.25018C20.75 8.77877 20.75 8.54307 20.6036 8.39662C20.4571 8.25018 20.2214 8.25018 19.75 8.25018L17.6807 8.25018C16.962 8.25021 16.3484 8.25024 15.8583 8.18435C15.3353 8.11403 14.842 7.95652 14.4428 7.55737C14.0437 7.15823 13.8862 6.66492 13.8158 6.14186C13.7499 5.65174 13.75 5.03821 13.75 4.31955L13.75 2.25Z',
  d8: 'M20.613 6.75008C20.6159 6.75008 20.6179 6.74712 20.6168 6.74442C20.4746 6.40105 20.203 6.14121 19.9445 5.88379L16.1161 2.05536C15.8587 1.79694 15.5989 1.52535 15.2555 1.38312C15.2529 1.38204 15.25 1.38396 15.25 1.38679V4.26931C15.25 5.05202 15.2516 5.56359 15.3025 5.94189C15.3504 6.29862 15.4295 6.42263 15.5035 6.49662C15.5775 6.57061 15.7015 6.64967 16.0582 6.69763C16.4365 6.74849 16.9481 6.75008 17.7308 6.75008H20.613Z',
  d9: 'M7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM7.25 15C7.25 14.5858 7.58579 14.25 8 14.25H16C16.4142 14.25 16.75 14.5858 16.75 15C16.75 15.4142 16.4142 15.75 16 15.75H8C7.58579 15.75 7.25 15.4142 7.25 15ZM7.25 18C7.25 17.5858 7.58579 17.25 8 17.25H14.5C14.9142 17.25 15.25 17.5858 15.25 18C15.25 18.4142 14.9142 18.75 14.5 18.75H8C7.58579 18.75 7.25 18.4142 7.25 18Z',
  d10: 'M15.022 2.53076V7.03076H19.522',
  d11: 'M8.02197 11.0308H16.022M8.02197 14.0308H16.022M8.02197 17.0308H14.022',
  d12: 'M4.00146 21.9314V2.0124C4.00146 2.0069 4.00594 2.00244 4.01145 2.00244H14.9896L19.9985 7.02073V21.9876C19.9985 21.9931 19.994 21.9976 19.9885 21.9976L4.01142 21.9414C4.00592 21.9413 4.00146 21.9369 4.00146 21.9314Z',
  d13: 'M4 1.25L14.25 1.25L14.25 7.75L20.75 7.75L20.75 22C20.75 22.4142 20.4142 22.75 20 22.75L4 22.75C3.58579 22.75 3.25 22.4142 3.25 22L3.25 2C3.25 1.58579 3.58579 1.25 4 1.25ZM15.75 1.68934L20.3107 6.25L15.75 6.25L15.75 1.68934ZM8 12.75L16 12.75L16 11.25L8 11.25V12.75ZM8 15.75L16 15.75V14.25L8 14.25V15.75ZM8 18.75L14 18.75V17.25H8V18.75Z',
} as const;

export const IconGoogleDocStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-doc-stroke-rounded IconGoogleDocStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconGoogleDocDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-doc-duotone-rounded IconGoogleDocDuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleDocTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-doc-twotone-rounded IconGoogleDocTwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleDocSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-doc-solid-rounded IconGoogleDocSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleDocBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-doc-bulk-rounded IconGoogleDocBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
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

export const IconGoogleDocStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-doc-stroke-sharp IconGoogleDocStrokeSharp"
    >
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleDocSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-doc-solid-sharp IconGoogleDocSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGoogleDoc: TheIconSelfPack = {
  name: 'GoogleDoc',
  StrokeRounded: IconGoogleDocStrokeRounded,
  DuotoneRounded: IconGoogleDocDuotoneRounded,
  TwotoneRounded: IconGoogleDocTwotoneRounded,
  SolidRounded: IconGoogleDocSolidRounded,
  BulkRounded: IconGoogleDocBulkRounded,
  StrokeSharp: IconGoogleDocStrokeSharp,
  SolidSharp: IconGoogleDocSolidSharp,
};