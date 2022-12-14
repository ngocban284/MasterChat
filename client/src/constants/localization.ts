interface TextList {
  inputNickName: string;
  nicknameError: string;
  selectLanguage: string;
  langCode: string;
  enterRoom: string;
  createRoom: string;
  enterCode: string;
  submitCode: string;
  wrongCode: string;
  copyCode: string;
  userList: string;
  inputText: string;
  translationText: string;
  translationErrorText: string;
  enterText: string;
  leaveText: string;
  tokenErrorText: string;
  AM: string;
  PM: string;
}

interface TextObj {
  [key: string]: TextList;
}

const textList: TextObj = {
  en: {
    inputNickName: 'Enter Nickname',
    nicknameError: 'Nickname must be between 1 and 10 characters',
    selectLanguage: 'Select Language',
    langCode: 'A',
    enterRoom: 'Enter Chat Room',
    createRoom: 'Create Chat Room',
    enterCode: 'Please enter 6 digits of the participating code',
    submitCode: 'Enter',
    wrongCode: 'Invalid room code ๐',
    copyCode: 'The code has been copied!',
    userList: 'User List',
    translationText: 'The translated message is printed',
    translationErrorText: 'Translation failed',
    inputText: 'Please enter a chat',
    enterText: ' is here',
    leaveText: ' left the chat room',
    tokenErrorText: 'You don`t have a token! Go back to the main page ๐ฅ',
    AM: 'AM',
    PM: 'PM',
  },
  ja: {
    inputNickName: 'ใใใฏใใผใ  ๅฅๅ',
    nicknameError: 'ใใใฏใใผใ ใฏ1~12ๅญใฎ้ใงใชใใใฐใชใใพใใ',
    selectLanguage: '่จ่ช้ธๆ',
    langCode: 'ใ',
    enterRoom: 'ไผ่ฉฑใซๅๅ ใใ',
    createRoom: 'ใใผใฏใซใผใ ไฝๆ',
    enterCode: 'ๅๅ ใณใผใ(6ๆกๆฐๅญ)ใๅฅๅใใฆใใ ใใ',
    submitCode: 'ๅๅ ',
    wrongCode: '้้ใฃใใซใผใ ใณใผใใงใ ๐',
    copyCode: 'ใณใผใใใณใใผใใใพใใ!',
    userList: 'ใกใณใใผ',
    translationText: '็ฟป่จณใกใใปใผใธใๅบๅใใใพใ',
    translationErrorText: '็ฟป่จณใซๅคฑๆใใพใใ',
    inputText: 'ใใฃใใใๅฅๅใใฆใใ ใใ',
    enterText: ' ใใใใใฃใใใซใผใ ใซๅฅๅ ดใใพใใ',
    leaveText: ' ใใใใใฃใใใซใผใ ใใๅบใพใใ',
    tokenErrorText: 'ใใผใฏใณใใใใพใใ๏ผ ใกใคใณใใผใธใซๆปใใพใ ๐ฅ',
    AM: 'ๅๅ',
    PM: 'ๅๅพ',
  },
  vi: {
    inputNickName: 'Nhแบญp biแปt hiแปu',
    nicknameError: 'Biแปt hiแปu phแบฃi cรณ tแปซ 1 ฤแบฟn 10 kรฝ tแปฑ',
    selectLanguage: 'Chแปn Ngรดn ngแปฏ',
    langCode: 'VN',
    enterRoom: 'Nhแบญp Chat Room',
    createRoom: 'Tแบกo Chat Room',
    enterCode: 'Vui lรฒng nhแบญp 6 chแปฏ sแป cแปงa mรฃ tham gia',
    submitCode: 'Enter',
    wrongCode: 'Mรฃ phรฒng khรดng hแปฃp lแป ๐',
    copyCode: 'Mรฃ ฤรฃ ฤฦฐแปฃc sao chรฉp!',
    userList: 'Danh sรกch ngฦฐแปi dรนng',
    translationText: 'Tin nhแบฏn ฤฦฐแปฃc dแปch',
    translationErrorText: 'Dแปch khรดng thร nh cรดng',
    inputText: 'Nhแบญp ฤoแบกn trรฒ chuyแปn',
    enterText: 'Tแบกi ฤรขy',
    leaveText: 'Rแปi khแปi phรฒng trรฒ chuyแปn',
    tokenErrorText: 'Bแบกn khรดng cรณ mรฃ thรดng bรกo! Quay lแบกi trang chรญnh ๐ฅ',
    AM: 'SA',
    PM: 'CH',
  },
  ko: {
    inputNickName: '๋๋ค์ ์๋ ฅ',
    nicknameError: '๋๋ค์์ 1~12์ ์ฌ์ด์ฌ์ผ ํฉ๋๋ค',
    selectLanguage: '์ธ์ด ์ ํ',
    langCode: 'ํ',
    enterRoom: '๋ํ ์ฐธ์ฌํ๊ธฐ',
    createRoom: '๋ฐฉ ๋ง๋ค๊ธฐ',
    enterCode: '์ฐธ์ฌ ์ฝ๋(6์๋ฆฌ์ ์ซ์)๋ฅผ ์๋ ฅํด์ฃผ์ธ์',
    submitCode: '์์ฅ',
    wrongCode: '์๋ชป๋ ๋ฐฉ์ฝ๋์๋๋ค ๐',
    copyCode: '์ฝ๋๊ฐ ๋ณต์ฌ๋์์ต๋๋ค!',
    userList: '๋ํ ์๋',
    translationText: '๋ฒ์ญ๋ ๋ฉ์ธ์ง๊ฐ ์ถ๋ ฅ๋ฉ๋๋ค',
    translationErrorText: '๋ฒ์ญ์ ์คํจํ์ต๋๋ค',
    inputText: '์ฑํ์ ์๋ ฅํด์ฃผ์ธ์',
    enterText: '๋์ด ๋ค์ด์์ต๋๋ค',
    leaveText: '๋์ด ๋๊ฐ์ต๋๋ค',
    tokenErrorText: 'ํ ํฐ์ด ์์ด์! ๋ฉ์ธํ์ด์ง๋ก ๋์๊ฐ๋๋ค ๐ฅ',
    AM: '์ค์ ',
    PM: '์คํ',
  },
  'zh-CN': {
    inputNickName: '่พๅฅๆต็งฐ',
    nicknameError: 'ๆต็งฐๅฟ้กปไปไบ1ๅฐ12ไธชๅญ็ฌฆไน้ด',
    selectLanguage: '่ฏญ่จ้ๆฉ',
    langCode: 'ๆ',
    enterRoom: 'ๅ ๅฅ่ๅคฉๅฎค',
    createRoom: 'ๅๅปบ่ๅคฉๅฎค',
    enterCode: '่ฏท่พๅฅๅๅ ไปฃ็ ๏ผ6ไฝๆฐๅญ๏ผ',
    submitCode: 'ๅไธๅบฆ',
    wrongCode: 'ๆฏ้่ฏฏ็ๆฟ้ดไปฃ็  ๐',
    copyCode: 'ไปฃ็ ่ขซๅคๅถไบ!',
    userList: 'ๅๅ ่ๅๅ',
    translationText: 'ไผๆๅฐ็ฟป่ฏๅฅฝ็ไฟกๆฏ',
    translationErrorText: '็ฟป่ฏๅคฑ่ดฅไบ',
    inputText: '่ฏท่พๅฅๆจ็่ๅคฉๅๅฎน',
    enterText: ' ่ฟๅฅ่ๅคฉๅฎคไบ',
    leaveText: ' ไป่ๅคฉๅฎคๅบๅปไบ',
    tokenErrorText: 'ๆฒกๆไปฃๅธ็๏ผ ๅๅฐไธป้กต ๐ฅ',
    AM: 'ไธๅ',
    PM: 'ไธๅ',
  },
};

const getText = (lang: string): TextList => {
  return textList[lang];
};

export { getText };
export type { TextList };
