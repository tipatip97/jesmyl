import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 21C16.4183 21 20 19.2091 20 17C20 16.0234 19.1597 15.468 18.9475 14.5886C18.8278 14.0928 19 13.5112 19 13C19 11.8639 18.7293 10.7909 18.2489 9.84218C20.1255 8.21287 22 5.60644 22 3C17.8474 3 15.7434 5.3492 15.0997 6.72194C13.1658 5.76534 10.8342 5.76534 8.90035 6.72194C8.25655 5.3492 6.15258 3 2 3C2 5.60644 3.87445 8.21287 5.75106 9.84218C5.27067 10.7909 5 11.8639 5 13C5 13.5112 5.17216 14.0928 5.05251 14.5886C4.8403 15.468 4 16.0234 4 17C4 19.2091 7.58172 21 12 21Z',
  d2: 'M11 16C11.7925 16.6596 12.206 16.6737 13 16',
  d3: 'M9.00019 12.5H8.99121',
  d4: 'M15.008 12.5H14.999',
  d5: 'M5.1084 14.0234C6.36213 14.4246 8.19257 16.7315 5.78541 18.9381',
  d6: 'M18.8921 14.0427C17.6384 14.4439 15.8079 16.7508 18.2151 18.9573',
  d7: 'M12.001 21C16.4193 21 20.001 19.2091 20.001 17C20.001 16.0234 19.1607 15.468 18.9485 14.5886C18.8288 14.0928 19.001 13.5112 19.001 13C19.001 11.8639 18.7303 10.7909 18.2499 9.84218C20.1265 8.21287 22.001 5.60644 22.001 3C17.8484 3 15.7444 5.3492 15.1007 6.72194C13.1668 5.76534 10.8352 5.76534 8.90133 6.72194C8.25753 5.3492 6.15356 3 2.00098 3C2.00098 5.60644 3.87543 8.21287 5.75204 9.84218C5.27165 10.7909 5.00098 11.8639 5.00098 13C5.00098 13.5112 5.17314 14.0928 5.05349 14.5886C4.84128 15.468 4.00098 16.0234 4.00098 17C4.00098 19.2091 7.5827 21 12.001 21Z',
  d8: 'M11.001 16C11.7935 16.6596 12.207 16.6737 13.001 16',
  d9: 'M9.00092 12.5H8.99194',
  d10: 'M15.0088 12.5H14.9998',
  d11: 'M18.6639 19.2147C17.2301 20.2909 14.7812 21 12.001 21C9.19209 21 6.72132 20.2762 5.29401 19.1813C5.29703 19.1836 5.30005 19.1859 5.30308 19.1882L5.66164 19C6.47087 18.4867 7.00098 17.6298 7.00098 16.6594C7.00098 15.4761 6.21269 14.4615 5.09123 14.033C5.08312 13.8848 5.06538 13.7343 5.04776 13.5848C5.02427 13.3856 5.00098 13.188 5.00098 13C5.00098 11.8639 5.27165 10.7909 5.75204 9.84218C3.87543 8.21287 2.00098 5.60644 2.00098 3C6.15356 3 8.25753 5.3492 8.90133 6.72194C10.8352 5.76534 13.1668 5.76534 15.1007 6.72194C15.7444 5.3492 17.8484 3 22.001 3C22.001 5.60644 20.1265 8.21287 18.2499 9.84218C18.7303 10.7909 19.001 11.8639 19.001 13C19.001 13.188 18.9777 13.3855 18.9542 13.5848C18.9366 13.7343 18.9189 13.8848 18.9107 14.033C17.7893 14.4615 17.001 15.4761 17.001 16.6594C17.001 17.6298 17.5311 18.4867 18.3403 19L18.6639 19.2147Z',
  d12: 'M18.893 14.043C17.6393 14.4442 15.8088 16.7511 18.216 18.9576',
  d13: 'M5.10938 14.0234C6.36311 14.4246 8.19355 16.7315 5.78639 18.9381',
  d14: 'M5.31055 14.0427C6.56428 14.4439 8.39471 16.7508 5.98756 18.9573',
  d15: 'M18.6898 14.0427C17.4361 14.4439 15.6057 16.7508 18.0128 18.9573',
  d16: 'M2 2.25C1.58579 2.25 1.25 2.58579 1.25 3C1.25 5.56974 2.84317 8.0367 4.54374 9.7404L4.54374 9.7404C4.68585 9.88277 4.75691 9.95396 4.776 10.0385C4.7951 10.123 4.76066 10.2203 4.69177 10.4151C4.46687 11.0509 4.32261 11.7246 4.27115 12.4235C4.25769 12.6063 4.25096 12.6977 4.29829 12.7783C4.34563 12.8589 4.43305 12.8997 4.60791 12.9811L4.60793 12.9811L4.60793 12.9811L5.3842 13.3425C6.74245 13.8726 7.75018 15.1337 7.75018 16.6595C7.75018 17.9123 7.06671 18.9927 6.07129 19.6278L5.97581 19.692C5.74973 19.8438 5.63669 19.9197 5.60659 20.0253C5.58861 20.0884 5.59354 20.1655 5.61942 20.2258C5.66272 20.3267 5.77773 20.3842 6.00774 20.4992C7.58004 21.2854 9.69967 21.75 12 21.75C14.3003 21.75 16.42 21.2854 17.9923 20.4992C18.2181 20.3863 18.331 20.3299 18.3746 20.2309C18.4015 20.1701 18.4069 20.0921 18.3888 20.0281C18.3593 19.9241 18.2491 19.8483 18.0289 19.6967L17.9253 19.6254C16.9319 18.9899 16.2502 17.9107 16.2502 16.6595C16.2502 15.1348 17.2565 13.8744 18.6132 13.3436L19.3957 12.9717C19.5687 12.8895 19.6552 12.8483 19.7019 12.768C19.7486 12.6876 19.7418 12.5968 19.7282 12.4153C19.6763 11.7194 19.5323 11.0485 19.3082 10.4151L19.3082 10.4151C19.2393 10.2203 19.2049 10.1229 19.224 10.0385C19.2431 9.95396 19.3141 9.88277 19.4563 9.7404C21.1568 8.0367 22.75 5.56974 22.75 3C22.75 2.58579 22.4142 2.25 22 2.25C18.409 2.25 16.1856 3.89027 15.0581 5.3684C14.913 5.55863 14.8404 5.65374 14.7504 5.68246C14.6603 5.71118 14.5471 5.67595 14.3205 5.60549C12.816 5.13749 11.184 5.13749 9.67946 5.60549C9.45292 5.67595 9.33965 5.71118 9.24962 5.68246C9.15958 5.65374 9.08703 5.55863 8.94192 5.3684C7.81438 3.89027 5.59102 2.25 2 2.25ZM19.9264 14.9496C19.8195 14.7776 19.7661 14.6916 19.723 14.6584C19.653 14.6045 19.6026 14.5897 19.5146 14.5972C19.4371 14.6038 19.3649 14.6414 19.2936 14.6786C19.2549 14.6987 19.2165 14.7188 19.1777 14.7336C18.3061 15.0666 17.7502 15.8283 17.7502 16.6595C17.7502 17.3437 18.1229 17.9745 18.7413 18.3667C18.7492 18.3717 18.757 18.3769 18.7647 18.3822L19.4271 18.8381C19.639 18.9839 19.745 19.0568 19.8671 19.0343C19.9892 19.0119 20.0553 18.916 20.1876 18.7244C20.5407 18.2126 20.75 17.6359 20.75 17C20.75 16.2825 20.4335 15.743 20.1856 15.3545C20.1457 15.292 20.1082 15.2338 20.0729 15.1792C20.0188 15.0954 19.9699 15.0196 19.9264 14.9496ZM4.12349 19.0244C4.00228 19.0012 3.93694 18.906 3.80626 18.7154C3.45687 18.2059 3.25 17.6322 3.25 17C3.25 16.2825 3.56653 15.743 3.8144 15.3545C3.85415 15.2922 3.89192 15.2337 3.92709 15.1792L3.92729 15.1789C3.97924 15.0984 4.02624 15.0256 4.06843 14.9579C4.17986 14.7791 4.23557 14.6897 4.28228 14.6555C4.34817 14.6072 4.39432 14.5935 4.47588 14.598C4.55692 14.6024 4.63334 14.6415 4.70835 14.68L4.70836 14.68C4.7467 14.6996 4.78467 14.7191 4.82271 14.7336C5.69422 15.0666 6.25018 15.8283 6.25018 16.6595C6.25018 17.3437 5.87742 17.9745 5.25911 18.3667L5.2427 18.3774L4.56266 18.8341C4.35069 18.9765 4.2447 19.0476 4.12349 19.0244ZM10.0012 12.5C10.0012 13.0523 9.55345 13.5 9.00117 13.5H8.99219C8.4399 13.5 7.99219 13.0523 7.99219 12.5C7.99219 11.9477 8.4399 11.5 8.99219 11.5H9.00117C9.55345 11.5 10.0012 11.9477 10.0012 12.5ZM10.4247 15.5203C10.6897 15.2019 11.1626 15.1586 11.481 15.4235C11.8628 15.7414 11.9862 15.7499 12.005 15.75C12.0183 15.7501 12.1392 15.7479 12.5159 15.4282C12.8318 15.1602 13.3051 15.1989 13.5731 15.5148C13.8411 15.8306 13.8023 16.3039 13.4864 16.5719C13.0692 16.9259 12.5864 17.2534 11.9963 17.25C11.4117 17.2466 10.9321 16.9183 10.5214 16.5765C10.203 16.3115 10.1597 15.8386 10.4247 15.5203ZM15.009 13.5C15.5613 13.5 16.009 13.0523 16.009 12.5C16.009 11.9477 15.5613 11.5 15.009 11.5H15C14.4477 11.5 14 11.9477 14 12.5C14 13.0523 14.4477 13.5 15 13.5H15.009Z',
  d17: 'M2 2.25C1.58579 2.25 1.25 2.58579 1.25 3C1.25 5.56974 2.84317 8.0367 4.54374 9.7404C4.68585 9.88277 4.75691 9.95396 4.776 10.0385C4.7951 10.123 4.76066 10.2203 4.69177 10.4151C4.46687 11.0509 4.32261 11.7246 4.27115 12.4235C4.25769 12.6063 4.25096 12.6977 4.29829 12.7783C4.34563 12.8589 4.43306 12.8997 4.60793 12.9811L5.3842 13.3425C6.74245 13.8726 7.75018 15.1337 7.75018 16.6595C7.75018 17.9123 7.06671 18.9927 6.07129 19.6278L5.97581 19.692C5.74973 19.8438 5.63669 19.9197 5.60659 20.0253C5.58861 20.0884 5.59354 20.1655 5.61942 20.2258C5.66272 20.3267 5.77773 20.3842 6.00774 20.4992C7.58004 21.2854 9.69967 21.75 12 21.75C14.3003 21.75 16.42 21.2854 17.9923 20.4992C18.2181 20.3863 18.331 20.3299 18.3746 20.2309C18.4015 20.1701 18.4069 20.0921 18.3888 20.0281C18.3593 19.9241 18.2491 19.8483 18.0289 19.6967L17.9253 19.6254C16.9319 18.9899 16.2502 17.9107 16.2502 16.6595C16.2502 15.1348 17.2565 13.8744 18.6132 13.3436L19.3957 12.9717C19.5687 12.8895 19.6552 12.8483 19.7019 12.768C19.7486 12.6876 19.7418 12.5968 19.7282 12.4153C19.6763 11.7194 19.5323 11.0485 19.3082 10.4151C19.2393 10.2203 19.2049 10.123 19.224 10.0385C19.2431 9.95396 19.3141 9.88277 19.4563 9.7404C21.1568 8.0367 22.75 5.56974 22.75 3C22.75 2.58579 22.4142 2.25 22 2.25C18.409 2.25 16.1856 3.89027 15.0581 5.3684C14.913 5.55863 14.8404 5.65374 14.7504 5.68246C14.6603 5.71118 14.5471 5.67595 14.3205 5.60549C12.816 5.13749 11.184 5.13749 9.67946 5.60549C9.45292 5.67595 9.33965 5.71118 9.24962 5.68246C9.15958 5.65374 9.08703 5.55863 8.94192 5.3684C7.81438 3.89027 5.59102 2.25 2 2.25Z',
  d18: 'M19.9264 14.9496C19.8195 14.7776 19.7661 14.6916 19.723 14.6584C19.653 14.6045 19.6026 14.5897 19.5146 14.5972C19.3951 14.6073 19.288 14.6914 19.1777 14.7336C18.3061 15.0666 17.7502 15.8283 17.7502 16.6595C17.7502 17.3437 18.1229 17.9745 18.7413 18.3667C18.7492 18.3717 18.757 18.3769 18.7647 18.3822L19.4271 18.8381C19.639 18.9839 19.745 19.0568 19.8671 19.0343C19.9892 19.0119 20.0553 18.916 20.1876 18.7244C20.5407 18.2126 20.75 17.6359 20.75 17C20.75 16.2825 20.4335 15.743 20.1856 15.3545C20.1457 15.292 20.1082 15.2338 20.0729 15.1792C20.0188 15.0954 19.9699 15.0196 19.9264 14.9496Z',
  d19: 'M3.80626 18.7154C3.93694 18.906 4.00228 19.0012 4.12349 19.0244C4.2447 19.0476 4.35069 18.9765 4.56266 18.8341L5.2427 18.3774L5.25911 18.3667C5.87742 17.9745 6.25018 17.3437 6.25018 16.6595C6.25018 15.8283 5.69422 15.0666 4.82271 14.7336C4.71024 14.6906 4.59834 14.6046 4.47588 14.598C4.39432 14.5935 4.34817 14.6072 4.28228 14.6555C4.23557 14.6897 4.17986 14.7791 4.06843 14.9579C4.02624 15.0256 3.97924 15.0984 3.92729 15.1789C3.89206 15.2334 3.85423 15.2921 3.8144 15.3545C3.56653 15.743 3.25 16.2825 3.25 17C3.25 17.6322 3.45687 18.2059 3.80626 18.7154Z',
  d20: 'M19.9264 14.9479C19.8195 14.7759 19.7661 14.69 19.723 14.6567C19.653 14.6029 19.6026 14.5881 19.5146 14.5956C19.3951 14.6057 19.288 14.6898 19.1777 14.732C18.3061 15.065 17.7502 15.8266 17.7502 16.6578C17.7502 17.3421 18.1229 17.9729 18.7413 18.3651C18.7492 18.3701 18.757 18.3753 18.7647 18.3806L19.4271 18.8364C19.639 18.9823 19.745 19.0552 19.8671 19.0327C19.9892 19.0102 20.0553 18.9144 20.1876 18.7227C20.5407 18.211 20.75 17.6343 20.75 16.9984C20.75 16.2809 20.4335 15.7414 20.1856 15.3528C20.1457 15.2903 20.1082 15.2322 20.0729 15.1776C20.0188 15.0938 19.9699 15.018 19.9264 14.9479Z',
  d21: 'M3.80626 18.7138C3.93694 18.9043 4.00228 18.9996 4.12349 19.0228C4.2447 19.046 4.35069 18.9749 4.56266 18.8325L5.2427 18.3758L5.25911 18.3651C5.87742 17.9729 6.25018 17.3421 6.25018 16.6578C6.25018 15.8266 5.69422 15.065 4.82271 14.732C4.71024 14.689 4.59834 14.603 4.47588 14.5963C4.39432 14.5919 4.34817 14.6056 4.28228 14.6539C4.23557 14.6881 4.17986 14.7775 4.06843 14.9563C4.02624 15.024 3.97924 15.0968 3.92729 15.1773C3.89206 15.2318 3.85423 15.2904 3.8144 15.3528C3.56653 15.7414 3.25 16.2809 3.25 16.9984C3.25 17.6306 3.45687 18.2042 3.80626 18.7138Z',
  d22: 'M10.4247 15.5202C10.6897 15.2019 11.1626 15.1586 11.481 15.4235C11.8628 15.7414 11.9862 15.7499 12.005 15.75C12.0183 15.7501 12.1392 15.7479 12.5159 15.4282C12.8318 15.1602 13.3051 15.1989 13.5731 15.5148C13.8411 15.8306 13.8023 16.3039 13.4864 16.5719C13.0692 16.9259 12.5864 17.2534 11.9963 17.25C11.4117 17.2466 10.9321 16.9183 10.5214 16.5765C10.203 16.3115 10.1597 15.8386 10.4247 15.5202Z',
  d23: 'M10.0012 12.5C10.0012 13.0523 9.55345 13.5 9.00117 13.5H8.99219C8.4399 13.5 7.99219 13.0523 7.99219 12.5C7.99219 11.9477 8.4399 11.5 8.99219 11.5L9.00117 11.5C9.55345 11.5 10.0012 11.9477 10.0012 12.5Z',
  d24: 'M16.009 12.5C16.009 13.0523 15.5613 13.5 15.009 13.5H15C14.4477 13.5 14 13.0523 14 12.5C14 11.9477 14.4477 11.5 15 11.5L15.009 11.5C15.5613 11.5 16.009 11.9477 16.009 12.5Z',
  d25: 'M10.5 16L12 17L13.5 16',
  d26: 'M8.99995 12.5H8.99097',
  d27: 'M15.0078 12.5H14.9988',
  d28: 'M19 14C17.8308 14.4076 17 15.4446 17 16.6594C17 17.6298 17.5301 18.4867 18.3393 19',
  d29: 'M4.87427 14.0095C6.45688 14.3205 8.57644 16.6661 5.60906 19.0965',
  d30: 'M1.25 2.25H2C5.91578 2.25 8.20535 4.20037 9.22115 5.76412C10.9995 5.08461 13.0005 5.08461 14.7788 5.76412C15.7947 4.20037 18.0842 2.25 22 2.25H22.75V3C22.75 5.71867 20.9668 8.3223 19.1598 10.0288C19.538 10.9393 19.7476 11.9371 19.75 12.982C19.3587 13.0976 18.9948 13.2126 18.7672 13.287L18.7601 13.2893L18.7531 13.2917C17.3253 13.7895 16.25 15.0825 16.25 16.6593C16.25 17.9158 16.9375 18.9988 17.9376 19.6332L17.9493 19.6407L17.9612 19.6476C18.1349 19.749 18.4112 19.9025 18.7412 20.0727C18.5032 20.227 18.252 20.3694 17.9923 20.4992C16.42 21.2854 14.3003 21.75 12 21.75C9.69967 21.75 7.58004 21.2854 6.00774 20.4992C5.74812 20.3694 5.49708 20.2272 5.25922 20.0729C5.58946 19.9026 5.86599 19.749 6.03972 19.6476L6.05167 19.6407L6.06335 19.6332C7.0635 18.9988 7.75096 17.9158 7.75096 16.6593C7.75096 15.0825 6.67569 13.7895 5.24787 13.2917L5.24083 13.2893L5.23375 13.287C5.00596 13.2126 4.64165 13.0974 4.25002 12.9817C4.25243 11.9369 4.462 10.9392 4.8402 10.0288C3.03319 8.3223 1.25 5.71867 1.25 3V2.25ZM19.9714 19.0087C20.4537 18.4294 20.75 17.7566 20.75 17C20.75 16.2825 20.4335 15.743 20.1856 15.3545C20.1457 15.292 20.1082 15.2338 20.0729 15.1792C19.9069 14.9221 19.7913 14.743 19.7214 14.5579C19.54 14.614 19.3743 14.6667 19.2403 14.7104C18.3335 15.0294 17.75 15.8085 17.75 16.6593C17.75 17.3395 18.1183 17.9668 18.7299 18.3595C18.9845 18.5075 19.4552 18.7632 19.9714 19.0087ZM4.02884 19.009C4.54533 18.7635 5.0163 18.5076 5.27102 18.3595C5.88268 17.9668 6.25096 17.3395 6.25096 16.6593C6.25096 15.8085 5.66745 15.0294 4.76069 14.7104C4.62645 14.6666 4.46041 14.6138 4.27866 14.5576C4.20881 14.7429 4.09292 14.9224 3.92684 15.1796L3.92684 15.1796C3.89164 15.2341 3.85418 15.2921 3.8144 15.3545C3.56653 15.743 3.25 16.2825 3.25 17C3.25 17.7567 3.54639 18.4296 4.02884 19.009ZM10.916 15.376L10.084 16.6241L12 17.9014L13.916 16.6241L13.084 15.376L12 16.0986L10.916 15.376ZM10 12.5C10 13.0523 9.55229 13.5 9 13.5H8.99102C8.43873 13.5 7.99102 13.0523 7.99102 12.5C7.99102 11.9477 8.43873 11.5 8.99102 11.5H9C9.55229 11.5 10 11.9477 10 12.5ZM15.0078 13.5C15.5601 13.5 16.0078 13.0523 16.0078 12.5C16.0078 11.9477 15.5601 11.5 15.0078 11.5H14.9988C14.4465 11.5 13.9988 11.9477 13.9988 12.5C13.9988 13.0523 14.4465 13.5 14.9988 13.5H15.0078Z',
};

export const IconPokemonStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokemon-stroke-rounded IconPokemonStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPokemonDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokemon-duotone-rounded IconPokemonDuotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconPokemonTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokemon-twotone-rounded IconPokemonTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPokemonSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokemon-solid-rounded IconPokemonSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPokemonBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokemon-bulk-rounded IconPokemonBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconPokemonStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokemon-stroke-sharp IconPokemonStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPokemonSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokemon-solid-sharp IconPokemonSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPokemon: TheIconSelfPack = {
  name: 'Pokemon',
  StrokeRounded: IconPokemonStrokeRounded,
  DuotoneRounded: IconPokemonDuotoneRounded,
  TwotoneRounded: IconPokemonTwotoneRounded,
  SolidRounded: IconPokemonSolidRounded,
  BulkRounded: IconPokemonBulkRounded,
  StrokeSharp: IconPokemonStrokeSharp,
  SolidSharp: IconPokemonSolidSharp,
};