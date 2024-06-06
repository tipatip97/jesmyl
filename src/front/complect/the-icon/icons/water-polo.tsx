import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 21.1917C2.68524 22.2421 3.57104 22.2421 4.27299 21.1917C6.52985 17.7416 8.67954 23.6732 10.273 21.2306C12.703 17.5703 14.4508 23.9185 16.273 21.1917C18.6492 17.5591 20.1295 23.5745 22 21.5824',
  d2: 'M17.6184 17.01C18.3131 16.4057 19.9447 14.7123 20.3627 12.0913C20.7506 10.4811 20.5232 6.90398 17.9129 4.44754C16.1746 2.71034 11.565 0.185064 6.5503 3.9816C5.54789 4.7895 3.71926 7.0133 3.51106 9.93527C3.30286 12.8572 4.57349 14.8474 5.22063 15.6301C5.53845 15.9739 5.6944 16.1755 6.02643 16.476C6.31267 16.7352 6.43154 16.8202 6.66416 17.0075C8.07023 17.0603 11.2393 16.4051 13.3709 15.0441C13.8436 14.822 15.0503 14.054 16.0332 12.6902M4.17227 12.8031C5.35359 13.2753 8.38935 13.8309 11.3207 11.1071M11.5404 10.8748C12.976 10.5731 16.5886 10.8748 18.8331 14.8068M7.6968 3.48854C6.58965 5.43307 6.33215 10.6017 7.92835 12.525M11.6466 10.8894C10.8934 9.05308 10.3472 4.55932 12.095 2.24876M11.5124 6.34135C13.2591 6.07725 17.575 6.92208 20.4894 10.5014',
  d3: 'M2.00098 21.1932C2.68622 22.2443 3.57202 22.2443 4.27397 21.1932C6.53083 17.7408 8.68052 23.6764 10.274 21.2321C12.704 17.5694 14.4518 23.9218 16.274 21.1932C18.6502 17.5582 20.1305 23.5776 22.001 21.5842',
  d4: 'M12.001 2C12.099 2 12.1966 2.00167 12.2938 2.00499C16.8527 2.16062 20.501 5.93637 20.501 10.5714C20.501 12.3831 19.9436 14.0634 18.9924 15.4477L18.801 14.8571C18.4376 14.0488 17.6203 12.9149 16.3905 12.0488L16.251 12.2857C15.1797 14.536 10.9041 16.8643 6.68848 17C5.14765 15.8347 4.16544 14.3254 3.74187 12.6076C3.58127 11.9564 3.50098 11.2752 3.50098 10.5714C3.50098 5.83754 7.30656 2 12.001 2Z',
  d5: 'M17.6194 17.01C18.3141 16.4057 19.9457 14.7123 20.3637 12.0913C20.7516 10.4811 20.5242 6.90398 17.9139 4.44754C16.1756 2.71034 11.566 0.185065 6.55128 3.9816C5.54887 4.7895 3.72024 7.0133 3.51204 9.93527C3.30384 12.8572 4.57447 14.8474 5.22161 15.6301C5.53943 15.9739 5.69538 16.1755 6.02741 16.476C6.31365 16.7352 6.43252 16.8202 6.66514 17.0075C8.07121 17.0603 11.2403 16.4051 13.3719 15.0441C13.8446 14.822 15.0513 14.054 16.0342 12.6902M4.17325 12.8031C5.35457 13.2753 8.39033 13.8309 11.3217 11.1071M11.5414 10.8748C12.977 10.5731 16.5896 10.8748 18.8341 14.8068M7.69778 3.48854C6.59063 5.43307 6.33313 10.6017 7.92933 12.525M11.6476 10.8894C10.8944 9.05308 10.3482 4.55932 12.096 2.24876M11.5134 6.34135C13.2601 6.07725 17.576 6.92208 20.4904 10.5014',
  d6: 'M2 21.1952C2.68524 22.2463 3.57104 22.2463 4.27299 21.1952C6.52985 17.7428 8.67954 23.6784 10.273 21.2341C12.703 17.5714 14.4508 23.9238 16.273 21.1952C18.6492 17.5602 20.1295 23.5796 22 21.5862',
  d7: 'M17.6184 17.0058C18.3131 16.4015 19.9447 14.7082 20.3627 12.0872C20.7506 10.4769 20.5232 6.89983 17.9129 4.44339C16.1746 2.70619 11.565 0.180913 6.5503 3.97745C5.54789 4.78535 3.71926 7.00915 3.51106 9.93112C3.30286 12.8531 4.57349 14.8433 5.22063 15.6259C5.53845 15.9697 5.6944 16.1713 6.02643 16.4719C6.31267 16.731 6.43154 16.816 6.66416 17.0033C8.07023 17.0561 11.2393 16.4009 13.3709 15.04C13.8436 14.8178 15.0503 14.0499 16.0332 12.686M4.17227 12.7989C5.35359 13.2711 8.38935 13.8268 11.3207 11.1029M11.5404 10.8707C12.976 10.569 16.5886 10.8707 18.8331 14.8026M7.6968 3.48439C6.58965 5.42892 6.33215 10.5976 7.92835 12.5209M11.6466 10.8852C10.8934 9.04893 10.3472 4.55517 12.095 2.24461M11.5124 6.3372C13.2591 6.0731 17.575 6.91793 20.4894 10.4973',
  d8: 'M21.1695 20.8671C21.191 20.852 21.2248 20.8241 21.2709 20.775C21.6488 20.3723 22.2816 20.3521 22.6844 20.73C23.0871 21.108 23.1073 21.7408 22.7293 22.1435C22.3863 22.5091 21.9657 22.78 21.4613 22.8549C20.9632 22.9288 20.5268 22.7901 20.1906 22.6161C19.8628 22.4464 19.5722 22.2131 19.3358 22.0072C19.221 21.9072 19.061 21.7603 18.9173 21.6283L18.9173 21.6283C18.8173 21.5364 18.7252 21.4519 18.6617 21.3954C18.1898 20.9757 17.9684 20.8798 17.8636 20.8752L17.8625 20.8752C17.8491 20.8745 17.8003 20.8721 17.6923 20.9466C17.5637 21.0351 17.3649 21.2257 17.1101 21.6155L17.1048 21.6237C16.8135 22.0598 16.4492 22.4292 15.9766 22.6262C15.4785 22.8338 14.9945 22.7949 14.5888 22.658C14.2095 22.5299 13.878 22.3104 13.6168 22.1156C13.429 21.9755 13.2292 21.81 13.0526 21.6637L13.0526 21.6637L13.0525 21.6637C12.9878 21.61 12.9261 21.559 12.8693 21.5127C12.3534 21.0923 12.0827 20.9495 11.9089 20.9372L11.907 20.937C11.877 20.9338 11.6078 20.9055 11.1083 21.6571C10.8344 22.0762 10.4735 22.4306 9.99186 22.6056C9.49979 22.7844 9.03114 22.7219 8.65499 22.5923C8.29441 22.4681 7.96776 22.2653 7.70206 22.0822C7.5273 21.9618 7.33467 21.8176 7.16045 21.6872L7.16043 21.6871C7.0785 21.6258 7.00065 21.5675 6.93064 21.5162C6.39912 21.1266 6.09061 20.9726 5.87847 20.9598L5.87529 20.9596C5.81232 20.9556 5.55243 20.9389 5.11013 21.6155L5.10476 21.6237C4.66792 22.2778 4.00577 22.8566 3.13034 22.8566C2.25087 22.8566 1.59186 22.2732 1.1624 21.6144C0.860794 21.1517 0.991351 20.5322 1.45401 20.2306C1.91667 19.929 2.53622 20.0595 2.83783 20.5222C2.98185 20.7431 3.08489 20.8213 3.13141 20.8474C3.17891 20.8219 3.28685 20.7436 3.43912 20.5165C4.11687 19.4819 4.96968 18.9014 5.99881 18.9634C6.87427 19.0162 7.62594 19.5461 8.11313 19.9032C8.22083 19.9822 8.31656 20.054 8.4061 20.1211L8.40612 20.1211C8.55808 20.235 8.69225 20.3356 8.83692 20.4353C9.05809 20.5877 9.20619 20.6668 9.30649 20.7014L9.32246 20.7066C9.34742 20.6817 9.38582 20.6371 9.43538 20.5611L9.43979 20.5543C10.1406 19.498 10.9996 18.8677 12.0502 18.9422C12.9444 19.0055 13.6802 19.5935 14.1328 19.9623C14.219 20.0326 14.2975 20.0976 14.3713 20.1587L14.3713 20.1588C14.5308 20.2909 14.6679 20.4045 14.8125 20.5124C15.0194 20.6667 15.1496 20.7364 15.2284 20.763L15.2301 20.7635C15.2659 20.7353 15.3381 20.6671 15.4391 20.5165C16.1051 19.4995 16.9223 18.8321 17.9511 18.8771C18.8507 18.9166 19.5618 19.5194 19.9909 19.901C20.131 20.0256 20.2312 20.1185 20.3239 20.2045L20.324 20.2046C20.4269 20.3 20.5206 20.3868 20.6494 20.499C20.8527 20.6761 20.9989 20.7824 21.11 20.8399C21.1358 20.8532 21.1554 20.8617 21.1695 20.8671Z',
  d9: 'M3.22618 13.3478C3.76908 14.9275 4.77531 16.3252 6.24003 17.4294C6.41769 17.5634 6.63606 17.6325 6.8587 17.6254C9.06934 17.5544 11.2754 16.9138 13.0725 16.0021C14.4785 15.2889 15.7341 14.3577 16.5178 13.3119C16.5606 13.2452 16.5821 13.2118 16.5897 13.1763C16.5995 13.1304 16.5919 13.079 16.5692 13.0379C16.5517 13.0061 16.5229 12.9814 16.4653 12.9322C16.3062 12.7961 16.1371 12.6639 15.9582 12.5379C14.9505 11.8282 13.6451 11.3239 12.053 11.4239C11.9859 11.4281 11.9524 11.4302 11.9206 11.4439C11.8888 11.4575 11.8625 11.4819 11.8099 11.5307C10.7566 12.508 9.62191 13.1615 8.45675 13.5082C8.44219 13.513 8.42752 13.5173 8.41276 13.5211C6.76907 13.999 5.06599 13.8672 3.4459 13.1728L3.43388 13.1677C3.31434 13.1139 3.18358 13.2239 3.22618 13.3478Z',
  d10: 'M17.7276 14.9753C17.4561 15.32 17.1546 15.6397 16.8271 15.9303C16.4254 16.2867 16.3896 16.9002 16.7471 17.3006C17.1046 17.701 17.7201 17.7367 18.1218 17.3803C18.2867 17.234 18.4465 17.0818 18.6006 16.9241C18.6746 16.8484 18.7116 16.8106 18.7249 16.7585C18.7381 16.7065 18.7237 16.6555 18.6949 16.5535C18.5041 15.8779 18.2765 15.3457 18.1379 15.0844C18.1293 15.0653 18.1196 15.0443 18.1091 15.0221C18.0914 14.9846 18.0825 14.9658 18.0701 14.9495C18.006 14.8644 17.8746 14.8461 17.7897 14.9105C17.7733 14.9229 17.7581 14.9403 17.7276 14.9753Z',
  d11: 'M20.2654 14.5905C20.5643 13.9947 20.8013 13.3621 20.9677 12.7017C20.987 12.6253 20.9966 12.5872 20.9904 12.5472C20.9843 12.5072 20.9634 12.4733 20.9217 12.4054C20.8842 12.3444 20.8461 12.2832 20.8074 12.2218C20.4689 11.6857 20.1172 11.1873 19.9002 10.8969C18.8028 9.4352 17.2008 8.33526 15.5664 7.66241C14.2863 7.1354 13.0475 6.89487 12.0739 6.91246C11.8992 6.91561 11.8119 6.91719 11.7538 6.98142C11.6957 7.04565 11.7031 7.13566 11.7179 7.3157C11.7754 8.01543 11.8918 8.77593 12.0737 9.59656C12.1071 9.74717 12.1238 9.82248 12.1785 9.86648C12.2331 9.91048 12.3142 9.91071 12.4764 9.91116C14.2254 9.91608 15.6873 10.5124 16.8219 11.3115C18.1541 12.2497 19.0533 13.4785 19.4745 14.4034C19.4978 14.4479 19.5225 14.497 19.5483 14.5504C19.7075 14.8806 19.7872 15.0456 19.9117 15.0466C20.0362 15.0476 20.1126 14.8952 20.2654 14.5905Z',
  d12: 'M21.2386 9.95006C21.0324 5.76013 18.0597 2.29238 14.1075 1.36794C14.0103 1.34519 13.9617 1.33382 13.913 1.34705C13.8642 1.36028 13.8276 1.39508 13.7543 1.46468C13.3901 1.81075 13.0583 2.15474 12.854 2.37896C12.329 2.96378 11.938 3.81412 11.7682 4.96099C11.7375 5.1687 11.7221 5.27255 11.7819 5.34188C11.8417 5.4112 11.9551 5.41131 12.1819 5.41153C13.3954 5.41272 14.7903 5.72077 16.1374 6.27535C17.9652 7.02778 19.8078 8.2752 21.1003 9.99699L21.1013 9.99832C21.1465 10.0588 21.2423 10.0254 21.2386 9.95006Z',
  d13: 'M11.6368 1.13293C10.9743 1.15859 10.3299 1.25417 9.71058 1.41247C9.63443 1.43194 9.59635 1.44167 9.56423 1.46597C9.53212 1.49027 9.51201 1.52493 9.47179 1.59425C9.41026 1.70032 9.34716 1.81065 9.28319 1.92389C8.95756 2.50041 8.63722 3.10261 8.43877 3.48682C7.69778 5.1495 7.43134 6.97956 7.53856 8.59979C7.61999 9.83028 7.9119 10.881 8.32401 11.6349C8.39575 11.7661 8.43162 11.8317 8.5059 11.8567C8.58019 11.8816 8.64979 11.8503 8.78899 11.7876C9.39173 11.5162 9.98571 11.1347 10.5621 10.6353C10.6475 10.5613 10.6903 10.5243 10.7074 10.4711C10.7246 10.4179 10.711 10.3606 10.6838 10.2458C10.339 8.79167 10.1735 7.47092 10.175 6.29285C10.1777 4.2172 10.7013 2.52986 11.74 1.37444L11.7432 1.37086C11.828 1.27776 11.7627 1.12805 11.6368 1.13293Z',
  d14: 'M6.91738 2.65251C4.40532 4.31503 2.75006 7.17398 2.75006 10.4158C2.75006 10.6188 2.75631 10.8203 2.76879 11.0201C2.76895 11.0227 2.77021 11.025 2.77225 11.0266C3.24832 11.3896 3.74501 11.6622 4.04296 11.7967C4.8016 12.121 5.58396 12.2957 6.37116 12.3042C6.62757 12.3069 6.75577 12.3083 6.816 12.2189C6.87623 12.1295 6.82185 11.9994 6.71309 11.7391C6.33898 10.8437 6.11429 9.79367 6.04184 8.69883C5.91947 6.84976 6.22231 4.76487 7.07822 2.85486C7.08383 2.84234 7.08978 2.82999 7.09607 2.8178C7.15675 2.70012 7.02779 2.57944 6.91738 2.65251Z',
  d15: 'M2 21.1932C2.68524 22.2443 3.57104 22.2443 4.27299 21.1932C6.52985 17.7408 8.67954 23.6764 10.273 21.2321C12.703 17.5694 14.4508 23.9218 16.273 21.1932C18.6492 17.5582 20.1295 23.5776 22 21.5842',
  d16: 'M20.5 10.5714C20.5 5.83754 16.6944 2 12 2C7.30558 2 3.5 5.83754 3.5 10.5714C3.5 13.1315 4.5625 15.3929 6.6875 17C10.9031 16.8643 15.1787 14.536 16.25 12.2857M20.5 10.5714C18.1101 7.38761 13.6105 5.87623 11.15 6.38125M20.5 10.5714C20.5 13.1315 19.387 15.4294 17.6223 17M3.74089 12.6076C6.33333 13.7187 9.16667 13.25 11.575 10.8393M11.575 10.8393C10.4445 6.60327 10.8525 3.60714 12.2973 2M11.575 10.8393C15.5599 10.355 18.2775 13.3929 19 15M8.22222 12.9196C6.61885 11.1308 6.15896 6.86333 7.76217 3.28571',
  d17: 'M21.195 20.7418C21.2164 20.7267 21.2501 20.6989 21.2961 20.6498L22.75 22.0183C22.408 22.3839 21.9887 22.6547 21.4859 22.7296C20.9893 22.8036 20.5543 22.6648 20.2192 22.4908C19.8924 22.3211 19.6027 22.0878 19.367 21.882C19.2525 21.782 19.093 21.635 18.9498 21.5031C18.8501 21.4112 18.7583 21.3266 18.695 21.2702C18.2245 20.8504 18.0039 20.7546 17.8994 20.75L17.8983 20.7499C17.8849 20.7493 17.8363 20.7468 17.7285 20.8213C17.6004 20.9099 17.4022 21.1005 17.1482 21.4902L17.1429 21.4984C16.8525 21.9346 16.4893 22.3039 16.0182 22.5009C15.5216 22.7086 15.0391 22.6696 14.6347 22.5327C14.2566 22.4047 13.9262 22.1852 13.6657 21.9903C13.4785 21.8503 13.2793 21.6847 13.1033 21.5385C13.0387 21.4848 12.9772 21.4337 12.9206 21.3875C12.4062 20.967 12.1364 20.8242 11.9631 20.8119L11.9612 20.8117C11.9314 20.8086 11.6629 20.7802 11.1651 21.5319C10.892 21.9509 10.5322 22.3054 10.0521 22.4804C9.56151 22.6592 9.09432 22.5966 8.71933 22.467C8.35987 22.3428 8.03424 22.14 7.76936 21.9569C7.59515 21.8365 7.40311 21.6923 7.22943 21.5619L7.22941 21.5619C7.14774 21.5006 7.07012 21.4423 7.00034 21.391C6.47046 21.0013 6.16291 20.8474 5.95143 20.8346L5.94826 20.8344C5.88549 20.8303 5.6264 20.8136 5.18547 21.4902L5.18012 21.4984C4.74464 22.1526 4.08455 22.7314 3.21183 22.7314C2.33509 22.7314 1.67813 22.1479 1.25 21.4892L2.92023 20.3969C3.0638 20.6179 3.16652 20.696 3.2129 20.7222C3.26025 20.6966 3.36785 20.6184 3.51965 20.3912C4.1953 19.3566 5.04546 18.7762 6.07139 18.8382C6.94414 18.891 7.69348 19.4208 8.17915 19.778C8.2865 19.8569 8.38192 19.9287 8.47118 19.9958L8.47123 19.9959C8.62273 20.1098 8.75648 20.2104 8.9007 20.3101C9.12118 20.4625 9.26882 20.5416 9.36881 20.5761L9.38473 20.5814C9.40961 20.5565 9.44789 20.5119 9.4973 20.4359L9.5017 20.4291C10.2004 19.3728 11.0567 18.7425 12.104 18.8169C12.9955 18.8803 13.729 19.4683 14.1801 19.837C14.2661 19.9073 14.3444 19.9724 14.4179 20.0336C14.5769 20.1656 14.7136 20.2793 14.8577 20.3871C15.064 20.5415 15.1938 20.6112 15.2723 20.6377L15.274 20.6383C15.3097 20.6101 15.3817 20.5419 15.4824 20.3913C16.1463 19.3743 16.961 18.7068 17.9866 18.7519C18.8834 18.7913 19.5923 19.3942 20.02 19.7757C20.1597 19.9004 20.2596 19.9933 20.352 20.0793C20.4546 20.1747 20.548 20.2616 20.6765 20.3738C20.8792 20.5509 21.0249 20.6571 21.1357 20.7146C21.1614 20.728 21.1809 20.7365 21.195 20.7418Z',
  d18: 'M2.8038 11.0873C3.32623 11.4585 3.82332 11.767 4.11553 11.9345C5.05555 12.3308 6.03155 12.4974 7.00766 12.4029C6.48017 11.4044 6.17015 10.1465 6.08257 8.82306C5.9602 6.97399 6.26304 4.8891 7.11895 2.97909L7.12338 2.9694C7.17648 2.85527 7.24312 2.71285 7.3179 2.55418C4.60544 4.18035 2.79028 7.16446 2.79028 10.5712C2.79028 10.7444 2.79479 10.9165 2.8038 11.0873Z',
  d19: 'M3.13601 13.0983C3.47263 14.2727 4.05473 15.3548 4.88086 16.3027C5.60424 16.3017 6.29904 16.2742 6.6843 16.2514L6.69443 16.2508L6.70456 16.2505C8.69038 16.1865 10.706 15.6036 12.3489 14.7675C13.8101 14.0238 14.8839 13.1285 15.4185 12.3089C14.4453 11.7767 13.2805 11.4494 11.9529 11.5587C9.38032 14.0094 6.30766 14.5062 3.48663 13.297L3.44863 13.2808L3.41265 13.2604C3.33504 13.2165 3.24172 13.162 3.13601 13.0983Z',
  d20: 'M17.948 17.7498L18.1612 17.56C18.3954 17.3516 18.619 17.1314 18.8312 16.9003C18.6707 16.2014 18.4688 15.5951 18.3502 15.2923C18.0918 14.7257 17.5114 13.8988 16.6517 13.1636C16.3762 13.5784 16.0217 13.9797 15.6072 14.3604C16.5489 14.8704 17.5601 16.8325 17.948 17.7498Z',
  d21: 'M19.9678 15.3766C20.4714 14.5347 20.8467 13.6061 21.0664 12.6185L19.9348 11.0129C18.8375 9.55533 17.2385 8.45823 15.6072 7.78664C14.1526 7.18783 12.7515 6.95889 11.7321 7.05818C11.7789 7.94168 11.9247 8.9354 12.1884 10.0425C14.1126 9.97325 15.7401 10.6395 16.9862 11.5238C18.3579 12.4974 19.3068 13.7617 19.7253 14.6926L19.7323 14.7082L19.7386 14.724C19.8002 14.8797 19.8809 15.104 19.9678 15.3766Z',
  d22: 'M21.2872 10.328C21.1744 5.89271 17.9847 2.22083 13.7811 1.41452C13.4656 1.7968 13.1242 2.21896 12.9238 2.4691L12.9105 2.48569L12.8963 2.5015C12.2982 3.16674 11.8788 4.17677 11.7539 5.55134C13.0686 5.46022 14.6539 5.77209 16.1782 6.39957C18.0059 7.15201 19.8485 8.39943 21.141 10.1212L21.1478 10.1302L21.2872 10.328Z',
  d23: 'M11.9795 1.25C11.0965 1.25572 10.2432 1.386 9.43589 1.6242C9.16524 2.15345 8.7209 3.0918 8.48565 3.59727C7.73999 5.26362 7.47178 7.09931 7.57929 8.72402C7.67128 10.114 8.03186 11.2746 8.53088 12.0371C9.29849 11.7388 10.0544 11.2654 10.7806 10.6013C9.76905 6.51558 10.1291 3.35243 11.766 1.51513C11.8258 1.44058 11.8984 1.35034 11.9795 1.25Z',
};

export const IconWaterPoloStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="water-polo-stroke-rounded IconWaterPoloStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWaterPoloDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="water-polo-duotone-rounded IconWaterPoloDuotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconWaterPoloTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="water-polo-twotone-rounded IconWaterPoloTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconWaterPoloSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="water-polo-solid-rounded IconWaterPoloSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconWaterPoloBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="water-polo-bulk-rounded IconWaterPoloBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
      <path 
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
      </g>
    </TheIconWrapper>
  );
};

export const IconWaterPoloStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="water-polo-stroke-sharp IconWaterPoloStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWaterPoloSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="water-polo-solid-sharp IconWaterPoloSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWaterPolo: TheIconSelfPack = {
  name: 'WaterPolo',
  StrokeRounded: IconWaterPoloStrokeRounded,
  DuotoneRounded: IconWaterPoloDuotoneRounded,
  TwotoneRounded: IconWaterPoloTwotoneRounded,
  SolidRounded: IconWaterPoloSolidRounded,
  BulkRounded: IconWaterPoloBulkRounded,
  StrokeSharp: IconWaterPoloStrokeSharp,
  SolidSharp: IconWaterPoloSolidSharp,
};