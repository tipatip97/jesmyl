import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 11L22 12C22 6.47715 17.5228 2 12 2C7.89936 2 4.3752 4.46819 2.83209 8M4 13L2 12C2 17.5228 6.47715 22 12 22C16.1006 22 19.6248 19.5318 21.1679 16',
  d2: 'M12 11.5H12.009',
  d3: 'M12 7C14.4353 7 16.5 9.01649 16.5 11.4629C16.5 13.9482 14.4017 15.6924 12.4635 16.8783C12.3223 16.9581 12.1625 17 12 17C11.8375 17 11.6777 16.9581 11.5365 16.8783C9.60195 15.6808 7.5 13.9568 7.5 11.4629C7.5 9.01649 9.56472 7 12 7Z',
  d4: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.5 11.4629C16.5 9.01649 14.4353 7 12 7C9.56472 7 7.5 9.01649 7.5 11.4629C7.5 13.9568 9.60195 15.6808 11.5365 16.8783C11.6777 16.9581 11.8375 17 12 17C12.1625 17 12.3223 16.9581 12.4635 16.8783C14.4017 15.6924 16.5 13.9482 16.5 11.4629Z',
  d5: 'M12 3C8.31098 3 5.13816 5.21965 3.74844 8.40037C3.52732 8.90646 2.9378 9.13747 2.43172 8.91635C1.92563 8.69523 1.69462 8.10572 1.91573 7.59963C3.61225 3.71673 7.48774 1 12 1C18.0751 1 23 5.92487 23 12C23 12.3466 22.8205 12.6684 22.5257 12.8507C22.2309 13.0329 21.8628 13.0494 21.5528 12.8944L19.5528 11.8944C19.0882 11.6621 18.8834 11.1169 19.0663 10.6419C19.0793 10.608 19.0858 10.591 19.103 10.5646C19.1201 10.5382 19.1382 10.5201 19.1744 10.4839L20.2685 9.38983C20.398 9.26038 20.4627 9.19566 20.4812 9.10875C20.4997 9.02184 20.4683 8.94011 20.4056 8.77665C19.1092 5.39824 15.8347 3 12 3Z',
  d6: 'M1.47427 11.1493C1.76909 10.9671 2.13723 10.9506 2.44721 11.1056L4.44721 12.1056C4.91185 12.3379 5.11659 12.8831 4.93374 13.3581C4.92069 13.3921 4.91416 13.409 4.89701 13.4354C4.87987 13.4618 4.86177 13.4799 4.82558 13.5161L3.73147 14.6102C3.60202 14.7396 3.5373 14.8043 3.51882 14.8913C3.50034 14.9782 3.5317 15.0599 3.59442 15.2233C4.89078 18.6018 8.16532 21 12 21C15.689 21 18.8618 18.7803 20.2516 15.5996C20.4727 15.0935 21.0622 14.8625 21.5683 15.0836C22.0744 15.3048 22.3054 15.8943 22.0843 16.4004C20.3878 20.2833 16.5123 23 12 23C5.92487 23 1 18.0751 1 12C1 11.6534 1.17945 11.3316 1.47427 11.1493Z',
  d7: 'M12 6.25C9.15979 6.25 6.75 8.59305 6.75 11.4629C6.75 12.9384 7.37638 14.1598 8.2241 15.1457C9.06486 16.1236 10.1491 16.9016 11.1417 17.516L11.1546 17.524L11.1678 17.5315C11.4218 17.6748 11.7086 17.75 12 17.75C12.2914 17.75 12.5782 17.6748 12.8322 17.5315L12.8437 17.525L12.855 17.5181C13.8529 16.9074 14.9376 16.1268 15.7781 15.1459C16.6249 14.1576 17.25 12.9337 17.25 11.4629C17.25 8.59305 14.8402 6.25 12 6.25ZM11.9911 9.5C10.8914 9.5 10 10.3954 10 11.5C10 12.6046 10.8914 13.5 11.9911 13.5H12.0089C13.1086 13.5 14 12.6046 14 11.5C14 10.3954 13.1086 9.5 12.0089 9.5H11.9911Z',
  d8: 'M19.5 10.5L22 12C22 6.47715 17.5228 2 12 2C7.89936 2 4.3752 4.46819 2.83209 8M4.5 13.5L2 12C2 17.5228 6.47715 22 12 22C16.1006 22 19.6248 19.5318 21.1679 16',
  d9: 'M12 11H12.009',
  d10: 'M12 6.99995C9.79086 6.99995 8 8.80888 8 11.0403C8 12.3162 8.5 13.3083 9.5 14.1945C10.2049 14.8191 11.4873 16.159 12 17C12.5386 16.1757 13.7951 14.8191 14.5 14.1945C15.5 13.3083 16 12.3162 16 11.0403C16 8.80888 14.2091 6.99995 12 6.99995Z',
  d11: 'M12.001 3.20455C8.3958 3.20455 5.29508 5.37375 3.93695 8.48218L2.1459 7.69964C3.80385 3.90499 7.59127 1.25 12.001 1.25C17.938 1.25 22.751 6.06294 22.751 12C22.751 12.3521 22.5616 12.677 22.2552 12.8504C21.9488 13.0239 21.5728 13.0192 21.2709 12.838L18.8277 11.3721L19.8333 9.69609L20.6033 10.158C19.7566 6.18473 16.2268 3.20455 12.001 3.20455ZM1.74675 11.1496C2.05313 10.9761 2.42914 10.9809 2.73105 11.162L5.17423 12.6279L4.16863 14.3039L3.3987 13.842C4.24536 17.8153 7.77514 20.7955 12.001 20.7955C15.6062 20.7955 18.7069 18.6262 20.065 15.5178L21.8561 16.3004C20.1981 20.095 16.4107 22.75 12.001 22.75C6.06392 22.75 1.25098 17.9371 1.25098 12C1.25098 11.6479 1.44036 11.323 1.74675 11.1496Z',
  d12: 'M12.002 6.25C9.37152 6.25 7.25195 8.40183 7.25195 11.0404C7.25195 12.5592 7.86638 13.7473 9.00453 14.7559C9.69076 15.364 10.9072 16.6451 11.3616 17.3904C11.4955 17.6102 11.7329 17.7459 11.9902 17.7499C12.2475 17.7539 12.489 17.6257 12.6298 17.4103C13.1207 16.659 14.3266 15.3521 14.9994 14.7559C16.1375 13.7473 16.752 12.5592 16.752 11.0404C16.752 8.40183 14.6324 6.25 12.002 6.25ZM11.993 9C10.8934 9 10.002 9.89543 10.002 11C10.002 12.1046 10.8934 13 11.993 13H12.0109C13.1105 13 14.002 12.1046 14.002 11C14.002 9.89543 13.1105 9 12.0109 9H11.993Z',
};

export const IconLocationUpdate02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-02-stroke-rounded IconLocationUpdate02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLocationUpdate02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-02-duotone-rounded IconLocationUpdate02DuotoneRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconLocationUpdate02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-02-twotone-rounded IconLocationUpdate02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUpdate02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-02-solid-rounded IconLocationUpdate02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconLocationUpdate02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-02-bulk-rounded IconLocationUpdate02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUpdate02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-02-stroke-sharp IconLocationUpdate02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUpdate02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-update-02-solid-sharp IconLocationUpdate02SolidSharp"
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

export const iconPackOfLocationUpdate02: TheIconSelfPack = {
  name: 'LocationUpdate02',
  StrokeRounded: IconLocationUpdate02StrokeRounded,
  DuotoneRounded: IconLocationUpdate02DuotoneRounded,
  TwotoneRounded: IconLocationUpdate02TwotoneRounded,
  SolidRounded: IconLocationUpdate02SolidRounded,
  BulkRounded: IconLocationUpdate02BulkRounded,
  StrokeSharp: IconLocationUpdate02StrokeSharp,
  SolidSharp: IconLocationUpdate02SolidSharp,
};