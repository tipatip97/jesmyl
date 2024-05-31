import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 15V22M17 15V22',
  d2: 'M12 11C10.4783 11 8.86931 11.2925 7.60803 11.6838C6.6583 11.9784 5.89434 13.322 6.01199 14.4128C6.05558 14.8169 6.36877 15 6.69807 15H17.3019C17.6312 15 17.9444 14.8169 17.988 14.4128C18.1057 13.322 17.3417 11.9784 16.392 11.6838C15.1307 11.2925 13.5217 11 12 11Z',
  d3: 'M7.08364 12L6.71797 8.2874C6.46316 5.70038 6.33575 4.40687 6.88692 3.47939C7.92424 1.73383 10.2405 2.01699 12 2.01699C13.7595 2.01699 16.0758 1.73383 17.1131 3.47939C17.6642 4.40687 17.5368 5.70038 17.282 8.28741L16.9164 12',
  d4: 'M7 18L17 18',
  d5: 'M17.1131 3.47939C17.6642 4.40687 17.5368 5.70038 17.282 8.28741L16.9198 11.9651C12.0556 10.7371 8.33333 11.4534 7.08019 11.9651L6.71797 8.2874C6.46316 5.70038 6.33575 4.40687 6.88692 3.47939C7.92424 1.73383 10.2405 2.01699 12 2.01699C13.7595 2.01699 16.0758 1.73383 17.1131 3.47939Z',
  d6: 'M7.08019 11.9651L6.71797 8.2874C6.46316 5.70038 6.33575 4.40687 6.88692 3.47939C7.92424 1.73383 10.2405 2.01699 12 2.01699C13.7595 2.01699 16.0758 1.73383 17.1131 3.47939C17.6642 4.40687 17.5368 5.70038 17.282 8.28741L16.9198 11.9651',
  d7: 'M7 15V22M17 15V22M7 18H17',
  d8: 'M12 10.25C13.6077 10.25 15.2919 10.5572 16.6142 10.9674C17.3288 11.1891 17.8867 11.7654 18.2392 12.3737C18.5962 12.9897 18.8132 13.7569 18.7337 14.4932C18.691 14.8892 18.5042 15.2252 18.2101 15.4519C17.9299 15.6679 17.5992 15.75 17.302 15.75H12H6.69811C6.40087 15.75 6.07014 15.6679 5.79002 15.4519C5.49593 15.2252 5.30907 14.8892 5.26636 14.4932C5.18694 13.7569 5.40392 12.9897 5.76087 12.3737C6.11338 11.7654 6.67129 11.1891 7.38584 10.9674C8.70822 10.5572 10.3924 10.25 12 10.25Z',
  d9: 'M7.20833 14.25C7.73761 14.25 8.16667 14.6728 8.16667 15.1944V17.0833H15.8333V15.1944C15.8333 14.6728 16.2624 14.25 16.7917 14.25C17.3209 14.25 17.75 14.6728 17.75 15.1944V21.8056C17.75 22.3272 17.3209 22.75 16.7917 22.75C16.2624 22.75 15.8333 22.3272 15.8333 21.8056V18.9722H8.16667V21.8056C8.16667 22.3272 7.73761 22.75 7.20833 22.75C6.67906 22.75 6.25 22.3272 6.25 21.8056V15.1944C6.25 14.6728 6.67906 14.25 7.20833 14.25Z',
  d10: 'M12.0001 9C10.2492 9 8.43975 9.33173 7.01553 9.77358C6.57766 9.90942 6.35873 9.97735 6.24267 9.90585C6.23607 9.90178 6.23212 9.89916 6.22581 9.89466C6.11484 9.81549 6.09541 9.61826 6.05656 9.2238L5.96733 8.31787C5.84351 7.06093 5.74475 6.05831 5.75022 5.25602C5.75581 4.43395 5.86883 3.72454 6.24217 3.09631C6.91829 1.95857 8.00738 1.51924 9.05508 1.35294C9.83395 1.22932 10.6894 1.24559 11.409 1.25927H12.591C13.3106 1.24559 14.166 1.22932 14.9449 1.35294C15.9926 1.51924 17.0817 1.95857 17.7578 3.09631C18.1312 3.72454 18.2442 4.43395 18.2498 5.25602C18.2552 6.0583 18.1565 7.0609 18.0327 8.31782L17.9434 9.22393C17.9046 9.61821 17.8852 9.81536 17.7743 9.89452C17.7679 9.89908 17.7639 9.90172 17.7572 9.90583C17.6412 9.97726 17.4224 9.90936 16.9847 9.77358C15.5605 9.33173 13.751 9 12.0001 9Z',
  d11: 'M6.25 15.6875C6.40084 15.7324 6.55344 15.7518 6.69811 15.7518H8.16667V17.0852H15.8333V15.7518H17.302C17.4466 15.7518 17.5992 15.7324 17.75 15.6875V21.8074C17.75 22.329 17.3209 22.7518 16.7917 22.7518C16.2624 22.7518 15.8333 22.329 15.8333 21.8074V18.9741H8.16667V21.8074C8.16667 22.329 7.73761 22.7518 7.20833 22.7518C6.67906 22.7518 6.25 22.329 6.25 21.8074V15.6875Z',
  d12: 'M6 15H18V14C18 12.3431 16.8487 11 15.4286 11H8.57143C7.15127 11 6 12.3431 6 14V15Z',
  d13: 'M7 11.5L6 2.00001L18 2L17 11.5',
  d14: 'M5.25 14.4999C5.25 12.5414 6.63275 10.7499 8.57143 10.7499H15.4286C17.3672 10.7499 18.75 12.5414 18.75 14.4999V16.2499H5.25V14.4999Z',
  d15: 'M6 15.2501V22.2501H8V19.2501H16V22.2501H18V15.2501H16V17.2501H8V15.2501H6Z',
  d16: 'M6.06699 10.301C6.75723 9.8034 7.60165 9.50024 8.57143 9.50024H15.4286C16.3984 9.50024 17.2428 9.8034 17.933 10.301L18.7459 2.57876C18.7681 2.36735 18.6996 2.15643 18.5574 1.99844C18.4152 1.84045 18.2126 1.75024 18 1.75024L6 1.75025C5.78743 1.75025 5.58483 1.84046 5.44261 1.99845C5.30038 2.15643 5.23187 2.36735 5.25412 2.57876L6.06699 10.301Z',
} as const;

export const IconChair02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-02-stroke-rounded IconChair02StrokeRounded"
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

export const IconChair02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-02-duotone-rounded IconChair02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChair02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-02-twotone-rounded IconChair02TwotoneRounded"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
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

export const IconChair02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-02-solid-rounded IconChair02SolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconChair02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-02-bulk-rounded IconChair02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChair02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-02-stroke-sharp IconChair02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d13} 
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

export const IconChair02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-02-solid-sharp IconChair02SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChair02: TheIconSelfPack = {
  name: 'Chair02',
  StrokeRounded: IconChair02StrokeRounded,
  DuotoneRounded: IconChair02DuotoneRounded,
  TwotoneRounded: IconChair02TwotoneRounded,
  SolidRounded: IconChair02SolidRounded,
  BulkRounded: IconChair02BulkRounded,
  StrokeSharp: IconChair02StrokeSharp,
  SolidSharp: IconChair02SolidSharp,
};