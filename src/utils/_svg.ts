// pages/api/_svg.ts
export default function getSvg(title: string, author: string): string {
  const svg = `
  <svg width="331" height="186" viewBox="0 0 331 186" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="329" height="184" rx="7" fill="#0E0E10"/>
<rect x="1" y="1" width="329" height="184" rx="7" stroke="url(#paint0_linear_4858_775)" stroke-width="2"/>
<rect x="16" y="16" width="24" height="24" rx="12" fill="url(#paint1_linear_4858_775)"/>
<path d="M49.1477 34V22.3636H53.6023C54.4432 22.3636 55.142 22.4962 55.6989 22.7614C56.2595 23.0227 56.678 23.3807 56.9545 23.8352C57.2348 24.2898 57.375 24.8049 57.375 25.3807C57.375 25.8542 57.2841 26.2595 57.1023 26.5966C56.9205 26.9299 56.6761 27.2008 56.3693 27.4091C56.0625 27.6174 55.7197 27.767 55.3409 27.858V27.9716C55.7538 27.9943 56.1496 28.1212 56.5284 28.3523C56.911 28.5795 57.2235 28.9015 57.4659 29.3182C57.7083 29.7348 57.8295 30.2386 57.8295 30.8295C57.8295 31.4318 57.6837 31.9735 57.392 32.4545C57.1004 32.9318 56.661 33.3087 56.0739 33.5852C55.4867 33.8617 54.7481 34 53.858 34H49.1477ZM51.2557 32.2386H53.5227C54.2879 32.2386 54.839 32.0928 55.1761 31.8011C55.517 31.5057 55.6875 31.1269 55.6875 30.6648C55.6875 30.3201 55.6023 30.0095 55.4318 29.733C55.2614 29.4527 55.0189 29.233 54.7045 29.0739C54.3902 28.911 54.0152 28.8295 53.5795 28.8295H51.2557V32.2386ZM51.2557 27.3125H53.3409C53.7045 27.3125 54.0322 27.2462 54.3239 27.1136C54.6155 26.9773 54.8447 26.786 55.0114 26.5398C55.1818 26.2898 55.267 25.9943 55.267 25.6534C55.267 25.2027 55.108 24.8314 54.7898 24.5398C54.4754 24.2481 54.0076 24.1023 53.3864 24.1023H51.2557V27.3125ZM63.0593 34.1705C62.207 34.1705 61.4684 33.983 60.8434 33.608C60.2184 33.233 59.7335 32.7083 59.3888 32.0341C59.0479 31.3598 58.8774 30.572 58.8774 29.6705C58.8774 28.7689 59.0479 27.9792 59.3888 27.3011C59.7335 26.6231 60.2184 26.0966 60.8434 25.7216C61.4684 25.3466 62.207 25.1591 63.0593 25.1591C63.9115 25.1591 64.6502 25.3466 65.2752 25.7216C65.9002 26.0966 66.3831 26.6231 66.724 27.3011C67.0687 27.9792 67.2411 28.7689 67.2411 29.6705C67.2411 30.572 67.0687 31.3598 66.724 32.0341C66.3831 32.7083 65.9002 33.233 65.2752 33.608C64.6502 33.983 63.9115 34.1705 63.0593 34.1705ZM63.0706 32.5227C63.5327 32.5227 63.9191 32.3958 64.2297 32.142C64.5403 31.8845 64.7714 31.5398 64.9229 31.108C65.0782 30.6761 65.1559 30.1951 65.1559 29.6648C65.1559 29.1307 65.0782 28.6477 64.9229 28.2159C64.7714 27.7803 64.5403 27.4337 64.2297 27.1761C63.9191 26.9186 63.5327 26.7898 63.0706 26.7898C62.5971 26.7898 62.2032 26.9186 61.8888 27.1761C61.5782 27.4337 61.3452 27.7803 61.1899 28.2159C61.0384 28.6477 60.9627 29.1307 60.9627 29.6648C60.9627 30.1951 61.0384 30.6761 61.1899 31.108C61.3452 31.5398 61.5782 31.8845 61.8888 32.142C62.2032 32.3958 62.5971 32.5227 63.0706 32.5227ZM68.7577 34V22.3636H70.8145V26.7159H70.8998C71.0058 26.5038 71.1555 26.2784 71.3486 26.0398C71.5418 25.7973 71.8032 25.5909 72.1327 25.4205C72.4623 25.2462 72.8827 25.1591 73.3941 25.1591C74.0683 25.1591 74.6763 25.3314 75.218 25.6761C75.7634 26.017 76.1952 26.5227 76.5134 27.1932C76.8354 27.8598 76.9964 28.678 76.9964 29.6477C76.9964 30.6061 76.8392 31.4205 76.5248 32.0909C76.2104 32.7614 75.7823 33.2727 75.2407 33.625C74.699 33.9773 74.0854 34.1534 73.3998 34.1534C72.8998 34.1534 72.485 34.0701 72.1555 33.9034C71.8259 33.7367 71.5608 33.536 71.36 33.3011C71.163 33.0625 71.0096 32.8371 70.8998 32.625H70.7805V34H68.7577ZM70.7748 29.6364C70.7748 30.2008 70.8543 30.6951 71.0134 31.1193C71.1763 31.5436 71.4092 31.875 71.7123 32.1136C72.0191 32.3485 72.3903 32.4659 72.8259 32.4659C73.2805 32.4659 73.6611 32.3447 73.968 32.1023C74.2748 31.8561 74.5058 31.5208 74.6611 31.0966C74.8202 30.6686 74.8998 30.1818 74.8998 29.6364C74.8998 29.0947 74.8221 28.6136 74.6668 28.1932C74.5115 27.7727 74.2805 27.4432 73.9736 27.2045C73.6668 26.9659 73.2842 26.8466 72.8259 26.8466C72.3865 26.8466 72.0134 26.9621 71.7066 27.1932C71.3998 27.4242 71.1668 27.7481 71.0077 28.1648C70.8524 28.5814 70.7748 29.072 70.7748 29.6364ZM78.5159 34V22.3636H80.5727V26.7159H80.6579C80.764 26.5038 80.9136 26.2784 81.1068 26.0398C81.2999 25.7973 81.5613 25.5909 81.8909 25.4205C82.2204 25.2462 82.6409 25.1591 83.1522 25.1591C83.8265 25.1591 84.4344 25.3314 84.9761 25.6761C85.5215 26.017 85.9534 26.5227 86.2715 27.1932C86.5935 27.8598 86.7545 28.678 86.7545 29.6477C86.7545 30.6061 86.5973 31.4205 86.2829 32.0909C85.9685 32.7614 85.5405 33.2727 84.9988 33.625C84.4571 33.9773 83.8435 34.1534 83.1579 34.1534C82.6579 34.1534 82.2431 34.0701 81.9136 33.9034C81.584 33.7367 81.3189 33.536 81.1181 33.3011C80.9212 33.0625 80.7677 32.8371 80.6579 32.625H80.5386V34H78.5159ZM80.5329 29.6364C80.5329 30.2008 80.6124 30.6951 80.7715 31.1193C80.9344 31.5436 81.1674 31.875 81.4704 32.1136C81.7772 32.3485 82.1484 32.4659 82.584 32.4659C83.0386 32.4659 83.4193 32.3447 83.7261 32.1023C84.0329 31.8561 84.264 31.5208 84.4193 31.0966C84.5784 30.6686 84.6579 30.1818 84.6579 29.6364C84.6579 29.0947 84.5802 28.6136 84.4249 28.1932C84.2696 27.7727 84.0386 27.4432 83.7318 27.2045C83.4249 26.9659 83.0424 26.8466 82.584 26.8466C82.1446 26.8466 81.7715 26.9621 81.4647 27.1932C81.1579 27.4242 80.9249 27.7481 80.7659 28.1648C80.6106 28.5814 80.5329 29.072 80.5329 29.6364ZM89.1646 37.2727C88.8843 37.2727 88.6248 37.25 88.3862 37.2045C88.1513 37.1629 87.9638 37.1136 87.8237 37.0568L88.301 35.4545C88.6002 35.5417 88.8673 35.5833 89.1021 35.5795C89.337 35.5758 89.5434 35.5019 89.7214 35.358C89.9032 35.2178 90.0566 34.983 90.1816 34.6534L90.3578 34.1818L87.193 25.2727H89.3748L91.3862 31.8636H91.4771L93.4941 25.2727H95.6816L92.1873 35.0568C92.0245 35.5189 91.8085 35.9148 91.5396 36.2443C91.2707 36.5777 90.9411 36.8314 90.551 37.0057C90.1646 37.1837 89.7025 37.2727 89.1646 37.2727Z" fill="white"/>
<path d="M19.1122 79L16.2884 68.8182H17.9041L19.8878 76.7031H19.9822L22.0455 68.8182H23.6463L25.7095 76.7081H25.804L27.7827 68.8182H29.4034L26.5746 79H25.0284L22.8857 71.3736H22.8061L20.6634 79H19.1122ZM31.8752 79.169C31.3913 79.169 30.9538 79.0795 30.5627 78.9006C30.1716 78.7183 29.8617 78.4548 29.633 78.1101C29.4076 77.7654 29.2949 77.3428 29.2949 76.8423C29.2949 76.4115 29.3778 76.0568 29.5435 75.7784C29.7092 75.5 29.933 75.2796 30.2147 75.1172C30.4964 74.9548 30.8113 74.8321 31.1593 74.7493C31.5073 74.6664 31.8619 74.6035 32.2232 74.5604C32.6806 74.5073 33.0518 74.4643 33.3368 74.4311C33.6219 74.3946 33.829 74.3366 33.9583 74.2571C34.0875 74.1776 34.1522 74.0483 34.1522 73.8693V73.8345C34.1522 73.4003 34.0295 73.0639 33.7843 72.8253C33.5423 72.5866 33.1811 72.4673 32.7005 72.4673C32.2 72.4673 31.8056 72.5784 31.5172 72.8004C31.2322 73.0192 31.035 73.2628 30.9256 73.5312L29.5286 73.2131C29.6943 72.7491 29.9363 72.3745 30.2544 72.0895C30.5759 71.8011 30.9455 71.5923 31.3631 71.4631C31.7807 71.3305 32.2199 71.2642 32.6806 71.2642C32.9855 71.2642 33.3087 71.3007 33.65 71.3736C33.9947 71.4432 34.3162 71.5724 34.6145 71.7614C34.9161 71.9503 35.1631 72.2204 35.3553 72.5717C35.5475 72.9197 35.6437 73.3722 35.6437 73.929V79H34.1919V77.956H34.1323C34.0362 78.1482 33.892 78.3371 33.6998 78.5227C33.5075 78.7083 33.2606 78.8625 32.959 78.9851C32.6574 79.1077 32.2961 79.169 31.8752 79.169ZM32.1983 77.9759C32.6093 77.9759 32.9606 77.8946 33.2523 77.7322C33.5473 77.5698 33.771 77.3577 33.9235 77.0959C34.0793 76.8307 34.1571 76.5473 34.1571 76.2457V75.2614C34.1041 75.3144 34.0014 75.3641 33.8489 75.4105C33.6998 75.4536 33.5291 75.4917 33.3368 75.5249C33.1446 75.5547 32.9573 75.5829 32.775 75.6094C32.5928 75.6326 32.4403 75.6525 32.3177 75.669C32.0293 75.7055 31.7658 75.7668 31.5272 75.853C31.2919 75.9392 31.1029 76.0634 30.9604 76.2259C30.8212 76.3849 30.7516 76.5971 30.7516 76.8622C30.7516 77.2301 30.8875 77.5085 31.1593 77.6974C31.4311 77.883 31.7774 77.9759 32.1983 77.9759ZM38.8301 74.4659V79H37.3436V71.3636H38.7704V72.6065H38.8649C39.0406 72.2022 39.3157 71.8774 39.6902 71.6321C40.068 71.3868 40.5436 71.2642 41.117 71.2642C41.6374 71.2642 42.0931 71.3736 42.4842 71.5923C42.8753 71.8078 43.1786 72.1293 43.394 72.5568C43.6094 72.9844 43.7172 73.513 43.7172 74.1428V79H42.2307V74.3217C42.2307 73.7682 42.0865 73.3357 41.7981 73.0241C41.5098 72.7093 41.1137 72.5518 40.6099 72.5518C40.2652 72.5518 39.9586 72.6264 39.6902 72.7756C39.425 72.9247 39.2146 73.1435 39.0588 73.4318C38.9063 73.7169 38.8301 74.0616 38.8301 74.4659ZM48.9954 71.3636V72.5568H44.8242V71.3636H48.9954ZM45.9428 69.5341H47.4294V76.7578C47.4294 77.0462 47.4724 77.2633 47.5586 77.4091C47.6448 77.5516 47.7558 77.6494 47.8917 77.7024C48.0309 77.7521 48.1817 77.777 48.3441 77.777C48.4634 77.777 48.5678 77.7687 48.6573 77.7521C48.7468 77.7356 48.8164 77.7223 48.8661 77.7124L49.1346 78.9403C49.0484 78.9735 48.9258 79.0066 48.7667 79.0398C48.6076 79.0762 48.4088 79.0961 48.1701 79.0994C47.779 79.1061 47.4144 79.0365 47.0764 78.8906C46.7383 78.7448 46.4649 78.5194 46.2561 78.2145C46.0473 77.9096 45.9428 77.5268 45.9428 77.0661V69.5341ZM53.5689 79.1541C52.8166 79.1541 52.1686 78.9934 51.625 78.6719C51.0848 78.3471 50.6672 77.8913 50.3722 77.3047C50.0805 76.7147 49.9347 76.0237 49.9347 75.2315C49.9347 74.4493 50.0805 73.7599 50.3722 73.1634C50.6672 72.5668 51.0782 72.1011 51.6051 71.7663C52.1354 71.4316 52.7552 71.2642 53.4645 71.2642C53.8954 71.2642 54.313 71.3355 54.7174 71.478C55.1217 71.6205 55.4846 71.8442 55.8061 72.1491C56.1276 72.4541 56.3812 72.8501 56.5668 73.3374C56.7524 73.8213 56.8452 74.4096 56.8452 75.1023V75.6293H50.7749V74.5156H55.3885C55.3885 74.1245 55.309 73.7782 55.1499 73.4766C54.9908 73.1716 54.7671 72.9313 54.4787 72.7557C54.1937 72.58 53.8589 72.4922 53.4745 72.4922C53.0568 72.4922 52.6923 72.5949 52.3807 72.8004C52.0725 73.0026 51.8338 73.2678 51.6648 73.5959C51.4991 73.9207 51.4162 74.2737 51.4162 74.6548V75.5249C51.4162 76.0353 51.5057 76.4695 51.6847 76.8274C51.867 77.1854 52.1205 77.4588 52.4453 77.6477C52.7702 77.8333 53.1497 77.9261 53.5838 77.9261C53.8656 77.9261 54.1224 77.8864 54.3544 77.8068C54.5864 77.724 54.787 77.6013 54.956 77.4389C55.125 77.2765 55.2543 77.076 55.3438 76.8374L56.7507 77.0909C56.6381 77.5052 56.4359 77.8681 56.1442 78.1797C55.8559 78.4879 55.4929 78.7282 55.0554 78.9006C54.6212 79.0696 54.1257 79.1541 53.5689 79.1541ZM61.0732 79.1491C60.4567 79.1491 59.9065 78.9917 59.4226 78.6768C58.942 78.3587 58.5642 77.9062 58.2891 77.3196C58.0173 76.7296 57.8814 76.022 57.8814 75.1967C57.8814 74.3714 58.019 73.6655 58.2941 73.0788C58.5725 72.4922 58.9536 72.0431 59.4375 71.7315C59.9214 71.42 60.47 71.2642 61.0831 71.2642C61.5571 71.2642 61.9382 71.3438 62.2266 71.5028C62.5183 71.6586 62.7436 71.8409 62.9027 72.0497C63.0651 72.2585 63.1911 72.4425 63.2806 72.6016H63.3701V68.8182H64.8566V79H63.4049V77.8118H63.2806C63.1911 77.9742 63.0618 78.1598 62.8928 78.3686C62.7271 78.5774 62.4984 78.7597 62.2067 78.9155C61.915 79.0713 61.5372 79.1491 61.0732 79.1491ZM61.4013 77.8814C61.8289 77.8814 62.1901 77.7687 62.4851 77.5433C62.7834 77.3146 63.0088 76.9981 63.1613 76.5938C63.317 76.1894 63.3949 75.7187 63.3949 75.1818C63.3949 74.6515 63.3187 74.1875 63.1662 73.7898C63.0138 73.392 62.79 73.0821 62.4951 72.8601C62.2001 72.638 61.8355 72.527 61.4013 72.527C60.9539 72.527 60.581 72.643 60.2827 72.875C59.9844 73.107 59.759 73.4235 59.6066 73.8246C59.4574 74.2256 59.3828 74.678 59.3828 75.1818C59.3828 75.6922 59.4591 76.1513 59.6115 76.5589C59.764 76.9666 59.9894 77.2898 60.2877 77.5284C60.5893 77.7637 60.9605 77.8814 61.4013 77.8814ZM73.6879 71.3636V72.5568H69.5167V71.3636H73.6879ZM70.6353 69.5341H72.1219V76.7578C72.1219 77.0462 72.1649 77.2633 72.2511 77.4091C72.3373 77.5516 72.4483 77.6494 72.5842 77.7024C72.7234 77.7521 72.8742 77.777 73.0366 77.777C73.1559 77.777 73.2603 77.7687 73.3498 77.7521C73.4393 77.7356 73.5089 77.7223 73.5586 77.7124L73.8271 78.9403C73.7409 78.9735 73.6183 79.0066 73.4592 79.0398C73.3001 79.0762 73.1013 79.0961 72.8626 79.0994C72.4715 79.1061 72.1069 79.0365 71.7689 78.8906C71.4308 78.7448 71.1574 78.5194 70.9486 78.2145C70.7398 77.9096 70.6353 77.5268 70.6353 77.0661V69.5341ZM78.1868 79.1541C77.4709 79.1541 76.8462 78.9901 76.3126 78.6619C75.7789 78.3338 75.3646 77.8748 75.0697 77.2848C74.7747 76.6948 74.6272 76.0054 74.6272 75.2166C74.6272 74.4245 74.7747 73.7318 75.0697 73.1385C75.3646 72.5452 75.7789 72.0845 76.3126 71.7564C76.8462 71.4283 77.4709 71.2642 78.1868 71.2642C78.9028 71.2642 79.5275 71.4283 80.0611 71.7564C80.5948 72.0845 81.0091 72.5452 81.304 73.1385C81.599 73.7318 81.7465 74.4245 81.7465 75.2166C81.7465 76.0054 81.599 76.6948 81.304 77.2848C81.0091 77.8748 80.5948 78.3338 80.0611 78.6619C79.5275 78.9901 78.9028 79.1541 78.1868 79.1541ZM78.1918 77.9062C78.6558 77.9062 79.0403 77.7836 79.3452 77.5384C79.6502 77.2931 79.8755 76.9666 80.0214 76.5589C80.1705 76.1513 80.2451 75.7022 80.2451 75.2116C80.2451 74.7244 80.1705 74.277 80.0214 73.8693C79.8755 73.4583 79.6502 73.1286 79.3452 72.88C79.0403 72.6314 78.6558 72.5071 78.1918 72.5071C77.7245 72.5071 77.3367 72.6314 77.0285 72.88C76.7235 73.1286 76.4965 73.4583 76.3474 73.8693C76.2015 74.277 76.1286 74.7244 76.1286 75.2116C76.1286 75.7022 76.2015 76.1513 76.3474 76.5589C76.4965 76.9666 76.7235 77.2931 77.0285 77.5384C77.3367 77.7836 77.7245 77.9062 78.1918 77.9062ZM90.1155 71.3636V72.5568H85.9443V71.3636H90.1155ZM87.0629 69.5341H88.5494V76.7578C88.5494 77.0462 88.5925 77.2633 88.6787 77.4091C88.7649 77.5516 88.8759 77.6494 89.0118 77.7024C89.151 77.7521 89.3018 77.777 89.4642 77.777C89.5835 77.777 89.6879 77.7687 89.7774 77.7521C89.8669 77.7356 89.9365 77.7223 89.9862 77.7124L90.2547 78.9403C90.1685 78.9735 90.0459 79.0066 89.8868 79.0398C89.7277 79.0762 89.5288 79.0961 89.2902 79.0994C88.8991 79.1061 88.5345 79.0365 88.1964 78.8906C87.8584 78.7448 87.5849 78.5194 87.3761 78.2145C87.1673 77.9096 87.0629 77.5268 87.0629 77.0661V69.5341ZM94.689 79.1541C93.9366 79.1541 93.2887 78.9934 92.7451 78.6719C92.2049 78.3471 91.7872 77.8913 91.4923 77.3047C91.2006 76.7147 91.0548 76.0237 91.0548 75.2315C91.0548 74.4493 91.2006 73.7599 91.4923 73.1634C91.7872 72.5668 92.1982 72.1011 92.7252 71.7663C93.2555 71.4316 93.8753 71.2642 94.5846 71.2642C95.0155 71.2642 95.4331 71.3355 95.8374 71.478C96.2418 71.6205 96.6047 71.8442 96.9262 72.1491C97.2477 72.4541 97.5013 72.8501 97.6869 73.3374C97.8725 73.8213 97.9653 74.4096 97.9653 75.1023V75.6293H91.895V74.5156H96.5086C96.5086 74.1245 96.4291 73.7782 96.27 73.4766C96.1109 73.1716 95.8872 72.9313 95.5988 72.7557C95.3138 72.58 94.979 72.4922 94.5945 72.4922C94.1769 72.4922 93.8123 72.5949 93.5008 72.8004C93.1925 73.0026 92.9539 73.2678 92.7849 73.5959C92.6192 73.9207 92.5363 74.2737 92.5363 74.6548V75.5249C92.5363 76.0353 92.6258 76.4695 92.8048 76.8274C92.9871 77.1854 93.2406 77.4588 93.5654 77.6477C93.8902 77.8333 94.2697 77.9261 94.7039 77.9261C94.9856 77.9261 95.2425 77.8864 95.4745 77.8068C95.7065 77.724 95.907 77.6013 96.0761 77.4389C96.2451 77.2765 96.3744 77.076 96.4639 76.8374L97.8708 77.0909C97.7581 77.5052 97.5559 77.8681 97.2643 78.1797C96.9759 78.4879 96.613 78.7282 96.1755 78.9006C95.7413 79.0696 95.2458 79.1541 94.689 79.1541ZM105.057 73.228L103.71 73.4666C103.653 73.2943 103.564 73.1302 103.441 72.9744C103.322 72.8187 103.159 72.6911 102.954 72.5916C102.748 72.4922 102.492 72.4425 102.183 72.4425C101.762 72.4425 101.411 72.5369 101.129 72.7259C100.848 72.9115 100.707 73.1518 100.707 73.4467C100.707 73.7019 100.801 73.9074 100.99 74.0632C101.179 74.219 101.484 74.3466 101.905 74.446L103.118 74.7244C103.821 74.8868 104.344 75.1371 104.689 75.4751C105.034 75.8132 105.206 76.2524 105.206 76.7926C105.206 77.25 105.073 77.6577 104.808 78.0156C104.546 78.3703 104.18 78.6487 103.71 78.8509C103.242 79.053 102.7 79.1541 102.084 79.1541C101.229 79.1541 100.531 78.9718 99.9909 78.6072C99.4506 78.2393 99.1192 77.7173 98.9965 77.0412L100.433 76.8224C100.523 77.197 100.707 77.4804 100.985 77.6726C101.264 77.8615 101.627 77.956 102.074 77.956C102.561 77.956 102.951 77.8549 103.242 77.6527C103.534 77.4472 103.68 77.197 103.68 76.902C103.68 76.6634 103.59 76.4628 103.411 76.3004C103.236 76.138 102.966 76.0154 102.601 75.9325L101.308 75.6491C100.596 75.4867 100.069 75.2282 99.7274 74.8736C99.3893 74.5189 99.2203 74.0698 99.2203 73.5263C99.2203 73.0755 99.3462 72.6811 99.5981 72.343C99.85 72.005 100.198 71.7415 100.642 71.5526C101.086 71.3603 101.595 71.2642 102.168 71.2642C102.994 71.2642 103.643 71.4432 104.117 71.8011C104.591 72.1558 104.904 72.6314 105.057 73.228ZM110.125 71.3636V72.5568H105.954V71.3636H110.125ZM107.073 69.5341H108.559V76.7578C108.559 77.0462 108.602 77.2633 108.688 77.4091C108.774 77.5516 108.886 77.6494 109.021 77.7024C109.161 77.7521 109.311 77.777 109.474 77.777C109.593 77.777 109.698 77.7687 109.787 77.7521C109.877 77.7356 109.946 77.7223 109.996 77.7124L110.264 78.9403C110.178 78.9735 110.055 79.0066 109.896 79.0398C109.737 79.0762 109.538 79.0961 109.3 79.0994C108.909 79.1061 108.544 79.0365 108.206 78.8906C107.868 78.7448 107.595 78.5194 107.386 78.2145C107.177 77.9096 107.073 77.5268 107.073 77.0661V69.5341ZM118.479 71.3636V72.5568H114.308V71.3636H118.479ZM115.427 69.5341H116.913V76.7578C116.913 77.0462 116.956 77.2633 117.042 77.4091C117.129 77.5516 117.24 77.6494 117.375 77.7024C117.515 77.7521 117.665 77.777 117.828 77.777C117.947 77.777 118.052 77.7687 118.141 77.7521C118.231 77.7356 118.3 77.7223 118.35 77.7124L118.618 78.9403C118.532 78.9735 118.41 79.0066 118.25 79.0398C118.091 79.0762 117.893 79.0961 117.654 79.0994C117.263 79.1061 116.898 79.0365 116.56 78.8906C116.222 78.7448 115.949 78.5194 115.74 78.2145C115.531 77.9096 115.427 77.5268 115.427 77.0661V69.5341ZM121.494 74.4659V79H120.008V68.8182H121.474V72.6065H121.569C121.748 72.1955 122.021 71.8691 122.389 71.6271C122.757 71.3852 123.237 71.2642 123.831 71.2642C124.354 71.2642 124.812 71.3719 125.203 71.5874C125.597 71.8028 125.902 72.1243 126.118 72.5518C126.336 72.9761 126.446 73.5064 126.446 74.1428V79H124.959V74.3217C124.959 73.7616 124.815 73.3274 124.527 73.0192C124.238 72.7076 123.837 72.5518 123.324 72.5518C122.972 72.5518 122.657 72.6264 122.379 72.7756C122.104 72.9247 121.887 73.1435 121.728 73.4318C121.572 73.7169 121.494 74.0616 121.494 74.4659ZM128.149 79V71.3636H129.636V79H128.149ZM128.9 70.1854C128.642 70.1854 128.42 70.0992 128.234 69.9268C128.052 69.7512 127.961 69.5424 127.961 69.3004C127.961 69.0552 128.052 68.8464 128.234 68.674C128.42 68.4983 128.642 68.4105 128.9 68.4105C129.159 68.4105 129.379 68.4983 129.561 68.674C129.747 68.8464 129.84 69.0552 129.84 69.3004C129.84 69.5424 129.747 69.7512 129.561 69.9268C129.379 70.0992 129.159 70.1854 128.9 70.1854ZM137.078 73.228L135.731 73.4666C135.674 73.2943 135.585 73.1302 135.462 72.9744C135.343 72.8187 135.181 72.6911 134.975 72.5916C134.77 72.4922 134.513 72.4425 134.204 72.4425C133.784 72.4425 133.432 72.5369 133.151 72.7259C132.869 72.9115 132.728 73.1518 132.728 73.4467C132.728 73.7019 132.822 73.9074 133.011 74.0632C133.2 74.219 133.505 74.3466 133.926 74.446L135.139 74.7244C135.842 74.8868 136.365 75.1371 136.71 75.4751C137.055 75.8132 137.227 76.2524 137.227 76.7926C137.227 77.25 137.095 77.6577 136.829 78.0156C136.568 78.3703 136.201 78.6487 135.731 78.8509C135.263 79.053 134.722 79.1541 134.105 79.1541C133.25 79.1541 132.552 78.9718 132.012 78.6072C131.472 78.2393 131.14 77.7173 131.018 77.0412L132.454 76.8224C132.544 77.197 132.728 77.4804 133.006 77.6726C133.285 77.8615 133.648 77.956 134.095 77.956C134.582 77.956 134.972 77.8549 135.263 77.6527C135.555 77.4472 135.701 77.197 135.701 76.902C135.701 76.6634 135.611 76.4628 135.432 76.3004C135.257 76.138 134.987 76.0154 134.622 75.9325L133.329 75.6491C132.617 75.4867 132.09 75.2282 131.749 74.8736C131.41 74.5189 131.241 74.0698 131.241 73.5263C131.241 73.0755 131.367 72.6811 131.619 72.343C131.871 72.005 132.219 71.7415 132.663 71.5526C133.107 71.3603 133.616 71.2642 134.19 71.2642C135.015 71.2642 135.664 71.4432 136.138 71.8011C136.612 72.1558 136.926 72.6314 137.078 73.228ZM143.493 74.4659V79H142.007V71.3636H143.434V72.6065H143.528C143.704 72.2022 143.979 71.8774 144.353 71.6321C144.731 71.3868 145.207 71.2642 145.78 71.2642C146.301 71.2642 146.756 71.3736 147.147 71.5923C147.538 71.8078 147.842 72.1293 148.057 72.5568C148.273 72.9844 148.38 73.513 148.38 74.1428V79H146.894V74.3217C146.894 73.7682 146.75 73.3357 146.461 73.0241C146.173 72.7093 145.777 72.5518 145.273 72.5518C144.928 72.5518 144.622 72.6264 144.353 72.7756C144.088 72.9247 143.878 73.1435 143.722 73.4318C143.569 73.7169 143.493 74.0616 143.493 74.4659ZM153.385 79.1541C152.633 79.1541 151.985 78.9934 151.441 78.6719C150.901 78.3471 150.483 77.8913 150.188 77.3047C149.897 76.7147 149.751 76.0237 149.751 75.2315C149.751 74.4493 149.897 73.7599 150.188 73.1634C150.483 72.5668 150.894 72.1011 151.421 71.7663C151.952 71.4316 152.571 71.2642 153.281 71.2642C153.712 71.2642 154.129 71.3355 154.534 71.478C154.938 71.6205 155.301 71.8442 155.622 72.1491C155.944 72.4541 156.197 72.8501 156.383 73.3374C156.569 73.8213 156.661 74.4096 156.661 75.1023V75.6293H150.591V74.5156H155.205C155.205 74.1245 155.125 73.7782 154.966 73.4766C154.807 73.1716 154.583 72.9313 154.295 72.7557C154.01 72.58 153.675 72.4922 153.291 72.4922C152.873 72.4922 152.508 72.5949 152.197 72.8004C151.889 73.0026 151.65 73.2678 151.481 73.5959C151.315 73.9207 151.232 74.2737 151.232 74.6548V75.5249C151.232 76.0353 151.322 76.4695 151.501 76.8274C151.683 77.1854 151.937 77.4588 152.262 77.6477C152.586 77.8333 152.966 77.9261 153.4 77.9261C153.682 77.9261 153.939 77.8864 154.171 77.8068C154.403 77.724 154.603 77.6013 154.772 77.4389C154.941 77.2765 155.07 77.076 155.16 76.8374L156.567 77.0909C156.454 77.5052 156.252 77.8681 155.96 78.1797C155.672 78.4879 155.309 78.7282 154.872 78.9006C154.437 79.0696 153.942 79.1541 153.385 79.1541ZM159.673 79L157.425 71.3636H158.962L160.458 76.9716H160.533L162.034 71.3636H163.57L165.062 76.9467H165.136L166.623 71.3636H168.159L165.917 79H164.401L162.849 73.4865H162.735L161.184 79H159.673ZM176.349 71.3636V72.5568H172.034V71.3636H176.349ZM173.217 79V70.4787C173.217 70.0014 173.321 69.6053 173.53 69.2905C173.739 68.9723 174.016 68.7353 174.36 68.5795C174.705 68.4205 175.08 68.3409 175.484 68.3409C175.782 68.3409 176.038 68.3658 176.25 68.4155C176.462 68.4619 176.619 68.505 176.722 68.5447L176.374 69.7479C176.304 69.728 176.215 69.7048 176.105 69.6783C175.996 69.6484 175.864 69.6335 175.708 69.6335C175.346 69.6335 175.088 69.723 174.932 69.902C174.78 70.081 174.703 70.3395 174.703 70.6776V79H173.217ZM180.593 79.1541C179.841 79.1541 179.193 78.9934 178.649 78.6719C178.109 78.3471 177.691 77.8913 177.396 77.3047C177.105 76.7147 176.959 76.0237 176.959 75.2315C176.959 74.4493 177.105 73.7599 177.396 73.1634C177.691 72.5668 178.102 72.1011 178.629 71.7663C179.16 71.4316 179.78 71.2642 180.489 71.2642C180.92 71.2642 181.337 71.3355 181.742 71.478C182.146 71.6205 182.509 71.8442 182.83 72.1491C183.152 72.4541 183.405 72.8501 183.591 73.3374C183.777 73.8213 183.869 74.4096 183.869 75.1023V75.6293H177.799V74.5156H182.413C182.413 74.1245 182.333 73.7782 182.174 73.4766C182.015 73.1716 181.791 72.9313 181.503 72.7557C181.218 72.58 180.883 72.4922 180.499 72.4922C180.081 72.4922 179.717 72.5949 179.405 72.8004C179.097 73.0026 178.858 73.2678 178.689 73.5959C178.523 73.9207 178.441 74.2737 178.441 74.6548V75.5249C178.441 76.0353 178.53 76.4695 178.709 76.8274C178.891 77.1854 179.145 77.4588 179.47 77.6477C179.794 77.8333 180.174 77.9261 180.608 77.9261C180.89 77.9261 181.147 77.8864 181.379 77.8068C181.611 77.724 181.811 77.6013 181.98 77.4389C182.149 77.2765 182.279 77.076 182.368 76.8374L183.775 77.0909C183.662 77.5052 183.46 77.8681 183.169 78.1797C182.88 78.4879 182.517 78.7282 182.08 78.9006C181.646 79.0696 181.15 79.1541 180.593 79.1541ZM187.461 79.169C186.977 79.169 186.54 79.0795 186.149 78.9006C185.758 78.7183 185.448 78.4548 185.219 78.1101C184.994 77.7654 184.881 77.3428 184.881 76.8423C184.881 76.4115 184.964 76.0568 185.129 75.7784C185.295 75.5 185.519 75.2796 185.801 75.1172C186.082 74.9548 186.397 74.8321 186.745 74.7493C187.093 74.6664 187.448 74.6035 187.809 74.5604C188.267 74.5073 188.638 74.4643 188.923 74.4311C189.208 74.3946 189.415 74.3366 189.544 74.2571C189.673 74.1776 189.738 74.0483 189.738 73.8693V73.8345C189.738 73.4003 189.615 73.0639 189.37 72.8253C189.128 72.5866 188.767 72.4673 188.286 72.4673C187.786 72.4673 187.392 72.5784 187.103 72.8004C186.818 73.0192 186.621 73.2628 186.512 73.5312L185.115 73.2131C185.28 72.7491 185.522 72.3745 185.84 72.0895C186.162 71.8011 186.531 71.5923 186.949 71.4631C187.367 71.3305 187.806 71.2642 188.267 71.2642C188.571 71.2642 188.895 71.3007 189.236 71.3736C189.581 71.4432 189.902 71.5724 190.2 71.7614C190.502 71.9503 190.749 72.2204 190.941 72.5717C191.133 72.9197 191.23 73.3722 191.23 73.929V79H189.778V77.956H189.718C189.622 78.1482 189.478 78.3371 189.286 78.5227C189.093 78.7083 188.847 78.8625 188.545 78.9851C188.243 79.1077 187.882 79.169 187.461 79.169ZM187.784 77.9759C188.195 77.9759 188.547 77.8946 188.838 77.7322C189.133 77.5698 189.357 77.3577 189.509 77.0959C189.665 76.8307 189.743 76.5473 189.743 76.2457V75.2614C189.69 75.3144 189.587 75.3641 189.435 75.4105C189.286 75.4536 189.115 75.4917 188.923 75.5249C188.731 75.5547 188.543 75.5829 188.361 75.6094C188.179 75.6326 188.026 75.6525 187.904 75.669C187.615 75.7055 187.352 75.7668 187.113 75.853C186.878 75.9392 186.689 76.0634 186.546 76.2259C186.407 76.3849 186.338 76.5971 186.338 76.8622C186.338 77.2301 186.473 77.5085 186.745 77.6974C187.017 77.883 187.363 77.9759 187.784 77.9759ZM196.494 71.3636V72.5568H192.323V71.3636H196.494ZM193.442 69.5341H194.928V76.7578C194.928 77.0462 194.971 77.2633 195.057 77.4091C195.144 77.5516 195.255 77.6494 195.39 77.7024C195.53 77.7521 195.68 77.777 195.843 77.777C195.962 77.777 196.067 77.7687 196.156 77.7521C196.246 77.7356 196.315 77.7223 196.365 77.7124L196.633 78.9403C196.547 78.9735 196.425 79.0066 196.265 79.0398C196.106 79.0762 195.908 79.0961 195.669 79.0994C195.278 79.1061 194.913 79.0365 194.575 78.8906C194.237 78.7448 193.964 78.5194 193.755 78.2145C193.546 77.9096 193.442 77.5268 193.442 77.0661V69.5341ZM202.696 75.8331V71.3636H204.187V79H202.726V77.6776H202.646C202.47 78.0852 202.189 78.425 201.801 78.6967C201.417 78.9652 200.938 79.0994 200.364 79.0994C199.874 79.0994 199.439 78.9917 199.062 78.7763C198.687 78.5575 198.392 78.2344 198.177 77.8068C197.965 77.3793 197.859 76.8506 197.859 76.2209V71.3636H199.345V76.0419C199.345 76.5623 199.489 76.9766 199.778 77.2848C200.066 77.593 200.44 77.7472 200.901 77.7472C201.18 77.7472 201.456 77.6776 201.731 77.5384C202.01 77.3991 202.24 77.1887 202.422 76.907C202.608 76.6252 202.699 76.2673 202.696 75.8331ZM205.905 79V71.3636H207.341V72.5767H207.421C207.56 72.1657 207.805 71.8426 208.157 71.6072C208.511 71.3686 208.912 71.2493 209.36 71.2493C209.453 71.2493 209.562 71.2526 209.688 71.2592C209.817 71.2659 209.918 71.2741 209.991 71.2841V72.706C209.932 72.6894 209.826 72.6712 209.673 72.6513C209.521 72.6281 209.368 72.6165 209.216 72.6165C208.864 72.6165 208.551 72.6911 208.276 72.8402C208.004 72.986 207.789 73.1899 207.63 73.4517C207.471 73.7102 207.391 74.0052 207.391 74.3366V79H205.905ZM214.015 79.1541C213.263 79.1541 212.615 78.9934 212.072 78.6719C211.531 78.3471 211.114 77.8913 210.819 77.3047C210.527 76.7147 210.381 76.0237 210.381 75.2315C210.381 74.4493 210.527 73.7599 210.819 73.1634C211.114 72.5668 211.525 72.1011 212.052 71.7663C212.582 71.4316 213.202 71.2642 213.911 71.2642C214.342 71.2642 214.76 71.3355 215.164 71.478C215.568 71.6205 215.931 71.8442 216.253 72.1491C216.574 72.4541 216.828 72.8501 217.013 73.3374C217.199 73.8213 217.292 74.4096 217.292 75.1023V75.6293H211.221V74.5156H215.835C215.835 74.1245 215.756 73.7782 215.596 73.4766C215.437 73.1716 215.214 72.9313 214.925 72.7557C214.64 72.58 214.305 72.4922 213.921 72.4922C213.503 72.4922 213.139 72.5949 212.827 72.8004C212.519 73.0026 212.28 73.2678 212.111 73.5959C211.946 73.9207 211.863 74.2737 211.863 74.6548V75.5249C211.863 76.0353 211.952 76.4695 212.131 76.8274C212.314 77.1854 212.567 77.4588 212.892 77.6477C213.217 77.8333 213.596 77.9261 214.03 77.9261C214.312 77.9261 214.569 77.8864 214.801 77.8068C215.033 77.724 215.234 77.6013 215.403 77.4389C215.572 77.2765 215.701 77.076 215.79 76.8374L217.197 77.0909C217.085 77.5052 216.882 77.8681 216.591 78.1797C216.302 78.4879 215.939 78.7282 215.502 78.9006C215.068 79.0696 214.572 79.1541 214.015 79.1541ZM225.303 79.1541C224.587 79.1541 223.962 78.9901 223.428 78.6619C222.895 78.3338 222.481 77.8748 222.186 77.2848C221.891 76.6948 221.743 76.0054 221.743 75.2166C221.743 74.4245 221.891 73.7318 222.186 73.1385C222.481 72.5452 222.895 72.0845 223.428 71.7564C223.962 71.4283 224.587 71.2642 225.303 71.2642C226.019 71.2642 226.643 71.4283 227.177 71.7564C227.711 72.0845 228.125 72.5452 228.42 73.1385C228.715 73.7318 228.862 74.4245 228.862 75.2166C228.862 76.0054 228.715 76.6948 228.42 77.2848C228.125 77.8748 227.711 78.3338 227.177 78.6619C226.643 78.9901 226.019 79.1541 225.303 79.1541ZM225.308 77.9062C225.772 77.9062 226.156 77.7836 226.461 77.5384C226.766 77.2931 226.991 76.9666 227.137 76.5589C227.286 76.1513 227.361 75.7022 227.361 75.2116C227.361 74.7244 227.286 74.277 227.137 73.8693C226.991 73.4583 226.766 73.1286 226.461 72.88C226.156 72.6314 225.772 72.5071 225.308 72.5071C224.84 72.5071 224.453 72.6314 224.144 72.88C223.839 73.1286 223.612 73.4583 223.463 73.8693C223.317 74.277 223.245 74.7244 223.245 75.2116C223.245 75.7022 223.317 76.1513 223.463 76.5589C223.612 76.9666 223.839 77.2931 224.144 77.5384C224.453 77.7836 224.84 77.9062 225.308 77.9062ZM235.079 75.8331V71.3636H236.571V79H235.109V77.6776H235.029C234.854 78.0852 234.572 78.425 234.184 78.6967C233.8 78.9652 233.321 79.0994 232.747 79.0994C232.257 79.0994 231.823 78.9917 231.445 78.7763C231.07 78.5575 230.775 78.2344 230.56 77.8068C230.348 77.3793 230.242 76.8506 230.242 76.2209V71.3636H231.728V76.0419C231.728 76.5623 231.872 76.9766 232.161 77.2848C232.449 77.593 232.824 77.7472 233.284 77.7472C233.563 77.7472 233.839 77.6776 234.115 77.5384C234.393 77.3991 234.623 77.1887 234.806 76.907C234.991 76.6252 235.082 76.2673 235.079 75.8331ZM241.853 71.3636V72.5568H237.681V71.3636H241.853ZM238.8 69.5341H240.286V76.7578C240.286 77.0462 240.33 77.2633 240.416 77.4091C240.502 77.5516 240.613 77.6494 240.749 77.7024C240.888 77.7521 241.039 77.777 241.201 77.777C241.321 77.777 241.425 77.7687 241.514 77.7521C241.604 77.7356 241.674 77.7223 241.723 77.7124L241.992 78.9403C241.906 78.9735 241.783 79.0066 241.624 79.0398C241.465 79.0762 241.266 79.0961 241.027 79.0994C240.636 79.1061 240.272 79.0365 239.933 78.8906C239.595 78.7448 239.322 78.5194 239.113 78.2145C238.904 77.9096 238.8 77.5268 238.8 77.0661V69.5341ZM245.091 68.8182L244.962 76.0717H243.585L243.456 68.8182H245.091ZM244.276 79.0945C244.001 79.0945 243.765 78.9983 243.57 78.8061C243.374 78.6106 243.278 78.3752 243.281 78.1001C243.278 77.8284 243.374 77.5964 243.57 77.4041C243.765 77.2086 244.001 77.1108 244.276 77.1108C244.544 77.1108 244.776 77.2086 244.972 77.4041C245.167 77.5964 245.267 77.8284 245.27 78.1001C245.267 78.2824 245.219 78.4498 245.126 78.6023C245.036 78.7514 244.917 78.8707 244.768 78.9602C244.619 79.0497 244.455 79.0945 244.276 79.0945Z" fill="#646D7A"/>
<g clip-path="url(#clip0_4858_775)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M295.546 21.3676C295.311 20.7018 295.794 20 296.489 20H300.311C300.735 20 301.112 20.2699 301.253 20.6718L304.428 29.6214C304.504 29.8434 304.504 30.0893 304.428 30.3172L302.519 35.6978C302.201 36.5976 300.953 36.5976 300.635 35.6978L295.546 21.3676ZM287.071 21.3976C286.812 20.7258 287.295 20 288.001 20H292.389C292.801 20 293.166 20.2519 293.319 20.6418L296.812 29.5915C296.906 29.8314 296.906 30.1013 296.812 30.3473L294.615 35.9678C294.279 36.8256 293.09 36.8256 292.754 35.9678L287.071 21.3976ZM304.127 20C303.421 20 302.938 20.7258 303.197 21.3976L308.88 35.9678C309.216 36.8255 310.405 36.8255 310.741 35.9678L312.938 30.3472C313.032 30.1013 313.032 29.8314 312.938 29.5914L309.445 20.6418C309.292 20.2519 308.927 20 308.515 20H304.127Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_4858_775" x1="165.5" y1="0" x2="165.5" y2="186" gradientUnits="userSpaceOnUse">
<stop stop-color="#7F7F7F"/>
<stop offset="1" stop-color="#303030" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_4858_775" x1="28" y1="16" x2="28" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#45B09C"/>
<stop offset="1" stop-color="#D97B7B"/>
</linearGradient>
<clipPath id="clip0_4858_775">
<rect width="26" height="16.6111" fill="white" transform="translate(287 20)"/>
</clipPath>
</defs>
</svg>

  `;

  return svg;
}