import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 13.4909C21.7253 17.7332 18.3866 21.1125 14.1951 21.3905C12.7652 21.4854 11.2722 21.4852 9.84518 21.3905C9.35376 21.3579 8.81812 21.2409 8.3568 21.0513C7.84352 20.8403 7.58684 20.7348 7.45641 20.7508C7.32598 20.7668 7.13674 20.9061 6.75825 21.1846C6.09092 21.6757 5.25021 22.0285 4.00346 21.9982C3.37302 21.9829 3.0578 21.9752 2.91669 21.7351C2.77557 21.495 2.95132 21.1626 3.30283 20.4978C3.79035 19.5758 4.09923 18.5203 3.63119 17.6746C2.82509 16.4666 2.14038 15.036 2.04032 13.4909C1.98656 12.6607 1.98656 11.8009 2.04032 10.9707C2.31504 6.72838 5.65374 3.34913 9.84518 3.07107C10.7223 3.01289 11.6242 2.99039 12.5212 3.00372',
  d2: 'M16.5312 5.35997V3.95232C16.5312 2.87408 17.4127 2 18.5 2C18.9887 2 19.4359 2.1766 19.7801 2.46895M17.8437 11H19.1563C20.1777 11 20.6884 11 21.0749 10.7951C21.3802 10.6333 21.6302 10.3854 21.7934 10.0827C22 9.6993 22 9.19286 22 8.17998C22 7.16711 22 6.66067 21.7934 6.2773C21.6302 5.9746 21.3802 5.72668 21.0749 5.56488C20.6884 5.35997 20.1777 5.35997 19.1563 5.35997H17.8437C16.8223 5.35997 16.3116 5.35997 15.9251 5.56488C15.6198 5.72668 15.3698 5.9746 15.2066 6.2773C15 6.66067 15 7.16711 15 8.17998C15 9.19286 15 9.6993 15.2066 10.0827C15.3698 10.3854 15.6198 10.6333 15.9251 10.7951C16.3116 11 16.8223 11 17.8437 11Z',
  d3: 'M11.9953 12.5H12.0042M7.99976 12.5H8.00873',
  d4: 'M21.9598 13.4909C21.6856 17.7332 18.3536 21.1125 14.1706 21.3905C12.7435 21.4854 11.2536 21.4852 9.8294 21.3905C9.33896 21.3579 8.8044 21.2409 8.34401 21.0513C7.83182 20.8403 7.5756 20.7348 7.44544 20.7508C7.31527 20.7668 7.1264 20.9061 6.74868 21.1846C6.08268 21.6757 5.24367 22.0285 3.99943 21.9982C3.37027 21.9829 3.05567 21.9752 2.91484 21.7351C2.77401 21.495 2.94941 21.1626 3.30021 20.4978C3.78674 19.5758 4.09501 18.5203 3.62791 17.6746C2.82343 16.4666 2.1401 15.036 2.04024 13.4909C1.98659 12.6607 1.98659 11.8009 2.04024 10.9707C2.31441 6.72838 5.64639 3.34913 9.8294 3.07107C11.2536 2.97641 12.7435 2.97621 14.1706 3.07107C16.1823 3.2048 17.9971 4.05575 19.3697 5.375H17.625C16.8096 5.375 16.4019 5.375 16.0803 5.51773C15.6515 5.70803 15.3108 6.07304 15.1332 6.53247C15 6.87704 15 7.31386 15 8.1875C15 9.06114 15 9.49796 15.1332 9.84253C15.3108 10.302 15.6515 10.667 16.0803 10.8573C16.4019 11 16.8096 11 17.625 11H19.375C20.1904 11 20.5981 11 20.9197 10.8573C21.3201 10.6796 21.6437 10.3495 21.8294 9.93254C21.8931 10.2718 21.937 10.6183 21.9598 10.9707C22.0134 11.8009 22.0134 12.6607 21.9598 13.4909Z',
  d5: 'M15.7813 3.95232C15.7813 2.45396 17.0044 1.25 18.5 1.25C19.1725 1.25 19.7904 1.49372 20.2656 1.89733C20.5813 2.16548 20.6198 2.63879 20.3517 2.95449C20.0835 3.27019 19.6102 3.30873 19.2945 3.04058C19.0813 2.85948 18.8049 2.75 18.5 2.75C17.821 2.75 17.2813 3.29421 17.2813 3.95232V4.61162C17.4472 4.60996 17.6244 4.60996 17.8129 4.60997H19.1871C19.6715 4.60996 20.0813 4.60994 20.4167 4.63824C20.7683 4.66789 21.1063 4.73264 21.4262 4.90222C21.8618 5.13313 22.2197 5.48753 22.4536 5.92145C22.6257 6.24083 22.6914 6.57833 22.7214 6.92848C22.75 7.2619 22.75 7.66893 22.75 8.14877V8.2112C22.75 8.69104 22.75 9.09807 22.7214 9.43149C22.6914 9.78163 22.6257 10.1191 22.4536 10.4385C22.2197 10.8724 21.8618 11.2268 21.4262 11.4578C21.1063 11.6273 20.7683 11.6921 20.4167 11.7217C20.0813 11.75 19.6715 11.75 19.1871 11.75H19.1871H17.8129H17.8129C17.3285 11.75 16.9187 11.75 16.5833 11.7217C16.2317 11.6921 15.8937 11.6273 15.5738 11.4578C15.1382 11.2268 14.7803 10.8724 14.5464 10.4385C14.3743 10.1191 14.3086 9.78163 14.2786 9.43149C14.25 9.09807 14.25 8.69105 14.25 8.21122V8.21119V8.14878V8.14875C14.25 7.66892 14.25 7.2619 14.2786 6.92848C14.3086 6.57833 14.3743 6.24083 14.5464 5.92145C14.7803 5.48753 15.1382 5.13313 15.5738 4.90222C15.6421 4.86599 15.7113 4.83455 15.7813 4.80722V3.95232Z',
  d6: 'M14.5654 2.45243C14.481 2.35153 14.2983 2.34281 13.933 2.32538C12.5888 2.26123 10.9877 2.24221 9.77965 2.32252C5.213 2.62608 1.58971 6.31237 1.2918 10.9221C1.23606 11.7846 1.23606 12.6766 1.2918 13.539C1.40272 15.2554 2.15148 16.8038 2.9838 18.0602C3.23314 18.5417 3.10323 19.2639 2.6369 20.1476L2.61542 20.1883C2.45873 20.485 2.30536 20.7755 2.21688 21.0232C2.12313 21.2856 2.02623 21.7023 2.2679 22.1143C2.48996 22.4929 2.84475 22.6316 3.13152 22.6871C3.36961 22.7331 3.66155 22.7401 3.93544 22.7467L3.98117 22.7478C5.40091 22.7823 6.40136 22.3724 7.1938 21.788L7.28907 21.7179C7.40859 21.63 7.46835 21.586 7.54604 21.5764C7.62373 21.5667 7.69203 21.5946 7.82861 21.6502C7.89626 21.6778 7.97233 21.7091 8.05839 21.7446C8.59977 21.9675 9.21472 22.1011 9.77965 22.1387C11.2369 22.2355 12.7601 22.2357 14.2203 22.1387C18.787 21.8351 22.4103 18.1488 22.7082 13.539C22.7106 13.5019 22.7129 13.4647 22.7151 13.4274C22.7366 13.062 22.7474 12.8793 22.6812 12.7912C22.6381 12.734 22.5947 12.704 22.5261 12.6838C22.4204 12.6527 22.2244 12.7397 21.8324 12.9136C21.3373 13.1334 20.8656 13.199 20.4966 13.226C20.1695 13.2499 19.7934 13.2498 19.4375 13.2498H17.5625C17.2066 13.2498 16.8305 13.2499 16.5034 13.226C16.1344 13.199 15.6627 13.1334 15.1676 12.9136C14.1643 12.4684 13.415 11.6376 13.0346 10.6537C12.8502 10.1767 12.7946 9.7237 12.7712 9.3562C12.75 9.02251 12.75 8.63389 12.75 8.2456V8.12889C12.75 7.7406 12.75 7.35207 12.7712 7.01838C12.7946 6.65089 12.8502 6.19786 13.0346 5.72093C13.2913 5.05692 13.7161 4.46262 14.2735 4.00951C14.3899 3.91495 14.448 3.86767 14.4764 3.81491C14.5048 3.76215 14.5117 3.69345 14.5255 3.55606V3.55605C14.5371 3.43946 14.5527 3.29701 14.572 3.14899C14.6239 2.75188 14.6498 2.55333 14.5654 2.45243ZM8 11.4999C7.44772 11.4999 7 11.9476 7 12.4999C7 13.0522 7.44772 13.4999 8 13.4999H8.00897C8.56126 13.4999 9.00897 13.0522 9.00897 12.4999C9.00897 11.9476 8.56126 11.4999 8.00897 11.4999H8ZM11.9955 11.4999C11.4432 11.4999 10.9955 11.9476 10.9955 12.4999C10.9955 13.0522 11.4432 13.4999 11.9955 13.4999H12.0045C12.5568 13.4999 13.0045 13.0522 13.0045 12.4999C13.0045 11.9476 12.5568 11.4999 12.0045 11.4999H11.9955Z',
  d7: 'M13.933 2.32544C14.2983 2.34287 14.481 2.35159 14.5654 2.45249C14.6498 2.55339 14.6239 2.75194 14.572 3.14905C14.5527 3.29708 14.5371 3.43952 14.5255 3.55611C14.5117 3.69351 14.5049 3.76221 14.4764 3.81497C14.448 3.86773 14.3899 3.91501 14.2735 4.00957C13.7161 4.46268 13.2913 5.05698 13.0346 5.72099C12.8502 6.19792 12.7946 6.65095 12.7712 7.01844C12.75 7.35213 12.75 7.74066 12.75 8.12895V8.24566C12.75 8.63396 12.75 9.02257 12.7712 9.35626C12.7946 9.72376 12.8502 10.1768 13.0346 10.6537C13.415 11.6376 14.1643 12.4684 15.1676 12.9137C15.6627 13.1334 16.1344 13.199 16.5034 13.226C16.8305 13.2499 17.2066 13.2499 17.5625 13.2499H19.4375C19.7934 13.2499 20.1695 13.2499 20.4966 13.226C20.8656 13.199 21.3373 13.1334 21.8324 12.9137C22.2244 12.7397 22.4204 12.6527 22.5261 12.6838C22.5947 12.704 22.6381 12.7341 22.6812 12.7913C22.7474 12.8793 22.7366 13.062 22.7151 13.4275C22.7129 13.4647 22.7106 13.5019 22.7082 13.5391C22.4103 18.1489 18.787 21.8352 14.2204 22.1387C12.7601 22.2358 11.2369 22.2356 9.77965 22.1387C9.21472 22.1012 8.59978 21.9676 8.05839 21.7446C7.97233 21.7092 7.89626 21.6779 7.82861 21.6503C7.69203 21.5946 7.62373 21.5668 7.54604 21.5765C7.46835 21.5861 7.40859 21.63 7.28907 21.7179C7.25946 21.7397 7.22778 21.7631 7.1938 21.7881C6.40136 22.3725 5.40092 22.7824 3.98117 22.7478L3.93544 22.7467C3.66155 22.7402 3.36961 22.7332 3.13152 22.6871C2.84475 22.6316 2.48996 22.493 2.26791 22.1144C2.02623 21.7023 2.12313 21.2857 2.21688 21.0232C2.30536 20.7756 2.45874 20.4851 2.61542 20.1883L2.6369 20.1476C3.10323 19.2639 3.23314 18.5418 2.98381 18.0603C2.15148 16.8039 1.40272 15.2555 1.2918 13.5391C1.23607 12.6767 1.23607 11.7846 1.2918 10.9222C1.58972 6.31243 5.213 2.62614 9.77965 2.32258C10.9877 2.24228 12.5888 2.26129 13.933 2.32544Z',
  d8: 'M7 12.5C7 11.9477 7.44772 11.5 8 11.5H8.00897C8.56126 11.5 9.00897 11.9477 9.00897 12.5C9.00897 13.0523 8.56126 13.5 8.00897 13.5H8C7.44772 13.5 7 13.0523 7 12.5ZM10.9955 12.5C10.9955 11.9477 11.4432 11.5 11.9955 11.5H12.0045C12.5568 11.5 13.0045 11.9477 13.0045 12.5C13.0045 13.0523 12.5568 13.5 12.0045 13.5H11.9955C11.4432 13.5 10.9955 13.0523 10.9955 12.5Z',
  d9: 'M16.3513 5.5V4C16.3513 2.89543 17.2376 2 18.331 2C18.9223 2 19.4531 2.26188 19.8159 2.67709M14.8665 5.5H21.7956V11H14.8665V5.5Z',
  d10: 'M11.8921 12.5H11.9009M7.93701 12.5H7.94589',
  d11: 'M9.44394 2.99519C1.21121 4.58356 0.256887 13.4 3.60934 18.0029L2.02434 21.9223C1.99438 21.9974 1.98526 22.0203 2.06124 21.9914L6.42046 20.5028C8.74785 21.9914 14.8902 21.8206 17.0767 20.648C19.0669 19.5807 21.3859 17.6036 21.7692 13.6145M9.44394 2.99519C9.58478 2.9869 9.78271 2.99392 9.93615 2.99523M9.44394 2.99519L9.93615 2.99523M9.93615 2.99523C9.95103 2.99535 9.96549 2.99543 9.97944 2.99543M9.93615 2.99523L12.6654 2.99543',
  d12: 'M14.1415 2.2722C14.3824 2.28893 14.6208 2.31482 14.8563 2.34952C14.6937 2.70792 14.5825 3.09454 14.5319 3.5H13.001V13H22.7492C22.7469 13.2593 22.7414 13.4583 22.7288 13.6405C22.4092 18.2443 18.7453 21.9082 14.1415 22.2278C13.8214 22.25 13.4496 22.25 12.7905 22.25H11.2115C10.5524 22.25 10.1805 22.25 9.86047 22.2278C8.63928 22.143 7.48317 21.8226 6.43807 21.3113L1.4758 22.75L2.78018 18.0954C1.92569 16.8022 1.38701 15.2804 1.27318 13.6405C1.25097 13.3205 1.25097 12.9486 1.25098 12.2895V12.2895V12.2105V12.2104C1.25097 11.5514 1.25097 11.1795 1.27318 10.8595C1.59273 6.25571 5.25669 2.59176 9.86047 2.2722C10.1805 2.24999 10.5524 2.24999 11.2115 2.25H11.2115H12.7905H12.7905C13.4496 2.24999 13.8214 2.24999 14.1415 2.2722ZM9.00995 11.5H7.00098V13.5H9.00995V11.5Z',
  d13: 'M15.749 4C15.749 2.48122 16.9802 1.25 18.499 1.25C19.3205 1.25 20.0585 1.61112 20.5613 2.18079L19.4367 3.17339C19.2066 2.91264 18.8723 2.75 18.499 2.75C17.8087 2.75 17.249 3.30964 17.249 4V4.75H22.749V11.75H14.249V4.75H15.749V4Z',
} as const;

export const IconMessageUnlock02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-unlock-02-stroke-rounded IconMessageUnlock02StrokeRounded"
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

export const IconMessageUnlock02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-unlock-02-duotone-rounded IconMessageUnlock02DuotoneRounded"
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

export const IconMessageUnlock02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-unlock-02-twotone-rounded IconMessageUnlock02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconMessageUnlock02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-unlock-02-solid-rounded IconMessageUnlock02SolidRounded"
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

export const IconMessageUnlock02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-unlock-02-bulk-rounded IconMessageUnlock02BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageUnlock02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-unlock-02-stroke-sharp IconMessageUnlock02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconMessageUnlock02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-unlock-02-solid-sharp IconMessageUnlock02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfMessageUnlock02: TheIconSelfPack = {
  name: 'MessageUnlock02',
  StrokeRounded: IconMessageUnlock02StrokeRounded,
  DuotoneRounded: IconMessageUnlock02DuotoneRounded,
  TwotoneRounded: IconMessageUnlock02TwotoneRounded,
  SolidRounded: IconMessageUnlock02SolidRounded,
  BulkRounded: IconMessageUnlock02BulkRounded,
  StrokeSharp: IconMessageUnlock02StrokeSharp,
  SolidSharp: IconMessageUnlock02SolidSharp,
};