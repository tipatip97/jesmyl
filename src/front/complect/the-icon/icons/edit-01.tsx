import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.9459 3.17305C17.5332 2.58578 17.8268 2.29215 18.1521 2.15173C18.6208 1.94942 19.1521 1.94942 19.6208 2.15173C19.946 2.29215 20.2397 2.58578 20.8269 3.17305C21.4142 3.76032 21.7079 4.05395 21.8483 4.37925C22.0506 4.8479 22.0506 5.37924 21.8483 5.84789C21.7079 6.17319 21.4142 6.46682 20.8269 7.05409L15.8054 12.0757C14.5682 13.3129 13.9496 13.9315 13.1748 14.298C12.4 14.6645 11.5294 14.7504 9.78823 14.9222L9 15L9.07778 14.2118C9.24958 12.4706 9.33549 11.6 9.70201 10.8252C10.0685 10.0504 10.6871 9.43183 11.9243 8.19464L16.9459 3.17305Z',
  d2: 'M6 15H3.75C2.7835 15 2 15.7835 2 16.75C2 17.7165 2.7835 18.5 3.75 18.5H13.25C14.2165 18.5 15 19.2835 15 20.25C15 21.2165 14.2165 22 13.25 22H11',
  d3: 'M17.9799 1.33814C18.6382 1.05395 19.3846 1.05395 20.043 1.33814C20.3076 1.45237 20.5299 1.61728 20.745 1.80587C20.9512 1.9866 21.1861 2.22154 21.4653 2.50074L21.4993 2.53471C21.7785 2.81389 22.0134 3.04883 22.1941 3.25496C22.3827 3.47007 22.5476 3.6924 22.6619 3.95701C22.9461 4.61536 22.9461 5.36178 22.6619 6.02013C22.5476 6.28474 22.3827 6.50707 22.1941 6.72218C22.0134 6.9283 21.7785 7.16322 21.4993 7.44237L21.4993 7.44243L16.3602 12.5815L16.3602 12.5815C15.2196 13.7225 14.5141 14.4282 13.6205 14.851C12.7269 15.2737 11.5924 15.3855 9.98688 15.5436L9.19865 15.6214C8.97513 15.6434 8.75349 15.5641 8.59467 15.4053C8.43585 15.2465 8.35657 15.0249 8.37863 14.8014L8.4564 14.0131C8.61455 12.4076 8.72631 11.2731 9.14905 10.3795C9.5718 9.48586 10.2775 8.78038 11.4185 7.63978L16.5575 2.50077C16.8367 2.22156 17.0717 1.9866 17.2778 1.80587C17.4929 1.61728 17.7153 1.45237 17.9799 1.33814Z',
  d4: 'M1.125 16.625C1.125 15.1062 2.35622 13.875 3.875 13.875H6.125C6.67728 13.875 7.125 14.3227 7.125 14.875C7.125 15.4273 6.67728 15.875 6.125 15.875H3.875C3.46079 15.875 3.125 16.2108 3.125 16.625C3.125 17.0392 3.46079 17.375 3.875 17.375H13.375C14.8938 17.375 16.125 18.6062 16.125 20.125C16.125 21.6438 14.8938 22.875 13.375 22.875H11.125C10.5727 22.875 10.125 22.4273 10.125 21.875C10.125 21.3227 10.5727 20.875 11.125 20.875H13.375C13.7892 20.875 14.125 20.5392 14.125 20.125C14.125 19.7108 13.7892 19.375 13.375 19.375H3.875C2.35622 19.375 1.125 18.1438 1.125 16.625Z',
  d5: 'M5.9955 15.002H3.74748C2.78183 15.002 1.99902 15.7855 1.99902 16.752C1.99902 17.7185 2.78183 18.502 3.74748 18.502H13.2391C14.2048 18.502 14.9876 19.2855 14.9876 20.252C14.9876 21.2185 14.2048 22.002 13.2391 22.002H10.9911',
  d6: 'M9.01367 11.5404L18.4757 2.001C18.4796 1.99709 18.4859 1.99706 18.4899 2.00093L21.9978 5.4656C22.0018 5.4695 22.0018 5.47587 21.9979 5.47979L12.5289 14.9623H9.01367V11.5404Z',
  d7: 'M18.5 1.25C18.6989 1.25 18.8897 1.32902 19.0303 1.46967L22.5303 4.96967C22.8232 5.26256 22.8232 5.73744 22.5303 6.03033L12.8107 15.75H8.25V11.1893L17.9697 1.46967C18.1103 1.32902 18.3011 1.25 18.5 1.25Z',
  d8: 'M1.25 16.75C1.25 15.3693 2.36929 14.25 3.75 14.25H6V15.75H3.75C3.19772 15.75 2.75 16.1977 2.75 16.75C2.75 17.3023 3.19772 17.75 3.75 17.75H13.25C14.6307 17.75 15.75 18.8693 15.75 20.25C15.75 21.6307 14.6307 22.75 13.25 22.75H11V21.25H13.25C13.8023 21.25 14.25 20.8023 14.25 20.25C14.25 19.6977 13.8023 19.25 13.25 19.25H3.75C2.36929 19.25 1.25 18.1307 1.25 16.75Z',
} as const;

export const IconEdit01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-01-stroke-rounded IconEdit01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconEdit01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-01-duotone-rounded IconEdit01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconEdit01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-01-twotone-rounded IconEdit01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconEdit01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-01-solid-rounded IconEdit01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEdit01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-01-bulk-rounded IconEdit01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEdit01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-01-stroke-sharp IconEdit01StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconEdit01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-01-solid-sharp IconEdit01SolidSharp"
    >
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

export const iconPackOfEdit01: TheIconSelfPack = {
  name: 'Edit01',
  StrokeRounded: IconEdit01StrokeRounded,
  DuotoneRounded: IconEdit01DuotoneRounded,
  TwotoneRounded: IconEdit01TwotoneRounded,
  SolidRounded: IconEdit01SolidRounded,
  BulkRounded: IconEdit01BulkRounded,
  StrokeSharp: IconEdit01StrokeSharp,
  SolidSharp: IconEdit01SolidSharp,
};