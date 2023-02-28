import { ref } from "vue";
export function useImgsOne() {
  const imgsDatas = ref("");
  const imgsDatas2 = ref("");
  const imgsDatas3 = ref("");
  const imgsDatas4 = ref("");
  const imgsDatas5 = ref("");
  const imgsDatas6 = ref("");
  const imgsDatas7 = ref("");
  const imgsDatasNew = ref("");
  const imgsDatasLady = ref("");
  const imgsDatasMan = ref("");
  const imgsDatasInside = ref("");
  const imgsDatasShouse = ref("");
  const swiperDataImgs = ref("");
  const imgsInterview = ref("");
  imgsInterview.value = [
    { imgSrc: "src/images/Facebook.avif", title: "Facebook" },
    { imgSrc: "src/images/Instagram_1.webp", title: "Instagram" },
    { imgSrc: "src/images/LINE.webp", title: "LINE" },
  ];
  imgsDatas.value = [
    { imgSrc: "src/images/1.avif", title: "惜物季" },
    { imgSrc: "src/images/2.avif", title: "單寧褲" },
    { imgSrc: "src/images/3.avif", title: "惜物季" },
    { imgSrc: "src/images/4.webp", title: "MUJI Lado 23春夏" },
  ];
  imgsDatas2.value = [
    { imgSrc: "src/images/5.webp", title: "有機棉保暖，新登場" },
    { imgSrc: "src/images/6.webp", title: "帶著自己的購物袋" },
    { imgSrc: "src/images/7.webp", title: "最新PDF型錄" },
    { imgSrc: "src/images/8.webp", title: "線上家具型錄" },
  ];
  imgsDatas3.value = [
    { imgSrc: "src/images/3a1.webp", title: "有機棉保暖，新登場" },
    { imgSrc: "src/images/3a2.webp", title: "帶著自己的購物袋" },
    { imgSrc: "src/images/3a3.webp", title: "最新PDF型錄" },
  ];
  imgsDatas4.value = [
    { imgSrc: "src/images/41.jpeg", title: "最新門市講座" },
    { imgSrc: "src/images/42.webp", title: "岡山門市 GRAND OPEN" },
    { imgSrc: "src/images/43.webp", title: "台東門市 RAND OPEN" },
  ];
  imgsDatas5.value = [
    { imgSrc: "src/images/51.jpeg", title: "在地活動" },
    { imgSrc: "src/images/52.webp", title: "良品市場" },
    { imgSrc: "src/images/53.webp", title: "台東移動服務車" },
  ];
  imgsDatas6.value = [
    { imgSrc: "src/images/61.jpeg", title: "台東 . 生活服務車" },
    {
      imgSrc: "src/images/62.jpeg",
      title: "麻油紅棗酒香蝦【與MUJI一起做料理】",
    },
    { imgSrc: "src/images/63.jpeg", title: "可水洗毛衣洗滌教學" },
  ];
  imgsDatas7.value = [
    { imgSrc: "src/images/71.jpeg", title: "關於修補" },
    { imgSrc: "src/images/72.jpeg", title: "贈禮的心意" },
    { imgSrc: "src/images/73.jpeg", title: "對於便利的思考" },
  ];
  imgsDatasNew.value = [
    { imgSrc: "src/images/new1.webp", title: "關於修補" },
    { imgSrc: "src/images/new2.avif", title: "贈禮的心意" },
    { imgSrc: "src/images/new3.webp", title: "對於便利的思考" },
  ];
  imgsDatasLady.value = [
    { imgSrc: "src/images/l1.webp", title: "女針織衫" },
    { imgSrc: "src/images/l2.webp", title: "女休閒衫" },
    { imgSrc: "src/images/l3.webp", title: "女襯衫" },
    { imgSrc: "src/images/l4.webp", title: "女外套" },
    { imgSrc: "src/images/l5.webp", title: "女裙褲" },
    { imgSrc: "src/images/l6.webp", title: "女襪" },
  ];
  imgsDatasMan.value = [
    { imgSrc: "src/images/m1.webp", title: "男針織衫" },
    { imgSrc: "src/images/m2.webp", title: "男休閒衫" },
    { imgSrc: "src/images/m3.webp", title: "男襯衫" },
    { imgSrc: "src/images/m4.webp", title: "男襯衫" },
    { imgSrc: "src/images/m5.webp", title: "男褲" },
  ];
  imgsDatasShouse.value = [
    { imgSrc: "src/images/s1.webp", title: "休閒鞋｜運動鞋" },
    { imgSrc: "src/images/s2.webp", title: "其他鞋款" },
  ];
  imgsDatasInside.value = [
    { imgSrc: "src/images/in1.webp", title: "女內衣" },
    { imgSrc: "src/images/in2.webp", title: "女內褲" },
    { imgSrc: "src/images/in3.webp", title: "女居家服" },
    { imgSrc: "src/images/in4.webp", title: "男內衣" },
    { imgSrc: "src/images/in5.webp", title: "男內褲" },
    { imgSrc: "src/images/in6.webp", title: "男居家服" },
  ];
  swiperDataImgs.value = [
    { imgSrc: "src/images/sw1.avif" },
    { imgSrc: "src/images/sw2.avif" },
    { imgSrc: "src/images/sw3.avif" },
    { imgSrc: "src/images/sw4.avif" },
    { imgSrc: "src/images/sw5.avif" },
  ];
  return {
    imgsDatas,
    imgsDatas2,
    imgsDatas3,
    imgsDatas4,
    imgsDatas5,
    imgsDatas6,
    imgsDatas7,
    imgsDatasNew,
    imgsDatasInside,
    imgsDatasLady,
    imgsDatasMan,
    imgsDatasShouse,
    swiperDataImgs,
    imgsInterview,
  };
}
