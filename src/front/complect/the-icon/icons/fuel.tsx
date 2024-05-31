import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 6V5.5C5 4.55719 5 4.08579 5.29289 3.79289C5.58579 3.5 6.05719 3.5 7 3.5C7.94281 3.5 8.41421 3.5 8.70711 3.79289C9 4.08579 9 4.55719 9 5.5V6',
  d2: 'M15 5L18 5',
  d3: 'M16 2H14.6667C12.7932 2 12 2.93374 12 4.66667C12 5.53313 11.6034 6 10.6667 6H7C5.11438 6 4.17157 6 3.58579 6.58579C3 7.17157 3 8.11438 3 10V15C3 18.2998 3 19.9497 4.02513 20.9749C5.05025 22 6.70017 22 10 22H14C17.2998 22 18.9497 22 19.9749 20.9749C21 19.9497 21 18.2998 21 15V7C21 4.64298 21 3.46447 20.2678 2.73223C19.5355 2 18.357 2 16 2Z',
  d4: 'M9 14.5873C9 13.1229 10.2638 11.6757 11.1509 10.8403C11.6326 10.3866 12.3674 10.3866 12.8491 10.8403C13.7362 11.6757 15 13.1229 15 14.5873C15 16.0231 13.864 17.5 12 17.5C10.136 17.5 9 16.0231 9 14.5873Z',
  d5: 'M14.6667 2H16C18.357 2 19.5355 2 20.2678 2.73223C21 3.46447 21 4.64298 21 7V15C21 18.2998 21 19.9497 19.9749 20.9749C18.9497 22 17.2998 22 14 22H10C6.70017 22 5.05025 22 4.02513 20.9749C3 19.9497 3 18.2998 3 15V10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H10.6667C11.6034 6 12 5.53313 12 4.66667C12 2.93374 12.7932 2 14.6667 2ZM11.1509 10.8403C10.2638 11.6757 9 13.1229 9 14.5873C9 16.0231 10.136 17.5 12 17.5C13.864 17.5 15 16.0231 15 14.5873C15 13.1229 13.7362 11.6757 12.8491 10.8403C12.3674 10.3866 11.6326 10.3866 11.1509 10.8403Z',
  d6: 'M20.7981 2.20191C20.2694 1.67321 19.6071 1.45093 18.8431 1.34822C18.1123 1.24996 17.1866 1.24998 16.0537 1.25H16.0537H14.6667C13.6152 1.25 12.7157 1.5127 12.09 2.16382C11.4698 2.80922 11.25 3.70056 11.25 4.66667C11.25 5.00025 11.1724 5.10891 11.1438 5.13859C11.1208 5.16254 11.0203 5.25 10.6667 5.25L6.948 5.25C6.04952 5.24997 5.3003 5.24995 4.70552 5.32991C4.07773 5.41432 3.51093 5.59999 3.05546 6.05546C2.59999 6.51093 2.41432 7.07773 2.32991 7.70552C2.24995 8.30029 2.24997 9.04949 2.25 9.94794V9.94797V15.0557V15.0558C2.24998 16.6583 2.24997 17.9373 2.38483 18.9404C2.52415 19.9767 2.81966 20.8301 3.4948 21.5052C4.16994 22.1803 5.02335 22.4759 6.05962 22.6152C7.0627 22.75 8.34167 22.75 9.94426 22.75H14.0557C15.6583 22.75 16.9373 22.75 17.9404 22.6152C18.9767 22.4759 19.8301 22.1803 20.5052 21.5052C21.1803 20.8301 21.4759 19.9767 21.6152 18.9404C21.75 17.9373 21.75 16.6583 21.75 15.0557V6.94632V6.94629V6.94627C21.75 5.81347 21.75 4.88773 21.6518 4.15689C21.5491 3.39294 21.3268 2.7306 20.7981 2.20191ZM14 5C14 4.44772 14.4477 4 15 4L18 4C18.5523 4 19 4.44772 19 5C19 5.55229 18.5523 6 18 6L15 6C14.4477 6 14 5.55228 14 5ZM13.1919 10.4763C12.5176 9.84124 11.4824 9.84124 10.8081 10.4763C10.349 10.9087 9.78115 11.5093 9.32498 12.2032C8.87269 12.8912 8.5 13.7164 8.5 14.5873C8.5 16.2709 9.83229 18 12 18C14.1677 18 15.5 16.2709 15.5 14.5873C15.5 13.7164 15.1273 12.8912 14.675 12.2032C14.2189 11.5093 13.651 10.9087 13.1919 10.4763Z',
  d7: 'M7.00001 2.75001C7.45021 2.75001 7.86331 2.74841 8.19721 2.79331C8.55269 2.8411 8.92842 2.95355 9.23744 3.26257C9.54647 3.57159 9.65891 3.94732 9.70671 4.3028C9.75011 4.62561 9.75006 5.02245 9.75001 5.45526C9.74999 5.63684 9.75001 5.81843 9.75001 6.00001H8.25001V5.50001C8.25001 5.0074 8.24841 4.71339 8.22008 4.50267C8.19721 4.33252 8.1686 4.30296 7.99734 4.27993C7.78662 4.2516 7.49261 4.25001 7.00001 4.25001C6.5074 4.25001 6.21339 4.2516 6.00267 4.27993C5.82439 4.3039 5.80337 4.32832 5.77993 4.50267C5.7516 4.71339 5.75001 5.0074 5.75001 5.50001V6.00001H4.25001C4.25001 5.81842 4.25002 5.63684 4.25 5.45526C4.24995 5.02244 4.24991 4.62561 4.29331 4.3028C4.3411 3.94732 4.45355 3.57159 4.76257 3.26257C5.07159 2.95355 5.44732 2.8411 5.8028 2.79331C6.1367 2.74841 6.5498 2.75001 7.00001 2.75001Z',
  d8: 'M20.7981 2.20191C20.2694 1.67321 19.6071 1.45093 18.8431 1.34822C18.1123 1.24996 17.1865 1.24998 16.0537 1.25H14.6667C13.6152 1.25 12.7157 1.5127 12.09 2.16382C11.4698 2.80922 11.25 3.70056 11.25 4.66667C11.25 5.00025 11.1724 5.10891 11.1438 5.13859C11.1208 5.16254 11.0203 5.25 10.6667 5.25L6.948 5.25C6.04952 5.24997 5.3003 5.24995 4.70552 5.32991C4.07773 5.41432 3.51093 5.59999 3.05546 6.05546C2.59999 6.51093 2.41432 7.07773 2.32991 7.70552C2.24995 8.3003 2.24997 9.04951 2.25 9.94797V15.0557C2.24998 16.6583 2.24997 17.9373 2.38483 18.9404C2.52415 19.9767 2.81966 20.8301 3.4948 21.5052C4.16994 22.1803 5.02335 22.4759 6.05962 22.6152C7.0627 22.75 8.34167 22.75 9.94426 22.75H14.0557C15.6583 22.75 16.9373 22.75 17.9404 22.6152C18.9767 22.4759 19.8301 22.1803 20.5052 21.5052C21.1803 20.8301 21.4759 19.9767 21.6152 18.9404C21.75 17.9373 21.75 16.6583 21.75 15.0557V6.94632C21.75 5.81349 21.75 4.88775 21.6518 4.15689C21.5491 3.39294 21.3268 2.7306 20.7981 2.20191Z',
  d9: 'M13.999 5C13.999 4.44772 14.4467 4 14.999 4L17.999 4C18.5513 4 18.999 4.44772 18.999 5C18.999 5.55229 18.5513 6 17.999 6L14.999 6C14.4467 6 13.999 5.55228 13.999 5Z',
  d10: 'M10.8091 10.4763C11.4834 9.84124 12.5186 9.84124 13.1929 10.4763C13.652 10.9087 14.2198 11.5093 14.676 12.2032C15.1283 12.8912 15.501 13.7164 15.501 14.5873C15.501 16.2709 14.1687 18 12.001 18C9.83327 18 8.50098 16.2709 8.50098 14.5873C8.50098 13.7164 8.87367 12.8912 9.32596 12.2032C9.78212 11.5093 10.3499 10.9087 10.8091 10.4763Z',
  d11: 'M5.74931 5.25899C5.36031 5.26864 5.01182 5.2886 4.70455 5.32991C4.54869 5.35087 4.39659 5.37806 4.24902 5.41408C4.24902 4.99728 4.25031 4.61535 4.29233 4.3028C4.34012 3.94732 4.45257 3.57159 4.76159 3.26257C5.07062 2.95355 5.44634 2.8411 5.80182 2.79331C6.12464 2.74991 6.52147 2.74995 6.95429 2.75C6.96916 2.75001 6.98407 2.75001 6.99903 2.75001C7.01399 2.75001 7.02891 2.75001 7.04378 2.75C7.4766 2.74995 7.87343 2.74991 8.19624 2.79331C8.55172 2.8411 8.92744 2.95355 9.23647 3.26257C9.54549 3.57159 9.65794 3.94732 9.70573 4.3028C9.74217 4.57385 9.74798 4.89709 9.74888 5.25H8.24872C8.24756 4.9031 8.24228 4.67503 8.21911 4.50267C8.19623 4.33252 8.16762 4.30296 7.99637 4.27993C7.78564 4.2516 7.49164 4.25001 6.99903 4.25001C6.50642 4.25001 6.21242 4.2516 6.00169 4.27993C5.82341 4.3039 5.80239 4.32832 5.77895 4.50267C5.75558 4.67651 5.75041 4.90704 5.74931 5.25899Z',
  d12: 'M5 6V3.5H9V6',
  d13: 'M14.5 5L18.5 5',
  d14: 'M21 2H12V6H3V22H21V2Z',
  d15: 'M12 10.5C11.1129 11.3354 9 13.1229 9 14.5873C9 16.0231 10.136 17.5 12 17.5C13.864 17.5 15 16.0231 15 14.5873C15 13.1229 12.8871 11.3354 12 10.5Z',
  d16: 'M4.25 3.5C4.25 3.08579 4.58579 2.75 5 2.75H9C9.41421 2.75 9.75 3.08579 9.75 3.5V6H8.25V4.25H5.75V6H4.25V3.5Z',
  d17: 'M11.25 2C11.25 1.58579 11.5858 1.25 12 1.25H21C21.4142 1.25 21.75 1.58579 21.75 2V22C21.75 22.4142 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22V6C2.25 5.58579 2.58579 5.25 3 5.25H11.25V2ZM18.5 6L14.5 6V4L18.5 4V6ZM14.3984 11.8806C13.855 11.2762 12.4394 10.0018 12 9.60986C11.5606 10.0018 10.145 11.2762 9.60161 11.8806C9.26264 12.2577 8.93362 12.6758 8.68637 13.1124C8.4421 13.5437 8.25 14.0411 8.25 14.5641C8.25 16.3138 9.68042 18.1099 12 18.1099C14.3196 18.1099 15.75 16.3138 15.75 14.5641C15.75 14.0411 15.5579 13.5437 15.3136 13.1124C15.0664 12.6758 14.7374 12.2577 14.3984 11.8806Z',
} as const;

export const IconFuelStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fuel-stroke-rounded IconFuelStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFuelDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fuel-duotone-rounded IconFuelDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFuelTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fuel-twotone-rounded IconFuelTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFuelSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fuel-solid-rounded IconFuelSolidRounded"
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

export const IconFuelBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fuel-bulk-rounded IconFuelBulkRounded"
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFuelStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fuel-stroke-sharp IconFuelStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFuelSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fuel-solid-sharp IconFuelSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFuel: TheIconSelfPack = {
  name: 'Fuel',
  StrokeRounded: IconFuelStrokeRounded,
  DuotoneRounded: IconFuelDuotoneRounded,
  TwotoneRounded: IconFuelTwotoneRounded,
  SolidRounded: IconFuelSolidRounded,
  BulkRounded: IconFuelBulkRounded,
  StrokeSharp: IconFuelStrokeSharp,
  SolidSharp: IconFuelSolidSharp,
};