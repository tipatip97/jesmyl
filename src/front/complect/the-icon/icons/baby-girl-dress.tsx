import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.21182 9L4.27882 16.4753C2.45802 19.936 10.0782 21 12 21C13.9218 21 21.542 19.936 19.7212 16.4753L15.7882 9',
  d2: 'M10.1344 12.2209C10.8048 11.8554 11.3899 12.0027 11.7414 12.2373C11.8855 12.3335 11.9576 12.3817 12 12.3817C12.0424 12.3817 12.1145 12.3335 12.2586 12.2373C12.6101 12.0027 13.1952 11.8554 13.8656 12.2209C14.7455 12.7007 14.9446 14.2833 12.9151 15.6185C12.5286 15.8728 12.3353 16 12 16C11.6647 16 11.4714 15.8728 11.0849 15.6185C9.05543 14.2833 9.25452 12.7007 10.1344 12.2209Z',
  d3: 'M6.99975 10.8144C5.00001 11.7912 1.47372 8.63145 2.06625 7.87321L5.5695 3.39027C5.76071 3.14559 6.07218 3 6.40442 3H8.50685C8.75549 3 8.96414 3.16269 9.04048 3.37578C9.42268 4.44252 10.762 5.72296 12 5.72301C13.238 5.72305 14.5774 4.4425 14.9596 3.37578C15.0359 3.16269 15.2446 3 15.4932 3H17.5956C17.9279 3 18.2393 3.14559 18.4305 3.39027L21.9338 7.87321C22.5263 8.63145 19 11.7912 17.0017 10.8144',
  d4: 'M8.50682 3H6.40439C6.07214 3 5.76067 3.14559 5.56947 3.39027L2.06621 7.87321C1.47367 8.63145 4.99997 11.7912 6.99971 10.8144L4 18C10.4 23.6 17.3333 20.3333 20 18L17.0017 10.8144C19 11.7912 22.5263 8.63145 21.9338 7.87321L18.4305 3.39027C18.2393 3.14559 17.9279 3 17.5956 3H15.4932C15.2445 3 15.0359 3.16269 14.9595 3.37578C14.5774 4.4425 13.238 5.72305 12 5.72301C10.762 5.72296 9.42265 4.44252 9.04045 3.37578C8.96411 3.16269 8.75546 3 8.50682 3ZM11.7414 12.2373C11.3899 12.0027 10.8048 11.8554 10.1344 12.2209C9.25452 12.7007 9.05543 14.2833 11.0849 15.6185C11.4714 15.8728 11.6647 16 12 16C12.3353 16 12.5286 15.8728 12.9151 15.6185C14.9446 14.2833 14.7455 12.7007 13.8656 12.2209C13.1952 11.8554 12.6101 12.0027 12.2586 12.2373C12.1145 12.3335 12.0424 12.3817 12 12.3817C11.9576 12.3817 11.8855 12.3335 11.7414 12.2373Z',
  d5: 'M4.97814 2.92845C5.32258 2.48769 5.85957 2.25 6.40402 2.25H8.50645C9.08898 2.25 9.56889 2.62812 9.74613 3.12281C9.88359 3.50647 10.2236 3.9889 10.6826 4.37622C11.1472 4.76825 11.6251 4.97299 11.9996 4.97301C12.3741 4.97302 12.852 4.76829 13.3166 4.37624C13.7756 3.98891 14.1157 3.50646 14.2531 3.12281C14.4304 2.62812 14.9103 2.25 15.4928 2.25H17.5952C18.1397 2.25 18.6767 2.48769 19.0211 2.92845L22.5244 7.4114C22.8069 7.77296 22.7706 8.19013 22.6962 8.45804C22.6197 8.73358 22.4685 8.99715 22.3029 9.22764C21.9663 9.69611 21.4549 10.1864 20.8777 10.6027C20.2989 11.0202 19.6108 11.3945 18.9028 11.5951C18.639 11.6699 18.361 11.7235 18.0782 11.7424L20.3845 16.126C20.6671 16.6631 20.7928 17.2064 20.7365 17.7417C20.6803 18.277 20.4491 18.738 20.1291 19.1222C19.5113 19.8641 18.5157 20.3775 17.5204 20.7401C15.5066 21.4737 13.032 21.75 11.9996 21.75C10.9672 21.75 8.49262 21.4737 6.47883 20.7401C5.48358 20.3775 4.488 19.8641 3.87016 19.1222C3.55019 18.738 3.31899 18.277 3.26273 17.7417C3.20649 17.2064 3.33214 16.6631 3.61472 16.126L5.92111 11.7424C5.63848 11.7234 5.36068 11.6698 5.09708 11.5951C4.3889 11.3945 3.70064 11.0202 3.12179 10.6027C2.54453 10.1864 2.03307 9.69614 1.69644 9.22767C1.53081 8.99717 1.37956 8.7336 1.30303 8.45806C1.22862 8.19014 1.19233 7.77296 1.47488 7.4114L4.97814 2.92845ZM9.76123 11.7762C10.5657 11.3192 11.2679 11.5034 11.6897 11.7967C11.8626 11.9169 11.9491 11.9771 12 11.9771C12.0509 11.9771 12.1374 11.9169 12.3103 11.7967C12.7321 11.5034 13.4343 11.3192 14.2388 11.7762C15.2946 12.3758 15.5335 14.3541 13.0981 16.0232C12.6343 16.3411 12.4024 16.5 12 16.5C11.5976 16.5 11.3657 16.3411 10.9019 16.0232C8.46652 14.3541 8.70542 12.3758 9.76123 11.7762Z',
  d6: 'M6.40402 2.25C5.85957 2.25 5.32258 2.48769 4.97814 2.92845L1.47488 7.4114C1.19233 7.77296 1.22862 8.19014 1.30303 8.45806C1.37956 8.7336 1.53081 8.99717 1.69644 9.22767C2.03307 9.69614 2.54453 10.1864 3.12179 10.6027C3.70064 11.0202 4.3889 11.3945 5.09708 11.5951C5.36068 11.6698 5.63848 11.7234 5.92111 11.7424L3.61472 16.126C3.33214 16.6631 3.20649 17.2064 3.26273 17.7417C3.31899 18.277 3.55019 18.738 3.87016 19.1222C4.488 19.8641 5.48358 20.3775 6.47883 20.7401C8.49262 21.4737 10.9672 21.75 11.9996 21.75C13.032 21.75 15.5066 21.4737 17.5204 20.7401C18.5157 20.3775 19.5113 19.8641 20.1291 19.1222C20.4491 18.738 20.6803 18.277 20.7365 17.7417C20.7928 17.2064 20.6671 16.6631 20.3845 16.126L18.0782 11.7424C18.361 11.7235 18.639 11.6699 18.9028 11.5951C19.6108 11.3945 20.2989 11.0202 20.8777 10.6027C21.4549 10.1864 21.9663 9.69611 22.3029 9.22764C22.4685 8.99715 22.6197 8.73358 22.6962 8.45804C22.7706 8.19013 22.8069 7.77296 22.5244 7.4114L19.0211 2.92845C18.6767 2.48769 18.1397 2.25 17.5952 2.25H15.4928C14.9103 2.25 14.4304 2.62812 14.2531 3.12281C14.1157 3.50646 13.7756 3.98891 13.3166 4.37624C12.852 4.76829 12.3741 4.97302 11.9996 4.97301C11.6251 4.97299 11.1472 4.76825 10.6826 4.37622C10.2236 3.9889 9.88359 3.50647 9.74613 3.12281C9.56889 2.62812 9.08898 2.25 8.50645 2.25H6.40402Z',
  d7: 'M11.6897 11.7967C11.2679 11.5034 10.5657 11.3192 9.76123 11.7762C8.70542 12.3758 8.46652 14.3541 10.9019 16.0232C11.3657 16.3411 11.5976 16.5 12 16.5C12.4024 16.5 12.6343 16.3411 13.0981 16.0232C15.5335 14.3541 15.2946 12.3758 14.2388 11.7762C13.4343 11.3192 12.7321 11.5034 12.3103 11.7967C12.1374 11.9169 12.0509 11.9771 12 11.9771C11.9491 11.9771 11.8626 11.9169 11.6897 11.7967Z',
  d8: 'M15.9873 9.48047L19.9873 17.1595C18.3904 19.4548 15.4057 20.9991 11.9873 20.9991C8.56885 20.9991 5.58417 19.4548 3.9873 17.1595L7.98731 9.48047',
  d9: 'M10.1207 12.5724C10.7911 12.2216 11.3762 12.3629 11.7277 12.5881L11.9863 12.7267L12.2449 12.5881C12.5964 12.3629 13.1815 12.2216 13.8519 12.5724C14.7318 13.0329 14.9309 14.5521 12.9014 15.8337C12.5149 16.0778 12.3216 16.1999 11.9863 16.1999C11.651 16.1999 11.4577 16.0778 11.0712 15.8337C9.04175 14.5521 9.24084 13.0329 10.1207 12.5724Z',
  d10: 'M16.8264 11.632L21.9952 8.60398C22.0003 8.60094 22.0016 8.59417 21.9978 8.58957L18 3.00098H15.0072V3.72752C15.0072 5.34022 13.6619 6.64757 12.0024 6.64757C10.3428 6.64757 8.99748 5.34022 8.99748 3.72752V3.00154L6 3.00098L2.00219 8.57599C1.99841 8.58059 1.99966 8.58737 2.00484 8.59041L7.20723 11.6399',
  d11: 'M5.99944 2.25C5.77165 2.25 5.5562 2.35353 5.41387 2.53138L1.41248 7.53139C1.27723 7.7004 1.22159 7.9196 1.25987 8.13265C1.29816 8.34571 1.42663 8.53183 1.61225 8.64318L6.01991 11.2871L3.13631 17.0543L3.37825 17.4165C5.12596 20.0336 8.35476 21.75 12.002 21.75C15.6492 21.75 18.878 20.0336 20.6257 17.4165L20.8676 17.0543L17.9831 11.2853L22.3854 8.64307C22.571 8.53171 22.6994 8.34562 22.7376 8.13262C22.7759 7.91962 22.7203 7.70048 22.5851 7.53149L18.5851 2.53148C18.4428 2.35357 18.2273 2.25 17.9994 2.25H14.2494V3C14.2494 4.24264 13.2421 5.25 11.9994 5.25C10.7568 5.25 9.74944 4.24264 9.74944 3.00001V2.25001L5.99944 2.25ZM11.998 11.7439C11.4848 11.4676 10.7381 11.358 9.94436 11.7842C9.2599 12.1517 8.89669 12.9142 9.02279 13.7372C9.14794 14.554 9.73092 15.366 10.7727 16.041C11.0899 16.2475 11.998 16.5 11.998 16.5C11.998 16.5 12.9062 16.2475 13.2234 16.041C14.2652 15.366 14.8481 14.554 14.9733 13.7372C15.0994 12.9142 14.7362 12.1517 14.0517 11.7842C13.258 11.358 12.5113 11.4676 11.998 11.7439Z',
} as const;

export const IconBabyGirlDressStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-girl-dress-stroke-rounded IconBabyGirlDressStrokeRounded"
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

export const IconBabyGirlDressDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-girl-dress-duotone-rounded IconBabyGirlDressDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
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

export const IconBabyGirlDressTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-girl-dress-twotone-rounded IconBabyGirlDressTwotoneRounded"
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

export const IconBabyGirlDressSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-girl-dress-solid-rounded IconBabyGirlDressSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBabyGirlDressBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-girl-dress-bulk-rounded IconBabyGirlDressBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBabyGirlDressStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-girl-dress-stroke-sharp IconBabyGirlDressStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBabyGirlDressSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-girl-dress-solid-sharp IconBabyGirlDressSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBabyGirlDress: TheIconSelfPack = {
  name: 'BabyGirlDress',
  StrokeRounded: IconBabyGirlDressStrokeRounded,
  DuotoneRounded: IconBabyGirlDressDuotoneRounded,
  TwotoneRounded: IconBabyGirlDressTwotoneRounded,
  SolidRounded: IconBabyGirlDressSolidRounded,
  BulkRounded: IconBabyGirlDressBulkRounded,
  StrokeSharp: IconBabyGirlDressStrokeSharp,
  SolidSharp: IconBabyGirlDressSolidSharp,
};