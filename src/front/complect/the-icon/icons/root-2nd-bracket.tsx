import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.63358 13.5856L6.95446 13.9039L6.95446 13.9039L7.63358 13.5856ZM7.94757 14.2556L7.26845 14.5738L7.94757 14.2556ZM10.0365 14.0809L9.30734 13.9054L10.0365 14.0809ZM11.3124 8.77939L12.0416 8.95488V8.95488L11.3124 8.77939ZM12.3876 8V8.75V8ZM18 8.75C18.4142 8.75 18.75 8.41421 18.75 8C18.75 7.58579 18.4142 7.25 18 7.25V8.75ZM9.18165 15.9987L9.11916 15.2513L9.11916 15.2513L9.18165 15.9987ZM7.0332 12.7512L6.82708 13.4724L6.82709 13.4724L7.0332 12.7512ZM5.58091 12.5209C5.2374 12.7523 5.14656 13.2184 5.37802 13.562C5.60948 13.9055 6.07558 13.9963 6.41909 13.7648L5.58091 12.5209ZM12.8765 14.1071C12.4623 14.1071 12.1265 14.4429 12.1265 14.8571C12.1265 15.2714 12.4623 15.6071 12.8765 15.6071V14.1071ZM16.7265 12.1786C17.1407 12.1786 17.4765 11.8428 17.4765 11.4286C17.4765 11.0144 17.1407 10.6786 16.7265 10.6786V12.1786ZM14.4494 12.2901L13.7562 12.5763L14.4494 12.2901ZM15.1535 13.9956L15.8468 13.7094V13.7094L15.1535 13.9956ZM15.4933 14.6267L16.0033 14.0768L16.0033 14.0768L15.4933 14.6267ZM16.5 15.6071C16.9142 15.6071 17.25 15.2714 17.25 14.8571C17.25 14.4429 16.9142 14.1071 16.5 14.1071V15.6071ZM15.7458 14.7882L16.0342 14.0959V14.0959L15.7458 14.7882ZM13.1029 10.6786C12.6887 10.6786 12.3529 11.0144 12.3529 11.4286C12.3529 11.8428 12.6887 12.1786 13.1029 12.1786V10.6786ZM13.8571 11.4975L13.5687 12.1898L13.8571 11.4975ZM14.1096 11.659L14.6196 11.1091H14.6196L14.1096 11.659ZM6.95446 13.9039L7.26845 14.5738L8.62669 13.9373L8.31269 13.2673L6.95446 13.9039ZM10.7657 14.2564L12.0416 8.95488L10.5832 8.60391L9.30734 13.9054L10.7657 14.2564ZM12.3876 8.75H18V7.25H12.3876V8.75ZM7.26845 14.5738C7.53554 15.1437 7.76889 15.6457 7.99263 15.9914C8.19024 16.2967 8.58034 16.8015 9.24413 16.746L9.11916 15.2513C9.38154 15.2293 9.43215 15.4549 9.25185 15.1763C9.09769 14.9381 8.91471 14.5518 8.62669 13.9373L7.26845 14.5738ZM9.30734 13.9054C9.15022 14.5583 9.05027 14.9657 8.94874 15.2226C8.83011 15.5228 8.84338 15.2743 9.11916 15.2513L9.24413 16.746C9.92133 16.6894 10.2109 16.1101 10.3438 15.7739C10.4937 15.3944 10.6205 14.8596 10.7657 14.2564L9.30734 13.9054ZM8.31269 13.2673C8.20305 13.0334 8.08747 12.7823 7.96009 12.5895C7.81778 12.3742 7.59879 12.1329 7.23931 12.0301L6.82709 13.4724C6.77908 13.4586 6.73757 13.4342 6.70959 13.4104C6.68742 13.3916 6.6878 13.3849 6.70865 13.4165C6.72984 13.4486 6.75946 13.5003 6.80274 13.5864C6.84579 13.6721 6.8934 13.7736 6.95446 13.9039L8.31269 13.2673ZM12.0416 8.95488C12.0772 8.80719 12.1055 8.73884 12.1198 8.71158C12.1286 8.69484 12.1154 8.72454 12.0715 8.75354C12.0337 8.77845 12.0174 8.77295 12.0712 8.76465C12.1309 8.75545 12.2245 8.75 12.3876 8.75V7.25C12.0789 7.25 11.6237 7.25205 11.2458 7.50123C10.8282 7.77656 10.6746 8.22423 10.5832 8.60391L12.0416 8.95488ZM6.41909 13.7648C6.458 13.7386 6.49967 13.7098 6.53481 13.6856C6.57204 13.66 6.60646 13.6365 6.64056 13.6141C6.70985 13.5684 6.76672 13.5346 6.81564 13.5106C6.92898 13.4549 6.90936 13.4959 6.82708 13.4724L7.23932 12.0301C6.79325 11.9026 6.39683 12.0452 6.15443 12.1642C5.91601 12.2813 5.68134 12.4532 5.58091 12.5209L6.41909 13.7648ZM12.8765 15.6071C13.5589 15.6071 14.0784 15.2224 14.4462 14.8447C14.8152 14.4659 15.1434 13.9762 15.4228 13.5629L14.1801 12.7228C13.8801 13.1666 13.6288 13.5341 13.3717 13.7981C13.1134 14.0633 12.9601 14.1071 12.8765 14.1071V15.6071ZM15.4228 13.5629C15.7228 13.1191 15.9741 12.7516 16.2313 12.4876C16.4895 12.2224 16.6429 12.1786 16.7265 12.1786V10.6786C16.044 10.6786 15.5246 11.0633 15.1567 11.441C14.7877 11.8199 14.4596 12.3095 14.1801 12.7228L15.4228 13.5629ZM13.7562 12.5763L14.1082 13.4291L15.4947 12.8567L15.1427 12.0039L13.7562 12.5763ZM14.1082 13.4291L14.4603 14.2818L15.8468 13.7094L15.4947 12.8567L14.1082 13.4291ZM14.4603 14.2818C14.5741 14.5576 14.7058 14.9192 14.9833 15.1766L16.0033 14.0768C16.026 14.0978 16.0241 14.1081 15.9957 14.0528C15.9616 13.9861 15.9218 13.8911 15.8468 13.7094L14.4603 14.2818ZM16.5 14.1071C16.293 14.1071 16.1774 14.1067 16.092 14.1005C16.0164 14.095 16.0143 14.0876 16.0342 14.0959L15.4574 15.4805C15.7948 15.6211 16.1754 15.6071 16.5 15.6071V14.1071ZM14.9833 15.1766C15.1227 15.3058 15.2836 15.4082 15.4574 15.4805L16.0342 14.0959C16.02 14.09 16.0099 14.0829 16.0033 14.0768L14.9833 15.1766ZM13.1029 12.1786C13.3099 12.1786 13.4255 12.179 13.511 12.1852C13.5865 12.1907 13.5887 12.1981 13.5687 12.1898L14.1456 10.8052C13.8081 10.6646 13.4276 10.6786 13.1029 10.6786V12.1786ZM15.1427 12.0039C15.0288 11.7281 14.8972 11.3665 14.6196 11.1091L13.5996 12.209C13.5769 12.1879 13.5789 12.1776 13.6072 12.2329C13.6413 12.2996 13.6812 12.3946 13.7562 12.5763L15.1427 12.0039ZM13.5687 12.1898C13.583 12.1957 13.5931 12.2029 13.5996 12.209L14.6196 11.1091C14.4803 10.9799 14.3193 10.8775 14.1456 10.8052L13.5687 12.1898Z',
  d2: 'M18 3C19.0939 3.18809 19.899 3.52076 20.5355 4.10918C22 5.46303 22 7.64202 22 12C22 16.358 22 18.537 20.5355 19.8908C19.899 20.4792 19.0939 20.8119 18 21',
  d3: 'M6 3C4.90606 3.18809 4.10096 3.52076 3.46447 4.10918C2 5.46303 2 7.64202 2 12C2 16.358 2 18.537 3.46447 19.8908C4.10096 20.4792 4.90606 20.8119 6 21',
  d4: 'M18 3C19.0939 3.18809 19.899 3.52076 20.5355 4.10918C22 5.46303 22 7.64202 22 12C22 16.358 22 18.537 20.5355 19.8908C19.899 20.4792 19.0939 20.8119 18 21M6 3C4.90606 3.18809 4.10096 3.52076 3.46447 4.10918C2 5.46303 2 7.64202 2 12C2 16.358 2 18.537 3.46447 19.8908C4.10096 20.4792 4.90606 20.8119 6 21',
  d5: 'M18 7.99023H12.5167C11.7 7.99023 11.46 8.03023 11.299 8.85428L9.95406 14.4595C9.62198 15.7876 9.45066 15.9836 9.12 16.0102C8.76 15.8902 8.58977 15.5825 7.98 14.3302L7.63508 13.5702C7.37243 13.0308 7.28553 12.8032 7.02 12.7302C6.62037 12.6202 6.30716 12.931 6 13.1302',
  d6: 'M13.1035 11.4224C13.5235 11.4085 13.9795 11.3904 14.2291 11.8064C14.5724 12.4988 15.1156 13.9176 15.3175 14.3677C15.4185 14.5408 15.4795 14.6904 15.8395 14.8104C16.1088 14.845 16.4995 14.8544 16.4995 14.8544',
  d7: 'M16.7407 11.4102C15.8945 11.4102 15.3905 12.3562 14.9167 12.949C14.3074 13.8557 13.6807 14.8702 12.8887 14.8422',
  d8: 'M18 7.99023H12.5167C11.7 7.99023 11.46 8.03023 11.299 8.85428L9.95406 14.4595C9.62198 15.7876 9.45066 15.9836 9.12 16.0102C8.76 15.8902 8.58977 15.5825 7.98 14.3302L7.63508 13.5702C7.37243 13.0308 7.28553 12.8032 7.02 12.7302C6.62037 12.6202 6.30716 12.931 6 13.1302M13.1035 11.4223C13.5235 11.4084 13.9795 11.3903 14.2291 11.8063C14.5724 12.4987 15.1156 13.9175 15.3175 14.3676C15.4185 14.5407 15.4795 14.6903 15.8395 14.8103C16.1088 14.8449 16.4995 14.8543 16.4995 14.8543M16.7407 11.4101C15.8945 11.4101 15.3905 12.3561 14.9167 12.9489C14.3074 13.8556 13.6807 14.8701 12.8887 14.8421',
  d9: 'M12.2848 9.01338L10.9925 14.3827C10.8556 14.952 10.7284 15.481 10.5764 15.8658C10.4411 16.208 10.1011 16.9253 9.26506 16.9952C8.44691 17.0636 7.98335 16.437 7.78286 16.1272C7.55619 15.7771 7.32357 15.2805 7.0712 14.7419L6.67357 13.8937L6.55889 13.9722C6.10088 14.2808 5.4794 14.1597 5.17079 13.7016C4.86218 13.2436 4.9833 12.6222 5.44131 12.3136C5.44131 12.3136 5.82561 12.0472 6.04433 11.9398C6.30823 11.8102 6.77399 11.6371 7.30812 11.7897C7.74712 11.9152 8.00902 12.21 8.16877 12.4517C8.30023 12.6506 8.4179 12.9021 8.51988 13.12L8.99517 14.1333L10.3403 8.54541C10.4341 8.15577 10.6058 7.62381 11.1083 7.29251C11.5522 6.99987 12.0756 6.99995 12.3761 7H12.3761L18.0001 7C18.5524 7 19.0001 7.44772 19.0001 8C19.0001 8.55229 18.5524 9 18.0001 9L12.2848 9.01338Z',
  d10: 'M14.4241 12.4312C14.4241 12.4312 14.2032 12.4286 14.103 12.4286C13.5508 12.4286 13.103 11.9809 13.103 11.4286C13.103 10.8763 13.5508 10.4286 14.103 10.4286C14.3995 10.427 14.8822 10.4246 15.2418 10.5744C15.4421 10.6578 15.6283 10.7761 15.7897 10.9258C15.8841 11.0133 15.9639 11.111 16.0322 11.2117C16.4176 10.8305 16.9802 10.4286 17.7266 10.4286C18.2789 10.4286 18.7266 10.8763 18.7266 11.4286C18.7266 11.9809 18.2789 12.4286 17.7266 12.4286C17.6699 12.4596 17.5234 12.546 17.4105 12.662C17.257 12.8196 17.1034 13.0196 16.9326 13.2619L17.179 13.8545L17.5001 13.8571C18.0524 13.8571 18.5001 14.3049 18.5001 14.8571C18.5001 15.4094 18.0524 15.8571 17.5001 15.8571C17.2037 15.8587 16.7209 15.8611 16.3613 15.7113C16.161 15.6279 15.9749 15.5096 15.8134 15.3599C15.7191 15.2724 15.6393 15.1747 15.571 15.074C15.1855 15.4552 14.6229 15.8571 13.8766 15.8571C13.3243 15.8571 12.8766 15.4094 12.8766 14.8571C12.8766 14.3049 13.3243 13.8571 13.8766 13.8571C13.9333 13.8261 14.0797 13.7397 14.1927 13.6237C14.3462 13.4661 14.4997 13.2661 14.6706 13.0238L14.4241 12.4312Z',
  d11: 'M17.0146 2.83071C17.1082 2.28642 17.6253 1.92104 18.1696 2.01462C19.3786 2.22248 20.3887 2.61162 21.2145 3.37505C22.1768 4.26466 22.6053 5.39961 22.8067 6.78429C23.0002 8.11498 23.0002 9.80922 23.0002 11.9207V12.0796C23.0002 14.1911 23.0002 15.8853 22.8067 17.216C22.6053 18.6007 22.1768 19.7357 21.2145 20.6253C20.3887 21.3887 19.3786 21.7778 18.1696 21.9857C17.6253 22.0793 17.1082 21.7139 17.0146 21.1696C16.921 20.6253 17.2864 20.1082 17.8307 20.0146C18.8096 19.8463 19.4097 19.5701 19.8569 19.1567C20.359 18.6924 20.6628 18.061 20.8275 16.9282C20.9977 15.7581 21.0002 14.2097 21.0002 12.0002C21.0002 9.79066 20.9977 8.24223 20.8275 7.07212C20.6628 5.93935 20.359 5.30788 19.8569 4.84364C19.4097 4.43023 18.8096 4.15401 17.8307 3.9857C17.2864 3.89212 16.921 3.37501 17.0146 2.83071Z',
  d12: 'M6.98554 2.83071C7.07912 3.37501 6.71375 3.89212 6.16945 3.9857C5.19052 4.15401 4.59048 4.43023 4.1433 4.84364C3.64113 5.30788 3.33739 5.93935 3.17265 7.07212C3.00248 8.24223 3 9.79067 3 12.0002C3 14.2097 3.00248 15.7581 3.17265 16.9282C3.33739 18.061 3.64113 18.6924 4.1433 19.1567C4.59048 19.5701 5.19052 19.8463 6.16945 20.0146C6.71375 20.1082 7.07912 20.6253 6.98554 21.1696C6.89196 21.7139 6.37485 22.0793 5.83055 21.9857C4.62161 21.7778 3.61145 21.3887 2.78564 20.6253C1.82334 19.7357 1.39485 18.6007 1.19347 17.216C0.999946 15.8854 0.99997 14.1911 1 12.0796V11.9207C0.99997 9.80922 0.999946 8.11498 1.19347 6.78429C1.39485 5.39961 1.82334 4.26466 2.78564 3.37505C3.61144 2.61162 4.6216 2.22248 5.83055 2.01462C6.37485 1.92104 6.89196 2.28642 6.98554 2.83071Z',
  d13: 'M18 3.00005L22 3.00003V21H18M6 21H2V3H6',
  d14: 'M12.0082 7.99219L12.0083 7.24219C11.6803 7.24216 11.3903 7.45532 11.2924 7.76841L12.0082 7.99219ZM9.5025 16.0077L8.83026 16.3402C8.96616 16.6149 9.25554 16.7793 9.56109 16.7554C9.86665 16.7314 10.1269 16.524 10.2183 16.2314L9.5025 16.0077ZM7.50931 11.9786L8.18155 11.646C8.07486 11.4303 7.87117 11.279 7.6339 11.239C7.39662 11.199 7.15458 11.2753 6.98312 11.4441L7.50931 11.9786ZM16.9676 14.9759L16.8111 15.7094L16.8885 15.7259H16.9676V14.9759ZM15.7812 13.6047L15.0916 13.8996L15.107 13.9355L15.126 13.9697L15.7812 13.6047ZM14.9091 11.6724L14.2464 12.0235H14.2464L14.9091 11.6724ZM16.0283 12.2809L15.4537 11.7989L15.4474 11.8064L15.4414 11.814L16.0283 12.2809ZM17.9879 7.24267L12.0083 7.24219L12.0082 8.74219L17.9877 8.74267L17.9879 7.24267ZM11.2924 7.76841L8.78666 15.7839L10.2183 16.2314L12.7241 8.21597L11.2924 7.76841ZM10.1747 15.6751L8.18155 11.646L6.83707 12.3111L8.83026 16.3402L10.1747 15.6751ZM6.98312 11.4441L5.4699 12.934L6.52228 14.0029L8.0355 12.513L6.98312 11.4441ZM17.6946 14.2259H16.9676V15.7259H17.6946V14.2259ZM17.1241 14.2424C16.9323 14.2015 16.8674 14.1305 16.8014 14.0212C16.7552 13.9446 16.7138 13.8524 16.6554 13.713C16.604 13.5905 16.5306 13.4088 16.4364 13.2397L15.126 13.9697C15.1702 14.0491 15.2081 14.1405 15.2722 14.2933C15.3292 14.4293 15.4077 14.6148 15.5171 14.7961C15.7624 15.2027 16.1522 15.5688 16.8111 15.7094L17.1241 14.2424ZM16.4708 13.3098C16.3783 13.0937 16.2828 12.8746 16.1901 12.665L14.8183 13.2717C14.9089 13.4766 15.002 13.69 15.0916 13.8996L16.4708 13.3098ZM16.1901 12.665C15.913 12.0383 15.6462 11.4616 15.5718 11.3213L14.2464 12.0235C14.2907 12.1071 14.5346 12.6303 14.8183 13.2717L16.1901 12.665ZM15.5718 11.3213C15.462 11.1139 15.2773 10.7143 14.8252 10.4749C14.4286 10.2648 13.9153 10.221 13.2857 10.221V11.721C13.5856 11.721 13.789 11.7338 13.9299 11.754C14.0703 11.7741 14.1177 11.7976 14.1231 11.8004C14.1242 11.801 14.1204 11.7989 14.1155 11.7945C14.1112 11.7907 14.1126 11.7909 14.1204 11.8014C14.1454 11.8353 14.1723 11.8837 14.2464 12.0235L15.5718 11.3213ZM18.0031 10.221C17.4152 10.221 16.9208 10.4506 16.5132 10.7502C16.115 11.0428 15.7647 11.428 15.4537 11.7989L16.603 12.7628C16.8989 12.41 17.1547 12.1402 17.4015 11.9589C17.6389 11.7844 17.8283 11.721 18.0031 11.721V10.221ZM15.4414 11.814C15.2574 12.0453 15.0761 12.2887 14.9038 12.5189L16.1046 13.4178C16.2815 13.1814 16.448 12.9581 16.6153 12.7478L15.4414 11.814ZM14.9038 12.5189C14.5194 13.0324 14.1808 13.4759 13.8323 13.7971C13.4861 14.1162 13.2235 14.2259 13.0031 14.2259V15.7259C13.7661 15.7259 14.3783 15.3338 14.8488 14.9002C15.3171 14.4686 15.7374 13.9084 16.1046 13.4178L14.9038 12.5189Z',
  d15: 'M1.5 2H6.5V4H3.5V20L6.49999 20L6.50001 22L1.5 22V2ZM22.5 2.00002V22H17.5V20H20.5V4.00003L17.5 4.00005L17.5 2.00005L22.5 2.00002Z',
  d16: 'M11.0456 7.70173C11.1761 7.28425 11.5627 7 12.0001 7H18.0001V9H12.7353L10.4546 16.2983C10.3329 16.6876 9.98695 16.964 9.58037 16.9968C9.17379 17.0295 8.78807 16.812 8.60565 16.4472L7.22612 13.6882L6.70718 14.2071L5.29297 12.7929L6.79297 11.2929C7.02026 11.0656 7.34297 10.9614 7.66026 11.0129C7.97755 11.0644 8.25075 11.2653 8.3945 11.5528L9.28536 13.3345L11.0456 7.70173ZM13.8295 12.0079C13.7152 12.0005 13.5619 12 13.2942 12V10C13.3287 10 13.3635 9.9999 13.3986 9.9998C13.7977 9.99864 14.2328 9.99737 14.6242 10.1438C14.8455 10.2267 15.0558 10.3457 15.2417 10.5006C15.4611 10.6834 15.6153 10.9118 15.7342 11.1328C15.8149 11.0488 15.8972 10.9674 15.9812 10.8899C16.4736 10.4358 17.1432 10 18.0001 10V12C17.862 12 17.658 12.0642 17.3372 12.3601C17.1162 12.5639 16.8982 12.8221 16.6595 13.1282L16.8659 13.5773C16.9127 13.6791 16.9489 13.7577 16.9813 13.8252C17.0136 13.8925 17.036 13.9356 17.0529 13.9652C17.055 13.9689 17.0569 13.9722 17.0586 13.9751C17.0626 13.9771 17.0671 13.9792 17.0723 13.9812C17.0816 13.9832 17.1101 13.9881 17.1706 13.9921C17.2849 13.9995 17.4383 14 17.706 14V16C17.6715 16 17.6367 16.0001 17.6016 16.0002C17.2024 16.0014 16.7674 16.0026 16.376 15.8562C16.1546 15.7733 15.9444 15.6543 15.7585 15.4994C15.539 15.3166 15.3849 15.0882 15.2659 14.8672C15.1853 14.9512 15.1029 15.0326 15.0189 15.1101C14.5266 15.5642 13.8569 16 13.0001 16V14C13.1381 14 13.3422 13.9358 13.663 13.6399C13.8839 13.4361 14.102 13.1779 14.3406 12.8718L14.1342 12.4227C14.0875 12.3209 14.0513 12.2423 14.0188 12.1748C13.9865 12.1075 13.9641 12.0644 13.9472 12.0348C13.9452 12.0311 13.9433 12.0278 13.9415 12.0249C13.9376 12.0229 13.933 12.0208 13.9278 12.0188C13.9186 12.0168 13.8901 12.0119 13.8295 12.0079Z',
};

export const IconRoot2ndBracketStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-2nd-bracket-stroke-rounded IconRoot2ndBracketStrokeRounded"
    >
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
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

export const IconRoot2ndBracketDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-2nd-bracket-duotone-rounded IconRoot2ndBracketDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoot2ndBracketTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-2nd-bracket-twotone-rounded IconRoot2ndBracketTwotoneRounded"
    >
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoot2ndBracketSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-2nd-bracket-solid-rounded IconRoot2ndBracketSolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoot2ndBracketBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-2nd-bracket-bulk-rounded IconRoot2ndBracketBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
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
    </TheIconWrapper>
  );
};

export const IconRoot2ndBracketStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-2nd-bracket-stroke-sharp IconRoot2ndBracketStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoot2ndBracketSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-2nd-bracket-solid-sharp IconRoot2ndBracketSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRoot2ndBracket: TheIconSelfPack = {
  name: 'Root2ndBracket',
  StrokeRounded: IconRoot2ndBracketStrokeRounded,
  DuotoneRounded: IconRoot2ndBracketDuotoneRounded,
  TwotoneRounded: IconRoot2ndBracketTwotoneRounded,
  SolidRounded: IconRoot2ndBracketSolidRounded,
  BulkRounded: IconRoot2ndBracketBulkRounded,
  StrokeSharp: IconRoot2ndBracketStrokeSharp,
  SolidSharp: IconRoot2ndBracketSolidSharp,
};