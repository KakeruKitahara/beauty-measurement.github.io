import Button from "react-bootstrap/Button";
import styles from "../../styles/guideline.module.scss";
import Router from "next/router";
import { rest_num , rest_time } from "../components/morphing";
import Json from "../path_txt.json";


export default () => {
  const face_num = Json.length;
  const handleClick = () => {
    Router.push("./measure");
  };

  return (
    <div className={styles.wrap}>
      <h2>本研究に対する規約</h2>
      <p>
        今から顔表情の動画を見て、その動画に対する自然性についてのアンケートに答えてもらいます。本研究に対する自然性の定義ついては最後に説明しますのでそちらを読んでください。以下は実験に対する注意事項です。大事なことが書いてありますので
        <span className={styles.bold}>全て必ずお読みください。</span>
      </p>
      <h3>注意事項</h3>
      <ul>
        <li>
          顔表情動画は1つが5秒ほどと短い動画となりますが、全部で{face_num}
          個の動画を見ることとなります。{rest_num}
          回ごとに休憩時間を入れますが、
          <span className={styles.bold}>
            長時間の実験になるので実験開始の際には長時間の確保をお願い致します。
          </span>
          （推定時間 1時間～3時間）
        </li>
        <li>
          休憩についてですが、少なくとも{rest_time}
          分は取ってください。また分けて別日に実施しても構いませんが、リロードすると最初からになるので注意してください。
        </li>
        <li>
          戻るをクリックしないでください。した場合は最初からもう一度していただく必要があります。
        </li>
        <li>
          上記の通り、
          <span className={styles.bold}>
            このアンケートにはセーブ機能がありませんので注意してください。
          </span>
        </li>
        <li>
          アンケートは選択課題と自由筆記課題があります。選択課題では動画が自然かどうかを5段階で評価してもらいます。自由筆記課題では、もし対象の動画が不自然だった場合、どの部分が不自然だったか記入してもらいます。自由筆記課題は任意ですが、選択課題は必須です。自由筆記課題は不自然さが印象に残った動画に対してのみおこなっていただければ構いません。
        </li>
        <li>
          <span className={styles.bold}>
            アンケートはできるだけすぐに決めてください。感覚で答えてください。
          </span>
          熟考しないでください。
        </li>
        <li>他の被験者と内容を共有しないでください。ネタバレは禁止です。</li>
        <li>
          すべて答え終わるとテキストが表示されます。それをコピーして自分に送ってください。それで実験はすべて終了となります。
        </li>
      </ul>
      <h3>自然性について</h3>
      <p>本研究では自然性について以下のように定めます。</p>
      <div className={styles.defnition}>
        自然性とは自分の記憶している顔表情と比べておかしい箇所がないこと。ありのままであること。
      </div>
      <p>
        以上のことで質問がありましたら、細かいことでも構いませんので随時自分に連絡ください。以上を理解しましたら、これから下のボタンを押して実験を開始してください。
      </p>
      <div className={styles.button_wrapper}>
        <Button
          variant="primary"
          onClick={handleClick}
          className={styles.button}
        >
          実験を始める
        </Button>
      </div>
    </div>
  );
};
