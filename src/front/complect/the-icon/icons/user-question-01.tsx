import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 15.8462C17 14.8266 17.8954 14 19 14C20.1046 14 21 14.8266 21 15.8462C21 16.2137 20.8837 16.5561 20.6831 16.8438C20.0854 17.7012 19 18.5189 19 19.5385V20M18.9902 22H18.9992',
  d2: 'M16 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C8.12805 13.9629 11.2057 13.6118 14 14.4281',
  d3: 'M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z',
  d4: 'M5.57757 15.4816C4.1628 16.324 0.453365 18.0441 2.71266 20.1966C3.81631 21.248 5.04549 22 6.59087 22H15.4091C16.9545 22 18.1837 21.248 19.2873 20.1966C21.5466 18.0441 17.8372 16.324 16.4224 15.4816C13.1048 13.5061 8.89519 13.5061 5.57757 15.4816Z',
  d5: 'M19.375 14.375C18.7458 14.375 18.375 14.8277 18.375 15.2212C18.375 15.7734 17.9273 16.2212 17.375 16.2212C16.8227 16.2212 16.375 15.7734 16.375 15.2212C16.375 13.5754 17.795 12.375 19.375 12.375C20.955 12.375 22.375 13.5754 22.375 15.2212C22.375 15.8046 22.1892 16.3448 21.8785 16.7907C21.6951 17.0537 21.4832 17.3014 21.2968 17.5153C21.2617 17.5556 21.2275 17.5946 21.1941 17.6327C21.0397 17.8091 20.9038 17.9645 20.7778 18.1244C20.4591 18.5286 20.375 18.759 20.375 18.9135V19.375C20.375 19.9273 19.9273 20.375 19.375 20.375C18.8227 20.375 18.375 19.9273 18.375 19.375V18.9135C18.375 18.0483 18.8336 17.3601 19.2071 16.8863C19.3681 16.682 19.5449 16.4802 19.7 16.3031C19.7306 16.2681 19.7605 16.234 19.7892 16.2011C19.9743 15.9887 20.1223 15.8126 20.2378 15.6469C20.3281 15.5174 20.375 15.3727 20.375 15.2212C20.375 14.8277 20.0042 14.375 19.375 14.375ZM18.3652 22.375C18.3652 21.8227 18.813 21.375 19.3652 21.375H19.3742C19.9265 21.375 20.3742 21.8227 20.3742 22.375C20.3742 22.9273 19.9265 23.375 19.3742 23.375H19.3652C18.813 23.375 18.3652 22.9273 18.3652 22.375Z',
  d6: 'M7.125 5.875C7.125 2.9755 9.4755 0.625 12.375 0.625C15.2745 0.625 17.625 2.9755 17.625 5.875C17.625 8.77449 15.2745 11.125 12.375 11.125C9.4755 11.125 7.125 8.77449 7.125 5.875Z',
  d7: 'M12.9799 12.7375C11.9161 12.5875 10.8343 12.5875 9.77043 12.7375C8.30596 12.9441 6.87389 13.4352 5.56904 14.2122C5.45277 14.2814 5.30912 14.3624 5.14652 14.4542L5.14639 14.4543C4.43357 14.8564 3.35606 15.4643 2.6179 16.1868C2.15623 16.6387 1.71757 17.2342 1.63783 17.9638C1.55302 18.7396 1.89149 19.4677 2.5705 20.1146C3.74195 21.2306 5.14774 22.125 6.96604 22.125H15.7843C16.0232 22.125 16.2551 22.1096 16.4802 22.0802C16.6572 22.0571 16.7457 22.0456 16.8125 21.99C16.8793 21.9345 16.915 21.8242 16.9866 21.6035C17.0261 21.4814 17.0748 21.3635 17.1318 21.2504C17.2366 21.0429 17.2889 20.9391 17.2891 20.8683C17.2894 20.7974 17.2377 20.6933 17.1343 20.485C16.9683 20.1506 16.875 19.7737 16.875 19.375V18.9135C16.875 18.7374 16.8867 18.5671 16.9081 18.4029C16.9511 18.0717 16.9726 17.9061 16.9234 17.8191C16.8742 17.732 16.7069 17.6586 16.3722 17.5119C15.4907 17.1255 14.875 16.2452 14.875 15.2212C14.875 14.7688 14.9424 14.3422 15.0657 13.946C15.1668 13.6212 15.2173 13.4588 15.1587 13.3484C15.1001 13.2379 14.9599 13.1957 14.6797 13.1112C14.1219 12.9429 13.5534 12.8184 12.9799 12.7375Z',
  d8: 'M12.375 0.625C9.4755 0.625 7.125 2.9755 7.125 5.875C7.125 8.77449 9.4755 11.125 12.375 11.125C15.2745 11.125 17.625 8.77449 17.625 5.875C17.625 2.9755 15.2745 0.625 12.375 0.625Z',
  d9: 'M9.77043 12.7375C10.8343 12.5875 11.9161 12.5875 12.9799 12.7375C13.5534 12.8184 14.1219 12.9429 14.6797 13.1112C14.9599 13.1957 15.1001 13.2379 15.1587 13.3484C15.2173 13.4588 15.1668 13.6212 15.0657 13.946C14.9424 14.3422 14.875 14.7688 14.875 15.2212C14.875 16.2452 15.4907 17.1255 16.3722 17.5119C16.7069 17.6586 16.8742 17.732 16.9234 17.8191C16.9726 17.9061 16.9511 18.0717 16.9081 18.4029C16.8867 18.5671 16.875 18.7374 16.875 18.9135V19.375C16.875 19.7737 16.9683 20.1506 17.1343 20.485C17.2377 20.6933 17.2894 20.7974 17.2891 20.8683C17.2889 20.9391 17.2366 21.0429 17.1318 21.2504C17.0748 21.3635 17.0261 21.4814 16.9866 21.6035C16.915 21.8242 16.8793 21.9345 16.8125 21.99C16.7457 22.0456 16.6572 22.0571 16.4802 22.0802C16.2551 22.1096 16.0232 22.125 15.7843 22.125H6.96604C5.14774 22.125 3.74195 21.2306 2.5705 20.1146C1.89149 19.4677 1.55302 18.7396 1.63783 17.9638C1.71757 17.2342 2.15623 16.6387 2.6179 16.1868C3.35606 15.4643 4.43357 14.8564 5.14639 14.4543C5.30895 14.3625 5.45279 14.2814 5.56904 14.2122C6.87389 13.4352 8.30596 12.9441 9.77043 12.7375Z',
  d10: 'M17 15.8462C17 14.8266 17.8954 14 19 14C20.1046 14 21 14.8266 21 15.8462C21 16.2137 20.8837 16.5561 20.6831 16.8438C20.0854 17.7012 19 18.5189 19 19.5385M18.9902 22V20.5',
  d11: 'M15 20H3C3 16.134 6.58172 13 11 13C12.4571 13 13.8233 13.3409 15 13.9365M15 6C15 8.20914 13.2091 10 11 10C8.79086 10 7 8.20914 7 6C7 3.79086 8.79086 2 11 2C13.2091 2 15 3.79086 15 6Z',
  d12: 'M18.75 15.75C18.1208 15.75 17.75 16.2027 17.75 16.5962H15.75C15.75 14.9504 17.17 13.75 18.75 13.75C20.33 13.75 21.75 14.9504 21.75 16.5962C21.75 17.1796 21.5642 17.7198 21.2535 18.1657C21.0701 18.4287 20.8582 18.6764 20.6718 18.8903C20.6367 18.9306 20.6025 18.9696 20.5691 19.0077C20.4147 19.1841 20.2788 19.3395 20.1528 19.4994C19.8341 19.9036 19.75 20.134 19.75 20.2885H17.75C17.75 19.4233 18.2086 18.7351 18.5821 18.2613C18.7431 18.057 18.9199 17.8552 19.075 17.6781C19.1056 17.6431 19.1355 17.609 19.1642 17.5761C19.3493 17.3637 19.4973 17.1876 19.6128 17.0219C19.7031 16.8924 19.75 16.7477 19.75 16.5962C19.75 16.2027 19.3792 15.75 18.75 15.75ZM19.7402 21.25V22.75H17.7402V21.25H19.7402Z',
  d13: 'M11 1.25C8.37665 1.25 6.25 3.37665 6.25 6C6.25 8.62335 8.37665 10.75 11 10.75C13.6234 10.75 15.75 8.62335 15.75 6C15.75 3.37665 13.6234 1.25 11 1.25Z',
  d14: 'M11 12.25C6.26471 12.25 2.25 15.6289 2.25 20V20.75H16.2402V19.75C16.3301 19.0947 16.6188 18.5375 16.8765 18.0962H14.25V16.5962C14.25 15.2921 14.8099 14.2015 15.6563 13.439C14.2972 12.6828 12.6947 12.25 11 12.25Z',
} as const;

export const IconUserQuestion01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-01-stroke-rounded IconUserQuestion01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserQuestion01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-01-duotone-rounded IconUserQuestion01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserQuestion01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-01-twotone-rounded IconUserQuestion01TwotoneRounded"
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

export const IconUserQuestion01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-01-solid-rounded IconUserQuestion01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserQuestion01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-01-bulk-rounded IconUserQuestion01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconUserQuestion01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-01-stroke-sharp IconUserQuestion01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserQuestion01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-01-solid-sharp IconUserQuestion01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfUserQuestion01: TheIconSelfPack = {
  name: 'UserQuestion01',
  StrokeRounded: IconUserQuestion01StrokeRounded,
  DuotoneRounded: IconUserQuestion01DuotoneRounded,
  TwotoneRounded: IconUserQuestion01TwotoneRounded,
  SolidRounded: IconUserQuestion01SolidRounded,
  BulkRounded: IconUserQuestion01BulkRounded,
  StrokeSharp: IconUserQuestion01StrokeSharp,
  SolidSharp: IconUserQuestion01SolidSharp,
};