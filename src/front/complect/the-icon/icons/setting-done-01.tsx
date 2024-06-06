import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.232 10.0545C20.712 9.51454 21.54 8.69853 21.4958 8.36621C21.5298 8.04299 21.3548 7.73937 21.0049 7.13212L20.5114 6.27552C20.1381 5.62769 19.9514 5.30377 19.6338 5.17461C19.3163 5.04544 18.9571 5.14737 18.2388 5.35121L17.0185 5.69491C16.5599 5.80066 16.0788 5.74067 15.66 5.52552L15.3231 5.33115C14.9641 5.10116 14.6879 4.76206 14.535 4.36347L14.201 3.36608C13.9815 2.70607 13.8717 2.37606 13.6103 2.1873C13.3489 1.99854 13.0017 1.99854 12.3074 1.99854H11.1926C10.4982 1.99854 10.151 1.99854 9.88973 2.1873C9.62833 2.37606 9.51853 2.70607 9.29893 3.36608L8.96503 4.36347C8.81213 4.76206 8.53593 5.10116 8.17683 5.33115L7.83993 5.52552C7.42123 5.74067 6.94003 5.80066 6.48143 5.69491L5.26124 5.35121C4.54294 5.14737 4.18374 5.04544 3.86614 5.17461C3.54854 5.30377 3.36194 5.62769 2.98864 6.27552L2.49504 7.13212C2.14515 7.73937 1.97025 8.04299 2.00415 8.36621C2.03815 8.68943 2.27235 8.94991 2.74074 9.47085L3.77184 10.6235C4.02374 10.9425 4.20274 11.4985 4.20274 11.9983C4.20274 12.4985 4.02384 13.0543 3.77184 13.3734L2.74074 14.5261C2.27235 15.047 2.03815 15.3075 2.00415 15.6307C1.97025 15.954 2.14515 16.2576 2.49504 16.8648L2.98864 17.7214C3.36194 18.3692 3.54854 18.6932 3.86614 18.8223C4.18374 18.9515 4.54294 18.8496 5.26124 18.6457L6.48143 18.302C6.94013 18.1962 7.42133 18.2563 7.84013 18.4715L8.17693 18.6659C8.53603 18.8959 8.81213 19.2349 8.96493 19.6335L9.29893 20.631C9.51853 21.291 9.63993 21.6341 9.84 21.7785C9.9 21.8218 10.14 22.0185 10.728 22.0005',
  d2: 'M15 17.2184C15 17.2184 16 17.5024 16.5 18.5024C16.5 18.5024 17.5962 16.0024 19.008 15.5024',
  d3: 'M22 16.9985C22 19.7599 19.7614 21.9985 17 21.9985C14.2386 21.9985 12 19.7599 12 16.9985C12 14.2371 14.2386 11.9985 17 11.9985C19.7614 11.9985 22 14.2371 22 16.9985Z',
  d4: 'M14.1599 9.44263C13.3199 8.75863 12.6599 8.49463 11.6999 8.49463C9.89986 8.51863 8.25586 10.0056 8.25586 11.9386C8.25586 13.0043 8.57986 13.6786 9.19186 14.3866',
  d5: 'M21.2559 6.63407L20.7623 5.77747C20.3891 5.12964 20.2024 4.80572 19.8848 4.67656C19.5673 4.54739 19.2081 4.64932 18.4898 4.85316L17.2695 5.19686C16.8109 5.30261 16.3298 5.24262 15.911 5.02747L15.5741 4.8331C15.2151 4.60311 14.9389 4.26401 14.786 3.86542L14.452 2.86803C14.2325 2.20802 14.1227 1.87801 13.8613 1.68925C13.5999 1.50049 13.2527 1.50049 12.5584 1.50049H11.4436C10.7493 1.50049 10.4021 1.50049 10.1407 1.68925C9.87931 1.87801 9.76952 2.20802 9.54995 2.86803L9.21598 3.86542C9.0631 4.26401 8.78692 4.60311 8.42783 4.8331L8.09095 5.02747C7.6722 5.24262 7.19106 5.30261 6.73245 5.19686L5.51222 4.85316C4.79389 4.64932 4.43472 4.54739 4.11715 4.67656C3.79957 4.80572 3.61292 5.12964 3.23963 5.77747L2.74604 6.63407C2.39614 7.24132 2.22118 7.54495 2.25514 7.86817C2.28909 8.19139 2.52331 8.45186 2.99174 8.9728L4.02278 10.1255C4.27477 10.4445 4.45368 11.0005 4.45368 11.5003C4.45368 12.0005 4.27483 12.5563 4.0228 12.8754L2.99174 14.0281C2.52331 14.549 2.2891 14.8095 2.25514 15.1327C2.22118 15.456 2.39614 15.7596 2.74605 16.3668L3.23962 17.2234C3.6129 17.8712 3.79957 18.1952 4.11715 18.3243C4.43473 18.4535 4.7939 18.3516 5.51224 18.1477L6.73241 17.804C7.19109 17.6982 7.67233 17.7583 8.09113 17.9735L8.42796 18.1679C8.78697 18.3979 9.0631 18.7369 9.21596 19.1355L9.54995 20.133C9.76952 20.793 9.87931 21.123 10.1407 21.3117C10.4021 21.5005 10.7493 21.5005 11.4436 21.5005H12.5584C13.2527 21.5005 13.5999 21.5005 13.8613 21.3117C14.0613 21.1673 14.1725 20.9403 14.312 20.546C13.0629 19.637 12.251 18.1636 12.251 16.5005C12.251 15.9638 12.3356 15.4468 12.4921 14.9622C12.3293 14.9854 12.1628 14.9974 11.9936 14.9974C11.0725 14.9974 10.0595 14.4662 9.43456 13.8845C8.85289 13.2596 8.49707 12.4216 8.49707 11.5005C8.49707 9.56749 10.0641 8.00049 11.9971 8.00049C12.9182 8.00049 13.7562 8.3563 14.3811 8.93798C14.9628 9.56289 15.4936 10.5763 15.4936 11.4974C15.4936 11.6075 15.4885 11.7163 15.4786 11.8237C16.0295 11.6149 16.6269 11.5005 17.251 11.5005C18.1102 11.5005 18.9187 11.7172 19.625 12.0989C19.576 11.9027 19.5483 11.6972 19.5483 11.5003C19.5483 11.0005 19.7272 10.4445 19.9792 10.1255L21.0102 8.9728C21.4787 8.45186 21.7129 8.19139 21.7468 7.86817C21.7808 7.54495 21.6058 7.24132 21.2559 6.63407Z',
  d6: 'M20.483 9.55352C20.963 9.01356 21.791 8.19755 21.7468 7.86523C21.7808 7.54201 21.6058 7.23839 21.2559 6.63114L20.7624 5.77454C20.3891 5.12671 20.2024 4.80279 19.8848 4.67363C19.5673 4.54446 19.2081 4.64639 18.4898 4.85023L17.2695 5.19393C16.8109 5.29968 16.3298 5.23969 15.911 5.02454L15.5741 4.83017C15.2151 4.60018 14.9389 4.26108 14.786 3.86249L14.452 2.8651C14.2325 2.20509 14.1227 1.87508 13.8613 1.68632C13.5999 1.49756 13.2527 1.49756 12.5584 1.49756H11.4436C10.7492 1.49756 10.402 1.49756 10.1407 1.68632C9.8793 1.87508 9.7695 2.20509 9.5499 2.8651L9.216 3.86249C9.0631 4.26108 8.7869 4.60018 8.4278 4.83017L8.0909 5.02454C7.6722 5.23969 7.191 5.29968 6.7324 5.19393L5.51221 4.85023C4.79391 4.64639 4.43471 4.54446 4.11711 4.67363C3.79951 4.80279 3.61291 5.12671 3.23961 5.77454L2.74601 6.63114C2.39612 7.23839 2.22122 7.54201 2.25512 7.86523C2.28912 8.18845 2.52332 8.44893 2.99171 8.96987L4.02281 10.1225C4.27471 10.4415 4.45371 10.9975 4.45371 11.4973C4.45371 11.9975 4.27481 12.5533 4.02281 12.8724L2.99171 14.0251C2.52332 14.546 2.28912 14.8065 2.25512 15.1297C2.22122 15.453 2.39612 15.7566 2.74601 16.3638L3.23961 17.2204C3.61291 17.8682 3.79951 18.1922 4.11711 18.3213C4.43471 18.4505 4.79391 18.3486 5.51221 18.1447L6.7324 17.801C7.1911 17.6952 7.6723 17.7553 8.0911 17.9705L8.4279 18.1649C8.787 18.3949 9.0631 18.7339 9.2159 19.1325L9.5499 20.13C9.7695 20.79 9.8909 21.1331 10.091 21.2775C10.151 21.3208 10.391 21.5175 10.979 21.4995',
  d7: 'M15.251 16.7175C15.251 16.7175 16.251 17.0015 16.751 18.0015C16.751 18.0015 17.8472 15.5015 19.259 15.0015',
  d8: 'M22.251 16.4976C22.251 19.259 20.0124 21.4976 17.251 21.4976C14.4896 21.4976 12.251 19.259 12.251 16.4976C12.251 13.7362 14.4896 11.4976 17.251 11.4976C20.0124 11.4976 22.251 13.7362 22.251 16.4976Z',
  d9: 'M14.4109 8.94165C13.5709 8.25765 12.9109 7.99365 11.9509 7.99365C10.1508 8.01765 8.50684 9.50462 8.50684 11.4376C8.50684 12.5033 8.83084 13.1776 9.44284 13.8856',
  d10: 'M20.2281 10.0545C20.7081 9.51453 21.5361 8.69853 21.4919 8.36621C21.5259 8.04299 21.3509 7.73937 21.001 7.13212L20.5075 6.27552C20.1342 5.62769 19.9475 5.30377 19.6299 5.17461C19.3124 5.04544 18.9532 5.14737 18.2349 5.35121L17.0146 5.69491C16.556 5.80066 16.0749 5.74067 15.6561 5.52552L15.3192 5.33115C14.9602 5.10116 14.684 4.76206 14.5311 4.36347L14.1971 3.36608C13.9776 2.70607 13.8678 2.37606 13.6064 2.1873C13.345 1.99854 12.9978 1.99854 12.3035 1.99854H11.1887C10.4943 1.99854 10.1471 1.99854 9.88582 2.1873C9.62442 2.37606 9.51462 2.70607 9.29502 3.36608L8.96112 4.36347C8.80822 4.76206 8.53202 5.10116 8.17292 5.33115L7.83602 5.52552C7.41732 5.74067 6.93612 5.80066 6.47752 5.69491L5.25733 5.35121C4.53903 5.14737 4.17983 5.04544 3.86223 5.17461C3.54463 5.30377 3.35803 5.62769 2.98473 6.27552L2.49113 7.13212C2.14124 7.73937 1.96634 8.04299 2.00024 8.36621C2.03424 8.68943 2.26844 8.94991 2.73683 9.47085L3.76793 10.6235C4.01983 10.9425 4.19883 11.4985 4.19883 11.9983C4.19883 12.4985 4.01993 13.0543 3.76793 13.3734L2.73683 14.5261C2.26844 15.047 2.03424 15.3075 2.00024 15.6307C1.96634 15.954 2.14124 16.2576 2.49113 16.8648L2.98473 17.7214C3.35803 18.3692 3.54463 18.6932 3.86223 18.8223C4.17983 18.9515 4.53903 18.8496 5.25733 18.6457L6.47752 18.302C6.93622 18.1962 7.41742 18.2563 7.83622 18.4715L8.17302 18.6659C8.53212 18.8959 8.80822 19.2349 8.96102 19.6335L9.29502 20.631C9.51462 21.291 9.63602 21.6341 9.83609 21.7785C9.89609 21.8218 10.1361 22.0185 10.7241 22.0005',
  d11: 'M14.156 9.44263C13.316 8.75863 12.656 8.49463 11.696 8.49463C9.89595 8.51863 8.25195 10.0056 8.25195 11.9386C8.25195 13.0043 8.57595 13.6786 9.18795 14.3866',
  d12: 'M22.752 17.75C22.752 20.5114 20.5134 22.75 17.752 22.75C14.9905 22.75 12.752 20.5114 12.752 17.75C12.752 14.9886 14.9905 12.75 17.752 12.75C20.5134 12.75 22.752 14.9886 22.752 17.75ZM20.0019 16.9572C20.3923 16.8189 20.5967 16.3903 20.4584 15.9998C20.3202 15.6094 19.8915 15.4049 19.5011 15.5432C18.9999 15.7208 18.5736 16.0562 18.2314 16.4033C17.884 16.7555 17.585 17.1588 17.3442 17.528C17.2623 17.6535 17.1861 17.7768 17.1159 17.8951C16.9761 17.7774 16.8376 17.6801 16.7092 17.6007C16.5111 17.4782 16.3318 17.3945 16.1984 17.3403L16.1956 17.3392C16.1294 17.3123 16.0555 17.2823 15.9499 17.2534C15.5503 17.1442 15.1379 17.3796 15.0287 17.7791C14.9201 18.1763 15.1521 18.5862 15.5473 18.6984C15.6171 18.7267 15.8057 18.8056 15.9201 18.8764C16.1506 19.019 16.4103 19.2435 16.5813 19.5856C16.7116 19.8462 16.9809 20.0077 17.2721 19.9999C17.5632 19.9922 17.8236 19.8164 17.9399 19.5494C17.9691 19.487 18.0541 19.306 18.1117 19.1936C18.2274 18.9677 18.3945 18.6635 18.6006 18.3474C18.8082 18.0291 19.0457 17.7137 19.2994 17.4565C19.5581 17.1942 19.7972 17.0297 20.0019 16.9572Z',
  d13: 'M10.3458 22.75C10.0662 22.7181 9.77215 22.6444 9.49779 22.4469C9.22355 22.2495 9.06079 21.9946 8.94229 21.7402C8.84812 21.538 8.41748 20.2619 8.31947 19.9704C8.30938 19.9404 8.30434 19.9254 8.29669 19.9093C8.28904 19.8932 8.28152 19.8812 8.26647 19.8573C8.18936 19.7349 7.99148 19.4375 7.82248 19.3266C7.40897 19.0554 6.99181 18.992 6.71386 19.0458C6.70755 19.0471 6.7044 19.0477 6.69836 19.0491C6.69232 19.0505 6.68792 19.0518 6.67912 19.0543C6.49187 19.1069 4.79972 19.5816 4.54876 19.6213C4.25324 19.6681 3.92995 19.674 3.59565 19.5385C3.26146 19.4031 3.03405 19.1739 2.85502 18.935L1.41648 16.4526C1.30388 16.1934 1.2208 15.9008 1.25638 15.5633C1.29195 15.2258 1.43424 14.9568 1.59848 14.7266C1.74001 14.5283 2.89043 13.246 3.17304 12.9323C3.1885 12.9151 3.19623 12.9066 3.20571 12.8934C3.21518 12.8803 3.21947 12.8728 3.22803 12.8578C3.2925 12.7446 3.46396 12.4054 3.46396 11.9998C3.46396 11.473 3.25291 11.1666 3.21106 11.1111C3.21101 11.111 3.21115 11.1112 3.21105 11.111C3.21095 11.1109 3.2111 11.1111 3.21104 11.111C3.21089 11.1108 3.2091 11.1085 3.20516 11.1037C3.20104 11.0987 3.19964 11.0971 3.19685 11.094C3.08743 10.9722 1.73996 9.47157 1.59848 9.2733C1.43424 9.04311 1.29195 8.7741 1.25637 8.4366C1.2208 8.09914 1.30387 7.80652 1.41648 7.54733C1.51106 7.32964 2.68693 5.34791 2.83889 5.09204C2.84713 5.07817 2.85125 5.07124 2.85621 5.0639C2.86118 5.05656 2.86558 5.05082 2.87439 5.03934C3.05043 4.80972 3.27339 4.59201 3.59564 4.46138C3.92994 4.32586 4.25322 4.33183 4.54874 4.3786C4.81009 4.41995 6.31538 4.84275 6.67874 4.94548C6.68654 4.94768 6.69043 4.94878 6.69898 4.95067C6.70752 4.95255 6.70974 4.95291 6.71416 4.95362C6.81186 4.96927 7.29022 5.02231 7.82243 4.67329C8.03297 4.53522 8.19711 4.3369 8.29335 4.10416C8.29587 4.09807 8.29712 4.09503 8.29892 4.09024C8.30071 4.08544 8.30205 4.08147 8.30471 4.07352C8.35964 3.90985 8.84195 2.4752 8.94229 2.25981C9.06079 2.00543 9.22356 1.75047 9.49779 1.55308C9.77215 1.3556 10.0662 1.28188 10.3458 1.25H13.1503C13.4299 1.28188 13.7239 1.3556 13.9983 1.55308C14.2725 1.75047 14.4353 2.00543 14.5538 2.25981C14.6541 2.4752 15.1365 3.90985 15.1914 4.07352C15.194 4.08147 15.1954 4.08544 15.1972 4.09024C15.199 4.09503 15.2002 4.09807 15.2027 4.10416C15.299 4.3369 15.4631 4.53522 15.6737 4.67329C16.2059 5.02231 16.6842 4.96927 16.7819 4.95362C16.7864 4.95291 16.7886 4.95255 16.7971 4.95067C16.8057 4.94878 16.8096 4.94768 16.8173 4.94548C17.1807 4.84275 18.686 4.41995 18.9474 4.3786C19.2429 4.33183 19.5662 4.32586 19.9004 4.46138C20.2227 4.59201 20.4457 4.80972 20.6217 5.03934C20.6305 5.05082 20.6349 5.05656 20.6399 5.0639C20.6448 5.07124 20.649 5.07817 20.6572 5.09204C20.8092 5.34791 21.985 7.32964 22.0796 7.54733C22.1922 7.80652 22.2753 8.09914 22.2397 8.4366C22.2041 8.7741 22.0619 9.04311 21.8976 9.2733C21.7557 9.47221 20.3999 10.9819 20.2982 11.0951C20.2962 11.0974 20.2951 11.0986 20.2936 11.1004L20.2909 11.1035C20.2894 11.1053 20.2939 11.0998 20.2921 11.102C20.0795 11.3611 19.9732 11.4907 19.9196 11.5189C19.8715 11.5443 19.8725 11.544 19.8186 11.551C19.7585 11.5589 19.6659 11.5334 19.4808 11.4824C18.9303 11.3309 18.3506 11.25 17.752 11.25C17.1616 11.25 16.5897 11.3287 16.046 11.4762C15.681 11.5752 15.4984 11.6247 15.3928 11.5673C15.2871 11.5099 15.225 11.3164 15.1009 10.9295C14.6486 9.52013 13.3272 8.5 11.7676 8.5C9.83458 8.5 8.26758 10.067 8.26758 12C8.26758 13.6088 9.35305 14.9641 10.8316 15.3734C11.2228 15.4818 11.4185 15.5359 11.4801 15.6392C11.5417 15.7425 11.4996 15.9268 11.4154 16.2953C11.3084 16.763 11.252 17.2499 11.252 17.75C11.252 19.5875 12.0144 21.2468 13.2401 22.4291C13.3553 22.5401 13.3092 22.7319 13.1503 22.75H10.3458Z',
  d14: 'M20.3475 10.5674L22 9.59808L19.0473 4.40192L16.8453 5.69363L14.9527 4.58152V2H9.04738V4.58152L7.15473 5.69367L4.95267 4.40192L2 9.59808L4.20152 10.8895L4.20153 13.1106L2.0001 14.4019L4.95277 19.5981L7.15477 18.3064L9.04738 19.4185V22H11.75M14.9106 10.0556C14.2828 9.11758 13.2135 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.2135 9.11758 14.2828 10.0556 14.9106',
  d15: 'M15.0279 17.2411L16.5 18.4967L19 15.4982M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z',
  d16: 'M22.75 17.75C22.75 20.5114 20.5114 22.75 17.75 22.75C14.9886 22.75 12.75 20.5114 12.75 17.75C12.75 14.9886 14.9886 12.75 17.75 12.75C20.5114 12.75 22.75 14.9886 22.75 17.75ZM17.3427 20.3122L20.3265 16.7306L19.1741 15.7705L17.1593 18.1889L16.2364 17.4055L15.2656 18.549L17.3427 20.3122Z',
  d17: 'M8.2975 2C8.2975 1.58579 8.63329 1.25 9.0475 1.25H14.9528C15.367 1.25 15.7028 1.58579 15.7028 2V4.15233L16.8458 4.82393L18.668 3.75501C18.8411 3.65346 19.0477 3.62553 19.2415 3.67747C19.4354 3.72941 19.6004 3.85689 19.6995 4.03139L22.6522 9.22754C22.8548 9.58417 22.7334 10.0374 22.3796 10.245L20.5487 11.319L20.5487 11.8817C19.7011 11.4767 18.752 11.25 17.75 11.25C16.9528 11.25 16.1891 11.3935 15.4833 11.6561C15.3106 9.88454 13.817 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.817 9.88454 15.3106 11.6561 15.4833C11.3935 16.1891 11.25 16.9528 11.25 17.75C11.25 19.7604 12.1627 21.5577 13.5964 22.75H9.0475C8.63329 22.75 8.2975 22.4142 8.2975 22V19.8477L7.15457 19.1761L5.33237 20.245C5.15925 20.3465 4.95266 20.3745 4.75879 20.3225C4.56493 20.2706 4.39997 20.1431 4.30081 19.9686L1.34814 14.7725C1.14549 14.4158 1.26693 13.9626 1.62074 13.755L3.45164 12.681L3.45164 11.3191L1.62064 10.245C1.26683 10.0374 1.14539 9.58417 1.34804 9.22754L4.30071 4.03139C4.39987 3.85689 4.56483 3.72941 4.75869 3.67747C4.95256 3.62553 5.15915 3.65346 5.33227 3.75501L7.15452 4.82396L8.2975 4.15233V2Z',
};

export const IconSettingDone01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-01-stroke-rounded IconSettingDone01StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingDone01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-01-duotone-rounded IconSettingDone01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingDone01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-01-twotone-rounded IconSettingDone01TwotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingDone01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-01-solid-rounded IconSettingDone01SolidRounded"
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

export const IconSettingDone01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-01-bulk-rounded IconSettingDone01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingDone01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-01-stroke-sharp IconSettingDone01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconSettingDone01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-01-solid-sharp IconSettingDone01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSettingDone01: TheIconSelfPack = {
  name: 'SettingDone01',
  StrokeRounded: IconSettingDone01StrokeRounded,
  DuotoneRounded: IconSettingDone01DuotoneRounded,
  TwotoneRounded: IconSettingDone01TwotoneRounded,
  SolidRounded: IconSettingDone01SolidRounded,
  BulkRounded: IconSettingDone01BulkRounded,
  StrokeSharp: IconSettingDone01StrokeSharp,
  SolidSharp: IconSettingDone01SolidSharp,
};