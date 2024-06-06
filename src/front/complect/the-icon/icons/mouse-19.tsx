import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2V5M12 9V11',
  d2: 'M12 2C8.68629 2 6 4.68629 6 8C6 8.58014 6.08234 9.14105 6.23596 9.67168C6.66106 11.14 6.81572 12.9419 6.43525 14.4224C6.31715 14.882 6.20355 15.36 6.0501 15.8456C6.01772 15.9481 5.9993 16.0553 6.00216 16.1627C6.08838 19.4012 8.7407 22 12 22C15.2593 22 17.9116 19.4012 17.9978 16.1627C18.0007 16.0553 17.9823 15.9481 17.9499 15.8456C17.7965 15.36 17.6828 14.882 17.5647 14.4224C17.1843 12.9419 17.3389 11.14 17.764 9.67168C17.9177 9.14105 18 8.58014 18 8C18 4.68629 15.3137 2 12 2Z',
  d3: 'M10.5 6.5C10.5 6.03406 10.5 5.80109 10.5761 5.61732C10.6776 5.37229 10.8723 5.17761 11.1173 5.07612C11.3011 5 11.5341 5 12 5C12.4659 5 12.6989 5 12.8827 5.07612C13.1277 5.17761 13.3224 5.37229 13.4239 5.61732C13.5 5.80109 13.5 6.03406 13.5 6.5V7.5C13.5 7.96594 13.5 8.19891 13.4239 8.38268C13.3224 8.62771 13.1277 8.82239 12.8827 8.92388C12.6989 9 12.4659 9 12 9C11.5341 9 11.3011 9 11.1173 8.92388C10.8723 8.82239 10.6776 8.62771 10.5761 8.38268C10.5 8.19891 10.5 7.96594 10.5 7.5V6.5Z',
  d4: 'M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 8.58014 17.9177 9.14105 17.764 9.67168C17.3389 11.14 17.1843 12.9419 17.5647 14.4224C17.5877 14.5119 17.6106 14.602 17.6335 14.6928C17.7286 15.0683 17.8263 15.4545 17.9499 15.8456C17.9823 15.9481 18.0007 16.0553 17.9978 16.1627C17.9116 19.4012 15.2593 22 12 22C8.7407 22 6.08838 19.4012 6.00216 16.1627C5.9993 16.0553 6.01772 15.9481 6.0501 15.8456C6.17368 15.4545 6.27142 15.0683 6.36648 14.6928C6.38945 14.602 6.41226 14.5118 6.43525 14.4224C6.81572 12.9419 6.66106 11.14 6.23596 9.67168C6.08234 9.14105 6 8.58014 6 8ZM10.5761 5.61732C10.5 5.80109 10.5 6.03406 10.5 6.5V7.5C10.5 7.96594 10.5 8.19891 10.5761 8.38268C10.6776 8.62771 10.8723 8.82239 11.1173 8.92388C11.3011 9 11.5341 9 12 9C12.4659 9 12.6989 9 12.8827 8.92388C13.1277 8.82239 13.3224 8.62771 13.4239 8.38268C13.5 8.19891 13.5 7.96594 13.5 7.5V6.5C13.5 6.03406 13.5 5.80109 13.4239 5.61732C13.3224 5.37229 13.1277 5.17761 12.8827 5.07612C12.6989 5 12.4659 5 12 5C11.5341 5 11.3011 5 11.1173 5.07612C10.8723 5.17761 10.6776 5.37229 10.5761 5.61732Z',
  d5: 'M5.25 7.92977C5.25 4.68589 7.53825 1.97645 10.5887 1.32755C10.8813 1.2653 11.0276 1.23418 11.1388 1.32423C11.25 1.41429 11.25 1.57317 11.25 1.89095V3.77102C11.25 3.92124 11.25 3.99635 11.2286 4.0499C11.2095 4.09781 11.1963 4.11754 11.1594 4.15355C11.1181 4.19379 11.0222 4.23352 10.8303 4.31299C10.4015 4.4906 10.0608 4.83128 9.88321 5.26008C9.80099 5.45858 9.77338 5.65392 9.76126 5.83157C9.74998 5.99689 9.74999 6.19374 9.75 6.40801V6.40802L9.75 6.42978L9.75 7.45153V7.45154C9.74999 7.66581 9.74998 7.86266 9.76126 8.02798C9.77338 8.20563 9.80099 8.40097 9.88321 8.59947C10.0608 9.02827 10.4015 9.36895 10.8303 9.54657C11.0222 9.62603 11.1181 9.66576 11.1594 9.706C11.1963 9.74201 11.2095 9.76174 11.2286 9.80965C11.25 9.8632 11.25 9.93831 11.25 10.0885V10.9298C11.25 11.344 11.5858 11.6798 12 11.6798C12.4142 11.6798 12.75 11.344 12.75 10.9298V10.0885C12.75 9.93832 12.75 9.8632 12.7714 9.80965C12.7905 9.76174 12.8037 9.74201 12.8406 9.70601C12.8819 9.66576 12.9778 9.62603 13.1697 9.54657C13.5985 9.36895 13.9392 9.02827 14.1168 8.59947C14.199 8.40097 14.2266 8.20563 14.2387 8.02798C14.25 7.86266 14.25 7.66581 14.25 7.45154V6.40801C14.25 6.19374 14.25 5.99689 14.2387 5.83157C14.2266 5.65392 14.199 5.45858 14.1168 5.26008C13.9392 4.83128 13.5985 4.4906 13.1697 4.31299C12.9778 4.23352 12.8819 4.19379 12.8406 4.15355C12.8037 4.11754 12.7905 4.09781 12.7714 4.0499C12.75 3.99635 12.75 3.92124 12.75 3.77102V1.89095C12.75 1.57317 12.75 1.41429 12.8612 1.32423C12.9724 1.23418 13.1187 1.2653 13.4113 1.32755C16.4618 1.97645 18.75 4.68589 18.75 7.92977C18.75 8.5812 18.6575 9.2123 18.4845 9.81002C18.0847 11.1909 17.9534 12.8511 18.2911 14.1655C18.3857 14.539 18.5487 15.1811 18.665 15.5494C18.7176 15.7158 18.753 15.9068 18.7476 16.1124C18.6506 19.7561 15.6668 22.6798 12 22.6798C8.33317 22.6798 5.34944 19.7561 5.25243 16.1124C5.24695 15.9068 5.28238 15.7158 5.33495 15.5494C5.45132 15.1811 5.61427 14.539 5.70885 14.1655C6.04663 12.8511 5.91533 11.1909 5.51554 9.81002C5.3425 9.2123 5.25 8.5812 5.25 7.92977ZM12.0024 8.17978C12.2442 8.17978 12.3885 8.17934 12.4961 8.172C12.5191 8.17043 12.5375 8.16868 12.5521 8.16699C12.5625 8.16578 12.5676 8.16518 12.6015 8.15263C12.6353 8.14008 12.6369 8.13901 12.6401 8.13686C12.6665 8.119 12.6892 8.09625 12.7071 8.06984C12.7092 8.06667 12.7103 8.06508 12.7229 8.03124C12.7354 7.9974 12.736 7.99222 12.7372 7.98187C12.7389 7.96727 12.7407 7.94884 12.7422 7.92588C12.7496 7.81787 12.75 7.67301 12.75 7.42978V6.42978C12.75 6.18654 12.7496 6.04168 12.7422 5.93367C12.7407 5.9107 12.7389 5.89226 12.7372 5.87767C12.736 5.86732 12.7354 5.86215 12.7229 5.82831C12.7103 5.79447 12.7092 5.79289 12.7071 5.78972C12.6892 5.76331 12.6665 5.74056 12.6401 5.7227C12.6369 5.72055 12.6353 5.71948 12.6015 5.70692C12.5676 5.69437 12.5624 5.69377 12.5521 5.69256C12.5375 5.69087 12.5191 5.68912 12.4961 5.68755C12.3881 5.68018 12.2432 5.67978 12 5.67978C11.7568 5.67978 11.6119 5.68018 11.5039 5.68755C11.4809 5.68912 11.4625 5.69087 11.4479 5.69256C11.4376 5.69377 11.4324 5.69437 11.3985 5.70692C11.3647 5.71947 11.3631 5.72055 11.3599 5.72269C11.3335 5.74055 11.3108 5.76331 11.2929 5.78972C11.2908 5.79289 11.2897 5.79447 11.2771 5.82831C11.2646 5.86215 11.264 5.86732 11.2628 5.87767C11.2611 5.89226 11.2593 5.9107 11.2578 5.93367C11.2504 6.04168 11.25 6.18654 11.25 6.42978V7.42978C11.25 7.67301 11.2504 7.81787 11.2578 7.92588C11.2593 7.94885 11.2611 7.96729 11.2628 7.98189C11.264 7.99223 11.2646 7.9974 11.2771 8.03124C11.2897 8.06507 11.2908 8.06666 11.2929 8.06983C11.3108 8.09624 11.3335 8.119 11.36 8.13687C11.3631 8.13901 11.3647 8.14008 11.3985 8.15263C11.4324 8.16518 11.4375 8.16578 11.4479 8.16699C11.4625 8.16868 11.4809 8.17043 11.5039 8.172C11.6117 8.17935 11.7561 8.17978 11.9983 8.17978C11.9989 8.17977 11.9994 8.17977 12 8.17977C12.0008 8.17977 12.0016 8.17977 12.0024 8.17978Z',
  d6: 'M5.25 7.93359C5.25 4.20567 8.27208 1.18359 12 1.18359C15.7279 1.18359 18.75 4.20567 18.75 7.93359C18.75 8.58502 18.6575 9.21612 18.4845 9.81384C18.0847 11.1947 17.9534 12.8549 18.2911 14.1693C18.3857 14.5428 18.5487 15.1849 18.665 15.5532C18.7176 15.7196 18.753 15.9106 18.7476 16.1163C18.6506 19.76 15.6668 22.6836 12 22.6836C8.33317 22.6836 5.34944 19.76 5.25243 16.1163C5.24695 15.9106 5.28238 15.7196 5.33495 15.5532C5.45132 15.1849 5.61427 14.5428 5.70885 14.1693C6.04663 12.8549 5.91533 11.1947 5.51554 9.81384C5.3425 9.21612 5.25 8.58502 5.25 7.93359Z',
  d7: 'M12.75 1.22479C12.5038 1.19757 12.2535 1.18359 12 1.18359C11.7465 1.18359 11.4963 1.19757 11.25 1.22479V4.20937C11.1154 4.22652 10.9737 4.25742 10.8303 4.31681C10.4015 4.49442 10.0608 4.8351 9.88321 5.2639C9.80099 5.4624 9.77338 5.65774 9.76126 5.83539C9.74998 6.00068 9.74999 6.19749 9.75 6.41172V6.4118V6.41184V6.4336V7.45535V7.45539V7.45547C9.74999 7.6697 9.74998 7.86651 9.76126 8.0318C9.77338 8.20945 9.80099 8.40479 9.88321 8.60329C10.0608 9.03209 10.4015 9.37277 10.8303 9.55038C10.9737 9.60977 11.1154 9.64067 11.25 9.65782V10.9336C11.25 11.3478 11.5858 11.6836 12 11.6836C12.4142 11.6836 12.75 11.3478 12.75 10.9336V9.65782C12.8846 9.64067 13.0263 9.60977 13.1697 9.55038C13.5985 9.37277 13.9392 9.03209 14.1168 8.60329C14.199 8.40479 14.2266 8.20945 14.2387 8.0318C14.25 7.86648 14.25 7.66963 14.25 7.45536V6.41183C14.25 6.19756 14.25 6.00071 14.2387 5.83539C14.2266 5.65774 14.199 5.4624 14.1168 5.2639C13.9392 4.8351 13.5985 4.49442 13.1697 4.31681C13.0263 4.25742 12.8846 4.22652 12.75 4.20937V1.22479ZM12.4961 8.17582C12.3884 8.18317 12.2439 8.1836 12.0017 8.1836L12 8.18359C11.7568 8.1836 11.6119 8.18319 11.5039 8.17582C11.4371 8.17126 11.4087 8.16516 11.4013 8.16329C11.3425 8.13802 11.2956 8.09112 11.2703 8.03229C11.2684 8.02493 11.2623 7.99653 11.2578 7.9297C11.2504 7.82169 11.25 7.67683 11.25 7.4336V6.4336C11.25 6.19036 11.2504 6.0455 11.2578 5.93749C11.2623 5.87066 11.2684 5.84226 11.2703 5.83491C11.2956 5.77607 11.3425 5.72918 11.4013 5.7039C11.4087 5.70203 11.4371 5.69593 11.5039 5.69137C11.6119 5.684 11.7568 5.6836 12 5.6836C12.2432 5.6836 12.3881 5.684 12.4961 5.69137C12.5629 5.69593 12.5913 5.70203 12.5987 5.7039C12.6575 5.72918 12.7044 5.77607 12.7297 5.83491C12.7316 5.84226 12.7377 5.87066 12.7422 5.93749C12.7496 6.0455 12.75 6.19036 12.75 6.4336V7.4336C12.75 7.67683 12.7496 7.82169 12.7422 7.9297C12.7377 7.99652 12.7316 8.02493 12.7297 8.03228C12.7044 8.09112 12.6575 8.13802 12.5987 8.16329C12.5913 8.16516 12.5629 8.17126 12.4961 8.17582Z',
  d8: 'M12 2C8.68629 2 6 4.68629 6 8C6 8.58014 6.08234 9.14105 6.23596 9.67168C6.66106 11.14 6.81572 12.9419 6.43525 14.4224C6.31715 14.882 6.15345 15.5144 6 16C6.08622 19.2385 8.7407 22 12 22C15.2593 22 17.9138 19.2385 18 16C17.8466 15.5144 17.6828 14.882 17.5647 14.4224C17.1843 12.9419 17.3389 11.14 17.764 9.67168C17.9177 9.14105 18 8.58014 18 8C18 4.68629 15.3137 2 12 2Z',
  d9: 'M13.5 5H10.5V9H13.5V5Z',
  d10: 'M13.501 4.21456H12.751V1.25018C16.1255 1.62435 18.7502 4.49096 18.7502 7.97175C18.7502 8.62442 18.6577 9.25672 18.4846 9.85559C18.0848 11.2391 17.9535 12.9025 18.2913 14.2194C18.4104 14.6839 18.5691 15.2971 18.7153 15.7607L18.7532 15.881L18.7499 16.0071C18.6536 19.6314 15.6928 22.75 12.0002 22.75C8.30754 22.75 5.34673 19.6314 5.25042 16.0071L5.24707 15.881L5.28501 15.7607C5.43119 15.2971 5.58987 14.6839 5.70901 14.2194C6.04678 12.9025 5.91548 11.2391 5.5157 9.85559C5.34265 9.25672 5.25016 8.62442 5.25016 7.97175C5.25016 4.49039 7.87562 1.62342 11.251 1.25V4.21456H10.501C10.0868 4.21456 9.75098 4.55099 9.75098 4.966V8.97366C9.75098 9.38867 10.0868 9.7251 10.501 9.7251H11.251V10.9775H12.751V9.7251H13.501C13.9152 9.7251 14.251 9.38867 14.251 8.97366V4.966C14.251 4.55099 13.9152 4.21456 13.501 4.21456Z',
  d11: 'M11.251 5.71744V8.22222H12.751V5.71744H11.251Z',
} as const;

export const IconMouse19StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-19-stroke-rounded IconMouse19StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse19DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-19-duotone-rounded IconMouse19DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse19TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-19-twotone-rounded IconMouse19TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse19SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-19-solid-rounded IconMouse19SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse19BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-19-bulk-rounded IconMouse19BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse19StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-19-stroke-sharp IconMouse19StrokeSharp"
    >
      <path 
        d={d.d1} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse19SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-19-solid-sharp IconMouse19SolidSharp"
    >
      <path 
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

export const iconPackOfMouse19: TheIconSelfPack = {
  name: 'Mouse19',
  StrokeRounded: IconMouse19StrokeRounded,
  DuotoneRounded: IconMouse19DuotoneRounded,
  TwotoneRounded: IconMouse19TwotoneRounded,
  SolidRounded: IconMouse19SolidRounded,
  BulkRounded: IconMouse19BulkRounded,
  StrokeSharp: IconMouse19StrokeSharp,
  SolidSharp: IconMouse19SolidSharp,
};