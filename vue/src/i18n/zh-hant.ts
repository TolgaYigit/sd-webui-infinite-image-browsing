import type { IIBI18nMap } from '.'

export const zhHant: Partial<IIBI18nMap> = {
  syncHistoryToLocal: '同步歷史到本地',
  showCommaInGenInfoPanel: '在生成信息面板中顯示逗號',
  walkModeAutoRefreshDisabled: 'Walk模式下自動刷新已停用',
  disable: '停用',
  autoRefresh: '自動刷新',
  autoRefreshNormalFixedMode: '啟用自動刷新 (Normal/Fixed模式)',
  autoRefreshWalkMode: '啟用自動刷新 (Walk模式)',
  autoRefreshWalkModePosLimit: 'Walk模式下觸發自動刷新的位置極限',
  pollInterval: '輪詢間隔',
  pollRefresh: '輪詢刷新',
  stopPollRefresh: '停止輪詢刷新',
  pollRefreshTip: '默認情況下你從其他TAB返回IIB時或者IIB的可見性發生改變時IIB都會自動刷新。這個功能是為了讓你一直呆在IIB內時他也能自動刷新，請慎重使用',
  restoreLastWorkspaceStateSuccess: '成功恢復上次工作區狀態',
  restoreWorkspaceSnapshotSuccess: '成功恢復工作區快照',
  openOnAppStart: '啟動時打開',
  confirmThisAction: '確認這個操作？',
  WorkspaceSnapshotDesc: `使用工作區快照功能你可以保存當前工作區的狀態，以便下次打開IIB時快速恢復到當前狀態。
你可以在全局設置頁面中指定啟動IIB時恢復到哪一個快照，或者恢復到最後關閉前的工作區狀態。`,
  WorkspaceSnapshot: '工作區快照',
  restoreLastWorkspaceState: '恢復上次工作區狀態',
  restoreWorkspaceSnapshot: '恢復工作區快照: {0}',
  saveWorkspaceSnapshot: '保存工作區快照',
  save: '保存',
  name: '名稱',
  nameRequired: '名稱不能為空',
  saveCompleted: '保存完成',
  openThisAppInNewWindow: '在新窗口打開本應用',
  readonly: '只讀',
  accessLimited: '訪問受限',
  selectFolder: '選擇文件夾',
  openFileLocationInNewTab: '在新標籤頁打開文件位置',
  copyTo: '複製到',
  moveTo: '移動到',
  moveSuccess: '移動成功',
  copySuccess: '複製成功',
  copyFilePath: '複製文件路徑',
  
  previewMaskBackgroundOpacity: '預覽遮罩背景透明度',
  experimentalLRLayout: '實驗性並列布局',
  width: '寬度',
  alwaysOnTooltipInfo: '若關閉此項，信息面板將收起，直至滑鼠移動至屏幕右側時才打開',
  alwaysOn: '常駐',
  time: '時間',
  pin: '置頂',
  unpin: '取消置頂',
  restore: '還原',
  restoreFromHistory: '從歷史記錄中恢復',
  history: '歷史記錄',
  historyRecordsSubstr: '輸入值',
  historyRecordsisRegex: '是否正則',
  walkModeDoc: '無需翻頁即可瀏覽指定資料夾下的所有檔案，使用無限捲動的方式呈現。將會使用 DFS 的方式遍歷所有檔案. 注意:該模式下排序僅在同層之間進行',
  normalModelDoc: '類似於 Windows 的檔案瀏覽器，擁有較高的靈活性. 但在訪問雲端儲存或者類似 SMB 這樣的地方時可能會出現異常',
  fixedModeDoc: '類似 Normal 模式，但頁面初始速度更快，相容性更好，靈活性稍差。在 Normal 模式下出現了異常的話都可以改用這個試試',
  type: '類型',
  filterByKeyword: '輸入標籤關鍵詞過濾',
  loadmore: '載入更多',
  rename: '重命名',
  inputAlias: '輸入別名',
  addAliasCompleted: '添加別名完成',
  alias: '別名',
  showChangeIndicators: '顯示變更指示器',
  seedAsChange: '將Seed也進行比較',
  defaultShowChangeIndicators: '預設顯示變更指示器',
  defaultSeedAsChange: '預設將Seed也進行比較',
  exit: '退出',
  'select-all': '全選',
  'rerverse-select': '反選',
  'clear-all-selected': '清除所有選擇',
  'keep-multi-selected': '保留多選',
  'Source Identifier': '來源',
  openWithDefaultApp: '使用預設應用程式開啟',
  saveSelectedAsJson: '儲存選取的圖像資訊',
  saveAllAsJson: '儲存所有圖像資訊',
  saveLoadedImageAsJson: '儲存已載入的圖像資訊',
  scrollDownToComparePrompt: '向下滾查看Prompt比較',
  sourceText: '源文本',
  structuredData: '結構化數據',
  searchScope: '搜尋範圍',
  specifiedSearchFolder: '指定搜尋的資料夾，使用逗號或換行分割多個',
  batchAddTag: '批量添加Tag',
  batchRemoveTag: '批量移除Tag',
  errorOccurred: '發生了個錯誤',
  useThumbnailPreview: '使用縮圖預覽',
  gridThumbnailWidth: '網格縮圖寬度',
  start: '開始',
  tip: '提示',
  sortByDateAscending: '修改日期昇序',
  sortByDateDescending: '修改日期降序',
  sortByCreatedDateAscending: '創建日期昇序',
  sortByCreatedDateDescending: '創建日期降序',
  sortByNameAscending: '名稱昇序',
  sortByNameDescending: '名稱降序',
  sortBySizeAscending: '大小昇序',
  sortBySizeDescending: '大小降序',
  inputAddressAndPressEnter: '輸入地址回車',
  go: '前往',
  unknownError: '未知錯誤',
  loadingNextFolder: '即將載入下一個文件夾的文件',
  moveFailedCheckPath: '移動失敗,檢查你的路徑輸入',
  detailList: '詳情列表',
  previewGrid: '預覽網格',
  moveSelectedFilesTo: '下列文件 移動 / 複製 至',
  confirm: '確定',
  download: '下載',
  local: '本地',
  sendImageFailed: '發送圖像失敗,請攜帶console的錯誤訊息找開發者',
  confirmDelete: '確認刪除?',
  deleteSuccess: '刪除成功',
  doubleClickToCopy: '雙擊複製',
  promptcompare: 'Compare Prompts',
  root: '根',
  drive: '磁碟',
  refresh: '重新整理',
  quickMove: '快速移動',
  more: '更多',
  viewMode: '檢視模式',
  sortingMethod: '排序方法',
  copyPath: '複製路徑',
  deleteSelected: '刪除',
  previewInNewWindow: '在新窗口預覽',
  copySourceFilePreviewLink: '複製源文件預覽連結',
  viewGenerationInfo: '檢視生成信息(提示等)',
  sendToTxt2img: '發送到文生圖',
  sendToImg2img: '發送到圖生圖',
  sendToInpaint: '發送到局部重繪',
  sendToControlNet: '發送到ControlNet',
  sendToBatchDownload: '發送到批量下載',
  sendToExtraFeatures: '發送到附加功能',
  loadNextPage: '載入下一頁',
  localFile: '本地檔案',
  globalSettings: '全域設定',
  welcome: '歡迎',
  openInNewWindow: '在新頁面打開',
  restoreLastRecord: '還原上次記錄',
  launch: '啟動',
  walkMode: '使用 Walk 模式瀏覽圖片',
  
  launchFromNormalAndFixed: '使用 Normal / Fixed 模式瀏覽圖片',
  recent: '最近',
  emptyStartPage: '空啟動頁',
  t2i: '文生圖',
  i2i: '圖生圖',
  saveButtonSavesTo: '儲存',
  extra: '附加',
  gridImage: '網格式圖',
  'i2i-grid': '圖生圖網格',
  image: '圖片',
  't2i-grid': '文生圖網格',
  workingFolder: '工作文件夾',
  lang: '語言',
  langChangeReload: '重新載入: 一些變化可能需要在重新載入後生效',
  openOnTheRight: '在右邊打開',
  openInNewTab: '在新分頁打開',
  openWithWalkMode: '使用 Walk 模式打開',
  longPressOpenContextMenu: '支持使用長按打開右鍵功能表',
  searchResults: '搜尋結果',
  imgSearch: '圖片搜尋',
  onlyFoldersAndImages: '只顯示文件夾/圖片/視頻',
  send2savedDir: '發送到儲存的文件夾',
  unknownSavedDir: '找不到儲存的文件夾(配置文件中的outdir_save欄位)',
  Model: '模型',
  Sampler: '採樣器',
  lora: 'LoRA',
  size: '尺寸',
  pos: '正面提示',
  generateIndexHint: '生成索引用於搜尋圖片',
  UpdateIndex: '更新索引',
  needGenerateIdx: '你需要先點擊按鈕生成索引用於搜尋圖片\n這個過程可能需要消耗幾分鐘',
  search: '搜尋',
  custom: '自定義',
  add: '新增',
  cancel: '取消',
  submit: '提交',
  existInOtherType: '已存在於其他類型',
  alreadyExists: '已存在',
  toggleTag: '切換標籤選中 (收藏)',
  addCompleted: '新增完成',
  removeCompleted: '移除完成',
  addedTagToImage: '已添加標籤 "{tag}" 到本圖片',
  removedTagFromImage: '已從本圖片上移除 "{tag}" 標籤',
  openContextMenu: '打開上下文功能表',
  copyPrompt: '複製提示',
  copyPositivePrompt: '複製正向提示',
  refreshCompleted: '重新整理完成',
  'walk-mode-move-message': '在walk模式下僅允許使用“快速移動”移動位置',
  manualExitFullScreen: '你刪除了最後一張圖片,也許需要你手動退出全螢幕檢視',
  copied: '已複製!',
  'index.expired': '索引過期,正在自動更新',
  'auto.refreshed': '自動重新整理完成!',
  exactMatch: '完全匹配',
  anyMatch: '匹配任意',
  exclude: '排除掉',
  selectExactMatchTag: '選擇完全匹配的 Tag。 您可以輸入部分字符進行搜索',
  selectAnyMatchTag: '可選,選擇匹配其中一個或多個的 Tag。 您可以輸入部分字符進行搜索',
  selectExcludeTag: '可選,選擇需要排除掉的 Tag。 您可以輸入部分字符進行搜索',
  faq: '常見問題',
  autoUpdate: '檢測到發生改變自動更新',
  'fuzzy-search': '模糊搜尋',
  'fuzzy-search-placeholder': '輸入圖片信息或者文件名的一部分來進行搜尋',
  'fuzzy-search-noResults': '什麼都沒找到',
  openWithLocalFileBrowser: '使用本地檔案瀏覽器打開',
  addToSearchScanPathAndQuickMove: '加入搜尋掃描路徑',
  removeFromSearchScanPathAndQuickMove: '從搜尋掃描路徑和快速移動中移除',
  serverKeyRequired: '伺服器配置了密鑰,你必须提供相同的密鑰才能繼續使用',
  shortcutKey: '快速鍵(僅允許在全螢幕檢視下使用)',
  shortcutKeyDescription: '點擊輸入框按下你想使用的按鍵,支持與Shift和Ctrl進行組合',
  fullscreenRestriction: '受技術限制,目前拓展不允許刪除打開全螢幕檢視時的首張圖片。',
  clear: '清除',
  toggleTagSelection: '切換 "{tag}" 標籤選中',
  changlog: '更新紀錄',
  accessControlModeTips:
    '為確保數據安全,您目前正以訪問控制模式運行,僅能訪問授權文件夾。您可以通過編輯本拓展根目錄的下.env文件來調整訪問權限設置 (IIB_ACCESS_CONTROL) .如果不存在.env文件, 你可以將.env.example文件複製並重命名為.env',
  dontShowAgain: '不再顯示',
  defaultSortingMethod: '默認排序方法',
  defaultViewMode: '默認檢視模式',
  showPreviewImage: '顯示預覽圖',
  copy: '複製',
  edit: '編輯',
  document: '文件',
  multiSelectTips: '您可以按住Shift、Ctrl或 Cmd鍵,然後單擊文件來進行多選刪除/移動操作',
  copyLocationUrlSuccessMsg: '複製完成,你可以通過複製的url直接打開目前文件夾',
  share: '分享',
  dragImageHere: '拖拽圖片到這裡',
  imgCompare: '圖片對比',
  close: '關閉',
  fullscreenview: '全屏查看',
  fileName: '文件名稱',
  resolution: '解析度',
  fileSize: '文件大小',
  selectAll: '全選',
  'tauriLaunchConf.readSdWebuiConfigTitle': '讀取Stable Diffusion Webui的配置',
  'tauriLaunchConf.readSdWebuiConfigDescription':
    '如果你已經安裝sd-webui,且在sd-webui內安裝了本拓展,推薦直接使用這個,將直接讀取配置並且數據共享',
  'tauriLaunchConf.selectSdWebuiFolder': '點擊選擇SD-webui的文件夾',
  'tauriLaunchConf.skipThisConfigTitle': '跳過本次配置',
  'tauriLaunchConf.skipThisConfigDescription': '所有功能仍將可用,你可以在設置頁重置',
  'tauriLaunchConf.skipButton': '跳過',
  'tauriLaunchConfMessages.configNotFound': '找不到對應配置,檢查選擇的文件夾是否正確',
  'tauriLaunchConfMessages.folderNotFound': '找不到對應文件夾,檢查選擇的文件夾是否正確',
  'tauriLaunchConfMessages.configCompletedMessage': '配置完成,即將重啟',
  'tauriLaunchConfMessages.firstTimeUserTitle': '看起來你好像是第一次使用,需要進行一些配置',
  inputTargetFolderPath: '輸入目標文件夾的絕對路徑',
  pathDoesNotExist: '路徑不存在',
  confirmToAddToExtraPath: '確定添加?如果文件夾過大將會消耗過多時間建立索引。',
  clientSpecificSettings: '客戶端特有的設置',
  initiateSoftwareStartupConfig: '初始化軟件啟動配置',
  gridCellWidth: '網格單元寬度 (px)',
  defaultGridCellWidth: '默認網格單元寬度 (px)',
  thumbnailResolution: '縮圖解析度 (px)',
  livePreview: '實時預覽',
  other: '其他',

  ImageBrowsingSettings: '圖片瀏覽設置',
  majorUpdateCustomCellSizeTips:
    '重大更新:你可以自定義網格圖像的大小了,在全域設置頁或者右上角的“更多”裡面進行調整',
  desktop: '桌面',
  move: '移動',
  inputFolderName: '輸入文件夾名稱',
  createFolder: '新增文件夾',
  sendToThirdPartyExtension: '發送到第三方拓展',
  lyco: 'LyCORIS',
  batchDownloaDDragAndDropHint:
    '使用拖拽或者右鍵功能表中的“發送到批量下載”將其他頁面的圖片添加到這裡,支持多選',
  zipDownload: '打包成zip下載',
  archive: '歸檔',
  batchDownload: '批量下載',
  remove: '移除',
  secretKeyRequiredWarnMsg:
    '為了安全考慮,你必須為本拓展單獨配置Secret Key,具體參考本拓展根目錄下的.env.example文件內的IIB_SECRET_KEY。   這項警告只會在配置了gradio-auth時出現',
  secretKeyMustBeConfigured: '必須配置Secret Key',
  deleteOneOnlySkipConfirm: '刪除單個文件時不進行確認',
  resetOnGlobalSettingsPage: '你可以在全域設置頁重置',
  privacyAndSecurity: '安全與隱私',
  dragToResizePanel: '按住並拖動來調整面板的大小',
  clickToToggleMaximizeMinimize: '單擊切換最大化/最小化',
  dragToMovePanel: '按住並拖動來移動面板',
  imageCompareTips: '拖拽文件時也會出現這個面板,可以不需要打開 “圖片對比” 功能',
  regexSearchEnabledHint: '（你也可以通過點擊右側的正則式圖標來啟用正則式搜索）',
  confirmRebuildImageIndex: '確認重建圖像索引？',
  rebuildImageIndex: '重新構建圖像索引',
  rebuildComplete: '重新構建完成',
  tagSearchNoResultsMessage: '看起來沒有匹配到任何結果，嘗試通過重新構建索引來去除無用的標籤？'
}
