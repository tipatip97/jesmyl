import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 8.69731C17.485 8.69727 17.4925 8.69726 17.5 8.69726C19.9853 8.69726 22 10.6103 22 12.9702C22 14.8307 20.7478 16.4134 19 17M17.4776 8.69731C17.4924 8.54092 17.5 8.38254 17.5 8.22248C17.5 5.33819 15.0376 3 12 3C9.12324 3 6.76233 5.09718 6.52042 7.76927M17.4776 8.69731C17.3753 9.77451 16.9286 10.7574 16.2428 11.5459M6.52042 7.76927C3.98398 7.99846 2 10.0269 2 12.4954C2 14.0487 2.78555 15.4278 4 16.2939M6.52042 7.76927C6.67826 7.75501 6.83823 7.74771 7 7.74771C8.12582 7.74771 9.16474 8.10103 10.0005 8.69726',
  d2: 'M9.0784 13.5L7.30434 16.1838C7.06684 16.5431 6.94808 16.7227 7.02165 16.8614C7.09522 17 7.30931 17 7.73747 17H9.26253C9.69069 17 9.90478 17 9.97835 17.1386C10.0519 17.2773 9.93316 17.4569 9.69566 17.8162L7.9216 20.5',
  d3: 'M16 18.5L15 20.5',
  d4: 'M13 18.5L12 20.5',
  d5: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d6: 'M9.49241 13.1244C9.83796 13.3528 9.93291 13.8181 9.70449 14.1637L8.16005 16.5001H9.26296C9.27489 16.5001 9.28699 16.5001 9.29922 16.5001C9.4801 16.4999 9.69133 16.4998 9.86444 16.5256C10.0517 16.5535 10.433 16.6446 10.6413 17.0372C10.8483 17.4272 10.7129 17.7928 10.6333 17.9628C10.5591 18.1214 10.4423 18.2977 10.3417 18.4497C10.335 18.4599 10.3283 18.4699 10.3218 18.4799L8.54769 21.1637C8.31928 21.5092 7.85399 21.6042 7.50845 21.3757C7.16291 21.1473 7.06796 20.682 7.29637 20.3365L8.84081 18.0001H7.73791C7.72597 18.0001 7.71388 18.0001 7.70164 18.0001C7.52077 18.0002 7.30954 18.0004 7.13643 17.9746C6.9492 17.9466 6.56791 17.8556 6.35959 17.463L7.02209 17.1114L6.35959 17.463C6.15259 17.0729 6.28794 16.7074 6.36757 16.5373C6.44181 16.3788 6.55852 16.2025 6.65915 16.0505C6.66588 16.0403 6.67254 16.0302 6.67911 16.0203L8.45317 13.3365C8.68159 12.991 9.14687 12.896 9.49241 13.1244ZM7.35426 16.4904C7.35429 16.4903 7.35536 16.4905 7.35737 16.4909C7.35523 16.4906 7.35422 16.4904 7.35426 16.4904ZM7.72443 17.177C7.72439 17.177 7.72478 17.1761 7.7257 17.1741C7.72493 17.176 7.72447 17.177 7.72443 17.177ZM9.64661 18.0098C9.64658 18.0098 9.64551 18.0097 9.6435 18.0093C9.64564 18.0096 9.64664 18.0098 9.64661 18.0098ZM9.27516 17.3261C9.27594 17.3242 9.2764 17.3232 9.27643 17.3231C9.27647 17.3231 9.27608 17.3241 9.27516 17.3261ZM13.3358 18.0793C13.7063 18.2645 13.8565 18.715 13.6713 19.0855L12.6713 21.0855C12.486 21.456 12.0355 21.6061 11.665 21.4209C11.2945 21.2357 11.1444 20.7852 11.3296 20.4147L12.3296 18.4147C12.5149 18.0442 12.9654 17.894 13.3358 18.0793ZM16.3358 18.0793C16.7063 18.2645 16.8565 18.715 16.6713 19.0855L15.6713 21.0855C15.486 21.456 15.0355 21.6061 14.665 21.4209C14.2945 21.2357 14.1444 20.7852 14.3296 20.4147L15.3296 18.4147C15.5149 18.0442 15.9654 17.894 16.3358 18.0793Z',
  d7: 'M9.63042 12.6659C10.0911 12.9704 10.2177 13.5908 9.91319 14.0516L8.62514 16.0001L9.30326 16.0001C9.47905 15.9999 9.70882 15.9997 9.90145 16.0284C10.1123 16.0598 10.5968 16.1697 10.8623 16.67C11.126 17.167 10.9493 17.6279 10.8599 17.8189C10.7773 17.9951 10.6505 18.1866 10.5526 18.3343L8.75639 21.0516C8.45184 21.5123 7.83146 21.6389 7.37074 21.3343C6.91001 21.0298 6.78341 20.4094 7.08796 19.9487L8.37602 18.0001L7.69789 18.0001C7.52211 18.0003 7.29234 18.0006 7.09971 17.9718C6.88882 17.9404 6.40441 17.8306 6.1389 17.3302C5.87517 16.8332 6.05187 16.3723 6.14131 16.1813C6.22381 16.0052 6.35068 15.8137 6.44854 15.6659L8.24477 12.9487C8.54932 12.4879 9.1697 12.3613 9.63042 12.6659Z',
  d8: 'M13.4478 17.6057C13.9418 17.8527 14.142 18.4533 13.895 18.9473L12.895 20.9473C12.648 21.4413 12.0473 21.6415 11.5534 21.3945C11.0594 21.1475 10.8592 20.5469 11.1062 20.0529L12.1062 18.0529C12.3531 17.5589 12.9538 17.3587 13.4478 17.6057Z',
  d9: 'M16.4478 17.6057C16.9418 17.8527 17.142 18.4533 16.895 18.9473L15.895 20.9473C15.648 21.4413 15.0473 21.6415 14.5534 21.3945C14.0594 21.1475 13.8592 20.5469 14.1062 20.0529L15.1062 18.0529C15.3531 17.5589 15.9538 17.3587 16.4478 17.6057Z',
  d10: 'M5.93931 7.21783C5.88991 7.41384 5.8652 7.51184 5.80872 7.5697C5.75224 7.62755 5.65424 7.65476 5.45825 7.70919C3.03106 8.3832 1.25 10.6083 1.25 13.25C1.25 15.5344 2.58209 17.5076 4.51186 18.4353C4.61326 18.484 4.66396 18.5084 4.6722 18.5115C4.85259 18.5794 5.00195 18.424 4.9269 18.2464C4.92347 18.2383 4.88724 18.1701 4.81478 18.0335C4.2076 16.8893 4.64019 15.8519 4.78376 15.5453C4.9146 15.2659 5.09498 14.9943 5.18473 14.8591L6.99433 12.1217C7.75571 10.9699 9.30665 10.6534 10.4585 11.4147C11.4278 12.0555 11.7972 13.268 11.4361 14.3226C11.333 14.6237 11.2815 14.7743 11.3049 14.8624C11.3283 14.9504 11.4458 15.0537 11.6807 15.2601C11.7907 15.3569 11.8978 15.4698 11.9946 15.6039C12.171 15.8483 12.2592 15.9706 12.3299 16.0036C12.4005 16.0366 12.542 16.0264 12.8248 16.0061C13.2573 15.9751 13.7035 16.0562 14.1195 16.2642C14.3267 16.3678 14.4302 16.4196 14.501 16.4196C14.5718 16.4196 14.6755 16.3678 14.883 16.2643C15.5625 15.925 16.3878 15.8984 17.1195 16.2642C17.8525 16.6307 18.3268 17.3088 18.4621 18.0577C18.5416 18.4977 18.5814 18.7177 18.7023 18.7872C18.8232 18.8567 18.9803 18.7996 19.2945 18.6853C21.3103 17.9522 22.75 16.0192 22.75 13.75C22.75 11.2785 21.0422 9.20589 18.7423 8.64786C18.4989 8.5888 18.3772 8.55927 18.3147 8.48828C18.2522 8.4173 18.2385 8.29461 18.2112 8.04924C17.8628 4.92731 15.2149 2.5 12 2.5C9.07671 2.5 6.62272 4.50653 5.93931 7.21783Z',
  d11: 'M9.07875 13.5L7 17H10L7.92195 20.5',
  d12: 'M16.5 17.5L15 20.5',
  d13: 'M13.5 17.5L12 20.5',
  d14: 'M8.21815 13.7285L9.93773 14.7498L8.7562 16.7392H11.7559L8.781 21.7497L7.06128 20.7286L8.24249 18.7392H5.24219L8.21815 13.7285Z',
  d15: 'M14.1055 20.792L15.6055 17.792L17.3943 18.6864L15.8943 21.6864L14.1055 20.792Z',
  d16: 'M12.6055 17.792L11.1055 20.792L12.8943 21.6864L14.3943 18.6864L12.6055 17.792Z',
  d17: 'M5.853 7.36454C3.22664 7.89643 1.25 10.217 1.25 13C1.25 15.0735 2.34756 16.8907 3.99341 17.9023L7.69324 11.6729L11.9922 14.2261L11.3905 15.2392H14.3898L13.5801 16.6029L14.3334 16.9795L14.9334 15.7795L19.4056 18.0156L19.1748 18.4772C21.2531 17.7782 22.75 15.8139 22.75 13.5C22.75 10.8541 20.7927 8.66534 18.2469 8.30273C18.1428 4.94224 15.3858 2.25 12 2.25C8.93585 2.25 6.38731 4.45456 5.853 7.36454Z',
};

export const IconCloudAngledRainZapStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-rain-zap-stroke-rounded IconCloudAngledRainZapStrokeRounded"
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

export const IconCloudAngledRainZapDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-rain-zap-duotone-rounded IconCloudAngledRainZapDuotoneRounded"
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

export const IconCloudAngledRainZapTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-rain-zap-twotone-rounded IconCloudAngledRainZapTwotoneRounded"
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

export const IconCloudAngledRainZapSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-rain-zap-solid-rounded IconCloudAngledRainZapSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconCloudAngledRainZapBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-rain-zap-bulk-rounded IconCloudAngledRainZapBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudAngledRainZapStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-rain-zap-stroke-sharp IconCloudAngledRainZapStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudAngledRainZapSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-rain-zap-solid-sharp IconCloudAngledRainZapSolidSharp"
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
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCloudAngledRainZap: TheIconSelfPack = {
  name: 'CloudAngledRainZap',
  StrokeRounded: IconCloudAngledRainZapStrokeRounded,
  DuotoneRounded: IconCloudAngledRainZapDuotoneRounded,
  TwotoneRounded: IconCloudAngledRainZapTwotoneRounded,
  SolidRounded: IconCloudAngledRainZapSolidRounded,
  BulkRounded: IconCloudAngledRainZapBulkRounded,
  StrokeSharp: IconCloudAngledRainZapStrokeSharp,
  SolidSharp: IconCloudAngledRainZapSolidSharp,
};