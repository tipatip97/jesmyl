import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.5 10.5C5.62215 10.5 5.73571 10.4435 5.96282 10.3304L7.78832 9.42162C8.59611 9.01948 9 8.81841 9 8.5V4.5M5.5 10.5C5.37785 10.5 5.26429 10.4435 5.03718 10.3304L3.21168 9.42162C2.4039 9.01948 2 8.81841 2 8.5V4.5M5.5 10.5V6.5M9 4.5C9 4.18159 8.59611 3.98052 7.78832 3.57838L5.96282 2.66959C5.73571 2.55653 5.62215 2.5 5.5 2.5C5.37785 2.5 5.26429 2.55653 5.03718 2.66959L3.21168 3.57838C2.40389 3.98052 2 4.18159 2 4.5M9 4.5C9 4.81841 8.59611 5.01948 7.78832 5.42162L5.96282 6.33041C5.73571 6.44347 5.62215 6.5 5.5 6.5M2 4.5C2 4.81841 2.40389 5.01948 3.21168 5.42162L5.03718 6.33041C5.26429 6.44347 5.37785 6.5 5.5 6.5',
  d2: 'M18.5 10.5C18.6222 10.5 18.7357 10.4435 18.9628 10.3304L20.7883 9.42162C21.5961 9.01948 22 8.81841 22 8.5V4.5M18.5 10.5C18.3778 10.5 18.2643 10.4435 18.0372 10.3304L16.2117 9.42162C15.4039 9.01948 15 8.81841 15 8.5V4.5M18.5 10.5V6.5M22 4.5C22 4.18159 21.5961 3.98052 20.7883 3.57838L18.9628 2.66959C18.7357 2.55653 18.6222 2.5 18.5 2.5C18.3778 2.5 18.2643 2.55653 18.0372 2.66959L16.2117 3.57838C15.4039 3.98052 15 4.18159 15 4.5M22 4.5C22 4.81841 21.5961 5.01948 20.7883 5.42162L18.9628 6.33041C18.7357 6.44347 18.6222 6.5 18.5 6.5M15 4.5C15 4.81841 15.4039 5.01948 16.2117 5.42162L18.0372 6.33041C18.2643 6.44347 18.3778 6.5 18.5 6.5',
  d3: 'M11.5 6.5H12.5',
  d4: 'M2 12.5V16C2 17.4045 2 18.1067 2.33706 18.6111C2.48298 18.8295 2.67048 19.017 2.88886 19.1629C3.39331 19.5 4.09554 19.5 5.5 19.5',
  d5: 'M22.0001 12.5V16C22.0001 17.4045 22.0001 18.1067 21.6631 18.6111C21.5172 18.8295 21.3297 19.017 21.1113 19.1629C20.6068 19.5 19.9045 19.5 18.5 19.5',
  d6: 'M10.25 16.9311C10.4252 16.9286 10.6188 16.9286 10.8333 16.9286H13.1667C13.3812 16.9286 13.5748 16.9286 13.75 16.9311M10.25 16.9311C9.52679 16.9413 9.11678 16.9939 8.84171 17.2633C8.5 17.598 8.5 18.1368 8.5 19.2143C8.5 20.2918 8.5 20.8305 8.84171 21.1653C9.18342 21.5 9.73339 21.5 10.8333 21.5H13.1667C14.2666 21.5 14.8166 21.5 15.1583 21.1653C15.5 20.8305 15.5 20.2918 15.5 19.2143C15.5 18.1368 15.5 17.598 15.1583 17.2633C14.8832 16.9939 14.4732 16.9413 13.75 16.9311M10.25 16.9311V15.2143C10.25 14.2675 11.0335 13.5 12 13.5C12.9665 13.5 13.75 14.2675 13.75 15.2143V16.9311',
  d7: 'M18.9628 10.3304L20.7883 9.42162C21.5961 9.01948 22 8.81841 22 8.5V4.5C22 4.18159 21.5961 3.98052 20.7883 3.57838L20.7883 3.57838L18.9628 2.66959L18.9628 2.66959C18.7357 2.55653 18.6222 2.5 18.5 2.5C18.3778 2.5 18.2643 2.55653 18.0372 2.66959L16.2117 3.57838L16.2117 3.57838C15.4039 3.98052 15 4.18159 15 4.5C15 4.81841 15.4039 5.01948 16.2117 5.42162L16.2117 5.42162L18.0372 6.33041C18.2643 6.44347 18.3778 6.5 18.5 6.5V10.5C18.6222 10.5 18.7357 10.4435 18.9628 10.3304Z',
  d8: 'M5.96282 10.3304L7.78832 9.42162C8.59611 9.01948 9 8.81841 9 8.5V4.5C9 4.18159 8.59611 3.98052 7.78832 3.57838L7.78832 3.57838L5.96282 2.66959L5.96282 2.66959C5.73571 2.55653 5.62215 2.5 5.5 2.5C5.37785 2.5 5.26429 2.55653 5.03718 2.66959L3.21168 3.57838L3.21168 3.57838C2.40389 3.98052 2 4.18159 2 4.5C2 4.81841 2.40389 5.01948 3.21168 5.42162L3.21168 5.42162L5.03718 6.33041C5.26429 6.44347 5.37785 6.5 5.5 6.5V10.5C5.62215 10.5 5.73571 10.4435 5.96282 10.3304Z',
  d9: 'M13.1667 16.9287H10.8333C10.6188 16.9287 10.4252 16.9287 10.25 16.9312C9.52679 16.9414 9.11678 16.994 8.84171 17.2634C8.5 17.5982 8.5 18.1369 8.5 19.2144C8.5 20.2919 8.5 20.8307 8.84171 21.1654C9.18342 21.5001 9.73339 21.5001 10.8333 21.5001H13.1667C14.2666 21.5001 14.8166 21.5001 15.1583 21.1654C15.5 20.8307 15.5 20.2919 15.5 19.2144C15.5 18.1369 15.5 17.5982 15.1583 17.2634C14.8832 16.994 14.4732 16.9414 13.75 16.9312C13.5748 16.9287 13.3812 16.9287 13.1667 16.9287Z',
  d10: 'M22.75 8.5V4.5C22.75 3.9558 22.3778 3.6303 22.1251 3.4547C21.8774 3.28259 21.5324 3.11092 21.168 2.92958L21.168 2.92957L21.168 2.92957L19.2499 1.97434C19.0824 1.88913 18.8089 1.75 18.5 1.75C18.1911 1.75 17.9176 1.88913 17.7501 1.97434L15.832 2.92958L15.832 2.92958C15.4676 3.11092 15.1226 3.28259 14.8749 3.4547C14.6222 3.6303 14.25 3.9558 14.25 4.5V8.5C14.25 9.0442 14.6222 9.3697 14.8749 9.54531C15.1226 9.71741 15.4676 9.88908 15.832 10.0704L15.832 10.0704L17.7501 11.0257C17.9176 11.1109 18.1911 11.25 18.5 11.25C18.8089 11.25 19.0824 11.1109 19.2499 11.0257L21.168 10.0704C21.5324 9.88909 21.8774 9.71741 22.1251 9.54531C22.3778 9.3697 22.75 9.0442 22.75 8.5ZM17.75 9.34935L15.75 8.32625V6.0293L17.75 7.0253V9.34935ZM19.25 7.0253L21.25 6.0293V8.32625L19.25 9.34935V7.0253Z',
  d11: 'M9.75 8.5V4.5C9.75 3.9558 9.37777 3.6303 9.12507 3.4547C8.87741 3.28259 8.53242 3.11092 8.16799 2.92958L8.16797 2.92957L8.16797 2.92957L6.24986 1.97434C6.08237 1.88913 5.80889 1.75 5.5 1.75C5.19111 1.75 4.91763 1.88913 4.75014 1.97434L2.83203 2.92958L2.83202 2.92958C2.46759 3.11092 2.12259 3.28259 1.87493 3.4547C1.62223 3.6303 1.25 3.9558 1.25 4.5V8.5C1.25 9.0442 1.62224 9.3697 1.87493 9.54531C2.12259 9.71741 2.46758 9.88908 2.83201 10.0704L2.83202 10.0704L4.75014 11.0257C4.91763 11.1109 5.19111 11.25 5.5 11.25C5.80889 11.25 6.08237 11.1109 6.24987 11.0257L8.16796 10.0704C8.5324 9.88909 8.87741 9.71741 9.12507 9.54531C9.37777 9.3697 9.75 9.0442 9.75 8.5ZM4.75 9.34935L2.75 8.32625V6.0293L4.75 7.0253V9.34935ZM6.25 7.0253L8.25 6.0293V8.32625L6.25 9.34935V7.0253Z',
  d12: 'M10.75 6.5C10.75 6.08579 11.0858 5.75 11.5 5.75H12.5C12.9142 5.75 13.25 6.08579 13.25 6.5C13.25 6.91421 12.9142 7.25 12.5 7.25H11.5C11.0858 7.25 10.75 6.91421 10.75 6.5Z',
  d13: 'M2 11.75C2.41421 11.75 2.75 12.0858 2.75 12.5V16C2.75 16.7178 2.75091 17.1998 2.78828 17.5672C2.82438 17.922 2.8882 18.086 2.96066 18.1945C3.05186 18.3309 3.16905 18.4481 3.30554 18.5393C3.41399 18.6118 3.57796 18.6756 3.93283 18.7117C4.30023 18.7491 4.78216 18.75 5.5 18.75C5.91422 18.75 6.25 19.0858 6.25 19.5C6.25 19.9142 5.91422 20.25 5.5 20.25L5.46166 20.25C4.79208 20.25 4.23335 20.25 3.78102 20.204C3.30755 20.1559 2.86818 20.0511 2.47218 19.7865C2.17191 19.5859 1.9141 19.3281 1.71346 19.0278C1.44886 18.6318 1.34415 18.1925 1.29598 17.719C1.24997 17.2667 1.24998 16.7079 1.25 16.0384V16.0383V12.5C1.25 12.0858 1.58579 11.75 2 11.75Z',
  d14: 'M22 11.75C22.4142 11.75 22.75 12.0858 22.75 12.5V16.0383V16.0384C22.75 16.7079 22.75 17.2667 22.704 17.719C22.6559 18.1925 22.5511 18.6318 22.2865 19.0278C22.0859 19.3281 21.8281 19.5859 21.5278 19.7865C21.1318 20.0511 20.6925 20.1559 20.219 20.204C19.7666 20.25 19.2079 20.25 18.5383 20.25L18.5 20.25C18.0858 20.25 17.75 19.9142 17.75 19.5C17.75 19.0858 18.0858 18.75 18.5 18.75C19.2178 18.75 19.6998 18.7491 20.0672 18.7117C20.422 18.6756 20.586 18.6118 20.6945 18.5393C20.831 18.4481 20.9481 18.3309 21.0393 18.1945C21.1118 18.086 21.1756 17.922 21.2117 17.5672C21.2491 17.1998 21.25 16.7178 21.25 16V12.5C21.25 12.0858 21.5858 11.75 22 11.75Z',
  d15: 'M14.5 16.2202V15.2143C14.5 13.8388 13.3661 12.75 12 12.75C10.6339 12.75 9.50001 13.8388 9.50001 15.2143V16.2202C9.06727 16.273 8.64959 16.4016 8.31688 16.7275C7.98074 17.0568 7.85421 17.461 7.79969 17.8583C7.74991 18.2209 7.74995 18.7631 7.75 19.2614C7.74995 19.7596 7.74991 20.2076 7.79969 20.5703C7.85421 20.9675 7.98074 21.3718 8.31688 21.701C8.65087 22.0282 9.05717 22.1493 9.45526 22.2017C9.82235 22.2501 10.2769 22.25 10.7874 22.25H13.2126C13.7231 22.25 14.1777 22.2501 14.5448 22.2017C14.9428 22.1493 15.3491 22.0282 15.6831 21.701C16.0193 21.3718 16.1458 20.9675 16.2003 20.5703C16.2501 20.2076 16.2501 19.7596 16.25 19.2614C16.2501 18.7631 16.2501 18.2209 16.2003 17.8583C16.1458 17.461 16.0193 17.0568 15.6831 16.7275C15.3504 16.4016 14.9327 16.273 14.5 16.2202ZM11 15.2143C11 14.6962 11.4331 14.25 12 14.25C12.5669 14.25 13 14.6962 13 15.2143V16.1786H11V15.2143Z',
  d16: 'M5.5 6.5L2.17924 4.60242M5.5 6.5L8.82077 4.60242M5.5 6.5V10.2631M5.5 2.5L9 4.5V8.5L5.5 10.5L2 8.5V4.5L5.5 2.5Z',
  d17: 'M18.5 6.5L15.2139 4.62221M18.5 6.5L21.7861 4.62221M18.5 6.5V10.2705M18.5 2.5L22 4.5V8.5L18.5 10.5L15 8.5V4.5L18.5 2.5Z',
  d18: 'M2 12.5V19.5H5.5',
  d19: 'M22.0001 12.5V19.5H18.5',
  d20: 'M10.25 16.9311V15.2143C10.25 14.2675 11.0335 13.5 12 13.5C12.9665 13.5 13.75 14.2675 13.75 15.2143V16.9311M8.5 16.9286H15.5V21.5H8.5V16.9286Z',
  d21: 'M5.8721 1.84882C5.64153 1.71706 5.35847 1.71706 5.1279 1.84882L1.6279 3.84882C1.39421 3.98235 1.25 4.23086 1.25 4.5V8.5C1.25 8.76914 1.39421 9.01765 1.6279 9.15118L5.1279 11.1512C5.35847 11.2829 5.64153 11.2829 5.8721 11.1512L9.3721 9.15118C9.60579 9.01765 9.75 8.76914 9.75 8.5V4.5C9.75 4.23086 9.60579 3.98235 9.3721 3.84882L5.8721 1.84882ZM4.75 6.93485L2.75 5.79199V8.06437L4.75 9.20722V6.93485ZM8.25 8.06437L6.25 9.20722V6.93485L8.25 5.79199V8.06437Z',
  d22: 'M18.8721 1.84882C18.6415 1.71706 18.3585 1.71706 18.1279 1.84882L14.6279 3.84882C14.3942 3.98235 14.25 4.23086 14.25 4.5V8.5C14.25 8.76914 14.3942 9.01765 14.6279 9.15118L18.1279 11.1512C18.3585 11.2829 18.6415 11.2829 18.8721 11.1512L22.3721 9.15118C22.6058 9.01765 22.75 8.76914 22.75 8.5V4.5C22.75 4.23086 22.6058 3.98235 22.3721 3.84882L18.8721 1.84882ZM17.75 6.93485L15.75 5.79199V8.06437L17.75 9.20722V6.93485ZM21.25 8.06437L19.25 9.20722V6.93485L21.25 5.79199V8.06437Z',
  d23: 'M10.75 5.75H13.25V7.25H10.75V5.75Z',
  d24: 'M2.75 11.75V18.75H6.25V20.25H1.25V11.75H2.75Z',
  d25: 'M22.7501 11.75V20.25H17.75V18.75H21.2501V11.75H22.7501Z',
  d26: 'M14.5 16.1786V15.2143C14.5 13.8388 13.3661 12.75 12 12.75C10.6339 12.75 9.5 13.8388 9.5 15.2143V16.1786H7.75V22.25H16.25V16.1786H14.5ZM11 15.2143C11 14.6962 11.4331 14.25 12 14.25C12.5669 14.25 13 14.6962 13 15.2143V16.1786H11V15.2143Z',
} as const;

export const IconBlockchain07StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-07-stroke-rounded IconBlockchain07StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain07DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-07-duotone-rounded IconBlockchain07DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain07TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-07-twotone-rounded IconBlockchain07TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain07SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-07-solid-rounded IconBlockchain07SolidRounded"
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
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain07BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-07-bulk-rounded IconBlockchain07BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain07StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-07-stroke-sharp IconBlockchain07StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain07SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-07-solid-sharp IconBlockchain07SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBlockchain07: TheIconSelfPack = {
  name: 'Blockchain07',
  StrokeRounded: IconBlockchain07StrokeRounded,
  DuotoneRounded: IconBlockchain07DuotoneRounded,
  TwotoneRounded: IconBlockchain07TwotoneRounded,
  SolidRounded: IconBlockchain07SolidRounded,
  BulkRounded: IconBlockchain07BulkRounded,
  StrokeSharp: IconBlockchain07StrokeSharp,
  SolidSharp: IconBlockchain07SolidSharp,
};