import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.1055 10.3328L14.9082 5.66803C15.0412 4.89514 14.5376 4.15811 13.7834 4.02183C13.0291 3.88554 12.3098 4.40162 12.1768 5.17451L10.5714 14.5041L10.4383 15.2272L8.64114 13.3193C7.98911 12.6437 6.91507 12.7053 6.33903 13.4514C5.89826 14.0223 5.88609 14.8298 6.30943 15.4147L9.06457 19.2211C9.68984 20.0849 10.0025 20.5169 10.3787 20.8526C10.9527 21.3647 11.6405 21.7211 12.3803 21.8896C12.8652 22 13.3863 22 14.4284 22H16.2456C18.6371 22 20.6938 20.3065 21.1527 17.9595L21.8984 14.1458L21.9787 13.6793C22.1117 12.9064 21.6081 12.1694 20.8538 12.0331C20.0995 11.8968 19.3803 12.4129 19.2473 13.1858L19.167 13.6523M14.1055 10.3328L13.8647 11.7323M14.1055 10.3328C14.2385 9.55994 14.9578 9.04387 15.7121 9.18015C16.4663 9.31643 16.97 10.0535 16.837 10.8264L16.6764 11.7593M16.6764 11.7593L16.5961 12.2258M16.6764 11.7593C16.8094 10.9864 17.5287 10.4703 18.2829 10.6066C19.0372 10.7429 19.5408 11.4799 19.4078 12.2528L19.3276 12.7193',
  d2: 'M6.95596 2.49064C6.95596 2.49064 6.70432 4.76405 6.95596 5.01188M6.95596 5.01188C7.28241 5.33331 9.55781 5.06274 9.55781 5.06274M6.95596 5.01188L10 2M5.04404 9.50936C5.04404 9.50936 5.29568 7.23595 5.04404 6.98812M5.04404 6.98812C4.71759 6.66669 2.44219 6.93726 2.44219 6.93726M5.04404 6.98812L2 10',
  d3: 'M9.06457 19.2211L6.30943 15.4147C5.88609 14.8298 5.89826 14.0223 6.33903 13.4514C6.91507 12.7053 7.98911 12.6437 8.64114 13.3193L10.4383 15.2272L10.5714 14.5041L12.1768 5.17451C12.3098 4.40162 13.0291 3.88554 13.7834 4.02183C14.5376 4.15811 15.0412 4.89514 14.9082 5.66803L14.1055 10.3328C14.2385 9.55994 14.9578 9.04387 15.7121 9.18015C16.4663 9.31643 16.97 10.0535 16.837 10.8264L16.6764 11.7593C16.8094 10.9864 17.5287 10.4703 18.2829 10.6066C19.0372 10.7429 19.5408 11.4799 19.4078 12.2528L19.2473 13.1858C19.3803 12.4129 20.0995 11.8968 20.8538 12.0331C21.6081 12.1694 22.1117 12.9064 21.9787 13.6793L21.8984 14.1458L21.1527 17.9595C20.6938 20.3065 18.6371 22 16.2456 22H14.4284C13.3863 22 12.8652 22 12.3803 21.8896C11.6405 21.7211 10.9527 21.3647 10.3787 20.8526C10.0025 20.5169 9.68984 20.0849 9.06457 19.2211Z',
  d4: 'M7.49986 5.56081C7.20697 5.8537 6.73209 5.8537 6.4392 5.56081C6.14631 5.26792 6.14631 4.79304 6.4392 4.50015L7.49986 5.56081ZM5.14141 8.15187L5.88908 8.21094V8.21094L5.14141 8.15187ZM5.77815 9.61488C5.74553 10.0278 5.38434 10.3361 4.97141 10.3035C4.55848 10.2708 4.25019 9.90966 4.28281 9.49673L5.77815 9.61488ZM2.50352 7.71745C2.09059 7.75008 1.7294 7.44178 1.69677 7.02886C1.66415 6.61593 1.97245 6.25474 2.38537 6.22212L2.50352 7.71745ZM3.84839 6.85886L3.78932 6.11119H3.78932L3.84839 6.85886ZM8.15073 5.14168L8.2098 5.88935L8.2098 5.88935L8.15073 5.14168ZM9.4956 4.28308C9.90853 4.25046 10.2697 4.55876 10.3023 4.97168C10.335 5.38461 10.0267 5.7458 9.61375 5.77842L9.4956 4.28308ZM6.22097 2.38566C6.25359 1.97274 6.61478 1.66444 7.02771 1.69707C7.44064 1.72969 7.74893 2.09088 7.71631 2.50381L6.22097 2.38566ZM6.85771 3.84867L6.11004 3.7896V3.7896L6.85771 3.84867ZM6.96864 5.03075L6.43831 5.56109L6.96864 5.03075ZM2.53033 10.5303C2.23744 10.8232 1.76256 10.8232 1.46967 10.5303C1.17678 10.2374 1.17678 9.76256 1.46967 9.46967L2.53033 10.5303ZM9.46967 1.46967C9.76256 1.17678 10.2374 1.17678 10.5303 1.46967C10.8232 1.76256 10.8232 2.23744 10.5303 2.53033L9.46967 1.46967ZM5.88908 8.21094L5.77815 9.61488L4.28281 9.49673L4.39374 8.0928L5.88908 8.21094ZM2.38537 6.22212L3.78932 6.11119L3.90746 7.60653L2.50352 7.71745L2.38537 6.22212ZM4.39374 8.0928C4.40703 7.92457 4.41761 7.78998 4.42385 7.67421C4.43012 7.55773 4.43078 7.47984 4.42774 7.42546C4.42145 7.3132 4.40451 7.4042 4.50016 7.49984L5.56081 6.43918C5.84581 6.72417 5.91048 7.07545 5.92539 7.34157C5.9395 7.59351 5.91348 7.90204 5.88908 8.21094L4.39374 8.0928ZM3.78932 6.11119C4.09804 6.0868 4.40653 6.06071 4.6583 6.07473C4.92437 6.08954 5.27571 6.15408 5.56081 6.43918L4.50015 7.49984C4.5959 7.59558 4.6871 7.57865 4.57492 7.57241C4.52056 7.56938 4.44268 7.57007 4.32617 7.57637C4.21036 7.58263 4.07577 7.59323 3.90746 7.60653L3.78932 6.11119ZM8.09166 4.39401L9.4956 4.28308L9.61375 5.77842L8.2098 5.88935L8.09166 4.39401ZM7.71631 2.50381L7.60538 3.90774L6.11004 3.7896L6.22097 2.38566L7.71631 2.50381ZM8.2098 5.88935C7.90092 5.91375 7.59243 5.93977 7.34055 5.92566C7.07436 5.91074 6.72324 5.84602 6.43831 5.56109L7.49896 4.50042C7.40339 4.40485 7.3124 4.42173 7.42447 4.42801C7.4788 4.43105 7.55665 4.43039 7.6731 4.42412C7.78885 4.41788 7.92342 4.4073 8.09166 4.39401L8.2098 5.88935ZM7.60538 3.90774C7.59209 4.07598 7.58151 4.21055 7.57527 4.3263C7.569 4.44275 7.56834 4.5206 7.57138 4.57493C7.57766 4.68699 7.59454 4.596 7.49896 4.50042L6.43831 5.56109C6.15337 5.27615 6.08865 4.92503 6.07373 4.65884C6.05962 4.40696 6.08564 4.09848 6.11004 3.7896L7.60538 3.90774ZM5.56081 7.49984L2.53033 10.5303L1.46967 9.46967L4.50015 6.43918L5.56081 7.49984ZM10.5303 2.53033L7.49986 5.56081L6.4392 4.50015L9.46967 1.46967L10.5303 2.53033Z',
  d5: 'M13.6748 3.26771C13.0538 3.15717 12.4456 3.57467 12.3319 4.22548L10.4888 14.777L10.336 15.5944C10.3066 15.7515 10.1901 15.879 10.0345 15.9242C9.87891 15.9694 9.71076 15.9246 9.59954 15.8083L7.53915 13.6535C6.97444 13.079 6.05063 13.1296 5.54934 13.7692C5.16031 14.2656 5.14924 14.9719 5.52335 15.481L8.68498 19.7839C9.41387 20.776 9.74214 21.2188 10.1309 21.5605C10.736 22.0924 11.4599 22.4614 12.2369 22.6357C12.7351 22.7475 13.2758 22.75 14.4916 22.75H16.5769C19.1154 22.75 21.2985 20.9792 21.7856 18.525L22.6404 14.2185L22.7317 13.6959C22.8459 13.0426 22.4125 12.4351 21.7885 12.324C21.1674 12.2135 20.5592 12.631 20.4455 13.2818L20.3534 13.8091C20.3131 14.0399 20.0906 14.1947 19.8563 14.155C19.6221 14.1153 19.4649 13.8961 19.5052 13.6654L19.5973 13.138C19.6191 13.0135 19.6469 12.7254 19.6894 12.6107L19.7816 12.0834C19.8957 11.4301 19.4623 10.8226 18.8383 10.7115C18.2172 10.6009 17.609 11.0184 17.4954 11.6693L17.4032 12.1966C17.3629 12.4273 17.1404 12.5822 16.9062 12.5425C16.6719 12.5028 16.5147 12.2835 16.5551 12.0528L16.8314 10.4708C16.9455 9.8175 16.5122 9.21 15.8881 9.09892C15.267 8.98838 14.6589 9.40588 14.5452 10.0567L14.2688 11.6387C14.2285 11.8694 14.006 12.0243 13.7718 11.9846C13.5376 11.9449 13.3804 11.7256 13.4207 11.4949L14.6181 4.6396C14.7322 3.98629 14.2989 3.37879 13.6748 3.26771Z',
  d6: 'M10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L8.26195 2.67739L7.49896 1.9144C7.29205 1.70749 6.9837 1.63982 6.70915 1.74105C6.43461 1.84229 6.24401 2.09396 6.22097 2.38566L6.11004 3.7896L6.10721 3.82544C6.08367 4.12271 6.06035 4.41713 6.07423 4.6596C6.08949 4.92622 6.15487 5.27648 6.4392 5.56081C6.72375 5.84536 7.07416 5.91045 7.34067 5.9255C7.58168 5.93911 7.87446 5.91591 8.17 5.8925L8.2098 5.88935L9.61375 5.77842C9.90545 5.75538 10.1571 5.56478 10.2584 5.29023C10.3596 5.01569 10.2919 4.70733 10.085 4.50042L9.32262 3.73804L10.5303 2.53033C10.8232 2.23744 10.8232 1.76256 10.5303 1.46967Z',
  d7: 'M3.83187 6.10782L3.78932 6.11119L2.38537 6.22212C2.09367 6.24516 1.842 6.43576 1.74076 6.71031C1.63952 6.98485 1.7072 7.29321 1.91412 7.50012L2.67667 8.26267L1.46967 9.46967C1.17678 9.76256 1.17678 10.2374 1.46967 10.5303C1.76256 10.8232 2.23744 10.8232 2.53033 10.5303L3.73734 9.32332L4.50015 10.0861C4.70707 10.293 5.01542 10.3607 5.28996 10.2595C5.56451 10.1582 5.75511 9.90658 5.77815 9.61488L5.88908 8.21094L5.89231 8.17016C5.9157 7.87499 5.93888 7.58242 5.92539 7.34157C5.91048 7.07545 5.84581 6.72417 5.56081 6.43918C5.27571 6.15408 4.92437 6.08954 4.6583 6.07473C4.4181 6.06136 4.12627 6.08449 3.83187 6.10782Z',
  d8: 'M16.6021 11.9625L16.8325 10.5525C16.9637 9.79532 16.4578 9.02778 15.6992 8.89744C14.9405 8.76708 14.2424 9.32509 14.1114 10.0823M19.1663 13.4213L19.4098 11.9428C19.5409 11.1856 19.0248 10.4733 18.2661 10.3429C17.5075 10.2126 16.8066 10.7839 16.6756 11.5411M13.8777 11.4462L14.922 5.32259C15.0107 4.55069 14.5128 3.85508 13.8125 3.73516C13.0579 3.60594 12.384 4.07791 12.2125 4.79639L10.4454 14.8915L8.86076 13.1756C8.20902 12.3708 7.23067 12.3046 6.53089 12.9256C5.99544 13.4008 5.86634 14.1992 6.19139 14.8362L9.98703 21.6698C10.0047 21.7015 10.0381 21.7212 10.0743 21.7212L20.4323 21.7207C20.4807 21.7207 20.5222 21.6859 20.5306 21.6381L21.9892 13.3643C22.1203 12.6071 21.588 11.8865 20.8293 11.7561C20.0706 11.6258 19.3648 12.2594 19.2337 13.0166',
  d9: 'M2.01367 9.71451L5.20852 6.58658M2.01367 6.71182H5.00302V9.71409M10.0161 1.7207L7.17232 4.56055M7.0166 1.72245V4.71875H10.001',
  d10: 'M13.18 2.76799C12.5447 2.65568 11.9241 3.07998 11.8082 3.73903L9.97118 14.1853L9.67575 15.7552L7.07996 13.0587C6.5049 12.4775 5.56361 12.5288 5.05335 13.1755C4.65783 13.6768 4.64661 14.3897 5.02691 14.9038L5.04051 14.9222L9.1584 22.1121L20.8185 22.25L22.2304 13.1248C22.3467 12.4634 21.9052 11.8471 21.2671 11.7343C20.6318 11.6219 20.0112 12.0462 19.8953 12.7053L19.8035 13.2274L19.0144 13.0945L19.2899 11.5283C19.4062 10.8669 18.9646 10.2505 18.3266 10.1377C17.6913 10.0254 17.0707 10.4497 16.9548 11.1088L16.863 11.6309L16.0739 11.498L16.3493 9.93174C16.4656 9.27038 16.0241 8.65403 15.3861 8.54122C14.7508 8.4289 14.1301 8.8532 14.0142 9.51225L13.7388 11.0785L12.9498 10.9457L14.1433 4.15852C14.2596 3.49716 13.8181 2.8808 13.18 2.76799Z',
  d11: 'M8.03033 3.46967L9.75 1.75L10.8107 2.81066L9.09099 4.53033H10.2803V6.03033H6.53033V2.28033H8.03033V3.46967ZM3.46967 8.03033H2.28033V6.53033H6.03033V10.2803H4.53033V9.09099L2.81066 10.8107L1.75 9.75L3.46967 8.03033Z',
} as const;

export const IconMinimize04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-04-stroke-rounded IconMinimize04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMinimize04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-04-duotone-rounded IconMinimize04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinimize04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-04-twotone-rounded IconMinimize04TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMinimize04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-04-solid-rounded IconMinimize04SolidRounded"
    >
      <path 
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

export const IconMinimize04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-04-bulk-rounded IconMinimize04BulkRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinimize04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-04-stroke-sharp IconMinimize04StrokeSharp"
    >
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

export const IconMinimize04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-04-solid-sharp IconMinimize04SolidSharp"
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

export const iconPackOfMinimize04: TheIconSelfPack = {
  name: 'Minimize04',
  StrokeRounded: IconMinimize04StrokeRounded,
  DuotoneRounded: IconMinimize04DuotoneRounded,
  TwotoneRounded: IconMinimize04TwotoneRounded,
  SolidRounded: IconMinimize04SolidRounded,
  BulkRounded: IconMinimize04BulkRounded,
  StrokeSharp: IconMinimize04StrokeSharp,
  SolidSharp: IconMinimize04SolidSharp,
};