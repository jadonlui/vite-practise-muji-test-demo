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
    { imgSrc: "/images/Facebook.avif", title: "Facebook" },
    { imgSrc: "/images/Instagram_1.webp", title: "Instagram" },
    { imgSrc: "/images/LINE.webp", title: "LINE" },
  ];
  imgsDatas.value = [
    { imgSrc: "/images/1.avif", title: "惜物季" },
    { imgSrc: "/images/2.avif", title: "單寧褲" },
    { imgSrc: "/images/3.avif", title: "惜物季" },
    { imgSrc: "/images/4.webp", title: "MUJI Lado 23春夏" },
  ];
  imgsDatas2.value = [
    { imgSrc: "/images/5.webp", title: "有機棉保暖，新登場" },
    { imgSrc: "/images/6.webp", title: "帶著自己的購物袋" },
    { imgSrc: "/images/7.webp", title: "最新PDF型錄" },
    { imgSrc: "/images/8.webp", title: "線上家具型錄" },
  ];
  imgsDatas3.value = [
    { imgSrc: "/images/3a1.webp", title: "有機棉保暖，新登場" },
    { imgSrc: "/images/3a2.webp", title: "帶著自己的購物袋" },
    { imgSrc: "/images/3a3.webp", title: "最新PDF型錄" },
  ];
  imgsDatas4.value = [
    { imgSrc: "/images/41.jpeg", title: "最新門市講座" },
    { imgSrc: "/images/42.webp", title: "岡山門市 GRAND OPEN" },
    { imgSrc: "/images/43.webp", title: "台東門市 RAND OPEN" },
  ];
  imgsDatas5.value = [
    { imgSrc: "/images/51.jpeg", title: "在地活動" },
    { imgSrc: "/images/52.webp", title: "良品市場" },
    { imgSrc: "/images/53.webp", title: "台東移動服務車" },
  ];
  imgsDatas6.value = [
    { imgSrc: "/images/61.jpeg", title: "台東 . 生活服務車" },
    {
      imgSrc: "/images/62.jpeg",
      title: "麻油紅棗酒香蝦【與MUJI一起做料理】",
    },
    { imgSrc: "/images/63.jpeg", title: "可水洗毛衣洗滌教學" },
  ];
  imgsDatas7.value = [
    { imgSrc: "/images/71.jpeg", title: "關於修補" },
    { imgSrc: "/images/72.jpeg", title: "贈禮的心意" },
    { imgSrc: "/images/73.jpeg", title: "對於便利的思考" },
  ];
  imgsDatasNew.value = [
    { imgSrc: "/images/new1.webp", title: "關於修補" },
    { imgSrc: "/images/new2.avif", title: "贈禮的心意" },
    { imgSrc: "/images/new3.webp", title: "對於便利的思考" },
  ];
  imgsDatasLady.value = [
    { imgSrc: "/images/l1.webp", title: "女針織衫" },
    { imgSrc: "/images/l2.webp", title: "女休閒衫" },
    { imgSrc: "/images/l3.webp", title: "女襯衫" },
    { imgSrc: "/images/l4.webp", title: "女外套" },
    { imgSrc: "/images/l5.webp", title: "女裙褲" },
    { imgSrc: "/images/l6.webp", title: "女襪" },
  ];
  imgsDatasMan.value = [
    { imgSrc: "/images/m1.webp", title: "男針織衫" },
    { imgSrc: "/images/m2.webp", title: "男休閒衫" },
    { imgSrc: "/images/m3.webp", title: "男襯衫" },
    { imgSrc: "/images/m4.webp", title: "男襯衫" },
    { imgSrc: "/images/m5.webp", title: "男褲" },
  ];
  imgsDatasShouse.value = [
    { imgSrc: "/images/s1.webp", title: "休閒鞋｜運動鞋" },
    { imgSrc: "/images/s2.webp", title: "其他鞋款" },
  ];
  imgsDatasInside.value = [
    { imgSrc: "/images/in1.webp", title: "女內衣" },
    { imgSrc: "/images/in2.webp", title: "女內褲" },
    { imgSrc: "/images/in3.webp", title: "女居家服" },
    { imgSrc: "/images/in4.webp", title: "男內衣" },
    { imgSrc: "/images/in5.webp", title: "男內褲" },
    { imgSrc: "/images/in6.webp", title: "男居家服" },
  ];
  swiperDataImgs.value = [
    { imgSrc: "/images/sw1.avif" },
    { imgSrc: "/images/sw2.avif" },
    { imgSrc: "/images/sw3.avif" },
    { imgSrc: "/images/sw4.avif" },
    { imgSrc: "/images/sw5.avif" },
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
