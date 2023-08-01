# Google-Photos-Space-Finder

## Description
The "Google-Photos-Space-Finder" is a JavaScript tool designed to help users identify and locate photos in their Google Photos library that are taking up storage space. By automating the process, the tool iterates through the user's photo collection and checks for specific target strings, such as "詳細資料" (Details) and "This item doesn't take up storage in your Google Account," which are indicative of photos occupying storage space.

The script utilizes the Google Photos web interface, simulating user actions to navigate through the library and pause periodically to ensure the page updates correctly. When a photo is found that takes up storage space, the tool displays an alert notifying the user of the discovery.

The "Google-Photos-Space-Finder" project offers a convenient way to identify storage-consuming photos, allowing users to manage their photo library efficiently and reclaim valuable storage space. With easy customization of target strings, the tool can be adapted to various languages and versions of Google Photos, making it accessible to a broader user base.


## Features
* Automates the process of finding photos occupying storage space in Google Photos.
* Customizable target strings to support multiple languages and versions of Google Photos.
* Simple and efficient tool to manage photo library and free up storage space.
* Open-source project available for contribution and enhancement.


## Tutorial:
###### Step 1: Customize Target Strings (Optional)
If your Google Photos interface is in a language other than English, you may need to customize the target strings to match the specific language. Open the script.js file and modify the targetString1 and targetString2 variables accordingly. Save the changes.

###### Step 2: Open Google Photos and Developer Console
Log in to your Google Photos account using your preferred web browser. Press Ctrl + Shift + J (Windows/Linux) or Cmd + Option + J (Mac) to open the Developer Console in your web browser.

###### Step 3: Copy and Paste the Script
Copy the entire content of the script.js file from the cloned repository and paste it into the Developer Console. Press Enter to execute the script. The tool will now start iterating through your Google Photos library, looking for photos that occupy storage space.

###### Step 4: Wait for the Results
The script will automatically click through your photos and pause periodically to ensure proper page updates. If a photo occupying storage space is found, an alert will pop up notifying you of the discovery.


## Caution and Responsiblity
Use the "Google-Photos-Space-Finder" tool responsibly and comply with Google's terms of service. Remember that you are responsible for any actions taken with the script. Exercise caution while using it to avoid unintended consequences.

## 描述
"Google-Photos-Space-Finder" 是一個 JavaScript 工具，旨在幫助用戶識別和找到佔用 Google 相簿儲存空間的照片。透過自動化的過程，這個工具會遍歷用戶的照片集合，檢查特定目標字串，例如 "詳細資料" 和 "這個項目不占用帳戶儲存空間"，這些字串指示著照片佔用儲存空間。

腳本利用 Google 相簿的網頁界面，模擬使用者操作來遍歷相簿，並定期暫停以確保頁面正確更新。當找到佔用儲存空間的照片時，工具會顯示警示，通知用戶有所發現。

"Google-Photos-Space-Finder" 專案提供了一個方便的方法來識別佔用儲存空間的照片，讓用戶有效管理相簿並取回寶貴的儲存空間。透過簡單的自定義目標字串，這個工具可以適應不同語言和 Google 相簿的不同版本，讓更多用戶能夠使用。


## 功能
* 自動尋找佔用 Google 相簿儲存空間的照片。
* 可自定義目標字串，支援多種語言和 Google 相簿版本。
* 簡單高效地管理相簿並釋放儲存空間。
* 開源專案，歡迎貢獻和增強功能。


## 使用教學:
###### 步驟 1: 自定義目標字串（選項）
如果你的 Google 相簿介面不是英語，可能需要自定義目標字串以適應特定語言。打開 script.js 文件，根據需要修改 targetString1 和 targetString2 變數，保存更改。

###### 步驟 2: 打開 Google 相簿和開發者控制台
使用你喜歡的瀏覽器登入 Google 相簿帳戶。按下 Ctrl + Shift + J (Windows/Linux) 或 Cmd + Option + J (Mac) 打開瀏覽器的開發者控制台。

###### 步驟 3: 複製並粘貼腳本
從複製的儲存庫中複製 script.js 文件的整個內容，並將其粘貼到開發者控制台。按 Enter 鍵執行腳本。現在，工具將開始遍歷 Google 相簿，尋找佔用儲存空間的照片。

###### 步驟 4: 等待結果
腳本會自動點擊照片，並定時暫停以確保頁面更新。如果找到佔用空間的照片，將彈出警示通知你。


## 注意事項和責任
請負責任地使用 "Google-Photos-Space-Finder" 工具，遵守 Google 的服務條款。請記住，您對腳本的使用負有責任。請謹慎使用，以避免意外後果。
