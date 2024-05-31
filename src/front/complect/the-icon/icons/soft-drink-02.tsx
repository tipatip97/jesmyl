import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.63244 18.2626L5.03072 6.09986C4.91063 5.188 5.11589 5 6.12552 5H16.8745C17.8841 5 18.0894 5.188 17.9693 6.09986L16.3676 18.2626C16.1495 19.9182 16.0405 20.746 15.4139 21.2437C14.1165 22.2744 8.827 22.2295 7.58606 21.2437C6.95948 20.746 6.85047 19.9182 6.63244 18.2626Z',
  d2: 'M13.5 19L13.946 2.94128C13.9771 2.41272 14.4148 2 14.9443 2H19.0014',
  d3: 'M6 10C6.18182 9.66667 6.78182 9 8.09091 9C9.72727 9 9.29545 10 10.3864 10C11.4773 10 13.1136 9 14.75 9C16.3864 9 17.5 10 17.5 10',
  d4: 'M10.0089 16H10',
  d5: 'M8.09091 9C6.78182 9 6.18182 9.66667 6 10L7 21L11.5 22L16 20.5L17.5 10C17.5 10 16.3864 9 14.75 9C13.1136 9 11.4773 10 10.3864 10C9.29545 10 9.72727 9 8.09091 9Z',
  d6: 'M6.12547 6C6.07261 6 6.0323 6.04674 6.03921 6.09915L7.62383 18.132C7.73665 18.9887 7.80985 19.5266 7.91921 19.9186C8.01799 20.2727 8.11539 20.3871 8.20803 20.4607C8.31178 20.5431 8.66148 20.6982 9.33067 20.821C9.95092 20.9348 10.7082 20.9973 11.4822 20.9999C12.2564 21.0026 13.0159 20.9452 13.6412 20.8329C14.3123 20.7124 14.6737 20.5546 14.7919 20.4607C14.8845 20.3871 14.9819 20.2727 15.0807 19.9186C15.19 19.5266 15.2633 18.9887 15.3761 18.132L16.9607 6.09915C16.9676 6.04674 16.9273 6 16.8744 6H6.12547ZM5.31544 4.06305C5.57368 4.01139 5.85515 4 6.12547 4H16.8744C17.1447 4 17.4262 4.01139 17.6845 4.06305C17.9448 4.11511 18.275 4.22589 18.5492 4.49755C18.8366 4.78219 18.9468 5.1272 18.9832 5.41995C19.0172 5.69389 18.994 5.97744 18.9607 6.23042L17.3504 18.458C17.2488 19.2302 17.1592 19.911 17.0071 20.4561C16.8402 21.0542 16.5698 21.6026 16.0359 22.0267C15.5054 22.4482 14.7191 22.6713 13.9947 22.8014C13.2246 22.9398 12.3408 23.0029 11.4754 22.9999C10.6097 22.9969 9.7308 22.9278 8.96971 22.7881C8.25755 22.6575 7.4807 22.4372 6.96398 22.0267C6.43005 21.6026 6.15965 21.0542 5.99277 20.4561C5.84072 19.911 5.75112 19.2302 5.6495 18.4581L4.03923 6.23042C4.00591 5.97744 3.98267 5.69389 4.01673 5.41995C4.05312 5.1272 4.16332 4.78219 4.45066 4.49755C4.72489 4.22589 5.05515 4.11511 5.31544 4.06305Z',
  d7: 'M14.9394 3.19445C14.9424 3.08619 15.031 3 15.1393 3H19.0014C19.5537 3 20.0014 2.55228 20.0014 2C20.0014 1.44772 19.5537 1 19.0014 1H14.9443C13.8853 1 13.0099 1.82543 12.9477 2.88256L12.9468 2.89803L12.5004 18.9722C12.4851 19.5243 12.9202 19.9843 13.4722 19.9996C14.0243 20.0149 14.4843 19.5798 14.4996 19.0278L14.9394 3.19445Z',
  d8: 'M6.1196 8.88935C6.62921 8.55616 7.31303 8.25 8.09133 8.25C8.57572 8.25 8.96761 8.32393 9.29675 8.47323C9.63278 8.62566 9.84564 8.8313 9.99231 8.98871C10.0465 9.04689 10.0846 9.0887 10.1127 9.11958L10.1128 9.11975C10.172 9.18476 10.1872 9.20155 10.2184 9.22267C10.2254 9.22736 10.2324 9.23141 10.2479 9.23584C10.266 9.24099 10.3079 9.25 10.3868 9.25C10.556 9.25 10.7843 9.20957 11.0951 9.12191C11.3407 9.05265 11.5994 8.96566 11.8904 8.86778C11.9669 8.84206 12.0456 8.81559 12.1269 8.78849C12.873 8.53979 13.7966 8.25 14.7504 8.25C16.4666 8.25 17.6775 9.17341 17.9371 9.38706L18.2585 9.6515L17.1048 18.4122C17.0016 19.1958 16.914 19.8612 16.7668 20.3889C16.6084 20.9565 16.3597 21.4506 15.8809 21.831C15.4019 22.2115 14.6687 22.4264 13.951 22.5554C13.199 22.6904 12.3308 22.7528 11.4767 22.7499C10.6225 22.747 9.75879 22.6787 9.01531 22.5422C8.30852 22.4125 7.58506 22.2005 7.11996 21.831C6.64119 21.4506 6.39242 20.9565 6.23405 20.3889C6.08685 19.8612 5.99925 19.1958 5.89609 18.4122L4.80859 10.1543L4.99586 9.90837C5.2135 9.62259 5.60948 9.22288 6.1196 8.88935ZM10 15C9.44772 15 9 15.4477 9 16C9 16.5523 9.44772 17 10 17H10.0089C10.5612 17 11.0089 16.5523 11.0089 16C11.0089 15.4477 10.5612 15 10.0089 15H10Z',
  d9: 'M8.09133 8.25C7.31303 8.25 6.62921 8.55616 6.1196 8.88935C5.60948 9.22288 5.2135 9.62259 4.99586 9.90837L4.80859 10.1543L5.89609 18.4122C5.99925 19.1958 6.08685 19.8612 6.23405 20.3889C6.39242 20.9565 6.64119 21.4506 7.11996 21.831C7.58506 22.2005 8.30852 22.4125 9.01531 22.5422C9.75879 22.6787 10.6225 22.747 11.4767 22.7499C12.3308 22.7528 13.199 22.6904 13.951 22.5554C14.6687 22.4264 15.4019 22.2115 15.8809 21.831C16.3597 21.4506 16.6084 20.9565 16.7668 20.3889C16.914 19.8612 17.0016 19.1958 17.1048 18.4122L18.2585 9.6515L17.9371 9.38706C17.6775 9.17341 16.4666 8.25 14.7504 8.25C13.7966 8.25 12.873 8.53979 12.1269 8.78849C12.0456 8.81559 11.9669 8.84206 11.8904 8.86778C11.5994 8.96566 11.3407 9.05265 11.0951 9.12191C10.7843 9.20957 10.556 9.25 10.3868 9.25C10.3079 9.25 10.266 9.24099 10.2479 9.23584C10.2324 9.23141 10.2254 9.22736 10.2184 9.22267C10.1872 9.20155 10.172 9.18476 10.1128 9.11975C10.0847 9.08885 10.0466 9.047 9.99231 8.98871C9.84564 8.8313 9.63278 8.62566 9.29675 8.47323C8.96761 8.32393 8.57572 8.25 8.09133 8.25Z',
  d10: 'M12.7891 8.57808L12.9468 2.89803L12.9477 2.88256C13.0099 1.82543 13.8853 1 14.9443 1L19.0014 1C19.5537 1 20.0014 1.44772 20.0014 2C20.0014 2.55228 19.5537 3 19.0014 3L15.1393 3C15.031 3 14.9424 3.08619 14.9394 3.19445L14.7989 8.25025C14.7828 8.25008 14.7666 8.25 14.7504 8.25C14.0625 8.25 13.3903 8.40074 12.7891 8.57808Z',
  d11: 'M9 16C9 15.4477 9.44772 15 10 15H10.0089C10.5612 15 11.0089 15.4477 11.0089 16C11.0089 16.5523 10.5612 17 10.0089 17H10C9.44772 17 9 16.5523 9 16Z',
  d12: 'M18 5H5L7 22H16L18 5Z',
  d13: 'M13 19L14.5 2H19.0014',
  d14: 'M5.5 9.5H17.5',
  d15: 'M13.9061 1.25H19.75V2.75H15.2795L13.8399 19.0659L12.3457 18.9341L13.9061 1.25Z',
  d16: 'M18.9368 4.25H4.25L6.42647 22.75H16.7603L18.9368 4.25ZM6.29044 8.75L5.9375 5.75H17.2507L16.8977 8.75H6.29044ZM10.0918 15C9.53951 15 9.0918 15.4477 9.0918 16C9.0918 16.5523 9.53951 17 10.0918 17H10.1007C10.653 17 11.1007 16.5523 11.1007 16C11.1007 15.4477 10.653 15 10.1007 15H10.0918Z',
} as const;

export const IconSoftDrink02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="soft-drink-02-stroke-rounded IconSoftDrink02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoftDrink02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="soft-drink-02-duotone-rounded IconSoftDrink02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoftDrink02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="soft-drink-02-twotone-rounded IconSoftDrink02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="0.3" 
        d={d.d3} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoftDrink02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="soft-drink-02-solid-rounded IconSoftDrink02SolidRounded"
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

export const IconSoftDrink02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="soft-drink-02-bulk-rounded IconSoftDrink02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconSoftDrink02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="soft-drink-02-stroke-sharp IconSoftDrink02StrokeSharp"
    >
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
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSoftDrink02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="soft-drink-02-solid-sharp IconSoftDrink02SolidSharp"
    >
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

export const iconPackOfSoftDrink02: TheIconSelfPack = {
  name: 'SoftDrink02',
  StrokeRounded: IconSoftDrink02StrokeRounded,
  DuotoneRounded: IconSoftDrink02DuotoneRounded,
  TwotoneRounded: IconSoftDrink02TwotoneRounded,
  SolidRounded: IconSoftDrink02SolidRounded,
  BulkRounded: IconSoftDrink02BulkRounded,
  StrokeSharp: IconSoftDrink02StrokeSharp,
  SolidSharp: IconSoftDrink02SolidSharp,
};