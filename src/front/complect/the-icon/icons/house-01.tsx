import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 2L2 7',
  d2: 'M12 3V22H7C5.11438 22 4.17157 22 3.58579 21.4142C3 20.8284 3 19.8856 3 18V7',
  d3: 'M12 7L22 12',
  d4: 'M10 21.9997H17C18.8856 21.9997 19.8284 21.9997 20.4142 21.4139C21 20.8281 21 19.8853 21 17.9997V11.5',
  d5: 'M18 10L18 7',
  d6: 'M7 11H8M7 15H8',
  d7: 'M16 14H17',
  d8: 'M16.5 22V18',
  d9: 'M12 22V3L3 7V18C3 19.8856 3 20.8284 3.58579 21.4142C4.17157 22 5.11438 22 7 22H12Z',
  d10: 'M13.3105 2.68277C13.6876 2.51137 13.8544 2.06673 13.683 1.68965C13.5116 1.31256 13.0669 1.14582 12.6898 1.31722L1.68983 6.31722C1.31275 6.48863 1.14601 6.93326 1.31741 7.31035C1.43883 7.57749 1.69738 7.73906 1.9719 7.74963C2.12016 7.75534 2.1943 7.75819 2.22224 7.78723C2.25018 7.81627 2.25018 7.87429 2.25018 7.99033L2.25018 18.052C2.25015 18.9505 2.25013 19.6997 2.33009 20.2945C2.4145 20.9223 2.60017 21.4891 3.05564 21.9445C3.51111 22.4 4.07791 22.5857 4.7057 22.6701C5.30049 22.7501 6.04971 22.75 6.94819 22.75H12.0002C12.4144 22.75 12.7502 22.4142 12.7502 22L12.7502 3C12.7502 2.96312 12.7701 2.92843 12.8037 2.91317L13.3105 2.68277ZM7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12H8C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10H7ZM7 14C6.44772 14 6 14.4477 6 15C6 15.5523 6.44772 16 7 16H8C8.55228 16 9 15.5523 9 15C9 14.4477 8.55228 14 8 14H7Z',
  d11: 'M14.5787 7.45102L17.2493 8.78634V6.99986C17.2493 6.58565 17.5851 6.24986 17.9993 6.24986C18.4135 6.24986 18.7493 6.58565 18.7493 6.99986V9.53634L22.3347 11.329C22.7052 11.5143 22.8554 11.9648 22.6701 12.3353C22.5433 12.5889 22.2922 12.7392 22.0276 12.7495C21.8793 12.7552 21.8052 12.7581 21.7772 12.7871C21.7493 12.8161 21.7493 12.8742 21.7493 12.9903L21.7493 18.0515C21.7493 18.95 21.7494 19.6992 21.6694 20.294C21.585 20.9218 21.3993 21.4886 20.9438 21.9441C20.4884 22.3995 19.9216 22.5852 19.2938 22.6696C19.174 22.6857 19.0479 22.6986 18.9155 22.7088L18.9155 22.7088C18.7241 22.7237 18.6284 22.7311 18.5642 22.6718C18.5001 22.6124 18.5001 22.5137 18.5001 22.3164V19.7495C18.5001 19.1972 18.0523 18.7495 17.5001 18.7495C16.9478 18.7495 16.5001 19.1972 16.5001 19.7495V22.3495C16.5001 22.5381 16.5001 22.6323 16.4415 22.6909C16.3829 22.7495 16.2886 22.7495 16.1001 22.7495L14.4479 22.7495C14.1977 22.7495 14.0726 22.7495 14.0132 22.6847C13.9537 22.6199 13.9666 22.4715 13.9923 22.1746L13.9923 22.1746C13.9972 22.117 13.9998 22.0588 13.9998 21.9999L13.9998 7.80879C13.9998 7.51872 13.9998 7.37368 14.0946 7.31506C14.1895 7.25643 14.3192 7.3213 14.5787 7.45102ZM17 13.2499C16.5858 13.2499 16.25 13.5856 16.25 13.9999C16.25 14.4141 16.5858 14.7499 17 14.7499H18C18.4142 14.7499 18.75 14.4141 18.75 13.9999C18.75 13.5856 18.4142 13.2499 18 13.2499H17Z',
  d12: 'M13.683 1.68983C13.8544 2.06692 13.6876 2.51156 13.3105 2.68296L12.8037 2.91336C12.7701 2.92862 12.7502 2.96331 12.7502 3.00018V22.0002C12.7502 22.4144 12.4144 22.7502 12.0002 22.7502H6.94819C6.04971 22.7502 5.30049 22.7502 4.7057 22.6703C4.07791 22.5859 3.51111 22.4002 3.05564 21.9447C2.60017 21.4893 2.4145 20.9225 2.33009 20.2947C2.25013 19.6999 2.25015 18.9507 2.25018 18.0522L2.25018 7.99051C2.25018 7.87448 2.25018 7.81646 2.22224 7.78742C2.1943 7.75838 2.12016 7.75552 1.9719 7.74981C1.69738 7.73924 1.43883 7.57767 1.31741 7.31054C1.14601 6.93345 1.31275 6.48881 1.68983 6.31741L12.6898 1.31741C13.0669 1.14601 13.5116 1.31275 13.683 1.68983Z',
  d13: 'M6 11C6 10.4477 6.44772 10 7 10H8C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12H7C6.44772 12 6 11.5523 6 11ZM6 15C6 14.4477 6.44772 14 7 14H8C8.55228 14 9 14.4477 9 15C9 15.5523 8.55228 16 8 16H7C6.44772 16 6 15.5523 6 15Z',
  d14: 'M14 2.00146L1 7.99824',
  d15: 'M12 6.99902L23 11.9963',
  d16: 'M18 9.49768V6.99902',
  d17: 'M6 10.9966H9M6 14.9944H9',
  d18: 'M15 13.9951H18',
  d19: 'M16.5 21.9905V17.9927',
  d20: 'M9.99708 21.942L21.0312 21.9986V11.5002M3.03418 6.96271V21.942H12.0922V3.00684',
  d21: 'M18.248 7L18.248 9.5L16.748 9.5L16.748 7L18.248 7Z',
  d22: 'M13.1833 1.25L1.00195 7.45082L1.63054 8.81714L2.74764 8.2024L2.74764 22.75H12.2476L12.2476 3.34063L13.8119 2.61633L13.1833 1.25ZM5.90625 11.7502L8.90625 11.7502V10.2502L5.90625 10.2502V11.7502ZM5.90625 15.7502H8.90625V14.2502L5.90625 14.2502V15.7502Z',
  d23: 'M18.498 22.75V18.0005H16.498V22.75H13.748L13.748 7.22872L22.9981 11.5742L22.3774 12.9397L21.2481 12.256V22.75H18.498ZM18.998 14.7505H15.998L15.998 13.2505H18.998V14.7505Z',
} as const;

export const IconHouse01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-01-stroke-rounded IconHouse01StrokeRounded"
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-01-duotone-rounded IconHouse01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-01-twotone-rounded IconHouse01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconHouse01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-01-solid-rounded IconHouse01SolidRounded"
    >
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

export const IconHouse01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-01-bulk-rounded IconHouse01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
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

export const IconHouse01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-01-stroke-sharp IconHouse01StrokeSharp"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-01-solid-sharp IconHouse01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfHouse01: TheIconSelfPack = {
  name: 'House01',
  StrokeRounded: IconHouse01StrokeRounded,
  DuotoneRounded: IconHouse01DuotoneRounded,
  TwotoneRounded: IconHouse01TwotoneRounded,
  SolidRounded: IconHouse01SolidRounded,
  BulkRounded: IconHouse01BulkRounded,
  StrokeSharp: IconHouse01StrokeSharp,
  SolidSharp: IconHouse01SolidSharp,
};