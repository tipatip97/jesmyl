import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.998 14.9688V16.3751C14.998 19.0267 14.998 20.3525 14.1193 21.1763C13.2406 22 11.8264 22 8.99805 22C6.16962 22 4.75541 22 3.87673 21.1763C2.99805 20.3525 2.99805 19.0267 2.99805 16.3751V11.5537C2.99805 8.90201 2.99805 7.57619 3.87673 6.75243C4.45861 6.20693 5.22501 6.05631 5.99805 6.01514',
  d2: 'M8.99805 19H9.00703',
  d3: 'M14.9981 3.5C12.8911 2.31797 11.6226 2.09056 9.99814 2C9.35128 2.11723 9.1465 2.35124 8.99814 3V9C8.99308 9.91423 9.19599 10.2559 9.99814 10.5C12.1754 10.8479 13.2178 11.1632 14.875 11.9418C14.9531 11.9785 15.0442 11.9801 15.1236 11.9461C16.7228 11.2602 17.756 10.8761 18.9425 10.6532C19.6385 10.5224 20.5045 10.5127 20.8504 9.89477C20.9717 9.67807 21.0133 9.39717 20.9981 9V3C20.7944 2.35605 20.5752 2.13875 19.9981 2C18.2425 2.09672 17.1801 2.34506 14.9981 3.5ZM14.9981 3.5L14.998 11.5',
  d4: 'M11.3903 2.15858C13.3951 2.512 14.5899 3.25128 15.002 3.67571C15.4141 3.25128 16.6089 2.512 18.6137 2.15858C19.6293 1.97953 20.1371 1.89001 20.5695 2.23314C21.002 2.57626 21.002 3.13346 21.002 4.24784V8.25276C21.002 9.2717 21.002 9.78118 20.7244 10.0993C20.4469 10.4173 19.8358 10.5251 18.6137 10.7405C17.5242 10.9326 16.6739 11.2386 16.0585 11.5461C15.453 11.8487 15.1502 12 15.002 12C14.8538 12 14.551 11.8487 13.9455 11.5461C13.3301 11.2386 12.4798 10.9326 11.3903 10.7405C10.1682 10.5251 9.55707 10.4173 9.27951 10.0993C9.00195 9.78118 9.00195 9.2717 9.00195 8.25276V4.24784C9.00195 3.13346 9.00195 2.57626 9.43442 2.23314C9.86689 1.89001 10.3747 1.97953 11.3903 2.15858Z',
  d5: 'M15.002 14.9621V16.3697C15.002 19.0239 15.002 20.3509 14.1233 21.1755C13.2446 22 11.8304 22 9.00195 22C6.17352 22 4.75931 22 3.88063 21.1755C3.00195 20.3509 3.00195 19.0239 3.00195 16.3697V11.5437C3.00195 8.8896 3.00195 7.56253 3.88063 6.73799C4.46251 6.19197 5.22891 6.04121 6.00195 6',
  d6: 'M9.00195 19H9.01093',
  d7: 'M15.0001 3.5C12.8931 2.31797 11.6246 2.09056 10.0001 2C9.35323 2.11723 9.14845 2.35124 9.00009 3V9C8.99503 9.91423 9.19794 10.2559 10.0001 10.5C12.1774 10.8479 13.2198 11.1632 14.877 11.9418C14.9551 11.9785 15.0462 11.9801 15.1256 11.9461C16.7248 11.2602 17.758 10.8761 18.9445 10.6532C19.6405 10.5224 20.5065 10.5127 20.8524 9.89477C20.9737 9.67807 21.0153 9.39717 21.0001 9V3C20.7964 2.35605 20.5772 2.13875 20.0001 2C18.2445 2.09672 17.1821 2.34506 15.0001 3.5ZM15.0001 3.5L15 11.5',
  d8: 'M14.998 14.9579V16.3661C14.998 19.0211 14.998 20.3486 14.1193 21.1735C13.2406 21.9983 11.8264 21.9983 8.99805 21.9983C6.16962 21.9983 4.75541 21.9983 3.87673 21.1735C2.99805 20.3486 2.99805 19.0211 2.99805 16.3661V11.5384C2.99805 8.88329 2.99805 7.55575 3.87673 6.73093C4.45861 6.18471 5.22501 6.0339 5.99805 5.99268',
  d9: 'M8.99805 18.9946H9.00703',
  d10: 'M14.9981 3.5039C12.8911 2.32034 11.6226 2.09263 9.99814 2.00195C9.35128 2.11933 9.1465 2.35365 8.99814 3.00325V9.01103C8.99308 9.92644 9.19599 10.2686 9.99814 10.513C12.1754 10.8613 13.2178 11.177 14.875 11.9567C14.9531 11.9934 15.0442 11.995 15.1236 11.9609C16.7228 11.2742 17.756 10.8895 18.9425 10.6663C19.6385 10.5354 20.5045 10.5257 20.8504 9.90696C20.9717 9.68998 21.0133 9.40871 20.9981 9.01103V3.00325C20.7944 2.35846 20.5752 2.14088 19.9981 2.00195C18.2425 2.09879 17.1801 2.34746 14.9981 3.5039ZM14.9981 3.5039L14.998 11.5143',
  d11: 'M7.24859 5.71246C7.27796 6.26397 6.85469 6.73486 6.30319 6.76424C5.59583 6.80191 5.12972 6.93521 4.81262 7.23249C4.60108 7.43081 4.44188 7.71734 4.34971 8.36006C4.25241 9.03852 4.25 9.94825 4.25 11.3042V16.1256C4.25 17.4815 4.25241 18.3912 4.34971 19.0697C4.44188 19.7124 4.60108 19.9989 4.81262 20.1973C5.03331 20.4041 5.36592 20.565 6.08324 20.6554C6.82306 20.7487 7.80924 20.7506 9.25 20.7506C10.6908 20.7506 11.6769 20.7487 12.4168 20.6554C13.1341 20.565 13.4667 20.4041 13.6874 20.1973C13.8989 19.9989 14.0581 19.7124 14.1503 19.0697C14.2476 18.3912 14.25 17.4815 14.25 16.1256V14.7193C14.25 14.167 14.6977 13.7193 15.25 13.7193C15.8023 13.7193 16.25 14.167 16.25 14.7193L16.25 16.1992C16.2501 17.4622 16.2501 18.5165 16.13 19.3536C16.0025 20.2426 15.7224 21.0309 15.0553 21.6563C14.3973 22.2732 13.5834 22.5242 12.6669 22.6397C11.7872 22.7506 10.6742 22.7506 9.31684 22.7506H9.18317C7.82584 22.7506 6.7128 22.7506 5.83313 22.6397C4.91657 22.5242 4.10274 22.2732 3.44474 21.6563C2.77761 21.0309 2.49746 20.2426 2.36997 19.3536C2.24992 18.5165 2.24996 17.4622 2.25 16.1992V11.2305C2.24996 9.9675 2.24992 8.91323 2.36997 8.07614C2.49746 7.1871 2.77761 6.39884 3.44474 5.77341C4.2914 4.97967 5.3581 4.81174 6.19682 4.76707C6.74832 4.73769 7.21921 5.16096 7.24859 5.71246Z',
  d12: 'M8.25 18.5C8.25 17.9477 8.69571 17.5 9.24553 17.5H9.25447C9.80429 17.5 10.25 17.9477 10.25 18.5C10.25 19.0523 9.80429 19.5 9.25447 19.5H9.24553C8.69571 19.5 8.25 19.0523 8.25 18.5Z',
  d13: 'M15.75 2.46536C15.75 2.35122 15.8144 2.2466 15.918 2.19851C16.5862 1.88809 17.4429 1.60305 18.4815 1.41996L18.5331 1.41085C18.9962 1.32912 19.4314 1.25231 19.8037 1.25005C20.2347 1.24744 20.6505 1.34154 21.0337 1.6456C21.4396 1.96761 21.6117 2.38731 21.6856 2.8269C21.7502 3.21111 21.7501 3.68322 21.75 4.19313L21.75 8.29434C21.75 8.76816 21.7501 9.18782 21.7102 9.52658C21.6676 9.888 21.5694 10.2694 21.2876 10.5924C20.9976 10.9246 20.5933 11.0788 20.2203 11.1815C19.8457 11.2846 19.3583 11.3705 18.7788 11.4726L18.7419 11.4791C17.7202 11.6593 16.9394 11.9434 16.3917 12.2171L16.3748 12.2255L16.1726 12.3264C15.9764 12.424 15.75 12.281 15.75 12.0618L15.75 2.46536ZM11.4669 1.41085L11.5186 1.41996C12.5571 1.60305 13.4138 1.88808 14.082 2.1985C14.1856 2.24658 14.25 2.35121 14.25 2.46535L14.25 12.0618C14.25 12.2809 14.0236 12.424 13.8274 12.3264L13.6254 12.2256L13.6083 12.2171C13.0606 11.9434 12.2798 11.6593 11.2581 11.4791L11.2212 11.4726C10.6416 11.3705 10.1543 11.2846 9.77975 11.1815C9.40669 11.0788 9.00239 10.9246 8.71246 10.5924C8.43065 10.2694 8.33244 9.888 8.28986 9.52658C8.24995 9.18781 8.24998 8.76812 8.25001 8.29429L8.25001 4.19314C8.24992 3.68323 8.24985 3.21111 8.31445 2.8269C8.38837 2.38731 8.56046 1.96761 8.96632 1.6456C9.34956 1.34154 9.7653 1.24744 10.1963 1.25005C10.5686 1.25231 11.0038 1.32912 11.4669 1.41085Z',
  d14: 'M6.06508 5.9834H3.07812V21.9165H15.026V14.9458',
  d15: 'M9.04297 18.9287H9.05196',
  d16: 'M15.027 3.61967L15.0562 12.0677M15.0562 12.0677L21.074 10.3732L21.0818 1.94959C21.0818 1.94582 21.0779 1.94311 21.074 1.9442L15.027 3.45452L8.97856 1.91335C8.97466 1.91221 8.9707 1.91492 8.9707 1.91872V10.3732L15.0562 12.0677Z',
  d17: 'M2.25 6.22222C2.25 5.68528 2.68173 5.25 3.21429 5.25H6.10714V7.19444H4.17857V20.8056H13.8214V14.9722H15.75V21.7778C15.75 22.3147 15.3183 22.75 14.7857 22.75H3.21429C2.68173 22.75 2.25 22.3147 2.25 21.7778V6.22222Z',
  d18: 'M7.99219 18H9.99219V20H7.99219V18Z',
  d19: 'M9.1819 1.2724C8.95785 1.21639 8.72048 1.26672 8.53844 1.40885C8.3564 1.55098 8.25 1.76906 8.25 2.00001V11.0856L14.25 12.5856V2.53943L9.1819 1.2724Z',
  d20: 'M15.75 2.53943V12.5856L21.75 11.0856V2.00001C21.75 1.76906 21.6436 1.55099 21.4616 1.40886C21.2795 1.26673 21.0422 1.21639 20.8181 1.27241L15.75 2.53943Z',
} as const;

export const IconOnlineLearning04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-04-stroke-rounded IconOnlineLearning04StrokeRounded"
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

export const IconOnlineLearning04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-04-duotone-rounded IconOnlineLearning04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOnlineLearning04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-04-twotone-rounded IconOnlineLearning04TwotoneRounded"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOnlineLearning04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-04-solid-rounded IconOnlineLearning04SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconOnlineLearning04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-04-bulk-rounded IconOnlineLearning04BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconOnlineLearning04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-04-stroke-sharp IconOnlineLearning04StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOnlineLearning04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-04-solid-sharp IconOnlineLearning04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfOnlineLearning04: TheIconSelfPack = {
  name: 'OnlineLearning04',
  StrokeRounded: IconOnlineLearning04StrokeRounded,
  DuotoneRounded: IconOnlineLearning04DuotoneRounded,
  TwotoneRounded: IconOnlineLearning04TwotoneRounded,
  SolidRounded: IconOnlineLearning04SolidRounded,
  BulkRounded: IconOnlineLearning04BulkRounded,
  StrokeSharp: IconOnlineLearning04StrokeSharp,
  SolidSharp: IconOnlineLearning04SolidSharp,
};