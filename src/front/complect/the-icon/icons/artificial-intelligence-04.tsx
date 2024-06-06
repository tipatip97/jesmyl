import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z',
  d2: 'M7.5 15L9.34189 9.47434C9.43631 9.19107 9.7014 9 10 9C10.2986 9 10.5637 9.19107 10.6581 9.47434L12.5 15M8.5 13H11.5',
  d3: 'M15.5 9V15',
  d4: 'M8 2V4M16 2V4M12 2V4M8 20V22M12 20V22M16 20V22M22 16H20M4 8H2M4 16H2M4 12H2M22 8H20M22 12H20',
  d5: 'M11.9436 3.25C13.7813 3.24998 15.3498 3.24997 16.489 3.40314C17.6614 3.56076 18.6104 3.89288 19.3588 4.64124C20.1071 5.38961 20.4392 6.33856 20.5969 7.51098C20.75 8.65018 20.75 10.1058 20.75 11.9435V11.9436C20.75 13.7814 20.75 15.3498 20.5969 16.489C20.4392 17.6614 20.1071 18.6104 19.3588 19.3588C18.6104 20.1071 17.6614 20.4392 16.489 20.5969C15.3498 20.75 13.7814 20.75 11.9436 20.75H11.9435C10.1058 20.75 8.65018 20.75 7.51098 20.5969C6.33856 20.4392 5.38961 20.1071 4.64124 19.3588C3.89288 18.6104 3.56076 17.6614 3.40314 16.489C3.24997 15.3498 3.24998 13.7813 3.25 11.9436V11.9436V11.9436C3.24998 10.1058 3.24997 8.65019 3.40314 7.51098C3.56076 6.33856 3.89288 5.38961 4.64124 4.64124C5.38961 3.89288 6.33856 3.56076 7.51098 3.40314C8.65019 3.24997 10.1058 3.24998 11.9436 3.25H11.9436H11.9436ZM10.0002 9.87171L9.20744 12.25H10.793L10.0002 9.87171ZM11.293 13.75L11.7887 15.2372C11.9197 15.6301 12.3444 15.8425 12.7374 15.7115C13.1303 15.5805 13.3427 15.1558 13.2117 14.7628L11.3698 9.23717C11.1733 8.64764 10.6216 8.25 10.0002 8.25C9.37879 8.25 8.82709 8.64764 8.63058 9.23717L6.78869 14.7628C6.65771 15.1558 6.87008 15.5805 7.26303 15.7115C7.65599 15.8425 8.08073 15.6301 8.21172 15.2372L8.70744 13.75H11.293ZM16.25 9C16.25 8.58579 15.9142 8.25 15.5 8.25C15.0858 8.25 14.75 8.58579 14.75 9V15C14.75 15.4142 15.0858 15.75 15.5 15.75C15.9142 15.75 16.25 15.4142 16.25 15V9Z',
  d6: 'M1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H4C4.41421 7.25 4.75 7.58579 4.75 8C4.75 8.41421 4.41421 8.75 4 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8ZM19.25 8C19.25 7.58579 19.5858 7.25 20 7.25H22C22.4142 7.25 22.75 7.58579 22.75 8C22.75 8.41421 22.4142 8.75 22 8.75H20C19.5858 8.75 19.25 8.41421 19.25 8ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H4C4.41421 15.25 4.75 15.5858 4.75 16C4.75 16.4142 4.41421 16.75 4 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16ZM19.25 16C19.25 15.5858 19.5858 15.25 20 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16C22.75 16.4142 22.4142 16.75 22 16.75H20C19.5858 16.75 19.25 16.4142 19.25 16Z',
  d7: 'M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V4C8.75 4.41421 8.41421 4.75 8 4.75C7.58579 4.75 7.25 4.41421 7.25 4V2C7.25 1.58579 7.58579 1.25 8 1.25ZM12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V4C16.75 4.41421 16.4142 4.75 16 4.75C15.5858 4.75 15.25 4.41421 15.25 4V2C15.25 1.58579 15.5858 1.25 16 1.25ZM8 19.25C8.41421 19.25 8.75 19.5858 8.75 20V22C8.75 22.4142 8.41421 22.75 8 22.75C7.58579 22.75 7.25 22.4142 7.25 22V20C7.25 19.5858 7.58579 19.25 8 19.25ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25ZM16 19.25C16.4142 19.25 16.75 19.5858 16.75 20V22C16.75 22.4142 16.4142 22.75 16 22.75C15.5858 22.75 15.25 22.4142 15.25 22V20C15.25 19.5858 15.5858 19.25 16 19.25Z',
  d8: 'M11.9436 3.25C13.7813 3.24998 15.3498 3.24997 16.489 3.40314C17.6614 3.56076 18.6104 3.89288 19.3588 4.64124C20.1071 5.38961 20.4392 6.33856 20.5969 7.51098C20.75 8.65018 20.75 10.1058 20.75 11.9435V11.9436C20.75 13.7814 20.75 15.3498 20.5969 16.489C20.4392 17.6614 20.1071 18.6104 19.3588 19.3588C18.6104 20.1071 17.6614 20.4392 16.489 20.5969C15.3498 20.75 13.7814 20.75 11.9436 20.75H11.9435C10.1058 20.75 8.65018 20.75 7.51098 20.5969C6.33856 20.4392 5.38961 20.1071 4.64124 19.3588C3.89288 18.6104 3.56076 17.6614 3.40314 16.489C3.24997 15.3498 3.24998 13.7813 3.25 11.9436V11.9436C3.24998 10.1058 3.24997 8.65019 3.40314 7.51098C3.56076 6.33856 3.89288 5.38961 4.64124 4.64124C5.38961 3.89288 6.33856 3.56076 7.51098 3.40314C8.65019 3.24997 10.1058 3.24998 11.9436 3.25H11.9436Z',
  d9: 'M10.0002 9.87171L9.20744 12.25H10.793L10.0002 9.87171ZM11.293 13.75L11.7887 15.2372C11.9197 15.6301 12.3444 15.8425 12.7374 15.7115C13.1303 15.5805 13.3427 15.1558 13.2117 14.7628L11.3698 9.23717C11.1733 8.64764 10.6216 8.25 10.0002 8.25C9.37879 8.25 8.82709 8.64764 8.63058 9.23717L6.78869 14.7628C6.65771 15.1558 6.87008 15.5805 7.26303 15.7115C7.65599 15.8425 8.08073 15.6301 8.21172 15.2372L8.70744 13.75H11.293Z',
  d10: 'M15.5 8.25C15.9142 8.25 16.25 8.58579 16.25 9V15C16.25 15.4142 15.9142 15.75 15.5 15.75C15.0858 15.75 14.75 15.4142 14.75 15V9C14.75 8.58579 15.0858 8.25 15.5 8.25Z',
  d11: 'M3.4418 7.25H2C1.58579 7.25 1.25 7.58579 1.25 8C1.25 8.41421 1.58579 8.75 2 8.75H3.29576C3.31845 8.30066 3.35239 7.88845 3.40314 7.51098C3.415 7.42272 3.42786 7.33573 3.4418 7.25Z',
  d12: 'M3.25032 11.25H2C1.58579 11.25 1.25 11.5858 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75H3.25051C3.25 12.4876 3.25 12.2186 3.25 11.9436C3.25 11.7061 3.25 11.4749 3.25032 11.25Z',
  d13: 'M3.29719 15.25H2C1.58579 15.25 1.25 15.5858 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75H3.4418C3.42786 16.6643 3.415 16.5773 3.40314 16.489C3.35344 16.1194 3.31987 15.7046 3.29719 15.25Z',
  d14: 'M20.5582 16.75H22C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.5858 22.4142 15.25 22 15.25H20.7028C20.6801 15.7046 20.6466 16.1194 20.5969 16.489C20.585 16.5773 20.5721 16.6643 20.5582 16.75Z',
  d15: 'M20.7495 12.75H22C22.4142 12.75 22.75 12.4142 22.75 12C22.75 11.5858 22.4142 11.25 22 11.25H20.7497C20.75 11.4749 20.75 11.706 20.75 11.9435C20.75 12.2186 20.75 12.4876 20.7495 12.75Z',
  d16: 'M20.7042 8.75H22C22.4142 8.75 22.75 8.41421 22.75 8C22.75 7.58579 22.4142 7.25 22 7.25H20.5582C20.5721 7.33573 20.585 7.42272 20.5969 7.51098C20.6476 7.88845 20.6815 8.30066 20.7042 8.75Z',
  d17: 'M8.75 2C8.75 1.58579 8.41421 1.25 8 1.25C7.58579 1.25 7.25 1.58579 7.25 2V3.4418C7.33573 3.42786 7.42272 3.415 7.51098 3.40314C7.88845 3.35239 8.30066 3.31845 8.75 3.29576V2Z',
  d18: 'M12.75 3.25051C12.4876 3.25 12.2186 3.25 11.9436 3.25C11.7061 3.25 11.4749 3.25 11.25 3.25032V2C11.25 1.58579 11.5858 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.25051Z',
  d19: 'M16.75 3.4418C16.6643 3.42786 16.5773 3.415 16.489 3.40314C16.1194 3.35344 15.7046 3.31987 15.25 3.29719V2C15.25 1.58579 15.5858 1.25 16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V3.4418Z',
  d20: 'M15.25 20.7028C15.7046 20.6801 16.1194 20.6466 16.489 20.5969C16.5773 20.585 16.6643 20.5721 16.75 20.5582V22C16.75 22.4142 16.4142 22.75 16 22.75C15.5858 22.75 15.25 22.4142 15.25 22V20.7028Z',
  d21: 'M11.25 20.7497C11.4749 20.75 11.706 20.75 11.9435 20.75C12.2186 20.75 12.4876 20.75 12.75 20.7495V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20.7497Z',
  d22: 'M7.25 20.5582C7.33573 20.5721 7.42272 20.585 7.51098 20.5969C7.88845 20.6476 8.30066 20.6815 8.75 20.7042V22C8.75 22.4142 8.41421 22.75 8 22.75C7.58579 22.75 7.25 22.4142 7.25 22V20.5582Z',
  d23: 'M19.5 4.5H4.5V19.5H19.5V4.5Z',
  d24: 'M8 2V4.5M16 2V4.5M12 2V4.5M8 19.5V22M12 19.5V22M16 19.5V22M22 16H19.5M4.5 8H2M4.5 16H2M4.5 12H2M22 8H19.5M22 12H19.5',
  d25: 'M7.94824 15.7713L10.4841 8.53653L13.0371 15.7713M8.92617 12.9813H12.0526M15.9884 8.23145V15.6545',
  d26: 'M20.25 3.75H3.75V20.25H20.25V3.75ZM11.54 8.25H9.4589L7.05078 15.4743L8.47381 15.9487L9.2067 13.75H11.7922L12.5251 15.9487L13.9481 15.4743L11.54 8.25ZM10.4995 9.87171L11.2922 12.25H9.7067L10.4995 9.87171ZM16.7495 15.75V8.25H15.2495V15.75H16.7495Z',
  d27: 'M7.25 4.5V2H8.75V4.5H7.25ZM11.25 4.5V2H12.75V4.5H11.25ZM15.25 4.5V2H16.75V4.5H15.25ZM2 7.25H4.5V8.75H2V7.25ZM19.5 7.25H22V8.75H19.5V7.25ZM2 11.25H4.5V12.75H2V11.25ZM19.5 11.25H22V12.75H19.5V11.25ZM2 15.25H4.5V16.75H2V15.25ZM19.5 15.25H22V16.75H19.5V15.25ZM7.25 22V19.5H8.75V22H7.25ZM11.25 22V19.5H12.75V22H11.25ZM15.25 22V19.5H16.75V22H15.25Z',
};

export const IconArtificialIntelligence04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-04-stroke-rounded IconArtificialIntelligence04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-04-duotone-rounded IconArtificialIntelligence04DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-04-twotone-rounded IconArtificialIntelligence04TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-04-solid-rounded IconArtificialIntelligence04SolidRounded"
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

export const IconArtificialIntelligence04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-04-bulk-rounded IconArtificialIntelligence04BulkRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-04-stroke-sharp IconArtificialIntelligence04StrokeSharp"
    >
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-04-solid-sharp IconArtificialIntelligence04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArtificialIntelligence04: TheIconSelfPack = {
  name: 'ArtificialIntelligence04',
  StrokeRounded: IconArtificialIntelligence04StrokeRounded,
  DuotoneRounded: IconArtificialIntelligence04DuotoneRounded,
  TwotoneRounded: IconArtificialIntelligence04TwotoneRounded,
  SolidRounded: IconArtificialIntelligence04SolidRounded,
  BulkRounded: IconArtificialIntelligence04BulkRounded,
  StrokeSharp: IconArtificialIntelligence04StrokeSharp,
  SolidSharp: IconArtificialIntelligence04SolidSharp,
};