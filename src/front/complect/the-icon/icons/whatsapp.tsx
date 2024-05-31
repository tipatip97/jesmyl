import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z',
  d2: 'M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118',
  d3: 'M22 12C22 17.5228 17.5228 22 12 22C10.6211 22 9.30745 21.7209 8.11235 21.2162C7.45185 20.9372 7.12161 20.7977 6.87202 20.7805C6.62244 20.7632 6.34788 20.8367 5.79877 20.9836L2 22L3.01642 18.2012C3.16334 17.6521 3.2368 17.3776 3.21953 17.128C3.20226 16.8784 3.06278 16.5481 2.78382 15.8877C2.27907 14.6926 2 13.3789 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.7044 14.5409L11.6227 15.4118L14.5638 16.7292C14.7669 16.8201 14.8685 16.8656 14.9904 16.9025C15.1124 16.9394 15.1813 16.951 15.3192 16.9742C15.5141 17.007 15.6693 17.0113 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.685 13.7142 13.3054 14.0353 12.9286 14.3542C12.8541 14.4173 12.7797 14.4803 12.7044 14.5409ZM9.45909 11.2956L8.58815 12.3773L7.27083 9.43615C7.17986 9.23305 7.13438 9.1315 7.09747 9.00956C7.06057 8.88762 7.04897 8.81868 7.02578 8.68079C6.993 8.48587 6.98869 8.33068 7.02917 8.13733C7.10979 7.75231 7.47714 7.29276 7.83495 7.12931C8.11805 7 8.40314 7 8.97332 7C9.41086 7 9.91601 7.04881 10.0008 7.58986C10.2166 8.96657 10.3244 9.65494 10.3155 9.80826C10.2858 10.315 9.96466 10.6945 9.6458 11.0713C9.58272 11.1459 9.51972 11.2203 9.45909 11.2956Z',
  d4: 'M12 1.24997C6.06296 1.24997 1.25002 6.06291 1.25002 12C1.25002 13.4809 1.54989 14.8936 2.09293 16.1794C2.23539 16.5167 2.33142 16.7446 2.39557 16.9198C2.46099 17.0984 2.47018 17.1631 2.47134 17.1797C2.47783 17.2736 2.45407 17.4013 2.29192 18.0073L1.2755 21.8061C1.20627 22.0649 1.28029 22.3409 1.46969 22.5303C1.65909 22.7197 1.93512 22.7937 2.19387 22.7245L5.99264 21.7081C6.59867 21.5459 6.72635 21.5222 6.82026 21.5287C6.83692 21.5298 6.90154 21.539 7.08019 21.6044C7.25534 21.6686 7.48326 21.7646 7.82056 21.9071C9.10634 22.4501 10.5191 22.75 12 22.75C17.9371 22.75 22.75 17.937 22.75 12C22.75 6.06291 17.9371 1.24997 12 1.24997ZM8.9729 6.24999L8.88025 6.24989C8.40058 6.24908 7.95809 6.24833 7.52291 6.44711C7.20676 6.59152 6.93775 6.83687 6.74186 7.08193C6.54597 7.32698 6.3659 7.64342 6.29467 7.98363C6.19703 8.44997 6.27755 8.8048 6.36369 9.18438L6.37558 9.23688C6.8101 11.1612 7.82592 13.048 9.38873 14.6108C10.9515 16.1737 12.8384 17.1895 14.7627 17.624L14.8152 17.6359C15.1948 17.722 15.5496 17.8025 16.0159 17.7049C16.3561 17.6337 16.6726 17.4536 16.9176 17.2577C17.1627 17.0618 17.408 16.7928 17.5525 16.4767C17.7512 16.0415 17.7505 15.599 17.7497 15.1193L17.7496 15.0267C17.7496 14.8063 17.7428 14.4352 17.5998 14.0922C17.4291 13.6824 17.0773 13.3447 16.5258 13.2582L16.5201 13.2573L16.5197 13.2573C15.8364 13.1502 15.317 13.0688 14.9496 13.0154C14.7657 12.9887 14.6131 12.9679 14.4937 12.9544C14.3955 12.9432 14.2605 12.9292 14.1475 12.9358C13.6579 12.9645 13.2686 13.163 12.967 13.3697C12.7751 13.5012 12.5665 13.6774 12.4025 13.8159C12.3381 13.8703 12.2805 13.9189 12.2336 13.9567L12.1562 14.019L12.1562 14.019C11.861 14.2567 11.7133 14.3756 11.5313 14.3719C11.3493 14.3681 11.2157 14.2512 10.9486 14.0174C10.7787 13.8687 10.6121 13.7129 10.4494 13.5502C10.2866 13.3874 10.1309 13.2209 9.98214 13.0509C9.74835 12.7839 9.63146 12.6503 9.62771 12.4683C9.62397 12.2862 9.74282 12.1386 9.98054 11.8434L10.0428 11.766C10.0807 11.719 10.1293 11.6615 10.1837 11.5971L10.1837 11.5971C10.3222 11.4331 10.4983 11.2245 10.6299 11.0326C10.8365 10.731 11.0351 10.3416 11.0638 9.85207C11.0704 9.7391 11.0564 9.60404 11.0452 9.50589C11.0316 9.38648 11.0109 9.23384 10.9842 9.04993C10.9308 8.68245 10.8493 8.16297 10.7422 7.47943L10.7413 7.47374C10.6549 6.9223 10.3172 6.5705 9.90741 6.39974C9.5644 6.25679 9.19327 6.24999 8.9729 6.24999Z',
  d5: 'M1.25002 12C1.25002 6.06294 6.06296 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.5191 22.75 9.10634 22.4501 7.82056 21.9071C7.48326 21.7646 7.25534 21.6686 7.08019 21.6045C6.90154 21.539 6.83692 21.5298 6.82026 21.5287C6.72635 21.5222 6.59867 21.5459 5.99264 21.7081L2.19387 22.7245C1.93512 22.7937 1.65909 22.7197 1.46969 22.5303C1.28029 22.3409 1.20627 22.0649 1.2755 21.8061L2.29192 18.0074C2.45407 17.4013 2.47783 17.2737 2.47134 17.1798C2.47018 17.1631 2.46099 17.0985 2.39557 16.9198C2.33142 16.7447 2.23539 16.5168 2.09293 16.1795C1.54989 14.8937 1.25002 13.4809 1.25002 12Z',
  d6: 'M8.88025 6.2501L8.9729 6.25021C9.19327 6.25021 9.5644 6.25701 9.90741 6.39995C10.3172 6.57071 10.6549 6.92251 10.7413 7.47395L10.7422 7.47964C10.8493 8.16319 10.9308 8.68266 10.9842 9.05015C11.0109 9.23405 11.0316 9.38669 11.0452 9.50611C11.0564 9.60426 11.0704 9.73931 11.0638 9.85228C11.0351 10.3418 10.8365 10.7312 10.6299 11.0328C10.4983 11.2247 10.3222 11.4333 10.1837 11.5973L10.1837 11.5973C10.1293 11.6617 10.0807 11.7192 10.0428 11.7662L9.98054 11.8436C9.74282 12.1388 9.62397 12.2865 9.62771 12.4685C9.63146 12.6505 9.74835 12.7841 9.98214 13.0512C10.1309 13.2211 10.2866 13.3876 10.4494 13.5504C10.6121 13.7131 10.7787 13.8689 10.9486 14.0176C11.2157 14.2514 11.3493 14.3683 11.5313 14.3721C11.7133 14.3758 11.861 14.257 12.1562 14.0192L12.2336 13.9569C12.2805 13.9191 12.3381 13.8705 12.4025 13.8161C12.5665 13.6776 12.7751 13.5015 12.967 13.3699C13.2686 13.1633 13.6579 12.9647 14.1475 12.936C14.2605 12.9294 14.3955 12.9434 14.4937 12.9546C14.6131 12.9681 14.7657 12.9889 14.9496 13.0156C15.3171 13.069 15.8366 13.1504 16.5201 13.2576L16.5258 13.2585C17.0773 13.3449 17.4291 13.6826 17.5998 14.0924C17.7428 14.4354 17.7496 14.8065 17.7496 15.0269L17.7497 15.1195C17.7505 15.5992 17.7512 16.0417 17.5525 16.4769C17.408 16.793 17.1627 17.062 16.9176 17.2579C16.6726 17.4538 16.3561 17.6339 16.0159 17.7051C15.5496 17.8028 15.1948 17.7222 14.8152 17.6361L14.7627 17.6242C12.8384 17.1897 10.9515 16.1739 9.38873 14.6111C7.82592 13.0482 6.8101 11.1614 6.37558 9.23709L6.36369 9.18459C6.27755 8.80501 6.19703 8.45018 6.29467 7.98384C6.3659 7.64364 6.54597 7.32719 6.74186 7.08214C6.93775 6.83709 7.20676 6.59173 7.52291 6.44732C7.95809 6.24854 8.40058 6.24929 8.88025 6.2501Z',
  d7: 'M8.63914 12.3719L10.5294 10.4817L9.97171 6.99377C9.97093 6.98892 9.96675 6.98535 9.96183 6.98535H7.02406C7.01869 6.98535 7.01428 6.98952 7.01408 6.99489C6.90186 9.94896 8.58068 13.4444 11.6225 15.4256M11.6225 15.4256C13.113 16.3965 14.9307 17.0038 17.0253 17.0057C17.0308 17.0057 17.0354 17.0012 17.0354 16.9957V14.1117C17.0354 14.1068 17.0319 14.1026 17.0271 14.1018L13.4879 13.5003L11.6225 15.4256Z',
  d8: 'M12 22.002C17.5239 22.002 22.002 17.5239 22.002 12C22.002 6.47607 17.5239 1.99805 12 1.99805C6.47607 1.99805 1.99805 6.47607 1.99805 12C1.99805 13.8889 2.43201 15.4979 3.34204 17.005L2.00256 21.9852C2.00056 21.9926 2.00737 21.9995 2.01481 21.9974L6.97044 20.666C8.48343 21.5862 10.0997 22.002 12 22.002Z',
  d9: 'M12 1.25C6.06296 1.25 1.25002 6.06294 1.25002 12C1.25002 13.8443 1.71505 15.5819 2.53467 17.1001L1.2755 21.8061C1.20627 22.0649 1.28029 22.3409 1.46969 22.5303C1.65909 22.7197 1.93512 22.7937 2.19387 22.7245L6.8999 21.4653C8.41808 22.285 10.1558 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7 6.25C6.80109 6.25 6.61032 6.32902 6.46967 6.46967C6.32902 6.61032 6.25 6.80109 6.25 7C6.25 10.2313 7.80866 13.0302 9.38928 14.6108C10.9699 16.1915 13.7688 17.75 17.0001 17.75C17.199 17.75 17.3898 17.671 17.5305 17.5303C17.6711 17.3897 17.7501 17.1989 17.7501 17V14.0805C17.7501 13.7137 17.4847 13.4007 17.1228 13.3406L13.238 12.6963L11.5188 14.4472C11.1132 14.1584 10.754 13.8542 10.4499 13.5502C10.1459 13.2461 9.84168 12.887 9.55288 12.4813L11.2962 10.7694L10.7426 6.89393C10.6898 6.52445 10.3734 6.25 10.0001 6.25H7Z',
} as const;

export const IconWhatsappStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-stroke-rounded IconWhatsappStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconWhatsappDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-duotone-rounded IconWhatsappDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWhatsappTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-twotone-rounded IconWhatsappTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWhatsappSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-solid-rounded IconWhatsappSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWhatsappBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-bulk-rounded IconWhatsappBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWhatsappStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-stroke-sharp IconWhatsappStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWhatsappSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-solid-sharp IconWhatsappSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWhatsapp: TheIconSelfPack = {
  name: 'Whatsapp',
  StrokeRounded: IconWhatsappStrokeRounded,
  DuotoneRounded: IconWhatsappDuotoneRounded,
  TwotoneRounded: IconWhatsappTwotoneRounded,
  SolidRounded: IconWhatsappSolidRounded,
  BulkRounded: IconWhatsappBulkRounded,
  StrokeSharp: IconWhatsappStrokeSharp,
  SolidSharp: IconWhatsappSolidSharp,
};