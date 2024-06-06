import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 18L5 21M18 18L19 21',
  d2: 'M16 18H8C5.17157 18 3.75736 18 2.87868 17.0586C2 16.1171 2 14.6019 2 11.5714V9.42857C2 6.39811 2 4.88289 2.87868 3.94144C3.75736 3 5.17157 3 8 3H16C18.8284 3 20.2426 3 21.1213 3.94144C22 4.88289 22 6.39811 22 9.42857V11.5714C22 14.6019 22 16.1171 21.1213 17.0586C20.2426 18 18.8284 18 16 18Z',
  d3: 'M2.5 14H21.5',
  d4: 'M12 3L12 14',
  d5: 'M9 9L9 8',
  d6: 'M15 9L15 8',
  d7: 'M22 9.42857V11.5714C22 12.5197 22 13.3196 21.9731 14H2.02692C2 13.3196 2 12.5197 2 11.5714V9.42857C2 6.39811 2 4.88288 2.87868 3.94144C3.75736 3 5.17157 3 8 3H16C18.8284 3 20.2426 3 21.1213 3.94144C22 4.88288 22 6.39811 22 9.42857Z',
  d8: 'M9 9V8',
  d9: 'M15 9V8',
  d10: 'M2.5 14H21.5M12 3V14',
  d11: 'M6.3165 16.9266C6.84044 17.1012 7.1236 17.6676 6.94895 18.1915L5.94895 21.1915C5.77431 21.7154 5.20799 21.9986 4.68404 21.824C4.1601 21.6493 3.87694 21.083 4.05159 20.559L5.05159 17.559C5.22624 17.0351 5.79256 16.7519 6.3165 16.9266ZM17.684 16.9266C18.208 16.7519 18.7743 17.0351 18.949 17.559L19.949 20.559C20.1236 21.083 19.8404 21.6493 19.3165 21.824C18.7926 21.9986 18.2262 21.7154 18.0516 21.1915L17.0516 18.1915C16.8769 17.6676 17.1601 17.1012 17.684 16.9266Z',
  d12: 'M11.25 2.725C11.25 2.44216 11.25 2.30074 11.1621 2.21287C11.0743 2.125 10.9328 2.125 10.65 2.125H8.01794C6.69809 2.12496 5.60279 2.12493 4.73458 2.24914C3.81498 2.3807 3.00934 2.66842 2.37155 3.34709C1.74268 4.01628 1.48441 4.8455 1.36495 5.79103C1.24996 6.70112 1.24998 7.8546 1.25 9.26969V9.26973L1.25 11.4802V11.4803C1.24998 12.8953 1.24996 14.0489 1.36495 14.959C1.48441 15.9045 1.74268 16.7337 2.37155 17.4029C3.00934 18.0816 3.81498 18.3693 4.73458 18.5009C5.6028 18.6251 6.69805 18.625 8.01793 18.625L15.9821 18.625C17.302 18.625 18.3972 18.6251 19.2654 18.5009C20.185 18.3693 20.9907 18.0816 21.6285 17.4029C22.2573 16.7337 22.5156 15.9045 22.6351 14.959C22.75 14.0488 22.75 12.8953 22.75 11.4802V9.26984C22.75 7.85466 22.75 6.70116 22.6351 5.79103C22.5156 4.8455 22.2573 4.01627 21.6285 3.34709C20.9907 2.66842 20.185 2.3807 19.2654 2.24914C18.3972 2.12493 17.3019 2.12496 15.9821 2.125L13.35 2.125C13.0672 2.125 12.9257 2.125 12.8379 2.21287C12.75 2.30074 12.75 2.44216 12.75 2.725L12.75 14.0251C12.75 14.3079 12.75 14.4493 12.8379 14.5372C12.9257 14.6251 13.0672 14.6251 13.35 14.6251L20.026 14.6251C20.3531 14.6251 20.5166 14.6251 20.6067 14.7424C20.6967 14.8597 20.6581 15.0043 20.5809 15.2935C20.482 15.6638 20.3511 15.917 20.1993 16.0784C19.9784 16.3135 19.6637 16.4826 18.9865 16.5795C18.2739 16.6815 17.3205 16.6838 15.9089 16.6838H8.09067C6.67906 16.6838 5.72558 16.6815 5.01301 16.5795C4.33586 16.4826 4.0211 16.3135 3.80019 16.0784C3.64847 15.917 3.51752 15.6637 3.41865 15.2934C3.3414 15.0042 3.30278 14.8595 3.39285 14.7423C3.48291 14.625 3.64646 14.625 3.97356 14.625L10.65 14.625C10.9328 14.625 11.0743 14.625 11.1621 14.5372C11.25 14.4493 11.25 14.3079 11.25 14.025L11.25 2.725ZM9 7.125C9.41421 7.125 9.75 7.46078 9.75 7.875V8.875C9.75 9.28921 9.41421 9.625 9 9.625C8.58579 9.625 8.25 9.28921 8.25 8.875V7.875C8.25 7.46078 8.58579 7.125 9 7.125ZM15.75 7.875C15.75 7.46078 15.4142 7.125 15 7.125C14.5858 7.125 14.25 7.46078 14.25 7.875V8.875C14.25 9.28921 14.5858 9.625 15 9.625C15.4142 9.625 15.75 9.28921 15.75 8.875V7.875Z',
  d13: 'M11.25 2.725C11.25 2.44216 11.25 2.30074 11.1621 2.21287C11.0743 2.125 10.9328 2.125 10.65 2.125H8.01794C6.69809 2.12496 5.60279 2.12493 4.73458 2.24914C3.81497 2.3807 3.00934 2.66842 2.37155 3.3471C1.74268 4.01628 1.48441 4.8455 1.36495 5.79103C1.24996 6.70113 1.24998 7.85463 1.25 9.26973V11.4802C1.24998 12.8953 1.24996 14.0489 1.36495 14.959C1.48441 15.9045 1.74268 16.7337 2.37155 17.4029C3.00934 18.0816 3.81497 18.3693 4.73458 18.5009C5.6028 18.6251 6.69805 18.625 8.01792 18.625H15.9821C17.302 18.625 18.3972 18.6251 19.2654 18.5009C20.185 18.3693 20.9907 18.0816 21.6285 17.4029C22.2573 16.7337 22.5156 15.9045 22.6351 14.959C22.75 14.0488 22.75 12.8953 22.75 11.4802V9.26984C22.75 7.85466 22.75 6.70116 22.6351 5.79103C22.5156 4.8455 22.2573 4.01628 21.6285 3.3471C20.9907 2.66842 20.185 2.3807 19.2654 2.24914C18.3972 2.12493 17.3019 2.12496 15.9821 2.125H13.35C13.0672 2.125 12.9257 2.125 12.8379 2.21287C12.75 2.30074 12.75 2.44216 12.75 2.725L12.75 14.0251C12.75 14.3079 12.75 14.4493 12.8379 14.5372C12.9257 14.6251 13.0672 14.6251 13.35 14.6251L20.026 14.6251C20.3531 14.6251 20.5166 14.6251 20.6067 14.7424C20.6967 14.8597 20.6581 15.0043 20.5809 15.2935C20.482 15.6638 20.3511 15.917 20.1993 16.0784C19.9784 16.3135 19.6637 16.4826 18.9865 16.5795C18.2739 16.6815 17.3205 16.6838 15.9089 16.6838H8.09067C6.67906 16.6838 5.72558 16.6815 5.01301 16.5795C4.33586 16.4826 4.0211 16.3135 3.80019 16.0784C3.64847 15.917 3.51752 15.6637 3.41865 15.2934C3.3414 15.0042 3.30278 14.8595 3.39285 14.7423C3.48291 14.625 3.64646 14.625 3.97355 14.625L10.65 14.625C10.9328 14.625 11.0743 14.625 11.1621 14.5372C11.25 14.4493 11.25 14.3079 11.25 14.025L11.25 2.725Z',
  d14: 'M1.36463 14.9589C1.4841 15.9044 1.74236 16.7336 2.37123 17.4028C3.00902 18.0815 3.81466 18.3692 4.73426 18.5008C5.60249 18.625 6.69774 18.625 8.01761 18.6249H15.9818C17.3016 18.625 18.3969 18.625 19.2651 18.5008C20.1847 18.3692 20.9904 18.0815 21.6281 17.4028C22.257 16.7336 22.5153 15.9044 22.6347 14.9589C22.6437 14.8882 22.6519 14.816 22.6595 14.7423H20.6064C20.6964 14.8596 20.6578 15.0042 20.5806 15.2935C20.4817 15.6637 20.3507 15.9169 20.199 16.0783C19.9781 16.3134 19.6633 16.4826 18.9862 16.5794C18.2736 16.6814 17.3202 16.6837 15.9085 16.6837H8.09036C6.67874 16.6837 5.72526 16.6814 5.01269 16.5794C4.33554 16.4826 4.02079 16.3134 3.79987 16.0783C3.64815 15.9169 3.51721 15.6636 3.41833 15.2934C3.34109 15.0041 3.30247 14.8595 3.39253 14.7422H1.33984C1.34745 14.8159 1.35569 14.8881 1.36463 14.9589Z',
  d15: 'M9 7.125C9.41421 7.125 9.75 7.46079 9.75 7.875V8.875C9.75 9.28921 9.41421 9.625 9 9.625C8.58579 9.625 8.25 9.28921 8.25 8.875L8.25 7.875C8.25 7.46079 8.58579 7.125 9 7.125Z',
  d16: 'M15 7.125C15.4142 7.125 15.75 7.46079 15.75 7.875V8.875C15.75 9.28921 15.4142 9.625 15 9.625C14.5858 9.625 14.25 9.28921 14.25 8.875L14.25 7.875C14.25 7.46079 14.5858 7.125 15 7.125Z',
  d17: 'M2 18V3H22V18H2Z',
  d18: 'M9 9.5V7.5M15 9.5V7.5',
  d19: 'M4.05078 21.1177L4.84001 18.75H2C1.58579 18.75 1.25 18.4142 1.25 18L1.25 14.7495L22.75 14.7495V18C22.75 18.4142 22.4142 18.75 22 18.75H19.1589L19.9481 21.1177L18.0508 21.7501L17.0512 18.75L6.94815 18.7501L5.94815 21.7501L4.05078 21.1177ZM22.75 13.2495H12.75L12.75 2.25L22 2.25C22.1989 2.25 22.3897 2.32902 22.5303 2.46967C22.671 2.61032 22.75 2.80109 22.75 3L22.75 13.2495ZM11.25 13.2495L11.25 2.25H2C1.58579 2.25 1.25 2.58579 1.25 3L1.25 13.2495L11.25 13.2495ZM9.75 8.74951V6.74951L8.25 6.74951V8.74951L9.75 8.74951ZM15.75 8.74951V6.74951H14.25V8.74951H15.75Z',
};

export const IconCabinet01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-01-stroke-rounded IconCabinet01StrokeRounded"
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

export const IconCabinet01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-01-duotone-rounded IconCabinet01DuotoneRounded"
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

export const IconCabinet01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-01-twotone-rounded IconCabinet01TwotoneRounded"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-01-solid-rounded IconCabinet01SolidRounded"
    >
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

export const IconCabinet01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-01-bulk-rounded IconCabinet01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconCabinet01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-01-stroke-sharp IconCabinet01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-01-solid-sharp IconCabinet01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCabinet01: TheIconSelfPack = {
  name: 'Cabinet01',
  StrokeRounded: IconCabinet01StrokeRounded,
  DuotoneRounded: IconCabinet01DuotoneRounded,
  TwotoneRounded: IconCabinet01TwotoneRounded,
  SolidRounded: IconCabinet01SolidRounded,
  BulkRounded: IconCabinet01BulkRounded,
  StrokeSharp: IconCabinet01StrokeSharp,
  SolidSharp: IconCabinet01SolidSharp,
};