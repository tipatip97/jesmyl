import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.07089 10C8.02417 9.6734 8 9.33952 8 9C8 5.13401 11.134 2 15 2C18.866 2 22 5.13401 22 9C22 12.866 18.866 16 15 16C14.7024 16 14.4091 15.9814 14.1212 15.9454',
  d2: 'M18.8684 10C19.2035 8.6899 18.8933 7.01849 18 6',
  d3: 'M2 19.0966L10.2253 11.5568M4.90338 22L12.6046 13.5987M12.6046 13.5987C12.6046 12.3221 11.677 11.3543 10.2253 11.5568M12.6046 13.5987L14.6243 11.3954C15.1414 10.8312 15.1225 9.95985 14.5813 9.41868C14.0402 8.87752 13.1688 8.85858 12.6046 9.37573L10.2253 11.5568',
  d4: 'M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 10.3391 8.37603 11.5904 9.02825 12.6541L12.6046 9.37573C13.1688 8.85858 14.0402 8.87752 14.5813 9.41868C15.1225 9.95985 15.1414 10.8312 14.6243 11.3954L11.3459 14.9718C12.4096 15.624 13.6609 16 15 16Z',
  d5: 'M15.1116 8.88835C14.2865 8.06325 12.958 8.03439 12.0978 8.82287L1.49321 18.5438C1.18787 18.8236 1.16724 19.2981 1.44713 19.6034C1.72703 19.9088 2.20145 19.9294 2.50679 19.6495L10.5455 12.2807C10.9622 12.2674 11.258 12.3989 11.4545 12.5777C11.6419 12.7483 11.7837 13.0029 11.8344 13.329L4.35051 21.4932C4.07062 21.7985 4.09125 22.273 4.39659 22.5529C4.70193 22.8328 5.17635 22.8121 5.45625 22.5068L15.1771 11.9022C15.9656 11.042 15.9367 9.71345 15.1116 8.88835Z',
  d6: 'M7.25 9C7.25 4.71979 10.7198 1.25 15 1.25C19.2802 1.25 22.75 4.71979 22.75 9C22.75 13.2802 19.2802 16.75 15 16.75C14.6534 16.75 14.3121 16.7272 13.9776 16.6832C13.5552 16.6275 13.3441 16.5997 13.2818 16.4286C13.2196 16.2575 13.3716 16.0917 13.6756 15.7601L16.2829 12.9158C17.614 11.4636 17.5653 9.22067 16.1723 7.8277C14.7793 6.43473 12.5364 6.38599 11.0842 7.71714L8.2399 10.3244C7.9083 10.6284 7.74249 10.7804 7.57141 10.7182C7.40033 10.6559 7.3725 10.4448 7.31684 10.0224C7.27275 9.68787 7.25 9.34659 7.25 9ZM18.4365 6.49454C18.1634 6.18313 18.1944 5.70927 18.5058 5.43615C18.8172 5.16303 19.2911 5.19407 19.5642 5.50548C20.6423 6.73471 20.9832 8.66967 20.5954 10.1858C20.4927 10.5871 20.0842 10.8293 19.6829 10.7266C19.2816 10.624 19.0395 10.2155 19.1422 9.81417C19.4245 8.71016 19.1449 7.30229 18.4365 6.49454Z',
  d7: 'M15 1.25C10.7198 1.25 7.25 4.71979 7.25 9C7.25 9.68954 7.34005 10.358 7.50903 10.9944L11.0842 7.71714C12.5364 6.38599 14.7793 6.43473 16.1723 7.8277C17.5653 9.22067 17.614 11.4636 16.2829 12.9158L13.0056 16.491C13.642 16.6599 14.3105 16.75 15 16.75C19.2802 16.75 22.75 13.2802 22.75 9C22.75 4.71979 19.2802 1.25 15 1.25Z',
  d8: 'M18.5058 5.43615C18.1944 5.70927 18.1634 6.18313 18.4365 6.49454C19.1449 7.30229 19.4245 8.71016 19.1422 9.81417C19.0395 10.2155 19.2816 10.624 19.6829 10.7266C20.0842 10.8293 20.4927 10.5871 20.5954 10.1858C20.9832 8.66967 20.6423 6.73471 19.5642 5.50548C19.2911 5.19407 18.8172 5.16303 18.5058 5.43615Z',
  d9: 'M7.25 9C7.25 4.71979 10.7198 1.25 15 1.25C19.2802 1.25 22.75 4.71979 22.75 9C22.75 13.2802 19.2802 16.75 15 16.75C14.2107 16.75 13.4489 16.632 12.7314 16.4127L16.0986 12.7468C17.3393 11.3934 17.2939 9.3028 15.9955 8.00447C14.6972 6.70615 12.6066 6.66072 11.2532 7.90143L7.58733 11.2686C7.368 10.5511 7.25 9.78933 7.25 9ZM19.1422 9.81407C19.4245 8.71005 19.1449 7.30219 18.4365 6.49444L19.5642 5.50537C20.6423 6.7346 20.9832 8.66957 20.5954 10.1857L19.1422 9.81407Z',
  d10: 'M15.1116 8.88835C14.2865 8.06325 12.958 8.03439 12.0978 8.82287L1.25 18.787L2.26359 19.8927L10.5455 12.2807C10.9622 12.2674 11.258 12.3989 11.4545 12.5777C11.6419 12.7483 11.7837 13.0029 11.8344 13.329L4.10731 21.7364L5.21304 22.75L15.1771 11.9022C15.9656 11.042 15.9367 9.71345 15.1116 8.88835Z',
} as const;

export const IconBilliard01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="billiard-01-stroke-rounded IconBilliard01StrokeRounded"
    >
      <path 
        d={d.d1} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBilliard01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="billiard-01-duotone-rounded IconBilliard01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBilliard01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="billiard-01-twotone-rounded IconBilliard01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBilliard01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="billiard-01-solid-rounded IconBilliard01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBilliard01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="billiard-01-bulk-rounded IconBilliard01BulkRounded"
    >
      <path 
        d={d.d5} 
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

export const IconBilliard01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="billiard-01-stroke-sharp IconBilliard01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconBilliard01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="billiard-01-solid-sharp IconBilliard01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfBilliard01: TheIconSelfPack = {
  name: 'Billiard01',
  StrokeRounded: IconBilliard01StrokeRounded,
  DuotoneRounded: IconBilliard01DuotoneRounded,
  TwotoneRounded: IconBilliard01TwotoneRounded,
  SolidRounded: IconBilliard01SolidRounded,
  BulkRounded: IconBilliard01BulkRounded,
  StrokeSharp: IconBilliard01StrokeSharp,
  SolidSharp: IconBilliard01SolidSharp,
};