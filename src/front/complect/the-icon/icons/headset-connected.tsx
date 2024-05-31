import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 13.8045C18 13.4588 18 13.286 18.0416 13.132C18.1626 12.6844 18.4814 12.5108 18.8009 12.3289C19.16 12.1244 19.3396 12.0222 19.5175 12.0042C19.7194 11.9838 19.9218 12.0382 20.0944 12.1593C20.3233 12.3198 20.4829 12.6249 20.6463 12.873C21.401 14.0188 21.7784 14.5918 21.9164 15.2236C22.0279 15.7334 22.0279 16.2666 21.9164 16.7764C21.715 17.6979 21.0788 18.4704 20.6078 19.1854C20.3669 19.5511 20.2465 19.734 20.0944 19.8407C19.9218 19.9618 19.7194 20.0162 19.5175 19.9958C19.3396 19.9778 19.16 19.8756 18.8009 19.6711C18.4814 19.4892 18.1626 19.3156 18.0416 18.868C18 18.714 18 18.5412 18 18.1955V13.8045Z',
  d2: 'M9 15.1148C9.86163 14.4098 10.8907 14 11.9959 14C13.1047 14 14.1367 14.4123 15 15.1215M13.6307 17.5C13.1386 17.1913 12.5834 17.0177 11.9959 17.0177C11.4114 17.0177 10.8588 17.1896 10.3686 17.4954',
  d3: 'M12 20H12.0064',
  d4: 'M6 13.8045C6 13.3693 5.99022 12.9782 5.70873 12.6722C5.60634 12.5609 5.4706 12.4836 5.19913 12.329C4.84001 12.1246 4.66045 12.0224 4.48253 12.0044C3.94873 11.9504 3.66154 12.4058 3.3537 12.8731C2.599 14.0189 2.22165 14.5918 2.08357 15.2236C1.97214 15.7334 1.97214 16.2666 2.08357 16.7764C2.28496 17.6979 2.92122 18.4702 3.39217 19.1852C3.68903 19.6359 3.97261 20.0472 4.48253 19.9956C4.66045 19.9776 4.84001 19.8754 5.19913 19.6709C5.4706 19.5164 5.60634 19.4391 5.70873 19.3278C5.99022 19.0218 6 18.6307 6 18.1954V13.8045Z',
  d5: 'M20 12V10.875C20 6.52576 16.4183 3 12 3C7.58172 3 4 6.52576 4 10.875V12',
  d6: 'M18 13.8045C18 13.3693 18.0098 12.9782 18.2913 12.6722C18.3937 12.5609 18.5294 12.4836 18.8009 12.329C19.16 12.1246 19.3396 12.0224 19.5175 12.0044C20.0513 11.9504 20.3385 12.4058 20.6463 12.8731C21.401 14.0189 21.7784 14.5918 21.9164 15.2236C22.0279 15.7334 22.0279 16.2666 21.9164 16.7764C21.715 17.6979 21.0788 18.4702 20.6078 19.1852C20.311 19.6359 20.0274 20.0472 19.5175 19.9956C19.3396 19.9776 19.16 19.8754 18.8009 19.6709C18.5294 19.5164 18.3937 19.4391 18.2913 19.3278C18.0098 19.0218 18 18.6307 18 18.1954V13.8045Z',
  d7: 'M12 4C8.1191 4 5 7.09283 5 10.875V13H3V10.875C3 5.95868 7.04434 2 12 2C16.9557 2 21 5.95868 21 10.875V13H19V10.875C19 7.09283 15.8809 4 12 4Z',
  d8: 'M8.52504 14.5344C9.50449 13.7329 10.6977 13.25 11.9959 13.25C13.2983 13.25 14.4949 13.736 15.4761 14.542C15.7962 14.8049 15.8425 15.2775 15.5795 15.5976C15.3166 15.9177 14.844 15.964 14.5239 15.7011C13.7785 15.0887 12.9111 14.75 11.9959 14.75C11.0836 14.75 10.2188 15.0866 9.475 15.6953C9.15444 15.9576 8.68192 15.9104 8.4196 15.5898C8.15727 15.2693 8.20448 14.7967 8.52504 14.5344ZM9.9717 16.859C10.5713 16.485 11.2601 16.2677 11.9959 16.2677C12.7356 16.2677 13.4276 16.4872 14.0292 16.8646C14.3801 17.0847 14.4862 17.5476 14.2661 17.8985C14.046 18.2494 13.5831 18.3555 13.2322 18.1354C12.8497 17.8955 12.4313 17.7677 11.9959 17.7677C11.5627 17.7677 11.1464 17.8942 10.7655 18.1317C10.414 18.3509 9.95143 18.2437 9.73223 17.8923C9.51303 17.5408 9.62024 17.0782 9.9717 16.859Z',
  d9: 'M11 20C11 19.4477 11.4477 19 12 19H12.0064C12.5587 19 13.0064 19.4477 13.0064 20C13.0064 20.5523 12.5587 21 12.0064 21H12C11.4477 21 11 20.5523 11 20Z',
  d10: 'M19.4169 11.0096C20.0428 10.9463 20.5211 11.2058 20.8496 11.513C21.145 11.7892 21.3582 12.1359 21.5789 12.4712C22.2392 13.4723 22.7149 14.1936 22.8934 15.0102C23.0355 15.6607 23.0355 16.3395 22.8934 16.9901C22.759 17.6048 22.4873 18.1368 22.2164 18.58C22.055 18.8439 21.8517 19.1387 21.679 19.389C21.4085 19.7811 21.1662 20.2068 20.807 20.5262C20.4759 20.8206 20.0103 21.0507 19.4169 20.9907C19.1667 20.9654 18.9593 20.8835 18.7971 20.8062C18.6093 20.7167 18.4301 20.6105 18.2493 20.508C18.039 20.3893 17.7682 20.2364 17.5553 20.005C16.9965 19.3976 16.9988 18.6388 16.9999 18.2447L17 18.1956V13.8047L16.9999 13.7556C16.9988 13.3615 16.9965 12.6027 17.5553 11.9953C17.7682 11.7639 18.039 11.611 18.2493 11.4923C18.4302 11.3899 18.6092 11.2836 18.7971 11.1941C18.9593 11.1168 19.1667 11.0349 19.4169 11.0096Z',
  d11: 'M4.58311 11.0096C3.95716 10.9463 3.4789 11.2058 3.15036 11.513C2.85499 11.7892 2.64181 12.1359 2.42106 12.4712C1.76081 13.4723 1.28511 14.1936 1.10663 15.0102C0.964456 15.6607 0.964456 16.3395 1.10663 16.9901C1.24098 17.6048 1.51268 18.1368 1.78359 18.58C1.94496 18.8439 2.14835 19.1387 2.32103 19.389C2.59154 19.7811 2.83376 20.2068 3.19299 20.5262C3.52408 20.8206 3.98971 21.0507 4.58311 20.9907C4.8333 20.9654 5.04067 20.8835 5.20294 20.8062C5.39068 20.7167 5.56995 20.6105 5.75072 20.508C5.96097 20.3893 6.23182 20.2364 6.44469 20.005C7.00345 19.3976 7.00124 18.6388 7.0001 18.2447L7 18.1956V13.8047L7.0001 13.7556C7.00124 13.3615 7.00345 12.6027 6.44469 11.9953C6.23182 11.7639 5.96097 11.611 5.75073 11.4923C5.56982 11.3899 5.39076 11.2836 5.20294 11.1941C5.04067 11.1168 4.83331 11.0349 4.58311 11.0096Z',
  d12: 'M17 13V19L19 20C20.6725 18.5478 21.5088 17.8217 21.8148 17.021C21.9429 16.6859 22.0045 16.3428 21.9997 16C22.0045 15.6572 21.9429 15.3141 21.8148 14.979C21.5088 14.1783 20.6725 13.4522 19 12L17 13Z',
  d13: 'M7 13V19L5 20C3.32748 18.5478 2.49121 17.8217 2.18521 17.021C2.05713 16.6859 1.99548 16.3428 2.00026 16C1.99548 15.6572 2.05713 15.3141 2.18521 14.979C2.49121 14.1783 3.32748 13.4522 5 12L7 13Z',
  d14: 'M19 12V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V12',
  d15: 'M11.9943 13.5C10.6961 13.5 9.50288 13.9829 8.52344 14.7844L9.4734 15.9453C10.2172 15.3366 11.082 15 11.9943 15C12.9095 15 13.7769 15.3387 14.5223 15.9511L15.4745 14.792C14.4933 13.986 13.2967 13.5 11.9943 13.5Z',
  d16: 'M11.9943 16.5177C11.2585 16.5177 10.5697 16.735 9.97009 17.109L10.7639 18.3817C11.1448 18.1442 11.5611 18.0177 11.9943 18.0177C12.4297 18.0177 12.8481 18.1455 13.2306 18.3854L14.0276 17.1146C13.426 16.7372 12.734 16.5177 11.9943 16.5177Z',
  d17: 'M12 19.25C11.4477 19.25 11 19.6977 11 20.25C11 20.8023 11.4477 21.25 12 21.25H12.0064C12.5586 21.25 13.0064 20.8023 13.0064 20.25C13.0064 19.6977 12.5586 19.25 12.0064 19.25H12Z',
  d18: 'M6 10.75C6 7.43629 8.68629 4.75 12 4.75C15.3137 4.75 18 7.43629 18 10.75V12.0164L16.25 12.8914V19.8185L19.1131 21.25L19.5162 20.9C20.3317 20.192 20.9771 19.6316 21.4541 19.1476C21.9375 18.657 22.3077 18.1873 22.5154 17.6437C22.6749 17.2263 22.7546 16.7925 22.7498 16.3549C22.7546 15.9173 22.6749 15.4836 22.5154 15.0662C22.3077 14.5226 21.9375 14.0529 21.4541 13.5623C21.0757 13.1783 20.5913 12.7463 20 12.2305V10.75C20 6.33172 16.4183 2.75 12 2.75C7.58172 2.75 4 6.33172 4 10.75V12.2306C3.40874 12.7464 2.92433 13.1784 2.54595 13.5624C2.0625 14.053 1.69235 14.5227 1.48462 15.0662C1.3251 15.4837 1.24544 15.9174 1.2502 16.355C1.24544 16.7926 1.3251 17.2264 1.48462 17.6438C1.69235 18.1873 2.0625 18.6571 2.54595 19.1477C3.02289 19.6317 3.66827 20.192 4.48377 20.9001L4.88692 21.2501L7.75 19.8186V12.8915L6 12.0165V10.75Z',
} as const;

export const IconHeadsetConnectedStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-connected-stroke-rounded IconHeadsetConnectedStrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHeadsetConnectedDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-connected-duotone-rounded IconHeadsetConnectedDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHeadsetConnectedTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-connected-twotone-rounded IconHeadsetConnectedTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHeadsetConnectedSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-connected-solid-rounded IconHeadsetConnectedSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconHeadsetConnectedBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-connected-bulk-rounded IconHeadsetConnectedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconHeadsetConnectedStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-connected-stroke-sharp IconHeadsetConnectedStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="square" 
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

export const IconHeadsetConnectedSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-connected-solid-sharp IconHeadsetConnectedSolidSharp"
    >
      <path 
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHeadsetConnected: TheIconSelfPack = {
  name: 'HeadsetConnected',
  StrokeRounded: IconHeadsetConnectedStrokeRounded,
  DuotoneRounded: IconHeadsetConnectedDuotoneRounded,
  TwotoneRounded: IconHeadsetConnectedTwotoneRounded,
  SolidRounded: IconHeadsetConnectedSolidRounded,
  BulkRounded: IconHeadsetConnectedBulkRounded,
  StrokeSharp: IconHeadsetConnectedStrokeSharp,
  SolidSharp: IconHeadsetConnectedSolidSharp,
};