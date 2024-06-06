import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M2 12.9506C8.14512 13.5607 13.5577 8.11477 12.9506 2',
  d3: 'M11.0507 22.0002C10.4406 15.8551 15.8866 10.4424 22.0013 11.0496',
  d4: 'M17 20C17 12.8203 11.1797 7 4 7',
  d5: 'M11.0507 21.9992C10.4406 15.8541 15.8866 10.4415 22.0013 11.0486',
  d6: 'M21.9993 12C21.9993 17.5228 17.5221 22 11.9993 22C6.47642 22 1.99927 17.5228 1.99927 12C1.99927 6.47715 6.47642 2 11.9993 2C17.5221 2 21.9993 6.47715 21.9993 12Z',
  d7: 'M1.99927 12.9506C8.14439 13.5607 13.557 8.11477 12.9499 2M11.05 22.0002C10.4399 15.8551 15.8859 10.4424 22.0006 11.0496M16.9993 20C16.9993 12.8203 11.179 7 3.99927 7',
  d8: 'M14.456 1.52498C14.318 1.4926 14.249 1.47641 14.1871 1.48785C14.0921 1.50543 14.0058 1.57387 13.967 1.66234C13.9417 1.71995 13.9417 1.79423 13.9417 1.9428C14.155 4.2016 13.6272 6.37282 12.5757 8.23465C12.4431 8.46934 12.3768 8.58669 12.3978 8.69505C12.4187 8.80341 12.5231 8.88697 12.732 9.05409C13.5427 9.70288 14.2798 10.4399 14.9286 11.2507C15.0957 11.4596 15.1793 11.564 15.2876 11.585C15.396 11.6059 15.5134 11.5396 15.7481 11.407C17.6101 10.3551 19.7816 9.82709 22.0408 10.0405C22.188 10.0405 22.2616 10.0405 22.3187 10.0156C22.408 9.97687 22.4771 9.88977 22.4944 9.79395C22.5055 9.73264 22.4895 9.6643 22.4575 9.52761C21.5294 5.56938 18.414 2.45358 14.456 1.52498Z',
  d9: 'M13.2867 13.2781C13.4748 13.0904 13.5688 12.9965 13.5751 12.8817C13.5813 12.767 13.5038 12.6705 13.3488 12.4777C12.8028 11.7986 12.1844 11.1801 11.5053 10.6341C11.3124 10.479 11.216 10.4015 11.1012 10.4078C10.9864 10.414 10.8925 10.5081 10.7047 10.6962C8.46815 12.9367 5.31078 14.2599 1.94277 13.9417C1.79424 13.9417 1.71997 13.9417 1.66238 13.967C1.57388 14.0058 1.50542 14.0922 1.48786 14.1872C1.47642 14.249 1.49261 14.318 1.52498 14.456C2.45356 18.4139 5.56926 21.5293 9.52739 22.4574C9.66563 22.4898 9.73475 22.506 9.79669 22.4945C9.89153 22.4769 9.97775 22.4086 10.0166 22.3203C10.0419 22.2626 10.0419 22.1882 10.0419 22.0394C9.72375 18.6717 11.0467 15.5147 13.2867 13.2781Z',
  d10: 'M10.1008 7.39084C10.3471 7.51052 10.4703 7.57036 10.5845 7.53406C10.6987 7.49777 10.76 7.38643 10.8825 7.16377C11.7142 5.65237 12.1265 3.90238 11.9466 2.0899L11.9417 2.04062V1.84386C11.9417 1.55688 11.9417 1.41338 11.8474 1.32456C11.7531 1.23573 11.6151 1.24398 11.3391 1.26049C8.22046 1.44704 5.46001 2.96318 3.61694 5.24977C3.43424 5.47644 3.34289 5.58977 3.34676 5.70144C3.34954 5.78163 3.38965 5.86548 3.45034 5.91796C3.53485 5.99105 3.68704 5.99105 3.99143 5.99105C6.18176 5.99105 8.25461 6.49405 10.1008 7.39084Z',
  d11: 'M1.866 8.37045C1.93035 8.1905 1.96253 8.10053 2.04024 8.04579C2.11795 7.99105 2.21719 7.99105 2.41567 7.99105H3.99143C5.61561 7.99105 7.16444 8.31373 8.57729 8.89847C8.92233 9.04128 9.09485 9.11268 9.12107 9.27879C9.14729 9.4449 9.00636 9.56494 8.7245 9.80502C6.93383 11.3303 4.57564 12.1934 2.08987 11.9466L2.04059 11.9417H1.84386C1.55688 11.9417 1.41339 11.9417 1.32457 11.8474C1.23574 11.7531 1.24399 11.6152 1.26048 11.3394C1.32243 10.3034 1.5311 9.30689 1.866 8.37045Z',
  d12: 'M14.1777 15.2587C14.4178 14.9768 14.5378 14.8358 14.704 14.862C14.8701 14.8882 14.9415 15.0608 15.0843 15.4059C15.6689 16.8186 15.9914 18.3671 15.9914 19.9911V21.5663C15.9914 21.7648 15.9914 21.864 15.9367 21.9417C15.882 22.0194 15.792 22.0516 15.6121 22.116C14.676 22.4508 13.6799 22.6594 12.6443 22.7215C12.3685 22.7381 12.2305 22.7463 12.1362 22.6575C12.0419 22.5687 12.0419 22.4252 12.0419 22.1381V21.9416L12.037 21.8923C11.7903 19.407 12.653 17.0493 14.1777 15.2587Z',
  d13: 'M18.7322 20.3653C18.506 20.5476 18.3929 20.6388 18.2814 20.635C18.201 20.6324 18.1168 20.5921 18.0643 20.5311C17.9914 20.4467 17.9914 20.2948 17.9914 19.9911C17.9914 17.8008 17.4885 15.728 16.5917 13.8819C16.4721 13.6356 16.4123 13.5124 16.4485 13.3982C16.4848 13.2841 16.5961 13.2228 16.8188 13.1003C18.3304 12.2682 20.0808 11.8556 21.8937 12.0356L21.943 12.0405H22.1382C22.4252 12.0405 22.5687 12.0405 22.6575 12.1348C22.7464 12.2291 22.7381 12.367 22.7216 12.643C22.535 15.7617 21.0188 18.5222 18.7322 20.3653Z',
  d14: 'M1.24023 11.9922C1.24023 6.05513 6.05317 1.24219 11.9902 1.24219C17.9273 1.24219 22.7402 6.05513 22.7402 11.9922C22.7402 17.9292 17.9273 22.7422 11.9902 22.7422C6.05317 22.7422 1.24023 17.9292 1.24023 11.9922Z',
  d15: 'M13.9399 1.41855V1.94589C14.1717 4.40066 13.5282 6.75199 12.2885 8.71519C13.425 9.55285 14.4303 10.5582 15.2679 11.6947C17.2313 10.4547 19.5829 9.81094 22.038 10.0428H22.5639C22.6797 10.675 22.7402 11.3265 22.7402 11.9922C22.7402 12.0091 22.7402 12.026 22.7401 12.0428H21.9402L21.891 12.0379C19.883 11.8386 17.9519 12.3661 16.3368 13.3854C17.3921 15.3534 17.9906 17.6029 17.9906 19.9922V20.913C17.3673 21.3331 16.6975 21.6896 15.9906 21.9732V19.9922C15.9906 18.074 15.5406 16.261 14.7403 14.6529C12.8688 16.4982 11.7584 19.1167 12.0342 21.8946L12.0391 21.9439V22.7421C12.0228 22.7422 12.0065 22.7422 11.9902 22.7422C11.324 22.7422 10.6719 22.6816 10.0391 22.5656V22.0417C9.70282 18.4819 11.2003 15.1573 13.6764 12.9066C12.9481 11.9128 12.0706 11.0352 11.0768 10.3068C8.82606 12.7834 5.5012 14.2812 1.94098 13.9448H1.41714C1.30094 13.3116 1.24023 12.659 1.24023 11.9922C1.24023 11.9764 1.24027 11.9606 1.24034 11.9448H2.0388L2.08808 11.9497C4.86637 12.2255 7.48529 11.1149 9.3306 9.24286C7.72233 8.44237 5.90904 7.99219 3.99061 7.99219H2.00906C2.2926 7.28531 2.64906 6.61554 3.06913 5.99219H3.99061C6.3801 5.99219 8.62978 6.59082 10.5978 7.64629C11.6168 6.03138 12.1441 4.10052 11.9448 2.09299L11.9399 2.04371V1.2423C11.9567 1.24223 11.9734 1.24219 11.9902 1.24219C12.656 1.24219 13.3076 1.30271 13.9399 1.41855Z',
  d16: 'M17 20.6709C17 13.1207 10.8793 7 3.3291 7',
  d17: 'M12.3673 1.25616C12.5118 4.2389 11.3096 7.04096 9.3263 9.08656C7.3371 7.85327 5.07813 7.01378 2.65829 6.67697C4.5095 3.43515 7.99957 1.25 12 1.25C12.1229 1.25 12.2454 1.25206 12.3673 1.25616Z',
  d18: 'M13.8745 1.41287C13.9672 4.65149 12.6864 7.68155 10.5812 9.94332C11.8987 10.9305 13.0701 12.1019 14.0572 13.4195C16.3187 11.3141 19.3486 10.0331 22.5871 10.1254C21.8073 5.69076 18.3092 2.19267 13.8745 1.41287Z',
  d19: 'M22.7438 11.6325C19.7612 11.4885 16.9593 12.691 14.9139 14.6745C16.1469 16.6635 16.9862 18.9222 17.3229 21.3418C20.5648 19.4906 22.75 16.0005 22.75 12C22.75 11.877 22.7479 11.7545 22.7438 11.6325Z',
  d20: 'M15.8958 22.0224C15.6535 19.7893 14.9437 17.6964 13.8663 15.8438C12.3732 17.7672 11.5094 20.1847 11.6339 22.7439C11.7554 22.7479 11.8775 22.75 12 22.75C13.374 22.75 14.6879 22.4922 15.8958 22.0224Z',
  d21: 'M10.1267 22.5873C10.039 19.5579 11.1496 16.7217 13.0065 14.5223C12.0252 13.1676 10.8331 11.9755 9.47848 10.9941C7.27902 12.8513 4.44263 13.9622 1.41289 13.8746C2.19282 18.3097 5.69145 21.8079 10.1267 22.5873Z',
  d22: 'M1.25616 12.3674C3.81574 12.4919 6.23363 11.6278 8.15716 10.1342C6.30429 9.0565 4.21115 8.34651 1.97768 8.10414C1.5078 9.31206 1.25 10.6259 1.25 12C1.25 12.123 1.25206 12.2454 1.25616 12.3674Z',
};

export const IconBasketball01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="basketball-01-stroke-rounded IconBasketball01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBasketball01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="basketball-01-duotone-rounded IconBasketball01DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBasketball01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="basketball-01-twotone-rounded IconBasketball01TwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBasketball01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="basketball-01-solid-rounded IconBasketball01SolidRounded"
    >
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBasketball01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="basketball-01-bulk-rounded IconBasketball01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBasketball01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="basketball-01-stroke-sharp IconBasketball01StrokeSharp"
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
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBasketball01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="basketball-01-solid-sharp IconBasketball01SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBasketball01: TheIconSelfPack = {
  name: 'Basketball01',
  StrokeRounded: IconBasketball01StrokeRounded,
  DuotoneRounded: IconBasketball01DuotoneRounded,
  TwotoneRounded: IconBasketball01TwotoneRounded,
  SolidRounded: IconBasketball01SolidRounded,
  BulkRounded: IconBasketball01BulkRounded,
  StrokeSharp: IconBasketball01StrokeSharp,
  SolidSharp: IconBasketball01SolidSharp,
};