import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 7.5C15 7.5 15.5 7.5 16 8.5C16 8.5 17.5882 6 19 5.5',
  d2: 'M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z',
  d3: 'M2.9 13.816L3.37834 13.2383L3.37834 13.2383L2.9 13.816ZM2.9 16.6667L2.15 16.6667V16.6667H2.9ZM18.3092 21.219L18.8362 21.7526V21.7526L18.3092 21.219ZM3.69081 21.219L3.16379 21.7526L3.16379 21.7526L3.69081 21.219ZM7.37364 11.7778L8.09752 11.5816C7.99917 11.2187 7.64735 10.9847 7.27467 11.0343C6.902 11.0839 6.62364 11.4018 6.62364 11.7778H7.37364ZM2.10213 12.7026L2.80388 12.438L2.10213 12.7026ZM2.4119 10.958L3.05989 11.3356L3.05989 11.3356L2.4119 10.958ZM3.2792 9.46982L2.63122 9.09217H2.63122L3.2792 9.46982ZM2.01147 11.9813L1.26412 11.9183L2.01147 11.9813ZM9.06189 6.75C9.47611 6.75 9.81189 6.41421 9.81189 6C9.81189 5.58579 9.47611 5.25 9.06189 5.25V6.75ZM13.3513 14.559C13.7082 14.3488 13.8272 13.889 13.617 13.5321C13.4068 13.1752 12.947 13.0563 12.5901 13.2665L13.3513 14.559ZM19.85 14.7215C19.85 14.3073 19.5142 13.9715 19.1 13.9715C18.6858 13.9715 18.35 14.3073 18.35 14.7215H19.85ZM2.15 13.816L2.15 16.6667L3.65 16.6667L3.65 13.816L2.15 13.816ZM8.3 22.75H13.7V21.25H8.3V22.75ZM13.7 22.75C14.9518 22.75 15.9653 22.7516 16.7614 22.6458C17.5781 22.5374 18.2779 22.304 18.8362 21.7526L17.7822 20.6853C17.5497 20.9149 17.2177 21.0721 16.5639 21.1589C15.8895 21.2484 14.9937 21.25 13.7 21.25V22.75ZM18.35 16.6667C18.35 17.9452 18.3484 18.8277 18.258 19.4916C18.1707 20.1329 18.0133 20.457 17.7822 20.6853L18.8362 21.7526C19.3958 21.1999 19.6339 20.5049 19.7443 19.6939C19.8516 18.9054 19.85 17.9023 19.85 16.6667H18.35ZM2.15 16.6667C2.15 17.9023 2.14837 18.9054 2.25571 19.6939C2.36611 20.5049 2.60416 21.1999 3.16379 21.7526L4.21784 20.6853C3.98665 20.457 3.82929 20.1329 3.742 19.4916C3.65163 18.8277 3.65 17.9452 3.65 16.6667H2.15ZM8.3 21.25C7.00626 21.25 6.11048 21.2484 5.43609 21.1589C4.78232 21.0721 4.45032 20.9149 4.21784 20.6853L3.16379 21.7526C3.72212 22.304 4.42191 22.5374 5.23864 22.6458C6.03474 22.7516 7.04815 22.75 8.3 22.75V21.25ZM6.62364 11.7778C6.62364 12.8225 5.75576 13.6944 4.65387 13.6944V15.1944C6.55616 15.1944 8.12364 13.6786 8.12364 11.7778H6.62364ZM4.65387 13.6944C4.16509 13.6944 3.72116 13.5222 3.37834 13.2383L2.42166 14.3936C3.02588 14.894 3.80601 15.1944 4.65387 15.1944V13.6944ZM3.37834 13.2383C3.12025 13.0246 2.92117 12.749 2.80388 12.438L1.40038 12.9673C1.61215 13.5288 1.96823 14.0182 2.42166 14.3936L3.37834 13.2383ZM11 13.6944C9.57871 13.6944 8.42067 12.7738 8.09752 11.5816L6.64976 11.974C7.15794 13.8488 8.93188 15.1944 11 15.1944V13.6944ZM3.05989 11.3356L3.92718 9.84747L2.63122 9.09217L1.76392 10.5803L3.05989 11.3356ZM4.49729 7.74163C4.49729 7.20784 4.94277 6.75 5.5236 6.75V5.25C4.14237 5.25 2.99729 6.35167 2.99729 7.74163H4.49729ZM3.92718 9.84747C4.30039 9.20711 4.49729 8.4812 4.49729 7.74163H2.99729C2.99729 8.21444 2.87149 8.6799 2.63122 9.09217L3.92718 9.84747ZM2.80388 12.438C2.75954 12.3204 2.75687 12.3069 2.75414 12.2897C2.75122 12.2713 2.74453 12.2137 2.75882 12.0443L1.26412 11.9183C1.24526 12.1419 1.24264 12.3356 1.2727 12.5249C1.30294 12.7154 1.36218 12.866 1.40038 12.9673L2.80388 12.438ZM1.76392 10.5803C1.52232 10.9948 1.31307 11.3377 1.26412 11.9183L2.75882 12.0443C2.77615 11.8386 2.81176 11.7614 3.05989 11.3356L1.76392 10.5803ZM5.5236 6.75H9.06189V5.25H5.5236V6.75ZM12.5901 13.2665C12.1314 13.5366 11.5874 13.6944 11 13.6944V15.1944C11.8588 15.1944 12.6652 14.963 13.3513 14.559L12.5901 13.2665ZM19.85 16.6667V14.7215H18.35V16.6667H19.85Z',
  d4: 'M16.9995 12C19.7609 12 21.9995 9.76142 21.9995 7C21.9995 4.23858 19.7609 2 16.9995 2C14.2381 2 11.9995 4.23858 11.9995 7C11.9995 9.76142 14.2381 12 16.9995 12Z',
  d5: 'M2.8999 16.6665L2.8999 13.8158L5.9499 13.8159L7.4749 12.8159L8.9999 13.8159L19.0999 13.8161V16.6665C19.0999 19.1807 19.0999 20.4378 18.3091 21.2188C17.5183 21.9999 16.2455 21.9999 13.6999 21.9999H8.2999C5.75432 21.9999 4.48153 21.9999 3.69071 21.2188C2.8999 20.4378 2.8999 19.1807 2.8999 16.6665Z',
  d6: 'M2.8999 14.0884L2.8999 16.6667C2.8999 19.1808 2.8999 20.4379 3.69071 21.219C4.48153 22 5.75432 22 8.2999 22H13.6999C16.2455 22 17.5183 22 18.3091 21.219C19.0999 20.4379 19.0999 19.1808 19.0999 16.6667V14.7215',
  d7: 'M14.9995 7.5C14.9995 7.5 15.4995 7.5 15.9995 8.5C15.9995 8.5 17.5877 6 18.9995 5.5',
  d8: 'M21.9995 7C21.9995 9.76142 19.7609 12 16.9995 12C14.2381 12 11.9995 9.76142 11.9995 7C11.9995 4.23858 14.2381 2 16.9995 2C19.7609 2 21.9995 4.23858 21.9995 7Z',
  d9: 'M9.13607 5.94141H5.62629C5.0648 5.94143 4.13372 6.03393 3.81739 7.03285C3.62908 7.6275 3.7035 8.29478 3.49838 8.88247C3.28295 9.49971 2.94503 10.0963 2.61732 10.6338C2.29253 11.1666 1.91852 11.7415 2.01633 12.3765C2.12664 13.0926 2.64165 13.7666 3.32233 14.1248C4.71579 14.8578 6.77681 14.4157 7.1045 11.7625C7.37968 12.61 8.15572 14.4157 10.467 14.4157C11.2415 14.4157 11.8511 14.213 12.3297 13.9115',
  d10: 'M14.9897 7.50822C14.9897 7.50822 15.4905 7.50822 15.9912 8.50989C15.9912 8.50989 17.5817 6.00572 18.9956 5.50488',
  d11: 'M22.0004 7.00738C22.0004 9.77341 19.7585 12.0157 16.9931 12.0157C14.2277 12.0157 11.9858 9.77341 11.9858 7.00738C11.9858 4.24134 14.2277 1.99902 16.9931 1.99902C19.7585 1.99902 22.0004 4.24134 22.0004 7.00738Z',
  d12: 'M12.9427 13.9401C11.2049 14.959 8.27411 14.6427 7.34415 11.7697C7.34415 12.9131 6.43207 14.54 4.55742 14.4972C3.96722 14.4429 2.83529 14.1202 2.39027 13.2939C1.85406 12.2983 1.78261 11.8711 2.7335 10.4331C3.6844 8.99501 3.75175 8.22988 3.75175 7.70504C3.75175 7.11821 4.14954 5.91776 5.70103 5.99797L9.06228 5.99796M2.89549 14.2421V17.1739C2.89549 19.4492 2.89549 20.5869 3.67657 21.2937C4.45765 22.0006 5.81451 22.0006 8.32877 22.0006H13.6623C16.1766 22.0006 17.5203 21.9819 18.3014 21.275C19.0825 20.5681 19.0825 19.4305 19.0825 17.1552V14.7488',
  d13: 'M17 1.25C13.8244 1.25 11.25 3.82436 11.25 7C11.25 10.1756 13.8244 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7C22.75 3.82436 20.1756 1.25 17 1.25ZM19.2504 6.20717C19.6408 6.06889 19.8453 5.64027 19.707 5.24982C19.5687 4.85937 19.1401 4.65495 18.7496 4.79323C18.2675 4.96399 17.8199 5.28384 17.4411 5.61601C17.0546 5.955 16.6963 6.34574 16.3947 6.70726C16.2485 6.88246 16.1135 7.05341 15.9928 7.21192C15.9046 7.12935 15.8162 7.05964 15.7285 7.00117C15.5696 6.89522 15.4205 6.83142 15.292 6.79469C15.2282 6.77648 15.1052 6.74377 15 6.7502C14.5858 6.7502 14.25 7.08599 14.25 7.5002C14.25 7.87492 14.5248 8.18546 14.8839 8.24127C14.9396 8.2784 15.1237 8.42459 15.3292 8.83561C15.4501 9.07738 15.6917 9.2354 15.9616 9.24922C16.2315 9.26304 16.4882 9.13018 16.6332 8.90213C16.796 8.67148 17.276 7.9924 17.5465 7.66815C17.8184 7.34217 18.1219 7.01416 18.4302 6.74377C18.7463 6.46657 19.0266 6.28642 19.2504 6.20717Z',
  d14: 'M10.0784 5.25C9.86488 5.97192 9.75 6.7385 9.75 7.53288C9.75 10.4774 11.3284 13.0401 13.6566 14.3623C12.9088 14.8874 11.9879 15.1945 11 15.1945C9.6271 15.1945 8.38384 14.6015 7.55445 13.6544C6.93173 14.585 5.86012 15.1945 4.65388 15.1945C4.46376 15.1945 4.27705 15.1794 4.09496 15.1503L4.09496 16.7299C4.09496 17.9519 4.09708 18.7717 4.18221 19.3829C4.26336 19.9656 4.40331 20.2149 4.57491 20.3806C4.74819 20.5478 5.01146 20.6851 5.62085 20.7642C6.25699 20.8468 7.10909 20.8487 8.37408 20.8487L13.6257 20.8487C14.8907 20.8487 15.7428 20.8468 16.379 20.7642C16.9883 20.6851 17.2516 20.5478 17.4249 20.3806C17.5965 20.2149 17.7364 19.9656 17.8176 19.3829C17.9027 18.7717 17.9048 17.9519 17.9048 16.7299V15.2878C18.5829 15.2283 19.2352 15.0756 19.8499 14.842V16.7964C19.8499 17.9345 19.85 18.8847 19.7449 19.6393C19.6338 20.4371 19.3892 21.1564 18.7917 21.7331C18.1959 22.3082 17.4557 22.5422 16.635 22.6487C15.8557 22.7498 14.8734 22.7498 13.6926 22.7497L8.3072 22.7497C7.12637 22.7498 6.14411 22.7498 5.36482 22.6487C4.54412 22.5422 3.80393 22.3082 3.20812 21.7331C2.61064 21.1564 2.36605 20.4371 2.25493 19.6393C2.14983 18.8848 2.14986 17.9346 2.1499 16.7965V16.7964L2.14991 14.142C1.82347 13.8046 1.5619 13.3957 1.39439 12.9515C1.35623 12.8506 1.30141 12.7057 1.2727 12.525C1.24264 12.3357 1.24527 12.142 1.26412 11.9183C1.31156 11.3556 1.5096 11.0162 1.74172 10.6184L2.63122 9.09223C2.8715 8.67996 2.99729 8.2145 2.99729 7.74169C2.99729 6.35173 4.14237 5.25007 5.5236 5.25006L10.0784 5.25Z',
  d15: 'M10.0784 5.25C9.86488 5.97192 9.75 6.7385 9.75 7.53287C9.75 10.4774 11.3284 13.0401 13.6566 14.3623C12.9088 14.8874 11.9879 15.1945 11 15.1945C9.6271 15.1945 8.38384 14.6015 7.55445 13.6544C6.93173 14.585 5.86012 15.1945 4.65388 15.1945C3.80601 15.1945 3.02588 14.894 2.42167 14.3937C1.96823 14.0182 1.60616 13.513 1.39439 12.9515C1.35623 12.8506 1.30141 12.7057 1.2727 12.525C1.24264 12.3357 1.24527 12.142 1.26412 11.9183C1.31156 11.3556 1.5096 11.0162 1.74172 10.6184L2.63122 9.09223C2.8715 8.67996 2.99729 8.2145 2.99729 7.74169C2.99729 6.35173 4.14237 5.25007 5.5236 5.25006L10.0784 5.25Z',
  d16: 'M2.14991 14.1421L2.1499 16.7966C2.14987 17.9346 2.14984 18.8849 2.25493 19.6395C2.36605 20.4373 2.61064 21.1565 3.20813 21.7333C3.80394 22.3084 4.54412 22.5423 5.36483 22.6488C6.14411 22.7499 7.12637 22.7499 8.30719 22.7499H13.6926C14.8734 22.7499 15.8557 22.7499 16.635 22.6488C17.4557 22.5423 18.1959 22.3084 18.7917 21.7333C19.3892 21.1565 19.6338 20.4373 19.7449 19.6395C19.85 18.8849 19.8499 17.9347 19.8499 16.7966V14.8422C19.2352 15.0757 18.5829 15.2285 17.9049 15.2879V16.73C17.9049 17.9521 17.9027 18.7718 17.8176 19.383C17.7364 19.9657 17.5965 20.2151 17.4249 20.3807C17.2516 20.548 16.9883 20.6853 16.379 20.7643C15.7428 20.8469 14.8907 20.8489 13.6257 20.8489H8.37408C7.1091 20.8489 6.257 20.8469 5.62086 20.7643C5.01147 20.6853 4.74819 20.548 4.57492 20.3807C4.40332 20.2151 4.26337 19.9657 4.18221 19.383C4.09708 18.7718 4.09496 17.9521 4.09496 16.73L4.09497 15.1504C3.465 15.0498 2.8904 14.782 2.42167 14.3938C2.32691 14.3153 2.23615 14.2312 2.14991 14.1421Z',
  d17: 'M14.7351 6.98703L16.2378 8.48344L19.2433 5.49063M21.9984 6.98703C21.9984 9.74184 19.7557 11.975 16.9892 11.975C14.2227 11.975 11.98 9.74184 11.98 6.98703C11.98 4.23223 14.2227 1.99902 16.9892 1.99902C19.7557 1.99902 21.9984 4.23223 21.9984 6.98703Z',
  d18: 'M8.97779 5.98926H3.95604V7.97906L2.0412 11.6044C1.84468 11.9814 2.42475 12.9923 2.73935 13.4506C2.80281 13.543 2.88554 13.6371 2.98185 13.7279M18.9926 14.477V21.901C18.9926 21.9285 18.97 21.9509 18.9422 21.9509L2.9408 22.0008C2.91297 22.0008 2.89041 21.9785 2.89041 21.9509L2.98185 13.7279M2.98185 13.7279C3.31079 14.0381 3.79806 14.311 4.21623 14.3556C5.19972 14.5514 6.0925 14.149 6.50601 13.7841C7.114 13.2474 7.47821 12.4672 7.47821 11.7488M12.9428 13.8826C12.1053 14.3781 10.6887 14.7444 9.16355 13.9239C8.57837 13.6091 7.46131 12.7468 7.46131 11.7673',
  d19: 'M17.8056 14.2059V20.8554L4.19444 20.8554L4.19444 13.7502H2.25L2.25 21.8028C2.25 22.326 2.68528 22.7502 3.22222 22.7502L18.7778 22.7502C19.3147 22.7502 19.75 22.326 19.75 21.8028L19.75 13.7104C19.1392 13.961 18.4866 14.1307 17.8056 14.2059Z',
  d20: 'M9.96262 5.25C9.82371 5.81044 9.75 6.39661 9.75 7C9.75 10.0617 11.6479 12.6801 14.3313 13.7431C14.1846 13.8943 14.0276 14.034 13.8663 14.1602C13.1023 14.7579 12.0688 15.1944 11 15.1944C9.93115 15.1944 8.89765 14.7579 8.1336 14.1602C7.95803 14.0228 7.78763 13.8694 7.62989 13.7026C7.04584 14.5519 6.06446 15.1944 4.75094 15.1944C3.26823 15.1944 2.37491 14.2954 1.89096 13.5015C1.65654 13.1169 1.37417 12.2556 1.27163 11.9428C1.26854 11.9333 1.26561 11.9244 1.26285 11.916C1.23158 11.7492 1.25778 11.5768 1.33716 11.4269L3.25003 7.81372L3.25003 5.25L9.96262 5.25Z',
  d21: 'M17 1.25C13.8244 1.25 11.25 3.82436 11.25 7C11.25 10.1756 13.8244 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7C22.75 3.82436 20.1756 1.25 17 1.25ZM19.7804 6.03039L18.7197 4.96973L16.2501 7.4394L15.2804 6.46973L14.2197 7.53039L16.2501 9.56072L19.7804 6.03039Z',
} as const;

export const IconStoreVerified02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-verified-02-stroke-rounded IconStoreVerified02StrokeRounded"
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
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStoreVerified02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-verified-02-duotone-rounded IconStoreVerified02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStoreVerified02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-verified-02-twotone-rounded IconStoreVerified02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStoreVerified02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-verified-02-solid-rounded IconStoreVerified02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStoreVerified02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-verified-02-bulk-rounded IconStoreVerified02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconStoreVerified02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-verified-02-stroke-sharp IconStoreVerified02StrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStoreVerified02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-verified-02-solid-sharp IconStoreVerified02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStoreVerified02: TheIconSelfPack = {
  name: 'StoreVerified02',
  StrokeRounded: IconStoreVerified02StrokeRounded,
  DuotoneRounded: IconStoreVerified02DuotoneRounded,
  TwotoneRounded: IconStoreVerified02TwotoneRounded,
  SolidRounded: IconStoreVerified02SolidRounded,
  BulkRounded: IconStoreVerified02BulkRounded,
  StrokeSharp: IconStoreVerified02StrokeSharp,
  SolidSharp: IconStoreVerified02SolidSharp,
};