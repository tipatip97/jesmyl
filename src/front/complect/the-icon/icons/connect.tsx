import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.51255 19.4866C7.02498 21.8794 10.016 20.9223 11.2124 19.9532C11.8314 19.4518 12.1097 19.1277 12.3489 18.8884C13.1864 18.1107 13.1326 17.3331 12.5882 16.711C12.3704 16.462 10.9731 15.1198 9.63313 13.7439C8.93922 13.0499 8.46066 12.5595 8.05149 12.1647C7.50354 11.6185 7.02499 10.9922 6.30715 11.0101C5.64913 11.0101 5.17057 11.5904 4.57237 12.1886C3.88422 12.8767 3.37598 13.7439 3.19652 14.5216C2.65814 16.7947 3.49562 18.4098 4.51255 19.4866ZM4.51255 19.4866L2.00012 21.999',
  d2: 'M19.4867 4.5146C16.9736 2.12066 13.9929 3.09581 12.7962 4.06535C12.177 4.567 11.8987 4.89126 11.6593 5.13066C10.8216 5.90868 10.8755 6.68671 11.42 7.30913C11.4983 7.39869 11.7292 7.62963 12.055 7.95269M19.4867 4.5146C20.504 5.59187 21.3528 7.22535 20.8142 9.49959C20.6347 10.2776 20.1264 11.1452 19.438 11.8337C18.8397 12.4322 18.361 13.0127 17.7028 13.0127C16.9847 13.0306 16.6121 12.5114 16.064 11.965M19.4867 4.5146L21.9999 2.00098M16.064 11.965C15.6547 11.57 15.07 10.972 14.3759 10.2776C13.5175 9.396 12.6355 8.52819 12.055 7.95269M16.064 11.965L14.5024 13.4895M10.5114 9.50597L12.055 7.95269',
  d3: 'M4.75428 19.4977C2.74988 17.4933 2.74988 14.2435 4.75428 12.2391L5.48014 11.5133C6.18436 10.809 6.99626 10.8518 7.65772 11.5133L12.7387 16.5943C13.443 17.2985 13.4002 18.1104 12.7387 18.7718L12.0129 19.4977C10.0085 21.5021 6.75868 21.5021 4.75428 19.4977Z',
  d4: 'M4.76353 19.4876C7.27596 21.8804 10.267 20.9233 11.4634 19.9542C12.0824 19.4528 12.3607 19.1287 12.5999 18.8894C13.4374 18.1117 13.3836 17.3341 12.8392 16.712C12.6214 16.463 11.2241 15.1208 9.88411 13.7449C9.1902 13.0509 8.71164 12.5605 8.30247 12.1657C7.75452 11.6195 7.27597 10.9932 6.55813 11.0111C5.90011 11.0111 5.42155 11.5914 4.82335 12.1896C4.1352 12.8777 3.62696 13.7449 3.4475 14.5226C2.90912 16.7957 3.7466 18.4108 4.76353 19.4876ZM4.76353 19.4876L2.2511 22',
  d5: 'M19.738 4.51557C17.2249 2.12163 14.2442 3.09678 13.0475 4.06632C12.4283 4.56797 12.15 4.89223 11.9106 5.13163C11.0729 5.90965 11.1268 6.68768 11.6713 7.3101C11.7496 7.39966 11.9805 7.6306 12.3063 7.95366M19.738 4.51557C20.7553 5.59284 21.6041 7.22632 21.0655 9.50056C20.886 10.2786 20.3777 11.1462 19.6893 11.8347C19.091 12.4332 18.6123 13.0137 17.9541 13.0137C17.236 13.0316 16.8634 12.5124 16.3153 11.966M19.738 4.51557L22.2512 2.00195M12.3063 7.95366C12.8868 8.52916 13.7688 9.39697 14.6272 10.2786C15.3213 10.973 15.906 11.571 16.3153 11.966M12.3063 7.95366L10.7627 9.50694M16.3153 11.966L14.7537 13.4905',
  d6: 'M4.5023 19.4866C7.00529 21.8794 9.98508 20.9223 11.177 19.9532C11.7937 19.4518 12.0709 19.1277 12.3092 18.8884C13.1436 18.1107 13.09 17.3331 12.5476 16.711C12.3306 16.462 10.9386 15.1198 9.60365 13.7439C8.91234 13.0499 8.43558 12.5595 8.02795 12.1647C7.48206 11.6185 7.0053 10.9922 6.29016 11.0101C5.63461 11.0101 5.15785 11.5904 4.5619 12.1886C3.87633 12.8767 3.37 13.7439 3.19122 14.5216C2.65486 16.7947 3.48919 18.4098 4.5023 19.4866Z',
  d7: 'M4.50299 19.4863L2 21.9987',
  d8: 'M19.4206 4.49345C16.9169 2.09951 13.9474 3.07466 12.7552 4.0442C12.1384 4.54585 11.8611 4.87011 11.6226 5.10951C10.788 5.88753 10.8417 6.66556 11.3842 7.28798C11.4622 7.37754 11.6922 7.60848 12.0168 7.93154M19.4206 4.49345C20.4341 5.57072 21.2797 7.2042 20.7431 9.47844C20.5643 10.2564 20.0579 11.124 19.3721 11.8125C18.776 12.411 18.2991 12.9915 17.6434 12.9915C16.928 13.0094 16.5568 12.4902 16.0107 11.9438M16.0107 11.9438C15.603 11.5488 15.0205 10.9508 14.329 10.2564C13.4738 9.37485 12.5951 8.50704 12.0168 7.93154',
  d9: 'M19.4962 4.5146L22 2.00098M12.0925 7.95269L10.5547 9.50597M16.0864 11.965L14.5307 13.4895',
  d10: 'M7.93707 10.9819C7.50512 10.55 6.96007 10.259 6.34472 10.2502C5.72436 10.2413 5.15975 10.521 4.69883 10.9819L3.97297 11.7078C1.91672 13.764 1.70097 16.9638 3.32572 19.2601L1.54289 21.0429C1.15237 21.4334 1.15237 22.0666 1.54289 22.4571C1.93342 22.8476 2.56658 22.8476 2.95711 22.4571L4.73993 20.6743C7.03616 22.299 10.236 22.0833 12.2922 20.027L13.0181 19.3012C13.45 18.8692 13.741 18.3242 13.7498 17.7088C13.7587 17.0885 13.479 16.5239 13.0181 16.0629L7.93707 10.9819Z',
  d11: 'M22.4571 2.95711L20.6743 4.73993C22.299 7.03616 22.0833 10.236 20.027 12.2922L19.3012 13.0181C18.8692 13.45 18.3242 13.741 17.7088 13.7498C17.0885 13.7587 16.5239 13.479 16.0629 13.0181L16.0491 13.0042L15.0766 13.9766C14.7121 14.3411 14.1212 14.3411 13.7567 13.9766C13.3922 13.6121 13.3922 13.0212 13.7567 12.6567L14.7291 11.6843L12.3157 9.27087L11.3433 10.2433C10.9788 10.6078 10.3879 10.6078 10.0234 10.2433C9.65888 9.87881 9.65888 9.28786 10.0234 8.92337L10.9958 7.95094L10.9819 7.93707C10.55 7.50512 10.259 6.96007 10.2502 6.34472C10.2413 5.72436 10.521 5.15975 10.9819 4.69883L11.7078 3.97297C13.764 1.91672 16.9638 1.70097 19.2601 3.32572L21.0429 1.54289C21.4334 1.15237 22.0666 1.15237 22.4571 1.54289C22.8476 1.93342 22.8476 2.56658 22.4571 2.95711Z',
  d12: 'M10.0098 10.0132L12.0123 8.00977M14.0148 14.02L16.0173 12.0166',
  d13: 'M19.0826 4.98739C19.5993 5.48456 20.0244 6.12486 20.25 6.93614C21.0429 9.788 19.6871 11.5158 18.9424 12.182L17.599 13.4797L10.5159 6.40771C12.7578 4.17006 13.2234 3.68552 15.4953 3.48775C16.3665 3.49267 17.946 3.89372 19.0826 4.98739ZM19.0826 4.98739L21.5264 2.51074',
  d14: 'M5.01002 19.0722C5.50545 19.5906 6.14422 20.0178 6.95448 20.2459C9.80273 21.0474 11.5337 19.6961 12.2018 18.953L13.5028 17.6128L6.45472 10.5059C4.21153 12.7422 3.72585 13.2067 3.52153 15.4789C3.52391 16.3506 3.92016 17.9319 5.01002 19.0722ZM5.01002 19.0722L2.52734 21.5099',
  d15: 'M18.2929 4.29297L21.0857 1.50015L22.4999 2.91436L19.7071 5.70718L18.2929 4.29297Z',
  d16: 'M11.4278 4.43511C13.6748 2.1883 17.3178 2.1883 19.5648 4.43511C21.8117 6.68188 21.8118 10.3246 19.5649 12.5715L17.5769 14.5608L9.43947 6.42468L11.4278 4.43511Z',
  d17: 'M12.5724 19.5649C10.3254 21.8118 6.68221 21.8119 4.43525 19.5651C2.18831 17.3184 2.18825 13.6756 4.43506 11.4288L6.42314 9.43945L14.5605 17.5756L12.5724 19.5649Z',
  d18: 'M1.50008 21.0858L4.29305 18.293L5.70726 19.7072L2.91429 22.5L1.50008 21.0858Z',
  d19: 'M12.7071 8.70718L10.2071 11.2072L8.79289 9.79297L11.2929 7.29297L12.7071 8.70718ZM16.7071 12.7072L14.2071 15.2072L12.7929 13.793L15.2929 11.293L16.7071 12.7072Z',
} as const;

export const IconConnectStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="connect-stroke-rounded IconConnectStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconConnectDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="connect-duotone-rounded IconConnectDuotoneRounded"
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

export const IconConnectTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="connect-twotone-rounded IconConnectTwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconConnectSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="connect-solid-rounded IconConnectSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconConnectBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="connect-bulk-rounded IconConnectBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconConnectStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="connect-stroke-sharp IconConnectStrokeSharp"
    >
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
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconConnectSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="connect-solid-sharp IconConnectSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfConnect: TheIconSelfPack = {
  name: 'Connect',
  StrokeRounded: IconConnectStrokeRounded,
  DuotoneRounded: IconConnectDuotoneRounded,
  TwotoneRounded: IconConnectTwotoneRounded,
  SolidRounded: IconConnectSolidRounded,
  BulkRounded: IconConnectBulkRounded,
  StrokeSharp: IconConnectStrokeSharp,
  SolidSharp: IconConnectSolidSharp,
};