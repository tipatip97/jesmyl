import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.84695 12C3.84695 11.5519 3.6536 11.1039 3.44015 10.7458C3.13793 10.2387 2.90894 9.66022 3.03565 9.08612C3.92976 5.03496 7.60367 2 12 2C16.3964 2 20.0703 5.03504 20.9644 9.08627C21.091 9.66029 20.8621 10.2387 20.56 10.7457C20.3465 11.1038 20.1531 11.5519 20.153 12',
  d2: 'M18 10C16.3248 8.74353 14.2485 8 12 8C9.75148 8 7.67523 8.74353 6 10',
  d3: 'M15 8C15 4 9.0001 3.99997 9 8',
  d4: 'M18.6936 14.5C18.6936 13.3593 18.849 12 20.3466 12C21.3681 12 22.145 12.8907 21.9771 13.8691L21.5549 16.3288C21.3894 17.2932 20.5302 18 19.5234 18V18C19.1611 18 18.9799 18 18.836 18.0444C18.699 18.0866 18.6206 18.1279 18.5084 18.2171C18.3905 18.3108 18.2627 18.4974 18.0072 18.8706C16.7158 20.7568 14.5074 22 12 22C9.49258 22 7.28417 20.7568 5.99276 18.8706C5.73727 18.4974 5.60953 18.3108 5.49161 18.2171C5.37941 18.1279 5.30097 18.0866 5.16401 18.0444C5.02008 18 4.83893 18 4.47662 18V18C3.46982 18 2.61059 17.2932 2.44507 16.3288L2.0229 13.8691C1.85498 12.8907 2.63195 12 3.65339 12C5.151 12 5.30637 13.3593 5.30637 14.5',
  d5: 'M9.00801 13L8.99902 13',
  d6: 'M15.008 13L14.999 13',
  d7: 'M9 17C9.5 17.5 11 18 12 17C13 18 14.5 17.5 15 17',
  d8: 'M5.30734 14.5C5.30734 13.4176 5.16743 12.1382 3.87336 12.0104M3.87336 12.0104C3.80376 12.0035 3.73081 12 3.65437 12C2.63293 12 1.85596 12.8907 2.02388 13.8691L2.44605 16.3288C2.61157 17.2932 3.4708 18 4.4776 18C4.83991 18 5.02106 18 5.16499 18.0444C5.30195 18.0866 5.38039 18.1279 5.49259 18.2171C5.61051 18.3108 5.73825 18.4974 5.99374 18.8706C7.28515 20.7568 9.49356 22 12.001 22C14.5084 22 16.7168 20.7568 18.0082 18.8706C18.2637 18.4974 18.3915 18.3108 18.5094 18.2171C18.6216 18.1279 18.7 18.0866 18.837 18.0444C18.9809 18 19.1621 18 19.5244 18C20.5312 18 21.3904 17.2932 21.5559 16.3288L21.9781 13.8691C22.146 12.8907 21.3691 12 20.3476 12C20.2939 12 20.242 12.0017 20.1917 12.0052M3.87336 12.0104L3.84793 12C3.84793 11.5519 3.65458 11.1039 3.44113 10.7458C3.13891 10.2387 2.90992 9.66022 3.03663 9.08612C3.93074 5.03496 7.60465 2 12.001 2C16.3974 2 20.0713 5.03504 20.9654 9.08627C21.092 9.66029 20.8631 10.2387 20.561 10.7457C20.3475 11.1038 20.1541 11.5519 20.154 12L20.1917 12.0052M18.6946 14.5C18.6946 13.4002 18.8391 12.0972 20.1917 12.0052',
  d9: 'M3.03663 9.08612C3.93074 5.03496 7.60465 2 12.001 2C16.3974 2 20.0713 5.03504 20.9654 9.08627C21.092 9.66029 20.8631 10.2387 20.561 10.7457C20.3475 11.1038 20.1541 11.5519 20.154 12L20.1917 12.0052C20.242 12.0017 20.2939 12 20.3476 12C21.3691 12 22.146 12.8907 21.9781 13.8691L21.5559 16.3288C21.3904 17.2932 20.5312 18 19.5244 18C19.1621 18 18.9809 18 18.837 18.0444C18.7 18.0866 18.6216 18.1279 18.5094 18.2171C18.3915 18.3108 18.2637 18.4974 18.0082 18.8706C16.7168 20.7568 14.5084 22 12.001 22C9.49356 22 7.28515 20.7568 5.99374 18.8706C5.73826 18.4974 5.6105 18.3108 5.49259 18.2171C5.38039 18.1279 5.30195 18.0866 5.16499 18.0444C5.02106 18 4.83991 18 4.4776 18C3.4708 18 2.61157 17.2932 2.44605 16.3288L2.02388 13.8691C1.85596 12.8907 2.63293 12 3.65437 12C3.73081 12 3.80376 12.0035 3.87336 12.0104L3.84793 12C3.84793 11.5519 3.65458 11.1039 3.44113 10.7458C3.13891 10.2387 2.90992 9.66022 3.03663 9.08612ZM9.00098 8.00001C9.00107 3.99998 15.001 4.00002 15.001 8.00001V8.45853C14.0535 8.16056 13.0458 8.00001 12.001 8.00001C10.9562 8.00001 9.94847 8.16056 9.00098 8.45853V8.00001Z',
  d10: 'M18.001 10C16.3258 8.74353 14.2495 8 12.001 8C9.75246 8 7.67621 8.74353 6.00098 10',
  d11: 'M15.001 8.00001C15.001 4.00001 9.00108 3.99998 9.00098 8.00001',
  d12: 'M9.00899 13H9',
  d13: 'M15.009 13H15',
  d14: 'M9.00098 17C9.50098 17.5 11.001 18 12.001 17C13.001 18 14.501 17.5 15.001 17',
  d15: 'M18.6936 14.5C18.6936 13.3593 18.849 12 20.3466 12C21.3681 12 22.145 12.8907 21.9771 13.8691L21.5549 16.3288C21.3894 17.2932 20.5302 18 19.5234 18C19.1611 18 18.9799 18 18.836 18.0444C18.699 18.0866 18.6206 18.1279 18.5084 18.2171C18.3905 18.3108 18.2627 18.4974 18.0072 18.8706C16.7158 20.7568 14.5074 22 12 22C9.49258 22 7.28417 20.7568 5.99276 18.8706C5.73727 18.4974 5.60953 18.3108 5.49161 18.2171C5.37941 18.1279 5.30097 18.0866 5.16401 18.0444C5.02008 18 4.83893 18 4.47662 18C3.46982 18 2.61059 17.2932 2.44507 16.3288L2.0229 13.8691C1.85498 12.8907 2.63195 12 3.65339 12C5.151 12 5.30637 13.3593 5.30637 14.5',
  d16: 'M9.008 13H8.99902',
  d17: 'M15.008 13H14.999',
  d18: 'M18 10C16.3248 8.74353 14.2485 8 12 8C9.75148 8 7.67523 8.74353 6 10M15 8.00001C15 4.00001 9.0001 3.99998 9 8.00001',
  d19: 'M3.84355 11.25C3.86567 11.25 3.88778 11.2507 3.90985 11.2522C4.95352 11.3218 5.64089 11.889 6.01627 12.6067C6.35865 13.2613 6.43594 14.0169 6.43594 14.6042C6.43594 15.1334 5.99845 15.5625 5.45878 15.5625C4.91911 15.5625 4.48162 15.1334 4.48162 14.6042C4.48162 14.1375 4.41216 13.7392 4.27736 13.4815C4.21604 13.3642 4.15228 13.2973 4.0934 13.2569C4.04254 13.222 3.95954 13.1819 3.81194 13.1673C3.40399 13.1842 3.15889 13.5261 3.21337 13.8374L3.6259 16.1947C3.7037 16.6392 4.11942 17 4.64798 17C5.77157 17 6.49745 17.591 6.8435 18.0893L7.19106 18.5897C8.29784 19.9508 10.036 20.8333 11.9995 20.8333C13.9631 20.8333 15.7022 19.9508 16.8089 18.5897L17.1565 18.0893C17.5025 17.591 18.2284 17 19.352 17C19.8806 17 20.2963 16.6392 20.3741 16.1947L20.7866 13.8374C20.8411 13.5261 20.596 13.1842 20.1881 13.1673C20.0405 13.1819 19.9575 13.222 19.9066 13.2569C19.8477 13.2973 19.784 13.3642 19.7226 13.4815C19.5878 13.7392 19.5184 14.1375 19.5184 14.6042C19.5184 15.1334 19.0809 15.5625 18.5412 15.5625C18.0016 15.5625 17.5641 15.1334 17.5641 14.6042C17.5641 14.0169 17.6413 13.2613 17.9837 12.6067C18.3591 11.889 19.0465 11.3218 20.0901 11.2522C20.1122 11.2507 20.1343 11.25 20.1565 11.25C21.7258 11.25 22.9851 12.6057 22.7128 14.1616L22.3003 16.5189C22.0546 17.9227 20.7911 18.9167 19.352 18.9167C18.9952 18.9167 18.8272 19.0884 18.7718 19.1682L18.2142 19.9318C16.7409 21.655 14.4997 22.75 11.9995 22.75C9.4993 22.75 7.25914 21.655 5.78578 19.9318L5.22824 19.1682C5.17283 19.0884 5.0048 18.9167 4.64798 18.9167C3.20892 18.9167 1.94543 17.9227 1.69975 16.5189L1.28722 14.1616C1.01492 12.6057 2.27415 11.25 3.84355 11.25Z',
  d20: 'M10.0098 13C10.0098 13.5523 9.56205 14 9.00977 14L9.00078 14C8.4485 14 8.00078 13.5523 8.00078 13C8.00078 12.4477 8.4485 12 9.00078 12L9.00977 12C9.56205 12 10.0098 12.4477 10.0098 13Z',
  d21: 'M16.0098 13C16.0098 13.5523 15.5621 14 15.0098 14L15.0008 14C14.4485 14 14.0008 13.5523 14.0008 13C14.0008 12.4477 14.4485 12 15.0008 12L15.0098 12C15.5621 12 16.0098 12.4477 16.0098 13Z',
  d22: 'M8.46967 16.4697C8.76256 16.1768 9.23744 16.1768 9.53033 16.4697C9.64073 16.5801 9.973 16.7702 10.3953 16.8171C10.7874 16.8607 11.1668 16.7725 11.4697 16.4697C11.7626 16.1768 12.2374 16.1768 12.5303 16.4697C12.8332 16.7725 13.2126 16.8607 13.6047 16.8171C14.027 16.7702 14.3593 16.5801 14.4697 16.4697C14.7626 16.1768 15.2374 16.1768 15.5303 16.4697C15.8232 16.7626 15.8232 17.2374 15.5303 17.5303C15.1407 17.9199 14.473 18.2298 13.7703 18.3079C13.2142 18.3697 12.5788 18.2914 12 17.9454C11.4212 18.2914 10.7858 18.3697 10.2297 18.3079C9.527 18.2298 8.85927 17.9199 8.46967 17.5303C8.17678 17.2374 8.17678 16.7626 8.46967 16.4697Z',
  d23: 'M12.0002 1.25C7.25389 1.25 3.27384 4.52773 2.30345 8.92448C2.11273 9.78859 2.46896 10.5809 2.79608 11.1298C2.98232 11.4422 3.09713 11.7506 3.09713 12C3.09713 12.2983 3.27392 12.5683 3.54738 12.6875C3.82083 12.8067 4.13894 12.7526 4.35753 12.5495L6.48148 10.5769C6.92515 10.247 7.39868 9.95596 7.89714 9.70869C8.07231 9.62179 8.15989 9.57834 8.20495 9.5057C8.25 9.43306 8.25 9.33968 8.25 9.15292V8.00001C8.25003 6.79649 8.70882 5.83873 9.43927 5.18944C10.1559 4.55242 11.0902 4.25 12 4.25C12.9098 4.25 13.8442 4.55243 14.5608 5.18946C15.2912 5.83875 15.75 6.7965 15.75 8.00001V9.15241C15.75 9.3392 15.75 9.43259 15.7951 9.50524C15.8401 9.57788 15.9277 9.62133 16.1029 9.70821C16.6017 9.95558 17.0756 10.2467 17.5195 10.5768L19.6427 12.5495C19.8612 12.7525 20.1793 12.8067 20.4528 12.6876C20.7263 12.5684 20.9031 12.2985 20.9032 12.0002C20.9033 11.7507 21.0182 11.4422 21.2044 11.1297C21.5315 10.5809 21.8876 9.78862 21.6969 8.92465C20.7266 4.52782 16.7465 1.25 12.0002 1.25Z',
  d24: 'M13.4975 8.87063C13.8583 8.92941 14.0387 8.9588 14.1443 8.86895C14.25 8.77911 14.25 8.60512 14.25 8.25716V8.00001C14.25 7.20353 13.9588 6.66127 13.5642 6.31056C13.1559 5.94758 12.5902 5.75 12 5.75C11.4098 5.75 10.8442 5.94757 10.4358 6.31056C10.0413 6.66127 9.75002 7.20352 9.75 8.00001V8.25733C9.75 8.60533 9.75 8.77932 9.85568 8.86917C9.96136 8.95902 10.1418 8.92961 10.5026 8.87079C10.99 8.79134 11.4903 8.75001 12.0005 8.75001C12.5104 8.75001 13.0104 8.79129 13.4975 8.87063Z',
  d25: 'M2.3054 8.92448C3.27579 4.52773 7.25584 1.25 12.0021 1.25C16.7484 1.25 20.7285 4.52782 21.6989 8.92465C21.8895 9.78862 21.5334 10.5809 21.2063 11.1297C21.1508 11.2228 21.1017 11.3156 21.06 11.4066C22.1723 11.8062 22.93 12.9201 22.7128 14.1616L22.3003 16.5189C22.0546 17.9227 20.7911 18.9167 19.352 18.9167C18.9952 18.9167 18.8272 19.0884 18.7718 19.1682L18.2142 19.9318C16.7409 21.655 14.4997 22.75 11.9995 22.75C9.4993 22.75 7.25914 21.655 5.78578 19.9318L5.22824 19.1682C5.17283 19.0884 5.0048 18.9167 4.64798 18.9167C3.20892 18.9167 1.94543 17.9227 1.69975 16.5189L1.28722 14.1616C1.06971 12.9188 1.82938 11.8037 2.94376 11.4053C2.90222 11.3147 2.85327 11.2224 2.79804 11.1298C2.47091 10.5809 2.11469 9.78859 2.3054 8.92448ZM5.25641 11.7165C5.58465 11.9531 5.83631 12.2626 6.01627 12.6067C6.35865 13.2613 6.43594 14.0169 6.43594 14.6042C6.43594 15.1334 5.99845 15.5625 5.45878 15.5625C4.91911 15.5625 4.48162 15.1334 4.48162 14.6042C4.48162 14.1375 4.41216 13.7392 4.27736 13.4815C4.21604 13.3642 4.15228 13.2973 4.0934 13.2569C4.04254 13.222 3.95954 13.1819 3.81194 13.1673C3.40399 13.1842 3.15889 13.5261 3.21337 13.8374L3.6259 16.1947C3.7037 16.6392 4.11942 17 4.64798 17C5.77157 17 6.49745 17.591 6.8435 18.0893L7.19106 18.5897C8.29784 19.9508 10.036 20.8333 11.9995 20.8333C13.9631 20.8333 15.7022 19.9508 16.8089 18.5897L17.1565 18.0893C17.5025 17.591 18.2284 17 19.352 17C19.8806 17 20.2963 16.6392 20.3741 16.1947L20.7866 13.8374C20.8411 13.5261 20.596 13.1842 20.1881 13.1673C20.0405 13.1819 19.9575 13.222 19.9066 13.2569C19.8477 13.2973 19.784 13.3642 19.7226 13.4815C19.5878 13.7392 19.5184 14.1375 19.5184 14.6042C19.5184 15.1334 19.0809 15.5625 18.5412 15.5625C18.0016 15.5625 17.5641 15.1334 17.5641 14.6042C17.5641 14.0169 17.6413 13.2613 17.9837 12.6067C18.1642 12.2617 18.4166 11.9515 18.7461 11.7147L17.5214 10.5768C17.0775 10.2467 16.6037 9.95558 16.1049 9.70821C15.9297 9.62133 15.8421 9.57788 15.797 9.50524C15.752 9.43259 15.752 9.3392 15.752 9.15241V8.00001C15.752 6.7965 15.2932 5.83875 14.5627 5.18946C13.8461 4.55243 12.9118 4.25 12.002 4.25C11.0922 4.25 10.1579 4.55242 9.44122 5.18944C8.71077 5.83873 8.25198 6.79649 8.25195 8.00001V9.15292C8.25195 9.33968 8.25195 9.43306 8.2069 9.5057C8.16185 9.57834 8.07426 9.62179 7.89909 9.70869C7.40063 9.95596 6.9271 10.247 6.48343 10.5769L5.25641 11.7165ZM14.1463 8.86895C14.0406 8.9588 13.8602 8.92941 13.4994 8.87063C13.0124 8.79129 12.5124 8.75001 12.0025 8.75001C11.4922 8.75001 10.9919 8.79134 10.5046 8.87079C10.1437 8.92961 9.96332 8.95902 9.85763 8.86917C9.75195 8.77932 9.75195 8.60533 9.75195 8.25733V8.00001C9.75198 7.20352 10.0432 6.66127 10.4378 6.31056C10.8461 5.94757 11.4118 5.75 12.002 5.75C12.5922 5.75 13.1578 5.94758 13.5662 6.31056C13.9607 6.66127 14.252 7.20353 14.252 8.00001V8.25716C14.252 8.60512 14.252 8.77911 14.1463 8.86895Z',
  d26: 'M4.00141 12L3.00098 9.08612C3.89593 5.03496 7.60843 2 12.0088 2C16.4093 2 20.1223 5.03489 21.0172 9.08612L20.0163 12',
  d27: 'M18.0149 10C16.3381 8.74353 14.2599 8 12.0093 8C9.75869 8 7.68051 8.74353 6.00372 10',
  d28: 'M15.0124 8.00001C15.0124 4.00001 9.00694 3.99998 9.00684 8.00001',
  d29: 'M9.01485 13H9.00586',
  d30: 'M15.0197 13H15.0107',
  d31: 'M9.00684 17C9.5073 17.433 11.0087 17.866 12.0096 17C13.0105 17.866 14.5119 17.433 15.0124 17',
  d32: 'M5.3088 14.5169C5.3088 14.5169 5.53374 11.1769 2.94506 12.155C2.12377 12.4654 1.85915 13.2188 2.09358 14.3251L2.52501 16.6842C3.00345 17.7487 3.83547 18.1137 5.53374 18.0202C6.79072 20.5585 8.86418 21.864 11.9377 21.9977C14.8379 21.8978 17.2376 20.5585 18.4946 18.0202C20.1928 18.1137 21.0249 17.7487 21.5033 16.6842L21.9347 14.3251C22.1692 13.2188 21.9046 12.4654 21.0833 12.155C18.4946 11.1769 18.7195 14.5169 18.7195 14.5169',
  d33: 'M4 12L3.00049 9.08612C3.89461 5.03496 7.60367 2 12 2C16.3964 2 20.1059 5.03489 21 9.08612L20 12',
  d34: 'M21.9771 13.8691L22.7163 13.9959V13.9959L21.9771 13.8691ZM21.5549 16.3288L20.8157 16.2019L21.5549 16.3288ZM2.0229 13.8691L2.76209 13.7422L2.76209 13.7422L2.0229 13.8691ZM2.44507 16.3288L1.70588 16.4557H1.70588L2.44507 16.3288ZM18.5148 18V17.25H18.0468L17.8411 17.6704L18.5148 18ZM5.48518 18L6.15888 17.6704L5.95321 17.25H5.48518V18ZM21.2379 13.7422L20.8157 16.2019L22.2941 16.4557L22.7163 13.9959L21.2379 13.7422ZM20.8157 16.2019C20.7146 16.7909 20.1808 17.25 19.5234 17.25V18.75C20.8796 18.75 22.0642 17.7954 22.2941 16.4557L20.8157 16.2019ZM20.3466 12.75C20.9296 12.75 21.3228 13.2477 21.2379 13.7422L22.7163 13.9959C22.9673 12.5336 21.8065 11.25 20.3466 11.25V12.75ZM1.28371 13.9959L1.70588 16.4557L3.18426 16.2019L2.76209 13.7422L1.28371 13.9959ZM1.70588 16.4557C1.93582 17.7954 3.1204 18.75 4.47662 18.75V17.25C3.81924 17.25 3.28535 16.7909 3.18426 16.2019L1.70588 16.4557ZM3.65339 11.25C2.19347 11.25 1.03273 12.5336 1.28371 13.9959L2.76209 13.7422C2.67722 13.2477 3.07043 12.75 3.65339 12.75V11.25ZM17.8411 17.6704C16.8092 19.7798 14.5872 21.25 12 21.25V22.75C15.1639 22.75 17.9066 20.9501 19.1885 18.3296L17.8411 17.6704ZM12 21.25C9.41277 21.25 7.19079 19.7798 6.15888 17.6704L4.81147 18.3296C6.09342 20.9501 8.83608 22.75 12 22.75V21.25ZM4.47662 18.75H5.48518V17.25H4.47662V18.75ZM18.5148 18.75H19.5234V17.25H18.5148V18.75ZM6.05637 14.5C6.05637 13.9275 6.02397 13.1514 5.72063 12.504C5.56098 12.1633 5.31713 11.8368 4.95005 11.6C4.58225 11.3627 4.14418 11.25 3.65339 11.25V12.75C3.9114 12.75 4.05436 12.8072 4.13689 12.8605C4.22015 12.9142 4.29594 12.9988 4.36234 13.1405C4.51108 13.4579 4.55637 13.9319 4.55637 14.5H6.05637ZM19.4436 14.5C19.4436 13.9319 19.4889 13.4579 19.6377 13.1405C19.7041 12.9988 19.7799 12.9142 19.8631 12.8605C19.9456 12.8072 20.0886 12.75 20.3466 12.75V11.25C19.8558 11.25 19.4177 11.3627 19.0499 11.6C18.6829 11.8368 18.439 12.1633 18.2794 12.504C17.976 13.1514 17.9436 13.9275 17.9436 14.5H19.4436Z',
  d35: 'M9 17C9.5 17.433 11 17.866 12 17C13 17.866 14.5 17.433 15 17',
} as const;

export const IconSuperMarioStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-stroke-rounded IconSuperMarioStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSuperMarioDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-duotone-rounded IconSuperMarioDuotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSuperMarioTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-twotone-rounded IconSuperMarioTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSuperMarioSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-solid-rounded IconSuperMarioSolidRounded"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSuperMarioBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-bulk-rounded IconSuperMarioBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSuperMarioStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-stroke-sharp IconSuperMarioStrokeSharp"
    >
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d31} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d32} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSuperMarioSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-solid-sharp IconSuperMarioSolidSharp"
    >
      <path 
        d={d.d33} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d34} 
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
        d={d.d35} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSuperMario: TheIconSelfPack = {
  name: 'SuperMario',
  StrokeRounded: IconSuperMarioStrokeRounded,
  DuotoneRounded: IconSuperMarioDuotoneRounded,
  TwotoneRounded: IconSuperMarioTwotoneRounded,
  SolidRounded: IconSuperMarioSolidRounded,
  BulkRounded: IconSuperMarioBulkRounded,
  StrokeSharp: IconSuperMarioStrokeSharp,
  SolidSharp: IconSuperMarioSolidSharp,
};