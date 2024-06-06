import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 8.5H4.75C3.57721 8.5 2.99082 8.5 2.58686 8.19003C2.48286 8.11023 2.38977 8.01714 2.30997 7.91314C2 7.50918 2 6.92279 2 5.75C2 4.57721 2 3.99082 2.30997 3.58686C2.38977 3.48286 2.48286 3.38977 2.58686 3.30997C2.99082 3 3.57721 3 4.75 3H17C18.4142 3 19.1213 3 19.5607 3.43934C20 3.87868 20 4.58579 20 6V8.37217C20 9.42821 20 9.95623 19.746 10.3352C19.6371 10.4976 19.4976 10.6371 19.3352 10.746C18.9562 11 18.4282 11 17.3722 11H16.7951C16.3714 11 16.1596 11 15.9688 10.9625C15.4366 10.8581 14.9696 10.5419 14.675 10.0865C14.5693 9.92331 14.4907 9.72663 14.3333 9.33333C14.2547 9.13667 14.2153 9.03835 14.1625 8.95673C14.0152 8.72904 13.7817 8.57096 13.5156 8.51873C13.4202 8.5 13.3143 8.5 13.1025 8.5H12C11.0572 8.5 10.5858 8.5 10.2929 8.79289C10 9.08579 10 9.55719 10 10.5V17C10 19.2091 11.7909 21 14 21',
  d2: 'M4 8.5V21',
  d3: 'M2 21H22',
  d4: 'M19.9813 15H15.0187C13.7463 15 14.0261 16.6634 14.0261 17.5C14.0261 19.433 15.5814 21 17.5 21C19.4186 21 20.9739 19.433 20.9739 17.5C20.9739 16.6634 21.2537 15 19.9813 15Z',
  d5: 'M17.5 11V15',
  d6: 'M17.008 6L16.999 6',
  d7: 'M17 3H4.75C3.57721 3 2.99082 3 2.58686 3.30997C2.48286 3.38977 2.38977 3.48286 2.30997 3.58686C2 3.99082 2 4.57721 2 5.75C2 6.92279 2 7.50918 2.30997 7.91314C2.38977 8.01714 2.48286 8.11023 2.58686 8.19003C2.89367 8.42546 3.30572 8.48207 4 8.49569V21H14C11.7909 21 10 19.2091 10 17V10.5C10 9.55719 10 9.08579 10.2929 8.79289C10.5858 8.5 11.0572 8.5 12 8.5H13.1025C13.3143 8.5 13.4202 8.5 13.5156 8.51873C13.7817 8.57096 14.0152 8.72904 14.1625 8.95673C14.2153 9.03835 14.2547 9.13667 14.3333 9.33333C14.4907 9.72663 14.5693 9.92331 14.675 10.0865C14.9696 10.5419 15.4366 10.8581 15.9688 10.9625C16.1596 11 16.3714 11 16.7951 11H17.3722C18.4282 11 18.9562 11 19.3352 10.746C19.4976 10.6371 19.6371 10.4976 19.746 10.3352C20 9.95623 20 9.42821 20 8.37217V6C20 4.58579 20 3.87868 19.5607 3.43934C19.1213 3 18.4142 3 17 3Z',
  d8: 'M14.7626 17.036C14.7692 17.201 14.7761 17.3751 14.7761 17.5C14.7761 19.0241 16.001 20.25 17.5 20.25C18.9991 20.25 20.2239 19.0241 20.2239 17.5C20.2239 17.3751 20.2309 17.201 20.2375 17.036C20.2418 16.9276 20.246 16.8232 20.248 16.739C20.254 16.4788 20.2476 16.2504 20.2155 16.0628C20.1823 15.8687 20.1338 15.7947 20.1167 15.7758C20.1125 15.771 20.1104 15.7694 20.1031 15.7663C20.0935 15.7624 20.0583 15.75 19.9814 15.75H15.0187C14.9418 15.75 14.9065 15.7624 14.8969 15.7663C14.8897 15.7694 14.8876 15.771 14.8833 15.7758C14.8663 15.7947 14.8177 15.8687 14.7845 16.0628C14.7524 16.2504 14.7461 16.4788 14.7521 16.739C14.7541 16.8232 14.7582 16.9276 14.7626 17.036ZM13.7703 14.7702C14.084 14.4229 14.5183 14.25 15.0187 14.25H19.9814C20.4818 14.25 20.916 14.4229 21.2298 14.7702C21.5181 15.0893 21.6382 15.4835 21.694 15.8097C21.751 16.1426 21.7542 16.4869 21.7476 16.7739C21.7439 16.9289 21.7386 17.0508 21.7339 17.1579C21.7285 17.2821 21.7239 17.3865 21.7239 17.5C21.7239 19.8419 19.8381 21.75 17.5 21.75C15.162 21.75 13.2761 19.8419 13.2761 17.5C13.2761 17.3865 13.2716 17.2821 13.2661 17.1579C13.2614 17.0508 13.2561 16.9289 13.2525 16.7739C13.2458 16.4869 13.249 16.1426 13.306 15.8097C13.3619 15.4835 13.482 15.0893 13.7703 14.7702Z',
  d9: 'M22 21.75C22.4142 21.75 22.75 21.4142 22.75 21C22.75 20.5858 22.4142 20.25 22 20.25L14 20.25C12.2051 20.25 10.75 18.7949 10.75 17L10.75 10.5C10.75 10.0074 10.7516 9.71339 10.7799 9.50267C10.7975 9.43385 10.8666 9.29296 11.0027 9.27993C11.2134 9.2516 11.5074 9.25001 12 9.25001L13.3425 9.25459C13.3615 9.25465 13.3807 9.25602 13.3989 9.2618C13.4396 9.27478 13.4763 9.29799 13.5054 9.32907C13.5256 9.35067 13.5369 9.37867 13.5454 9.407C13.6754 9.83784 13.9038 10.2754 14.0453 10.494C14.4505 11.1201 15.0926 11.5549 15.8244 11.6985C16.0116 11.7353 16.2174 11.7459 16.4498 11.7489C16.6156 11.751 16.75 11.8844 16.75 12.0502V15C16.75 15.4142 17.0858 15.75 17.5 15.75C17.9142 15.75 18.25 15.4142 18.25 15V12.0317C18.25 11.8699 18.3784 11.7385 18.5398 11.7268C18.5891 11.7233 18.6371 11.7191 18.6837 11.7144C19.0545 11.6766 19.4193 11.5925 19.7528 11.369C19.9964 11.2057 20.2057 10.9964 20.369 10.7528C20.5925 10.4193 20.6766 10.0545 20.7144 9.68368C20.75 9.33397 20.75 8.90555 20.75 8.40875L20.75 5.95064C20.75 5.28577 20.7501 4.71291 20.6884 4.25416C20.6223 3.76252 20.4732 3.29126 20.091 2.90902C19.7087 2.52677 19.2375 2.37771 18.7458 2.31161C18.2871 2.24994 17.7143 2.24997 17.0494 2.25L4.70933 2.25H4.70928C4.15767 2.24998 3.6821 2.24996 3.2961 2.29347C2.88553 2.33976 2.48459 2.44309 2.13029 2.71496C1.97429 2.83466 1.83466 2.97429 1.71496 3.13029C1.44309 3.48459 1.33976 3.88553 1.29347 4.2961C1.24996 4.68209 1.24998 5.15765 1.25 5.70925V5.70929C1.24998 6.26092 1.24995 6.8179 1.29347 7.20391C1.33976 7.61448 1.44309 8.01542 1.71496 8.36972C1.83466 8.52572 1.97429 8.66535 2.13029 8.78505C2.39535 8.98844 2.68651 9.0975 2.98828 9.15892C3.13668 9.18913 3.25 9.31482 3.25 9.46625L3.25 19.95C3.25 20.1157 3.11569 20.25 2.95 20.25H2C1.58579 20.25 1.25 20.5858 1.25 21C1.25 21.4142 1.58579 21.75 2 21.75L22 21.75ZM17.0123 7C17.5621 7 18.0078 6.55229 18.0078 6C18.0078 5.44772 17.5621 5 17.0123 5H17.0033C16.4535 5 16.0078 5.44772 16.0078 6C16.0078 6.55228 16.4535 7 17.0033 7H17.0123Z',
  d10: 'M10.75 17C10.75 18.7949 12.2051 20.25 14 20.25C14.4142 20.25 14.75 20.5858 14.75 21C14.75 21.4142 14.4142 21.75 14 21.75H4.00001C3.5858 21.75 3.25001 21.4142 3.25001 21V9.38263C3.25001 9.28185 3.17486 9.19759 3.07563 9.17996C2.7337 9.11921 2.41662 9.00475 2.1303 8.78505C1.62273 8.39558 1.36452 7.83407 1.29348 7.2039C1.24996 6.8179 1.24998 6.3423 1.25001 5.79067C1.25004 5.21202 1.24783 4.70102 1.29348 4.2961C1.41779 3.19345 2.17659 2.41968 3.29611 2.29347C3.68211 2.24996 4.15773 2.24998 4.70934 2.25C8.82269 2.2502 12.936 2.25 17.0494 2.25C18.658 2.24991 20.4311 2.34067 20.6884 4.25416C20.7501 4.71291 20.75 5.28577 20.75 5.95064V8.40875C20.75 8.90555 20.75 9.33397 20.7144 9.68368C20.599 10.8148 19.7941 11.6011 18.6837 11.7144C18.334 11.75 17.9055 11.75 17.4087 11.75C16.8876 11.75 16.3377 11.7993 15.8244 11.6985C15.0926 11.5549 14.4505 11.1201 14.0453 10.494C13.8991 10.2681 13.7947 10.0066 13.6609 9.67173C13.5488 9.39103 13.4207 9.25 13.1025 9.25H12C11.5074 9.25 11.2134 9.2516 11.0027 9.27993C10.9454 9.28763 10.875 9.29397 10.8232 9.32324C10.794 9.37498 10.7876 9.44535 10.7799 9.50267C10.7516 9.71339 10.75 10.0074 10.75 10.5V17Z',
  d11: 'M1.25 21C1.25 20.5858 1.58579 20.25 2 20.25H22C22.4142 20.25 22.75 20.5858 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21Z',
  d12: 'M18.25 11.7422V15.0006C18.25 15.4148 17.9142 15.7506 17.5 15.7506C17.0858 15.7506 16.75 15.4148 16.75 15.0006V11.7618C17.2863 11.7552 17.8198 11.7566 18.25 11.7422Z',
  d13: 'M18.0078 6C18.0078 6.55228 17.5601 7 17.0078 7L16.9988 7C16.4465 7 15.9988 6.55228 15.9988 6C15.9988 5.44771 16.4465 5 16.9988 5L17.0078 5C17.5601 5 18.0078 5.44772 18.0078 6Z',
  d14: 'M4.01465 8.50195V21.002',
  d15: 'M2.01855 21.002H22',
  d16: 'M20.9858 15.002H13.998V17.5179C13.998 19.4421 15.5623 21.002 17.4919 21.002C19.4216 21.002 20.9858 19.4421 20.9858 17.5179V15.002Z',
  d17: 'M17.4912 11.002V15.002',
  d18: 'M17.0002 6.00195H16.9912',
  d19: 'M6.02529 8.47414H2.09983C2.04469 8.47414 2 8.42937 2 8.37414V3.1C2 3.04477 2.04469 3 2.09983 3L19.8617 3.0002C19.9168 3.0002 19.9615 3.04497 19.9615 3.1002V10.8825C19.9615 10.9377 19.9168 10.9825 19.8617 10.9825H15.0305L14.0281 8.50674H9.99653V17.0553C9.99653 18.4126 10.9569 20.8131 13.8012 21.0006',
  d20: 'M22.375 21.75H2.375V19.75H22.375V21.75Z',
  d21: 'M21.375 15H14.375V17.5159C14.375 19.4401 15.942 21 17.875 21C19.808 21 21.375 19.4401 21.375 17.5159V15Z',
  d22: 'M16.875 15V11H18.875V15H16.875Z',
  d23: 'M2.375 2.25C1.96079 2.25 1.625 2.58579 1.625 3L1.625 8.5C1.625 8.91421 1.96079 9.25 2.375 9.25H3.625L3.625 21C3.625 21.4142 3.96079 21.75 4.375 21.75H14.375C14.7892 21.75 15.125 21.4142 15.125 21C15.125 20.5858 14.7892 20.25 14.375 20.25C12.5801 20.25 11.125 18.7949 11.125 17L11.125 9.25H13.8672L14.6786 11.2785C14.7925 11.5633 15.0683 11.75 15.375 11.75H20.375C20.7892 11.75 21.125 11.4142 21.125 11L21.125 3C21.125 2.58579 20.7892 2.25 20.375 2.25L2.375 2.25ZM17.3828 7C17.9351 7 18.3828 6.55229 18.3828 6C18.3828 5.44772 17.9351 5 17.3828 5H17.3738C16.8215 5 16.3738 5.44772 16.3738 6C16.3738 6.55228 16.8215 7 17.3738 7H17.3828Z',
};

export const IconMixerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mixer-stroke-rounded IconMixerStrokeRounded"
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

export const IconMixerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mixer-duotone-rounded IconMixerDuotoneRounded"
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

export const IconMixerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mixer-twotone-rounded IconMixerTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMixerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mixer-solid-rounded IconMixerSolidRounded"
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

export const IconMixerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mixer-bulk-rounded IconMixerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMixerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mixer-stroke-sharp IconMixerStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMixerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mixer-solid-sharp IconMixerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMixer: TheIconSelfPack = {
  name: 'Mixer',
  StrokeRounded: IconMixerStrokeRounded,
  DuotoneRounded: IconMixerDuotoneRounded,
  TwotoneRounded: IconMixerTwotoneRounded,
  SolidRounded: IconMixerSolidRounded,
  BulkRounded: IconMixerBulkRounded,
  StrokeSharp: IconMixerStrokeSharp,
  SolidSharp: IconMixerSolidSharp,
};