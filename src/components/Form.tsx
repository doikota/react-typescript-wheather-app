import React, { useState } from 'react';
import type { ResultState } from '../App';
import callWeatherApi from './Weather.tsx';

// Formコンポーネントのpropsの型を定義
interface FormProps {
  setResult : React.Dispatch<React.SetStateAction<ResultState>>
}

// APIを呼び出すためのラッパー関数、formリロード抑止とresultステートの設定も行う
async function getWeather(
  e : React.FormEvent<HTMLFormElement>,
  city : string | undefined,
  setResult : React.Dispatch<React.SetStateAction<ResultState>>,
) {
  // form内でボタンを押したときのリロードを防止する
  e.preventDefault();
  // cityパラメータを渡し、APIの結果を得る
  const res: ResultState = await callWeatherApi(city);
  console.info(`Weather returned: ${JSON.stringify(res)}`);
  setResult(res);
}

// Appとのデータの受け渡しはpropsを通じて行う
function Form(props : Readonly<FormProps>) {
  // cityはstate, setCityはstateのデータを操作する仕組み
  const [city, setCity] = useState<string>();
  // 予めsetResultを分割代入（airbnb推奨）
  const { setResult } = props;

  // onChangeでテキストボックスの値を文字列としてsetCityを通じてcityに渡す
  return (
    <form className="Form" onSubmit={(e) => getWeather(e, city, setResult)}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
          // 入力が完了して他の要素にフォーカスが移動した時
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">天気を取得</button>
      {/* return の中でJavaScriptのコードを書くときは{}で囲む */}
    </form>
  );
}

export default Form;
