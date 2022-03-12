import React, { useRef, useEffect } from "react";
import Translate, { translate } from "@docusaurus/Translate";

const AliToken = () => {
  const [src, setSrc] = React.useState("");
  const [token, setToken] = React.useState("");
  const [err, setErr] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Get Token");
  // 0->初始
  // 1->等待显示二维码
  // 2->等待扫码
  // 3->获取token
  const [state, setState] = React.useState(0);
  const getQr = () => {
    setButtonText("Waiting...");
    setState(1);
    fetch("https://tool.nn.ci/api/alidrive/qr2.ts").then((resp) =>
      resp.json().then((res) => {
        if (!res.success) {
          setErr(JSON.stringify(res));
          return;
        }
        setButtonText("Use AliyunDrive APP To Scan Then Click");
        setState(2);
        setSrc(
          `https://api.xhofe.top/qr/?size=200&text=${res.data.codeContent}`
        );
      })
    );
  };
  const getToken = () => {
    fetch("https://tool.nn.ci/api/alidrive/ck2.ts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ck: res.data.ck,
        t: res.data.t,
      }),
    }).then((resp) =>
      resp.json().then((res) => {
        const result = res.pds_login_result;
        if (result.refreshToken) {
          setState(3);
          setButtonText("Finish");
          setToken(result.refreshToken);
        }
      })
    );
  };
  return (
    <div>
      <button
        disabled={state === 3 || state === 1}
        className="button button--primary button--lg"
        onClick={() => {
          if (state === 0) {
            getQr();
          } else if (state === 2) {
            getToken();
          }
        }}
      >
        <Translate>{buttonText}</Translate>
      </button>
      <br />
      {src && (
        <div style={{ margin: "5px" }}>
          <img src={src} />
        </div>
      )}

      {token && (
        <div class="alert alert--success" role="alert">
          {/* <button aria-label="Close" class="clean-btn close" type="button">
            <span aria-hidden="true">copy</span>
          </button> */}
          RefreshToken: <strong>{token}</strong>
        </div>
      )}
      {err && (
        <div class="alert alert--danger" role="alert">
          <strong>Error: </strong>
          {err}
        </div>
      )}
      <div>
        <i>
          <Translate>API is hosted by vercel serverless</Translate>
        </i>
      </div>
    </div>
  );
};

export default AliToken;
