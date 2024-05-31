import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 10C20 14.4183 16.4183 20 12 20C7.58172 20 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z',
  d2: 'M8 18C8.93901 16.7807 10.3819 16 12 16C13.6181 16 15.061 16.7807 16 18',
  d3: 'M9.24863 9.60369C10.1074 9.85527 11.0339 10 12 10C12.9661 10 13.8926 9.85527 14.7514 9.60369C15.9101 9.26423 16.4186 8.6101 15.5953 7.58805C13.8898 5.47065 10.1102 5.47065 8.40466 7.58805C7.5814 8.6101 8.08993 9.26423 9.24863 9.60369Z',
  d4: 'M5 19L3 22M19 19L21 22',
  d5: 'M12 2C7.58172 2 4 5.58172 4 10C4 12.761 5.39869 15.9764 7.52616 18C8.15729 17.3577 9.22468 16.6053 10.5233 16.2376C11.0834 16.0504 11.7059 15.9573 12.3757 16.0189C13.679 16.0834 15.0933 16.6274 16.4738 18C18.6013 15.9764 20 12.761 20 10C20 5.58172 16.4183 2 12 2ZM12 10C11.0339 10 10.1074 9.85527 9.24863 9.60369C8.08993 9.26423 7.5814 8.6101 8.40466 7.58805C10.1102 5.47065 13.8898 5.47065 15.5953 7.58805C16.4186 8.6101 15.9101 9.26423 14.7514 9.60369C13.8926 9.85527 12.9661 10 12 10Z',
  d6: 'M3.25 9.87495C3.25 5.04245 7.16751 1.12495 12 1.12495C16.8325 1.12495 20.75 5.04245 20.75 9.87495C20.75 12.266 19.7895 14.9199 18.2588 16.9792C16.7337 19.031 14.5364 20.6249 12 20.6249C9.46356 20.6249 7.26632 19.031 5.74121 16.9792C4.21053 14.9199 3.25 12.266 3.25 9.87495ZM9.42912 18.3853C10.2454 18.861 11.1132 19.1249 12 19.1249C12.8869 19.1249 13.7546 18.861 14.5709 18.3853C14.8382 18.2296 14.9719 18.1517 14.9833 17.9938C14.9947 17.8359 14.8771 17.7424 14.6419 17.5552C13.905 16.969 12.9889 16.6249 12 16.6249C11.0111 16.6249 10.095 16.969 9.35815 17.5552C9.12293 17.7424 9.00532 17.8359 9.01675 17.9938C9.02817 18.1517 9.16182 18.2296 9.42912 18.3853ZM16.1794 6.99257C15.1554 5.7214 13.5479 5.125 11.9999 5.125C10.4519 5.125 8.84446 5.72139 7.82052 6.99257C7.32935 7.60234 7.0498 8.34628 7.4143 9.06578C7.73107 9.69106 8.41506 10.016 9.03771 10.1984C9.96144 10.4691 10.9589 10.625 11.9999 10.625C13.041 10.625 14.0384 10.4691 14.9622 10.1984C15.5848 10.016 16.2688 9.69106 16.5856 9.06578C16.9501 8.34627 16.6705 7.60233 16.1794 6.99257Z',
  d7: 'M5.55481 18.0431C6.01434 18.3494 6.13851 18.9703 5.83216 19.4298L3.83216 22.4298C3.5258 22.8893 2.90493 23.0135 2.44541 22.7072C1.98588 22.4008 1.8617 21.7799 2.16806 21.3204L4.16806 18.3204C4.47441 17.8609 5.09528 17.7367 5.55481 18.0431ZM18.4454 18.0431C18.9049 17.7367 19.5258 17.8609 19.8322 18.3204L21.8322 21.3204C22.1385 21.7799 22.0143 22.4008 21.5548 22.7072C21.0953 23.0135 20.4744 22.8893 20.1681 22.4298L18.1681 19.4298C17.8617 18.9703 17.9859 18.3494 18.4454 18.0431Z',
  d8: 'M12 1.125C7.16751 1.125 3.25 5.04251 3.25 9.875C3.25 12.2661 4.21053 14.9199 5.74121 16.9793C7.26632 19.0311 9.46356 20.625 12 20.625C14.5364 20.625 16.7337 19.0311 18.2588 16.9793C19.7895 14.9199 20.75 12.2661 20.75 9.875C20.75 5.04251 16.8325 1.125 12 1.125Z',
  d9: 'M11.9997 19.125C11.1128 19.125 10.245 18.861 9.42875 18.3854C9.16146 18.2296 9.02781 18.1517 9.01638 17.9939C9.00496 17.836 9.12257 17.7424 9.35779 17.5553C10.0946 16.969 11.0108 16.625 11.9997 16.625C12.9885 16.625 13.9047 16.969 14.6415 17.5553C14.8767 17.7424 14.9943 17.836 14.9829 17.9939C14.9715 18.1517 14.8379 18.2296 14.5706 18.3854C13.7543 18.861 12.8865 19.125 11.9997 19.125Z',
  d10: 'M11.9999 5.125C13.5479 5.125 15.1554 5.7214 16.1794 6.99257C16.6705 7.60233 16.9501 8.34627 16.5856 9.06578C16.2688 9.69106 15.5848 10.016 14.9622 10.1984C14.0384 10.4691 13.041 10.625 11.9999 10.625C10.9589 10.625 9.96144 10.4691 9.03771 10.1984C8.41506 10.016 7.73107 9.69106 7.4143 9.06578C7.0498 8.34628 7.32935 7.60234 7.82052 6.99257C8.84446 5.72139 10.4519 5.125 11.9999 5.125Z',
  d11: 'M3.25 10.025C3.25 5.1787 7.16751 1.25 12 1.25C16.8325 1.25 20.75 5.1787 20.75 10.025C20.75 12.4154 19.7951 15.0529 18.28 17.0971C16.7722 19.1314 14.5721 20.75 12 20.75C9.42795 20.75 7.22782 19.1314 5.72 17.0971C4.20495 15.0529 3.25 12.4154 3.25 10.025ZM15.4159 17.359C14.5093 16.5139 13.3118 16 11.999 16C10.6862 16 9.48866 16.5139 8.58203 17.3591C9.62744 18.2708 10.8049 18.8 11.999 18.8C13.1931 18.8 14.3705 18.2707 15.4159 17.359ZM16.1813 7.11757C15.1574 5.8464 13.5499 5.25 12.0019 5.25C10.4539 5.25 8.84641 5.84639 7.82247 7.11757C7.3313 7.72734 7.05175 8.47128 7.41626 9.19078C7.73303 9.81606 8.41701 10.141 9.03966 10.3234C9.96339 10.5941 10.9608 10.75 12.0019 10.75C13.0429 10.75 14.0404 10.5941 14.9641 10.3234C15.5868 10.141 16.2708 9.81606 16.5875 9.19078C16.952 8.47127 16.6725 7.72733 16.1813 7.11757Z',
  d12: 'M2.25 21.6406L4.25 18.6406L5.9141 19.75L3.9141 22.75L2.25 21.6406ZM20.0859 22.75L18.0859 19.75L19.75 18.6406L21.75 21.6406L20.0859 22.75Z',
} as const;

export const IconTrain02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="train-02-stroke-rounded IconTrain02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTrain02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="train-02-duotone-rounded IconTrain02DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTrain02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="train-02-twotone-rounded IconTrain02TwotoneRounded"
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

export const IconTrain02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="train-02-solid-rounded IconTrain02SolidRounded"
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

export const IconTrain02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="train-02-bulk-rounded IconTrain02BulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrain02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="train-02-stroke-sharp IconTrain02StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrain02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="train-02-solid-sharp IconTrain02SolidSharp"
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

export const iconPackOfTrain02: TheIconSelfPack = {
  name: 'Train02',
  StrokeRounded: IconTrain02StrokeRounded,
  DuotoneRounded: IconTrain02DuotoneRounded,
  TwotoneRounded: IconTrain02TwotoneRounded,
  SolidRounded: IconTrain02SolidRounded,
  BulkRounded: IconTrain02BulkRounded,
  StrokeSharp: IconTrain02StrokeSharp,
  SolidSharp: IconTrain02SolidSharp,
};