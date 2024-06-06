import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.9264 22.2516V20.691C19.9264 20.288 20.0525 19.8966 20.2639 19.5531C21.7583 17.1245 22.2279 14.5196 21.9002 13.505C20.857 11.3418 17.3758 10.4907 15.76 10.2878L16.7966 5.12292C16.9705 4.30387 16.3513 3.47938 15.4135 3.28136C14.4758 3.08334 13.5746 3.58679 13.4007 4.40583L11.3462 14.0815L8.77462 12.4424C8.77462 12.4424 7.47969 11.406 6.44041 12.4424C5.40114 13.4788 6.44041 14.7701 6.44041 14.7701L10.3488 19.7776C10.6003 20.0997 10.7468 20.4908 10.7688 20.8984L10.8401 22.2177',
  d2: 'M9.86652 4.36134C9.86652 4.36134 10.1119 2.14335 9.86652 1.90156M9.86652 1.90156C9.54812 1.58797 7.32887 1.85194 7.32887 1.85194M9.86652 1.90156L6.89759 4.84002M2.10957 7.08754C2.10957 7.08754 1.86414 9.30553 2.10957 9.54732M2.10957 9.54732C2.42796 9.86092 4.64721 9.59694 4.64721 9.59694M2.10957 9.54732L5.07849 6.60886',
  d3: 'M20.998 18.1562C21.7051 16.7534 22.6727 14.0079 21.3206 12.7152C19.5438 11.0165 17.3988 10.4736 15.6974 10.3765L16.744 5.24778C16.9553 4.21521 16.1494 3.25146 15.0748 3.25146C14.3001 3.25146 13.6231 3.76405 13.4275 4.49866L11.335 14.1765L8.78292 12.4391C8.05889 11.831 6.9647 11.9317 6.36899 12.6615C5.87336 13.2686 5.8767 14.1322 6.37701 14.7356L9.65814 18.8539C10.2297 19.5714 10.5156 19.9301 10.6727 20.3489C10.6866 20.3861 10.6998 20.4235 10.7121 20.4612C10.8513 20.8861 10.8513 21.3412 10.8513 22.2515H19.8914V20.7144C19.8914 19.835 20.6154 18.9151 20.998 18.1562Z',
  d4: 'M19.9269 22.2516V20.691C19.9269 20.288 20.053 19.8966 20.2644 19.5531C21.7588 17.1245 22.2284 14.5196 21.9007 13.505C20.8575 11.3418 17.3763 10.4907 15.7605 10.2878L16.7971 5.12292C16.971 4.30387 16.3518 3.47938 15.414 3.28136C14.4763 3.08334 13.5751 3.58679 13.4012 4.40583L11.3467 14.0815L8.77511 12.4424C8.77511 12.4424 7.48018 11.406 6.4409 12.4424C5.40163 13.4788 6.4409 14.7701 6.4409 14.7701L10.3493 19.7776C10.6008 20.0997 10.7473 20.4908 10.7693 20.8984L10.8406 22.2177',
  d5: 'M9.86305 4.36662C9.86305 4.36662 10.1083 2.14705 9.86305 1.90509M9.86305 1.90509C9.54481 1.59127 7.32668 1.85543 7.32668 1.85543M9.86305 1.90509L6.89561 4.84565M2.11 7.09477C2.11 7.09477 1.8647 9.31435 2.11 9.55631M2.11 9.55631C2.42823 9.87013 4.64636 9.60596 4.64636 9.60596M2.11 9.55631L5.07743 6.61575',
  d6: 'M19.9272 22.2491V20.6874C19.9272 20.2841 20.0532 19.8924 20.2645 19.5486C21.7582 17.1183 22.2275 14.5115 21.9 13.4962C20.8573 11.3315 17.3779 10.4798 15.7629 10.2767L16.799 5.10815C16.9728 4.28852 16.3539 3.46344 15.4166 3.26528C14.4793 3.06712 13.5786 3.57093 13.4048 4.39055L11.3513 14.0731L8.78103 12.4329C8.78103 12.4329 7.48675 11.3957 6.44799 12.4329C5.40925 13.47 6.44799 14.7622 6.44799 14.7622L10.3544 19.7733C10.6058 20.0956 10.7522 20.487 10.7742 20.8949L10.8455 22.2151',
  d7: 'M12.7033 4.55427C12.9886 3.48237 13.9699 2.75 15.0753 2.75C16.6055 2.75 17.7892 4.1305 17.4793 5.64628L16.5992 9.95912C18.2568 10.1858 20.1893 10.844 21.8393 12.4215C22.7896 13.33 22.8454 14.6649 22.6729 15.7597C22.4951 16.8872 22.0416 18.0015 21.6682 18.7423C21.5487 18.9453 21.0665 19.7959 20.9654 19.9879C20.7492 20.3987 20.6419 20.7134 20.6419 20.9629V20.9629C20.6419 21.1932 20.6419 21.4281 20.6289 21.6055C20.6149 21.7963 20.583 22.0058 20.4885 22.2166C20.3129 22.6078 19.9997 22.921 19.6084 23.0966C19.3977 23.1912 19.1882 23.2231 18.9974 23.237C18.82 23.25 18.6085 23.25 18.3782 23.25H12.6266C12.3547 23.25 12.1042 23.25 11.8947 23.2316C11.6675 23.2116 11.4206 23.1657 11.1794 23.0328C11.0346 22.9531 10.9508 22.8923 10.83 22.7796C10.5999 22.5649 10.4659 22.2621 10.369 22.016C10.2639 21.7491 10.1114 21.2897 9.97098 20.8609C9.86521 20.5789 9.67338 20.3245 9.07205 19.5698L5.79505 15.4567C5.07105 14.5776 5.06779 13.3185 5.78849 12.4357C6.64173 11.3905 8.19174 11.2408 9.23396 12.087L10.8377 13.1788L12.7033 4.55427Z',
  d8: 'M8.69134 1.03575L7.29646 1.14597C6.74589 1.18947 6.33483 1.67106 6.37833 2.22162C6.39748 2.46403 6.50155 2.6794 6.65905 2.84083L7.20192 3.3837L6.18194 4.40368C5.79141 4.7942 5.79141 5.42737 6.18194 5.81789C6.57246 6.20842 7.20563 6.20842 7.59615 5.81789L8.61613 4.79791L9.15905 5.34083C9.3205 5.49845 9.53595 5.60261 9.77847 5.62177C10.329 5.66527 10.8106 5.25421 10.8541 4.70364L10.9642 3.31021C10.9861 3.03421 11.0099 2.73511 10.9957 2.48378C10.9797 2.19936 10.9084 1.78007 10.5641 1.43575C10.2196 1.0913 9.80022 1.02017 9.51584 1.00422C9.26515 0.990172 8.96671 1.01388 8.69134 1.03575Z',
  d9: 'M5.81839 6.18165C5.42788 5.79111 4.79472 5.79109 4.40418 6.1816L3.38416 7.20157L2.84123 6.65864C2.6798 6.50115 2.46444 6.39707 2.22203 6.37792C1.67146 6.33442 1.18987 6.74548 1.14637 7.29605L1.03606 8.69212V8.69214C1.01422 8.96702 0.990549 9.26498 1.00448 9.51518C1.0203 9.7993 1.09113 10.2192 1.4359 10.5639C1.78053 10.9086 2.20028 10.9795 2.48444 10.9955C2.73529 11.0095 3.03389 10.9858 3.3094 10.9639L4.70405 10.8537C5.25462 10.8102 5.66568 10.3286 5.62218 9.77806C5.60302 9.53554 5.49885 9.3201 5.34124 9.15864L4.79837 8.61578L5.81835 7.59586C6.20889 7.20535 6.20891 6.57218 5.81839 6.18165Z',
  d10: 'M19.8979 21.5235V19.5246C21.5055 16.5949 23.2287 13.1579 20.8027 11.5045C20.2044 11.0968 19.2208 10.2926 17.2713 9.86396L16.5079 9.71163L15.7109 9.64671L16.7287 4.65914C17.0084 3.52924 16.1962 2.51855 15.0881 2.51855C14.3065 2.51855 13.6233 3.04625 13.426 3.80252L11.3427 13.4477L8.87524 11.7479C8.12194 11.1135 7.04353 11.1489 6.38148 11.9132C5.89778 12.5506 5.87149 13.3207 6.38156 13.9889L10.874 19.5097V21.4988',
  d11: 'M5.12421 6.40488L2.5 9.02214M2.02342 6.51024L2.00586 9.51498H5.02274M6.88406 4.64426L9.53931 2M6.99772 1.52637L10.0149 1.52637L10.0147 4.51636',
  d12: 'M10.6018 20.2659L6.29732 14.9594C5.57106 14.0802 5.56704 12.8194 6.28849 11.9357C7.14173 10.8905 8.69174 10.7408 9.73396 11.587L11.3377 12.6788L13.1987 4.07139L13.2033 4.05427C13.4886 2.98237 14.4699 2.25 15.5753 2.25C17.1055 2.25 18.2892 3.6305 17.9793 5.14628L17.0992 9.45912C18.7568 9.68576 20.6893 10.344 22.3393 11.9215C23.2896 12.83 23.3454 14.1649 23.1729 15.2597C22.9951 16.3872 22.5416 17.5015 22.1682 18.2423C21.9727 18.6302 21.6925 19.1607 21.4635 19.5899C21.3485 19.8055 21.2455 19.9972 21.1713 20.1349L21.1419 20.1895L21.1419 22.75H10.6018V20.2659Z',
  d13: 'M7.33536 3.25H5.75V1.25H10.75V6.25H8.75V4.66379L7.34524 6.0682L5.9312 4.65381L7.33536 3.25ZM0.75 6.25H2.75V7.83545L4.15326 6.43191L5.56762 7.84599L4.16388 9.25H5.75V11.25H0.75V6.25Z',
};

export const IconMaximize01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-01-stroke-rounded IconMaximize01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMaximize01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-01-duotone-rounded IconMaximize01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconMaximize01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-01-twotone-rounded IconMaximize01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMaximize01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-01-solid-rounded IconMaximize01SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconMaximize01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-01-bulk-rounded IconMaximize01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconMaximize01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-01-stroke-sharp IconMaximize01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMaximize01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-01-solid-sharp IconMaximize01SolidSharp"
    >
      <path 
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

export const iconPackOfMaximize01: TheIconSelfPack = {
  name: 'Maximize01',
  StrokeRounded: IconMaximize01StrokeRounded,
  DuotoneRounded: IconMaximize01DuotoneRounded,
  TwotoneRounded: IconMaximize01TwotoneRounded,
  SolidRounded: IconMaximize01SolidRounded,
  BulkRounded: IconMaximize01BulkRounded,
  StrokeSharp: IconMaximize01StrokeSharp,
  SolidSharp: IconMaximize01SolidSharp,
};