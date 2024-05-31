import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5',
  d2: 'M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5',
  d3: 'M20.5 17C19.1193 17 18 18.1193 18 19.5C18 20.8807 19.1193 22 20.5 22',
  d4: 'M8 7.37354C9.14883 6.50484 10.5209 6 11.9946 6C13.4729 6 14.849 6.50803 16 7.38177M14.1743 9.71791C13.5182 9.33763 12.7779 9.12368 11.9946 9.12368C11.2152 9.12368 10.4784 9.33549 9.82477 9.71219M12 12H12.0064',
  d5: 'M12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V16.9286H20.5V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2Z',
  d6: 'M11.4436 1.25H12.5564H12.5564H12.5564C14.3942 1.24999 15.8498 1.24997 16.989 1.40314C18.1614 1.56076 19.1104 1.89288 19.8588 2.64124C20.6071 3.38961 20.9392 4.33856 21.0969 5.51098C21.25 6.65018 21.25 8.10585 21.25 9.94359V17C21.25 17.082 21.2368 17.1609 21.2125 17.2348C21.1069 17.6738 20.7117 18 20.2402 18C19.4118 18 18.7402 18.6716 18.7402 19.5C18.7402 20.3284 19.4118 21 20.2402 21C20.7925 21 21.2402 21.4477 21.2402 22C21.2402 22.5339 20.8219 22.97 20.2951 22.9985C20.2811 22.9993 20.267 22.9997 20.2529 22.9999L20.2402 23H20.24H6.2099C4.2832 23 2.74609 21.4192 2.74609 19.5C2.74609 19.4439 2.74741 19.3882 2.75 19.3327V9.94357C2.74998 8.10582 2.74997 6.65019 2.90314 5.51098C3.06076 4.33856 3.39288 3.38961 4.14124 2.64124C4.88961 1.89288 5.83856 1.56076 7.01098 1.40314C8.15018 1.24997 9.60582 1.24999 11.4436 1.25H11.4436H11.4436ZM6.2099 18H17.0771C16.8611 18.4546 16.7402 18.9632 16.7402 19.5C16.7402 20.0368 16.8611 20.5454 17.0771 21H6.2099C5.41516 21 4.74609 20.3422 4.74609 19.5C4.74609 18.6578 5.41516 18 6.2099 18ZM11.9946 5.25C10.3442 5.25 8.81564 5.81654 7.54769 6.77532C7.2173 7.02515 7.15199 7.49551 7.40182 7.8259C7.65164 8.15629 8.12201 8.2216 8.4524 7.97177C9.48211 7.19314 10.6976 6.75 11.9946 6.75C13.2957 6.75 14.5148 7.19593 15.5466 7.97916C15.8765 8.2296 16.347 8.16517 16.5974 7.83524C16.8479 7.50532 16.7834 7.03483 16.4535 6.78439C15.1832 5.82013 13.6502 5.25 11.9946 5.25ZM11.9946 8.37368C11.0763 8.37368 10.2112 8.62386 9.45032 9.06238C9.09144 9.26921 8.96817 9.72781 9.175 10.0867C9.38183 10.4456 9.84043 10.5688 10.1993 10.362C10.7457 10.0471 11.3541 9.87368 11.9946 9.87368C12.6383 9.87368 13.2497 10.0489 13.7982 10.3668C14.1566 10.5745 14.6155 10.4524 14.8232 10.094C15.0309 9.73564 14.9088 9.27674 14.5504 9.06903C13.7867 8.6264 12.9176 8.37368 11.9946 8.37368ZM12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75H12.0064C12.4206 12.75 12.7564 12.4142 12.7564 12C12.7564 11.5858 12.4206 11.25 12.0064 11.25H12Z',
  d7: 'M12.5564 1.25H11.4436H11.4436C9.60583 1.24999 8.15019 1.24997 7.01098 1.40314C5.83856 1.56076 4.88961 1.89288 4.14124 2.64124C3.39288 3.38961 3.06076 4.33856 2.90314 5.51098C2.74997 6.65019 2.74998 8.10582 2.75 9.94357V19.3327C2.74741 19.3882 2.74609 19.4439 2.74609 19.5C2.74609 21.4192 4.2832 23 6.2099 23H20.24C20.2401 23 20.2401 23 20.2402 23C20.2445 23 20.2487 23 20.2529 22.9999C20.267 22.9997 20.2811 22.9993 20.2951 22.9985C20.8219 22.97 21.2402 22.5339 21.2402 22C21.2402 21.4477 20.7925 21 20.2402 21C19.4118 21 18.7402 20.3284 18.7402 19.5C18.7402 18.6716 19.4118 18 20.2402 18C20.7117 18 21.1069 17.6738 21.2125 17.2348C21.2368 17.1609 21.25 17.082 21.25 17V9.94359C21.25 8.10585 21.25 6.65018 21.0969 5.51098C20.9392 4.33856 20.6071 3.38961 19.8588 2.64124C19.1104 1.89288 18.1614 1.56076 16.989 1.40314C15.8498 1.24997 14.3942 1.24999 12.5564 1.25H12.5564ZM17.0771 18H6.2099C5.41516 18 4.74609 18.6578 4.74609 19.5C4.74609 20.3422 5.41516 21 6.2099 21H17.0771C16.8611 20.5454 16.7402 20.0368 16.7402 19.5C16.7402 18.9632 16.8611 18.4546 17.0771 18Z',
  d8: 'M7.54769 6.77532C8.81564 5.81654 10.3442 5.25 11.9946 5.25C13.6502 5.25 15.1832 5.82013 16.4535 6.78439C16.7834 7.03483 16.8479 7.50532 16.5974 7.83524C16.347 8.16517 15.8765 8.2296 15.5466 7.97916C14.5148 7.19593 13.2957 6.75 11.9946 6.75C10.6976 6.75 9.48211 7.19314 8.4524 7.97177C8.12201 8.2216 7.65164 8.15629 7.40182 7.8259C7.15199 7.49551 7.2173 7.02514 7.54769 6.77532ZM9.45032 9.06238C10.2112 8.62386 11.0763 8.37368 11.9946 8.37368C12.9176 8.37368 13.7867 8.6264 14.5504 9.06903C14.9088 9.27674 15.0309 9.73564 14.8232 10.094C14.6155 10.4524 14.1566 10.5745 13.7982 10.3668C13.2497 10.0489 12.6383 9.87368 11.9946 9.87368C11.3541 9.87368 10.7457 10.0471 10.1993 10.362C9.84043 10.5688 9.38183 10.4456 9.175 10.0867C8.96817 9.72781 9.09144 9.26921 9.45032 9.06238ZM11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H12.0064C12.4206 11.25 12.7564 11.5858 12.7564 12C12.7564 12.4142 12.4206 12.75 12.0064 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12Z',
  d9: 'M18.4908 21.9954H7.51721C5.12023 22.0709 3.80939 21.3086 3.51696 19.1347M18.4908 21.9954H20.4712M18.4908 21.9954V15.9894M18.4908 15.9894H20.4961V1.99951L6.39847 1.99965C4.48562 2.21335 3.34561 3.29053 3.51694 6.15229L3.51699 16.4341C3.48409 17.199 3.51711 18.2664 3.51696 19.1347M18.4908 15.9894L7.48597 15.9783C4.58411 15.858 3.59526 17.2178 3.51696 19.1347',
  d10: 'M7.96875 7.33948C8.97468 6.67126 10.5757 5.88524 11.9903 5.9905C13.3956 5.9905 14.9936 6.66524 16.0027 7.33948M14.1721 9.72307C13.6946 9.43435 12.817 9.12265 11.9903 9.12265C11.2366 9.12265 10.3576 9.3973 9.82088 9.72307',
  d11: 'M12 12.0029L12.0087 12.0005',
  d12: 'M6.5 1.25C4.429 1.25 2.75011 2.92882 2.75 4.99979L2.74609 18.9998C2.74609 21.0709 4.51194 22.75 6.69022 22.75H21.2474V20.875H19.5105V17.125H21.2474L21.2501 1.25H6.5ZM6.69081 17.125H17.539V20.875H6.69081C5.60176 20.875 4.7189 20.0354 4.71875 19V18.9987C4.71951 17.9637 5.60214 17.125 6.69081 17.125ZM11.9938 5.25C10.3434 5.25 8.81483 5.81654 7.54688 6.77532L8.45159 7.97177C9.4813 7.19314 10.6968 6.75 11.9938 6.75C13.2949 6.75 14.514 7.19593 15.5458 7.97916L16.4527 6.78439C15.1824 5.82013 13.6494 5.25 11.9938 5.25ZM11.9938 8.37368C11.0755 8.37368 10.2104 8.62386 9.4495 9.06238L10.1985 10.362C10.7449 10.0471 11.3533 9.87368 11.9938 9.87368C12.6375 9.87368 13.2489 10.0489 13.7974 10.3668L14.5496 9.06903C13.7859 8.6264 12.9168 8.37368 11.9938 8.37368ZM11.9992 11.25C11.585 11.25 11.2492 11.5858 11.2492 12C11.2492 12.4142 11.585 12.75 11.9992 12.75H12.0056C12.4198 12.75 12.7556 12.4142 12.7556 12C12.7556 11.5858 12.4198 11.25 12.0056 11.25H11.9992Z',
} as const;

export const IconOnlineLearning02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-02-stroke-rounded IconOnlineLearning02StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOnlineLearning02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-02-duotone-rounded IconOnlineLearning02DuotoneRounded"
    >
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOnlineLearning02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-02-twotone-rounded IconOnlineLearning02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOnlineLearning02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-02-solid-rounded IconOnlineLearning02SolidRounded"
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

export const IconOnlineLearning02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-02-bulk-rounded IconOnlineLearning02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconOnlineLearning02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-02-stroke-sharp IconOnlineLearning02StrokeSharp"
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOnlineLearning02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-02-solid-sharp IconOnlineLearning02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfOnlineLearning02: TheIconSelfPack = {
  name: 'OnlineLearning02',
  StrokeRounded: IconOnlineLearning02StrokeRounded,
  DuotoneRounded: IconOnlineLearning02DuotoneRounded,
  TwotoneRounded: IconOnlineLearning02TwotoneRounded,
  SolidRounded: IconOnlineLearning02SolidRounded,
  BulkRounded: IconOnlineLearning02BulkRounded,
  StrokeSharp: IconOnlineLearning02StrokeSharp,
  SolidSharp: IconOnlineLearning02SolidSharp,
};