//避免無限迴圈，可依據自己相片數量調整 To avoid infinite loops, you can adjust the maxIterations based on the number of your photos.
const maxIterations = 100000;

// 將目標字串定義為變數 Define the target strings as variables.
// 請更改為自己頁面的語言 Please change to the language string of your page.
const targetString1 = "詳細資料"; // Details
const targetString2 = "這個項目不占用帳戶儲存空間"; // This item doesn't take up storage in your Google Account.

// 開始 for 迴圈 Start the for loop.
for (let i = 0; i < maxIterations; i++) {
  // 暫停一段時間等待頁面更新 Pause for a while to wait for the page to update.
  await new Promise((resolve) => setTimeout(resolve, 200));

  // 檢查頁面是否包含目標字串 Check if the page contains the target string. 
  var count = 0
  while (!document.body.innerText.includes(targetString1)) { //重複檢查以免載入失敗 Double check to prevent loading failure.
	  await new Promise((resolve) => setTimeout(resolve, 50));
	  count = count + 1;
	  //console.log("w");
	  if(count>40){ //頁面卡住時回上一張照片 When the page is stuck, go back to previous photo
	      document.querySelector('.SxgK2b.OQEhnd').click();
		  //console.log("wait time out");
	  }
  }
  if (!document.body.innerText.includes(targetString2)) {
	alert("take up storage！");
	break; // 如果找不到目標字串，結束迴圈 If the target string is not found, end the loop.
  }

  // 點擊 "查看下一張相片" 按鈕 Click the "Next Photo" button.
  document.querySelector('.SxgK2b.Cwtbxf').click();
}
