import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12.5001C22 12.0087 21.9947 11.0172 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C9.90159 20.4836 10.7011 20.4954 11.5 20.4989',
  d2: 'M2 6L8.91302 9.92462C11.4387 11.3585 12.5613 11.3585 15.087 9.92462L22 6',
  d3: 'M22 17.5L14 17.5M22 17.5C22 16.7998 20.0057 15.4915 19.5 15M22 17.5C22 18.2002 20.0057 19.5085 19.5 20',
  d4: 'M9.09883 20.4647C11.0393 20.5118 12.9607 20.5118 14.9012 20.4647C18.0497 20.3883 19.6239 20.3501 20.755 19.2539C21.8862 18.1576 21.9189 16.6777 21.9842 13.7179V13.7178C22.0053 12.7661 22.0053 11.8201 21.9842 10.8684C21.9392 8.82941 21.9097 7.49275 21.5259 6.5L12 11.3276L2.47411 6.5C2.09032 7.49275 2.0608 8.82941 2.01576 10.8684C1.99474 11.8201 1.99475 12.7661 2.01577 13.7178C2.08114 16.6777 2.11383 18.1576 3.24496 19.2539C4.37608 20.3501 5.95033 20.3883 9.09883 20.4647Z',
  d5: 'M9.19269 2.78682C11.1485 2.73773 12.6015 2.73772 14.5573 2.78682L14.6321 2.78869C16.1415 2.82654 17.3834 2.85768 18.3843 3.03184C18.7546 3.09626 19.1039 3.18196 19.4337 3.29827C19.5214 3.3189 19.6055 3.35121 19.684 3.39408C20.1999 3.60795 20.6662 3.90762 21.0896 4.33221C21.8391 5.0838 22.1979 5.95955 22.3797 7.00542C22.5503 7.98692 22.5761 9.19819 22.6074 10.6641L22.609 10.7395C22.6221 11.3529 22.6271 11.7895 22.6241 12.2665C22.6207 12.8185 22.1618 13.2564 21.61 13.2447C21.0583 13.2329 20.6228 12.7759 20.6259 12.2239C20.6283 11.777 20.6234 11.3637 20.6109 10.7821C20.5949 10.0327 20.5808 9.39883 20.5547 8.8521C20.5354 8.44648 20.5257 8.24366 20.3789 8.16269C20.232 8.08172 20.0515 8.18402 19.6905 8.38864L15.4547 10.7894C14.1551 11.526 13.056 12.0027 11.8748 12.0027C10.6936 12.0027 9.59445 11.526 8.29484 10.7894L4.05943 8.38885C3.69841 8.18424 3.5179 8.08193 3.37106 8.1629C3.22422 8.24387 3.21455 8.44669 3.19521 8.85233C3.16915 9.399 3.15501 10.0328 3.13902 10.7821C3.11832 11.7519 3.11833 12.2536 3.13903 13.2234C3.17234 14.7839 3.19759 15.8432 3.3393 16.6584C3.47274 17.4261 3.69537 17.8822 4.0762 18.2641C4.45308 18.6421 4.91525 18.8686 5.70853 19.0066C6.54672 19.1525 7.63995 19.1824 9.2429 19.2227C9.82425 19.2373 10.3596 19.2474 10.8768 19.2532C11.428 19.2594 11.8748 19.7058 11.8748 20.2572C11.8748 20.8085 11.428 21.256 10.8768 21.2499C10.3433 21.2441 9.7916 21.2337 9.1927 21.2187L9.11784 21.2168C7.60848 21.1789 6.36661 21.1478 5.36564 20.9736C4.30327 20.7888 3.41376 20.4288 2.66036 19.6733C1.9109 18.9217 1.55205 18.0459 1.37026 17.0001C1.19965 16.0185 1.17383 14.8073 1.14258 13.3414L1.14097 13.266C1.11966 12.2678 1.11965 11.7377 1.14096 10.7395L1.14257 10.6641C1.17381 9.19814 1.19963 7.98693 1.37024 7.00541C1.55204 5.95955 1.91088 5.0838 2.66034 4.3322C3.41375 3.57665 4.30326 3.21668 5.36563 3.03184C6.36659 2.85768 7.60848 2.82654 9.11784 2.7887L9.19269 2.78682Z',
  d6: 'M13.875 18.5059C13.3227 18.5059 12.875 18.0581 12.875 17.5059C12.875 16.9536 13.3227 16.5059 13.875 16.5059L18.375 16.5059L18.375 15.9116C18.3749 15.736 18.3747 15.5203 18.3968 15.3439L18.3972 15.3405C18.413 15.2141 18.4848 14.638 19.0504 14.3637C19.6172 14.0887 20.1174 14.3907 20.2256 14.456L20.2296 14.4584C20.3826 14.5506 20.5535 14.6848 20.6941 14.7951L20.7243 14.8188C21.1001 15.1135 21.5844 15.4954 21.9754 15.8759C22.1705 16.0657 22.3717 16.283 22.5306 16.5139C22.6718 16.7191 22.875 17.0693 22.875 17.5C22.875 17.9307 22.6718 18.2809 22.5306 18.4861C22.3717 18.717 22.1705 18.9343 21.9754 19.1241C21.5844 19.5046 21.1001 19.8865 20.7243 20.1812L20.6941 20.2049C20.5535 20.3152 20.3826 20.4494 20.2296 20.5416L20.2256 20.544C20.1174 20.6093 19.6172 20.9113 19.0504 20.6363C18.4848 20.362 18.413 19.7859 18.3972 19.6595L18.3968 19.6561C18.3747 19.4797 18.3749 19.264 18.375 19.0884L18.375 18.5059L13.875 18.5059Z',
  d7: 'M22 12V3.5H2V20.5H11',
  d8: 'M2 7L12 12L22 7',
  d9: 'M14 17.5L21.4938 17.5M19 20.5L22 17.5L19 14.5',
  d10: 'M1.25 3.72368C1.25 3.18593 1.68754 2.75 2.22727 2.75H21.7727C22.3125 2.75 22.75 3.18593 22.75 3.72368V12.5H20.796V8.60217L12.0003 13L3.20508 8.6024V19.3026H12V21.25H2.22727C1.68754 21.25 1.25 20.8141 1.25 20.2763V3.72368Z',
  d11: 'M18.9216 16.5429L17.6287 15.25L19.0429 13.8358L22.75 17.5429L19.0429 21.25L17.6287 19.8358L18.9216 18.5429L13.3358 18.5429V16.5429L18.9216 16.5429Z',
} as const;

export const IconMailSend01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-01-stroke-rounded IconMailSend01StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSend01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-01-duotone-rounded IconMailSend01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSend01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-01-twotone-rounded IconMailSend01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMailSend01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-01-solid-rounded IconMailSend01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSend01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-01-bulk-rounded IconMailSend01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSend01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-01-stroke-sharp IconMailSend01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSend01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-01-solid-sharp IconMailSend01SolidSharp"
    >
      <path 
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

export const iconPackOfMailSend01: TheIconSelfPack = {
  name: 'MailSend01',
  StrokeRounded: IconMailSend01StrokeRounded,
  DuotoneRounded: IconMailSend01DuotoneRounded,
  TwotoneRounded: IconMailSend01TwotoneRounded,
  SolidRounded: IconMailSend01SolidRounded,
  BulkRounded: IconMailSend01BulkRounded,
  StrokeSharp: IconMailSend01StrokeSharp,
  SolidSharp: IconMailSend01SolidSharp,
};