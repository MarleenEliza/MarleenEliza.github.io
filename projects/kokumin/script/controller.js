// *** ボタン処理の為のController　***

// 検索ボタンの処理、検索条件と同様なPrefDivをフィルターする。条件に当てはまらないものがDisplay noneとなる。
const allPrefs = document.getElementsByClassName("prefecture-data");

function filterPrefs() {
    const inputVal = document.getElementById("filterInput").value;
    if (inputVal !== "") {
        for (pref in allPrefs) {
            if (allPrefs[pref].id === inputVal + "-pref") {
                allPrefs[pref].style = "display: grid";
            } else {
                allPrefs[pref].style = "display: none";
            }
        }
    }
}

// 一覧をリセットする
function resetFilter() {
    for(pref in allPrefs){
        allPrefs[pref].style = "display: grid";
    }
}