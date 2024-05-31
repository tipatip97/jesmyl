import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.75 2.75L7 5L7 7M19.25 2.75L17 5L17 7M12 2.75L12 6M4.75 3.5C5.16421 3.5 5.5 3.16421 5.5 2.75C5.5 2.33579 5.16421 2 4.75 2C4.33579 2 4 2.33579 4 2.75C4 3.16421 4.33579 3.5 4.75 3.5ZM19.25 3.5C18.8358 3.5 18.5 3.16421 18.5 2.75C18.5 2.33579 18.8358 2 19.25 2C19.6642 2 20 2.33579 20 2.75C20 3.16421 19.6642 3.5 19.25 3.5ZM12 3.5C12.4142 3.5 12.75 3.16421 12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75C11.25 3.16421 11.5858 3.5 12 3.5Z',
  d2: 'M10.4375 18.1667L10.4375 12.8333M12 12.8333V11.5M12 19.5V18.1667M10.4375 15.5H13.5625M13.5625 15.5C14.0803 15.5 14.5 15.9477 14.5 16.5V17.1667C14.5 17.719 14.0803 18.1667 13.5625 18.1667H9.5M13.5625 15.5C14.0803 15.5 14.5 15.0523 14.5 14.5V13.8333C14.5 13.281 14.0803 12.8333 13.5625 12.8333H9.5',
  d3: 'M12 9C18 9 22 15.5 22 15.5C22 15.5 18 22 12 22C6 22 2 15.5 2 15.5C2 15.5 6 9 12 9Z',
  d4: 'M3.25 2.75C3.25 1.92157 3.92157 1.25 4.75 1.25C5.57843 1.25 6.25 1.92157 6.25 2.75C6.25 2.88437 6.23233 3.01461 6.19919 3.13853L7.53033 4.46967C7.67098 4.61032 7.75 4.80109 7.75 5L7.75 7C7.75 7.41421 7.41421 7.75 7 7.75C6.58578 7.75 6.25 7.41421 6.25 7L6.25 5.31066L5.13853 4.19919C5.01461 4.23233 4.88437 4.25 4.75 4.25C3.92157 4.25 3.25 3.57843 3.25 2.75ZM10.5 2.75C10.5 1.92157 11.1716 1.25 12 1.25C12.8284 1.25 13.5 1.92157 13.5 2.75C13.5 3.30521 13.1983 3.78997 12.75 4.04933L12.75 6C12.75 6.41421 12.4142 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6L11.25 4.04933C10.8016 3.78997 10.5 3.30521 10.5 2.75ZM17.75 2.75C17.75 1.92157 18.4216 1.25 19.25 1.25C20.0784 1.25 20.75 1.92157 20.75 2.75C20.75 3.57843 20.0784 4.25 19.25 4.25C19.1156 4.25 18.9854 4.23233 18.8615 4.19919L17.75 5.31066L17.75 7C17.75 7.41421 17.4142 7.75 17 7.75C16.5858 7.75 16.25 7.41421 16.25 7L16.25 5C16.25 4.80109 16.329 4.61032 16.4697 4.46967L17.8008 3.13853C17.7677 3.01461 17.75 2.88437 17.75 2.75Z',
  d5: 'M22.6384 15.8936C22.4362 16.2222 22.1198 16.6556 21.8757 16.9729C21.3884 17.6065 20.6731 18.452 19.7603 19.2996C17.95 20.9807 15.2743 22.75 12 22.75C8.72565 22.75 6.05003 20.9807 4.23966 19.2996C3.32686 18.452 2.61163 17.6065 2.12428 16.9729C1.88016 16.6556 1.51757 16.1471 1.36126 15.8931C1.21291 15.652 1.21291 15.348 1.36126 15.1069C1.58306 14.7465 1.88016 14.3444 2.12428 14.0271C2.61163 13.3935 3.32686 12.548 4.23966 11.7004C6.05003 10.0193 8.72565 8.25 12 8.25C15.2743 8.25 17.95 10.0193 19.7603 11.7004C20.6731 12.548 21.3884 13.3935 21.8757 14.0271C22.0528 14.2574 22.2646 14.5649 22.4473 14.8303C22.5164 14.9307 22.5814 15.0251 22.6387 15.1069C22.7871 15.348 22.7868 15.6525 22.6384 15.8936ZM12.75 11.5C12.75 11.0858 12.4142 10.75 12 10.75C11.5858 10.75 11.25 11.0858 11.25 11.5V12.0833H9.5C9.08579 12.0833 8.75 12.4191 8.75 12.8333C8.75 13.2475 9.08579 13.5833 9.5 13.5833H9.6875V17.4167H9.5C9.08579 17.4167 8.75 17.7525 8.75 18.1667C8.75 18.5809 9.08579 18.9167 9.5 18.9167H11.25V19.5C11.25 19.9142 11.5858 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5V18.9167H13.5625C14.5393 18.9167 15.25 18.0868 15.25 17.1667V16.5C15.25 16.1376 15.1398 15.7892 14.9465 15.5C15.1398 15.2108 15.25 14.8624 15.25 14.5V13.8333C15.25 12.9132 14.5393 12.0833 13.5625 12.0833H12.75V11.5ZM11.1875 14.75V13.5833H13.5625C13.6212 13.5833 13.75 13.6489 13.75 13.8333V14.5C13.75 14.6844 13.6212 14.75 13.5625 14.75H11.1875ZM11.1875 16.25H13.5625C13.6212 16.25 13.75 16.3156 13.75 16.5V17.1667C13.75 17.3511 13.6212 17.4167 13.5625 17.4167H11.1875V16.25Z',
  d6: 'M21.8757 16.9729C22.1198 16.6556 22.4362 16.2222 22.6384 15.8936C22.7868 15.6525 22.7871 15.348 22.6387 15.1069C22.4297 14.8086 22.1198 14.3444 21.8757 14.0271C21.3884 13.3935 20.6731 12.548 19.7603 11.7004C17.95 10.0193 15.2743 8.25 12 8.25C8.72565 8.25 6.05003 10.0193 4.23966 11.7004C3.32686 12.548 2.61163 13.3935 2.12428 14.0271C1.88016 14.3444 1.58306 14.7465 1.36126 15.1069C1.21291 15.348 1.21291 15.652 1.36126 15.8931C1.51757 16.1471 1.88016 16.6556 2.12428 16.9729C2.61163 17.6065 3.32686 18.452 4.23966 19.2996C6.05003 20.9807 8.72565 22.75 12 22.75C15.2743 22.75 17.95 20.9807 19.7603 19.2996C20.6731 18.452 21.3884 17.6065 21.8757 16.9729Z',
  d7: 'M12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V12.0833H13.5625C14.5393 12.0833 15.25 12.9132 15.25 13.8333V14.5C15.25 14.8624 15.1398 15.2108 14.9465 15.5C15.1398 15.7892 15.25 16.1376 15.25 16.5V17.1667C15.25 18.0868 14.5393 18.9167 13.5625 18.9167H12.75V19.5C12.75 19.9142 12.4142 20.25 12 20.25C11.5858 20.25 11.25 19.9142 11.25 19.5V18.9167H9.5C9.08579 18.9167 8.75 18.5809 8.75 18.1667C8.75 17.7525 9.08579 17.4167 9.5 17.4167H9.6875L9.6875 13.5833H9.5C9.08579 13.5833 8.75 13.2475 8.75 12.8333C8.75 12.4191 9.08579 12.0833 9.5 12.0833H11.25V11.5C11.25 11.0858 11.5858 10.75 12 10.75ZM11.1875 13.5833V14.75H13.5625C13.6212 14.75 13.75 14.6844 13.75 14.5V13.8333C13.75 13.6489 13.6212 13.5833 13.5625 13.5833H11.1875ZM13.5625 16.25H11.1875L11.1875 17.4167H13.5625C13.6212 17.4167 13.75 17.3511 13.75 17.1667V16.5C13.75 16.3156 13.6212 16.25 13.5625 16.25Z',
  d8: 'M3.25 2.75C3.25 1.92157 3.92157 1.25 4.75 1.25C5.57843 1.25 6.25 1.92157 6.25 2.75C6.25 2.88437 6.23233 3.01461 6.19919 3.13853L7.75 4.68934L7.75 7.75H6.25L6.25 5.31066L5.13853 4.19919C5.01461 4.23233 4.88437 4.25 4.75 4.25C3.92157 4.25 3.25 3.57843 3.25 2.75ZM10.5 2.75C10.5 1.92157 11.1716 1.25 12 1.25C12.8284 1.25 13.5 1.92157 13.5 2.75C13.5 3.30521 13.1983 3.78997 12.75 4.04933L12.75 6.75H11.25L11.25 4.04933C10.8016 3.78997 10.5 3.30521 10.5 2.75ZM17.75 2.75C17.75 1.92157 18.4216 1.25 19.25 1.25C20.0784 1.25 20.75 1.92157 20.75 2.75C20.75 3.57843 20.0784 4.25 19.25 4.25C19.1156 4.25 18.9854 4.23233 18.8615 4.19919L17.75 5.31066L17.75 7.75L16.25 7.75L16.25 4.68934L17.8008 3.13853C17.7677 3.01461 17.75 2.88437 17.75 2.75Z',
  d9: 'M22.5888 15.7443C22.3499 16.1083 21.9415 16.7304 21.7571 16.9729C21.2757 17.6065 20.569 18.452 19.6672 19.2996C17.8785 20.9807 15.235 22.75 12 22.75C8.76496 22.75 6.12147 20.9807 4.33283 19.2996C3.43099 18.452 2.72435 17.6065 2.24285 16.9729C2.05853 16.7304 1.65008 16.1082 1.41116 15.7443C1.33745 15.6321 1.27988 15.5444 1.25 15.5C1.27988 15.4556 1.33745 15.3679 1.41116 15.2557C1.65008 14.8918 2.05853 14.2696 2.24285 14.0271C2.72435 13.3935 3.43099 12.548 4.33283 11.7004C6.12147 10.0193 8.76496 8.25 12 8.25C15.235 8.25 17.8785 10.0193 19.6672 11.7004C20.569 12.548 21.2757 13.3935 21.7571 14.0271C21.9415 14.2696 22.3499 14.8917 22.5888 15.2557C22.6625 15.3679 22.7201 15.4556 22.75 15.5C22.7201 15.5444 22.6625 15.6321 22.5888 15.7443ZM12.75 12.0833V10.75H11.25V12.0833H8.75V13.5833H9.6875V17.4167H8.75V18.9167H11.25V20.25H12.75V18.9167H13.5625C14.5393 18.9167 15.25 18.0868 15.25 17.1667V16.5C15.25 16.1376 15.1398 15.7892 14.9465 15.5C15.1398 15.2108 15.25 14.8624 15.25 14.5V13.8333C15.25 12.9132 14.5393 12.0833 13.5625 12.0833H12.75ZM11.1875 14.75V13.5833H13.5625C13.6212 13.5833 13.75 13.6489 13.75 13.8333V14.5C13.75 14.6844 13.6212 14.75 13.5625 14.75H11.1875ZM11.1875 16.25H13.5625C13.6212 16.25 13.75 16.3156 13.75 16.5V17.1667C13.75 17.3511 13.6212 17.4167 13.5625 17.4167H11.1875V16.25Z',
} as const;

export const IconBitcoinEyeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-eye-stroke-rounded IconBitcoinEyeStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinEyeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-eye-duotone-rounded IconBitcoinEyeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinEyeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-eye-twotone-rounded IconBitcoinEyeTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinEyeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-eye-solid-rounded IconBitcoinEyeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBitcoinEyeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-eye-bulk-rounded IconBitcoinEyeBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconBitcoinEyeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-eye-stroke-sharp IconBitcoinEyeStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconBitcoinEyeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-eye-solid-sharp IconBitcoinEyeSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinEye: TheIconSelfPack = {
  name: 'BitcoinEye',
  StrokeRounded: IconBitcoinEyeStrokeRounded,
  DuotoneRounded: IconBitcoinEyeDuotoneRounded,
  TwotoneRounded: IconBitcoinEyeTwotoneRounded,
  SolidRounded: IconBitcoinEyeSolidRounded,
  BulkRounded: IconBitcoinEyeBulkRounded,
  StrokeSharp: IconBitcoinEyeStrokeSharp,
  SolidSharp: IconBitcoinEyeSolidSharp,
};