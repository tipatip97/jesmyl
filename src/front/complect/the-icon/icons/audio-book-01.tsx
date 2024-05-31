import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5',
  d2: 'M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5',
  d3: 'M20.5 17C19.1193 17 18 18.1193 18 19.5C18 20.8807 19.1193 22 20.5 22',
  d4: 'M14.9609 9.83839C14.8347 10.3756 14.2381 10.7552 13.0449 11.5144C11.8914 12.2484 11.3147 12.6153 10.8499 12.4678C10.6578 12.4068 10.4827 12.291 10.3415 12.1315C10 11.7456 10 10.997 10 9.5C10 8.00296 10 7.25444 10.3415 6.86853C10.4827 6.70898 10.6578 6.59315 10.8499 6.53217C11.3147 6.38466 11.8914 6.75163 13.0449 7.48557C14.2381 8.24479 14.8347 8.6244 14.9609 9.16161C15.013 9.38335 15.013 9.61665 14.9609 9.83839Z',
  d5: 'M12.5019 2H11.5019C7.73064 2 5.84502 2 4.67345 3.17157C3.50187 4.34315 3.50187 6.22876 3.50187 10V18.8782C3.45961 19.1072 3.46637 19.3225 3.50187 19.5V18.8782C3.65804 18.0323 4.4835 17 7.00187 17C10.2019 17 17.3352 16.9524 20.5019 16.9286V10C20.5019 6.22876 20.5019 4.34315 19.3303 3.17157C18.1587 2 16.2731 2 12.5019 2ZM13.0449 11.5144C14.2381 10.7552 14.8347 10.3756 14.9609 9.83839C15.013 9.61665 15.013 9.38335 14.9609 9.16161C14.8347 8.6244 14.2381 8.24479 13.0449 7.48557C11.8914 6.75163 11.3147 6.38466 10.8499 6.53217C10.6578 6.59315 10.4827 6.70898 10.3415 6.86853C10 7.25444 10 8.00296 10 9.5C10 10.997 10 11.7456 10.3415 12.1315C10.4827 12.291 10.6578 12.4068 10.8499 12.4678C11.3147 12.6153 11.8914 12.2484 13.0449 11.5144Z',
  d6: 'M11.4436 1.25H12.5564H12.5564H12.5564C14.3942 1.24999 15.8498 1.24997 16.989 1.40314C18.1614 1.56076 19.1104 1.89288 19.8588 2.64124C20.6071 3.38961 20.9392 4.33856 21.0969 5.51098C21.25 6.65018 21.25 8.10585 21.25 9.94359V17C21.25 17.082 21.2368 17.1609 21.2125 17.2348C21.1069 17.6738 20.7117 18 20.2402 18C19.4118 18 18.7402 18.6716 18.7402 19.5C18.7402 20.3284 19.4118 21 20.2402 21C20.7925 21 21.2402 21.4477 21.2402 22C21.2402 22.5339 20.8219 22.97 20.2951 22.9985C20.2811 22.9993 20.267 22.9997 20.2529 22.9999L20.2402 23H20.24H6.2099C4.2832 23 2.74609 21.4192 2.74609 19.5C2.74609 19.4439 2.74741 19.3882 2.75 19.3327V9.94357C2.74998 8.10582 2.74997 6.65019 2.90314 5.51098C3.06076 4.33856 3.39288 3.38961 4.14124 2.64124C4.88961 1.89288 5.83856 1.56076 7.01098 1.40314C8.15018 1.24997 9.60582 1.24999 11.4436 1.25H11.4436H11.4436ZM6.2099 18H17.0771C16.8611 18.4546 16.7402 18.9632 16.7402 19.5C16.7402 20.0368 16.8611 20.5454 17.0771 21H6.2099C5.41516 21 4.74609 20.3422 4.74609 19.5C4.74609 18.6578 5.41516 18 6.2099 18ZM13.2844 7.04531L13.3409 7.08124C13.914 7.44594 14.3823 7.7439 14.7196 8.01985C15.0662 8.30335 15.3473 8.62012 15.4477 9.04723C15.5174 9.3442 15.5174 9.65578 15.4477 9.95275C15.3473 10.3799 15.0662 10.6966 14.7196 10.9801C14.3823 11.2561 13.9141 11.554 13.3409 11.9187L13.3409 11.9187L13.2844 11.9547C12.7323 12.306 12.2785 12.5948 11.9042 12.7731C11.526 12.9532 11.1175 13.0773 10.6987 12.9444C10.4154 12.8545 10.1646 12.6861 9.96708 12.4628C9.68821 12.1477 9.59047 11.7305 9.54522 11.2827C9.49999 10.835 9.49999 10.2529 9.5 9.52885V9.52883V9.47114V9.47112C9.49999 8.74708 9.49999 8.16502 9.54522 7.71732C9.59047 7.26952 9.68821 6.85229 9.96708 6.53716C10.1646 6.31393 10.4154 6.14549 10.6987 6.05558C11.1175 5.92265 11.526 6.04675 11.9042 6.22692C12.2785 6.40521 12.7323 6.69398 13.2844 7.04531Z',
  d7: 'M12.5564 1.25H11.4436H11.4436C9.60583 1.24999 8.15019 1.24997 7.01098 1.40314C5.83856 1.56076 4.88961 1.89288 4.14124 2.64124C3.39288 3.38961 3.06076 4.33856 2.90314 5.51098C2.74997 6.65019 2.74998 8.10582 2.75 9.94357V19.3327C2.74741 19.3882 2.74609 19.4439 2.74609 19.5C2.74609 21.4192 4.2832 23 6.2099 23H20.24C20.2401 23 20.2401 23 20.2402 23C20.2445 23 20.2487 23 20.2529 22.9999C20.267 22.9997 20.2811 22.9993 20.2951 22.9985C20.8219 22.97 21.2402 22.5339 21.2402 22C21.2402 21.4477 20.7925 21 20.2402 21C19.4118 21 18.7402 20.3284 18.7402 19.5C18.7402 18.6716 19.4118 18 20.2402 18C20.7117 18 21.1069 17.6738 21.2125 17.2348C21.2368 17.1609 21.25 17.082 21.25 17V9.94359C21.25 8.10585 21.25 6.65018 21.0969 5.51098C20.9392 4.33856 20.6071 3.38961 19.8588 2.64124C19.1104 1.89288 18.1614 1.56076 16.989 1.40314C15.8498 1.24997 14.3942 1.24999 12.5564 1.25H12.5564ZM17.0771 18H6.2099C5.41516 18 4.74609 18.6578 4.74609 19.5C4.74609 20.3422 5.41516 21 6.2099 21H17.0771C16.8611 20.5454 16.7402 20.0368 16.7402 19.5C16.7402 18.9632 16.8611 18.4546 17.0771 18Z',
  d8: 'M13.3409 7.08136L13.2844 7.04543C12.7323 6.69411 12.2785 6.40533 11.9042 6.22704C11.526 6.04688 11.1175 5.92277 10.6987 6.05571C10.4154 6.14561 10.1646 6.31405 9.96708 6.53728C9.68821 6.85241 9.59047 7.26964 9.54522 7.71744C9.49999 8.16515 9.49999 8.74721 9.5 9.47126V9.52895C9.49999 10.253 9.49999 10.8351 9.54522 11.2828C9.59047 11.7306 9.68821 12.1478 9.96708 12.4629C10.1646 12.6862 10.4154 12.8546 10.6987 12.9445C11.1175 13.0775 11.526 12.9533 11.9042 12.7732C12.2785 12.5949 12.7323 12.3061 13.2844 11.9548L13.3409 11.9189C13.914 11.5542 14.3823 11.2562 14.7196 10.9803C15.0662 10.6968 15.3473 10.38 15.4477 9.95287C15.5174 9.65591 15.5174 9.34432 15.4477 9.04735C15.3473 8.62024 15.0662 8.30347 14.7196 8.01997C14.3823 7.74402 13.914 7.44606 13.3409 7.08136Z',
  d9: 'M14.9813 8.9939L9.98828 5.99658V11.9912L14.9813 8.9939Z',
  d10: 'M18.4669 21.9949H7.49079C5.09326 22.0704 3.78212 21.3083 3.48962 19.1349M18.4669 21.9949H20.4478M18.4669 21.9949V15.9904M18.4669 15.9904H20.4727V2.00391L6.37179 2.00404C4.45851 2.21769 3.31823 3.29461 3.4896 6.15567L3.48965 16.435C3.45674 17.1996 3.48977 18.2668 3.48962 19.1349M18.4669 15.9904L7.45954 15.9792C4.55702 15.859 3.56794 17.2185 3.48962 19.1349',
  d11: 'M6.5 1.25C4.429 1.25 2.75011 2.92882 2.75 4.99979L2.74609 18.9998C2.74609 21.0709 4.51194 22.75 6.69022 22.75H21.2474V20.875H19.5105V17.125H21.2474L21.2501 1.25H6.5ZM6.69081 17.125H17.539V20.875H6.69081C5.60176 20.875 4.7189 20.0354 4.71875 19V18.9987C4.71951 17.9637 5.60214 17.125 6.69081 17.125ZM10 5.5L16 9L10 12.5V5.5Z',
} as const;

export const IconAudioBook01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-01-stroke-rounded IconAudioBook01StrokeRounded"
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

export const IconAudioBook01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-01-duotone-rounded IconAudioBook01DuotoneRounded"
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

export const IconAudioBook01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-01-twotone-rounded IconAudioBook01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAudioBook01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-01-solid-rounded IconAudioBook01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAudioBook01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-01-bulk-rounded IconAudioBook01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAudioBook01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-01-stroke-sharp IconAudioBook01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAudioBook01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-01-solid-sharp IconAudioBook01SolidSharp"
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

export const iconPackOfAudioBook01: TheIconSelfPack = {
  name: 'AudioBook01',
  StrokeRounded: IconAudioBook01StrokeRounded,
  DuotoneRounded: IconAudioBook01DuotoneRounded,
  TwotoneRounded: IconAudioBook01TwotoneRounded,
  SolidRounded: IconAudioBook01SolidRounded,
  BulkRounded: IconAudioBook01BulkRounded,
  StrokeSharp: IconAudioBook01StrokeSharp,
  SolidSharp: IconAudioBook01SolidSharp,
};