console.clear();

//json路徑
var url = 'data/card.json';
//存放json資料
var $cards;
var $container = $('.js-container');
//字卡區域
var $cardGroup = $container.find('.js-cardGroup');
//每張字卡
var $cardItem = $container.find('.js-cardGroup label');
//positive neutral negative (預設為positive)
var $tab = 'positive';
//所有已選擇的字卡
var $resultCardArray = [];
//已選擇的字卡區域
var $resultGroup = $container.find('.js-resultGroup');

const liContainer = document.querySelector(".js-tabs");
const liEls = [...document.querySelectorAll(".js-tabs li")];
const slideEl_1 = document.querySelector(".focus-el.el--1");
const slideEl_2 = document.querySelector(".focus-el.el--2");

gsap.defaults({
	ease: "ease.inOut",
});
let tl = gsap.timeline();

let liRect = liContainer.getBoundingClientRect();
let slideEl_1_DefaultWidth = slideEl_1.getBoundingClientRect().width;
let slideEl_1_DefaultLeft = slideEl_1.getBoundingClientRect().left;
let slideEl_2_DefaultLeft = slideEl_2.getBoundingClientRect().left;

let startPosIndex = 1;
let reachedEnd = false;
let activeIndex = startPosIndex;

let animationDuration = 0.2;

//tabs
liEls.forEach((el, index) => {
	let elRect = el.getBoundingClientRect();

	el.addEventListener("mousedown", () => {
		if (reachedEnd && index + 1 == startPosIndex) {
			tl.to(slideEl_1, animationDuration, { left: `${liRect.width}px` });
			tl.to(
				slideEl_2,
				animationDuration,
				{ left: `${elRect.left - liRect.left}px` },
				`-=${animationDuration}`
			);
			tl.set(
				slideEl_1,
				{ left: `${slideEl_1_DefaultLeft - liRect.left}px` },
				`+=${animationDuration}`
			);
			tl.set(
				slideEl_2,
				{ left: `${slideEl_2_DefaultLeft - liRect.left}px` },
				`+=${animationDuration}`
			);
		}

		let timesWidth = index + 1 - activeIndex + 1 <= 0 ? 1 : index + 1 - activeIndex + 1;
		activeIndex = index + 1;

		tl.to(slideEl_1, animationDuration, { width: `${timesWidth * slideEl_1_DefaultWidth}px` });
		if (index + 1 != startPosIndex || reachedEnd == false) {
			tl.to(slideEl_1, animationDuration, {
				left: `${elRect.left - liRect.left}px`,
				width: `${slideEl_1_DefaultWidth}px`,
			});
		}

		if (index + 1 == liEls.length) {
			reachedEnd = true;
		} else {
			reachedEnd = false;
		}
	});
});

//切換TAB
$(function () {

	//建立請求設定
	$.ajax({
		//發送資料請求之前
		beforeSend: function (xhr) {
			//若支援此特性
			if (xhr.overrideMimeType) {
				//指定server須以json格式的資料回傳
				xhr.overrideMimeType("application/json")
			}
		}
	});

	//載入json資料
	function loadCardGroup() {
		$.getJSON(url)
			//成功擷取，就將資料存在變數中
			.done(function (data) {
				$cards = data;//將資料存在變數中

				console.log($tab);
				showCardGroup($tab);//顯示對應標籤的所有字卡
			})
			.fail(function () {
				//載入失敗
				$cardGroup.html('sorry...404');
			});
	};

	//顯示對應標籤的所有字卡
	function showCardGroup(tab) {
		//載入預設的字卡(tab預設為「正面」)
		$.map($cards[tab], function (item) {
			$cardGroup.append(
				'<input type="checkbox" id="' + item.id + '" name="' + item.name + '">' +
				'<label for="' + item.id + '" class="cardGroup-item d-flex custom-btn btn-13 js-btn-13">' +
				'<p class="cardGroup-item-ch">' + item.chName + '</p>' +
				'<p class="cardGroup-item-eg">' + item.enName + '</p>' +
				'</label>'
			)
			$.map($resultCardArray, function (i) {
				if (i.id === item.id) {
					$('#' + item.id).prop('checked', true);
				}
			});
		});
	}

	//將找到的Object丟(push)到$resultCardArray[]
	function addToResult(id) {
		if ($resultCardArray.length < 5) {
			//透過屬性值在陣列找Object
			function findName(cardObject) {
				return cardObject.id === id;//從陣列找id相同的物件
			}
			//Array.find()回傳一整包Object
			$resultCardArray.push($cards[$tab].find(findName));
			console.log($resultCardArray);
		}
		else {
			$('#exampleModalCenter').modal('toggle');
			$('#' + id).prop('checked', false);
		}
	}

	//將找到的Object從$resultCardArray[]移除(splice)
	function deleteFromResult(id) {

		//用id找$resultCardArray要移除的索引值
		//$.inArray() 找索引值
		//Array.find((function(item){return ...}),Array) 在陣列裡用屬性值找Object
		var $deleteIndex = $.inArray($resultCardArray.find(function (item) {
			return item.id === id;//Object 的id = 此時的id
		}), $resultCardArray);

		//splice(索引值,要移除幾個)
		$resultCardArray.splice($deleteIndex, 1);
		console.log($resultCardArray);
	}

	//顯示所有選取的字卡
	function showResult() {
		$resultGroup.empty();
		$.map($resultCardArray, function (item) {
			$resultGroup.append(
				'<div class= "resultGroup-item custom-btn btn-13 js-btn-13">'+
				'<input type="checkbox" id="' + item.id + '" name="' + item.name + '">' +
				'<label for="' + item.id + '">' +
				'<p class="resultGroup-item-ch">' + item.chName + '</p>' +
				'<p class="resultGroup-item-eg">' + item.enName + '</p>' +
				'</label>'+
				'</div>'
			)
		});
	}

	//顯示已選幾項
	function showCardCount() {
		var $countTxt = $('.js-countTxt');
		var $resultTxt = $('.js-resultTxt');
		if ($resultCardArray.length > 0) {
			$resultTxt.empty();
			$resultTxt.append(
				' <p>已選' + $resultCardArray.length + '項</p>' +
				' <i class="far fa-copy copyIcon js-copy data-toggle="tooltip" data-placement="bottom" title="複製""></i>'
			);
		}
		else {
			$countTxt.empty();
			$resultTxt.empty();
		}
	}

	//複製結果
	function CopyTextToClipboard(id) {
		var TextRange = document.createRange();
		TextRange.selectNode(document.getElementById(id));
		sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(TextRange);
		document.execCommand("copy");
		console.log('copy');
	}

	//載入json資料
	loadCardGroup();

	//選取字卡
	$cardGroup.on('click', 'input', function (e) {
		var $id = this.id;

		//字卡為選取狀態時
		if (this.checked) {
			addToResult($id);
			showResult();
		}
		//字卡取消選取時
		else {
			deleteFromResult($id);
			showResult();
		}
		showCardCount();
	});

	//tab panel 切換 card content
	$container.on('click', '.js-tabs li', function (e) {
		e.preventDefault();
		$tab = this.id;

		$cardGroup.empty();//清空前一次的tab data

		//JS生成 形容詞
		showCardGroup($tab);
		console.log($tab);
		
		//顯示 已選了幾項
		showCardCount();
	});

	$resultGroup.on('click', 'input', function (e) {
		$deleteID = this.id;
		deleteFromResult($deleteID);
		showResult();
	});

	//複製結果
	$container.on('click', '.js-resultTxt i', function (e) {
		CopyTextToClipboard('copyResult');
	});

});

// $(window).resize(function () {
// 	　location.reload();
// })
