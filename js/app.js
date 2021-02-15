Vue.component("resultGroup-component",{
    props:["result"],
    template:"#resultCcomponentTemplate"
})


var app = new Vue({
    el:"#app",
    data:{
        isShow:false,
        cardList: [
            {
                "id": "pos-1",
                "name": "positive",
                "chName": "穩定的",
                "enName": "Stable"
            },
            {
                "id": "pos-2",
                "name": "positive",
                "chName": "自信的",
                "enName": "Confident"
            },
            {
                "id": "pos-3",
                "name": "positive",
                "chName": "有創意的",
                "enName": "Creative"
            },
            {
                "id": "pos-4",
                "name": "positive",
                "chName": "友善的",
                "enName": "Friendly"
            },
            {
                "id": "pos-5",
                "name": "positive",
                "chName": "舒服的",
                "enName": "Comfortable"
            },
            {
                "id": "pos-6",
                "name": "positive",
                "chName": "新鮮的",
                "enName": "Fresh"
            },
            {
                "id": "pos-7",
                "name": "positive",
                "chName": "靈活的",
                "enName": "Flexible"
            },
            {
                "id": "pos-8",
                "name": "positive",
                "chName": "有趣的",
                "enName": "Fun"
            },
            {
                "id": "pos-9",
                "name": "positive",
                "chName": "協同合作的",
                "enName": "Collaborative"
            },
            {
                "id": "pos-10",
                "name": "positive",
                "chName": "值得信賴的",
                "enName": "Trustworthy"
            },
            {
                "id": "pos-11",
                "name": "positive",
                "chName": "有說服力的",
                "enName": "Compelling"
            },
            {
                "id": "pos-12",
                "name": "positive",
                "chName": "必要的",
                "enName": "Essential"
            },
            {
                "id": "pos-13",
                "name": "positive",
                "chName": "方便的",
                "enName": "Convenient"
            },
            {
                "id": "pos-14",
                "name": "positive",
                "chName": "相關的",
                "enName": "Relevant"
            },
            {
                "id": "pos-15",
                "name": "positive",
                "chName": "啟發性的",
                "enName": "Stimulating"
            },
            {
                "id": "pos-16",
                "name": "positive",
                "chName": "最先進的",
                "enName": "Cutting edge"
            },
            {
                "id": "pos-17",
                "name": "positive",
                "chName": "實用的",
                "enName": "Useful"
            },
            {
                "id": "pos-18",
                "name": "positive",
                "chName": "有效的",
                "enName": "Effective"
            },
            {
                "id": "pos-19",
                "name": "positive",
                "chName": "快速的",
                "enName": "Fast"
            },
            {
                "id": "pos-20",
                "name": "positive",
                "chName": "有組織的",
                "enName": "Organized"
            },
            {
                "id": "pos-21",
                "name": "positive",
                "chName": "反應敏捷的",
                "enName": "Responsive"
            },
            {
                "id": "pos-22",
                "name": "positive",
                "chName": "熟悉的",
                "enName": "Familiar"
            },
            {
                "id": "pos-23",
                "name": "positive",
                "chName": "可靠的",
                "enName": "Reliable"
            },
            {
                "id": "pos-24",
                "name": "positive",
                "chName": "整合的",
                "enName": "Integrated"
            },
            {
                "id": "pos-25",
                "name": "positive",
                "chName": "有意義的",
                "enName": "Meaningful"
            },
            {
                "id": "pos-26",
                "name": "positive",
                "chName": "可自訂的",
                "enName": "Customizable"
            },
            {
                "id": "pos-27",
                "name": "positive",
                "chName": "鼓舞人心的",
                "enName": "Inspiring"
            },
            {
                "id": "pos-28",
                "name": "positive",
                "chName": "激勵人的",
                "enName": "Motivating"
            },
            {
                "id": "pos-29",
                "name": "positive",
                "chName": "誘人的",
                "enName": "Inviting"
            },
            {
                "id": "pos-30",
                "name": "positive",
                "chName": "省時的",
                "enName": "Time-Saving"
            },
            {
                "id": "pos-31",
                "name": "positive",
                "chName": "平易近人的",
                "enName": "Approachable"
            },
            {
                "id": "pos-32",
                "name": "positive",
                "chName": "高品質的",
                "enName": "High Quality"
            },
            {
                "id": "pos-33",
                "name": "positive",
                "chName": "專業的",
                "enName": "Professional"
            },
            {
                "id": "pos-34",
                "name": "positive",
                "chName": "全面的",
                "enName": "Comprehensive"
            },
            {
                "id": "pos-35",
                "name": "positive",
                "chName": "直覺的",
                "enName": "Intuitive"
            },
            {
                "id": "pos-36",
                "name": "positive",
                "chName": "可理解的",
                "enName": "Understandable"
            },
            {
                "id": "pos-37",
                "name": "positive",
                "chName": "吸引人的",
                "enName": "Appealing"
            },
            {
                "id": "pos-38",
                "name": "positive",
                "chName": "有魅力的",
                "enName": "Attractive"
            },
            {
                "id": "pos-39",
                "name": "positive",
                "chName": "清楚的",
                "enName": "Clear"
            },
            {
                "id": "pos-40",
                "name": "positive",
                "chName": "進階的",
                "enName": "Advanced"
            },
            {
                "id": "pos-41",
                "name": "positive",
                "chName": "可用的",
                "enName": "Usable"
            },
            {
                "id": "pos-42",
                "name": "positive",
                "chName": "一致的",
                "enName": "Consistent"
            },
            {
                "id": "pos-43",
                "name": "positive",
                "chName": "有價值的",
                "enName": "Valuable"
            },
            {
                "id": "pos-44",
                "name": "positive",
                "chName": "直率的",
                "enName": "Straight Forward"
            },
            {
                "id": "pos-45",
                "name": "positive",
                "chName": "有幫助的",
                "enName": "Helpful"
            },
            {
                "id": "pos-46",
                "name": "positive",
                "chName": "易懂的",
                "enName": "Accessible"
            },
            {
                "id": "pos-47",
                "name": "positive",
                "chName": "有效率的",
                "enName": "Business-like"
            },
            {
                "id": "pos-48",
                "name": "positive",
                "chName": "預期的",
                "enName": "Expected"
            },
            {
                "id": "pos-49",
                "name": "positive",
                "chName": "兼容的",
                "enName": "Compatible"
            },
            {
                "id": "pos-50",
                "name": "positive",
                "chName": "關聯的",
                "enName": "Connected"
            },
            {
                "id": "pos-51",
                "name": "positive",
                "chName": "安全的",
                "enName": "Secure"
            },
            {
                "id": "pos-52",
                "name": "positive",
                "chName": "理想的",
                "enName": "Desirable"
            },
            {
                "id": "pos-53",
                "name": "positive",
                "chName": "精力充沛的",
                "enName": "Energetic"
            },
            {
                "id": "pos-54",
                "name": "positive",
                "chName": "熱衷的",
                "enName": "Enthusiastic"
            },
            {
                "id": "pos-55",
                "name": "positive",
                "chName": "易用的",
                "enName": "Easy to use"
            },
            {
                "id": "pos-56",
                "name": "positive",
                "chName": "滿意的",
                "enName": "Satisfying"
            },
            {
                "id": "pos-57",
                "name": "positive",
                "chName": "可預測的",
                "enName": "Predictable"
            },
            {
                "id": "pos-58",
                "name": "positive",
                "chName": "新穎的",
                "enName": "Novel"
            },
            {
                "id": "pos-59",
                "name": "positive",
                "chName": "高效率的",
                "enName": "Efficient"
            },
            {
                "id": "pos-60",
                "name": "positive",
                "chName": "有力的",
                "enName": "Powerful"
            },
            {
                "id": "pos-61",
                "name": "positive",
                "chName": "簡單化的",
                "enName": "Simplistic"
            },
            {
                "id": "pos-62",
                "name": "positive",
                "chName": "不費力的",
                "enName": "Effortless"
            },
            {
                "id": "pos-63",
                "name": "positive",
                "chName": "令人興奮的",
                "enName": "Exciting"
            },
            {
                "id": "pos-64",
                "name": "positive",
                "chName": "卓越的",
                "enName": "Exceptional"
            },
            {
                "id": "pos-65",
                "name": "positive",
                "chName": "創新的",
                "enName": "Innovative"
            },
            {
                "id": "pos-66",
                "name": "positive",
                "chName": "老練的",
                "enName": "Sophisticated"
            },
            {
                "id": "pos-67",
                "name": "positive",
                "chName": "迷人的",
                "enName": "Engaging"
            },
            {
                "id": "pos-68",
                "name": "positive",
                "chName": "印象深刻的",
                "enName": "Impressive"
            },
            {
                "id": "pos-69",
                "name": "positive",
                "chName": "乾淨的",
                "enName": "Clean"
            },
            {
                "id": "pos-70",
                "name": "positive",
                "chName": "樂觀的",
                "enName": "Optimistic"
            },
            {
                "id": "pos-71",
                "name": "positive",
                "chName": "授權的",
                "enName": "Empowering"
            },
            {
                "id": "pos-72",
                "name": "positive",
                "chName": "使人愉快的",
                "enName": "Entertaining"
            },
            {
                "id": "neu-1",
                "name": "neutral",
                "chName": "平靜的",
                "enName": "Calm"
            },
            {
                "id": "neu-2",
                "name": "neutral",
                "chName": "可控制的",
                "enName": "Controllable"
            },
            {
                "id": "neu-3",
                "name": "neutral",
                "chName": "普通的",
                "enName": "Ordinary"
            },
            {
                "id": "neu-4",
                "name": "neutral",
                "chName": "非傳統的",
                "enName": "Unconventional"
            },
            {
                "id": "neu-5",
                "name": "neutral",
                "chName": "個人的",
                "enName": "Personal"
            },
            {
                "id": "neu-6",
                "name": "neutral",
                "chName": "壓倒性的",
                "enName": "Overwhelming"
            },
            {
                "id": "neg-1",
                "name": "negative",
                "chName": "煩人的",
                "enName": "Annoying"
            },
            {
                "id": "neg-2",
                "name": "negative",
                "chName": "分心的",
                "enName": "Distracting"
            },
            {
                "id": "neg-3",
                "name": "negative",
                "chName": "乏味的",
                "enName": "Dull"
            },
            {
                "id": "neg-4",
                "name": "negative",
                "chName": "未精煉的",
                "enName": "Unrefined"
            },
            {
                "id": "neg-5",
                "name": "negative",
                "chName": "嚇人的",
                "enName": "Intimidating"
            },
            {
                "id": "neg-6",
                "name": "negative",
                "chName": "無趣的",
                "enName": "Boring"
            },
            {
                "id": "neg-7",
                "name": "negative",
                "chName": "令人沮喪的",
                "enName": "Frustrating"
            },
            {
                "id": "neg-8",
                "name": "negative",
                "chName": "無效的",
                "enName": "Ineffective"
            },
            {
                "id": "neg-9",
                "name": "negative",
                "chName": "脆弱的",
                "enName": "Fragile"
            },
            {
                "id": "neg-10",
                "name": "negative",
                "chName": "複雜的",
                "enName": "Complex"
            },
            {
                "id": "neg-11",
                "name": "negative",
                "chName": "耗時的",
                "enName": "Time-consuming"
            },
            {
                "id": "neg-12",
                "name": "negative",
                "chName": "無法理解的",
                "enName": "Incomprehensible"
            },
            {
                "id": "neg-13",
                "name": "negative",
                "chName": "壓力大的",
                "enName": "Stressful"
            },
            {
                "id": "neg-14",
                "name": "negative",
                "chName": "緩慢的",
                "enName": "Slow"
            },
            {
                "id": "neg-15",
                "name": "negative",
                "chName": "過於專業的",
                "enName": "Too Technical"
            },
            {
                "id": "neg-16",
                "name": "negative",
                "chName": "破壞性的",
                "enName": "Disruptive"
            },
            {
                "id": "neg-17",
                "name": "negative",
                "chName": "困難的",
                "enName": "Difficult"
            },
            {
                "id": "neg-18",
                "name": "negative",
                "chName": "沒有魅力的",
                "enName": "Unattractive"
            },
            {
                "id": "neg-19",
                "name": "negative",
                "chName": "無關聯的",
                "enName": "Disconnected"
            },
            {
                "id": "neg-20",
                "name": "negative",
                "chName": "困惑的",
                "enName": "Confusing"
            },
            {
                "id": "neg-21",
                "name": "negative",
                "chName": "死板的",
                "enName": "Rigid"
            },
            {
                "id": "neg-22",
                "name": "negative",
                "chName": "難用的",
                "enName": "Hard to use"
            },
            {
                "id": "neg-23",
                "name": "negative",
                "chName": "劣質的",
                "enName": "Poor Quality"
            },
            {
                "id": "neg-24",
                "name": "negative",
                "chName": "老舊的",
                "enName": "Old"
            },
            {
                "id": "neg-25",
                "name": "negative",
                "chName": "了無新意的",
                "enName": "Sterile"
            },
            {
                "id": "neg-26",
                "name": "negative",
                "chName": "不近人情的",
                "enName": "Impersonal"
            },
            {
                "id": "neg-27",
                "name": "negative",
                "chName": "不一致的",
                "enName": "Inconsistent"
            },
            {
                "id": "neg-28",
                "name": "negative",
                "chName": "難以接近的",
                "enName": "Unapproachable"
            },
            {
                "id": "neg-29",
                "name": "negative",
                "chName": "無法控制的",
                "enName": "Uncontrollable"
            },
            {
                "id": "neg-30",
                "name": "negative",
                "chName": "忙碌的",
                "enName": "Busy"
            },
            {
                "id": "neg-31",
                "name": "negative",
                "chName": "無關緊要的",
                "enName": "Irrelevant"
            },
            {
                "id": "neg-32",
                "name": "negative",
                "chName": "不可預測的",
                "enName": "Unpredictable"
            },
            {
                "id": "neg-33",
                "name": "negative",
                "chName": "傲慢的",
                "enName": "Overbearing"
            },
            {
                "id": "neg-34",
                "name": "negative",
                "chName": "妨礙的",
                "enName": "Gets in the way"
            },
            {
                "id": "neg-35",
                "name": "negative",
                "chName": "不安全的",
                "enName": "Not Secure"
            },
            {
                "id": "neg-36",
                "name": "negative",
                "chName": "過時的",
                "enName": "Dated"
            },
            {
                "id": "neg-37",
                "name": "negative",
                "chName": "不理想的",
                "enName": "Undesirable"
            },
            {
                "id": "neg-38",
                "name": "negative",
                "chName": "無價值的",
                "enName": "Not Valuable"
            },
            {
                "id": "neg-39",
                "name": "negative",
                "chName": "低維護度的",
                "enName": "Low Maintenance"
            },
            {
                "id": "neg-40",
                "name": "negative",
                "chName": "自命清高的",
                "enName": "Patronizing"
            }
        ],
        resultList:[]
    },
    methods:{
        deleteItem:function(item){
            for (let i = 0;i<this.resultList.length;i++){
                if(this.resultList[i]===item){
                    this.resultList.splice(i,1);
                }
            }
        },
        //複製結果
        CopyTextToClipboard(id) {
		    var TextRange = document.createRange();
		    TextRange.selectNode(document.getElementById(id));
		    sel = window.getSelection();
		    sel.removeAllRanges();
		    sel.addRange(TextRange);
		    document.execCommand("copy");
		    console.log('copy');
	    }
    },
    watch:{
        //監聽綁定在checkbox上的v-model(resultList)
        resultList:function(newVal){
            // console.log('changed', newVal)
            if(this.resultList.length>0) {
                this.isShow = true;
                // if(this.resultList.length>5){
                // }
            } else {
                this.isShow = false;
            }
        }
    }
})