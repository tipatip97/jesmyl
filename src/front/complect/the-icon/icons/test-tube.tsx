import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.223 6V7.98898C11.223 9.38733 11.223 10.0865 11.4102 10.7577C11.5974 11.4289 11.9644 12.0452 12.6984 13.2779L13.6929 14.9482C15.5632 18.0892 16.4984 19.6597 15.7312 20.824L15.7193 20.8418C14.9409 22 12.9606 22 9 22C5.03938 22 3.05907 22 2.2807 20.8418L2.26884 20.824C1.50164 19.6597 2.43679 18.0892 4.30708 14.9482L5.30163 13.2779C6.03558 12.0452 6.40256 11.4289 6.5898 10.7577C6.77704 10.0865 6.77704 9.38733 6.77704 7.98898V6',
  d2: 'M6 6L12 6',
  d3: 'M5.5 13.2803C6.16667 12.699 7.73448 13.1181 9.00155 13.6643C10.6682 14.3828 12.1667 13.8019 12.5 13.2803',
  d4: 'M11.5 7C11.5 9 13.8624 11.2121 15.4728 11C15.4728 12.6569 16.934 14 18.7364 14C20.5388 14 22 12.6569 22 11C22 9.34315 21 8 19 8C19 6 17.5 4 15.3799 4C15.3799 2.45687 14.5 2 13.5 2C12.5 2 12 3 12 3C12 3 9 3 9 6',
  d5: 'M13.6929 14.9482L12.6984 13.2779L12.6065 13.1236L12.5 13.2803C12.1667 13.8018 10.6682 14.3828 9.00154 13.6643C7.73448 13.1181 6.16667 12.699 5.5 13.2803L5.11965 13.5835L4.30708 14.9482C2.43679 18.0892 1.50164 19.6597 2.26884 20.824L2.2807 20.8418C3.05907 22 5.03938 22 9 22C12.9606 22 14.9409 22 15.7193 20.8418L15.7312 20.824C16.4984 19.6597 15.5632 18.0892 13.6929 14.9482Z',
  d6: 'M18.7364 14C20.5388 14 22 12.6569 22 11C22 9.34315 21 8 19 8C19 6 17.5 4 15.3799 4C15.3799 2.45687 14.5 2 13.5 2C12.5 2 12 3 12 3C12 3 9 3 9 6H11.5V7C11.5 9 13.8624 11.2121 15.4728 11C15.4728 12.6569 16.934 14 18.7364 14Z',
  d7: 'M6 6H12',
  d8: 'M11.5728 2.28262C11.6455 2.18633 11.7359 2.07842 11.8447 1.96967C12.1764 1.63792 12.7309 1.25 13.5 1.25C14.0994 1.25 14.7791 1.38531 15.3137 1.86113C15.7178 2.22092 15.9682 2.71139 16.073 3.30813C18.0696 3.64912 19.4216 5.4386 19.6977 7.30011C20.56 7.42834 21.2753 7.79909 21.8017 8.37059C22.4548 9.07979 22.75 10.0249 22.75 11C22.75 13.1293 20.8923 14.75 18.7364 14.75C16.8332 14.75 15.1625 13.4871 14.7969 11.7262C13.9012 11.578 13.0216 11.0164 12.3574 10.3651C11.4827 9.50731 10.75 8.27332 10.75 7V6.75H9C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.11876 8.47246 4.40797 8.84471 3.8496C9.21383 3.29592 9.70062 2.93617 10.1646 2.70418C10.6256 2.47366 11.0776 2.36214 11.408 2.30708C11.4663 2.29736 11.5214 2.2893 11.5728 2.28262Z',
  d9: 'M6.02717 6.75H6C5.58579 6.75 5.25 6.41421 5.25 6C5.25 5.58579 5.58579 5.25 6 5.25H6.77717H11.2231H12C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75H11.9731V7.98898C11.9731 9.4268 11.9794 10.0064 12.1327 10.5562C12.2869 11.1088 12.5884 11.6271 13.3429 12.8942L14.374 14.6258C15.2782 16.1442 16.0041 17.3633 16.3978 18.3492C16.8013 19.3599 16.9449 20.3453 16.3575 21.2366L16.3557 21.2394L16.3438 21.2573L16.3419 21.2601C15.766 22.1171 14.7945 22.4466 13.6521 22.5987C12.5152 22.75 10.9897 22.75 9.06074 22.75H8.93952C7.01054 22.75 5.4851 22.75 4.34816 22.5987C3.20578 22.4466 2.23425 22.1171 1.65834 21.2601L1.65643 21.2573L1.64271 21.2367C1.05532 20.3453 1.19895 19.3599 1.60251 18.3492C1.9962 17.3633 2.72208 16.1443 3.62626 14.6258L3.62628 14.6258L4.65735 12.8942C5.41182 11.6271 5.71336 11.1088 5.86751 10.5562C6.02088 10.0064 6.02717 9.4268 6.02717 7.98898V6.75ZM7.52717 6.75V7.98898L7.52718 8.09861C7.52734 9.39236 7.52744 10.1882 7.31234 10.9592C7.19322 11.3863 7.01211 11.7912 6.75811 12.2625C6.89144 12.273 7.02074 12.2893 7.1431 12.3087C7.86226 12.4226 8.63487 12.6894 9.29859 12.9756C9.98665 13.2722 10.6243 13.2945 11.1087 13.2009C11.3418 13.1559 11.5314 13.0856 11.6691 13.0131C11.1805 12.1826 10.8654 11.5954 10.6879 10.9592C10.4728 10.1882 10.4729 9.39236 10.4731 8.09861L10.4731 7.98898V6.75H7.52717Z',
  d10: 'M5.12509 6.22222C5.12509 5.68528 5.5588 5.25 6.09381 5.25H11.9062C12.4412 5.25 12.8749 5.68528 12.8749 6.22222C12.8749 6.68466 12.5532 7.07168 12.1222 7.17019V8.15595C12.1222 9.56663 12.1303 10.0914 12.2679 10.5865C12.4066 11.0853 12.6776 11.5574 13.4151 12.8005L14.424 14.5011C15.2913 15.9627 16.0027 17.1617 16.3912 18.1383C16.7924 19.1467 16.9644 20.2025 16.3296 21.1694L16.3272 21.173L16.3157 21.1903L16.3132 21.194C15.695 22.1172 14.6628 22.4505 13.5385 22.6007C12.421 22.75 10.9299 22.75 9.07615 22.75H8.92385C7.07008 22.75 5.579 22.75 4.46154 22.6007C3.33715 22.4505 2.30498 22.1172 1.68679 21.194L1.68432 21.1903L1.67043 21.1694C1.0356 20.2025 1.20757 19.1467 1.60879 18.1383C1.99735 17.1617 2.70874 15.9627 3.57597 14.5011L4.58494 12.8005C5.32245 11.5574 5.59343 11.0853 5.73207 10.5865C5.86971 10.0914 5.87783 9.56663 5.87783 8.15595V7.17019C5.44678 7.07168 5.12509 6.68466 5.12509 6.22222ZM7.81528 7.19444V8.15595C7.81528 8.20049 7.81529 8.24448 7.8153 8.28794C7.81557 9.52111 7.81574 10.3267 7.59827 11.109C7.38174 11.888 6.96373 12.5922 6.31846 13.6793C6.2958 13.7175 6.27286 13.7562 6.24964 13.7953L5.28618 15.4192C4.3622 16.9766 3.73288 18.0431 3.40811 18.8594C3.09017 19.6584 3.17932 19.9328 3.28727 20.098L3.28822 20.0994L3.29485 20.1094L3.29581 20.1109C3.43211 20.3134 3.73702 20.5423 4.71723 20.6733C5.69139 20.8035 7.05236 20.8056 9 20.8056C10.9476 20.8056 12.3086 20.8035 13.2828 20.6733C14.263 20.5423 14.5679 20.3134 14.7042 20.1109L14.7052 20.1094L14.7118 20.0994L14.7128 20.0979C14.8207 19.9327 14.9098 19.6584 14.5919 18.8594C14.2671 18.0431 13.6378 16.9766 12.7138 15.4192L11.7504 13.7953C11.7272 13.7562 11.7042 13.7175 11.6816 13.6794C11.0363 12.5923 10.6183 11.888 10.4017 11.109C10.1843 10.3267 10.1844 9.52111 10.1847 8.28794C10.1847 8.24448 10.1847 8.20049 10.1847 8.15595V7.19444H7.81528Z',
  d11: 'M11.0266 6.5C11.0266 9 13.0327 11 15.513 11C15.513 12.6569 16.9787 14 18.7866 14C20.5945 14 22.0602 12.6569 22.0602 11C22.0602 9.34315 21.0571 8 19.051 8C19.051 6 17.5464 4 15.4199 4C15.4199 2.45687 14.5373 2 13.5342 2C12.5312 2 12.0297 3 12.0297 3C12.0297 3 9.02051 3 9.02051 6',
  d12: 'M7.06617 6.00025L7.09329 11.2151L6.21292 13.0804M7.06617 6.00025L10.9647 6M7.06617 6.00025L5.12276 6M10.9647 6V11.1915L12.1733 13.7638M10.9647 6H12.9277M12.1733 13.7638L15.976 21.8579C16.0071 21.9242 15.9586 22.0003 15.8852 22.0003H2.16097C2.08745 22.0003 2.03891 21.9241 2.07021 21.8578L6.21292 13.0804M12.1733 13.7638C11.7991 14.4801 10.679 15.3236 9.42863 14.4801C7.58495 13.2363 7.37702 13.333 6.21292 13.0804',
  d13: 'M5.23295 7.19444H6.14669L6.14669 11.0615L1.34134 21.3657C1.20091 21.6668 1.22355 22.019 1.40135 22.2996C1.57915 22.5801 1.88747 22.75 2.21875 22.75H15.7812C16.1125 22.75 16.4208 22.5802 16.5986 22.2997C16.7764 22.0192 16.7991 21.667 16.6588 21.3659L11.8519 11.051V7.19444H12.7684V5.25H5.23295V7.19444ZM9.53466 13.4359C8.96099 13.056 8.29793 12.6227 7.66016 12.4041L8.08463 11.4939L8.08463 7.19434H9.91488L9.91487 11.4831L10.9162 13.6318C10.8481 13.697 10.7722 13.7456 10.6934 13.773C10.555 13.8211 10.1998 13.8763 9.53466 13.4359Z',
  d14: 'M11.5728 2.28262C11.6455 2.18633 11.7359 2.07842 11.8447 1.96967C12.1764 1.63792 12.7309 1.25 13.5 1.25C14.0994 1.25 14.7791 1.38531 15.3137 1.86113C15.7178 2.22092 15.9682 2.71139 16.073 3.30813C18.0696 3.64912 19.4216 5.4386 19.6977 7.30011C20.56 7.42834 21.2753 7.79909 21.8017 8.37059C22.4548 9.07979 22.75 10.0249 22.75 11C22.75 13.1293 20.8923 14.75 18.7364 14.75C16.8261 14.75 15.1499 13.4775 14.7928 11.7063C12.418 11.3982 10.5495 9.49757 10.2827 7.09376L8.25 6.58558V6C8.25 5.11876 8.47246 4.40797 8.84471 3.8496C9.21383 3.29592 9.70062 2.93617 10.1646 2.70418C10.6256 2.47366 11.0776 2.36214 11.408 2.30708C11.4663 2.29736 11.5214 2.2893 11.5728 2.28262Z',
} as const;

export const IconTestTubeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-stroke-rounded IconTestTubeStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTestTubeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-duotone-rounded IconTestTubeDuotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        d={d.d7} 
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
      />
    </TheIconWrapper>
  );
};

export const IconTestTubeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-twotone-rounded IconTestTubeTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTestTubeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-solid-rounded IconTestTubeSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconTestTubeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-bulk-rounded IconTestTubeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTestTubeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-stroke-sharp IconTestTubeStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTestTubeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-solid-sharp IconTestTubeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTestTube: TheIconSelfPack = {
  name: 'TestTube',
  StrokeRounded: IconTestTubeStrokeRounded,
  DuotoneRounded: IconTestTubeDuotoneRounded,
  TwotoneRounded: IconTestTubeTwotoneRounded,
  SolidRounded: IconTestTubeSolidRounded,
  BulkRounded: IconTestTubeBulkRounded,
  StrokeSharp: IconTestTubeStrokeSharp,
  SolidSharp: IconTestTubeSolidSharp,
};