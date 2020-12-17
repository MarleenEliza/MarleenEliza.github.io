window.onload = function () {
  async function getPopulation() {
    return await (await fetch('data/population.json')).json();
  }

  getPopulation()
    .then(data => {
      // 地方に分けたデータ取得
      getDataByRegion(data);
      setMinMax();
      // HTML Element作成
      createRegionSections();

    })
    .catch(err => {
      console.log(err);
    })
};
// ＊＊＊データ取得＊＊＊

// 地方に分けた都道府県
let Regions = {
  東北: ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
  関東: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"],
  中部: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"],
  近畿: ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"],
  中国: ["鳥取県", "島根県", "岡山県", "広島県", "山口県"],
  四国: ["徳島県", "香川県", "愛媛県", "高知県"],
  九州: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県"],
  沖縄: ["沖縄県"],
  北海道: ["北海道"],
}

let max;
let min;
let diffMax = max - min;

let totalValueList = [];

// getDataByRegionで地方ごとに取得したデータでRegionsを更新する
function getDataByRegion(data) {
  for (region in Regions) {
    let prefectureNamesInRegion = Regions[region];
    Regions[region] = getPrefectureList(prefectureNamesInRegion);
  };

  // getDataByRegion内で呼ぶgetPrefecturesでDataの登録をループする
  // 元々Regionsにあった都道府県の名前を確認し、一緒であればObjectとして敵絶な地方に追加する
  function getPrefectureList(prefectureNamesInRegion) {
    let prefectureObjectList = [];
    data.forEach(item => {
      if (prefectureNamesInRegion.includes(item.name)) {
        prefectureObjectList.push(item);
        totalValueList.push(item.total);
      }
    });
    setMinMax();
    return prefectureObjectList;
  };
};

// データの中から人数が最小の都道府県と人数が最大の都道府県をSetする
function setMinMax() {
  max = Math.max(...totalValueList);
  min = Math.min(...totalValueList);
  diffMax = max - min;
};

// ＊＊＊HTML Element作成＊＊＊
let newHTMLElement = (type) => document.createElement(type);

// 地方のSectionの作成
// Sectionの仕組み：
// <section class="region">
//   <h3>地方名 createElementTitleで設定
//     <div class="prefecture-data">　都道府県ごとのデータ、CreatePrefectureDivsで作成
function createRegionSections() {
  const allDataSection = document.getElementById("all-data");

  for (let region in Regions) {
    const regionSection = newHTMLElement("section");
    regionSection.id = region;
    regionSection.className = "region card";

    allDataSection.appendChild(regionSection);

    createSimpleElement(region, regionSection, "h3");
    createPrefectureDivs(region);
  }
};

// 都道府県ごとにDivを以下のように作成する：
// Divの仕組み：
// <div class="prefecture-data">
//  <p>都道府県名
//  <div>バー
//  <p>合計人数
function createPrefectureDivs(region) {
  const regionSection = document.getElementById(region);
  
  for (let prefecture in Regions[region]) {
    const prefectureObject = Regions[region][prefecture];

    const prefectureDiv = newHTMLElement("div");
    prefectureDiv.id = prefectureObject.name + "-pref";
    prefectureDiv.className = "prefecture-data";

    regionSection.appendChild(prefectureDiv);

    // Div内のエレメント作成
    createSimpleElement(prefectureObject.name, prefectureDiv, "p");
    createBars(prefectureObject, prefectureDiv);
    createSimpleElement(getNumberWithDec(prefectureObject.total) + "人", prefectureDiv, "p");
  }
};

//　Regionsのデータを使い、クラス名やループなどの詳細設定が不要のHTMLエレメントを作成する
function createSimpleElement(content, parent, type) {
  const element = newHTMLElement(type);
  element.innerHTML = content;

  parent.appendChild(element);
};

// データのバーを作成する、中身のデータはcreateInnerBarsで作成する
function createBars(prefectureData, parent) {
  const progressDiv = newHTMLElement("div");
  progressDiv.className = "progress";
  progressDiv.id = "progress-" + prefectureData.name;
  progressDiv.style = "width: " + getWidthProgressBar(prefectureData.total).toString() + "%";

  parent.appendChild(progressDiv);

  const newParent = document.getElementById(progressDiv.id);
  createInnerBar(prefectureData, "female", newParent);
  createInnerBar(prefectureData, "male", newParent);

};

// BootstrapのProgresバーの中身を設定する
// バーの仕組み：
// <div class="progress-bar">
//    <p>人数</p>
//    <p>人数％</p>
function createInnerBar(prefectureData, gender, parent) {
  const genderData = prefectureData[gender];
  const totalData = prefectureData.total;
  const genderPercentage = (genderData / totalData * 100).toFixed(1).toString() + "%";
  const color = gender === "female" ? "pink" : "blue";

  const genderBar = newHTMLElement("div");
  genderBar.className = "progress-bar progress-bar-striped progress-bar-animated "+ color + "-bg";
  genderBar.role = "progressbar";
  genderBar.style = "width: " + genderPercentage;
  genderBar.ariaValueNow = genderData;
  genderBar.ariaValueMin = min.toString();
  genderBar.ariaValueMax = max.toString();

  parent.appendChild(genderBar);
  createSimpleElement(getNumberWithDec(genderData) + "人", genderBar, "p");
  createSimpleElement(genderPercentage, genderBar, "p");
};

// バーのWidthをGetする。表示の為、最後の３５％のみが人数に夜変更される
function getWidthProgressBar(prefectureTotal) {
  const diffPref = max - prefectureTotal;

  return 100 - 35 * (diffPref / diffMax);
};

// 数字にコンマを入れる
function getNumberWithDec(number) {
  return number.toLocaleString();
};