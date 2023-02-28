import { ref } from "vue";
export function useSideWord() {
  const sideWord1 = ref("");
  const sideWordLady = ref("");
  const sideWordMen = ref("");
  const sideWordInside = ref("");
  const sideWordHome = ref("");
  sideWordHome.value = [
    {
      title: "客廳",
      hoverWord: [
        "懶骨頭沙發",
        "高椅背沙發",
        "聚氨酯獨立筒沙發",
        "羽毛獨立筒沙發",
        "木製沙發",
        "LD沙發",
        "組合沙發",
        "其他客廳家具",
      ],
    },
    {
      title: "餐廳",
      hoverWord: [],
    },
    { title: "床架｜床台", hoverWord: [] },
    { title: "桌｜椅", hoverWord: [] },
  ];
  sideWord1.value = [
    { title: "特輯", hoverWord: [] },
    {
      title: "新商品",
      hoverWord: [
        "新商品|衣料",
        "新商品|生活雜貨",
        "新商品|食品",
        "新商品|良品市場",
      ],
    },
    { title: "良品專欄", hoverWord: [] },
  ];
  sideWordInside.value = [
    { title: "女內衣", hoverWord: [] },
    {
      title: "女內褲",
      hoverWord: [],
    },
    { title: "女居家服", hoverWord: [] },
    { title: "男內衣", hoverWord: [] },
    { title: "男內褲", hoverWord: [] },
    { title: "男居家", hoverWord: [] },
  ];
  sideWordLady.value = [
    { title: "女針織衫", hoverWord: [] },
    {
      title: "女休閒衫",
      hoverWord: [],
    },
    { title: "女襯衫", hoverWord: [] },
    { title: "女外套", hoverWord: [] },
    { title: "女裙褲", hoverWord: [] },
    { title: "女襪", hoverWord: [] },
    { title: " 緊身褲｜緊身長褲", hoverWord: [] },
  ];
  sideWordMen.value = [
    { title: "男針織衫", hoverWord: [] },
    {
      title: "男休閒衫",
      hoverWord: [],
    },
    { title: "男襯衫", hoverWord: [] },
    { title: "男外套", hoverWord: [] },
    { title: "男裙褲", hoverWord: [] },
    { title: "男襪", hoverWord: [] },
  ];
  return {
    sideWord1,
    sideWordLady,
    sideWordMen,
    sideWordInside,
    sideWordHome,
  };
}
