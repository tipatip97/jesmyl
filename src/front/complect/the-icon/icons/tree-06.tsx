import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22V9',
  d2: 'M9.00195 18.002C7.3451 18.002 6.00195 16.6234 6.00195 14.9665C4.30581 14.7239 3.00195 13.2652 3.00195 11.502C3.00195 10.0052 3.94147 8.7279 5.26293 8.22759C5.09522 7.85339 5.00195 7.43856 5.00195 7.00195C5.00195 5.3451 6.3451 4.00195 8.00195 4.00195C8.3922 4.00195 8.76505 4.07647 9.10703 4.21204C9.45374 2.93842 10.6185 2.00195 12.002 2.00195C13.3854 2.00195 14.5502 2.93842 14.8969 4.21204C15.2389 4.07647 15.6117 4.00195 16.002 4.00195C17.6588 4.00195 19.002 5.3451 19.002 7.00195C19.002 7.43856 18.9087 7.85339 18.741 8.22759C20.0624 8.7279 21.002 10.0052 21.002 11.502C21.002 13.2653 19.698 14.724 18.0017 14.9665C18.0017 16.6234 16.6588 18.002 15.002 18.002',
  d3: 'M12 15L14.5 12.5',
  d4: 'M12 13L9.5 10.5',
  d5: 'M10 22H14',
  d6: 'M9 18C7.34315 18 6 16.6569 6 15L6.00021 14.9646C4.30396 14.7221 3 13.2633 3 11.5C3 10.0033 3.93951 8.72595 5.26097 8.22564C5.09327 7.85144 5 7.43661 5 7C5 5.34315 6.34315 4 8 4C8.39025 4 8.76309 4.07451 9.10508 4.21009C9.45179 2.93647 10.6165 2 12 2C13.3835 2 14.5482 2.93647 14.8949 4.21009C15.2369 4.07452 15.6098 4 16 4C17.6569 4 19 5.34315 19 7C19 7.43661 18.9067 7.85143 18.739 8.22564C20.0605 8.72595 21 10.0033 21 11.5C21 13.2633 19.696 14.7221 17.9998 14.9646L18 15C18 16.6569 16.6569 18 15 18H9Z',
  d7: 'M12.002 1.25195C10.5394 1.25195 9.27374 2.08871 8.6553 3.3088C8.44284 3.27142 8.22448 3.25195 8.00195 3.25195C5.93089 3.25195 4.25195 4.93089 4.25195 7.00195C4.25195 7.28918 4.28438 7.5694 4.34587 7.8389C3.0934 8.57764 2.25195 9.94084 2.25195 11.502C2.25195 13.4327 3.53886 15.0618 5.30187 15.58C5.59363 17.3577 7.13018 18.752 9.00195 18.752H11.25V13.3107L8.96967 11.0303C8.67678 10.7374 8.67678 10.2626 8.96967 9.96967C9.26256 9.67678 9.73744 9.67678 10.0303 9.96967L11.25 11.1893V9C11.25 8.58579 11.5858 8.25 12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V13.1893L13.9697 11.9697C14.2626 11.6768 14.7374 11.6768 15.0303 11.9697C15.3232 12.2626 15.3232 12.7374 15.0303 13.0303L12.75 15.3107V18.752H15.002C16.8738 18.752 18.4101 17.3577 18.7018 15.58C20.4649 15.062 21.752 13.4328 21.752 11.502C21.752 9.94084 20.9105 8.57764 19.658 7.8389C19.7195 7.5694 19.752 7.28918 19.752 7.00195C19.752 4.93089 18.073 3.25195 16.002 3.25195C15.7794 3.25195 15.5611 3.27142 15.3486 3.3088C14.7302 2.08871 13.4645 1.25195 12.002 1.25195Z',
  d8: 'M11.25 18.752V21.25H10C9.58579 21.25 9.25 21.5858 9.25 22C9.25 22.4142 9.58579 22.75 10 22.75H14C14.4142 22.75 14.75 22.4142 14.75 22C14.75 21.5858 14.4142 21.25 14 21.25H12.75V18.752H11.25Z',
  d9: 'M8.6553 3.3088C9.27374 2.08871 10.5394 1.25195 12.002 1.25195C13.4645 1.25195 14.7302 2.08871 15.3486 3.3088C15.5611 3.27142 15.7794 3.25195 16.002 3.25195C18.073 3.25195 19.752 4.93089 19.752 7.00195C19.752 7.28918 19.7195 7.5694 19.658 7.8389C20.9105 8.57764 21.752 9.94084 21.752 11.502C21.752 13.4328 20.4649 15.062 18.7018 15.58C18.4101 17.3577 16.8738 18.752 15.002 18.752H9.00195C7.13018 18.752 5.59363 17.3577 5.30187 15.58C3.53886 15.0618 2.25195 13.4327 2.25195 11.502C2.25195 9.94084 3.0934 8.57764 4.34587 7.8389C4.28438 7.5694 4.25195 7.28918 4.25195 7.00195C4.25195 4.93089 5.93089 3.25195 8.00195 3.25195C8.22448 3.25195 8.44284 3.27142 8.6553 3.3088Z',
  d10: 'M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V13.1893L13.9697 11.9697C14.2626 11.6768 14.7374 11.6768 15.0303 11.9697C15.3232 12.2626 15.3232 12.7374 15.0303 13.0303L12.75 15.3107V21.25H14C14.4142 21.25 14.75 21.5858 14.75 22C14.75 22.4142 14.4142 22.75 14 22.75H10C9.58579 22.75 9.25 22.4142 9.25 22C9.25 21.5858 9.58579 21.25 10 21.25H11.25V13.3107L8.96967 11.0303C8.67678 10.7374 8.67678 10.2626 8.96967 9.96967C9.26256 9.67678 9.73744 9.67678 10.0303 9.96967L11.25 11.1893V9C11.25 8.58579 11.5858 8.25 12 8.25Z',
  d11: 'M10 22H12M12 22H14M12 22V15M12 15L14.5 12.5M12 15V13M12 13V9M12 13L9.5 10.5',
  d12: 'M12.002 1.25195C10.5394 1.25195 9.27374 2.08871 8.6553 3.3088C8.44284 3.27142 8.22448 3.25195 8.00195 3.25195C5.93089 3.25195 4.25195 4.93089 4.25195 7.00195C4.25195 7.28918 4.28438 7.5694 4.34587 7.8389C3.0934 8.57764 2.25195 9.94084 2.25195 11.502C2.25195 13.4327 3.53886 15.0618 5.30187 15.58C5.59363 17.3577 7.13018 18.752 9.00195 18.752H11.2501V13.3107L8.43945 10.5L9.50011 9.43934L11.2501 11.1893V8.25H12.7501V13.1893L14.5001 11.4393L15.5608 12.5L12.7501 15.3107V18.752H15.002C16.8738 18.752 18.4101 17.3577 18.7018 15.58C20.4649 15.062 21.752 13.4328 21.752 11.502C21.752 9.94084 20.9105 8.57764 19.658 7.8389C19.7195 7.5694 19.752 7.28918 19.752 7.00195C19.752 4.93089 18.073 3.25195 16.002 3.25195C15.7794 3.25195 15.5611 3.27142 15.3486 3.3088C14.7302 2.08871 13.4645 1.25195 12.002 1.25195Z',
  d13: 'M11.2501 18.752V21.25H9.25012V22.75H14.7501V21.25H12.7501V18.752H11.2501Z',
} as const;

export const IconTree06StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tree-06-stroke-rounded IconTree06StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTree06DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tree-06-duotone-rounded IconTree06DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconTree06TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tree-06-twotone-rounded IconTree06TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconTree06SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tree-06-solid-rounded IconTree06SolidRounded"
    >
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

export const IconTree06BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tree-06-bulk-rounded IconTree06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTree06StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tree-06-stroke-sharp IconTree06StrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconTree06SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tree-06-solid-sharp IconTree06SolidSharp"
    >
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

export const iconPackOfTree06: TheIconSelfPack = {
  name: 'Tree06',
  StrokeRounded: IconTree06StrokeRounded,
  DuotoneRounded: IconTree06DuotoneRounded,
  TwotoneRounded: IconTree06TwotoneRounded,
  SolidRounded: IconTree06SolidRounded,
  BulkRounded: IconTree06BulkRounded,
  StrokeSharp: IconTree06StrokeSharp,
  SolidSharp: IconTree06SolidSharp,
};