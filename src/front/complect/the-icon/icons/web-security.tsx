import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 20.5C19.4255 20.309 19.7894 20.0612 20.1088 19.7395C21.5 18.3379 21.5 16.0821 21.5 11.5705C21.5 7.05894 21.5 4.80314 20.1088 3.40157C18.7175 2 16.4783 2 12 2C7.52166 2 5.28249 2 3.89124 3.40157C2.5 4.80314 2.5 7.05894 2.5 11.5705C2.5 16.0821 2.5 18.3379 3.89124 19.7395C4.21056 20.0612 4.57453 20.309 5 20.5',
  d2: 'M2.5 8.5H21.5',
  d3: 'M7 5.5H7.00898',
  d4: 'M11 5.5H11.009',
  d5: 'M10.2596 16.378C9.1796 16.378 8.71714 17.1575 8.59714 17.6373C8.47714 18.117 8.47714 19.856 8.54914 20.5755C8.78914 21.475 9.38914 21.8468 9.97714 21.9667C10.5171 22.0147 12.7971 21.9967 13.4571 21.9967C14.4171 22.0147 15.1371 21.6549 15.4371 20.5755C15.4971 20.2157 15.5571 18.2369 15.4071 17.6373C15.0891 16.6778 14.36 16.378 13.76 16.378M10.2596 16.378H13.76M10.2596 16.378C10.2596 16.318 10.2582 15.5516 10.2596 15.1173C10.2609 14.7204 10.226 14.3378 10.4156 13.9876C11.126 12.5748 13.166 12.7187 13.67 14.1579C13.7573 14.3948 13.7626 14.7704 13.76 15.1173C13.7567 15.5605 13.76 16.378 13.76 16.378',
  d6: 'M21.751 15.0661C21.6469 17.1658 21.3356 18.475 20.4044 19.4063C19.4731 20.3375 18.1639 20.6488 16.0642 20.7529H15.5488C15.5739 20.7018 15.597 20.6493 15.6178 20.5954C15.751 20.2509 15.751 19.814 15.751 18.9404C15.751 18.0668 15.751 17.6299 15.6178 17.2854C15.4402 16.8259 15.0995 16.4609 14.6707 16.2706C14.3491 16.1279 13.9414 16.1279 13.126 16.1279H11.376C10.5606 16.1279 10.1529 16.1279 9.83128 16.2706C9.40248 16.4609 9.06181 16.8259 8.88419 17.2854C8.75098 17.6299 8.75098 18.0668 8.75098 18.9404C8.75098 19.814 8.75098 20.2509 8.88419 20.5954C8.905 20.6493 8.92805 20.7018 8.95322 20.7529H8.43774C6.33803 20.6488 5.0289 20.3375 4.09762 19.4063C3.16635 18.475 2.85504 17.1658 2.75098 15.0661V8.25293H21.751V15.0661Z',
  d7: 'M19.251 20.2529C19.6765 20.0619 20.0404 19.8141 20.3598 19.4924C21.751 18.0908 21.751 15.835 21.751 11.3234C21.751 6.81187 21.751 4.55607 20.3598 3.1545C18.9685 1.75293 16.7293 1.75293 12.251 1.75293C7.77264 1.75293 5.53347 1.75293 4.14222 3.1545C2.75098 4.55607 2.75098 6.81187 2.75098 11.3234C2.75098 15.835 2.75098 18.0908 4.14222 19.4924C4.46154 19.8141 4.82551 20.0619 5.25098 20.2529',
  d8: 'M2.75098 8.25293H21.751',
  d9: 'M7.25079 5.25293H7.25977',
  d10: 'M11.2508 5.25293H11.2598',
  d11: 'M10.5871 16.1309C9.50714 16.1309 8.96714 16.9109 8.84714 17.3909C8.72714 17.8709 8.72714 19.6109 8.79914 20.3309C9.03914 21.2309 9.63914 21.6029 10.2271 21.7229C10.7671 21.7709 13.0471 21.7529 13.7071 21.7529C14.6671 21.7709 15.3871 21.4109 15.6871 20.3309C15.7471 19.9709 15.8071 17.9909 15.6571 17.3909C15.3391 16.4309 14.5471 16.1309 13.9471 16.1309H10.5871Z',
  d12: 'M10.5 15.7085C10.5 15.6485 10.5082 15.3031 10.5096 14.8685C10.5108 14.4715 10.476 14.0885 10.6656 13.7381C11.376 12.3245 13.416 12.4685 13.92 13.9085C14.0073 14.1456 14.0125 14.5215 14.01 14.8685C14.0067 15.312 14.016 15.7085 14.016 15.7085',
  d13: 'M6.99982 5.5H7.0088',
  d14: 'M10.9998 5.5H11.0088',
  d15: 'M10.2586 16.378C9.17862 16.378 8.71616 17.1575 8.59616 17.6373C8.47616 18.117 8.47616 19.856 8.54816 20.5755C8.78816 21.475 9.38816 21.8468 9.97616 21.9667C10.5161 22.0147 12.7961 21.9967 13.4561 21.9967C14.4161 22.0147 15.1361 21.6549 15.4361 20.5755C15.4961 20.2157 15.5561 18.2369 15.4061 17.6373C15.0881 16.6778 14.359 16.378 13.759 16.378M10.2586 16.378H13.759M10.2586 16.378C10.2586 16.318 10.2572 15.5516 10.2586 15.1173C10.2599 14.7204 10.225 14.3378 10.4146 13.9876C11.125 12.5748 13.165 12.7187 13.669 14.1579C13.7563 14.3948 13.7616 14.7704 13.759 15.1173C13.7557 15.5605 13.759 16.378 13.759 16.378',
  d16: 'M17.2167 1.42649C15.8896 1.24996 14.1968 1.24998 12.0721 1.25H11.928C9.80325 1.24998 8.11037 1.24996 6.78326 1.42649C5.41409 1.60862 4.28855 1.99442 3.39751 2.87601C2.50512 3.75895 2.11335 4.87652 1.92864 6.23582C1.74996 7.55079 1.74998 9.22737 1.75 11.3279V11.4743C1.74998 13.5749 1.74996 15.2515 1.92864 16.5664C2.11335 17.9257 2.50512 19.0433 3.39751 19.9262C3.66903 20.1949 3.96289 20.4179 4.27962 20.6034C4.67714 20.8361 5.17047 20.6555 5.40211 20.2573C5.7069 19.7334 5.41486 19.0809 4.94582 18.697C4.88478 18.6471 4.82672 18.5946 4.7711 18.5396C4.30538 18.0788 4.01809 17.4432 3.86327 16.3039C3.7045 15.1355 3.70238 13.5917 3.70238 11.4011C3.70238 10.5327 3.70271 9.76594 3.71301 9.08391C3.71715 8.8097 3.71921 8.67259 3.8068 8.58632C3.89439 8.50005 4.03262 8.50005 4.3091 8.50005H19.6909C19.9674 8.50005 20.1056 8.50005 20.1932 8.58632C20.2808 8.67259 20.2829 8.8097 20.287 9.08391C20.2973 9.76594 20.2976 10.5327 20.2976 11.4011C20.2976 13.5917 20.2955 15.1355 20.1367 16.3039C19.9819 17.4432 19.6946 18.0788 19.2289 18.5396C19.1733 18.5946 19.1152 18.6471 19.0542 18.697C18.5851 19.0809 18.2931 19.7334 18.5979 20.2573C18.8295 20.6555 19.3229 20.8361 19.7204 20.6034C20.0371 20.4179 20.331 20.1949 20.6025 19.9262C21.4949 19.0433 21.8866 17.9257 22.0714 16.5664C22.25 15.2515 22.25 13.5749 22.25 11.4744V11.3279C22.25 9.22736 22.25 7.55079 22.0714 6.23582C21.8866 4.87652 21.4949 3.75895 20.6025 2.87601C19.7114 1.99442 18.5859 1.60862 17.2167 1.42649ZM7.101 3.875C6.55118 3.875 6.10547 4.32272 6.10547 4.875C6.10547 5.42728 6.55118 5.875 7.101 5.875H7.10994C7.65976 5.875 8.10547 5.42728 8.10547 4.875C8.10547 4.32272 7.65976 3.875 7.10994 3.875H7.101ZM11.101 3.875C10.5512 3.875 10.1055 4.32272 10.1055 4.875C10.1055 5.42728 10.5512 5.875 11.101 5.875H11.1099C11.6598 5.875 12.1055 5.42728 12.1055 4.875C12.1055 4.32272 11.6598 3.875 11.1099 3.875H11.101Z',
  d17: 'M9.5 15.7492V14.6875C9.5 13.3158 10.6452 12.25 12 12.25C13.3548 12.25 14.5 13.3158 14.5 14.6875V15.7492C14.5751 15.772 14.6498 15.7993 14.7239 15.8322C15.3441 16.1074 15.8211 16.6277 16.0663 17.262C16.1722 17.536 16.2129 17.8173 16.2318 18.1139C16.25 18.3994 16.25 18.7472 16.25 19.1639V19.2111C16.25 19.6278 16.25 19.9756 16.2318 20.2611C16.2129 20.5577 16.1722 20.8391 16.0663 21.113C15.8211 21.7474 15.3441 22.2676 14.7239 22.5428C14.4516 22.6637 14.1728 22.7093 13.8872 22.7302C13.6156 22.75 13.2866 22.75 12.9011 22.75H11.0989C10.7135 22.75 10.3844 22.75 10.1128 22.7302C9.82724 22.7093 9.5484 22.6637 9.27607 22.5428C8.6559 22.2676 8.17892 21.7474 7.93367 21.113C7.82777 20.8391 7.78706 20.5577 7.76817 20.2611C7.74999 19.9756 7.74999 19.6279 7.75 19.2111V19.1639C7.74999 18.7472 7.74999 18.3994 7.76817 18.1139C7.78706 17.8173 7.82777 17.536 7.93367 17.262C8.17892 16.6277 8.6559 16.1074 9.27607 15.8322C9.35023 15.7993 9.42487 15.772 9.5 15.7492ZM11 14.6875C11 14.1952 11.4218 13.75 12 13.75C12.5782 13.75 13 14.1952 13 14.6875V15.625C12.9675 15.625 12.9345 15.625 12.9011 15.625H11.0989C11.0655 15.625 11.0325 15.625 11 15.625V14.6875Z',
  d18: 'M12.0721 1.25C14.1968 1.24998 15.8896 1.24996 17.2167 1.4265C18.5859 1.60862 19.7114 1.99442 20.6025 2.87601C21.4949 3.75895 21.8866 4.87652 22.0714 6.23582C22.25 7.55079 22.25 9.22736 22.25 11.3279V11.4744C22.25 13.5749 22.25 15.2515 22.0714 16.5664C21.8866 17.9257 21.4949 19.0433 20.6025 19.9262C20.331 20.1949 20.0371 20.4179 19.7204 20.6034C19.3229 20.8361 18.8295 20.6555 18.5979 20.2573C18.2931 19.7334 18.5851 19.0809 19.0542 18.697C19.1152 18.6471 19.1733 18.5946 19.2289 18.5396C19.6946 18.0788 19.9819 17.4432 20.1367 16.3039C20.2955 15.1355 20.2976 13.5917 20.2976 11.4011C20.2976 10.5327 20.2973 9.76594 20.287 9.08391C20.2829 8.8097 20.2808 8.67259 20.1932 8.58632C20.1056 8.50005 19.9674 8.50005 19.6909 8.50005H4.3091C4.03262 8.50005 3.89439 8.50005 3.8068 8.58632C3.71922 8.67259 3.71715 8.8097 3.71301 9.08391C3.70271 9.76594 3.70238 10.5327 3.70238 11.4011C3.70238 13.5917 3.7045 15.1355 3.86327 16.3039C4.01809 17.4432 4.30538 18.0788 4.7711 18.5396C4.82672 18.5946 4.88478 18.6471 4.94582 18.697C5.41486 19.0809 5.70691 19.7334 5.40211 20.2573C5.17047 20.6555 4.67715 20.8361 4.27962 20.6034C3.96289 20.4179 3.66903 20.1949 3.39752 19.9262C2.50512 19.0433 2.11336 17.9257 1.92865 16.5664C1.74996 15.2515 1.74998 13.5749 1.75 11.4743V11.3279C1.74998 9.22737 1.74996 7.55079 1.92865 6.23582C2.11336 4.87652 2.50512 3.75895 3.39752 2.87601C4.28855 1.99442 5.41409 1.60862 6.78326 1.4265C8.11037 1.24996 9.80325 1.24998 11.928 1.25H12.0721Z',
  d19: 'M6.10547 4.875C6.10547 4.32272 6.55118 3.875 7.101 3.875H7.10994C7.65976 3.875 8.10547 4.32272 8.10547 4.875C8.10547 5.42728 7.65976 5.875 7.10994 5.875H7.101C6.55118 5.875 6.10547 5.42728 6.10547 4.875Z',
  d20: 'M10.1055 4.875C10.1055 4.32272 10.5512 3.875 11.101 3.875H11.1099C11.6598 3.875 12.1055 4.32272 12.1055 4.875C12.1055 5.42728 11.6598 5.875 11.1099 5.875H11.101C10.5512 5.875 10.1055 5.42728 10.1055 4.875Z',
  d21: 'M3 7.99902H21',
  d22: 'M7 4.99902H7.00898',
  d23: 'M11 4.99902H11.009',
  d24: 'M14 16.499V14.999C14 13.8944 13.1046 12.999 12 12.999C10.8954 12.999 10 13.8944 10 14.999V16.499M8.5 16.499H15.5V21.999H8.5V16.499Z',
  d25: 'M6 19.9981H3.01C3.00448 19.9981 3 19.9936 3 19.9881V2.01C3 2.00448 3.00448 2 3.01 2H20.99C20.9955 2 21 2.00448 21 2.01V19.9881C21 19.9936 20.9955 19.9981 20.99 19.9981H18',
  d26: 'M3.225 1.25C2.68652 1.25 2.25 1.68652 2.25 2.225V19.775C2.25 20.3135 2.68652 20.75 3.225 20.75H6.15V18.8H4.2V8H19.8V18.8H17.85V20.75H20.775C21.3135 20.75 21.75 20.3135 21.75 19.775V2.225C21.75 1.68652 21.3135 1.25 20.775 1.25H3.225ZM8 3.625H6V5.625H8V3.625ZM12 3.625H10V5.625H12V3.625Z',
  d27: 'M12 12.25C10.4812 12.25 9.25 13.4812 9.25 15V15.75H7.75V22.75H16.25V15.75H14.75V15C14.75 13.4812 13.5188 12.25 12 12.25ZM10.75 15V15.75H13.25V15C13.25 14.3096 12.6904 13.75 12 13.75C11.3096 13.75 10.75 14.3096 10.75 15Z',
} as const;

export const IconWebSecurityStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-security-stroke-rounded IconWebSecurityStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWebSecurityDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-security-duotone-rounded IconWebSecurityDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWebSecurityTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-security-twotone-rounded IconWebSecurityTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWebSecuritySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-security-solid-rounded IconWebSecuritySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWebSecurityBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-security-bulk-rounded IconWebSecurityBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWebSecurityStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-security-stroke-sharp IconWebSecurityStrokeSharp"
    >
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWebSecuritySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-security-solid-sharp IconWebSecuritySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWebSecurity: TheIconSelfPack = {
  name: 'WebSecurity',
  StrokeRounded: IconWebSecurityStrokeRounded,
  DuotoneRounded: IconWebSecurityDuotoneRounded,
  TwotoneRounded: IconWebSecurityTwotoneRounded,
  SolidRounded: IconWebSecuritySolidRounded,
  BulkRounded: IconWebSecurityBulkRounded,
  StrokeSharp: IconWebSecurityStrokeSharp,
  SolidSharp: IconWebSecuritySolidSharp,
};