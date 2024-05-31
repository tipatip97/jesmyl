import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.78879 9.03708C3.0814 9.42 1.22668 10.2019 2.35633 11.1803C2.90815 11.6582 3.52275 12 4.29543 12H8.70457C9.47725 12 10.0918 11.6582 10.6437 11.1803C11.7733 10.2019 9.9186 9.42 9.21121 9.03708C7.55241 8.13915 5.44759 8.13915 3.78879 9.03708Z',
  d2: 'M8.75 4.27273C8.75 5.52792 7.74264 6.54545 6.5 6.54545C5.25736 6.54545 4.25 5.52792 4.25 4.27273C4.25 3.01753 5.25736 2 6.5 2C7.74264 2 8.75 3.01753 8.75 4.27273Z',
  d3: 'M4 15C4 18.3171 6.68286 21 10 21L9.14286 19.2857',
  d4: 'M20 9C20 5.68286 17.3171 3 14 3L14.8571 4.71429',
  d5: 'M14.7888 19.0371C14.0814 19.42 12.2267 20.2019 13.3563 21.1803C13.9082 21.6582 14.5227 22 15.2954 22H19.7046C20.4773 22 21.0918 21.6582 21.6437 21.1803C22.7733 20.2019 20.9186 19.42 20.2112 19.0371C18.5524 18.1392 16.4476 18.1392 14.7888 19.0371Z',
  d6: 'M19.75 14.2727C19.75 15.5279 18.7426 16.5455 17.5 16.5455C16.2574 16.5455 15.25 15.5279 15.25 14.2727C15.25 13.0175 16.2574 12 17.5 12C18.7426 12 19.75 13.0175 19.75 14.2727Z',
  d7: 'M3.78879 9.04064C3.0814 9.42355 1.22668 10.2054 2.35633 11.1838C2.90815 11.6617 3.52275 12.0036 4.29543 12.0036H8.70457C9.47725 12.0036 10.0918 11.6617 10.6437 11.1838C11.7733 10.2054 9.9186 9.42355 9.21121 9.04063C7.55241 8.1427 5.44759 8.14271 3.78879 9.04064Z',
  d8: 'M14.7888 19.0406C14.0814 19.4236 12.2267 20.2054 13.3563 21.1838C13.9082 21.6617 14.5227 22.0036 15.2954 22.0036H19.7046C20.4773 22.0036 21.0918 21.6617 21.6437 21.1838C22.7733 20.2054 20.9186 19.4236 20.2112 19.0406C18.5524 18.1427 16.4476 18.1427 14.7888 19.0406Z',
  d9: 'M13.1493 2.47427C13.3316 2.17945 13.6534 2 14 2C17.8694 2 21 5.13057 21 9C21 9.55229 20.5523 10 20 10C19.4477 10 19 9.55229 19 9C19 7.0795 17.9216 5.41457 16.3363 4.57679L15.5339 5.37922C15.3819 5.53122 15.2087 5.67508 14.9958 5.7049C14.5822 5.76285 14.1598 5.55572 13.9627 5.1615L13.1056 3.44721C12.9506 3.13723 12.9671 2.76909 13.1493 2.47427Z',
  d10: 'M4 14C4.55228 14 5 14.4477 5 15C5 16.9205 6.07843 18.5854 7.66372 19.4232L8.46615 18.6208C8.61815 18.4688 8.79131 18.3249 9.00419 18.2951C9.41782 18.2372 9.84018 18.4443 10.0373 18.8385L10.8944 20.5528C11.0494 20.8628 11.0329 21.2309 10.8507 21.5257C10.6684 21.8205 10.3466 22 10 22C6.13057 22 3 18.8694 3 15C3 14.4477 3.44772 14 4 14Z',
  d11: 'M14.432 18.4936C16.3136 17.5021 18.687 17.5021 20.5685 18.4936C20.6157 18.5184 20.6779 18.5494 20.7512 18.5858C21.1014 18.7601 21.7041 19.0599 22.1152 19.416C22.3671 19.6342 22.6818 19.982 22.7408 20.4594C22.8069 20.994 22.5302 21.4406 22.135 21.7738C21.5085 22.302 20.7255 22.75 19.7049 22.75H15.2957C14.275 22.75 13.492 22.302 12.8656 21.7738C12.4704 21.4406 12.1937 20.994 12.2598 20.4594C12.3187 19.982 12.6335 19.6342 12.8854 19.416C13.2965 19.0599 13.8991 18.7601 14.2494 18.5858C14.3227 18.5494 14.3849 18.5184 14.432 18.4936Z',
  d12: 'M14.5 14.25C14.5 12.6002 15.8361 11.25 17.5 11.25C19.1639 11.25 20.5 12.6002 20.5 14.25C20.5 15.8998 19.1639 17.25 17.5 17.25C15.8361 17.25 14.5 15.8998 14.5 14.25Z',
  d13: 'M3.43106 8.4936C5.31262 7.50213 7.686 7.50213 9.56755 8.4936C9.61467 8.51843 9.67691 8.54939 9.75019 8.58585C10.1005 8.7601 10.7031 9.05991 11.1142 9.416C11.3661 9.63423 11.6809 9.98195 11.7398 10.4594C11.8059 10.994 11.5292 11.4406 11.134 11.7738C10.5076 12.302 9.72456 12.75 8.70387 12.75H4.29474C3.27406 12.75 2.49106 12.302 1.86463 11.7738C1.46939 11.4406 1.19274 10.994 1.25878 10.4594C1.31775 9.98195 1.63248 9.63423 1.88441 9.416C2.2955 9.05991 2.89816 8.7601 3.24843 8.58585C3.32171 8.54939 3.38394 8.51843 3.43106 8.4936Z',
  d14: 'M3.49902 4.25C3.49902 2.60022 4.83508 1.25 6.49902 1.25C8.16297 1.25 9.49902 2.60022 9.49902 4.25C9.49902 5.89978 8.16297 7.25 6.49902 7.25C4.83508 7.25 3.49902 5.89978 3.49902 4.25Z',
  d15: 'M2 12H11C11 9.79086 8.98528 8 6.5 8C4.01472 8 2 9.79086 2 12Z',
  d16: 'M8.49873 4C8.49873 5.10457 7.6033 6 6.49873 6C5.39416 6 4.49873 5.10457 4.49873 4C4.49873 2.89543 5.39416 2 6.49873 2C7.6033 2 8.49873 2.89543 8.49873 4Z',
  d17: 'M13 22H22C22 19.7909 19.9853 18 17.5 18C15.0147 18 13 19.7909 13 22Z',
  d18: 'M19.4987 14C19.4987 15.1046 18.6033 16 17.4987 16C16.3942 16 15.4987 15.1046 15.4987 14C15.4987 12.8954 16.3942 12 17.4987 12C18.6033 12 19.4987 12.8954 19.4987 14Z',
  d19: 'M4 15C4 18.3171 6.68286 21 10 21L9.5 18.5',
  d20: 'M20 9C20 5.68286 17.3171 3 14 3L14.5 5.5',
  d21: 'M3.74873 4C3.74873 2.48122 4.97994 1.25 6.49873 1.25C8.01751 1.25 9.24873 2.48122 9.24873 4C9.24873 5.51878 8.01751 6.75 6.49873 6.75C4.97994 6.75 3.74873 5.51878 3.74873 4Z',
  d22: 'M1.25 12C1.25 9.29604 3.68599 7.25 6.5 7.25C9.31401 7.25 11.75 9.29604 11.75 12V12.75H1.25V12Z',
  d23: 'M14.7487 14C14.7487 12.4812 15.9799 11.25 17.4987 11.25C19.0175 11.25 20.2487 12.4812 20.2487 14C20.2487 15.5188 19.0175 16.75 17.4987 16.75C15.9799 16.75 14.7487 15.5188 14.7487 14Z',
  d24: 'M12.25 22C12.25 19.296 14.686 17.25 17.5 17.25C20.314 17.25 22.75 19.296 22.75 22V22.75H12.25V22Z',
  d25: 'M10 21.75C6.26864 21.75 3.25 18.7314 3.25 15H4.75C4.75 17.5851 6.6112 19.7293 9.06873 20.1679L8.76456 18.6471L10.2354 18.3529L10.7354 20.8529C10.7795 21.0732 10.7225 21.3017 10.58 21.4755C10.4376 21.6493 10.2247 21.75 10 21.75Z',
  d26: 'M13.42 2.52451C13.5625 2.35074 13.7753 2.25 14 2.25C17.7314 2.25 20.75 5.26864 20.75 9H19.25C19.25 6.41494 17.3888 4.27067 14.9313 3.83207L15.2354 5.35291L13.7646 5.64709L13.2646 3.14709C13.2205 2.92676 13.2775 2.69827 13.42 2.52451Z',
} as const;

export const IconUserSwitchStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-switch-stroke-rounded IconUserSwitchStrokeRounded"
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSwitchDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-switch-duotone-rounded IconUserSwitchDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSwitchTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-switch-twotone-rounded IconUserSwitchTwotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSwitchSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-switch-solid-rounded IconUserSwitchSolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconUserSwitchBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-switch-bulk-rounded IconUserSwitchBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      </g>
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconUserSwitchStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-switch-stroke-sharp IconUserSwitchStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSwitchSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-switch-solid-sharp IconUserSwitchSolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserSwitch: TheIconSelfPack = {
  name: 'UserSwitch',
  StrokeRounded: IconUserSwitchStrokeRounded,
  DuotoneRounded: IconUserSwitchDuotoneRounded,
  TwotoneRounded: IconUserSwitchTwotoneRounded,
  SolidRounded: IconUserSwitchSolidRounded,
  BulkRounded: IconUserSwitchBulkRounded,
  StrokeSharp: IconUserSwitchStrokeSharp,
  SolidSharp: IconUserSwitchSolidSharp,
};