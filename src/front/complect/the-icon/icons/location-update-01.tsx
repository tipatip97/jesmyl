import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.8083 16.6835C12.5915 16.8865 12.3017 17 12.0001 17C11.6985 17 11.4087 16.8865 11.1919 16.6835C9.20634 14.813 6.54548 12.7235 7.8431 9.68983C8.54471 8.04958 10.2289 7 12.0001 7C13.7713 7 15.4555 8.04958 16.1571 9.68983C17.4531 12.7196 14.7988 14.8194 12.8083 16.6835Z',
  d2: 'M12 11.5H12.009',
  d3: 'M20 11L22 12C22 6.47715 17.5228 2 12 2C7.89936 2 4.3752 4.46819 2.83209 8M4 13L2 12C2 17.5228 6.47715 22 12 22C16.1006 22 19.6248 19.5318 21.1679 16',
  d4: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.0001 17C12.3017 17 12.5915 16.8865 12.8083 16.6835C12.9597 16.5417 13.115 16.3986 13.272 16.2537C15.1797 14.4946 17.3545 12.4892 16.1571 9.68983C15.4555 8.04958 13.7713 7 12.0001 7C10.2289 7 8.54471 8.04958 7.8431 9.68983C6.65055 12.4778 8.80137 14.4684 10.6987 16.2244C10.8659 16.3791 11.0311 16.532 11.1919 16.6835C11.4087 16.8865 11.6985 17 12.0001 17Z',
  d5: 'M12.0005 6.25C9.94589 6.25 7.9801 7.46349 7.15396 9.39487C6.38097 11.202 6.80986 12.7499 7.66124 14.0367C8.34572 15.0712 9.34451 15.9943 10.208 16.7923L10.208 16.7924C10.3705 16.9425 10.5281 17.0882 10.678 17.2294L10.6797 17.2309C11.0378 17.5663 11.5118 17.75 12.0005 17.75C12.4893 17.75 12.9633 17.5663 13.3214 17.2309C13.4636 17.0978 13.6125 16.9606 13.7658 16.8195L13.7659 16.8194L13.7659 16.8194L13.7659 16.8194C14.6381 16.0163 15.6499 15.0846 16.3415 14.037C17.1917 12.749 17.6191 11.1998 16.8471 9.39487C16.021 7.46349 14.0552 6.25 12.0005 6.25ZM11.9922 9.75C11.03 9.75 10.25 10.5335 10.25 11.5C10.25 12.4665 11.03 13.25 11.9922 13.25H12.0078C12.97 13.25 13.75 12.4665 13.75 11.5C13.75 10.5335 12.97 9.75 12.0078 9.75H11.9922Z',
  d6: 'M12 3C8.31098 3 5.13816 5.21965 3.74844 8.40037C3.52732 8.90646 2.9378 9.13747 2.43172 8.91635C1.92563 8.69523 1.69462 8.10572 1.91573 7.59963C3.61225 3.71673 7.48774 1 12 1C18.0751 1 23 5.92487 23 12C23 12.3466 22.8205 12.6684 22.5257 12.8507C22.2309 13.0329 21.8628 13.0494 21.5528 12.8944L19.5528 11.8944C19.0882 11.6621 18.8834 11.1169 19.0663 10.6419L19.0663 10.6418C19.0793 10.6079 19.0858 10.591 19.103 10.5646C19.1201 10.5382 19.1382 10.5201 19.1744 10.4839L20.2685 9.38983C20.398 9.26038 20.4627 9.19566 20.4812 9.10875C20.4997 9.02184 20.4683 8.94011 20.4056 8.77665C19.1092 5.39824 15.8347 3 12 3Z',
  d7: 'M1.47427 11.1493C1.76909 10.9671 2.13723 10.9506 2.44721 11.1056L4.44721 12.1056C4.91185 12.3379 5.11659 12.8831 4.93374 13.3581C4.92069 13.3921 4.91416 13.409 4.89701 13.4354C4.87987 13.4618 4.86177 13.4799 4.82558 13.5161L3.73147 14.6102C3.60202 14.7396 3.5373 14.8043 3.51882 14.8913C3.50034 14.9782 3.5317 15.0599 3.59442 15.2233C4.89078 18.6018 8.16532 21 12 21C15.689 21 18.8618 18.7803 20.2516 15.5996C20.4727 15.0935 21.0622 14.8625 21.5683 15.0836C22.0744 15.3048 22.3054 15.8943 22.0843 16.4004C20.3878 20.2833 16.5123 23 12 23C5.92487 23 1 18.0751 1 12C1 11.6534 1.17945 11.3316 1.47427 11.1493Z',
  d8: 'M12 17C12 17 16.5 15 16.5 11.5C16.5 9.01472 14.4853 7 12 7C9.51472 7 7.5 9.01472 7.5 11.5C7.5 15 12 17 12 17Z',
  d9: 'M19.5 10.5L22 12C22 6.47715 17.5228 2 12 2C7.89936 2 4.3752 4.46819 2.83209 8M4.5 13.5L2 12C2 17.5228 6.47715 22 12 22C16.1006 22 19.6248 19.5318 21.1679 16',
  d10: 'M10.9332 17.2158C11.1581 17.3441 11.3467 17.4421 11.481 17.5088L12.0098 17.75L12.5385 17.5088C12.6728 17.4421 12.8614 17.3441 13.0863 17.2158C13.5344 16.9601 14.1352 16.579 14.7399 16.0782C15.924 15.0975 17.2598 13.5409 17.2598 11.4679C17.2598 8.58613 14.9093 6.25 12.0098 6.25C9.11027 6.25 6.75977 8.58613 6.75977 11.4679C6.75977 13.5409 8.09553 15.0975 9.27963 16.0782C9.88429 16.579 10.4851 16.9601 10.9332 17.2158ZM12.0038 9.5C10.9025 9.5 10.0098 10.3954 10.0098 11.5C10.0098 12.6046 10.9025 13.5 12.0038 13.5H12.0157C13.117 13.5 14.0098 12.6046 14.0098 11.5C14.0098 10.3954 13.117 9.5 12.0157 9.5H12.0038Z',
  d11: 'M12.0088 3.20455C8.40361 3.20455 5.3029 5.37375 3.94476 8.48218L2.15371 7.69964C3.81167 3.90499 7.59908 1.25 12.0088 1.25C17.9459 1.25 22.7588 6.06294 22.7588 12C22.7588 12.3521 22.5694 12.677 22.263 12.8504C21.9566 13.0239 21.5806 13.0192 21.2787 12.838L18.8355 11.3721L19.8411 9.69609L20.6111 10.158C19.7644 6.18473 16.2346 3.20455 12.0088 3.20455ZM1.75456 11.1496C2.06094 10.9761 2.43695 10.9809 2.73886 11.162L5.18205 12.6279L4.17644 14.3039L3.40651 13.842C4.25317 17.8153 7.78295 20.7955 12.0088 20.7955C15.614 20.7955 18.7147 18.6262 20.0728 15.5178L21.8639 16.3004C20.2059 20.095 16.4185 22.75 12.0088 22.75C6.07173 22.75 1.25879 17.9371 1.25879 12C1.25879 11.6479 1.44818 11.323 1.75456 11.1496Z',
} as const;

export const IconLocationUpdate01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-01-stroke-rounded IconLocationUpdate01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLocationUpdate01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-01-duotone-rounded IconLocationUpdate01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconLocationUpdate01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-01-twotone-rounded IconLocationUpdate01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconLocationUpdate01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-01-solid-rounded IconLocationUpdate01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUpdate01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-01-bulk-rounded IconLocationUpdate01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconLocationUpdate01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-01-stroke-sharp IconLocationUpdate01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUpdate01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-01-solid-sharp IconLocationUpdate01SolidSharp"
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

export const iconPackOfLocationUpdate01: TheIconSelfPack = {
  name: 'LocationUpdate01',
  StrokeRounded: IconLocationUpdate01StrokeRounded,
  DuotoneRounded: IconLocationUpdate01DuotoneRounded,
  TwotoneRounded: IconLocationUpdate01TwotoneRounded,
  SolidRounded: IconLocationUpdate01SolidRounded,
  BulkRounded: IconLocationUpdate01BulkRounded,
  StrokeSharp: IconLocationUpdate01StrokeSharp,
  SolidSharp: IconLocationUpdate01SolidSharp,
};