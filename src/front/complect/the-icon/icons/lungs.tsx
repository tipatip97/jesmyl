import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.97769 11C8.38875 11.2063 8.71501 11.5615 8.97397 11.9954M8.97397 11.9954C9.97037 13.665 9.97025 16.5 9.97025 16.5C9.97025 20 8.18605 21 5.98512 21C4.98884 21 2 20.5 2 16C2 9.5 5.48698 5 8.47583 5C10.8669 5 9.97174 10 8.97397 11.9954Z',
  d2: 'M16.0216 11C15.6104 11.2063 15.2841 11.5615 15.0251 11.9954M15.0251 11.9954C14.0286 13.665 14.0287 16.5 14.0287 16.5C14.0287 20 15.8132 21 18.0144 21C19.0108 21 22 20.5 22 16C22 9.5 18.5126 5 15.5234 5C13.132 5 14.0301 10 15.0251 11.9954Z',
  d3: 'M14 7L12 5.66667M12 5.66667L10 7M12 5.66667V3',
  d4: 'M5.98512 21C4.98884 21 2 20.5 2 16C2 9.5 5.48698 5 8.47583 5C10.8669 5 9.97174 10 8.97397 11.9954C9.97037 13.665 9.97025 16.5 9.97025 16.5C9.97025 20 8.18605 21 5.98512 21Z',
  d5: 'M18.0144 21C19.0108 21 22 20.5 22 16C22 9.5 18.5126 5 15.5234 5C13.132 5 14.0301 10 15.0251 11.9954C14.0286 13.665 14.0287 16.5 14.0287 16.5C14.0287 20 15.8132 21 18.0144 21Z',
  d6: 'M14.6786 20.7304C13.7562 19.8512 13.2788 18.4938 13.2788 16.625C13.2842 16.2851 13.318 15.4637 13.4101 14.8979C13.5229 14.0671 13.7417 12.9986 14.1872 12.0938C13.709 10.979 13.3027 9.33793 13.2548 7.89942C13.2282 7.10361 13.3071 6.27547 13.6188 5.61666C13.7792 5.27762 14.0126 4.95992 14.3466 4.72784C14.6864 4.4917 15.0865 4.375 15.5234 4.375C17.3868 4.375 19.2054 5.74706 20.5135 7.78194C21.8439 9.8515 22.75 12.745 22.75 16.125C22.75 18.5571 21.9318 20.0447 20.8453 20.9014C19.7942 21.7302 18.6097 21.875 18.0144 21.875C16.8144 21.875 15.5948 21.6036 14.6786 20.7304Z',
  d7: 'M9.32135 20.7304C10.2438 19.8512 10.7212 18.4938 10.7212 16.625C10.7158 16.2851 10.682 15.4637 10.5899 14.8979C10.4771 14.0671 10.2583 12.9986 9.81276 12.0938C10.291 10.979 10.6973 9.33793 10.7452 7.89942C10.7718 7.10361 10.6929 6.27547 10.3812 5.61666C10.2208 5.27762 9.9874 4.95992 9.65342 4.72784C9.31359 4.4917 8.91349 4.375 8.47663 4.375C6.6132 4.375 4.79457 5.74706 3.48646 7.78194C2.15605 9.8515 1.24998 12.745 1.24998 16.125C1.24998 18.5571 2.06824 20.0447 3.15475 20.9014C4.2058 21.7302 5.39034 21.875 5.98561 21.875C7.1856 21.875 8.4052 21.6036 9.32135 20.7304Z',
  d8: 'M11.9999 2.125C11.4476 2.125 10.9999 2.57272 10.9999 3.125V5.25648L9.44519 6.29295C8.98566 6.5993 8.86149 7.22017 9.16784 7.6797C9.4742 8.13923 10.0951 8.2634 10.5546 7.95705L11.9999 6.99352L13.4452 7.95705C13.9047 8.2634 14.5256 8.13923 14.8319 7.6797C15.1383 7.22017 15.0141 6.5993 14.5546 6.29295L12.9999 5.25648V3.125C12.9999 2.57272 12.5522 2.125 11.9999 2.125Z',
  d9: 'M7 10C7 10 8.5 11 8.97397 11.9954M8.97397 11.9954C9.97037 13.665 9.97025 16.5 9.97025 16.5C9.97025 20 8.18605 21 5.98512 21C4.98884 21 2 20.5 2 16C2 9.5 5.48698 5 8.47583 5C10.8669 5 9.97174 10 8.97397 11.9954Z',
  d10: 'M17 10C17 10 15.5 11 15.0251 11.9954M15.0251 11.9954C14.0286 13.665 14.0287 16.5 14.0287 16.5C14.0287 20 15.8132 21 18.0144 21C19.0108 21 22 20.5 22 16C22 9.5 18.5126 5 15.5234 5C13.132 5 14.0301 10 15.0251 11.9954Z',
  d11: 'M9.32137 20.6054C10.2438 19.7262 10.7213 18.3688 10.7213 16.5C10.7213 16.0447 10.6556 15.2563 10.5899 14.7729C10.4772 13.9421 10.2583 12.8736 9.81277 11.9688C10.291 10.854 10.6973 9.21293 10.7452 7.77442C10.7718 6.97861 10.6929 6.15047 10.3812 5.49166C10.2208 5.15262 9.98742 4.83492 9.65343 4.60284C9.3136 4.3667 8.91351 4.25 8.47665 4.25C6.61322 4.25 4.79459 5.62206 3.48648 7.65694C2.15607 9.7265 1.25 12.62 1.25 16C1.25 18.4321 2.06825 19.9197 3.15476 20.7764C4.20581 21.6052 5.39035 21.75 5.98563 21.75C7.18561 21.75 8.40522 21.4786 9.32137 20.6054Z',
  d12: 'M11 5.38148L9.44529 6.41795L10.5547 8.08205L12 7.11852L13.4453 8.08205L14.5547 6.41795L13 5.38148V2.25L11 2.25V5.38148Z',
  d13: 'M14.6786 20.6054C13.7562 19.7262 13.2788 18.3688 13.2788 16.5C13.2788 16.0447 13.3445 15.2563 13.4101 14.7729C13.5229 13.9421 13.7417 12.8736 14.1872 11.9688C13.709 10.854 13.3027 9.21293 13.2548 7.77442C13.2282 6.97861 13.3071 6.15047 13.6188 5.49166C13.7792 5.15262 14.0126 4.83492 14.3466 4.60284C14.6864 4.3667 15.0865 4.25 15.5234 4.25C17.3868 4.25 19.2054 5.62206 20.5135 7.65694C21.8439 9.7265 22.75 12.62 22.75 16C22.75 18.4321 21.9318 19.9197 20.8453 20.7764C19.7942 21.6052 18.6097 21.75 18.0144 21.75C16.8144 21.75 15.5948 21.4786 14.6786 20.6054Z',
} as const;

export const IconLungsStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lungs-stroke-rounded IconLungsStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLungsDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lungs-duotone-rounded IconLungsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLungsTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lungs-twotone-rounded IconLungsTwotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLungsSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lungs-solid-rounded IconLungsSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconLungsBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lungs-bulk-rounded IconLungsBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLungsStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lungs-stroke-sharp IconLungsStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLungsSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lungs-solid-sharp IconLungsSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLungs: TheIconSelfPack = {
  name: 'Lungs',
  StrokeRounded: IconLungsStrokeRounded,
  DuotoneRounded: IconLungsDuotoneRounded,
  TwotoneRounded: IconLungsTwotoneRounded,
  SolidRounded: IconLungsSolidRounded,
  BulkRounded: IconLungsBulkRounded,
  StrokeSharp: IconLungsStrokeSharp,
  SolidSharp: IconLungsSolidSharp,
};