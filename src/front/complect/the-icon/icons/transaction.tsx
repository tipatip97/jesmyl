import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.5795 8.60699L2 8.45417C3.849 3.70488 9.15764 0.999849 14.3334 2.34477C19.8461 3.77722 23.1205 9.26153 21.647 14.5943C20.4283 19.0051 16.3433 21.9307 11.8479 22',
  d2: 'M12 22C6.5 22 2 17 2 11',
  d3: 'M13.6039 9.72177C13.2524 9.35267 12.3906 8.48536 11.0292 9.10111C9.66784 9.71686 9.45159 11.698 11.5108 11.9085C12.4416 12.0036 13.0484 11.7981 13.6039 12.3794C14.1595 12.9607 14.2627 14.5774 12.8425 15.013C11.4222 15.4487 10.502 14.7292 10.2545 14.5041M11.9078 8.01953V8.81056M11.9078 15.1471V16.0195',
  d4: 'M12.1904 22C17.7132 22 22.1904 17.5228 22.1904 12C22.1904 8.4 20.4929 6.05556 19.6441 5.33333C17.813 3.2875 15.1521 2 12.1904 2C6.66758 2 2.19043 6.47715 2.19043 12C2.19043 17.5228 6.66758 22 12.1904 22Z',
  d5: 'M13.809 9.70224C13.4575 9.33314 12.5957 8.46583 11.2343 9.08158C9.87292 9.69733 9.65667 11.6785 11.7159 11.889C12.6467 11.9841 13.2535 11.7786 13.809 12.3599C14.3646 12.9412 14.4678 14.5579 13.0476 14.9935C11.6273 15.4292 10.7071 14.7097 10.4596 14.4846M12.1129 8V8.79103M12.1129 15.1276V16',
  d6: 'M4.76993 8.60699L2.19043 8.45417C4.03943 3.70488 9.34807 0.999849 14.5238 2.34477C20.0365 3.77722 23.3109 9.26153 21.8374 14.5943C20.6187 19.0051 16.5337 21.9307 12.0383 22',
  d7: 'M12.1904 22C6.69043 22 2.19043 17 2.19043 11',
  d8: 'M13.5737 9.72177C13.2222 9.35267 12.3603 8.48536 10.9989 9.10111C9.63757 9.71686 9.42131 11.698 11.4805 11.9085C12.4113 12.0036 13.0181 11.7981 13.5737 12.3794C14.1292 12.9607 14.2324 14.5774 12.8122 15.013C11.392 15.4487 10.4717 14.7292 10.2242 14.5041M11.8775 8.01953V8.81056M11.8775 15.1471V16.0195',
  d9: 'M11.9012 6.75C12.4535 6.75 12.9012 7.19772 12.9012 7.75V7.83327C13.5904 8.0297 14.1984 8.42925 14.5972 8.99566C14.9152 9.44721 14.8069 10.0711 14.3554 10.389C13.9038 10.707 13.28 10.5988 12.962 10.1472C12.8092 9.9302 12.4352 9.69463 11.9012 9.69463C11.0405 9.69463 10.749 10.2147 10.749 10.4086C10.749 10.5446 10.7704 10.6115 10.7817 10.6375C10.7893 10.6548 10.7974 10.6684 10.8262 10.6894C10.9127 10.7523 11.1925 10.8778 11.9012 10.8778C12.7488 10.8778 13.5909 11.0026 14.2377 11.4579C14.9612 11.9673 15.249 12.7446 15.249 13.5917C15.249 14.5444 14.8133 15.288 14.1054 15.7469C13.7405 15.9835 13.3266 16.1306 12.9012 16.2141V16.25C12.9012 16.8023 12.4535 17.25 11.9012 17.25C11.3489 17.25 10.9012 16.8023 10.9012 16.25V16.1846C10.2988 16.0347 9.75171 15.7487 9.33216 15.3434C8.93494 14.9597 8.92399 14.3266 9.3077 13.9294C9.69141 13.5322 10.3245 13.5212 10.7217 13.905C10.9356 14.1116 11.3527 14.3057 11.9012 14.3057C12.4484 14.3057 12.8174 14.1984 13.0174 14.0688C13.1592 13.9768 13.249 13.8634 13.249 13.5917C13.249 13.2147 13.1455 13.1349 13.0864 13.0934C12.9507 12.9978 12.6188 12.8778 11.9012 12.8778C11.0446 12.8778 10.2483 12.742 9.65007 12.307C8.98112 11.8206 8.74902 11.1077 8.74902 10.4086C8.74902 9.08338 9.74387 8.17449 10.9012 7.83859V7.75C10.9012 7.19771 11.3489 6.75 11.9012 6.75Z',
  d10: 'M3.20374 11.0241C3.20374 10.4844 2.7662 10.0468 2.22646 10.0468C1.68673 10.0468 1.24918 10.4844 1.24918 11.0241C1.24918 11.1076 1.25001 11.191 1.25165 11.2741C1.26228 11.8138 1.70836 12.2426 2.248 12.232C2.78763 12.2213 3.21646 11.7753 3.20583 11.2356C3.20444 11.1653 3.20374 11.0948 3.20374 11.0241ZM3.55466 13.7332C3.41653 13.2114 2.88159 12.9004 2.35982 13.0385C1.83806 13.1767 1.52706 13.7116 1.66518 14.2334C1.70793 14.3948 1.75381 14.555 1.80274 14.7137C1.96178 15.2295 2.50883 15.5186 3.0246 15.3596C3.54038 15.2006 3.82956 14.6535 3.67052 14.1377C3.62932 14.0041 3.59067 13.8692 3.55466 13.7332ZM4.69883 16.433C4.41916 15.9713 3.81822 15.8238 3.35659 16.1035C2.89496 16.3832 2.74745 16.9841 3.02712 17.4457C3.11387 17.5889 3.20343 17.73 3.29572 17.8689C3.59446 18.3184 4.20105 18.4407 4.65057 18.1419C5.1001 17.8432 5.22233 17.2366 4.92359 16.7871C4.84642 16.6709 4.77147 16.5529 4.69883 16.433ZM6.56278 18.6742C6.15823 18.317 5.54064 18.3553 5.18335 18.7598C4.82606 19.1644 4.86438 19.782 5.26893 20.1393C5.39517 20.2507 5.5238 20.3593 5.65474 20.4647C6.07514 20.8032 6.69035 20.7368 7.02884 20.3164C7.36733 19.896 7.30092 19.2807 6.88052 18.9423C6.77284 18.8556 6.6669 18.7662 6.56278 18.6742ZM9.00467 20.2037C8.50523 19.999 7.93447 20.238 7.72985 20.7375C7.52523 21.2369 7.76424 21.8077 8.26369 22.0123C8.42076 22.0767 8.57961 22.1371 8.74014 22.1936C9.24932 22.3726 9.80723 22.105 9.98627 21.5958C10.1653 21.0866 9.89768 20.5287 9.38851 20.3497C9.25935 20.3043 9.13138 20.2556 9.00467 20.2037ZM11.794 20.7942C11.2544 20.7802 10.8056 21.2061 10.7915 21.7457C10.7775 22.2853 11.2035 22.7341 11.743 22.7481C11.8282 22.7503 11.9136 22.7515 11.9993 22.7515C12.0441 22.7515 12.0883 22.7484 12.1316 22.7426C16.8236 22.5597 21.0788 19.465 22.369 14.7955C23.9615 9.03175 20.4141 3.14828 14.5253 1.6181C9.00323 0.183203 3.30825 3.06176 1.31561 8.18002C1.20224 8.4712 1.23496 8.79904 1.40363 9.06209C1.5723 9.32513 1.85658 9.49166 2.16851 9.51014L4.68941 9.65949C5.2282 9.69141 5.69086 9.28051 5.72278 8.74171C5.7547 8.20292 5.34379 7.74027 4.805 7.70835L3.7407 7.64529C5.734 4.2613 9.91867 2.44055 14.0337 3.50984C18.9198 4.77947 21.7724 9.61543 20.485 14.2749C19.4182 18.1359 15.8303 20.7305 11.8435 20.7954C11.827 20.795 11.8105 20.7947 11.794 20.7942Z',
  d11: 'M3.74054 7.64535C5.73384 4.26136 9.91852 2.44061 14.0336 3.5099C18.9196 4.77953 21.7723 9.61549 20.4848 14.275C19.4173 18.1385 15.8253 20.7341 11.8353 20.7956C11.2956 20.8039 10.8649 21.2481 10.8732 21.7878C10.8815 22.3274 11.3257 22.7582 11.8654 22.7499C16.6618 22.676 21.0543 19.5532 22.3688 14.7956C23.9613 9.03181 20.4139 3.14835 14.5252 1.61816C9.00308 0.183263 3.3081 3.06182 1.31545 8.18008C1.20209 8.47126 1.2348 8.7991 1.40347 9.06215C1.57214 9.32519 1.85642 9.49172 2.16835 9.5102L4.68925 9.65955C5.22804 9.69147 5.6907 9.28057 5.72262 8.74178C5.75454 8.20298 5.34364 7.74033 4.80484 7.70841L3.74054 7.64535Z',
  d12: 'M2.2263 10.0469C2.76604 10.0469 3.20359 10.4844 3.20359 11.0242C3.20359 11.0948 3.20428 11.1653 3.20567 11.2357C3.21631 11.7753 2.78747 12.2214 2.24784 12.232C1.70821 12.2427 1.26212 11.8138 1.25149 11.2742C1.24985 11.191 1.24902 11.1077 1.24902 11.0242C1.24902 10.4844 1.68657 10.0469 2.2263 10.0469ZM2.35966 13.0386C2.88143 12.9005 3.41637 13.2115 3.5545 13.7332C3.59051 13.8693 3.62916 14.0042 3.67036 14.1378C3.82941 14.6536 3.54022 15.2006 3.02444 15.3597C2.50867 15.5187 1.96162 15.2295 1.80258 14.7137C1.75365 14.555 1.70777 14.3949 1.66502 14.2334C1.5269 13.7117 1.8379 13.1767 2.35966 13.0386ZM3.35643 16.1036C3.81806 15.8239 4.419 15.9714 4.69867 16.433C4.77131 16.553 4.84626 16.671 4.92343 16.7871C5.22217 17.2367 5.09994 17.8432 4.65041 18.142C4.20089 18.4407 3.5943 18.3185 3.29557 17.869C3.20327 17.7301 3.11371 17.589 3.02696 17.4458C2.74729 16.9842 2.8948 16.3832 3.35643 16.1036ZM5.18319 18.7599C5.54048 18.3553 6.15807 18.317 6.56262 18.6743C6.66674 18.7663 6.77268 18.8556 6.88036 18.9423C7.30076 19.2808 7.36717 19.896 7.02868 20.3164C6.69019 20.7368 6.07498 20.8032 5.65458 20.4647C5.52364 20.3593 5.39501 20.2508 5.26877 20.1393C4.86422 19.782 4.8259 19.1644 5.18319 18.7599ZM7.72969 20.7376C7.93431 20.2381 8.50507 19.9991 9.00452 20.2037C9.13122 20.2556 9.25919 20.3043 9.38835 20.3497C9.89752 20.5288 10.1652 21.0867 9.98611 21.5959C9.80707 22.1051 9.24916 22.3727 8.73998 22.1936C8.57945 22.1372 8.4206 22.0767 8.26353 22.0124C7.76408 21.8078 7.52508 21.237 7.72969 20.7376ZM10.7914 21.7458C10.8055 21.2062 11.2543 20.7802 11.7938 20.7943C11.862 20.7961 11.9305 20.797 11.9991 20.797C12.5389 20.797 12.9764 21.2345 12.9764 21.7742C12.9764 22.314 12.5389 22.7515 11.9991 22.7515C11.9135 22.7515 11.8281 22.7504 11.7429 22.7482C11.2033 22.7341 10.7773 22.2853 10.7914 21.7458Z',
  d13: 'M12 6.5V8M12 8C10.4812 8 9.25 8.92865 9.25 10.0741C9.25 11.2196 10 11.8519 12 11.8519C14 11.8519 15 12.4445 15 13.926C15 15.4075 13.6569 16 12 16M12 8C13.5188 8 14.75 8.92865 14.75 10.0741M12 16V17.5M12 16C10.3431 16 9 15.0715 9 13.926',
  d14: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12L5 10.5',
  d15: 'M8.99923 21.5422C8.52857 21.3944 8.07291 21.2127 7.6351 21M5.49923 19.5996C5.10493 19.2621 4.73721 18.8943 4.39964 18.5M3.06652 16.5C2.82466 16.0209 2.62021 15.5196 2.45703 15',
  d16: 'M11 7.10916V6H13V7.10916C13.5759 7.23773 14.106 7.47671 14.5467 7.80914C15.234 8.32755 15.75 9.11848 15.75 10.0741H13.75C13.75 9.8843 13.6504 9.63817 13.3424 9.40588C13.0339 9.17322 12.5626 9 12 9C11.4374 9 10.9661 9.17322 10.6576 9.40588C10.3496 9.63817 10.25 9.8843 10.25 10.0741C10.25 10.4 10.3369 10.4965 10.4421 10.569C10.6282 10.6971 11.067 10.8519 12 10.8519C13.0587 10.8519 14.0541 11.0009 14.8047 11.5013C15.6417 12.0594 16 12.9284 16 13.926C16 15.0324 15.4679 15.8652 14.6445 16.3707C14.1563 16.6705 13.5878 16.8443 13 16.9306V18H11V16.9053C10.3721 16.7838 9.79217 16.5484 9.31001 16.2151C8.58395 15.7132 8 14.9203 8 13.926H10C10 14.0772 10.0876 14.3213 10.4473 14.57C10.8031 14.8159 11.3489 15 12 15C12.7347 15 13.2754 14.8645 13.5981 14.6663C13.8605 14.5052 14 14.301 14 13.926C14 13.4421 13.8583 13.2741 13.6953 13.1654C13.4459 12.9992 12.9413 12.8519 12 12.8519C10.933 12.8519 9.99682 12.6906 9.30786 12.2162C8.53806 11.6861 8.25 10.8937 8.25 10.0741C8.25 9.11848 8.76596 8.32755 9.45329 7.80914C9.89404 7.47671 10.4241 7.23773 11 7.10916Z',
  d17: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75V20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 7.14241 16.8576 3.20455 12 3.20455C7.70969 3.20455 4.13684 6.27636 3.36086 10.3406L4.72204 9.65999L5.59614 11.4082L2.66432 12.8741C2.36138 13.0256 2.00161 13.0094 1.71349 12.8313C1.42537 12.6533 1.25 12.3387 1.25 12ZM3.60628 14.639C3.74967 15.0956 3.92935 15.5362 4.14199 15.9574L2.39712 16.8382C2.13702 16.3229 1.91711 15.7837 1.74155 15.2247L3.60628 14.639ZM5.31475 17.7168C5.61185 18.0638 5.9355 18.3875 6.28254 18.6846L5.01141 20.1693C4.58777 19.8066 4.19269 19.4115 3.83 18.9879L5.31475 17.7168ZM8.16134 19.9165C8.54622 20.1035 8.94669 20.2631 9.36027 20.393L8.77459 22.2578C8.26825 22.0987 7.77811 21.9033 7.30727 21.6746L8.16134 19.9165Z',
} as const;

export const IconTransactionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transaction-stroke-rounded IconTransactionStrokeRounded"
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
        strokeDasharray="0.5 3" 
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

export const IconTransactionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transaction-duotone-rounded IconTransactionDuotoneRounded"
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
        strokeLinejoin="round" 
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
        strokeDasharray="0.5 3" 
      />
    </TheIconWrapper>
  );
};

export const IconTransactionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transaction-twotone-rounded IconTransactionTwotoneRounded"
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
        strokeDasharray="0.5 3" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTransactionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transaction-solid-rounded IconTransactionSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTransactionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transaction-bulk-rounded IconTransactionBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTransactionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transaction-stroke-sharp IconTransactionStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTransactionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transaction-solid-sharp IconTransactionSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTransaction: TheIconSelfPack = {
  name: 'Transaction',
  StrokeRounded: IconTransactionStrokeRounded,
  DuotoneRounded: IconTransactionDuotoneRounded,
  TwotoneRounded: IconTransactionTwotoneRounded,
  SolidRounded: IconTransactionSolidRounded,
  BulkRounded: IconTransactionBulkRounded,
  StrokeSharp: IconTransactionStrokeSharp,
  SolidSharp: IconTransactionSolidSharp,
};