import common from "./src/common"
export default {
    init: (() => {
        let text = "Hello World!";
        document.getElementById("root").innerHTML = text;
        common.log()
        let a = [...new Set([1, 2, 3, 1, 2, 3])]
        console.log(a);
    })()
}