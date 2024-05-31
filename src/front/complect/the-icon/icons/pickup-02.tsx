import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.9996 17.5C20.4239 17.5 21.0627 17.5 21.5152 17.0126C21.5346 16.9917 21.5535 16.9702 21.5721 16.9482C22.0019 16.435 22.0019 15.6275 22.0019 14.0125C22.0019 12.7875 22.0019 12.175 21.7616 11.6578C21.5107 11.1178 21.0586 10.7814 20.1078 10.0931C19.1634 9.40947 18.4919 8.64105 17.8521 7.58239C16.9396 6.07263 16.4834 5.31775 15.7992 4.90888C15.1149 4.5 14.3079 4.5 12.6939 4.5H11.9944M8.99219 17.5H14.9967',
  d2: 'M13.9961 4.5L14.7423 7.97979C15.172 9.9834 15.2417 11.5 17.5298 11.5H21.5017',
  d3: 'M22.0021 14.5H21.002',
  d4: 'M11.9951 4.5V17.5',
  d5: 'M16.9986 19.5C18.104 19.5 19.0001 18.6046 19.0001 17.5C19.0001 16.3954 18.104 15.5 16.9986 15.5C15.8932 15.5 14.9971 16.3954 14.9971 17.5C14.9971 18.6046 15.8932 19.5 16.9986 19.5Z',
  d6: 'M6.99172 19.5C8.09712 19.5 8.99321 18.6046 8.99321 17.5C8.99321 16.3954 8.09712 15.5 6.99172 15.5C5.88633 15.5 4.99023 16.3954 4.99023 17.5C4.99023 18.6046 5.88633 19.5 6.99172 19.5Z',
  d7: 'M11.9896 11.5029H1.99805V16.2136C1.99805 16.5881 2.69055 17.0293 3.31263 17.3231C3.5297 17.4256 3.76782 17.4726 4.00782 17.4793L4.98895 17.5067',
  d8: 'M21.8215 17.7011C22.251 17.1879 22.251 16.3804 22.251 14.7654C22.251 13.5404 22.251 12.9279 22.0109 12.4107C21.9856 12.3562 21.9582 12.3038 21.9286 12.2529H17.7824C15.7105 12.2529 15.4589 11.0076 15.1104 9.28299C15.0743 9.10442 15.0372 8.92071 14.9969 8.73272L14.2537 5.26565C13.8847 5.25293 13.4572 5.25293 12.95 5.25293H12.251V12.2529H2.25098V16.7177C2.25098 17.1818 2.36024 17.3257 2.74328 17.5811C3.74362 18.248 3.75983 18.2529 4.96208 18.2529H5.25098C5.25098 17.1483 6.14641 16.2529 7.25098 16.2529C8.35555 16.2529 9.25098 17.1483 9.25098 18.2529H15.251C15.251 17.1483 16.1464 16.2529 17.251 16.2529C18.3556 16.2529 19.251 17.1483 19.251 18.2529C20.6742 18.2529 21.3126 18.2529 21.7647 17.7655C21.7841 17.7446 21.803 17.7231 21.8215 17.7011Z',
  d9: 'M19.251 18.2529C20.6742 18.2529 21.3125 18.2529 21.7647 17.7655C21.7841 17.7446 21.803 17.7231 21.8215 17.7011C22.251 17.1879 22.251 16.3804 22.251 14.7654C22.251 13.5404 22.251 12.9279 22.0109 12.4107C21.7602 11.8707 21.3084 11.5343 20.3583 10.846C19.4146 10.1624 18.7436 9.39398 18.1043 8.33532C17.1925 6.82556 16.7366 6.07068 16.0529 5.66181C15.3692 5.25293 14.5628 5.25293 12.95 5.25293H12.251M9.25098 18.2529H15.251',
  d10: 'M14.251 5.25293L14.9967 8.73272C15.426 10.7363 15.4957 12.2529 17.7821 12.2529H21.751',
  d11: 'M22.251 15.2529H21.251',
  d12: 'M12.251 5.25293V18.2529',
  d13: 'M17.251 20.2529C18.3555 20.2529 19.251 19.3575 19.251 18.2529C19.251 17.1484 18.3555 16.2529 17.251 16.2529C16.1464 16.2529 15.251 17.1484 15.251 18.2529C15.251 19.3575 16.1464 20.2529 17.251 20.2529Z',
  d14: 'M7.25098 20.2529C8.35555 20.2529 9.25098 19.3575 9.25098 18.2529C9.25098 17.1484 8.35555 16.2529 7.25098 16.2529C6.14641 16.2529 5.25098 17.1484 5.25098 18.2529C5.25098 19.3575 6.14641 20.2529 7.25098 20.2529Z',
  d15: 'M12.2513 12.2529H2.25977V16.9636C2.25977 17.3381 2.95227 17.7793 3.57435 18.0731C3.79142 18.1756 4.02954 18.2226 4.26954 18.2293L5.25067 18.2567',
  d16: 'M19 18C20.4232 18 21.0615 18 21.5137 17.5126C21.5331 17.4917 21.552 17.4702 21.5705 17.4482C22 16.935 22 16.1275 22 14.5125C22 13.2875 22 12.675 21.7599 12.1578C21.5092 11.6178 21.0574 11.2814 20.1073 10.5931C19.1636 9.90947 18.4926 9.14105 17.8533 8.08239C16.9415 6.57263 16.4856 5.81775 15.8019 5.40888C15.1182 5 14.3118 5 12.699 5H12M9 18H15',
  d17: 'M14 5L14.7457 8.47979C15.175 10.4834 15.2447 12 17.5311 12H21.5',
  d18: 'M22 15H21',
  d19: 'M12 5V18',
  d20: 'M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z',
  d21: 'M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z',
  d22: 'M11.9994 12H2.00781V16.7107C2.00781 17.0852 2.70031 17.5264 3.32239 17.8202C3.53946 17.9227 3.77758 17.9697 4.01758 17.9764L4.99871 18.0038',
  d23: 'M14.679 4.18018C15.2347 4.2383 15.7233 4.36171 16.1889 4.6402C16.65 4.91592 17.0048 5.29368 17.3495 5.76508C17.6826 6.22048 18.0565 6.83964 18.4973 7.56968C19.093 8.55607 19.779 9.3026 20.6292 9.91854C21.4844 10.5377 22.1024 10.985 22.4422 11.717C22.6132 12.0853 22.6856 12.4641 22.7196 12.8842C22.7386 13.1189 22.7465 13.4076 22.7498 13.7243C22.7517 13.9123 22.7527 14.0064 22.694 14.0657C22.6353 14.125 22.5406 14.125 22.3512 14.125H21.752C21.3377 14.125 21.002 14.4608 21.002 14.875C21.002 15.2892 21.3377 15.625 21.752 15.625H22.3287C22.5245 15.625 22.6224 15.625 22.6816 15.6884C22.7409 15.7518 22.7345 15.8469 22.7217 16.037C22.7143 16.1477 22.705 16.2534 22.6935 16.354C22.6323 16.8869 22.4979 17.3861 22.1476 17.8046C21.8948 18.0772 21.5851 18.2418 21.2488 18.3491C21.0239 18.4209 20.9115 18.4568 20.8292 18.396C20.7469 18.3351 20.7485 18.1968 20.7518 17.92L20.7521 17.875C20.7521 15.8039 19.0731 14.125 17.0021 14.125C14.931 14.125 13.2521 15.8039 13.2521 17.875L13.2521 17.896C13.2541 18.2641 13.2552 18.4481 13.1672 18.5366C13.0792 18.625 12.9172 18.625 12.5931 18.625L11.4111 18.625H11.4111C11.087 18.625 10.9249 18.625 10.837 18.5366C10.749 18.4481 10.75 18.2641 10.752 17.896L10.7521 17.875C10.7521 15.8039 9.07314 14.125 7.00207 14.125C4.931 14.125 3.25207 15.8039 3.25207 17.875C3.25207 18.1684 3.25207 18.3151 3.16503 18.3747C3.15993 18.3782 3.15469 18.3814 3.14929 18.3844C3.05711 18.4357 2.94442 18.3795 2.71902 18.2669C2.21929 18.0175 1.70605 17.6452 1.46066 17.2343C1.28141 16.9342 1.25207 16.6183 1.25207 16.3398V11.75C1.25207 11.3358 1.58786 11 2.00207 11H10.5134C10.7962 11 10.9377 11 11.0255 10.9121C11.1134 10.8243 11.1134 10.6828 11.1134 10.4V4.875C11.1134 4.70567 11.2258 4.44281 11.3548 4.32381C11.493 4.19623 11.6745 4.125 11.8634 4.125H12.7396C13.5132 4.12499 14.1512 4.12498 14.679 4.18018ZM13.1345 6.1146C13.1706 6.0442 13.1918 6.03643 13.2343 6.02089C13.2717 6.00722 13.3125 5.99979 13.3552 6C13.8706 6.00263 14.2554 6.01165 14.5749 6.04253C14.9871 6.08237 15.212 6.15296 15.3945 6.25381C15.5834 6.35818 15.7813 6.52533 16.0617 6.87972C16.3522 7.24675 16.6785 7.74446 17.1586 8.47913C17.5969 9.14983 18.0582 9.72146 18.6007 10.2326C18.973 10.5834 19.1592 10.7588 19.1036 10.8794C19.048 11 18.7922 11 18.2806 11H17.481C16.6641 11 16.1322 10.9984 15.725 10.9474C15.3494 10.9004 15.1572 10.8192 15.0014 10.699C14.8318 10.568 14.6656 10.359 14.4634 9.92667C14.2573 9.48604 14.0488 8.89415 13.7488 8.03908L13.1433 6.31336C13.1133 6.22779 13.0983 6.185 13.1345 6.1146Z',
  d24: 'M14.6788 4.18018C15.2346 4.23831 15.7231 4.36171 16.1888 4.6402C16.6499 4.91592 17.0047 5.29368 17.3494 5.76508C17.6825 6.22048 18.0564 6.83964 18.4972 7.56968C19.0929 8.55607 19.7789 9.3026 20.6291 9.91855C21.4843 10.5377 22.1023 10.985 22.4421 11.717C22.6131 12.0853 22.6855 12.4641 22.7195 12.8842C22.752 13.2855 22.752 13.8447 22.752 14.4319C22.752 15.2016 22.752 15.8432 22.6934 16.354C22.6322 16.8869 22.4978 17.3861 22.1475 17.8046C21.8947 18.0772 21.585 18.2418 21.2487 18.3491C21.0238 18.4209 20.9113 18.4568 20.8291 18.396C20.7468 18.3352 20.7484 18.1968 20.7517 17.92C20.7519 17.905 20.752 17.89 20.752 17.875C20.752 15.8039 19.073 14.125 17.002 14.125C14.9309 14.125 13.252 15.8039 13.252 17.875C13.252 17.882 13.252 17.889 13.252 17.896C13.254 18.2641 13.255 18.4481 13.1671 18.5366C13.0791 18.625 12.917 18.625 12.5929 18.625L11.411 18.625C11.0869 18.625 10.9248 18.625 10.8368 18.5366C10.7489 18.4481 10.7499 18.2641 10.7519 17.896C10.7519 17.889 10.752 17.882 10.752 17.875C10.752 15.8039 9.07302 14.125 7.00195 14.125C4.93089 14.125 3.25195 15.8039 3.25195 17.875C3.25195 18.1684 3.25195 18.3151 3.16492 18.3747C3.15982 18.3782 3.15457 18.3814 3.14917 18.3844C3.057 18.4357 2.9443 18.3795 2.71891 18.2669C2.21917 18.0175 1.70593 17.6452 1.46055 17.2343C1.2813 16.9342 1.25195 16.6183 1.25195 16.3398V11.75C1.25195 11.3358 1.58774 11 2.00195 11H10.5133C10.7961 11 10.9375 11 11.0254 10.9121C11.1133 10.8243 11.1133 10.6828 11.1133 10.4V4.875C11.1133 4.70567 11.2257 4.44282 11.3547 4.32381C11.4929 4.19623 11.6744 4.125 11.8633 4.125H12.7395C13.5131 4.12499 14.151 4.12498 14.6788 4.18018Z',
  d25: 'M22.7518 14.125C22.752 14.226 22.752 14.3285 22.752 14.4319C22.752 14.8716 22.752 15.2694 22.7411 15.625H21.752C21.3377 15.625 21.002 15.2892 21.002 14.875C21.002 14.4608 21.3377 14.125 21.752 14.125H22.7518Z',
  d26: 'M13.2343 6.02089C13.1918 6.03643 13.1706 6.0442 13.1345 6.1146C13.0983 6.185 13.1133 6.22779 13.1433 6.31336L13.7488 8.03908C14.0488 8.89415 14.2573 9.48604 14.4634 9.92667C14.6656 10.359 14.8318 10.568 15.0014 10.699C15.1572 10.8192 15.3494 10.9004 15.725 10.9474C16.1322 10.9984 16.6641 11 17.481 11H18.2806C18.7922 11 19.048 11 19.1036 10.8794C19.1592 10.7588 18.973 10.5834 18.6007 10.2326C18.0582 9.72146 17.5969 9.14983 17.1586 8.47913C16.6785 7.74446 16.3522 7.24675 16.0617 6.87972C15.7813 6.52533 15.5834 6.35818 15.3945 6.25381C15.212 6.15296 14.9871 6.08237 14.5749 6.04253C14.2554 6.01165 13.8706 6.00263 13.3552 6C13.3125 5.99979 13.2717 6.00722 13.2343 6.02089Z',
  d27: 'M15 5V12H22',
  d28: 'M22 15H20',
  d29: 'M12 12H2.01C2.00448 12 2 12.0045 2 12.01V17.99C2 17.9955 2.00448 18 2.01 18H5',
  d30: 'M9 18H12M12 18H15M12 18V5.01C12 5.00448 12.0045 5 12.01 5H17.9942C17.9978 5 18.0011 5.00192 18.0029 5.00504L21.998 11.9966C21.9985 11.9973 21.9988 11.9981 21.999 11.999L21.9997 12.0014C21.9999 12.0022 22 12.0031 22 12.004V17.99C22 17.9955 21.9955 18 21.99 18H19',
  d31: 'M7 20.25C8.38071 20.25 9.5 19.1307 9.5 17.75C9.5 16.3693 8.38071 15.25 7 15.25C5.61929 15.25 4.5 16.3693 4.5 17.75C4.5 19.1307 5.61929 20.25 7 20.25Z',
  d32: 'M17 20.25C18.3807 20.25 19.5 19.1307 19.5 17.75C19.5 16.3693 18.3807 15.25 17 15.25C15.6193 15.25 14.5 16.3693 14.5 17.75C14.5 19.1307 15.6193 20.25 17 20.25Z',
  d33: 'M12 3.75C11.4603 3.75 11.0227 4.18279 11.0227 4.71667V10.5167H2.22727C1.68754 10.5167 1.25 10.9495 1.25 11.4833V17.2833C1.25 17.8172 1.68754 18.25 2.22727 18.25H3.28304C3.26125 18.0864 3.25 17.9195 3.25 17.75C3.25 15.6789 4.92893 14 7 14C9.07107 14 10.75 15.6789 10.75 17.75C10.75 17.9195 10.7388 18.0864 10.717 18.25H13.283C13.2612 18.0864 13.25 17.9195 13.25 17.75C13.25 15.6789 14.9289 14 17 14C19.0711 14 20.75 15.6789 20.75 17.75C20.75 17.9195 20.7388 18.0864 20.717 18.25H21.7727C22.3125 18.25 22.75 17.8172 22.75 17.2833V14.25H21V12.75H22.75V11.4833C22.75 11.3151 22.7056 11.1498 22.6212 11.0037L18.7121 4.23707C18.5382 3.93588 18.2143 3.75 17.8636 3.75H12ZM15.9102 10.5169V5.68359H17.2976L20.0898 10.5169H15.9102Z',
} as const;

export const IconPickup02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pickup-02-stroke-rounded IconPickup02StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPickup02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pickup-02-duotone-rounded IconPickup02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPickup02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pickup-02-twotone-rounded IconPickup02TwotoneRounded"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPickup02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pickup-02-solid-rounded IconPickup02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="17.002" 
        cy="17.875" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="7.00195" 
        cy="17.875" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconPickup02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pickup-02-bulk-rounded IconPickup02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="17.002" 
        cy="17.875" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="7.00195" 
        cy="17.875" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconPickup02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pickup-02-stroke-sharp IconPickup02StrokeSharp"
    >
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPickup02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pickup-02-solid-sharp IconPickup02SolidSharp"
    >
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPickup02: TheIconSelfPack = {
  name: 'Pickup02',
  StrokeRounded: IconPickup02StrokeRounded,
  DuotoneRounded: IconPickup02DuotoneRounded,
  TwotoneRounded: IconPickup02TwotoneRounded,
  SolidRounded: IconPickup02SolidRounded,
  BulkRounded: IconPickup02BulkRounded,
  StrokeSharp: IconPickup02StrokeSharp,
  SolidSharp: IconPickup02SolidSharp,
};