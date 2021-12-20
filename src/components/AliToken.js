import React from "react";
import Translate, { translate } from "@docusaurus/Translate";

const AliToken = () => {
  const [src, setSrc] = React.useState("");
  const [token, setToken] = React.useState("");
  const [err, setErr] = React.useState("");
  return (
    <div>
      <button
        disabled={src !== ""}
        className="button button--secondary"
        onClick={() => {
          fetch(
            "https://proxy.nn.ci:15237/https://easy-token.cooluc.com/qr"
          ).then((resp) =>
            resp.json().then((res) => {
              if (!res.success) {
                setErr(JSON.stringify(res));
              }
              setSrc(
                `https://api.xhofe.top/qr/?size=200&text=${res.data.codeContent}`
              );
              const interval = setInterval(() => {
                fetch(
                  "https://proxy.nn.ci:15237/https://easy-token.cooluc.com/ck",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      ck: res.data.ck,
                      t: res.data.t,
                    }),
                  }
                ).then((resp) =>
                  resp.json().then((res) => {
                    const result = res.pds_login_result;
                    if (result.refreshToken) {
                      setToken(result.refreshToken);
                      clearInterval(interval);
                    } else if (result !== "fail") {
                      setErr(JSON.stringify(res));
                      clearInterval(interval);
                    }
                  })
                );
              }, 2000);
            })
          );
        }}
      >
        <Translate>
          {src ? "Use AliyunDrive APP to scan" : "Get Token"}
        </Translate>
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
    </div>
  );
};

export default AliToken;
