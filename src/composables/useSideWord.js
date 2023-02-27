import { ref } from "vue";
export function useSideWord() {
  const sideWord1 = ref("");
  sideWord1.value = [
    { title: "test", hoverWord: ["testcoles|tt"] },
    { title: "惜物季", hoverWord: ["newcoles|ddddd", "newthing|aaaa"] },
    { title: "不惜物季testtest",hoverWord:[] },
  ];
  return { sideWord1 };
}
