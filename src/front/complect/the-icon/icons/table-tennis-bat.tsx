import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 8L16 18',
  d2: 'M2.48802 18.1868C4.27193 17.0655 6.999 15.3875 7.40038 13.6847C7.52522 13.1551 7.24468 12.6415 7.00243 12.1542C5.83072 9.79703 5.80432 7.05244 7.54627 5.31272C10.584 2.27886 17.1053 0.495103 20.307 3.69226C23.505 6.88574 21.7222 13.4012 18.6842 16.4348C16.942 18.1746 14.1945 18.149 11.8339 16.9787C11.3457 16.7368 10.8314 16.4565 10.3009 16.5812C8.59557 16.982 6.91469 19.7046 5.79184 21.4859C4.57177 23.4214 0.634453 19.3518 2.48802 18.1868Z',
  d3: 'M7.54596 5.31272C10.5837 2.27886 17.105 0.495103 20.3067 3.69226C23.5047 6.88574 21.7219 13.4012 18.6839 16.4348C17.8821 17.2355 16.8673 17.6623 15.7753 17.7756L6.20508 8.20539C6.3203 7.11938 6.74724 6.11042 7.54596 5.31272Z',
  d4: 'M20.8369 3.16075C18.9935 1.31994 16.2693 0.979 13.7347 1.42648C11.1904 1.87567 8.65568 3.14389 7.01622 4.78125C6.08108 5.71519 5.5905 6.89085 5.45951 8.12546C5.43561 8.35073 5.51481 8.57473 5.675 8.73492L15.2453 18.3052C15.405 18.4649 15.6283 18.5442 15.853 18.5208C17.0935 18.3921 18.2755 17.9021 19.2141 16.9647C20.8539 15.3273 22.1232 12.7948 22.5726 10.2533C23.0203 7.72143 22.6789 5.00017 20.8369 3.16075Z',
  d5: 'M13.6913 1.18035C16.2674 0.725548 19.0893 1.06235 21.0136 2.98391C22.9367 4.90422 23.2739 7.72349 22.8188 10.2969C22.3615 12.8831 21.0709 15.4641 19.3908 17.1417C17.2291 19.3004 13.9637 19.15 11.3897 17.874C11.1744 17.7672 10.7904 17.4927 10.5297 17.554C10.0328 17.6707 9.37046 18.2013 8.60442 19.1453C7.87585 20.043 7.20802 21.1138 6.6378 22.0184C6.37061 22.4423 5.99279 22.7485 5.53235 22.898C5.0884 23.0421 4.64383 23.0164 4.25841 22.9204C3.50787 22.7333 2.80453 22.239 2.27407 21.6992C1.74236 21.1581 1.26408 20.449 1.08001 19.7055C0.985972 19.3257 0.957023 18.8865 1.09195 18.4477C1.2329 17.9894 1.53061 17.6067 1.95587 17.3394C2.8619 16.7699 3.93443 16.1031 4.83371 15.3756C5.77956 14.6104 6.3104 13.9494 6.42706 13.4545C6.48808 13.1957 6.21307 12.812 6.10697 12.5986C4.82904 10.0277 4.67726 6.76401 6.83962 4.60442C8.51928 2.92692 11.1024 1.63742 13.6913 1.18035ZM14.039 3.14989C11.8074 3.54388 9.61102 4.66319 8.25293 6.01954C6.70552 7.56497 7.04213 10.0032 7.93719 11.7868C8.27042 12.4509 8.5518 13.1579 8.37371 13.9134C8.08898 15.1213 7.05561 16.1506 6.0916 16.9305C5.13328 17.7058 4.01993 18.4049 3.15874 18.9456C3.02231 19.0313 2.97945 19.0555 3.0214 19.2249C3.09238 19.5116 3.32715 19.9174 3.70057 20.2974C4.07525 20.6787 4.46916 20.9117 4.74208 20.9797C4.92679 21.0258 4.93788 20.9646 5.03137 20.8162C5.5732 19.9558 6.2741 18.8428 7.05147 17.885C7.83291 16.9221 8.86363 15.891 10.0721 15.607C10.8277 15.4294 11.5349 15.7103 12.1994 16.0428C13.9864 16.9371 16.4285 17.2734 17.9776 15.7265C19.3356 14.3705 20.4554 12.1769 20.8494 9.94861C21.2457 7.7075 20.8754 5.6723 19.6004 4.39913C18.323 3.12353 16.2835 2.75364 14.039 3.14989Z',
  d6: 'M6.19348 8.16797L15.8422 17.8108',
  d7: 'M1.95698 18.5383L3.64887 20.1991L5.38551 21.9955C5.43253 22.0442 5.51316 22.0338 5.5461 21.9747C6.81859 19.6937 8.45652 17.2003 10.4369 16.4675C10.4369 16.4675 12.9992 17.9683 15.7674 17.7847C16.524 17.7345 17.2541 17.4685 17.8737 17.0324C18.209 16.7965 18.514 16.5404 18.8036 16.2723C19.3181 15.7959 19.7546 15.2409 20.1014 14.632C21.8664 11.5327 22.776 7.68186 20.853 4.50249C20.4998 3.91845 20.0035 3.42718 19.4162 3.07801C15.7161 0.878146 11.225 2.47416 8.25529 4.60701C7.34908 5.25784 6.58515 6.1367 6.32553 7.22065C5.57549 10.3522 7.45161 13.5443 7.45161 13.5443C6.81038 15.5089 4.19963 17.0596 2.04164 18.3414L1.97571 18.3806C1.91902 18.4143 1.90996 18.4921 1.95698 18.5383Z',
  d8: 'M20.8375 3.16124C18.9941 1.32043 16.2699 0.979488 13.7353 1.42697C11.1911 1.87616 8.65629 3.14438 7.01683 4.78174C4.96679 6.82915 5.07919 9.94831 6.31824 12.4612L6.74917 13.5276C6.65305 13.7519 6.47431 14.028 6.19492 14.3505C5.83582 14.7649 5.35971 15.2002 4.82161 15.6337C3.74563 16.5005 2.49251 17.3046 1.60143 17.8647C1.4082 17.9862 1.28079 18.189 1.25526 18.4158C1.22973 18.6426 1.30886 18.8687 1.47024 19.03L4.97046 22.53C5.13172 22.6913 5.35759 22.7704 5.58422 22.745C5.81086 22.7197 6.01363 22.5925 6.13524 22.3996C6.69741 21.5078 7.50075 20.2499 8.36749 19.1684C8.80087 18.6277 9.23593 18.1491 9.65032 17.7883C9.97228 17.508 10.2478 17.3289 10.4715 17.2326L11.5264 17.6628C14.0427 18.9007 17.1647 19.0124 19.2147 16.9652C20.8545 15.3278 22.1238 12.7953 22.5732 10.2538C23.0209 7.72192 22.6795 5.00066 20.8375 3.16124ZM7.68762 11.8461L7.67472 11.8201C7.19458 10.8542 6.93861 9.85769 6.92377 8.9231L15.057 17.0563C14.1244 17.0395 13.1309 16.784 12.1677 16.3066L12.1431 16.2944L10.5622 15.6497L10.3291 15.7045C9.72736 15.8459 9.16122 16.2254 8.66544 16.6571C8.15795 17.099 7.66018 17.6527 7.19714 18.2305C6.51749 19.0785 5.88211 20.0174 5.37045 20.8087L3.19196 18.6303C3.98286 18.1182 4.9182 17.4823 5.76279 16.8019C6.33811 16.3384 6.88899 15.8403 7.32871 15.3328C7.75837 14.8369 8.13557 14.2716 8.27695 13.6718L8.33164 13.4398L7.68762 11.8461Z',
} as const;

export const IconTableTennisBatStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-tennis-bat-stroke-rounded IconTableTennisBatStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTableTennisBatDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-tennis-bat-duotone-rounded IconTableTennisBatDuotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTableTennisBatTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-tennis-bat-twotone-rounded IconTableTennisBatTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTableTennisBatSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-tennis-bat-solid-rounded IconTableTennisBatSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTableTennisBatBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-tennis-bat-bulk-rounded IconTableTennisBatBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTableTennisBatStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-tennis-bat-stroke-sharp IconTableTennisBatStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTableTennisBatSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-tennis-bat-solid-sharp IconTableTennisBatSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTableTennisBat: TheIconSelfPack = {
  name: 'TableTennisBat',
  StrokeRounded: IconTableTennisBatStrokeRounded,
  DuotoneRounded: IconTableTennisBatDuotoneRounded,
  TwotoneRounded: IconTableTennisBatTwotoneRounded,
  SolidRounded: IconTableTennisBatSolidRounded,
  BulkRounded: IconTableTennisBatBulkRounded,
  StrokeSharp: IconTableTennisBatStrokeSharp,
  SolidSharp: IconTableTennisBatSolidSharp,
};